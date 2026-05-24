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

function collectEnPaths(dir, base = DIST, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) collectEnPaths(p, base, acc);
    else if (name === 'index.html') acc.push('/' + relative(base, dirname(p)).replace(/\\/g, '/'));
  }
  return acc;
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
