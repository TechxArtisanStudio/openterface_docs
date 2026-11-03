---
title: "KeyMod Tutorial - Target OS"
description: "KeyMod Tutorial - Target OS: KeyMod sends keystrokes that adapt to the target computer's operating system. Configuring this correctly ensures the right…"
keywords: "KeyMod target OS, key mapping, modifier keys, Unicode input"
---

# 3. Target OS

KeyMod sends keystrokes that adapt to the target computer's operating system. Configuring this correctly ensures the right keys arrive on the target.

## How to Set

Tap the **OS icon** in the header bar to open the picker.

> **Note:** The OS picker is a dialog with three icon buttons (macOS, Windows, Linux) that appears when you tap the OS icon in the header bar.

## What It Changes

| Target | Key Mapping |
|--------|-------------|
| **Windows** | Win key mapped to Windows key; standard PC modifier behavior |
| **macOS** | Win key mapped to Cmd; Alt mapped to Option; correct shortcut labels |
| **Linux** | Super/Meta key behavior |

This affects:
- **Shortcut labels** shown in Shortcut Hub
- **Modifier key mapping** (Win key behavior)
- **Unicode input method** used for non-ASCII characters

## Unicode Characters

Non-ASCII characters (Chinese, Japanese, emoji) require OS-specific input methods:

| OS | Method |
|---|---|
| **Windows** | Alt+NumPad hexadecimal Unicode input |
| **Linux** | Ctrl+Shift+U followed by hex code |
| **macOS** | Option+hex input |

If Unicode characters appear incorrectly on the target, verify the Target OS is set correctly.

## Keyboard Modes (Not Layouts)

KeyMod provides three keyboard modes for typing:

| Mode | How to switch |
|---|---|
| **ABC** (letters) | Tap the **ABC** key |
| **123** (numbers) | Tap the **123** key |
| **!?#** (symbols) | Tap the **!?#** key |

These are input method toggles within the app, not physical keyboard layouts. KeyMod currently sends standard USB HID scancodes (US QWERTY base). If you use a non-US physical keyboard on the target, you may see slight character mismatches for symbols on the same key positions.

## Next Steps

- **[← Keyboard & Mouse](/tutorial/keymod/02-keyboard-mouse/)** — Typing, modifiers, touchpad, and text input
- **[Shortcut Hub →](/tutorial/keymod/04-shortcuts/)** — Profile-based keyboard shortcuts
