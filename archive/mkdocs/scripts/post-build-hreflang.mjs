#!/usr/bin/env node
/**
 * Emit hreflang cluster B manifest for docs (English unprefixed at /).
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, '..', 'site');
const OUT = join(SITE, 'hreflang-manifest.json');
const BASE = 'https://docs.openterface.com';
const SITE_LOCALES = join(__dirname, '..', 'config', 'site-locales.json');

const { locales, default_locale: defaultLocale } = JSON.parse(readFileSync(SITE_LOCALES, 'utf8'));
const LOCALE_CODES = Object.keys(locales);
const LOCALE_DIRS = new Set([...LOCALE_CODES.filter((l) => l !== defaultLocale), 'en']);

const SKIP_ROOT = new Set([
  ...LOCALE_DIRS,
  'assets',
  'search',
  'sitemap.xml',
  'sitemap.xml.gz',
  'robots.txt',
  'hreflang-manifest.json',
  '404.html',
  'CNAME',
  '.nojekyll',
]);

function collectHtml(dir, base = SITE, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectHtml(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
}

if (!existsSync(SITE)) {
  console.warn('post-build-hreflang: site/ missing');
  process.exit(0);
}

const enPaths = [];
for (const name of readdirSync(SITE)) {
  if (SKIP_ROOT.has(name) || name.startsWith('.')) continue;
  const p = join(SITE, name);
  if (statSync(p).isDirectory()) enPaths.push(...collectHtml(p, SITE));
  else if (name === 'index.html') enPaths.push('/');
}

const manifest = enPaths.map((enPath) => {
  const suffix = enPath === '/' ? '/' : `${enPath}/`;
  const alternates = {};
  for (const code of LOCALE_CODES) {
    alternates[code] =
      code === defaultLocale
        ? `${BASE}${suffix}`
        : `${BASE}/${code}${suffix === '/' ? '/' : suffix}`;
  }
  return { path: suffix, alternates, xDefault: alternates[defaultLocale] };
});

mkdirSync(SITE, { recursive: true });
writeFileSync(OUT, JSON.stringify({ cluster: 'docs', pages: manifest.slice(0, 5000) }, null, 2));
console.log(`post-build-hreflang: ${manifest.length} logical pages → site/hreflang-manifest.json`);
