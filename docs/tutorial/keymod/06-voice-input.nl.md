---
title: "KeyMod Tutorial - Spraakinvoer"
description: Gebruik stem-naar-toetsenbord met KeyMod. Ondersteunt systeemspraakherkenning, Whisper AI op het apparaat en meerdere talen. Zet uw spraak om in… Openterface.
keywords: "KeyMod spraakinvoer, spraak naar tekst, Whisper, spraakgestuurd typen, handsfree toetsenbord"
---

# 6. Spraakinvoer

Zet uw spraak om in toetsaanslagen die naar de doelcomputer worden verzonden: handsfree typen en toegankelijkheid.

## Hoe het werkt

1. Tik op de **microfoon** button
2. Spreek wat je wilt typen
3. Je spraak wordt omgezet naar tekst
4. De tekst wordt als toetsaanslag naar de doelcomputer verzonden

## STT-motoren

| Motor | Hoe het werkt | Opstelling |
|---|---|---|
| **Systeemherkenning** | Maakt gebruik van de ingebouwde spraakherkenning van Android | Vereist Google Spraakgestuurd typen |
| **Whisper** | AI-transcriptie op het apparaat of in de cloud | Stel de API-sleutel in via Instellingen > Spraakinvoer |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Spraakinvoer: transcriptgebied, doelen, geschiedenis en microfoon. Configureer de API-sleutel in Instellingen > Spraakinvoer.</em></p>
</div>

## Stiltedetectie en automatische pauze

Beide motoren zijn voorzien van automatische stiltedetectie die de opname pauzeert wanneer u stopt met spreken (standaard time-out voor stilte van 2,0 seconden). Schakel automatisch pauzeren in/uit in de weergave Spraakinvoer.

### Problemen met stiltedetectie oplossen

| Symptoom | Oplossing |
|---|---|
| **Opname gaat door als er niet wordt gesproken** | Controleer de schakelaar Automatisch pauzeren bij stilte. Verminder achtergrondgeluiden. Spreek duidelijk en dicht bij de microfoon. |
| **Opname stopt onmiddellijk** | Spreek luider of verminder de time-out voor stiltedetectie. |

## Miniwerkbalk (Android)

| Button | Wat het doet |
|---|---|
| **Kopiëren** | Kopieer getranscribeerde tekst naar klembord |
| **Automatisch verzenden** | Automatisch tekst verzenden na transcriptie |
| **Automatische lijnretour** | Voeg een Enter-toetsaanslag toe na het verzenden van |
| **AI Verfijn** | Stuur getranscribeerde tekst naar AI voor verbetering |

## Spraaktekst wordt niet verzonden

Controleer de verbindingsstatus. De optie "Verzenden" button is uitgeschakeld als er geen verbinding is.

## Volgende stappen

- **[← Macros](05-macros.md)** — Geautomatiseerde toetsenreeksen
- **[AI Integration →](07-ai.md)** — AI-ondersteunde tekstverfijning en opdrachtassistent