---
title: "KeyMod Tutorial - Noțiuni introductive"
description: "Instalați aplicația KeyMod, conectați-vă la dispozitivul KeyMod și trimiteți prima apăsare a tastei în mai puțin de 5 minute. Documentație Openterface:…"
keywords: "KeyMod începere, KeyMod configurare, KeyMod instalare, conectare KeyMod"
---

# 1. Noțiuni de bază

Instalați aplicația KeyMod, conectați-vă la hardware-ul KeyMod și trimiteți prima apăsare a tastei în mai puțin de 5 minute.

## De ce ai nevoie

- **Openterface KeyMod hardware** — pornit și în raza de acțiune
- **Telefon sau tabletă** — Android cu aplicația KeyMod instalată
- **USB cablu** (pentru configurarea inițială) — USB-C pentru a vă conecta telefonul la dispozitivul KeyMod
- **Bluetooth** (opțional) — pentru conexiune fără fir după configurarea inițială

## Pasul 1: Instalați aplicația KeyMod

**Android:**

1. Deschideți browserul telefonului și accesați [KeyMod GitHub Releases page](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags)
2. Descărcați cel mai recent fișier `.apk`
3. Atingeți fișierul descărcat pentru a instala
4. Dacă Android vă întreabă, permiteți **„Instalați aplicații necunoscute”** pentru browserul dvs.

Alternativ, construiți din sursă - vezi [Build from Source](#build-from-source) de mai jos.

## Pasul 2: Conectați-vă la dispozitivul dvs. KeyMod

KeyMod se conectează la hardware-ul Openterface KeyMod în două moduri:

### USB Conexiune (recomandată pentru prima configurare)

1. Conectați telefonul la dispozitivul KeyMod folosind un cablu USB-C
2. Deschideți aplicația KeyMod
3. Atingeți pictograma de conexiune (colțul din dreapta sus al ecranului principal)
4. Atingeți **"USB Connection"**
5. Acceptați solicitarea de permisiuni USB când vi se solicită
6. Ar trebui să vedeți un indicator verde de stare **„Conectat”**

### Conexiune Bluetooth (fără fir)

1. Asigurați-vă că Bluetooth este activat pe telefon
2. Deschideți KeyMod și atingeți pictograma conexiune
3. Atingeți **„Conexiune Bluetooth”**
4. Așteptați ca dispozitivul dvs. KeyMod să apară în lista de scanare
5. Atingeți-l pentru a asocia
6. Ar trebui să vedeți un indicator verde de stare **„Conectat”**

> **Sfat:** Activați **„Conectare automată la pornire”** în dialogul de conectare, astfel încât KeyMod să se reconecteze automat de fiecare dată când îl deschideți. Aplicația își amintește ultimul tip de conexiune (USB sau BLE).

## Pasul 3: Alegeți modul dvs. — Bun venit și ghid

După lansare, veți vedea ecranul **Bun venit și ghid** cu carduri de mod:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Bun venit și ghid — atingeți orice card de mod pentru a intra în acel mod.</em></p>
</div>

Utilizați meniul lateral (pictograma hamburger, sus-stânga) pentru a comuta oricând între moduri:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Sertar de navigare — comută între moduri, accesează macrocomenzi, voce și setări.</em></p>
</div>

**„Ține minte alegerea mea”** — bifați această casetă pentru a sări peste ecranul de bun venit la lansările viitoare și pentru a trece direct la ultimul mod utilizat.

**„Oriți” button** — ocoliți ecranul de bun venit și intrați imediat în modul utilizat anterior.

## Pasul 4: Trimiteți prima apăsare a tastei

1. Selectați modul **Tastatură și mouse**
2. Atingeți orice tastă de pe tastatura de pe ecran
3. Apăsarea tastei corespunzătoare este trimisă la computerul țintă

Asta e! Acum controlați computerul țintă de la distanță.

## Indicatori de stare a conexiunii

| Indicator | Înțeles |
|---|---|
| **Verde** (pictogramă conectată) | Conexiune activă, gata să trimită intrare |
| **Chihlimbar/Albastru** (pictogramă de conectare) | Conexiune în curs |
| **Gri** (pictogramă deconectată) | Nicio conexiune activă |
| **Bare de semnal** | BLE puterea semnalului sau USB stare activă |

## Construire din sursă (Android, pentru dezvoltatori)```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## Următorii pași

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Tastare, modificatori, touchpad și introducere text