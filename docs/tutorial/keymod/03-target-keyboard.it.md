---
title: "KeyMod Tutorial - Sistema operativo di destinazione"
description: Imposta il sistema operativo di destinazione in modo che KeyMod invii la mappatura dei tasti corretta ai computer Windows, macOS o Linux. KeyMod invia…
keywords: "KeyMod sistema operativo di destinazione, mappatura dei tasti, tasti di modifica, input Unicode"
---

# 3. Sistema operativo di destinazione

KeyMod invia sequenze di tasti che si adattano al sistema operativo del computer di destinazione. Configurarlo correttamente garantisce che le chiavi giuste arrivino al bersaglio.

## Come impostare

Tocca l'**icona del sistema operativo** nella barra dell'intestazione per aprire il selettore:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Selettore sistema operativo di destinazione: scegli macOS, Windows o Linux.</em></p>
</div>

> **Nota:** Non è ancora disponibile alcuno screenshot per questo. Il selettore del sistema operativo è una finestra di dialogo con tre pulsanti icona (macOS, Windows, Linux) che viene visualizzata quando si tocca l'icona del sistema operativo nella barra dell'intestazione.

## Cosa cambia

| Obiettivo | Mappatura tasti |
|--------|-------------|
| **Windows** | Tasto Win mappato sul tasto Windows; Comportamento standard del modificatore PC |
| **macOS** | Tasto Win mappato su Cmd; Alt mappato su Option; etichette di scelta rapida corrette |
| **Linux** | Super/Meta comportamento dei tasti |

Ciò influisce:
- **Etichette di scelta rapida** mostrate nell'Hub delle scorciatoie
- **Mappatura tasti modificatori** (comportamento tasti Win)
- **Metodo di input Unicode** utilizzato per caratteri non ASCII

## Caratteri Unicode

I caratteri non ASCII (cinese, giapponese, emoji) richiedono metodi di input specifici del sistema operativo:

| Sistema operativo | Metodo |
|---|---|
| **Windows** | Alt+NumPad ingresso Unicode esadecimale |
| **Linux** | Ctrl+Shift+U seguito dal codice esadecimale |
| **macOS** | Option+input esadecimale |

Se i caratteri Unicode vengono visualizzati in modo errato sulla destinazione, verificare che il sistema operativo di destinazione sia impostato correttamente.

## Modalità tastiera (non layout)

KeyMod fornisce tre modalità tastiera per la digitazione:

| Modalità | Come cambiare |
|---|---|
| **ABC** (lettere) | Tocca il tasto **ABC** |
| **123** (numeri) | Tocca il tasto **123** |
| **!?#** (simboli) | Tocca il tasto **!?#** |

Si tratta di attivazioni/disattivazione del metodo di input all'interno dell'app, non di layout di tastiera fisica. KeyMod attualmente invia codici di scansione standard USB HID (base QWERTY USA). Se utilizzi una tastiera fisica non statunitense sulla destinazione, potresti notare leggere discrepanze tra i caratteri per i simboli nelle stesse posizioni dei tasti.

## Passaggi successivi

- **[← Keyboard & Mouse](02-keyboard-mouse.md)**: digitazione, modificatori, touchpad e immissione di testo
- **[Shortcut Hub →](04-shortcuts.md)**: scorciatoie da tastiera basate sul profilo