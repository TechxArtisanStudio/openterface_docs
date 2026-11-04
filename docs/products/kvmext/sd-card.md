---
title: "SD Card Guide | Extension Module v2"
description: "Use the shared microSD slot on the Openterface uConsole KVM Extension Module v2 for imaging, logs, and file transfer, and understand what the current host app does and does not expose."
keywords: "SD card, microSD, KVM extension v2, image flashing, file transfer, uConsole"
---

# **SD Card Guide** | Extension Module v2

Extension Module v2 includes a **microSD slot** so you can flash images, export logs, and transfer files from your uConsole without carrying an external card reader.

!!! warning "Host/target switching is not in the app yet"
    The current Openterface app exposes only the **USB port switch** (host vs target). It has no command to remount the microSD card on the other side. Until that ships, use the card on the side it is wired to: read and write from the uConsole, or boot the target from it — but not both without swapping. The pages below describe the intended workflow.

## Overview

The module provides a microSD slot shared between the **uConsole (host)** and the **target device** — similar in concept to the KVM-GO MicroSD switching workflow, but integrated into the uConsole expansion module.

!!! note "One side at a time"
    The SD card mounts to either the uConsole **or** the target, never both simultaneously.

## Install the SD card

Insert the microSD card firmly until it is securely seated in the module slot.

## What the host app does today

Openterface QT on your uConsole handles the KVM itself — video capture, keyboard/mouse control, and the **USB port switch** between host and target.

For the microSD card you can currently:

- Write OS images to the card from the uConsole
- Export logs or transfer files on the uConsole side

Switching the card between host and target from the app is planned, not available.

Ensure you have completed [Software Setup](/products/kvmext/software-setup/) before using SD features.

## Typical workflows

| Workflow | Description |
|----------|-------------|
| **OS imaging** | Flash Raspberry Pi, embedded board, or appliance images from the uConsole |
| **Log export** | Pull logs from a target onto the card, then read on the uConsole |
| **File transfer** | Move configs or scripts between uConsole and target when network is unavailable |

## Safety tips

- **Eject/unmount** before physically removing the card
- Confirm which side the card is mounted to before read/write operations
- Use quality microSD cards for imaging workloads

## Related

- [Connect to Target](/products/kvmext/connect-to-target/)
- [Software Setup](/products/kvmext/software-setup/)
- [KVM-GO MicroSD Switching Guide](/products/kvmgo/microsd-switch/) — similar switching concept on KVM-GO
