---
title: "Instalacja sprzętu | Moduł rozszerzeń v2"
description: "Zainstaluj moduł rozszerzeń KVM v2 Openterface uConsole w gnieździe rozszerzeń. Wybierz kartę Ethernet i podłącz HDMI oraz USB do urządzenia docelowego."
keywords: "instalacja rozszerzenia KVM v2, konfiguracja sprzętu uConsole, gniazdo rozszerzeń, instalacja karty Ethernet"
---

# **Instalacja sprzętu** | Moduł rozszerzeń v2

## Przegląd

Moduł rozszerzeń v2 pasuje do **gniazda rozszerzeń** uConsole (tego samego gniazda, które jest używane przez moduł 4G/LTE). Nie może być używany jednocześnie z modułem 4G lub LTE — wybierz funkcjonalność komórkową **lub** KVM.

## Co będzie potrzebne

- [Zawartość opakowania](/products/kvmext/whats-in-the-box/) zweryfikowana przed instalacją
- Płytka modułu rozszerzeń Openterface v2
- **Jedna karta Ethernet** (100M lub 1000M — zobacz [Przewodnik Ethernet](/products/kvmext/ethernet/))
- Pokrywa gniazda rozszerzeń (w zestawie)
- Śrubokręt imbusowy do śrub montażowych
- Ochrona ESD (opaska antystatyczna lub uziemiona powierzchnia) — zalecana

## Kroki instalacji

### **1. Wyłącz zasilanie**

Wyłącz uConsole i odłącz wszystkie kable oraz zasilanie.

### **2. Usuń istniejący moduł**

Jeśli zainstalowany jest moduł 4G/LTE lub inny moduł rozszerzeń:

- Użyj śrubokręta imbusowego, aby odkręcić dwie śruby montażowe.
- Wyjmij płytkę **prosto do góry**, aby uniknąć wygięcia styków sprężynowych.
- Przechowaj oryginalny moduł i śruby w bezpiecznym miejscu, jeśli planujesz ich ponowną instalację.

### **3. Wybierz kartę Ethernet**

Przed osadzeniem głównej płytki zdecyduj, którą kartę zainstalować:

| Karta | Kiedy używać |
|------|-------------|
| **100M** | Wszystkie płyty bazowe uConsole — uniwersalna kompatybilność |
| **1000M** | Tylko jeśli posiadasz **zestaw modernizacyjny uConsole HackerGadgets** i potrzebujesz gigabitu |

Zobacz [Przewodnik Ethernet](/products/kvmext/ethernet/) po pełne szczegóły.

### **4. Zainstaluj moduł rozszerzeń v2**

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:240px"}

- Osadź moduł rozszerzeń v2 stabilnie w gnieździe rozszerzeń.
- Upewnij się, że styki sprężynowe są równo wyrównane na wszystkich padach.
- Wkręć ponownie śruby montażowe i dokręć **delikatnie** — nie dokręcaj zbyt mocno.

### **5. Sprawdź instalację**

Płytka powinna leżeć **płasko i stabilnie** bez zauważalnego chwiania. Wszystkie styki sprężynowe powinny dociskać równomiernie.

### **6. Zainstaluj pokrywę gniazda rozszerzeń**

Zainstaluj ponownie pokrywę gniazda rozszerzeń, aby chronić moduł i zachować wygląd uConsole.

??? note "Orientacja tekstu na pokrywie gniazda rozszerzeń"
    Tekst na pokrywie może wydawać się odwrócony do góry nogami z niektórych kątów widzenia. Jest zorientowany tak, aby był czytelny, gdy trzymasz uConsole i patrzysz na porty z góry — w naturalnej pozycji podczas użytkowania.

---

**Następne kroki**

1. [Konfiguracja oprogramowania](/products/kvmext/software-setup/) — zainstaluj aplikację hosta Openterface na swoim uConsole
2. [Połączenie z urządzeniem docelowym](/products/kvmext/connect-to-target/) — okablowanie HDMI + USB
3. [Funkcje i specyfikacje](/products/kvmext/features/) — pełne specyfikacje techniczne

## Instalacja starszej wersji v1

Moduł pierwszej generacji (37 × 77 mm) używał podkładek do kompensacji grubości PCB. Zobacz [Starsza v1 — Instalacja sprzętu](/products/kvmext/v1/hardware-installation/).
