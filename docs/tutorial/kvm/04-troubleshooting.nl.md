---
title: "KVM-tutorial 04 — Probleemoplossing"
description: "Veelvoorkomende problemen en oplossingen voor Openterface KVM-apparaten. Officiële Openterface-documentatie: installatie, FAQ en KVM-over-USB probleemoplossing."
---


# KVM-tutorial 04 — Probleemoplossing

Veelvoorkomende problemen en oplossingen voor Openterface KVM-apparaten.

---

## Apparaat niet gedetecteerd

### Symptomen
- „No devices found” in het apparaatmenu
- Toetsenbord- en muisindicatoren tonen oranje of grijs
- Seriële poort toont „N/A”

### Diagnose

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Verwacht: `534d:2109` (HDMI capture) en `1a86:7523` of `1a86:fe0c` (serial).

**macOS:** Apple-menu > Over deze Mac > Systeemrapport > Hardware > USB — zoek naar Openterface.

**Windows:** Apparaatbeheer > „Universal Serial Bus devices” en „Ports (COM & LPT)” — CH340 zou moeten verschijnen als „USB-SERIAL CH340 (COMx)”.

### Oplossingen

| Probleem | Oplossing |
|---------|-----|
| Apparaat niet in lsusb/Systeemrapport | Probeer een andere USB-kabel/poort. USB 2.0+ vereist |
| Apparaat zichtbaar maar geen nodes | Controleer udev-regels (Linux) of installeer stuurprogramma's opnieuw (Windows) |
| Toegang geweigerd | Voeg gebruiker toe aan `dialout`- en `video`-groepen (Linux) |
| Gedetecteerd en verdwijnt daarna | `brltty` claimt de seriële poort (Linux) — zie hieronder |

---

## BrlTTY-conflict (Linux) {#brltty-conflict-linux}

**De meest voorkomende oorzaak van toetsenbord-/muisstoring op Linux.**

De `brltty`-service (Braille-terminal) claimt USB-seriële apparaten, inclusief de CH9329/CH32V208-chip.

### Oplossing
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Geen video / zwart scherm

### Stappen

1. **Controleer HDMI-kabel** — stevig aangesloten aan beide uiteinden
2. **Controleer doelapparaat** — geeft het HDMI uit (test met een normale monitor)
3. **Probeer een andere HDMI-kabel**
4. **Sluit het apparaat opnieuw aan** — de app verwerkt hot-plug-gebeurtenissen
5. **Controleer detectie van videochipset:** Ondersteund: MS2109, MS2109S, MS2130S

### Backendselectie (Qt)

Als één backend een zwart scherm toont, probeer een andere via **Preferences > Video > Media Backend**:
- **FFmpeg** — Meest betrouwbaar (aanbevolen)
- **GStreamer** — Alleen Linux
- **Qt Multimedia** — Windows-fallback

### GStreamer-problemen (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Probeer een andere sink:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID-mismatch

Als het doel de EDID niet herkent, geeft het mogelijk geen compatibele resolutie uit. Probeer de uitvoerresolutie van het doel te wijzigen of bewerk de EDID via de weergave-instellingen van de app.

---

## Toetsenbord/muis reageert niet

### Stappen

1. **Controleer USB-schakelaar** — zorg dat deze op **Target** staat, niet Host
2. **Controleer status seriële poort** — moet een poortnaam tonen, niet „N/A”
3. **Probeer baudrate te wisselen** — 9600 of 115200
4. **Controleer besturingschipset** — Ondersteund: CH9329, CH32V208
5. **Controleer CTS-monitoring** — De app monitort Clear-To-Send-lijnen voor HID-gebeurtenissen

### Muis-specifieke problemen

- **Relatieve modus op macOS:** Vereist Toegankelijkheidsmachtiging. Controleer **System Settings > Privacy & Security > Accessibility**
- **Absolute modus:** Controleer of de beeldverhouding overeenkomt met het doelscherm
- **Muissvertraging:** Probeer een hoger prestatiepreset of verhoog de baudrate
- **Conflicten seriële poort (Linux):** Sluit andere apps die de poort gebruiken: `sudo lsof /dev/ttyUSB0`

---

## Audio speelt niet af

### Stappen

1. **Schakel audio in** via het audiopictogram > Enable Audio
2. **Controleer microfoonmachtiging** — System Settings > Privacy & Security > Microphone (macOS)
3. **Selecteer juist invoerapparaat** — „OpenterfaceA” of capture-apparaatnaam
4. **Selecteer juist uitvoerapparaat** — uw luidsprekers of koptelefoon
5. **Controleer HDMI-audio-uitvoer van het doel** — is het doel geconfigureerd om audio via HDMI te sturen?

---

## USB Serial-stuurprogrammaproblemen

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Installeer indien nodig het WCH CH34x-stuurprogramma van [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Schakel in via **System Settings > General > Login Items & Extensions > Driver Extensions**.

### Windows

Als de seriële chip niet in Apparaatbeheer verschijnt, installeer het CH340/CH341-stuurprogramma. Het installatieprogramma bevat dit meestal; voor portable builds apart downloaden.

### Linux

Het CH340-stuurprogramma (`ch341`-module) is ingebouwd in de kernel:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Firmware-update mislukt

### USB-stabiliteit

- Niet loskoppelen tijdens flashen
- Hostcomputer niet in slaapstand zetten
- Gebruik een directe USB-poort (vermijd hubs)

### Herstel

1. Stroomcyclus: USB loskoppelen, 10 seconden wachten, opnieuw aansluiten
2. Opnieuw ISP-modus invoeren (sommige apparaten: knop ingedrukt houden tijdens inschakelen)
3. Gebruik Serial Reset Tool om bootloader opnieuw te flashen
4. Neem contact op met support bij brick

---

## Prestatieproblemen

### Hoog CPU-gebruik

1. **Schakel hardwareversnelling in** — Preferences > Video > Hardware Acceleration (VAAPI, V4L2-M2M)
2. **Verlaag resolutie** — 720p gebruikt aanzienlijk minder CPU dan 1080p
3. **Verlaag framerate** — 15fps halveert de decode-werklast
4. **Wissel backend** — FFmpeg met HW-versnelling gebruikt doorgaans minder CPU dan GStreamer

### Frame drops

Controleer de FPS-teller in de statusbalk. Als de werkelijke FPS onder het doel ligt, is de pipeline de bottleneck. Schakel frame dropping in de FFmpeg frame processor in om vloeiende weergave te prioriteren.

---

## Logging en diagnostiek

### Logging inschakelen

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > stel logniveau en bestandspad in

### Seriële console (Qt)

Open via **Device > Serial Port Debug** — toont realtime seriële protocolberichten met filters voor Keyboard, Mouse, HID, Chip Info.

---

## Platformspecifieke problemen

### Linux: Qt-platformplug-in

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: Wayland-videoproblemen

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: CH340-stuurprogramma

Als installatie van het stuurprogramma mislukt: schakel handtekeningafdwinging voor stuurprogramma's tijdelijk uit en installeer handmatig via Apparaatbeheer.

### Raspberry Pi: videostotteren

Op Pi 3 of Pi 4 met weinig geheugen:
1. Verlaag resolutie naar 720p
2. Gebruik FFmpeg-backend (niet GStreamer)
3. Gebruik 9600 baud voor seriële stabiliteit

---

## Android-specifieke problemen

### Apparaat niet gedetecteerd

**Symptoom:** Videovoorbeeld toont een placeholder, niet het doelscherm.

1. **Controleer USB OTG-verbinding** — koppel de kabel los en opnieuw aan
2. **Controleer OTG-ondersteuning** — sluit een USB-stick aan om te bevestigen dat uw telefoon OTG ondersteunt
3. **Controleer KVM-apparaat** — staat het aan? Branden indicatielampjes?
4. **Probeer een andere kabel** — sommige OTG-adapters zijn defect
5. **Herstart de app** — sluit volledig (veeg uit recente apps) en open opnieuw
6. **Controleer USB-machtiging** — als een systeemdialoog om USB-toegang vroeg, tik op **Allow**

### Geen video

**Symptoom:** Apparaat is gedetecteerd maar het scherm is zwart of bevroren.

1. **Controleer HDMI-kabel** — is de HDMI van de doelcomputer stevig aangesloten op de KVM HDMI-ingang?
2. **Controleer uitvoer van het doel** — toont de doelcomputer daadwerkelijk iets?
3. **Probeer lagere resolutie** — open instellingen → **Video Format** → kies lagere resolutie
4. **Controleer cameramachtiging** — Android-instellingen → Apps → Openterface → Permissions → zorg dat Camera is toegestaan
5. **Herstart de app**

### Muis reageert niet

**Symptoom:** Video werkt maar tikken op het scherm doet niets op het doel.

1. **Controleer USB-verbinding voor HID** — open instellingen → **Device** en bevestig dat het apparaat actief is
2. **Probeer een andere muismodus** — schakel tussen Absolute en Relative
3. **Verbind los en opnieuw** — gebruik de rode **Disconnect Device**-knop en verbind opnieuw
4. **Controleer doelcomputer** — herkent deze een USB-toetsenbord/muis? Probeer de USB-kabel aan de doelzijde los en opnieuw aan te sluiten

### Toetsenbord stuurt geen toetsen

**Symptoom:** Muis werkt maar typen doet niets.

1. **Zorg dat het toetsenbord open is** — tik op de toetsenbordknop
2. **Controleer seriële verbinding** — open instellingen → **Device** en bevestig dat het actief is
3. **Controleer baudrate** — open instellingen → **Baudrate** en zorg dat deze overeenkomt met uw apparaat (standaard 115200)
4. **Controleer toetsenbordindeling** — zorg dat de juiste indeling (US, JP, DE) is geselecteerd

### App crasht of bevriest

1. **Sluit en herstart** de app
2. **Verlaag videoresolutie en framerate** — hoge instellingen kunnen apparaten met beperkt geheugen overbelasten
3. **Controleer beschikbare opslag** — weinig opslag kan instabiliteit veroorzaken
4. **Update de app** — controleer op een nieuwere versie in Google Play of GitHub Releases

### Screenshots of opnames worden niet opgeslagen

1. **Controleer Storage-machtiging** — Android-instellingen → Apps → Openterface → Permissions → Storage
2. **Controleer beschikbare opslagruimte** op uw apparaat
3. Opnames en screenshots worden opgeslagen in de standaard mediamap van uw apparaat

### Logs verzamelen (Android)

Als standaard probleemoplossing niet helpt, verzamel logs om te delen met maintainers:

```bash
adb logcat | grep -i openterface > openterface.log
```

Voeg dit bestand toe bij het openen van een GitHub-issue.

---

## iPadOS-specifieke problemen

> **Opmerking:** iPadOS wordt alleen ondersteund op **KVM-Go**. Als u Mini-KVM of uConsole KVM Extension gebruikt, werkt de iPadOS-app niet.

### Bluetooth maakt geen verbinding

**Symptoom:** BLE-knop wordt niet groen of geen apparaten in de scanlijst.

1. **Controleer of Bluetooth is ingeschakeld** op uw iPad — Settings > Bluetooth
2. **Zorg dat KVM-Go aan staat** — de dongle moet in de USB-poort van de doel-PC zitten
3. **Breng iPad dichter bij KVM-Go-dongle** — BLE-bereik is doorgaans tot 10 meter
4. **Controleer iPad Bluetooth-machtiging** — Settings > Privacy & Security > Bluetooth > zorg dat Openterface is toegestaan
5. **Tik op Refresh** op het BLE-scherm om de scan opnieuw te starten
6. **Controleer Bluetooth-machtiging Openterface-app** — bij weigering bij eerste start opnieuw inschakelen in Instellingen

### Geen videovoorbeeld

**Symptoom:** BLE is verbonden maar het scherm is zwart of toont een gidsafbeelding.

1. **Controleer HDMI-verbinding** — is de HDMI-uitvoer van de doel-PC stevig aangesloten op de KVM-Go HDMI-ingang?
2. **Controleer uitvoer van het doel** — toont de doelcomputer daadwerkelijk iets?
3. **Probeer lagere resolutie** — tik op de Video-knop en selecteer lagere resolutie (720p of 480p)
4. **Controleer cameramachtiging** — Settings > Privacy & Security > Camera > zorg dat Openterface is toegestaan
5. **Herstart de app** — veeg omhoog uit recente apps en open opnieuw

### Muis/aanraking reageert niet

**Symptoom:** Video werkt maar tikken op het scherm doet niets op het doel.

1. **Controleer BLE-verbinding** — BLE-knop moet groen zijn met een RSSI-waarde
2. **Probeer een andere muismodus** — schakel tussen Pan Mode en iPencil Mode
3. **Verbind los en opnieuw** — open BLE-scherm, tik Disconnect, verbind daarna opnieuw
4. **Controleer doelcomputer** — herkent deze KVM-Go als USB-toetsenbord/muis?

### Toetsenbord stuurt geen toetsen

**Symptoom:** Muis werkt maar typen doet niets.

1. **Zorg dat het zwevende toetsenbord open is** — tik op de Keyboard-knop
2. **Controleer BLE-verbinding** — invoer gaat via Bluetooth, niet USB
3. **Controleer toetsenbordmodus** — probeer te schakelen tussen Normal en Game mode
4. **Extern toetsenbord:** bij fysiek iPad-toetsenbord controleer of iPadOS toetsgebeurtenissen naar de app stuurt

### Audio speelt niet af

**Symptoom:** Video werkt maar u hoort de doel-PC niet via de iPad.

1. **Controleer Audio-knop** — moet een groen luidsprekerpictogram tonen
2. **Controleer microfoonmachtiging** — Settings > Privacy & Security > Microphone > zorg dat Openterface is toegestaan
3. **Controleer iPad-volume** — zorg dat de iPad niet gedempt is of op minimum staat
4. **Controleer audio-uitvoer doel** — is de doel-PC geconfigureerd om audio via HDMI te sturen?

### App crasht of bevriest

1. **Sluit en herstart** de app
2. **Verlaag videoresolutie** — hoge resolutie kan oudere iPads belasten
3. **Controleer beschikbare opslag** — weinig opslag kan instabiliteit veroorzaken
4. **Update de app** — controleer op een nieuwere versie in de App Store

### Screenshots of opnames worden niet opgeslagen

1. **Controleer Photo Library-machtiging** — Settings > Privacy & Security > Photos > zorg dat Openterface is toegestaan
2. **Controleer beschikbare opslag** op uw iPad
3. **Blader via Files-app** — opnames worden opgeslagen in `Documents/Recordings/` zelfs zonder Photo Library-toegang

---

## Fabrieksreset

1. Gebruik Serial Reset Tool vanuit Settings (macOS) of Device-menu (Qt)
2. Dit reset de HID-chip naar fabrieksinstellingen
3. Sluit het apparaat opnieuw aan na reset

## Verbindingsherstel

De applicaties bieden automatisch herstel voor:
- Apparaat loskoppelen/opnieuw verbinden (hot-plug voor USB, BLE-herverbinding voor iPadOS)
- Communicatie-time-outs
- Chipset-fallbacks (MS2109 → MS2109S → MS2130S)
- Herstel seriële poort
- iPadOS BLE auto-reconnect (tot 3 pogingen met 2 seconden vertraging)

## Defectrapporten indienen

1. Schakel logbestand-logging in
2. Reproduceer het probleem
3. Dien in via [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) of e-mail naar info@techxartisan.com
