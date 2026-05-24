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

  document.addEventListener('DOMContentLoaded', function () {
    const locale = detectLocale();
    const strip = document.querySelector('.op-ecosystem-strip__inner');
    if (!strip) return;
    const marketing = strip.querySelector('a[href*="openterface.com"]');
    if (marketing && MARKETING[locale]) {
      marketing.href = MARKETING[locale] + '/';
      marketing.textContent = 'Marketing ↗';
    }
    const newsBase = 'https://news.openterface.com';
    const newsLink = strip.querySelector('a[href*="news.openterface"]');
    if (newsLink) {
      newsLink.href = locale === 'en' ? newsBase + '/' : newsBase + '/' + locale + '/';
    }
  });
})();
