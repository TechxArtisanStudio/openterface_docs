import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { sidebarSlugsForPage } from '../config/sidebar';
import { newsPath } from '../config/surface-urls';
import { DEFAULT_LOCALE, localizedPath, type SiteLocale } from './locale';

const LOCALE_SUFFIXES = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro'] as const;

/** MkDocs extra macros — keep in sync with archive/mkdocs/mkdocs.yml */
const MKDOCS_MACROS: Record<string, string> = {
  qt_version: '0.5.23',
  android_version: '1.2.2',
  macos_version: '2.1',
  qt_linux_stable: '0.3.19',
  copyright_year: '2026',
};

/** MkDocs config.extra purchase / external links */
const MKDOCS_EXTRA: Record<string, string> = {
  minikvm_purchase_link: 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm',
  kvmgo_purchase_link: 'https://www.crowdsupply.com/techxartisan/openterface-kvm-go',
  keymod_crowdsupply_link: 'https://www.crowdsupply.com/techxartisan/openterface-keymod',
};

const ARROW_PREV =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6"/></svg>';
const ARROW_NEXT =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6"/></svg>';

export type DocFrontmatter = {
  title?: string;
  description?: string;
  keywords?: string;
};

export type DocPage = {
  slug: string;
  locale: SiteLocale;
  href: string;
  sourcePath: string;
  frontmatter: DocFrontmatter;
  content: string;
  html: string;
  headings: DocHeading[];
};

export type DocHeading = {
  depth: number;
  text: string;
  id: string;
};

let cachedPages: DocPage[] | null = null;

function docsRoot(): string {
  return path.resolve(process.cwd(), 'docs');
}

function parseLocaleFromFilename(filename: string): { stem: string; locale: SiteLocale } {
  for (const loc of LOCALE_SUFFIXES) {
    const suffix = `.${loc}.md`;
    if (filename.endsWith(suffix)) {
      return { stem: filename.slice(0, -suffix.length), locale: loc };
    }
  }
  if (filename.endsWith('.md')) {
    return { stem: filename.slice(0, -3), locale: DEFAULT_LOCALE };
  }
  throw new Error(`Not a markdown file: ${filename}`);
}

function fileToSlug(relativePath: string, stem: string): string {
  const dir = path.dirname(relativePath);
  const base = stem === 'index' ? '' : stem;
  if (dir === '.') return base || 'index';
  return base ? `${dir}/${base}`.replace(/\\/g, '/') : dir.replace(/\\/g, '/');
}

function slugToHref(slug: string, locale: SiteLocale): string {
  if (slug === 'index') return localizedPath(locale);
  return localizedPath(locale, ...slug.split('/'));
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

function inlineSnippet(snippetPath: string): string {
  const full = path.join(docsRoot(), snippetPath);
  if (!fs.existsSync(full)) return `<!-- missing snippet: ${snippetPath} -->`;
  let html = fs.readFileSync(full, 'utf8');
  html = html.replace(/\.\.\/\.\.\/\.\.\/\.\.\/assets\//g, '/assets/');
  html = html.replace(/\.\.\/\.\.\/assets\//g, '/assets/');
  return `\n${transformLegacyEmbeds(html)}\n`;
}

function resolveMkdocsExtra(raw: string): string {
  let md = raw;
  md = md.replace(/\{\{\s*config\.extra\.(\w+)\s*(?:\|\s*\w+)?\s*\}\}/g, (_m, key: string) => MKDOCS_EXTRA[key] ?? '');
  return md;
}

function stripJinjaTags(raw: string): string {
  return raw.replace(/\{%[^%]*%\}/g, '');
}

function inlinePartial(partialPath: string, seen = new Set<string>()): string {
  const normalized = partialPath.replace(/^partials\//, '');
  if (seen.has(normalized)) return `<!-- circular include: ${partialPath} -->`;
  seen.add(normalized);

  const full = path.join(docsRoot(), 'partials', normalized);
  if (!fs.existsSync(full)) return `<!-- missing partial: ${partialPath} -->`;

  let html = fs.readFileSync(full, 'utf8');
  html = stripJinjaTags(html);
  html = resolveMkdocsExtra(html);
  html = html.replace(/\{%\s*include\s+"([^"]+)"\s*%\}/g, (_m, nested: string) => inlinePartial(nested, seen));
  return transformLegacyEmbeds(html);
}

function resolveIncludes(raw: string): string {
  let md = raw;
  let safety = 0;
  while (/\{%\s*include\s+"[^"]+"\s*%\}/.test(md) && safety++ < 32) {
    md = md.replace(/\{%\s*include\s+"([^"]+)"\s*%\}/g, (_m, partial: string) => inlinePartial(partial));
  }
  return md;
}

const CALLOUT_ICONS: Record<string, string> = {
  note: 'i',
  warning: '!',
  tip: '✓',
};

function calloutIcon(type: string): string {
  const glyph = CALLOUT_ICONS[type.toLowerCase()] ?? '•';
  return `<span class="callout-icon" aria-hidden="true">${glyph}</span>`;
}

const MATERIAL_CARD_ICONS: Record<string, string> = {
  usb: '⎓',
  lan: '⛓',
  'check-circle-outline': '✓',
  'cloud-outline': '☁',
};

function transformFaqHeadings(md: string): string {
  let out = md.replace(
    /^##\s+:material-chat-question:\{\s*\.faq\s*\}\s*(.+?)\s*\{:\s*#([a-z0-9-]+)\s*\}\s*$/gim,
    (_m, title: string, id: string) => `<h2 class="doc-faq-question" id="${id}">${title.trim()}</h2>\n`,
  );
  out = out.replace(
    /^##\s+:material-chat-question:\{\s*\.faq\s*\}\s*(.+?)\s*$/gim,
    (_m, title: string) => `<h2 class="doc-faq-question">${title.trim()}</h2>\n`,
  );
  out = out.replace(
    /\*\*:material-chat-question:\{\s*\.faq\s*\}\s*(.+?)\*\*/g,
    '<p class="doc-faq-question doc-faq-question--inline"><strong>$1</strong></p>',
  );
  return out.replace(
    /^##\s+(.+?)\s*\{:\s*#([a-z0-9-]+)\s*\}\s*$/gim,
    (_m, title: string, id: string) => `<h2 id="${id}">${title.trim()}</h2>\n`,
  );
}

function transformGridCardIcons(md: string): string {
  return md.replace(
    /^-\s+:material-([a-z0-9-]+):\{\s*\.lg\s*\}\s+(\*\*[^*]+\*\*[^\n]*)/gim,
    (_m, icon: string, rest: string) => {
      const glyph = MATERIAL_CARD_ICONS[icon] ?? '•';
      return `- <span class="doc-card-icon" aria-hidden="true">${glyph}</span> ${rest}`;
    },
  );
}

function transformMkdocsImages(md: string): string {
  return md.replace(/!\[([^\]]*)\]\(([^)]+)\)(\{:[^}]+\})?/g, (_m, alt: string, src: string, attrs?: string) => {
    let cleanSrc = src;
    let themeClass = '';

    if (/#only-dark$/i.test(src)) {
      cleanSrc = src.replace(/#only-dark$/i, '');
      themeClass = 'doc-img-dark';
    } else if (/#only-light$/i.test(src)) {
      cleanSrc = src.replace(/#only-light$/i, '');
      themeClass = 'doc-img-light';
    }

    let inlineStyle = '';
    if (attrs) {
      const styleMatch = attrs.match(/style="([^"]+)"/);
      if (styleMatch) inlineStyle = styleMatch[1];
    }

    const maxHeightMatch = inlineStyle.match(/max-height:\s*(\d+)/i);
    const maxHeight = maxHeightMatch ? Number(maxHeightMatch[1]) : null;
    const isInlineIcon = maxHeight !== null && maxHeight <= 32;
    const isDiagram = /\/usbkvm\//i.test(cleanSrc) || (cleanSrc.endsWith('.svg') && !isInlineIcon);

    const classes = [
      themeClass,
      isInlineIcon ? 'doc-inline-icon' : '',
      isDiagram ? 'doc-diagram' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const classAttr = classes ? ` class="${classes}"` : '';
    const styleAttr = inlineStyle ? ` style="${inlineStyle}"` : '';
    const altAttr = alt ? ` alt="${alt}"` : ' alt=""';
    return `<img src="${cleanSrc}"${altAttr} loading="lazy"${classAttr}${styleAttr} />`;
  });
}

function transformLegacySlideshow(html: string): string {
  if (!html.includes('slideshow-container')) return html;

  const imgs = [...html.matchAll(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"/gi)];
  if (!imgs.length) return html;

  const imagesHtml = imgs
    .map(([, src, alt], i) => {
      const hidden = i === 0 ? '' : ' hidden';
      const loading = i === 0 ? 'eager' : 'lazy';
      return `<img src="${src}" alt="${alt}" class="doc-slideshow__image${hidden}" data-index="${i}" loading="${loading}" />`;
    })
    .join('\n    ');

  const nav =
    imgs.length > 1
      ? `
    <button type="button" class="doc-slideshow__arrow doc-slideshow__prev" aria-label="Previous image">${ARROW_PREV}</button>
    <button type="button" class="doc-slideshow__arrow doc-slideshow__next" aria-label="Next image">${ARROW_NEXT}</button>
    <div class="doc-slideshow__dots">
      ${imgs.map((_, i) => `<button type="button" class="doc-slideshow__dot${i === 0 ? ' is-active' : ''}" data-dot="${i}" aria-label="Image ${i + 1}"></button>`).join('\n      ')}
    </div>`
      : '';

  return `<div class="doc-slideshow" data-doc-slideshow>
  <div class="doc-slideshow__frame group/slideshow">
    ${imagesHtml}${nav}
  </div>
</div>`;
}

const CROWD_SUPPLY_ICON = 'https://www.crowdsupply.com/_marvin/images/crowd-supply-icon.svg';

function transformMdButtons(html: string): string {
  return html.replace(
    /<button\s+class="md-button"\s+onclick="window\.(?:open\('|location\.href=')\s*([^'"]+)'[^"]*"[^>]*>([\s\S]*?)<\/button>/gi,
    (_m, url: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
      const hasLogo = /<img/i.test(inner);
      const logo = hasLogo
        ? `<img src="${CROWD_SUPPLY_ICON}" alt="Crowd Supply" class="doc-buy-cta__logo" width="24" height="24" />`
        : '';
      const label = text || 'Order';
      return `<div class="doc-buy-cta-wrap"><a href="${url.trim()}" class="btn btn-primary doc-buy-cta" target="_blank" rel="noopener noreferrer"><span>${label}</span>${logo}</a></div>`;
    },
  );
}

function transformProductSignup(html: string): string {
  if (html.includes('doc-product-signup')) return html;
  const hasSignupMarkup =
    html.includes('product-signup-container') ||
    html.includes('class="product-signup-form"') ||
    /\bid=["']product-signup-form["']/.test(html);
  if (!hasSignupMarkup) return html;

  return `<div class="doc-product-signup" id="product-signup-form">
  <p class="doc-product-signup__lead">Sign up to receive updates for this product. Unsubscribe anytime.</p>
  <form class="doc-product-signup__form subscribe-form" data-subscribe-endpoint="https://subscribe.openterface.com/api/subscribe/" data-analytics-placement="product_signup_doc" novalidate>
    <div class="doc-product-signup__fields">
      <input type="text" name="name" autocomplete="name" placeholder="Your name (optional)" class="doc-product-signup__input" />
      <input type="email" name="email" required autocomplete="email" placeholder="Email address *" class="doc-product-signup__input" />
      <button type="submit" class="btn btn-primary doc-product-signup__submit subscribe-submit" data-default-label="Subscribe">Subscribe</button>
    </div>
    <p class="doc-product-signup__status subscribe-status hidden" role="status" aria-live="polite" data-status></p>
  </form>
</div>`;
}

function transformYoutubeGrid(html: string): string {
  if (!html.includes('youtube-videos-grid')) return html;

  let out = html.replace(/class="youtube-videos-grid"/g, 'class="doc-youtube-grid"');
  out = out.replace(/class="youtube-video-card"/g, 'class="doc-youtube-card"');
  out = out.replace(/class="youtube-video-thumbnail"/g, 'class="doc-youtube-card__thumb"');
  out = out.replace(/class="play-overlay"/g, 'class="doc-youtube-card__play"');
  out = out.replace(/class="skip-lightbox"/g, 'class="doc-youtube-thumb"');
  out = out.replace(/(<img(?![^>]*class=)[^>]*>)/g, (tag) =>
    tag.replace('<img', '<img class="doc-youtube-thumb"'),
  );
  return `<section class="doc-youtube-section" aria-label="Product videos">\n${out}\n</section>`;
}

function transformSocialPosts(html: string): string {
  if (!html.includes('social-posts-container')) return html;

  let out = html.replace(/<script[\s\S]*?<\/script>\s*/gi, '');
  out = out.replace(/<link[^>]*>\s*/gi, '');

  // Minimal Twitter embed markup for widgets.js (legacy snippets often ship empty <p> bodies)
  out = out.replace(/<blockquote class="twitter-tweet"[^>]*>[\s\S]*?<\/blockquote>/gi, (block) => {
    const match = block.match(/https:\/\/twitter\.com\/[^/]+\/status\/[^"?]+/i);
    if (!match) return block;
    return `<blockquote class="twitter-tweet" data-dnt="true" data-theme="light"><a href="${match[0]}"></a></blockquote>`;
  });

  out = out.replace(/class="social-posts-container"[^>]*/g, 'class="doc-social-posts"');
  out = out.replace(/class="social-post-item/g, 'class="doc-social-post__item');

  return `<section class="doc-social-posts-section" aria-label="Community posts">\n${out}\n</section>`;
}

function transformMediaCoverage(html: string): string {
  return html.replace(
    /<ul>\s*<li>\s*<p>\s*<a href="https?:\/\/[^"]+">\s*<img[^>]*width="28"[\s\S]*?<\/ul>/gi,
    (match) => match.replace('<ul>', '<ul class="doc-media-coverage">'),
  );
}

function transformLegacyEmbeds(html: string): string {
  let out = html;
  out = transformLegacySlideshow(out);
  out = transformProductSignup(out);
  out = transformYoutubeGrid(out);
  out = transformSocialPosts(out);
  return out;
}

function transformLegacyBlocks(md: string): string {
  let out = md;

  out = out.replace(/<div\s+markdown="0">\s*/gi, '');
  out = out.replace(/<div style="text-align:\s*center[^"]*"[^>]*>/gi, '<div class="doc-center">');
  out = out.replace(/<div class="slogan-highlight">/g, '<div class="doc-slogan">');
  out = out.replace(/class="slogan-text"/g, 'class="doc-slogan__title"');
  out = out.replace(/class="slogan-subtitle"/g, 'class="doc-slogan__subtitle"');
  out = out.replace(/class="carousel-funding-stats"/g, 'class="doc-funding-stats"');
  out = out.replace(/class="funding-amount"/g, 'class="doc-funding-stats__amount"');
  out = out.replace(/class="funding-text"/g, 'class="doc-funding-stats__text"');
  out = out.replace(/class="funding-separator"/g, 'class="doc-funding-stats__sep"');
  out = out.replace(/class="funding-backers"/g, 'class="doc-funding-stats__backers"');
  out = out.replace(/class="funding-backers-count"/g, 'class="doc-funding-stats__backers-count"');

  out = resolveIncludes(out);
  out = resolveMkdocsExtra(out);
  out = stripJinjaTags(out);
  out = transformMdButtons(out);
  out = transformLegacyEmbeds(out);

  return out;
}

function parseGridCards(md: string): string {
  return md.replace(/<div class="grid cards" markdown>\s*([\s\S]*?)<\/div>/gi, (_m, inner: string) => {
    const body = preprocessMkdocsMarkdownInner(inner.trim());
    const html = marked.parse(body, { async: false, gfm: true }) as string;
    return `<div class="doc-grid-cards">\n${html}\n</div>\n\n`;
  });
}

/** Inner preprocessor — skips grid-card recursion. */
function preprocessMkdocsMarkdownInner(raw: string): string {
  let md = transformLegacyBlocks(raw);

  // pymdownx snippets
  md = md.replace(/^--8<--\s+"([^"]+)"\s*$/gm, (_m, snippetPath: string) => inlineSnippet(snippetPath));

  // MkDocs extra macros
  for (const [key, value] of Object.entries(MKDOCS_MACROS)) {
    md = md.replaceAll(`{{${key}}}`, value);
  }

  // FAQ headings, card icons, and MkDocs image attrs (before generic icon stripping)
  md = transformFaqHeadings(md);
  md = transformGridCardIcons(md);
  md = transformMkdocsImages(md);

  // Material / Octicons icon shortcodes (strip — link text remains)
  md = md.replace(/:material-[a-z0-9-]+:(?:\{[^}]*\})?\s*/gi, '');
  md = md.replace(/:fontawesome-(?:brands|solid)-[a-z0-9-]+:(?:\{[^}]*\})?\s*/gi, '');
  md = md.replace(/:octicons-[a-z0-9-]+:\s*/gi, '');

  // pymdownx.details (???[+]? type "Title")
  md = md.replace(
    /^\?\?\?\+? (\w+)(?: "([^"]*)")?\s*\n((?:    .+\n?)*)/gm,
    (_match, type: string, title: string | undefined, body: string) => {
      const lines = body
        .split('\n')
        .map((line) => line.replace(/^    /, ''))
        .filter(Boolean)
        .join('\n');
      const normalized = type.toLowerCase();
      const label = title || normalized.charAt(0).toUpperCase() + normalized.slice(1);
      return `<details class="callout callout-${normalized}">\n<summary class="callout-title">${calloutIcon(normalized)}${label}</summary>\n\n${lines}\n</details>\n\n`;
    },
  );

  // admonitions (!!! type "Title") — case-insensitive type
  md = md.replace(
    /^!!! (\w+)(?: "([^"]*)")?\s*\n((?:    .+\n?)*)/gim,
    (_match, type: string, title: string | undefined, body: string) => {
      const lines = body
        .split('\n')
        .map((line) => line.replace(/^    /, ''))
        .filter(Boolean)
        .join('\n');
      const normalized = type.toLowerCase();
      const label = title || normalized.charAt(0).toUpperCase() + normalized.slice(1);
      return `<aside class="callout callout-${normalized}" role="note">\n<strong class="callout-title">${calloutIcon(normalized)}${label}</strong>\n\n${lines}\n</aside>\n\n`;
    },
  );

  // mermaid fences → pre.mermaid for optional client render
  md = md.replace(/```mermaid\n([\s\S]*?)```/g, (_m, code: string) => {
    return `<pre class="mermaid">${code.trim()}</pre>\n\n`;
  });

  // pymdownx attr_list remnants on links
  md = md.replace(/(\]\([^)]+\))\{:[^}]+\}/g, '$1');

  // Absolute internal doc links → site paths
  md = md.replace(/\]\(\/app\)/g, '](/app/overview/)');
  md = md.replace(/\]\(\/faq\)/g, '](/faq/)');
  md = md.replace(/\]\(\/support\)/g, '](/support/)');
  md = md.replace(/\]\(\/product\//g, '](/product/');
  md = md.replace(/\]\(\/tutorial\//g, '](/tutorial/');
  md = md.replace(/\]\(\/about\//g, '](/about/');
  md = md.replace(/\]\(\/policy\//g, '](/policy/');

  return md;
}

/** Point legacy in-doc update links at news.openterface.com. */
function rewriteNewsLinks(md: string, locale: SiteLocale, pageSlug: string): string {
  let out = md.replace(/\]\(\/app\/updates\)/g, `](${newsPath(locale, 'software')})`);

  out = out.replace(/\]\(updates\/([^)]+)\)/g, (_m, file: string) => {
    let slug = file.replace(/\.md$/, '');
    for (const loc of LOCALE_SUFFIXES) {
      if (slug.endsWith(`.${loc}`)) {
        slug = slug.slice(0, -(loc.length + 1));
        break;
      }
    }
    if (pageSlug.startsWith('product/')) {
      const product = pageSlug.split('/')[1];
      return `](${newsPath(locale, `product/${product}/${slug}`)})`;
    }
    return `](${newsPath(locale, `software/${slug}`)})`;
  });

  return out;
}

/** Convert MkDocs Material markdown dialect to standard MD + HTML callouts. */
export function preprocessMkdocsMarkdown(raw: string, locale?: SiteLocale, pageSlug?: string): string {
  let md = preprocessMkdocsMarkdownInner(raw);
  if (locale && pageSlug) md = rewriteNewsLinks(md, locale, pageSlug);
  return parseGridCards(md);
}

function extractHeadings(html: string): DocHeading[] {
  const headings: DocHeading[] = [];
  const re = /<h([2-3])[^>]*>(.*?)<\/h\1>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    const depth = Number(match[1]);
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    if (!text) continue;
    const idMatch = match[0].match(/\bid="([^"]+)"/);
    const id = idMatch?.[1] ?? slugify(text);
    headings.push({ depth, text, id });
  }
  return headings;
}

function injectHeadingIds(html: string, headings: DocHeading[]): string {
  let i = 0;
  return html.replace(/<h([2-3])([^>]*)>/gi, (match, depth, attrs) => {
    if (/\bid=/.test(attrs)) return match;
    const heading = headings[i++];
    if (!heading) return match;
    return `<h${depth}${attrs} id="${heading.id}">`;
  });
}

export function renderMarkdown(
  raw: string,
  locale?: SiteLocale,
  pageSlug?: string,
): { html: string; headings: DocHeading[] } {
  const md = preprocessMkdocsMarkdown(raw, locale, pageSlug);
  let html = marked.parse(md, { async: false, gfm: true }) as string;
  // marked may wrap standalone HTML blocks in <p> — unwrap doc embed wrappers
  html = html.replace(/<p>\s*(<div class="doc-(?:slideshow|slogan|center|buy|product-signup|funding|youtube)[^>]*>)/g, '$1');
  html = html.replace(/(<\/div>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<section class="doc-youtube-section"[^>]*>)/g, '$1');
  html = html.replace(/(<\/section>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<section class="doc-social-posts-section"[^>]*>)/g, '$1');
  html = html.replace(/<p>\s*(<h2 class="doc-faq-question"[^>]*>)/g, '$1');
  html = html.replace(/(<\/h2>)\s*<\/p>/g, '$1');
  html = html.replace(/<p>\s*(<img class="doc-(?:diagram|inline-icon|img-light|img-dark)[^>]*>)/g, '$1');
  html = html.replace(/(<img class="doc-(?:diagram|inline-icon|img-light|img-dark)[^>]*>)\s*<\/p>/g, '$1');
  html = transformMediaCoverage(html);
  const headings = extractHeadings(html);
  return { html: injectHeadingIds(html, headings), headings };
}

export function collectDocPages(): DocPage[] {
  if (cachedPages) return cachedPages;

  const root = docsRoot();
  const pages: DocPage[] = [];

  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!entry.name.endsWith('.md')) continue;
      if (entry.name === 'ZENSICAL_SPIKE.md') continue;

      const relative = path.relative(root, full);
      const { stem, locale } = parseLocaleFromFilename(entry.name);
      const slug = fileToSlug(relative, stem);

      const source = fs.readFileSync(full, 'utf8');
      let data: DocFrontmatter = {};
      let content = source;
      try {
        const parsed = matter(source);
        data = parsed.data as DocFrontmatter;
        content = parsed.content;
      } catch {
        // Some legacy frontmatter values contain unquoted colons; render body as-is.
        const match = source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/);
        content = match ? match[1] : source;
      }
      const { html, headings } = renderMarkdown(content, locale, slug);

      pages.push({
        slug,
        locale,
        href: slugToHref(slug, locale),
        sourcePath: relative,
        frontmatter: data as DocFrontmatter,
        content,
        html,
        headings,
      });
    }
  }

  walk(root);
  cachedPages = pages;
  return pages;
}

export function getDocPage(slug: string, locale: SiteLocale): DocPage | undefined {
  return collectDocPages().find((p) => p.slug === slug && p.locale === locale);
}

export function getDocAlternates(slug: string): { locale: SiteLocale; path: string }[] {
  const locales = new Set(
    collectDocPages()
      .filter((p) => p.slug === slug)
      .map((p) => p.locale),
  );
  return [...locales].map((locale) => ({
    locale,
    path: slugToHref(slug, locale),
  }));
}

export function getAdjacentPages(
  slug: string,
  locale: SiteLocale,
): { prev?: DocPage; next?: DocPage } {
  const slugs = sidebarSlugsForPage(slug);
  if (!slugs.length) return {};

  const idx = slugs.indexOf(slug);
  if (idx === -1) return {};

  const prevSlug = slugs[idx - 1];
  const nextSlug = slugs[idx + 1];
  return {
    prev: prevSlug ? getDocPage(prevSlug, locale) : undefined,
    next: nextSlug ? getDocPage(nextSlug, locale) : undefined,
  };
}

export function pageTitle(page: DocPage): string {
  if (page.frontmatter.title) return page.frontmatter.title;
  const firstLine = page.content.split('\n').find((l) => l.startsWith('#'));
  return firstLine?.replace(/^#+\s*/, '').replace(/\*\*/g, '') ?? page.slug;
}

/** Clear page cache (tests). */
export function resetDocCache(): void {
  cachedPages = null;
}
