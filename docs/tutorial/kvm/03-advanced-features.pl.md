
# Samouczek KVM 03 — Zaawansowane funkcje

**Grupa docelowa:** Średniozaawansowani do ekspertów — funkcje power userów i konfiguracja

---

## 1. System preferencji

### Wideo

- **Rozdzielczość i liczba klatek** — Preferowane ustawienia przechwytywania
- **Backend multimediów** — FFmpeg, GStreamer (Linux) lub Qt Multimedia (Windows)
- **Przyspieszenie sprzętowe** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Proporcje i skalowanie** — Niestandardowe proporcje, Stretch/Fit/Fill

### Audio

- **Włączone** — Przełącz przechwytywanie dźwięku z urządzenia docelowego
- **Urządzenie wejściowe/wyjściowe** — Wybierz źródło i urządzenie odtwarzania

### Sterowanie urządzeniem docelowym

- **Tryb myszy** — Absolute, Relative (HID), Relative (Events)
- **Ograniczanie zdarzeń myszy** — 30–1000 zdarzeń/sekundę
- **Układ klawiatury** — System docelowy i układy regionalne
- **Interwał powtarzania klawisza** — Szybkość powtarzania przytrzymanego klawisza
- **Automatyczne ukrywanie kursora** — Ukryj kursor hosta nad obszarem wideo

### Logowanie

- **Poziom logów** — Debug, Info, Warning, Error
- **Log do pliku** — `~/Documents/openterface.log` (macOS) lub skonfigurowana ścieżka (Qt)
- **Logowanie szeregowe** — Osobny log komunikacji szeregowej

---

## 2. Zarządzanie EDID

### Czym jest EDID?

EDID (Extended Display Identification Data) to dane, które urządzenie KVM wysyła do urządzenia docelowego, aby opisać jego możliwości wyświetlania — obsługiwane rozdzielczości, częstotliwości odświeżania, informacje o producencie. KVM działa jak „fałszywy monitor”, więc EDID określa, jakie rozdzielczości urządzenie docelowe wyśle.

### Edycja nazwy wyświetlacza EDID

Możesz zmienić nazwę wyświetlacza raportowaną przez urządzenie KVM do urządzenia docelowego. Ta nazwa pojawia się w ustawieniach wyświetlacza systemu docelowego.

> **Uwaga:** Obecnie obsługiwana jest wyłącznie edycja nazwy wyświetlacza. Edycja rozdzielczości i niestandardowe wpisy rozdzielczości nie są jeszcze dostępne.

**Dostęp:** Settings > EDID Display Name Editor (macOS) lub Device > Update Display Settings (Qt)

### Zastosowania

- **Identyfikacja wyświetlacza** w ustawieniach systemu docelowego
- **Niestandardowa nazwa** w konfiguracjach wielu monitorów, aby odróżnić wyświetlacz KVM

---

## 3. System makr (macOS)

Makra to zapisane sekwencje akcji klawiatury uruchamiane z panelu makr na pasku narzędzi.

### Format sekwencji klawiszy

**Tagi modyfikatorów:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (mapuje na Cmd/Win/Super w zależności od systemu docelowego)

**Klawisze specjalne:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Opóźnienia:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Przykłady

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### Generowanie wspomagane przez AI

Przycisk **Magic** w edytorze makr generuje makra z języka naturalnego. Opisz, czego potrzebujesz, a AI utworzy sekwencję klawiszy.

### Weryfikacja

Oznacz makra jako **verified** po przetestowaniu. Tylko zweryfikowane makra są dostępne dla agenta AI do autonomicznego wykonywania.

---

## 4. Script Tool (Qt)

Język skryptowy inspirowany AutoHotKey do automatyzacji akcji klawiatury i myszy na urządzeniu docelowym.

### Otwieranie

Menu: **Device > Script Tool**

### Polecenia

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Wstrzymaj wykonanie | `Sleep 1000` |
| `Send` | Wyślij naciśnięcia klawiszy | `Send Hello World` |
| `Click` | Kliknięcie myszą | `Click 100 200` |
| `SetCapsLockState` | Przełącz CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Zrzut ekranu | `FullScreenCapture "/tmp/shot.png"` |

### Prefiksy modyfikatorów

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Aktualizacje firmware

### Kiedy aktualizować

- Nowe funkcje sprzętowe
- Poprawki błędów
- Ulepszenia kompatybilności

### Proces aktualizacji

1. Otwórz Firmware Update Tool (**Settings > Firmware Update Tool** w macOS, **Device > Update Firmware** w Qt)
2. Narzędzie sprawdza najnowszą wersję w sieci
3. Postęp jest śledzony podczas operacji zapisu
4. **Nie odłączaj urządzenia podczas aktualizacji**

### Odzyskiwanie

1. Utrzymuj zasilanie urządzenia
2. Zamknij i ponownie otwórz Firmware Update Tool, spróbuj ponownie
3. Użyj Serial Reset Tool, jeśli urządzenie nie odpowiada

---

## 6. Serial Reset Tool

**Dostęp:** Settings > Serial Reset Tool (macOS) lub Device > Factory Reset HID Chip (Qt)

Użyj, gdy:
- Urządzenie jest w nieznanym stanie po nieudanej aktualizacji firmware
- Chip HID nie odpowiada
- Przygotowujesz urządzenie do odsprzedaży

---

## 7. Diagnostyka (Qt)

Menu: **Device > Device Diagnostics**

Uruchamia testy sprzętowe kolejno:
1. Test połączenia szeregowego
2. Status USB urządzenia docelowego
3. Test resetu fabrycznego
4. Test wysokiej/niskiej prędkości transmisji (baudrate)
5. Test obciążeniowy (szybkie polecenia, pomiar wskaźnika powodzenia)
6. Test plug & play (wykrywanie odłączenia/ponownego podłączenia USB)

Po uruchomieniu wyeksportuj wyniki przez **Support Email Dialog**.

---

## 8. System czatu AI (macOS)

Wbudowany asystent AI, który może analizować ekran docelowy, sugerować działania i wykonywać operacje klawiatury/myszy.

### Tryby czatu

| Mode | Description |
|------|-------------|
| **Interactive** | Zadawaj pytania, otrzymuj wskazówki |
| **Agentic** | AI autonomicznie planuje i wykonuje wieloetapowe zadania |
| **Guide** | Jedna instrukcja na raz, krok po kroku |
| **Planner** | Złożone żądania rozbite na ustrukturyzowane plany |

### Konfiguracja

Settings > AI Chat: punkt końcowy API, klucz (przechowywany w Keychain), model, system docelowy (macOS/Windows/Linux/itd.)

---

## 9. Zdalne sterowanie (VNC/RDP — macOS)

Przełączaj między trybami **Hardware KVM**, **VNC** i **RDP** przez **Control > Connection Protocol**.

| Scenario | Mode |
|----------|------|
| Urządzenie docelowe w BIOS/UEFI, brak sieci, podczas bootowania, po awarii | Hardware KVM |
| Użycie pulpitu z dużą przepustowością, serwer Windows | VNC lub RDP |

---

## 10. Serwer TCP (Qt)

Wbudowany serwer TCP do zdalnego sterowania na porcie 12345.

### Polecenia

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Przykład w Pythonie

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Bezpieczeństwo:** Brak uwierzytelniania, szyfrowania i ograniczania częstotliwości. Włączaj tylko w zaufanych sieciach.

---

## Funkcje specyficzne dla iPadOS

### Zarządzanie połączeniem Bluetooth

Aplikacja iPadOS łączy się z donglem KVM-Go przez **Bluetooth Low Energy (BLE)** w celu wejścia HID klawiatury/myszy:

- **Auto-connect:** Domyślnie włączone. Przy starcie aplikacja skanuje przez 5 sekund i automatycznie łączy się z urządzeniem `kvm*` o najsilniejszym sygnale.
- **Ponowne łączenie:** Po utracie połączenia aplikacja próbuje połączyć się ponownie do 3 razy z 2-sekundowym opóźnieniem.
- **Monitorowanie sygnału:** RSSI aktualizuje się co 2 sekundy. Przycisk BLE pokazuje siłę sygnału (np. `-45 dBm`) z wskaźnikiem koloru: zielony (-50 do 0 dBm), pomarańczowy (-70 do -50 dBm), czerwony (poniżej -70 dBm).
- **Skanowanie urządzeń:** Na liście pojawiają się tylko urządzenia, których nazwa zaczyna się od `kvm` (bez rozróżniania wielkości liter).
- **Sterowanie ręczne:** Otwórz ekran BLE, aby skanować, łączyć, rozłączać lub wyłączyć auto-connect.

### Nakładka informacji

Dotknij przycisku **Info**, aby wyświetlić nakładkę statusu wejścia w czasie rzeczywistym w prawym górnym rogu:

```
┌─ Status wejścia ──────┐
│ Mysz                  │
│ Tryb: Absolute        │
│ Pozycja: 512.0, 384.0 │
│ Tryb przeciągania: Active │
│ Przewijanie: Inactive │
│ Klawiatura            │
│ Tryb: Normal          │
│ Caps Lock: OFF        │
│ Modyfikatory: Ctrl, Shift │
└───────────────────────┘
```

Nakładka jest przezroczysta dla dotyku — nie blokuje interakcji z podglądem wideo.

### Korekcja orientacji ekranu

Dotknij przycisku **Rotate**, aby przełączać tryby korekcji orientacji: Normal, 90° CW, 180°, 90° CCW. Koreguje podgląd wideo, gdy dongle KVM-Go jest zamontowany w niestandardowej orientacji. Obrót dotyczy zarówno podglądu na żywo, jak i zapisanych nagrań.

### Wyłączony timer bezczynności

Aplikacja utrzymuje ekran iPada **włączony** podczas użytkowania, wyłączając timer bezczynności — zapobiega automatycznemu blokowaniu iPada podczas monitorowania docelowego PC.

### System logowania

Aplikacja zawiera wbudowany `Logger` z filtrowaniem według kategorii:

| Category | Covers |
|---|---|
| `bluetooth` | Skanowanie BLE, połączenie, transmisja danych |
| `mouse` | Wejście myszy, wykrywanie gestów, zmiany trybu |
| `keyboard` | Zdarzenia klawiszy, stan modyfikatorów, klawisze złożone |
| `camera` | Nagrywanie wideo, zrzuty ekranu, przechwytywanie zdjęć |
| `ui` | Obsługa dotyku, rozpoznawanie gestów, warstwa podglądu |
| `general` | Cykl życia aplikacji, informacje ogólne |

Logowanie można dostosować w kodzie źródłowym aplikacji, aby zmniejszyć szum w konsoli.

---

## Kolejne kroki

- **[Rozwiązywanie problemów →](04-troubleshooting.md)** — Typowe problemy i rozwiązania

---

## Funkcje specyficzne dla Androida

### Panel ustawień

Panel ustawień aplikacji Android (przycisk Menu ☰) zawiera wszystkie opcje konfiguracji:

| Setting | Description |
|---|---|
| **Device** | Pokazuje podłączone urządzenia USB i status. Dotknij, aby wybrać lub ponownie przeskanować. |
| **Disconnect Device** | Bezpiecznie zwalnia wszystkie połączenia USB. Użyj przed odłączeniem. |
| **Baudrate** | Prędkość komunikacji szeregowej: **115200** (domyślnie) lub **9600** (wolniej, przy problemach). |
| **Controls** | Suwaki jasności, kontrastu i odcienia kamery. |
| **Video Format** | Wybór rozdzielczości i liczby klatek. |
| **Rotate/Flip** | Obrót 90° CW/CCW, odbicie poziome/pionowe. |
| **Screen Capture / Record Video** | Zrzut ekranu i nagrywanie wideo. |
| **Relative / Absolute / Drag** | Przełącz tryb sterowania myszą. |
| **About Device** | Pokazuje wersję Androida i informacje o wersji aplikacji. |

### Trwałość ustawień

Aplikacja Android zapamiętuje preferencje między sesjami:

| Setting | Persisted? |
|---|---|
| Tryb sterowania myszą | Tak |
| Format wideo (rozdzielczość, FPS) | Tak |
| Parametry kamery (jasność, kontrast, odcień) | Tak |
| Układ klawiatury (US, JP, DE) | Tak |
| Baudrate | Tak |
| Historia połączeń urządzeń | Tak |

Po ponownym otwarciu aplikacji przywracane są ostatnie ustawienia. Aby zresetować wszystko: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Bezpieczne odłączenie

Przed odłączeniem urządzenia KVM na Androidzie:

1. Otwórz panel ustawień
2. Dotknij **Disconnect Device** (wyświetlane na czerwono)
3. Poczekaj, aż aplikacja zwolni połączenie USB
4. Odłącz kable

Zapobiega to uszkodzeniu danych i zapewnia, że docelowy komputer prawidłowo zwolni klawiaturę/mysz.

### Wskazówki dotyczące wydajności na Androidzie

- **Obniż rozdzielczość** — 640×480 jest znacznie lżejsze niż 1920×1080
- **Zmniejsz liczbę klatek** — 30 fps zużywa mniej pasma niż 60 fps
- **Zamknij inne aplikacje** — zwolnij pamięć telefonu
- **Używaj jakościowego adaptera USB OTG** — tanie adaptery mogą ograniczać połączenie
- Zespół deweloperski pracuje nad zmniejszeniem opóźnienia w samej ścieżce kamery
