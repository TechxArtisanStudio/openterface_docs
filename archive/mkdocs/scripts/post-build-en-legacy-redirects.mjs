#!/usr/bin/env node
/**
 * Legacy /en/* → unprefixed EN paths (bookmarks from brief Phase 2 deploy).
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, '..', 'site');
const SITE_LOCALES = join(__dirname, '..', 'config', 'site-locales.json');

const { locales, default_locale: defaultLocale } = JSON.parse(readFileSync(SITE_LOCALES, 'utf8'));
const LOCALE_DIRS = new Set([...Object.keys(locales).filter((l) => l !== defaultLocale), 'en']);

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

function redirectHtml(target) {
  const canonical = `https://docs.openterface.com${target === '/' ? '/' : target}`;
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

function collectEnPaths(dir, base = SITE, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectEnPaths(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
}

if (!existsSync(SITE)) {
  console.warn('post-build-en-legacy-redirects: site/ missing');
  process.exit(0);
}

let count = 0;
for (const name of readdirSync(SITE)) {
  if (SKIP_ROOT.has(name) || name.startsWith('.')) continue;
  const src = join(SITE, name);
  if (statSync(src).isDirectory()) {
    for (const enPath of collectEnPaths(src, SITE)) {
      const target = enPath === '/' ? '/' : `${enPath}/`;
      const legacyPath = target === '/' ? join(SITE, 'en', 'index.html') : join(SITE, 'en', enPath.slice(1), 'index.html');
      mkdirSync(dirname(legacyPath), { recursive: true });
      writeFileSync(legacyPath, redirectHtml(target));
      count++;
    }
  } else if (name === 'index.html') {
    mkdirSync(join(SITE, 'en'), { recursive: true });
    writeFileSync(join(SITE, 'en', 'index.html'), redirectHtml('/'));
    count++;
  }
}

console.log(`post-build-en-legacy-redirects: ${count} /en/* stubs → unprefixed EN`);
