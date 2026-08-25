---
title: FAQs for Openterface KeyMod Series
description: "FAQs for Openterface KeyMod Series — Mini and Plus USB bridges, KeyCmd app, HID connectivity, and how KeyMod relates to Mini-KVM and KVM-GO."
keywords: KeyMod, KeyMod Mini, KeyMod Plus, Openterface, HID emulator, Bluetooth keyboard, phone keyboard, open-source, pre-launch, Android, iPadOS, KeyCmd
---

# FAQs for Openterface KeyMod Series

Welcome to the FAQ for **Openterface KeyMod** (Mini and Plus).  
If you don't find what you need, **email us at [info@openterface.com](mailto:info@openterface.com)** or **join our community** on [Discord](/discord) or [Reddit](/reddit).

⚠️ **Note**: KeyMod is currently in pre-launch development. Features, specifications, and design are subject to change as we finalize the product.

---

## :material-clipboard-list: Quick Navigation

- [FAQs for Openterface KeyMod Series](#faqs-for-openterface-keymod-series)
  - [:material-clipboard-list: Quick Navigation](#material-clipboard-list-quick-navigation)
  - [General](#general)
  - [Hardware — Mini vs Plus](#hardware--mini-vs-plus)
  - [Connectivity](#connectivity)
  - [Features](#features)
  - [Troubleshooting](#troubleshooting)
  - [Pre-Launch](#pre-launch)

---

## General

**:material-chat-question:{ .faq } What is KeyMod?**

KeyMod is a pocket **Wireless USB Multi-tool** bridge: a compact dongle that plugs into the **target** device and turns your phone into a wireless keyboard, trackpad, and gamepad console via the **KeyCmd** app. The target sees standard USB keyboard and mouse HID—BIOS-capable, zero driver install.

**:material-chat-question:{ .faq } What platforms does the KeyCmd app support?**

The KeyCmd controller app focuses on **Android** and **iPadOS**. We are also expanding desktop control with **Windows and macOS** software in our broader Openterface ecosystem.

**:material-chat-question:{ .faq } Does the target device need any software?**

No. KeyMod emulates a standard USB keyboard and mouse. The target device recognizes it as plug-and-play HID hardware—no drivers or software installation required.

**:material-chat-question:{ .faq } Is KeyMod open source?**

Yes. KeyMod is open hardware and open software. We will publish schematics, PCB files, firmware, software, and BOM as the project evolves.

---

## Hardware — Mini vs Plus

**:material-chat-question:{ .faq } What is the difference between KeyMod Mini and KeyMod Plus?**

Both SKUs run the same **KeyCmd** app. The difference is which **USB port on the target** they plug into and how your **phone** links to the dongle:

| SKU | Target plug | Phone link |
|-----|-------------|------------|
| **KeyMod Mini** | USB-C male → target | **BLE wireless only** — ultra-compact, Type-C-first EDC |
| **KeyMod Plus** | USB-A male → target | **BLE or USB wired** to the dongle — steadier phone link and more bandwidth (ideal for KM Pro and Terminal Preview) |

BLE range (both): best within ~5 m, up to ~10 m in open space.

**:material-chat-question:{ .faq } I saw photos of a 2-in-1 USB-A + USB-C connector. Is that available?**

During our beta program, we produced a small run of a combined 2-in-1 connector prototype. Early Crowd Supply pages and some social media posts featured photos of that prototype.

That 2-in-1 version is **not part of the current KeyMod lineup**. The KeyMod Plus ships with a dedicated USB-A connector. We made this change for two reasons:

1. **Screen safety.** Some beta testers found that the flip-cover design of the 2-in-1 connector could accidentally scrape the laptop screen when closing the lid.
2. **Manufacturing.** The 2-in-1 design requires a thinner PCB and a different production process, which adds significant cost. For the Crowd Supply campaign, we chose a more mainstream approach to keep the product accessible.

Whether we revisit a 2-in-1 connector design in the future depends on how the current KeyMod campaign performs. We appreciate the interest and ask for your understanding.

**:material-chat-question:{ .faq } Is KeyMod a Bluetooth keyboard for my PC?**

No. KeyMod presents **USB HID** to the target. Bluetooth (or Plus USB) is **phone ↔ KeyMod only**—not "phone pairs to PC as a Bluetooth keyboard." Your PC never pairs with your phone over Bluetooth for KeyMod control.

---

## Connectivity

**:material-chat-question:{ .faq } USB vs Bluetooth—which should I use?**

- **Phone ↔ KeyMod over BLE**: Cable-free from your pocket. Works on both Mini and Plus.
- **Phone ↔ KeyMod over USB (Plus only)**: More reliable and higher bandwidth than BLE alone—recommended for heavy KM Pro or Terminal Preview sessions.
- **KeyMod → target**: Always **USB plug-in** (Mini on USB-C, Plus on USB-A). The target never uses Bluetooth for KeyMod HID.

---

## Features

**:material-chat-question:{ .faq } Can I create custom profiles and macros?**

Yes. KeyCmd supports custom gamepad presets, Shortcut Hub profiles, strip layouts (KM Pro), macros, and Saved texts. See the [KeyCmd app FAQ](/app/keycmd/faq/) for mode details.

**:material-chat-question:{ .faq } Does KeyMod capture video?**

No. KeyMod is HID-only. Use [Mini-KVM](/products/minikvm/) or [KVM-GO](/products/kvmgo/) when you need the target screen on your laptop.

**:material-chat-question:{ .faq } Does Gamepad mode make the PC see an Xbox or PlayStation controller?**

Not with current KeyMod hardware. KeyCmd maps sticks and buttons to **keyboard and mouse** actions—the target sees standard keyboard + mouse HID, not native gamepad HID.

---

## Troubleshooting

**:material-chat-question:{ .faq } My phone doesn't see KeyMod in the app. What should I do?**

A few things to check:

1. **Install the correct app.** Search for **KeyMod** on Google Play or the App Store. The "Openterface" app is a different product (KVM control) and will not discover KeyMod.
2. **Do not pair through your phone's Bluetooth settings.** KeyMod does not require system-level pairing or a PIN code. Pairing through the phone's Bluetooth menu will not work and may show a PIN prompt that cannot be completed.
3. **Connect through the app.** Make sure Bluetooth is enabled on your phone, then open the KeyMod app. Tap the signal icon in the top-right corner, select Bluetooth connection, and scan for nearby devices. The app should discover your KeyMod and connect directly.

If the app still doesn't find your KeyMod after these steps, try restarting Bluetooth on your phone and scanning again. If the issue persists, contact [support@openterface.com](mailto:support@openterface.com) with your phone model and Android/iOS version.

---

## Pre-Launch

**:material-chat-question:{ .faq } When will KeyMod launch?**

KeyMod is in pre-launch development. Back or subscribe on [Crowd Supply](https://www.crowdsupply.com/techxartisan/openterface-keymod) and the [product page](/products/keymod/) for launch notifications and updates.

**:material-chat-question:{ .faq } How is KeyMod related to Mini-KVM and KVM-GO?**

KeyMod shares Openterface’s proven **HID core** with Mini-KVM and KVM-GO—the same hardware-based keyboard and mouse emulation approach. KeyMod is designed for **local phone-as-console control** over USB HID, not KVM-over-USB **video capture**. KeyCmd also works with Mini-KVM and KVM-GO hardware for keyboard, trackpad, and gamepad modes.

---

## See also

- [KeyCmd app FAQ](/app/keycmd/faq/) — KM Basic vs Pro, modifiers, gamepad, Bluetooth topology
- [KeyMod product overview](/products/keymod/)
