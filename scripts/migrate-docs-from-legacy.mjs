#!/usr/bin/env node
/**
 * Copy trimmed documentation from legacy Openterface/docs into openterface_docs/docs/.
 * Excludes updates, events, marketing-only overrides, and video grids.
 */
import { cpSync, existsSync, mkdirSync, rmSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const LEGACY_DOCS = join(REPO_ROOT, '../../Openterface/docs');
const TARGET = join(REPO_ROOT, 'docs');
const LEGACY_OVERRIDES = join(LEGACY_DOCS, 'overrides');
const TARGET_OVERRIDES = join(REPO_ROOT, 'overrides');

const EXCLUDE_DIR_NAMES = new Set(['updates', 'event']);
const EXCLUDE_FILE_PATTERNS = [
  /^home(\.[a-z]{2})?\.html$/,
  /^videos\.md$/,
  /^use-cases\.md$/,
  /^home-videos/,
  /^videos-grid/,
];

function shouldExclude(relPath) {
  const parts = relPath.split(/[/\\]/);
  if (parts.some((p) => EXCLUDE_DIR_NAMES.has(p))) return true;
  const base = parts[parts.length - 1] ?? '';
  return EXCLUDE_FILE_PATTERNS.some((re) => re.test(base));
}

function copyTree(src, dest, rel = '') {
  if (shouldExclude(rel)) return;
  const st = statSync(src);
  if (st.isDirectory()) {
    mkdirSync(dest, { recursive: true });
    for (const name of readdirSync(src)) {
      copyTree(join(src, name), join(dest, name), join(rel, name));
    }
    return;
  }
  cpSync(src, dest);
}

if (!existsSync(LEGACY_DOCS)) {
  console.error(`Legacy docs not found: ${LEGACY_DOCS}`);
  process.exit(1);
}

if (existsSync(TARGET)) {
  rmSync(TARGET, { recursive: true, force: true });
}

console.log(`Migrating ${LEGACY_DOCS} → ${TARGET}`);
copyTree(LEGACY_DOCS, TARGET);

// Copy theme icons (not home overrides)
if (existsSync(join(LEGACY_OVERRIDES, '.icons'))) {
  cpSync(join(LEGACY_OVERRIDES, '.icons'), join(TARGET_OVERRIDES, '.icons'), { recursive: true });
}

// Copy 404 template
const legacy404 = join(LEGACY_OVERRIDES, '404.html');
if (existsSync(legacy404)) {
  mkdirSync(join(TARGET_OVERRIDES, 'partials'), { recursive: true });
  cpSync(legacy404, join(TARGET_OVERRIDES, '404.html'));
}

// Copy translation guides
const legacyGuide = join(REPO_ROOT, '../../Openterface/translation_guide');
const targetGuide = join(REPO_ROOT, 'translation_guide');
if (existsSync(legacyGuide)) {
  cpSync(legacyGuide, targetGuide, { recursive: true });
}

// Docs hub homepage (replace marketing carousel home)
const indexPath = join(TARGET, 'index.md');
const indexContent = `---
title: Documentation
description: Official Openterface documentation — product setup guides, app downloads, tutorials, FAQs, and support.
---

# Openterface Documentation

Welcome to the official documentation hub for Openterface KVM-over-USB products and software.

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
`;

writeFileSync(indexPath, indexContent);

// Remove legacy marketing home locale pages (carousel templates)
for (const name of readdirSync(TARGET)) {
  if (/^index\.[a-z]{2}\.md$/.test(name)) {
    rmSync(join(TARGET, name));
  }
}

let count = 0;
function countMd(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) countMd(p);
    else if (name.endsWith('.md')) count++;
  }
}
countMd(TARGET);
console.log(`Done. ${count} markdown files in docs/`);
