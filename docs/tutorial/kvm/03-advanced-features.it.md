---
title: "Tutorial KVM 03 — Funzionalità avanzate"
description: "Audience: Intermedio a esperto — funzionalità avanzate e configurazione Documentazione Openterface: configurazione, FAQ e risoluzione problemi KVM-over-USB."
---

# Tutorial KVM 03 — Funzionalità avanzate

**Audience:** Intermedio a esperto — funzionalità avanzate e configurazione

---

## 1. Sistema delle preferenze

### Video

- **Risoluzione e frame rate** — Impostazioni di acquisizione preferite
- **Backend multimediale** — FFmpeg, GStreamer (Linux) o Qt Multimedia (Windows)
- **Accelerazione hardware** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Proporzioni e scaling** — Rapporto personalizzato, Stretch/Fit/Fill

### Audio

- **Abilitato** — Attiva o disattiva l'acquisizione audio dal bersaglio
- **Dispositivo di input/output** — Seleziona sorgente e dispositivo di riproduzione

### Controllo del bersaglio

- **Modalità mouse** — Assoluta, Relativa (HID), Relativa (Events)
- **Limitazione eventi mouse** — 30–1000 eventi/secondo
- **Layout tastiera** — OS bersaglio e layout regionali
- **Intervallo ripetizione tasti** — Velocità di ripetizione tasto premuto
- **Nascondi automaticamente il cursore** — Nascondi il cursore host sull'area video

### Logging

- **Livello di log** — Debug, Info, Warning, Error
- **Log su file** — `~/Documents/openterface.log` (macOS) o percorso configurato (Qt)
- **Logging seriale** — Log separato della comunicazione seriale

---

## 2. Gestione EDID

### Cos'è l'EDID?

EDID (Extended Display Identification Data) è ciò che il dispositivo KVM invia al bersaglio per descriverne le capacità di visualizzazione — risoluzioni supportate, frequenze di aggiornamento, informazioni del produttore. Il KVM agisce come un «falso monitor», quindi l'EDID determina quali risoluzioni il bersaglio invierà.

### Modifica del nome display EDID

È possibile modificare il nome display che il dispositivo KVM segnala al bersaglio. Questo nome appare nelle impostazioni display dell'OS bersaglio.

> **Nota:** Attualmente è supportata solo la modifica del nome display. La modifica della risoluzione e le voci di risoluzione personalizzate non sono ancora disponibili.

**Accesso:** Settings > EDID Display Name Editor (macOS) o Device > Update Display Settings (Qt)

### Casi d'uso

- **Identificare il display** nelle impostazioni dell'OS bersaglio
- **Denominazione personalizzata** in configurazioni multi-monitor per distinguere il display KVM

---

## 3. Sistema macro (macOS)

Le macro sono sequenze di azioni da tastiera salvate, attivate dal pannello macro della barra degli strumenti.

### Formato sequenza tasti

**Tag modificatori:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (corrisponde a Cmd/Win/Super a seconda dell'OS bersaglio)

**Tasti speciali:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Ritardi:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Esempi

<CMD>c</CMD>              # Copia su macOS
<CTRL>c</CTRL>            # Copia su Windows
<DELAY05s><ENTER>         # Attendi, poi premi Invio
### Generazione assistita da IA

Il pulsante **Magic** dell'editor macro genera macro dal linguaggio naturale. Descrivete ciò che volete e l'IA produce la sequenza di tasti.

### Verifica

Contrassegnate le macro come **verified** dopo averle testate. Solo le macro verificate sono disponibili per l'agente IA in esecuzione autonoma.

---

## 4. Strumento Script (Qt)

Un linguaggio di scripting ispirato ad AutoHotKey per automatizzare azioni da tastiera e mouse sul bersaglio.

### Apertura

Menu: **Device > Script Tool**

### Comandi

| Comando | Descrizione | Esempio |
|---------|-------------|---------|
| `Sleep` | Mette in pausa l'esecuzione | `Sleep 1000` |
| `Send` | Invia sequenze di tasti | `Send Hello World` |
| `Click` | Clic del mouse | `Click 100 200` |
| `SetCapsLockState` | Attiva/disattiva CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Screenshot | `FullScreenCapture "/tmp/shot.png"` |

### Prefissi modificatori

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Aggiornamenti firmware

### Quando aggiornare

- Nuove funzionalità hardware
- Correzioni di bug
- Miglioramenti di compatibilità

### Processo di aggiornamento

1. Aprire Firmware Update Tool (**Settings > Firmware Update Tool** su macOS, **Device > Update Firmware** su Qt)
2. Lo strumento verifica l'ultima versione dalla rete
3. Il progresso viene monitorato durante l'operazione di scrittura
4. **Non scollegare il dispositivo durante l'aggiornamento**

### Recupero

1. Mantenere il dispositivo alimentato
2. Chiudere e riaprire Firmware Update Tool, riprovare
3. Usare Serial Reset Tool se il dispositivo non risponde

---

## 6. Serial Reset Tool

**Accesso:** Settings > Serial Reset Tool (macOS) o Device > Factory Reset HID Chip (Qt)

Usare quando:
- Il dispositivo è in uno stato sconosciuto dopo un aggiornamento firmware fallito
- Il chip HID non risponde
- Preparazione del dispositivo per la rivendita

---

## 7. Diagnostica (Qt)

Menu: **Device > Device Diagnostics**

Esegue test hardware in sequenza:
1. Test connessione seriale
2. Stato USB del bersaglio
3. Test reset di fabbrica
4. Test baudrate alto/basso
5. Test di stress (comandi rapidi, misura tasso di successo)
6. Test plug & play (rilevamento disconnessione/riconnessione USB)

Dopo l'esecuzione, esportate i risultati tramite **Support Email Dialog**.

---

## 8. Sistema chat IA (macOS)

Assistente IA integrato in grado di analizzare lo schermo del bersaglio, suggerire azioni ed eseguire operazioni da tastiera/mouse.

### Modalità chat

| Modalità | Descrizione |
|------|-------------|
| **Interactive** | Porre domande, ottenere indicazioni |
| **Agentic** | L'IA pianifica ed esegue autonomamente attività multi-step |
| **Guide** | Un'istruzione alla volta, passo dopo passo |
| **Planner** | Richieste complesse suddivise in piani strutturati |

### Configurazione

Settings > AI Chat: endpoint API, chiave (salvata in Keychain), modello, sistema bersaglio (macOS/Windows/Linux/etc.)

---

## 9. Controllo remoto (VNC/RDP — macOS)

Passate tra le modalità **Hardware KVM**, **VNC** e **RDP** tramite **Control > Connection Protocol**.

| Scenario | Modalità |
|----------|------|
| Bersaglio in BIOS/UEFI, senza rete, in avvio, bloccato | Hardware KVM |
| Uso desktop ad alta larghezza di banda, server Windows | VNC o RDP |

---

## 10. Server TCP (Qt)

Server TCP integrato per il controllo remoto sulla porta 12345.

### Comandi

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Esempio Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Sicurezza:** Nessuna autenticazione, crittografia o limitazione del rate. Abilitare solo su reti fidate.

---

## Funzionalità specifiche per iPadOS

### Gestione connessione Bluetooth

L'app iPadOS si connette al dongle KVM-Go tramite **Bluetooth Low Energy (BLE)** per l'input HID da tastiera/mouse:

- **Connessione automatica:** Abilitata per impostazione predefinita. All'avvio, l'app esegue la scansione per 5 secondi e si connette automaticamente al dispositivo `kvm*` con il segnale più forte.
- **Riconnessione:** Se la connessione cade, l'app tenta di riconnettersi fino a 3 volte con un ritardo di 2 secondi.
- **Monitoraggio segnale:** Aggiornamenti RSSI ogni 2 secondi. Il pulsante BLE mostra l'intensità del segnale (es. `-45 dBm`) con un indicatore colore: verde (-50 a 0 dBm), arancione (-70 a -50 dBm), rosso (sotto -70 dBm).
- **Scansione dispositivi:** Nella lista compaiono solo i dispositivi il cui nome inizia con `kvm` (senza distinzione maiuscole/minuscole).
- **Controllo manuale:** Aprite la schermata BLE per scansionare, connettere, disconnettere o disabilitare la connessione automatica.

### Overlay informativo

Toccate il pulsante **Info** per visualizzare un overlay dello stato di input in tempo reale nell'angolo in alto a destra:

```
┌─ Stato input ───────────┐
│ Mouse                   │
│ Mode: Absolute          │
│ Position: 512.0, 384.0  │
│ Drag Mode: Active       │
│ Scrolling: Inactive     │
│ Tastiera                │
│ Mode: Normal            │
│ Caps Lock: OFF          │
│ Modifiers: Ctrl, Shift  │
└─────────────────────────┘
```

L'overlay è trasparente ai tocchi — non blocca l'interazione con l'anteprima video.

### Correzione orientamento schermo

Toccate il pulsante **Rotate** per scorrere le modalità di correzione orientamento: Normal, 90° CW, 180°, 90° CCW. Corregge l'anteprima video quando il dongle KVM-Go è montato in un orientamento non standard. La rotazione si applica sia all'anteprima live sia alle acquisizioni salvate.

### Timer di inattività disabilitato

L'app mantiene lo schermo dell'iPad **acceso** durante l'uso disabilitando il timer di inattività, impedendo all'iPad di bloccarsi automaticamente durante il monitoraggio del PC bersaglio.

### Sistema di logging

L'app include un `Logger` integrato con filtraggio per categoria:

| Categoria | Copre |
|---|---|
| `bluetooth` | Scansione BLE, connessione, trasmissione dati |
| `mouse` | Input mouse, rilevamento gesti, cambi modalità |
| `keyboard` | Eventi tasti, stato modificatori, tasti composti |
| `camera` | Registrazione video, screenshot, acquisizione foto |
| `ui` | Gestione tocchi, riconoscimento gesti, layer anteprima |
| `general` | Ciclo di vita app, informazioni generali |

Il logging può essere regolato nel codice sorgente dell'app per ridurre il rumore in console.

---

## Prossimi passi

- **[Risoluzione dei problemi →](04-troubleshooting.md)** — Problemi comuni e soluzioni

---

## Funzionalità specifiche per Android

### Pannello impostazioni

Il pannello impostazioni dell'app Android (pulsante Menu ☰) contiene tutte le opzioni di configurazione:

| Impostazione | Descrizione |
|---|---|
| **Device** | Mostra i dispositivi USB connessi e lo stato. Toccare per selezionare o ripetere la scansione. |
| **Disconnect Device** | Rilascia in sicurezza tutte le connessioni USB. Usare prima di scollegare. |
| **Baudrate** | Velocità comunicazione seriale: **115200** (predefinito) o **9600** (più lento, per problemi). |
| **Controls** | Cursori luminosità, contrasto e tonalità della fotocamera. |
| **Video Format** | Selettore risoluzione e frame rate. |
| **Rotate/Flip** | Ruota 90° CW/CCW, capovolgi orizzontalmente/verticalmente. |
| **Screen Capture / Record Video** | Screenshot e registrazione video. |
| **Relative / Absolute / Drag** | Cambia modalità controllo mouse. |
| **About Device** | Mostra versione Android e informazioni versione app. |

### Persistenza impostazioni

L'app Android ricorda le preferenze tra le sessioni:

| Impostazione | Persistita? |
|---|---|
| Modalità controllo mouse | Sì |
| Formato video (risoluzione, FPS) | Sì |
| Parametri fotocamera (luminosità, contrasto, tonalità) | Sì |
| Layout tastiera (US, JP, DE) | Sì |
| Baudrate | Sì |
| Cronologia connessione dispositivi | Sì |

Alla riapertura dell'app, vengono ripristinate le ultime impostazioni. Per reimpostare tutto: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Disconnessione sicura

Prima di scollegare il dispositivo KVM su Android:

1. Aprite il pannello impostazioni
2. Toccate **Disconnect Device** (mostrato in rosso)
3. Attendete che l'app rilasci la connessione USB
4. Scollegate i cavi

Questo previene la corruzione dei dati e garantisce che il computer bersaglio rilasci correttamente tastiera/mouse.

### Suggerimenti prestazioni Android

- **Abbassate la risoluzione** — 640×480 è molto più leggero di 1920×1080
- **Riducete il frame rate** — 30 fps usa meno banda di 60 fps
- **Chiudete altre app** — liberate la memoria del telefono
- **Usate un adattatore USB OTG di qualità** — gli adattatori economici possono limitare la connessione
- Il team di sviluppo sta lavorando per ridurre la latenza nella pipeline della fotocamera
