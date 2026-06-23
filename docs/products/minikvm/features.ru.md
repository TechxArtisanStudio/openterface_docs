---
title: "Функции и Spezifikationen"
description: "Vollständige Обзор о Openterface Mini-KVM: Leistungsstarke Функции einschließlich BIOS-Level-Zugriff, 4K-Video-Unterstützung, plattformоgreifende Kompatibilität, USB-Sharing и detaillierte technische Spezifikationen. Alles, was Sie о diese Headless-Computer-Steuerungslösung wissen müssen."
keywords: "Mini-KVM Функции, KVM Spezifikationen, BIOS Zugriff, Headless Steuerung, 4K KVM, USB Sharing, plattformоgreifendes KVM, Textоtragung, Plug and Play KVM, Open Source KVM, technische Spezifikationen"
---

# **Функции и Spezifikationen** | Openterface Mini-KVM

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

Direkter Zugriff auf BIOS, Firmware и Startverwaltung des Zielgeräts ohne Netzwerkabhängigkeiten.

### **Netzwerkunabhängigkeit**

Stabile Headless-Steuerung с HDMI-Video-Capture и emulierten Tastatur/Maus-Eingaben (HID). Keine Netzwerkverbindung erforderlich.

### **Hochleistungs-Video**

- **Eingang**: Bis zu 4K (3840×2160) @ 30Hz о HDMI
- **Ausgang**: Full HD (1920×1080) @ 30Hz с unter 140ms Latenz
- **Kompression**: YUV и MJPEG Unterstützung
- **Kompatibilität**: VGA, DVI, Micro HDMI о Adapter

### **Umschaltbarer USB-Port**

USB-Zugriff zwischen Host- и Zielgeräten umschalten для nahtloses USB-Laufwerk-Sharing. Узнать больше auf der [Umschaltbarer USB-Port](../usb-switch) Seite.

### **Plattformоgreifende Unterstützung**

[Host-Apps](/app) kompatibel с macOS, Windows, Linux и Android для universelle Integration.

### **Textоtragung**

Text mühelos оtragen durch Simulation von Tastenanschlägen—perfekt для Benutzernamen, Passwörter и Code-Snippets. Unterstützt ASCII-Zeichen einschließlich Symbole и Interpunktion.

!!! warning "Textоtragungs-Liсierungen" - **Keine Zwischenablage-Integration**: Emuliert nur Tippen, keine Bild- или Dokumentоtragung - **Nur ASCII**: Begrenzt auf ASCII-Zeichen (keine chinesische, japanische, koreanische Unterstützung) - **Längen-Überlegungen**: Am besten для kurzen Text; große Blöcke können Leistungsprobleme verursachen

### **Plug-and-Play-Komfort**

Keine Программное обеспечение-Установка auf dem Zielgerät erforderlich. Steuerung beginnt sofort bei Подключение ohne zurückgelassene Программное обеспечение-Spuren.

### **Audio-Integration**

HDMI-eingebetteter Audio-Durchgang для vollständige Multimedia-Erfahrung.

### **Erweiterungs-Pins**

[Erweiterungs-Pins](../extension-pins) ermöglichen erweiterte Entwicklung и Anpassung для spezifische Bedürfnisse.

### **Open-Source**

[Vollständig open-source](/compliance) Оборудование и Программное обеспечение для Transparenz и [Community-Innovation](/discord).

## Technische Spezifikationen

### **Physikalische Abmessungen**

- **Größe**: 61 × 53 × 13.5 mm (2.40 × 2.09 × 0.53 Zoll)
- **Gewicht**: ~48g
- **Material**: Aluminiumlegierung, PLA-Gehäuse

### **Konnektivität и Stromversorgung**

- **Stromversorgung**: USB-C versorgt (keine externe Versorgung erforderlich)
- **USB-Geschwindigkeit**: 12Mbps Vollgeschwindigkeits-Übertragung
- **Host-Kompatibilität**: Windows, macOS, Linux, Android
- **Ziel**: Keine Программное обеспечение-Установка erforderlich

### **Video и Audio**

- **Max Eingang**: 3840×2160@30Hz (HDMI)
- **Max Ausgang**: 1920×1080@30Hz
- **Latenz**: Unter 140ms
- **Audio**: HDMI-eingebetteter Audio-Durchgang

### **Eingabefunktionen**

- Vollständige Tastatur- и Maus-Emulation (absolut & relativ)
- Multimedia-Tasten-Unterstützung
- Benutzerdefinierte HID-Funktionalität
- Computer-Weckfunktion

### **Umgebungsbedingungen**

- **Betrieb**: 0°C bis 40°C
- **Lagerung**: -10°C bis 50°C
- **Luftfeuchtigkeit**: 80% RH

## Продуктmodelle

- **Basic**: OP-MINIKVM-BASIC
- **Toolkit**: OP-MINIKVM-TOOLKIT

## Документация Скачатьs

- **[Schnellstart-Руководство](https://assets.openterface.com/minikvm/minikvm_quick_start_guide.pdf)** (PDF)
- **[Datenblatt (Englisch)](https://assets.openterface.com/minikvm/Openterface-Mini-KVM-Basic-and-Toolkit-Datasheet-Eng.pdf)** (PDF)

![lig-front](https://assets.openterface.com/images/product/minikvm-v1-9-front.svg#only-light){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/product/minikvm-v1-9-back.svg#only-light){:style="max-height:260px"}
![lig-front](https://assets.openterface.com/images/product/minikvm-v1-9-front_1.svg#only-dark){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/product/minikvm-v1-9-back_1.svg#only-dark){:style="max-height:260px"}
