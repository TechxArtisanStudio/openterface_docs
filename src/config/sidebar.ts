import { docExists, resolveDocHref } from '../lib/docs';
import type { SiteLocale } from '../lib/locale';
import { translateNavLabel } from './nav-translations.generated';
import { sectionForSlug } from './sidebar-utils';

export type SidebarItem = {
  label: string;
  href?: string;
  children?: SidebarItem[];
};

export function sidebarForSlug(locale: SiteLocale, slug: string): SidebarItem[] | null {
  if (slug === '' || slug === 'index') return null;

  const section = sectionForSlug(slug);
  if (!section) return null;

  return section.items
    .filter((item) => docExists(item.slug, locale))
    .map((item) => ({
      label: translateNavLabel(item.label, locale),
      href: resolveDocHref(item.slug, locale),
    }));
}

export function sidebarSectionTitle(slug: string, locale: SiteLocale = 'en'): string {
  const section = sectionForSlug(slug);
  if (!section) return translateNavLabel('Documentation', locale);
  return translateNavLabel(section.title, locale);
}

/** Short sidebar label for a slug (e.g. "Features"), for prev/next link text. */
export function sidebarNavLabel(slug: string, locale: SiteLocale): string | undefined {
  const section = sectionForSlug(slug);
  if (section) {
    const item = section.items.find((i) => i.slug === slug);
    if (item) return translateNavLabel(item.label, locale);
  }
  return undefined;
}

/** @deprecated import sidebarSlugsForPage from sidebar-utils */
export { sidebarSlugsForPage } from './sidebar-utils';

/** @deprecated use sidebarForSlug */
export function kvmGoSidebar(locale: SiteLocale): SidebarItem[] {
  return sidebarForSlug(locale, 'product/kvm-go') ?? [];
}
