# KVM-Tutorial 02 — Grundlegende Bedienung

**Zielgruppe:** Anfänger bis Fortgeschrittene — Funktionen für den täglichen Gebrauch

---

## 1. Maussteuerung

### Absoluter Modus (Standard)

Der Host-Mauszeiger wird direkt auf den Zielbildschirm abgebildet. Beide Zeiger sind sichtbar.

- **Am besten für:** Allgemeine Nutzung, Serververwaltung, BIOS-Navigation
- **Zeigerverhalten:** Host-Zeiger automatisch ausblenden oder immer über dem Videobereich anzeigen

### Relativer (HID-)Modus

Mausbewegungen werden als relative Deltas über die HID-Schnittstelle gesendet. Der Host-Zeiger wird ausgeblendet.

- **Am besten für:** Gaming, Anwendungen mit Raw-Mouse-Eingabe
- **Voraussetzungen:** Bedienungshilfen-Berechtigung unter macOS
- **Beenden:** Globales Tastenkürzel (macOS) oder langes Drücken von Esc (Qt)

### Android-Mausmodi

Die Android-App bietet drei Möglichkeiten zur Steuerung der Zielmaus, umschaltbar im Einstellungsbereich:

| Modus | Funktionsweise | Am besten für |
|---|---|---|
| **Absolut (Standard)** | Tippen Sie irgendwo und der Zeiger springt dorthin und klickt links. Position wird proportional abgebildet. | Die meisten Aufgaben |
| **Relativ** | Ziehen Sie mit dem Finger; der Zeiger bewegt sich relativ zu Ihrer Geste, wie bei einem Laptop-Trackpad. Heben Sie den Finger ab und der Zeiger bleibt stehen. | Feine Zeigerpositionierung |
| **Absolutes Ziehen** | Tippen und halten; der Zeiger springt und folgt Ihrem Finger. Eine Beschriftung „Drag“ erscheint. Loslassen zum Ablegen. | Dateien ziehen, Text markieren |

**Maustasten unter Android:** einmal tippen = Linksklick, langes Drücken = Rechtsklick, doppelt tippen = Doppelklick.

### iPadOS-Mausmodi

Die iPadOS-App bietet zwei Mausmodi, umschaltbar über die Mausmodus-Schaltfläche in der Symbolleiste:

| Modus | Symbol | Funktionsweise | Am besten für |
|---|---|---|---|
| **Pan-Modus** (Relativ) | Hand-Symbol | Finger wirkt wie ein Laptop-Trackpad — ziehen zum Bewegen, tippen zum Klicken | Allgemeine Desktop-Nutzung, ebene Fläche |
| **iPencil-Modus** (Absolut) | Stift-Symbol | Berührungsposition wird direkt auf Zielbildschirmkoordinaten abgebildet, wie ein Zeichentablett | Präzises Zeigen, Apple Pencil |

**Gesten in beiden Modi:**

| Geste | Pan-Modus | iPencil-Modus |
|---|---|---|
| **Einmal tippen** | Linksklick | Zeiger an Punkt bewegen + Linksklick |
| **Tippen & ziehen** | Zeiger bewegen (relativ) | Ziehen mit gedrückter linker Taste |
| **Doppeltippen** | Doppelklick | Doppelklick am Punkt |
| **Langes Drücken** | Rechtsklick | Rechtsklick am Punkt |
| **Zwei-Finger-Tippen** | Rechtsklick | Rechtsklick |
| **Zwei-Finger-Ziehen** | Scrollrad | Scrollrad |

**Schnellmenü:** Langes Drücken auf die Videovorschau öffnet ein Menü mit Linksklick, Rechtsklick und Ziehen.

**Ziehmodus:** Doppeltippen & halten oder Ziehen aus dem Schnellmenü wählen — die linke Taste bleibt gedrückt, eine Beschriftung „Dragging Mode Active“ erscheint.

### Leistungsvoreinstellungen (macOS)

Unter **Control > Mouse Mode > Performance Presets**:

| Voreinstellung | Throttle | Baudrate | Anwendungsfall |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Langsame Zielgeräte |
| Casual Use | 80 Hz | 9600 | Tägliche Serververwaltung |
| Gaming | 250 Hz | 115200 | Reaktionsschnelles Gaming |
| Max Performance | 1000 Hz | 115200 | Maximale Reaktionsfähigkeit |

Höherer Throttle = reaktionsschneller. Höhere Baudrate = schnellere serielle Kommunikation.

---

## 2. Tastatureingabe

### Standardeingabe

Alle Tastendrücke, die eingegeben werden, während das App-Fenster fokussiert ist, werden an das Ziel weitergeleitet.

### Sondertasten

Tastenkombinationen über das Symbolleisten-Tastenfeld oder **Control > Special Keys** senden:

- **F1–F12:** Funktionstasten
- **Ctrl+Alt+Del:** Windows-Dreifinger-Salut
- **Print Screen:** Screenshot-Taste
- **Ctrl+Alt+F2:** Linux-VT-Umschaltung

### Tastaturlayout

Legen Sie das Ziel-OS-Layout passend zum Zielcomputer fest:

| Layout | Verhalten |
|--------|----------|
| **Windows** | Ordnet Host-Tasten Windows-Konventionen zu |
| **Mac** | Ordnet Host-Tasten Mac-Konventionen zu |
| **Linux** | Ordnet Host-Tasten Linux-Konventionen zu |

Regionale Layouts (QWERTY UK, Dänisch, QWERTZ Deutsch, AZERTY Französisch, Japanisch usw.) sind in der Qt-Anwendung ebenfalls verfügbar.

### In Ziel einfügen

Die App sendet Zwischenablage-Text als emulierte Tastendrücke an das Ziel. Nützlich für Benutzernamen, Befehle, URLs.

> **Hinweis:** Es werden nur ASCII-Zeichen unterstützt. Langer Text kann bei älteren/ausgelasteten Systemen Formatierung verlieren oder Zeichen auslassen.

**Einfügeverhalten konfigurieren (macOS):**
- **Ask Every Time:** Fragt jedes Mal Host oder Ziel
- **Host Paste:** Sendet immer an das Ziel
- **Local Paste:** Fügt immer auf dem Host ein

### Android-Bildschirmtastatur

Die Android-App bietet eine vollständige Bildschirmtastatur über die Tastatur-Schaltfläche (⌨) unten rechts auf dem Hauptbildschirm:

| Steuerung | Funktion |
|---|---|
| **ShortCut** | Vorgefertigte Tastenkürzel: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4 usw. |
| **Function** | F1–F12, PrtSc, ScrLk, Navigationstasten (Ins, Home, PgUp usw.), Pfeiltasten |
| **System** | QWERTY-Layout mit Buchstaben, Zahlen, Satzzeichen, Backspace, Enter |
| **Modifikatortasten** | Ctrl, Shift, Alt, Win — Umschalttasten, die nach der nächsten Taste automatisch zurückgesetzt werden |

Um eine Kombination wie **Ctrl+Alt+Del** zu senden: Ctrl tippen (hervorgehoben), Alt tippen (beide hervorgehoben), Del tippen. Alle Modifikatoren werden nach dem Senden automatisch zurückgesetzt.

Die Tastatur unterstützt auch **verschiedene regionale Layouts** (US, Japanisch JIS, Deutsch QWERTZ usw.), wählbar im Einstellungsbereich. Zoom-Schaltflächen ermöglichen die Anpassung der Tastengröße.

### iPadOS-Tastatureingabe

Die iPadOS-App unterstützt zwei Tastatureingabemethoden:

**Schwebende Bildschirmtastatur:** Tippen Sie auf die Schaltfläche **Keyboard** in der Symbolleiste, um eine verschiebbare schwebende Tastatur mit Mac-Layout anzuzeigen:

| Zeile | Tasten |
|---|---|
| **Oben** | Esc, F1–F12, Del |
| **Zahlen** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Grundreihe** | Caps, a–l, ;, ', Enter |
| **Unten** | Shift, z–m, ,, ., /, Shift |
| **Modifikatoren** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Modifikatoren umschalten:** Tippen Sie Ctrl, Shift, Alt, Cmd oder Caps zum Ein-/Ausschalten (blau hervorgehoben)
- **Tastaturmodi:** Normal (Standardtippen) und Game (optimierter HID-Paketheader für Spieleingabe)
- **Verschieben:** Ziehen Sie am Ziehpunkt in der Kopfzeile, um die Tastatur überall auf dem Bildschirm zu positionieren

**Externe iPad-Tastatur:** Physische Tastaturen, die mit dem iPad verbunden sind (Bluetooth, Smart Connector, USB), werden direkt an den Ziel-PC durchgereicht. Modifikatortasten werden als Drücken/Loslassen-Ereignisse gesendet, sodass Kombinationen wie `Ctrl+C` oder `Alt+Tab` natürlich funktionieren.

**Zusammengesetzte Tastenkürzel:** Die App enthält eine Bibliothek gängiger Tastenkürzel über die Symbolleiste, nach Kategorie sortiert:

| Kategorie | Beispiele |
|---|---|
| **Navigation** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Bearbeitung** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **System** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Anwendung** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (macOS-Screenshots) |

---

## 3. Videoeinstellungen

### Auflösungsanzeige

Die Symbolleiste zeigt die aktuelle Eingabeauflösung und FPS vom Ziel. Die Auflösung wird durch die HDMI-Ausgabe des Ziels bestimmt.

### Unterstützte Auflösungen

| Auflösung | Bildfrequenzbereich |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Auflösung ändern

1. Bevorzugte Auflösung in den Videoeinstellungen konfigurieren

### Seitenverhältnis & Skalierung

| Modus | Verhalten |
|------|----------|
| **Active Resolution** | Erkennt automatisch den aktiven Videobereich |
| **HID Resolution** | Verwendet Auflösung der Capture-Card-Hardware |
| **Custom** | Seitenverhältnis manuell festlegen (16:9, 4:3, 21:9 usw.) |

**Skalierung:** Stretch (füllt Fenster, kann verzerren), Fit (Letterboxing), Fill (kann beschneiden).

### Zoom

Vergrößern/Verkleinern, auf Anpassung zurücksetzen und scrollen zum Schwenken bei gezoomter Ansicht.

### Video-Backend (Qt)

| Backend | Plattform | Hinweise |
|---------|----------|-------|
| **FFmpeg** | Alle | Empfohlen, Hardwarebeschleunigung |
| **GStreamer** | Linux | Pipeline-Flexibilität |
| **Qt Multimedia** | Windows | Einfacher Fallback |

Wechseln über **Preferences > Video > Media Backend**. Nach Änderung neu starten.

### Android-Video-Steuerung

In der Android-App sind Videoeinstellungen über den Einstellungsbereich (Menü-Schaltfläche ☰) erreichbar:

- **Video Format** — Auflösung wählen (1920×1080, 1280×720, 640×480) und Bildrate (30fps, 60fps). Niedrigere Auflösung/Bildrate bei ruckelndem Video.
- **Controls** — Echtzeit-Regler für **brightness**, **contrast** und **hue**
- **Rotate/Flip** — 90° im Uhrzeigersinn/gegen den Uhrzeigersinn drehen, horizontal/vertikal spiegeln. Nützlich, wenn das KVM-Gerät auf dem Kopf oder seitlich montiert ist

Die Einstellungen bleiben zwischen Sitzungen erhalten — Sie konfigurieren sie nur einmal.

### iPadOS-Video-Steuerung

Unter iPadOS sind Video-Steuerungen über die untere Symbolleiste erreichbar:

- **Resolution Switching** — Tippen Sie auf die Schaltfläche **Video** (zeigt aktuelle Auflösung), um zu wählen: 2160p (4K), 1080p (Standard), 720p oder 480p. Niedrigere Auflösung für bessere Leistung bei langsamen Verbindungen.
- **Zoom Mode** — Tippen Sie auf **Zoom**, um in den Zoom-Modus zu wechseln, dann mit zwei Fingern zoomen. Ein Zoom-Indikator zeigt die aktuelle Stufe (z. B. `2.5x`). Bei Zoom ein Finger ziehen zum Schwenken. Erneut Zoom tippen zum Beenden.
- **Fullscreen** — Tippen Sie auf **Fullscreen**, um die Symbolleiste auszublenden und das Video auf den gesamten Bildschirm zu erweitern. Pfeil-Schaltfläche oben links zum Beenden.
- **Screen Rotation** — Tippen Sie auf **Rotate**, um Orientierungskorrekturmodi zu durchlaufen (Normal, 90° CW, 180°, 90° CCW). Nützlich, wenn der KVM-Go-Dongle seitlich oder auf dem Kopf montiert ist. Rotation gilt für Live-Vorschau und gespeicherte Aufnahmen.

Beim Start der Kamera erscheint ein Ladeindikator „Starting Camera...“. Wenn keine Kamera verbunden ist, aber Berechtigungen erteilt wurden, wird ein Leitbild angezeigt.

---

## 4. Audio vom Ziel

Der HDMI-Capture-Chip extrahiert Audio aus dem HDMI-Signal und stellt es dem Host als USB-Audioeingang bereit.

### Audio aktivieren

1. Auf das Audio-Symbol klicken oder Audioeinstellungen öffnen
2. Audioaufnahme aktivieren
3. Richtiges Eingabegerät wählen (z. B. „OpenterfaceA“)
4. Ausgabegerät Ihres Hosts wählen

Audio ist auf den meisten Plattformen standardmäßig deaktiviert.

### Lautstärkeregelung

- **Zielseite:** Am Zielcomputer anpassen
- **Hostseite:** Host-OS-Audiomixer für das Capture-Gerät verwenden

### iPadOS-Audio-Monitoring

Die iPadOS-App ermöglicht das Abhören des Ziel-PC-Audios über iPad-Lautsprecher oder Kopfhörer:

- Tippen Sie auf die Schaltfläche **Audio** (Lautsprecher-Symbol) in der Symbolleiste zum Umschalten des Monitorings
- **Symbolzustände:** grauer durchgestrichener Lautsprecher = nicht autorisiert, roter durchgestrichener Lautsprecher = aus, grüner Lautsprecher mit Wellen = an
- Beim ersten Gebrauch fordert die App Mikrofonberechtigung an
- Audio wird über iPad-Lautsprecher oder verbundene Kopfhörer/Bluetooth-Audio wiedergegeben
- **Während der Aufnahme:** Monitoring-Audio wird vorübergehend stummgeschaltet, um Feedback zu vermeiden; Audio wird weiterhin in die Aufnahmedatei erfasst

---

## 5. Bildschirmaufnahme & Aufzeichnung

### Screenshot

Klicken Sie auf das Kamera-Symbol in der Symbolleiste. Bilder werden im Standard-Medienordner Ihres OS gespeichert:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Camera captures folder (über Camera-Menü)

### Aufzeichnung

Klicken Sie auf die Aufnahme-Schaltfläche, um den Video- und Audio-Stream des Ziels zu starten/stoppen. Während der Aufnahme erscheint ein Timer.

**Aufnahmeeinstellungen:**
- Ausgabeformat (MP4, AVI, MOV, MKV)
- Video-Bitrate, Audio-Codec
- Ausgabeverzeichnis

### Android-Bildschirmaufnahme & Aufzeichnung

Unter Android über den Einstellungsbereich:

- **Screen Capture** — Tippen, um einen Schnappschuss des aktuellen Videobilds im Standard-Medienordner des Geräts zu speichern. Erfordert **Storage permission**.
- **Record Video** — Tippen zum Starten/Stoppen der Aufnahme. Ein roter Aufnahmeindikator mit Timer erscheint oben. Video wird im Standard-Medienordner des Geräts gespeichert.

**Anwendungsfälle:** Bootvorgang des Ziels aufzeichnen, Fehlermeldungen erfassen, Konfigurationsschritte dokumentieren.

### iPadOS-Bildschirmaufnahme & Aufzeichnung

**Screenshots:** Tippen Sie auf die Schaltfläche **Screenshot** (Kamera-Symbol) in der Symbolleiste. Die App erfasst ein hochauflösendes Bild, korrigiert die Orientierung und speichert als JPEG.

**Video Recording:** Tippen Sie auf **Record** zum Starten/Stoppen. Nach dem Stoppen zeigt die App Aufnahmedetails (Dauer und Dateigröße).

| Einstellung | Wert |
|---|---|
| **Video codec** | H.264 at 30 fps |
| **Resolution** | Entspricht Capture-Gerät (typisch 1920×1080) |
| **Audio codec** | AAC at 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Dateispeicherorte:**
- **App Documents:** `Documents/Recordings/` — über Dateien-App > Auf meinem iPad > Openterface KVM > Recordings
- **Photos App:** Wenn Fotobibliothek-Berechtigung erteilt und in Einstellungen aktiviert
- **Dateinamen:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (Screenshots) oder `.mov` (Aufnahmen)

**Anwendungsfälle:** Bootvorgang des Ziels aufzeichnen, Fehlermeldungen erfassen, Konfigurationsschritte dokumentieren.

---

## 6. Verbindungsindikatoren

| Indikator | Grün | Orange | Grau |
|-----------|-------|--------|------|
| HDMI | Signal erkannt | Kein Signal | Unbekannt |
| Keyboard | Verbunden | Nicht gefunden | Unbekannt |
| Mouse | Verbunden | Nicht gefunden | Unbekannt |

### USB-Umschaltung

Der USB-Umschalt-Toggle zeigt, ob der umschaltbare Port an **Host** oder **Target** geroutet ist.

---

## 7. Bildschirmschoner verhindern

Aktivieren Sie **Prevent Screen Saver** (über Edit/Device-Menü oder Symbolleiste), um periodische Ereignisse zu senden, die das Zieldisplay wach halten.

---

## 8. Vollbildmodus

Verwenden Sie die Standard-Vollbild-Schaltfläche, um den Bildschirm mit dem Videobereich zu füllen und die UI-Chrome auszublenden.

---

## Nächste Schritte

- **[Erweiterte Funktionen →](03-advanced-features.md)** — EDID, Firmware, Makros, Skripte, Diagnose
- **[Fehlerbehebung →](04-troubleshooting.md)** — Häufige Probleme und Lösungen
