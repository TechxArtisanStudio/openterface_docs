---
title: "KeyMod Samouczek — docelowy system operacyjny"
description: Ustaw docelowy system operacyjny tak, aby KeyMod wysyłał prawidłowe mapowania klawiszy do Windows, macOS lub Linux komputerów. KeyMod wysyła naciśnięcia…
keywords: "Docelowy system operacyjny, mapowanie klawiszy, klawisze modyfikujące, wejście Unicode"
---

# 3. Docelowy system operacyjny

KeyMod wysyła naciśnięcia klawiszy, które dostosowują się do systemu operacyjnego komputera docelowego. Prawidłowa konfiguracja gwarantuje, że odpowiednie klucze dotrą do celu.

## Jak ustawić

Kliknij **ikonę systemu operacyjnego** na pasku nagłówka, aby otworzyć selektor:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Selektor docelowego systemu operacyjnego — wybierz macOS, Windows lub Linux.</em></p>
</div>

> **Uwaga:** nie ma jeszcze zrzutu ekranu. Selektor systemu operacyjnego to okno dialogowe z trzema przyciskami ikon (macOS, Windows, Linux), które pojawia się po dotknięciu ikony systemu operacyjnego na pasku nagłówka.

## Co to zmienia

| Cel | Mapowanie klawiszy |
|------------|------------|
| **Windows** | klawisz Win zmapowany na klawisz Windows; standardowe zachowanie modyfikatora PC |
| **macOS** | klawisz Win zmapowany na Cmd; Alt odwzorowane na Option; poprawne etykiety skrótów |
| **Linux** | Super/Meta zachowanie klawiszy |

Wpływa to na:
- **Etykiety skrótów** pokazane w Centrum skrótów
- **Mapowanie klawiszy modyfikujących** (zachowanie klawisza Win)
- **Metoda wprowadzania Unicode** używana w przypadku znaków innych niż ASCII

## Znaki Unicode

Znaki inne niż ASCII (chiński, japoński, emoji) wymagają metod wprowadzania specyficznych dla systemu operacyjnego:

| system operacyjny | Metoda |
|---|---|
| **Windows** | Alt+NumPad szesnastkowe wejście Unicode |
| **Linux** | Ctrl+Shift+U, po którym następuje kod szesnastkowy |
| **macOS** | Option+wejście szesnastkowe |

Jeśli znaki Unicode pojawiają się niepoprawnie w systemie docelowym, sprawdź, czy docelowy system operacyjny jest ustawiony prawidłowo.

## Tryby klawiatury (nie układy)

KeyMod udostępnia trzy tryby klawiatury do pisania:

| Tryb | Jak przełączyć |
|---|---|
| **ABC** (litery) | Naciśnij klawisz **ABC** |
| **123** (liczby) | Naciśnij klawisz **123** |
| **!?#** (symbole) | Naciśnij klawisz **!?#** |

Są to przełączniki metod wprowadzania w aplikacji, a nie fizyczne układy klawiatury. KeyMod wysyła obecnie standardowe USB HID kody skanujące (baza US QWERTY). Jeśli w urządzeniu docelowym używasz klawiatury fizycznej innej niż amerykańska, możesz zauważyć niewielkie niezgodności znaków dla symboli na tych samych pozycjach klawiszy.

## Następne kroki

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Wpisywanie, modyfikatory, touchpad i wprowadzanie tekstu
- **[Shortcut Hub →](04-shortcuts.md)** — Skróty klawiaturowe oparte na profilach