#!/usr/bin/env node
/**
 * Generate index.{locale}.md hub pages (no marketing carousel templates).
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOCS = join(__dirname, '..', 'docs');
const SITE_LOCALES = join(__dirname, '..', 'config', 'site-locales.json');

const { locales, default_locale: defaultLocale } = JSON.parse(readFileSync(SITE_LOCALES, 'utf8'));

const INTRO = {
  en: {
    title: 'Documentation',
    h1: 'Openterface Documentation',
    lead: 'Welcome to the official documentation hub for Openterface KVM-over-USB products and software.',
  },
  zh: {
    title: '文档',
    h1: 'Openterface 文档',
    lead: '欢迎阅读 Openterface KVM-over-USB 产品与软件的官方文档。',
  },
  ja: {
    title: 'ドキュメント',
    h1: 'Openterface ドキュメント',
    lead: 'Openterface KVM-over-USB 製品とソフトウェアの公式ドキュメントへようこそ。',
  },
  ko: {
    title: '문서',
    h1: 'Openterface 문서',
    lead: 'Openterface KVM-over-USB 제품 및 소프트웨어 공식 문서 허브입니다.',
  },
  de: {
    title: 'Dokumentation',
    h1: 'Openterface Dokumentation',
    lead: 'Willkommen in der offiziellen Dokumentation für Openterface KVM-over-USB Produkte und Software.',
  },
  fr: {
    title: 'Documentation',
    h1: 'Documentation Openterface',
    lead: 'Bienvenue dans la documentation officielle des produits et logiciels Openterface KVM-over-USB.',
  },
  es: {
    title: 'Documentación',
    h1: 'Documentación Openterface',
    lead: 'Bienvenido al centro de documentación oficial de productos y software Openterface KVM-over-USB.',
  },
  it: {
    title: 'Documentazione',
    h1: 'Documentazione Openterface',
    lead: 'Benvenuto nella documentazione ufficiale dei prodotti e software Openterface KVM-over-USB.',
  },
  pt: {
    title: 'Documentação',
    h1: 'Documentação Openterface',
    lead: 'Bem-vindo ao hub oficial de documentação dos produtos e software Openterface KVM-over-USB.',
  },
  ro: {
    title: 'Documentație',
    h1: 'Documentație Openterface',
    lead: 'Bun venit la documentația oficială pentru produsele și software-ul Openterface KVM-over-USB.',
  },
};

function localePrefix(code) {
  return `/${code}/`;
}

for (const [code] of Object.entries(locales)) {
  if (code === defaultLocale) continue;
  const t = INTRO[code] ?? INTRO.en;
  const p = localePrefix(code);
  const body = `---
title: ${t.title}
description: ${t.lead}
---

# ${t.h1}

${t.lead}

## Quick links

- [KVM-GO](${p}product/kvm-go/)
- [Mini-KVM](${p}product/minikvm/)
- [KeyMod](${p}product/keymod/)
- [Download App](${p}app/overview/)
- [Support](${p}support/)
- [News ↗](https://news.openterface.com/${code === 'en' ? '' : `${code}/`})
`;
  const out = join(DOCS, `index.${code}.md`);
  writeFileSync(out, body);
  console.log(`generate-locale-indexes: ${out}`);
}

if (existsSync(join(DOCS, 'index.md'))) {
  const en = INTRO.en;
  writeFileSync(
    join(DOCS, 'index.md'),
    `---
title: ${en.title}
description: ${en.lead}
---

# ${en.h1}

${en.lead}

## Quick links

- [Product documentation](/product/kvm-go/) — KVM-GO, Mini-KVM, KeyMod, uConsole KVM Extension, Accessories
- [Download the app](/app/overview/) — macOS, Windows, Linux, Android
- [Tutorials](/tutorial/kvm/) — KVM and KeyMod getting started guides
- [FAQs](/faq/) — Common questions
- [Support](/support/) — Help, forum, and latest news

## Other sites

- [News ↗](https://news.openterface.com/) — Product updates and announcements
- [Shop ↗](https://shop.techxartisan.com/) — Purchase hardware
- [Forum ↗](https://forum.openterface.com/) — Community discussions
`,
  );
}

console.log('generate-locale-indexes: done');
