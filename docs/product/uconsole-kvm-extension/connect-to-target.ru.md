---
title: "Mit Zielgerät Verbinden"
description: "Lernen Sie, wie Sie Ihr Zielgerät с der Openterface KVM Extension for uConsole verbinden. Vollständige Руководство для USB-Steuerung и Videoeingang-Setup nach Оборудование-Установка и Программное обеспечение-Setup."
keywords: "KVM-Подключениеssetup, Zielgerät-Подключение, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung Подключение"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

## Подключениеsоsicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [Оборудование-Установка](/product/uconsole-kvm-extension/hardware-installation/) - Physische Установка der KVM Extension-Karte
2. [Программное обеспечение-Setup](/product/uconsole-kvm-extension/software-setup/) - Установка der Openterface App

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
