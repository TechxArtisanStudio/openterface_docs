---
title: "Podłączanie do urządzenia docelowego | Moduł rozszerzeń v2"
description: "Podłącz swoje urządzenie docelowe do modułu rozszerzeń Openterface uConsole KVM v2 przez HDMI, USB HID oraz opcjonalny Ethernet do debugowania sieci."
keywords: "konfiguracja połączenia KVM, urządzenie docelowe, HDMI, USB HID, debugowanie Ethernet, uConsole KVM v2"
---

# **Podłączanie do urządzenia docelowego** | Moduł rozszerzeń v2

## Przegląd połączenia

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Moduł rozszerzeń v2 łączy się z urządzeniem docelowym przez **HDMI** (obraz/dźwięk) oraz **USB** (emulacja klawiatury/myszy). Opcjonalnie użyj **Ethernet** do SSH, zarządzania przez przeglądarkę lub przechwytywania logów, podczas gdy KVM obsługuje wyświetlanie i wejście.

## Wymagania wstępne

1. [Instalacja sprzętu](/products/kvmext/hardware-installation/) — moduł osadzony w slocie rozszerzeń
2. [Konfiguracja oprogramowania](/products/kvmext/software-setup/) — Openterface QT zainstalowany na uConsole
3. [Wybrana karta sieciowa](/products/kvmext/ethernet/) (jeśli używasz funkcji sieciowych)

## Kroki połączenia

### **Sterowanie USB (wymagane dla KVM)**

Podłącz **port Type-C** płytki rozszerzeń do portu USB urządzenia docelowego. To emuluje klawiaturę i mysz (USB HID).

Urządzenie docelowe **nie wymaga** sterowników ani dodatkowego oprogramowania do sterowania HID.

### **Wejście wideo (wymagane dla KVM)**

Podłącz wyjście HDMI urządzenia docelowego do wejścia HDMI modułu rozszerzeń:

- Standardowy kabel HDMI dla wyjść HDMI
- Konwerter **VGA-na-HDMI** dla VGA (upewnij się, że zasilanie USB konwertera jest podłączone)
- Inne adaptery dla DVI, DisplayPort, Micro HDMI w razie potrzeby

### **Ethernet (opcjonalnie — debugowanie sieci)**

Jeśli zainstalowałeś kartę sieciową:

- Podłącz kabel Ethernet z karty do urządzenia docelowego lub przełącznika sieciowego
- Używaj uConsole do SSH, interfejsu webowego lub przechwytywania logów obok KVM
- Zobacz [Przewodnik Ethernet](/products/kvmext/ethernet/) dla konfiguracji 100M vs 1000M

### **Karta SD (opcjonalnie — obrazowanie i pliki)**

Włóż kartę microSD do gniazda modułu. Użyj aplikacji hosta, aby przełączać dostęp między uConsole a urządzeniem docelowym. Zobacz [Przewodnik karty SD](/products/kvmext/sd-card/).

## Współdzielone przełączanie USB 2.0

Aplikacja hosta może przełączać współdzielony port USB 2.0 między uConsole a urządzeniem docelowym — przydatne do pendrive'ów i przepływów konserwacyjnych bez odłączania kabli.

## Testowanie połączenia

1. Włącz uConsole i uruchom urządzenie docelowe
2. Uruchom Openterface QT
3. Potwierdź, że obraz HDMI pojawia się na ekranie uConsole
4. Przetestuj klawiaturę, trackball i przekazywanie dźwięku
5. Jeśli używasz przełączania SD lub USB, przetestuj montowanie/przełączanie w aplikacji hosta

## Powiązane

- [Przypadki użycia](/products/kvmext/use-cases/) — scenariusze IT terenowego, homelab, debugowania wbudowanego
- [FAQ](/products/kvmext/faq/) — rozwiązywanie problemów
