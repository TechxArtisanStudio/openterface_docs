#!/usr/bin/env node
/**
 * Audit (and optionally fix) meta description frontmatter for docs pages.
 *
 * Usage:
 *   node scripts/audit-meta-descriptions.mjs
 *   node scripts/audit-meta-descriptions.mjs --csv ~/Downloads/openterface.com_FailingUrls_5_26_2026.csv
 *   node scripts/audit-meta-descriptions.mjs --fix-en --min-length 150 --dry-run
 *   node scripts/audit-meta-descriptions.mjs --fix-en --section tutorial/kvm
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const DOCS = path.join(REPO_ROOT, 'docs');
const MIN_DEFAULT = 150;

const LOCALES = ['zh', 'ja', 'ko', 'de', 'fr', 'es', 'it', 'pt', 'ro', 'hk', 'tw', 'ru', 'ar', 'tr', 'pl', 'nl'];
const SITE_LOCALES = ['en', ...LOCALES];

/** Mirrors src/i18n/ui.ts fallbacks (audit-only; update when ui.ts changes). */
const FALLBACK_DESCRIPTION = {
  en: 'Official documentation for Openterface KVM-over-USB products and software — setup guides, FAQs, and tutorials.',
  zh: 'Openterface KVM-over-USB 产品与软件的官方文档 — 安装指南、常见问题与教程。',
  ja: 'Openterface KVM-over-USB 製品とソフトウェアの公式ドキュメント — セットアップガイド、FAQ、チュートリアル。',
  ko: 'Openterface KVM-over-USB 제품 및 소프트웨어 공식 문서 — 설정 가이드, FAQ, 튜토리얼.',
  de: 'Offizielle Dokumentation für Openterface KVM-over-USB Produkte und Software — Einrichtungsanleitungen, FAQs und Tutorials.',
  fr: 'Documentation officielle des produits et logiciels Openterface KVM-over-USB — guides d\'installation, FAQ et tutoriels.',
  es: 'Documentación oficial de productos y software Openterface KVM-over-USB — guías de configuración, preguntas frecuentes y tutoriales.',
  it: 'Documentazione ufficiale per prodotti e software Openterface KVM-over-USB — guide di configurazione, FAQ e tutorial.',
  pt: 'Documentação oficial dos produtos e software Openterface KVM-over-USB — guias de configuração, FAQs e tutoriais.',
  ro: 'Documentație oficială pentru produsele și software-ul Openterface KVM-over-USB — ghiduri de configurare, întrebări frecvente și tutoriale.',
  hk: 'Openterface KVM-over-USB 產品與軟件的官方文檔 — 安裝指南、常見問題與教程。',
  tw: 'Openterface KVM-over-USB 產品與軟件的官方文檔 — 安裝指南、常見問題與教程。',
  ru: 'Официальная документация по продуктам и ПО Openterface KVM-over-USB — руководства по настройке, FAQ и учебные материалы.',
  ar: 'الوثائق الرسمية لمنتجات وبرامج Openterface KVM-over-USB — أدلة الإعداد والأسئلة الشائعة والدروس.',
  tr: 'Openterface KVM-over-USB ürünleri ve yazılımı için resmi belgeler — kurulum kılavuzları, SSS ve öğreticiler.',
  pl: 'Oficjalna dokumentacja produktów i oprogramowania Openterface KVM-over-USB — przewodniki konfiguracji, FAQ i samouczki.',
  nl: 'Officiële documentatie voor Openterface KVM-over-USB producten en software — installatiegidsen, FAQ\'s en tutorials.',
};

const REDIRECT_PATTERNS = [
  /^product\/minikvm\/updates(\/|$)/,
  /^product\/kvm-go\/updates(\/|$)/,
  /^product\/keymod\/updates(\/|$)/,
  /^product\/uconsole-kvm-extension\/updates(\/|$)/,
  /^product\/accessories\/updates(\/|$)/,
  /^app\/updates(\/|$)/,
  /^event\//,
  /\/updates\/\d/,
];

function parseArgs(argv) {
  const opts = {
    csv: null,
    minLength: MIN_DEFAULT,
    fixEn: false,
    fixAll: false,
    fixCsv: false,
    fixDuplicates: false,
    dryRun: false,
    section: null,
    jsonOut: path.join(REPO_ROOT, 'analytics', 'meta-description-audit.json'),
    mdOut: path.join(REPO_ROOT, 'analytics', 'meta-description-audit.md'),
  };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--csv' && argv[i + 1]) opts.csv = argv[++i];
    else if (a === '--min-length' && argv[i + 1]) opts.minLength = Number(argv[++i]);
    else if (a === '--section' && argv[i + 1]) opts.section = argv[++i];
    else if (a === '--json-out' && argv[i + 1]) opts.jsonOut = argv[++i];
    else if (a === '--md-out' && argv[i + 1]) opts.mdOut = argv[++i];
    else if (a === '--fix-en') opts.fixEn = true;
    else if (a === '--fix-all') opts.fixAll = true;
    else if (a === '--fix-duplicates') opts.fixDuplicates = true;
    else if (a === '--fix-csv') opts.fixCsv = true;
    else if (a === '--dry-run') opts.dryRun = true;
  }
  return opts;
}

function parseLocaleFromFilename(filename) {
  for (const loc of LOCALES) {
    const suffix = `.${loc}.md`;
    if (filename.endsWith(suffix)) return { stem: filename.slice(0, -suffix.length), locale: loc };
  }
  if (filename.endsWith('.md')) return { stem: filename.slice(0, -3), locale: 'en' };
  return null;
}

function fileToSlug(relativePath, stem) {
  const dir = path.dirname(relativePath);
  const base = stem === 'index' ? '' : stem;
  if (dir === '.') return base || 'index';
  return base ? `${dir}/${base}`.replace(/\\/g, '/') : dir.replace(/\\/g, '/');
}

function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  if (!raw.startsWith('---')) return { description: null, title: null, body: raw };
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) return { description: null, title: null, body: raw };
  const fm = m[1];
  const body = m[2];
  const dm = fm.match(/^description:\s*(.+)$/m);
  const tm = fm.match(/^title:\s*(.+)$/m);
  let description = dm ? dm[1].trim() : null;
  let title = tm ? tm[1].trim() : null;
  if (description && /^["']/.test(description)) description = description.slice(1, -1);
  if (title && /^["']/.test(title)) title = title.slice(1, -1);
  return { description, title, body, raw };
}

function walkMd(dir, acc = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walkMd(p, acc);
    else if (name.name.endsWith('.md') && name.name !== 'ZENSICAL_SPIKE.md') acc.push(p);
  }
  return acc;
}

function urlToDocPath(url) {
  const u = new URL(url.trim().replace(/^"|"$/g, ''));
  let parts = u.pathname.split('/').filter(Boolean);
  let locale = 'en';
  if (parts[0] && SITE_LOCALES.includes(parts[0])) {
    locale = parts.shift();
  }
  const slug = parts.join('/') || 'index';
  if (slug === 'videos' || slug.endsWith('/videos')) return { type: 'videos', locale, slug };
  if (REDIRECT_PATTERNS.some((re) => re.test(slug))) return { type: 'redirect', locale, slug };
  const candidates = [];
  if (locale === 'en') {
    candidates.push(path.join(DOCS, `${slug}.md`), path.join(DOCS, slug, 'index.md'));
  } else {
    const base = path.join(DOCS, slug);
    candidates.push(`${base}.${locale}.md`, path.join(base, `index.${locale}.md`));
    const parent = path.dirname(slug);
    const leaf = path.basename(slug);
    if (parent !== '.') {
      candidates.push(path.join(DOCS, parent, `${leaf}.${locale}.md`));
    }
  }
  for (const c of candidates) {
    if (fs.existsSync(c)) return { type: 'doc', locale, slug, file: path.relative(REPO_ROOT, c) };
  }
  return { type: 'missing', locale, slug, candidates };
}

function effectiveDescription(description, locale) {
  if (description) return { text: description, source: 'frontmatter' };
  const fb = FALLBACK_DESCRIPTION[locale] ?? FALLBACK_DESCRIPTION.en;
  return { text: fb, source: 'fallback' };
}

function classify(len, minLength, source) {
  if (source === 'fallback') return 'missing';
  if (len < minLength) return 'short';
  return 'ok';
}

function stripHtml(text) {
  return text.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function stripMarkdown(text) {
  return stripHtml(text)
    .replace(/\{%[^%]*%\}/g, '')
    .replace(/!\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/\[[^\]]*\]\([^)]+\)/g, '')
    .replace(/[#>*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function firstParagraph(body) {
  const lines = body.split('\n');
  const buf = [];
  for (const line of lines) {
    const t = line.trim();
    if (!t || t.startsWith('#') || t.startsWith('!')) continue;
    if (t.startsWith('|')) break;
    if (t.startsWith('-') || t.startsWith('*')) {
      if (t.includes('--8<--') || t.includes('.html')) continue;
      const listText = stripMarkdown(t.replace(/^[-*]\s+/, ''));
      if (listText.length >= 40 && !/<[a-z][\s\S]*>/i.test(t)) {
        buf.push(listText);
        break;
      }
      continue;
    }
    if (t.startsWith('<') && !t.startsWith('!--')) continue;
    buf.push(t);
    if (buf.join(' ').length > 400) break;
  }
  return stripMarkdown(buf.join(' ')).slice(0, 500);
}

function titleFromBody(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].replace(/\*\*/g, '').trim() : null;
}

function slugLabel(slug) {
  const parts = slug.split('/').filter(Boolean);
  if (!parts.length) return 'documentation';
  const leaf = parts[parts.length - 1].replace(/-/g, ' ');
  if (parts.length === 1) return leaf;
  return `${parts[parts.length - 2]} / ${leaf}`;
}

function productForSlug(slug) {
  if (slug.includes('minikvm')) return 'Mini-KVM';
  if (slug.includes('kvm-go')) return 'KVM-GO';
  if (slug.includes('uconsole')) return 'uConsole KVM Extension';
  if (slug.includes('keymod')) return 'KeyMod';
  return 'Openterface KVM-over-USB';
}

function trimToMeta(desc, max = 160) {
  let out = desc.replace(/\s+/g, ' ').trim();
  if (out.length <= max) return out;
  let cut = out.slice(0, max - 1);
  const wordTrim = cut.replace(/\s+\S*$/, '');
  if (wordTrim.length >= max - 25) cut = wordTrim;
  return `${cut}…`;
}

function findDuplicateGroups(rows) {
  const byDesc = new Map();
  for (const row of rows) {
    const key = row.effective.trim();
    if (!byDesc.has(key)) byDesc.set(key, []);
    byDesc.get(key).push(row);
  }
  return [...byDesc.values()].filter((group) => group.length > 1);
}

function slugPathTag(slug) {
  const parts = slug.split('/').filter(Boolean);
  return parts.slice(-2).join('/') || slug;
}

function ensureUniqueDescription(desc, row, used) {
  let out = trimToMeta(desc);
  if (!used.has(out)) {
    used.add(out);
    return out;
  }
  const pathTag = slugPathTag(row.slug);
  const prefix = row.locale === 'en' ? pathTag : `${pathTag} (${row.locale})`;
  out = trimToMeta(`${prefix}: ${desc}`);
  if (!used.has(out)) {
    used.add(out);
    return out;
  }
  out = trimToMeta(`${row.slug} (${row.locale}): ${desc}`);
  used.add(out);
  return out;
}

function draftDescriptionEn(title, body, slug) {
  const topic = (title || titleFromBody(body) || slugLabel(slug)).replace(/\*\*/g, '').trim();
  const lead = firstParagraph(body);
  const product = productForSlug(slug);
  const kind = pageKindLabel(slug);
  const pathTag = slugPathTag(slug);
  let desc;
  if (lead.length >= 40) {
    desc = `${topic}: ${lead}`;
  } else if (slug.includes('/reviews')) {
    desc = `${topic} — ${product} press reviews, media coverage, and community testimonials. Official Openterface documentation.`;
  } else if (slug.includes('/use-cases')) {
    desc = `${topic} — ${product} use cases and real-world KVM-over-USB scenarios. Official Openterface documentation.`;
  } else {
    desc = `${topic} — ${kind} for ${product} (${pathTag}). Official Openterface documentation.`;
  }
  return trimToMeta(desc);
}

function upsertDescription(filePath, newDesc, dryRun) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const quoted = newDesc.includes(':') || newDesc.includes('"') ? `"${newDesc.replace(/"/g, '\\"')}"` : newDesc;
  let out;
  if (raw.startsWith('---')) {
    const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!m) return false;
    let fm = m[1];
    const body = m[2];
    if (/^description:\s*.+$/m.test(fm)) {
      fm = fm.replace(/^description:\s*.+$/m, `description: ${quoted}`);
    } else {
      fm = fm.trimEnd() + `\ndescription: ${quoted}\n`;
    }
    out = `---\n${fm.trimEnd()}\n---\n${body}`;
  } else {
    const titleMatch = raw.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].replace(/\*\*/g, '').trim() : '';
    const titleLine = title ? `title: "${title.replace(/"/g, '\\"')}"\n` : '';
    out = `---\n${titleLine}description: ${quoted}\n---\n\n${raw}`;
  }
  if (!dryRun) fs.writeFileSync(filePath, out);
  return true;
}

async function loadAiClient() {
  const loader = path.join(REPO_ROOT, '../web-dev-tool/scripts/lib/load-ai-txa-api.mjs');
  if (!fs.existsSync(loader)) return null;
  const mod = await import(loader);
  return mod;
}

async function draftDescriptionAi(client, title, body, slug) {
  const lead = firstParagraph(body).slice(0, 400);
  const prompt = `Write ONE meta description for an SEO snippet (exactly 150-160 characters, English only).
Page title: ${title || slug}
URL path: /${slug}/
Content summary: ${lead || 'Openterface KVM-over-USB documentation'}

Rules: No quotes in output. Mention Openterface or product name. Action-oriented. Single line only.`;

  const text = await client.complete(prompt);
  let desc = text.replace(/^["']|["']$/g, '').replace(/\s+/g, ' ').trim();
  if (desc.length > 160) desc = `${desc.slice(0, 157).replace(/\s+\S*$/, '')}…`;
  if (desc.length < 140) desc = draftDescriptionEn(title, body, slug);
  return desc;
}

function groupBySection(file) {
  const rel = file.replace(/^docs\//, '');
  const parts = rel.split('/');
  return parts.length >= 2 ? `${parts[0]}/${parts[1]}` : parts[0] || 'root';
}

async function main() {
  const opts = parseArgs(process.argv);
  const files = walkMd(DOCS);
  const rows = [];

  for (const abs of files) {
    const rel = path.relative(REPO_ROOT, abs);
    if (opts.section && !rel.includes(`docs/${opts.section}`)) continue;
    const base = path.basename(abs);
    const parsed = parseLocaleFromFilename(base);
    if (!parsed) continue;
    const slug = fileToSlug(path.relative(DOCS, abs), parsed.stem);
    const { description, title, body } = readFrontmatter(abs);
    const { text, source } = effectiveDescription(description, parsed.locale);
    const len = text.length;
    const status = classify(len, minLengthForLocale(parsed.locale), source);
    rows.push({
      file: rel,
      slug,
      locale: parsed.locale,
      title,
      description: description ?? null,
      effective: text,
      length: len,
      source,
      status,
    });
  }

  let csvRows = [];
  if (opts.csv && fs.existsSync(opts.csv)) {
    const lines = fs.readFileSync(opts.csv, 'utf8').trim().split('\n').slice(1);
    for (const line of lines) {
      const url = line.trim().replace(/^"|"$/g, '');
      if (!url.startsWith('http')) continue;
      const mapped = urlToDocPath(url);
      csvRows.push({ url, ...mapped });
    }
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    minLength: opts.minLength,
    total: rows.length,
    missing: rows.filter((r) => r.status === 'missing').length,
    short: rows.filter((r) => r.status === 'short').length,
    ok: rows.filter((r) => r.status === 'ok').length,
    duplicateGroups: findDuplicateGroups(rows).length,
    duplicatePages: findDuplicateGroups(rows).reduce((n, g) => n + g.length, 0),
    csv: csvRows,
  };

  fs.mkdirSync(path.dirname(opts.jsonOut), { recursive: true });
  fs.writeFileSync(opts.jsonOut, JSON.stringify({ summary, rows, csvRows }, null, 2));

  const md = [
    '# Meta description audit',
    '',
    `Generated: ${summary.generatedAt}`,
    '',
    `| Metric | Count |`,
    `|--------|------:|`,
    `| Total pages | ${summary.total} |`,
    `| Missing (fallback) | ${summary.missing} |`,
    `| Short (<${opts.minLength}) | ${summary.short} |`,
    `| OK | ${summary.ok} |`,
    `| Duplicate groups | ${summary.duplicateGroups} |`,
    `| Pages in duplicate groups | ${summary.duplicatePages} |`,
    '',
  ];

  if (csvRows.length) {
    md.push('## Bing CSV URLs', '', '| URL | Type | File | Status | Len |', '|-----|------|------|--------|----:|');
    for (const c of csvRows) {
      if (c.type === 'doc') {
        const row = rows.find((r) => r.file === c.file);
        md.push(`| ${c.url} | doc | \`${c.file}\` | ${row?.status ?? '?'} | ${row?.length ?? '—'} |`);
      } else {
        md.push(`| ${c.url} | ${c.type} | — | — | — |`);
      }
    }
    md.push('');
  }

  const bySection = {};
  for (const r of rows.filter((x) => x.status !== 'ok')) {
    const s = groupBySection(r.file);
    bySection[s] = (bySection[s] || 0) + 1;
  }
  md.push('## Issues by section', '');
  for (const [s, n] of Object.entries(bySection).sort((a, b) => b[1] - a[1]).slice(0, 20)) {
    md.push(`- \`${s}\`: ${n}`);
  }

  fs.writeFileSync(opts.mdOut, md.join('\n'));

  console.log(
    `Audit: ${summary.missing} missing, ${summary.short} short, ${summary.ok} ok, ${summary.duplicateGroups} duplicate groups (${summary.duplicatePages} pages) (${summary.total} total)`,
  );
  console.log(`Wrote ${opts.jsonOut}`);
  console.log(`Wrote ${opts.mdOut}`);

  if (opts.fixEn) {
    await runFixEn(rows, opts);
  }
  if (opts.fixAll) {
    await runFixAll(rows, opts);
  }
  if (opts.fixDuplicates) {
    await runFixDuplicates(rows, opts);
  }
  if (opts.fixCsv && csvRows.length) {
    const csvFiles = csvRows.filter((c) => c.type === 'doc' && c.file).map((c) => c.file);
    const subset = rows.filter((r) => csvFiles.includes(r.file));
    await runFixAll(subset, opts);
  }
}

const LOCALE_SUFFIX = {
  zh: '官方 Openterface 文档：安装步骤、常见问题与故障排查，面向 IT 与开发者。',
  ja: 'Openterface 公式ドキュメント。セットアップ、FAQ、トラブルシューティング。IT・開発者向け。',
  ko: 'Openterface 공식 문서: 설치, FAQ, 문제 해결. IT 및 개발자를 위한 KVM-over-USB 가이드.',
  de: 'Offizielle Openterface-Doku: Einrichtung, FAQ und Fehlerbehebung für KVM-over-USB.',
  fr: 'Documentation Openterface : configuration, FAQ et dépannage KVM-over-USB.',
  es: 'Documentación Openterface: configuración, preguntas frecuentes y soporte KVM-over-USB.',
  it: 'Documentazione Openterface: configurazione, FAQ e risoluzione problemi KVM-over-USB.',
  pt: 'Documentação Openterface: configuração, FAQs e suporte KVM-over-USB.',
  ro: 'Documentație Openterface: configurare, întrebări frecvente și depanare KVM-over-USB.',
  hk: '官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。',
  tw: '官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。',
  ru: 'Официальная документация Openterface: настройка, FAQ и устранение неполадок KVM-over-USB.',
  ar: 'وثائق Openterface الرسمية: الإعداد والأسئلة الشائعة واستكشاف أخطاء KVM-over-USB.',
  tr: 'Resmi Openterface belgeleri: kurulum, SSS ve KVM-over-USB sorun giderme.',
  pl: 'Oficjalna dokumentacja Openterface: konfiguracja, FAQ i rozwiązywanie problemów KVM-over-USB.',
  nl: 'Officiële Openterface-documentatie: installatie, FAQ en KVM-over-USB probleemoplossing.',
};

function minLengthForLocale(locale) {
  return ['zh', 'ja', 'ko', 'hk', 'tw', 'ar'].includes(locale) ? 80 : 150;
}

function pageKindLabel(slug) {
  if (slug.includes('/reviews')) return 'reviews and media coverage';
  if (slug.startsWith('letter/')) return 'beta program invitation';
  if (slug.includes('/use-cases')) return 'use cases';
  if (slug.includes('/updates/')) return 'product update';
  if (slug.includes('/faq')) return 'FAQ';
  return slugLabel(slug);
}

function draftDescriptionLocale(locale, title, body, slug) {
  return draftDescriptionForDedup(locale, title, body, slug);
}

function draftDescriptionForDedup(locale, title, body, slug) {
  const topic = (title || titleFromBody(body) || slugLabel(slug)).replace(/\*\*/g, '').trim();
  const lead = firstParagraph(body);
  const product = productForSlug(slug);
  const kind = pageKindLabel(slug);
  const pathTag = slugPathTag(slug);
  const minLen = minLengthForLocale(locale);
  const suffix = LOCALE_SUFFIX[locale] || 'Official Openterface documentation.';
  let desc;
  if (lead.length >= 40) {
    desc = `${topic}: ${lead}`;
  } else if (slug.includes('/reviews')) {
    desc = `${topic} — ${product} press reviews, media coverage, and community testimonials. ${suffix}`;
  } else if (slug.includes('/use-cases')) {
    desc = `${topic} — ${product} use cases and real-world KVM-over-USB scenarios. ${suffix}`;
  } else {
    desc = `${topic} — ${kind} for ${product} (${pathTag}). ${suffix}`;
  }
  if (desc.length < minLen) {
    desc = `${desc} ${product}.`;
  }
  return trimToMeta(desc);
}

async function runFixDuplicates(rows, opts) {
  const groups = findDuplicateGroups(rows);
  const targets = new Set(groups.flat().map((r) => r.file));
  const used = new Set(
    rows.filter((r) => !targets.has(r.file)).map((r) => r.effective.trim()),
  );
  let fixed = 0;
  for (const row of rows) {
    if (!targets.has(row.file)) continue;
    const abs = path.join(REPO_ROOT, row.file);
    const { body, title } = readFrontmatter(abs);
    const draft =
      row.locale === 'en'
        ? draftDescriptionEn(title, body, row.slug)
        : draftDescriptionForDedup(row.locale, title, body, row.slug);
    const minLen = minLengthForLocale(row.locale);
    const desc = ensureUniqueDescription(draft, row, used);
    if (desc.length < minLen && draft.length < minLen) continue;
    upsertDescription(abs, desc, opts.dryRun);
    fixed++;
    if (fixed % 50 === 0) console.log(`  deduped ${fixed}/${targets.size}…`);
  }
  console.log(`${opts.dryRun ? 'Would fix' : 'Fixed'} ${fixed} duplicate pages (${targets.size} targets)`);
}

async function runFixAll(rows, opts) {
  let fixed = 0;
  for (const row of rows) {
    if (row.status === 'ok') continue;
    const minLen = minLengthForLocale(row.locale);
    const abs = path.join(REPO_ROOT, row.file);
    const { body, title } = readFrontmatter(abs);
    const desc = draftDescriptionLocale(row.locale, title, body, row.slug);
    if (desc.length < minLen) continue;
    upsertDescription(abs, desc, opts.dryRun);
    fixed++;
    if (fixed % 50 === 0) console.log(`  fixed ${fixed}/${rows.length}…`);
  }
  console.log(`${opts.dryRun ? 'Would fix' : 'Fixed'} ${fixed} pages`);
}

async function runFixEn(rows, opts) {
  const targets = rows.filter(
    (r) => r.locale === 'en' && (r.status === 'missing' || r.status === 'short'),
  );
  let ai = null;
  if (!opts.dryRun) {
    try {
      const mod = await loadAiClient();
      if (mod?.createClient) ai = await mod.createClient();
    } catch {
      /* heuristic only */
    }
  }

  let fixed = 0;
  for (const row of targets) {
    const abs = path.join(REPO_ROOT, row.file);
    const { body, title } = readFrontmatter(abs);
    let desc;
    if (ai) {
      try {
        desc = await draftDescriptionAi(ai, title, body, row.slug);
      } catch {
        desc = draftDescriptionEn(title, body, row.slug);
      }
    } else {
      desc = draftDescriptionEn(title, body, row.slug);
    }
    if (desc.length < opts.minLength) continue;
    upsertDescription(abs, desc, opts.dryRun);
    fixed++;
    if (fixed % 50 === 0) console.log(`  fixed ${fixed}/${targets.length}…`);
  }
  console.log(`${opts.dryRun ? 'Would fix' : 'Fixed'} ${fixed} EN pages (${targets.length} candidates)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
