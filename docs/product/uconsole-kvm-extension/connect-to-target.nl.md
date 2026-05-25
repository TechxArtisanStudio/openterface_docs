---
title: "Mit Zielgerät Verbinden"
description: "Lernen Sie, wie Sie Ihr Zielgerät met der Openterface KVM Extension for uConsole verbinden. Vollständige Handleiding voor USB-Steuerung en Videoeingang-Setup nach Hardware-Installatie en Software-Setup."
keywords: "KVM-Verbindingssetup, Zielgerät-Verbinding, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Verbinding"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

## Verbindingsoversicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Hardware-Installatie](/product/uconsole-kvm-extension/hardware-installation/) - Physische Installatie der KVM Extension-Karte
2. [Software-Setup](/product/uconsole-kvm-extension/software-setup/) - Installatie der Openterface App

## Verbindingsschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport met dem USB-Port des Zielgeräts, um Tastatur- en Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts met dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel voor HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel voor VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter over seinen USB-Anschluss met Strom versorgt wird voor ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter voor verschiedene Videosignaltypen

## Verbinding Testen

1. Schalten Sie die Stromversorgung ein en starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- en USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
