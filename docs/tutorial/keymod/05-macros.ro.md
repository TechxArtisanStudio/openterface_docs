---
title: "KeyMod Tutorial - Macro-uri"
description: "Înregistrați și redați secvențele de taste automate cu KeyMod macrocomenzi, inclusiv modificatori, întârzieri și programare. Documentație Openterface:…"
keywords: "KeyMod macrocomenzi, apăsări automate ale tastelor, programator macro, jetoane macro, secvențe de taste"
---

# 5. Macrocomenzi

Înregistrați și redați secvențele de taste automate cu o singură atingere.

## Ce este o macro?

O macrocomandă este o **secvență înregistrată de apăsări de taste** pe care o puteți reda. De exemplu:
- Introduceți semnătura de e-mail cu o singură atingere
- Trimiteți `Ctrl+Shift+Esc` urmat de `Alt+D` în secvență
- Automatizați o secvență de comandă în mai mulți pași cu întârzieri între pași

## Sintaxă Macro Token

| Jeton | Înțeles |
|---|---|
| `<CTRL>` ... `</CTRL>` | Menține/eliberează control |
| `<SHIFT>` ... `</SHIFT>` | Țineți/eliberați Shift |
| `<ALT>` ... `</ALT>` | Țineți/eliberați Alt/Option |
| `<CMD>` ... `</CMD>` | Țineți/eliberați comanda/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Chei speciale |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Tastele săgeți |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Tastele de navigare |
| `<F1>` până la `<F12>` | Taste funcționale |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pauze |

**Exemplu:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Aceasta deschide un terminal (Ctrl+Alt+T), așteaptă 1 secundă, apoi tastați `ls -la` și apăsați Enter.

## Crearea unei macrocomenzi

1. Accesați modul **Macros**
2. Atingeți **"+"** pentru a crea o nouă macrocomandă
3. Introduceți un **nume/etichetă pentru macrocomanda**
4. Construiți secvența de macrocomandă folosind câmpul de text și jetoanele cu inserare rapidă
5. Reglați **Intervalul de trimitere a caracterului** (întârziere între apăsări de taste în milisecunde)
6. Atingeți **„Salvați”**

## Următorii pași

- **[← Shortcut Hub](04-shortcuts.md)** — Comenzi rapide de la tastatură bazate pe profil
- **[Voice Input →](06-voice-input.md)** — Transcriere de la voce la tastatură