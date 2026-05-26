---
title: "KeyMod Handleiding"
description: "Volledige handleiding voor het gebruik van de KeyMod-app. Leer hoe u verbinding kunt maken, uw computer kunt bedienen vanaf uw telefoon en de toetsenbord-, muis-, gamepad-, macro's- en spraakinvoermodi kunt gebruiken."
keywords: "KeyMod handleiding, hoe u KeyMod gebruikt, handleiding voor het toetsenbord van de telefoon, KeyMod app handleiding"
---

# KeyMod Handleiding

{% include "partials/keymod-tutorial-slideshow.html" %}

Deze tutorial behandelt de **Android**-versie van de KeyMod-app. De iOS-versie is in ontwikkeling.

## Wat is KeyMod?

KeyMod verandert uw telefoon of tablet in een **universeel invoerapparaat** voor elke computer. Het wordt aangesloten op de hardware **Openterface KeyMod** (een KVM — toetsenbord-, video-, muisschakelaar), die vervolgens de toetsaanslagen, muisbewegingen en gamepad-invoer van uw telefoon naar een doelcomputer verzendt alsof ze van een echt USB-toetsenbord en muis komen.

### Hoe de verbinding werkt```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyMod app)                (CH9329 protocol)              (Windows/macOS/Linux)
De app communiceert met de KeyMod hardware via het **CH9329 protocol** via een seriële verbinding (USB-C op 115200 baud, 8N1 of Bluetooth BLE). Het KeyMod-apparaat verschijnt op de doelcomputer als een standaard USB-toetsenbord en -muis – er zijn geen stuurprogramma's nodig.

### Voor wie is dit?

| Jij bent... | KeyMod helpt u... |
|---|---|
| **Systeembeheerder** | Beheer servers vanaf uw telefoon zonder een reservetoetsenbord en monitor mee te nemen |
| **Presentator / Spreker** | Bedien dia's overal in de kamer, geen clicker nodig |
| **Gamer** | Gebruik je telefoon als gamepad voor retro gaming of als extra controller |
| **Contentmaker** | Activeer snelkoppelingen, macro's en spraakinvoer tijdens het opnemen op een andere machine |
| **Hoofdgebruiker** | Verzend complexe sneltoetsen, tekstfragmenten of automatiseringsreeksen vanaf uw telefoon |
| **Iedereen** | Typ op uw computer vanaf uw bank, bed of aan de andere kant van de kamer |

## Tutorialsecties

| Gids | Beschrijving |
|---|---|
| [1. Getting Started](01-getting-started.md) | Installeer, maak verbinding en kies uw eerste modus (5 minuten) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Typen, modificaties, touchpad en tekstinvoer |
| [3. Target OS](03-target-keyboard.md) | Doelbesturingssysteem in kaart brengen |
| [4. Shortcut Hub](04-shortcuts.md) | Op profiel gebaseerde sneltoetsen voor populaire apps |
| [5. Macros](05-macros.md) | Geautomatiseerde toetsreeksen met vertraging |
| [6. Voice Input](06-voice-input.md) | Spraak-naar-toetsenbord met Whisper AI |
| [7. AI Integration](07-ai.md) | Tekstverfijning en commandoassistent |
| [8. Gamepad](08-gamepad.md) | Virtuele gamecontroller met aanpasbare lay-outs |
| [9. Numpad](09-numpad.md) | Numeriek toetsenbord voor gegevensinvoer |
| [10. Presentation](10-presentation.md) | Schuifafstandsbediening en timer |
| [11. Settings](11-settings.md) | App-configuratie en voorkeuren |
| [12. Troubleshooting](12-troubleshooting.md) | Veelvoorkomende problemen en oplossingen |

## Hulp krijgen

- **Bugrapporten:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Gemeenschap:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Broncode:** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)