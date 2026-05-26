---
title: "KeyMod Tutorial – Zielbetriebssystem"
description: Stellen Sie das Zielbetriebssystem so ein, dass KeyMod die korrekten Tastenzuordnungen an Windows, macOS oder Linux Computer sendet. KeyMod sendet… Openterface.
keywords: "KeyMod Zielbetriebssystem, Tastenzuordnung, Zusatztasten, Unicode-Eingabe"
---

# 3. Zielbetriebssystem

KeyMod sendet Tastenanschläge, die sich an das Betriebssystem des Zielcomputers anpassen. Durch die richtige Konfiguration wird sichergestellt, dass die richtigen Schlüssel am Ziel ankommen.

## So stellen Sie ein

Tippen Sie in der Kopfleiste auf das **Betriebssystemsymbol**, um die Auswahl zu öffnen:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Ziel-Betriebssystemauswahl – wählen Sie macOS, Windows oder Linux.</em></p>
</div>

> **Hinweis:** Hierzu gibt es noch keinen Screenshot. Die Betriebssystemauswahl ist ein Dialogfeld mit drei Symbolschaltflächen (macOS, Windows, Linux), das angezeigt wird, wenn Sie auf das Betriebssystemsymbol in der Kopfleiste tippen.

## Was es ändert

| Ziel | Tastenzuordnung |
|--------|-------------|
| **Windows** | Win-Taste ist der Windows-Taste zugeordnet; Standard-PC-Modifikatorverhalten |
| **macOS** | Win-Taste ist Cmd zugeordnet; Alt wird auf Option abgebildet; Korrekte Verknüpfungsbezeichnungen |
| **Linux** | Super/Meta Tastenverhalten |

Dies betrifft:
- **Shortcut-Beschriftungen** werden im Shortcut Hub angezeigt
- **Modifikatortastenzuordnung** (Tastenverhalten Win)
- **Unicode-Eingabemethode** für Nicht-ASCII-Zeichen

## Unicode-Zeichen

Nicht-ASCII-Zeichen (Chinesisch, Japanisch, Emoji) erfordern betriebssystemspezifische Eingabemethoden:

| Betriebssystem | Methode |
|---|---|
| **Windows** | Alt+NumPad hexadezimale Unicode-Eingabe |
| **Linux** | Ctrl+Shift+U gefolgt von Hex-Code |
| **macOS** | Option+Hex-Eingabe |

Wenn Unicode-Zeichen auf dem Ziel falsch angezeigt werden, überprüfen Sie, ob das Zielbetriebssystem richtig eingestellt ist.

## Tastaturmodi (keine Layouts)

KeyMod bietet drei Tastaturmodi zum Tippen:

| Modus | So wechseln Sie |
|---|---|
| **ABC** (Buchstaben) | Tippen Sie auf die **ABC**-Taste |
| **123** (Zahlen) | Tippen Sie auf die Taste **123** |
| **!?#** (Symbole) | Tippen Sie auf die Taste **!?#** |

Hierbei handelt es sich um Eingabemethoden-Umschaltungen innerhalb der App, nicht um physische Tastaturlayouts. KeyMod sendet derzeit standardmäßige USB HID Scancodes (US-QWERTY-Basis). Wenn Sie auf dem Ziel eine physische Tastatur verwenden, die nicht aus den USA stammt, kann es zu geringfügigen Zeichenkonflikten bei Symbolen auf denselben Tastenpositionen kommen.

## Nächste Schritte

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** – Tippen, Modifikatoren, touchpad und Texteingabe
- **[Shortcut Hub →](04-shortcuts.md)** – Profilbasierte Tastaturkürzel