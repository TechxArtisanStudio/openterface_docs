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

  test('header product nav uses /products/ paths', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/');
    await page.locator('.nav-dropdown summary').first().click();
    const kvmGo = page.locator('.site-header a[href="/products/kvmgo/"]');
    await expect(kvmGo.first()).toBeVisible();
    await kvmGo.first().click();
    await expect(page).toHaveURL(/\/products\/kvmgo\/?$/);
    await expect(page.locator('h1')).toBeVisible();
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

  test('zh keymod overview shows localized variants grid', async ({ page }) => {
    await page.goto('/zh/product/keymod/');
    await expect(page.locator('.doc-keymod-variants')).toBeVisible();
    await expect(page.getByText('2 合 1 连接器版本')).toBeVisible();
    await expect(page.getByText('USB C 版本')).toBeVisible();
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

  test('zh minikvm overview shows localized package options', async ({ page }) => {
    await page.goto('/zh/product/minikvm/');
    await expect(page.locator('.doc-minikvm-packages')).toBeVisible();
    await expect(page.getByText('基础包装')).toBeVisible();
    await expect(page.getByText('工具包包装')).toBeVisible();
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

  test('zh minikvm sidebar shows translated support labels', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/zh/product/minikvm/support/mini-kvm-troubleshooting-and-support/');
    const sidebar = page.locator('aside.docs-sidebar');
    await expect(sidebar.getByText('故障排查')).toBeVisible();
    await expect(sidebar.getByText('诊断自检指南（macOS）')).toBeVisible();
    await expect(sidebar.getByText('诊断自检指南（Windows）')).toBeVisible();
    await expect(sidebar.getByText('键盘和鼠标控制')).toBeVisible();
    await expect(sidebar.getByText('Troubleshooting')).toHaveCount(0);
  });

  test('new locale home and product pages return 200', async ({ page }) => {
    const paths = [
      '/hk/product/kvm-go/',
      '/tw/product/kvm-go/',
      '/ru/product/kvm-go/',
      '/ar/product/kvm-go/',
      '/tr/product/kvm-go/',
      '/pl/product/kvm-go/',
      '/nl/product/kvm-go/',
      '/hk/about/multi-languages/',
      '/ru/about/multi-languages/',
    ];

    for (const path of paths) {
      const response = await page.goto(path, { waitUntil: 'commit' });
      expect(response?.status(), path).toBe(200);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
    }
  });

  test('hk locale page shows translated sidebar labels', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/hk/product/kvm-go/how-to-connect/');
    await expect(page).toHaveTitle(/Openterface 文檔/);
    await expect(page.locator('aside.docs-sidebar').getByText(/KVM-Go 系列/)).toBeVisible();
  });

  test('ru locale page loads with localized chrome', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto('/ru/product/kvm-go/');
    await expect(page).toHaveTitle(/Openterface/);
    await expect(page.locator('.site-header')).toBeVisible();
    await expect(page.locator('article .doc-page-nav')).toBeVisible();
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
