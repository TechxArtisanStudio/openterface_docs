import { test, expect } from '@playwright/test';

test.describe('docs full corpus smoke', () => {
  test('home renders with shared chrome', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Openterface Docs/);
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('kvm-go overview has doc page nav without edit link', async ({ page }) => {
    await page.goto('/product/kvm-go/');
    await expect(page.locator('article .doc-page-nav')).toBeVisible();
    await expect(page.getByText('Edit this page')).toHaveCount(0);
    await expect(page.locator('.doc-page-nav__link--next')).toHaveAttribute(
      'href',
      /\/product\/kvm-go\/features\/?$/,
    );
  });

  test('kvm-go slideshow keeps stable frame height when advancing', async ({ page }) => {
    await page.goto('/product/kvm-go/');
    const frame = page.locator('.doc-slideshow__frame');
    await expect(frame).toBeVisible();

    const heightBefore = (await frame.boundingBox())?.height ?? 0;
    expect(heightBefore).toBeGreaterThan(100);

    await page.locator('.doc-slideshow__next').click();
    await expect(page.locator('.doc-slideshow__image.is-active')).toHaveAttribute(
      'data-index',
      '1',
    );

    const heightAfter = (await frame.boundingBox())?.height ?? 0;
    expect(Math.abs(heightAfter - heightBefore)).toBeLessThanOrEqual(5);
  });

  test('kvm-go overview shows models grid before pre-order CTA', async ({ page }) => {
    await page.goto('/product/kvm-go/');
    const models = page.locator('.doc-kvm-go-models');
    const cta = page.locator('.doc-buy-cta');
    await expect(models).toBeVisible();
    await expect(page.getByText('KVM-Go HDMI Male')).toBeVisible();
    await expect(page.getByText('Coming soon')).toBeVisible();
    await expect(cta).toBeVisible();
    const modelsBeforeCta = await models.evaluate((el) => {
      const buy = document.querySelector('.doc-buy-cta');
      return buy ? (el.compareDocumentPosition(buy) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 : false;
    });
    expect(modelsBeforeCta).toBe(true);
  });

  test('zh kvm-go overview shows localized models grid', async ({ page }) => {
    await page.goto('/zh/product/kvm-go/');
    await expect(page.locator('.doc-kvm-go-models')).toBeVisible();
    await expect(page.getByText('KVM-Go HDMI 公头')).toBeVisible();
    await expect(page.getByText('即将推出')).toBeVisible();
  });

  test('kvm-go how-to-connect has sidebar, callouts, and search', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/product/kvm-go/how-to-connect/');
    await expect(page.locator('.docs-sidebar')).toBeVisible();
    await expect(page.locator('.docs-sidebar').getByText('KVM-Go Series')).toBeVisible();
    await expect(page.locator('.callout-warning').first()).toBeVisible();
    await page.locator('#docs-search-input').first().fill('microsd');
    await expect(page.getByRole('option', { name: 'MicroSD Card Switching Guide' })).toBeVisible();
  });

  test('minikvm usb-switch renders collapsible details callout', async ({ page }) => {
    await page.goto('/product/minikvm/usb-switch/');
    await expect(page.locator('details.callout-note summary')).toBeVisible();
  });

  test('minikvm troubleshooting renders mermaid flowchart', async ({ page }) => {
    await page.goto('/product/minikvm/support/mini-kvm-troubleshooting-and-support/#overview-how-this-is-handled');
    const diagram = page.locator('pre.mermaid');
    await expect(diagram).toBeVisible();
    await expect(diagram.locator('svg')).toBeVisible();
  });

  test('tutorial kvm getting started loads with sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/tutorial/kvm/01-getting-started/');
    await expect(page.locator('.docs-sidebar')).toBeVisible();
    await expect(page.locator('.docs-sidebar').getByText('KVM Series')).toBeVisible();
  });

  test('zh locale page and translated sidebar labels', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/zh/product/kvm-go/how-to-connect/');
    await expect(page).toHaveTitle(/Openterface 文档/);
    await expect(page.getByRole('link', { name: '文档' }).first()).toBeVisible();
    await expect(page.locator('aside.docs-sidebar').getByText(/KVM-Go 系列/)).toBeVisible();
  });

  test('faq page loads', async ({ page }) => {
    await page.goto('/faq/kvm-over-usb/');
    await expect(page.locator('.prose-docs')).toBeVisible();
    await expect(page.locator('.docs-sidebar')).toBeVisible();
  });

  test('/en/ legacy path redirects to unprefixed home', async ({ page }) => {
    await page.goto('/en/');
    await expect(page).toHaveURL(/\/$/);
  });
});
