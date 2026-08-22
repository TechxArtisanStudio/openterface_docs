#!/usr/bin/env node
/**
 * Post-build steps for GitHub Pages (Astro dist/).
 * - .nojekyll
 * - /en/* → unprefixed EN redirect stubs (legacy MkDocs bookmarks)
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const { locales, default_locale: defaultLocale } = JSON.parse(
  readFileSync(join(ROOT, 'config/site-locales.json'), 'utf8'),
);

const LOCALE_DIRS = new Set([...Object.keys(locales).filter((l) => l !== defaultLocale), 'en']);

const SKIP_ROOT = new Set([
  ...LOCALE_DIRS,
  'assets',
  'images',
  'sitemap-index.xml',
  'sitemap-0.xml',
  'robots.txt',
  '404.html',
  'CNAME',
  '.nojekyll',
]);

function redirectHtml(target, { external = false } = {}) {
  const canonical = external
    ? target
    : `https://docs.openterface.com${target === '/' ? '/' : target}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${target}">
  <link rel="canonical" href="${canonical}">
  <title>Redirecting…</title>
  <script>location.replace('${target}');</script>
</head>
<body><p><a href="${target}">Openterface Docs</a></p></body>
</html>
`;
}

/** Legacy MkDocs root shortcuts (apex had CF rules; docs host needs origin stubs). */
const SHORTCUT_REDIRECTS = [
  ['/discord/', 'https://discord.gg/sFTJD6a3R8', true],
  ['/reddit/', 'https://www.reddit.com/r/Openterface_miniKVM/', true],
  ['/x/', 'https://x.com/TechxArtisan', true],
  ['/youtube/', 'https://www.youtube.com/@TechxArtisan', true],
  ['/linkedin/', 'https://www.linkedin.com/company/techxartisan/', true],
  ['/instagram/', 'https://www.instagram.com/techxartisan/', true],
  ['/facebook/', 'https://www.facebook.com/techxartisan', true],
  ['/threads/', 'https://www.threads.net/@techxartisan', true],
  ['/tiktok/', 'https://www.tiktok.com/@techxartisan', true],
  ['/mastodon/', 'https://mastodon.social/@youyoubilly', true],
  ['/bluesky/', 'https://bsky.app/profile/youyoubilly.bsky.social', true],
  ['/feedback/', 'https://forms.gle/YJLrCKwro8tbi6ar7', true],
  ['/shop/', 'https://shop.techxartisan.com/', true],
  ['/appstore/', 'https://apps.apple.com/us/app/openterface-mini-kvm/id6478481082', true],
  ['/buy-mini-kvm/', 'https://www.crowdsupply.com/techxartisan/openterface-mini-kvm', true],
  ['/use-cases/', 'https://openterface.com/products/', true],
  ['/community/', 'https://openterface.com/community/', true],
  ['/compliance/', '/about/compliance/', false],
  ['/contributing/', '/about/contribute-support/', false],
  ['/event/', 'https://news.openterface.com/events/', true],
  ['/products/kvmgo/updates/', 'https://news.openterface.com/product/kvm-go/', true],
  ['/products/minikvm/updates/', 'https://news.openterface.com/product/minikvm/', true],
  ['/products/keymod/updates/', 'https://news.openterface.com/product/keymod/', true],
  ['/products/kvm-go/', '/products/kvmgo/', false],
  ['/usb-switch/', '/products/minikvm/extension-pins/', false],
  ['/videos/', 'https://openterface.com/media/', true],
];

function collectEnPaths(dir, base = DIST, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectEnPaths(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
}

const PRODUCT_SLUG_LEGACY = {
  kvmgo: 'kvm-go',
  kvmext: 'uconsole-kvm-extension',
  minikvm: 'minikvm',
  keymod: 'keymod',
  accessories: 'accessories',
};

const LOCALE_PREFIXES = [
  '',
  'zh/',
  'ja/',
  'ko/',
  'de/',
  'fr/',
  'es/',
  'it/',
  'pt/',
  'ro/',
  'hk/',
  'tw/',
  'ru/',
  'ar/',
  'tr/',
  'pl/',
  'nl/',
];

function toLegacyProductPath(newPath) {
  const match = newPath.match(/^\/products\/([^/]+)(\/.*)?$/);
  if (!match) return null;
  const [, slug, rest = ''] = match;
  const legacySlug = PRODUCT_SLUG_LEGACY[slug] ?? slug;
  return `/product/${legacySlug}${rest}`;
}

function writeRedirectStub(fromPath, toPath, external = false) {
  const legacyFile = join(DIST, fromPath.replace(/^\//, ''), 'index.html');
  if (existsSync(legacyFile)) return false;
  mkdirSync(dirname(legacyFile), { recursive: true });
  const target = external ? toPath : toPath.endsWith('/') ? toPath : `${toPath}/`;
  writeFileSync(legacyFile, redirectHtml(target, { external }));
  return true;
}

function writeRefactorRedirects() {
  let count = 0;
  const enPaths = collectEnPaths(DIST, DIST);

  for (const enPath of enPaths) {
    const target = enPath === '/' ? '/' : `${enPath}/`;
    const legacyProduct = toLegacyProductPath(enPath.startsWith('/') ? enPath : `/${enPath}`);
    if (!legacyProduct) continue;

    for (const prefix of LOCALE_PREFIXES) {
      const from = `/${prefix}${legacyProduct.replace(/^\//, '')}`.replace(/\/+/g, '/');
      const to = prefix ? `/${prefix}${target.replace(/^\//, '')}`.replace(/\/+/g, '/') : target;
      if (writeRedirectStub(from, to)) count++;
    }
  }

  for (const [from, to] of [
    ['/app/', '/app/kvm/'],
    ['/app/overview/', '/app/kvm/'],
    ['/app/faq/', '/app/kvm/faq/'],
  ]) {
    for (const prefix of LOCALE_PREFIXES) {
      const fromPath = `/${prefix}${from.replace(/^\//, '')}`.replace(/\/+/g, '/');
      const toPath = prefix ? `/${prefix}${to.replace(/^\//, '')}`.replace(/\/+/g, '/') : to;
      if (writeRedirectStub(fromPath, toPath)) count++;
    }
  }

  return count;
}

function writeShortcutRedirects() {
  let count = 0;
  for (const [from, to, external] of SHORTCUT_REDIRECTS) {
    if (writeRedirectStub(from, to, external)) count++;
    for (const prefix of LOCALE_PREFIXES) {
      if (!prefix) continue;
      const localizedFrom = `/${prefix}${from.replace(/^\//, '')}`.replace(/\/+/g, '/');
      let localizedTo = to;
      if (!external && to.startsWith('/')) {
        localizedTo = `/${prefix}${to.replace(/^\//, '')}`.replace(/\/+/g, '/');
      } else if (from === '/event/' && prefix) {
        localizedTo = `https://news.openterface.com/${prefix.replace(/\/$/, '')}/events/`;
      }
      if (writeRedirectStub(localizedFrom, localizedTo, external || from === '/event/')) count++;
    }
  }
  return count;
}

if (!existsSync(DIST)) {
  console.error('post-build: dist/ missing — run npm run build first');
  process.exit(1);
}

writeFileSync(join(DIST, '.nojekyll'), '');
console.log('post-build: wrote dist/.nojekyll');

let redirectCount = 0;
for (const name of readdirSync(DIST)) {
  if (SKIP_ROOT.has(name) || name.startsWith('.')) continue;
  const src = join(DIST, name);
  if (statSync(src).isDirectory()) {
    for (const enPath of collectEnPaths(src, DIST)) {
      const target = enPath === '/' ? '/' : `${enPath}/`;
      const legacyPath =
        target === '/'
          ? join(DIST, 'en', 'index.html')
          : join(DIST, 'en', enPath.slice(1), 'index.html');
      mkdirSync(dirname(legacyPath), { recursive: true });
      writeFileSync(legacyPath, redirectHtml(target));
      redirectCount++;
    }
  } else if (name === 'index.html') {
    mkdirSync(join(DIST, 'en'), { recursive: true });
    writeFileSync(join(DIST, 'en', 'index.html'), redirectHtml('/'));
    redirectCount++;
  }
}

console.log(`post-build: ${redirectCount} /en/* redirect stubs → unprefixed EN`);

const refactorCount = writeRefactorRedirects();
console.log(`post-build: ${refactorCount} /product/* and /app/overview|faq/ redirect stubs`);

const shortcutCount = writeShortcutRedirects();
console.log(`post-build: ${shortcutCount} legacy shortcut redirect stubs`);

/** For each legacy locale prefix, mirror every EN content page as a redirect stub → unprefixed EN. */
function writeLegacyLocaleRedirects(enPaths) {
  const DROPPED_LOCALES = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw', 'ru', 'ar', 'tr', 'pl', 'nl'];
  let count = 0;
  for (const loc of DROPPED_LOCALES) {
    for (const enPath of enPaths) {
      const fromPath = enPath === '/' ? `/${loc}/` : `/${loc}${enPath}`;
      if (writeRedirectStub(fromPath, enPath === '/' ? '/' : enPath)) count++;
    }
  }
  return count;
}

const legacyLocaleCount = writeLegacyLocaleRedirects(collectEnPaths(DIST, DIST).filter((p) => {
  // Skip redirect stubs themselves and non-content top-level dirs.
  if (/^\/(en|zh|ja|ko|de|fr|es|it|pt|ro|hk|tw|ru|ar|tr|pl|nl|assets|images)(\/|$)/.test(p)) return false;
  const file = join(DIST, p.slice(1), 'index.html');
  if (!existsSync(file)) return false;
  const head = readFileSync(file, 'utf8').slice(0, 500);
  return !head.includes('Redirecting to:');
}));
console.log(`post-build: ${legacyLocaleCount} legacy-locale → EN redirect stubs`);
