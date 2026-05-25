---
title: "Mit Zielgerät Verbinden"
description: "Lernen Sie, wie Sie Ihr Zielgerät ile der Openterface KVM Extension for uConsole verbinden. Vollständige Kılavuz için USB-Steuerung ve Videoeingang-Setup nach Donanım-Kurulum ve Yazılım-Setup."
keywords: "KVM-Bağlantıssetup, Zielgerät-Bağlantı, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Bağlantı"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

## Bağlantıshakkındasicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Donanım-Kurulum](/product/uconsole-kvm-extension/hardware-installation/) - Physische Kurulum der KVM Extension-Karte
2. [Yazılım-Setup](/product/uconsole-kvm-extension/software-setup/) - Kurulum der Openterface App

## Bağlantısschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport ile dem USB-Port des Zielgeräts, um Tastatur- ve Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts ile dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel için HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel için VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter hakkında seinen USB-Anschluss ile Strom versorgt wird için ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter için verschiedene Videosignaltypen

## Bağlantı Testen

1. Schalten Sie die Stromversorgung ein ve starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- ve USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
