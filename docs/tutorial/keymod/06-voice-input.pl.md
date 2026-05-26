---
title: "KeyMod Samouczek - Wprowadzanie głosowe"
description: Użyj klawiatury głosowej za pomocą KeyMod. Obsługuje systemowe rozpoznawanie mowy, sztuczną inteligencję na urządzeniu i wiele języków. Konwertuj mowę na…
keywords: "KeyMod wprowadzanie głosowe, zamiana mowy na tekst, Whisper, pisanie głosowe, klawiatura głośnomówiąca"
---

# 6. Wprowadzanie głosowe

Konwertuj mowę na naciśnięcia klawiszy wysyłane do komputera docelowego — pisanie bez użycia rąk i dostępność.

## Jak to działa

1. Naciśnij **mikrofon** button
2. Powiedz, co chcesz wpisać
3. Twoja mowa jest konwertowana na tekst
4. Tekst jest wysyłany jako naciśnięcie klawisza do komputera docelowego

## Silniki STT

| Silnik | Jak to działa | Konfiguracja |
|---|---|---|
| **Rozpoznawanie systemu** | Używa wbudowanego rozpoznawania mowy | Wymaga Google pisania głosowego |
| **Whisper** | Transkrypcja AI na urządzeniu lub w chmurze | Ustaw klucz API w Ustawieniach > Wprowadzanie głosowe |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Wprowadzanie głosowe — obszar transkrypcji, cele, historia i mikrofon. Skonfiguruj klucz API w Ustawieniach > Wprowadzanie głosowe.</em></p>
</div>

## Wykrywanie ciszy i automatyczna pauza

Obydwa silniki posiadają funkcję automatycznego wykrywania ciszy, która wstrzymuje nagrywanie, gdy przestajesz mówić (domyślnie czas ciszy wynosi 2,0 sekundy). Włącz/wyłącz automatyczną pauzę w widoku wprowadzania głosowego.

### Rozwiązywanie problemów z wykrywaniem ciszy

| Objaw | Rozwiązanie |
|---|---|
| **Nagrywanie jest kontynuowane, gdy nie mówisz** | Sprawdź przełącznik Auto-Pause on Silence. Zmniejsz hałas w tle. Mów wyraźnie i blisko mikrofonu. |
| **Nagrywanie zostaje natychmiast zatrzymane** | Mów głośniej lub skróć limit czasu wykrywania ciszy. |

## Minipasek narzędzi (Android)

| Button | Co to robi |
|---|---|
| **Kopiuj** | Skopiuj transkrybowany tekst do schowka |
| **Automatyczne wysyłanie** | Automatycznie wyślij tekst po transkrypcji |
| **Automatyczny powrót linii** | Dołącz klawisz Enter po wysłaniu |
| **Udoskonalenie AI** | Wyślij transkrybowany tekst do AI w celu ulepszenia |

## Tekst głosowy nie jest wysyłany

Sprawdź stan połączenia. Opcja „Wyślij” button jest wyłączona, gdy urządzenie nie jest podłączone.

## Następne kroki

- **[← Macros](05-macros.md)** — Zautomatyzowane sekwencje klawiszy
- **[AI Integration →](07-ai.md)** — Udoskonalanie tekstu wspomagane sztuczną inteligencją i asystent poleceń