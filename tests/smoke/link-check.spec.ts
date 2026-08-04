import { test, expect } from '@playwright/test';
import type { Page, Response } from '@playwright/test';

/**
 * Crawls every same-origin page (starting from `/`) and flags:
 *   - internal 4xx responses (broken pages, images, CSS/JS, other assets)
 *   - external URLs that return a dead status (404 / 410)
 *
 * Opt-in: runs only when LINK_CHECK=1 or CI=true (so local `test:smoke` stays fast).
 *
 * Usage:
 *   LINK_CHECK=1 npx playwright test tests/smoke/link-check.spec.ts
 *   npm run check:links
 */

/** Same-origin URLs (preview server or the real docs domain). */
const INTERNAL_RE =
  /^https?:\/\/(?:localhost|127\.0\.0\.1|docs\.openterface\.com)(?::\d+)?\//;
const SKIP_PROTOCOL_RE = /^(?:mailto|tel|javascript|data|blob):/i;
/** Assets that are legitimately allowed to 404 (e.g. optional favicon fallbacks). */
const ALLOWED_404_RE = /favicon\.ico$|robots\.txt$|\.well-known\//;
/** On external hosts, treat these as beyond-repair dead links (fail the run). */
const EXTERNAL_DEAD_STATUS = new Set([404, 410]);

interface BrokenLink {
  sourcePage: string;
  url: string;
  status: number | string;
  type: string; // 'page' | 'image' | 'script' | 'stylesheet' | 'xhr' | 'other'
  external: boolean;
}

test.describe('link integrity (image + page 404 detection)', () => {
  // Opt-in:
  //   LINK_CHECK=1   → always run
  //   LINK_CHECK=0   → always skip (explicit disable, even in CI)
  //   CI=true        → run (unless LINK_CHECK=0)
  //   otherwise      → skip
  const explicitlyDisabled = process.env.LINK_CHECK === '0';
  const explicitlyEnabled = process.env.LINK_CHECK === '1';
  const ciEnabled = Boolean(process.env.CI) && !explicitlyDisabled;

  test.skip(
    !explicitlyEnabled && !ciEnabled,
    'set LINK_CHECK=1 (or CI=true) to run the link checker',
  );

  test('all internal pages/images resolve and external links are alive', async ({
    page,
  }) => {
    test.setTimeout(1_200_000); // 20 min

    const base = new URL(page.url()).origin;
    const visited = new Set<string>();
    const queue: string[] = ['/'];

    /** Full-URL key -> first page that referenced it (for external reporting). */
    const external = new Map<string, string>();
    const broken: BrokenLink[] = [];

    /** Map an internal href to a cacheable path, or null if external/skip. */
    const resolveInternal = (href: string): string | null => {
      try {
        const url = new URL(href, base);
        if (!INTERNAL_RE.test(url.origin) || SKIP_PROTOCOL_RE.test(href)) return null;
        url.hash = '';
        return url.pathname + url.search;
      } catch {
        return null;
      }
    };

    const recordExternal = (href: string, sourcePage: string) => {
      if (SKIP_PROTOCOL_RE.test(href)) return;
      try {
        const parsed = new URL(href, base);
        if (INTERNAL_RE.test(parsed.origin)) return;
        if (!external.has(parsed.href)) external.set(parsed.href, sourcePage);
      } catch {
        broken.push({
          sourcePage,
          url: href,
          status: 'invalid-url',
          type: 'other',
          external: true,
        });
      }
    };

    const scrollToBottom = async (p: Page) => {
      await p.evaluate(async () => {
        const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));
        for (let y = 0; y < document.body.scrollHeight; y += 800) {
          window.scrollTo(0, y);
          await delay(50);
        }
        window.scrollTo(0, 0);
      });
    };

    while (queue.length) {
      const path = queue.shift()!;
      if (visited.has(path)) continue;
      visited.add(path);

      const pageFailures: Array<{ url: string; status: number; type: string }> = [];

      const handleResponse = (res: Response) => {
        const status = res.status();
        const type = res.request().resourceType();
        const url = res.url();
        let origin = url;
        try {
          origin = new URL(url).origin;
        } catch {
          return;
        }

        if (status >= 400) {
          if (status === 404 && ALLOWED_404_RE.test(url)) return; // optional asset
          if (INTERNAL_RE.test(origin)) {
            pageFailures.push({ url, status, type });
          } else {
            recordExternal(url, page.url());
          }
        } else if (!INTERNAL_RE.test(origin)) {
          recordExternal(url, page.url());
        }
      };

      try {
        page.off('response', handleResponse);
        page.on('response', handleResponse);

        const response = await page.goto(path, {
          waitUntil: 'networkidle',
          timeout: 30_000,
        });

        if (response && response.status() >= 400) {
          broken.push({
            sourcePage: path,
            url: response.url(),
            status: response.status(),
            type: 'page',
            external: false,
          });
        }

        await scrollToBottom(page); // flush lazy-loaded images / vids

        const hrefs: string[] = await page.evaluate(() =>
          Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href]'))
            .map((a) => a.getAttribute('href')!)
            .filter(Boolean),
        );
        for (const href of hrefs) {
          if (SKIP_PROTOCOL_RE.test(href)) continue;
          const crawlerUrl = resolveInternal(href);
          if (crawlerUrl) {
            if (!visited.has(crawlerUrl)) queue.push(crawlerUrl);
          } else {
            recordExternal(href, path);
          }
        }

        for (const f of pageFailures) {
          broken.push({
            sourcePage: path,
            url: f.url,
            status: f.status,
            type: f.type,
            external: false,
          });
        }
      } catch (err) {
        broken.push({
          sourcePage: path,
          url: path,
          status: `crawl-error: ${String(err).slice(0, 200)}`,
          type: 'page',
          external: false,
        });
      }
    }

    test.info().annotations.push({
      type: 'info',
      description: `pages visited: ${visited.size}, external URLs checked: ${external.size}`,
    });

    // ---- External pass: HEAD-check with a concurrency cap ----
    const CONCURRENCY = 8;
    const pool = [...external.keys()];
    const result = new Map<string, number | 'error' | 'timeout'>();

    async function worker() {
      while (pool.length) {
        const url = pool.pop()!;
        let status: number | 'error' = 0;
        try {
          status = await headStatus(url);
          // Follow a redirect we couldn't auto-follow to catch dead targets.
          if (status === 0) status = 'error';
        } catch {
          status = 'error';
        }
        result.set(url, status);
        await new Promise((r) => setTimeout(r, 40)); // throttle 3rd-party hosts
      }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));

    for (const [url, sourcePage] of external) {
      const status = result.get(url);
      const numeric = typeof status === 'number' ? status : -1;
      const dead = EXTERNAL_DEAD_STATUS.has(numeric);
      if (dead) {
        broken.push({ sourcePage, url, status: numeric, type: 'other', external: true });
      }
    }

    // ---- Report ----
    const internalBroken = broken.filter((b) => !b.external);
    const externalBroken = broken.filter((b) => b.external);
    const fmt = (b: BrokenLink) =>
      `  [${b.type}] ${b.status} ${b.url}\n      <- ${b.sourcePage}`;

    const details = [
      `Visited ${visited.size} internal pages, checked ${external.size} external URLs.`,
      internalBroken.length
        ? `Internal broken references (${internalBroken.length}):\n${internalBroken
            .map(fmt)
            .join('\n')}`
        : '',
      externalBroken.length
        ? `External dead links (${externalBroken.length}):\n${externalBroken
            .map(fmt)
            .join('\n')}`
        : '',
    ]
      .filter(Boolean)
      .join('\n\n');

    expect(internalBroken, details).toEqual([]);
    expect(externalBroken, details).toEqual([]);
  });
});

/** Follow up to 5 redirects via HEAD, returning the final status. */
async function headStatus(url: string, redirects = 0): Promise<number> {
  const res = await fetch(url, {
    method: 'HEAD',
    redirect: 'manual',
    signal: AbortSignal.timeout(20_000),
  });
  if (res.status >= 300 && res.status < 400) {
    const loc = res.headers.get('location');
    if (loc && redirects < 5) {
      return headStatus(new URL(loc, url).href, redirects + 1);
    }
    return res.status;
  }
  return res.status;
}