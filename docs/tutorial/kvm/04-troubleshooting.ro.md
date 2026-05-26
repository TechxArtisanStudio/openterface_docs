---
title: "Tutorial KVM 04 — Depanare"
description: "Probleme frecvente și soluții pentru dispozitivele Openterface KVM. Documentație Openterface: configurare, întrebări frecvente și depanare KVM-over-USB."
---


# Tutorial KVM 04 — Depanare

Probleme frecvente și soluții pentru dispozitivele Openterface KVM.

---

## Dispozitiv nedetectat

### Simptome
- „No devices found” în meniul dispozitivului
- Indicatorii tastaturii și mouse-ului arată portocaliu sau gri
- Portul serial afișează „N/A”

### Diagnostic

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Așteptat: `534d:2109` (captură HDMI) și `1a86:7523` sau `1a86:fe0c` (serial).

**macOS:** Apple Menu > About This Mac > System Report > Hardware > USB — căutați Openterface.

**Windows:** Device Manager > „Universal Serial Bus devices” și „Ports (COM & LPT)” — CH340 ar trebui să apară ca „USB-SERIAL CH340 (COMx)”.

### Soluții

| Problemă | Remediere |
|---------|-----|
| Dispozitiv absent din lsusb/System Report | Încercați alt cablu/port USB. Necesită USB 2.0+ |
| Dispozitiv vizibil, dar fără noduri | Verificați regulile udev (Linux) sau reinstalați driverele (Windows) |
| Permisiune refuzată | Adăugați utilizatorul la grupurile `dialout` și `video` (Linux) |
| Detectat apoi dispare | `brltty` preia portul serial (Linux) — vezi mai jos |

---

## Conflict BrlTTY (Linux) {#brltty-conflict-linux}

**Cea mai frecventă cauză a eșecului tastaturii/mouse-ului pe Linux.**

Serviciul `brltty` (terminal Braille) preia dispozitivele USB serial, inclusiv cipul CH9329/CH32V208.

### Remediere
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Fără video / ecran negru

### Pași

1. **Verificați cablul HDMI** conectat ferm la ambele capete
2. **Verificați dispozitivul țintă** — transmite HDMI (testați cu un monitor obișnuit)
3. **Încercați un alt cablu HDMI**
4. **Reconectați dispozitivul** — aplicația gestionează evenimentele hot-plug
5. **Verificați detectarea chipset-ului video:** Suportate: MS2109, MS2109S, MS2130S

### Selectarea backend-ului (Qt)

Dacă un backend afișează ecran negru, încercați altul prin **Preferences > Video > Media Backend**:
- **FFmpeg** — Cel mai fiabil (recomandat)
- **GStreamer** — Doar Linux
- **Qt Multimedia** — Fallback Windows

### Probleme GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Încercați un alt sink:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Nepotrivire EDID

Dacă ținta nu recunoaște EDID-ul, poate să nu emită o rezoluție compatibilă. Schimbați rezoluția de ieșire a țintei sau editați EDID-ul din setările de afișare ale aplicației.

---

## Tastatura/mouse-ul nu răspunde

### Pași

1. **Verificați comutatorul USB** — setat pe **Target**, nu Host
2. **Verificați starea portului serial** — ar trebui să afișeze un nume de port, nu „N/A”
3. **Încercați schimbarea baud rate-ului** — 9600 sau 115200
4. **Verificați chipset-ul de control** — Suportate: CH9329, CH32V208
5. **Verificați monitorizarea CTS** — Aplicația monitorizează liniile Clear-To-Send pentru evenimente HID

### Probleme specifice mouse-ului

- **Mod relativ pe macOS:** Necesită permisiune de accesibilitate. Verificați **System Settings > Privacy & Security > Accessibility**
- **Mod absolut:** Verificați că raportul de aspect corespunde afișajului țintei
- **Întârziere mouse:** Încercați preset de performanță mai mare sau creșteți baudrate-ul
- **Conflicte port serial (Linux):** Închideți alte aplicații care folosesc portul: `sudo lsof /dev/ttyUSB0`

---

## Audio nu se redă

### Pași

1. **Activați audio** prin pictograma audio > Enable Audio
2. **Verificați permisiunea microfonului** — System Settings > Privacy & Security > Microphone (macOS)
3. **Selectați dispozitivul de intrare corect** — „OpenterfaceA” sau numele dispozitivului de captură
4. **Selectați dispozitivul de ieșire corect** — difuzoarele sau căștile
5. **Verificați ieșirea audio HDMI a țintei** — ținta este configurată să trimită audio prin HDMI?

---

## Probleme driver USB Serial

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Dacă e necesar, instalați driverul WCH CH34x de pe [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Activați în **System Settings > General > Login Items & Extensions > Driver Extensions**.

### Windows

Dacă cipul serial nu apare în Device Manager, instalați driverul CH340/CH341. Instalatorul îl include de obicei; pentru build-uri portabile, descărcați separat.

### Linux

Driverul CH340 (modulul `ch341`) este inclus în kernel:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Actualizarea firmware eșuează

### Stabilitate USB

- Nu deconectați în timpul flash-ului
- Nu suspendați computerul gazdă
- Folosiți un port USB direct (evitați hub-urile)

### Recuperare

1. Ciclu de alimentare: deconectați USB, așteptați 10 secunde, reconectați
2. Reintrare în mod ISP (unele dispozitive: țineți apăsat butonul la pornire)
3. Folosiți Serial Reset Tool pentru re-flash bootloader
4. Contactați suportul dacă dispozitivul este brick-uit

---

## Probleme de performanță

### Utilizare ridicată CPU

1. **Activați accelerarea hardware** — Preferences > Video > Hardware Acceleration (VAAPI, V4L2-M2M)
2. **Reduceți rezoluția** — 720p folosește semnificativ mai puțin CPU decât 1080p
3. **Reduceți rata de cadre** — 15fps reduce la jumătate sarcina de decodare
4. **Schimbați backend-ul** — FFmpeg cu accelerare HW folosește de obicei mai puțin CPU decât GStreamer

### Pierderi de cadre

Verificați contorul FPS din bara de stare. Dacă FPS-ul real este sub țintă, pipeline-ul este blocat. Activați drop de cadre în procesorul de cadre FFmpeg pentru a prioritiza redarea fluidă.

---

## Jurnalizare și diagnostic

### Activarea jurnalizării

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > setați nivelul de log și calea fișierului

### Consolă serial (Qt)

Deschideți prin **Device > Serial Port Debug** — afișează mesaje protocol serial în timp real cu filtre pentru Keyboard, Mouse, HID, Chip Info.

---

## Probleme specifice platformei

### Linux: plugin platformă Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: probleme video Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: driver CH340

Dacă instalarea driverului eșuează: dezactivați temporar Driver Signature Enforcement, apoi instalați manual prin Device Manager.

### Raspberry Pi: video sacadat

Pe Pi 3 sau Pi 4 cu memorie redusă:
1. Reduceți rezoluția la 720p
2. Folosiți backend FFmpeg (nu GStreamer)
3. Folosiți 9600 baud pentru stabilitate serial

---

## Probleme specifice Android

### Dispozitiv nedetectat

**Simptom:** Previzualizarea video afișează un placeholder, nu ecranul țintei.

1. **Verificați conexiunea USB OTG** — deconectați și reconectați cablul
2. **Verificați suportul OTG** — conectați un stick USB pentru a confirma că telefonul suportă OTG
3. **Verificați dispozitivul KVM** — este pornit? Sunt aprinse indicatorii?
4. **Încercați un alt cablu** — unele adaptoare OTG sunt defecte
5. **Reporniți aplicația** — închideți complet (glisați din aplicațiile recente) și redeschideți
6. **Verificați permisiunea USB** — dacă un dialog de sistem a cerut acces USB, apăsați **Allow**

### Fără video

**Simptom:** Dispozitiv detectat, dar ecranul este negru sau înghețat.

1. **Verificați cablul HDMI** — HDMI-ul PC-ului țintă este conectat ferm la intrarea HDMI KVM?
2. **Verificați ieșirea țintei** — PC-ul țintă afișează ceva?
3. **Încercați o rezoluție mai mică** — deschideți setările → **Video Format** → alegeți o rezoluție mai mică
4. **Verificați permisiunea camerei** — Android Settings → Apps → Openterface → Permissions → asigurați-vă că Camera este permisă
5. **Reporniți aplicația**

### Mouse-ul nu răspunde

**Simptom:** Video funcționează, dar atingerea ecranului nu face nimic pe țintă.

1. **Verificați conexiunea USB pentru HID** — deschideți setările → **Device** și confirmați că dispozitivul este activ
2. **Încercați un alt mod mouse** — comutați între Absolute și Relative
3. **Deconectați și reconectați** — folosiți butonul roșu **Disconnect Device**, apoi reconectați
4. **Verificați PC-ul țintă** — recunoaște tastatură/mouse USB? Deconectați și reconectați cablul USB pe partea țintei

### Tastatura nu trimite taste

**Simptom:** Mouse-ul funcționează, dar tastarea nu face nimic.

1. **Asigurați-vă că tastatura este deschisă** — apăsați butonul tastaturii
2. **Verificați conexiunea serial** — deschideți setările → **Device** și confirmați că este activă
3. **Verificați baudrate-ul** — deschideți setările → **Baudrate** și asigurați-vă că corespunde dispozitivului (115200 este implicit)
4. **Verificați layout-ul tastaturii** — layout corect selectat (US, JP, DE)

### Aplicația se blochează sau îngheață

1. **Închideți și reporniți** aplicația
2. **Reduceți rezoluția și rata de cadre video** — setări ridicate pot suprasolicita dispozitivele cu memorie limitată
3. **Verificați spațiul de stocare disponibil** — stocare redusă poate cauza instabilitate
4. **Actualizați aplicația** — verificați o versiune mai nouă pe Google Play sau GitHub Releases

### Capturile de ecran sau înregistrările nu se salvează

1. **Verificați permisiunea Storage** — Android Settings → Apps → Openterface → Permissions → Storage
2. **Verificați spațiul de stocare disponibil** pe dispozitiv
3. Înregistrările și capturile de ecran se salvează în folderul media implicit al dispozitivului

### Colectarea jurnalelor (Android)

Dacă depanarea standard nu ajută, colectați jurnale pentru maintaineri:

```bash
adb logcat | grep -i openterface > openterface.log
```

Includeți acest fișier la deschiderea unui issue GitHub.

---

## Probleme specifice iPadOS

> **Notă:** iPadOS este suportat doar pe **KVM-Go**. Dacă folosiți Mini-KVM sau uConsole KVM Extension, aplicația iPadOS nu va funcționa.

### Bluetooth nu se conectează

**Simptom:** Butonul BLE nu devine verde sau nu apar dispozitive în lista de scanare.

1. **Verificați că Bluetooth este activat** pe iPad — Settings > Bluetooth
2. **Asigurați-vă că KVM-Go este pornit** — dongle-ul ar trebui conectat la portul USB al PC-ului țintă
3. **Apropiați iPad-ul** de dongle-ul KVM-Go — raza BLE este de obicei până la 10 metri
4. **Verificați permisiunea Bluetooth pe iPad** — Settings > Privacy & Security > Bluetooth > asigurați-vă că Openterface este permis
5. **Apăsați Refresh** în ecranul BLE pentru a reporni scanarea
6. **Verificați permisiunea Bluetooth a aplicației Openterface** — dacă a fost refuzată la prima lansare, reactivați în Settings

### Fără previzualizare video

**Simptom:** BLE este conectat, dar ecranul este negru sau afișează o imagine ghid.

1. **Verificați conexiunea HDMI** — ieșirea HDMI a PC-ului țintă este conectată ferm la intrarea HDMI KVM-Go?
2. **Verificați ieșirea țintei** — PC-ul țintă afișează ceva?
3. **Încercați o rezoluție mai mică** — apăsați butonul Video și selectați o rezoluție mai mică (720p sau 480p)
4. **Verificați permisiunea camerei** — Settings > Privacy & Security > Camera > asigurați-vă că Openterface este permis
5. **Reporniți aplicația** — glisați în sus din aplicațiile recente și redeschideți

### Mouse/atingere nu răspunde

**Simptom:** Video funcționează, dar atingerea ecranului nu face nimic pe țintă.

1. **Verificați conexiunea BLE** — butonul BLE ar trebui să fie verde cu o valoare RSSI
2. **Încercați un alt mod mouse** — comutați între Pan Mode și iPencil Mode
3. **Deconectați și reconectați** — deschideți ecranul BLE, apăsați Disconnect, apoi Connect din nou
4. **Verificați PC-ul țintă** — recunoaște KVM-Go ca tastatură/mouse USB?

### Tastatura nu trimite taste

**Simptom:** Mouse-ul funcționează, dar tastarea nu face nimic.

1. **Asigurați-vă că tastatura flotantă este deschisă** — apăsați butonul Keyboard
2. **Verificați conexiunea BLE** — intrarea merge prin Bluetooth, nu USB
3. **Verificați modul tastaturii** — încercați să comutați între Normal și Game mode
4. **Tastatură externă:** dacă folosiți o tastatură fizică iPad, verificați că iPadOS direcționează evenimentele de taste către aplicație

### Audio nu se redă

**Simptom:** Video funcționează, dar nu auziți PC-ul țintă prin iPad.

1. **Verificați butonul Audio** — ar trebui să afișeze o pictogramă verde de difuzor
2. **Verificați permisiunea microfonului** — Settings > Privacy & Security > Microphone > asigurați-vă că Openterface este permis
3. **Verificați volumul iPad-ului** — asigurați-vă că iPad-ul nu este pe mute sau la volum minim
4. **Verificați ieșirea audio a țintei** — PC-ul țintă este configurat să trimită audio prin HDMI?

### Aplicația se blochează sau îngheață

1. **Închideți și reporniți** aplicația
2. **Reduceți rezoluția video** — rezoluție ridicată poate solicita iPad-urile mai vechi
3. **Verificați spațiul de stocare disponibil** — stocare redusă poate cauza instabilitate
4. **Actualizați aplicația** — verificați App Store pentru o versiune mai nouă

### Capturile de ecran sau înregistrările nu se salvează

1. **Verificați permisiunea Photo Library** — Settings > Privacy & Security > Photos > asigurați-vă că Openterface este permis
2. **Verificați spațiul de stocare disponibil** pe iPad
3. **Răsfoiți prin aplicația Files** — înregistrările se salvează în `Documents/Recordings/` chiar și fără acces Photo Library

---

## Resetare din fabrică

1. Folosiți Serial Reset Tool din Settings (macOS) sau meniul Device (Qt)
2. Resetează cipul HID la valorile implicite din fabrică
3. Reconectați dispozitivul după reset

## Recuperarea conexiunii

Aplicațiile gestionează recuperarea automată pentru:
- Deconectare/reconectare dispozitiv (hot-plug pentru USB, reconectare BLE pentru iPadOS)
- Timeout-uri de comunicare
- Fallback-uri chipset (MS2109 → MS2109S → MS2130S)
- Recuperare port serial
- Reconectare automată BLE iPadOS (până la 3 încercări cu întârziere de 2 secunde)

## Trimiterea rapoartelor de defecte

1. Activați jurnalizarea în fișier
2. Reproduceți problema
3. Trimiteți prin [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) sau e-mail la info@techxartisan.com
