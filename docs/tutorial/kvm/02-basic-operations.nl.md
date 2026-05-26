# KVM-tutorial 02 — Basisbewerkingen

**Doelgroep:** Beginners tot gevorderd — functies voor dagelijks gebruik

---

## 1. Muisbesturing

### Absolute modus (standaard)

De muisaanwijzer van de host wordt direct op het doelscherm gemapt. Beide aanwijzers zijn zichtbaar.

- **Het beste voor:** Algemeen gebruik, serverbeheer, BIOS-navigatie
- **Aanwijzergedrag:** Hostaanwijzer automatisch verbergen of altijd tonen boven het videogebied

### Relatieve (HID-)modus

Muisbewegingen worden als relatieve delta's via de HID-interface verzonden. De hostaanwijzer is verborgen.

- **Het beste voor:** Gamen, applicaties die ruwe muisinvoer nodig hebben
- **Vereisten:** Toegankelijkheidsmachtiging op macOS
- **Afsluiten:** Globale sneltoets (macOS) of Esc lang indrukken (Qt)

### Android-muismodi

De Android-app biedt drie manieren om de doelmuis te besturen, wisselbaar in het instellingenpaneel:

| Modus | Hoe het werkt | Het beste voor |
|---|---|---|
| **Absoluut (standaard)** | Tik ergens en de aanwijzer springt daarheen en klikt links. Positie wordt proportioneel gemapt. | De meeste taken |
| **Relatief** | Sleep uw vinger; de aanwijzer beweegt relatief ten opzichte van uw sleepbeweging, zoals een laptop-trackpad. Til uw vinger op en de aanwijzer blijft staan. | Fijne aanwijzerpositionering |
| **Absoluut slepen** | Tik en houd vast; de aanwijzer springt en volgt uw vinger. Er verschijnt een "Drag"-label. Loslaten om neer te zetten. | Bestanden slepen, tekst selecteren |

**Muisknoppen op Android:** enkele tik = linksklik, lang indrukken = rechtsklik, dubbeltik = dubbelklik.

### iPadOS-muismodi

De iPadOS-app biedt twee muismodi, wisselbaar via de muismodusknop op de werkbalk:

| Modus | Pictogram | Hoe het werkt | Het beste voor |
|---|---|---|---|
| **Pan-modus** (relatief) | Handpictogram | Vinger werkt als een laptop-trackpad — sleep om de aanwijzer te verplaatsen, tik om te klikken | Algemeen desktopgebruik, vlak oppervlak |
| **iPencil-modus** (absoluut) | Potloodpictogram | Aanraakpositie wordt direct gemapt op doelschermcoördinaten, zoals een tekentablet | Precies aanwijzen, Apple Pencil-gebruik |

**Gebaren in beide modi:**

| Gebaar | Pan-modus | iPencil-modus |
|---|---|---|
| **Enkele tik** | Linksklik | Verplaats aanwijzer naar punt + linksklik |
| **Tik en sleep** | Verplaats aanwijzer (relatief) | Slepen met linkerknop ingedrukt |
| **Dubbeltik** | Dubbelklik | Dubbelklik op punt |
| **Lang indrukken** | Rechtsklik | Rechtsklik op punt |
| **Tik met twee vingers** | Rechtsklik | Rechtsklik |
| **Slepen met twee vingers** | Scrollwiel | Scrollwiel |

**Snelmenu:** Houd het videovoorbeeld lang ingedrukt om een menu te openen met Left Click, Right Click en Drag.

**Sleepmodus:** Dubbeltik en houd vast of selecteer Drag uit het snelmenu — de linkerknop blijft ingedrukt, er verschijnt een "Dragging Mode Active"-label.

### Prestatiepresets (macOS)

Onder **Control > Mouse Mode > Performance Presets**:

| Preset | Throttle | Baudrate | Gebruik |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Langzame doelapparaten |
| Casual Use | 80 Hz | 9600 | Dagelijks serverbeheer |
| Gaming | 250 Hz | 115200 | Responsief gamen |
| Max Performance | 1000 Hz | 115200 | Maximale responsiviteit |

Hogere throttle = responsiever. Hogere baudrate = snellere seriële communicatie.

---

## 2. Toetsenbordinvoer

### Standaardinvoer

Alle toetsaanslagen getypt terwijl het app-venster focus heeft, worden doorgestuurd naar het doel.

### Speciale toetsen

Stuur toetscombinaties via het toetsenpaneel op de werkbalk of **Control > Special Keys**:

- **F1–F12:** Functietoetsen
- **Ctrl+Alt+Del:** Windows three-finger salute
- **Print Screen:** Schermafdruktoets
- **Ctrl+Alt+F2:** Linux VT-schakeling

### Toetsenbordindeling

Stel de doel-OS-indeling in zodat deze overeenkomt met de doelcomputer:

| Indeling | Gedrag |
|--------|----------|
| **Windows** | Mapt hosttoetsen naar Windows-conventies |
| **Mac** | Mapt hosttoetsen naar Mac-conventies |
| **Linux** | Mapt hosttoetsen naar Linux-conventies |

Regionale indelingen (QWERTY UK, Deens, QWERTZ Duits, AZERTY Frans, Japans, enz.) zijn ook beschikbaar in de Qt-applicatie.

### Paste to Target

De app stuurt klembordtekst als geëmuleerde toetsaanslagen naar het doel. Handig voor gebruikersnamen, opdrachten, URL's.

> **Opmerking:** Alleen ASCII-tekens worden ondersteund. Lange tekst kan op oudere/bezette systemen opmaak verliezen of tekens laten vallen.

**Plakgedrag configureren (macOS):**
- **Ask Every Time:** Vraagt elke keer host of doel
- **Host Paste:** Stuurt altijd naar het doel
- **Local Paste:** Plakt altijd op de host

### Android-schermtoetsenbord

De Android-app biedt een volledig schermtoetsenbord toegankelijk via de toetsenbordknop (⌨) rechtsonder op het hoofdscherm:

| Bediening | Wat het doet |
|---|---|
| **ShortCut** | Voorgebouwde snelkoppelingen: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, enz. |
| **Function** | F1–F12, PrtSc, ScrLk, navigatietoetsen (Ins, Home, PgUp, enz.), pijltjes |
| **System** | QWERTY-indeling met letters, cijfers, leestekens, Backspace, Enter |
| **Modifier keys** | Ctrl, Shift, Alt, Win — schakelknoppen die automatisch resetten na de volgende toets |

Om een combinatie zoals **Ctrl+Alt+Del** te sturen: tik Ctrl (highlight), tik Alt (beide highlight), tik Del. Alle modifiers resetten automatisch nadat de toets is verzonden.

Het toetsenbord ondersteunt ook **verschillende regionale indelingen** (VS, Japans JIS, Duits QWERTZ, enz.) selecteerbaar in het instellingenpaneel. In-/uitzoomenknoppen laten u de toetsgrootte aanpassen.

### iPadOS-toetsenbordinvoer

De iPadOS-app ondersteunt twee toetsenbordinvoermethoden:

**Zwevend schermtoetsenbord:** Tik op de **Keyboard**-knop in de werkbalk om een versleepbaar zwevend toetsenbord met Mac-indeling te tonen:

| Rij | Toetsen |
|---|---|
| **Boven** | Esc, F1–F12, Del |
| **Cijfers** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Home row** | Caps, a–l, ;, ', Enter |
| **Onder** | Shift, z–m, ,, ., /, Shift |
| **Modifiers** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Modifiers schakelen:** Tik Ctrl, Shift, Alt, Cmd of Caps om in/uit te schakelen (blauw gemarkeerd)
- **Toetsenbordmodi:** Normal (standaard typen) en Game (geoptimaliseerde HID-pakketheader voor game-invoer)
- **Slepen:** Pak het sleephandvat in de koptekst om het toetsenbord overal op het scherm te verplaatsen

**Extern iPad-toetsenbord:** Fysieke toetsenborden verbonden met de iPad (Bluetooth, Smart Connector, USB) worden direct doorgestuurd naar de doel-PC. Modifiertoetsen worden als druk-/loslaatgebeurtenissen verzonden, dus combinaties zoals `Ctrl+C` of `Alt+Tab` werken natuurlijk.

**Samengestelde sneltoetsen:** De app bevat een bibliotheek met veelgebruikte snelkoppelingen toegankelijk vanaf de werkbalk, geordend per categorie:

| Categorie | Voorbeelden |
|---|---|
| **Navigation** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Editing** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **System** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Application** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (macOS-schermafbeeldingen) |

---

## 3. Video-instellingen

### Resolutieweergave

De werkbalk toont de huidige invoerresolutie en FPS van het doel. De resolutie wordt bepaald door wat het doel via HDMI uitstuurt.

### Ondersteunde resoluties

| Resolutie | Frameratebereik |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Resolutie wijzigen

1. Configureer de gewenste resolutie in video-instellingen

### Beeldverhouding en schaling

| Modus | Gedrag |
|------|----------|
| **Active Resolution** | Detecteert automatisch het actieve videogebied |
| **HID Resolution** | Gebruikt resolutie van capture card-hardware |
| **Custom** | Stel handmatig een verhouding in (16:9, 4:3, 21:9, enz.) |

**Schaling:** Stretch (vult venster, kan vervormen), Fit (letterboxing), Fill (kan bijsnijden).

### Zoom

In-/uitzoomen, resetten naar passend formaat en scrollen om te pannen wanneer ingezoomd.

### Video-backend (Qt)

| Backend | Platform | Opmerkingen |
|---------|----------|-------|
| **FFmpeg** | Alle | Aanbevolen, hardwareversnelling |
| **GStreamer** | Linux | Pipeline-flexibiliteit |
| **Qt Multimedia** | Windows | Eenvoudige fallback |

Schakel via **Preferences > Video > Media Backend**. Herstart na wijziging.

### Android-videobesturing

In de Android-app zijn video-instellingen toegankelijk via het instellingenpaneel (Menu-knop ☰):

- **Video Format** — Selecteer resolutie (1920×1080, 1280×720, 640×480) en framerate (30fps, 60fps). Lagere resolutie/framerate als video haperig is.
- **Controls** — Realtime schuifregelaars voor **brightness**, **contrast** en **hue**
- **Rotate/Flip** — Draai 90° CW/CCW, spiegel horizontaal/verticaal. Handig wanneer het KVM-apparaat ondersteboven of zijwaarts is gemonteerd

De instellingen blijven behouden tussen sessies — u configureert ze slechts één keer.

### iPadOS-videobesturing

Op iPadOS zijn videobesturingen toegankelijk vanaf de onderste werkbalk:

- **Resolution Switching** — Tik op de **Video**-knop (toont huidige resolutie) om te kiezen uit: 2160p (4K), 1080p (standaard), 720p of 480p. Lagere resolutie voor betere prestaties bij langzamere verbindingen.
- **Zoom Mode** — Tik **Zoom** om de zoommodus te openen, knijp vervolgens met twee vingers om in te zoomen. Een zoomindicator toont het huidige niveau (bijv. `2.5x`). Wanneer ingezoomd, sleept u met één vinger om het viewport te pannen. Tik Zoom opnieuw om af te sluiten.
- **Fullscreen** — Tik **Fullscreen** om de werkbalk te verbergen en video over het hele scherm uit te breiden. Tik op de pijlknop linksboven om af te sluiten.
- **Screen Rotation** — Tik **Rotate** om door oriëntatiecorrectiemodi te wisselen (Normal, 90° CW, 180°, 90° CCW). Handig wanneer de KVM-Go-dongle zijwaarts of ondersteboven is gemonteerd. Rotatie geldt voor zowel live voorbeeld als opgeslagen captures.

Wanneer de camera start, verschijnt een "Starting Camera..."-laadindicator. Als geen camera is aangesloten maar machtigingen zijn verleend, wordt een gidsafbeelding getoond.

---

## 4. Audio van het doel

De HDMI-capturechip haalt audio uit het HDMI-signaal en presenteert het als USB-audio-invoer aan de host.

### Audio inschakelen

1. Klik op het audiopictogram of open audio-instellingen
2. Schakel audiocapture in
3. Selecteer het juiste invoerapparaat (bijv. "OpenterfaceA")
4. Selecteer het uitvoerapparaat van uw host

Audio is standaard uitgeschakeld op de meeste platforms.

### Volumebeheer

- **Doelzijde:** Pas aan op de doelcomputer
- **Hostzijde:** Gebruik de audiomixer van uw host-OS voor het capture-apparaat

### iPadOS-audiomonitoring

Met de iPadOS-app kunt u audio van de doel-PC beluisteren via de luidsprekers of koptelefoon van uw iPad:

- Tik op de **Audio**-knop (luidsprekerpictogram) in de werkbalk om monitoring in/uit te schakelen
- **Pictogramstatussen:** grijs doorgestreepte luidspreker = niet geautoriseerd, rood doorgestreepte luidspreker = uit, groene luidspreker met golven = aan
- Bij eerste gebruik vraagt de app om microfoonmachtiging
- Audio speelt via iPad-luidsprekers of aangesloten koptelefoon/Bluetooth-audio
- **Tijdens opname:** monitoringaudio wordt tijdelijk gedempt om feedback te voorkomen, maar audio wordt nog steeds opgenomen in het opnamebestand

---

## 5. Schermcapture en opname

### Schermafbeelding

Klik op het camerapictogram op de werkbalk. Afbeeldingen worden opgeslagen in de standaardmediamap van uw OS:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Camera captures-map (via Camera-menu)

### Opname

Klik op de opnameknop om de video- en audiostroom van het doel te starten/stoppen. Een timer verschijnt terwijl de opname actief is.

**Opname-instellingen:**
- Uitvoerformaat (MP4, AVI, MOV, MKV)
- Videobitrate, audiocodec
- Uitvoermap

### Android-schermcapture en -opname

Op Android toegankelijk via het instellingenpaneel:

- **Screen Capture** — Tik om een momentopname van het huidige videobeeld op te slaan in de standaardmediamap van uw apparaat. Vereist **Storage permission**.
- **Record Video** — Tik om opname te starten/stoppen. Bovenaan verschijnt een rode opname-indicator met timer. Video wordt opgeslagen in de standaardmediamap van uw apparaat.

**Gebruikssituaties:** het opstartproces van het doel opnemen, foutmeldingen vastleggen, configuratiestappen documenteren.

### iPadOS-schermcapture en -opname

**Schermafbeeldingen:** Tik op de **Screenshot**-knop (camerapictogram) in de werkbalk. De app legt een frame met hoge resolutie vast, corrigeert de oriëntatie en slaat op als JPEG.

**Video-opname:** Tik op de **Record**-knop om te starten/stoppen. Na stoppen toont de app de opnamedetails (duur en bestandsgrootte).

| Instelling | Waarde |
|---|---|
| **Video codec** | H.264 bij 30 fps |
| **Resolution** | Komt overeen met capture-apparaat (typisch 1920×1080) |
| **Audio codec** | AAC bij 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Bestandslocaties:**
- **App Documents:** `Documents/Recordings/` — blader via Bestanden-app > Op mijn iPad > Openterface KVM > Recordings
- **Photos App:** Als Fotobibliotheek-machtiging is verleend en ingeschakeld in instellingen
- **Bestandsnamen:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (schermafbeeldingen) of `.mov` (opnames)

**Gebruikssituaties:** het opstartproces van het doel opnemen, foutmeldingen vastleggen, configuratiestappen documenteren.

---

## 6. Verbindingsindicatoren

| Indicator | Groen | Oranje | Grijs |
|-----------|-------|--------|------|
| HDMI | Signaal gedetecteerd | Geen signaal | Onbekend |
| Keyboard | Verbonden | Niet gevonden | Onbekend |
| Mouse | Verbonden | Niet gevonden | Onbekend |

### USB-omschakeling

De USB-omschakeltoggle toont of de omschakelbare poort naar **Host** of **Target** is gerouteerd.

---

## 7. Screensaver voorkomen

Schakel **Prevent Screen Saver** in (via Edit/Device-menu of werkbalk) om periodieke gebeurtenissen te sturen die het doelscherm wakker houden.

---

## 8. Volledig scherm

Gebruik de standaard volledig-scherm-knop om het scherm met het videogebied te vullen en UI-chrome te verbergen.

---

## Volgende stappen

- **[Geavanceerde functies →](03-advanced-features.md)** — EDID, firmware, macro's, scripts, diagnostiek
- **[Probleemoplossing →](04-troubleshooting.md)** — Veelvoorkomende problemen en oplossingen
