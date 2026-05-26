---
title: "KeyMod Poradnik - Gamepad"
description: Użyj KeyMod jako wirtualnego kontrolera gier z konfigurowalnymi układami do gier, emulacji retro i testowania gier. Zmień swój telefon w wirtualny kontroler…
keywords: "gamepad KeyMod, kontroler wirtualny, kontroler gier, mapowanie WASD, drążek analogowy"
---

# 8. Pad do gier

Zmień swój telefon w wirtualny kontroler gier do grania, emulacji retro i testowania gier.

## Układ

Gamepad zapewnia pełny układ kontrolera z padem kierunkowym, przyciskami akcji, przyciskami naramiennymi, drążkami analogowymi i przyciskiem Start/Select.

| Kontrola | Jak |
|---|---|
| Pad kierunkowy | Kliknij strzałki kierunkowe |
| Przyciski akcji (A, B, X, Y) | Kliknij je |
| Guziki na ramionach | Naciśnij L1, L2, R1, R2 u góry |
| Gałki analogowe | Dotknij i przeciągnij kółka |
| Rozpocznij / Wybierz | Naciśnij przyciski |

## Wstępnie ustawiony system (v7)

KeyMod 0.15 wprowadziło **system gamepada oparty na wstępnie ustawionych ustawieniach**. Zamiast stałych, wbudowanych układów, konfiguracje gamepada są teraz zapisywane jako **ustawienia wstępne**, które można przełączać, importować i eksportować.

### Zarządzanie ustawieniami wstępnymi

- **Dotknij elementu Preset** na pasku narzędzi, aby przeglądać dostępne układy
- **Naciśnij i przytrzymaj chip Preset**, aby wyświetlić pełną listę presetów z opcjami importu, dodawania modułów i eksportu
- Dołączony układ **emu-6** jest dostarczany jako ustawienie wstępne (`preset_default`)
- Presety można udostępniać JSON plikom przy użyciu układu **schema v7**

### Dodawanie modułów

Z gotowego menu możesz dodawać nowe moduły do dowolnego układu:

- **D-Pad / Stick** — dodaje moduł lewego kciuka (`stick_left`, `stick_left_2` itd.)
- **Touchpad** — dodaje touchpad (`touchpad_1`, `touchpad_2` itd.) z dołączonymi przyciskami myszy L/M/R
- **Przyciski** — dodaj przyciski twarzy, przyciski na ramionach lub wyzwalacze

## Dostosowywanie

- **Skonfiguruj dowolny moduł** — dotknij modułu, aby otworzyć okno dialogowe konfiguracji i dostosować zachowanie
- **Tryb analogowy lub klawiszowy** — drążki można skonfigurować jako `STICK_KEY` (cyfrowe klawisze kierunkowe) lub `STICK_MOUSE` (względny ruch wskaźnika/myszy)
- **Mapowanie WASD** — przypisz klawisze WASD do lewego drążka w celu grania na komputerze
- **Button/skalowanie rozmiaru sztyftu** — dostosuj rozmiary do preferowanego obszaru dotykowego
- **Obraz tła** — dostosuj tło gamepada (osadzane we wspólnych ustawieniach wstępnych jako base64, do 6 MiB)
- **Potwierdzenie dotykowe** — wibracje po naciśnięciu button (tylko przyciski twarzą, nie kliknięcia myszą)
- **Gyro** — umożliwia żyroskopowi urządzenia przesuwanie wskaźnika hosta, gdy ekran gamepada jest aktywny

### Model modułu

Każda kontrolka ekranowa to **moduł** składający się z trzech warstw:

| Warstwa | Co to definiuje |
|---|---|
| **Slot / tożsamość** | Która kontrolka na kanwie (np. `stick_left`, `stick_right`, `touchpad_1`) |
| **Zachowanie (typ)** | Co otrzymuje gospodarz: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parametry** | Strojenie na tym samym module: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, rozmiar, kolor |

### Gałki analogowe

- **Lewy drążek → Klawisze klawiatury:** Odwzorowują klawisze strzałek z ukośnym wsparciem. Możliwość ustawienia na WASD w konfiguracji modułu.
- **Prawy drążek → Ruch myszy:** tryb `STICK_MOUSE` z konfigurowalną czułością (`stickMouseSensitivity`), martwa strefa zapobiegająca dryftowi.
- **Histereza:** Progi aktywacji (0,6) i dezaktywacji (0,4) zapobiegają drganiom klawiszy na granicy.

### Touchpad

- **Obsługa Multi-34**: dodaj wiele touchpadów do jednego układu (`touchpad_1`, `touchpad_2` itp.)
- **Obrys kwadratowy** domyślnie przy zmianie rozmiaru przy długim naciśnięciu
- **Dołączone przyciski myszy** (L/M/R) wspólne dla wszystkich touchpadów
- **Rozmiar myszy button**: naciśnij i przytrzymaj touchpad, aby dostosować **Rozmiar myszy button** lub naciśnij i przytrzymaj pojedynczą mysz button, aby uzyskać **Ten rozmiar button**

> **Uwaga:** Protokół Gamepad HID jest w fazie aktywnego rozwoju. Podstawowe wsparcie button działa; Precyzja drążka analogowego może się różnić.

## Rozwiązywanie problemów

### Gałka analogowa nie odpowiada

| Objaw | Rozwiązanie |
|---|---|
| **Kij nie wykonuje akcji** | Sprawdź konfigurację modułu. Sprawdź, czy drążek nie utknął w martwej strefie (obszar środkowy). Sprawdź progi histerezy — drążek musi przekroczyć 0,6 aktywacji, aby wyzwolić. |
| **Przyciski wysyłają nieprawidłowe klucze** | Otwórz konfigurację modułu i sprawdź przypisanie klawiszy button. Naciśnij button, aby otworzyć wyskakujące okienko konfiguracji i poprawić mapowanie. |
| **Touchpad przyciski myszy nie klikają** | Upewnij się, że w ustawieniu wstępnym znajdują się dołączone przyciski L/M/R. Dodanie touchpad powoduje automatyczne dodanie wspólnych przycisków myszy. Sprawdź konfigurację modułu dla przypisanego klawisza HID. |

## Następne kroki

- **[← AI Integration](07-ai.md)** — Udoskonalanie tekstu wspomagane sztuczną inteligencją i asystent poleceń
- **[Numpad →](09-numpad.md)** — Klawiatura numeryczna do wprowadzania danych