import { docsPath, newsPath, SHOP_URL, surfaceMarketingHost } from '../config/surface-urls';
import { resolveDocHref } from '../lib/docs';
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
    'Official Openterface documentation for KVM-over-USB hardware and apps — Mini-KVM, KVM-GO, and uConsole guides, setup, FAQs, and tutorials for IT pros and makers.',
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
  siteDescription:
    'Openterface KVM-over-USB 产品与软件的官方文档 — Mini-KVM、KVM-GO、uConsole 扩展的安装指南、常见问题、故障排查与教程，面向 IT 与开发者。',
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
  siteDescription:
    'Openterface KVM-over-USB 產品與軟件的官方文檔 — Mini-KVM、KVM-GO、uConsole 擴展的安裝指南、常見問題、故障排查與教程，面向 IT 與開發者。',
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
  siteDescription:
    'Openterface KVM-over-USB 產品與軟件的官方文檔 — Mini-KVM、KVM-GO、uConsole 擴展的安裝指南、常見問題、故障排查與教程，面向 IT 與開發者。',
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

function localeUi(
  patch: Pick<UiStrings, 'siteName' | 'siteDescription'> &
    Partial<Omit<UiStrings, 'nav' | 'mobile' | 'docs' | 'footer' | 'newsletter' | 'cookie'>> & {
      nav?: Partial<UiStrings['nav']>;
      mobile?: Partial<UiStrings['mobile']>;
      docs?: Partial<UiStrings['docs']>;
      footer?: Partial<UiStrings['footer']>;
      newsletter?: Partial<UiStrings['newsletter']>;
      cookie?: Partial<UiStrings['cookie']>;
    },
): UiStrings {
  return {
    ...en,
    ...patch,
    nav: { ...en.nav, ...patch.nav },
    mobile: { ...en.mobile, ...patch.mobile },
    docs: { ...en.docs, ...patch.docs },
    footer: { ...en.footer, ...patch.footer },
    newsletter: { ...en.newsletter, ...patch.newsletter },
    cookie: { ...en.cookie, ...patch.cookie },
  };
}

const ja = localeUi({
  siteName: 'Openterface ドキュメント',
  siteDescription:
    'Openterface KVM-over-USB 製品とソフトウェアの公式ドキュメント — Mini-KVM・KVM-GO・uConsole 拡張のセットアップ、FAQ、トラブルシューティング、チュートリアル。IT 担当者向け。',
  nav: {
    docsHome: 'すべてのドキュメント',
    home: 'ホーム',
    faqs: 'FAQ',
    support: 'サポート',
    product: '製品',
    app: 'アプリ',
    tutorial: 'チュートリアル',
    about: '概要',
    news: 'ニュース',
    shop: 'ショップ',
    docsBadge: 'ドキュメント',
    search: '検索',
    searchPlaceholder: 'ドキュメントを検索…',
  },
  mobile: { sections: 'セクション', ecosystem: 'エコシステム', language: '言語' },
  docs: {
    onThisPage: 'このページの内容',
    editPage: 'このページを編集',
    previous: '前へ',
    next: '次へ',
    sidebarLabel: 'ドキュメントナビゲーション',
  },
  footer: {
    tagline: 'Openterface KVM-over-USB ハードウェアとアプリの公式ガイド。',
    products: '製品',
    resources: 'リソース',
    sites: 'サイト',
    news: 'ニュース ↗',
    forum: 'フォーラム ↗',
    copyright: 'Openterface. オープンソース KVM-over-USB.',
    privacy: 'プライバシー',
    terms: '利用規約',
    cookie: 'Cookie 設定',
  },
  newsletter: {
    title: 'ニュースレター',
    description: '製品、ファームウェア、KVM のヒントに関する月次アップデート。',
    submit: '登録',
    namePlaceholder: 'お名前',
    emailPlaceholder: 'メール *',
    footnote: 'いつでも配信解除できます。',
  },
});

const ko = localeUi({
  siteName: 'Openterface 문서',
  siteDescription:
    'Openterface KVM-over-USB 제품 및 소프트웨어 공식 문서 — Mini-KVM, KVM-GO, uConsole 확장 설정, FAQ, 문제 해결, 튜토리얼. IT 및 개발자용 가이드.',
  nav: {
    docsHome: '모든 문서',
    home: '홈',
    faqs: 'FAQ',
    support: '지원',
    product: '제품',
    app: '앱',
    tutorial: '튜토리얼',
    about: '소개',
    news: '뉴스',
    shop: '스토어',
    docsBadge: '문서',
    search: '검색',
    searchPlaceholder: '문서 검색…',
  },
  mobile: { sections: '섹션', ecosystem: '에코시스템', language: '언어' },
  docs: {
    onThisPage: '이 페이지에서',
    editPage: '이 페이지 편집',
    previous: '이전',
    next: '다음',
    sidebarLabel: '문서 탐색',
  },
  footer: {
    tagline: 'Openterface KVM-over-USB 하드웨어 및 앱 공식 가이드.',
    products: '제품',
    resources: '리소스',
    sites: '사이트',
    news: '뉴스 ↗',
    forum: '포럼 ↗',
    copyright: 'Openterface. 오픈 소스 KVM-over-USB.',
    privacy: '개인정보',
    terms: '약관',
    cookie: 'Cookie 설정',
  },
  newsletter: {
    title: '뉴스레터',
    description: '제품, 펌웨어, KVM 팁에 대한 월간 업데이트.',
    submit: '구독',
    namePlaceholder: '이름',
    emailPlaceholder: '이메일 *',
    footnote: '언제든지 구독 취소 가능.',
  },
});

const de = localeUi({
  siteName: 'Openterface Docs',
  siteDescription:
    'Offizielle Openterface-Dokumentation für KVM-over-USB — Mini-KVM, KVM-GO und uConsole: Einrichtung, FAQs, Fehlerbehebung und Tutorials für IT-Profis und Maker.',
  nav: {
    docsHome: 'Alle Docs',
    home: 'Startseite',
    faqs: 'FAQs',
    support: 'Support',
    product: 'Produkt',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'Über uns',
    news: 'News',
    shop: 'Shop',
    docsBadge: 'Docs',
    search: 'Suche',
    searchPlaceholder: 'Dokumentation durchsuchen…',
  },
  mobile: { sections: 'Abschnitte', ecosystem: 'Ökosystem', language: 'Sprache' },
  docs: {
    onThisPage: 'Auf dieser Seite',
    editPage: 'Seite bearbeiten',
    previous: 'Zurück',
    next: 'Weiter',
    sidebarLabel: 'Dokumentationsnavigation',
  },
  footer: {
    tagline: 'Offizielle Anleitungen für Openterface KVM-over-USB-Hardware und Apps.',
    products: 'Produkte',
    resources: 'Ressourcen',
    sites: 'Websites',
    news: 'News ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-Source KVM-over-USB.',
    privacy: 'Datenschutz',
    terms: 'AGB',
    cookie: 'Cookie-Einstellungen',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Monatliche Updates zu Produkten, Firmware und KVM-Tipps.',
    submit: 'Abonnieren',
    namePlaceholder: 'Name',
    emailPlaceholder: 'E-Mail *',
    footnote: 'Jederzeit kündbar.',
  },
});

const fr = localeUi({
  siteName: 'Documentation Openterface',
  siteDescription:
    'Documentation officielle Openterface KVM-over-USB — Mini-KVM, KVM-GO et extension uConsole : installation, FAQ, dépannage et tutoriels pour les professionnels IT.',
  nav: {
    docsHome: 'Toute la doc',
    home: 'Accueil',
    faqs: 'FAQ',
    support: 'Support',
    product: 'Produit',
    app: 'App',
    tutorial: 'Tutoriel',
    about: 'À propos',
    news: 'Actualités',
    shop: 'Boutique',
    docsBadge: 'Docs',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher dans la documentation…',
  },
  mobile: { sections: 'Sections', ecosystem: 'Écosystème', language: 'Langue' },
  docs: {
    onThisPage: 'Sur cette page',
    editPage: 'Modifier cette page',
    previous: 'Précédent',
    next: 'Suivant',
    sidebarLabel: 'Navigation documentation',
  },
  footer: {
    tagline: 'Guides officiels pour le matériel et les apps Openterface KVM-over-USB.',
    products: 'Produits',
    resources: 'Ressources',
    sites: 'Sites',
    news: 'Actualités ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Confidentialité',
    terms: 'Conditions',
    cookie: 'Paramètres cookies',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Mises à jour mensuelles sur les produits, firmware et astuces KVM.',
    submit: "S'abonner",
    namePlaceholder: 'Nom',
    emailPlaceholder: 'E-mail *',
    footnote: 'Désabonnement à tout moment.',
  },
});

const es = localeUi({
  siteName: 'Documentación Openterface',
  siteDescription:
    'Documentación oficial Openterface KVM-over-USB — Mini-KVM, KVM-GO y extensión uConsole: configuración, preguntas frecuentes, soporte y tutoriales para profesionales IT.',
  nav: {
    docsHome: 'Toda la documentación',
    home: 'Inicio',
    faqs: 'Preguntas frecuentes',
    support: 'Soporte',
    product: 'Producto',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'Acerca de',
    news: 'Noticias',
    shop: 'Tienda',
    docsBadge: 'Docs',
    search: 'Buscar',
    searchPlaceholder: 'Buscar en la documentación…',
  },
  mobile: { sections: 'Secciones', ecosystem: 'Ecosistema', language: 'Idioma' },
  docs: {
    onThisPage: 'En esta página',
    editPage: 'Editar esta página',
    previous: 'Anterior',
    next: 'Siguiente',
    sidebarLabel: 'Navegación de documentación',
  },
  footer: {
    tagline: 'Guías oficiales para hardware y apps Openterface KVM-over-USB.',
    products: 'Productos',
    resources: 'Recursos',
    sites: 'Sitios',
    news: 'Noticias ↗',
    forum: 'Foro ↗',
    copyright: 'Openterface. KVM-over-USB de código abierto.',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookie: 'Configuración de cookies',
  },
  newsletter: {
    title: 'Boletín',
    description: 'Actualizaciones mensuales sobre productos, firmware y consejos KVM.',
    submit: 'Suscribirse',
    namePlaceholder: 'Nombre',
    emailPlaceholder: 'Correo *',
    footnote: 'Cancela cuando quieras.',
  },
});

const it = localeUi({
  siteName: 'Documentazione Openterface',
  siteDescription:
    'Documentazione ufficiale Openterface KVM-over-USB — Mini-KVM, KVM-GO ed estensione uConsole: configurazione, FAQ, risoluzione problemi e tutorial per professionisti IT.',
  nav: {
    docsHome: 'Tutta la documentazione',
    home: 'Home',
    faqs: 'FAQ',
    support: 'Supporto',
    product: 'Prodotto',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'Informazioni',
    news: 'Notizie',
    shop: 'Negozio',
    docsBadge: 'Docs',
    search: 'Cerca',
    searchPlaceholder: 'Cerca nella documentazione…',
  },
  mobile: { sections: 'Sezioni', ecosystem: 'Ecosistema', language: 'Lingua' },
  docs: {
    onThisPage: 'In questa pagina',
    editPage: 'Modifica pagina',
    previous: 'Precedente',
    next: 'Successivo',
    sidebarLabel: 'Navigazione documentazione',
  },
  footer: {
    tagline: 'Guide ufficiali per hardware e app Openterface KVM-over-USB.',
    products: 'Prodotti',
    resources: 'Risorse',
    sites: 'Siti',
    news: 'Notizie ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Privacy',
    terms: 'Termini',
    cookie: 'Impostazioni cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Aggiornamenti mensili su prodotti, firmware e consigli KVM.',
    submit: 'Iscriviti',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'E-mail *',
    footnote: 'Annulla quando vuoi.',
  },
});

const pt = localeUi({
  siteName: 'Documentação Openterface',
  siteDescription:
    'Documentação oficial Openterface KVM-over-USB — Mini-KVM, KVM-GO e extensão uConsole: configuração, FAQs, resolução de problemas e tutoriais para profissionais de TI.',
  nav: {
    docsHome: 'Toda a documentação',
    home: 'Início',
    faqs: 'Perguntas frequentes',
    support: 'Suporte',
    product: 'Produto',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'Sobre',
    news: 'Notícias',
    shop: 'Loja',
    docsBadge: 'Docs',
    search: 'Pesquisar',
    searchPlaceholder: 'Pesquisar documentação…',
  },
  mobile: { sections: 'Secções', ecosystem: 'Ecossistema', language: 'Idioma' },
  docs: {
    onThisPage: 'Nesta página',
    editPage: 'Editar página',
    previous: 'Anterior',
    next: 'Seguinte',
    sidebarLabel: 'Navegação da documentação',
  },
  footer: {
    tagline: 'Guias oficiais para hardware e apps Openterface KVM-over-USB.',
    products: 'Produtos',
    resources: 'Recursos',
    sites: 'Sites',
    news: 'Notícias ↗',
    forum: 'Fórum ↗',
    copyright: 'Openterface. KVM-over-USB de código aberto.',
    privacy: 'Privacidade',
    terms: 'Termos',
    cookie: 'Definições de cookies',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Atualizações mensais sobre produtos, firmware e dicas KVM.',
    submit: 'Subscrever',
    namePlaceholder: 'Nome',
    emailPlaceholder: 'E-mail *',
    footnote: 'Cancele quando quiser.',
  },
});

const ro = localeUi({
  siteName: 'Documentație Openterface',
  siteDescription:
    'Documentație oficială Openterface KVM-over-USB — Mini-KVM, KVM-GO și extensia uConsole: configurare, întrebări frecvente, depanare și tutoriale pentru profesioniști IT.',
  nav: {
    docsHome: 'Toată documentația',
    home: 'Acasă',
    faqs: 'Întrebări frecvente',
    support: 'Suport',
    product: 'Produs',
    app: 'Aplicație',
    tutorial: 'Tutorial',
    about: 'Despre',
    news: 'Știri',
    shop: 'Magazin',
    docsBadge: 'Docs',
    search: 'Căutare',
    searchPlaceholder: 'Căutați în documentație…',
  },
  mobile: { sections: 'Secțiuni', ecosystem: 'Ecosistem', language: 'Limbă' },
  docs: {
    onThisPage: 'Pe această pagină',
    editPage: 'Editează pagina',
    previous: 'Anterior',
    next: 'Următor',
    sidebarLabel: 'Navigare documentație',
  },
  footer: {
    tagline: 'Ghiduri oficiale pentru hardware și aplicații Openterface KVM-over-USB.',
    products: 'Produse',
    resources: 'Resurse',
    sites: 'Site-uri',
    news: 'Știri ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Confidențialitate',
    terms: 'Termeni',
    cookie: 'Setări cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Actualizări lunare despre produse, firmware și sfaturi KVM.',
    submit: 'Abonare',
    namePlaceholder: 'Nume',
    emailPlaceholder: 'E-mail *',
    footnote: 'Dezabonare oricând.',
  },
});

const ru = localeUi({
  siteName: 'Документация Openterface',
  siteDescription:
    'Официальная документация Openterface KVM-over-USB — Mini-KVM, KVM-GO и uConsole: настройка, FAQ, устранение неполадок и руководства для IT-специалистов.',
  nav: {
    docsHome: 'Вся документация',
    home: 'Главная',
    faqs: 'FAQ',
    support: 'Поддержка',
    product: 'Продукт',
    app: 'Приложение',
    tutorial: 'Руководство',
    about: 'О нас',
    news: 'Новости',
    shop: 'Магазин',
    docsBadge: 'Документация',
    search: 'Поиск',
    searchPlaceholder: 'Поиск в документации…',
  },
  mobile: { sections: 'Разделы', ecosystem: 'Экосистема', language: 'Язык' },
  docs: {
    onThisPage: 'На этой странице',
    editPage: 'Редактировать страницу',
    previous: 'Назад',
    next: 'Далее',
    sidebarLabel: 'Навигация по документации',
  },
  footer: {
    tagline: 'Официальные руководства по оборудованию и приложениям Openterface KVM-over-USB.',
    products: 'Продукты',
    resources: 'Ресурсы',
    sites: 'Сайты',
    news: 'Новости ↗',
    forum: 'Форум ↗',
    copyright: 'Openterface. KVM-over-USB с открытым исходным кодом.',
    privacy: 'Конфиденциальность',
    terms: 'Условия',
    cookie: 'Настройки cookie',
  },
  newsletter: {
    title: 'Рассылка',
    description: 'Ежемесячные обновления о продуктах, прошивках и советах по KVM.',
    submit: 'Подписаться',
    namePlaceholder: 'Имя',
    emailPlaceholder: 'E-mail *',
    footnote: 'Отписка в любое время.',
  },
});

const ar = localeUi({
  siteName: 'توثيق Openterface',
  siteDescription:
    'التوثيق الرسمي لـ Openterface KVM-over-USB — Mini-KVM وKVM-GO وامتداد uConsole: الإعداد والأسئلة الشائعة واستكشاف الأخطاء والدروس لمحترفي IT.',
  nav: {
    docsHome: 'كل التوثيق',
    home: 'الرئيسية',
    faqs: 'الأسئلة الشائعة',
    support: 'الدعم',
    product: 'المنتج',
    app: 'التطبيق',
    tutorial: 'الدليل',
    about: 'حول',
    news: 'الأخبار',
    shop: 'المتجر',
    docsBadge: 'التوثيق',
    search: 'بحث',
    searchPlaceholder: 'البحث في التوثيق…',
  },
  mobile: { sections: 'الأقسام', ecosystem: 'النظام البيئي', language: 'اللغة' },
  docs: {
    onThisPage: 'في هذه الصفحة',
    editPage: 'تحرير هذه الصفحة',
    previous: 'السابق',
    next: 'التالي',
    sidebarLabel: 'تنقل التوثيق',
  },
  footer: {
    tagline: 'أدلة رسمية لأجهزة وتطبيقات Openterface KVM-over-USB.',
    products: 'المنتجات',
    resources: 'الموارد',
    sites: 'المواقع',
    news: 'الأخبار ↗',
    forum: 'المنتدى ↗',
    copyright: 'Openterface. KVM-over-USB مفتوح المصدر.',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    cookie: 'إعدادات ملفات تعريف الارتباط',
  },
  newsletter: {
    title: 'النشرة الإخبارية',
    description: 'تحديثات شهرية عن المنتجات والبرامج الثابتة ونصائح KVM.',
    submit: 'اشتراك',
    namePlaceholder: 'الاسم',
    emailPlaceholder: 'البريد الإلكتروني *',
    footnote: 'إلغاء الاشتراك في أي وقت.',
  },
});

const tr = localeUi({
  siteName: 'Openterface Dokümantasyonu',
  siteDescription:
    'Resmi Openterface KVM-over-USB belgeleri — Mini-KVM, KVM-GO ve uConsole: kurulum, SSS, sorun giderme ve IT profesyonelleri için eğitimler.',
  nav: {
    docsHome: 'Tüm dokümantasyon',
    home: 'Ana sayfa',
    faqs: 'SSS',
    support: 'Destek',
    product: 'Ürün',
    app: 'Uygulama',
    tutorial: 'Eğitim',
    about: 'Hakkında',
    news: 'Haberler',
    shop: 'Mağaza',
    docsBadge: 'Docs',
    search: 'Ara',
    searchPlaceholder: 'Dokümantasyonda ara…',
  },
  mobile: { sections: 'Bölümler', ecosystem: 'Ekosistem', language: 'Dil' },
  docs: {
    onThisPage: 'Bu sayfada',
    editPage: 'Sayfayı düzenle',
    previous: 'Önceki',
    next: 'Sonraki',
    sidebarLabel: 'Dokümantasyon gezintisi',
  },
  footer: {
    tagline: 'Openterface KVM-over-USB donanımı ve uygulamaları için resmi kılavuzlar.',
    products: 'Ürünler',
    resources: 'Kaynaklar',
    sites: 'Siteler',
    news: 'Haberler ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Açık kaynak KVM-over-USB.',
    privacy: 'Gizlilik',
    terms: 'Koşullar',
    cookie: 'Çerez ayarları',
  },
  newsletter: {
    title: 'Bülten',
    description: 'Ürünler, firmware ve KVM ipuçları hakkında aylık güncellemeler.',
    submit: 'Abone ol',
    namePlaceholder: 'Ad',
    emailPlaceholder: 'E-posta *',
    footnote: 'İstediğiniz zaman abonelikten çıkın.',
  },
});

const pl = localeUi({
  siteName: 'Dokumentacja Openterface',
  siteDescription:
    'Oficjalna dokumentacja Openterface KVM-over-USB — Mini-KVM, KVM-GO i uConsole: konfiguracja, FAQ, rozwiązywanie problemów i samouczki dla specjalistów IT.',
  nav: {
    docsHome: 'Cała dokumentacja',
    home: 'Strona główna',
    faqs: 'FAQ',
    support: 'Wsparcie',
    product: 'Produkt',
    app: 'Aplikacja',
    tutorial: 'Samouczek',
    about: 'O nas',
    news: 'Aktualności',
    shop: 'Sklep',
    docsBadge: 'Docs',
    search: 'Szukaj',
    searchPlaceholder: 'Szukaj w dokumentacji…',
  },
  mobile: { sections: 'Sekcje', ecosystem: 'Ekosystem', language: 'Język' },
  docs: {
    onThisPage: 'Na tej stronie',
    editPage: 'Edytuj stronę',
    previous: 'Poprzednia',
    next: 'Następna',
    sidebarLabel: 'Nawigacja dokumentacji',
  },
  footer: {
    tagline: 'Oficjalne przewodniki po sprzęcie i aplikacjach Openterface KVM-over-USB.',
    products: 'Produkty',
    resources: 'Zasoby',
    sites: 'Strony',
    news: 'Aktualności ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. KVM-over-USB open source.',
    privacy: 'Prywatność',
    terms: 'Regulamin',
    cookie: 'Ustawienia plików cookie',
  },
  newsletter: {
    title: 'Newsletter',
    description: 'Comiesięczne aktualizacje o produktach, firmware i wskazówkach KVM.',
    submit: 'Subskrybuj',
    namePlaceholder: 'Imię',
    emailPlaceholder: 'E-mail *',
    footnote: 'Wypisz się w dowolnym momencie.',
  },
});

const nl = localeUi({
  siteName: 'Openterface Docs',
  siteDescription:
    'Officiële Openterface KVM-over-USB-documentatie — Mini-KVM, KVM-GO en uConsole: installatie, FAQ’s, probleemoplossing en tutorials voor IT-professionals.',
  nav: {
    docsHome: 'Alle documentatie',
    home: 'Home',
    faqs: 'FAQ',
    support: 'Support',
    product: 'Product',
    app: 'App',
    tutorial: 'Tutorial',
    about: 'Over',
    news: 'Nieuws',
    shop: 'Shop',
    docsBadge: 'Docs',
    search: 'Zoeken',
    searchPlaceholder: 'Documentatie doorzoeken…',
  },
  mobile: { sections: 'Secties', ecosystem: 'Ecosysteem', language: 'Taal' },
  docs: {
    onThisPage: 'Op deze pagina',
    editPage: 'Pagina bewerken',
    previous: 'Vorige',
    next: 'Volgende',
    sidebarLabel: 'Documentatienavigatie',
  },
  footer: {
    tagline: 'Officiële handleidingen voor Openterface KVM-over-USB-hardware en -apps.',
    products: 'Producten',
    resources: 'Bronnen',
    sites: 'Sites',
    news: 'Nieuws ↗',
    forum: 'Forum ↗',
    copyright: 'Openterface. Open-source KVM-over-USB.',
    privacy: 'Privacy',
    terms: 'Voorwaarden',
    cookie: 'Cookie-instellingen',
  },
  newsletter: {
    title: 'Nieuwsbrief',
    description: 'Maandelijkse updates over producten, firmware en KVM-tips.',
    submit: 'Abonneren',
    namePlaceholder: 'Naam',
    emailPlaceholder: 'E-mail *',
    footnote: 'Op elk moment uitschrijven.',
  },
});

const dictionaries: Record<SiteLocale, UiStrings> = {
  en,
  zh,
  ja,
  ko,
  de,
  fr,
  es,
  it,
  pt,
  ro,
  hk,
  tw,
  ru,
  ar,
  tr,
  pl,
  nl,
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
  const docPath = (path: string) => resolveDocHref(path, locale);
  return [
    {
      label: ui.nav.product,
      href: docPath('product/kvm-go'),
      children: [
        { label: 'KVM-GO', href: docPath('product/kvm-go') },
        { label: 'Mini-KVM', href: docPath('product/minikvm') },
        { label: 'KeyMod', href: docPath('product/keymod') },
        { label: 'uConsole KVM', href: docPath('product/uconsole-kvm-extension') },
      ],
    },
    { label: ui.nav.app, href: docPath('app/overview') },
    { label: ui.nav.tutorial, href: docPath('tutorial/kvm') },
    { label: ui.nav.faqs, href: docPath('faq/kvm-over-usb') },
    { label: ui.nav.support, href: docPath('support') },
    { label: ui.nav.home, href: surfaceMarketingHost(locale), external: true },
    { label: ui.nav.news, href: newsPath(locale), external: true },
    { label: ui.nav.shop, href: SHOP_URL, external: true },
  ];
}
