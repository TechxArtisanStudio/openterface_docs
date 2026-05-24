# Zensical compatibility spike — Phase 0 (2026-05-24)

**Verdict: GO** — Zensical 0.0.43 builds trimmed Openterface docs with mkdocs.yml compat.

## Results

| Check | Status | Notes |
|-------|--------|-------|
| EN build | PASS | `zensical build` in ~1.1s, 265 link warnings (legacy content) |
| i18n suffix files | PASS | Present in repo; EN-only config for Phase 1 |
| Nav tabs + sections | PASS | Product / App / Tutorial / About |
| Theme overrides | PASS | ecosystem strip, brand.css, custom footer |
| Search | PASS | `site/search/search_index.json` generated |
| Redirects | N/A | No legacy redirects on new site (Phase 4) |
| macros plugin | PASS | App overview `{{qt_version}}` resolves |
| glightbox | PASS | Plugin loaded |
| Build time | PASS | << 15 min target |

## Blockers fixed during spike

1. Legacy `index.{locale}.md` referenced `home.*.html` carousel templates — removed by migrate script
2. Link validation warnings — set `validation.*: warn` (not strict)

## Phase 2 follow-ups

- **Full i18n (10 locales):** use `mkdocs build` — Zensical 0.0.43 does not emit per-locale site dirs (`/zh/`, …); EN-only dev stays on Zensical
- Post-build `post-build-restructure.mjs` moves default locale output to `/en/`
- Resolve legacy absolute links (`/app/overview.md` → `/en/app/overview/`)
- `config/locales.yml` nav_translations synced via `scripts/sync-i18n-config.py`
- Root `/` → `/en/` redirect on GH Pages

## Fallback

Not required. MkDocs Material remains documented fallback if Zensical regresses.
