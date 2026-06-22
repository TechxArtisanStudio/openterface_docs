---
title: "Connect to Target Device | Extension Module v2"
description: "Connect your target device to Openterface uConsole KVM Extension Module v2 via HDMI, USB HID, and optional Ethernet for network debugging."
keywords: "KVM connection setup, target device, HDMI, USB HID, Ethernet debug, uConsole KVM v2"
---

# **Connect to Target Device** | Extension Module v2

## Connection overview

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Extension Module v2 connects to your target through **HDMI** (video/audio) and **USB** (keyboard/mouse emulation). Optionally use **Ethernet** for SSH, web management, or log capture while KVM handles display and input.

## Prerequisites

1. [Hardware Installation](/products/kvmext/hardware-installation/) — module seated in expansion slot
2. [Software Setup](/products/kvmext/software-setup/) — Openterface QT installed on uConsole
3. [Ethernet card chosen](/products/kvmext/ethernet/) (if using network features)

## Connection steps

### **USB control (required for KVM)**

Connect the extension board's **Type-C port** to the target device's USB port. This emulates keyboard and mouse (USB HID).

The target device does **not** need drivers or additional software for HID control.

### **Video input (required for KVM)**

Connect the target's HDMI output to the extension module's HDMI input:

- Standard HDMI cable for HDMI outputs
- **VGA-to-HDMI** converter for VGA (ensure converter USB power is connected)
- Other adapters for DVI, DisplayPort, Micro HDMI as needed

### **Ethernet (optional — network debug)**

If you installed a network card:

- Connect an Ethernet cable from the card to your target device or network switch
- Use the uConsole for SSH, web UI, or log capture alongside KVM
- See [Ethernet Guide](/products/kvmext/ethernet/) for 100M vs 1000M setup

### **SD card (optional — imaging & files)**

Insert a microSD card into the module slot. Use the host app to switch access between uConsole and target. See [SD Card Guide](/products/kvmext/sd-card/).

## USB 2.0 shared switching

The host app can switch a shared USB 2.0 port between the uConsole and the target — useful for flash drives and maintenance workflows without unplugging cables.

## Testing the connection

1. Power on the uConsole and boot the target device
2. Launch Openterface QT
3. Confirm HDMI video appears on the uConsole screen
4. Test keyboard, trackball, and audio passthrough
5. If using SD or USB switching, test mount/switch in the host app

## Related

- [Use Cases](/products/kvmext/use-cases/) — field IT, homelab, embedded debug scenarios
- [FAQs](/products/kvmext/faq/) — troubleshooting
