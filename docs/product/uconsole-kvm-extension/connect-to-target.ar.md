---
title: "Mit Zielgerät Verbinden"
description: "Lernen Sie, wie Sie Ihr Zielgerät مع der Openterface KVM Extension for uConsole verbinden. Vollständige دليل لـ USB-Steuerung و Videoeingang-Setup nach الأجهزة-التثبيت و البرمجيات-Setup."
keywords: "KVM-الاتصالssetup, Zielgerät-الاتصال, USB-Steuerungssetup, HDMI-Eingangssetup, uConsole KVM-Erweiterung الاتصال"
---

# **Mit Zielgerät Verbinden** | Openterface KVM Extension for uConsole

## الاتصالsحولsicht

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Voraussetzungen

Bevor Sie Ihr Zielgerät verbinden, stellen Sie sicher, dass Sie folgendes abgeschlossen haben:

1. [الأجهزة-التثبيت](/product/uconsole-kvm-extension/hardware-installation/) - Physische التثبيت der KVM Extension-Karte
2. [البرمجيات-Setup](/product/uconsole-kvm-extension/software-setup/) - التثبيت der Openterface App

## الاتصالsschritte

### **USB-Steuerung**
Verbinden Sie den Type-C-Buchsenport مع dem USB-Port des Zielgeräts, um Tastatur- و Maussignale zu emulieren.

### **Videoeingang**
Verbinden Sie den Videoausgang des Zielgeräts مع dem HDMI-Port auf der KVM Extension:

- Verwenden Sie ein Standard-HDMI-Kabel لـ HDMI-Ausgabegeräte
- Verwenden Sie ein VGA-to-HDMI-Konverterkabel لـ VGA-Ausgabegeräte.
    - *Hinweis*: Stellen Sie sicher, dass der Konverter حول seinen USB-Anschluss مع Strom versorgt wird لـ ordnungsgemäßen Betrieb.
- Verwenden Sie andere geeignete Adapter لـ verschiedene Videosignaltypen

## الاتصال Testen

1. Schalten Sie die Stromversorgung ein و starten Sie das uConsole
2. Führen Sie die Openterface QT App aus
3. Testen Sie HDMI-, Audio- و USB HID-Funktionalität, um ordnungsgemäßen Betrieb zu bestätigen
