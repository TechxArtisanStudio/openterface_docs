---
title: "Funktionen & Spezifikationen | Extension Module v2"
description: "Vollständige Übersicht über das Openterface uConsole KVM Extension Module v2: HDMI KVM, duales Ethernet, SD-Karte, USB-Umschaltung und technische Spezifikationen."
keywords: "KVM-Erweiterung v2 Funktionen, uConsole KVM, HDMI KVM, Ethernet-Erweiterung, SD-Karte, portables KVM, technische Spezifikationen"
---

# **Funktionen & Spezifikationen** | Extension Module v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Kernfunktionen

- **Direkte KVM-Steuerung**: Betrachten und Steuern eines Zielgeräts über HDMI-Eingang und USB-HID-Tastatur-/Maus-Emulation – ideal für BIOS-Zugriff, OS-Installation und Headless-Server-Wiederherstellung.
- **Unterstützung für duale Netzwerkkarten**: Sowohl **100M**- als auch **1000M**-Ethernetkarten sind enthalten. Verwenden Sie 100M auf allen uConsole-Basisboards; nutzen Sie 1000M mit dem [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) für Gigabit-Netzwerke.
- **SD-Karte Lesen/Schreiben**: Schreiben Sie Images, exportieren Sie Logs und übertragen Sie Dateien von Ihrer uConsole ohne externen Kartenleser.
- **USB 2.0 Shared Switching**: Wechseln Sie den USB-Zugriff zwischen der uConsole und dem Zielgerät für flexibles Debugging und Wartung.
- **Geringe Latenz**: Video-Latenz unter **70 ms** bei **1080p @ 60 Hz** Ausgabe auf dem uConsole-Bildschirm.
- **Tragbar & Slot-betrieben**: Kompaktes **77,3 × 34,7 mm** Design, Stromversorgung über den uConsole-Erweiterungsslot – kein externes Netzteil erforderlich.
- **Open-Source-konform**: Basiert auf der Openterface KVM-Plattform mit offenen Host-Apps und Community-Support.

## Technische Spezifikationen

| Eigenschaft | Spezifikation |
|-------------|---------------|
| **Produktname** | Openterface uConsole KVM Extension Module v2 |
| **Platinengröße** | 77,3 × 34,7 mm |
| **Videoeingang** | HDMI bis zu 4K @ 30 Hz (RGB/YCBCR444) oder 4K @ 60 Hz (YCBCR420) |
| **Videoausgang** | 1080p @ 60 Hz auf dem uConsole-Bildschirm |
| **Latenz** | &lt; 70 ms |
| **KVM-Steuerung** | USB-HID-Tastatur- und Maus-Emulation |
| **Netzwerk** | 100M funktioniert auf allen uConsole-Basisboards; 1000M erfordert das uConsole Upgrade Kit |
| **SD-Karte** | Lesen/Schreiben mit Host/Ziel-Umschaltung über die Host-App |
| **USB-Freigabe** | USB 2.0 Full Speed (12 Mbps) Shared Switching |
| **Zielplattformen** | Windows, macOS, Linux, x86-Systeme, ARM SBCs |
| **Stromversorgung** | Stromversorgung über den uConsole-Erweiterungsslot |
| **Externe Stromversorgung** | Nicht erforderlich |

### Vollständige Tastatur- und Maus-Emulation

- **USB HID**: Absolute und relative Mauspositionierung, volle Tastaturunterstützung, Multimedia-Tasten.
- **Verbindung**: USB-Verbindung zum Zielgerät über den Type-C-Port der Erweiterungsplatine.

### Video & Audio

- **Eingang**: Bis zu 4K über HDMI (siehe obige Tabelle für Modusdetails)
- **Ausgang**: Full HD 1080p @ 60 Hz mit weniger als 70 ms Latenz
- **Display**: Verwendet den integrierten Bildschirm der uConsole
- **Komprimierung**: YUV- und MJPEG-Unterstützung
- **Kompatibilität**: VGA, DVI, Micro HDMI (über Adapter)
- **Audio**: HDMI-Audio-Passthrough

### Konnektivität & Stromversorgung

- **Stromversorgung**: Bezieht Strom direkt aus dem uConsole-Erweiterungsslot
- **Zielsoftware**: Keine Installation auf dem Zielgerät erforderlich

## Verwandte Themen

- [Ethernet Guide](/products/kvmext/ethernet/) – Wahl zwischen 100M und 1000M Karte
- [SD Card Guide](/products/kvmext/sd-card/) – Image-Erstellung und Dateitransfer
- [Purchase Options](/products/kvmext/purchase-options/) – Nur Erweiterung vs. Upgrade-Kit-Bundle
- [Legacy v1 specs](/products/kvmext/v1/features/) – Modul der ersten Generation
