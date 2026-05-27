---
title: "Funkcje & Spezifikationen"
description: "Vollständige Przegląd o die Openterface KVM-Go Serie: ultrakompaktes Design z integrierten Videoanschlüssen, 4K/60Hz-Unterstützung, MicroSD-Steckplatz i detaillierte technische Spezifikationen. Schlüsselanhängergroße KVM-over-USB-Lösung dla IT-Profis."
keywords: "KVM-Go Funkcje, ultrakompakter KVM, integriertes HDMI, 4K KVM, MicroSD KVM, Schlüsselanhänger KVM, KVM Spezifikationen, Headless-Steuerung, tragbarer KVM, IT-Tools, Serververwaltung"
---

# **Funkcje & Spezifikationen** | Openterface KVM-Go Serie

## Produktion & Versand

Die KVM-Go Serie befindet sich in aktiver Produktion i Auslieferung. Fertige Geräte werden an das Mouser-Lager dla den Versand transportiert, i Crowd Supply-Backer erhalten ihre Bestellungen in Kürze. [Teraz bei Crowd Supply vorbestellen]({{ config.extra.kvmgo_purchase_link }}).

> **Hinweis:** Das VGA-Modell befindet sich noch in der Entwicklung; andere Details können sich z zunehmender Produktion noch verfeinern.

## Produktmodelle
- **KVM-Go HDMI Male** — Direkte HDMI-Połączenie
- **KVM-Go DisplayPort Male** — Hochleistungs-DisplayPort
- **KVM-Go VGA Male** — Legacy-Systemunterstützung (in Entwicklung)

## Kernfunktionen

### **Ultrakompaktes Design**
Schlüsselanhängergroßer Formfaktor, der in Ihre Tasche passt. Keine sperrigen KVM-Geräte mehr tragen lub nach Videokabeln suchen.

### **Integrierte Videoanschlüsse**
Direkte Plug-in-Fähigkeit z integrierten männlichen Anschlüssen:

- **HDMI Male** — Mlubne Gerätekompatibilität
- **DisplayPort Male** — Hochleistungsunterstützung
- **VGA Male** — Legacy-Systemunterstützung (demnächst)

### **BIOS-Level-Zugriff**
Direkter Zugriff auf BIOS, Firmware i Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit & Blitzschnelle Reaktion**
Stabile Headless-Steuerung z integrierter Videoaufnahme i emulierter Tastatur/Maus (HID)-Eingabe. Keine Netzwerkverbindung erforderlich. Die Sprzęt-Startzeit beträgt weniger als 1 Sekie i gewährleistet sofortige Fehlerbehebung ohne Verzögerungen im Arbeitsablauf.

### **Verbesserte Videoleistung**
Massive Verbesserung gegeno Mini-KVMs 1080p@30Hz:

- **Eingang**: 4096×2160 @ 60 Hz (YUV420), 4096×2160 @ 30 Hz (YUV444)
- **Ausgang**: 4096×2160 @ 60 Hz (MJPEG), 3840×2160 @ 30 Hz (YUV420)
- **Standard**: 1080p@60Hz dla optimale Stabilität i Leistung
- **4K-Modus**: Als experimentelle Funktion verfügbar*
- **Kompression**: YUV420-, YUV444- i MJPEG-Unterstützung

*Hinweis: Der 4K-Modus erzeugt zusätzliche Wärme; die Geräteoberfläche kann während des erweiterten Betriebs sehr heiß werden

### **MicroSD-Steckplatz**
Dateiotragung zwischen Host- i Zielgeräten

### **Plattformogreifende Unterstützung**
[Host-Apps](/app) kompatibel z macOS, Windows, Linux, Android i Chrome-Web-App dla universelle Integration.

### **Textotragung**
Übertragen Sie mühelos Text durch Simulation von Tastenanschlägen — perfekt dla Benutzernamen, Passwörter i Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole i Satzzeichen.

- **Host → Ziel**: Text o emulierte Tastenanschläge senden
- **Ziel → Host**: Text vom Bildschirm des Ziels o OCR zum Host kopieren (nur macOS)

!!! warning "Textotragungsbeschränkungen"
    - **Keine Zwischenablage-Integration**: Nur Tippenemulation, keine Bild- lub Dokumentotragung
    - **Nur ASCII**: Beschränkt auf ASCII-Zeichen (keine Unterstützung dla Chinesisch, Japanisch, Koreanisch usw.)
    - **Längenolegungen**: Am besten dla kurzen Text; große Blöcke können Leistungsprobleme verursachen
    - **OCR-Funktion**: Ziel → Host Textotragung derzeit nur auf macOS verfügbar

### **Plug-and-Play-Komfort**
Keine Oprogramowanieinstallation auf dem Zielgerät erforderlich. Die Steuerung beginnt sofort nach der Połączenie ohne hinterlassene Oprogramowaniespuren.

### **Audio-Integration**
HDMI-eingebetteter Audio-Durchgang dla vollständiges Multimedia-Erlebnis. (Nicht unterstützt auf KVM-Go VGA; Bestätigung ausstehend dla KVM-Go DP.)

### **Bluetooth-Fähigkeit**
Integrierte Bluetooth-Unterstützung ermöglicht native iPadOS-App-Funktionalität (demnächst verfügbar) i macht KVM-GO zu einem der wenigen KVMs, die nativ z iPads funktionieren.

### **Open-Source**
[Vollständig Open-Source](/compliance) Sprzęt i Oprogramowanie dla Transparenz i [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physische Abmessungen** *(Änderungen vor Auslieferung vorbehalten)*
- **Größe**: 18 × 18 × 55 mm (0,71 × 0,71 × 2,17 Zoll)
- **Gewicht**: ~25 g (0,9 oz)
- **Material**: Aluminiumlegierungsgehäuse z 3D-gedruckten Kappen

### **Konnektivität & Stromversorgung**
- **Stromversorgung**: USB-C-betrieben (keine externe Stromversorgung erforderlich)
- **USB-Geschwindigkeit**: USB 3.0 dla HDMI/DP-Versionen; USB 2.0 dla VGA-Version
- **Host-Kompatibilität**: Windows, macOS, Linux, Android, Chrome
- **Ziel**: Keine Oprogramowanieinstallation erforderlich

### **Video & Audio**
- **Max. Eingang**: 4096×2160@60Hz (YUV420), 4096×2160@30Hz (YUV444)
- **Max. Ausgang**: 4096×2160@60Hz (MJPEG), 3840×2160@30Hz (YUV420)
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**
- Vollständige Tastatur- i Mausemulation (absolut & relativ)
- Multimedia-Tastenunterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Speicher**
- **MicroSD-Steckplatz**: Dateiotragungen via MicroSD zwischen Host i Ziel

