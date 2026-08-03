---
title: "Funkcje i specyfikacje"
description: "Funkcje KeyMod Series: klawiatura i mysz HID Bluetooth, podwójne połączenie USB + Bluetooth, niestandardowe profile, makra, tryby gamepada, kontrola prezentacji, hub skrótów. Otwartoźródłowa aplikacja mobilna na Androida i iOS."
keywords: "funkcje KeyMod Series, emulator HID, klawiatura Bluetooth, klawiatura USB, programowalne przyciski, gamepad, makro, open source, CH9329, hub skrótów, tryb prezentacji"
---

# **Funkcje i specyfikacje** | Openterface KeyMod Series

## Aktualny status

KeyMod jest w aktywnym rozwoju, [publiczna beta](/tutorial/keymod/) jest dostępna na Androida. Subskrybuj [stronę produktu](/products/keymod/), aby być na bieżąco z powiadomieniami o premierze.

> **Uwaga:** Funkcje, specyfikacje i wygląd mogą ulec zmianie w trakcie rozwoju.

## Warianty produktu

- **Wersja Mini** — Tylko złącze Type C męskie
- **Wersja Plus** — Złącze Type A męskie i złącze Type C żeńskie

## Funkcje główne

### **Telefon jako klawiatura i trackpad**

KeyMod zamienia Twój telefon w przenośną konsolę z klawiaturą i trackpadem. Używaj go, gdy pełna klawiatura i mysz nie są dostępne, lub gdy chcesz szybszego przepływu pracy niż przełączanie urządzeń. Idealne do komputerów z zewnętrznymi wyświetlaczami, odtwarzaczy LED signage, kiosków, smart TV i dekoderów.

### **Podwójne połączenie: USB + Bluetooth**

- **USB** — Bezproblemowe połączenie kablowe plug-and-play zapewniające niezawodne wejście o niskim opóźnieniu
- **Bluetooth** — Konfiguracja bezprzewodowa, gdy scenariusz na to pozwala; zachowaj lekką i przenośną konfigurację

KeyMod jest zaprojektowany do praktycznej codziennej lokalnej kontroli urządzeń, a nie jako zamiennik pulpitu zdalnego.

### **Otwartoźródłowa aplikacja mobilna**

Z naszą otwartoźródłową aplikacją mobilną możesz:

- **Klawiatura i mysz (Basic)** — Pełnoekranowa klawiatura z powtarzaniem przy długim naciśnięciu, podglądem klawiszy i klawiaturą numeryczną
- **Klawiatura i mysz Pro** — Układ złożony z paskami Shortcut Hub, podzieloną klawiaturą i IME
- **Tryb prezentacji** — Pilot do slajdów z timerem dla Google Slides i innych aplikacji
- **Gamepad** — Wirtualny kontroler z konfigurowalnymi układami presetów i obsługą wielu touchpadów
- **Shortcut Hub** — Skróty klawiaturowe oparte na profilach dla narzędzi kreatywnych i deweloperskich (Blender, KiCAD, Photoshop, VS Code), z możliwością tworzenia, importu i eksportu
- **Makra** — Programowalne sekwencje klawiszy z opóźnieniami
- **Wejście głosowe** — Speech-to-keyboard z AI (Whisper API)
- **Terminal** — SSH przez Bluetooth do zdalnego dostępu do poleceń
- **Agent** — Bezpośrednia interakcja AI z poleceniami HID lub SSH do sterowania innym komputerem

Aplikacja **KeyCmd** koncentruje się na **Android** i **iOS** (w tym iPadOS). Współpracuje również z **KVM-GO** przez USB lub Bluetooth. Rozwijamy również kontrolę pulpitu za pomocą oprogramowania **Windows i macOS** w naszym szerszym ekosystemie Openterface.


### **Prawdziwy HID sprzętowy**

Zbudowany na sprawdzonej rdzeniowej HID Openterface Mini-KVM. Sprzętowa emulacja klawiatury i myszy — żadna instalacja oprogramowania nie jest wymagana na urządzeniu docelowym.

### **Open source**

KeyMod to otwarty sprzęt i otwarte oprogramowanie. Będziemy publikować schematy, pliki PCB, firmware, oprogramowanie i BOM w miarę rozwoju projektu. [Dołącz do naszej społeczności](/discord), aby współtworzyć i być na bieżąco.

## Specyfikacje techniczne

### **Łączność**

- **USB**: Wersja Mini używa złącza Type C męskiego; wersja Plus używa złącza Type A męskiego i złącza Type C żeńskiego
- **Bluetooth**: Klawiatura i mysz HID
- **Cel**: Nie wymaga instalacji oprogramowania

### **Kluczowy sprzęt**

- Układ CH32V208 (protokół kompatybilny z CH9329)
- Złącze(a) USB: wersja Mini używa Type C męskiego; wersja Plus używa Type A męskiego i Type C żeńskiego
- MCU
- Programowalne przycisk(i)

### **Funkcje wejściowe**

- Pełna emulacja klawiatury i myszy (HID)
- Niestandardowe profile wejściowe (poziomy Basic i Pro)
- Makra i skróty klawiszowe
- Shortcut Hub z profilami specyficznymi dla aplikacji
- Gamepad z układami opartymi na presetach (schemat v7)
- Kontrola prezentacji z timerem slajdów
- Speech-to-keyboard z AI
