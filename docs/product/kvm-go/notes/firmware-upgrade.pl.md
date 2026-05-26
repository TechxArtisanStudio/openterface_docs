# Aktualizacja firmware KVM-Go

## Przegląd

KVM-Go wykorzystuje układ CH32V208 od WCH do emulacji klawiatury i myszy. Obecnie flashowanie firmware wymaga oficjalnego narzędzia programującego WCH, dostępnego tylko dla Windows. Dlatego aktualizacje firmware należy na razie wykonywać w systemie Windows.

Aktywnie pracujemy nad wieloplatformowym, własnym rozwiązaniem aktualizacji firmware, które zostanie zintegrowane bezpośrednio z urządzeniem. Po gotowości będzie obsługiwać aktualizacje firmware we wszystkich głównych systemach operacyjnych — bez narzędzi firm trzecich.

> **Uwaga:** Ta ręczna procedura aktualizacji firmware jest tymczasowym rozwiązaniem dla wczesnych jednostek rozwojowych. W oficjalnych produktach produkcyjnych aktualizacje firmware będą płynnie zintegrowane z naszym oprogramowaniem, umożliwiając aktualizację firmware bezpośrednio przez aplikację bez narzędzi firm trzecich i procedur ręcznych.

## Wymagania wstępne

Przed kontynuowaniem upewnij się, że masz:

- Komputer z Windows
- Zainstalowane WCH ISP Tool
- Plik firmware (format `.hex`) gotowy do flashowania

### Pobieranie firmware

Pobierz najnowszy plik firmware KVM-Go:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Najnowszy firmware do emulacji klawiatury i myszy KVM-Go (układ CH32V208)

Zapisz plik firmware w łatwo dostępnym miejscu na komputerze Windows przed rozpoczęciem aktualizacji.

### Pobieranie WCH ISP Tool

Pobierz i zainstaluj [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (tylko Windows).

Dziękujemy za cierpliwość i wsparcie!

## Instrukcje krok po kroku

### Krok 1: Pobierz i otwórz narzędzie w Windows

Uruchom WCH ISP Tool na komputerze Windows.

![Interfejs WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Krok 2: Przygotuj KVM-Go do flashowania

Aby flashować firmware na KVM-Go:

1. Upewnij się, że urządzenie jest wyłączone
2. Przytrzymaj przycisk podczas podłączania do portu USB Type-C

**Wskazówka:** Możesz flashować przez oba porty, ale port «target» jest zazwyczaj stabilniejszy podczas flashowania.

![Okablowanie i konfiguracja połączenia KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Krok 3: Wybierz plik firmware

Po udanym połączeniu narzędzie automatycznie wykryje model układu (seria CH32V20X).

1. Kliknij przycisk «...», aby przeglądać i wybrać plik firmware do flashowania
2. Wybierz plik firmware `.hex`
3. **Ważne:** Pamiętaj o zaznaczeniu pola obok pliku firmware

![Wykryty model układu w WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Przeglądanie i wybór pliku firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Wybrany plik firmware z zaznaczonym polem](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Krok 4: Usuń ochronę bieżącego firmware

Przed flashowaniem nowego firmware musisz usunąć ochronę zapisu bieżącego firmware:

1. Kliknij opcję «Deprotect» w narzędziu
2. Krótko naciśnij fizyczny przycisk na KVM-Go, aby wejść w tryb flashowania
3. Poczekaj na zakończenie procesu usuwania ochrony

![Opcja Deprotect w narzędziu](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Naciśnij przycisk KVM-Go, aby wejść w tryb flashowania](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Krok 5: Pobierz i flashuj firmware

Po usunięciu ochrony i wybraniu firmware:

1. Kliknij przycisk «Download» w narzędziu flashowania
2. Poczekaj na zakończenie flashowania
3. Narzędzie wskaże, gdy firmware zostanie pomyślnie flashowany

![Proces pobierania i flashowania firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Dalsza lektura

- [Przewodnik recenzji Openterface KVM-Go](review-guide.md) — Ważne uwagi i znane problemy dla jednostek prototypowych inżynieryjnych
