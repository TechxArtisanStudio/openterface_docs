#!/usr/bin/env node
/**
 * Post-build: add root redirect to /en/ for docs.openterface.com URL plan.
 */
import { mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = join(__dirname, '..', 'site');
const REDIRECT = join(SITE, 'index.html');

if (!existsSync(SITE)) {
  console.warn('post-build-redirect: site/ missing');
  process.exit(0);
}

writeFileSync(
  REDIRECT,
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=/">
  <link rel="canonical" href="https://docs.openterface.com/">
  <title>Redirecting…</title>
  <script>location.replace('/');</script>
</head>
<body><p><a href="/">Openterface Docs</a></p></body>
</html>
`,
);

console.log('post-build-redirect: wrote site/index.html');
