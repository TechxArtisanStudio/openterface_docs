---
title: "Funkcje i Specyfikacje | Moduł Rozszerzenia v2"
description: "Pełny przegląd Openterface uConsole KVM Moduł Rozszerzenia v2: HDMI KVM, podwójny Ethernet, karta SD, przełączanie USB oraz specyfikacje techniczne."
keywords: "funkcje KVM extension v2, uConsole KVM, HDMI KVM, rozszerzenie Ethernet, karta SD, przenośne KVM, specyfikacje techniczne"
---

# **Funkcje i Specyfikacje** | Moduł Rozszerzenia v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Główne funkcje

- **Bezpośrednia kontrola KVM**: Podgląd i sterowanie urządzeniem docelowym przez wejście HDMI oraz emulację klawiatury/myszy USB HID — idealne do dostępu do BIOS-u, instalacji systemu i odzyskiwania serwerów bez monitora.
- **Obsługa dwóch kart sieciowych**: W zestawie karty **100M** i **1000M** Ethernet. Używaj 100M na wszystkich płytach bazowych uConsole; używaj 1000M z [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) dla sieci gigabitowej.
- **Odczyt/zapis karty SD**: Zapisuj obrazy, eksportuj logi i przesyłaj pliki z uConsole bez zewnętrznego czytnika kart.
- **Współdzielone przełączanie USB 2.0**: Przełączaj dostęp USB między uConsole a urządzeniem docelowym dla elastycznego debugowania i konserwacji.
- **Niskie opóźnienie**: Opóźnienie wideo poniżej **70 ms** przy wyjściu **1080p @ 60 Hz** na ekran uConsole.
- **Przenośny i zasilany przez slot**: Kompaktowa konstrukcja **77.3 × 34.7 mm**, zasilana ze slotu rozszerzeń uConsole — bez zewnętrznego zasilacza.
- **Zgodny z open source**: Oparty na platformie Openterface KVM z otwartymi aplikacjami hosta i wsparciem społeczności.

## Specyfikacje techniczne

| Element | Specyfikacja |
|------|---------------|
| **Nazwa produktu** | Openterface uConsole KVM Moduł Rozszerzenia v2 |
| **Rozmiar płytki** | 77.3 × 34.7 mm |
| **Wejście wideo** | HDMI do 4K @ 30 Hz (RGB/YCBCR444) lub 4K @ 60 Hz (YCBCR420) |
| **Wyjście wideo** | 1080p @ 60 Hz na ekran uConsole |
| **Opóźnienie** | &lt; 70 ms |
| **Sterowanie KVM** | Emulacja klawiatury i myszy USB HID |
| **Sieć** | 100M działa na wszystkich płytach bazowych uConsole; 1000M wymaga uConsole Upgrade Kit |
| **Karta SD** | Odczyt/zapis z przełączaniem host/cel przez aplikację hosta |
| **Współdzielenie USB** | USB 2.0 Full Speed (12 Mbps) współdzielone przełączanie |
| **Platformy docelowe** | Windows, macOS, Linux, systemy x86, SBC ARM |
| **Zasilanie** | Zasilane ze slotu rozszerzeń uConsole |
| **Zasilanie zewnętrzne** | Nie wymagane |

### Pełna emulacja klawiatury i myszy

- **USB HID**: Bezwzględne i względne pozycjonowanie myszy, pełne wsparcie klawiatury, klawisze multimedialne.
- **Połączenie**: Połączenie USB z celem przez port Type-C na płytce rozszerzeń.

### Wideo i audio

- **Wejście**: Do 4K przez HDMI (szczegóły trybów w tabeli powyżej)
- **Wyjście**: Full HD 1080p @ 60 Hz z opóźnieniem poniżej 70 ms
- **Wyświetlacz**: Wykorzystuje wbudowany ekran uConsole
- **Kompresja**: Obsługa YUV i MJPEG
- **Kompatybilność**: VGA, DVI, Micro HDMI (przez adaptery)
- **Audio**: Przelotowe audio osadzone w HDMI

### Łączność i zasilanie

- **Zasilanie**: Pobiera zasilanie bezpośrednio ze slotu rozszerzeń uConsole
- **Oprogramowanie docelowe**: Nie wymaga instalacji na urządzeniu docelowym

## Powiązane

- [Przewodnik Ethernet](/products/kvmext/ethernet/) — wybierz kartę 100M vs 1000M
- [Przewodnik karty SD](/products/kvmext/sd-card/) — tworzenie obrazów i przesyłanie plików
- [Opcje zakupu](/products/kvmext/purchase-options/) — sam moduł rozszerzenia vs zestaw Upgrade Kit
- [Specyfikacje starszej wersji v1](/products/kvmext/v1/features/) — moduł pierwszej generacji
