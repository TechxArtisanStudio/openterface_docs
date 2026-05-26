# Samouczek KVM 02 — Podstawowe operacje

**Grupa docelowa:** Początkujący do średniozaawansowanych — funkcje codziennego użytku

---

## 1. Sterowanie myszą

### Tryb absolutny (domyślny)

Kursor myszy hosta mapuje się bezpośrednio na ekran docelowy. Oba kursory są widoczne.

- **Najlepsze do:** Ogólnego użytku, zarządzania serwerami, nawigacji w BIOS
- **Zachowanie kursora:** Automatyczne ukrywanie lub zawsze widoczny kursor hosta nad obszarem wideo

### Tryb względny (HID)

Ruchy myszy są wysyłane jako względne delty przez interfejs HID. Kursor hosta jest ukryty.

- **Najlepsze do:** Gier, aplikacji wymagających surowego wejścia myszy
- **Wymagania:** Uprawnienie Dostępność w macOS
- **Wyjście:** Globalny skrót klawiszowy (macOS) lub długie naciśnięcie Esc (Qt)

### Tryby myszy na Androidzie

Aplikacja Android oferuje trzy sposoby sterowania myszą docelową, przełączane w panelu ustawień:

| Tryb | Jak działa | Najlepsze do |
|---|---|---|
| **Absolutny (domyślny)** | Dotknij w dowolnym miejscu — kursor skacze tam i wykona lewy klik. Pozycja mapuje się proporcjonalnie. | Większości zadań |
| **Względny** | Przeciągnij palcem; kursor porusza się względem przeciągnięcia, jak touchpad laptopa. Podnieś palec — kursor zostaje na miejscu. | Precyzyjnego pozycjonowania kursora |
| **Absolutne przeciąganie** | Dotknij i przytrzymaj; kursor skacze i podąża za palcem. Pojawia się etykieta „Drag”. Puść, aby upuścić. | Przeciągania plików, zaznaczania tekstu |

**Przyciski myszy na Androidzie:** pojedyncze dotknięcie = lewy klik, długie naciśnięcie = prawy klik, podwójne dotknięcie = podwójny klik.

### Tryby myszy na iPadOS

Aplikacja iPadOS oferuje dwa tryby myszy, przełączane przyciskiem trybu myszy na pasku narzędzi:

| Tryb | Ikona | Jak działa | Najlepsze do |
|---|---|---|---|
| **Tryb Pan** (względny) | Ikona dłoni | Palec działa jak touchpad laptopa — przeciągnij, aby poruszyć kursorem, dotknij, aby kliknąć | Ogólnego użytku na pulpicie, płaskiej powierzchni |
| **Tryb iPencil** (absolutny) | Ikona ołówka | Pozycja dotyku mapuje się bezpośrednio na współrzędne ekranu docelowego, jak tablet graficzny | Precyzyjnego wskazywania, użycia Apple Pencil |

**Gesty w obu trybach:**

| Gest | Tryb Pan | Tryb iPencil |
|---|---|---|
| **Pojedyncze dotknięcie** | Lewy klik | Przenieś kursor do punktu + lewy klik |
| **Dotknij i przeciągnij** | Porusz kursor (względnie) | Przeciągnij z wciśniętym lewym przyciskiem |
| **Podwójne dotknięcie** | Podwójny klik | Podwójny klik w punkcie |
| **Długie naciśnięcie** | Prawy klik | Prawy klik w punkcie |
| **Dotknięcie dwoma palcami** | Prawy klik | Prawy klik |
| **Przeciąganie dwoma palcami** | Kółko przewijania | Kółko przewijania |

**Szybkie menu:** Długo naciśnij podgląd wideo, aby otworzyć menu z opcjami Left Click, Right Click i Drag.

**Tryb przeciągania:** Podwójne dotknięcie i przytrzymanie lub wybierz Drag z szybkiego menu — lewy przycisk pozostaje wciśnięty, pojawia się etykieta „Dragging Mode Active”.

### Presety wydajności (macOS)

W **Control > Mouse Mode > Performance Presets**:

| Preset | Throttle | Baudrate | Zastosowanie |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Wolne urządzenia docelowe |
| Casual Use | 80 Hz | 9600 | Codzienne zarządzanie serwerami |
| Gaming | 250 Hz | 115200 | Responsywne granie |
| Max Performance | 1000 Hz | 115200 | Maksymalna responsywność |

Wyższy throttle = większa responsywność. Wyższy baudrate = szybsza komunikacja szeregowa.

---

## 2. Wejście klawiatury

### Standardowe wejście

Wszystkie naciśnięcia klawiszy wpisywane, gdy okno aplikacji ma fokus, są przekazywane do urządzenia docelowego.

### Klawisze specjalne

Wysyłaj kombinacje klawiszy przez panel klawiszy na pasku narzędzi lub **Control > Special Keys**:

- **F1–F12:** Klawisze funkcyjne
- **Ctrl+Alt+Del:** Windows three-finger salute
- **Print Screen:** Klawisz zrzutu ekranu
- **Ctrl+Alt+F2:** Przełączanie VT w Linuxie

### Układ klawiatury

Ustaw układ systemu docelowego zgodnie z komputerem docelowym:

| Układ | Zachowanie |
|--------|----------|
| **Windows** | Mapuje klawisze hosta na konwencje Windows |
| **Mac** | Mapuje klawisze hosta na konwencje Mac |
| **Linux** | Mapuje klawisze hosta na konwencje Linux |

Układy regionalne (QWERTY UK, duński, QWERTZ niemiecki, AZERTY francuski, japoński itd.) są również dostępne w aplikacji Qt.

### Paste to Target

Aplikacja wysyła tekst ze schowka jako emulowane naciśnięcia klawiszy do urządzenia docelowego. Przydatne do nazw użytkowników, poleceń, adresów URL.

> **Uwaga:** Obsługiwane są tylko znaki ASCII. Długi tekst może stracić formatowanie lub gubić znaki na starszych/zajętych systemach.

**Konfiguracja zachowania wklejania (macOS):**
- **Ask Every Time:** Pyta za każdym razem hosta lub cel
- **Host Paste:** Zawsze wysyła do celu
- **Local Paste:** Zawsze wkleja na hoście

### Klawiatura ekranowa na Androidzie

Aplikacja Android udostępnia pełną klawiaturę ekranową dostępną przez przycisk klawiatury (⌨) w prawym dolnym rogu ekranu głównego:

| Kontrolka | Co robi |
|---|---|
| **ShortCut** | Gotowe skróty: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4 itd. |
| **Function** | F1–F12, PrtSc, ScrLk, klawisze nawigacyjne (Ins, Home, PgUp itd.), strzałki |
| **System** | Układ QWERTY z literami, cyframi, znakami interpunkcyjnymi, Backspace, Enter |
| **Modifier keys** | Ctrl, Shift, Alt, Win — przyciski przełączania resetujące się automatycznie po następnym klawiszu |

Aby wysłać kombinację jak **Ctrl+Alt+Del**: dotknij Ctrl (podświetla się), dotknij Alt (oba podświetlone), dotknij Del. Wszystkie modyfikatory resetują się automatycznie po wysłaniu klawisza.

Klawiatura obsługuje też **różne układy regionalne** (US, japoński JIS, niemiecki QWERTZ itd.) wybierane w panelu ustawień. Przyciski powiększ/pomniejsz pozwalają dostosować rozmiar klawiszy.

### Wejście klawiatury na iPadOS

Aplikacja iPadOS obsługuje dwie metody wprowadzania z klawiatury:

**Pływająca klawiatura ekranowa:** Dotknij przycisku **Keyboard** na pasku narzędzi, aby wyświetlić przeciąganą pływającą klawiaturę w układzie w stylu Mac:

| Wiersz | Klawisze |
|---|---|
| **Górny** | Esc, F1–F12, Del |
| **Cyfrowy** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Wiersz główny** | Caps, a–l, ;, ', Enter |
| **Dolny** | Shift, z–m, ,, ., /, Shift |
| **Modyfikatory** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Przełączanie modyfikatorów:** Dotknij Ctrl, Shift, Alt, Cmd lub Caps, aby włączyć/wyłączyć (podświetlone na niebiesko)
- **Tryby klawiatury:** Normal (standardowe pisanie) i Game (zoptymalizowany nagłówek pakietu HID dla wejścia w grach)
- **Przeciąganie:** Chwyć uchwyt przeciągania w nagłówku, aby przenieść klawiaturę w dowolne miejsce na ekranie

**Zewnętrzna klawiatura iPada:** Fizyczne klawiatury podłączone do iPada (Bluetooth, Smart Connector, USB) są przekazywane bezpośrednio do docelowego PC. Klawisze modyfikujące wysyłane są jako zdarzenia naciśnięcia/zwolnienia, więc kombinacje jak `Ctrl+C` lub `Alt+Tab` działają naturalnie.

**Skróty klawiszy złożonych:** Aplikacja zawiera bibliotekę popularnych skrótów dostępną z paska narzędzi, uporządkowaną według kategorii:

| Kategoria | Przykłady |
|---|---|
| **Navigation** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Editing** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **System** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Application** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (zrzuty ekranu macOS) |

---

## 3. Ustawienia wideo

### Wyświetlanie rozdzielczości

Pasek narzędzi pokazuje bieżącą rozdzielczość wejścia i FPS z urządzenia docelowego. Rozdzielczość zależy od tego, co cel wysyła przez HDMI.

### Obsługiwane rozdzielczości

| Rozdzielczość | Zakres liczby klatek |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Zmiana rozdzielczości

1. Skonfiguruj preferowaną rozdzielczość w ustawieniach wideo

### Proporcje obrazu i skalowanie

| Tryb | Zachowanie |
|------|----------|
| **Active Resolution** | Automatycznie wykrywa aktywny obszar wideo |
| **HID Resolution** | Używa rozdzielczości z hardware capture card |
| **Custom** | Ręcznie ustaw proporcje (16:9, 4:3, 21:9 itd.) |

**Skalowanie:** Stretch (wypełnia okno, może zniekształcać), Fit (letterboxing), Fill (może przycinać).

### Powiększenie

Powiększ/pomniejsz, zresetuj do dopasowania i przewijaj, aby przesuwać widok po powiększeniu.

### Backend wideo (Qt)

| Backend | Platforma | Uwagi |
|---------|----------|-------|
| **FFmpeg** | Wszystkie | Zalecany, akceleracja sprzętowa |
| **GStreamer** | Linux | Elastyczność pipeline |
| **Qt Multimedia** | Windows | Prosty fallback |

Przełącz przez **Preferences > Video > Media Backend**. Uruchom ponownie po zmianie.

### Sterowanie wideo na Androidzie

W aplikacji Android ustawienia wideo dostępne są przez panel ustawień (przycisk Menu ☰):

- **Video Format** — Wybierz rozdzielczość (1920×1080, 1280×720, 640×480) i liczbę klatek (30fps, 60fps). Obniż rozdzielczość/liczbę klatek, jeśli wideo się zacina.
- **Controls** — Suwaki w czasie rzeczywistym dla **brightness**, **contrast** i **hue**
- **Rotate/Flip** — Obrót 90° w prawo/lewo, odbicie poziome/pionowe. Przydatne, gdy urządzenie KVM jest zamontowane do góry nogami lub bokiem

Ustawienia są zachowywane między sesjami — konfigurujesz je tylko raz.

### Sterowanie wideo na iPadOS

Na iPadOS sterowanie wideo dostępne jest z dolnego paska narzędzi:

- **Resolution Switching** — Dotknij przycisku **Video** (pokazuje bieżącą rozdzielczość), aby wybrać: 2160p (4K), 1080p (domyślnie), 720p lub 480p. Niższa rozdzielczość dla lepszej wydajności przy wolniejszych połączeniach.
- **Zoom Mode** — Dotknij **Zoom**, aby wejść w tryb powiększenia, następnie ściśnij dwoma palcami, aby powiększyć. Wskaźnik powiększenia pokazuje bieżący poziom (np. `2.5x`). Po powiększeniu przeciąganie jednym palcem przesuwa widok. Dotknij Zoom ponownie, aby wyjść.
- **Fullscreen** — Dotknij **Fullscreen**, aby ukryć pasek narzędzi i rozciągnąć wideo na cały ekran. Dotknij przycisku strzałki w lewym górnym rogu, aby wyjść.
- **Screen Rotation** — Dotknij **Rotate**, aby przełączać tryby korekcji orientacji (Normal, 90° CW, 180°, 90° CCW). Przydatne, gdy dongle KVM-Go jest zamontowany bokiem lub do góry nogami. Obrót dotyczy podglądu na żywo i zapisanych ujęć.

Gdy kamera się uruchamia, pojawia się wskaźnik ładowania „Starting Camera...”. Jeśli kamera nie jest podłączona, ale uprawnienia są przyznane, wyświetlany jest obraz przewodnika.

---

## 4. Dźwięk z urządzenia docelowego

Chip przechwytywania HDMI wydobywa dźwięk ze sygnału HDMI i prezentuje go hostowi jako wejście audio USB.

### Włączanie dźwięku

1. Kliknij ikonę dźwięku lub otwórz ustawienia audio
2. Włącz przechwytywanie dźwięku
3. Wybierz właściwe urządzenie wejściowe (np. „OpenterfaceA”)
4. Wybierz urządzenie wyjściowe hosta

Dźwięk jest domyślnie wyłączony na większości platform.

### Kontrola głośności

- **Strona docelowa:** Reguluj na komputerze docelowym
- **Strona hosta:** Użyj miksera audio systemu hosta dla urządzenia przechwytującego

### Monitorowanie dźwięku na iPadOS

Aplikacja iPadOS pozwala słuchać dźwięku docelowego PC przez głośniki lub słuchawki iPada:

- Dotknij przycisku **Audio** (ikona głośnika) na pasku narzędzi, aby przełączyć monitorowanie
- **Stany ikony:** szary przekreślony głośnik = brak autoryzacji, czerwony przekreślony głośnik = wyłączone, zielony głośnik z falami = włączone
- Przy pierwszym użyciu aplikacja prosi o uprawnienie mikrofonu
- Dźwięk odtwarzany jest przez głośniki iPada lub podłączone słuchawki/audio Bluetooth
- **Podczas nagrywania:** dźwięk monitorowania jest tymczasowo wyciszony, aby zapobiec sprzężeniu, ale nadal jest zapisywany w pliku nagrania

---

## 5. Przechwytywanie ekranu i nagrywanie

### Zrzut ekranu

Kliknij ikonę aparatu na pasku narzędzi. Obrazy zapisywane są w domyślnym folderze multimediów systemu:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Folder przechwyceń aparatu (przez menu Camera)

### Nagrywanie

Kliknij przycisk nagrywania, aby rozpocząć/zatrzymać nagrywanie strumienia wideo i audio urządzenia docelowego. Podczas aktywnego nagrywania pojawia się timer.

**Ustawienia nagrywania:**
- Format wyjściowy (MP4, AVI, MOV, MKV)
- Bitrate wideo, kodek audio
- Katalog wyjściowy

### Przechwytywanie ekranu i nagrywanie na Androidzie

Na Androidzie dostęp przez panel ustawień:

- **Screen Capture** — Dotknij, aby zapisać migawkę bieżącej klatki wideo w domyślnym folderze multimediów urządzenia. Wymaga **Storage permission**.
- **Record Video** — Dotknij, aby rozpocząć/zatrzymać nagrywanie. U góry pojawia się czerwony wskaźnik nagrywania z timerem. Wideo zapisywane jest w domyślnym folderze multimediów urządzenia.

**Zastosowania:** nagrywanie procesu rozruchu celu, przechwytywanie komunikatów błędów, dokumentowanie kroków konfiguracji.

### Przechwytywanie ekranu i nagrywanie na iPadOS

**Zrzuty ekranu:** Dotknij przycisku **Screenshot** (ikona aparatu) na pasku narzędzi. Aplikacja przechwytuje klatkę w wysokiej rozdzielczości, koryguje orientację i zapisuje jako JPEG.

**Nagrywanie wideo:** Dotknij przycisku **Record**, aby rozpocząć/zatrzymać. Po zatrzymaniu aplikacja wyświetla szczegóły nagrania (czas trwania i rozmiar pliku).

| Ustawienie | Wartość |
|---|---|
| **Video codec** | H.264 przy 30 fps |
| **Resolution** | Zgodna z urządzeniem przechwytującym (zwykle 1920×1080) |
| **Audio codec** | AAC przy 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Lokalizacje plików:**
- **App Documents:** `Documents/Recordings/` — przeglądaj przez aplikację Pliki > Na moim iPadzie > Openterface KVM > Recordings
- **Photos App:** Jeśli przyznano uprawnienie Biblioteki zdjęć i włączono w ustawieniach
- **Nazewnictwo plików:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (zrzuty) lub `.mov` (nagrania)

**Zastosowania:** nagrywanie procesu rozruchu celu, przechwytywanie komunikatów błędów, dokumentowanie kroków konfiguracji.

---

## 6. Wskaźniki połączenia

| Wskaźnik | Zielony | Pomarańczowy | Szary |
|-----------|-------|--------|------|
| HDMI | Wykryto sygnał | Brak sygnału | Nieznany |
| Keyboard | Połączony | Nie znaleziono | Nieznany |
| Mouse | Połączony | Nie znaleziono | Nieznany |

### Przełączanie USB

Przełącznik USB pokazuje, czy port przełączalny jest kierowany do **Host** czy **Target**.

---

## 7. Zapobieganie wygaszaczowi ekranu

Włącz **Prevent Screen Saver** (przez menu Edit/Device lub pasek narzędzi), aby wysyłać okresowe zdarzenia utrzymujące ekran docelowy w stanie czuwania.

---

## 8. Tryb pełnoekranowy

Użyj standardowego przycisku pełnego ekranu, aby wypełnić wyświetlacz obszarem wideo, ukrywając elementy interfejsu.

---

## Następne kroki

- **[Zaawansowane funkcje →](03-advanced-features.md)** — EDID, firmware, makra, skrypty, diagnostyka
- **[Rozwiązywanie problemów →](04-troubleshooting.md)** — Typowe problemy i rozwiązania
