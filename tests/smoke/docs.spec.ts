import { test, expect } from '@playwright/test';

const BASE = 'http://localhost:8000';

test.describe('docs full corpus smoke', () => {
  test('home renders with shared chrome', async ({ page }) => {
    await page.goto(`${BASE}/`);
    await expect(page).toHaveTitle(/Openterface Docs/);
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('kvm-go how-to-connect has sidebar, callouts, and search', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${BASE}/product/kvm-go/how-to-connect/`);
    await expect(page.locator('.docs-sidebar')).toBeVisible();
    await expect(page.locator('.docs-sidebar').getByText('KVM-Go Series')).toBeVisible();
    await expect(page.locator('.callout-warning').first()).toBeVisible();
    await page.locator('#docs-search-input').first().fill('microsd');
    await expect(page.getByRole('option', { name: 'MicroSD Card Switching Guide' })).toBeVisible();
  });

  test('minikvm usb-switch renders collapsible details callout', async ({ page }) => {
    await page.goto(`${BASE}/product/minikvm/usb-switch/`);
    await expect(page.locator('details.callout-note summary')).toBeVisible();
  });

  test('tutorial kvm getting started loads with sidebar', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${BASE}/tutorial/kvm/01-getting-started/`);
    await expect(page.locator('.docs-sidebar')).toBeVisible();
    await expect(page.locator('.docs-sidebar').getByText('KVM Series')).toBeVisible();
  });

  test('zh locale page and translated sidebar labels', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto(`${BASE}/zh/product/kvm-go/how-to-connect/`);
    await expect(page).toHaveTitle(/Openterface 文档/);
    await expect(page.getByRole('link', { name: '文档' }).first()).toBeVisible();
    await expect(page.locator('aside.docs-sidebar').getByText(/KVM-Go 系列/)).toBeVisible();
  });

  test('faq page loads', async ({ page }) => {
    await page.goto(`${BASE}/faq/kvm-over-usb/`);
    await expect(page.locator('.prose-docs')).toBeVisible();
    await expect(page.locator('.docs-sidebar')).toBeVisible();
  });
});
