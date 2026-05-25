---
title: "Функции & Spezifikationen"
description: "Vollständige Обзор о die Openterface KVM-Go Serie: ultrakompaktes Design с integrierten Videoanschlüssen, 4K/60Hz-Unterstützung, MicroSD-Steckplatz и detaillierte technische Spezifikationen. Schlüsselanhängergroße KVM-over-USB-Lösung для IT-Profis."
keywords: "KVM-Go Функции, ultrakompakter KVM, integriertes HDMI, 4K KVM, MicroSD KVM, Schlüsselanhänger KVM, KVM Spezifikationen, Headless-Steuerung, tragbarer KVM, IT-Tools, Serververwaltung"
---

# **Функции & Spezifikationen** | Openterface KVM-Go Serie

## Продуктion & Versand

Die KVM-Go Serie befindet sich in aktiver Продуктion и Auslieferung. Fertige Geräte werden an das Mouser-Lager для den Versand transportiert, и Crowd Supply-Backer erhalten ihre Bestellungen in Kürze. [Сейчас bei Crowd Supply vorbestellen]({{ config.extra.kvmgo_purchase_link }}).

> **Hinweis:** Das VGA-Modell befindet sich noch in der Entwicklung; andere Details können sich с zunehmender Продуктion noch verfeinern.

## Продуктmodelle
- **KVM-Go HDMI Male** — Direkte HDMI-Подключение
- **KVM-Go DisplayPort Male** — Hochleistungs-DisplayPort
- **KVM-Go VGA Male** — Legacy-Systemunterstützung (in Entwicklung)

## Kernfunktionen

### **Ultrakompaktes Design**
Schlüsselanhängergroßer Formfaktor, der in Ihre Tasche passt. Keine sperrigen KVM-Geräte mehr tragen или nach Videokabeln suchen.

### **Integrierte Videoanschlüsse**
Direkte Plug-in-Fähigkeit с integrierten männlichen Anschlüssen:

- **HDMI Male** — Mилиne Gerätekompatibilität
- **DisplayPort Male** — Hochleistungsunterstützung
- **VGA Male** — Legacy-Systemunterstützung (demnächst)

### **BIOS-Level-Zugriff**
Direkter Zugriff auf BIOS, Firmware и Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit & Blitzschnelle Reaktion**
Stabile Headless-Steuerung с integrierter Videoaufnahme и emulierter Tastatur/Maus (HID)-Eingabe. Keine Netzwerkverbindung erforderlich. Die Оборудование-Startzeit beträgt weniger als 1 Sekиe и gewährleistet sofortige Fehlerbehebung ohne Verzögerungen im Arbeitsablauf.

### **Verbesserte Videoleistung**
Massive Verbesserung gegenо Mini-KVMs 1080p@30Hz:

- **Eingang**: 4096×2160 @ 60 Hz (YUV420), 4096×2160 @ 30 Hz (YUV444)
- **Ausgang**: 4096×2160 @ 60 Hz (MJPEG), 3840×2160 @ 30 Hz (YUV420)
- **Standard**: 1080p@60Hz для optimale Stabilität и Leistung
- **4K-Modus**: Als experimentelle Funktion verfügbar*
- **Kompression**: YUV420-, YUV444- и MJPEG-Unterstützung

*Hinweis: Der 4K-Modus erzeugt zusätzliche Wärme; die Geräteoberfläche kann während des erweiterten Betriebs sehr heiß werden

### **MicroSD-Steckplatz**
Dateiоtragung zwischen Host- и Zielgeräten

### **Plattformоgreifende Unterstützung**
[Host-Apps](/app) kompatibel с macOS, Windows, Linux, Android и Chrome-Web-App для universelle Integration.

### **Textоtragung**
Übertragen Sie mühelos Text durch Simulation von Tastenanschlägen — perfekt для Benutzernamen, Passwörter и Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole и Satzzeichen.

- **Host → Ziel**: Text о emulierte Tastenanschläge senden
- **Ziel → Host**: Text vom Bildschirm des Ziels о OCR zum Host kopieren (nur macOS)

!!! warning "Textоtragungsbeschränkungen"
    - **Keine Zwischenablage-Integration**: Nur Tippenemulation, keine Bild- или Dokumentоtragung
    - **Nur ASCII**: Beschränkt auf ASCII-Zeichen (keine Unterstützung для Chinesisch, Japanisch, Koreanisch usw.)
    - **Längenоlegungen**: Am besten для kurzen Text; große Blöcke können Leistungsprobleme verursachen
    - **OCR-Funktion**: Ziel → Host Textоtragung derzeit nur auf macOS verfügbar

### **Plug-and-Play-Komfort**
Keine Программное обеспечениеinstallation auf dem Zielgerät erforderlich. Die Steuerung beginnt sofort nach der Подключение ohne hinterlassene Программное обеспечениеspuren.

### **Audio-Integration**
HDMI-eingebetteter Audio-Durchgang для vollständiges Multimedia-Erlebnis. (Nicht unterstützt auf KVM-Go VGA; Bestätigung ausstehend для KVM-Go DP.)

### **Bluetooth-Fähigkeit**
Integrierte Bluetooth-Unterstützung ermöglicht native iPadOS-App-Funktionalität (demnächst verfügbar) и macht KVM-GO zu einem der wenigen KVMs, die nativ с iPads funktionieren.

### **Open-Source**
[Vollständig Open-Source](/compliance) Оборудование и Программное обеспечение для Transparenz и [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physische Abmessungen** *(Änderungen vor Auslieferung vorbehalten)*
- **Größe**: 18 × 18 × 55 mm (0,71 × 0,71 × 2,17 Zoll)
- **Gewicht**: ~25 g (0,9 oz)
- **Material**: Aluminiumlegierungsgehäuse с 3D-gedruckten Kappen

### **Konnektivität & Stromversorgung**
- **Stromversorgung**: USB-C-betrieben (keine externe Stromversorgung erforderlich)
- **USB-Geschwindigkeit**: USB 3.0 для HDMI/DP-Versionen; USB 2.0 для VGA-Version
- **Host-Kompatibilität**: Windows, macOS, Linux, Android, Chrome
- **Ziel**: Keine Программное обеспечениеinstallation erforderlich

### **Video & Audio**
- **Max. Eingang**: 4096×2160@60Hz (YUV420), 4096×2160@30Hz (YUV444)
- **Max. Ausgang**: 4096×2160@60Hz (MJPEG), 3840×2160@30Hz (YUV420)
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**
- Vollständige Tastatur- и Mausemulation (absolut & relativ)
- Multimedia-Tastenunterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Speicher**
- **MicroSD-Steckplatz**: Dateiоtragungen via MicroSD zwischen Host и Ziel

