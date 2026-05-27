---
title: "Openterface KVM-Go — Przewodnik recenzji (Prototyp inżynieryjny)"
description: Dziękujemy za poświęcenie czasu na test naszego nadchodzącego produktu . Ta jednostka to prototyp inżynieryjny, a nasz firmware i oprogramowanie szybko się…
---

# Openterface KVM-Go — Przewodnik recenzji (Prototyp inżynieryjny)

## Przegląd

Dziękujemy za poświęcenie czasu na test naszego nadchodzącego produktu **[Openterface KVM-Go](https://openterface.com/products/kvmgo/)**.

Ta jednostka to **prototyp inżynieryjny**, a nasz firmware i oprogramowanie szybko się rozwijają. Twoja opinia bezpośrednio pomoże nam ulepszyć produkt przed produkcją masową.

Jeśli napotkasz problemy podczas testów, skontaktuj się z nami bezpośrednio. **Zapewnimy natychmiastowe wsparcie, aby je rozwiązać przed nagraniem filmu.**

## Ważne uwagi

### Zastrzeżenie prototypu

To urządzenie to **prototyp inżynieryjny**. Firmware i oprogramowanie mogą nadal zawierać błędy lub niekompletne funkcje. Jeśli doświadczysz niestabilności lub czegoś, co blokuje pracę, daj nam znać. Naprawimy problemy przed wysyłką wersji produkcyjnej.

### Używaj najnowszego oprogramowania

Dla najlepszej wydajności i kompatybilności używaj **najnowszej wersji** [oprogramowania Openterface](https://openterface.com/app/kvm/) ze strony GitHub Releases. Często aktualizujemy, a starsze wersje mogą nie pasować do firmware prototypu.

## Znane problemy i wyjaśnienia

> **Uwaga:** Wszystkie problemy wymienione poniżej zostaną rozwiązane przed wydaniem produkcyjnym.

### Temperatura powierzchni

Urządzenie może wydawać się ciepłe lub nawet gorące podczas użytkowania. Jest to oczekiwane, ponieważ prototyp używa wydajniejszych układów.

Pamiętaj:

* Wszystkie temperatury pozostają w bezpiecznym zakresie pracy
* Wbudowane **czujniki temperatury** raportują stan termiczny w czasie rzeczywistym w oprogramowaniu
* Wielodniowe testy obciążeniowe nie wykazują problemów ze stabilnością

Będziemy dalej udoskonalać wydajność termiczną przed produkcją masową.

### Dystrybucja oprogramowania

Obecnie obsługujemy wiele platform:

* **macOS i Windows**
  To najbardziej stabilne platformy, zalecane do pełnych testów.

* **Linux**
  Używaj wersji **AppImage**.
  Pakiety `.deb` i `.rpm` mogą mieć problemy z zależnościami w zależności od dystrybucji. Ulepszamy te instalatory.

* **Android**
  Działająca wersja jest dostępna w **Google Play** do podstawowej kontroli i monitorowania.
  Możesz ją wypróbować, jeśli chcesz eksplorować mobilne przepływy pracy.

* **iPadOS**
  Dostępne przez **TestFlight**.
  Jeśli chcesz przetestować, wyślij mi swój **Apple ID**, a dodam Cię do listy testerów.

### Funkcja kopiowania i wklejania

Firmware na Twojej jednostce może nie zawierać naszych najnowszych poprawek schowka. Te problemy zostały już rozwiązane w najnowszym firmware. Możesz zaktualizować używając [Przewodnika aktualizacji firmware](firmware-upgrade.md), jeśli chcesz przetestować najnowszą wersję.

### Demontaż (Opcjonalnie)

Jeśli lubisz demontaże, możesz rozłożyć jednostkę.

Twój prototyp zawiera następujące komponenty:

* **MS2130S** — Układ przechwytywania wideo
* **WCH CH32V208** — MCU emulacji klawiatury i myszy USB
* **Standardowa pasta termiczna silikonowa** — nałożona na tym prototypie

Obecnie testujemy ulepszone rozwiązanie termiczne z **komponentami aluminiowymi** i **smarem termicznym o wysokiej wydajności**. Te ulepszenia przeszły testy wewnętrzne, ale ze względu na ograniczony zapas prototypów **nie są jeszcze** uwzględnione w jednostkach recenzenckich.

Twoja jednostka nadal używa **pasty silikonowej**, ale wydajność termiczna pozostaje w bezpiecznych granicach.

### Zaawansowane funkcje (Obsługiwane w Mini-KVM, wkrótce w KVM-Go)

KVM-Go podąża za tą samą filozofią projektowania co Openterface Mini-KVM. Kilka zaawansowanych funkcji jest w aktywnym rozwoju, ale **jeszcze niedostępnych** w obecnym prototypie:

* **Niestandardowy EDID**
  Mini-KVM pozwala ładować lub modyfikować EDID przez naszą aplikację QT, aby rozwiązać problemy kompatybilności.
  Wprowadzimy tę funkcję również do KVM-Go.

* **Przełączanie karty SD przez oprogramowanie**
  Mini-KVM obsługuje przełączanie portu USB-A między hostem a PC przez oprogramowanie.
  Dla KVM-Go rozwijamy podobne przełączanie programowe dla gniazda micro-SD, ale nie jest jeszcze włączone w Twoim firmware.

Chcemy, abyś był świadomy tych nadchodzących funkcji, nawet jeśli nie są jeszcze aktywne na Twojej jednostce.

### Zobowiązanie open source

Tak, KVM-Go pozostanie w pełni open source. Po sfinalizowaniu projektu sprzętu do produkcji masowej złożymy wniosek o certyfikację OSHWA (Open Source Hardware Association). Wszystkie pliki projektów sprzętu i modele STL zostaną przesłane do repozytorium GitHub: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Dalsza lektura

* [Aktualizacja firmware KVM-Go](firmware-upgrade.md) — Przewodnik krok po kroku aktualizacji urządzenia
