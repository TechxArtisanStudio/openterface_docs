import { localizedPath, type SiteLocale } from '../lib/locale';

export type SidebarItem = {
  label: string;
  href?: string;
  children?: SidebarItem[];
};

/** KVM-GO spike sidebar — full tree will be generated from zensical.toml in Phase 2. */
export function kvmGoSidebar(locale: SiteLocale): SidebarItem[] {
  const p = (slug: string) => localizedPath(locale, ...slug.split('/').filter(Boolean));
  return [
    { label: 'Overview', href: p('product/kvm-go') },
    { label: 'Features', href: p('product/kvm-go/features') },
    { label: "What's In The Box", href: p('product/kvm-go/whats-in-the-box') },
    { label: 'How To Connect', href: p('product/kvm-go/how-to-connect') },
    { label: 'Use Cases', href: p('product/kvm-go/use-cases') },
    { label: 'Beta Quick Start', href: p('product/kvm-go/beta-quick-start') },
    { label: 'MicroSD Switch', href: p('product/kvm-go/microsd-switch') },
    { label: 'FAQs', href: p('product/kvm-go/faq') },
    { label: 'Reviews', href: p('product/kvm-go/reviews') },
  ];
}

/** Resolve sidebar for a given docs slug path. */
export function sidebarForSlug(locale: SiteLocale, slug: string): SidebarItem[] | null {
  if (slug === '' || slug === 'index') {
    return null;
  }
  if (slug.startsWith('product/kvm-go')) {
    return kvmGoSidebar(locale);
  }
  if (slug.startsWith('app')) {
    return [
      { label: 'Overview', href: localizedPath(locale, 'app', 'overview') },
      { label: 'FAQs', href: localizedPath(locale, 'app', 'faq') },
    ];
  }
  if (slug.startsWith('support')) {
    return [{ label: 'Support', href: localizedPath(locale, 'support') }];
  }
  return null;
}

export function sidebarSectionTitle(slug: string): string {
  if (slug.startsWith('product/kvm-go')) return 'KVM-GO Series';
  if (slug.startsWith('app')) return 'App';
  if (slug.startsWith('support')) return 'Support';
  return 'Documentation';
}
