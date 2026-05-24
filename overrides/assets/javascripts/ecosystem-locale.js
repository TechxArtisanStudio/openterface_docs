/** Locale-aware ecosystem links for docs.openterface.com */
(function () {
  const MARKETING = {
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

  function detectLocale() {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return MARKETING[seg] ? seg : 'en';
  }

  function updateLinks(root, locale) {
    if (!root) return;
    const marketing = root.querySelector('[data-op-ecosystem="marketing"]');
    if (marketing && MARKETING[locale]) {
      marketing.href = MARKETING[locale] + '/';
      marketing.textContent = 'Marketing ↗';
    }
    const newsBase = 'https://news.openterface.com';
    const newsLinks = root.querySelectorAll('[data-op-ecosystem="news"]');
    newsLinks.forEach(function (link) {
      link.href = locale === 'en' ? newsBase + '/' : newsBase + '/' + locale + '/';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    const locale = detectLocale();
    updateLinks(document.querySelector('.op-site-header__nav'), locale);
    updateLinks(document.querySelector('.op-site-header__sites-menu-panel'), locale);
  });
})();
