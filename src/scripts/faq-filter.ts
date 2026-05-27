/** Client-side FAQ hub filtering (?product= ?app= ?topic=). */

export function readFaqFilters(): {
  product: string | null;
  app: string | null;
  topic: string | null;
} {
  const params = new URLSearchParams(window.location.search);
  return {
    product: params.get('product'),
    app: params.get('app'),
    topic: params.get('topic'),
  };
}

export function applyFaqFilters(root: ParentNode = document): number {
  const { product, app, topic } = readFaqFilters();
  const entries = root.querySelectorAll<HTMLElement>('[data-faq-entry]');
  let visible = 0;

  entries.forEach((entry) => {
    const entryProduct = entry.dataset.product ?? '';
    const entryApp = entry.dataset.app ?? '';
    const entryTopic = entry.dataset.topic ?? '';
    const matchesProduct = !product || entryProduct === product;
    const matchesApp = !app || entryApp === app;
    const matchesTopic = !topic || entryTopic === topic;
    const show = matchesProduct && matchesApp && matchesTopic;
    entry.hidden = !show;
    if (show) visible += 1;
  });

  root.querySelectorAll<HTMLElement>('[data-faq-chip]').forEach((chip) => {
    const kind = chip.dataset.faqChip;
    const value = chip.dataset.faqValue ?? '';
    let active = false;
    if (kind === 'all') active = !product && !app && !topic;
    else if (kind === 'product') active = product === value;
    else if (kind === 'app') active = app === value;
    else if (kind === 'topic') active = topic === value;
    chip.classList.toggle('filter-chip-active', active);
  });

  const empty = root.querySelector<HTMLElement>('[data-faq-empty]');
  const filtering = Boolean(product || app || topic);
  if (empty) empty.hidden = !filtering || visible > 0;

  return visible;
}

export function initFaqFilter(): void {
  applyFaqFilters();
}
