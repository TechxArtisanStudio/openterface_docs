---
title: "KeyMod Handleiding - Gamepad"
description: Gebruik KeyMod als een virtuele gamecontroller met aanpasbare lay-outs voor gaming, retro-emulatie en gametests. Transformeer uw telefoon in een virtuele…
keywords: "KeyMod gamepad, virtuele controller, gamecontroller, WASD mapping, analoge stick"
---

# 8. Gamepad

Transformeer uw telefoon in een virtuele gamecontroller voor gaming, retro-emulatie en gametests.

## De lay-out

De gamepad biedt een volledige controllerindeling met D-pad, actieknoppen, schouderknoppen, analoge sticks en Start/Select.

| Controle | Hoe |
|---|---|
| D-pad | Tik op de richtingspijlen |
| Actieknoppen (A, B, X, Y) | Tik erop |
| Schouderknopen | Tik bovenaan op L1, L2, R1, R2 |
| Analoge sticks | Tik en sleep de stokcirkels |
| Starten / Selecteren | Tik op de knoppen |

## Vooraf ingesteld systeem (v7)

KeyMod 0.15 introduceerde een **vooraf ingesteld gamepadsysteem**. In plaats van vaste ingebouwde lay-outs worden gamepadconfiguraties nu opgeslagen als **voorinstellingen** waar u doorheen kunt bladeren, importeren en exporteren.

### Voorinstellingen beheren

- **Tik op de vooraf ingestelde chip** in de werkbalk om door de beschikbare lay-outs te bladeren
- **Druk lang op de Preset-chip** voor de volledige lijst met presets met import-, module- en exportopties
- De meegeleverde **emu-6** layout wordt geleverd als starter-preset (`preset_default`)
- Voorinstellingen zijn deelbare JSON-bestanden met lay-out **schema v7**

### Modules toevoegen

Vanuit het vooraf ingestelde menu kunt u nieuwe modules aan elke lay-out toevoegen:

- **D-Pad / Stick** — voegt een linkerduimmodule toe (`stick_left`, `stick_left_2`, enz.)
- **Touchpad** — voegt een touchpad (`touchpad_1`, `touchpad_2`, enz.) toe met meegeleverde L/M/R-muisknoppen
- **Knoppen**: voeg gezichtsknoppen, schouderknoppen of triggers toe

## Aanpassen

- **Configureer een module** — tik op een module om het configuratiedialoogvenster te openen en het gedrag aan te passen
- **Analoge versus sleutelmodus** — sticks kunnen worden geconfigureerd als `STICK_KEY` (digitale richtingstoetsen) of `STICK_MOUSE` (relatieve aanwijzer-/muisbeweging)
- **WASD mapping** — wijs WASD-toetsen toe aan de linker joystick voor pc-gaming
- **Button/stickgrootte schaling** — pas de maten aan voor het gewenste aanraakgebied
- **Achtergrondafbeelding** — pas de gamepad-achtergrond aan (ingesloten in gedeelde voorinstellingen als base64, maximaal 6 MiB)
- **Haptische feedback** — trillingen bij button druk (alleen gezichtsknoppen, geen muisklikken)
- **Gyro** — schakel de gyroscoop van het apparaat in om de hostaanwijzer te verplaatsen terwijl het gamepadscherm actief is

### Modulemodel

Elk besturingselement op het scherm is een **module** met drie lagen:

| Laag | Wat het definieert |
|---|---|
| **Slot / identiteit** | Welk besturingselement op het canvas (bijvoorbeeld `stick_left`, `stick_right`, `touchpad_1`) |
| **Gedrag (type)** | Wat de gastheer ontvangt: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parameters** | Afstemmen op dezelfde module: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, maat, kleur |

### Analoge sticks

- **Linker joystick → Toetsenbordtoetsen:** Verwijst naar pijltoetsen met diagonale ondersteuning. Configureerbaar tot WASD in de moduleconfiguratie.
- **Rechter joystick → Muisbeweging:** `STICK_MOUSE`-modus met configureerbare gevoeligheid (`stickMouseSensitivity`), dode zone om drift te voorkomen.
- **Hysteresis:** Activerings- (0,6) en deactiveringsdrempels (0,4) voorkomen sleutelgeklap op de grens.

### Touchpad

- **Ondersteuning voor meerdere touchpad**: voeg meerdere touchpads toe aan een enkele lay-out (`touchpad_1`, `touchpad_2`, etc.)
- **Vierkante voetafdruk** standaard met lang indrukken van formaat
- **Gebundelde muisknoppen** (L/M/R) gedeeld op alle touchpads
- **Muizengrootte button**: druk lang op touchpad om de **Muisgrootte button** aan te passen, of druk lang op een afzonderlijke muis button voor **Deze maat button**

> **Opmerking:** Het Gamepad HID-protocol wordt momenteel actief ontwikkeld. Basisondersteuning voor button werkt; De nauwkeurigheid van de analoge stick kan variëren.

## Problemen oplossen

### Analoge stick reageert niet

| Symptoom | Oplossing |
|---|---|
| **Stick produceert geen actie** | Controleer de moduleconfiguratie. Controleer of de stick niet vastzit in de dode zone (middengebied). Controleer de hysteresisdrempels: de stick moet voorbij 0,6 activering bewegen om te activeren. |
| **Knoppen verzenden verkeerde sleutels** | Open de moduleconfiguratie en controleer de toetstoewijzing van de button. Tik op button om de configuratiepop-up te openen en de toewijzing te corrigeren. |
| **Touchpad muisknoppen klikken niet** | Zorg ervoor dat de gebundelde L/M/R-knoppen aanwezig zijn in de preset. Als u een touchpad toevoegt, worden er automatisch gedeelde muisknoppen toegevoegd. Controleer de moduleconfiguratie voor de toegewezen toets HID. |

## Volgende stappen

- **[← AI Integration](07-ai.md)** — AI-ondersteunde tekstverfijning en opdrachtassistent
- **[Numpad →](09-numpad.md)** — Numeriek toetsenbord voor gegevensinvoer