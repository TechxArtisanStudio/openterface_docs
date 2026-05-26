---
title: "Samouczek KVM 01 — Pierwsze kroki"
description: "Grupa docelowa: Początkujący — użytkownicy urządzeń Openterface KVM po raz pierwszy Oficjalna dokumentacja Openterface: konfiguracja, FAQ i rozwiązywanie…"
---

# Samouczek KVM 01 — Pierwsze kroki

**Grupa docelowa:** Początkujący — użytkownicy urządzeń Openterface KVM po raz pierwszy

---

## 1. Czym jest KVM-over-USB?

Urządzenie KVM (Keyboard, Video, Mouse) znajduje się między **komputerem hostem** (Twoją stacją roboczą) a **komputerem docelowym** (serwer, mini PC, urządzenie wbudowane). Ono:

- **Przechwytuje** wyjście wideo HDMI urządzenia docelowego (oraz dźwięk, jeśli jest dostępny)
- **Przekazuje** wejścia z klawiatury i myszy poprzez emulację HID
- Wszystko przez jeden kabel USB — bez sieci

To odróżnia urządzenia KVM od oprogramowania pulpitu zdalnego: możesz kontrolować urządzenie docelowe nawet w **BIOS/UEFI**, podczas rozruchu lub gdy system operacyjny uległ awarii.

### Urządzenia Openterface KVM

| Urządzenie | Forma | Kluczowa cecha |
|--------|------------|-------------|
| **Mini-KVM** | Kompaktowy dongle USB | KVM-over-USB na biurko |
| **KVM-Go** | Przenośny w stylu zestawu narzędzi | KVM w podróży z wbudowanymi kablami, **obsługa iPadOS przez BLE** |
| **uConsole KVM Extension** | Moduł wewnętrzny | Wbudowany KVM dla ClockworkPi uConsole |

> Szukasz **KeyMod** (tylko emulator klawiatury i myszy, bez wideo)? Zobacz [Samouczek KeyMod](../../keymod/index.md).

---

## 2. Czego potrzebujesz

### Sprzęt

- **Urządzenie Openterface KVM** — Mini-KVM, KVM-Go lub uConsole KVM Extension
- **Komputer host** — z systemem macOS, Windows, Linux lub Android
- **Komputer docelowy** — dowolny komputer z wyjściem HDMI
- **Kabel HDMI** — od wyjścia HDMI urządzenia docelowego do wejścia HDMI urządzenia KVM
- **Kabel USB** — od KVM do komputera hosta (zapewnia zasilanie i dane)

### Opcjonalnie

- **Kabel przełączający USB** — od KVM do portu USB urządzenia docelowego (do emulacji klawiatury/myszy)
- **Klawiatura i mysz** — podłącz do przełączalnego portu USB urządzenia KVM, aby sterować hostem lub urządzeniem docelowym

---

## 3. Instalacja

### Aplikacja hosta

| Platforma | Aplikacja | Pobieranie |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) lub [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) lub [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **tylko KVM-Go** |

### Wymagania Android

Aplikacja Android wymaga:

- **Android 8.0 (API 26)** lub nowszego
- **Obsługi USB OTG** — większość nowoczesnych telefonów ją obsługuje (Samsung, Google Pixel, OnePlus). Sprawdź, podłączając pendrive USB z adapterem OTG
- **Kabla lub adaptera USB OTG** do podłączenia urządzenia KVM do telefonu

### Wymagania iPadOS

Aplikacja iPadOS wymaga:

- **iPadOS 17.0** lub nowszego
- **Urządzenia KVM-Go** — iPadOS łączy się z donglem KVM-Go przez **Bluetooth Low Energy (BLE)** w celu wprowadzania klawiatury/myszy oraz z kartą przechwytywania USB dla wideo
- **Uprawnień Kamery i Mikrofonu** — wymaganych do podglądu wideo i monitorowania dźwięku z karty przechwytywania
- **Uprawnienia Bluetooth** — wymaganego do wykrywania i łączenia z donglem KVM-Go w celu wejścia HID
- **Uprawnienia Biblioteki zdjęć** (opcjonalnie) — do zapisywania zrzutów ekranu i nagrań w aplikacji Zdjęcia

### Uprawnienia macOS

Przy pierwszym uruchomieniu macOS poprosi o:

| Uprawnienie | Powód |
|-----------|-----|
| **Kamera** | Przechwytuje wideo z układu przechwytywania HDMI |
| **Mikrofon** | Przechwytuje dźwięk z urządzenia docelowego (jeśli włączony) |
| **Ułatwienia dostępu** | Wymagane do sterowania myszą HID w trybie względnym |

### Uprawnienia Linux

- Dodaj użytkownika do grup `dialout` i `video`: `sudo usermod -a -G dialout,video $USER`
- Zainstaluj reguły udev dla dostępu do urządzenia
- **Konflikt BrlTTY:** Usuń `brltty` lub umieść układ szeregowy na czarnej liście — zobacz [Rozwiązywanie problemów](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- Instalator zawiera sterownik szeregowy CH340. W wersjach przenośnych zainstaluj go osobno.

---

## 4. Podłączanie sprzętu

┌─────────────┐                        ┌──────────────────┐
│   DOCELOWY  │─── kabel HDMI ────────▶│  Openterface     │
│  KOMPUTER   │                        │  Urządzenie KVM  │
└─────────────┘                        │                  │
                                       │  ◄── kabel USB ──│── kabel przełączający USB ──▶ Port USB docelowy
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  KOMPUTER HOST   │
                                       │  (ta aplikacja)  │
                                       └──────────────────┘
1. Podłącz **wyjście HDMI** urządzenia docelowego do **wejścia HDMI** urządzenia KVM
2. Podłącz **USB** urządzenia KVM do **portu USB na komputerze hosta**
3. (Opcjonalnie) Podłącz kabel przełączający USB od KVM do portu USB urządzenia docelowego
4. (Opcjonalnie) Podłącz klawiaturę/mysz do przełączalnego portu USB urządzenia KVM
5. **Włącz** urządzenie docelowe

### Wykrywanie urządzenia

KVM jest enumerowany jako wiele urządzeń USB:
- **Przechwytywanie wideo** (MS2109/MS2109S/MS2130S) — pojawia się jako kamera internetowa
- **Serial** (CH9329 lub CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — używany do operacji firmware

### Łączenie przez telefon Android

Przy używaniu aplikacji Android łańcuch połączeń wykorzystuje USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC docelowy │               │   Urządzenie KVM  │
│  (ekran)     │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Telefon Android │
                               │  (Openterface)   │
                               └──────────────────┘
```

Kolejność połączeń dla Android:

1. **HDMI:** Podłącz wyjście HDMI urządzenia docelowego do **wejścia** HDMI urządzenia KVM
2. **USB (docelowy):** Podłącz port USB urządzenia docelowego do portu USB urządzenia KVM — przenosi sygnały myszy/klawiatury
3. **USB OTG (telefon):** Podłącz KVM do telefonu Android przez kabel/adapter USB OTG
4. **Zasilanie:** Włącz urządzenie KVM (jeśli ma osobne wejście zasilania) i komputer docelowy

Po pomyślnym połączeniu podgląd wideo przełącza się z obrazu zastępczego na ekran na żywo urządzenia docelowego, a dotknięcie ekranu telefonu przesuwa kursor na urządzeniu docelowym.

### Łączenie przez iPadOS

Aplikacja iPadOS używa innego modelu połączenia: **BLE do wejścia** i **przechwytywanie USB do wideo**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  PC docelowy │               │                   │
│  (ekran)     │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (wideo)
                              │   BLE (FFF2)      │ (klawiatura/mysz)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Kolejność połączeń dla iPadOS:

1. **Sprzęt:** Włóż dongle KVM-Go do portu USB komputera docelowego i podłącz wejście HDMI
2. **Włącz** komputer docelowy
3. **Otwórz aplikację** na iPadzie i udziel uprawnień kamery, mikrofonu i Bluetooth
4. **Dotknij przycisku BLE** na pasku narzędzi — aplikacja skanuje urządzenia o nazwie `kvm*`
5. **Dotknij Connect** obok urządzenia KVM-Go — przycisk staje się zielony z siłą sygnału RSSI
6. **Sprawdź:** podgląd wideo pokazuje ekran urządzenia docelowego, dotknięcie wysyła kliknięcia, pisanie wysyła naciśnięcia klawiszy

> **Uwaga:** Aplikacja iPadOS działa tylko z **KVM-Go**. Mini-KVM i uConsole KVM Extension nie mają obsługi BLE.

---

## 5. Pierwsze uruchomienie

### Główne okno

```
┌─────────────────────────────────────────────────────────┐
│  Pasek menu / Pasek narzędzi                            │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              OBSZAR WYŚWIETLANIA WIDEO                  │
│         (pokazuje ekran urządzenia docelowego)          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Pasek stanu │ Port │ Klawisze │ Mysz │ Rozdzielczość │ │
└─────────────────────────────────────────────────────────┘
```

### Uprawnienia Android

Przy pierwszym uruchomieniu aplikacja Android prosi o:

| Uprawnienie | Powód | Co się stanie po odmowie |
|---|---|---|
| **USB Host** | Komunikacja ze sprzętem Openterface | Aplikacja nie wykryje urządzenia KVM |
| **Kamera** | Odbieranie wideo z układu przechwytywania HDMI | Brak podglądu wideo |
| **Pamięć** | Zapisywanie zrzutów ekranu i nagrań | Nie można zapisać przechwyconych danych |

Udziel wszystkich uprawnień dla pełnej funkcjonalności. Po wykryciu urządzenia KVM pojawia się też systemowe okno uprawnień USB — dotknij **Allow**.

### Uprawnienia iPadOS

Przy pierwszym uruchomieniu aplikacja iPadOS prosi o:

| Uprawnienie | Powód | Co się stanie po odmowie |
|---|---|---|
| **Kamera** | Odbieranie wideo z karty przechwytywania HDMI | Brak podglądu wideo |
| **Mikrofon** | Monitorowanie dźwięku PC docelowego przez głośniki iPada | Brak monitorowania dźwięku |
| **Bluetooth** | Wykrywanie i łączenie z KVM-Go w celu wejścia HID | Brak wysyłania wejścia klawiatury/myszy |
| **Biblioteka zdjęć** | Zapisywanie zrzutów ekranu i nagrań | Przechwycone dane nadal zapisują się w folderze Documents aplikacji |

Jeśli przypadkowo odmówiłeś uprawnienia, przejdź do **Settings > Privacy & Security**, aby je ponownie włączyć.

### Weryfikacja połączenia

- **Wskaźnik HDMI:** zielony = sygnał wykryty, pomarańczowy = brak sygnału, szary = nieznany
- **Wskaźnik klawiatury:** zielony = połączony, pomarańczowy = nie znaleziono, szary = nieznany
- **Wskaźnik myszy:** zielony = połączony, pomarańczowy = nie znaleziono, szary = nieznany
- **Port szeregowy:** powinien pokazywać nazwę portu i szybkość transmisji (9600 lub 115200)

Jeśli wskaźniki są pomarańczowe lub szare, zobacz [Rozwiązywanie problemów](04-troubleshooting.md).

---

## 6. Podstawowa kontrola KVM

### Tryby myszy

| Tryb | Opis | Najlepszy do |
|------|-------------|----------|
| **Absolute** (domyślny) | Kursor hosta mapuje się bezpośrednio na ekran docelowy | Ogólne użycie, nawigacja GUI |
| **Relative (HID)** | Ruchy myszy wysyłane jako delty przez HID | Gry, szybka interakcja |

Przełączaj przez przełącznik na pasku narzędzi lub **Control > Mouse Mode**.

### Wejście klawiatury

Wszystkie naciśnięcia klawiszy są przekazywane do urządzenia docelowego, gdy okno aplikacji ma fokus:
- Klawisze standardowe, klawisze funkcyjne, modyfikatory
- Klawisze specjalne: Ctrl+Alt+Del, Print Screen
- **Paste to Target:** Wysyła tekst ze schowka jako emulowane naciśnięcia klawiszy

### Przełączanie USB

Przełącz przełączalny port USB między:
- **Host** — klawiatura/mysz steruje komputerem hosta
- **Target** — klawiatura/mysz steruje komputerem docelowym

---

## 7. Następne kroki

- **[Podstawowe operacje →](02-basic-operations.md)** — Mysz, klawiatura, wideo, dźwięk, nagrywanie
- **[Zaawansowane funkcje →](03-advanced-features.md)** — EDID, firmware, makra, skrypty
- **[Rozwiązywanie problemów →](04-troubleshooting.md)** — Typowe problemy i rozwiązania
