---
title: "KeyMod Tutorial"
description: "Guida completa all'utilizzo dell'app KeyMod. Scopri come connetterti, controllare il computer dal telefono e utilizzare le modalità tastiera, mouse, gamepad, macro e input vocale."
keywords: "Tutorial KeyMod, come utilizzare KeyMod, guida alla tastiera del telefono, tutorial sull'app KeyMod"
---

# KeyMod Tutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

Questo tutorial copre la versione **Android** dell'app KeyMod. La versione iOS è in fase di sviluppo.

## Cos'è KeyMod?

KeyMod trasforma il tuo telefono o tablet in un **dispositivo di input universale** per qualsiasi computer. Si collega all'hardware **Openterface KeyMod** (un KVM — commutatore tastiera, video e mouse), che quindi invia le sequenze di tasti del telefono, i movimenti del mouse e gli input del gamepad a un computer di destinazione come se provenissero da una tastiera e un mouse reali da USB.

### Come funziona la connessione```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyMod app)                (CH9329 protocol)              (Windows/macOS/Linux)
L'app comunica con l'hardware KeyMod utilizzando il **protocollo CH9329** tramite una connessione seriale (USB-C a 115200 baud, 8N1 o Bluetooth BLE). Il dispositivo KeyMod appare al computer di destinazione come una tastiera e un mouse standard USB: non sono necessari driver.

### Per chi è questo?

| Tu sei... | KeyMod ti aiuta... |
|---|---|
| **Amministratore di sistema** | Gestisci i server dal tuo telefono senza portare con te tastiera e monitor di riserva |
| **Presentatore/Relatore** | Controlla le diapositive da qualsiasi punto della stanza, senza bisogno del clicker |
| **Giocatore** | Usa il tuo telefono come gamepad per giochi retrò o come controller aggiuntivo |
| **Creatore di contenuti** | Attiva scorciatoie, macro e input vocale durante la registrazione su un altro computer |
| **Utente esperto** | Invia scorciatoie da tastiera complesse, frammenti di testo o sequenze di automazione dal tuo telefono |
| **Chiunque** | Digita sul computer dal divano, dal letto o dall'altra parte della stanza |

## Sezioni del tutorial

| Guida | Descrizione |
|---|---|
| [1. Getting Started](01-getting-started.md) | Installa, connettiti e scegli la tua prima modalità (5 minuti) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Digitazione, modificatori, touchpad e immissione di testo |
| [3. Target OS](03-target-keyboard.md) | Mappatura del sistema operativo di destinazione |
| [4. Shortcut Hub](04-shortcuts.md) | Scorciatoie da tastiera basate sul profilo per le app più diffuse |
| [5. Macros](05-macros.md) | Sequenze di tasti automatizzate con ritardi |
| [6. Voice Input](06-voice-input.md) | Voce alla tastiera con Whisper AI |
| [7. AI Integration](07-ai.md) | Affinamento del testo e assistente ai comandi |
| [8. Gamepad](08-gamepad.md) | Controller di gioco virtuale con layout personalizzabili |
| [9. Numpad](09-numpad.md) | Tastierino numerico per l'immissione dei dati |
| [10. Presentation](10-presentation.md) | Telecomando a scorrimento e timer |
| [11. Settings](11-settings.md) | Configurazione e preferenze dell'app |
| [12. Troubleshooting](12-troubleshooting.md) | Problemi comuni e soluzioni |

## Ottenere aiuto

- **Segnalazioni di bug:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Comunità:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Codice sorgente:** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)