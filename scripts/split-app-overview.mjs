#!/usr/bin/env node
/**
 * Split app/overview → app/kvm + app/keycmd (EN); copy locale overviews to kvm/.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(ROOT, 'docs/app');
const KVM = path.join(APP, 'kvm');
const KEYCMD = path.join(APP, 'keycmd');

fs.mkdirSync(KVM, { recursive: true });
fs.mkdirSync(KEYCMD, { recursive: true });

const overviewEn = fs.readFileSync(path.join(APP, 'overview.md'), 'utf8');
const keyCmdIdx = overviewEn.indexOf('\n## KeyCmd\n');
if (keyCmdIdx === -1) throw new Error('Could not find ## KeyCmd in overview.md');

const kvmBody = overviewEn.slice(0, keyCmdIdx).replace(
  'title: "Software"',
  'title: "KVM Control Apps"',
);
let keycmdBody = overviewEn.slice(keyCmdIdx + 1);
keycmdBody = keycmdBody.replace(/^## KeyCmd\n/m, '# KeyCmd\n\n');
keycmdBody = `---
title: "KeyCmd Apps"
description: "KeyCmd turns your phone or tablet into a keyboard and mouse controller for any computer — with KeyMod hardware, Mini-KVM, or KVM-GO."
---

${keycmdBody.replace(/^---[\s\S]*?---\n\n/m, '')}`;

fs.writeFileSync(path.join(KVM, 'index.md'), kvmBody.trimEnd() + '\n');
fs.writeFileSync(path.join(KEYCMD, 'index.md'), keycmdBody.trimEnd() + '\n');

const localeSuffixes = [
  'zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw', 'ru', 'ar', 'tr', 'pl', 'nl',
];

for (const loc of localeSuffixes) {
  const src = path.join(APP, `overview.${loc}.md`);
  if (!fs.existsSync(src)) continue;
  fs.copyFileSync(src, path.join(KVM, `index.${loc}.md`));
}

// Move FAQ to kvm/
for (const name of fs.readdirSync(APP)) {
  if (!/^faq(\.[a-z]{2})?\.md$/.test(name)) continue;
  fs.renameSync(path.join(APP, name), path.join(KVM, name));
}

console.log('split-app-overview: wrote app/kvm/index*, app/keycmd/index.md, moved faq → kvm/');
