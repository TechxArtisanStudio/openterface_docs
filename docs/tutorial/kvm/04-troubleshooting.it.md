# Tutorial KVM 04 — Risoluzione dei problemi

Problemi comuni e soluzioni per i dispositivi Openterface KVM.

---

## Dispositivo non rilevato

### Sintomi
- «No devices found» nel menu dispositivi
- Gli indicatori tastiera e mouse mostrano arancione o grigio
- La porta seriale mostra «N/A»

### Diagnosi

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Atteso: `534d:2109` (acquisizione HDMI) e `1a86:7523` o `1a86:fe0c` (seriale).

**macOS:** Menu Apple > Informazioni su questo Mac > Report di sistema > Hardware > USB — cercare Openterface.

**Windows:** Gestione dispositivi > «Dispositivi USB» e «Porte (COM e LPT)» — CH340 deve comparire come «USB-SERIAL CH340 (COMx)».

### Soluzioni

| Problema | Soluzione |
|---------|-----|
| Dispositivo assente da lsusb/Report di sistema | Provare un altro cavo/porta USB. Richiede USB 2.0+ |
| Dispositivo visibile ma senza nodi | Controllare regole udev (Linux) o reinstallare i driver (Windows) |
| Permesso negato | Aggiungere l'utente ai gruppi `dialout` e `video` (Linux) |
| Rilevato poi scompare | `brltty` reclama la porta seriale (Linux) — vedi sotto |

---

## Conflitto BrlTTY (Linux) {#brltty-conflict-linux}

**La causa più comune di malfunzionamento tastiera/mouse su Linux.**

Il servizio `brltty` (terminale Braille) reclama dispositivi USB seriali, incluso il chip CH9329/CH32V208.

### Correzione
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Nessun video / Schermo nero

### Passaggi

1. **Verificare il cavo HDMI** — ben collegato a entrambe le estremità
2. **Verificare il bersaglio** — sta inviando HDMI (testare con un monitor normale)
3. **Provare un altro cavo HDMI**
4. **Ricollegare il dispositivo** — l'app gestisce eventi hot-plug
5. **Verificare il rilevamento del chipset video:** Supportati: MS2109, MS2109S, MS2130S

### Selezione backend (Qt)

Se un backend mostra schermo nero, provarne un altro in **Preferenze > Video > Backend multimediale**:
- **FFmpeg** — Più affidabile (consigliato)
- **GStreamer** — Solo Linux
- **Qt Multimedia** — Fallback Windows

### Problemi GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Provare un sink diverso:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Incompatibilità EDID

Se il bersaglio non riconosce l'EDID, potrebbe non inviare una risoluzione compatibile. Provare a cambiare la risoluzione di uscita del bersaglio o modificare l'EDID nelle impostazioni display dell'app.

---

## Tastiera/mouse non risponde

### Passaggi

1. **Verificare l'interruttore USB** — assicurarsi che sia su **Target**, non Host
2. **Verificare lo stato della porta seriale** — deve mostrare un nome porta, non «N/A»
3. **Provare a cambiare il baud rate** — 9600 o 115200
4. **Verificare il chipset di controllo** — Supportati: CH9329, CH32V208
5. **Verificare il monitoraggio CTS** — L'app monitora le linee Clear-To-Send per eventi HID

### Problemi specifici del mouse

- **Modalità relativa su macOS:** Richiede permesso Accessibilità. Controllare **Impostazioni di sistema > Privacy e sicurezza > Accessibilità**
- **Modalità assoluta:** Verificare che le proporzioni corrispondano al display bersaglio
- **Lag del mouse:** Provare un preset prestazioni più alto o aumentare il baud rate
- **Conflitti porta seriale (Linux):** Chiudere altre app che usano la porta: `sudo lsof /dev/ttyUSB0`

---

## L'audio non funziona

### Passaggi

1. **Abilitare l'audio** tramite l'icona audio > Enable Audio
2. **Verificare il permesso microfono** — Impostazioni di sistema > Privacy e sicurezza > Microfono (macOS)
3. **Selezionare il dispositivo di input corretto** — «OpenterfaceA» o il nome del dispositivo di acquisizione
4. **Selezionare il dispositivo di output corretto** — altoparlanti o cuffie
5. **Verificare l'output audio HDMI del bersaglio** — il bersaglio è configurato per inviare audio via HDMI?

---

## Problemi driver USB seriale

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Se necessario, installare il driver WCH CH34x da [WCH CH34xDriver su GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Abilitarlo in **Impostazioni di sistema > Generali > Elementi di accesso e estensioni > Estensioni driver**.

### Windows

Se il chip seriale non compare in Gestione dispositivi, installare il driver CH340/CH341. L'installer di solito lo include; per build portabili, scaricarlo separatamente.

### Linux

Il driver CH340 (modulo `ch341`) è integrato nel kernel:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Aggiornamento firmware non riuscito

### Stabilità USB

- Non scollegare durante il flash
- Non sospendere il computer host
- Usare una porta USB diretta (evitare hub)

### Recupero

1. Ciclo di alimentazione: scollegare USB, attendere 10 secondi, ricollegare
2. Rientrare in modalità ISP (alcuni dispositivi: tenere premuto il pulsante all'accensione)
3. Usare Serial Reset Tool per riflashare il bootloader
4. Contattare il supporto se il dispositivo è bloccato

---

## Problemi di prestazioni

### Alto utilizzo CPU

1. **Abilitare l'accelerazione hardware** — Preferenze > Video > Accelerazione hardware (VAAPI, V4L2-M2M)
2. **Ridurre la risoluzione** — 720p usa significativamente meno CPU di 1080p
3. **Ridurre il frame rate** — 15 fps dimezza il carico di decodifica
4. **Cambiare backend** — FFmpeg con accelerazione HW usa tipicamente meno CPU di GStreamer

### Frame persi

Controllare il contatore FPS nella barra di stato. Se il FPS effettivo è sotto l'obiettivo, la pipeline è un collo di bottiglia. Abilitare il frame dropping nel processore frame FFmpeg per privilegiare una riproduzione fluida.

---

## Logging e diagnostica

### Abilitare il logging

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferenze > Log > impostare livello di log e percorso file

### Console seriale (Qt)

Aprire tramite **Device > Serial Port Debug** — mostra messaggi del protocollo seriale in tempo reale con filtri per Keyboard, Mouse, HID, Chip Info.

---

## Problemi specifici della piattaforma

### Linux: plugin piattaforma Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: problemi video Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: driver CH340

Se l'installazione del driver fallisce: disabilitare temporaneamente l'applicazione della firma driver, poi installare manualmente da Gestione dispositivi.

### Raspberry Pi: video a scatti

Su Pi 3 o Pi 4 con poca memoria:
1. Ridurre la risoluzione a 720p
2. Usare il backend FFmpeg (non GStreamer)
3. Usare 9600 baud per stabilità seriale

---

## Problemi specifici Android

### Dispositivo non rilevato

**Sintomo:** L'anteprima video mostra un placeholder, non lo schermo del bersaglio.

1. **Verificare la connessione USB OTG** — scollegare e ricollegare il cavo
2. **Verificare il supporto OTG** — provare a collegare una chiavetta USB per confermare che il telefono supporta OTG
3. **Verificare il dispositivo KVM** — è acceso? Ci sono luci indicatore?
4. **Provare un altro cavo** — alcuni adattatori OTG sono difettosi
5. **Riavviare l'app** — chiuderla completamente (scorrere dalle app recenti) e riaprirla
6. **Verificare il permesso USB** — se una finestra di sistema ha chiesto accesso USB, assicurarsi di aver toccato **Allow**

### Nessun video

**Sintomo:** Il dispositivo è rilevato ma lo schermo è nero o bloccato.

1. **Verificare il cavo HDMI** — l'HDMI del computer bersaglio è ben collegato all'ingresso HDMI del KVM?
2. **Verificare l'output del bersaglio** — il computer bersaglio mostra effettivamente qualcosa?
3. **Provare una risoluzione più bassa** — aprire impostazioni → **Video Format** → scegliere una risoluzione inferiore
4. **Verificare il permesso fotocamera** — Impostazioni Android → App → Openterface → Permessi → assicurarsi che Fotocamera sia consentita
5. **Riavviare l'app**

### Mouse non risponde

**Sintomo:** Il video funziona ma toccare lo schermo non ha effetto sul bersaglio.

1. **Verificare la connessione USB per HID** — aprire impostazioni → **Device** e confermare che il dispositivo è attivo
2. **Provare un'altra modalità mouse** — passare da Absolute a Relative o viceversa
3. **Disconnettere e riconnettere** — usare il pulsante rosso **Disconnect Device**, poi riconnettere
4. **Verificare il computer bersaglio** — riconosce una tastiera/mouse USB? Provare a scollegare e ricollegare il cavo USB lato bersaglio

### La tastiera non invia tasti

**Sintomo:** Il mouse funziona ma digitare non ha effetto.

1. **Assicurarsi che la tastiera sia aperta** — toccare il pulsante tastiera
2. **Verificare la connessione seriale** — aprire impostazioni → **Device** e confermare che è attiva
3. **Verificare il baud rate** — aprire impostazioni → **Baudrate** e assicurarsi che corrisponda al dispositivo (115200 predefinito)
4. **Verificare il layout tastiera** — assicurarsi che il layout corretto (US, JP, DE) sia selezionato

### L'app si blocca o si congela

1. **Chiudere e riavviare** l'app
2. **Ridurre risoluzione video e frame rate** — impostazioni elevate possono sovraccaricare dispositivi con poca memoria
3. **Verificare lo spazio di archiviazione disponibile** — poco spazio può causare instabilità
4. **Aggiornare l'app** — cercare una versione più recente su Google Play o GitHub Releases

### Screenshot o registrazioni non salvate

1. **Verificare il permesso Archiviazione** — Impostazioni Android → App → Openterface → Permessi → Archiviazione
2. **Verificare lo spazio di archiviazione disponibile** sul dispositivo
3. Registrazioni e screenshot vengono salvati nella cartella media predefinita del dispositivo

### Raccolta log (Android)

Se la risoluzione standard non aiuta, raccogliere i log da condividere con i maintainer:

```bash
adb logcat | grep -i openterface > openterface.log
```

Includere questo file aprendo un issue GitHub.

---

## Problemi specifici iPadOS

> **Nota:** iPadOS è supportato solo su **KVM-Go**. Se usi Mini-KVM o uConsole KVM Extension, l'app iPadOS non funzionerà.

### Bluetooth non si connette

**Sintomo:** Il pulsante BLE non diventa verde, o nessun dispositivo compare nell'elenco di scansione.

1. **Verificare che Bluetooth sia attivo** sull'iPad — Impostazioni > Bluetooth
2. **Assicurarsi che KVM-Go sia acceso** — il dongle deve essere collegato alla porta USB del PC bersaglio
3. **Avvicinare l'iPad** al dongle KVM-Go — la portata BLE è tipicamente fino a 10 metri
4. **Verificare il permesso Bluetooth dell'iPad** — Impostazioni > Privacy e sicurezza > Bluetooth > assicurarsi che Openterface sia consentito
5. **Toccare Refresh** nella schermata BLE per riavviare la scansione
6. **Verificare il permesso Bluetooth dell'app Openterface** — se negato al primo avvio, riabilitarlo in Impostazioni

### Nessuna anteprima video

**Sintomo:** BLE è connesso ma lo schermo è nero o mostra un'immagine guida.

1. **Verificare la connessione HDMI** — l'output HDMI del PC bersaglio è ben collegato all'ingresso HDMI del KVM-Go?
2. **Verificare l'output del bersaglio** — il computer bersaglio mostra effettivamente qualcosa?
3. **Provare una risoluzione più bassa** — toccare il pulsante Video e selezionare una risoluzione inferiore (720p o 480p)
4. **Verificare il permesso fotocamera** — Impostazioni > Privacy e sicurezza > Fotocamera > assicurarsi che Openterface sia consentito
5. **Riavviare l'app** — scorrere dalle app recenti e riaprire

### Mouse/touch non risponde

**Sintomo:** Il video funziona ma toccare lo schermo non ha effetto sul bersaglio.

1. **Verificare la connessione BLE** — il pulsante BLE deve essere verde con un valore RSSI
2. **Provare un'altra modalità mouse** — alternare tra Pan Mode e iPencil Mode
3. **Disconnettere e riconnettere** — aprire la schermata BLE, toccare Disconnect, poi Connect again
4. **Verificare il computer bersaglio** — riconosce KVM-Go come tastiera/mouse USB?

### La tastiera non invia tasti

**Sintomo:** Il mouse funziona ma digitare non ha effetto.

1. **Assicurarsi che la tastiera flottante sia aperta** — toccare il pulsante Keyboard
2. **Verificare la connessione BLE** — l'input passa via Bluetooth, non USB
3. **Verificare la modalità tastiera** — provare a passare tra Normal e Game mode
4. **Tastiera esterna:** se si usa una tastiera fisica iPad, verificare che iPadOS instradi gli eventi tastiera all'app

### L'audio non funziona

**Sintomo:** Il video funziona ma non si sente il PC bersaglio tramite l'iPad.

1. **Verificare il pulsante Audio** — deve mostrare un'icona altoparlante verde
2. **Verificare il permesso microfono** — Impostazioni > Privacy e sicurezza > Microfono > assicurarsi che Openterface sia consentito
3. **Verificare il volume dell'iPad** — assicurarsi che l'iPad non sia silenziato o al volume minimo
4. **Verificare l'output audio del bersaglio** — il PC bersaglio è configurato per inviare audio via HDMI?

### L'app si blocca o si congela

1. **Chiudere e riavviare** l'app
2. **Ridurre la risoluzione video** — alta risoluzione può stressare iPad più vecchi
3. **Verificare lo spazio di archiviazione disponibile** — poco spazio può causare instabilità
4. **Aggiornare l'app** — cercare una versione più recente sull'App Store

### Screenshot o registrazioni non salvate

1. **Verificare il permesso Libreria foto** — Impostazioni > Privacy e sicurezza > Foto > assicurarsi che Openterface sia consentito
2. **Verificare lo spazio di archiviazione disponibile** sull'iPad
3. **Sfogliare tramite app File** — le registrazioni vengono salvate in `Documents/Recordings/` anche senza accesso alla Libreria foto

---

## Reset di fabbrica

1. Usare Serial Reset Tool da Settings (macOS) o menu Device (Qt)
2. Reimposta il chip HID ai valori predefiniti di fabbrica
3. Ricollegare il dispositivo dopo il reset

## Recupero connessione

Le applicazioni gestiscono il recupero automatico per:
- Disconnessione/riconnessione dispositivo (hot-plug per USB, riconnessione BLE per iPadOS)
- Timeout di comunicazione
- Fallback chipset (MS2109 → MS2109S → MS2130S)
- Recupero porta seriale
- Riconnessione BLE automatica iPadOS (fino a 3 tentativi con ritardo di 2 secondi)

## Invio segnalazioni difetti

1. Abilitare il logging su file
2. Riprodurre il problema
3. Inviare tramite [Issue GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) o e-mail a info@techxartisan.com
