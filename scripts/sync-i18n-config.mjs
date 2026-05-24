#!/usr/bin/env node
/**
 * Sync i18n language block in mkdocs.yml from config/locales.yml.
 * Phase 1 (default): English only — no file changes.
 * Phase 2: node scripts/sync-i18n-config.mjs --full
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');

const full = process.argv.includes('--full');

if (!full) {
  console.log('sync-i18n-config: EN-only mode (pass --full to enable all locales)');
  process.exit(0);
}

const helper = join(__dirname, 'sync-i18n-config.py');
if (!existsSync(helper)) {
  console.warn('sync-i18n-config: --full requested but sync-i18n-config.py not found; skipping');
  process.exit(0);
}

const venvPython = join(REPO_ROOT, '.venv/bin/python3');
const python = existsSync(venvPython) ? venvPython : 'python3';
const result = spawnSync(python, [helper], { stdio: 'inherit', cwd: REPO_ROOT });
process.exit(result.status ?? 1);
