export const SUPPORTED_LOCALES = ['en'] as const;

export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<SiteLocale, string> = {
  en: 'English',
};

export const DEFAULT_LOCALE: SiteLocale = 'en';

export function isSiteLocale(value: string): value is SiteLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function localizedPath(locale: SiteLocale, ...segments: string[]): string {
  const base = import.meta.env.BASE_URL;
  const parts = (locale === 'en' ? segments : [locale, ...segments]).filter(Boolean);
  const path = parts.length === 0 ? '/' : `/${parts.join('/')}/`;
  return base === '/' ? path : `${base}${path.replace(/^\//, '')}`;
}

export function stripLocalePrefix(pathname: string): { locale: SiteLocale; segments: string[] } {
  const base = import.meta.env.BASE_URL;
  const stripped = base !== '/' && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const segments = stripped.split('/').filter(Boolean);
  if (segments[0] && isSiteLocale(segments[0])) {
    return { locale: segments[0], segments: segments.slice(1) };
  }
  return { locale: DEFAULT_LOCALE, segments };
}

export function switchLocalePath(
  pathname: string,
  targetLocale: SiteLocale,
  search = '',
): string {
  const { segments } = stripLocalePrefix(pathname);
  const path = localizedPath(targetLocale, ...segments);
  if (!search) return path;
  return `${path}${search.startsWith('?') ? search : `?${search}`}`;
}

export function getLocaleAlternatesForPath(
  pathname: string,
): { locale: SiteLocale; path: string }[] {
  return SUPPORTED_LOCALES.map((locale) => ({
    locale,
    path: switchLocalePath(pathname, locale),
  }));
}
