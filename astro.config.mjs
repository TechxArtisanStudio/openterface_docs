// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const { locales, default_locale: defaultLocale } = JSON.parse(
  readFileSync(join(root, 'config/site-locales.json'), 'utf8'),
);

/** /app/ is not a content page — send visitors to the KVM apps hub. */
const appHubRedirects = Object.fromEntries(
  Object.keys(locales)
    .filter((code) => code !== defaultLocale)
    .flatMap((code) => {
      const path = locales[code].path;
      return [
        [`/${path}/app`, `/${path}/app/kvm/`],
        [`/${path}/app/`, `/${path}/app/kvm/`],
      ];
    })
    .concat([
      ['/app', '/app/kvm/'],
      ['/app/', '/app/kvm/'],
    ]),
);

export default defineConfig({
  site: 'https://docs.openterface.com',
  trailingSlash: 'always',
  redirects: appHubRedirects,
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
