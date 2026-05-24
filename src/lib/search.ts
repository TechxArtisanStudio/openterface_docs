import { collectDocPages, pageTitle, type DocPage } from '../lib/docs';
import type { SiteLocale } from './locale';

export function buildSearchIndex(locale: SiteLocale) {
  return collectDocPages()
    .filter((p) => p.locale === locale)
    .map((p) => ({
      title: pageTitle(p),
      href: p.href,
      excerpt: p.frontmatter.description || p.content.slice(0, 120).replace(/\s+/g, ' '),
    }));
}

export function buildSearchIndexAllLocales() {
  const pages = collectDocPages();
  const byLocale = new Map<SiteLocale, ReturnType<typeof buildSearchIndex>>();

  for (const page of pages) {
    if (!byLocale.has(page.locale)) {
      byLocale.set(page.locale, buildSearchIndex(page.locale));
    }
  }
  return byLocale;
}

export type SearchEntry = { title: string; href: string; excerpt: string };

export function searchIndexForLocale(locale: SiteLocale): SearchEntry[] {
  return buildSearchIndex(locale);
}

export { type DocPage };
