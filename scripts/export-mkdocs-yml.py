#!/usr/bin/env python3
"""Export mkdocs.yml from zensical.toml for mkdocs-static-i18n full builds."""

from site_config import export_mkdocs_yml

if __name__ == "__main__":
    export_mkdocs_yml()
    print("export-mkdocs-yml: mkdocs.yml updated from zensical.toml")
