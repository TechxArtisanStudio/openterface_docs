---
title: "KeyMod Tutorial - Getting Started"
description: "KeyMod Tutorial - Getting Started: Install KeyCmd, connect to your KeyMod hardware, and send your first keystroke in under 5 minutes."
keywords: "KeyMod getting started, KeyMod setup, KeyCmd installation, connect KeyMod"
---

# 1. Getting Started

Install KeyCmd, connect to your KeyMod hardware, and send your first keystroke in under 5 minutes.

## What You Need

- **Openterface KeyMod hardware** — powered on and within range
- **Phone or tablet** — Android with KeyCmd installed
- **USB cable** (for initial setup) — USB-C to connect your phone to the KeyMod device
- **Bluetooth** (optional) — for wireless connection after initial setup

## Step 1: Install KeyCmd

**Android:**

1. Open your phone's browser and download the [latest KeyCmd beta APK](https://github.com/TechxArtisanStudio/Openterface_KeyCmd_Android/releases/latest) (`KeyCmd-release.apk`)
2. Tap the downloaded file to install
3. If Android asks, allow **"Install unknown apps"** for your browser

> **Multi-user devices (e.g. GrapheneOS):** Android allows only one app signature per package across all user profiles. If installation fails with a signature conflict ("App not installed" or `INSTALL_FAILED_UPDATE_INCOMPATIBLE`), a previous KeyCmd build signed with a different key is still installed under another user profile. Uninstall KeyCmd from **every** user profile (Settings → System → Multiple users), then install the new APK again.

You can also get the latest build from the [KeyCmd app page](/app/keycmd/).

> **Note:** KeyCmd source is public — [Openterface_KeyCmd_Android](https://github.com/TechxArtisanStudio/Openterface_KeyCmd_Android) and [Openterface_KeyCmd_iOS](https://github.com/TechxArtisanStudio/Openterface_KeyCmd_iOS) (AGPL-3.0).

## Step 2: Connect to Your KeyMod Device

KeyCmd connects to the Openterface KeyMod hardware in two ways:

### USB Connection (recommended for first-time setup)

1. Plug your phone into the KeyMod device using a USB-C cable
2. Open KeyCmd
3. Tap the connection icon (top-right corner of the main screen)
4. Tap **"USB Connection"**
5. Accept the USB permission prompt when prompted
6. You should see a green **"Connected"** status indicator

### Bluetooth Connection (wireless)

1. Make sure Bluetooth is enabled on your phone
2. Open KeyCmd and tap the connection icon
3. Tap **"Bluetooth Connection"**
4. Wait for your KeyMod device to appear in the scan list
5. Tap it to pair
6. You should see a green **"Connected"** status indicator

> **Tip:** Enable **"Auto-connect on startup"** in the connection dialog so KeyCmd reconnects automatically every time you open it. The app remembers your last connection type (USB or BLE).

## Step 3: Pick Your Mode — Welcome & Guide

After launching, you'll see the **Welcome & Guide** screen with mode cards:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Welcome & Guide — tap any mode card to enter that mode.</em></p>
</div>

Use the side menu (hamburger icon, top-left) to switch modes at any time:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Navigation drawer — switch modes, access macros, voice, and settings.</em></p>
</div>

**"Auto-enter selected mode"** — check this box to skip the Welcome screen on future launches and go directly to your last-used mode. (On iOS the same option is labelled **"Remember this choice and auto-enter this mode"**.)

**"Skip for now" button** — bypass the Welcome screen and enter your previously-used mode immediately.

## Step 4: Send Your First Keystroke

1. Select **Keyboard & Mouse** mode
2. Tap any key on the on-screen keyboard
3. The corresponding keystroke is sent to the target computer

That's it! You're now controlling your target computer remotely.

## Connection State Indicators

| Indicator | Meaning |
|---|---|
| **Green** (connected icon) | Active connection, ready to send input |
| **Amber/Blue** (connecting icon) | Connection in progress |
| **Gray** (disconnected icon) | No active connection |
| **Signal bars** | BLE signal strength or USB active status |

## Next Steps

- **[Keyboard & Mouse →](/tutorial/keymod/02-keyboard-mouse/)** — Typing, modifiers, touchpad, and text input
