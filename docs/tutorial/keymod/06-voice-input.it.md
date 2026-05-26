---
title: "KeyMod Tutorial - Inserimento vocale"
description: Utilizza la voce sulla tastiera con KeyMod. Supporta il riconoscimento vocale del sistema, l'IA Whisper sul dispositivo e più lingue. Converti il tuo…
keywords: "KeyMod input vocale, sintesi vocale, Whisper, digitazione vocale, tastiera vivavoce"
---

# 6. Ingresso vocale

Converti il tuo discorso in sequenze di tasti inviate al computer di destinazione: digitazione e accessibilità a mani libere.

## Come funziona

1. Tocca il **microfono** button
2. Pronuncia ciò che desideri digitare
3. Il tuo discorso viene convertito in testo
4. Il testo viene inviato come sequenza di tasti al computer di destinazione

## Motori STT

| Motore | Come funziona | Impostazione |
|---|---|---|
| **Riconoscimento sistema** | Utilizza il riconoscimento vocale integrato di Android | Richiede Google Digitazione vocale |
| **Whisper** | Trascrizione AI su dispositivo o cloud | Imposta la chiave API in Impostazioni > Input vocale |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Input vocale: area di trascrizione, obiettivi, cronologia e microfono. Configura la chiave API in Impostazioni > Input vocale.</em></p>
</div>

## Rilevamento del silenzio e pausa automatica

Entrambi i motori sono dotati di rilevamento automatico del silenzio che mette in pausa la registrazione quando smetti di parlare (timeout del silenzio di 2,0 secondi per impostazione predefinita). Attiva/disattiva la pausa automatica nella vista Ingresso vocale.

### Risoluzione dei problemi relativi al rilevamento del silenzio

| Sintomo | Soluzione |
|---|---|
| **La registrazione continua quando non si parla** | Seleziona l'interruttore Pausa automatica al silenzio. Riduci il rumore di fondo. Parla chiaramente e vicino al microfono. |
| **La registrazione si interrompe immediatamente** | Parla a voce più alta o riduci il timeout di rilevamento del silenzio. |

## Mini barra degli strumenti (Android)

| Button | Cosa fa |
|---|---|
| **Copia** | Copia il testo trascritto negli appunti |
| **Invio automatico** | Invia automaticamente il testo dopo la trascrizione |
| **Ritorno automatico alla linea** | Aggiungi una sequenza di tasti Invio dopo aver inviato |
| **Perfezionamento AI** | Invia il testo trascritto all'intelligenza artificiale per il miglioramento |

## Il testo vocale non viene inviato

Controlla lo stato della connessione. "Invia" button è disabilitato quando non è connesso.

## Passaggi successivi

- **[← Macros](05-macros.md)** — Sequenze di tasti automatizzate
- **[AI Integration →](07-ai.md)**: perfezionamento del testo e assistente ai comandi assistito dall'intelligenza artificiale