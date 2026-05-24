import { surfaceMarketingHost } from './surface-urls';

export const siteConfig = {
  name: 'Openterface Docs',
  url: 'https://docs.openterface.com',
  description:
    'Official documentation for Openterface KVM-over-USB products and software.',
  ogImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  editBase: 'https://github.com/TechxArtisan/openterface_docs/edit/main/docs',
  links: {
    forum: 'https://forum.openterface.com',
    legacy: 'https://openterface.com',
    subscribe: 'https://subscribe.openterface.com/api/subscribe/',
  },
  analytics: {
    enabled: import.meta.env.PROD,
    google: {
      measurementId: 'G-EKZEH6QYWT',
      linkerDomains: [
        'docs.openterface.com',
        'news.openterface.com',
        'openterface.com',
        'forum.openterface.com',
        'en.openterface.com',
        'cn.openterface.com',
        'de.openterface.com',
        'es.openterface.com',
        'fr.openterface.com',
        'it.openterface.com',
        'jp.openterface.com',
        'kr.openterface.com',
        'pt.openterface.com',
        'ro.openterface.com',
      ],
    },
    ahrefs: {
      dataKey: 'b3G5nUND8OglcZwfjfwixQ',
    },
    consent: {
      storageKey: 'openterface-cookie-consent',
    },
  },
} as const;

export function marketingHost(locale: import('../lib/locale').SiteLocale): string {
  return surfaceMarketingHost(locale);
}

export { docsNav } from '../i18n/ui';
export type { NavItem } from '../i18n/ui';
