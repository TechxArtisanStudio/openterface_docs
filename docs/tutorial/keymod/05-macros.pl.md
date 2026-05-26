---
title: "KeyMod Poradnik - Makra"
description: "Nagrywaj i odtwarzaj zautomatyzowane sekwencje klawiszy z KeyMod makrami, w tym modyfikatorami, opóźnieniami i harmonogramem."
keywords: "KeyMod makra, automatyczne naciśnięcia klawiszy, harmonogram makr, tokeny makr, sekwencje klawiszy"
---

# 5. Makra

Nagrywaj i odtwarzaj automatyczne sekwencje klawiszy jednym dotknięciem.

## Co to jest makro?

Makro to **nagrana sekwencja naciśnięć klawiszy**, którą możesz odtworzyć. Na przykład:
- Wpisz swój podpis e-mail jednym dotknięciem
- Wyślij kolejno `Ctrl+Shift+Esc`, a następnie `Alt+D`
- Zautomatyzuj wieloetapową sekwencję poleceń z opóźnieniami między krokami

## Składnia tokenu makra

| Znak | Znaczenie |
|---|---|
| `<CTRL>` ... `</CTRL>` | Przytrzymaj/zwolnij kontrolę |
| `<SHIFT>` ... `</SHIFT>` | Przytrzymaj/zwolnij Shift |
| `<ALT>` ... `</ALT>` | Przytrzymaj/puść Alt/Option |
| `<CMD>` ... `</CMD>` | Przytrzymaj/zwolnij Polecenie/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Klawisze specjalne |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Strzałki |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Klawisze nawigacyjne |
| `<F1>` do `<F12>` | Klawisze funkcyjne |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pauzy |

**Przykład:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Spowoduje to otwarcie terminala (Ctrl+Alt+T), odczekanie 1 sekundy, następnie wpisanie `ls -la` i naciśnięcie Enter.

## Tworzenie makra

1. Przejdź do trybu **Makra**
2. Naciśnij **"+"**, aby utworzyć nowe makro
3. Wprowadź **nazwę/etykietę makra**
4. Zbuduj sekwencję makropoleceń, korzystając z pola tekstowego i żetonów szybkiego wstawiania
5. Dostosuj **Interwał wysyłania znaków** (opóźnienie między naciśnięciami klawiszy w milisekundach)
6. Kliknij **„Zapisz”**

## Następne kroki

- **[← Shortcut Hub](04-shortcuts.md)** — Skróty klawiaturowe oparte na profilach
- **[Voice Input →](06-voice-input.md)** — Transkrypcja głosu na klawiaturę