# KVM-Tutorial 01 — Erste Schritte

**Zielgruppe:** Anfänger — Erstbenutzer von Openterface KVM-Geräten

---

## 1. Was ist KVM-over-USB?

Ein KVM-Gerät (Keyboard, Video, Mouse) sitzt zwischen Ihrem **Host-Computer** (Ihrer Arbeitsstation) und einem **Ziel-Computer** (Server, Mini-PC, Embedded-Gerät). Es:

- **Erfasst** die HDMI-Videoausgabe des Ziels (und Audio, falls verfügbar)
- **Leitet** Ihre Tastatur- und Maus-Eingaben über HID-Emulation weiter
- Alles über ein einziges USB-Kabel — kein Netzwerk erforderlich

Das unterscheidet KVM-Geräte von Remote-Desktop-Software: Sie können das Ziel auch in **BIOS/UEFI**, beim Booten oder bei abgestürztem Betriebssystem steuern.

### Openterface KVM-Geräte

| Gerät | Formfaktor | Hauptmerkmal |
|--------|------------|-------------|
| **Mini-KVM** | Kompakter USB-Dongle | Desktop-KVM-over-USB |
| **KVM-Go** | Tragbares Toolkit-Design | KVM unterwegs mit integrierten Kabeln, **iPadOS-Unterstützung via BLE** |
| **uConsole KVM Extension** | Internes Modul | Integrierter KVM für ClockworkPi uConsole |

> Suchen Sie **KeyMod** (nur Tastatur- und Mausemulator, ohne Video)? Siehe das [KeyMod-Tutorial](../../keymod/index.md).

---

## 2. Was Sie benötigen

### Hardware

- **Openterface KVM-Gerät** — Mini-KVM, KVM-Go oder uConsole KVM Extension
- **Host-Computer** — mit macOS, Windows, Linux oder Android
- **Ziel-Computer** — jeder Computer mit HDMI-Ausgang
- **HDMI-Kabel** — vom HDMI-Ausgang des Ziels zum HDMI-Eingang des KVM
- **USB-Kabel** — vom KVM zu Ihrem Host-Computer (Strom und Daten)

### Optional

- **USB-Umschaltkabel** — vom KVM zum USB-Port des Zielgeräts (für Tastatur-/Mausemulierung)
- **Tastatur und Maus** — an den umschaltbaren USB-Port des KVM anschließen, um Host oder Ziel zu steuern

---

## 3. Installation

### Host-Anwendung

| Plattform | Anwendung | Download |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) oder [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) oder [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **nur KVM-Go** |

### Android-Anforderungen

Die Android-App benötigt:

- **Android 8.0 (API 26)** oder höher
- **USB-OTG-Unterstützung** — die meisten modernen Smartphones unterstützen dies (Samsung, Google Pixel, OnePlus). Prüfen Sie, indem Sie einen USB-Stick mit einem OTG-Adapter anschließen
- **USB-OTG-Kabel oder -Adapter**, um das KVM-Gerät mit Ihrem Smartphone zu verbinden

### iPadOS-Anforderungen

Die iPadOS-App benötigt:

- **iPadOS 17.0** oder höher
- **KVM-Go-Gerät** — iPadOS verbindet sich über **Bluetooth Low Energy (BLE)** mit dem KVM-Go-Dongle für Tastatur-/Maus-Eingabe und über die USB-Capture-Karte für Video
- **Kamera- und Mikrofonberechtigungen** — für Videovorschau und Audio-Monitoring von der Capture-Karte
- **Bluetooth-Berechtigung** — zum Erkennen und Verbinden mit dem KVM-Go-Dongle für HID-Eingabe
- **Fotobibliothek-Berechtigung** (optional) — zum Speichern von Screenshots und Aufnahmen in der Fotos-App

### macOS-Berechtigungen

Beim ersten Start fordert macOS an:

| Berechtigung | Grund |
|-----------|-----|
| **Kamera** | Erfasst Video vom HDMI-Capture-Chip |
| **Mikrofon** | Erfasst Audio vom Ziel (falls aktiviert) |
| **Bedienungshilfen** | Erforderlich für HID-Maussteuerung im Relativmodus |

### Linux-Berechtigungen

- Benutzer zu den Gruppen `dialout` und `video` hinzufügen: `sudo usermod -a -G dialout,video $USER`
- udev-Regeln für Gerätezugriff installieren
- **BrlTTY-Konflikt:** `brltty` entfernen oder Serial-Chip blacklisten — siehe [Fehlerbehebung](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- Der Installer enthält den CH340-Serial-Treiber. Bei portablen Builds separat installieren.

---

## 4. Hardware anschließen

┌─────────────┐                        ┌──────────────────┐
│   ZIEL      │─── HDMI-Kabel ────────▶│  Openterface     │
│  COMPUTER   │                        │  KVM-Gerät       │
└─────────────┘                        │                  │
                                       │  ◄── USB-Kabel ──│── USB-Umschaltkabel ──▶ Ziel-USB-Port
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │   HOST-COMPUTER  │
                                       │  (diese App)     │
                                       └──────────────────┘
1. **HDMI-Ausgang** des Ziels an den **HDMI-Eingang** des KVM anschließen
2. **USB** des KVM an einen **USB-Port Ihres Host-Computers** anschließen
3. (Optional) USB-Umschaltkabel vom KVM zum USB-Port des Ziels anschließen
4. (Optional) Tastatur/Maus an den umschaltbaren USB-Port des KVM anschließen
5. **Zielgerät einschalten**

### Geräteerkennung

Das KVM wird als mehrere USB-Geräte erkannt:
- **Video-Capture** (MS2109/MS2109S/MS2130S) — erscheint als Webcam
- **Serial** (CH9329 oder CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — für Firmware-Operationen

### Verbindung über Android-Smartphone

Bei der Android-App erfolgt die Verbindungskette über USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  Ziel-PC     │               │   KVM-Gerät       │
│  (Bildschirm)│ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Android-Smartphone│
                               │  (Openterface)    │
                               └──────────────────┘
```

Verbindungsreihenfolge für Android:

1. **HDMI:** HDMI-Ausgang des Ziels an den HDMI-**Eingang** des KVM
2. **USB (Ziel):** USB-Port des Ziels an den USB-Port des KVM — überträgt Maus-/Tastatursignale
3. **USB OTG (Smartphone):** KVM über USB-OTG-Kabel/-Adapter mit dem Android-Smartphone verbinden
4. **Strom:** KVM-Gerät (falls separater Stromeingang) und Zielcomputer einschalten

Bei erfolgreicher Verbindung wechselt die Videovorschau vom Platzhalter zum Live-Bildschirm des Ziels; Tippen auf den Smartphone-Bildschirm bewegt den Cursor auf dem Ziel.

### Verbindung über iPadOS

Die iPadOS-App nutzt ein anderes Verbindungsmodell: **BLE für Eingabe** und **USB-Capture für Video**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  Ziel-PC     │               │                   │
│  (Bildschirm)│ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (Video)
                              │   BLE (FFF2)      │ (Tastatur/Maus)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Verbindungsreihenfolge für iPadOS:

1. **Hardware:** KVM-Go-Dongle in den USB-Port des Ziel-PCs stecken und HDMI-Eingang verbinden
2. **Zielcomputer einschalten**
3. **App auf dem iPad öffnen** und Kamera-, Mikrofon- und Bluetooth-Berechtigungen erteilen
4. **BLE-Schaltfläche** in der Symbolleiste tippen — die App scannt nach Geräten namens `kvm*`
5. **Verbinden** neben Ihrem KVM-Go-Gerät tippen — die Schaltfläche wird grün mit RSSI-Signalstärke
6. **Prüfen:** Videovorschau zeigt den Zielbildschirm, Tippen sendet Klicks, Tippen sendet Tastendrücke

> **Hinweis:** Die iPadOS-App funktioniert nur mit **KVM-Go**. Mini-KVM und uConsole KVM Extension haben keine BLE-Unterstützung.

---

## 5. Erster Start

### Hauptfenster

```
┌─────────────────────────────────────────────────────────┐
│  Menüleiste / Symbolleiste                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              VIDEO-ANZEIGEBEREICH                        │
│         (zeigt den Bildschirm des Zielgeräts)           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Statusleiste │ Port │ Tasten │ Maus │ Auflösung │     │
└─────────────────────────────────────────────────────────┘
```

### Android-Berechtigungen

Beim ersten Start fordert die Android-App an:

| Berechtigung | Grund | Bei Ablehnung |
|---|---|---|
| **USB-Host** | Kommunikation mit der Openterface-Hardware | App erkennt Ihr KVM-Gerät nicht |
| **Kamera** | Video vom HDMI-Capture-Chip empfangen | Keine Videovorschau |
| **Speicher** | Screenshots und Aufnahmen speichern | Aufnahmen können nicht gespeichert werden |

Alle Berechtigungen für volle Funktionalität erteilen. Beim Erkennen des KVM-Geräts erscheint auch ein System-USB-Berechtigungsdialog — **Zulassen** tippen.

### iPadOS-Berechtigungen

Beim ersten Start fordert die iPadOS-App an:

| Berechtigung | Grund | Bei Ablehnung |
|---|---|---|
| **Kamera** | Video von der HDMI-Capture-Karte empfangen | Keine Videovorschau |
| **Mikrofon** | Ziel-PC-Audio über iPad-Lautsprecher überwachen | Kein Audio-Monitoring |
| **Bluetooth** | KVM-Go für HID-Eingabe finden und verbinden | Keine Tastatur-/Maus-Eingabe |
| **Fotobibliothek** | Screenshots und Aufnahmen speichern | Aufnahmen werden weiterhin im App-Dokumentenordner gespeichert |

Bei versehentlicher Ablehnung unter **Einstellungen > Datenschutz & Sicherheit** erneut aktivieren.

### Verbindung prüfen

- **HDMI-Anzeige:** grün = Signal erkannt, orange = kein Signal, grau = unbekannt
- **Tastatur-Anzeige:** grün = verbunden, orange = nicht gefunden, grau = unbekannt
- **Maus-Anzeige:** grün = verbunden, orange = nicht gefunden, grau = unbekannt
- **Serial-Port:** sollte Portname und Baudrate anzeigen (9600 oder 115200)

Bei orange oder grau siehe [Fehlerbehebung](04-troubleshooting.md).

---

## 6. Grundlegende KVM-Steuerung

### Mausmodi

| Modus | Beschreibung | Am besten für |
|------|-------------|----------|
| **Absolut** (Standard) | Host-Cursor mappt direkt auf Zielbildschirm | Allgemeine Nutzung, GUI-Navigation |
| **Relativ (HID)** | Mausbewegungen als Deltas über HID | Gaming, schnelle Interaktion |

Wechsel über Umschalter in der Symbolleiste oder **Steuerung > Mausmodus**.

### Tastatureingabe

Alle Tastendrücke werden an das Ziel weitergeleitet, solange das App-Fenster fokussiert ist:
- Standardtasten, Funktionstasten, Modifikatoren
- Sondertasten: Ctrl+Alt+Entf, Druck
- **In Ziel einfügen:** Sendet Zwischenablage-Text als emulierte Tastendrücke

### USB-Umschaltung

Umschaltbaren USB-Port umschalten zwischen:
- **Host** — Ihre Tastatur/Maus steuert den Host-Computer
- **Ziel** — Ihre Tastatur/Maus steuert den Ziel-Computer

---

## 7. Nächste Schritte

- **[Grundlegende Bedienung →](02-basic-operations.md)** — Maus, Tastatur, Video, Audio, Aufnahme
- **[Erweiterte Funktionen →](03-advanced-features.md)** — EDID, Firmware, Makros, Skripte
- **[Fehlerbehebung →](04-troubleshooting.md)** — Häufige Probleme und Lösungen
