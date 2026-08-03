---
title: "Funktionen & Spezifikationen"
description: "KeyMod Series Funktionen: Bluetooth-HID-Tastatur und -Maus, USB + Bluetooth Dual-Verbindung, benutzerdefinierte Profile, Makros, Gamepad-Modi, Präsentationssteuerung, Shortcut-Hub. Open-Source-Mobil-App für Android und iOS."
keywords: "KeyMod-Funktionen, HID-Emulator, Bluetooth-Tastatur, USB-Tastatur, programmierbare Tasten, Gamepad, Makro, Open Source, CH9329, Shortcut-Hub, Präsentationsmodus"
---

# **Funktionen & Spezifikationen** | Openterface KeyMod Series

## Aktueller Status

KeyMod befindet sich in aktiver Entwicklung, eine [öffentliche Beta](/tutorial/keymod/) ist für Android verfügbar. Abonnieren Sie die [Produktseite](/products/keymod/), um über Launch-Benachrichtigungen auf dem Laufenden zu bleiben.

> **Hinweis:** Funktionen, Spezifikationen und Design können sich während der Entwicklung noch ändern.

## Produktvarianten

- **Mini-Version** — Nur Type-C-Stecker
- **Plus-Version** — Type-A-Stecker und Type-C-Buchse

## Kernfunktionen

### **Smartphone als Tastatur und Trackpad**

KeyMod verwandelt Ihr Smartphone in eine tragbare Tastatur- und Trackpad-Konsole. Verwenden Sie es, wenn keine vollständige Tastatur und Maus verfügbar sind, oder wenn Sie einen schnelleren Workflow als beim Gerätewechsel wünschen. Ideal für Außendisplays, LED-Schilder-Player, Kioske, Smart-TVs und Set-Top-Boxen.

### **Dual-Verbindung: USB + Bluetooth**

- **USB** — Plug-and-Play-Kabelverbindung für zuverlässige, latenzarme Eingabe
- **Bluetooth** — Kabellose Einrichtung, wenn das Szenario es zulässt; halten Sie Ihr Setup leicht und tragbar

KeyMod ist für praktische tägliche lokale Gerätesteuerung konzipiert, nicht als Ersatz für Remote-Desktop.

### **Open-Source-Mobil-App**

Mit unserer Open-Source-Mobil-App können Sie:

- **Tastatur & Maus (Basic)** — Vollbild-Tastatur mit Long-Press-Wiederholung, Tastenvorschau und Ziffernblock
- **Tastatur & Maus Pro** — Zusammengesetztes Layout mit Shortcut-Hub-Leisten, geteilter Tastatur und IME
- **Präsentationsmodus** — Slide-Fernsteuerung mit Timer für Google Slides und andere Apps
- **Gamepad** — Virtueller Controller mit anpassbaren Preset-Layouts und Multi-Touchpad-Unterstützung
- **Shortcut-Hub** — Profilbasierte Tastaturkürzel für Creative- und Development-Tools (Blender, KiCAD, Photoshop, VS Code), mit Erstellen, Import und Export
- **Makros** — Programmierbare Tastensequenzen mit Verzögerungen
- **Spracheingabe** — Speech-to-Keyboard mit KI (Whisper API)
- **Terminal** — SSH über Bluetooth für Fernzugriff auf Befehle
- **Agent** — KI-gesteuerte direkte Interaktion mit HID- oder SSH-Befehlen zur Steuerung eines anderen Computers

Die **KeyCmd**-App konzentriert sich auf **Android** und **iOS** (einschließlich iPadOS). Sie funktioniert auch mit **KVM-GO** über USB oder Bluetooth. Wir erweitern außerdem die Desktop-Steuerung mit **Windows- und macOS-Software** in unserem breiteren Openterface-Ökosystem.


### **Echte Hardware-HID**

Aufbauend auf dem bewährten HID-Kern von Openterface Mini-KVM. Hardwarebasierte Tastatur- und Mausemulation—keine Softwareinstallation auf dem Zielgerät erforderlich.

### **Open Source**

KeyMod ist Open Hardware und Open-Source-Software. Wir werden Schaltpläne, PCB-Dateien, Firmware, Software und BOM veröffentlichen, während das Projekt sich weiterentwickelt. [Treten Sie unserer Community bei](/discord), um beizutragen und auf dem Laufenden zu bleiben.

## Technische Spezifikationen

### **Konnektivität**

- **USB**: Mini-Version verwendet Type-C-Stecker; Plus-Version verwendet Type-A-Stecker und Type-C-Buchse
- **Bluetooth**: HID-Tastatur und -Maus
- **Ziel**: Keine Softwareinstallation erforderlich

### **Wichtige Hardware**

- CH32V208-Chip (CH9329-kompatibles Protokoll)
- USB-Anschluss: Mini-Version verwendet Type-C-Stecker; Plus-Version verwendet Type-A-Stecker und Type-C-Buchse
- MCU
- Programmierbare(r) Taste(n)

### **Eingabefunktionen**

- Vollständige Tastatur- und Mausemulation (HID)
- Benutzerdefinierte Eingabeprofile (Basic- und Pro-Stufen)
- Makros und Hotkeys
- Shortcut-Hub mit app-spezifischen Profilen
- Gamepad mit preset-basierten Layouts (Schema v7)
- Präsentationssteuerung mit Slide-Timer
- Speech-to-Keyboard mit KI
