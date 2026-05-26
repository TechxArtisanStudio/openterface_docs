
# KVM-tutorial 03 — Geavanceerde functies

**Doelgroep:** Gevorderd tot expert — power-userfuncties en configuratie

---

## 1. Voorkeurensysteem

### Video

- **Resolutie & framerate** — Voorkeursinstellingen voor capture
- **Media-backend** — FFmpeg, GStreamer (Linux) of Qt Multimedia (Windows)
- **Hardwareversnelling** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Beeldverhouding & schaling** — Aangepaste verhouding, Stretch/Fit/Fill

### Audio

- **Ingeschakeld** — Audio-capture van het doel in-/uitschakelen
- **In-/uitvoerapparaat** — Bron en afspeelapparaat selecteren

### Doelbesturing

- **Muismodus** — Absolute, Relative (HID), Relative (Events)
- **Muisgebeurtenis-drosseling** — 30–1000 gebeurtenissen/seconde
- **Toetsenbordindeling** — Doel-OS en regionale indelingen
- **Interval voor herhaalde toetsaanslag** — Herhalingssnelheid bij ingedrukte toets
- **Cursor automatisch verbergen** — Hostcursor boven het videogebied verbergen

### Logboekregistratie

- **Logniveau** — Debug, Info, Warning, Error
- **Log naar bestand** — `~/Documents/openterface.log` (macOS) of geconfigureerd pad (Qt)
- **Seriële logging** — Apart seriëel communicatielogboek

---

## 2. EDID-beheer

### Wat is EDID?

EDID (Extended Display Identification Data) is wat het KVM-apparaat naar het doel stuurt om de beeldmogelijkheden te beschrijven — ondersteunde resoluties, verversingssnelheden, fabrikantinformatie. De KVM fungeert als een „nepmonitor”, dus EDID bepaalt welke resoluties het doel uitstuurt.

### EDID-weergavenaam bewerken

U kunt de weergavenaam wijzigen die het KVM-apparaat aan het doel rapporteert. Deze naam verschijnt in de beeldscherminstellingen van het doel-OS.

> **Opmerking:** Momenteel wordt alleen het bewerken van de weergavenaam ondersteund. Resolutiebewerking en aangepaste resolutie-items zijn nog niet beschikbaar.

**Toegang:** Settings > EDID Display Name Editor (macOS) of Device > Update Display Settings (Qt)

### Toepassingen

- **Het beeldscherm identificeren** in de instellingen van het doel-OS
- **Aangepaste benaming** in multi-monitoropstellingen om het KVM-beeldscherm te onderscheiden

---

## 3. Macrosysteem (macOS)

Macro's zijn opgeslagen toetsenbordactiesequenties die worden geactiveerd vanuit het macro-paneel op de werkbalk.

### Toetsenreeksformaat

**Modificatortags:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (mapt naar Cmd/Win/Super afhankelijk van het doel-OS)

**Speciale toetsen:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Vertragingen:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Voorbeelden

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### AI-ondersteunde generatie

De knop **Magic** in de macro-editor genereert macro's uit natuurlijke taal. Beschrijf wat u wilt en de AI produceert de toetsenreeks.

### Verificatie

Markeer macro's als **verified** na het testen. Alleen geverifieerde macro's zijn beschikbaar voor de AI-agent voor autonome uitvoering.

---

## 4. Script Tool (Qt)

Een door AutoHotKey geïnspireerde scripttaal voor het automatiseren van toetsenbord- en muisacties op het doel.

### Openen

Menu: **Device > Script Tool**

### Opdrachten

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Uitvoering pauzeren | `Sleep 1000` |
| `Send` | Toetsaanslagen verzenden | `Send Hello World` |
| `Click` | Muisklik | `Click 100 200` |
| `SetCapsLockState` | CapsLock in-/uitschakelen | `SetCapsLockState On` |
| `FullScreenCapture` | Schermafbeelding | `FullScreenCapture "/tmp/shot.png"` |

### Modificatorprefixen

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Firmware-updates

### Wanneer bijwerken

- Nieuwe hardwarefuncties
- Bugfixes
- Compatibiliteitsverbeteringen

### Updateproces

1. Open Firmware Update Tool (**Settings > Firmware Update Tool** op macOS, **Device > Update Firmware** op Qt)
2. Het hulpprogramma controleert de nieuwste versie via het netwerk
3. Voortgang wordt bijgehouden tijdens de schrijfbewerking
4. **Koppel het apparaat niet los tijdens de update**

### Herstel

1. Houd het apparaat van stroom voorzien
2. Sluit het Firmware Update Tool en open het opnieuw, probeer opnieuw
3. Gebruik de Serial Reset Tool als het apparaat niet reageert

---

## 6. Serial Reset Tool

**Toegang:** Settings > Serial Reset Tool (macOS) of Device > Factory Reset HID Chip (Qt)

Gebruik wanneer:
- Het apparaat in een onbekende staat is na een mislukte firmware-update
- De HID-chip niet reageert
- U het apparaat voorbereidt voor doorverkoop

---

## 7. Diagnostiek (Qt)

Menu: **Device > Device Diagnostics**

Voert hardwaretests achtereenvolgens uit:
1. Seriële verbindingstest
2. Doel-USB-status
3. Fabrieksreset-test
4. Test met hoge/lage baudrate
5. Stresstest (snelle opdrachten, succespercentage meten)
6. Plug-and-play-test (detectie van USB-loskoppeling/herverbinding)

Na het uitvoeren exporteert u resultaten via de **Support Email Dialog**.

---

## 8. AI-chatsysteem (macOS)

Ingebouwde AI-assistent die het doelscherm kan analyseren, acties kan voorstellen en toetsenbord-/muisbewerkingen kan uitvoeren.

### Chatmodi

| Mode | Description |
|------|-------------|
| **Interactive** | Vragen stellen, begeleiding krijgen |
| **Agentic** | AI plant en voert autonoom meerstaps taken uit |
| **Guide** | Eén instructie tegelijk, stap voor stap |
| **Planner** | Complexe verzoeken opgesplitst in gestructureerde plannen |

### Configuratie

Settings > AI Chat: API-eindpunt, sleutel (opgeslagen in Keychain), model, doelsysteem (macOS/Windows/Linux/etc.)

---

## 9. Afstandsbediening (VNC/RDP — macOS)

Schakel tussen **Hardware KVM**, **VNC** en **RDP** via **Control > Connection Protocol**.

| Scenario | Mode |
|----------|------|
| Doel in BIOS/UEFI, geen netwerk, bij opstarten, gecrasht | Hardware KVM |
| Desktopgebruik met hoge bandbreedte, Windows-server | VNC of RDP |

---

## 10. TCP-server (Qt)

Ingebouwde TCP-server voor afstandsbediening op poort 12345.

### Opdrachten

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Python-voorbeeld

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Beveiliging:** Geen authenticatie, versleuteling of snelheidsbeperking. Alleen inschakelen op vertrouwde netwerken.

---

## iPadOS-specifieke functies

### Bluetooth-verbindingsbeheer

De iPadOS-app maakt verbinding met de KVM-Go-dongle via **Bluetooth Low Energy (BLE)** voor toetsenbord-/muis-HID-invoer:

- **Auto-connect:** Standaard ingeschakeld. Bij opstarten scant de app 5 seconden en verbindt automatisch met het `kvm*`-apparaat met het sterkste signaal.
- **Opnieuw verbinden:** Bij verbroken verbinding probeert de app tot 3 keer opnieuw te verbinden met 2 seconden vertraging.
- **Signaalbewaking:** RSSI wordt elke 2 seconden bijgewerkt. De BLE-knop toont de signaalsterkte (bijv. `-45 dBm`) met kleurindicator: groen (-50 tot 0 dBm), oranje (-70 tot -50 dBm), rood (onder -70 dBm).
- **Apparaatscan:** Alleen apparaten waarvan de naam begint met `kvm` (hoofdletterongevoelig) verschijnen in de lijst.
- **Handmatige bediening:** Open het BLE-scherm om te scannen, verbinden, loskoppelen of auto-connect uit te schakelen.

### Info-overlay

Tik op **Info** om een realtime invoerstatus-overlay rechtsboven weer te geven:

```
┌─ Invoerstatus ─────────┐
│ Muis                   │
│ Modus: Absolute        │
│ Positie: 512.0, 384.0  │
│ Dragmodus: Active      │
│ Scrollen: Inactive     │
│ Toetsenbord            │
│ Modus: Normal          │
│ Caps Lock: OFF         │
│ Modificatoren: Ctrl, Shift │
└────────────────────────┘
```

De overlay is aanraakdoorlatend — hij blokkeert geen interactie met de videovoorvertoning.

### Schermoriëntatiecorrectie

Tik op **Rotate** om door oriëntatiecorrectiemodi te wisselen: Normal, 90° CW, 180°, 90° CCW. Corrigeert de videovoorvertoning wanneer de KVM-Go-dongle in een niet-standaard oriëntatie is gemonteerd. Rotatie geldt voor zowel live voorvertoning als opgeslagen captures.

### Idle-timer uitgeschakeld

De app houdt het iPad-scherm **wakker** tijdens gebruik door de idle-timer uit te schakelen — voorkomt dat de iPad automatisch vergrendelt tijdens het monitoren van de doel-PC.

### Logboeksysteem

De app bevat een ingebouwde `Logger` met categoriegebaseerde filtering:

| Category | Covers |
|---|---|
| `bluetooth` | BLE-scan, verbinding, gegevensoverdracht |
| `mouse` | Muisinvoer, gebaardetectie, moduswisselingen |
| `keyboard` | Toetsgebeurtenissen, modificatorstatus, samengestelde toetsen |
| `camera` | Video-opname, schermafbeeldingen, fotocapture |
| `ui` | Aanraakverwerking, gebaarherkenning, voorvertoningslaag |
| `general` | App-levenscyclus, algemene info |

Logboekregistratie kan in de app-broncode worden aangepast om console-ruis te verminderen.

---

## Volgende stappen

- **[Probleemoplossing →](04-troubleshooting.md)** — Veelvoorkomende problemen en oplossingen

---

## Android-specifieke functies

### Instellingenpaneel

Het instellingenpaneel van de Android-app (Menu-knop ☰) bevat alle configuratieopties:

| Setting | Description |
|---|---|
| **Device** | Toont aangesloten USB-apparaten en status. Tik om te selecteren of opnieuw te scannen. |
| **Disconnect Device** | Geeft alle USB-verbindingen veilig vrij. Gebruik vóór loskoppelen. |
| **Baudrate** | Seriële communicatiesnelheid: **115200** (standaard) of **9600** (langzamer, bij problemen). |
| **Controls** | Schuifregelaars voor camerhelderheid, contrast en tint. |
| **Video Format** | Selector voor resolutie en framerate. |
| **Rotate/Flip** | 90° CW/CCW draaien, horizontaal/verticaal spiegelen. |
| **Screen Capture / Record Video** | Schermafbeelding en video-opname. |
| **Relative / Absolute / Drag** | Muismodus wisselen. |
| **About Device** | Toont Android-versie en app-versie-informatie. |

### Persistentie van instellingen

De Android-app onthoudt uw voorkeuren tussen sessies:

| Setting | Persisted? |
|---|---|
| Muismodus | Ja |
| Videoformaat (resolutie, FPS) | Ja |
| Cameraparameters (helderheid, contrast, tint) | Ja |
| Toetsenbordindeling (US, JP, DE) | Ja |
| Baudrate | Ja |
| Apparaatverbindingsgeschiedenis | Ja |

Bij het opnieuw openen van de app worden uw laatste instellingen hersteld. Om alles te resetten: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Veilig loskoppelen

Vóór het loskoppelen van het KVM-apparaat op Android:

1. Open het instellingenpaneel
2. Tik op **Disconnect Device** (rood weergegeven)
3. Wacht tot de app de USB-verbinding vrijgeeft
4. Koppel de kabels los

Dit voorkomt gegevenscorruptie en zorgt ervoor dat de doelcomputer toetsenbord/muis correct vrijgeeft.

### Android-prestatietips

- **Verlaag de resolutie** — 640×480 is veel lichter dan 1920×1080
- **Verlaag de framerate** — 30 fps gebruikt minder bandbreedte dan 60 fps
- **Sluit andere apps** — maak geheugen op uw telefoon vrij
- **Gebruik een kwaliteits-USB OTG-adapter** — goedkope adapters kunnen de verbinding vertragen
- Het ontwikkelteam werkt aan het verminderen van latentie in de camera-pipeline zelf
