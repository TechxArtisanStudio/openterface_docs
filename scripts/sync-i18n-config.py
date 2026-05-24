#!/usr/bin/env python3
"""Sync mkdocs-static-i18n languages and extra.alternate from config/locales.yml."""

from __future__ import annotations

import json
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parent.parent
MKDOCS = ROOT / "mkdocs.yml"
LOCALES_YML = ROOT / "config" / "locales.yml"
SITE_LOCALES = ROOT / "config" / "site-locales.json"

TAG_REPLACEMENTS = {
    "pymdownx_fence_format": "!!python/name:pymdownx.superfences.fence_code_format",
    "twemoji": "!!python/name:material.extensions.emoji.twemoji",
    "to_svg": "!!python/name:material.extensions.emoji.to_svg",
}


def load_mkdocs(path: Path) -> dict:
    content = path.read_text(encoding="utf-8")
    for tag in TAG_REPLACEMENTS:
        content = content.replace(TAG_REPLACEMENTS[tag], tag)
    return yaml.safe_load(content)


def save_mkdocs(path: Path, data: dict) -> None:
    content = yaml.dump(data, default_flow_style=False, allow_unicode=True, sort_keys=False)
    for placeholder, tag in TAG_REPLACEMENTS.items():
        content = content.replace(placeholder, tag)
    path.write_text(content, encoding="utf-8")


def find_i18n_plugin(config: dict) -> int:
    for i, plugin in enumerate(config.get("plugins", [])):
        if isinstance(plugin, dict) and "i18n" in plugin:
            return i
    return -1


def main() -> int:
    site_locales = json.loads(SITE_LOCALES.read_text(encoding="utf-8"))
    default_locale = site_locales["default_locale"]
    locale_codes = list(site_locales["locales"].keys())

    lang_config = yaml.safe_load(LOCALES_YML.read_text(encoding="utf-8")) or []
    lang_by_locale = {entry["locale"]: entry for entry in lang_config}

    mkdocs = load_mkdocs(MKDOCS)
    idx = find_i18n_plugin(mkdocs)
    if idx < 0:
        print("sync-i18n-config: i18n plugin not found", file=sys.stderr)
        return 1

    languages = []
    alternates = []

    for code in locale_codes:
        meta = site_locales["locales"][code]
        entry = lang_by_locale.get(code, {})
        lang_entry = {
            "locale": code,
            "name": entry.get("name") or meta["label"],
            "build": entry.get("build", True),
            "site_name": entry.get("site_name") or f"Openterface Docs | {meta['label']}",
        }
        if code == default_locale:
            lang_entry["default"] = True

        nav = dict(entry.get("nav_translations") or {})
        if "Documentation" not in nav and "Home" in nav:
            nav["Documentation"] = nav["Home"]
        if nav:
            lang_entry["nav_translations"] = nav

        languages.append(lang_entry)

        # Material language switcher (relative links — see mkdocs-static-i18n docs)
        if code == default_locale:
            alternates.append({"name": lang_entry["name"], "link": ".", "lang": code})
        else:
            alternates.append({"name": lang_entry["name"], "link": code, "lang": code})

    mkdocs["plugins"][idx]["i18n"]["languages"] = languages
    mkdocs.setdefault("extra", {})["alternate"] = alternates
    mkdocs["extra"]["homepage"] = "/"
    mkdocs["site_url"] = "https://docs.openterface.com/"

    save_mkdocs(MKDOCS, mkdocs)
    print(f"sync-i18n-config: {len(languages)} locales — {', '.join(locale_codes)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
