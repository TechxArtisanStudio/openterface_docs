#!/usr/bin/env node
/**
 * Translation coverage audit for suffix-file i18n (*.zh.md, etc.).
 */
import { readdirSync, statSync, readFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS = join(__dirname, '..', '..', 'docs');
const LOCALES_JSON = join(__dirname, '..', '..', '..', '..', 'web-dev-tool/analytics/locales.json');

const failOnMissing = process.argv.includes('--fail-on-missing');
const onlyMissing = process.argv.includes('--only-missing');

const { locales, default_locale: defaultLocale } = JSON.parse(readFileSync(LOCALES_JSON, 'utf8'));
const targetLocales = Object.keys(locales).filter((l) => l !== defaultLocale);

function isBaseMd(name) {
  return name.endsWith('.md') && !/\.[a-z]{2}\.md$/.test(name);
}

function collectBaseFiles(dir, base = DOCS) {
  const files = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      files.push(...collectBaseFiles(p, base));
    } else if (isBaseMd(name)) {
      files.push(relative(base, p));
    }
  }
  return files;
}

const baseFiles = collectBaseFiles(DOCS);
let missingTotal = 0;

for (const file of baseFiles.sort()) {
  const stem = file.replace(/\.md$/, '');
  const missing = [];
  for (const loc of targetLocales) {
    const translated = join(DOCS, `${stem}.${loc}.md`);
    if (!statSync(join(DOCS, file)).isFile()) continue;
    try {
      statSync(translated);
    } catch {
      missing.push(loc);
    }
  }
  if (missing.length) {
    missingTotal += missing.length;
    if (!onlyMissing || missing.length < targetLocales.length) {
      console.log(`${file}: missing [${missing.join(', ')}]`);
    }
  } else if (!onlyMissing) {
    console.log(`${file}: complete`);
  }
}

console.log(`\n${baseFiles.length} base files, ${missingTotal} missing translations`);
if (failOnMissing && missingTotal) process.exit(1);
