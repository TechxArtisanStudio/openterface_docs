import { docsPath, newsPath, surfaceMarketingHost } from '../config/surface-urls';
import { localizedPath, type SiteLocale } from './locale';

export type EcosystemSurface = 'docs';

export interface NavItem {
  label: string;
  href?: string;
  external?: boolean;
  children?: NavItem[];
}

export interface EcosystemNavLabels {
  products: string;
  allProducts: string;
  keymodSeries: string;
  kvmGoSeries: string;
  miniKvm: string;
  kvmExt: string;
  accessories: string;
  apps: string;
  allApps: string;
  kvmControl: string;
  keycmd: string;
  docs: string;
  media: string;
  news: string;
  community: string;
}

function joinUrl(host: string, path: string): string {
  const base = host.replace(/\/$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized.endsWith('/') ? `${base}${normalized}` : `${base}${normalized}/`;
}

function marketingHref(locale: SiteLocale, path: string): string {
  return joinUrl(surfaceMarketingHost(locale), path);
}

export function buildEcosystemNav(locale: SiteLocale, labels: EcosystemNavLabels): NavItem[] {
  const productsChildren: NavItem[] = [
    { label: labels.keymodSeries, href: marketingHref(locale, '/keymod/') },
    { label: labels.kvmGoSeries, href: marketingHref(locale, '/kvmgo/') },
    { label: labels.miniKvm, href: marketingHref(locale, '/minikvm/') },
    { label: labels.kvmExt, href: marketingHref(locale, '/kvmext/') },
    { label: labels.accessories, href: marketingHref(locale, '/accessories/') },
  ];

  const appsChildren: NavItem[] = [
    { label: labels.kvmControl, href: marketingHref(locale, '/kvm/') },
    { label: labels.keycmd, href: marketingHref(locale, '/keycmd/') },
  ];

  return [
    {
      label: labels.products,
      children: productsChildren,
    },
    {
      label: labels.apps,
      children: appsChildren,
    },
    { label: labels.docs, href: localizedPath(locale) },
    { label: labels.media, href: marketingHref(locale, '/media/') },
    { label: labels.news, href: newsPath(locale) },
    { label: labels.community, href: marketingHref(locale, '/community/') },
  ];
}

function ecosystemNavLabels(locale: SiteLocale, ui: ReturnType<typeof import('../i18n/ui').t>): EcosystemNavLabels {
  return {
    products: ui.nav.product,
    allProducts: ui.nav.product,
    keymodSeries: 'KeyMod Series',
    kvmGoSeries: 'KVM-GO Series',
    miniKvm: 'Mini-KVM',
    kvmExt: 'uConsole KVM Extension',
    accessories: 'Accessories',
    apps: ui.nav.app,
    allApps: ui.nav.app,
    kvmControl: 'Openterface KVM',
    keycmd: 'KeyCmd',
    docs: ui.nav.docsBadge,
    media: ui.nav.media,
    news: ui.nav.news,
    community: ui.nav.community,
  };
}

export function docsEcosystemNav(locale: SiteLocale, ui: ReturnType<typeof import('../i18n/ui').t>): NavItem[] {
  return buildEcosystemNav(locale, ecosystemNavLabels(locale, ui));
}
