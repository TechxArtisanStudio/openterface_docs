---
title: "KeyMod Tutorial - OS țintă"
description: "Setați sistemul de operare țintă astfel încât KeyMod să trimită mapările corecte ale tastelor către computere Windows, macOS sau Linux."
keywords: "KeyMod OS țintă, maparea tastelor, tastele modificatoare, introducerea Unicode"
---

# 3. Sistemul de operare țintă

KeyMod trimite apăsări de taste care se adaptează la sistemul de operare al computerului țintă. Configurarea corectă a acesteia asigură că cheile potrivite ajung la țintă.

## Cum se setează

Atingeți **pictograma OS** din bara de antet pentru a deschide selectorul:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Selector OS țintă — alegeți macOS, Windows sau Linux.</em></p>
</div>

> **Notă:** Nu există încă nicio captură de ecran pentru aceasta. Selectorul OS este un dialog cu trei butoane pictograme (macOS, Windows, Linux) care apare atunci când atingeți pictograma OS din bara de antet.

## Ce se schimbă

| Țintă | Maparea cheilor |
|--------|--------------|
| **Windows** | Tasta Win mapată la tasta Windows; comportamentul standard al modificatorului PC |
| **macOS** | Tasta Win mapată la Cmd; Alt mapat la Option; etichete corecte de comenzi rapide |
| **Linux** | Super/Meta comportament cheie |

Aceasta afectează:
- **Etichete de comenzi rapide** afișate în Hubul de comenzi rapide
- **Mapping taste modificatoare** (comportamentul tastelor de Win)
- **Metoda de introducere Unicode** utilizată pentru caractere non-ASCII

## Caractere Unicode

Caracterele non-ASCII (chineză, japoneză, emoji) necesită metode de introducere specifice sistemului de operare:

| OS | Metoda |
|---|---|
| **Windows** | Alt+NumPad intrare Unicode hexazecimală |
| **Linux** | Ctrl+Shift+U urmat de codul hexadecimal |
| **macOS** | Option+intrare hexagonală |

Dacă caracterele Unicode apar incorect pe țintă, verificați că sistemul de operare țintă este setat corect.

## Moduri de tastatură (nu aspecte)

KeyMod oferă trei moduri de tastatură pentru tastare:

| Modul | Cum să comutați |
|---|---|
| **ABC** (litere) | Atingeți tasta **ABC** |
| **123** (cifre) | Atingeți tasta **123** |
| **!?#** (simboluri) | Atingeți tasta **!?#** |

Acestea sunt comutări ale metodei de introducere în aplicație, nu dispoziții fizice ale tastaturii. KeyMod trimite în prezent coduri de scanare standard USB HID (bază QWERTY SUA). Dacă utilizați o tastatură fizică non-SUA pe țintă, este posibil să observați ușoare nepotriviri de caractere pentru simbolurile de pe aceleași poziții ale tastelor.

## Următorii pași

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Tastare, modificatori, touchpad și introducere text
- **[Shortcut Hub →](04-shortcuts.md)** — Comenzi rapide de la tastatură bazate pe profil