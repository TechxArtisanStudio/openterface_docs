---
title: "KeyMod Tutorial – Fehlerbehebung"
description: "Beheben Sie häufige KeyMod-Probleme: Verbindungsprobleme, nicht registrierte Schlüssel, Bluetooth-Pairing-Fehler, Spracheingabefehler und mehr. Häufige…"
keywords: "KeyMod Fehlerbehebung, KeyMod keine Verbindung, KeyMod Bluetooth-Probleme, KeyMod Tasten funktionieren nicht"
---

# 12. Fehlerbehebung

Häufige Probleme und Lösungen für die KeyMod-App auf Android.

## Verbindungsprobleme

### Nicht verbunden

| Symptom | Lösung |
|---|---|
| **Anzeige „Nicht verbunden“** | Kabelverbindung prüfen; Versuchen Sie es erneut. Schalten Sie für BLE Bluetooth aus/ein und koppeln Sie es erneut. |
| **USB Berechtigung verweigert** | Gehen Sie zu Android Einstellungen → Apps → KeyCmd → Berechtigungen → aktivieren USB. Stecken Sie das Kabel wieder ein. |
| **Bluetooth lässt sich nicht koppeln** | Schalten Sie Bluetooth aus/ein. Vergessen Sie das Gerät in den Bluetooth-Einstellungen und koppeln Sie es erneut. Stellen Sie sicher, dass sich das KeyMod-Gerät im Kopplungsmodus befindet. |
| **Verbindung bricht häufig ab** | Prüfen Sie in der App, ob der Wert RSSI unter BLE button liegt. Unter -75 dBm weist auf ein schwaches Signal hin – gehen Sie näher heran. Entfernen Sie physische Hindernisse. |

### Verbindungsstatusanzeigen

| Indikator | Bedeutung |
|---|---|
| **Verbunden** | Grünes Symbol – bereit zum Senden der Eingabe |
| **Verbinden** | Gelbes Symbol – Verbindung wird hergestellt |
| **Nicht verbunden** | Graues Symbol – keine aktive Verbindung |
| **Signalbalken** | BLE Signalstärke oder USB aktiver Status |

### Automatische Verbindung

Aktivieren Sie **„Beim Start automatisch verbinden“** im Verbindungsdialog. KeyMod merkt sich Ihren letzten Verbindungstyp (USB oder BLE) und Ihr zuletzt gekoppeltes BLE Gerät.

### USB Anbringen/Abnehmen-Erkennung

KeyMod überwacht die Attach/Detach-Broadcast-Ereignisse von Android und USB. Wenn Sie das USB-Kabel abziehen, wird der Verbindungsstatus sofort aktualisiert. Das erneute Anschließen löst einen erneuten Verbindungsversuch aus, wenn die automatische Verbindung aktiviert ist.

---

## Tastaturprobleme

### Schlüssel werden nicht registriert

| Symptom | Lösung |
|---|---|
| **Schlüssel werden nicht gesendet** | Überprüfen Sie, ob die Verbindung „Verbunden“ (grün) anzeigt. Versuchen Sie, den Modus und zurück zu wechseln. Überprüfen Sie, ob der Zielcomputer das KeyMod-Gerät als Tastatur erkennt. |
| **Makro wird nicht ausgeführt** | Stellen Sie sicher, dass Sie verbunden sind. Überprüfen Sie, ob die Makrodaten gültige Token enthalten (keine Tippfehler in den Token-Namen). |
| **Es werden falsche Zeichen angezeigt** | Überprüfen Sie die Einstellung **Zielbetriebssystem** – nicht übereinstimmende Betriebssysteme können zu Problemen bei der Schlüsselzuordnung führen. Überprüfen Sie das Tastaturlayout des Zielcomputers (QWERTY vs. AZERTY). |

### Unicode-Zeichen funktionieren nicht

Nicht-ASCII-Zeichen (Chinesisch, Japanisch, Emoji) erfordern betriebssystemspezifische Eingabemethoden:

| Betriebssystem | Methode |
|---|---|
| **Windows** | Alt+NumPad hexadezimale Unicode-Eingabe |
| **Linux** | Ctrl+Shift+U gefolgt von Hex-Code |
| **macOS** | Option+Hex-Eingabe |

Wenn Unicode-Zeichen falsch angezeigt werden, überprüfen Sie, ob das **Zielbetriebssystem** richtig eingestellt ist.

---

## TouchPad Probleme

| Symptom | Lösung |
|---|---|
| **Touchpad antwortet nicht** | Überprüfen Sie, ob das haptische Feedback in den Einstellungen aktiviert ist. Probieren Sie das TouchPad-Hilfe-Overlay (?) aus, um die Gestenunterstützung zu überprüfen. |
| **Scrollen funktioniert nicht** | Überprüfen Sie die Scroll-Empfindlichkeit touchpad unter Einstellungen → Allgemein. |

---

## Probleme bei der Spracheingabe

### Spracherkennung nicht verfügbar

Installieren Sie Google Voice Typing aus dem Play Store. Auf Android 11+ benötigt KeyMod die Abfrageberechtigung (im APK enthalten).

### Stille-Erkennung funktioniert nicht

| Symptom | Lösung |
|---|---|
| **Die Aufnahme wird fortgesetzt, wenn nicht gesprochen wird** | Überprüfen Sie den Schalter „Automatische Pause bei Stille“. Reduzieren Sie Hintergrundgeräusche. Sprechen Sie deutlich und nah am Mikrofon. |
| **Aufnahme stoppt sofort** | Sprechen Sie lauter oder reduzieren Sie das Zeitlimit für die Stilleerkennung. |

### Sprachtext wird nicht gesendet

Überprüfen Sie den Verbindungsstatus. Das „Senden“ button ist deaktiviert, wenn keine Verbindung besteht.

---

## KI-Probleme

### API-Schlüssel funktioniert nicht

| Symptom | Lösung |
|---|---|
| **"API-Schlüssel nicht konfiguriert"** | Stellen Sie sicher, dass der API-Schlüssel korrekt ist – achten Sie auf zusätzliche Leerzeichen oder Tippfehler. Überprüfen Sie die API-Basis-URL – sie muss den vollständigen Pfad enthalten (z. B. `https://api.openai.com/v1`). Stellen Sie sicher, dass der Modellname beim Anbieter vorhanden ist. Stellen Sie bei lokalen Anbietern (Ollama) sicher, dass das Flag „API Key Optional“ gesetzt ist. |

### Textverfeinerung langsam

Überprüfen Sie Ihre Netzwerkverbindung. Versuchen Sie es mit einem schnelleren Modell – kleinere Modelle (gpt-3.5-turbo, llama3-8b) reagieren schneller. Verwenden Sie einen lokalen Anbieter (Ollama), um Netzwerklatenz zu vermeiden. Überprüfen Sie den AI-Anfrageverlauf auf Fehlermeldungen.

---

## Benötigen Sie weitere Hilfe?

Wenn weiterhin Probleme auftreten:

- **Fehlerberichte:** [Discord](https://discord.gg/techxartisan)
- **Community:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface Dokumentation:** [openterface.com](https://openterface.com)