import { test, expect } from '@playwright/test';

test.describe('locale UX — no dead nav links', () => {
  test('sidebar links return 200 for locale', async ({ page, request }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/pt/product/kvm-go/how-to-connect/');
    const sidebar = page.locator('aside.docs-sidebar');
    await expect(sidebar).toBeVisible();

    const hrefs = await sidebar.locator('a[href]').evaluateAll((anchors) =>
      anchors.map((a) => a.getAttribute('href')).filter(Boolean),
    );
    expect(hrefs.length).toBeGreaterThan(0);

    for (const href of hrefs) {
      const res = await request.get(href!);
      expect(res.status(), href!).toBe(200);
    }
  });

  test('locale switch to existing translation stays in locale', async ({ page }) => {
    await page.goto('/zh/products/kvmgo/');
    await page.locator('.locale-switcher summary').click();
    await page.locator('.locale-switcher a[data-locale-switch]', { hasText: 'Português' }).click();
    await expect(page).toHaveURL(/\/pt\/products\/kvmgo\//);
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    await expect(page.locator('.doc-locale-fallback')).toHaveCount(0);
  });

  test('Wave 2 sidebar labels are native (no German scaffold leftovers)', async ({ page }) => {
    const germanLeftovers =
      /Startseite|Häufige|Fehlerbehebung|Über uns|Grundlagen|Mitwirken|Zubehör|Lieferumfang|Schnellstellen verbinden/i;

    for (const locale of ['ru', 'nl']) {
      await page.goto(`/${locale}/product/kvm-go/how-to-connect/`);
      const sidebar = page.locator('aside.docs-sidebar');
      await expect(sidebar).toBeVisible();
      const text = await sidebar.innerText();
      expect(text, `${locale} sidebar should not contain German scaffold strings`).not.toMatch(
        germanLeftovers,
      );
    }
  });

  test('locale switch uses English fallback with banner when translation missing', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/zh/tutorial/kvm/01-getting-started/');
    await page.locator('.locale-switcher summary').click();
    const ptHref = await page
      .locator('.locale-switcher a[data-locale-switch]', { hasText: 'Português' })
      .getAttribute('href');

    if (!ptHref?.includes('lang_fallback=pt')) {
      test.skip(true, 'pt translation exists for this page — no fallback needed');
    }

    await page.goto(ptHref!);
    await expect(page).toHaveURL(/lang_fallback=pt/);
    await expect(page.locator('.doc-locale-fallback')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
  });
});
