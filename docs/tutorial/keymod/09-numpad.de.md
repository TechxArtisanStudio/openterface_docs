---
title: "KeyMod Tutorial – Numpad"
description: Verwenden Sie für die Dateneingabe den KeyMod Ziffernblock mit HID Ziffernblock-Tastencodes und anwendungsspezifischen Rastern. Ein vollständiger… Openterface.
keywords: "KeyMod Ziffernblock, Ziffernblock, HID Ziffernblock, Dateneingabe"
---

# 9. Numpad

Ein vollständiger Ziffernblock zur Dateneingabe. Jede Taste sendet den entsprechenden Nummernblock-Tastencode HID.

## Tastenzuordnung

| Schlüssel | HID Nutzungscode |
|-----|---------------|
| 0-9 | 0x62, 0x59-0x61 |
| +, -, *, / | 0x57, 0x56, 0x55, 0x54 |
| Geben Sie | ein 0x58 |
| . / = | 0x63 / 0x67 |
| NumLock | 0x53 |

## Anwendungsspezifische Raster

Einige Verknüpfungsprofile (Blender, Fusion 360, KiCad) enthalten **benutzerdefinierte Nummernblockraster**, die auf ihre spezifischen Anwendungen zugeschnitten sind.

## Nächste Schritte

- **[← Gamepad](08-gamepad.md)** – Virtueller Gamecontroller
- **[Presentation →](10-presentation.md)** — Schieben Sie die Fernbedienung