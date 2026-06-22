---
title: "FAQs | Extension Module v2"
description: "FAQs for Openterface uConsole KVM Extension Module v2: Ethernet cards, Upgrade Kit, SD card, software setup, compatibility, and troubleshooting."
keywords: "KVM extension v2 FAQ, uConsole KVM, Ethernet, SD card, troubleshooting, Upgrade Kit"
---

# FAQs | Extension Module v2

Welcome to the FAQ for **Openterface uConsole KVM Extension Module v2**.

If you don't find what you need, email [support@openterface.com](mailto:support@openterface.com) or join our community on [Discord](/discord).

---

## :material-clipboard-list: Quick Navigation

- [Product & purchase](#product--purchase)
- [Installation & hardware](#installation--hardware)
- [Compatibility](#compatibility)
- [Control & features](#control--features)
- [Video & audio](#video--audio)
- [Troubleshooting](#troubleshooting)
- [More](#more)

---

## Product & purchase

**:material-chat-question:{ .faq } Is Extension Module v2 one product or two network versions?**

It is **one product**. Both the 100M and 1000M Ethernet cards are included in the box. See [Purchase Options](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Which Ethernet card should I use?**

Use the **100M** card on all uConsole base boards. Use the **1000M** card only if you have the **HackerGadgets uConsole Upgrade Kit** and need gigabit networking. See [Ethernet Guide](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Do I need the HackerGadgets uConsole Upgrade Kit?**

Only for **gigabit Ethernet**. The 100M card works without the Upgrade Kit. If you don't have the kit, choose the bundle option at checkout or purchase the kit separately.

**:material-chat-question:{ .faq } Is the uConsole included?**

No. The ClockworkPi uConsole device is sold separately.

---

## Installation & hardware

**:material-chat-question:{ .faq } How does Extension Module v2 work?**

It captures HDMI from a target device and displays it on the uConsole. The uConsole keyboard and trackball control the target via USB HID emulation. Optional Ethernet and SD card features extend network debug and imaging workflows.

**:material-chat-question:{ .faq } Can I use this with the 4G/LTE module installed?**

No. Extension Module v2 uses the uConsole expansion slot and **cannot** be used at the same time as the 4G or LTE module.

**:material-chat-question:{ .faq } What tools do I need for installation?**

A hex screwdriver for mounting screws. ESD precautions are recommended.

**:material-chat-question:{ .faq } Is installation reversible?**

Yes. Remove Extension Module v2 and reinstall your original 4G/LTE module if needed.

---

## Compatibility

**:material-chat-question:{ .faq } Which uConsole models are compatible?**

Compatible with uConsole devices that have the standard expansion slot. Check your device specifications to confirm.

**:material-chat-question:{ .faq } What target devices can I control?**

Any device with HDMI output: desktops, servers, SBCs (Raspberry Pi, etc.), embedded systems, industrial PCs, and more.

**:material-chat-question:{ .faq } Does the target need special software?**

No. KVM uses USB HID emulation — no drivers required on the target for keyboard and mouse. Learn more about [USB-based KVM technology](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Can I control multiple targets at once?**

One target at a time for KVM. Switch targets by moving HDMI and USB cables.

---

## Control & features

**:material-chat-question:{ .faq } Can I transfer files via SD card?**

Yes. Extension Module v2 supports SD card read/write with host/target switching via the Openterface app. See [SD Card Guide](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Does it support BIOS-level access?**

Yes. Direct USB HID allows full BIOS/UEFI access without network dependencies.

**:material-chat-question:{ .faq } What about the legacy v1 module?**

The first-generation 37 × 77 mm module (no Ethernet/SD) is documented at [Legacy v1 Docs](/products/kvmext/v1/).

---

## Video & audio

**:material-chat-question:{ .faq } What video resolutions are supported?**

- **Input**: Up to 4K @ 30 Hz (RGB/YCBCR444) or 4K @ 60 Hz (YCBCR420) via HDMI
- **Output**: 1080p @ 60 Hz on the uConsole screen

**:material-chat-question:{ .faq } What is the video latency?**

Under **70 ms** — suitable for BIOS access, maintenance, and diagnostics.

**:material-chat-question:{ .faq } Is audio supported?**

Yes. HDMI embedded audio passes through to the uConsole speakers.

---

## Troubleshooting

**:material-chat-question:{ .faq } No video signal**

- Check HDMI connections on both ends
- Verify target is powered and outputting via HDMI
- Try a different HDMI cable
- Restart Openterface QT

**:material-chat-question:{ .faq } Keyboard or mouse not working**

- Confirm USB cable from extension module to target
- Fully shut down uConsole, wait 10 seconds, power on, retry
- Reinstall Openterface QT (arm64 build for your uConsole)
- Report your Linux distribution and CM4 module on [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) or [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Software was hard to install**

Try GitHub Releases (Option 1) or the ClockworkPi community repo (Option 3) in [Software Setup](/products/kvmext/software-setup/). Join [Discord](https://openterface.com/discord) for step-by-step help.

**:material-chat-question:{ .faq } USB switching port does not work**

Ensure you are on a recent Openterface QT release. Toggle USB access in the host app. If the issue persists, file an issue on [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI only displays in a box / no app settings menu**

Update to the latest Openterface QT. Check [Software Setup](/products/kvmext/software-setup/) and community threads on Discord for uConsole-specific display settings.

**:material-chat-question:{ .faq } App doesn't detect the module**

- Reseat the board in the expansion slot
- Restart the uConsole
- Reinstall Openterface QT

---

## More

**:material-chat-question:{ .faq } Is the software open source?**

Yes. Openterface host apps are open source on [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Where can I get support?**

- **Email**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Join our community](https://openterface.com/discord)
- **GitHub**: [Report issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
