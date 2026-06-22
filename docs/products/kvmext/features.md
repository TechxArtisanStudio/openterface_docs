---
title: "Features & Specifications | Extension Module v2"
description: "Complete overview of Openterface uConsole KVM Extension Module v2: HDMI KVM, dual Ethernet, SD card, USB switching, and technical specifications."
keywords: "KVM extension v2 features, uConsole KVM, HDMI KVM, Ethernet expansion, SD card, portable KVM, technical specs"
---

# **Features & Specifications** | Extension Module v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Core Features

- **Direct KVM Control**: View and control a target device through HDMI input and USB HID keyboard/mouse emulation — ideal for BIOS access, OS installation, and headless server recovery.
- **Dual Network Card Support**: Both **100M** and **1000M** Ethernet cards are included. Use 100M on all uConsole base boards; use 1000M with the [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) for gigabit networking.
- **SD Card Read/Write**: Write images, export logs, and transfer files from your uConsole without an external card reader.
- **USB 2.0 Shared Switching**: Switch USB access between the uConsole and the target device for flexible debugging and maintenance.
- **Low Latency**: Video latency under **70 ms** with **1080p @ 60 Hz** output to the uConsole screen.
- **Portable & Slot Powered**: Compact **77.3 × 34.7 mm** design, powered from the uConsole expansion slot — no external power adapter.
- **Open Source Aligned**: Built on the Openterface KVM platform with open host apps and community support.

## Technical Specifications

| Item | Specification |
|------|---------------|
| **Product name** | Openterface uConsole KVM Extension Module v2 |
| **Board size** | 77.3 × 34.7 mm |
| **Video input** | HDMI up to 4K @ 30 Hz (RGB/YCBCR444) or 4K @ 60 Hz (YCBCR420) |
| **Video output** | 1080p @ 60 Hz to the uConsole screen |
| **Latency** | &lt; 70 ms |
| **KVM control** | USB HID keyboard and mouse emulation |
| **Network** | 100M works on all uConsole base boards; 1000M requires uConsole Upgrade Kit |
| **SD card** | Read/write with host/target switching via host app |
| **USB sharing** | USB 2.0 Full Speed (12 Mbps) shared switching |
| **Target platforms** | Windows, macOS, Linux, x86 systems, ARM SBCs |
| **Power** | Powered by uConsole expansion slot |
| **External power** | Not required |

### Full Keyboard & Mouse Emulation

- **USB HID**: Absolute and relative mouse positioning, full keyboard support, multimedia keys.
- **Connection**: USB link to the target via the extension board's Type-C port.

### Video & Audio

- **Input**: Up to 4K via HDMI (see table above for mode details)
- **Output**: Full HD 1080p @ 60 Hz with under 70 ms latency
- **Display**: Uses uConsole's built-in screen
- **Compression**: YUV and MJPEG support
- **Compatibility**: VGA, DVI, Micro HDMI (via adapters)
- **Audio**: HDMI embedded audio passthrough

### Connectivity & Power

- **Power**: Draws power directly from the uConsole expansion slot
- **Target software**: No installation required on the target device

## Related

- [Ethernet Guide](/products/kvmext/ethernet/) — choose 100M vs 1000M card
- [SD Card Guide](/products/kvmext/sd-card/) — imaging and file transfer
- [Purchase Options](/products/kvmext/purchase-options/) — Extension Only vs Upgrade Kit bundle
- [Legacy v1 specs](/products/kvmext/v1/features/) — first-generation module
