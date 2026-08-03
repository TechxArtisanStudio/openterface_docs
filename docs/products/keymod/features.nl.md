---
title: "Functies en Specificaties"
description: "KeyMod Series Functies: Bluetooth HID-toetsenbord en -muis, USB + Bluetooth dubbele verbinding, aangepaste profielen, macro's, gamepad-modi, presentatiebediening, shortcut hub. Open source mobiele app voor Android en iOS."
keywords: "KeyMod Series functies, HID-emulator, Bluetooth-toetsenbord, USB-toetsenbord, programmeerbare knoppen, gamepad, macro, open source, CH9329, shortcut hub, presentatiemodus"
---

# **Functies en Specificaties** | Openterface KeyMod Series

## Huidige status

KeyMod is in actieve ontwikkeling met een [openbare bèta](/tutorial/keymod/) beschikbaar voor Android. Abonneer u op de [productpagina](/products/keymod/) om op de hoogte te blijven van launch-meldingen.

> **Opmerking:** Functies, specificaties en ontwerp kunnen nog wijzigen naarmate de ontwikkeling vordert.

## Productvarianten

- **Mini-versie** — Alleen Type C male connector
- **Plus-versie** — Type A male connector en Type C female connector

## Kernfuncties

### **Telefoon als toetsenbord en trackpad**

KeyMod verandert uw telefoon in een draagbare toetsenbord- en trackpad-console. Gebruik het wanneer een volledig toetsenbord en muis niet beschikbaar zijn, of wanneer u een snellere workflow wilt dan het wisselen van apparaten. Ideaal voor outdoor display-computers, LED-signage-spelers, kiosken, smart-tv's en settopboxen.

### **Dubbele verbinding: USB + Bluetooth**

- **USB** — Plug-and-play bedrade verbinding voor betrouwbare, latency-arme invoer
- **Bluetooth** — Kabelloze setup wanneer het scenario het toelaat; houd uw setup licht en draagbaar

KeyMod is ontworpen voor praktische dagelijkse lokale apparaatbesturing, niet als vervanging van remote desktop.

### **Open source mobiele app**

Met onze open source mobiele app kunt u:

- **Toetsenbord & Muis (Basic)** — Volledig scherm toetsenbord met long-press herhaling, toetsvoorbeeld en numpad
- **Toetsenbord & Muis Pro** — Samengestelde layout met Shortcut Hub-strips, gesplitst toetsenbord en IME
- **Presentatiemodus** — Slide-afstandsbediening met timer voor Google Slides en andere apps
- **Gamepad** — Virtuele controller met aanpasbare preset-layouts en multi-touchpad-ondersteuning
- **Shortcut Hub** — Profielergebaseerde toetsenbordsneltoetsen voor creatieve en development-tools (Blender, KiCAD, Photoshop, VS Code), met aanmaken, importeren en exporteren
- **Macro's** — Programmeerbare toetsenreeksen met vertragingen
- **Spraakinput** — Speech-to-keyboard met AI (Whisper API)
- **Terminal** — SSH via Bluetooth voor toegang tot opdrachten op afstand
- **Agent** — AI-gestuurde directe interactie met HID- of SSH-opdrachten om een andere computer te besturen

De **KeyCmd**-app richt zich op **Android** en **iOS** (inclusief iPadOS). Hij werkt ook met **KVM-GO** via USB of Bluetooth. We breiden ook de desktopbesturing uit met **Windows- en macOS-software** in ons bredere Openterface-ecosysteem.


### **Echte hardware-HID**

Gebouwd op de beproefde HID-kern van Openterface Mini-KVM. Hardwaregebaseerde toetsenbord- en muismulatie—geen software-installatie vereist op het doelapparaat.

### **Open source**

KeyMod is open hardware en open source software. We zullen schema's, PCB-bestanden, firmware, software en BOM publiceren naarmate het project vordert. [Word lid van onze community](/discord) om bij te dragen en op de hoogte te blijven.

## Technische specificaties

### **Connectiviteit**

- **USB**: Mini-versie gebruikt Type C male connector; Plus-versie gebruikt Type A male connector en Type C female connector
- **Bluetooth**: HID-toetsenbord en -muis
- **Doel**: Geen software-installatie vereist

### **Belangrijkste hardware**

- CH32V208-chip (CH9329-compatibel protocol)
- USB-connector(s): Mini-versie gebruikt Type C male; Plus-versie gebruikt Type A male en Type C female
- MCU
- Programmeerbare knop(pen)

### **Invoerfuncties**

- Volledige toetsenbord- en muisemulatie (HID)
- Aangepaste invoerprofielen (Basic- en Pro-niveaus)
- Macro's en sneltoetsen
- Shortcut Hub met app-specifieke profielen
- Gamepad met preset-gebaseerde layouts (schema v7)
- Presentatiebediening met slide-timer
- Spraak-naar-toetsenbord met AI
