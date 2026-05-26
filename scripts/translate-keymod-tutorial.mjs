#!/usr/bin/env node
/**
 * Bulk-translate KeyMod tutorial pages via Python deep-translator.
 * Preserves frontmatter structure, includes, code fences, links, brand names.
 */
import { spawnSync } from 'child_process';
import { existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const py = join(ROOT, 'scripts/translate-keymod-tutorial.py');
const venvPy = join(ROOT, '.venv-i18n/bin/python');

const locales = process.argv.includes('--locales')
  ? process.argv[process.argv.indexOf('--locales') + 1].split(',')
  : 'ja,ko,de,fr,es,it,pt,ro,ru,ar,tr,pl,nl'.split(',');

const python = existsSync(venvPy) ? venvPy : 'python3';
const r = spawnSync(python, [py, ...locales], { cwd: ROOT, stdio: 'inherit', encoding: 'utf8' });
process.exit(r.status ?? 1);
