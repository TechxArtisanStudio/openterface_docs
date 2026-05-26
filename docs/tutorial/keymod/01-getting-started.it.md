---
title: "KeyMod Tutorial - Per iniziare"
description: "Installa l'app KeyMod, connettiti al tuo dispositivo KeyMod e invia la prima sequenza di tasti in meno di 5 minuti. Documentazione Openterface:… Openterface."
keywords: "KeyMod iniziare, KeyMod configurazione, KeyMod installazione, connessione KeyMod"
---

# 1. Per iniziare

Installa l'app KeyMod, connettiti al tuo hardware KeyMod e invia la prima sequenza di tasti in meno di 5 minuti.

## Cosa ti serve

- **Openterface KeyMod hardware**: acceso e nel raggio d'azione
- **Telefono o tablet** — Android con l'app KeyMod installata
- **Cavo USB** (per la configurazione iniziale) — USB-C per collegare il telefono al dispositivo KeyMod
- **Bluetooth** (opzionale): per la connessione wireless dopo la configurazione iniziale

## Passaggio 1: installa l'app KeyMod

**Android:**

1. Apri il browser del tuo telefono e vai su [KeyMod GitHub Releases page](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags)
2. Scarica l'ultimo file `.apk`
3. Tocca il file scaricato per installarlo
4. Se Android lo richiede, consenti **"Installa app sconosciute"** per il tuo browser

In alternativa, crea dal sorgente: vedi [Build from Source](#build-from-source) di seguito.

## Passaggio 2: connettiti al tuo dispositivo KeyMod

KeyMod si collega all'hardware Openterface KeyMod in due modi:

### USB Collegamento (consigliato per la prima configurazione)

1. Collega il telefono al dispositivo KeyMod utilizzando un cavo USB-C
2. Aprire l'app KeyMod
3. Tocca l'icona di connessione (angolo in alto a destra della schermata principale)
4. Tocca **"USB Connessione"**
5. Accettare la richiesta di autorizzazione USB quando richiesto
6. Dovresti vedere un indicatore di stato verde **"Connesso"**

### Connessione Bluetooth (senza fili)

1. Assicurati che il Bluetooth sia abilitato sul tuo telefono
2. Apri KeyMod e tocca l'icona di connessione
3. Tocca **"Connessione Bluetooth"**
4. Attendi che il tuo dispositivo KeyMod venga visualizzato nell'elenco di scansione
5. Toccalo per accoppiarlo
6. Dovresti vedere un indicatore di stato verde **"Connesso"**

> **Suggerimento:** Abilita **"Connessione automatica all'avvio"** nella finestra di dialogo di connessione in modo che KeyMod si ricolleghi automaticamente ogni volta che lo apri. L'app ricorda l'ultimo tipo di connessione (USB o BLE).

## Passaggio 3: scegli la modalità: benvenuto e guida

Dopo l'avvio, vedrai la schermata **Benvenuto e Guida** con le schede delle modalità:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Benvenuto e Guida: tocca la scheda di una modalità qualsiasi per accedere a quella modalità.</em></p>
</div>

Utilizza il menu laterale (icona dell'hamburger, in alto a sinistra) per cambiare modalità in qualsiasi momento:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Cassetto di navigazione: cambia modalità, accedi a macro, voce e impostazioni.</em></p>
</div>

**"Ricorda la mia scelta"**: seleziona questa casella per saltare la schermata di benvenuto nei lanci futuri e passare direttamente all'ultima modalità utilizzata.

**"Salta" button**: ignora la schermata di benvenuto e accede immediatamente alla modalità utilizzata in precedenza.

## Passaggio 4: invia la prima sequenza di tasti

1. Seleziona la modalità **Tastiera e mouse**
2. Tocca un tasto qualsiasi sulla tastiera su schermo
3. La sequenza di tasti corrispondente viene inviata al computer di destinazione

Questo è tutto! Ora stai controllando il tuo computer di destinazione da remoto.

## Indicatori dello stato della connessione

| Indicatore | Significato |
|---|---|
| **Verde** (icona connesso) | Connessione attiva, pronta per inviare input |
| **Ambra/Blu** (icona di connessione) | Connessione in corso |
| **Grigio** (icona disconnesso) | Nessuna connessione attiva |
| **Barre del segnale** | BLE intensità del segnale o USB stato attivo |

## Crea dalla sorgente (Android, per sviluppatori)```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## Passaggi successivi

- **[Keyboard & Mouse →](02-keyboard-mouse.md)**: digitazione, modificatori, touchpad e immissione di testo