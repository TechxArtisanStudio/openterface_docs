# openterface_docs

Astro 6 documentation hub for [docs.openterface.com](https://docs.openterface.com) — shared brand chrome with `openterface_news` and locale marketing sites.

## Quick start

```bash
npm install
npm run dev    # http://localhost:8000
npm run build
npm run preview
npm run test:smoke
```

Content lives in `./docs/` (suffix-file i18n: `page.md`, `page.zh.md`, …).

**Phase 2:** Full ~677-page corpus with sidebar from `archive/mkdocs/mkdocs.yml` nav and MkDocs markdown dialect support.

## Stack

- Astro 6 + Tailwind 4
- Shared header/footer with news/en
- `DocsLayout`: sidebar + prose + TOC + client search index
- MkDocs markdown dialect preprocessor (`!!! note`, attr_list)

## Legacy MkDocs

Previous Zensical/MkDocs build config is archived under `archive/mkdocs/`.
