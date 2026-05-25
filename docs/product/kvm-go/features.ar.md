---
title: "الميزات & Spezifikationen"
description: "Vollständige نظرة عامة حول die Openterface KVM-Go Serie: ultrakompaktes Design مع integrierten Videoanschlüssen, 4K/60Hz-Unterstützung, MicroSD-Steckplatz و detaillierte technische Spezifikationen. Schlüsselanhängergroße KVM-over-USB-Lösung لـ IT-Profis."
keywords: "KVM-Go الميزات, ultrakompakter KVM, integriertes HDMI, 4K KVM, MicroSD KVM, Schlüsselanhänger KVM, KVM Spezifikationen, Headless-Steuerung, tragbarer KVM, IT-Tools, Serververwaltung"
---

# **الميزات & Spezifikationen** | Openterface KVM-Go Serie

## منتجion & Versand

Die KVM-Go Serie befindet sich in aktiver منتجion و Auslieferung. Fertige Geräte werden an das Mouser-Lager لـ den Versand transportiert, و Crowd Supply-Backer erhalten ihre Bestellungen in Kürze. [الآن bei Crowd Supply vorbestellen]({{ config.extra.kvmgo_purchase_link }}).

> **Hinweis:** Das VGA-Modell befindet sich noch in der Entwicklung; andere Details können sich مع zunehmender منتجion noch verfeinern.

## منتجmodelle
- **KVM-Go HDMI Male** — Direkte HDMI-الاتصال
- **KVM-Go DisplayPort Male** — Hochleistungs-DisplayPort
- **KVM-Go VGA Male** — Legacy-Systemunterstützung (in Entwicklung)

## Kernfunktionen

### **Ultrakompaktes Design**
Schlüsselanhängergroßer Formfaktor, der in Ihre Tasche passt. Keine sperrigen KVM-Geräte mehr tragen أو nach Videokabeln suchen.

### **Integrierte Videoanschlüsse**
Direkte Plug-in-Fähigkeit مع integrierten männlichen Anschlüssen:

- **HDMI Male** — Mأوne Gerätekompatibilität
- **DisplayPort Male** — Hochleistungsunterstützung
- **VGA Male** — Legacy-Systemunterstützung (demnächst)

### **BIOS-Level-Zugriff**
Direkter Zugriff auf BIOS, Firmware و Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit & Blitzschnelle Reaktion**
Stabile Headless-Steuerung مع integrierter Videoaufnahme و emulierter Tastatur/Maus (HID)-Eingabe. Keine Netzwerkverbindung erforderlich. Die الأجهزة-Startzeit beträgt weniger als 1 Sekوe و gewährleistet sofortige Fehlerbehebung ohne Verzögerungen im Arbeitsablauf.

### **Verbesserte Videoleistung**
Massive Verbesserung gegenحول Mini-KVMs 1080p@30Hz:

- **Eingang**: 4096×2160 @ 60 Hz (YUV420), 4096×2160 @ 30 Hz (YUV444)
- **Ausgang**: 4096×2160 @ 60 Hz (MJPEG), 3840×2160 @ 30 Hz (YUV420)
- **Standard**: 1080p@60Hz لـ optimale Stabilität و Leistung
- **4K-Modus**: Als experimentelle Funktion verfügbar*
- **Kompression**: YUV420-, YUV444- و MJPEG-Unterstützung

*Hinweis: Der 4K-Modus erzeugt zusätzliche Wärme; die Geräteoberfläche kann während des erweiterten Betriebs sehr heiß werden

### **MicroSD-Steckplatz**
Dateiحولtragung zwischen Host- و Zielgeräten

### **Plattformحولgreifende Unterstützung**
[Host-Apps](/app) kompatibel مع macOS, Windows, Linux, Android و Chrome-Web-App لـ universelle Integration.

### **Textحولtragung**
Übertragen Sie mühelos Text durch Simulation von Tastenanschlägen — perfekt لـ Benutzernamen, Passwörter و Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole و Satzzeichen.

- **Host → Ziel**: Text حول emulierte Tastenanschläge senden
- **Ziel → Host**: Text vom Bildschirm des Ziels حول OCR zum Host kopieren (nur macOS)

!!! warning "Textحولtragungsbeschränkungen"
    - **Keine Zwischenablage-Integration**: Nur Tippenemulation, keine Bild- أو Dokumentحولtragung
    - **Nur ASCII**: Beschränkt auf ASCII-Zeichen (keine Unterstützung لـ Chinesisch, Japanisch, Koreanisch usw.)
    - **Längenحولlegungen**: Am besten لـ kurzen Text; große Blöcke können Leistungsprobleme verursachen
    - **OCR-Funktion**: Ziel → Host Textحولtragung derzeit nur auf macOS verfügbar

### **Plug-and-Play-Komfort**
Keine البرمجياتinstallation auf dem Zielgerät erforderlich. Die Steuerung beginnt sofort nach der الاتصال ohne hinterlassene البرمجياتspuren.

### **Audio-Integration**
HDMI-eingebetteter Audio-Durchgang لـ vollständiges Multimedia-Erlebnis. (Nicht unterstützt auf KVM-Go VGA; Bestätigung ausstehend لـ KVM-Go DP.)

### **Bluetooth-Fähigkeit**
Integrierte Bluetooth-Unterstützung ermöglicht native iPadOS-App-Funktionalität (demnächst verfügbar) و macht KVM-GO zu einem der wenigen KVMs, die nativ مع iPads funktionieren.

### **Open-Source**
[Vollständig Open-Source](/compliance) الأجهزة و البرمجيات لـ Transparenz و [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physische Abmessungen** *(Änderungen vor Auslieferung vorbehalten)*
- **Größe**: 18 × 18 × 55 mm (0,71 × 0,71 × 2,17 Zoll)
- **Gewicht**: ~25 g (0,9 oz)
- **Material**: Aluminiumlegierungsgehäuse مع 3D-gedruckten Kappen

### **Konnektivität & Stromversorgung**
- **Stromversorgung**: USB-C-betrieben (keine externe Stromversorgung erforderlich)
- **USB-Geschwindigkeit**: USB 3.0 لـ HDMI/DP-Versionen; USB 2.0 لـ VGA-Version
- **Host-Kompatibilität**: Windows, macOS, Linux, Android, Chrome
- **Ziel**: Keine البرمجياتinstallation erforderlich

### **Video & Audio**
- **Max. Eingang**: 4096×2160@60Hz (YUV420), 4096×2160@30Hz (YUV444)
- **Max. Ausgang**: 4096×2160@60Hz (MJPEG), 3840×2160@30Hz (YUV420)
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**
- Vollständige Tastatur- و Mausemulation (absolut & relativ)
- Multimedia-Tastenunterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Speicher**
- **MicroSD-Steckplatz**: Dateiحولtragungen via MicroSD zwischen Host و Ziel

