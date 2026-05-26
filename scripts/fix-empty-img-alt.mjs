#!/usr/bin/env node
/**
 * Replace empty img alt="" with descriptive alt text (Bing SEO).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO_ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(REPO_ROOT, 'docs');

const ALT_BY_SRC = [
  [/cnx-software\.com.*\.webp/i, 'CNX Software logo'],
  [/crowd-supply\.svg/i, 'Crowd Supply logo'],
  [/kpS5kOzE/i, 'Electronics-Lab.com logo'],
  [/LESsgngz/i, 'MAKE Magazine logo'],
  [/vWPr2Av5/i, 'Electromaker logo'],
  [/wR1jSJJ5/i, 'Hackster logo'],
  [/notebookcheck_logo/i, 'Notebookcheck logo'],
  [/GnCqHVlWgAAVGqY/i, 'Example photo: VGA-to-HDMI setup missing USB power to the host'],
  [/GnCqGa8WQAAOr6m/i, 'Example photo: VGA-to-HDMI adapter connected without USB host power'],
];

function altForSrc(src) {
  for (const [re, alt] of ALT_BY_SRC) {
    if (re.test(src)) return alt;
  }
  return null;
}

function fixImgAlts(content) {
  return content.replace(/<img\b[^>]*>/gi, (tag) => {
    if (!/\balt=""(\s|>)/.test(tag)) return tag;
    const srcMatch = tag.match(/\bsrc="([^"]+)"/i);
    if (!srcMatch) return tag;
    const alt = altForSrc(srcMatch[1]);
    if (!alt) return tag;
    return tag.replace(/\balt=""/, `alt="${alt}"`);
  });
}

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, acc);
    else if (name.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

let fixedFiles = 0;
let fixedTags = 0;

for (const abs of walk(DOCS)) {
  const rel = path.relative(REPO_ROOT, abs);
  if (
    !rel.includes('product/minikvm/reviews/') &&
    !rel.includes('product/kvm-go/reviews/') &&
    !rel.includes('product/accessories/vga-to-hdmi-cable')
  ) {
    continue;
  }
  const raw = fs.readFileSync(abs, 'utf8');
  const out = fixImgAlts(raw);
  if (out === raw) continue;
  const before = (raw.match(/\balt=""/g) || []).length;
  const after = (out.match(/\balt=""/g) || []).length;
  fs.writeFileSync(abs, out);
  fixedFiles++;
  fixedTags += before - after;
  console.log(`${rel}: ${before - after} alt(s)`);
}

console.log(`Fixed ${fixedTags} empty alt attributes in ${fixedFiles} files.`);
