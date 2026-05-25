/**
 * One-time maintenance: add hk/tw/ru/ar/tr/pl/nl nav_translations to config/locales.yml
 * from zh (OpenCC) or de (phrase map), then regenerate nav-translations.generated.ts.
 */
import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';
import * as OpenCC from 'opencc-js';

const ROOT = path.resolve(import.meta.dirname, '..');
const LOCALES_PATH = path.join(ROOT, 'config/locales.yml');

const DE_TO_RU = [
  ['und', 'и'], ['oder', 'или'], ['nicht', 'не'], ['mit', 'с'], ['für', 'для'],
  ['über', 'о'], ['Produkt', 'Продукт'], ['Produkte', 'Продукты'], ['Dokumentation', 'Документация'],
  ['Anleitung', 'Руководство'], ['Support', 'Поддержка'], ['Download', 'Скачать'],
  ['Verbindung', 'Подключение'], ['Funktionen', 'Функции'], ['Übersicht', 'Обзор'],
  ['Fragen', 'Вопросы'], ['Antworten', 'Ответы'], ['Installation', 'Установка'],
  ['Software', 'Программное обеспечение'], ['Hardware', 'Оборудование'], ['Updates', 'Обновления'],
  ['News', 'Новости'], ['Shop', 'Магазин'],
];

const DE_TO_AR = [
  ['und', 'و'], ['oder', 'أو'], ['nicht', 'لا'], ['mit', 'مع'], ['für', 'لـ'],
  ['über', 'حول'], ['Produkt', 'منتج'], ['Produkte', 'منتجات'], ['Dokumentation', 'التوثيق'],
  ['Anleitung', 'دليل'], ['Support', 'الدعم'], ['Download', 'تنزيل'],
  ['Verbindung', 'الاتصال'], ['Funktionen', 'الميزات'], ['Übersicht', 'نظرة عامة'],
  ['Fragen', 'أسئلة'], ['Antworten', 'إجابات'], ['Installation', 'التثبيت'],
  ['Software', 'البرمجيات'], ['Hardware', 'الأجهزة'], ['Updates', 'التحديثات'],
  ['News', 'الأخبار'], ['Shop', 'المتجر'],
];

const DE_TO_TR = [
  ['und', 've'], ['oder', 'veya'], ['nicht', 'değil'], ['mit', 'ile'], ['für', 'için'],
  ['über', 'hakkında'], ['Produkt', 'Ürün'], ['Produkte', 'Ürünler'], ['Dokumentation', 'Dokümantasyon'],
  ['Anleitung', 'Kılavuz'], ['Support', 'Destek'], ['Download', 'İndir'],
  ['Verbindung', 'Bağlantı'], ['Funktionen', 'Özellikler'], ['Übersicht', 'Genel Bakış'],
  ['Fragen', 'Sorular'], ['Antworten', 'Yanıtlar'], ['Installation', 'Kurulum'],
  ['Software', 'Yazılım'], ['Hardware', 'Donanım'], ['Updates', 'Güncellemeler'],
  ['News', 'Haberler'], ['Shop', 'Mağaza'],
];

const DE_TO_PL = [
  ['und', 'i'], ['oder', 'lub'], ['nicht', 'nie'], ['mit', 'z'], ['für', 'dla'],
  ['über', 'o'], ['Produkt', 'Produkt'], ['Produkte', 'Produkty'], ['Dokumentation', 'Dokumentacja'],
  ['Anleitung', 'Przewodnik'], ['Support', 'Wsparcie'], ['Download', 'Pobierz'],
  ['Verbindung', 'Połączenie'], ['Funktionen', 'Funkcje'], ['Übersicht', 'Przegląd'],
  ['Fragen', 'Pytania'], ['Antworten', 'Odpowiedzi'], ['Installation', 'Instalacja'],
  ['Software', 'Oprogramowanie'], ['Hardware', 'Sprzęt'], ['Updates', 'Aktualizacje'],
  ['News', 'Aktualności'], ['Shop', 'Sklep'],
];

const DE_TO_NL = [
  ['und', 'en'], ['oder', 'of'], ['nicht', 'niet'], ['mit', 'met'], ['für', 'voor'],
  ['über', 'over'], ['Produkt', 'Product'], ['Produkte', 'Producten'], ['Dokumentation', 'Documentatie'],
  ['Anleitung', 'Handleiding'], ['Support', 'Ondersteuning'], ['Download', 'Download'],
  ['Verbindung', 'Verbinding'], ['Funktionen', 'Functies'], ['Übersicht', 'Overzicht'],
  ['Fragen', 'Vragen'], ['Antworten', 'Antwoorden'], ['Installation', 'Installatie'],
  ['Software', 'Software'], ['Hardware', 'Hardware'], ['Updates', 'Updates'],
  ['News', 'Nieuws'], ['Shop', 'Shop'],
];

function applyMap(text, pairs) {
  let out = text;
  for (const [from, to] of pairs) out = out.replaceAll(from, to);
  return out;
}

function convertNav(nav, converter) {
  const out = {};
  for (const [key, value] of Object.entries(nav)) {
    out[key] = converter(String(value));
  }
  return out;
}

const locales = parseYaml(fs.readFileSync(LOCALES_PATH, 'utf8'), { uniqueKeys: false });
const zh = locales.find((e) => e.locale === 'zh');
const de = locales.find((e) => e.locale === 'de');
if (!zh || !de) throw new Error('Expected zh and de entries in locales.yml');

const toHK = OpenCC.Converter({ from: 'cn', to: 'hk' });
const toTW = OpenCC.Converter({ from: 'cn', to: 'tw' });

const additions = [
  {
    locale: 'hk',
    name: '繁體中文（香港）',
    build: true,
    site_name: toHK(zh.site_name),
    nav_translations: convertNav(zh.nav_translations, toHK),
  },
  {
    locale: 'tw',
    name: '繁體中文（台灣）',
    build: true,
    site_name: toTW(zh.site_name),
    nav_translations: convertNav(zh.nav_translations, toTW),
  },
  {
    locale: 'ru',
    name: 'Русский',
    build: true,
    site_name: applyMap(de.site_name, DE_TO_RU),
    nav_translations: convertNav(de.nav_translations, (v) => applyMap(v, DE_TO_RU)),
  },
  {
    locale: 'ar',
    name: 'العربية',
    build: true,
    site_name: applyMap(de.site_name, DE_TO_AR),
    nav_translations: convertNav(de.nav_translations, (v) => applyMap(v, DE_TO_AR)),
  },
  {
    locale: 'tr',
    name: 'Türkçe',
    build: true,
    site_name: applyMap(de.site_name, DE_TO_TR),
    nav_translations: convertNav(de.nav_translations, (v) => applyMap(v, DE_TO_TR)),
  },
  {
    locale: 'pl',
    name: 'Polski',
    build: true,
    site_name: applyMap(de.site_name, DE_TO_PL),
    nav_translations: convertNav(de.nav_translations, (v) => applyMap(v, DE_TO_PL)),
  },
  {
    locale: 'nl',
    name: 'Nederlands',
    build: true,
    site_name: applyMap(de.site_name, DE_TO_NL),
    nav_translations: convertNav(de.nav_translations, (v) => applyMap(v, DE_TO_NL)),
  },
];

const existing = new Set(locales.map((e) => e.locale));
let added = 0;
for (const entry of additions) {
  if (existing.has(entry.locale)) {
    console.log(`skip ${entry.locale} (already in locales.yml)`);
    continue;
  }
  locales.push(entry);
  existing.add(entry.locale);
  added++;
  console.log(`added ${entry.locale} nav_translations (${Object.keys(entry.nav_translations).length} keys)`);
}

if (added === 0) {
  console.log('No new locales to add.');
} else {
  fs.writeFileSync(LOCALES_PATH, stringifyYaml(locales, { lineWidth: 0 }));
  console.log(`Updated ${LOCALES_PATH}`);
}
