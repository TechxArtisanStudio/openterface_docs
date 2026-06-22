---
title: "Mit Zielgerät verbinden | Erweiterungsmodul v2"
description: "Verbinden Sie Ihr Zielgerät über HDMI, USB HID und optional Ethernet für Netzwerk-Debugging mit dem Openterface uConsole KVM-Erweiterungsmodul v2."
keywords: "KVM-Verbindungseinrichtung, Zielgerät, HDMI, USB HID, Ethernet-Debug, uConsole KVM v2"
---

# **Mit Zielgerät verbinden** | Erweiterungsmodul v2

## Verbindungsübersicht

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Das Erweiterungsmodul v2 verbindet sich mit Ihrem Ziel über **HDMI** (Video/Audio) und **USB** (Tastatur-/Maus-Emulation). Optional können Sie **Ethernet** für SSH, Web-Management oder Log-Erfassung verwenden, während KVM Anzeige und Eingabe übernimmt.

## Voraussetzungen

1. [Hardware-Installation](/products/kvmext/hardware-installation/) — Modul im Erweiterungssteckplatz eingesetzt
2. [Software-Einrichtung](/products/kvmext/software-setup/) — Openterface QT auf dem uConsole installiert
3. [Ethernet-Karte ausgewählt](/products/kvmext/ethernet/) (falls Netzwerkfunktionen genutzt werden)

## Verbindungsschritte

### **USB-Steuerung (erforderlich für KVM)**

Verbinden Sie den **Type-C-Anschluss** der Erweiterungsplatine mit dem USB-Anschluss des Zielgeräts. Dies emuliert Tastatur und Maus (USB HID).

Das Zielgerät benötigt **keine** Treiber oder zusätzliche Software für die HID-Steuerung.

### **Videoeingang (erforderlich für KVM)**

Verbinden Sie den HDMI-Ausgang des Ziels mit dem HDMI-Eingang des Erweiterungsmoduls:

- Standard-HDMI-Kabel für HDMI-Ausgänge
- **VGA-zu-HDMI**-Konverter für VGA (stellen Sie sicher, dass die USB-Stromversorgung des Konverters angeschlossen ist)
- Weitere Adapter für DVI, DisplayPort, Micro HDMI nach Bedarf

### **Ethernet (optional — Netzwerk-Debug)**

Wenn Sie eine Netzwerkkarte installiert haben:

- Verbinden Sie ein Ethernet-Kabel von der Karte mit Ihrem Zielgerät oder Netzwerk-Switch
- Verwenden Sie das uConsole für SSH, Web-UI oder Log-Erfassung neben KVM
- Siehe [Ethernet-Anleitung](/products/kvmext/ethernet/) für 100M vs 1000M-Einrichtung

### **SD-Karte (optional — Imaging & Dateien)**

Legen Sie eine microSD-Karte in den Modulsteckplatz ein. Verwenden Sie die Host-App, um den Zugriff zwischen uConsole und Ziel umzuschalten. Siehe [SD-Karten-Anleitung](/products/kvmext/sd-card/).

## USB 2.0 gemeinsames Umschalten

Die Host-App kann einen gemeinsamen USB 2.0-Anschluss zwischen dem uConsole und dem Ziel umschalten — nützlich für USB-Sticks und Wartungsabläufe ohne Kabeltrennen.

## Verbindung testen

1. Schalten Sie das uConsole ein und starten Sie das Zielgerät
2. Starten Sie Openterface QT
3. Bestätigen Sie, dass HDMI-Video auf dem uConsole-Bildschirm erscheint
4. Testen Sie Tastatur, Trackball und Audio-Passthrough
5. Falls SD- oder USB-Umschaltung verwendet wird, testen Sie Mount/Umschaltung in der Host-App

## Verwandt

- [Anwendungsfälle](/products/kvmext/use-cases/) — Feld-IT, Homelab, Embedded-Debug-Szenarien
- [FAQs](/products/kvmext/faq/) — Fehlerbehebung
