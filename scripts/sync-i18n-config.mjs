#!/usr/bin/env node
/**
 * Sync i18n language block in mkdocs.yml from web-dev-tool locales.json.
 * Phase 1 (default): English only — no file changes.
 * Phase 2: node scripts/sync-i18n-config.mjs --full (requires PyYAML via python helper).
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const LOCALES_JSON = join(REPO_ROOT, '../../web-dev-tool/analytics/locales.json');

const full = process.argv.includes('--full');

if (!full) {
  console.log('sync-i18n-config: EN-only mode (pass --full to enable all locales in Phase 2)');
  process.exit(0);
}

const helper = join(__dirname, 'sync-i18n-config.py');
if (!existsSync(helper)) {
  console.warn('sync-i18n-config: --full requested but sync-i18n-config.py not found; skipping');
  process.exit(0);
}

const result = spawnSync('python3', [helper], { stdio: 'inherit', cwd: REPO_ROOT });
process.exit(result.status ?? 1);
