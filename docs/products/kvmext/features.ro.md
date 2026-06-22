---
title: "Caracteristici și Specificații | Modul de Extensie v2"
description: "Prezentare completă a Modulului de Extensie KVM Openterface uConsole v2: HDMI KVM, Ethernet dual, card SD, comutare USB și specificații tehnice."
keywords: "caracteristici extensie KVM v2, uConsole KVM, HDMI KVM, expansiune Ethernet, card SD, KVM portabil, specificații tehnice"
---

# **Caracteristici și Specificații** | Modul de Extensie v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Caracteristici Principale

- **Control KVM Direct**: Vizualizează și controlează un dispozitiv țintă prin intrare HDMI și emulare USB HID tastatură/maus — ideal pentru acces BIOS, instalare OS și recuperare servere headless.
- **Suport Dual Placă de Rețea**: Sunt incluse ambele plăci de rețea **100M** și **1000M**. Folosește 100M pe toate plăcile de bază uConsole; folosește 1000M cu [Kit-ul de Upgrade uConsole HackerGadgets](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) pentru rețelistică gigabit.
- **Citire/Scriere Card SD**: Scrie imagini, exportă jurnale și transferă fișiere de pe uConsole-ul tău fără un cititor de carduri extern.
- **Comutare Partajată USB 2.0**: Comută accesul USB între uConsole și dispozitivul țintă pentru depanare și întreținere flexibile.
- **Latentă Redusă**: Latentă video sub **70 ms** cu ieșire **1080p @ 60 Hz** pe ecranul uConsole.
- **Portabil și Alimentat prin Slot**: Design compact **77.3 × 34.7 mm**, alimentat din slotul de expansiune al uConsole — fără adaptor de alimentare extern.
- **Aliniat cu Open Source**: Construit pe platforma Openterface KVM cu aplicații host open source și suport comunitar.

## Specificații Tehnice

| Element | Specificație |
|------|---------------|
| **Numele produsului** | Modul de Extensie KVM Openterface uConsole v2 |
| **Dimensiune placă** | 77.3 × 34.7 mm |
| **Intrare video** | HDMI până la 4K @ 30 Hz (RGB/YCBCR444) sau 4K @ 60 Hz (YCBCR420) |
| **Ieșire video** | 1080p @ 60 Hz către ecranul uConsole |
| **Latentă** | &lt; 70 ms |
| **Control KVM** | Emulare tastatură și maus USB HID |
| **Rețea** | 100M funcționează pe toate plăcile de bază uConsole; 1000M necesită Kit-ul de Upgrade uConsole |
| **Card SD** | Citire/scriere cu comutare host/țintă prin aplicația host |
| **Partajare USB** | Comutare partajată USB 2.0 Full Speed (12 Mbps) |
| **Platforme țintă** | Windows, macOS, Linux, sisteme x86, SBC-uri ARM |
| **Alimentare** | Alimentat prin slotul de expansiune uConsole |
| **Alimentare externă** | Nu este necesară |

### Emulare Completă Tastatură și Maus

- **USB HID**: Poziționare absolută și relativă a mausului, suport complet tastatură, taste multimedia.
- **Conexiune**: Legătură USB către țintă prin portul Type-C al plăcii de extensie.

### Video și Audio

- **Intrare**: Până la 4K prin HDMI (vezi tabelul de mai sus pentru detalii despre moduri)
- **Ieșire**: Full HD 1080p @ 60 Hz cu latentă sub 70 ms
- **Afișaj**: Folosește ecranul integrat al uConsole
- **Compresie**: Suport YUV și MJPEG
- **Compatibilitate**: VGA, DVI, Micro HDMI (prin adaptoare)
- **Audio**: Trecere audio încorporată HDMI

### Conectivitate și Alimentare

- **Alimentare**: Se alimentează direct din slotul de expansiune al uConsole
- **Software țintă**: Nu este necesară instalarea pe dispozitivul țintă

## Related

- [Ghid Ethernet](/products/kvmext/ethernet/) — alege placa 100M vs 1000M
- [Ghid Card SD](/products/kvmext/sd-card/) — imagistică și transfer de fișiere
- [Opțiuni de Achiziție](/products/kvmext/purchase-options/) — Doar Extensie vs pachetul Kit de Upgrade
- [Specificații v1 legacy](/products/kvmext/v1/features/) — modul de prima generație
