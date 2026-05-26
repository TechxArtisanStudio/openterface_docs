
# KVM-Tutorial 03 — Erweiterte Funktionen

**Zielgruppe:** Fortgeschrittene bis Experten — Power-User-Funktionen und Konfiguration

---

## 1. Einstellungssystem

### Video

- **Auflösung & Bildrate** — Bevorzugte Capture-Einstellungen
- **Media-Backend** — FFmpeg, GStreamer (Linux) oder Qt Multimedia (Windows)
- **Hardware-Beschleunigung** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Seitenverhältnis & Skalierung** — Benutzerdefiniertes Verhältnis, Stretch/Fit/Fill

### Audio

- **Aktiviert** — Audio-Capture vom Ziel ein-/ausschalten
- **Ein-/Ausgabegerät** — Quelle und Wiedergabegerät auswählen

### Zielsteuerung

- **Mausmodus** — Absolut, Relativ (HID), Relativ (Events)
- **Mausereignis-Drosselung** — 30–1000 Ereignisse/Sekunde
- **Tastaturlayout** — Ziel-OS und regionale Layouts
- **Wiederholungsintervall für Tasten** — Wiederholgeschwindigkeit bei gedrückter Taste
- **Cursor automatisch ausblenden** — Host-Cursor über dem Videobereich ausblenden

### Protokollierung

- **Log-Level** — Debug, Info, Warning, Error
- **In Datei protokollieren** — `~/Documents/openterface.log` (macOS) oder konfigurierter Pfad (Qt)
- **Serial-Protokollierung** — Separates Serial-Kommunikationsprotokoll

---

## 2. EDID-Verwaltung

### Was ist EDID?

EDID (Extended Display Identification Data) sind die Daten, die das KVM-Gerät an das Ziel sendet, um dessen Anzeigefähigkeiten zu beschreiben — unterstützte Auflösungen, Bildwiederholraten, Herstellerinformationen. Das KVM fungiert als „virtueller Monitor“, daher bestimmt EDID, welche Auflösungen das Ziel ausgibt.

### EDID-Anzeigenamen bearbeiten

Sie können den Anzeigenamen ändern, den das KVM-Gerät dem Ziel meldet. Dieser Name erscheint in den Anzeigeeinstellungen des Ziel-OS.

> **Hinweis:** Derzeit wird nur die Bearbeitung des Anzeigenamens unterstützt. Auflösungsbearbeitung und benutzerdefinierte Auflösungseinträge sind noch nicht verfügbar.

**Zugriff:** Settings > EDID Display Name Editor (macOS) oder Device > Update Display Settings (Qt)

### Anwendungsfälle

- **Display im Ziel-OS identifizieren**
- **Benutzerdefinierte Benennung** in Multi-Monitor-Setups zur Unterscheidung des KVM-Displays

---

## 3. Makrosystem (macOS)

Makros sind gespeicherte Tastaturaktionssequenzen, die über das Makro-Panel in der Symbolleiste ausgelöst werden.

### Tastensequenz-Format

**Modifikator-Tags:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (mappt je nach Ziel-OS auf Cmd/Win/Super)

**Sondertasten:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Verzögerungen:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Beispiele

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### KI-gestützte Generierung

Die **Magic**-Schaltfläche im Makro-Editor generiert Makros aus natürlicher Sprache. Beschreiben Sie, was Sie möchten, und die KI erzeugt die Tastensequenz.

### Verifizierung

Markieren Sie Makros nach dem Testen als **verified** (verifiziert). Nur verifizierte Makros stehen dem KI-Agenten für autonome Ausführung zur Verfügung.

---

## 4. Script Tool (Qt)

Eine von AutoHotKey inspirierte Skriptsprache zur Automatisierung von Tastatur- und Mausaktionen auf dem Ziel.

### Öffnen

Menü: **Device > Script Tool**

### Befehle

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Ausführung pausieren | `Sleep 1000` |
| `Send` | Tastendrücke senden | `Send Hello World` |
| `Click` | Mausklick | `Click 100 200` |
| `SetCapsLockState` | CapsLock umschalten | `SetCapsLockState On` |
| `FullScreenCapture` | Screenshot | `FullScreenCapture "/tmp/shot.png"` |

### Modifikator-Präfixe

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Firmware-Updates

### Wann aktualisieren

- Neue Hardware-Funktionen
- Fehlerbehebungen
- Kompatibilitätsverbesserungen

### Update-Prozess

1. Firmware Update Tool öffnen (**Settings > Firmware Update Tool** unter macOS, **Device > Update Firmware** unter Qt)
2. Das Tool prüft die neueste Version im Netzwerk
3. Der Fortschritt wird während des Schreibvorgangs angezeigt
4. **Gerät während des Updates nicht trennen**

### Wiederherstellung

1. Gerät mit Strom versorgen
2. Firmware Update Tool schließen und erneut öffnen, erneut versuchen
3. Serial Reset Tool verwenden, wenn das Gerät nicht reagiert

---

## 6. Serial Reset Tool

**Zugriff:** Settings > Serial Reset Tool (macOS) oder Device > Factory Reset HID Chip (Qt)

Verwenden, wenn:
- Gerät nach fehlgeschlagenem Firmware-Update in unbekanntem Zustand
- HID-Chip reagiert nicht
- Gerät für Weiterverkauf vorbereitet wird

---

## 7. Diagnose (Qt)

Menü: **Device > Device Diagnostics**

Führt Hardware-Tests nacheinander aus:
1. Serial-Verbindungstest
2. Ziel-USB-Status
3. Werksreset-Test
4. Hoch-/Niedrig-Baudrate-Test
5. Stresstest (schnelle Befehle, Erfolgsrate messen)
6. Plug-and-Play-Test (USB-Trennung/Wiederverbindungserkennung)

Nach dem Ausführen Ergebnisse über den **Support Email Dialog** exportieren.

---

## 8. KI-Chat-System (macOS)

Integrierter KI-Assistent, der den Zielbildschirm analysieren, Aktionen vorschlagen und Tastatur-/Mausoperationen ausführen kann.

### Chat-Modi

| Mode | Description |
|------|-------------|
| **Interactive** | Fragen stellen, Anleitung erhalten |
| **Agentic** | KI plant und führt autonom mehrstufige Aufgaben aus |
| **Guide** | Eine Anweisung nach der anderen, Schritt für Schritt |
| **Planner** | Komplexe Anfragen in strukturierte Pläne zerlegen |

### Konfiguration

Settings > AI Chat: API-Endpunkt, Schlüssel (in Keychain gespeichert), Modell, Zielsystem (macOS/Windows/Linux usw.)

---

## 9. Fernsteuerung (VNC/RDP — macOS)

Wechseln zwischen **Hardware KVM**, **VNC** und **RDP** über **Control > Connection Protocol**.

| Scenario | Mode |
|----------|------|
| Ziel in BIOS/UEFI, kein Netzwerk, beim Booten, abgestürzt | Hardware KVM |
| Desktop-Nutzung mit hoher Bandbreite, Windows-Server | VNC oder RDP |

---

## 10. TCP-Server (Qt)

Integrierter TCP-Server für Fernsteuerung auf Port 12345.

### Befehle

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Python-Beispiel

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Sicherheit:** Keine Authentifizierung, Verschlüsselung oder Ratenbegrenzung. Nur in vertrauenswürdigen Netzwerken aktivieren.

---

## iPadOS-spezifische Funktionen

### Bluetooth-Verbindungsverwaltung

Die iPadOS-App verbindet sich über **Bluetooth Low Energy (BLE)** mit dem KVM-Go-Dongle für Tastatur-/Maus-HID-Eingabe:

- **Auto-Connect:** Standardmäßig aktiviert. Beim Start scannt die App 5 Sekunden und verbindet sich automatisch mit dem `kvm*`-Gerät mit dem stärksten Signal.
- **Wiederverbindung:** Bei Verbindungsabbruch versucht die App bis zu 3-mal mit 2 Sekunden Verzögerung erneut zu verbinden.
- **Signalüberwachung:** RSSI wird alle 2 Sekunden aktualisiert. Die BLE-Schaltfläche zeigt die Signalstärke (z. B. `-45 dBm`) mit Farbindikator: grün (-50 bis 0 dBm), orange (-70 bis -50 dBm), rot (unter -70 dBm).
- **Geräte-Scan:** Nur Geräte, deren Name mit `kvm` beginnt (Groß-/Kleinschreibung ignorieren), erscheinen in der Liste.
- **Manuelle Steuerung:** BLE-Bildschirm öffnen zum Scannen, Verbinden, Trennen oder Deaktivieren von Auto-Connect.

### Info-Overlay

Tippen Sie auf **Info**, um ein Echtzeit-Eingabestatus-Overlay oben rechts anzuzeigen:

```
┌─ Eingabestatus ────────┐
│ Maus                   │
│ Modus: Absolute        │
│ Position: 512.0, 384.0 │
│ Ziehmodus: Active      │
│ Scrollen: Inactive     │
│ Tastatur               │
│ Modus: Normal          │
│ Caps Lock: OFF         │
│ Modifikatoren: Ctrl, Shift │
└────────────────────────┘
```

Das Overlay ist berührungstransparent — es blockiert keine Interaktion mit der Videovorschau.

### Bildschirmausrichtungskorrektur

Tippen Sie auf **Rotate**, um durch Ausrichtungskorrekturmodi zu wechseln: Normal, 90° CW, 180°, 90° CCW. Korrigiert die Videovorschau, wenn der KVM-Go-Dongle in nicht standardmäßiger Ausrichtung montiert ist. Die Rotation gilt für Live-Vorschau und gespeicherte Aufnahmen.

### Leerlauf-Timer deaktiviert

Die App hält den iPad-Bildschirm während der Nutzung **wach**, indem der Leerlauf-Timer deaktiviert wird — verhindert die automatische Sperre des iPads beim Überwachen des Ziel-PCs.

### Protokollierungssystem

Die App enthält einen integrierten `Logger` mit kategoriebasierter Filterung:

| Category | Covers |
|---|---|
| `bluetooth` | BLE-Scan, Verbindung, Datenübertragung |
| `mouse` | Mauseingabe, Gestenerkennung, Moduswechsel |
| `keyboard` | Tastenereignisse, Modifikatorzustand, Kombinationstasten |
| `camera` | Videoaufnahme, Screenshots, Foto-Capture |
| `ui` | Berührungsverarbeitung, Gestenerkennung, Vorschau-Layer |
| `general` | App-Lebenszyklus, allgemeine Informationen |

Die Protokollierung kann im App-Quellcode angepasst werden, um Konsolenausgabe zu reduzieren.

---

## Nächste Schritte

- **[Fehlerbehebung →](04-troubleshooting.md)** — Häufige Probleme und Lösungen

---

## Android-spezifische Funktionen

### Einstellungsbereich

Der Einstellungsbereich der Android-App (Menü-Schaltfläche ☰) enthält alle Konfigurationsoptionen:

| Setting | Description |
|---|---|
| **Device** | Zeigt verbundene USB-Geräte und Status. Tippen zum Auswählen oder erneuten Scannen. |
| **Disconnect Device** | Gibt alle USB-Verbindungen sicher frei. Vor dem Abziehen verwenden. |
| **Baudrate** | Serial-Kommunikationsgeschwindigkeit: **115200** (Standard) oder **9600** (langsamer, bei Problemen). |
| **Controls** | Schieberegler für Kamerahelligkeit, Kontrast und Farbton. |
| **Video Format** | Auflösungs- und Bildraten-Auswahl. |
| **Rotate/Flip** | 90° CW/CCW drehen, horizontal/vertikal spiegeln. |
| **Screen Capture / Record Video** | Screenshot und Videoaufnahme. |
| **Relative / Absolute / Drag** | Maussteuerungsmodus wechseln. |
| **About Device** | Zeigt Android-Version und App-Versionsinformationen. |

### Einstellungs-Persistenz

Die Android-App merkt sich Ihre Einstellungen zwischen Sitzungen:

| Setting | Persisted? |
|---|---|
| Maussteuerungsmodus | Ja |
| Videoformat (Auflösung, FPS) | Ja |
| Kameraparameter (Helligkeit, Kontrast, Farbton) | Ja |
| Tastaturlayout (US, JP, DE) | Ja |
| Baudrate | Ja |
| Geräteverbindungsverlauf | Ja |

Beim erneuten Öffnen der App werden Ihre letzten Einstellungen wiederhergestellt. Alles zurücksetzen: Android-Einstellungen → Apps → Openterface → Speicher → **Daten löschen**.

### Sicheres Trennen

Vor dem Abziehen des KVM-Geräts unter Android:

1. Einstellungsbereich öffnen
2. **Disconnect Device** tippen (rot angezeigt)
3. Warten, bis die App die USB-Verbindung freigibt
4. Kabel abziehen

Dies verhindert Datenbeschädigung und stellt sicher, dass der Zielcomputer Tastatur/Maus ordnungsgemäß freigibt.

### Android-Leistungstipps

- **Auflösung senken** — 640×480 ist deutlich leichter als 1920×1080
- **Bildrate reduzieren** — 30 fps nutzt weniger Bandbreite als 60 fps
- **Andere Apps schließen** — Speicher des Smartphones freigeben
- **Hochwertigen USB-OTG-Adapter verwenden** — Billige Adapter können die Verbindung ausbremsen
- Das Entwicklungsteam arbeitet daran, die Latenz in der Kamera-Pipeline selbst zu reduzieren
