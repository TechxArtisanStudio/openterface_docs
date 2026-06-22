---
title: "Ghid card SD | Modul de extensie v2"
description: "Utilizați citirea/scrierea pe cardul SD pe Modulul de extensie KVM Openterface uConsole v2. Comutați accesul între uConsole și dispozitivul țintă pentru crearea de imagini, jurnale și transfer de fișiere."
keywords: "card SD, microSD, extensie KVM v2, scriere imagini, transfer fișiere, uConsole"
---

# **Ghid card SD** | Modul de extensie v2

Modulul de extensie v2 include **citire/scriere pe card SD**, astfel încât puteți scrie imagini, exporta jurnale și transfera fișiere de pe uConsole fără a fi nevoie să purtați un cititor de carduri extern.

## Prezentare generală

Modulul oferă un slot microSD partajat între **uConsole (gazdă)** și **dispozitivul țintă** — similar ca concept cu fluxul de lucru de comutare MicroSD KVM-GO, dar integrat în modulul de extensie uConsole.

!!! note "O singură parte la un moment dat"
    Cardul SD este montat fie pe uConsole, **fie** pe dispozitivul țintă, niciodată pe ambele simultan. Comutați accesul folosind aplicația gazdă Openterface.

## Instalarea cardului SD

Introduceți cardul microSD ferm până când este așezat în siguranță în slotul modulului.

## Control prin aplicația gazdă

Utilizați **Openterface QT** pe uConsole pentru a:

- Comutați accesul SD între **gazdă** (uConsole) și **țintă**
- Scrieți imagini OS pe card direct de pe uConsole
- Exportați jurnale sau transferați fișiere fără a scoate cardul

Asigurați-vă că ați finalizat [Configurarea software](/products/kvmext/software-setup/) înainte de a utiliza funcțiile SD.

## Fluxuri de lucru tipice

| Flux de lucru | Descriere |
|----------|-------------|
| **Scriere imagini OS** | Scrieți imagini pentru Raspberry Pi, plăci embedded sau echipamente direct de pe uConsole |
| **Export jurnale** | Extrageți jurnalele de pe dispozitivul țintă pe card, apoi citiți-le pe uConsole |
| **Transfer de fișiere** | Mutați configurații sau scripturi între uConsole și țintă atunci când rețeaua nu este disponibilă |

## Sfaturi de siguranță

- **Ejectați/demontați** cardul în aplicația gazdă înainte de a-l scoate fizic
- Comutați la partea corectă (gazdă sau țintă) înainte de operațiile de citire/scriere
- Utilizați carduri microSD de calitate pentru sarcinile de scriere a imaginilor

## Subiecte similare

- [Conectare la dispozitivul țintă](/products/kvmext/connect-to-target/)
- [Configurare software](/products/kvmext/software-setup/)
- [Ghid de comutare MicroSD KVM-GO](/products/kvmgo/microsd-switch/) — concept similar de comutare pe KVM-GO
