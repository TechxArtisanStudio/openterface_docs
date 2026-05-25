---
title: "Functies & Spezifikationen"
description: "Vollständige Overzicht over die Openterface KVM-Go Serie: ultrakompaktes Design met integrierten Videoanschlüssen, 4K/60Hz-Unterstützung, MicroSD-Steckplatz en detaillierte technische Spezifikationen. Schlüsselanhängergroße KVM-over-USB-Lösung voor IT-Profis."
keywords: "KVM-Go Functies, ultrakompakter KVM, integriertes HDMI, 4K KVM, MicroSD KVM, Schlüsselanhänger KVM, KVM Spezifikationen, Headless-Steuerung, tragbarer KVM, IT-Tools, Serververwaltung"
---

# **Functies & Spezifikationen** | Openterface KVM-Go Serie

## Production & Versand

Die KVM-Go Serie befindet sich in aktiver Production en Auslieferung. Fertige Geräte werden an das Mouser-Lager voor den Versand transportiert, en Crowd Supply-Backer erhalten ihre Bestellungen in Kürze. [Nu bei Crowd Supply vorbestellen]({{ config.extra.kvmgo_purchase_link }}).

> **Hinweis:** Das VGA-Modell befindet sich noch in der Entwicklung; andere Details können sich met zunehmender Production noch verfeinern.

## Productmodelle
- **KVM-Go HDMI Male** — Direkte HDMI-Verbinding
- **KVM-Go DisplayPort Male** — Hochleistungs-DisplayPort
- **KVM-Go VGA Male** — Legacy-Systemunterstützung (in Entwicklung)

## Kernfunktionen

### **Ultrakompaktes Design**
Schlüsselanhängergroßer Formfaktor, der in Ihre Tasche passt. Keine sperrigen KVM-Geräte mehr tragen of nach Videokabeln suchen.

### **Integrierte Videoanschlüsse**
Direkte Plug-in-Fähigkeit met integrierten männlichen Anschlüssen:

- **HDMI Male** — Mofne Gerätekompatibilität
- **DisplayPort Male** — Hochleistungsunterstützung
- **VGA Male** — Legacy-Systemunterstützung (demnächst)

### **BIOS-Level-Zugriff**
Direkter Zugriff auf BIOS, Firmware en Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit & Blitzschnelle Reaktion**
Stabile Headless-Steuerung met integrierter Videoaufnahme en emulierter Tastatur/Maus (HID)-Eingabe. Keine Netzwerkverbindung erforderlich. Die Hardware-Startzeit beträgt weniger als 1 Sekene en gewährleistet sofortige Fehlerbehebung ohne Verzögerungen im Arbeitsablauf.

### **Verbesserte Videoleistung**
Massive Verbesserung gegenover Mini-KVMs 1080p@30Hz:

- **Eingang**: 4096×2160 @ 60 Hz (YUV420), 4096×2160 @ 30 Hz (YUV444)
- **Ausgang**: 4096×2160 @ 60 Hz (MJPEG), 3840×2160 @ 30 Hz (YUV420)
- **Standard**: 1080p@60Hz voor optimale Stabilität en Leistung
- **4K-Modus**: Als experimentelle Funktion verfügbar*
- **Kompression**: YUV420-, YUV444- en MJPEG-Unterstützung

*Hinweis: Der 4K-Modus erzeugt zusätzliche Wärme; die Geräteoberfläche kann während des erweiterten Betriebs sehr heiß werden

### **MicroSD-Steckplatz**
Dateiovertragung zwischen Host- en Zielgeräten

### **Plattformovergreifende Unterstützung**
[Host-Apps](/app) kompatibel met macOS, Windows, Linux, Android en Chrome-Web-App voor universelle Integration.

### **Textovertragung**
Übertragen Sie mühelos Text durch Simulation von Tastenanschlägen — perfekt voor Benutzernamen, Passwörter en Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole en Satzzeichen.

- **Host → Ziel**: Text over emulierte Tastenanschläge senden
- **Ziel → Host**: Text vom Bildschirm des Ziels over OCR zum Host kopieren (nur macOS)

!!! warning "Textovertragungsbeschränkungen"
    - **Keine Zwischenablage-Integration**: Nur Tippenemulation, keine Bild- of Dokumentovertragung
    - **Nur ASCII**: Beschränkt auf ASCII-Zeichen (keine Unterstützung voor Chinesisch, Japanisch, Koreanisch usw.)
    - **Längenoverlegungen**: Am besten voor kurzen Text; große Blöcke können Leistungsprobleme verursachen
    - **OCR-Funktion**: Ziel → Host Textovertragung derzeit nur auf macOS verfügbar

### **Plug-and-Play-Komfort**
Keine Softwareinstallation auf dem Zielgerät erforderlich. Die Steuerung beginnt sofort nach der Verbinding ohne hinterlassene Softwarespuren.

### **Audio-Integration**
HDMI-eingebetteter Audio-Durchgang voor vollständiges Multimedia-Erlebnis. (Nicht unterstützt auf KVM-Go VGA; Bestätigung ausstehend voor KVM-Go DP.)

### **Bluetooth-Fähigkeit**
Integrierte Bluetooth-Unterstützung ermöglicht native iPadOS-App-Funktionalität (demnächst verfügbar) en macht KVM-GO zu einem der wenigen KVMs, die nativ met iPads funktionieren.

### **Open-Source**
[Vollständig Open-Source](/compliance) Hardware en Software voor Transparenz en [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physische Abmessungen** *(Änderungen vor Auslieferung vorbehalten)*
- **Größe**: 18 × 18 × 55 mm (0,71 × 0,71 × 2,17 Zoll)
- **Gewicht**: ~25 g (0,9 oz)
- **Material**: Aluminiumlegierungsgehäuse met 3D-gedruckten Kappen

### **Konnektivität & Stromversorgung**
- **Stromversorgung**: USB-C-betrieben (keine externe Stromversorgung erforderlich)
- **USB-Geschwindigkeit**: USB 3.0 voor HDMI/DP-Versionen; USB 2.0 voor VGA-Version
- **Host-Kompatibilität**: Windows, macOS, Linux, Android, Chrome
- **Ziel**: Keine Softwareinstallation erforderlich

### **Video & Audio**
- **Max. Eingang**: 4096×2160@60Hz (YUV420), 4096×2160@30Hz (YUV444)
- **Max. Ausgang**: 4096×2160@60Hz (MJPEG), 3840×2160@30Hz (YUV420)
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**
- Vollständige Tastatur- en Mausemulation (absolut & relativ)
- Multimedia-Tastenunterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Speicher**
- **MicroSD-Steckplatz**: Dateiovertragungen via MicroSD zwischen Host en Ziel

