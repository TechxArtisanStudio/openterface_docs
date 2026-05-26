---
title: "KeyMod Tutorial – Makros"
description: "Zeichnen Sie automatisierte Tastenfolgen mit KeyMod Makros auf und spielen Sie sie ab, einschließlich Modifikatoren, Verzögerungen und Zeitplanung."
keywords: "KeyMod Makros, automatisierte Tastenanschläge, Makroplaner, Makro-Tokens, Tastensequenzen"
---

# 5. Makros

Mit einem einzigen Tastendruck können Sie automatisierte Tastenfolgen aufzeichnen und wiedergeben.

## Was ist ein Makro?

Ein Makro ist eine **aufgezeichnete Folge von Tastenanschlägen**, die Sie wiedergeben können. Zum Beispiel:
- Geben Sie Ihre E-Mail-Signatur mit einem Fingertipp ein
- Senden Sie nacheinander `Ctrl+Shift+Esc` gefolgt von `Alt+D`
- Automatisieren Sie eine mehrstufige Befehlssequenz mit Verzögerungen zwischen den Schritten

## Makro-Token-Syntax

| Token | Bedeutung |
|---|---|
| `<CTRL>` ... `</CTRL>` | Steuerung halten/freigeben |
| `<SHIFT>` ... `</SHIFT>` | Halten/Loslassen Shift |
| `<ALT>` ... `</ALT>` | Halten/Loslassen Alt/Option |
| `<CMD>` ... `</CMD>` | Befehl/Win/Super gedrückt halten/freigeben |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Sondertasten |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Pfeiltasten |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Navigationstasten |
| `<F1>` bis `<F12>` | Funktionstasten |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pausen |

**Beispiel:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Dies öffnet ein Terminal (Ctrl+Alt+T), wartet 1 Sekunde, gibt dann `ls -la` ein und drückt die Eingabetaste.

## Erstellen eines Makros

1. Wechseln Sie in den **Makros**-Modus
2. Tippen Sie auf **"+"**, um ein neues Makro zu erstellen
3. Geben Sie einen **Makronamen/eine Bezeichnung** ein.
4. Erstellen Sie die Makrobefehlssequenz mithilfe des Textfelds und fügen Sie schnell Token-Chips ein
5. Passen Sie das **Send Char Interval** (Verzögerung zwischen Tastenanschlägen in Millisekunden) an.
6. Tippen Sie auf **„Speichern“**

## Nächste Schritte

- **[← Shortcut Hub](04-shortcuts.md)** – Profilbasierte Tastaturkürzel
- **[Voice Input →](06-voice-input.md)** – Transkription von der Stimme zur Tastatur