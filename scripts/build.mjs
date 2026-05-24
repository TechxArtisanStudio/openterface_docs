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
const fullI18n = i18nMode === 'full';

function run(nodeArgs) {
  const r = spawnSync('node', nodeArgs, { stdio: 'inherit', cwd: REPO_ROOT });
  if (r.status !== 0 && r.status !== null) process.exit(r.status);
}

if (fullI18n) {
  run(['scripts/generate-locale-indexes.mjs']);
  run(['scripts/sync-i18n-config.mjs', '--full']);
} else {
  spawnSync('node', ['scripts/sync-i18n-config.mjs'], { stdio: 'inherit', cwd: REPO_ROOT });
}

spawnSync('node', ['scripts/sync-app-versions.mjs'], { stdio: 'inherit', cwd: REPO_ROOT });

const venvZensical = join(REPO_ROOT, '.venv/bin/zensical');
const venvMkdocs = join(REPO_ROOT, '.venv/bin/mkdocs');
// Zensical is fast for EN-only; mkdocs-static-i18n multi-locale needs mkdocs (see ZENSICAL_SPIKE.md)
const bin = fullI18n
  ? existsSync(venvMkdocs)
    ? venvMkdocs
    : 'mkdocs'
  : existsSync(venvZensical)
    ? venvZensical
    : existsSync(venvMkdocs)
      ? venvMkdocs
      : 'zensical';

const cmdArgs = serve ? ['serve', '-a', '0.0.0.0:8000'] : ['build'];
if (clean && !serve) cmdArgs.push('--clean');

console.log(`\n→ ${bin} ${cmdArgs.join(' ')}\n`);
const result = spawnSync(bin, cmdArgs, { stdio: 'inherit', cwd: REPO_ROOT, env: process.env });

if (!serve && (result.status === 0 || result.status === null)) {
  run(['scripts/post-build-nojekyll.mjs']);
  if (fullI18n) {
    run(['scripts/post-build-hreflang.mjs']);
    run(['scripts/post-build-en-legacy-redirects.mjs']);
  }
}

process.exit(result.status ?? 1);
