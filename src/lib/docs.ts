import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { kvmGoSidebar } from '../config/sidebar';
import { DEFAULT_LOCALE, localizedPath, type SiteLocale } from './locale';

const LOCALE_SUFFIXES = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro'] as const;

/** Spike scope — expand to full corpus in Phase 2. */
export const SPIKE_SLUG_PREFIXES = [
  'index',
  'product/kvm-go',
  'app/overview',
  'support',
];

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

/** Convert MkDocs Material markdown dialect to standard MD + HTML callouts. */
export function preprocessMkdocsMarkdown(raw: string): string {
  let md = raw;

  // !!! type "Title" / !!! type blocks
  md = md.replace(
    /^!!! (\w+)(?: "([^"]*)")?\s*\n((?:    .+\n?)*)/gm,
    (_match, type: string, title: string | undefined, body: string) => {
      const lines = body
        .split('\n')
        .map((line) => line.replace(/^    /, ''))
        .filter(Boolean)
        .join('\n');
      const label = title || type.charAt(0).toUpperCase() + type.slice(1);
      return `<aside class="callout callout-${type}">\n<strong class="callout-title">${label}</strong>\n\n${lines}\n</aside>\n\n`;
    },
  );

  // pymdownx attr_list on images/links — strip or inline style
  md = md.replace(/(\!\[[^\]]*\]\([^)]+\))\{:[^}]+\}/g, '$1');
  md = md.replace(/(\]\([^)]+\))\{:[^}]+\}/g, '$1');

  // Strip Material emoji icon fragments (#only-light) etc.
  md = md.replace(/#only-light\)/g, ')');
  md = md.replace(/#only-dark\)/g, ')');

  // Absolute internal doc links → relative (keep for spike)
  md = md.replace(/\]\(\/app\)/g, '](/app/overview/)');
  md = md.replace(/\]\(\/product\//g, '](/product/');

  return md;
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

export function renderMarkdown(raw: string): { html: string; headings: DocHeading[] } {
  const md = preprocessMkdocsMarkdown(raw);
  const html = marked.parse(md, { async: false }) as string;
  const headings = extractHeadings(html);
  return { html: injectHeadingIds(html, headings), headings };
}

function isSpikeSlug(slug: string): boolean {
  return SPIKE_SLUG_PREFIXES.some(
    (prefix) => slug === prefix || slug.startsWith(`${prefix}/`) || slug.startsWith(prefix),
  );
}

export function collectDocPages(): DocPage[] {
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

      if (!isSpikeSlug(slug)) continue;

      const source = fs.readFileSync(full, 'utf8');
      const { data, content } = matter(source);
      const { html, headings } = renderMarkdown(content);

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
  if (!slug.startsWith('product/kvm-go')) return {};

  const sidebar = kvmGoSidebar(locale);
  const slugs = sidebar
    .map((item) => {
      if (!item.href) return null;
      const parts = item.href.split('/').filter(Boolean);
      if (parts[0] === locale) parts.shift();
      return parts.join('/');
    })
    .filter(Boolean) as string[];

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
