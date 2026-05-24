#!/usr/bin/env node
/**
 * Build openterface_docs with Zensical (fallback: mkdocs).
 */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const args = process.argv.slice(2);
const serve = args.includes('--serve');
const clean = args.includes('--clean');
const i18nFlag = args.find((a) => a.startsWith('--i18n'));
const i18nMode = i18nFlag?.split('=')[1] ?? 'en';

if (i18nMode === 'full') {
  spawnSync('node', ['scripts/sync-i18n-config.mjs', '--full'], { stdio: 'inherit', cwd: REPO_ROOT });
} else {
  spawnSync('node', ['scripts/sync-i18n-config.mjs'], { stdio: 'inherit', cwd: REPO_ROOT });
}

const venvZensical = join(REPO_ROOT, '.venv/bin/zensical');
const venvMkdocs = join(REPO_ROOT, '.venv/bin/mkdocs');
const bin = existsSync(venvZensical) ? venvZensical : existsSync(venvMkdocs) ? venvMkdocs : 'zensical';

const cmdArgs = serve ? ['serve', '-a', '0.0.0.0:8000'] : ['build'];
if (clean) cmdArgs.unshift('--clean');

console.log(`\n→ ${bin} ${cmdArgs.join(' ')}\n`);
const result = spawnSync(bin, cmdArgs, { stdio: 'inherit', cwd: REPO_ROOT, env: process.env });
if (!serve && (result.status === 0 || result.status === null)) {
  spawnSync('node', ['scripts/post-build-redirect.mjs'], { stdio: 'inherit', cwd: REPO_ROOT });
}
process.exit(result.status ?? 1);
