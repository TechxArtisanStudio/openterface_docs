import { test, expect } from '@playwright/test';

const MEASUREMENT_ID = 'G-EKZEH6QYWT';

test('cookie consent banner appears on first visit', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#cookie-consent-banner')).toBeVisible();
});

test('accepting cookies loads GA4 and Ahrefs', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.locator('#cookie-consent-accept').click();
  await expect(page.locator('#ahrefs-analytics')).toBeAttached({ timeout: 5000 });
  await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(1);
});

test('analytics events do not fire before consent', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const hasPageView = await page.evaluate(() => {
    const dl = window.dataLayer || [];
    return dl.some(
      (e: { 0?: string; 1?: string }) => e?.[0] === 'event' && e?.[1] === 'page_view',
    );
  });
  expect(hasPageView).toBe(false);
});

test(`gtag config uses ${MEASUREMENT_ID}`, async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const html = await page.content();
  expect(html).toContain(MEASUREMENT_ID);
});
