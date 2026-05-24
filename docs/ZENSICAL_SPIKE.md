# Zensical compatibility spike — Phase 0 (2026-05-24)

**Verdict: GO** — Zensical 0.0.43 builds Openterface docs from `zensical.toml` (SSOT).

## Config

| File | Role |
|------|------|
| `zensical.toml` | **Edit this** — site config, plugins, nav, i18n |
| `mkdocs.yml` | Auto-generated for `mkdocs build --i18n=full` only |

Sync scripts update `zensical.toml` and re-export `mkdocs.yml`.

## Results

| Check | Status | Notes |
|-------|--------|-------|
| EN build | PASS | `zensical build` in ~1.1s, 265 link warnings (legacy content) |
| i18n suffix files | PASS | Present in repo; EN-only config for Phase 1 |
| Nav tabs + sections | PASS | Product / App / Tutorial / About |
| Theme overrides | PASS | unified SiteHeader, tabs row cross-links (Home/News/Store), brand.css, custom footer |
| Search | PASS | `site/search/search_index.json` generated |
| Redirects | N/A | No legacy redirects on new site (Phase 4) |
| macros plugin | PASS | App overview `{{qt_version}}` resolves |
| glightbox | PASS | Plugin loaded |
| Build time | PASS | << 15 min target |

## Blockers fixed during spike

1. Legacy `index.{locale}.md` referenced `home.*.html` carousel templates — removed by migrate script
2. Link validation warnings — set `validation.*: warn` (not strict)

## Phase 2 follow-ups

- **Full i18n (10 locales):** `npm run build` uses `mkdocs build -f mkdocs.yml` (exported from `zensical.toml`) — Zensical 0.0.43 does not emit per-locale site dirs (`/zh/`, …); EN-only dev uses `zensical build -f zensical.toml`
- English at site root `/` (unprefixed, same as news); other locales under `/{locale}/`
- Post-build `post-build-en-legacy-redirects.mjs` stubs `/en/*` → unprefixed paths for bookmarks
- Resolve legacy absolute links (`/app/overview.md` → `/app/overview/`)
- `config/locales.yml` nav_translations synced via `scripts/sync-i18n-config.py`

## Fallback

Not required. MkDocs Material remains documented fallback if Zensical regresses.
