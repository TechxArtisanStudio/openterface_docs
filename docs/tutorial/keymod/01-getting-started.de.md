---
title: "KeyMod Tutorial – Erste Schritte"
description: "Installieren Sie die KeyMod-App, stellen Sie eine Verbindung zu Ihrem KeyMod-Gerät her und senden Sie Ihren ersten Tastendruck in weniger als 5 Minuten."
keywords: "KeyMod Erste Schritte, KeyMod Einrichtung, KeyMod Installation, Anschließen KeyMod"
---

# 1. Erste Schritte

Installieren Sie die KeyMod-App, stellen Sie eine Verbindung zu Ihrer KeyMod-Hardware her und senden Sie Ihren ersten Tastendruck in weniger als 5 Minuten.

## Was Sie brauchen

- **Openterface KeyMod Hardware** – eingeschaltet und in Reichweite
- **Telefon oder Tablet** – Android mit installierter KeyMod-App
- **USB-Kabel** (zur Ersteinrichtung) – USB-C zum Verbinden Ihres Telefons mit dem KeyMod-Gerät
- **Bluetooth** (optional) – für drahtlose Verbindung nach der Ersteinrichtung

## Schritt 1: Installieren Sie die KeyMod-App

**Android:**

1. Öffnen Sie den Browser Ihres Telefons und gehen Sie zu [KeyMod GitHub Releases page](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags)
2. Laden Sie die neueste `.apk`-Datei herunter
3. Tippen Sie auf die heruntergeladene Datei, um sie zu installieren
4. Wenn Android Sie dazu auffordert, erlauben Sie **„Unbekannte Apps installieren“** für Ihren Browser

Alternativ können Sie aus dem Quellcode erstellen – siehe [Build from Source](#build-from-source) unten.

## Schritt 2: Verbinden Sie sich mit Ihrem KeyMod-Gerät

KeyMod stellt auf zwei Arten eine Verbindung zur Openterface KeyMod-Hardware her:

### USB Verbindung (empfohlen für die Ersteinrichtung)

1. Schließen Sie Ihr Telefon über ein USB-C-Kabel an das KeyMod-Gerät an
2. Öffnen Sie die KeyMod-App
3. Tippen Sie auf das Verbindungssymbol (oben rechts im Hauptbildschirm).
4. Tippen Sie auf **„USB Verbindung“**
5. Akzeptieren Sie die USB-Berechtigungsaufforderung, wenn Sie dazu aufgefordert werden
6. Sie sollten eine grüne Statusanzeige **„Verbunden“** sehen

### Bluetooth-Verbindung (kabellos)

1. Stellen Sie sicher, dass Bluetooth auf Ihrem Telefon aktiviert ist
2. Öffnen Sie KeyMod und tippen Sie auf das Verbindungssymbol
3. Tippen Sie auf **„Bluetooth-Verbindung“**
4. Warten Sie, bis Ihr KeyMod-Gerät in der Scanliste erscheint
5. Tippen Sie zum Koppeln darauf
6. Sie sollten eine grüne Statusanzeige **„Verbunden“** sehen

> **Tipp:** Aktivieren Sie **„Beim Start automatisch verbinden“** im Verbindungsdialog, damit KeyMod bei jedem Öffnen automatisch wieder eine Verbindung herstellt. Die App merkt sich Ihren letzten Verbindungstyp (USB oder BLE).

## Schritt 3: Wählen Sie Ihren Modus – Willkommen und Anleitung

Nach dem Start sehen Sie den Bildschirm „Willkommen und Anleitung“ mit Moduskarten:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Willkommen und Anleitung – tippen Sie auf eine beliebige Moduskarte, um diesen Modus aufzurufen.</em></p>
</div>

Über das Seitenmenü (Hamburger-Symbol oben links) können Sie jederzeit den Modus wechseln:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Navigationsleiste – Modi wechseln, auf Makros, Sprache und Einstellungen zugreifen.</em></p>
</div>

**„Meine Auswahl merken“** – aktivieren Sie dieses Kontrollkästchen, um den Begrüßungsbildschirm bei zukünftigen Starts zu überspringen und direkt zu Ihrem zuletzt verwendeten Modus zu wechseln.

**„Überspringen“ button** – Überspringen Sie den Begrüßungsbildschirm und rufen Sie sofort den zuvor verwendeten Modus auf.

## Schritt 4: Senden Sie Ihren ersten Tastendruck

1. Wählen Sie den Modus **Tastatur und Maus**
2. Tippen Sie auf eine beliebige Taste auf der Bildschirmtastatur
3. Der entsprechende Tastendruck wird an den Zielcomputer gesendet

Das ist es! Sie steuern jetzt Ihren Zielcomputer aus der Ferne.

## Verbindungsstatusanzeigen

| Indikator | Bedeutung |
|---|---|
| **Grün** (verbundenes Symbol) | Aktive Verbindung, bereit zum Senden von Eingaben |
| **Bernstein/Blau** (Verbindungssymbol) | Verbindung läuft |
| **Grau** (getrenntes Symbol) | Keine aktive Verbindung |
| **Signalbalken** | BLE Signalstärke oder USB aktiver Status |

## Build from Source (Android, für Entwickler)```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## Nächste Schritte

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** – Tippen, Modifikatoren, touchpad und Texteingabe