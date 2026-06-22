---
title: "SD Card Guide | Extension Module v2"
description: "Use SD card read/write on Openterface uConsole KVM Extension Module v2. Switch access between uConsole and target for imaging, logs, and file transfer."
keywords: "SD card, microSD, KVM extension v2, image flashing, file transfer, uConsole"
---

# **SD Card Guide** | Extension Module v2

Extension Module v2 includes **SD card read/write** so you can flash images, export logs, and transfer files from your uConsole without carrying an external card reader.

## Overview

The module provides a microSD slot shared between the **uConsole (host)** and the **target device** — similar in concept to the KVM-GO MicroSD switching workflow, but integrated into the uConsole expansion module.

!!! note "One side at a time"
    The SD card mounts to either the uConsole **or** the target, never both simultaneously. Switch access using the Openterface host app.

## Install the SD card

Insert the microSD card firmly until it is securely seated in the module slot.

## Control via host app

Use **Openterface QT** on your uConsole to:

- Switch SD access between **host** (uConsole) and **target**
- Write OS images to the card from the uConsole
- Export logs or transfer files without removing the card

Ensure you have completed [Software Setup](/products/kvmext/software-setup/) before using SD features.

## Typical workflows

| Workflow | Description |
|----------|-------------|
| **OS imaging** | Flash Raspberry Pi, embedded board, or appliance images from the uConsole |
| **Log export** | Pull logs from a target onto the card, then read on the uConsole |
| **File transfer** | Move configs or scripts between uConsole and target when network is unavailable |

## Safety tips

- **Eject/unmount** in the host app before physically removing the card
- Switch to the correct side (host vs target) before read/write operations
- Use quality microSD cards for imaging workloads

## Related

- [Connect to Target](/products/kvmext/connect-to-target/)
- [Software Setup](/products/kvmext/software-setup/)
- [KVM-GO MicroSD Switching Guide](/products/kvmgo/microsd-switch/) — similar switching concept on KVM-GO
