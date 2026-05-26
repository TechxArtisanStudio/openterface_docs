---
title: "KeyMod Poradnik - Rozwiązywanie problemów"
description: "Napraw typowe problemy KeyMod: problemy z połączeniem, brak rejestracji kluczy, błędy parowania Bluetooth, błędy wprowadzania głosowego i inne. Typowe…"
keywords: "KeyMod rozwiązywanie problemów, KeyMod brak połączenia, KeyMod problemy z Bluetooth, KeyMod klawisze nie działają"
---

# 12. Rozwiązywanie problemów

Typowe problemy i rozwiązania dotyczące aplikacji KeyMod na Android.

## Problemy z połączeniem

### Brak połączenia

| Objaw | Rozwiązanie |
|---|---|
| **Wskaźnik „Brak połączenia”** | Sprawdź połączenie kablowe; spróbuj ponownie podłączyć. W przypadku BLE wyłącz/włącz Bluetooth i sparuj ponownie. |
| **USB odmowa pozwolenia** | Przejdź do Android Ustawienia → Aplikacje → KeyMod → Uprawnienia → włącz USB. Podłącz ponownie kabel. |
| **Bluetooth nie chce się sparować** | Wyłącz/włącz Bluetooth. Zapomnij urządzenie w ustawieniach Bluetooth i sparuj ponownie. Upewnij się, że urządzenie KeyMod jest w trybie parowania. |
| **Połączenie często się zrywa** | Sprawdź w aplikacji wartość RSSI poniżej BLE button. Poniżej -75 dBm oznacza słaby sygnał — podejdź bliżej. Usuń przeszkody fizyczne. |

### Wskaźniki stanu połączenia

| Wskaźnik | Znaczenie |
|---|---|
| **Połączony** | Zielona ikona — gotowość do przesłania danych |
| **Łączenie** | Ikona bursztynowa — trwa połączenie |
| **Rozłączony** | Szara ikona — brak aktywnego połączenia |
| **Paski sygnałowe** | BLE siła sygnału lub USB stan aktywny |

### Automatyczne łączenie

Włącz opcję **„Automatyczne łączenie przy uruchomieniu”** w oknie dialogowym połączenia. KeyMod zapamiętuje Twój ostatni typ połączenia (USB lub BLE) i ostatnie sparowane urządzenie BLE.

### USB Wykrywanie dołączania/odłączania

KeyMod monitoruje zdarzenia związane z dołączeniem/odłączeniem Android USB. Jeśli odłączysz kabel USB, stan połączenia zostanie natychmiast zaktualizowany. Ponowne podłączenie powoduje próbę ponownego połączenia, jeśli włączone jest automatyczne łączenie.

---

## Problemy z klawiaturą

### Klucze nie są rejestrowane

| Objaw | Rozwiązanie |
|---|---|
| **Klucze nie wysyłają** | Sprawdź, czy połączenie pokazuje „Połączono” (zielony). Spróbuj zmienić tryby i odwrotnie. Sprawdź, czy komputer docelowy rozpoznaje urządzenie KeyMod jako klawiaturę. |
| **Makro nie działa** | Sprawdź, czy masz połączenie. Sprawdź, czy dane makra zawierają prawidłowe tokeny (bez literówek w nazwach tokenów). |
| **Pojawiają się nieprawidłowe znaki** | Sprawdź ustawienie **Docelowy system operacyjny** — niedopasowany system operacyjny może powodować problemy z mapowaniem klawiszy. Sprawdź układ klawiatury komputera docelowego (QWERTY czy AZERTY). |

### Znaki Unicode nie działają

Znaki inne niż ASCII (chiński, japoński, emoji) wymagają metod wprowadzania specyficznych dla systemu operacyjnego:

| system operacyjny | Metoda |
|---|---|
| **Windows** | Alt+NumPad szesnastkowe wejście Unicode |
| **Linux** | Ctrl+Shift+U, po którym następuje kod szesnastkowy |
| **macOS** | Option+wejście szesnastkowe |

Jeśli znaki Unicode pojawiają się niepoprawnie, sprawdź, czy **Docelowy system operacyjny** jest ustawiony prawidłowo.

---

## TouchPad Problemy

| Objaw | Rozwiązanie |
|---|---|
| **Touchpad nie odpowiada** | Sprawdź, czy w Ustawieniach włączona jest funkcja Haptic Feedback. Wypróbuj nakładkę pomocy TouchPad (?), aby sprawdzić obsługę gestów. |
| **Przewiń nie działa** | Sprawdź czułość przewijania touchpad w Ustawieniach → Ogólne. |

---

## Problemy z wprowadzaniem głosowym

### Moduł rozpoznawania mowy jest niedostępny

Zainstaluj Google Pisanie głosowe ze Sklepu Play. Na Android 11+, KeyMod potrzebuje uprawnień do zapytań (zawartych w APK).

### Wykrywanie ciszy nie działa

| Objaw | Rozwiązanie |
|---|---|
| **Nagrywanie jest kontynuowane, gdy nie mówisz** | Sprawdź przełącznik Auto-Pause on Silence. Zmniejsz hałas w tle. Mów wyraźnie i blisko mikrofonu. |
| **Nagrywanie zostaje natychmiast zatrzymane** | Mów głośniej lub skróć limit czasu wykrywania ciszy. |

### Tekst głosowy nie jest wysyłany

Sprawdź stan połączenia. W przypadku braku połączenia funkcja „Wyślij” button jest wyłączona.

---

## Problemy ze sztuczną inteligencją

### Klucz API nie działa

| Objaw | Rozwiązanie |
|---|---|
| **„Klucz API nie jest skonfigurowany”** | Sprawdź, czy klucz API jest poprawny — sprawdź, czy nie ma dodatkowych spacji lub literówek. Sprawdź podstawowy adres URL interfejsu API — musi zawierać pełną ścieżkę (np. `https://api.openai.com/v1`). Sprawdź, czy nazwa modelu istnieje u dostawcy. W przypadku dostawców lokalnych (Ollama) upewnij się, że ustawiona jest flaga Opcjonalny klucz API. |

### Powolne udoskonalanie tekstu

Sprawdź połączenie sieciowe. Wypróbuj szybszy model — mniejsze modele (gpt-3.5-turbo, llama3-8b) reagują szybciej. Skorzystaj z lokalnego dostawcy (Ollama), aby wyeliminować opóźnienia sieci. Sprawdź historię żądań AI pod kątem komunikatów o błędach.

---

## Potrzebujesz dodatkowej pomocy?

Jeśli nadal występują problemy:

- **Raporty o błędach:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Społeczność:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface dokumentacja:** [openterface.com](https://openterface.com)