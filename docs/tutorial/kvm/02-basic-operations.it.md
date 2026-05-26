---
title: "Tutorial KVM 02 — Operazioni base"
description: "Audience: Principianti a intermedio — funzioni per l'uso quotidiano Documentazione Openterface: configurazione, FAQ e risoluzione problemi KVM-over-USB."
---

# Tutorial KVM 02 — Operazioni base

**Audience:** Principianti a intermedio — funzioni per l'uso quotidiano

---

## 1. Controllo del mouse

### Modalità assoluta (predefinita)

Il cursore dell'host viene mappato direttamente sullo schermo del bersaglio. Entrambi i cursori sono visibili.

- **Ideale per:** Uso generale, gestione server, navigazione BIOS
- **Comportamento del cursore:** Nascondi automaticamente o mostra sempre il cursore host sull'area video

### Modalità relativa (HID)

I movimenti del mouse vengono inviati come delta relativi tramite l'interfaccia HID. Il cursore host è nascosto.

- **Ideale per:** Gaming, applicazioni che richiedono input mouse grezzo
- **Requisiti:** Autorizzazione Accessibilità su macOS
- **Uscita:** Scorciatoia da tastiera globale (macOS) o pressione prolungata su Esc (Qt)

### Modalità mouse Android

L'app Android offre tre modi per controllare il mouse del bersaglio, commutabili nel pannello impostazioni:

| Modalità | Funzionamento | Ideale per |
|---|---|---|
| **Assoluta (predefinita)** | Tocca ovunque e il cursore salta lì e fa clic sinistro. La posizione viene mappata proporzionalmente. | La maggior parte delle attività |
| **Relativa** | Trascina il dito; il cursore si muove relativamente al trascinamento, come un trackpad portatile. Solleva il dito e il cursore resta fermo. | Posizionamento fine del cursore |
| **Trascinamento assoluto** | Tocca e tieni premuto; il cursore salta e segue il dito. Appare l'etichetta «Drag». Rilascia per rilasciare. | Trascinare file, selezionare testo |

**Pulsanti mouse su Android:** tocco singolo = clic sinistro, pressione prolungata = clic destro, doppio tocco = doppio clic.

### Modalità mouse iPadOS

L'app iPadOS offre due modalità mouse, attivabili tramite il pulsante modalità mouse nella barra degli strumenti:

| Modalità | Icona | Funzionamento | Ideale per |
|---|---|---|---|
| **Modalità Pan** (Relativa) | Icona mano | Il dito agisce come un trackpad portatile — trascina per muovere, tocca per cliccare | Uso desktop generale, superficie piana |
| **Modalità iPencil** (Assoluta) | Icona matita | La posizione del tocco viene mappata direttamente sulle coordinate dello schermo bersaglio, come una tavoletta grafica | Puntamento preciso, uso Apple Pencil |

**Gesti in entrambe le modalità:**

| Gesto | Modalità Pan | Modalità iPencil |
|---|---|---|
| **Tocco singolo** | Clic sinistro | Sposta cursore al punto + clic sinistro |
| **Tocca e trascina** | Muovi cursore (relativo) | Trascina con pulsante sinistro premuto |
| **Doppio tocco** | Doppio clic | Doppio clic al punto |
| **Pressione prolungata** | Clic destro | Clic destro al punto |
| **Tocco a due dita** | Clic destro | Clic destro |
| **Trascinamento a due dita** | Rotella di scorrimento | Rotella di scorrimento |

**Menu rapido:** Pressione prolungata sull'anteprima video per aprire un menu con Clic sinistro, Clic destro e Trascina.

**Modalità trascinamento:** Doppio tocco e tieni premuto o seleziona Trascina dal menu rapido — il pulsante sinistro resta premuto, appare l'etichetta «Dragging Mode Active».

### Preset prestazioni (macOS)

In **Control > Mouse Mode > Performance Presets**:

| Preset | Throttle | Baudrate | Caso d'uso |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Dispositivi bersaglio lenti |
| Casual Use | 80 Hz | 9600 | Gestione quotidiana server |
| Gaming | 250 Hz | 115200 | Gaming reattivo |
| Max Performance | 1000 Hz | 115200 | Massima reattività |

Throttle più alto = più reattivo. Baudrate più alto = comunicazione seriale più veloce.

---

## 2. Input da tastiera

### Input standard

Tutte le pressioni di tasti digitati mentre la finestra dell'app è focalizzata vengono inoltrate al bersaglio.

### Tasti speciali

Invia combinazioni di tasti tramite il pannello tasti della barra degli strumenti o **Control > Special Keys**:

- **F1–F12:** Tasti funzione
- **Ctrl+Alt+Del:** Saluto a tre dita di Windows
- **Print Screen:** Tasto screenshot
- **Ctrl+Alt+F2:** Cambio VT Linux

### Layout tastiera

Imposta il layout OS bersaglio corrispondente al computer bersaglio:

| Layout | Comportamento |
|--------|----------|
| **Windows** | Mappa i tasti host alle convenzioni Windows |
| **Mac** | Mappa i tasti host alle convenzioni Mac |
| **Linux** | Mappa i tasti host alle convenzioni Linux |

Layout regionali (QWERTY UK, Danese, QWERTZ Tedesco, AZERTY Francese, Giapponese, ecc.) sono disponibili anche nell'applicazione Qt.

### Incolla nel bersaglio

L'app invia il testo degli appunti come pressioni di tasti emulate al bersaglio. Utile per nomi utente, comandi, URL.

> **Nota:** Sono supportati solo caratteri ASCII. Testi lunghi possono perdere formattazione o omettere caratteri su sistemi vecchi/sovraccarichi.

**Configurazione comportamento incolla (macOS):**
- **Ask Every Time:** Chiede host o bersaglio ogni volta
- **Host Paste:** Invia sempre al bersaglio
- **Local Paste:** Incolla sempre sull'host

### Tastiera a schermo Android

L'app Android fornisce una tastiera a schermo completa accessibile tramite il pulsante tastiera (⌨) in basso a destra della schermata principale:

| Controllo | Funzione |
|---|---|
| **ShortCut** | Scorciatoie predefinite: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, ecc. |
| **Function** | F1–F12, PrtSc, ScrLk, tasti di navigazione (Ins, Home, PgUp, ecc.), frecce |
| **System** | Layout QWERTY con lettere, numeri, punteggiatura, Backspace, Enter |
| **Tasti modificatori** | Ctrl, Shift, Alt, Win — pulsanti toggle che si resettano dopo il tasto successivo |

Per inviare una combinazione come **Ctrl+Alt+Del**: tocca Ctrl (evidenziato), tocca Alt (entrambi evidenziati), tocca Del. Tutti i modificatori si resettano automaticamente dopo l'invio.

La tastiera supporta anche **diversi layout regionali** (US, Giapponese JIS, Tedesco QWERTZ, ecc.) selezionabili nel pannello impostazioni. I pulsanti zoom permettono di regolare le dimensioni dei tasti.

### Input tastiera iPadOS

L'app iPadOS supporta due metodi di input da tastiera:

**Tastiera flottante a schermo:** Tocca il pulsante **Keyboard** nella barra degli strumenti per mostrare una tastiera flottante trascinabile con layout stile Mac:

| Riga | Tasti |
|---|---|
| **Superiore** | Esc, F1–F12, Del |
| **Numeri** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Riga base** | Caps, a–l, ;, ', Enter |
| **Inferiore** | Shift, z–m, ,, ., /, Shift |
| **Modificatori** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Toggle modificatori:** Tocca Ctrl, Shift, Alt, Cmd o Caps per attivare/disattivare (evidenziato in blu)
- **Modalità tastiera:** Normal (digitazione standard) e Game (header pacchetto HID ottimizzato per input di gioco)
- **Trascinamento:** Afferra la maniglia di trascinamento nell'intestazione per riposizionare la tastiera ovunque sullo schermo

**Tastiera iPad esterna:** Le tastiere fisiche collegate all'iPad (Bluetooth, Smart Connector, USB) vengono passate direttamente al PC bersaglio. I tasti modificatori vengono inviati come eventi press/release, quindi combinazioni come `Ctrl+C` o `Alt+Tab` funzionano naturalmente.

**Scorciatoie tasti composte:** L'app include una libreria di scorciatoie comuni accessibili dalla barra degli strumenti, organizzate per categoria:

| Categoria | Esempi |
|---|---|
| **Navigazione** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Modifica** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **Sistema** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Applicazione** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (screenshot macOS) |

---

## 3. Impostazioni video

### Visualizzazione risoluzione

La barra degli strumenti mostra la risoluzione di input corrente e gli FPS dal bersaglio. La risoluzione è determinata da ciò che il bersaglio emette via HDMI.

### Risoluzioni supportate

| Risoluzione | Intervallo frame rate |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Cambiare risoluzione

1. Configura la risoluzione preferita nelle impostazioni video

### Proporzioni e scaling

| Modalità | Comportamento |
|------|----------|
| **Active Resolution** | Rileva automaticamente l'area video attiva |
| **HID Resolution** | Usa la risoluzione dell'hardware della scheda di acquisizione |
| **Custom** | Imposta manualmente un rapporto (16:9, 4:3, 21:9, ecc.) |

**Scaling:** Stretch (riempie la finestra, può distorcere), Fit (letterboxing), Fill (può ritagliare).

### Zoom

Zoom avanti/indietro, reset per adattare e scorrere per panoramica quando ingrandito.

### Backend video (Qt)

| Backend | Piattaforma | Note |
|---------|----------|-------|
| **FFmpeg** | Tutte | Consigliato, accelerazione hardware |
| **GStreamer** | Linux | Flessibilità pipeline |
| **Qt Multimedia** | Windows | Fallback semplice |

Passa tramite **Preferences > Video > Media Backend**. Riavvia dopo la modifica.

### Controlli video Android

Nell'app Android, le impostazioni video sono accessibili tramite il pannello impostazioni (pulsante Menu ☰):

- **Video Format** — Seleziona risoluzione (1920×1080, 1280×720, 640×480) e frame rate (30fps, 60fps). Risoluzione/frame rate più bassi se il video è a scatti.
- **Controls** — Cursori in tempo reale per **brightness**, **contrast** e **hue**
- **Rotate/Flip** — Ruota 90° CW/CCW, capovolgi orizzontalmente/verticalmente. Utile quando il dispositivo KVM è montato capovolto o di lato

Le impostazioni persistono tra le sessioni — le configuri solo una volta.

### Controlli video iPadOS

Su iPadOS, i controlli video sono accessibili dalla barra degli strumenti inferiore:

- **Resolution Switching** — Tocca il pulsante **Video** (mostra la risoluzione corrente) per scegliere: 2160p (4K), 1080p (predefinito), 720p o 480p. Risoluzione più bassa per migliori prestazioni su connessioni lente.
- **Zoom Mode** — Tocca **Zoom** per entrare in modalità zoom, poi pizzica con due dita per ingrandire. Un indicatore zoom mostra il livello corrente (es. `2.5x`). Quando ingrandito, trascina con un dito per panoramica. Tocca di nuovo Zoom per uscire.
- **Fullscreen** — Tocca **Fullscreen** per nascondere la barra degli strumenti ed estendere il video a tutto lo schermo. Tocca il pulsante freccia in alto a sinistra per uscire.
- **Screen Rotation** — Tocca **Rotate** per scorrere le modalità di correzione orientamento (Normal, 90° CW, 180°, 90° CCW). Utile quando il dongle KVM-Go è montato di lato o capovolto. La rotazione si applica sia all'anteprima live sia alle acquisizioni salvate.

All'avvio della fotocamera, appare un indicatore di caricamento «Starting Camera...». Se nessuna fotocamera è connessa ma i permessi sono concessi, viene mostrata un'immagine guida.

---

## 4. Audio dal bersaglio

Il chip di acquisizione HDMI estrae l'audio dal segnale HDMI e lo presenta come input audio USB all'host.

### Abilitare l'audio

1. Clicca l'icona audio o apri le impostazioni audio
2. Abilita l'acquisizione audio
3. Seleziona il dispositivo di input corretto (es. «OpenterfaceA»)
4. Seleziona il dispositivo di output del tuo host

L'audio è disabilitato per impostazione predefinita sulla maggior parte delle piattaforme.

### Controllo volume

- **Lato bersaglio:** Regola sul computer bersaglio
- **Lato host:** Usa il mixer audio dell'OS host per il dispositivo di acquisizione

### Monitoraggio audio iPadOS

L'app iPadOS permette di ascoltare l'audio del PC bersaglio tramite altoparlanti o cuffie dell'iPad:

- Tocca il pulsante **Audio** (icona altoparlante) nella barra degli strumenti per attivare/disattivare il monitoraggio
- **Stati icona:** altoparlante barrato grigio = non autorizzato, altoparlante barrato rosso = disattivato, altoparlante verde con onde = attivato
- Al primo utilizzo, l'app richiede il permesso microfono
- L'audio viene riprodotto tramite altoparlanti iPad o cuffie/Bluetooth collegati
- **Durante la registrazione:** l'audio di monitoraggio viene temporaneamente disattivato per evitare feedback, ma l'audio viene comunque acquisito nel file di registrazione

---

## 5. Acquisizione schermo e registrazione

### Screenshot

Clicca l'icona fotocamera nella barra degli strumenti. Le immagini vengono salvate nella cartella media predefinita del tuo OS:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Camera captures folder (tramite menu Camera)

### Registrazione

Clicca il pulsante registra per avviare/interrompere la registrazione del flusso video e audio del bersaglio. Appare un timer durante la registrazione attiva.

**Impostazioni registrazione:**
- Formato output (MP4, AVI, MOV, MKV)
- Bitrate video, codec audio
- Directory output

### Acquisizione schermo e registrazione Android

Su Android, accesso tramite il pannello impostazioni:

- **Screen Capture** — Tocca per salvare un'istantanea del frame video corrente nella cartella media predefinita del dispositivo. Richiede **Storage permission**.
- **Record Video** — Tocca per avviare/interrompere la registrazione. Appare un indicatore di registrazione rosso con timer in alto. Il video viene salvato nella cartella media predefinita del dispositivo.

**Casi d'uso:** registrare il processo di avvio del bersaglio, catturare messaggi di errore, documentare passaggi di configurazione.

### Acquisizione schermo e registrazione iPadOS

**Screenshot:** Tocca il pulsante **Screenshot** (icona fotocamera) nella barra degli strumenti. L'app acquisisce un frame ad alta risoluzione, corregge l'orientamento e salva come JPEG.

**Video Recording:** Tocca **Record** per avviare/interrompere. Dopo l'interruzione, l'app mostra i dettagli della registrazione (durata e dimensione file).

| Impostazione | Valore |
|---|---|
| **Video codec** | H.264 at 30 fps |
| **Resolution** | Corrisponde al dispositivo di acquisizione (tipicamente 1920×1080) |
| **Audio codec** | AAC at 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Posizioni file:**
- **App Documents:** `Documents/Recordings/` — sfoglia tramite app File > Sul mio iPad > Openterface KVM > Recordings
- **Photos App:** Se il permesso Libreria foto è concesso e abilitato nelle impostazioni
- **Nomi file:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (screenshot) o `.mov` (registrazioni)

**Casi d'uso:** registrare il processo di avvio del bersaglio, catturare messaggi di errore, documentare passaggi di configurazione.

---

## 6. Indicatori di connessione

| Indicatore | Verde | Arancione | Grigio |
|-----------|-------|--------|------|
| HDMI | Segnale rilevato | Nessun segnale | Sconosciuto |
| Keyboard | Connesso | Non trovato | Sconosciuto |
| Mouse | Connesso | Non trovato | Sconosciuto |

### Switch USB

Il toggle switch USB mostra se la porta commutabile è instradata verso **Host** o **Target**.

---

## 7. Prevenire il salvaschermo

Abilita **Prevent Screen Saver** (tramite menu Edit/Device o barra degli strumenti) per inviare eventi periodici che mantengono sveglio il display bersaglio.

---

## 8. Modalità schermo intero

Usa il pulsante schermo intero standard per riempire il display con l'area video, nascondendo l'interfaccia.

---

## Prossimi passi

- **[Funzioni avanzate →](03-advanced-features.md)** — EDID, firmware, macro, script, diagnostiche
- **[Risoluzione dei problemi →](04-troubleshooting.md)** — Problemi comuni e soluzioni
