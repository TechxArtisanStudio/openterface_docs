// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/** /app/ is not a content page — handled by src/pages/app/index.astro with base-path awareness. */

/** Strip legacy locale prefixes (site is now English-only).
 *  Redirects are generated as static HTML stubs by scripts/post-build.mjs,
 *  so we do NOT register them as Astro redirects — the `/*` splat pattern
 *  causes a build crash on Windows (literal `*` is an invalid directory
 *  character on NTFS) and creates junk `*` directories on Linux. */

export default defineConfig({
  site: 'https://docs.openterface.com',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/en/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
