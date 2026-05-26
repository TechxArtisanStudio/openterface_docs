---
title: "KeyMod Tutorial - Gamepad"
description: Usa KeyMod come controller di gioco virtuale con layout personalizzabili per giochi, emulazione retrò e test di giochi. Trasforma il tuo telefono in un…
keywords: "KeyMod gamepad, controller virtuale, controller di gioco, mappatura WASD, levetta analogica"
---

# 8. Gamepad

Trasforma il tuo telefono in un controller di gioco virtuale per giochi, emulazione retrò e test di giochi.

## La disposizione

Il gamepad fornisce un layout completo del controller con D-pad, pulsanti di azione, pulsanti dorsali, levette analogiche e Start/Seleziona.

| Controllo | Come |
|---|---|
| D | Tocca le frecce direzionali |
| Pulsanti di azione (A, B, X, Y) | Toccali |
| Bottoni sulle spalle | Tocca L1, L2, R1, R2 in alto |
| Stick analogici | Tocca e trascina i cerchi del bastoncino |
| Avvia / Seleziona | Tocca i pulsanti |

## Sistema preimpostato (v7)

KeyMod 0.15 ha introdotto un **sistema gamepad basato su preimpostazioni**. Invece di layout integrati fissi, le configurazioni del gamepad vengono ora salvate come **preimpostazioni** che puoi scorrere, importare ed esportare.

### Gestione delle preimpostazioni

- **Tocca il chip Preimpostato** nella barra degli strumenti per scorrere i layout disponibili
- **Premi a lungo il chip Preset** per l'elenco completo dei preset con opzioni di importazione, aggiunta modulo ed esportazione
- Il layout **emu-6** in bundle viene fornito come preimpostazione iniziale (`preset_default`)
- Le preimpostazioni sono file condivisibili JSON utilizzando il layout **schema v7**

### Aggiunta di moduli

Dal menu preimpostato, puoi aggiungere nuovi moduli a qualsiasi layout:

- **D-Pad / Stick**: aggiunge un modulo per il pollice sinistro (`stick_left`, `stick_left_2`, ecc.)
- **Touchpad**: aggiunge un touchpad (`touchpad_1`, `touchpad_2`, ecc.) con pulsanti del mouse L/M/R in bundle
- **Pulsanti**: aggiungi pulsanti frontali, pulsanti dorsali o grilletti

## Personalizzazione

- **Configura qualsiasi modulo**: tocca un modulo per aprire la relativa finestra di dialogo di configurazione e regolarne il comportamento
- **Modalità analogica vs chiave**: gli stick possono essere configurati come `STICK_KEY` (tasti di direzione digitali) o `STICK_MOUSE` (movimento relativo del puntatore/mouse)
- **Mappatura WASD**: assegna i tasti WASD alla levetta sinistra per i giochi su PC
- **Button/ridimensionamento dimensione stick**: regola le dimensioni in base all'area touch preferita
- **Immagine di sfondo**: personalizza lo sfondo del gamepad (incorporato in preimpostazioni condivise come base64, fino a 6 MiB)
- **Feedback tattile**: vibrazione alla pressione di 18' (solo pulsanti frontali, non clic del mouse)
- **Gyro**: abilita il giroscopio del dispositivo per spostare il puntatore host mentre lo schermo del gamepad è attivo

### Modello del modulo

Ogni controllo sullo schermo è un **modulo** con tre livelli:

| Strato | Cosa definisce |
|---|---|
| **Slot/identità** | Quale controllo sull'area di disegno (ad es. `stick_left`, `stick_right`, `touchpad_1`) |
| **Comportamento (tipo)** | Cosa riceve l'ospitante: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parametri** | Accordatura sullo stesso modulo: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, misura, colore |

### Stick analogici

- **Levetta sinistra → Tasti tastiera:** Mappa sui tasti freccia con supporto diagonale. Configurabile su WASD nella configurazione del modulo.
- **Levetta destra → Movimento del mouse:** modalità `STICK_MOUSE` con sensibilità configurabile (`stickMouseSensitivity`), zona morta per evitare derive.
- **Isteresi:** le soglie di attivazione (0,6) e disattivazione (0,4) prevengono le vibrazioni dei tasti al limite.

### Touchpad

- **Supporto multi-touchpad**: aggiungi più touchpad a un singolo layout (`touchpad_1`, `touchpad_2`, ecc.)
- **Impronta quadrata** per impostazione predefinita con ridimensionamento premendo a lungo
- **Pulsanti del mouse in bundle** (L/M/R) condivisi su tutti i touchpad
- **Ridimensionamento del mouse button**: premi a lungo un touchpad per regolare la **dimensione del mouse button**, oppure premi a lungo un singolo mouse button per **questa dimensione button**

> **Nota:** il protocollo del gamepad HID è in fase di sviluppo attivo. Il supporto di base button funziona; la precisione dello stick analogico può variare.

## Risoluzione dei problemi

### Lo stick analogico non risponde

| Sintomo | Soluzione |
|---|---|
| **Il bastone non produce azione** | Controllare la configurazione del modulo. Verificare che lo stick non sia bloccato nella zona morta (area centrale). Controlla le soglie di isteresi: per attivarsi, lo stick deve spostarsi oltre 0,6 di attivazione. |
| **Pulsanti che inviano chiavi errate** | Aprire la configurazione del modulo e verificare l'assegnazione dei tasti di button. Tocca button per aprire il popup di configurazione e correggere la mappatura. |
| **Touchpad pulsanti del mouse che non fanno clic** | Assicurati che i pulsanti L/M/R in bundle siano presenti nella preimpostazione. L'aggiunta di un touchpad aggiunge automaticamente i pulsanti del mouse condivisi. Controllare la configurazione del modulo per il tasto HID assegnato. |

## Passaggi successivi

- **[← AI Integration](07-ai.md)** — Miglioramento del testo assistito dall'intelligenza artificiale e assistente ai comandi
- **[Numpad →](09-numpad.md)** — Tastierino numerico per l'immissione dei dati