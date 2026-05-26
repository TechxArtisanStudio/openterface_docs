---
title: "KeyMod Tutorial – Gamepad"
description: "Verwenden Sie KeyMod als virtuellen Gamecontroller mit anpassbaren Layouts für Spiele, Retro-Emulation und Spieletests."
keywords: "KeyMod Gamepad, virtueller Controller, Gamecontroller, WASD Mapping, Analogstick"
---

# 8. Gamepad

Verwandeln Sie Ihr Telefon in einen virtuellen Gamecontroller für Spiele, Retro-Emulation und Spieletests.

## Das Layout

Das Gamepad bietet ein vollständiges Controller-Layout mit D-Pad, Aktionstasten, Schultertasten, Analogsticks und Start/Auswahl.

| Kontrolle | Wie |
|---|---|
| D-Pad | Tippen Sie auf die Richtungspfeile |
| Aktionsschaltflächen (A, B, X, Y) | Tippen Sie auf sie |
| Schulterknöpfe | Tippen Sie oben auf L1, L2, R1, R2 |
| Analogsticks | Berühren und ziehen Sie die Stickkreise |
| Start / Auswählen | Tippen Sie auf die Schaltflächen |

## Voreingestelltes System (v7)

KeyMod 0.15 führte ein **voreingestelltes Gamepad-System** ein. Anstelle fester integrierter Layouts werden Gamepad-Konfigurationen jetzt als **Voreinstellungen** gespeichert, die Sie durchblättern, importieren und exportieren können.

### Voreinstellungen verwalten

- **Tippen Sie auf den Preset-Chip** in der Symbolleiste, um durch die verfügbaren Layouts zu blättern
- **Drücken Sie lange auf den Preset-Chip**, um die vollständige Preset-Liste mit Import-, Modul-Hinzufügen- und Exportoptionen anzuzeigen
- Das mitgelieferte Layout **emu-6** wird als Starter-Voreinstellung (`preset_default`) geliefert.
- Voreinstellungen sind gemeinsam nutzbare JSON-Dateien mit dem Layout **schema v7**

### Module hinzufügen

Über das Voreinstellungsmenü können Sie jedem Layout neue Module hinzufügen:

- **D-Pad / Stick** – fügt ein Modul für den linken Daumen hinzu (`stick_left`, `stick_left_2` usw.)
- **Touchpad** – fügt eine touchpad (`touchpad_1`, `touchpad_2` usw.) mit gebündelten L/M/R-Maustasten hinzu
- **Tasten** – Gesichtstasten, Schultertasten oder Auslöser hinzufügen

## Anpassen

- **Beliebiges Modul konfigurieren** – Tippen Sie auf ein Modul, um dessen Konfigurationsdialog zu öffnen und das Verhalten anzupassen
- **Analog vs. Tastenmodus** – Sticks können als `STICK_KEY` (digitale Richtungstasten) oder `STICK_MOUSE` (relative Zeiger-/Mausbewegung) konfiguriert werden.
- **WASD-Zuordnung** – Weisen Sie dem linken Stick WASD-Tasten für PC-Spiele zu
- **Button/Stick-Größenskalierung** – Passen Sie die Größen an Ihren bevorzugten Berührungsbereich an
- **Hintergrundbild** – Passen Sie den Gamepad-Hintergrund an (Einbettung in gemeinsame Voreinstellungen wie base64, bis zu 6 MiB)
- **Haptisches Feedback** – Vibration beim Drücken von button (nur Gesichtstasten, keine Mausklicks)
- **Gyro** – Aktivieren Sie das Gyroskop des Geräts, um den Host-Zeiger zu bewegen, während der Gamepad-Bildschirm aktiv ist

### Modulmodell

Jedes Bildschirmsteuerelement ist ein **Modul** mit drei Ebenen:

| Schicht | Was es definiert |
|---|---|
| **Slot/Identität** | Welches Steuerelement auf der Leinwand (z. B. `stick_left`, `stick_right`, `touchpad_1`) |
| **Verhalten (Typ)** | Was der Gastgeber erhält: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parameter** | Abstimmung auf demselben Modul: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, Größe, Farbe |

### Analogsticks

- **Linker Stick → Tastaturtasten:** Wird den Pfeiltasten mit diagonaler Unterstützung zugeordnet. In der Modulkonfiguration auf WASD konfigurierbar.
- **Rechter Stick → Mausbewegung:** `STICK_MOUSE`-Modus mit konfigurierbarer Empfindlichkeit (`stickMouseSensitivity`), Totzone zur Verhinderung von Drift.
- **Hysterese:** Aktivierungs- (0,6) und Deaktivierungsschwellenwerte (0,4) verhindern Tastenflattern an der Grenze.

### Touchpad

- **Multi-touchpad-Unterstützung**: Fügen Sie mehrere Touchpads zu einem einzigen Layout hinzu (`touchpad_1`, `touchpad_2` usw.)
- **Quadratische Grundfläche** standardmäßig mit langem Tastendruck zur Größenänderung
- **Gebündelte Maustasten** (L/M/R), die auf allen Touchpads gemeinsam genutzt werden
- **Größe der Maus button**: Drücken Sie lange auf touchpad, um die Größe der **Maus button** anzupassen, oder drücken Sie lange auf eine einzelne Maus button, um **diese Größe button** anzupassen

> **Hinweis:** Das Gamepad HID-Protokoll befindet sich in der aktiven Entwicklung. Basisunterstützung für button funktioniert; Die Präzision des Analogsticks kann variieren.

## Fehlerbehebung

### Analogstick reagiert nicht

| Symptom | Lösung |
|---|---|
| **Stick erzeugt keine Aktion** | Überprüfen Sie die Modulkonfiguration. Stellen Sie sicher, dass der Stick nicht in der toten Zone (mittlerer Bereich) steckt. Überprüfen Sie die Hystereseschwellen – der Knüppel muss sich über 0,6 Aktivierungspunkte bewegen, um auszulösen. |
| **Schaltflächen senden falsche Schlüssel** | Öffnen Sie die Modulkonfiguration und überprüfen Sie die Tastenbelegung des button. Tippen Sie auf button, um das Konfigurations-Popup zu öffnen und die Zuordnung zu korrigieren. |
| **Touchpad Maustasten klicken nicht** | Stellen Sie sicher, dass die gebündelten L/M/R-Tasten in der Voreinstellung vorhanden sind. Durch das Hinzufügen eines touchpad werden automatisch gemeinsame Maustasten hinzugefügt. Überprüfen Sie die Modulkonfiguration für die zugeordnete Taste HID. |

## Nächste Schritte

- **[← AI Integration](07-ai.md)** – KI-gestützte Textverfeinerung und Befehlsassistent
- **[Numpad →](09-numpad.md)** – Numerisches Tastenfeld zur Dateneingabe