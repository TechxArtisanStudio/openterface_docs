import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DOCS = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'docs');
const locales = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw', 'ru', 'ar', 'tr', 'pl', 'nl'];
const files = [
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

for (const f of files) {
  const miss = locales.filter((loc) => {
    const p = path.join(DOCS, f.replace(/\.md$/, `.${loc}.md`));
    return !fs.existsSync(p);
  });
  if (miss.length) console.log(`${f}: missing ${miss.length} [${miss.join(',')}]`);
  else console.log(`${f}: COMPLETE`);
}
