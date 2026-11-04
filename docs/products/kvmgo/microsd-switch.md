---
title: "MicroSD Card Switching Guide"
description: "Learn how to use the MicroSD hardware switching button on Openterface KVM-Go. Understand the operational states, power requirements, RGB indicator, safety guidelines, and file transfer capabilities."
keywords: "MicroSD switching, KVM switch, hardware switch, MicroSD card control, KVM over USB, file transfer, USB device management, computer peripherals, MicroSD power management, LED indicators"
---

# **MicroSD Card Switching Guide** | Openterface KVM-Go

The **Openterface KVM-Go** includes a single MicroSD card slot that can be shared between the host computer and the target device, but never both at the same time.

This design allows you to quickly switch between devices for **file transfer**, without physically removing the card, making your workflow faster and more efficient. It can also just serve as your **regular MicroSD card reader**.

## **Install the MicroSD Card**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Proper MicroSD Card Installation"
    Insert the MicroSD card firmly until you feel a **click**, indicating it is securely seated and locked in place.

## **Control Methods**

KVM-Go switches the MicroSD card between host and target with:

- **Hardware Button** – A physical button on the device. The card is mounted on whichever side the button selects.

!!! note "Software switching is not available yet"
    A host-app toggle that switches the card remotely is planned, but the current firmware does not expose it — see the [Beta Review Guide](/products/kvmgo/notes/review-guide/) for the same note aimed at beta units.


## **Power Behavior (Production Hardware)**

!!! warning "Both USB cables must be connected"
    In production units, the MicroSD storage module is powered **exclusively from the secondary (Target) USB port**. The primary (Host) port alone cannot power the reader — even if the switch is set to Host.

This is a deliberate change from early prototypes. The original shared power path caused voltage drop that disrupted the storage module, so the production layout separates the two power sources to prevent unwanted current flow between them.

What this means in practice:

- **Normal operation** — connect **both** the Host and Target USB cables. The toggle switches which device has *data* access to the MicroSD card, but does **not** change the power source. The Target port must stay connected even when the card is mounted to the Host.
- **Use as a plain card reader** — connect KVM-Go directly to the Target port only, and set the toggle to the Target side. That is enough for file transfer.
- **Writing a bootable ISO to the card** — if the machine on the Target side is powered off and does **not** supply standby USB power, the storage module has no power and will not enumerate. To work around this, feed power to the Target USB port from a power bank (or any 5 V USB source) while the Host writes the ISO.

## **Switch Button & LED Indicators** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

The **RGB status indicator** shows the current MicroSD connection state *(Note: Under Development / Subject to Change)*:

- **🔵 Blue ON** – MicroSD card is mounted to the **target device**  
- **🟢 Green ON** – MicroSD card is mounted to the **host computer**  
- **LED OFF** – No MicroSD card inserted or device powered off  

There is a single RGB indicator on the board; it reports the mount state, not read/write activity.

!!! note "Auto-Mounting Feature (Experimental)"
    An upcoming experimental feature will allow **auto-mounting** to whichever side (host or target) connects first, making the experience even more seamless. Until then, the card follows the position of the hardware toggle.

---

## Related

- [microSD EXPRESS on KVM-GO: Compatibility Test and Real Transfer Speeds](updates/20260203-kvm-go-microsd-express.md) — Compatibility test with SanDisk microSD EXPRESS card and real-world transfer speeds
- [KVM Go MicroSD Reader — Production Hardware Behavior (Forum)](https://forum.openterface.com/t/kvm-go-microsd-reader-production-hardware-behavior/125) — Detailed explanation of the production power-path design and edge cases
