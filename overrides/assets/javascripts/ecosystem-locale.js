/** Locale-aware cross-site links in docs tabs row (Home, News) */
(function () {
  const PROD_HOME = {
    en: 'https://en.openterface.com',
    zh: 'https://cn.openterface.com',
    ja: 'https://jp.openterface.com',
    ko: 'https://kr.openterface.com',
    de: 'https://de.openterface.com',
    fr: 'https://fr.openterface.com',
    es: 'https://es.openterface.com',
    it: 'https://it.openterface.com',
    pt: 'https://pt.openterface.com',
    ro: 'https://ro.openterface.com',
  };

  const PROD_NEWS = 'https://news.openterface.com';
  const dev = window.__OP_DEV_SURFACE;
  const HOME = dev && dev.marketing ? dev.marketing : PROD_HOME;
  const newsBase = dev && dev.news ? dev.news : PROD_NEWS;

  function detectLocale() {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return HOME[seg] ? seg : 'en';
  }

  function updateTabs(locale) {
    const tabs = document.querySelector('.op-site-header .md-tabs');
    if (!tabs) return;

    const home = tabs.querySelector('[data-op-ecosystem="home"]');
    if (home && HOME[locale]) {
      home.href = HOME[locale] + '/';
    }

    tabs.querySelectorAll('[data-op-ecosystem="news"]').forEach(function (link) {
      link.href = locale === 'en' ? newsBase + '/' : newsBase + '/' + locale + '/';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateTabs(detectLocale());
  });
})();
