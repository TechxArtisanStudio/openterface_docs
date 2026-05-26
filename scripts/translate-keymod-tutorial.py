#!/usr/bin/env python3
"""Translate KeyMod tutorial EN -> locale .md files."""
from __future__ import annotations

import re
import sys
import time
from pathlib import Path

from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "docs/tutorial/keymod"

LOCALE_MAP = {
    "zh": "zh-CN",
    "ja": "ja",
    "ko": "ko",
    "de": "de",
    "fr": "fr",
    "es": "es",
    "it": "it",
    "pt": "pt",
    "ro": "ro",
    "ru": "ru",
    "ar": "ar",
    "tr": "tr",
    "pl": "pl",
    "nl": "nl",
}

PAGES = [
    "index",
    "01-getting-started",
    "02-keyboard-mouse",
    "03-target-keyboard",
    "04-shortcuts",
    "05-macros",
    "06-voice-input",
    "07-ai",
    "08-gamepad",
    "09-numpad",
    "10-presentation",
    "11-settings",
    "12-troubleshooting",
]

KEEP_LITERAL = re.compile(
    r"(\{%[^%]+%\})|(`[^`]+`)|(\[[^\]]*\]\([^)]+\))|"
    r"(https?://\S+)|(<[A-Z_/][^>]*>)|(\b(?:Openterface|KeyMod|CH9329|Whisper|"
    r"Android|iOS|USB|BLE|HID|KVM|GitHub|Discord|Blender|KiCAD|Photoshop|"
    r"VS Code|Fusion 360|Nomad Sculpt|Google|Ollama|OpenAI|Anthropic|Gemini|"
    r"Mistral|Groq|Qwen|DeepSeek|PowerPoint|Keynote|macOS|Windows|Linux|"
    r"Mini-KVM|KVM-GO|Crowd Supply|TechxArtisan|WASD|IME|Fn|Ctrl|Shift|Alt|"
    r"Cmd|Win|Super|Meta|Option|NumLock|STICK_KEY|STICK_MOUSE|DPAD|BUTTON|"
    r"TOUCHPAD|schema v7|preset_default|emu-6|RSSI|ADB|APK|JSON|HTML|"
    r"MiB|base64|gpt-3\.5-turbo|llama3-8b)\b)",
    re.I,
)

PLACEHOLDER = "__KM_KEEP_{}__"


def protect(text: str) -> tuple[str, list[str]]:
    parts: list[str] = []

    def repl(m: re.Match) -> str:
        parts.append(m.group(0))
        return PLACEHOLDER.format(len(parts) - 1)

    return KEEP_LITERAL.sub(repl, text), parts


def restore(text: str, parts: list[str]) -> str:
    for i, p in enumerate(parts):
        text = text.replace(PLACEHOLDER.format(i), p)
    return text


def split_blocks(body: str) -> list[tuple[str, bool]]:
    """Split into (segment, is_code_fence) preserving ``` blocks."""
    blocks: list[tuple[str, bool]] = []
    fence_re = re.compile(r"^```", re.M)
    pos = 0
    in_fence = False
    for m in fence_re.finditer(body):
        if not in_fence:
            if m.start() > pos:
                blocks.append((body[pos : m.start()], False))
            in_fence = True
            fence_start = m.start()
            pos = m.start()
        else:
            end = m.end()
            # include through newline after closing fence line
            nl = body.find("\n", end)
            endpos = len(body) if nl == -1 else nl + 1
            blocks.append((body[pos:endpos], True))
            pos = endpos
            in_fence = False
    if pos < len(body):
        blocks.append((body[pos:], False))
    return blocks


def translate_chunk(text: str, translator: GoogleTranslator, max_len: int = 4500) -> str:
    text = text.strip()
    if not text:
        return text
    protected, parts = protect(text)
    if len(protected) <= max_len:
        try:
            out = translator.translate(protected)
        except Exception:
            time.sleep(1)
            out = translator.translate(protected)
        return restore(out or protected, parts)
    # split by paragraphs
    paras = protected.split("\n\n")
    out_paras = []
    buf = ""
    for p in paras:
        if len(buf) + len(p) + 2 > max_len and buf:
            out_paras.append(translate_chunk(buf, translator, max_len))
            buf = ""
        buf = (buf + "\n\n" + p).strip() if buf else p
    if buf:
        out_paras.append(translate_chunk(buf, translator, max_len))
    return "\n\n".join(out_paras)


def translate_body(body: str, translator: GoogleTranslator) -> str:
    result = []
    for segment, is_code in split_blocks(body):
        if is_code or segment.strip().startswith("{% include"):
            result.append(segment)
            continue
        # preserve div/img html blocks as-is if mostly tags
        if re.search(r"<div align|<img ", segment) and len(re.sub(r"<[^>]+>", "", segment).strip()) < 80:
            # translate only <p><em>...</em></p> captions
            def cap_tr(m: re.Match) -> str:
                inner = m.group(1)
                if not inner.strip():
                    return m.group(0)
                return f"<p><em>{translate_chunk(inner, translator)}</em></p>"

            segment = re.sub(r"<p><em>(.*?)</em></p>", cap_tr, segment, flags=re.S)
            result.append(segment)
            continue
        result.append(translate_chunk(segment, translator))
        time.sleep(0.15)
    return "".join(result)


def translate_frontmatter(fm: str, translator: GoogleTranslator) -> str:
    lines = fm.split("\n")
    out = []
    for line in lines:
        m = re.match(r'^(title|description|keywords):\s*"(.*)"\s*$', line)
        if m:
            key, val = m.group(1), m.group(2)
            val_t = translate_chunk(val, translator)
            out.append(f'{key}: "{val_t}"')
        else:
            out.append(line)
    return "\n".join(out)


def translate_file(src: Path, dest: Path, locale: str) -> None:
    raw = src.read_text(encoding="utf-8")
    if not raw.startswith("---"):
        dest.write_text(raw, encoding="utf-8")
        return
    parts = raw.split("---", 2)
    if len(parts) < 3:
        dest.write_text(raw, encoding="utf-8")
        return
    fm, body = parts[1], parts[2]
    target = LOCALE_MAP.get(locale, locale)
    tr = GoogleTranslator(source="en", target=target)
    new_fm = translate_frontmatter(fm, tr)
    time.sleep(0.2)
    new_body = translate_body(body, tr)
    body = new_body if new_body.startswith("\n") else "\n" + new_body
    dest.write_text(f"---{new_fm}---{body}", encoding="utf-8")


def main() -> None:
    locales = sys.argv[1:] if len(sys.argv) > 1 else list(LOCALE_MAP.keys())
    created = skipped = errors = 0
    for loc in locales:
        if loc not in LOCALE_MAP:
            print(f"unknown locale {loc}", file=sys.stderr)
            continue
        for page in PAGES:
            src = OUT_DIR / f"{page}.md"
            dest = OUT_DIR / f"{page}.{loc}.md"
            if dest.exists():
                skipped += 1
                continue
            if not src.exists():
                errors += 1
                print(f"missing source {src}")
                continue
            print(f"translate {page}.{loc}.md ...")
            try:
                translate_file(src, dest, loc)
                created += 1
            except Exception as e:
                errors += 1
                print(f"ERROR {dest}: {e}")
            time.sleep(0.3)
    print(f"created={created} skipped={skipped} errors={errors}")


if __name__ == "__main__":
    main()
