---
title: "FAQ | Moduł rozszerzający v2"
description: "FAQ dla Openterface uConsole KVM Extension Module v2: karty Ethernet, Upgrade Kit, karta SD, konfiguracja oprogramowania, kompatybilność i rozwiązywanie problemów."
keywords: "FAQ rozszerzenia KVM v2, uConsole KVM, Ethernet, karta SD, rozwiązywanie problemów, Upgrade Kit"
---

# FAQ | Moduł rozszerzający v2

Witamy w FAQ dla **Openterface uConsole KVM Extension Module v2**.

Jeśli nie znajdziesz tu potrzebnych informacji, napisz na [support@openterface.com](mailto:support@openterface.com) lub dołącz do naszej społeczności na [Discord](/discord).

---

## :material-clipboard-list: Szybka nawigacja

- [Produkt i zakup](#produkt-i-zakup)
- [Instalacja i sprzęt](#instalacja-i-sprzęt)
- [Kompatybilność](#kompatybilność)
- [Sterowanie i funkcje](#sterowanie-i-funkcje)
- [Wideo i audio](#wideo-i-audio)
- [Rozwiązywanie problemów](#rozwiązywanie-problemów)
- [Więcej](#więcej)

---

## Produkt i zakup

**:material-chat-question:{ .faq } Czy Extension Module v2 to jeden produkt, czy dwie wersje sieciowe?**

To **jeden produkt**. W pudełku znajdują się zarówno karta Ethernet 100M, jak i 1000M. Zobacz [Opcje zakupu](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Której karty Ethernet powinienem użyć?**

Używaj karty **100M** na wszystkich płytach bazowych uConsole. Karty **1000M** używaj tylko wtedy, gdy posiadasz **HackerGadgets uConsole Upgrade Kit** i potrzebujesz sieci gigabitowej. Zobacz [Przewodnik po Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Czy potrzebuję HackerGadgets uConsole Upgrade Kit?**

Tylko dla **gigabitowego Ethernetu**. Karta 100M działa bez Upgrade Kit. Jeśli nie masz tego zestawu, wybierz opcję pakietu przy kasie lub kup zestaw osobno.

**:material-chat-question:{ .faq } Czy uConsole jest w zestawie?**

Nie. Urządzenie ClockworkPi uConsole jest sprzedawane oddzielnie.

---

## Instalacja i sprzęt

**:material-chat-question:{ .faq } Jak działa Extension Module v2?**

Przechwytuje sygnał HDMI z urządzenia docelowego i wyświetla go na uConsole. Klawiatura i trackball uConsole sterują urządzeniem docelowym poprzez emulację USB HID. Opcjonalne funkcje Ethernet i karty SD rozszerzają możliwości debugowania sieci i tworzenia obrazów dysków.

**:material-chat-question:{ .faq } Czy mogę używać tego z zainstalowanym modułem 4G/LTE?**

Nie. Extension Module v2 zajmuje slot rozszerzeń uConsole i **nie może** być używany jednocześnie z modułem 4G lub LTE.

**:material-chat-question:{ .faq } Jakich narzędzi potrzebuję do instalacji?**

Śrubokręt imbusowy do śrub montażowych. Zalecane jest zachowanie środków ostrożności przed wyładowaniami elektrostatycznymi (ESD).

**:material-chat-question:{ .faq } Czy instalacja jest odwracalna?**

Tak. W razie potrzeby wyjmij Extension Module v2 i zainstaluj ponownie oryginalny moduł 4G/LTE.

---

## Kompatybilność

**:material-chat-question:{ .faq } Które modele uConsole są kompatybilne?**

Kompatybilny z urządzeniami uConsole posiadającymi standardowy slot rozszerzeń. Sprawdź specyfikację swojego urządzenia, aby to potwierdzić.

**:material-chat-question:{ .faq } Jakimi urządzeniami docelowymi mogę sterować?**

Dowolnym urządzeniem z wyjściem HDMI: komputerami stacjonarnymi, serwerami, SBC (Raspberry Pi itp.), systemami wbudowanymi, komputerami przemysłowymi i nie tylko.

**:material-chat-question:{ .faq } Czy urządzenie docelowe wymaga specjalnego oprogramowania?**

Nie. KVM wykorzystuje emulację USB HID — na urządzeniu docelowym nie są wymagane żadne sterowniki do obsługi klawiatury i myszy. Dowiedz się więcej o [technologii KVM opartej na USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Czy mogę sterować wieloma urządzeniami docelowymi jednocześnie?**

W trybie KVM tylko jedno urządzenie docelowe na raz. Przełączaj urządzenia, przepinając kable HDMI i USB.

---

## Sterowanie i funkcje

**:material-chat-question:{ .faq } Czy mogę przesyłać pliki przez kartę SD?**

Tak. Extension Module v2 obsługuje odczyt i zapis karty SD z przełączaniem host/urządzenie docelowe za pośrednictwem aplikacji Openterface. Zobacz [Przewodnik po karcie SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Czy obsługuje dostęp na poziomie BIOSu?**

Tak. Bezpośrednie USB HID pozwala na pełny dostęp do BIOSu/UEFI bez zależności od sieci.

**:material-chat-question:{ .faq } A co ze starszym modułem v1?**

Moduł pierwszej generacji 37 × 77 mm (bez Ethernet/SD) jest udokumentowany w [Dokumentacji Legacy v1](/products/kvmext/v1/).

---

## Wideo i audio

**:material-chat-question:{ .faq } Jakie rozdzielczości wideo są obsługiwane?**

- **Wejście**: Do 4K @ 30 Hz (RGB/YCBCR444) lub 4K @ 60 Hz (YCBCR420) przez HDMI
- **Wyjście**: 1080p @ 60 Hz na ekranie uConsole

**:material-chat-question:{ .faq } Jakie są opóźnienia wideo?**

Poniżej **70 ms** — odpowiednie do dostępu do BIOSu, konserwacji i diagnostyki.

**:material-chat-question:{ .faq } Czy audio jest obsługiwane?**

Tak. Wbudowane audio HDMI jest przekazywane do głośników uConsole.

---

## Rozwiązywanie problemów

**:material-chat-question:{ .faq } Brak sygnału wideo**

- Sprawdź połączenia HDMI na obu końcach
- Upewnij się, że urządzenie docelowe jest zasilane i wysyła sygnał przez HDMI
- Wypróbuj inny kabel HDMI
- Uruchom ponownie Openterface QT

**:material-chat-question:{ .faq } Klawiatura lub mysz nie działa**

- Sprawdź kabel USB łączący moduł rozszerzający z urządzeniem docelowym
- Całkowicie wyłącz uConsole, odczekaj 10 sekund, włącz ponownie i spróbuj jeszcze raz
- Zainstaluj ponownie Openterface QT (wersja arm64 dla Twojego uConsole)
- Zgłoś swoją dystrybucję Linuxa i moduł CM4 na [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) lub [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Instalacja oprogramowania była trudna**

Wypróbuj GitHub Releases (Opcja 1) lub repozytorium społeczności ClockworkPi (Opcja 3) w [Konfiguracji oprogramowania](/products/kvmext/software-setup/). Dołącz do [Discord](https://openterface.com/discord), aby uzyskać pomoc krok po kroku.

**:material-chat-question:{ .faq } Port przełączania USB nie działa**

Upewnij się, że używasz najnowszej wersji Openterface QT. Przełącz dostęp USB w aplikacji hosta. Jeśli problem nadal występuje, zgłoś go na [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI wyświetla się tylko w ramce / brak menu ustawień aplikacji**

Zaktualizuj do najnowszej wersji Openterface QT. Sprawdź [Konfigurację oprogramowania](/products/kvmext/software-setup/) i wątki społeczności na Discordzie, aby poznać ustawienia wyświetlania specyficzne dla uConsole.

**:material-chat-question:{ .faq } Aplikacja nie wykrywa modułu**

- Wyjmij i ponownie włóż płytę do slotu rozszerzeń
- Uruchom ponownie uConsole
- Zainstaluj ponownie Openterface QT

---

## Więcej

**:material-chat-question:{ .faq } Czy oprogramowanie jest open source?**

Tak. Aplikacje hosta Openterface są open source na [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Gdzie mogę uzyskać wsparcie?**

- **E-mail**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Dołącz do naszej społeczności](https://openterface.com/discord)
- **GitHub**: [Zgłoś problemy](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
