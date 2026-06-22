---
title: "Konfiguracja oprogramowania | Moduł rozszerzeń v2"
description: "Zainstaluj i skonfiguruj aplikację hosta Openterface na swoim uConsole dla Modułu rozszerzeń KVM v2 — przechwytywanie HDMI, USB HID, przełączanie kart SD i udostępnianie USB."
keywords: "instalacja aplikacji Openterface, konfiguracja oprogramowania uConsole, rozszerzenie KVM v2, openterfaceqt"
---

# **Konfiguracja oprogramowania** | Moduł rozszerzeń v2

## Przegląd instalacji

Aplikacja hosta Openterface umożliwia Twojemu uConsole funkcjonowanie jako interfejs KVM z przechwytywaniem HDMI, kontrolą USB HID, **przełączaniem kart SD** oraz **udostępnianiem portów USB** między hostem a urządzeniem docelowym.

!!! note "Wymagania"
    - **uConsole (host)**: Wymagana aplikacja Openterface QT
    - **Urządzenie docelowe**: Aplikacja nie jest wymagana — systemy Windows, macOS, Linux, Android, iOS są obsługiwane w trybie KVM
    - **Wideo**: Standardowy kabel HDMI; zasilane konwertery obsługują VGA, DP i inne formaty
    - **Zalecany backend**: **GStreamer** dla najlepszej wydajności GPU arm64 (Kali Linux może mieć ograniczone wsparcie dla GStreamer)

## Metody instalacji

### **Opcja 1: GitHub Releases (zalecane dla arm64)**

1. Odwiedź [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Pobierz najnowszy plik `.deb` dla **arm64** (np. `openterfaceqt_*_arm64.deb`).
3. Zainstaluj:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Opcja 2: Flatpak**

Postępuj zgodnie z [przewodnikiem instalacji Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Opcja 3: Repozytorium społeczności (ClockworkPi Bookworm)**

Utrzymywane przez Rex dla obrazów ClockworkPi:

1. **Dodaj repozytorium**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Zainstaluj**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Uwagi dotyczące repozytorium"
    Polecenia wymagają `sudo`. Repozytorium jest przeznaczone dla pakietów arm64 Bookworm — przed instalacją zweryfikuj kompatybilność z systemem operacyjnym Twojego uConsole.

## Ważne uwagi

!!! tip "Zasilanie i pierwsza konfiguracja"
    - Utrzymuj uConsole naładowane lub podłączone do stabilnego zasilania — niski poziom baterii może powodować problemy z połączeniem.
    - Jeśli kontrola klawiatury/myszy nie powiedzie się przy pierwszej próbie:
        1. Całkowicie wyłącz uConsole.
        2. Odczekaj co najmniej 10 sekund.
        3. Włącz zasilanie i spróbuj ponownie.

!!! tip "Prędkość transmisji szeregowej"
    Ustaw prędkość transmisji na **9600** do użytku szeregowego — uConsole może nie utrzymywać stabilnie 115200.

## Korzystanie

### **Rozpoczynanie sesji KVM**

1. Uruchom Openterface QT na swoim uConsole.
2. Aplikacja automatycznie wykrywa Moduł rozszerzeń v2.
3. Podłącz urządzenie docelowe przez HDMI i USB.
4. Użyj klawiatury i trackballa uConsole do sterowania urządzeniem docelowym.

### **Funkcje sterowania**

- **Klawiatura**: Pełna emulacja, w tym klawisze multimedialne
- **Mysz**: Pozycjonowanie absolutne i względne
- **Audio**: Przekazywanie dźwięku HDMI do głośników uConsole
- **Przesyłanie tekstu**: Wklejanie nazw użytkowników, haseł i fragmentów tekstu jako symulowane naciśnięcia klawiszy
- **Przełączanie USB**: Udostępnianie pamięci USB między uConsole a urządzeniem docelowym za pośrednictwem aplikacji hosta — zobacz [Połącz z urządzeniem docelowym](/products/kvmext/connect-to-target/)
- **Przełączanie kart SD**: Montowanie karty SD na hoście lub urządzeniu docelowym za pośrednictwem aplikacji hosta — zobacz [Przewodnik po karcie SD](/products/kvmext/sd-card/)

### **Rozwiązywanie problemów z instalacją oprogramowania**

Jeśli instalacja aplikacji jest trudna lub mysz/klawiatura nie działają:

- Upewnij się, że zainstalowałeś wersję **arm64** na swoim module uConsole CM4
- Dołącz do [Discord](https://openterface.com/discord), aby uzyskać pomoc w czasie rzeczywistym
- Zgłaszaj problemy na [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Powiązane

- [Połącz z urządzeniem docelowym](/products/kvmext/connect-to-target/)
- [Przewodnik po karcie SD](/products/kvmext/sd-card/)
- [Często zadawane pytania](/products/kvmext/faq/)
