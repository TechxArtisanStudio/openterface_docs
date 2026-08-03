---
title: "Funcționalități și specificații"
description: "Funcționalități KeyMod Series: tastatură și mouse HID Bluetooth, conexiune duală USB + Bluetooth, profiluri personalizate, macro-uri, moduri gamepad, controale prezentare, hub scurtături. Aplicație mobilă open source pentru Android și iOS."
keywords: "funcționalități KeyMod Series, emulator HID, tastatură Bluetooth, tastatură USB, butoane programabile, gamepad, macro, open source, CH9329, hub scurtături, mod prezentare"
---

# **Funcționalități și specificații** | Openterface KeyMod Series

## Status curent

KeyMod este în dezvoltare activă cu o [versiune beta publică](/tutorial/keymod/) disponibilă pentru Android. Abonați-vă pe [pagina produsului](/products/keymod/) pentru a fi la curent cu notificările de lansare.

> **Notă:** Funcționalitățile, specificațiile și designul sunt încă supuse modificărilor pe măsură ce dezvoltarea continuă.

## Variante de produs

- **Versiunea Mini** — Doar conector Type C tată
- **Versiunea Plus** — Conector Type A tată și conector Type C mamă

## Funcționalități principale

### **Telefon ca tastatură și trackpad**

KeyMod transformă telefonul într-o consolă tastatură și trackpad portabile. Folosiți-l când o tastatură și mouse complete nu sunt disponibile, sau când doriți un flux de lucru mai rapid decât schimbarea dispozitivelor. Ideal pentru computere display exterior, playere afișaje LED, chioșcuri, smart TV-uri și set-top box-uri.

### **Conexiune duală: USB + Bluetooth**

- **USB** — Conexiune cablată plug-and-play pentru intrare fiabilă și cu latență scăzută
- **Bluetooth** — Configurare fără cablu când scenariul permite; păstrați configurația ușoară și portabilă

KeyMod este proiectat pentru control local practic zilnic al dispozitivelor, nu ca înlocuitor al desktop-ului la distanță.

### **Aplicație mobilă open source**

Cu aplicația noastră mobilă open source puteți:

- **Tastatură și mouse (Basic)** — Tastatură pe tot ecranul cu repetare la apăsare lungă, previzualizare taste și tastatură numerică
- **Tastatură și mouse Pro** — Aspect compozit cu benzi Shortcut Hub, tastatură împărțită și IME
- **Mod prezentare** — Telecomandă slide-uri cu cronometru pentru Google Slides și alte aplicații
- **Gamepad** — Controller virtual cu aspecte presetate personalizabile și suport multi-touchpad
- **Hub scurtături** — Scurtături tastatură bazate pe profiluri pentru unelte creative și de dezvoltare (Blender, KiCAD, Photoshop, VS Code), cu creare, import și export
- **Macro-uri** — Secvențe de taste programabile cu întârzieri
- **Intrare vocală** — Speech-to-keyboard cu AI (Whisper API)
- **Terminal** — SSH prin Bluetooth pentru acces la comenzi la distanță
- **Agent** — Interacțiune directă bazată pe AI cu HID sau comenzi SSH pentru a controla un alt computer

Aplicația **KeyCmd** se concentrează pe **Android** și **iOS** (inclusiv iPadOS). Funcționează și cu **KVM-GO** prin USB sau Bluetooth. Extindem și controlul desktop cu software **Windows și macOS** în ecosistemul nostru Openterface mai larg.


### **HID hardware real**

Construit pe nucleul HID dovedit al Openterface Mini-KVM. Emulare tastatură și mouse bazată pe hardware — nicio instalare software necesară pe dispozitivul țintă.

### **Open source**

KeyMod este hardware și software deschise. Vom publica scheme, fișiere PCB, firmware, software și BOM pe măsură ce proiectul evoluează. [Alăturați-vă comunității noastre](/discord) pentru a contribui și a fi la curent.

## Specificații tehnice

### **Conectivitate**

- **USB**: Versiunea Mini utilizează conector Type C tată; versiunea Plus utilizează conector Type A tată și conector Type C mamă
- **Bluetooth**: Tastatură și mouse HID
- **Țintă**: Nicio instalare software necesară

### **Hardware cheie**

- Chip CH32V208 (protocol compatibil CH9329)
- Conector(i) USB: versiunea Mini utilizează Type C tată; versiunea Plus utilizează Type A tată și Type C mamă
- MCU
- Buton(e) programabil(e)

### **Funcționalități de intrare**

- Emulare completă tastatură și mouse (HID)
- Profiluri de intrare personalizate (niveluri Basic și Pro)
- Macro-uri și taste rapide
- Hub scurtături cu profiluri specifice aplicațiilor
- Gamepad cu aspecte bazate pe presetări (schema v7)
- Controale prezentare cu cronometru slide-uri
- Speech-to-keyboard cu AI
