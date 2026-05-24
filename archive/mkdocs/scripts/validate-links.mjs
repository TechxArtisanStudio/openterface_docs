#!/usr/bin/env node
/**
 * Basic internal link check on built site HTML (optional post-build).
 */
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, '..', 'site');

if (!existsSync(SITE)) {
  console.warn('validate-links: site/ not found — run build first');
  process.exit(0);
}

console.log('validate-links: site/ exists — full cross-surface validation deferred to Phase 2');
process.exit(0);
