#!/usr/bin/env node
/**
 * Bulk-update internal doc links: /product/ → /products/ with slug shortening.
 * Run after docs/product/ → docs/products/ tree rename.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');

/** Order matters — specific paths before generic /product/ */
const REPLACEMENTS = [
  [/\/product\/uconsole-kvm-extension\//g, '/products/kvmext/'],
  [/\/product\/kvm-go\//g, '/products/kvmgo/'],
  [/\/product\/accessories\//g, '/products/accessories/'],
  [/\/product\/minikvm\//g, '/products/minikvm/'],
  [/\/product\/keymod\//g, '/products/keymod/'],
  [/\/product\//g, '/products/'],
  [/\]\(product\/uconsole-kvm-extension\//g, '](products/kvmext/'],
  [/\]\(product\/kvm-go\//g, '](products/kvmgo/'],
  [/\]\(product\/accessories\//g, '](products/accessories/'],
  [/\]\(product\/minikvm\//g, '](products/minikvm/'],
  [/\]\(product\/keymod\//g, '](products/keymod/'],
  [/\]\(product\//g, '](products/'],
];

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith('.md') || name.endsWith('.html') || name.endsWith('.yml')) acc.push(p);
  }
  return acc;
}

let filesChanged = 0;
let replacements = 0;

for (const file of walk(DOCS)) {
  let text = fs.readFileSync(file, 'utf8');
  const before = text;
  for (const [re, replacement] of REPLACEMENTS) {
    text = text.replace(re, replacement);
  }
  if (text !== before) {
    fs.writeFileSync(file, text);
    filesChanged++;
    replacements++;
  }
}

// mkdocs nav source
const mkdocs = path.join(ROOT, 'archive/mkdocs/mkdocs.yml');
if (fs.existsSync(mkdocs)) {
  let text = fs.readFileSync(mkdocs, 'utf8');
  const before = text;
  text = text.replace(/product\/uconsole-kvm-extension\//g, 'products/kvmext/');
  text = text.replace(/product\/kvm-go\//g, 'products/kvmgo/');
  text = text.replace(/product\/accessories\//g, 'products/accessories/');
  text = text.replace(/product\/minikvm\//g, 'products/minikvm/');
  text = text.replace(/product\/keymod\//g, 'products/keymod/');
  text = text.replace(/product\//g, 'products/');
  if (text !== before) {
    fs.writeFileSync(mkdocs, text);
    console.log('Updated archive/mkdocs/mkdocs.yml');
  }
}

console.log(`migrate-product-paths: ${filesChanged} files updated`);
