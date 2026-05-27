---
title: "KeyMod Tutorial"
description: "Vollständige Anleitung zur Verwendung der KeyMod-App. Erfahren Sie, wie Sie eine Verbindung herstellen, Ihren Computer über Ihr Telefon steuern und Tastatur, Maus, Gamepad, Makros und Spracheingabemodi verwenden."
keywords: "KeyMod-Tutorial, Verwendung von KeyMod, Anleitung zur Telefontastatur, KeyMod-App-Tutorial"
---

# KeyMod Tutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

Dieses Tutorial behandelt die **Android**-Version der KeyMod-App. Die iOS-Version ist in der Entwicklung.

## Was ist KeyMod?

KeyMod verwandelt Ihr Telefon oder Tablet in ein **universelles Eingabegerät** für jeden Computer. Es verbindet sich mit der **Openterface KeyMod**-Hardware (ein KVM – Tastatur-, Video-, Maus-Umschalter), der dann die Tastenanschläge, Mausbewegungen und Gamepad-Eingaben Ihres Telefons an einen Zielcomputer sendet, als kämen sie von einer echten USB-Tastatur und -Maus.

### So funktioniert die Verbindung```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
Die App kommuniziert mit der KeyMod-Hardware über das **CH9329-Protokoll** über eine serielle Verbindung (USB-C bei 115200 Baud, 8N1 oder Bluetooth BLE). Das KeyMod-Gerät erscheint auf dem Zielcomputer als Standard-USB-Tastatur und -Maus – es sind keine Treiber erforderlich.

### Für wen ist das?

| Du bist... | KeyMod hilft Ihnen... |
|---|---|
| **Systemadministrator** | Verwalten Sie Server von Ihrem Telefon aus, ohne eine Ersatztastatur und einen Ersatzmonitor dabei zu haben |
| **Moderator / Redner** | Steuern Sie Folien von überall im Raum, kein Klicker erforderlich |
| **Gamer** | Nutzen Sie Ihr Telefon als Gamepad für Retro-Gaming oder als zusätzlichen Controller |
| **Inhaltsersteller** | Lösen Sie Verknüpfungen, Makros und Spracheingaben aus, während Sie auf einem anderen Gerät aufnehmen |
| **Power-User** | Senden Sie komplexe Tastaturkürzel, Textausschnitte oder Automatisierungssequenzen von Ihrem Telefon |
| **Jeder** | Tippen Sie auf Ihrem Computer von Ihrer Couch, Ihrem Bett oder auf der anderen Seite des Raums |

## Tutorial-Abschnitte

| Leitfaden | Beschreibung |
|---|---|
| [1. Getting Started](01-getting-started.md) | Installieren, anschließen und Ihren ersten Modus auswählen (5 Minuten) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Tippen, Modifikatoren, touchpad und Texteingabe |
| [3. Target OS](03-target-keyboard.md) | Zuordnung des Zielbetriebssystems |
| [4. Shortcut Hub](04-shortcuts.md) | Profilbasierte Tastaturkürzel für beliebte Apps |
| [5. Macros](05-macros.md) | Automatisierte Tastenfolgen mit Verzögerungen |
| [6. Voice Input](06-voice-input.md) | Speech-to-Keyboard mit Whisper KI |
| [7. AI Integration](07-ai.md) | Textverfeinerung und Befehlsassistent |
| [8. Gamepad](08-gamepad.md) | Virtueller Gamecontroller mit anpassbaren Layouts |
| [9. Numpad](09-numpad.md) | Numerisches Tastenfeld zur Dateneingabe |
| [10. Presentation](10-presentation.md) | Slide-Fernbedienung und Timer |
| [11. Settings](11-settings.md) | App-Konfiguration und -Einstellungen |
| [12. Troubleshooting](12-troubleshooting.md) | Häufige Probleme und Lösungen |

## Hilfe bekommen

- **Fehlerberichte:** [Discord](https://discord.gg/techxartisan)
- **Community:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Quellcode:** KeyCmd *(coming soon)*