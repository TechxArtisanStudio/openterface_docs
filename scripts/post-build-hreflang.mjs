#!/usr/bin/env node
/**
 * Emit hreflang cluster B manifest for docs (path-aligned locales).
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

function collectHtml(dir, base = SITE, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectHtml(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
}

if (!existsSync(join(SITE, 'en'))) {
  console.warn('post-build-hreflang: site/en/ missing — skip');
  process.exit(0);
}

const enPaths = collectHtml(join(SITE, 'en')).map((p) => (p === '/' ? '/en/' : `/en${p}/`));

const manifest = enPaths.map((enPath) => {
  const suffix = enPath.replace(/^\/en/, '') || '/';
  const alternates = {};
  for (const code of LOCALE_CODES) {
    alternates[code] =
      code === defaultLocale
        ? `${BASE}${enPath}`
        : `${BASE}/${code}${suffix === '/' ? '/' : suffix}`;
  }
  return { path: enPath, alternates, xDefault: alternates[defaultLocale] };
});

mkdirSync(SITE, { recursive: true });
writeFileSync(OUT, JSON.stringify({ cluster: 'docs', pages: manifest.slice(0, 5000) }, null, 2));
console.log(`post-build-hreflang: ${manifest.length} logical pages → site/hreflang-manifest.json`);
