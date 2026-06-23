---
title: "Mit Zielgerät Verbinden (Legacy v1)"
description: "Lernen Sie, wie Sie Ihr Zielgerät с der Openterface KVM Extension for uConsole verbinden. Vollständige Руководство для USB-Steuerung и Videoeingang-Setup nach Оборудование-Установка и Программное обеспечение-Setup."
keywords: "KVM-Подключениеssetup, Zielgerät-Подключение, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Подключение"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Подключениеsоsicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Оборудование-Установка](/products/kvmext/hardware-installation/) - Physische Установка der KVM Extension-Karte
2. [Программное обеспечение-Setup](/products/kvmext/software-setup/) - Установка der Openterface App

## Подключениеsschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport с dem USB-Port des Zielgeräts, um Tastatur- и Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts с dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel для HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel для VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter о seinen USB-Anschluss с Strom versorgt wird для ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter для verschiedene Videosignaltypen

## Подключение Testen

1. Schalten Sie die Stromversorgung ein и starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- и USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
