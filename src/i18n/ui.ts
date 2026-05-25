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
    news: string;
    forum: string;
    copyright: string;
    privacy: string;
    terms: string;
    cookie: string;
  };
  newsletter: {
    title: string;
    description: string;
    submit: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
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
    news: 'News ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-source KVM-over-USB.',
    privacy: 'Privacy',
    terms: 'Terms',
    cookie: 'Cookie settings',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Monthly updates on products, firmware, and KVM tips.',
    submit: 'Subscribe',
    namePlaceholder: 'Name',
    emailPlaceholder: 'Email *',
    footnote: 'Unsubscribe anytime.',
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
    news: '资讯 ↗',
    forum: '论坛 ↗',
    copyright: 'Openterface. 开源 KVM-over-USB.',
    privacy: '隐私',
    terms: '条款',
    cookie: 'Cookie 设置',
  },
  newsletter: {
    title: '邮件订阅',
    description: '每月获取产品、固件与 KVM 技巧更新。',
    submit: '订阅',
    namePlaceholder: '姓名',
    emailPlaceholder: '邮箱 *',
    footnote: '随时可取消订阅。',
  },
};

const hk: UiStrings = {
  ...en,
  siteName: 'Openterface 文檔',
  siteDescription: 'Openterface KVM-over-USB 產品與軟件的官方文檔 — 安裝指南、常見問題與教程。',
  nav: {
    ...en.nav,
    docsHome: '全部文檔',
    home: '首頁',
    faqs: '常見問題',
    support: '支持',
    product: '產品',
    app: '應用',
    tutorial: '教程',
    about: '關於',
    news: '資訊',
    shop: '商店',
    docsBadge: '文檔',
    search: '搜索',
    searchPlaceholder: '搜索文檔…',
  },
  mobile: {
    sections: '章節',
    ecosystem: '生態',
    language: '語言',
  },
  docs: {
    onThisPage: '本頁目錄',
    editPage: '編輯此頁',
    previous: '上一頁',
    next: '下一頁',
    sidebarLabel: '文檔導航',
  },
  footer: {
    ...en.footer,
    tagline: 'Openterface KVM-over-USB 硬件與應用的官方使用指南。',
    products: '產品',
    resources: '資源',
    sites: '站點',
    news: '資訊 ↗',
    forum: '論壇 ↗',
    copyright: 'Openterface. 開源 KVM-over-USB.',
    privacy: '隱私',
    terms: '條款',
    cookie: 'Cookie 設置',
  },
  newsletter: {
    title: '郵件訂閲',
    description: '每月獲取產品、固件與 KVM 技巧更新。',
    submit: '訂閲',
    namePlaceholder: '姓名',
    emailPlaceholder: '郵箱 *',
    footnote: '隨時可取消訂閲。',
  },
};

const tw: UiStrings = {
  ...en,
  siteName: 'Openterface 文檔',
  siteDescription: 'Openterface KVM-over-USB 產品與軟件的官方文檔 — 安裝指南、常見問題與教程。',
  nav: {
    ...en.nav,
    docsHome: '全部文檔',
    home: '首頁',
    faqs: '常見問題',
    support: '支持',
    product: '產品',
    app: '應用',
    tutorial: '教程',
    about: '關於',
    news: '資訊',
    shop: '商店',
    docsBadge: '文檔',
    search: '搜索',
    searchPlaceholder: '搜索文檔…',
  },
  mobile: {
    sections: '章節',
    ecosystem: '生態',
    language: '語言',
  },
  docs: {
    onThisPage: '本頁目錄',
    editPage: '編輯此頁',
    previous: '上一頁',
    next: '下一頁',
    sidebarLabel: '文檔導航',
  },
  footer: {
    ...en.footer,
    tagline: 'Openterface KVM-over-USB 硬件與應用的官方使用指南。',
    products: '產品',
    resources: '資源',
    sites: '站點',
    news: '資訊 ↗',
    forum: '論壇 ↗',
    copyright: 'Openterface. 開源 KVM-over-USB.',
    privacy: '隱私',
    terms: '條款',
    cookie: 'Cookie 設置',
  },
  newsletter: {
    title: '郵件訂閱',
    description: '每月獲取產品、固件與 KVM 技巧更新。',
    submit: '訂閱',
    namePlaceholder: '姓名',
    emailPlaceholder: '郵箱 *',
    footnote: '隨時可取消訂閱。',
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
  hk,
  tw,
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
