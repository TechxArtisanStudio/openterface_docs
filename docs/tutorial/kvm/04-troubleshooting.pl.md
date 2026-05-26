
# Samouczek KVM 04 — Rozwiązywanie problemów

Typowe problemy i rozwiązania dla urządzeń Openterface KVM.

---

## Urządzenie nie jest wykrywane

### Objawy
- „No devices found” w menu urządzeń
- Wskaźniki klawiatury i myszy pokazują pomarańczowy lub szary kolor
- Port szeregowy pokazuje „N/A”

### Diagnoza

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Oczekiwane: `534d:2109` (HDMI capture) i `1a86:7523` lub `1a86:fe0c` (serial).

**macOS:** Menu Apple > Informacje o tym Macu > Raport systemowy > Sprzęt > USB — szukaj Openterface.

**Windows:** Menedżer urządzeń > „Universal Serial Bus devices” i „Ports (COM & LPT)” — CH340 powinien pojawić się jako „USB-SERIAL CH340 (COMx)”.

### Rozwiązania

| Problem | Rozwiązanie |
|---------|-----|
| Urządzenia brak w lsusb/Raporcie systemowym | Spróbuj innego kabla/portu USB. Wymagane USB 2.0+ |
| Urządzenie widoczne, ale brak węzłów | Sprawdź reguły udev (Linux) lub przeinstaluj sterowniki (Windows) |
| Odmowa dostępu | Dodaj użytkownika do grup `dialout` i `video` (Linux) |
| Wykryte, potem znika | `brltty` przejmuje port szeregowy (Linux) — patrz poniżej |

---

## Konflikt BrlTTY (Linux) {#brltty-conflict-linux}

**Najczęstsza przyczyna awarii klawiatury/myszy w systemie Linux.**

Usługa `brltty` (terminal Braille) przejmuje urządzenia USB szeregowe, w tym układ CH9329/CH32V208.

### Naprawa
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Brak wideo / czarny ekran

### Kroki

1. **Sprawdź kabel HDMI** — czy jest solidnie podłączony po obu stronach
2. **Sprawdź urządzenie docelowe** — czy wysyła sygnał HDMI (przetestuj zwykłym monitorem)
3. **Spróbuj innego kabla HDMI**
4. **Podłącz urządzenie ponownie** — aplikacja obsługuje zdarzenia hot-plug
5. **Sprawdź wykrywanie układu wideo:** Obsługiwane: MS2109, MS2109S, MS2130S

### Wybór backendu (Qt)

Jeśli jeden backend pokazuje czarny ekran, spróbuj innego przez **Preferences > Video > Media Backend**:
- **FFmpeg** — Najbardziej niezawodny (zalecany)
- **GStreamer** — Tylko Linux
- **Qt Multimedia** — Zapasowy dla Windows

### Problemy z GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Spróbuj innego sinka:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Niezgodność EDID

Jeśli urządzenie docelowe nie rozpoznaje EDID, może nie wysyłać kompatybilnej rozdzielczości. Spróbuj zmienić rozdzielczość wyjściową docelową lub edytuj EDID w ustawieniach wyświetlania aplikacji.

---

## Klawiatura/mysz nie reaguje

### Kroki

1. **Sprawdź przełącznik USB** — upewnij się, że jest ustawiony na **Target**, a nie Host
2. **Sprawdź status portu szeregowego** — powinien pokazywać nazwę portu, nie „N/A”
3. **Spróbuj zmienić baudrate** — 9600 lub 115200
4. **Sprawdź układ sterowania** — Obsługiwane: CH9329, CH32V208
5. **Sprawdź monitorowanie CTS** — Aplikacja monitoruje linie Clear-To-Send pod kątem zdarzeń HID

### Problemy specyficzne dla myszy

- **Tryb względny w macOS:** Wymaga uprawnienia Dostępność. Sprawdź **System Settings > Privacy & Security > Accessibility**
- **Tryb absolutny:** Upewnij się, że proporcje obrazu odpowiadają ekranowi docelowemu
- **Opóźnienie myszy:** Spróbuj wyższego presetu wydajności lub zwiększ baudrate
- **Konflikty portu szeregowego (Linux):** Zamknij inne aplikacje używające portu: `sudo lsof /dev/ttyUSB0`

---

## Dźwięk nie odtwarza się

### Kroki

1. **Włącz dźwięk** przez ikonę audio > Enable Audio
2. **Sprawdź uprawnienie mikrofonu** — System Settings > Privacy & Security > Microphone (macOS)
3. **Wybierz właściwe urządzenie wejściowe** — „OpenterfaceA” lub nazwa urządzenia przechwytującego
4. **Wybierz właściwe urządzenie wyjściowe** — głośniki lub słuchawki
5. **Sprawdź wyjście audio HDMI urządzenia docelowego** — czy docelowe urządzenie jest skonfigurowane do wysyłania dźwięku przez HDMI?

---

## Problemy ze sterownikiem USB Serial

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

W razie potrzeby zainstaluj sterownik WCH CH34x z [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Włącz w **System Settings > General > Login Items & Extensions > Driver Extensions**.

### Windows

Jeśli układ szeregowy nie pojawia się w Menedżerze urządzeń, zainstaluj sterownik CH340/CH341. Instalator zwykle go zawiera; w wersjach przenośnych pobierz osobno.

### Linux

Sterownik CH340 (moduł `ch341`) jest wbudowany w jądro:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Aktualizacja firmware nie powiodła się

### Stabilność USB

- Nie odłączaj podczas flashowania
- Nie usypiaj komputera hosta
- Używaj bezpośredniego portu USB (unikaj hubów)

### Odzyskiwanie

1. Cykl zasilania: odłącz USB, odczekaj 10 sekund, podłącz ponownie
2. Ponownie wejdź w tryb ISP (niektóre urządzenia: przytrzymaj przycisk podczas włączania)
3. Użyj Serial Reset Tool, aby ponownie wgrać bootloader
4. Skontaktuj się z pomocą techniczną, jeśli urządzenie jest zbrickowane

---

## Problemy z wydajnością

### Wysokie użycie CPU

1. **Włącz przyspieszenie sprzętowe** — Preferences > Video > Hardware Acceleration (VAAPI, V4L2-M2M)
2. **Obniż rozdzielczość** — 720p zużywa znacznie mniej CPU niż 1080p
3. **Obniż liczbę klatek** — 15 fps zmniejsza obciążenie dekodowania o połowę
4. **Zmień backend** — FFmpeg z przyspieszeniem HW zwykle zużywa mniej CPU niż GStreamer

### Utrata klatek

Sprawdź licznik FPS na pasku statusu. Jeśli rzeczywiste FPS jest poniżej docelowego, pipeline jest wąskim gardłem. Włącz dropowanie klatek w procesorze klatek FFmpeg, aby priorytetowo traktować płynne odtwarzanie.

---

## Logowanie i diagnostyka

### Włącz logowanie

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > ustaw poziom logowania i ścieżkę pliku

### Konsola szeregowa (Qt)

Otwórz przez **Device > Serial Port Debug** — pokazuje wiadomości protokołu szeregowego w czasie rzeczywistym z filtrami Keyboard, Mouse, HID, Chip Info.

---

## Problemy specyficzne dla platformy

### Linux: wtyczka platformy Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: problemy z wideo w Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: sterownik CH340

Jeśli instalacja sterownika nie powiedzie się: tymczasowo wyłącz wymuszanie podpisu sterownika, następnie zainstaluj ręcznie przez Menedżer urządzeń.

### Raspberry Pi: zacinanie wideo

Na Pi 3 lub Pi 4 z małą ilością pamięci:
1. Obniż rozdzielczość do 720p
2. Użyj backendu FFmpeg (nie GStreamer)
3. Użyj 9600 baud dla stabilności szeregowej

---

## Problemy specyficzne dla Androida

### Urządzenie nie jest wykrywane

**Objaw:** Podgląd wideo pokazuje placeholder, a nie ekran docelowy.

1. **Sprawdź połączenie USB OTG** — odłącz i podłącz ponownie kabel
2. **Sprawdź obsługę OTG** — podłącz pendrive, aby potwierdzić, że telefon obsługuje OTG
3. **Sprawdź urządzenie KVM** — czy jest włączone? Czy świecą wskaźniki?
4. **Spróbuj innego kabla** — niektóre adaptery OTG są wadliwe
5. **Uruchom aplikację ponownie** — zamknij ją całkowicie (przesuń z ostatnich aplikacji) i otwórz ponownie
6. **Sprawdź uprawnienie USB** — jeśli system wyświetlił okno o dostęp do USB, upewnij się, że dotknąłeś **Allow**

### Brak wideo

**Objaw:** Urządzenie jest wykrywane, ale ekran jest czarny lub zamarznięty.

1. **Sprawdź kabel HDMI** — czy HDMI komputera docelowego jest solidnie podłączone do wejścia HDMI KVM?
2. **Sprawdź wyjście docelowe** — czy komputer docelowy faktycznie coś wyświetla?
3. **Spróbuj niższej rozdzielczości** — otwórz ustawienia → **Video Format** → wybierz niższą rozdzielczość
4. **Sprawdź uprawnienie kamery** — Ustawienia Androida → Apps → Openterface → Permissions → upewnij się, że Camera jest dozwolone
5. **Uruchom aplikację ponownie**

### Mysz nie reaguje

**Objaw:** Wideo działa, ale dotknięcie ekranu nic nie robi na urządzeniu docelowym.

1. **Sprawdź połączenie USB dla HID** — otwórz ustawienia → **Device** i potwierdź, że urządzenie jest aktywne
2. **Spróbuj innego trybu myszy** — przełącz między Absolute a Relative
3. **Rozłącz i połącz ponownie** — użyj czerwonego przycisku **Disconnect Device**, następnie połącz ponownie
4. **Sprawdź komputer docelowy** — czy rozpoznaje klawiaturę/mysz USB? Spróbuj odłączyć i podłączyć ponownie kabel USB po stronie docelowej

### Klawiatura nie wysyła klawiszy

**Objaw:** Mysz działa, ale pisanie nic nie robi.

1. **Upewnij się, że klawiatura jest otwarta** — dotknij przycisku klawiatury
2. **Sprawdź połączenie szeregowe** — otwórz ustawienia → **Device** i potwierdź, że jest aktywne
3. **Sprawdź baudrate** — otwórz ustawienia → **Baudrate** i upewnij się, że pasuje do urządzenia (domyślnie 115200)
4. **Sprawdź układ klawiatury** — upewnij się, że wybrano właściwy układ (US, JP, DE)

### Aplikacja się zawiesza lub crashuje

1. **Zamknij i uruchom ponownie** aplikację
2. **Obniż rozdzielczość wideo i liczbę klatek** — wysokie ustawienia mogą przeciążyć urządzenia z ograniczoną pamięcią
3. **Sprawdź dostępną pamięć** — mała ilość miejsca może powodować niestabilność
4. **Zaktualizuj aplikację** — sprawdź nowszą wersję w Google Play lub GitHub Releases

### Zrzuty ekranu lub nagrania nie są zapisywane

1. **Sprawdź uprawnienie Storage** — Ustawienia Androida → Apps → Openterface → Permissions → Storage
2. **Sprawdź dostępne miejsce** na urządzeniu
3. Nagrania i zrzuty ekranu są zapisywane w domyślnym folderze multimediów urządzenia

### Zbieranie logów (Android)

Jeśli standardowe rozwiązywanie problemów nie pomaga, zbierz logi do udostępnienia maintainerom:

```bash
adb logcat | grep -i openterface > openterface.log
```

Dołącz ten plik przy otwieraniu issue na GitHubie.

---

## Problemy specyficzne dla iPadOS

> **Uwaga:** iPadOS jest obsługiwany tylko na **KVM-Go**. Jeśli używasz Mini-KVM lub uConsole KVM Extension, aplikacja iPadOS nie będzie działać.

### Bluetooth nie łączy się

**Objaw:** Przycisk BLE nie staje się zielony lub na liście skanowania nie ma urządzeń.

1. **Sprawdź, czy Bluetooth jest włączony** na iPadzie — Settings > Bluetooth
2. **Upewnij się, że KVM-Go jest włączone** — dongle powinien być podłączony do portu USB komputera docelowego
3. **Zbliż iPada** do dongla KVM-Go — zasięg BLE to zwykle do 10 metrów
4. **Sprawdź uprawnienie Bluetooth iPada** — Settings > Privacy & Security > Bluetooth > upewnij się, że Openterface ma dostęp
5. **Dotknij Refresh** na ekranie BLE, aby ponownie uruchomić skanowanie
6. **Sprawdź uprawnienie Bluetooth aplikacji Openterface** — jeśli odrzucono przy pierwszym uruchomieniu, włącz ponownie w Ustawieniach

### Brak podglądu wideo

**Objaw:** BLE jest połączone, ale ekran jest czarny lub pokazuje obraz przewodnika.

1. **Sprawdź połączenie HDMI** — czy wyjście HDMI komputera docelowego jest solidnie podłączone do wejścia HDMI KVM-Go?
2. **Sprawdź wyjście docelowe** — czy komputer docelowy faktycznie coś wyświetla?
3. **Spróbuj niższej rozdzielczości** — dotknij przycisku Video i wybierz niższą rozdzielczość (720p lub 480p)
4. **Sprawdź uprawnienie kamery** — Settings > Privacy & Security > Camera > upewnij się, że Openterface ma dostęp
5. **Uruchom aplikację ponownie** — przesuń w górę z ostatnich aplikacji i otwórz ponownie

### Mysz/dotyk nie reaguje

**Objaw:** Wideo działa, ale dotknięcie ekranu nic nie robi na urządzeniu docelowym.

1. **Sprawdź połączenie BLE** — przycisk BLE powinien być zielony z wartością RSSI
2. **Spróbuj innego trybu myszy** — przełącz między Pan Mode a iPencil Mode
3. **Rozłącz i połącz ponownie** — otwórz ekran BLE, dotknij Disconnect, następnie Connect ponownie
4. **Sprawdź komputer docelowy** — czy rozpoznaje KVM-Go jako klawiaturę/mysz USB?

### Klawiatura nie wysyła klawiszy

**Objaw:** Mysz działa, ale pisanie nic nie robi.

1. **Upewnij się, że pływająca klawiatura jest otwarta** — dotknij przycisku Keyboard
2. **Sprawdź połączenie BLE** — wejście idzie przez Bluetooth, nie USB
3. **Sprawdź tryb klawiatury** — spróbuj przełączyć między Normal a Game mode
4. **Klawiatura zewnętrzna:** jeśli używasz fizycznej klawiatury iPada, sprawdź, czy iPadOS kieruje zdarzenia klawiszy do aplikacji

### Dźwięk nie odtwarza się

**Objaw:** Wideo działa, ale nie słychać komputera docelowego przez iPada.

1. **Sprawdź przycisk Audio** — powinien pokazywać zieloną ikonę głośnika
2. **Sprawdź uprawnienie mikrofonu** — Settings > Privacy & Security > Microphone > upewnij się, że Openterface ma dostęp
3. **Sprawdź głośność iPada** — upewnij się, że iPad nie jest wyciszony ani na minimalnej głośności
4. **Sprawdź wyjście audio docelowe** — czy komputer docelowy jest skonfigurowany do wysyłania dźwięku przez HDMI?

### Aplikacja się zawiesza lub crashuje

1. **Zamknij i uruchom ponownie** aplikację
2. **Obniż rozdzielczość wideo** — wysoka rozdzielczość może obciążać starsze iPady
3. **Sprawdź dostępną pamięć** — mała ilość miejsca może powodować niestabilność
4. **Zaktualizuj aplikację** — sprawdź nowszą wersję w App Store

### Zrzuty ekranu lub nagrania nie są zapisywane

1. **Sprawdź uprawnienie Photo Library** — Settings > Privacy & Security > Photos > upewnij się, że Openterface ma dostęp
2. **Sprawdź dostępną pamięć** na iPadzie
3. **Przeglądaj przez aplikację Pliki** — nagrania są zapisywane w `Documents/Recordings/` nawet bez dostępu do Photo Library

---

## Reset fabryczny

1. Użyj Serial Reset Tool z Settings (macOS) lub menu Device (Qt)
2. Resetuje układ HID do ustawień fabrycznych
3. Podłącz urządzenie ponownie po resecie

## Odzyskiwanie połączenia

Aplikacje obsługują automatyczne odzyskiwanie dla:
- Rozłączenia/ponownego podłączenia urządzenia (hot-plug dla USB, ponowne połączenie BLE dla iPadOS)
- Limitów czasu komunikacji
- Fallbacków układów (MS2109 → MS2109S → MS2130S)
- Odzyskiwania portu szeregowego
- Automatycznego ponownego połączenia BLE iPadOS (do 3 prób z 2-sekundowym opóźnieniem)

## Zgłaszanie błędów

1. Włącz logowanie do pliku
2. Odtwórz problem
3. Zgłoś przez [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) lub e-mail na info@techxartisan.com
