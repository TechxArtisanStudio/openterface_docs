#!/usr/bin/env node
/**
 * Replace Wave 2 (ru/ar/tr/pl/nl) nav_translations and site_name with native copy.
 * Run: node scripts/patch-wave2-nav-translations.mjs && node scripts/load-nav-translations.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';
import { NAV_BY_LOCALE, SITE_NAMES } from './wave2-nav-translations-data.mjs';

const ROOT = path.resolve(import.meta.dirname, '..');
const LOCALES_PATH = path.join(ROOT, 'config/locales.yml');
const WAVE2 = ['ru', 'ar', 'tr', 'pl', 'nl'];

const locales = parseYaml(fs.readFileSync(LOCALES_PATH, 'utf8'), { uniqueKeys: false });
const de = locales.find((e) => e.locale === 'de');
if (!de?.nav_translations) throw new Error('Missing de nav_translations in locales.yml');

const requiredKeys = Object.keys(de.nav_translations);

for (const locale of WAVE2) {
  const nav = NAV_BY_LOCALE[locale];
  if (!nav) throw new Error(`Missing NAV_BY_LOCALE.${locale}`);

  const missing = requiredKeys.filter((k) => !(k in nav));
  const extra = Object.keys(nav).filter((k) => !requiredKeys.includes(k));
  if (missing.length) throw new Error(`${locale}: missing keys: ${missing.join(', ')}`);
  if (extra.length) throw new Error(`${locale}: unexpected keys: ${extra.join(', ')}`);

  const entry = locales.find((e) => e.locale === locale);
  if (!entry) throw new Error(`Locale ${locale} not found in locales.yml`);

  entry.site_name = SITE_NAMES[locale];
  entry.nav_translations = { ...nav };
  console.log(`✓ ${locale}: ${Object.keys(nav).length} nav keys, site_name updated`);
}

fs.writeFileSync(LOCALES_PATH, stringifyYaml(locales, { lineWidth: 0 }));
console.log(`\nUpdated ${LOCALES_PATH}`);
