export const SUPPORTED_LOCALES = [
  'en',
  'zh',
  'ja',
  'ko',
  'de',
  'fr',
  'es',
  'it',
  'pt',
  'ro',
  'hk',
  'tw',
  'ru',
  'ar',
  'tr',
] as const;

export type SiteLocale = (typeof SUPPORTED_LOCALES)[number];

export const LOCALE_LABELS: Record<SiteLocale, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano',
  pt: 'Português',
  ro: 'Română',
  hk: '繁體中文（香港）',
  tw: '繁體中文（台灣）',
  ru: 'Русский',
  ar: 'العربية',
  tr: 'Türkçe',
};

export const DEFAULT_LOCALE: SiteLocale = 'en';

export function isSiteLocale(value: string): value is SiteLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(value);
}

export function localizedPath(locale: SiteLocale, ...segments: string[]): string {
  const parts = (locale === 'en' ? segments : [locale, ...segments]).filter(Boolean);
  return parts.length === 0 ? '/' : `/${parts.join('/')}/`;
}

export function stripLocalePrefix(pathname: string): { locale: SiteLocale; segments: string[] } {
  const segments = pathname.split('/').filter(Boolean);
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
