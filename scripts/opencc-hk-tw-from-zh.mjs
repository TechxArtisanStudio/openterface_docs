/**
 * Generate hk/tw suffix files from zh translations using OpenCC (matches Wave 2 approach).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as OpenCC from 'opencc-js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DOCS = path.join(ROOT, 'docs');

const MISSING_BASES = [
  'tutorial/kvm/index.md',
  'tutorial/kvm/01-getting-started.md',
  'tutorial/kvm/02-basic-operations.md',
  'tutorial/kvm/03-advanced-features.md',
  'tutorial/kvm/04-troubleshooting.md',
  'tutorial/keymod/index.md',
  'tutorial/keymod/01-getting-started.md',
  'tutorial/keymod/02-keyboard-mouse.md',
  'tutorial/keymod/03-target-keyboard.md',
  'tutorial/keymod/04-shortcuts.md',
  'tutorial/keymod/05-macros.md',
  'tutorial/keymod/06-voice-input.md',
  'tutorial/keymod/07-ai.md',
  'tutorial/keymod/08-gamepad.md',
  'tutorial/keymod/09-numpad.md',
  'tutorial/keymod/10-presentation.md',
  'tutorial/keymod/11-settings.md',
  'tutorial/keymod/12-troubleshooting.md',
  'letter/kvm-go-beta-invit.md',
  'letter/kvm-go-influencer-invit.md',
  'product/kvm-go/notes/firmware-upgrade.md',
  'product/kvm-go/notes/review-guide.md',
  'product/minikvm/support/index.md',
];

const toHK = OpenCC.Converter({ from: 'cn', to: 'hk' });
const toTW = OpenCC.Converter({ from: 'cn', to: 'tw' });

let written = 0;
for (const rel of MISSING_BASES) {
  const stem = rel.replace(/\.md$/, '');
  const zhPath = path.join(DOCS, `${stem}.zh.md`);
  if (!fs.existsSync(zhPath)) {
    console.warn(`skip (no zh): ${rel}`);
    continue;
  }
  const zh = fs.readFileSync(zhPath, 'utf8');
  for (const [loc, convert] of [
    ['hk', toHK],
    ['tw', toTW],
  ]) {
    const out = path.join(DOCS, `${stem}.${loc}.md`);
    fs.writeFileSync(out, convert(zh));
    written++;
    console.log(`✓ ${path.relative(DOCS, out)}`);
  }
}
console.log(`opencc-hk-tw-from-zh: ${written} files written`);
