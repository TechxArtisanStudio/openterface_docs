---
title: "KeyMod Tutorial – Spracheingabe"
description: Verwenden Sie Voice-to-Keyboard mit KeyMod. Unterstützt System-Spracherkennung, On-Device-KI und mehrere Sprachen. Wandeln Sie Ihre Sprache in… Openterface.
keywords: "KeyMod Spracheingabe, Sprache in Text umwandeln, Whisper, Spracheingabe, Freisprechtastatur"
---

# 6. Spracheingabe

Wandeln Sie Ihre Sprache in Tastenanschläge um, die an den Zielcomputer gesendet werden – freihändiges Tippen und Barrierefreiheit.

## Wie es funktioniert

1. Tippen Sie auf das **Mikrofon** button
2. Sprechen Sie, was Sie eingeben möchten
3. Ihre Rede wird in Text umgewandelt
4. Der Text wird als Tastenanschlag an den Zielcomputer gesendet

## STT-Motoren

| Motor | Wie es funktioniert | Einrichtung |
|---|---|---|
| **Systemerkennung** | Verwendet die integrierte Spracherkennung von Android Erfordert Google Spracheingabe |
| **Whisper** | KI-Transkription auf dem Gerät oder in der Cloud | Legen Sie den API-Schlüssel unter Einstellungen > Spracheingabe | fest

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Spracheingabe – Transkriptbereich, Ziele, Verlauf und Mikrofon. Konfigurieren Sie den API-Schlüssel unter Einstellungen > Spracheingabe.</em></p>
</div>

## Stilleerkennung und automatische Pause

Beide Engines verfügen über eine automatische Stilleerkennung, die die Aufnahme pausiert, wenn Sie aufhören zu sprechen (standardmäßig 2,0 Sekunden Stille-Timeout). Schalten Sie die automatische Pause in der Spracheingabeansicht ein/aus.

### Fehlerbehebung bei der Stille-Erkennung

| Symptom | Lösung |
|---|---|
| **Die Aufnahme wird fortgesetzt, wenn nicht gesprochen wird** | Überprüfen Sie den Schalter „Automatische Pause bei Stille“. Reduzieren Sie Hintergrundgeräusche. Sprechen Sie deutlich und nah am Mikrofon. |
| **Aufnahme stoppt sofort** | Sprechen Sie lauter oder reduzieren Sie das Zeitlimit für die Stilleerkennung. |

## Mini-Symbolleiste (Android)

| Button | Was es tut |
|---|---|
| **Kopieren** | Transkribierten Text in die Zwischenablage kopieren |
| **Automatisch senden** | Text nach der Transkription automatisch senden |
| **Auto Line Return** | Fügen Sie nach dem Senden | eine Eingabetaste hinzu
| **KI-Verfeinerung** | Transkribierten Text zur Verbesserung an AI senden |

## Sprachtext wird nicht gesendet

Überprüfen Sie den Verbindungsstatus. Das „Senden“ button ist deaktiviert, wenn keine Verbindung besteht.

## Nächste Schritte

- **[← Macros](05-macros.md)** – Automatisierte Tastenfolgen
- **[AI Integration →](07-ai.md)** – KI-gestützte Textverfeinerung und Befehlsassistent