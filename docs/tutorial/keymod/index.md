---
title: "KeyMod Tutorial"
description: "Complete guide to using KeyCmd with KeyMod hardware. Learn how to connect, control your computer from your phone, and use keyboard, mouse, gamepad, macros, and voice input modes."
keywords: "KeyMod tutorial, how to use KeyMod, phone keyboard guide, KeyCmd tutorial"
---

# KeyMod Tutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

This tutorial covers the **Android** version of **KeyCmd** with KeyMod hardware. **KeyCmd 1.0 for iPhone** (iOS 17.0+) is live on the App Store; iPad support is on the way.

## What is KeyMod?

KeyMod is Openterface **hardware** that turns your phone into a keyboard and trackpad for any computer. Pair it with the **KeyCmd** app on your phone — KeyCmd sends keystrokes, mouse movements, and gamepad inputs through KeyMod to a target computer as if they came from a real USB keyboard and mouse.

### How the connection works

```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd)                   (CH9329 protocol)              (Windows/macOS/Linux)
```

The KeyCmd app communicates with the KeyMod hardware using the **CH9329 protocol** over a serial connection (USB-C at 115200 baud, 8N1, or Bluetooth BLE). The KeyMod device appears to the target computer as a standard USB keyboard and mouse — no drivers needed.

### Who is this for?

| You are... | KeyMod helps you... |
|---|---|
| **System Administrator** | Manage servers from your phone without carrying a spare keyboard and monitor |
| **Presenter / Speaker** | Control slides from anywhere in the room, no clicker needed |
| **Gamer** | Use your phone as a gamepad for retro gaming or as an extra controller |
| **Content Creator** | Trigger shortcuts, macros, and voice input while recording on another machine |
| **Power User** | Send complex keyboard shortcuts, text snippets, or automation sequences from your phone |
| **Anyone** | Type on your computer from your couch, bed, or across the room |

## Tutorial Sections

| Guide | Description |
|---|---|
| [1. Getting Started](/tutorial/keymod/01-getting-started/) | Install, connect, and pick your first mode (5 minutes) |
| [2. Keyboard & Mouse](/tutorial/keymod/02-keyboard-mouse/) | Typing, modifiers, touchpad, and text input |
| [3. Target OS](/tutorial/keymod/03-target-keyboard/) | Target operating system mapping |
| [4. Shortcut Hub](/tutorial/keymod/04-shortcuts/) | Profile-based keyboard shortcuts for popular apps |
| [5. Macros](/tutorial/keymod/05-macros/) | Automated key sequences with delays |
| [6. Gamepad](/tutorial/keymod/06-gamepad/) | Virtual game controller with customizable layouts |
| [7. Numpad](/tutorial/keymod/07-numpad/) | Numeric keypad for data entry |
| [8. Presentation](/tutorial/keymod/08-presentation/) | Slide remote control and timer |
| [9. Voice Input](/tutorial/keymod/09-voice-input/) | Speech-to-keyboard with Whisper AI |
| [10. Terminal](/tutorial/keymod/10-terminal/) | SSH connection and command line access |
| [11. Agent](/tutorial/keymod/11-agent/) | AI-driven task automation via SSH or BLE |
| [12. Settings](/tutorial/keymod/12-settings/) | App configuration and preferences |
| [13. Troubleshooting](/tutorial/keymod/13-troubleshooting/) | Common problems and solutions |

## Getting Help

- **Bug reports:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Community:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Source code:** [KeyCmd for Android](https://github.com/TechxArtisanStudio/Openterface_KeyCmd_Android) · [KeyCmd for iOS](https://github.com/TechxArtisanStudio/Openterface_KeyCmd_iOS)
