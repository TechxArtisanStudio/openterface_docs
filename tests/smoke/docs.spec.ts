import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

function loadExpectedVersions() {
  const configDir = join(process.cwd(), 'src/config');
  const generated = join(configDir, 'app-versions.generated.json');
  const defaults = join(configDir, 'app-versions.defaults.json');
  const source = existsSync(generated) ? generated : defaults;
  return JSON.parse(readFileSync(source, 'utf8')) as {
    qt_version: string;
    android_version: string;
  };
}

async function assertReleaseDownloadOk(href: string) {
  const res = await fetch(href, {
    method: 'HEAD',
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  });
  expect(res.status, href).toBeLessThan(400);
}

test.describe('docs full corpus smoke', () => {
  test('home renders with shared chrome', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Openterface Docs/);
    await expect(page.locator('.site-header')).toBeVisible();
  });

  test('docs header uses dark chrome with orange stripe, back link, and doc section tabs', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await page.goto('/');
    const header = page.locator('header.site-header--docs');
    await expect(header).toBeVisible();
    await expect(header).toHaveCSS('background-color', 'rgb(44, 44, 44)');
    await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(248, 249, 251)');
    const backLink = header.getByRole('link', { name: 'Back to Openterface website' });
    await expect(backLink).toHaveAttribute('href', /openterface\.com\/?$/);
    await expect(backLink.locator('img.site-header__op-mark')).toBeVisible();
    await expect(header.locator('img.site-header__docs-mark')).toBeVisible();
    for (const label of ['Products', 'Apps', 'Tutorial', 'FAQs', 'Support']) {
      await expect(header).toContainText(label);
    }
    await expect(header).not.toContainText('All Docs');
    const nav = header.locator('nav[aria-label="Documentation sections"]');
    await expect(nav).not.toContainText('Media');

    const productsDropdown = nav.locator('.nav-dropdown', { hasText: 'Products' }).first();
    await productsDropdown.locator('summary').click();
    await expect(productsDropdown.getByRole('link', { name: 'Overview' })).toHaveAttribute(
      'href',
      '/products/',
    );
    await expect(productsDropdown.getByRole('link', { name: 'Mini-KVM' })).toHaveAttribute(
      'href',
      '/products/minikvm/',
    );

    const appsDropdown = nav.locator('.nav-dropdown', { hasText: 'Apps' }).first();
    await appsDropdown.locator('summary').click();
    await expect(appsDropdown.getByRole('link', { name: 'Openterface KVM' })).toHaveAttribute(
      'href',
      '/app/kvm/',
    );
    await expect(appsDropdown.getByRole('link', { name: 'KeyCmd' })).toHaveAttribute(
      'href',
      '/app/keycmd/',
    );
  });

  test('products doc tab is active on minikvm pages', async ({ page }) => {
    await page.setViewportSize({ width: 1400, height: 900 });
    await page.goto('/products/minikvm/');
    const productsTab = page.locator('header .site-header__nav-link--active', { hasText: 'Products' });
    await expect(productsTab).toBeVisible();
    await expect(productsTab).toHaveAttribute('aria-current', 'true');
  });

  test('app kvm download links resolve', async ({ page }) => {
    test.setTimeout(180_000);
    const { qt_version, android_version } = loadExpectedVersions();
    await page.goto('/app/kvm/');
    const hrefs = await page.locator('a[href*="releases/download/"]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('href')).filter((href): href is string => Boolean(href)),
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(7);

    for (const href of hrefs) {
      if (href.includes('Openterface_QT')) {
        expect(href, href).toContain(`/releases/download/${qt_version}/`);
      }
      if (href.includes('Openterface_Android')) {
        expect(href, href).toContain(`/releases/download/${android_version}/`);
        expect(android_version).toMatch(/^v/);
      }
    }

    if (process.env.CI) {
      for (const href of hrefs) {
        await assertReleaseDownloadOk(href);
      }
    }
  });

  test('/app/ redirects to KVM apps hub', async ({ page }) => {
    await page.goto('/app/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveURL(/\/app\/kvm\/$/);
  });

  test('zh app kvm download links resolve', async ({ page }) => {
    test.setTimeout(180_000);
    const { qt_version, android_version } = loadExpectedVersions();
    await page.goto('/zh/app/kvm/');
    const hrefs = await page.locator('a[href*="releases/download/"]').evaluateAll((els) =>
      els.map((el) => el.getAttribute('href')).filter((href): href is string => Boolean(href)),
    );
    expect(hrefs.length).toBeGreaterThanOrEqual(7);

    for (const href of hrefs) {
      if (href.includes('Openterface_QT')) {
        expect(href, href).toContain(`/releases/download/${qt_version}/`);
      }
      if (href.includes('Openterface_Android')) {
        expect(href, href).toContain(`/releases/download/${android_version}/`);
      }
    }

    if (process.env.CI) {
      for (const href of hrefs) {
        await assertReleaseDownloadOk(href);
      }
    }
  });

  test('kvm-go overview has doc page nav without edit link', async ({ page }) => {
    await page.goto('/products/kvmgo/');
    await expect(page.locator('article .doc-page-nav')).toBeVisible();
    await expect(page.getByText('Edit this page')).toHaveCount(0);
    await expect(page.locator('.doc-page-nav__link--next')).toHaveAttribute(
      'href',
      /\/products\/kvmgo\/features\/?$/,
    );
  });

  test('kvm-go slideshow keeps stable frame height when advancing', async ({ page }) => {
    await page.goto('/products/kvmgo/');
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
    await page.goto('/products/kvmgo/');
    const models = page.locator('.doc-kvm-go-models');
    const cta = page.locator('.doc-buy-cta');
    await expect(models).toBeVisible();
    await expect(page.getByText('KVM-Go HDMI Male')).toBeVisible();
    await expect(page.getByText('KVM-Go VGA Male')).toBeVisible();
    await expect(cta).toBeVisible();
    const modelsBeforeCta = await models.evaluate((el) => {
      const buy = document.querySelector('.doc-buy-cta');
      return buy ? (el.compareDocumentPosition(buy) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 : false;
    });
    expect(modelsBeforeCta).toBe(true);
  });

  test('keymod overview shows variants grid before support CTA', async ({ page }) => {
    await page.goto('/product/keymod/');
    const variants = page.locator('.doc-keymod-variants');
    const cta = page.locator('.doc-buy-cta');
    await expect(variants).toBeVisible();
    await expect(page.getByText('2-in-1 Connector Version')).toBeVisible();
    await expect(page.getByText('USB C Version')).toBeVisible();
    await expect(cta).toBeVisible();
    const variantsBeforeCta = await variants.evaluate((el) => {
      const buy = document.querySelector('.doc-buy-cta');
      return buy ? (el.compareDocumentPosition(buy) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 : false;
    });
    expect(variantsBeforeCta).toBe(true);
  });

  test('minikvm overview shows package options before order CTA', async ({ page }) => {
    await page.goto('/product/minikvm/');
    const packages = page.locator('.doc-minikvm-packages');
    const cta = page.locator('.doc-buy-cta');
    await expect(packages).toBeVisible();
    await expect(page.getByText('Basic Package')).toBeVisible();
    await expect(page.getByText('Toolkit Package')).toBeVisible();
    await expect(cta).toBeVisible();
    const packagesBeforeCta = await packages.evaluate((el) => {
      const buy = document.querySelector('.doc-buy-cta');
      return buy ? (el.compareDocumentPosition(buy) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0 : false;
    });
    expect(packagesBeforeCta).toBe(true);
  });

  test('minikvm reviews links to marketing media hub', async ({ page }) => {
    await page.goto('/products/minikvm/reviews/');
    const link = page.locator('.prose-docs a[href*="product=minikvm"]');
    await expect(link).toBeVisible();
  });

  test('kvm-go how-to-connect has sidebar, callouts, and search', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/products/kvmgo/how-to-connect/');
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
