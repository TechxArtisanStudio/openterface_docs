#!/usr/bin/env node
/** Ensure GitHub Pages serves static files without Jekyll processing. */
import { existsSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..', 'site');

if (!existsSync(SITE)) {
  console.warn('post-build-nojekyll: site/ missing');
  process.exit(0);
}

writeFileSync(join(SITE, '.nojekyll'), '');
console.log('post-build-nojekyll: wrote site/.nojekyll');
