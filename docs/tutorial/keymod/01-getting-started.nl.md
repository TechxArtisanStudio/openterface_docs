---
title: "KeyMod Handleiding - Aan de slag"
description: "Installeer de KeyMod-app, maak verbinding met uw KeyMod-apparaat en verzend binnen 5 minuten uw eerste toetsaanslag. Officiële Openterface-documentatie:…"
keywords: "KeyMod aan de slag, KeyMod instellen, KeyMod installatie, aansluiten KeyMod"
---

# 1. Aan de slag

Installeer de KeyMod-app, maak verbinding met uw KeyMod-hardware en verzend uw eerste toetsaanslag in minder dan 5 minuten.

## Wat je nodig hebt

- **Openterface KeyMod hardware** — ingeschakeld en binnen bereik
- **Telefoon of tablet** — Android met de KeyCmd app geïnstalleerd
- **USB kabel** (voor eerste installatie) — USB-C om uw telefoon aan te sluiten op het KeyCmd apparaat
- **Bluetooth** (optioneel) — voor draadloze verbinding na de eerste installatie

## Stap 1: Installeer de KeyMod-app

**Android:**

1. Open de browser van uw telefoon en ga naar [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. Download het nieuwste `.apk`-bestand
3. Tik op het gedownloade bestand om te installeren
4. Als Android daarom vraagt, sta dan **"Installeer onbekende apps"** toe voor uw browser


> **Note:** KeyCmd source code is not yet public. Download the beta APK from the [App](/app/kvm/) page.

## Stap 2: Maak verbinding met uw KeyMod-apparaat

KeyMod wordt op twee manieren verbonden met de Openterface KeyMod hardware:

### USB Verbinding (aanbevolen voor eerste installatie)

1. Sluit uw telefoon aan op het KeyCmd apparaat met behulp van een USB-C kabel
2. Open de app KeyMod
3. Tik op het verbindingspictogram (rechterbovenhoek van het hoofdscherm)
4. Tik op **"USB Verbinding"**
5. Accepteer de toestemmingsprompt van USB wanneer daarom wordt gevraagd
6. U zou een groene statusindicator **"Verbonden"** moeten zien

### Bluetooth-verbinding (draadloos)

1. Zorg ervoor dat Bluetooth is ingeschakeld op uw telefoon
2. Open KeyCmd en tik op het verbindingspictogram
3. Tik op **"Bluetooth-verbinding"**
4. Wacht tot uw KeyMod-apparaat in de scanlijst verschijnt
5. Tik erop om te koppelen
6. U zou een groene statusindicator **"Verbonden"** moeten zien

> **Tip:** Schakel **"Automatisch verbinden bij opstarten"** in het verbindingsdialoogvenster in, zodat KeyMod automatisch opnieuw verbinding maakt telkens wanneer u het opent. De app onthoudt uw laatste verbindingstype (USB of BLE).

## Stap 3: Kies uw modus — Welkom en gids

Na het opstarten zie je het scherm **Welkom en Gids** met moduskaarten:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Welkom en gids — tik op een moduskaart om die modus te openen.</em></p>
</div>

Gebruik het zijmenu (hamburgerpictogram, linksboven) om op elk gewenst moment van modus te wisselen:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Navigatielade: schakel tussen modi, krijg toegang tot macro's, spraak en instellingen.</em></p>
</div>

**"Onthoud mijn keuze"** — vink dit vakje aan om het welkomstscherm bij toekomstige lanceringen over te slaan en direct naar de laatst gebruikte modus te gaan.

**"Overslaan" button** — sla het welkomstscherm over en ga onmiddellijk naar de eerder gebruikte modus.

## Stap 4: Verzend uw eerste toetsaanslag

1. Selecteer de modus **Toetsenbord en muis**
2. Tik op een willekeurige toets op het schermtoetsenbord
3. De bijbehorende toetsaanslag wordt naar de doelcomputer verzonden

Dat is het! U bestuurt nu uw doelcomputer op afstand.

## Indicatoren verbindingsstatus

| Indicator | Betekenis |
|---|---|
| **Groen** (verbonden pictogram) | Actieve verbinding, klaar om invoer te verzenden |
| **Amber/Blauw** (verbindingspictogram) | Verbinding bezig |
| **Grijs** (pictogram verbroken) | Geen actieve verbinding |
| **Signaalbalken** | BLE signaalsterkte of USB actieve status |

## Volgende stappen

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Typen, modificaties, touchpad en tekstinvoer