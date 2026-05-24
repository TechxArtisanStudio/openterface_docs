#!/usr/bin/env node
/**
 * Update app version fields in mkdocs.yml extra: from GitHub releases (best-effort).
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const MKDOCS = join(__dirname, '..', 'mkdocs.yml');

const REPOS = {
  qt_version: 'TechxArtisanStudio/Openterface_QT',
  android_version: 'TechxArtisanStudio/Openterface_Android',
  macos_version: 'TechxArtisanStudio/Openterface_MacOS',
};

async function latestTag(repo) {
  const url = `https://api.github.com/repos/${repo}/releases/latest`;
  const res = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'openterface-docs-build' },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return data.tag_name?.replace(/^v/, '') ?? null;
}

async function main() {
  const skip = process.argv.includes('--skip-fetch') || process.env.CI === 'true';
  let content = readFileSync(MKDOCS, 'utf8');
  const year = String(new Date().getFullYear());
  content = content.replace(/copyright_year: \d+/, `copyright_year: ${year}`);

  if (!skip) {
    for (const [key, repo] of Object.entries(REPOS)) {
      try {
        const tag = await latestTag(repo);
        if (tag) {
          const re = new RegExp(`(${key}): \"[^\"]+\"`);
          content = content.replace(re, `$1: "${tag}"`);
          console.log(`sync-app-versions: ${key} → ${tag}`);
        }
      } catch {
        console.warn(`sync-app-versions: could not fetch ${repo}`);
      }
    }
  } else {
    console.log('sync-app-versions: --skip-fetch');
  }

  writeFileSync(MKDOCS, content);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
