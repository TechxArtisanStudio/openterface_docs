---
title: "Functies & Specificaties | Extensiemodule v2"
description: "Volledig overzicht van de Openterface uConsole KVM Extensiemodule v2: HDMI KVM, dubbel Ethernet, SD-kaart, USB-switching en technische specificaties."
keywords: "KVM extensie v2 functies, uConsole KVM, HDMI KVM, Ethernet uitbreiding, SD-kaart, draagbare KVM, technische specs"
---

# **Functies & Specificaties** | Extensiemodule v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Kernfuncties

- **Directe KVM-besturing**: Bekijk en bedien een doelapparaat via HDMI-ingang en USB HID toetsenbord- en muisemulatie — ideaal voor BIOS-toegang, OS-installatie en headless serverherstel.
- **Ondersteuning voor dubbele netwerkkaart**: Zowel **100M** als **1000M** Ethernet-kaarten zijn inbegrepen. Gebruik 100M op alle uConsole-basisborden; gebruik 1000M met de [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) voor gigabit-netwerken.
- **SD-kaart lezen/schrijven**: Schrijf images, exporteer logs en draag bestanden over vanaf uw uConsole zonder externe kaartlezer.
- **USB 2.0 gedeelde switching**: Schakel USB-toegang tussen de uConsole en het doelapparaat voor flexibele debugging en onderhoud.
- **Lage latentie**: Video-latentie onder de **70 ms** met **1080p @ 60 Hz** uitvoer naar het uConsole-scherm.
- **Draagbaar en gevoed via slot**: Compact **77,3 × 34,7 mm** ontwerp, gevoed vanuit het uConsole-uitbreidingsslot — geen externe voedingsadapter nodig.
- **Open Source georiënteerd**: Gebouwd op het Openterface KVM-platform met open host-apps en community-ondersteuning.

## Technische Specificaties

| Item | Specificatie |
|------|---------------|
| **Productnaam** | Openterface uConsole KVM Extensiemodule v2 |
| **Bordafmetingen** | 77,3 × 34,7 mm |
| **Video-ingang** | HDMI tot 4K @ 30 Hz (RGB/YCBCR444) of 4K @ 60 Hz (YCBCR420) |
| **Video-uitgang** | 1080p @ 60 Hz naar het uConsole-scherm |
| **Latentie** | &lt; 70 ms |
| **KVM-besturing** | USB HID toetsenbord- en muisemulatie |
| **Netwerk** | 100M werkt op alle uConsole-basisborden; 1000M vereist uConsole Upgrade Kit |
| **SD-kaart** | Lezen/schrijven met host/doel-switching via host-app |
| **USB-delen** | USB 2.0 Full Speed (12 Mbps) gedeelde switching |
| **Doelplatforms** | Windows, macOS, Linux, x86-systemen, ARM SBC's |
| **Voeding** | Gevoed door uConsole-uitbreidingsslot |
| **Externe voeding** | Niet vereist |

### Volledige toetsenbord- en muisemulatie

- **USB HID**: Absolute en relatieve muispositionering, volledige toetsenbordondersteuning, multimediatoetsen.
- **Verbinding**: USB-koppeling naar het doelapparaat via de Type-C poort van de extensiekaart.

### Video & Audio

- **Ingang**: Tot 4K via HDMI (zie tabel hierboven voor modusdetails)
- **Uitgang**: Full HD 1080p @ 60 Hz met minder dan 70 ms latentie
- **Scherm**: Maakt gebruik van het ingebouwde scherm van de uConsole
- **Compressie**: YUV- en MJPEG-ondersteuning
- **Compatibiliteit**: VGA, DVI, Micro HDMI (via adapters)
- **Audio**: HDMI embedded audio-passthrough

### Connectiviteit & Voeding

- **Voeding**: Haalt stroom direct uit het uConsole-uitbreidingsslot
- **Doelsoftware**: Geen installatie vereist op het doelapparaat

## Gerelateerd

- [Ethernet-handleiding](/products/kvmext/ethernet/) — kies 100M vs 1000M kaart
- [SD-kaart-handleiding](/products/kvmext/sd-card/) — images maken en bestandsoverdracht
- [Aankoopopties](/products/kvmext/purchase-options/) — Alleen extensie vs Upgrade Kit-bundel
- [Verouderde v1-specificaties](/products/kvmext/v1/features/) — eerste generatie module
