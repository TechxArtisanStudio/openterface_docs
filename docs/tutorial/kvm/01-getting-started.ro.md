# Tutorial KVM 01 — Primii pași

**Public:** Începători — utilizatori care folosesc pentru prima dată dispozitive KVM Openterface

---

## 1. Ce este KVM-over-USB?

Un dispozitiv KVM (Keyboard, Video, Mouse) se află între **computerul gazdă** (stația dvs. de lucru) și un **computer țintă** (server, mini PC, dispozitiv embedded). Acesta:

- **Captează** ieșirea video HDMI a țintei (și audio, dacă este disponibil)
- **Retransmite** intrarea de la tastatură și mouse prin emulare HID
- Totul printr-un singur cablu USB — fără rețea necesară

Acesta este aspectul care diferențiază dispozitivele KVM de software-ul de desktop la distanță: puteți controla ținta chiar și în **BIOS/UEFI**, la pornire sau când sistemul de operare s-a blocat.

### Dispozitive KVM Openterface

| Dispozitiv | Factor de formă | Caracteristică principală |
|--------|------------|-------------|
| **Mini-KVM** | Dongle USB compact | KVM-over-USB pentru birou |
| **KVM-Go** | Portabil, stil trusă de unelte | KVM mobil cu cabluri integrate, **suport iPadOS prin BLE** |
| **uConsole KVM Extension** | Modul intern | KVM integrat pentru ClockworkPi uConsole |

> Căutați **KeyMod** (doar emulator de tastatură și mouse, fără video)? Consultați [Tutorialul KeyMod](../../keymod/index.md).

---

## 2. Ce aveți nevoie

### Hardware

- **Dispozitiv KVM Openterface** — Mini-KVM, KVM-Go sau uConsole KVM Extension
- **Computer gazdă** — Cu macOS, Windows, Linux sau Android
- **Computer țintă** — Orice computer cu ieșire HDMI
- **Cablu HDMI** — De la ieșirea HDMI a țintei la intrarea HDMI a KVM
- **Cablu USB** — De la KVM la computerul gazdă (furnizează alimentare și date)

### Opțional

- **Cablu comutator USB** — De la KVM la portul USB al dispozitivului țintă (pentru emularea tastaturii/mouse-ului)
- **Tastatură și mouse** — Conectate la portul USB comutabil al KVM pentru a controla gazda sau ținta

---

## 3. Instalare

### Aplicație gazdă

| Platformă | Aplicație | Descărcare |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) sau [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) sau [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **doar KVM-Go** |

### Cerințe Android

Aplicația Android necesită:

- **Android 8.0 (API 26)** sau o versiune ulterioară
- **Suport USB OTG** — majoritatea telefoanelor moderne îl suportă (Samsung, Google Pixel, OnePlus). Verificați conectând un stick USB cu un adaptor OTG
- **Cablu sau adaptor USB OTG** pentru a conecta dispozitivul KVM la telefon

### Cerințe iPadOS

Aplicația iPadOS necesită:

- **iPadOS 17.0** sau o versiune ulterioară
- **Dispozitiv KVM-Go** — iPadOS se conectează la dongle-ul KVM-Go prin **Bluetooth Low Energy (BLE)** pentru intrarea de la tastatură/mouse și la placa de captură USB pentru video
- **Permisiuni cameră și microfon** — necesare pentru previzualizarea video și monitorizarea audio de la placa de captură
- **Permisiune Bluetooth** — necesară pentru a descoperi și conecta dongle-ul KVM-Go pentru intrarea HID
- **Permisiune Bibliotecă foto** (opțional) — pentru a salva capturi de ecran și înregistrări în aplicația Fotografii

### Permisiuni macOS

La prima lansare, macOS va solicita:

| Permisiune | Motiv |
|-----------|-----|
| **Cameră** | Captează video de la cipul de captură HDMI |
| **Microfon** | Captează audio de la țintă (dacă este activat) |
| **Accesibilitate** | Necesară pentru controlul mouse-ului HID în modul relativ |

### Permisiuni Linux

- Adăugați utilizatorul la grupurile `dialout` și `video`: `sudo usermod -a -G dialout,video $USER`
- Instalați regulile udev pentru accesul la dispozitiv
- **Conflict BrlTTY:** eliminați `brltty` sau adăugați cipul serial pe lista neagră — consultați [Depanare](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- Instalatorul include driverul serial CH340. Pentru build-urile portabile, instalați-l separat.

---

## 4. Conectarea hardware-ului

┌─────────────┐                        ┌──────────────────┐
│   ȚINTĂ     │─── Cablu HDMI ───────▶│  Openterface     │
│  COMPUTER   │                        │  Dispozitiv KVM  │
└─────────────┘                        │                  │
                                       │  ◄── Cablu USB ──│── Cablu comutator USB ──▶ Port USB țintă
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │ COMPUTER GAZDĂ   │
                                       │  (această app)   │
                                       └──────────────────┘
1. Conectați **ieșirea HDMI** a țintei la **intrarea HDMI** a KVM
2. Conectați **USB**-ul KVM la un **port USB al computerului gazdă**
3. (Opțional) Conectați cablul comutator USB de la KVM la portul USB al țintei
4. (Opțional) Conectați tastatura/mouse-ul la portul USB comutabil al KVM
5. **Porniți** dispozitivul țintă

### Detectarea dispozitivului

KVM-ul este enumerat ca mai multe dispozitive USB:
- **Captură video** (MS2109/MS2109S/MS2130S) — apare ca webcam
- **Serial** (CH9329 sau CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — utilizat pentru operațiuni firmware

### Conectare prin telefon Android

Când utilizați aplicația Android, lanțul de conexiune folosește USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC țintă    │               │   Dispozitiv KVM  │
│  (ecran)     │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Telefon Android │
                               │  (Openterface)   │
                               └──────────────────┘
```

Ordinea conexiunii pentru Android:

1. **HDMI:** conectați ieșirea HDMI a țintei la **intrarea** HDMI a KVM
2. **USB (țintă):** conectați portul USB al țintei la portul USB al KVM — transportă semnalele mouse/tastatură
3. **USB OTG (telefon):** conectați KVM la telefonul Android prin cablu/adaptor USB OTG
4. **Alimentare:** porniți dispozitivul KVM (dacă are intrare de alimentare separată) și computerul țintă

Când conexiunea reușește, previzualizarea video trece de la placeholder la ecranul live al țintei, iar atingerea ecranului telefonului mută cursorul pe țintă.

### Conectare prin iPadOS

Aplicația iPadOS folosește un model de conexiune diferit: **BLE pentru intrare** și **captură USB pentru video**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  PC țintă    │               │                   │
│  (ecran)     │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (video)
                              │   BLE (FFF2)      │ (tastatură/mouse)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Ordinea conexiunii pentru iPadOS:

1. **Hardware:** conectați dongle-ul KVM-Go la portul USB al PC-ului țintă și conectați intrarea HDMI
2. **Porniți** computerul țintă
3. **Deschideți aplicația** pe iPad și acordați permisiunile pentru cameră, microfon și Bluetooth
4. **Atingeți butonul BLE** din bara de instrumente — aplicația scanează dispozitivele numite `kvm*`
5. **Atingeți Conectare** lângă dispozitivul dvs. KVM-Go — butonul devine verde cu puterea semnalului RSSI
6. **Verificați:** previzualizarea video arată ecranul țintei, atingerea trimite clicuri, tastarea trimite apăsări de taste

> **Notă:** Aplicația iPadOS funcționează doar cu **KVM-Go**. Mini-KVM și uConsole KVM Extension nu au suport BLE.

---

## 5. Prima lansare

### Fereastra principală

```
┌─────────────────────────────────────────────────────────┐
│  Bară meniu / Bară instrumente                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              ZONĂ AFIȘARE VIDEO                         │
│         (afișează ecranul dispozitivului țintă)         │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Bară stare │ Port │ Taste │ Mouse │ Rezoluție         │
└─────────────────────────────────────────────────────────┘
```

### Permisiuni Android

La prima lansare, aplicația Android solicită:

| Permisiune | Motiv | Ce se întâmplă dacă este refuzată |
|---|---|---|
| **USB Host** | Comunicarea cu hardware-ul Openterface | Aplicația nu poate detecta dispozitivul KVM |
| **Cameră** | Primirea video de la cipul de captură HDMI | Fără previzualizare video |
| **Stocare** | Salvarea capturilor de ecran și înregistrărilor | Capturile nu pot fi salvate |

Acordați toate permisiunile pentru funcționalitate completă. Apare și un dialog de permisiune USB de sistem când dispozitivul KVM este detectat — atingeți **Permite**.

### Permisiuni iPadOS

La prima lansare, aplicația iPadOS solicită:

| Permisiune | Motiv | Ce se întâmplă dacă este refuzată |
|---|---|---|
| **Cameră** | Primirea video de la placa de captură HDMI | Fără previzualizare video |
| **Microfon** | Monitorizarea audio a PC-ului țintă prin difuzoarele iPad | Fără monitorizare audio |
| **Bluetooth** | Descoperirea și conectarea KVM-Go pentru intrarea HID | Nu se poate trimite intrare tastatură/mouse |
| **Bibliotecă foto** | Salvarea capturilor de ecran și înregistrărilor | Capturile se salvează totuși în folderul Documente al aplicației |

Dacă ați refuzat din greșeală o permisiune, mergeți la **Setări > Confidențialitate și securitate** pentru a o reactiva.

### Verificarea conexiunii

- **Indicator HDMI:** verde = semnal detectat, portocaliu = fără semnal, gri = necunoscut
- **Indicator tastatură:** verde = conectat, portocaliu = negăsit, gri = necunoscut
- **Indicator mouse:** verde = conectat, portocaliu = negăsit, gri = necunoscut
- **Port serial:** ar trebui să afișeze un nume de port și baud rate (9600 sau 115200)

Dacă indicatorii arată portocaliu sau gri, consultați [Depanare](04-troubleshooting.md).

---

## 6. Control KVM de bază

### Moduri mouse

| Mod | Descriere | Cel mai potrivit pentru |
|------|-------------|----------|
| **Absolut** (implicit) | Cursorul gazdei se mapează direct pe ecranul țintei | Utilizare generală, navigare GUI |
| **Relativ (HID)** | Mișcările mouse-ului sunt trimise ca delta prin HID | Gaming, interacțiune rapidă |

Comutați prin butonul din bara de instrumente sau **Control > Mod mouse**.

### Intrare tastatură

Toate apăsările de taste sunt redirecționate către țintă cât timp fereastra aplicației este focalizată:
- Taste standard, taste funcție, modificatori
- Taste speciale: Ctrl+Alt+Del, Print Screen
- **Lipire în țintă:** trimite textul din clipboard ca apăsări de taste emulate

### Comutare USB

Comutați portul USB comutabil între:
- **Gazdă** — tastatura/mouse-ul controlează computerul gazdă
- **Țintă** — tastatura/mouse-ul controlează computerul țintă

---

## 7. Pașii următori

- **[Operații de bază →](02-basic-operations.md)** — Mouse, tastatură, video, audio, înregistrare
- **[Funcții avansate →](03-advanced-features.md)** — EDID, firmware, macrocomenzi, scripturi
- **[Depanare →](04-troubleshooting.md)** — Probleme comune și soluții
