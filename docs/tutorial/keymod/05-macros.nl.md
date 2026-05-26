---
title: "KeyMod Tutorial - Macro's"
description: Neem geautomatiseerde toetsreeksen op en speel deze opnieuw af met KeyMod-macro's, inclusief modifiers, vertragingen en planning. Officiële… Openterface.
keywords: "KeyMod macro's, geautomatiseerde toetsaanslagen, macroplanner, macrotokens, toetsreeksen"
---

# 5. Macro's

Neem geautomatiseerde toetsreeksen op en speel deze opnieuw af met een enkele tik.

## Wat is een macro?

Een macro is een **opgenomen reeks toetsaanslagen** die u opnieuw kunt afspelen. Bijvoorbeeld:
- Typ uw e-mailhandtekening met één tik
- Verzend achtereenvolgens `Ctrl+Shift+Esc` gevolgd door `Alt+D`
- Automatiseer een meerstaps commandoreeks met vertragingen tussen de stappen

## Macrotoken-syntaxis

| Token | Betekenis |
|---|---|
| `<CTRL>` ... `</CTRL>` | Controle vasthouden/loslaten |
| `<SHIFT>` ... `</SHIFT>` | Houd Shift | ingedrukt/los
| `<ALT>` ... `</ALT>` | Houd Alt/Option | ingedrukt/los
| `<CMD>` ... `</CMD>` | Houd Command/Win/Super | ingedrukt/los
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Speciale sleutels |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Pijltjestoetsen |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Navigatietoetsen |
| `<F1>` tot en met `<F12>` | Functietoetsen |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pauzes |

**Voorbeeld:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Er wordt een terminal geopend (Ctrl+Alt+T), wacht 1 seconde, typt vervolgens `ls -la` en drukt op Enter.

## Een macro maken

1. Ga naar de modus **Macro's**
2. Tik op **"+"** om een nieuwe macro te maken
3. Voer een **macronaam/label** in
4. Bouw de macro-opdrachtreeks met behulp van het tekstveld en snel in te voegen tokenchips
5. Pas het **Send Char Interval** aan (vertraging tussen toetsaanslagen in milliseconden)
6. Tik op **"Opslaan"**

## Volgende stappen

- **[← Shortcut Hub](04-shortcuts.md)** — Op profiel gebaseerde sneltoetsen
- **[Voice Input →](06-voice-input.md)** — Transcriptie van stem naar toetsenbord