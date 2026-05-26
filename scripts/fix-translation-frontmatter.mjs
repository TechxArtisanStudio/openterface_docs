/**
 * Strip malformed LLM frontmatter (e.g. "draft: false\n...") from translated docs.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCS = path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'), 'docs');
const LOCALES = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw', 'ru', 'ar', 'tr', 'pl', 'nl'];

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, acc);
    else if (name.name.endsWith('.md')) acc.push(p);
  }
  return acc;
}

function fix(content) {
  // Remove broken frontmatter blocks like ---\ndraft: false\n...\n--- or ---\ndraft: false\n...
  let out = content.replace(/^---\r?\n(?:draft:\s*false[^\n]*\n(?:\.\.\.\s*\n)?)---\r?\n?/m, '');
  out = out.replace(/^---\r?\n(?:draft:\s*false[^\n]*\n(?:\.\.\.\s*\n)?)(?!---)/m, '');
  // Trailing code fence artifact from LLM
  out = out.replace(/\n```\s*$/m, '');
  return out;
}

let fixed = 0;
for (const file of walk(DOCS)) {
  const base = path.basename(file);
  if (!LOCALES.some((l) => base.endsWith(`.${l}.md`))) continue;
  const raw = fs.readFileSync(file, 'utf8');
  const cleaned = fix(raw);
  if (cleaned !== raw) {
    fs.writeFileSync(file, cleaned);
    fixed++;
  }
}
console.log(`fix-translation-frontmatter: ${fixed} files cleaned`);
