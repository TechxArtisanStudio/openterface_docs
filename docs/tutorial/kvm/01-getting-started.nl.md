---
title: "KVM-tutorial 01 — Aan de slag"
description: "Doelgroep: Beginners — eerste gebruikers van Openterface KVM-apparaten Officiële Openterface-documentatie: installatie, FAQ en KVM-over-USB probleemoplossing."
---

# KVM-tutorial 01 — Aan de slag

**Doelgroep:** Beginners — eerste gebruikers van Openterface KVM-apparaten

---

## 1. Wat is KVM-over-USB?

Een KVM-apparaat (Keyboard, Video, Mouse) staat tussen uw **hostcomputer** (uw werkstation) en een **doelcomputer** (server, mini-PC, embedded apparaat). Het:

- **Vangt** de HDMI-video-uitvoer van het doel op (en audio, indien beschikbaar)
- **Stuurt** uw toetsenbord- en muisinvoer door via HID-emulatie
- Alles via één USB-kabel — geen netwerk nodig

Dit onderscheidt KVM-apparaten van remote desktop-software: u kunt het doel besturen, zelfs in **BIOS/UEFI**, tijdens het opstarten of wanneer het besturingssysteem is gecrasht.

### Openterface KVM-apparaten

| Apparaat | Formaat | Belangrijkste kenmerk |
|--------|------------|-------------|
| **Mini-KVM** | Compacte USB-dongle | Desktop KVM-over-USB |
| **KVM-Go** | Draagbaar in toolkit-stijl | KVM onderweg met ingebouwde kabels, **iPadOS-ondersteuning via BLE** |
| **uConsole KVM Extension** | Interne module | Ingebouwde KVM voor ClockworkPi uConsole |

> Op zoek naar **KeyMod** (alleen toetsenbord- en muisemulator, geen video)? Zie de [KeyMod-tutorial](../../keymod/index.md).

---

## 2. Wat u nodig hebt

### Hardware

- **Openterface KVM-apparaat** — Mini-KVM, KVM-Go of uConsole KVM Extension
- **Hostcomputer** — met macOS, Windows, Linux of Android
- **Doelcomputer** — elke computer met HDMI-uitvoer
- **HDMI-kabel** — van HDMI-uitvoer van het doel naar HDMI-ingang van de KVM
- **USB-kabel** — van KVM naar uw hostcomputer (levert zowel stroom als data)

### Optioneel

- **USB-schakelkabel** — van KVM naar USB-poort van het doelapparaat (voor toetsenbord-/muisemulatie)
- **Toetsenbord en muis** — aansluiten op de omschakelbare USB-poort van de KVM om host of doel te besturen

---

## 3. Installatie

### Hostapplicatie

| Platform | Applicatie | Download |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) of [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) of [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **alleen KVM-Go** |

### Android-vereisten

De Android-app vereist:

- **Android 8.0 (API 26)** of nieuwer
- **USB OTG-ondersteuning** — de meeste moderne telefoons ondersteunen dit (Samsung, Google Pixel, OnePlus). Controleer door een USB-stick aan te sluiten met een OTG-adapter
- **USB OTG-kabel of -adapter** om het KVM-apparaat aan uw telefoon te koppelen

### iPadOS-vereisten

De iPadOS-app vereist:

- **iPadOS 17.0** of nieuwer
- **KVM-Go-apparaat** — iPadOS maakt verbinding met de KVM-Go-dongle via **Bluetooth Low Energy (BLE)** voor toetsenbord-/muisinvoer, en de USB-capturekaart voor video
- **Camera- en microfoonmachtigingen** — nodig voor videovoorvertoning en audiobewaking vanaf de capturekaart
- **Bluetooth-machtiging** — vereist om de KVM-Go-dongle te vinden en te verbinden voor HID-invoer
- **Fotobibliotheekmachtiging** (optioneel) — om schermafbeeldingen en opnames op te slaan in de Foto's-app

### macOS-machtigingen

Bij eerste start vraagt macOS om:

| Machtiging | Waarom |
|-----------|-----|
| **Camera** | Vangt video op van de HDMI-capturechip |
| **Microfoon** | Vangt audio van het doel op (indien ingeschakeld) |
| **Toegankelijkheid** | Vereist voor HID-muisbesturing in Relatieve modus |

### Linux-machtigingen

- Voeg uw gebruiker toe aan de groepen `dialout` en `video`: `sudo usermod -a -G dialout,video $USER`
- Installeer udev-regels voor apparaattoegang
- **BrlTTY-conflict:** Verwijder `brltty` of zet de serialchip op de blacklist — zie [Probleemoplossing](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- Het installatieprogramma bevat het CH340-seriële stuurprogramma. Installeer het apart voor portable builds.

---

## 4. Hardware aansluiten

┌─────────────┐                        ┌──────────────────┐
│   DOEL      │─── HDMI-kabel ────────▶│  Openterface     │
│  COMPUTER   │                        │  KVM-apparaat    │
└─────────────┘                        │                  │
                                       │  ◄── USB-kabel ──│── USB-schakelkabel ──▶ Doel-USB-poort
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  HOSTCOMPUTER    │
                                       │  (deze app)      │
                                       └──────────────────┘
1. Sluit de **HDMI-uitvoer** van het doel aan op de **HDMI-ingang** van de KVM
2. Sluit de **USB** van de KVM aan op een **USB-poort op uw hostcomputer**
3. (Optioneel) Sluit de USB-schakelkabel van de KVM aan op de USB-poort van het doel
4. (Optioneel) Sluit uw toetsenbord/muis aan op de omschakelbare USB-poort van de KVM
5. **Schakel** het doelapparaat in

### Apparaatherkenning

De KVM wordt geënumereerd als meerdere USB-apparaten:
- **Videocapture** (MS2109/MS2109S/MS2130S) — verschijnt als webcam
- **Serial** (CH9329 of CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — gebruikt voor firmwarebewerkingen

### Verbinden via Android-telefoon

Bij gebruik van de Android-app gebruikt de verbindingsketen USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  Doel-PC     │               │   KVM-apparaat    │
│  (scherm)    │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Android-telefoon│
                               │  (Openterface)   │
                               └──────────────────┘
```

Verbindingsvolgorde voor Android:

1. **HDMI:** Sluit HDMI-uitvoer van het doel aan op de HDMI-**ingang** van de KVM
2. **USB (doel):** Sluit USB-poort van het doel aan op USB-poort van de KVM — draagt muis-/toetsenbordsignalen
3. **USB OTG (telefoon):** Sluit de KVM aan op uw Android-telefoon via USB OTG-kabel/-adapter
4. **Stroom:** Schakel het KVM-apparaat in (bij aparte stroomingang) en de doelcomputer

Bij een succesvolle verbinding schakelt de videovoorvertoning van een placeholder naar het live scherm van het doel, en tikken op het telefoonscherm verplaatst de cursor op het doel.

### Verbinden via iPadOS

De iPadOS-app gebruikt een ander verbindingsmodel: **BLE voor invoer** en **USB-capture voor video**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  Doel-PC     │               │                   │
│  (scherm)    │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (video)
                              │   BLE (FFF2)      │ (toetsenbord/muis)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Verbindingsvolgorde voor iPadOS:

1. **Hardware:** Steek de KVM-Go-dongle in de USB-poort van de doel-PC en sluit de HDMI-ingang aan
2. **Schakel** de doelcomputer in
3. **Open de app** op uw iPad en verleen camera-, microfoon- en Bluetooth-machtigingen
4. **Tik op de BLE-knop** in de werkbalk — de app scant naar apparaten met de naam `kvm*`
5. **Tik op Connect** naast uw KVM-Go-apparaat — de knop wordt groen met RSSI-signaalsterkte
6. **Controleer:** de videovoorvertoning toont het scherm van het doel, tikken stuurt klikken, typen stuurt toetsaanslagen

> **Opmerking:** De iPadOS-app werkt alleen met **KVM-Go**. Mini-KVM en uConsole KVM Extension hebben geen BLE-ondersteuning.

---

## 5. Eerste start

### Hoofdvenster

```
┌─────────────────────────────────────────────────────────┐
│  Menubalk / Werkbalk                                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              VIDEO-WEERGAVEGEBIED                       │
│         (toont scherm van doelapparaat)                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Statusbalk │ Poort │ Toetsen │ Muis │ Resolutie │     │
└─────────────────────────────────────────────────────────┘
```

### Android-machtigingen

Bij eerste start vraagt de Android-app om:

| Machtiging | Waarom | Wat gebeurt er bij weigering |
|---|---|---|
| **USB Host** | Communiceren met Openterface-hardware | App kan uw KVM-apparaat niet detecteren |
| **Camera** | Video ontvangen van HDMI-capturechip | Geen videovoorvertoning |
| **Opslag** | Schermafbeeldingen en opnames opslaan | Kan captures niet opslaan |

Verleen alle machtigingen voor volledige functionaliteit. Er verschijnt ook een systeem-USB-machtigingsdialoog wanneer het KVM-apparaat wordt gedetecteerd — tik op **Allow**.

### iPadOS-machtigingen

Bij eerste start vraagt de iPadOS-app om:

| Machtiging | Waarom | Wat gebeurt er bij weigering |
|---|---|---|
| **Camera** | Video ontvangen van HDMI-capturekaart | Geen videovoorvertoning |
| **Microfoon** | Doel-PC-audio bewaken via iPad-luidsprekers | Geen audiobewaking |
| **Bluetooth** | KVM-Go vinden en verbinden voor HID-invoer | Kan geen toetsenbord-/muisinvoer sturen |
| **Fotobibliotheek** | Schermafbeeldingen en opnames opslaan | Captures worden nog steeds opgeslagen in app Documents-map |

Als u per ongeluk een machtiging hebt geweigerd, ga naar **Settings > Privacy & Security** om deze opnieuw in te schakelen.

### Verbinding verifiëren

- **HDMI-indicator:** groen = signaal gedetecteerd, oranje = geen signaal, grijs = onbekend
- **Toetsenbordindicator:** groen = verbonden, oranje = niet gevonden, grijs = onbekend
- **Muisindicator:** groen = verbonden, oranje = niet gevonden, grijs = onbekend
- **Serial-poort:** moet poortnaam en baudrate tonen (9600 of 115200)

Als indicatoren oranje of grijs zijn, zie [Probleemoplossing](04-troubleshooting.md).

---

## 6. Basis KVM-besturing

### Muismodi

| Modus | Beschrijving | Het beste voor |
|------|-------------|----------|
| **Absolute** (standaard) | Hostcursor wijst direct naar doelscherm | Algemeen gebruik, GUI-navigatie |
| **Relative (HID)** | Muisbewegingen als delta's via HID | Gaming, snelle interactie |

Schakel via de werkbalkschakelaar of **Control > Mouse Mode**.

### Toetsenbordinvoer

Alle toetsaanslagen worden doorgestuurd naar het doel wanneer het app-venster focus heeft:
- Standaardtoetsen, functietoetsen, modifiers
- Speciale toetsen: Ctrl+Alt+Del, Print Screen
- **Paste to Target:** Stuurt klembordtekst als geëmuleerde toetsaanslagen

### USB-omschakeling

Schakel de omschakelbare USB-poort tussen:
- **Host** — uw toetsenbord/muis bestuurt de hostcomputer
- **Target** — uw toetsenbord/muis bestuurt de doelcomputer

---

## 7. Volgende stappen

- **[Basisbewerkingen →](02-basic-operations.md)** — Muis, toetsenbord, video, audio, opname
- **[Geavanceerde functies →](03-advanced-features.md)** — EDID, firmware, macro's, scripts
- **[Probleemoplossing →](04-troubleshooting.md)** — Veelvoorkomende problemen en oplossingen
