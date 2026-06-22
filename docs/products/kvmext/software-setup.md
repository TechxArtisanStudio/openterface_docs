---
title: "Software Setup | Extension Module v2"
description: "Install and configure the Openterface host app on your uConsole for KVM Extension Module v2 — HDMI capture, USB HID, SD card switching, and USB sharing."
keywords: "Openterface app installation, uConsole software setup, KVM extension v2, openterfaceqt"
---

# **Software Setup** | Extension Module v2

## Installation overview

The Openterface host app enables your uConsole to function as a KVM interface with HDMI capture, USB HID control, **SD card switching**, and **USB port sharing** between host and target.

!!! note "Requirements"
    - **uConsole (host)**: Openterface QT app required
    - **Target device**: No app needed — Windows, macOS, Linux, Android, iOS supported for KVM
    - **Video**: Standard HDMI cable; powered converters support VGA, DP, and other formats
    - **Recommended backend**: **GStreamer** for best arm64 GPU performance (Kali Linux may have limited GStreamer support)

## Installation methods

### **Option 1: GitHub Releases (recommended for arm64)**

1. Visit [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Download the latest `.deb` for **arm64** (e.g. `openterfaceqt_*_arm64.deb`).
3. Install:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Option 2: Flatpak**

Follow the [Flatpak Installation Guide](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Option 3: Community repository (ClockworkPi Bookworm)**

Maintained by Rex for ClockworkPi images:

1. **Add repository**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Install**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Repository notes"
    Commands require `sudo`. Repository targets arm64 Bookworm packages — verify compatibility with your uConsole OS before installing.

## Important reminders

!!! tip "Power & first-time setup"
    - Keep the uConsole charged or on stable power — low battery can cause connection issues.
    - If keyboard/mouse control fails on first attempt:
        1. Fully shut down the uConsole.
        2. Wait at least 10 seconds.
        3. Power on and retry.

!!! tip "Serial communication baud rate"
    Set baud rate to **9600** for serial use — the uConsole may not reliably sustain 115200.

## Usage

### **Starting a KVM session**

1. Launch Openterface QT on your uConsole.
2. The app detects Extension Module v2 automatically.
3. Connect the target via HDMI and USB.
4. Use the uConsole keyboard and trackball to control the target.

### **Control features**

- **Keyboard**: Full emulation including multimedia keys
- **Mouse**: Absolute and relative positioning
- **Audio**: HDMI audio passthrough to uConsole speakers
- **Text transfer**: Paste usernames, passwords, and snippets as simulated keystrokes
- **USB switching**: Share USB storage between uConsole and target via the host app — see [Connect to Target](/products/kvmext/connect-to-target/)
- **SD card switching**: Mount the SD card to host or target via the host app — see [SD Card Guide](/products/kvmext/sd-card/)

### **Troubleshooting software install**

If the app is hard to install or mouse/keyboard do not work:

- Confirm you installed the **arm64** build on your uConsole CM4/module
- Join [Discord](https://openterface.com/discord) for real-time help
- Report issues on [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Related

- [Connect to Target](/products/kvmext/connect-to-target/)
- [SD Card Guide](/products/kvmext/sd-card/)
- [FAQs](/products/kvmext/faq/)
