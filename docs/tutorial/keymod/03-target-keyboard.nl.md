---
title: "KeyMod Tutorial - Doelbesturingssysteem"
description: Stel het doelbesturingssysteem zo in dat KeyMod de juiste toetstoewijzingen naar Windows-, macOS- of Linux-computers verzendt. KeyMod verzendt… Openterface.
keywords: "KeyMod doelbesturingssysteem, sleuteltoewijzing, modificatietoetsen, Unicode-invoer"
---

# 3. Doelbesturingssysteem

KeyMod verzendt toetsaanslagen die zich aanpassen aan het besturingssysteem van de doelcomputer. Als u dit correct configureert, zorgt u ervoor dat de juiste sleutels op het doel aankomen.

## Hoe in te stellen

Tik op het **OS-pictogram** in de kopbalk om de kiezer te openen:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Doelbesturingssysteemkiezer — kies macOS, Windows of Linux.</em></p>
</div>

> **Opmerking:** Er is nog geen screenshot hiervan. De OS-kiezer is een dialoogvenster met drie pictogramknoppen (macOS, Windows, Linux) die verschijnen wanneer u op het OS-pictogram in de kopbalk tikt.

## Wat het verandert

| Doel | Sleuteltoewijzing |
|--------|-------------|
| **Windows** | Win-sleutel toegewezen aan Windows-sleutel; standaard PC-modifier-gedrag |
| **macOS** | Win-sleutel toegewezen aan Cmd; Alt toegewezen aan Option; correcte snelkoppelingslabels |
| **Linux** | Super/Meta sleutelgedrag |

Dit heeft gevolgen voor:
- **Snelkoppelingslabels** weergegeven in Snelkoppelingshub
- **Wijzigingstoetstoewijzing** (Win toetsgedrag)
- **Unicode-invoermethode** gebruikt voor niet-ASCII-tekens

## Unicode-tekens

Niet-ASCII-tekens (Chinees, Japans, emoji) vereisen besturingssysteemspecifieke invoermethoden:

| Besturingssysteem | Werkwijze |
|---|---|
| **Windows** | Alt+NumPad hexadecimale Unicode-invoer |
| **Linux** | Ctrl+Shift+U gevolgd door hexadecimale code |
| **macOS** | Option+hexadecimale ingang |

Als Unicode-tekens onjuist op het doel verschijnen, controleer dan of het doelbesturingssysteem correct is ingesteld.

## Toetsenbordmodi (geen lay-outs)

KeyMod biedt drie toetsenbordmodi om te typen:

| Modus | Hoe u kunt overstappen |
|---|---|
| **ABC** (letters) | Tik op de **ABC**-toets |
| **123** (cijfers) | Tik op de **123**-toets |
| **!?#** (symbolen) | Tik op de **!?#**-toets |

Dit zijn invoermethode-schakelaars binnen de app, geen fysieke toetsenbordindelingen. KeyMod verzendt momenteel standaard USB HID scancodes (Amerikaanse QWERTY-basis). Als u een niet-Amerikaans fysiek toetsenbord op het doel gebruikt, ziet u mogelijk kleine tekenverschillen voor symbolen op dezelfde sleutelposities.

## Volgende stappen

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Typen, modificaties, touchpad en tekstinvoer
- **[Shortcut Hub →](04-shortcuts.md)** — Op profiel gebaseerde sneltoetsen