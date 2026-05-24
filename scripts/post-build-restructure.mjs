#!/usr/bin/env node
/**
 * Move default-locale (EN) build output from site root → site/en/
 * mkdocs-static-i18n puts default locale at /; we want docs.openterface.com/en/
 */
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, '..', 'site');
const SITE_LOCALES = join(__dirname, '..', 'config', 'site-locales.json');

const { locales, default_locale: defaultLocale } = JSON.parse(readFileSync(SITE_LOCALES, 'utf8'));
const NON_DEFAULT_LOCALES = Object.keys(locales).filter((l) => l !== defaultLocale);

const KEEP_AT_ROOT = new Set([
  ...NON_DEFAULT_LOCALES,
  'en',
  'CNAME',
  'index.html',
  '404.html',
  'sitemap.xml',
  'sitemap.xml.gz',
  'robots.txt',
  'hreflang-manifest.json',
]);

function shouldMove(name) {
  if (KEEP_AT_ROOT.has(name)) return false;
  if (name.startsWith('.')) return false;
  // Zensical partial i18n artifacts (index.zh, …) — fold into /en/
  if (/^index\.[a-z]{2}$/.test(name)) return true;
  return true;
}

if (!existsSync(SITE)) {
  console.warn('post-build-restructure: site/ missing');
  process.exit(0);
}

const enDir = join(SITE, 'en');
mkdirSync(enDir, { recursive: true });

let moved = 0;
for (const name of readdirSync(SITE)) {
  if (!shouldMove(name)) continue;
  const src = join(SITE, name);
  const dest = join(enDir, name);
  renameSync(src, dest);
  moved++;
}

writeFileSync(
  join(SITE, 'index.html'),
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=/en/">
  <link rel="canonical" href="https://docs.openterface.com/en/">
  <title>Redirecting…</title>
  <script>location.replace('/en/');</script>
</head>
<body><p><a href="/en/">Openterface Docs</a></p></body>
</html>
`,
);

console.log(`post-build-restructure: moved ${moved} entries into site/en/`);
