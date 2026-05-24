#!/usr/bin/env python3
"""One-time migration: mkdocs.yml → zensical.toml (SSOT)."""

from site_config import migrate_mkdocs_to_zensical

if __name__ == "__main__":
    migrate_mkdocs_to_zensical()
