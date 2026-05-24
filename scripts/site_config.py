"""Site configuration SSOT: zensical.toml with optional mkdocs.yml export for full i18n."""

from __future__ import annotations

import copy
import json
import os
import sys
from pathlib import Path
from typing import Any

import tomli_w
import yaml

try:
    import tomllib
except ImportError:
    import tomli as tomllib  # type: ignore[no-redef]

ROOT = Path(__file__).resolve().parent.parent
ZENSICAL_TOML = ROOT / "zensical.toml"
MKDOCS_YML = ROOT / "mkdocs.yml"

MKDOCS_GENERATED_HEADER = (
    "# AUTO-GENERATED from zensical.toml — do not edit.\n"
    "# Edit zensical.toml and run sync scripts or npm run build.\n\n"
)

ZENSICAL_EMOJI = {
    "emoji_index": "material.extensions.emoji.twemoji",
    "emoji_generator": "material.extensions.emoji.to_svg",
}

MKDOCS_TAG_REPLACEMENTS = {
    "pymdownx_fence_format": "!!python/name:pymdownx.superfences.fence_code_format",
    "twemoji": "!!python/name:material.extensions.emoji.twemoji",
    "to_svg": "!!python/name:material.extensions.emoji.to_svg",
}


def _normalize_markdown_extensions_for_zensical(project: dict[str, Any]) -> None:
    for ext in project.get("markdown_extensions", []):
        if not isinstance(ext, dict):
            continue
        emoji = ext.get("pymdownx.emoji")
        if isinstance(emoji, dict):
            emoji["emoji_index"] = ZENSICAL_EMOJI["emoji_index"]
            emoji["emoji_generator"] = ZENSICAL_EMOJI["emoji_generator"]
        superfences = ext.get("pymdownx.superfences")
        if isinstance(superfences, dict):
            for fence in superfences.get("custom_fences", []):
                fmt = fence.get("format")
                if fmt in (MKDOCS_TAG_REPLACEMENTS["pymdownx_fence_format"], "pymdownx_fence_format"):
                    fence["format"] = "pymdownx.superfences.fence_code_format"


def _normalize_markdown_extensions_for_mkdocs(project: dict[str, Any]) -> None:
    for ext in project.get("markdown_extensions", []):
        if not isinstance(ext, dict):
            continue
        emoji = ext.get("pymdownx.emoji")
        if isinstance(emoji, dict):
            emoji["emoji_index"] = "twemoji"
            emoji["emoji_generator"] = "to_svg"
        superfences = ext.get("pymdownx.superfences")
        if isinstance(superfences, dict):
            for fence in superfences.get("custom_fences", []):
                fmt = fence.get("format")
                if fmt == "pymdownx.superfences.fence_code_format":
                    fence["format"] = "pymdownx_fence_format"


def load_project() -> dict[str, Any]:
    if not ZENSICAL_TOML.exists():
        raise FileNotFoundError(f"Missing {ZENSICAL_TOML.name}; run scripts/migrate-mkdocs-to-zensical.py")
    data = tomllib.loads(ZENSICAL_TOML.read_text(encoding="utf-8"))
    return data["project"]


def save_project(project: dict[str, Any]) -> None:
    _normalize_markdown_extensions_for_zensical(project)
    project.setdefault("theme", {})["variant"] = project.get("theme", {}).get("variant") or "classic"
    ZENSICAL_TOML.write_text(tomli_w.dumps({"project": project}), encoding="utf-8")


def load_mkdocs_yaml(path: Path | None = None) -> dict[str, Any]:
    path = path or MKDOCS_YML
    content = path.read_text(encoding="utf-8")
    if content.startswith("# AUTO-GENERATED"):
        content = content.split("\n\n", 1)[-1]
    for placeholder, tag in MKDOCS_TAG_REPLACEMENTS.items():
        content = content.replace(tag, placeholder)
    project = yaml.safe_load(content)
    _normalize_markdown_extensions_for_zensical(project)
    return project


def _dev_surface_from_env() -> dict[str, Any] | None:
    if not os.environ.get("OP_DEV_STACK"):
        return None
    raw = os.environ.get("OP_DEV_SURFACE_JSON")
    if raw:
        data = json.loads(raw)
        marketing = {k: v.rstrip("/") for k, v in data.get("marketing", {}).items()}
        return {
            "docs": data.get("docs", "http://localhost:8000").rstrip("/"),
            "news": data.get("news", "http://localhost:4321").rstrip("/"),
            "marketing": marketing,
        }
    docs = os.environ.get("OP_DEV_DOCS", "http://localhost:8000").rstrip("/")
    news = os.environ.get("OP_DEV_NEWS", "http://localhost:4321").rstrip("/")
    marketing: dict[str, str] = {}
    for key, value in os.environ.items():
        if key.startswith("OP_DEV_MARKETING_") and value:
            locale = key.removeprefix("OP_DEV_MARKETING_").lower()
            marketing[locale] = value.rstrip("/")
    return {"docs": docs, "news": news, "marketing": marketing}


def apply_dev_overlay(project: dict[str, Any]) -> dict[str, Any]:
    surface = _dev_surface_from_env()
    if not surface:
        return project
    cfg = copy.deepcopy(project)
    extra = cfg.setdefault("extra", {})
    ecosystem = extra.setdefault("ecosystem", {})
    home_en = surface["marketing"].get("en", "http://localhost:4322")
    ecosystem["home_en"] = f"{home_en}/"
    ecosystem["news"] = f"{surface['news']}/"
    extra["dev_surface"] = surface
    return cfg


def export_mkdocs_yml(project: dict[str, Any] | None = None) -> None:
    base = project if project is not None else load_project()
    cfg = apply_dev_overlay(base)
    _normalize_markdown_extensions_for_mkdocs(cfg)
    content = yaml.dump(cfg, default_flow_style=False, allow_unicode=True, sort_keys=False)
    for placeholder, tag in MKDOCS_TAG_REPLACEMENTS.items():
        content = content.replace(placeholder, tag)
    MKDOCS_YML.write_text(MKDOCS_GENERATED_HEADER + content, encoding="utf-8")


def find_i18n_plugin(project: dict[str, Any]) -> int:
    for i, plugin in enumerate(project.get("plugins", [])):
        if isinstance(plugin, dict) and "i18n" in plugin:
            return i
    return -1


def migrate_mkdocs_to_zensical(source: Path | None = None) -> None:
    source = source or MKDOCS_YML
    if not source.exists():
        print(f"migrate: {source.name} not found", file=sys.stderr)
        raise SystemExit(1)
    project = load_mkdocs_yaml(source)
    save_project(project)
    export_mkdocs_yml(project)
    print(f"migrate: wrote {ZENSICAL_TOML.name} and exported {MKDOCS_YML.name}")
