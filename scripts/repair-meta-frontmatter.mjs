#!/usr/bin/env node
/**
 * Repair broken YAML frontmatter (keywords/description merged with closing ---).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, acc);
    else if (name.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

let fixed = 0;
for (const file of walk(DOCS)) {
  let raw = fs.readFileSync(file, 'utf8');
  if (!raw.startsWith('---')) continue;
  const orig = raw;
  raw = raw.replace(/^(keywords:\s*.+)---\s*$/m, '$1\n---');
  raw = raw.replace(/^(description:\s*.+)---\s*$/m, '$1\n---');
  raw = raw.replace(/^---([^\n])/m, '---\n\n$1');
  raw = raw.replace(/\n---\n#/, '\n---\n\n#');
  if (raw !== orig) {
    fs.writeFileSync(file, raw);
    fixed++;
  }
}

console.log(`repair-meta-frontmatter: ${fixed} files fixed`);
