#!/usr/bin/env node
/**
 * Update app version fields in zensical.toml [project.extra] from GitHub releases (best-effort).
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..');
const ZENSICAL_TOML = join(REPO_ROOT, 'zensical.toml');

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
  let content = readFileSync(ZENSICAL_TOML, 'utf8');
  const year = String(new Date().getFullYear());
  content = content.replace(/copyright_year = \d+/, `copyright_year = ${year}`);

  if (!skip) {
    for (const [key, repo] of Object.entries(REPOS)) {
      try {
        const tag = await latestTag(repo);
        if (tag) {
          const re = new RegExp(`(${key}) = "[^"]+"`);
          if (re.test(content)) {
            content = content.replace(re, `$1 = "${tag}"`);
          } else {
            const bare = new RegExp(`(${key}) = [^\\n]+`);
            content = content.replace(bare, `$1 = "${tag}"`);
          }
          console.log(`sync-app-versions: ${key} → ${tag}`);
        }
      } catch {
        console.warn(`sync-app-versions: could not fetch ${repo}`);
      }
    }
  } else {
    console.log('sync-app-versions: --skip-fetch');
  }

  writeFileSync(ZENSICAL_TOML, content);

  const venvPython = join(REPO_ROOT, '.venv/bin/python3');
  const python = existsSync(venvPython) ? venvPython : 'python3';
  spawnSync(python, ['scripts/export-mkdocs-yml.py'], { stdio: 'inherit', cwd: REPO_ROOT });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
