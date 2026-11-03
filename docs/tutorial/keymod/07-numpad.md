---
title: "KeyMod Tutorial - Numpad"
description: "KeyMod Tutorial - Numpad: A full numeric keypad for data entry. Each key sends the corresponding HID numpad key code. Open-source KVM-over-USB guides."
keywords: "KeyMod numpad, numeric keypad, HID numpad, data entry"
---

# 7. Numpad

A full numeric keypad for data entry. Each key sends the corresponding HID numpad key code.

## Key Mapping

| Key | HID Usage Code |
|-----|---------------|
| 0-9 | 0x62, 0x59-0x61 |
| +, -, *, / | 0x57, 0x56, 0x55, 0x54 |
| Enter | 0x58 |
| . / = | 0x63 / 0x67 |
| NumLock | 0x53 |

## Application-Specific Grids

Shortcut profiles are plain lists of shortcuts — there is no separate custom numpad grid per profile. Only the **Blender** profile binds numpad keys, as ordinary Shortcut Hub entries (**Top → Numpad 7**, **Front → Numpad 1**, **Right → Numpad 3**, **Opposite → Numpad 9**, **Camera → Numpad 0**); the KiCad and Fusion 360 profiles contain no numpad entries.

## Next Steps

- **[← Gamepad](/tutorial/keymod/06-gamepad/)** — Virtual game controller
- **[Presentation →](/tutorial/keymod/08-presentation/)** — Slide remote control
