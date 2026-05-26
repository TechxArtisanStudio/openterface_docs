---
title: "Tutorial KVM 03 — Funcții avansate"
description: "Public: Intermediar la Expert — funcții pentru utilizatori avansați și configurare Documentație Openterface: configurare, întrebări frecvente și depanare…"
---


# Tutorial KVM 03 — Funcții avansate

**Public:** Intermediar la Expert — funcții pentru utilizatori avansați și configurare

---

## 1. Sistem de preferințe

### Video

- **Rezoluție și rată de cadre** — Setări preferate de captură
- **Backend media** — FFmpeg, GStreamer (Linux) sau Qt Multimedia (Windows)
- **Accelerare hardware** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Raport de aspect și scalare** — Raport personalizat, Stretch/Fit/Fill

### Audio

- **Activat** — Comută captura audio de la țintă
- **Dispozitiv intrare/ieșire** — Selectează sursa și dispozitivul de redare

### Control țintă

- **Mod mouse** — Absolut, Relativ (HID), Relativ (Events)
- **Limitare evenimente mouse** — 30–1000 evenimente/secundă
- **Layout tastatură** — OS țintă și layout-uri regionale
- **Interval repetare taste** — Viteza de repetare pentru taste ținute
- **Ascundere automată cursor** — Ascunde cursorul gazdei peste zona video

### Jurnalizare

- **Nivel jurnal** — Debug, Info, Warning, Error
- **Jurnal în fișier** — `~/Documents/openterface.log` (macOS) sau cale configurată (Qt)
- **Jurnal serial** — Jurnal separat pentru comunicarea serială

---

## 2. Gestionare EDID

### Ce este EDID?

EDID (Extended Display Identification Data) reprezintă datele pe care dispozitivul KVM le trimite țintei pentru a descrie capabilitățile afișajului — rezoluții suportate, rate de reîmprospătare, informații producător. KVM-ul acționează ca un „monitor fals”, deci EDID determină ce rezoluții va emite ținta.

### Editarea numelui afișaj EDID

Puteți modifica numele afișajului pe care dispozitivul KVM îl raportează țintei. Acest nume apare în setările de afișare ale OS-ului țintă.

> **Notă:** În prezent este suportată doar editarea numelui afișajului. Editarea rezoluției și intrările personalizate de rezoluție nu sunt încă disponibile.

**Acces:** Settings > EDID Display Name Editor (macOS) sau Device > Update Display Settings (Qt)

### Cazuri de utilizare

- **Identificarea afișajului** în setările OS-ului țintă
- **Denumire personalizată** în configurații multi-monitor pentru a distinge afișajul KVM

---

## 3. Sistem de macro-uri (macOS)

Macro-urile sunt secvențe salvate de acțiuni de tastatură, declanșate din panoul de macro-uri al barei de instrumente.

### Format secvență taste

**Etichete modificator:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (mapează la Cmd/Win/Super în funcție de OS-ul țintă)

**Taste speciale:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Întârzieri:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Exemple

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### Generare asistată de AI

Butonul **Magic** din editorul de macro-uri generează macro-uri din limbaj natural. Descrieți ce doriți, iar AI produce secvența de taste.

### Verificare

Marcați macro-urile ca **verified** după testare. Doar macro-urile verificate sunt disponibile agentului AI pentru execuție autonomă.

---

## 4. Script Tool (Qt)

Un limbaj de scripting inspirat de AutoHotKey pentru automatizarea acțiunilor de tastatură și mouse pe țintă.

### Deschidere

Meniu: **Device > Script Tool**

### Comenzi

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Pauză execuție | `Sleep 1000` |
| `Send` | Trimite apăsări de taste | `Send Hello World` |
| `Click` | Clic mouse | `Click 100 200` |
| `SetCapsLockState` | Comută CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Captură ecran | `FullScreenCapture "/tmp/shot.png"` |

### Prefixe modificator

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Actualizări firmware

### Când să actualizați

- Funcții hardware noi
- Corecții de erori
- Îmbunătățiri de compatibilitate

### Proces de actualizare

1. Deschideți Firmware Update Tool (**Settings > Firmware Update Tool** pe macOS, **Device > Update Firmware** pe Qt)
2. Instrumentul verifică cea mai recentă versiune din rețea
3. Progresul este urmărit în timpul operației de scriere
4. **Nu deconectați dispozitivul în timpul actualizării**

### Recuperare

1. Păstrați dispozitivul alimentat
2. Închideți și redeschideți Firmware Update Tool, reîncercați
3. Folosiți Serial Reset Tool dacă dispozitivul nu răspunde

---

## 6. Serial Reset Tool

**Acces:** Settings > Serial Reset Tool (macOS) sau Device > Factory Reset HID Chip (Qt)

Utilizați când:
- Dispozitivul este într-o stare necunoscută după o actualizare firmware eșuată
- Cipul HID nu răspunde
- Pregătiți dispozitivul pentru revânzare

---

## 7. Diagnosticare (Qt)

Meniu: **Device > Device Diagnostics**

Rulează teste hardware secvențial:
1. Test conexiune serială
2. Stare USB țintă
3. Test resetare din fabrică
4. Test baudrate mare/mic
5. Test de stres (comenzi rapide, măsurare rată de succes)
6. Test plug & play (detectare deconectare/reconectare USB)

După rulare, exportați rezultatele prin **Support Email Dialog**.

---

## 8. Sistem AI Chat (macOS)

Asistent AI integrat care poate analiza ecranul țintei, sugera acțiuni și executa operații de tastatură/mouse.

### Moduri chat

| Mode | Description |
|------|-------------|
| **Interactive** | Puneți întrebări, primiți îndrumare |
| **Agentic** | AI planifică și execută autonom sarcini multi-pas |
| **Guide** | O instrucțiune pe rând, pas cu pas |
| **Planner** | Cereri complexe împărțite în planuri structurate |

### Configurare

Settings > AI Chat: endpoint API, cheie (stocată în Keychain), model, sistem țintă (macOS/Windows/Linux/etc.)

---

## 9. Control la distanță (VNC/RDP — macOS)

Comutați între modurile **Hardware KVM**, **VNC** și **RDP** prin **Control > Connection Protocol**.

| Scenario | Mode |
|----------|------|
| Țintă în BIOS/UEFI, fără rețea, la pornire, blocată | Hardware KVM |
| Utilizare desktop cu lățime de bandă mare, server Windows | VNC sau RDP |

---

## 10. Server TCP (Qt)

Server TCP integrat pentru control la distanță pe portul 12345.

### Comenzi

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Exemplu Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Securitate:** Fără autentificare, criptare sau limitare de rată. Activați doar pe rețele de încredere.

---

## Funcții specifice iPadOS

### Gestionare conexiune Bluetooth

Aplicația iPadOS se conectează la dongle-ul KVM-Go prin **Bluetooth Low Energy (BLE)** pentru intrare HID tastatură/mouse:

- **Auto-connect:** Activat implicit. La pornire, aplicația scanează 5 secunde și se conectează automat la dispozitivul `kvm*` cu cel mai puternic semnal.
- **Reconectare:** Dacă conexiunea se pierde, aplicația încearcă reconectarea de până la 3 ori cu o întârziere de 2 secunde.
- **Monitorizare semnal:** RSSI se actualizează la fiecare 2 secunde. Butonul BLE arată puterea semnalului (ex. `-45 dBm`) cu indicator de culoare: verde (-50 la 0 dBm), portocaliu (-70 la -50 dBm), roșu (sub -70 dBm).
- **Scanare dispozitive:** Doar dispozitivele al căror nume începe cu `kvm` (fără diferențiere majuscule/minuscule) apar în listă.
- **Control manual:** Deschideți ecranul BLE pentru scanare, conectare, deconectare sau dezactivare auto-connect.

### Suprapunere Info

Atingeți butonul **Info** pentru a afișa o suprapunere de stare a intrărilor în timp real în colțul din dreapta sus:

```
┌─ Stare intrări ────────┐
│ Mouse                  │
│ Mode: Absolute         │
│ Position: 512.0, 384.0 │
│ Drag Mode: Active      │
│ Scrolling: Inactive    │
│ Keyboard               │
│ Mode: Normal           │
│ Caps Lock: OFF         │
│ Modifiers: Ctrl, Shift │
└────────────────────────┘
```

Suprapunerea este transparentă la atingeri — nu blochează interacțiunea cu previzualizarea video.

### Corecție orientare ecran

Atingeți butonul **Rotate** pentru a parcurge modurile de corecție a orientării: Normal, 90° CW, 180°, 90° CCW. Corectează previzualizarea video când dongle-ul KVM-Go este montat într-o orientare nestandard. Rotația se aplică atât previzualizării live, cât și capturilor salvate.

### Timer inactivitate dezactivat

Aplicația menține ecranul iPad **activ** în timpul utilizării prin dezactivarea timerului de inactivitate, prevenind blocarea automată a iPad-ului în timp ce monitorizați PC-ul țintă.

### Sistem de jurnalizare

Aplicația include un `Logger` integrat cu filtrare pe categorii:

| Category | Covers |
|---|---|
| `bluetooth` | Scanare BLE, conexiune, transmisie date |
| `mouse` | Intrare mouse, detectare gesturi, schimbări de mod |
| `keyboard` | Evenimente taste, stare modificatori, taste compuse |
| `camera` | Înregistrare video, capturi ecran, fotografii |
| `ui` | Gestionare atingeri, recunoaștere gesturi, strat previzualizare |
| `general` | Ciclu de viață aplicație, informații generale |

Jurnalizarea poate fi ajustată în sursa aplicației pentru a reduce zgomotul din consolă.

---

## Pașii următori

- **[Depanare →](04-troubleshooting.md)** — Probleme comune și soluții

---

## Funcții specifice Android

### Panou setări

Panoul de setări al aplicației Android (buton meniu ☰) conține toate opțiunile de configurare:

| Setting | Description |
|---|---|
| **Device** | Afișează dispozitivele USB conectate și starea. Atingeți pentru selectare sau re-scanare. |
| **Disconnect Device** | Eliberează în siguranță toate conexiunile USB. Folosiți înainte de deconectare. |
| **Baudrate** | Viteză comunicare serială: **115200** (implicit) sau **9600** (mai lent, pentru probleme). |
| **Controls** | Glisoare luminozitate, contrast și nuanță cameră. |
| **Video Format** | Selector rezoluție și rată de cadre. |
| **Rotate/Flip** | Rotație 90° CW/CCW, oglindire orizontală/verticală. |
| **Screen Capture / Record Video** | Captură ecran și înregistrare video. |
| **Relative / Absolute / Drag** | Comută modul de control mouse. |
| **About Device** | Afișează versiunea Android și informații despre versiunea aplicației. |

### Persistența setărilor

Aplicația Android își amintește preferințele între sesiuni:

| Setting | Persisted? |
|---|---|
| Mod control mouse | Da |
| Format video (rezoluție, FPS) | Da |
| Parametri cameră (luminozitate, contrast, nuanță) | Da |
| Layout tastatură (US, JP, DE) | Da |
| Baudrate | Da |
| Istoric conexiuni dispozitiv | Da |

Când redeschideți aplicația, restaurează ultimele setări. Pentru resetare completă: Setări Android → Aplicații → Openterface → Stocare → **Șterge date**.

### Deconectare sigură

Înainte de a deconecta dispozitivul KVM pe Android:

1. Deschideți panoul de setări
2. Atingeți **Disconnect Device** (afișat în roșu)
3. Așteptați ca aplicația să elibereze conexiunea USB
4. Deconectați cablurile

Aceasta previne coruperea datelor și asigură eliberarea corectă a tastaturii/mouse-ului de către computerul țintă.

### Sfaturi de performanță Android

- **Reduceți rezoluția** — 640×480 este mult mai ușor decât 1920×1080
- **Reduceți rata de cadre** — 30fps folosește mai puțină lățime de bandă decât 60fps
- **Închideți alte aplicații** — eliberați memoria telefonului
- **Folosiți un adaptor USB OTG de calitate** — adaptoarele ieftine pot limita conexiunea
- Echipa de dezvoltare lucrează la reducerea latenței în pipeline-ul camerei
