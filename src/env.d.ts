/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_OP_DEV_DOCS?: string;
  readonly PUBLIC_OP_DEV_NEWS?: string;
  readonly PUBLIC_OP_DEV_MARKETING_EN?: string;
  readonly PUBLIC_OP_DEV_MARKETING_ZH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
