---
title: "KeyMod Tutorial - Intrare vocală"
description: Folosiți voce la tastatură cu KeyMod. Acceptă recunoașterea vorbirii sistemului, AI Whisper pe dispozitiv și mai multe limbi. Transformați-vă vorbirea în…
keywords: "KeyMod introducere vocală, vorbire în text, Whisper, tastare vocală, tastatură hands-free"
---

# 6. Intrare vocală

Transformați-vă vorbirea în apăsări de taste trimise către computerul țintă - tastare fără mâini și accesibilitate.

## Cum funcționează

1. Atingeți **microfonul** button
2. Rostiți ceea ce doriți să tastați
3. Discursul dvs. este convertit în text
4. Textul este trimis ca apăsări de taste către computerul țintă

## Motoare STT

| Motor | Cum funcționează | Configurare |
|---|---|---|
| **Recunoaștere de sistem** | Utilizează recunoașterea vocală încorporată a lui Android | Necesită Google Tastare vocală |
| **Whisper** | Transcriere AI pe dispozitiv sau cloud | Setați cheia API în Setări > Intrare vocală |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Intrare vocală — zonă de transcriere, ținte, istoric și microfon. Configurați cheia API în Setări > Intrare vocală.</em></p>
</div>

## Detectare tăcere și pauză automată

Ambele motoare dispun de detectare automată a tăcerii care întrerupe înregistrarea atunci când încetați să vorbiți (în mod implicit, expirarea timpului de tăcere de 2,0 secunde). Activați/dezactivați Pauza automată în vizualizarea Intrare vocală.

### Depanarea detectării tăcerii

| Simptom | Soluție |
|---|---|
| **Înregistrarea continuă când nu se vorbește** | Verificați comutatorul Auto-Pause on Silence. Reduceți zgomotul de fundal. Vorbiți clar și aproape de microfon. |
| **Înregistrarea se oprește imediat** | Vorbiți mai tare sau reduceți timpul de expirare pentru detectarea tăcerii. |

## Mini Bară de instrumente (Android)

| Button | Ce face |
|---|---|
| **Copie** | Copiați textul transcris în clipboard |
| **Trimitere automată** | Trimite automat text după transcriere |
| **Retur automat la linie** | Adăugați o tastă Enter după trimiterea |
| **AI Rafine** | Trimiteți text transcris către AI pentru îmbunătățire |

## Textul vocal nu se trimite

Verificați starea conexiunii. „Trimite” button este dezactivat atunci când nu este conectat.

## Următorii pași

- **[← Macros](05-macros.md)** — Secvențe de taste automate
- **[AI Integration →](07-ai.md)** — Rafinarea textului asistată de AI și asistent de comandă