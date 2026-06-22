---
title: "Przewodnik po karcie SD | Moduł rozszerzeń v2"
description: "Używaj odczytu/zapisu karty SD w module rozszerzeń KVM Openterface uConsole v2. Przełączaj dostęp między uConsole a urządzeniem docelowym w celu tworzenia obrazów, logów i przesyłania plików."
keywords: "karta SD, microSD, moduł rozszerzeń KVM v2, flashowanie obrazów, przesyłanie plików, uConsole"
---

# **Przewodnik po karcie SD** | Moduł rozszerzeń v2

Moduł rozszerzeń v2 zawiera **odczyt/zapis karty SD**, dzięki czemu możesz flashować obrazy, eksportować logi i przesyłać pliki z uConsole bez noszenia zewnętrznego czytnika kart.

## Przegląd

Moduł udostępnia slot microSD współdzielony między **uConsole (host)** a **urządzeniem docelowym** — podobnie koncepcyjnie do przełączania MicroSD w KVM-GO, ale zintegrowany z modułem rozszerzeń uConsole.

!!! note "Jedna strona na raz"
    Karta SD montuje się albo w uConsole **albo** w urządzeniu docelowym, nigdy w obu jednocześnie. Przełączaj dostęp za pomocą aplikacji hosta Openterface.

## Zainstaluj kartę SD

Włóż kartę microSD mocno, aż zostanie pewnie osadzona w slocie modułu.

## Sterowanie przez aplikację hosta

Użyj **Openterface QT** na swoim uConsole, aby:

- Przełączać dostęp do SD między **hostem** (uConsole) a **urządzeniem docelowym**
- Zapisywać obrazy systemów na karcie z uConsole
- Eksportować logi lub przesyłać pliki bez wyjmowania karty

Upewnij się, że ukończyłeś [Konfigurację oprogramowania](/products/kvmext/software-setup/) przed używaniem funkcji SD.

## Typowe przepływy pracy

| Przepływ pracy | Opis |
|----------|-------------|
| **Tworzenie obrazów systemu** | Flashuj obrazy Raspberry Pi, płytek embedded lub urządzeń z uConsole |
| **Eksport logów** | Pobieraj logi z urządzenia docelowego na kartę, a następnie odczytuj na uConsole |
| **Przesyłanie plików** | Przenoszenie konfiguracji lub skryptów między uConsole a urządzeniem docelowym, gdy sieć jest niedostępna |

## Wskazówki bezpieczeństwa

- **Wysuń/odmontuj** w aplikacji hosta przed fizycznym wyjęciem karty
- Przełącz na właściwą stronę (host vs urządzenie docelowe) przed operacjami odczytu/zapisu
- Używaj kart microSD dobrej jakości do obciążeń związanych z tworzeniem obrazów

## Powiązane

- [Połącz z urządzeniem docelowym](/products/kvmext/connect-to-target/)
- [Konfiguracja oprogramowania](/products/kvmext/software-setup/)
- [Przewodnik przełączania MicroSD KVM-GO](/products/kvmgo/microsd-switch/) — podobna koncepcja przełączania w KVM-GO
