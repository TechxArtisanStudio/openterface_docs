---
title: "KeyMod Tutorial - Settings"
description: "KeyMod Tutorial - Settings: Configure KeyMod's behavior and appearance. Open-source KVM-over-USB guides. Open-source KVM-over-USB guides. Open-source…"
keywords: "KeyMod settings, auto-connect, theme, language, BLE delay, touchpad sensitivity"
---

# 12. Settings

Configure KeyMod's behavior and appearance. On Android, Settings has four tabs: **General**, **Voice**, **AI**, and **History**.

## General Settings

| Setting | Description |
|---|---|
| **Auto-connect** | Reconnect to last device (USB or BLE) on startup |
| **Keep screen on** | Prevent screen sleeping while using the app |
| **Haptic feedback** | Vibration on button presses |
| **Lock orientation (landscape)** | Single checkbox that pins the app to landscape — there is no portrait choice |
| **Language** | 11 languages: English, 简体中文, 繁體中文, Español, Français, Deutsch, 日本語, 한국어, Italiano, Русский, Português (Brasil) |
| **Theme** | 8 color families, Dark/Light, Follow system |
| **Touchpad sensitivity** | Scroll sensitivity slider |

> **iOS only:** the iOS General settings add a **BLE Key Delay** section — the delay between keystrokes sent over BLE (adjust if characters are missed). Android has no such control.

### Device Firmware Mode

The **General** tab also has a **Device** section, filled in once you are connected. It shows the current and stored firmware mode and lets you choose between **Mode 1 — HID + ACM**, **Mode 2 — HID + UAC + ACM**, **Mode 3 — HID + ACM Bridge**, and **Mode 4 — HID + ECM Bridge**, then tap **Apply & Reboot**. A confirmation dialog warns that the firmware mode changes and the device reboots, so you will need to reconnect.

## Target OS

Set the target OS to match the target computer's key conventions. This affects shortcut labels, Unicode input methods, and modifier key mapping.

| Target | Key Mapping |
|--------|-------------|
| **Windows** | Alt, Ctrl, Win key behavior |
| **Mac** | Cmd, Option key behavior |
| **Linux** | Super, Meta key behavior |

Change the target OS by tapping the **OS icon** in the header bar.

See [Target-Specific Keyboard](/tutorial/keymod/03-target-keyboard/) for keyboard layout and Unicode input details.

## Next Steps

- **[← Agent](/tutorial/keymod/11-agent/)** — AI-driven task automation
- **[Troubleshooting →](/tutorial/keymod/13-troubleshooting/)** — Common problems and solutions
