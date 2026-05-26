# Tutorial KVM 02 — Operații de bază

**Public:** Începători la intermediar — funcții de utilizare zilnică

---

## 1. Controlul mouse-ului

### Mod absolut (implicit)

Cursorul gazdei se mapează direct pe ecranul țintei. Ambele cursoruri sunt vizibile.

- **Ideal pentru:** Utilizare generală, administrare servere, navigare BIOS
- **Comportament cursor:** Ascundere automată sau afișare permanentă a cursorului gazdei peste zona video

### Mod relativ (HID)

Mișcările mouse-ului sunt trimise ca delta relative prin interfața HID. Cursorul gazdei este ascuns.

- **Ideal pentru:** Jocuri, aplicații care necesită intrare brută de la mouse
- **Cerințe:** Permisiune de accesibilitate pe macOS
- **Ieșire:** Scurtătură globală de tastatură (macOS) sau apăsare lungă Esc (Qt)

### Moduri mouse Android

Aplicația Android oferă trei moduri de a controla mouse-ul țintei, comutabile din panoul de setări:

| Mod | Cum funcționează | Ideal pentru |
|---|---|---|
| **Absolut (implicit)** | Atinge oriunde și cursorul sare acolo și face clic stânga. Poziția se mapează proporțional. | Majoritatea sarcinilor |
| **Relativ** | Trage degetul; cursorul se mișcă relativ la tragere, ca pe touchpad-ul unui laptop. Ridici degetul și cursorul rămâne pe loc. | Poziționare fină a cursorului |
| **Tragere absolută** | Atinge și ține; cursorul sare și urmează degetul. Apare eticheta "Drag". Eliberează pentru a plasa. | Tragere fișiere, selectare text |

**Butoane mouse pe Android:** atingere simplă = clic stânga, apăsare lungă = clic dreapta, atingere dublă = dublu clic.

### Moduri mouse iPadOS

Aplicația iPadOS oferă două moduri mouse, comutabile prin butonul de mod mouse din bara de instrumente:

| Mod | Icon | Cum funcționează | Ideal pentru |
|---|---|---|---|
| **Mod Pan** (Relativ) | Icon mână | Degetul acționează ca un touchpad de laptop — trage pentru a muta cursorul, atinge pentru clic | Utilizare desktop generală, suprafață plană |
| **Mod iPencil** (Absolut) | Icon creion | Poziția atingerii se mapează direct pe coordonatele ecranului țintei, ca o tabletă grafică | Indicare precisă, utilizare Apple Pencil |

**Gesturi în ambele moduri:**

| Gest | Mod Pan | Mod iPencil |
|---|---|---|
| **Atingere simplă** | Clic stânga | Mută cursorul la punct + clic stânga |
| **Atingere și tragere** | Mută cursorul (relativ) | Trage cu butonul stânga apăsat |
| **Atingere dublă** | Dublu clic | Dublu clic la punct |
| **Apăsare lungă** | Clic dreapta | Clic dreapta la punct |
| **Atingere cu două degete** | Clic dreapta | Clic dreapta |
| **Tragere cu două degete** | Roată de scroll | Roată de scroll |

**Meniu rapid:** Apăsare lungă pe previzualizarea video pentru a deschide un meniu cu opțiuni Clic stânga, Clic dreapta și Tragere.

**Mod tragere:** Atingere dublă și ține sau selectează Tragere din meniul rapid — butonul stânga rămâne apăsat, apare eticheta "Dragging Mode Active".

### Presetări de performanță (macOS)

Sub **Control > Mouse Mode > Performance Presets**:

| Presetare | Throttle | Baudrate | Caz de utilizare |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Dispozitive țintă lente |
| Casual Use | 80 Hz | 9600 | Administrare zilnică servere |
| Gaming | 250 Hz | 115200 | Jocuri responsive |
| Max Performance | 1000 Hz | 115200 | Responsivitate maximă |

Throttle mai mare = mai responsive. Baudrate mai mare = comunicare serială mai rapidă.

---

## 2. Intrare de la tastatură

### Intrare standard

Toate tastele apăsate cât timp fereastra aplicației este focalizată sunt redirecționate către țintă.

### Taste speciale

Trimite combinații de taste prin panoul de taste din bara de instrumente sau **Control > Special Keys**:

- **F1–F12:** Taste funcție
- **Ctrl+Alt+Del:** Salutul cu trei degete Windows
- **Print Screen:** Tasta de captură ecran
- **Ctrl+Alt+F2:** Comutare VT Linux

### Layout tastatură

Setați layout-ul SO țintei pentru a corespunde computerului țintă:

| Layout | Comportament |
|--------|----------|
| **Windows** | Mapează tastele gazdei la convențiile Windows |
| **Mac** | Mapează tastele gazdei la convențiile Mac |
| **Linux** | Mapează tastele gazdei la convențiile Linux |

Layout-uri regionale (QWERTY UK, Daneză, QWERTZ Germană, AZERTY Franceză, Japoneză, etc.) sunt disponibile și în aplicația Qt.

### Lipire pe țintă

Aplicația trimite textul din clipboard ca apăsări de taste emulate către țintă. Util pentru nume de utilizator, comenzi, URL-uri.

> **Notă:** Sunt suportate doar caractere ASCII. Textul lung poate pierde formatarea sau poate omite caractere pe sisteme vechi/ocupate.

**Configurarea comportamentului de lipire (macOS):**
- **Ask Every Time:** Întreabă gazda sau ținta de fiecare dată
- **Host Paste:** Trimite întotdeauna către țintă
- **Local Paste:** Lipește întotdeauna pe gazdă

### Tastatură pe ecran Android

Aplicația Android oferă o tastatură completă pe ecran accesibilă prin butonul de tastatură (⌨) din colțul din dreapta jos al ecranului principal:

| Control | Ce face |
|---|---|
| **ShortCut** | Scurtături predefinite: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, etc. |
| **Function** | F1–F12, PrtSc, ScrLk, taste de navigare (Ins, Home, PgUp, etc.), săgeți |
| **System** | Layout QWERTY cu litere, cifre, punctuație, Backspace, Enter |
| **Taste modificatoare** | Ctrl, Shift, Alt, Win — butoane toggle care se resetează automat după următoarea tastă |

Pentru a trimite o combinație ca **Ctrl+Alt+Del**: atinge Ctrl (evidențiat), atinge Alt (ambele evidențiate), atinge Del. Toate modificatorii se resetează automat după trimiterea tastei.

Tastatura suportă și **layout-uri regionale diferite** (US, Japonez JIS, German QWERTZ, etc.) selectabile din panoul de setări. Butoanele de zoom permit ajustarea dimensiunii tastelor.

### Intrare tastatură iPadOS

Aplicația iPadOS suportă două metode de intrare de la tastatură:

**Tastatură flotantă pe ecran:** Atinge butonul **Keyboard** din bara de instrumente pentru a afișa o tastatură flotantă mutabilă cu layout stil Mac:

| Rând | Taste |
|---|---|
| **Sus** | Esc, F1–F12, Del |
| **Cifre** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Rând de bază** | Caps, a–l, ;, ', Enter |
| **Jos** | Shift, z–m, ,, ., /, Shift |
| **Modificatori** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Comutare modificatori:** Atinge Ctrl, Shift, Alt, Cmd sau Caps pentru a comuta pornit/oprit (evidențiat albastru)
- **Moduri tastatură:** Normal (tastare standard) și Game (antet pachet HID optimizat pentru intrare jocuri)
- **Mutare:** Prinde mânerul de tragere din antet pentru a repoziționa tastatura oriunde pe ecran

**Tastatură externă iPad:** Tastaturile fizice conectate la iPad (Bluetooth, Smart Connector, USB) sunt transmise direct către PC-ul țintă. Tastele modificatoare trimit evenimente apăsare/eliberare, deci combinații ca `Ctrl+C` sau `Alt+Tab` funcționează natural.

**Scurtături taste compuse:** Aplicația include o bibliotecă de scurtături comune accesibile din bara de instrumente, organizată pe categorii:

| Categorie | Exemple |
|---|---|
| **Navigare** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Editare** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **Sistem** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Aplicație** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (capturi ecran macOS) |

---

## 3. Setări video

### Afișare rezoluție

Bara de instrumente arată rezoluția de intrare și FPS-ul curent de la țintă. Rezoluția este determinată de ceea ce ținta transmite prin HDMI.

### Rezoluții suportate

| Rezoluție | Interval rată cadre |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Schimbarea rezoluției

1. Configurați rezoluția preferată în setările video

### Raport de aspect și scalare

| Mod | Comportament |
|------|----------|
| **Active Resolution** | Detectează automat zona video activă |
| **HID Resolution** | Folosește rezoluția de la hardware-ul plăcii de captură |
| **Custom** | Setează manual un raport (16:9, 4:3, 21:9, etc.) |

**Scalare:** Stretch (umple fereastra, poate distorsiona), Fit (letterboxing), Fill (poate tăia).

### Zoom

Mărește/micșorează, resetează la potrivire și derulează pentru panoramare când este mărit.

### Backend video (Qt)

| Backend | Platformă | Note |
|---------|----------|-------|
| **FFmpeg** | Toate | Recomandat, accelerare hardware |
| **GStreamer** | Linux | Flexibilitate pipeline |
| **Qt Multimedia** | Windows | Fallback simplu |

Comutați prin **Preferences > Video > Media Backend**. Reporniți după schimbare.

### Controale video Android

În aplicația Android, setările video se accesează prin panoul de setări (buton Menu ☰):

- **Video Format** — Selectați rezoluția (1920×1080, 1280×720, 640×480) și rata de cadre (30fps, 60fps). Reduceți rezoluția/rata de cadre dacă video-ul este sacadat.
- **Controls** — Glisoare în timp real pentru **brightness**, **contrast** și **hue**
- **Rotate/Flip** — Rotație 90° CW/CCW, inversare orizontal/vertical. Util când dispozitivul KVM este montat invers sau lateral

Setările persistă între sesiuni — le configurați o singură dată.

### Controale video iPadOS

Pe iPadOS, controalele video sunt accesibile din bara de instrumente de jos:

- **Resolution Switching** — Atinge butonul **Video** (arată rezoluția curentă) pentru a alege din: 2160p (4K), 1080p (implicit), 720p sau 480p. Rezoluție mai mică pentru performanță mai bună pe conexiuni lente.
- **Zoom Mode** — Atinge **Zoom** pentru a intra în modul zoom, apoi ciupire cu două degete pentru mărire. Un indicator de zoom arată nivelul curent (ex.: `2.5x`). Când este mărit, tragerea cu un deget face panoramare viewport. Atinge din nou Zoom pentru a ieși.
- **Fullscreen** — Atinge **Fullscreen** pentru a ascunde bara de instrumente și a extinde video-ul pe tot ecranul. Atinge săgeata din colțul stânga sus pentru a ieși.
- **Screen Rotation** — Atinge **Rotate** pentru a parcurge modurile de corecție orientare (Normal, 90° CW, 180°, 90° CCW). Util când dongle-ul KVM-Go este montat lateral sau invers. Rotația se aplică atât previzualizării live cât și capturilor salvate.

Când camera pornește, apare indicatorul de încărcare "Starting Camera...". Dacă nicio cameră nu este conectată dar permisiunile sunt acordate, se afișează o imagine ghid.

---

## 4. Audio de la țintă

Cipul de captură HDMI extrage audio din semnalul HDMI și îl prezintă ca intrare audio USB către gazdă.

### Activarea audio

1. Faceți clic pe iconița audio sau deschideți setările audio
2. Activați captura audio
3. Selectați dispozitivul de intrare corect (ex.: "OpenterfaceA")
4. Selectați dispozitivul de ieșire al gazdei

Audio este dezactivat implicit pe majoritatea platformelor.

### Control volum

- **Partea țintei:** Ajustați pe computerul țintă
- **Partea gazdei:** Folosiți mixerul audio al SO-ului gazdă pentru dispozitivul de captură

### Monitorizare audio iPadOS

Aplicația iPadOS vă permite să ascultați audio-ul PC-ului țintă prin difuzoarele sau căștile iPad:

- Atinge butonul **Audio** (icon difuzor) din bara de instrumente pentru a comuta monitorizarea
- **Stări icon:** difuzor tăiat gri = neautorizat, difuzor tăiat roșu = oprit, difuzor verde cu valuri = pornit
- La prima utilizare, aplicația solicită permisiune microfon
- Audio-ul se redă prin difuzoarele iPad sau căști/audio Bluetooth conectate
- **În timpul înregistrării:** audio-ul de monitorizare este temporar dezactivat pentru a preveni feedback-ul, dar audio-ul este în continuare capturat în fișierul de înregistrare

---

## 5. Captură ecran și înregistrare

### Captură ecran

Faceți clic pe iconița camerei din bara de instrumente. Imaginile se salvează în folderul media implicit al SO:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Folder capturi cameră (prin meniul Camera)

### Înregistrare

Faceți clic pe butonul de înregistrare pentru a porni/opri înregistrarea fluxului video și audio al țintei. Apare un cronometru cât timp înregistrarea este activă.

**Setări înregistrare:**
- Format ieșire (MP4, AVI, MOV, MKV)
- Bitrate video, codec audio
- Director ieșire

### Captură ecran și înregistrare Android

Pe Android, accesați prin panoul de setări:

- **Screen Capture** — Atingeți pentru a salva o instantanee a cadrului video curent în folderul media implicit al dispozitivului. Necesită **permisiune stocare**.
- **Record Video** — Atingeți pentru a porni/opri înregistrarea. Apare un indicator roșu de înregistrare cu cronometru sus. Video-ul se salvează în folderul media implicit al dispozitivului.

**Cazuri de utilizare:** înregistrarea procesului de boot al țintei, capturarea mesajelor de eroare, documentarea pașilor de configurare.

### Captură ecran și înregistrare iPadOS

**Capturi ecran:** Atingeți butonul **Screenshot** (icon cameră) din bara de instrumente. Aplicația capturează un cadru de înaltă rezoluție, corectează orientarea și salvează ca JPEG.

**Înregistrare video:** Atingeți butonul **Record** pentru a porni/opri. După oprire, aplicația afișează detaliile înregistrării (durată și dimensiune fișier).

| Setare | Valoare |
|---|---|
| **Video codec** | H.264 la 30 fps |
| **Resolution** | Corespunde dispozitivului de captură (de obicei 1920×1080) |
| **Audio codec** | AAC la 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Locații fișiere:**
- **App Documents:** `Documents/Recordings/` — navigați prin app Fișiere > Pe iPad-ul meu > Openterface KVM > Recordings
- **Photos App:** Dacă permisiunea Bibliotecă foto este acordată și activată în setări
- **File naming:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (capturi) sau `.mov` (înregistrări)

**Cazuri de utilizare:** înregistrarea procesului de boot al țintei, capturarea mesajelor de eroare, documentarea pașilor de configurare.

---

## 6. Indicatori de conexiune

| Indicator | Verde | Portocaliu | Gri |
|-----------|-------|--------|------|
| HDMI | Semnal detectat | Fără semnal | Necunoscut |
| Keyboard | Conectat | Negăsit | Necunoscut |
| Mouse | Conectat | Negăsit | Necunoscut |

### USB Switch

Comutatorul USB Switch arată dacă portul comutabil este direcționat către **Host** sau **Target**.

---

## 7. Prevenirea screensaver-ului

Activați **Prevent Screen Saver** (prin meniul Edit/Device sau bara de instrumente) pentru a trimite evenimente periodice care mențin ecranul țintei activ.

---

## 8. Mod ecran complet

Folosiți butonul standard de ecran complet pentru a umple ecranul cu zona video, ascunzând interfața.

---

## Pașii următori

- **[Funcții avansate →](03-advanced-features.md)** — EDID, firmware, macro-uri, scripturi, diagnosticare
- **[Depanare →](04-troubleshooting.md)** — Probleme comune și soluții
