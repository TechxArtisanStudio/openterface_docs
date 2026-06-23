---
title: "Functies en Spezifikationen"
description: "Vollständige Overzicht over Openterface Mini-KVM: Leistungsstarke Functies einschließlich BIOS-Level-Zugriff, 4K-Video-Unterstützung, plattformovergreifende Kompatibilität, USB-Sharing en detaillierte technische Spezifikationen. Alles, was Sie over diese Headless-Computer-Steuerungslösung wissen müssen."
keywords: "Mini-KVM Functies, KVM Spezifikationen, BIOS Zugriff, Headless Steuerung, 4K KVM, USB Sharing, plattformovergreifendes KVM, Textovertragung, Plug and Play KVM, Open Source KVM, technische Spezifikationen"
---

# **Functies en Spezifikationen** | Openterface Mini-KVM

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/r3HNUflWGOY?si=84Ek6F9ocHmmGTqW" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

## Kernfunktionen

### **BIOS-Level-Zugriff**

Direkter Zugriff auf BIOS, Firmware en Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit**

Stabile Headless-Steuerung met HDMI-Video-Capture en emulierten Tastatur/Maus-Eingaben (HID). Keine Netzwerkverbindung erforderlich.

### **Hochleistungs-Video**

- **Eingang**: Bis zu 4K (3840×2160) @ 30Hz over HDMI
- **Ausgang**: Full HD (1920×1080) @ 30Hz met unter 140ms Latenz
- **Kompression**: YUV en MJPEG Unterstützung
- **Kompatibilität**: VGA, DVI, Micro HDMI over Adapter

### **Umschaltbarer USB-Port**

USB-Zugriff zwischen Host- en Zielgeräten umschalten voor nahtloses USB-Laufwerk-Sharing. Meer informatie auf der [Umschaltbarer USB-Port](../usb-switch) Seite.

### **Plattformovergreifende Unterstützung**

[Host-Apps](/app) kompatibel met macOS, Windows, Linux en Android voor universelle Integration.

### **Textovertragung**

Text mühelos overtragen durch Simulation von Tastenanschlägen—perfekt voor Benutzernamen, Passwörter en Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole en Interpunktion.

!!! warning "Textovertragungs-Limetierungen" - **Keine Zwischenablage-Integration**: Emuliert nur Tippen, keine Bild- of Dokumentovertragung - **Nur ASCII**: Begrenzt auf ASCII-Zeichen (keine chinesische, japanische, koreanische Unterstützung) - **Längen-Überlegungen**: Am besten voor kurzen Text; große Blöcke können Leistungsprobleme verursachen

### **Plug-and-Play-Komfort**

Keine Software-Installatie auf dem Zielgerät erforderlich. Steuerung beginnt sofort bei Verbinding ohne zurückgelassene Software-Spuren.

### **Audio-Integration**

HDMI-eingebetteter Audio-Durchgang voor vollständige Multimedia-Erfahrung.

### **Erweiterungs-Pins**

[Erweiterungs-Pins](../extension-pins) ermöglichen erweiterte Entwicklung en Anpassung voor spezifische Bedürfnisse.

### **Open-Source**

[Vollständig open-source](/compliance) Hardware en Software voor Transparenz en [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physikalische Abmessungen**

- **Größe**: 61 × 53 × 13.5 mm (2.40 × 2.09 × 0.53 Zoll)
- **Gewicht**: ~48g
- **Material**: Aluminiumlegierung, PLA-Gehäuse

### **Konnektivität en Stromversorgung**

- **Stromversorgung**: USB-C versorgt (keine externe Versorgung erforderlich)
- **USB-Geschwindigkeit**: 12Mbps Vollgeschwindigkeits-Übertragung
- **Host-Kompatibilität**: Windows, macOS, Linux, Android
- **Ziel**: Keine Software-Installatie erforderlich

### **Video en Audio**

- **Max Eingang**: 3840×2160@30Hz (HDMI)
- **Max Ausgang**: 1920×1080@30Hz
- **Latenz**: Unter 140ms
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**

- Vollständige Tastatur- en Maus-Emulation (absolut & relativ)
- Multimedia-Tasten-Unterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Umgebungsbedingungen**

- **Betrieb**: 0°C bis 40°C
- **Lagerung**: -10°C bis 50°C
- **Luftfeuchtigkeit**: 80% RH

## Productmodelle

- **Basic**: OP-MINIKVM-BASIC
- **Toolkit**: OP-MINIKVM-TOOLKIT

## Documentatie Downloads

- **[Schnellstart-Handleiding](https://assets.openterface.com/minikvm/minikvm_quick_start_guide.pdf)** (PDF)
- **[Datenblatt (Englisch)](https://assets.openterface.com/minikvm/Openterface-Mini-KVM-Basic-and-Toolkit-Datasheet-Eng.pdf)** (PDF)

![lig-front](https://assets.openterface.com/images/product/minikvm-v1-9-front.svg#only-light){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/product/minikvm-v1-9-back.svg#only-light){:style="max-height:260px"}
![lig-front](https://assets.openterface.com/images/product/minikvm-v1-9-front_1.svg#only-dark){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/product/minikvm-v1-9-back_1.svg#only-dark){:style="max-height:260px"}
