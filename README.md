# openterface_docs

Official documentation hub for [docs.openterface.com](https://docs.openterface.com).

Built with [Zensical](https://zensical.org/) (Material theme). Content uses suffix-file i18n (`page.zh.md`). No legacy `openterface-cms` submodule.

## Quick start

```bash
# One-time: copy trimmed content from legacy Openterface repo
npm run migrate

# Python env (Zensical)
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Dev server
npm run serve

# Production build
npm run build
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run migrate` | Copy docs from `Openterface/docs` (excludes updates/events) |
| `npm run build` | Sync config + Zensical build → `site/` |
| `npm run serve` | Local preview at :8000 |
| `npm run i18n:audit` | Translation coverage report |
| `npm run validate-links` | Post-build link check (stub) |

## Cross-surface links

SSOT: `web-dev-tool/analytics/locales.json` + `surface-links.json`

- Marketing: `*.openterface.com`
- News: `news.openterface.com`
- Docs: `docs.openterface.com/{locale}/`

## Deploy

GitHub Pages via `.github/workflows/deploy.yml` → `docs.openterface.com`
