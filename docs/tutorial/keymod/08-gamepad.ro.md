---
title: "KeyMod Tutorial - Gamepad"
description: Utilizați KeyMod ca controler de joc virtual cu aspecte personalizabile pentru jocuri, emulare retro și testare a jocului. Transformă-ți telefonul într-un…
keywords: "KeyMod gamepad, controler virtual, controler de joc, mapare WASD, stick analogic"
---

# 8. Gamepad

Transformă-ți telefonul într-un controler de joc virtual pentru jocuri, emulare retro și testare a jocurilor.

## Aspectul

Gamepad-ul oferă un aspect complet al controlerului cu D-pad, butoane de acțiune, butoane de umăr, stick-uri analogice și Start/Select.

| Control | Cum |
|---|---|
| D-pad | Atingeți săgețile direcționale |
| Butoane de acțiune (A, B, X, Y) | Atingeți-le |
| Nasturi pe umeri | Atingeți L1, L2, R1, R2 în partea de sus |
| Stick-uri analogice | Atingeți și trageți cercurile stick |
| Start / Selectați | Atingeți butoanele |

## Sistem presetat (v7)

KeyMod 0.15 a introdus un **sistem de gamepad bazat pe presetare**. În loc de aspecte fixe încorporate, configurațiile gamepad-urilor sunt acum salvate ca **presetări** pe care le puteți parcurge, importa și exporta.

### Gestionarea presetărilor

- **Atingeți cipul presetat** în bara de instrumente pentru a parcurge aspectele disponibile
- **Apăsați lung pe cipul Preset** pentru lista completă de presetări cu opțiuni de import, adăugare de module și export
- Aspectul **emu-6** inclus este livrat ca presetare de pornire (`preset_default`)
- Presetări pot fi partajate JSON fișiere folosind aspectul **schema v7**

### Adăugarea modulelor

Din meniul presetat, puteți adăuga module noi la orice aspect:

- **D-Pad / Stick** — adaugă un modul pentru degetul mare stâng (`stick_left`, `stick_left_2` etc.)
- **Touchpad** — adaugă un touchpad (`touchpad_1`, `touchpad_2` etc.) cu butoanele mouse-ului L/M/R în pachet
- **Butoane** — adăugați butoane pentru față, butoane pentru umăr sau declanșatoare

## Personalizare

- **Configurați orice modul** - atingeți un modul pentru a deschide dialogul său de configurare și pentru a ajusta comportamentul
- **Mod Analog vs Key** — stick-urile pot fi configurate ca `STICK_KEY` (taste de direcție digitale) sau `STICK_MOUSE` (mișcare relativă a indicatorului/mouse-ului)
- **WASD mapare** — atribuiți WASD taste stick-ului din stânga pentru jocuri pe computer
- **Button/Scalarea dimensiunii stickului** — ajustați dimensiunile pentru zona de atingere preferată
- **Imagine de fundal** — personalizați fundalul gamepadului (încorporați în presetări partajate ca base64, până la 6 MiB)
- **Feedback haptic** — vibrație la apăsarea button (numai butoanele feței, nu clicurile mouse-ului)
- **Gyro** — permite giroscopului dispozitivului să miște indicatorul gazdă în timp ce ecranul gamepad-ului este activ

### Model de modul

Fiecare control de pe ecran este un **modul** cu trei straturi:

| Strat | Ce definește |
|---|---|
| **Slot / identitate** | Ce control pe pânză (de ex. `stick_left`, `stick_right`, `touchpad_1`) |
| **Comportament (tip)** | Ce primește gazda: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parametri** | Tuning pe același modul: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, mărime, culoare |

### Stick-uri analogice

- ** Stick stânga → Taste de la tastatură:** Hărți la tastele săgeți cu suport diagonal. Configurabil la WASD în configurația modulului.
- **Spec dreapta → Mișcarea mouse-ului:** modul `STICK_MOUSE` cu sensibilitate configurabilă (`stickMouseSensitivity`), zonă moartă pentru a preveni deriva.
- **Histerezis:** Pragurile de activare (0,6) și dezactivare (0,4) împiedică vibrația cheilor la graniță.

### Touchpad

- **Suport multi-touchpad**: adăugați mai multe touchpad-uri la un singur aspect (`touchpad_1`, `touchpad_2` etc.)
- **Amprentă pătrată** în mod prestabilit cu redimensionare prin apăsare lungă
- **Butoanele mouse-ului incluse** (L/M/R) partajate pe toate touchpad-urile
- **Dimensiunea mouse-ului button**: apăsați lung un touchpad pentru a ajusta **dimensiunea mouse-ului button** sau apăsați lung un mouse individual button pentru **Această dimensiune button**

> **Notă:** Protocolul Gamepad HID este în dezvoltare activă. Lucrări de sprijin de bază button; precizia stickului analogic poate varia.

## Depanare

### Stickul analog nu răspunde

| Simptom | Soluție |
|---|---|
| **Stick nu produce acțiune** | Verificați configurația modulului. Verificați ca bastonul să nu fie blocat în zona moartă (zona centrală). Verificați pragurile de histerezis - stick-ul trebuie să treacă peste activarea 0,6 pentru a se declanșa. |
| **Butoane care trimit chei greșite** | Deschideți configurația modulului și verificați alocarea tastelor button. Atingeți button pentru a deschide fereastra de configurare și a corecta maparea. |
| **Touchpad butoanele mouse-ului nu fac clic** | Asigurați-vă că butoanele L/M/R sunt prezente în presetare. Adăugarea unui touchpad adaugă automat butoanele mouse-ului partajate. Verificați configurația modulului pentru tasta HID atribuită. |

## Următorii pași

- **[← AI Integration](07-ai.md)** — Rafinarea textului asistată de AI și asistent de comandă
- **[Numpad →](09-numpad.md)** — Tastatură numerică pentru introducerea datelor