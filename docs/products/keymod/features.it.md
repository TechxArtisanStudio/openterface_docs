---
title: "Funzionalità e specifiche"
description: "Funzionalità KeyMod Series: tastiera e mouse HID Bluetooth, connessione dual USB + Bluetooth, profili personalizzati, macro, modalità gamepad, controlli presentazione, hub scorciatoie. App mobile open source per Android e iOS."
keywords: "funzionalità KeyMod Series, emulatore HID, tastiera Bluetooth, tastiera USB, pulsanti programmabili, gamepad, macro, open source, CH9329, hub scorciatoie, modalità presentazione"
---

# **Funzionalità e specifiche** | Openterface KeyMod Series

## Stato attuale

KeyMod è in sviluppo attivo con una [beta pubblica](/tutorial/keymod/) disponibile per Android. Iscriviti alla [pagina del prodotto](/products/keymod/) per restare aggiornato sulle notifiche di lancio.

> **Nota:** Funzionalità, specifiche e design sono ancora soggetti a modifiche durante lo sviluppo.

## Varianti di prodotto

- **Versione Mini** — Solo connettore Type C maschio
- **Versione Plus** — Connettore Type A maschio e connettore Type C femmina

## Funzionalità principali

### **Telefono come tastiera e trackpad**

KeyMod trasforma il tuo telefono in una console tastiera e trackpad portatili. Usalo quando una tastiera e mouse completi non sono disponibili, o quando vuoi un flusso di lavoro più veloce rispetto al cambio di dispositivi. Ideale per computer display esterni, lettori insegne LED, chioschi, smart TV e set-top box.

### **Connessione dual: USB + Bluetooth**

- **USB** — Connessione cablata plug-and-play per input affidabile e a bassa latenza
- **Bluetooth** — Configurazione senza cavi quando lo scenario lo consente; mantieni la tua configurazione leggera e portatile

KeyMod è progettato per il controllo locale pratico quotidiano dei dispositivi, non come sostituto del desktop remoto.

### **App mobile open source**

Con la nostra app mobile open source puoi:

- **Tastiera e mouse (Basic)** — Tastiera a schermo intero con ripetizione alla pressione prolungata, anteprima tasti e tastierino numerico
- **Tastiera e mouse Pro** — Layout composito con strisce Shortcut Hub, tastiera divisa e IME
- **Modalità presentazione** — Telecomando slide con timer per Google Slides e altre app
- **Gamepad** — Controller virtuale con layout preset personalizzabili e supporto multi-touchpad
- **Shortcut Hub** — Scorciatoie da tastiera basate su profili per strumenti creativi e di sviluppo (Blender, KiCAD, Photoshop, VS Code), con creazione, importazione ed esportazione
- **Macro** — Sequenze di tasti programmabili con ritardi
- **Input vocale** — Speech-to-keyboard con IA (Whisper API)
- **Terminale** — SSH tramite Bluetooth per accesso remoto ai comandi
- **Agent** — Interazione diretta basata su IA con HID o comandi SSH per controllare un altro computer

L'app **KeyCmd** si concentra su **Android** e **iOS** (incluso iPadOS). Funziona anche con **KVM-GO** tramite USB o Bluetooth. Stiamo anche espandendo il controllo desktop con software **Windows e macOS** nel nostro più ampio ecosistema Openterface.


### **Vero HID hardware**

Costruito sul collaudato nucleo HID di Openterface Mini-KVM. Emulazione tastiera e mouse basata su hardware — nessuna installazione software richiesta sul dispositivo di destinazione.

### **Open source**

KeyMod è hardware e software aperti. Pubblicheremo schemi, file PCB, firmware, software e BOM man mano che il progetto evolve. [Unisciti alla nostra community](/discord) per contribuire e restare aggiornato.

## Specifiche tecniche

### **Connettività**

- **USB**: La versione Mini utilizza un connettore Type C maschio; la versione Plus utilizza un connettore Type A maschio e un connettore Type C femmina
- **Bluetooth**: Tastiera e mouse HID
- **Target**: Nessuna installazione software richiesta

### **Hardware chiave**

- Chip CH32V208 (protocollo compatibile CH9329)
- Connettore/i USB: la versione Mini utilizza Type C maschio; la versione Plus utilizza Type A maschio e Type C femmina
- MCU
- Pulsante/i programmabile/i

### **Funzionalità di input**

- Emulazione completa tastiera e mouse (HID)
- Profili di input personalizzati (livelli Basic e Pro)
- Macro e scorciatoie
- Shortcut Hub con profili specifici per app
- Gamepad con layout basati su preset (schema v7)
- Controlli presentazione con timer slide
- Speech-to-keyboard con IA
