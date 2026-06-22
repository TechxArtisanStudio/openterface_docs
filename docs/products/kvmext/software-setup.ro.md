---
title: "Configurare Software | Extension Module v2"
description: "Instalați și configurați aplicația gazdă Openterface pe uConsole pentru KVM Extension Module v2 — captură HDMI, USB HID, comutare card SD și partajare USB."
keywords: "instalare aplicație Openterface, configurare software uConsole, extensie KVM v2, openterfaceqt"
---

# **Configurare Software** | Extension Module v2

## Prezentare generală a instalării

Aplicația gazdă Openterface permite uConsole-ului tău să funcționeze ca o interfață KVM cu captură HDMI, control USB HID, **comutare card SD** și **partajare port USB** între gazdă și dispozitivul țintă.

!!! note "Cerințe"
    - **uConsole (gazdă)**: Este necesară aplicația Openterface QT
    - **Dispozitiv țintă**: Nu este necesară nicio aplicație — Windows, macOS, Linux, Android, iOS sunt suportate pentru KVM
    - **Video**: Cablu HDMI standard; convertoarele active suportă VGA, DP și alte formate
    - **Backend recomandat**: **GStreamer** pentru cele mai bune performanțe GPU pe arm64 (Kali Linux poate avea suport limitat pentru GStreamer)

## Metode de instalare

### **Opțiunea 1: GitHub Releases (recomandat pentru arm64)**

1. Vizitează [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Descarcă cel mai recent `.deb` pentru **arm64** (de ex. `openterfaceqt_*_arm64.deb`).
3. Instalează:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Opțiunea 2: Flatpak**

Urmează [Ghidul de Instalare Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Opțiunea 3: Repository comunitar (ClockworkPi Bookworm)**

Menținut de Rex pentru imaginile ClockworkPi:

1. **Adaugă repository-ul**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Instalează**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Note despre repository"
    Comenzile necesită `sudo`. Repository-ul vizează pachete arm64 Bookworm — verifică compatibilitatea cu sistemul de operare al uConsole-ului tău înainte de instalare.

## Informații importante

!!! tip "Alimentare și configurare inițială"
    - Menține uConsole-ul încărcat sau conectat la o sursă de alimentare stabilă — bateria descărcată poate cauza probleme de conexiune.
    - Dacă controlul tastaturii/mouse-ului eșuează la prima încercare:
        1. Oprește complet uConsole-ul.
        2. Așteaptă cel puțin 10 secunde.
        3. Pornește și reîncearcă.

!!! tip "Rata de baud pentru comunicația serială"
    Setează rata de baud la **9600** pentru utilizare serială — uConsole-ul ar putea să nu susțină în mod fiabil 115200.

## Utilizare

### **Pornirea unei sesiuni KVM**

1. Lansează Openterface QT pe uConsole-ul tău.
2. Aplicația detectează automat Extension Module v2.
3. Conectează dispozitivul țintă prin HDMI și USB.
4. Folosește tastatura și trackball-ul uConsole-ului pentru a controla dispozitivul țintă.

### **Funcții de control**

- **Tastatură**: Emulare completă, inclusiv taste multimedia
- **Mouse**: Poziționare absolută și relativă
- **Audio**: Trecere audio HDMI către difuzoarele uConsole-ului
- **Transfer de text**: Lipește nume de utilizator, parole și fragmente de text ca taste simulate
- **Comutare USB**: Partajează stocarea USB între uConsole și dispozitivul țintă prin aplicația gazdă — vezi [Conectare la dispozitivul țintă](/products/kvmext/connect-to-target/)
- **Comutare card SD**: Montează cardul SD pe gazdă sau pe dispozitivul țintă prin aplicația gazdă — vezi [Ghid Card SD](/products/kvmext/sd-card/)

### **Depanarea instalării software**

Dacă aplicația este greu de instalat sau mouse-ul/tastatura nu funcționează:

- Confirmă că ai instalat versiunea **arm64** pe uConsole-ul tău CM4/modul
- Alătură-te [Discord](https://openterface.com/discord) pentru ajutor în timp real
- Raportează probleme pe [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Documentație asociată

- [Conectare la dispozitivul țintă](/products/kvmext/connect-to-target/)
- [Ghid Card SD](/products/kvmext/sd-card/)
- [Întrebări Frecvente](/products/kvmext/faq/)
