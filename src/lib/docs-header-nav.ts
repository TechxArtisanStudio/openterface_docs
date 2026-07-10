import { siteConfig } from '../config/site';
import { newsPath, SHOP_URL, surfaceMarketingHost } from '../config/surface-urls';
import { localizedPath, stripLocalePrefix, type SiteLocale } from './locale';
import type { t } from '../i18n/ui';

export type DocsTabId = 'home' | 'products' | 'app' | 'tutorial' | 'faq' | 'support';

export type DocsHeaderNavItem = {
  label: string;
  href: string;
  tabId: DocsTabId;
};

export type DocsEcosystemLink = {
  label: string;
  href: string;
  external?: boolean;
  badge?: string;
};

type Ui = ReturnType<typeof t>;

function joinUrl(host: string, path: string): string {
  const base = host.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.endsWith('/') ? `${base}${normalized}` : `${base}${normalized}/`;
}

export function slugFromPathname(pathname: string): string {
  const { segments } = stripLocalePrefix(pathname);
  if (segments.length === 0) return 'index';
  return segments.join('/');
}

export function activeDocsTab(pathname: string): DocsTabId | null {
  const slug = slugFromPathname(pathname);
  if (slug === 'index') return 'home';
  if (slug === 'faq' || slug.startsWith('faq/')) return 'faq';
  if (slug === 'support' || slug.startsWith('support/')) return 'support';
  if (slug === 'products' || slug.startsWith('products/')) return 'products';
  if (slug === 'app' || slug.startsWith('app/')) return 'app';
  if (slug === 'tutorial' || slug.startsWith('tutorial/')) return 'tutorial';
  return null;
}

export function buildDocsHeaderNav(locale: SiteLocale, ui: Ui): DocsHeaderNavItem[] {
  return [
    { label: ui.nav.docsHome, href: localizedPath(locale), tabId: 'home' },
    { label: ui.nav.product, href: localizedPath(locale, 'products'), tabId: 'products' },
    { label: ui.nav.app, href: localizedPath(locale, 'app'), tabId: 'app' },
    { label: ui.nav.tutorial, href: localizedPath(locale, 'tutorial', 'kvm'), tabId: 'tutorial' },
    { label: ui.nav.faqs, href: localizedPath(locale, 'faq'), tabId: 'faq' },
    { label: ui.nav.support, href: localizedPath(locale, 'support'), tabId: 'support' },
  ];
}

export function buildDocsEcosystemLinks(locale: SiteLocale, ui: Ui): DocsEcosystemLink[] {
  return [
    { label: `${ui.nav.home} ↗`, href: surfaceMarketingHost(locale), external: true },
    { label: `${ui.nav.news} ↗`, href: newsPath(locale), external: true },
    { label: `${ui.nav.media} ↗`, href: joinUrl(surfaceMarketingHost(locale), '/media/'), external: true },
    { label: `${ui.nav.shop} ↗`, href: SHOP_URL, external: true },
    {
      label: ui.footer.forum.replace(/\s*↗\s*$/, ''),
      href: siteConfig.links.forum,
      external: true,
      badge: 'New',
    },
  ];
}
