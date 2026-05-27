---
title: "KeyMod Poradnik"
description: "Kompletny przewodnik dotyczący korzystania z aplikacji KeyMod. Dowiedz się, jak podłączyć komputer, sterować nim za pomocą telefonu oraz korzystać z klawiatury, myszy, gamepada, makr i trybów wprowadzania głosowego."
keywords: "poradnik KeyMod, jak korzystać z KeyMod, instrukcja obsługi klawiatury telefonu, poradnik aplikacji KeyMod"
---

# KeyMod Poradnik

{% include "partials/keymod-tutorial-slideshow.html" %}

Ten samouczek dotyczy wersji **Android** aplikacji KeyMod. Wersja iOS jest w fazie rozwoju.

## Co to jest KeyMod?

KeyMod zmienia Twój telefon lub tablet w **uniwersalne urządzenie wejściowe** dla dowolnego komputera. Łączy się ze sprzętem **Openterface KeyMod** (przełącznikiem klawiatury, wideo, myszy KVM), który następnie wysyła naciśnięcia klawiszy, ruchy myszy i dane wejściowe gamepada do komputera docelowego tak, jakby pochodziły z prawdziwej klawiatury i myszy USB.

### Jak działa połączenie```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
Aplikacja komunikuje się ze sprzętem KeyMod za pomocą protokołu **CH9329** poprzez połączenie szeregowe (USB-C przy 115200 bodów, 8N1 lub Bluetooth BLE). Urządzenie KeyMod pojawia się na komputerze docelowym jako standardowa klawiatura i mysz USB — nie są potrzebne żadne sterowniki.

### Dla kogo to jest?

| Jesteś... | KeyMod pomaga... |
|---|---|
| **Administrator systemu** | Zarządzaj serwerami z telefonu bez konieczności noszenia zapasowej klawiatury i monitora |
| **Prezenter / Prelegent** | Steruj slajdami z dowolnego miejsca w pomieszczeniu, bez konieczności używania pilota |
| **Gracz** | Używaj telefonu jako gamepada do gier retro lub jako dodatkowego kontrolera |
| **Twórca treści** | Uruchamiaj skróty, makra i wprowadzanie głosowe podczas nagrywania na innym komputerze |
| **Zaawansowany użytkownik** | Wysyłaj złożone skróty klawiaturowe, fragmenty tekstu lub sekwencje automatyzacji ze swojego telefonu |
| **Każdy** | Pisz na komputerze, siedząc na kanapie, łóżku lub po drugiej stronie pokoju |

## Sekcje samouczka

| Przewodnik | Opis |
|---|---|
| [1. Getting Started](01-getting-started.md) | Zainstaluj, podłącz i wybierz swój pierwszy tryb (5 minut) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Wpisywanie, modyfikatory, touchpad i wprowadzanie tekstu |
| [3. Target OS](03-target-keyboard.md) | Mapowanie docelowego systemu operacyjnego |
| [4. Shortcut Hub](04-shortcuts.md) | Skróty klawiaturowe oparte na profilach dla popularnych aplikacji |
| [5. Macros](05-macros.md) | Zautomatyzowane sekwencje klawiszy z opóźnieniami |
| [6. Voice Input](06-voice-input.md) | Klawiatura mowy na klawiaturę z Whisper AI |
| [7. AI Integration](07-ai.md) | Udoskonalanie tekstu i asystent poleceń |
| [8. Gamepad](08-gamepad.md) | Wirtualny kontroler gier z konfigurowalnymi układami |
| [9. Numpad](09-numpad.md) | Klawiatura numeryczna do wprowadzania danych |
| [10. Presentation](10-presentation.md) | Przesuń pilota i timer |
| [11. Settings](11-settings.md) | Konfiguracja aplikacji i preferencje |
| [12. Troubleshooting](12-troubleshooting.md) | Typowe problemy i rozwiązania |

## Uzyskiwanie pomocy

- **Raporty o błędach:** [Discord](https://discord.gg/techxartisan)
- **Społeczność:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Kod źródłowy:** KeyCmd *(coming soon)*