---
title: "Functies en Spezifikationen (Legacy v1)"
description: "Vollständige Overzicht der Openterface KVM Extension for uConsole: leistungsstarke Functies einschließlich direkter HDMI-Eingang, USB HID-Steuerung, perfekter Formfaktor en detaillierte technische Spezifikationen. Alles was Sie over diese tragbare KVM-Lösung wissen müssen."
keywords: "KVM Extension Functies, uConsole KVM, HDMI KVM, USB HID Steuerung, tragbare KVM, headless Steuerung, 4G LTE Ersatz, technische Spezifikationen, uConsole Erweiterung"
---

# **Functies en Spezifikationen** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


![PCB-front](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension.webp){:style="max-height:320px"}
![PCB-Back](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-back.webp){:style="max-height:320px"}

## Kernfunktionen

- **Direkter HDMI + USB HID**: Nutzen Sie den eingebauten Bildschirm en die Steuerungen des uConsole met direktem HDMI-Eingang en USB HID-Emulation.
- **Plug-and-Play**: Sofortige Steuerung ohne Softwareinstallation of Rückstände auf dem Zielgerät.
- **Niedrige Latenz**: Optimiert voor BIOS-Level-Fehlerbehebung en Echtzeit-Interaktionen.
- **Tragbar**: All-in-One-Mobiltool—keine zusätzlichen Monitore, Tastaturen of Netzwerkeinrichtung erforderlich.
- **Netzwerkfrei**: Stabile headless-Steuerung over HDMI-Capture en HID-Eingang, kein Netzwerk erforderlich.
- **Textovertragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal voor Benutzernamen, Passwörter en Codeschnipsel. Unterstützt vollständiges ASCII, einschließlich Symbole en Satzzeichen. [Überprüfen Sie unsere App](/app) voor Details.
- **Open Source**: Basiert auf [Openterface KVM QT](https://github.com/techxArtisanStudio/openterface_qt) met aktiver Community-Unterstützung.

## Technische Spezifikationen

### Physikalische Abmessungen

- **Größe:** 37 × 77 mm (entspricht 4G/LTE-Modul)
- **Dicke:** 1,0 mm (dünner als das ursprüngliche 4G/LTE-Modul met 1,2 mm)
- **Material:** Hochwertige PCB met Federkontakten

### Vollständige Tastatur- en Maus-Emulation

- **USB HID:** Absolute en relative Mauspositionierung, vollständige Tastaturunterstützung, Multimediatasten.
- **Verbinding:** USB-Verbinding zum Ziel over den Type-C-Stecker-Port der Erweiterungskarte.

### Video en Audio

- **Eingang:** Bis zu 4K (3840×2160) @ 30Hz over HDMI
- **Ausgang:** Full HD (1920×1080) @ 30Hz met unter 140ms Latenz
- **Display:** Verwendet den eingebauten Bildschirm des uConsole
- **Kompression:** YUV- en MJPEG-Unterstützung
- **Kompatibilität:** VGA, DVI, Micro HDMI (over Adapter)
- **Audio:** HDMI-eingebetteter Audio-Durchgang

### Umschaltbarer USB 2.0-Port

- **Geteilter Port:** Wechseln Sie einfach den USB-Zugriff zwischen uConsole en Zielgerät (z.B. USB-Sticks) over die Host-App.
- **USB-Geschwindigkeit:** 12Mbps Vollgeschwindigkeitsovertragung

### Konnektivität en Stromversorgung

- **Stromversorgung:** Bezieht Strom direkt aus dem Erweiterungsslot des uConsole (keine externe Versorgung erforderlich)
- **Zielkompatibilität:** Windows, macOS, Linux, Android, iOS
- **Zielsoftware:** Keine Installatie erforderlich
