import { localizedPath, type SiteLocale } from '../lib/locale';
import { NAV_SECTIONS } from './sidebar.generated';
import { translateNavLabel } from './nav-translations.generated';

export type SidebarItem = {
  label: string;
  href?: string;
  children?: SidebarItem[];
};

function sectionForSlug(slug: string) {
  // Exact item match first
  for (const section of NAV_SECTIONS) {
    if (section.items.some((item) => item.slug === slug)) return section;
  }

  // Longest prefix match (e.g. product/kvm-go/notes/foo → kvm-go section)
  let best: (typeof NAV_SECTIONS)[number] | null = null;
  let bestLen = 0;
  for (const section of NAV_SECTIONS) {
    for (const item of section.items) {
      const prefix = item.slug;
      if (slug === prefix || slug.startsWith(`${prefix}/`)) {
        if (prefix.length > bestLen) {
          best = section;
          bestLen = prefix.length;
        }
      }
    }
  }
  return best;
}

export function sidebarForSlug(locale: SiteLocale, slug: string): SidebarItem[] | null {
  if (slug === '' || slug === 'index') return null;

  const section = sectionForSlug(slug);
  if (!section) return null;

  return section.items.map((item) => ({
    label: translateNavLabel(item.label, locale),
    href: localizedPath(locale, ...item.slug.split('/').filter(Boolean)),
  }));
}

export function sidebarSectionTitle(slug: string, locale: SiteLocale = 'en'): string {
  const section = sectionForSlug(slug);
  if (!section) return translateNavLabel('Documentation', locale);
  return translateNavLabel(section.title, locale);
}

/** Flat slug order within the active sidebar section (for prev/next). */
export function sidebarSlugsForPage(slug: string): string[] {
  const section = sectionForSlug(slug);
  return section?.items.map((item) => item.slug) ?? [];
}

/** Short sidebar label for a slug (e.g. "Features"), for prev/next link text. */
export function sidebarNavLabel(slug: string, locale: SiteLocale): string | undefined {
  for (const section of NAV_SECTIONS) {
    const item = section.items.find((i) => i.slug === slug);
    if (item) return translateNavLabel(item.label, locale);
  }
  return undefined;
}

/** @deprecated use sidebarForSlug */
export function kvmGoSidebar(locale: SiteLocale): SidebarItem[] {
  return sidebarForSlug(locale, 'product/kvm-go') ?? [];
}
