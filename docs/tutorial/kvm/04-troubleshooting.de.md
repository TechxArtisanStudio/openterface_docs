
# KVM-Tutorial 04 — Fehlerbehebung

Häufige Probleme und Lösungen für Openterface KVM-Geräte.

---

## Gerät wird nicht erkannt

### Symptome
- „No devices found“ im Gerätemenü
- Tastatur- und Maus-Indikatoren zeigen Orange oder Grau
- Serieller Port zeigt „N/A“

### Diagnose

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Erwartet: `534d:2109` (HDMI-Capture) und `1a86:7523` oder `1a86:fe0c` (Serial).

**macOS:** Apple-Menü > Über diesen Mac > Systembericht > Hardware > USB — nach Openterface suchen.

**Windows:** Geräte-Manager > „USB-Controller“ und „Anschlüsse (COM & LPT)“ — CH340 sollte als „USB-SERIAL CH340 (COMx)“ erscheinen.

### Lösungen

| Problem | Behebung |
|---------|-----|
| Gerät nicht in lsusb/Systembericht | Anderes USB-Kabel/Port versuchen. USB 2.0+ erforderlich |
| Gerät sichtbar, aber keine Knoten | udev-Regeln prüfen (Linux) oder Treiber neu installieren (Windows) |
| Zugriff verweigert | Benutzer zu `dialout`- und `video`-Gruppen hinzufügen (Linux) |
| Erkannt, dann verschwunden | `brltty` beansprucht den seriellen Port (Linux) — siehe unten |

---

## BrlTTY-Konflikt (Linux) {#brltty-conflict-linux}

**Die häufigste Ursache für Tastatur-/Mausausfall unter Linux.**

Der `brltty`-Dienst (Braille-Terminal) beansprucht USB-Serial-Geräte, einschließlich des CH9329/CH32V208-Chips.

### Behebung
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Kein Video / Schwarzer Bildschirm

### Schritte

1. **HDMI-Kabel** an beiden Enden fest angeschlossen prüfen
2. **Zielgerät** prüfen, ob es HDMI ausgibt (mit normalem Monitor testen)
3. **Anderes HDMI-Kabel** versuchen
4. **Gerät neu verbinden** — die App verarbeitet Hot-Plug-Ereignisse
5. **Video-Chipset-Erkennung prüfen:** Unterstützt: MS2109, MS2109S, MS2130S

### Backend-Auswahl (Qt)

Wenn ein Backend einen schwarzen Bildschirm zeigt, über **Preferences > Video > Media Backend** ein anderes versuchen:
- **FFmpeg** — Am zuverlässigsten (empfohlen)
- **GStreamer** — Nur Linux
- **Qt Multimedia** — Windows-Fallback

### GStreamer-Probleme (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Anderen Sink versuchen:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID-Konflikt

Wenn das Ziel die EDID nicht erkennt, gibt es möglicherweise keine kompatible Auflösung aus. Ziel-Ausgabeauflösung ändern oder EDID über die Anzeigeeinstellungen der App bearbeiten.

---

## Tastatur/Maus reagiert nicht

### Schritte

1. **USB-Umschalter** prüfen — auf **Target** stellen, nicht Host
2. **Seriellen Port-Status** prüfen — Portname anzeigen, nicht „N/A“
3. **Baudrate wechseln** — 9600 oder 115200
4. **Steuer-Chipset** prüfen — Unterstützt: CH9329, CH32V208
5. **CTS-Überwachung** prüfen — Die App überwacht Clear-To-Send-Leitungen für HID-Ereignisse

### Maus-spezifische Probleme

- **Relativer Modus unter macOS:** Erfordert Bedienungshilfen-Berechtigung. **System Settings > Privacy & Security > Accessibility** prüfen
- **Absoluter Modus:** Seitenverhältnis muss zur Zielanzeige passen
- **Mausverzögerung:** Höheres Leistungs-Preset oder höhere Baudrate versuchen
- **Serieller Port-Konflikte (Linux):** Andere Apps schließen, die den Port nutzen: `sudo lsof /dev/ttyUSB0`

---

## Audio wird nicht abgespielt

### Schritte

1. **Audio aktivieren** über Audio-Symbol > Enable Audio
2. **Mikrofonberechtigung** prüfen — System Settings > Privacy & Security > Microphone (macOS)
3. **Richtiges Eingabegerät** wählen — „OpenterfaceA“ oder Capture-Gerätename
4. **Richtiges Ausgabegerät** wählen — Lautsprecher oder Kopfhörer
5. **HDMI-Audioausgabe des Ziels** prüfen — Ist das Ziel für Audio über HDMI konfiguriert?

---

## USB-Serial-Treiberprobleme

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Bei Bedarf WCH CH34x-Treiber von [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos) installieren. In **System Settings > General > Login Items & Extensions > Driver Extensions** aktivieren.

### Windows

Wenn der Serial-Chip nicht im Geräte-Manager erscheint, CH340/CH341-Treiber installieren. Installer enthält ihn meist; bei Portable-Builds separat herunterladen.

### Linux

Der CH340-Treiber (`ch341`-Modul) ist im Kernel enthalten:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Firmware-Update schlägt fehl

### USB-Stabilität

- Während des Flashvorgangs nicht abziehen
- Host nicht in den Ruhezustand versetzen
- Direkten USB-Port verwenden (Hubs vermeiden)

### Wiederherstellung

1. Stromzyklus: USB abziehen, 10 Sekunden warten, wieder verbinden
2. ISP-Modus erneut betreten (einige Geräte: Taste beim Einschalten gedrückt halten)
3. Serial Reset Tool zum erneuten Flashen des Bootloaders verwenden
4. Bei Brick Support kontaktieren

---

## Leistungsprobleme

### Hohe CPU-Auslastung

1. **Hardware-Beschleunigung aktivieren** — Preferences > Video > Hardware Acceleration (VAAPI, V4L2-M2M)
2. **Auflösung senken** — 720p nutzt deutlich weniger CPU als 1080p
3. **Bildrate senken** — 15fps halbiert die Decode-Last
4. **Backend wechseln** — FFmpeg mit HW-Beschleunigung nutzt typischerweise weniger CPU als GStreamer

### Frame-Drops

FPS-Zähler in der Statusleiste prüfen. Liegt die tatsächliche FPS unter dem Ziel, ist die Pipeline der Engpass. Frame-Dropping im FFmpeg-Frame-Processor aktivieren, um flüssige Wiedergabe zu priorisieren.

---

## Protokollierung und Diagnose

### Protokollierung aktivieren

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > Log-Level und Dateipfad setzen

### Serial-Konsole (Qt)

Über **Device > Serial Port Debug** öffnen — zeigt Echtzeit-Serial-Protokollmeldungen mit Filtern für Keyboard, Mouse, HID, Chip Info.

---

## Plattformspezifische Probleme

### Linux: Qt-Plattform-Plugin

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: Wayland-Video-Probleme

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: CH340-Treiber

Wenn die Treiberinstallation fehlschlägt: Treibersignaturerzwingung vorübergehend deaktivieren, dann manuell über den Geräte-Manager installieren.

### Raspberry Pi: Video-Ruckeln

Auf Pi 3 oder Pi 4 mit wenig RAM:
1. Auflösung auf 720p senken
2. FFmpeg-Backend verwenden (nicht GStreamer)
3. 9600 Baud für Serial-Stabilität

---

## Android-spezifische Probleme

### Gerät wird nicht erkannt

**Symptom:** Videovorschau zeigt Platzhalter, nicht den Zielbildschirm.

1. **USB-OTG-Verbindung** prüfen — Kabel ab- und wieder anstecken
2. **OTG-Unterstützung** prüfen — USB-Stick anschließen, um OTG zu bestätigen
3. **KVM-Gerät** prüfen — Ist es eingeschaltet? Leuchten Indikatoren?
4. **Anderes Kabel** versuchen — manche OTG-Adapter sind defekt
5. **App neu starten** — vollständig schließen (aus letzten Apps wischen) und erneut öffnen
6. **USB-Berechtigung** prüfen — bei Systemdialog **Allow** tippen

### Kein Video

**Symptom:** Gerät erkannt, aber Bildschirm schwarz oder eingefroren.

1. **HDMI-Kabel** prüfen — Ist HDMI des Ziel-PCs fest am KVM-HDMI-Eingang?
2. **Zielausgabe** prüfen — Zeigt der Ziel-PC tatsächlich etwas an?
3. **Niedrigere Auflösung** versuchen — Einstellungen → **Video Format** → niedrigere Auflösung
4. **Kameraberechtigung** prüfen — Android-Einstellungen → Apps → Openterface → Berechtigungen → Camera erlauben
5. **App neu starten**

### Maus reagiert nicht

**Symptom:** Video funktioniert, Tippen auf dem Bildschirm bewirkt am Ziel nichts.

1. **USB-Verbindung für HID** prüfen — Einstellungen → **Device**, Gerät aktiv?
2. **Anderen Mausmodus** versuchen — zwischen Absolute und Relative wechseln
3. **Trennen und neu verbinden** — roten **Disconnect Device**-Button, dann erneut verbinden
4. **Ziel-PC** prüfen — Erkennt er USB-Tastatur/Maus? USB-Kabel am Ziel ab- und anstecken

### Tastatur sendet keine Tasten

**Symptom:** Maus funktioniert, Tippen bewirkt nichts.

1. **Tastatur geöffnet** — Tastatur-Button tippen
2. **Serial-Verbindung** prüfen — Einstellungen → **Device**, aktiv?
3. **Baudrate** prüfen — Einstellungen → **Baudrate**, passend zum Gerät (Standard 115200)
4. **Tastaturlayout** prüfen — richtiges Layout (US, JP, DE) gewählt

### App stürzt ab oder friert ein

1. App **schließen und neu starten**
2. **Videoauflösung und Bildrate senken** — hohe Einstellungen können Geräte mit wenig RAM überlasten
3. **Verfügbaren Speicher** prüfen — wenig Speicher verursacht Instabilität
4. **App aktualisieren** — neuere Version bei Google Play oder GitHub Releases

### Screenshots oder Aufnahmen werden nicht gespeichert

1. **Storage-Berechtigung** prüfen — Android-Einstellungen → Apps → Openterface → Berechtigungen → Storage
2. **Verfügbaren Speicherplatz** auf dem Gerät prüfen
3. Aufnahmen und Screenshots werden im Standard-Medienordner des Geräts gespeichert

### Logs sammeln (Android)

Wenn normale Fehlerbehebung nicht hilft, Logs für Maintainer sammeln:

```bash
adb logcat | grep -i openterface > openterface.log
```

Diese Datei beim Öffnen eines GitHub-Issues beifügen.

---

## iPadOS-spezifische Probleme

> **Hinweis:** iPadOS wird nur auf **KVM-Go** unterstützt. Bei Mini-KVM oder uConsole KVM Extension funktioniert die iPadOS-App nicht.

### Bluetooth verbindet nicht

**Symptom:** BLE-Button wird nicht grün oder keine Geräte in der Scan-Liste.

1. **Bluetooth auf dem iPad aktiviert** — Einstellungen > Bluetooth
2. **KVM-Go eingeschaltet** — Dongle am USB-Port des Ziel-PCs
3. **iPad näher an KVM-Go-Dongle** — BLE-Reichweite typisch bis 10 Meter
4. **iPad-Bluetooth-Berechtigung** — Einstellungen > Privacy & Security > Bluetooth > Openterface erlauben
5. **Refresh** im BLE-Bildschirm für erneuten Scan
6. **Openterface-App-Bluetooth-Berechtigung** — bei Ablehnung beim ersten Start in Einstellungen wieder aktivieren

### Keine Videovorschau

**Symptom:** BLE verbunden, aber Bildschirm schwarz oder Anleitungsbild.

1. **HDMI-Verbindung** — HDMI-Ausgang des Ziel-PCs fest am KVM-Go-HDMI-Eingang?
2. **Zielausgabe** — Zeigt der Ziel-PC tatsächlich etwas an?
3. **Niedrigere Auflösung** — Video-Button, niedrigere Auflösung (720p oder 480p)
4. **Kameraberechtigung** — Einstellungen > Privacy & Security > Camera > Openterface erlauben
5. **App neu starten** — aus letzten Apps nach oben wischen und erneut öffnen

### Maus/Touch reagiert nicht

**Symptom:** Video funktioniert, Tippen bewirkt am Ziel nichts.

1. **BLE-Verbindung** — BLE-Button grün mit RSSI-Wert
2. **Anderen Mausmodus** — zwischen Pan Mode und iPencil Mode wechseln
3. **Trennen und neu verbinden** — BLE-Bildschirm, Disconnect, dann Connect
4. **Ziel-PC** — Erkennt er KVM-Go als USB-Tastatur/Maus?

### Tastatur sendet keine Tasten

**Symptom:** Maus funktioniert, Tippen bewirkt nichts.

1. **Schwebende Tastatur geöffnet** — Keyboard-Button
2. **BLE-Verbindung** — Eingabe über Bluetooth, nicht USB
3. **Tastaturmodus** — zwischen Normal und Game wechseln
4. **Externe Tastatur:** Bei physischer iPad-Tastatur prüfen, ob iPadOS Tastenereignisse an die App weiterleitet

### Audio wird nicht abgespielt

**Symptom:** Video funktioniert, Ziel-PC-Audio über iPad nicht hörbar.

1. **Audio-Button** — grünes Lautsprecher-Symbol
2. **Mikrofonberechtigung** — Einstellungen > Privacy & Security > Microphone > Openterface erlauben
3. **iPad-Lautstärke** — nicht stumm oder auf Minimum
4. **Ziel-Audioausgabe** — Ist der Ziel-PC für Audio über HDMI konfiguriert?

### App stürzt ab oder friert ein

1. App **schließen und neu starten**
2. **Videoauflösung senken** — hohe Auflösung belastet ältere iPads
3. **Verfügbaren Speicher** prüfen
4. **App aktualisieren** — neuere Version im App Store

### Screenshots oder Aufnahmen werden nicht gespeichert

1. **Photo Library-Berechtigung** — Einstellungen > Privacy & Security > Photos > Openterface erlauben
2. **Verfügbaren Speicher** auf dem iPad prüfen
3. **Über Dateien-App** — Aufnahmen werden in `Documents/Recordings/` gespeichert, auch ohne Photo Library-Zugriff

---

## Werksreset

1. Serial Reset Tool aus Settings (macOS) oder Device-Menü (Qt) verwenden
2. Setzt den HID-Chip auf Werkseinstellungen zurück
3. Gerät nach Reset neu verbinden

## Verbindungswiederherstellung

Die Anwendungen behandeln automatische Wiederherstellung für:
- Gerätetrennung/-wiederverbindung (Hot-Plug für USB, BLE-Reconnect für iPadOS)
- Kommunikations-Timeouts
- Chipset-Fallbacks (MS2109 → MS2109S → MS2130S)
- Serial-Port-Wiederherstellung
- iPadOS BLE-Auto-Reconnect (bis zu 3 Versuche mit 2-Sekunden-Verzögerung)

## Fehlerberichte einreichen

1. Protokollierung in Datei aktivieren
2. Problem reproduzieren
3. Über [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) oder E-Mail an info@techxartisan.com einreichen
