---
title: "Tutorial KVM 01 — Primi passi"
description: "Destinatari: Principianti — utenti alle prime armi con i dispositivi KVM Openterface Documentazione Openterface: configurazione, FAQ e risoluzione problemi…"
---

# Tutorial KVM 01 — Primi passi

**Destinatari:** Principianti — utenti alle prime armi con i dispositivi KVM Openterface

---

## 1. Cos'è KVM-over-USB?

Un dispositivo KVM (Keyboard, Video, Mouse) si colloca tra il **computer host** (la vostra postazione di lavoro) e un **computer target** (server, mini PC, dispositivo embedded). Esso:

- **Cattura** l'uscita video HDMI del target (e l'audio, se disponibile)
- **Inoltra** l'input di tastiera e mouse tramite emulazione HID
- Tutto tramite un unico cavo USB — nessuna rete richiesta

Questo distingue i dispositivi KVM dal software di desktop remoto: potete controllare il target anche in **BIOS/UEFI**, durante l'avvio o quando il sistema operativo si è bloccato.

### Dispositivi KVM Openterface

| Dispositivo | Form factor | Caratteristica principale |
|--------|------------|-------------|
| **Mini-KVM** | Compatto dongle USB | KVM-over-USB da desktop |
| **KVM-Go** | Portatile stile toolkit | KVM in mobilità con cavi integrati, **supporto iPadOS via BLE** |
| **uConsole KVM Extension** | Modulo interno | KVM integrato per ClockworkPi uConsole |

> Cercate **KeyMod** (solo emulatore di tastiera e mouse, senza video)? Consultate il [Tutorial KeyMod](../../keymod/index.md).

---

## 2. Cosa vi serve

### Hardware

- **Dispositivo KVM Openterface** — Mini-KVM, KVM-Go o uConsole KVM Extension
- **Computer host** — Con macOS, Windows, Linux o Android
- **Computer target** — Qualsiasi computer con uscita HDMI
- **Cavo HDMI** — Dall'uscita HDMI del target all'ingresso HDMI del KVM
- **Cavo USB** — Dal KVM al computer host (fornisce alimentazione e dati)

### Opzionale

- **Cavo switch USB** — Dal KVM alla porta USB del dispositivo target (per l'emulazione di tastiera/mouse)
- **Tastiera e mouse** — Collegati alla porta USB commutabile del KVM per controllare host o target

---

## 3. Installazione

### Applicazione host

| Piattaforma | Applicazione | Download |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) o [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) o [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **solo KVM-Go** |

### Requisiti Android

L'app Android richiede:

- **Android 8.0 (API 26)** o successivo
- **Supporto USB OTG** — la maggior parte degli smartphone moderni lo supporta (Samsung, Google Pixel, OnePlus). Verificate collegando una chiavetta USB con un adattatore OTG
- **Cavo o adattatore USB OTG** per collegare il dispositivo KVM al telefono

### Requisiti iPadOS

L'app iPadOS richiede:

- **iPadOS 17.0** o successivo
- **Dispositivo KVM-Go** — iPadOS si collega al dongle KVM-Go via **Bluetooth Low Energy (BLE)** per l'input di tastiera/mouse e alla scheda di acquisizione USB per il video
- **Autorizzazioni fotocamera e microfono** — necessarie per l'anteprima video e il monitoraggio audio dalla scheda di acquisizione
- **Autorizzazione Bluetooth** — necessaria per individuare e collegare il dongle KVM-Go per l'input HID
- **Autorizzazione Libreria foto** (opzionale) — per salvare screenshot e registrazioni nell'app Foto

### Autorizzazioni macOS

Al primo avvio, macOS richiederà:

| Autorizzazione | Motivo |
|-----------|-----|
| **Fotocamera** | Acquisisce il video dal chip di acquisizione HDMI |
| **Microfono** | Acquisisce l'audio dal target (se abilitato) |
| **Accessibilità** | Necessaria per il controllo del mouse HID in modalità relativa |

### Autorizzazioni Linux

- Aggiungete l'utente ai gruppi `dialout` e `video`: `sudo usermod -a -G dialout,video $USER`
- Installate le regole udev per l'accesso al dispositivo
- **Conflitto BrlTTY:** rimuovete `brltty` o inserite il chip seriale in blacklist — consultate [Risoluzione problemi](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- L'installer include il driver seriale CH340. Per le build portatili, installatelo separatamente.

---

## 4. Collegamento dell'hardware

┌─────────────┐                        ┌──────────────────┐
│   TARGET    │─── Cavo HDMI ────────▶│  Openterface     │
│  COMPUTER   │                        │  Dispositivo KVM │
└─────────────┘                        │                  │
                                       │  ◄── Cavo USB ──│── Cavo switch USB ──▶ Porta USB target
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  COMPUTER HOST   │
                                       │  (questa app)    │
                                       └──────────────────┘
1. Collegate l'**uscita HDMI** del target all'**ingresso HDMI** del KVM
2. Collegate l'**USB** del KVM a una **porta USB del computer host**
3. (Opzionale) Collegate il cavo switch USB dal KVM alla porta USB del target
4. (Opzionale) Collegate tastiera/mouse alla porta USB commutabile del KVM
5. **Accendete** il dispositivo target

### Rilevamento del dispositivo

Il KVM viene enumerato come più dispositivi USB:
- **Acquisizione video** (MS2109/MS2109S/MS2130S) — appare come webcam
- **Seriale** (CH9329 o CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — utilizzato per le operazioni firmware

### Collegamento tramite telefono Android

Con l'app Android, la catena di connessione utilizza USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC target   │               │   Dispositivo KVM │
│  (schermo)   │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Telefono Android│
                               │  (Openterface)   │
                               └──────────────────┘
```

Ordine di collegamento per Android:

1. **HDMI:** collegate l'uscita HDMI del target all'**ingresso** HDMI del KVM
2. **USB (target):** collegate la porta USB del target alla porta USB del KVM — trasporta i segnali mouse/tastiera
3. **USB OTG (telefono):** collegate il KVM al telefono Android tramite cavo/adattatore USB OTG
4. **Alimentazione:** accendete il dispositivo KVM (se ha un ingresso di alimentazione separato) e il computer target

Quando la connessione riesce, l'anteprima video passa dal segnaposto allo schermo live del target, e toccando lo schermo del telefono si sposta il cursore sul target.

### Collegamento tramite iPadOS

L'app iPadOS utilizza un modello di connessione diverso: **BLE per l'input** e **acquisizione USB per il video**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  PC target   │               │                   │
│  (schermo)   │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (video)
                              │   BLE (FFF2)      │ (tastiera/mouse)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Ordine di collegamento per iPadOS:

1. **Hardware:** collegate il dongle KVM-Go alla porta USB del PC target e collegate l'ingresso HDMI
2. **Accendete** il computer target
3. **Aprite l'app** sull'iPad e concedete le autorizzazioni per fotocamera, microfono e Bluetooth
4. **Toccate il pulsante BLE** nella barra degli strumenti — l'app cerca dispositivi denominati `kvm*`
5. **Toccate Connetti** accanto al vostro dispositivo KVM-Go — il pulsante diventa verde con l'intensità del segnale RSSI
6. **Verificate:** l'anteprima video mostra lo schermo del target, il tocco invia clic, la digitazione invia pressioni di tasti

> **Nota:** L'app iPadOS funziona solo con **KVM-Go**. Mini-KVM e uConsole KVM Extension non hanno supporto BLE.

---

## 5. Primo avvio

### Finestra principale

```
┌─────────────────────────────────────────────────────────┐
│  Barra menu / Barra strumenti                           │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              AREA VISUALIZZAZIONE VIDEO                 │
│         (mostra lo schermo del dispositivo target)      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Barra di stato │ Porta │ Tasti │ Mouse │ Risoluzione  │
└─────────────────────────────────────────────────────────┘
```

### Autorizzazioni Android

Al primo avvio, l'app Android richiede:

| Autorizzazione | Motivo | Cosa succede se negata |
|---|---|---|
| **USB Host** | Comunicare con l'hardware Openterface | L'app non rileva il dispositivo KVM |
| **Fotocamera** | Ricevere video dal chip di acquisizione HDMI | Nessuna anteprima video |
| **Archiviazione** | Salvare screenshot e registrazioni | Impossibile salvare le acquisizioni |

Concedete tutte le autorizzazioni per la piena funzionalità. Appare anche una finestra di dialogo di autorizzazione USB di sistema quando il dispositivo KVM viene rilevato — toccate **Consenti**.

### Autorizzazioni iPadOS

Al primo avvio, l'app iPadOS richiede:

| Autorizzazione | Motivo | Cosa succede se negata |
|---|---|---|
| **Fotocamera** | Ricevere video dalla scheda di acquisizione HDMI | Nessuna anteprima video |
| **Microfono** | Monitorare l'audio del PC target tramite gli altoparlanti dell'iPad | Nessun monitoraggio audio |
| **Bluetooth** | Individuare e collegare KVM-Go per l'input HID | Impossibile inviare input tastiera/mouse |
| **Libreria foto** | Salvare screenshot e registrazioni | Le acquisizioni vengono comunque salvate nella cartella Documenti dell'app |

Se avete negato un'autorizzazione per errore, andate in **Impostazioni > Privacy e sicurezza** per riabilitarla.

### Verifica della connessione

- **Indicatore HDMI:** verde = segnale rilevato, arancione = nessun segnale, grigio = sconosciuto
- **Indicatore tastiera:** verde = connesso, arancione = non trovato, grigio = sconosciuto
- **Indicatore mouse:** verde = connesso, arancione = non trovato, grigio = sconosciuto
- **Porta seriale:** deve mostrare un nome porta e baud rate (9600 o 115200)

Se gli indicatori mostrano arancione o grigio, consultate [Risoluzione problemi](04-troubleshooting.md).

---

## 6. Controllo KVM di base

### Modalità mouse

| Modalità | Descrizione | Ideale per |
|------|-------------|----------|
| **Assoluta** (predefinita) | Il cursore host si mappa direttamente allo schermo target | Uso generale, navigazione GUI |
| **Relativa (HID)** | I movimenti del mouse vengono inviati come delta via HID | Gaming, interazione rapida |

Passate tramite l'interruttore nella barra degli strumenti o **Controllo > Modalità mouse**.

### Input tastiera

Tutte le pressioni di tasti vengono inoltrate al target quando la finestra dell'app è attiva:
- Tasti standard, tasti funzione, modificatori
- Tasti speciali: Ctrl+Alt+Canc, Stampa
- **Incolla nel target:** invia il testo degli appunti come pressioni di tasti emulate

### Commutazione USB

Commutate la porta USB commutabile tra:
- **Host** — tastiera/mouse controllano il computer host
- **Target** — tastiera/mouse controllano il computer target

---

## 7. Passi successivi

- **[Operazioni di base →](02-basic-operations.md)** — Mouse, tastiera, video, audio, registrazione
- **[Funzionalità avanzate →](03-advanced-features.md)** — EDID, firmware, macro, script
- **[Risoluzione problemi →](04-troubleshooting.md)** — Problemi comuni e soluzioni
