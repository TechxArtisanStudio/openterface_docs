import { docsPath, newsPath, SHOP_URL, surfaceMarketingHost } from '../config/surface-urls';
import { localizedPath, type SiteLocale } from '../lib/locale';

export interface UiStrings {
  siteName: string;
  siteDescription: string;
  nav: {
    docsHome: string;
    faqs: string;
    support: string;
    product: string;
    app: string;
    tutorial: string;
    about: string;
    home: string;
    news: string;
    shop: string;
    docsBadge: string;
    search: string;
    searchPlaceholder: string;
  };
  mobile: {
    sections: string;
    ecosystem: string;
    language: string;
  };
  docs: {
    onThisPage: string;
    editPage: string;
    previous: string;
    next: string;
    sidebarLabel: string;
  };
  footer: {
    tagline: string;
    products: string;
    resources: string;
    sites: string;
    marketing: string;
    news: string;
    forum: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookie: string;
  };
  cookie: {
    title: string;
    description: string;
    accept: string;
    reject: string;
  };
}

const en: UiStrings = {
  siteName: 'Openterface Docs',
  siteDescription:
    'Official documentation for Openterface KVM-over-USB products and software — setup guides, FAQs, and tutorials.',
  nav: {
    docsHome: 'All Docs',
    faqs: 'FAQs',
    support: 'Support',
    product: 'Product',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'About',
    home: 'Home',
    news: 'News',
    shop: 'Shop',
    docsBadge: 'Docs',
    search: 'Search',
    searchPlaceholder: 'Search documentation…',
  },
  mobile: {
    sections: 'Sections',
    ecosystem: 'Ecosystem',
    language: 'Language',
  },
  docs: {
    onThisPage: 'On this page',
    editPage: 'Edit this page',
    previous: 'Previous',
    next: 'Next',
    sidebarLabel: 'Documentation navigation',
  },
  footer: {
    tagline: 'Official how-to guides for Openterface KVM-over-USB hardware and apps.',
    products: 'Products',
    resources: 'Resources',
    sites: 'Sites',
    marketing: 'Marketing ↗',
    news: 'News ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-source KVM-over-USB.',
    privacy: 'Privacy',
    terms: 'Terms',
    cookie: 'Cookie settings',
  },
  cookie: {
    title: 'Cookie preferences',
    description: 'We use cookies for analytics to improve our documentation.',
    accept: 'Accept',
    reject: 'Reject',
  },
};

const zh: UiStrings = {
  ...en,
  siteName: 'Openterface 文档',
  siteDescription: 'Openterface KVM-over-USB 产品与软件的官方文档 — 安装指南、常见问题与教程。',
  nav: {
    ...en.nav,
    docsHome: '全部文档',
    home: '首页',
    faqs: '常见问题',
    support: '支持',
    product: '产品',
    app: '应用',
    tutorial: '教程',
    about: '关于',
    news: '资讯',
    shop: '商店',
    docsBadge: '文档',
    search: '搜索',
    searchPlaceholder: '搜索文档…',
  },
  mobile: {
    sections: '章节',
    ecosystem: '生态',
    language: '语言',
  },
  docs: {
    onThisPage: '本页目录',
    editPage: '编辑此页',
    previous: '上一页',
    next: '下一页',
    sidebarLabel: '文档导航',
  },
  footer: {
    ...en.footer,
    tagline: 'Openterface KVM-over-USB 硬件与应用的官方使用指南。',
    products: '产品',
    resources: '资源',
    sites: '站点',
    marketing: '营销站 ↗',
    news: '资讯 ↗',
    forum: '论坛 ↗',
    copyright: 'Openterface. 开源 KVM-over-USB.',
    privacy: '隐私',
    terms: '条款',
    cookie: 'Cookie 设置',
  },
};

const dictionaries: Record<SiteLocale, UiStrings> = {
  en,
  zh,
  ja: en,
  ko: en,
  de: en,
  fr: en,
  es: en,
  it: en,
  pt: en,
  ro: en,
};

export function t(locale: SiteLocale): UiStrings {
  return dictionaries[locale] ?? en;
}

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export function docsNav(locale: SiteLocale): NavItem[] {
  const ui = t(locale);
  const prefix = (path: string) => localizedPath(locale, ...path.split('/').filter(Boolean));
  return [
    { label: ui.nav.docsHome, href: localizedPath(locale) },
    {
      label: ui.nav.product,
      href: prefix('product/kvm-go'),
      children: [
        { label: 'KVM-GO', href: prefix('product/kvm-go') },
        { label: 'Mini-KVM', href: prefix('product/minikvm') },
        { label: 'KeyMod', href: prefix('product/keymod') },
        { label: 'uConsole KVM', href: prefix('product/uconsole-kvm-extension') },
      ],
    },
    { label: ui.nav.app, href: prefix('app/overview') },
    { label: ui.nav.tutorial, href: prefix('tutorial/kvm') },
    { label: ui.nav.faqs, href: prefix('faq/kvm-over-usb') },
    { label: ui.nav.support, href: prefix('support') },
    { label: ui.nav.home, href: surfaceMarketingHost(locale), external: true },
    { label: ui.nav.news, href: newsPath(locale), external: true },
    { label: ui.nav.shop, href: SHOP_URL, external: true },
  ];
}
