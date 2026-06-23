---
title: "الميزات و Spezifikationen (Legacy v1)"
description: "Vollständige نظرة عامة der Openterface KVM Extension for uConsole: leistungsstarke الميزات einschließlich direkter HDMI-Eingang, USB HID-Steuerung, perfekter Formfaktor و detaillierte technische Spezifikationen. Alles was Sie حول diese tragbare KVM-Lösung wissen müssen."
keywords: "KVM Extension الميزات, uConsole KVM, HDMI KVM, USB HID Steuerung, tragbare KVM, headless Steuerung, 4G LTE Ersatz, technische Spezifikationen, uConsole Erweiterung"
---

# **الميزات و Spezifikationen** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


![PCB-front](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp){:style="max-height:320px"}
![PCB-Back](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-back.webp){:style="max-height:320px"}

## Kernfunktionen

- **Direkter HDMI + USB HID**: Nutzen Sie den eingebauten Bildschirm و die Steuerungen des uConsole مع direktem HDMI-Eingang و USB HID-Emulation.
- **Plug-and-Play**: Sofortige Steuerung ohne البرمجياتinstallation أو Rückstände auf dem Zielgerät.
- **Niedrige Latenz**: Optimiert لـ BIOS-Level-Fehlerbehebung و Echtzeit-Interaktionen.
- **Tragbar**: All-in-One-Mobiltool—keine zusätzlichen Monitore, Tastaturen أو Netzwerkeinrichtung erforderlich.
- **Netzwerkfrei**: Stabile headless-Steuerung حول HDMI-Capture و HID-Eingang, kein Netzwerk erforderlich.
- **Textحولtragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal لـ Benutzernamen, Passwörter و Codeschnipsel. Unterstützt vollständiges ASCII, einschließlich Symbole و Satzzeichen. [Überprüfen Sie unsere App](/app) لـ Details.
- **Open Source**: Basiert auf [Openterface KVM QT](https://github.com/techxArtisanStudio/openterface_qt) مع aktiver Community-Unterstützung.

## Technische Spezifikationen

### Physikalische Abmessungen

- **Größe:** 37 × 77 mm (entspricht 4G/LTE-Modul)
- **Dicke:** 1,0 mm (dünner als das ursprüngliche 4G/LTE-Modul مع 1,2 mm)
- **Material:** Hochwertige PCB مع Federkontakten

### Vollständige Tastatur- و Maus-Emulation

- **USB HID:** Absolute و relative Mauspositionierung, vollständige Tastaturunterstützung, Multimediatasten.
- **الاتصال:** USB-الاتصال zum Ziel حول den Type-C-Stecker-Port der Erweiterungskarte.

### Video و Audio

- **Eingang:** Bis zu 4K (3840×2160) @ 30Hz حول HDMI
- **Ausgang:** Full HD (1920×1080) @ 30Hz مع unter 140ms Latenz
- **Display:** Verwendet den eingebauten Bildschirm des uConsole
- **Kompression:** YUV- و MJPEG-Unterstützung
- **Kompatibilität:** VGA, DVI, Micro HDMI (حول Adapter)
- **Audio:** HDMI-eingebetteter Audio-Durchgang

### Umschaltbarer USB 2.0-Port

- **Geteilter Port:** Wechseln Sie einfach den USB-Zugriff zwischen uConsole و Zielgerät (z.B. USB-Sticks) حول die Host-App.
- **USB-Geschwindigkeit:** 12Mbps Vollgeschwindigkeitsحولtragung

### Konnektivität و Stromversorgung

- **Stromversorgung:** Bezieht Strom direkt aus dem Erweiterungsslot des uConsole (keine externe Versorgung erforderlich)
- **Zielkompatibilität:** Windows, macOS, Linux, Android, iOS
- **Zielsoftware:** Keine التثبيت erforderlich
