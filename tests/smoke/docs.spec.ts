import { test, expect } from '@playwright/test';

test.describe('docs spike smoke', () => {
  test('home and kvm-go guide render with shared chrome', async ({ page }) => {
    await page.goto('http://localhost:8000/');
    await expect(page).toHaveTitle(/Openterface Docs/);
    await expect(page.locator('.site-header')).toBeVisible();
    await expect(page.getByRole('link', { name: /Docs/ }).first()).toBeVisible();
  });

  test('how-to-connect has sidebar, callouts, and search', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('http://localhost:8000/product/kvm-go/how-to-connect/');
    await expect(page.locator('.docs-sidebar')).toBeVisible();
    await expect(page.locator('.callout-warning').first()).toBeVisible();
    await page.locator('#docs-search-input').first().fill('microsd');
    await expect(page.getByRole('option', { name: 'MicroSD Card Switching Guide' })).toBeVisible();
  });

  test('zh locale page loads', async ({ page }) => {
    await page.goto('http://localhost:8000/zh/product/kvm-go/how-to-connect/');
    await expect(page).toHaveTitle(/Openterface 文档/);
    await expect(page.getByRole('link', { name: '文档' }).first()).toBeVisible();
  });
});
