import { NAV_SECTIONS } from './sidebar.generated';

export function sectionForSlug(slug: string) {
  for (const section of NAV_SECTIONS) {
    if (section.items.some((item) => item.slug === slug)) return section;
  }

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

/** Flat slug order within the active sidebar section (sidebar config order). */
export function sidebarSlugsForPage(slug: string): string[] {
  const section = sectionForSlug(slug);
  return section?.items.map((item) => item.slug) ?? [];
}
