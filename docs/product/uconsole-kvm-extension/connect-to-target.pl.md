---
title: "Mit Zielgerät Verbinden"
description: "Lernen Sie, wie Sie Ihr Zielgerät z der Openterface KVM Extension for uConsole verbinden. Vollständige Przewodnik dla USB-Steuerung i Videoeingang-Setup nach Sprzęt-Instalacja i Oprogramowanie-Setup."
keywords: "KVM-Połączeniessetup, Zielgerät-Połączenie, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Połączenie"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

## Połączeniesosicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Sprzęt-Instalacja](/product/uconsole-kvm-extension/hardware-installation/) - Physische Instalacja der KVM Extension-Karte
2. [Oprogramowanie-Setup](/product/uconsole-kvm-extension/software-setup/) - Instalacja der Openterface App

## Połączeniesschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport z dem USB-Port des Zielgeräts, um Tastatur- i Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts z dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel dla HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel dla VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter o seinen USB-Anschluss z Strom versorgt wird dla ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter dla verschiedene Videosignaltypen

## Połączenie Testen

1. Schalten Sie die Stromversorgung ein i starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- i USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
