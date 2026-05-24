import type { SiteLocale } from '../lib/locale';

const PROD_DOCS = 'https://docs.openterface.com';
const PROD_NEWS = 'https://news.openterface.com';
export const SHOP_URL = 'https://shop.techxartisan.com/';

const PROD_MARKETING: Record<SiteLocale, string> = {
  en: 'https://en.openterface.com',
  de: 'https://de.openterface.com',
  es: 'https://es.openterface.com',
  fr: 'https://fr.openterface.com',
  it: 'https://it.openterface.com',
  ja: 'https://jp.openterface.com',
  ko: 'https://kr.openterface.com',
  pt: 'https://pt.openterface.com',
  ro: 'https://ro.openterface.com',
  zh: 'https://cn.openterface.com',
};

const DEV_MARKETING: Partial<Record<SiteLocale, string | undefined>> = {
  en: import.meta.env.PUBLIC_OP_DEV_MARKETING_EN,
  zh: import.meta.env.PUBLIC_OP_DEV_MARKETING_ZH,
  de: import.meta.env.PUBLIC_OP_DEV_MARKETING_DE,
  es: import.meta.env.PUBLIC_OP_DEV_MARKETING_ES,
  fr: import.meta.env.PUBLIC_OP_DEV_MARKETING_FR,
  it: import.meta.env.PUBLIC_OP_DEV_MARKETING_IT,
  ja: import.meta.env.PUBLIC_OP_DEV_MARKETING_JA,
  ko: import.meta.env.PUBLIC_OP_DEV_MARKETING_KO,
  pt: import.meta.env.PUBLIC_OP_DEV_MARKETING_PT,
  ro: import.meta.env.PUBLIC_OP_DEV_MARKETING_RO,
};

export function surfaceDocsBase(): string {
  return import.meta.env.PUBLIC_OP_DEV_DOCS || PROD_DOCS;
}

export function surfaceNewsBase(): string {
  return import.meta.env.PUBLIC_OP_DEV_NEWS || PROD_NEWS;
}

export function surfaceMarketingHost(locale: SiteLocale): string {
  return DEV_MARKETING[locale] || PROD_MARKETING[locale];
}

export function docsPath(locale: SiteLocale, subpath = ''): string {
  const base = surfaceDocsBase().replace(/\/$/, '');
  const path = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  if (locale === 'en') return `${base}${path}${path && !path.endsWith('/') ? '/' : path ? '' : '/'}`;
  const normalized = path.endsWith('/') ? path : path ? `${path}/` : '/';
  return `${base}/${locale}${normalized}`;
}

export function newsPath(locale: SiteLocale, subpath = ''): string {
  const base = surfaceNewsBase().replace(/\/$/, '');
  const path = subpath.startsWith('/') ? subpath : subpath ? `/${subpath}` : '';
  if (locale === 'en') return `${base}${path}${path && !path.endsWith('/') ? '/' : path ? '' : '/'}`;
  const normalized = path.endsWith('/') ? path : path ? `${path}/` : '/';
  return `${base}/${locale}${normalized}`;
}
