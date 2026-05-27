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

1. Open your phone's browser and download the [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. Tap the downloaded file to install
3. If Android asks, allow **"Install unknown apps"** for your browser

You can also get the latest build from the [App](/app/kvm/) page.

> **Note:** KeyCmd source code is not yet public. We plan to open-source it after a successful crowdfunding campaign.

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

**"Remember my choice"** — check this box to skip the Welcome screen on future launches and go directly to your last-used mode.

**"Skip" button** — bypass the Welcome screen and enter your previously-used mode immediately.

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

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Typing, modifiers, touchpad, and text input
