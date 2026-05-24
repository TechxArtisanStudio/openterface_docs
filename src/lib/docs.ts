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
  return `\n${html}\n`;
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
  let md = raw;

  // pymdownx snippets
  md = md.replace(/^--8<--\s+"([^"]+)"\s*$/gm, (_m, snippetPath: string) => inlineSnippet(snippetPath));

  // MkDocs extra macros
  for (const [key, value] of Object.entries(MKDOCS_MACROS)) {
    md = md.replaceAll(`{{${key}}}`, value);
  }

  // Material / Octicons icon shortcodes (strip — link text remains)
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
      const label = title || type.charAt(0).toUpperCase() + type.slice(1);
      return `<details class="callout callout-${type}">\n<summary class="callout-title">${label}</summary>\n\n${lines}\n</details>\n\n`;
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
      return `<aside class="callout callout-${normalized}">\n<strong class="callout-title">${label}</strong>\n\n${lines}\n</aside>\n\n`;
    },
  );

  // mermaid fences → pre.mermaid for optional client render
  md = md.replace(/```mermaid\n([\s\S]*?)```/g, (_m, code: string) => {
    return `<pre class="mermaid">${code.trim()}</pre>\n\n`;
  });

  // pymdownx attr_list on images/links
  md = md.replace(/(\!\[[^\]]*\]\([^)]+\))\{:[^}]+\}/g, '$1');
  md = md.replace(/(\]\([^)]+\))\{:[^}]+\}/g, '$1');

  // Material emoji icon fragments (#only-light) etc.
  md = md.replace(/#only-light\)/g, ')');
  md = md.replace(/#only-dark\)/g, ')');

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
    if (text) headings.push({ depth, text, id: slugify(text) });
  }
  return headings;
}

function injectHeadingIds(html: string, headings: DocHeading[]): string {
  let i = 0;
  return html.replace(/<h([2-3])>/gi, (match, depth) => {
    const heading = headings[i++];
    if (!heading) return match;
    return `<h${depth} id="${heading.id}">`;
  });
}

export function renderMarkdown(
  raw: string,
  locale?: SiteLocale,
  pageSlug?: string,
): { html: string; headings: DocHeading[] } {
  const md = preprocessMkdocsMarkdown(raw, locale, pageSlug);
  const html = marked.parse(md, { async: false, gfm: true }) as string;
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
