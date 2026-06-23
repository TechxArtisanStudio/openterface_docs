---
title: "Mit Zielgerät Verbinden (Legacy v1)"
description: "Lernen Sie, wie Sie Ihr Zielgerät mit der Openterface KVM Extension for uConsole verbinden. Vollständige Anleitung für USB-Steuerung und Videoeingang-Setup nach Hardware-Installation und Software-Setup."
keywords: "KVM-Verbindungssetup, Zielgerät-Verbindung, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Verbindung"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Verbindungsübersicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Hardware-Installation](/products/kvmext/hardware-installation/) - Physische Installation der KVM Extension-Karte
2. [Software-Setup](/products/kvmext/software-setup/) - Installation der Openterface App

## Verbindungsschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport mit dem USB-Port des Zielgeräts, um Tastatur- und Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts mit dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel für HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel für VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter über seinen USB-Anschluss mit Strom versorgt wird für ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter für verschiedene Videosignaltypen

## Verbindung Testen

1. Schalten Sie die Stromversorgung ein und starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- und USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
