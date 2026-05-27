---
title: "KeyMod Samouczek — pierwsze kroki"
description: "Zainstaluj aplikację KeyMod, połącz się z urządzeniem KeyMod i wyślij pierwsze naciśnięcie klawisza w mniej niż 5 minut. Oficjalna dokumentacja Openterface:…"
keywords: "KeyMod pierwsze kroki, KeyMod konfiguracja, KeyMod instalacja, podłączenie KeyMod"
---

# 1. Pierwsze kroki

Zainstaluj aplikację KeyMod, połącz się ze sprzętem KeyMod i wyślij pierwsze naciśnięcie klawisza w mniej niż 5 minut.

## Czego potrzebujesz

- **Openterface KeyMod sprzęt** — włączony i w zasięgu
- **Telefon lub tablet** — Android z zainstalowaną aplikacją KeyMod
- **Kabel USB** (do wstępnej konfiguracji) — USB-C do podłączenia telefonu do urządzenia KeyMod
- **Bluetooth** (opcjonalnie) — do połączenia bezprzewodowego po wstępnej konfiguracji

## Krok 1: Zainstaluj aplikację KeyMod

**Android:**

1. Otwórz przeglądarkę w telefonie i przejdź do [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. Pobierz najnowszy plik `.apk`
3. Stuknij pobrany plik, aby go zainstalować
4. Jeśli Android zapyta, zezwól na **„Zainstaluj nieznane aplikacje”** w przeglądarce


> **Note:** KeyCmd source code is not yet public. Download the beta APK from the [App](/app/kvm/) page.

## Krok 2: Połącz się z urządzeniem KeyMod

KeyMod łączy się ze sprzętem Openterface KeyMod na dwa sposoby:

### USB Połączenie (zalecane przy pierwszej konfiguracji)

1. Podłącz telefon do urządzenia KeyMod za pomocą kabla USB-C
2. Otwórz aplikację KeyMod
3. Stuknij ikonę połączenia (prawy górny róg ekranu głównego)
4. Stuknij **„USB Połączenie”**
5. Po wyświetleniu monitu zaakceptuj monit o pozwolenie USB
6. Powinieneś zobaczyć zielony wskaźnik stanu **„Połączono”**

### Połączenie Bluetooth (bezprzewodowe)

1. Upewnij się, że w telefonie jest włączony Bluetooth
2. Otwórz KeyMod i dotknij ikony połączenia
3. Kliknij **„Połączenie Bluetooth”**
4. Poczekaj, aż Twoje urządzenie KeyMod pojawi się na liście skanowania
5. Stuknij, aby sparować
6. Powinieneś zobaczyć zielony wskaźnik stanu **„Połączono”**

> **Wskazówka:** Włącz opcję **„Automatyczne łączenie przy uruchomieniu”** w oknie dialogowym połączenia, aby KeyMod automatycznie łączyło się ponownie przy każdym otwarciu. Aplikacja zapamiętuje Twój ostatni typ połączenia (USB lub BLE).

## Krok 3: Wybierz swój tryb — powitanie i przewodnik

Po uruchomieniu zobaczysz ekran **Witamy i przewodnik** z kartami trybów:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Witamy i przewodnik — dotknij dowolnej karty trybu, aby przejść do tego trybu.</em></p>
</div>

Użyj menu bocznego (ikona hamburgera w lewym górnym rogu), aby w dowolnym momencie zmienić tryb:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Szuflada nawigacji — przełączanie trybów, dostęp do makr, głos i ustawienia.</em></p>
</div>

**„Zapamiętaj mój wybór”** — zaznacz to pole, aby pominąć ekran powitalny przy przyszłych uruchomieniach i przejść bezpośrednio do ostatnio używanego trybu.

**„Pomiń” button** — omiń ekran powitalny i natychmiast wejdź do wcześniej używanego trybu.

## Krok 4: Wyślij pierwsze naciśnięcie klawisza

1. Wybierz tryb **Klawiatura i mysz**
2. Naciśnij dowolny klawisz na klawiaturze ekranowej
3. Odpowiednie naciśnięcie klawisza zostanie wysłane do komputera docelowego

To wszystko! Teraz zdalnie sterujesz komputerem docelowym.

## Wskaźniki stanu połączenia

| Wskaźnik | Znaczenie |
|---|---|
| **Zielony** (ikona połączenia) | Aktywne połączenie, gotowe do wysyłania danych wejściowych |
| **Pomarańczowy/niebieski** (ikona połączenia) | Połączenie w toku |
| **Szary** (ikona połączenia) | Brak aktywnego połączenia |
| **Paski sygnałowe** | BLE siła sygnału lub USB stan aktywny |

## Następne kroki

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Wpisywanie, modyfikatory, touchpad i wprowadzanie tekstu