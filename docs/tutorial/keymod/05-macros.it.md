---
title: "KeyMod Tutorial - Macro"
description: "Registra e riproduci sequenze di tasti automatizzate con macro KeyMod, inclusi modificatori, ritardi e pianificazione. Documentazione Openterface:… Openterface."
keywords: "KeyMod macro, sequenze di tasti automatizzate, pianificatore di macro, token macro, sequenze di tasti"
---

# 5. Macro

Registra e riproduci sequenze di tasti automatizzate con un solo tocco.

## Cos'è una macro?

Una macro è una **sequenza registrata di sequenze di tasti** che è possibile riprodurre. Ad esempio:
- Digita la tua firma e-mail con un solo tocco
- Inviare `Ctrl+Shift+Esc` seguito da `Alt+D` in sequenza
- Automatizza una sequenza di comandi a più passaggi con ritardi tra i passaggi

## Sintassi del token macro

| Gettone | Significato |
|---|---|
| `<CTRL>` ... `</CTRL>` | Tieni premuto/rilascia controllo |
| `<SHIFT>` ... `</SHIFT>` | Tieni premuto/rilascia Shift |
| `<ALT>` ... `</ALT>` | Tieni premuto/rilascia Alt/Option |
| `<CMD>` ... `</CMD>` | Tieni premuto/rilascia Comando/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Tasti speciali |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Tasti freccia |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Tasti di navigazione |
| da `<F1>` a `<F12>` | Tasti funzione |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pause |

**Esempio:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Si apre un terminale (Ctrl+Alt+T), attende 1 secondo, quindi digita `ls -la` e preme Invio.

## Creazione di una macro

1. Vai alla modalità **Macro**
2. Tocca **"+"** per creare una nuova macro
3. Inserisci un **nome/etichetta macro**
4. Costruisci la sequenza di comandi macro utilizzando il campo di testo e i chip token a inserimento rapido
5. Regola l'**Intervallo di invio caratteri** (ritardo tra la pressione dei tasti in millisecondi)
6. Tocca **"Salva"**

## Passaggi successivi

- **[← Shortcut Hub](04-shortcuts.md)**: scorciatoie da tastiera basate sul profilo
- **[Voice Input →](06-voice-input.md)** — Trascrizione da voce a tastiera