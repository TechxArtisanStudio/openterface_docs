import { defineConfig } from '@playwright/test';

/** Dedicated port so smoke preview does not collide with dev-stack / MkDocs on 8000 or 8765. */
const SMOKE_PORT = process.env.SMOKE_PORT ?? '18800';
const baseURL = `http://localhost:${SMOKE_PORT}`;

export default defineConfig({
  testDir: './tests/smoke',
  timeout: 60000,
  use: {
    headless: true,
    baseURL,
  },
  webServer: {
    command: `astro preview --port ${SMOKE_PORT} --host`,
    url: `${baseURL}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
