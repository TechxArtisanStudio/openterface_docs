/**
 * GA4 for docs.openterface.com — Consent Mode v2, cross-domain linker, site_locale.
 * Aligns with openterface_en AnalyticsHead.astro (shared property G-EKZEH6QYWT).
 */
(function () {
  const MEASUREMENT_ID = 'G-EKZEH6QYWT';
  const STORAGE_KEY = 'openterface-cookie-consent';
  const AHREFS_KEY = 'b3G5nUND8OglcZwfjfwixQ';
  const LOCALE_CODES = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro'];
  const LINKER_DOMAINS = [
    'openterface.com',
    'en.openterface.com',
    'de.openterface.com',
    'es.openterface.com',
    'fr.openterface.com',
    'it.openterface.com',
    'jp.openterface.com',
    'kr.openterface.com',
    'pt.openterface.com',
    'ro.openterface.com',
    'cn.openterface.com',
    'news.openterface.com',
    'docs.openterface.com',
  ];

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });

  let pageViewSent = false;
  let consentGranted = false;

  function siteLocale() {
    const seg = window.location.pathname.split('/').filter(Boolean)[0];
    return LOCALE_CODES.includes(seg) ? seg : 'en';
  }

  function loadGtagScript() {
    if (document.getElementById('op-gtag-js')) return;
    const s = document.createElement('script');
    s.id = 'op-gtag-js';
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
    document.head.appendChild(s);
  }

  function loadAhrefs() {
    if (document.getElementById('ahrefs-analytics')) return;
    const s = document.createElement('script');
    s.id = 'ahrefs-analytics';
    s.src = 'https://analytics.ahrefs.com/analytics.js';
    s.dataset.key = AHREFS_KEY;
    s.async = true;
    document.head.appendChild(s);
  }

  function sendPageView() {
    gtag('event', 'page_view', {
      page_path: window.location.pathname,
      site_locale: siteLocale(),
    });
    pageViewSent = true;
  }

  function grant() {
    if (consentGranted) return;
    consentGranted = true;
    loadGtagScript();
    gtag('consent', 'update', { analytics_storage: 'granted' });
    gtag('js', new Date());
    gtag('config', MEASUREMENT_ID, {
      send_page_view: false,
      linker: { domains: LINKER_DOMAINS },
    });
    if (!pageViewSent) sendPageView();
    loadAhrefs();
    try {
      localStorage.setItem(STORAGE_KEY, 'granted');
    } catch (_) {
      /* ignore */
    }
  }

  function deny() {
    consentGranted = false;
    gtag('consent', 'update', { analytics_storage: 'denied' });
    try {
      localStorage.setItem(STORAGE_KEY, 'denied');
    } catch (_) {
      /* ignore */
    }
  }

  function materialConsentGranted() {
    try {
      if (typeof __md_get !== 'function') return false;
      const c = __md_get('__consent');
      return Boolean(c && c.analytics);
    } catch (_) {
      return false;
    }
  }

  function syncFromStorage() {
    try {
      if (localStorage.getItem(STORAGE_KEY) === 'granted') {
        grant();
        return true;
      }
      if (localStorage.getItem(STORAGE_KEY) === 'denied') return true;
    } catch (_) {
      /* ignore */
    }
    if (materialConsentGranted()) {
      grant();
      return true;
    }
    return false;
  }

  function hookMaterialConsent() {
    const form = document.forms.consent;
    if (!form) return;
    for (const action of ['submit', 'reset']) {
      form.addEventListener(action, function (e) {
        if (action === 'reset') {
          deny();
          return;
        }
        const fd = new FormData(form);
        if (fd.has('analytics')) grant();
        else deny();
      });
    }
  }

  function hookInstantNavigation() {
    if (typeof document$ === 'undefined' || !document$.subscribe) return;
    document$.subscribe(function () {
      if (consentGranted) {
        pageViewSent = false;
        sendPageView();
      }
    });
  }

  function hookSearch() {
    document.addEventListener('DOMContentLoaded', function () {
      const search = document.forms.search;
      if (!search || !search.query) return;
      search.query.addEventListener('blur', function () {
        if (!consentGranted || !this.value) return;
        gtag('event', 'search', {
          search_term: this.value,
          site_locale: siteLocale(),
        });
      });
    });
  }

  syncFromStorage();
  document.addEventListener('DOMContentLoaded', function () {
    if (!consentGranted) syncFromStorage();
    hookMaterialConsent();
    hookInstantNavigation();
    hookSearch();
  });

  window.__openterfaceAnalytics = { grant, deny, siteLocale };
})();
