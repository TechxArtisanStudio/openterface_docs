---
title: "Software-installatie | Extension Module v2"
description: "Installeer en configureer de Openterface host-app op uw uConsole voor de KVM Extension Module v2 — HDMI-capture, USB HID, SD-kaartwisseling en USB-delen."
keywords: "Openterface app-installatie, uConsole software-installatie, KVM extension v2, openterfaceqt"
---

# **Software-installatie** | Extension Module v2

## Installatieoverzicht

De Openterface host-app stelt uw uConsole in staat om te functioneren als een KVM-interface met HDMI-capture, USB HID-bediening, **SD-kaartwisseling** en **USB-poortdeling** tussen host en doelapparaat.

!!! note "Vereisten"
    - **uConsole (host)**: Openterface QT-app vereist
    - **Doelapparaat**: Geen app nodig — Windows, macOS, Linux, Android, iOS worden ondersteund voor KVM
    - **Video**: Standaard HDMI-kabel; actieve converters ondersteunen VGA, DP en andere formaten
    - **Aanbevolen backend**: **GStreamer** voor de beste arm64 GPU-prestaties (Kali Linux heeft mogelijk beperkte GStreamer-ondersteuning)

## Installatiemethoden

### **Optie 1: GitHub Releases (aanbevolen voor arm64)**

1. Ga naar [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Download de nieuwste `.deb` voor **arm64** (bijv. `openterfaceqt_*_arm64.deb`).
3. Installeren:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Optie 2: Flatpak**

Volg de [Flatpak-installatiehandleiding](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Optie 3: Community-repository (ClockworkPi Bookworm)**

Onderhouden door Rex voor ClockworkPi-images:

1. **Repository toevoegen**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Installeren**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Repository-opmerkingen"
    Opdrachten vereisen `sudo`. De repository is gericht op arm64 Bookworm-pakketten — verifieer de compatibiliteit met uw uConsole-besturingssysteem voordat u gaat installeren.

## Belangrijke aandachtspunten

!!! tip "Voeding & eerste installatie"
    - Houd de uConsole opgeladen of aangesloten op een stabiele stroomvoorziening — een lage batterij kan verbindingsproblemen veroorzaken.
    - Als de toetsenbord-/muisbediening niet werkt bij de eerste poging:
        1. Sluit de uConsole volledig af.
        2. Wacht minimaal 10 seconden.
        3. Schakel de stroom in en probeer het opnieuw.

!!! tip "Baudrate voor seriële communicatie"
    Stel de baudrate in op **9600** voor serieel gebruik — de uConsole kan 115200 mogelijk niet betrouwbaar aan.

## Gebruik

### **Een KVM-sessie starten**

1. Start Openterface QT op uw uConsole.
2. De app detecteert de Extension Module v2 automatisch.
3. Sluit het doelapparaat aan via HDMI en USB.
4. Gebruik het toetsenbord en de trackball van de uConsole om het doelapparaat te bedienen.

### **Bedieningsfuncties**

- **Toetsenbord**: Volledige emulatie, inclusief multimediatoetsen
- **Muis**: Absolute en relatieve positionering
- **Audio**: HDMI-audio-passthrough naar de luidsprekers van de uConsole
- **Tekstoverdracht**: Plak gebruikersnamen, wachtwoorden en fragmenten als gesimuleerde toetsaanslagen
- **USB-switching**: Deel USB-opslag tussen uConsole en doelapparaat via de host-app — zie [Verbinden met doelapparaat](/products/kvmext/connect-to-target/)
- **SD-kaartwisseling**: Koppel de SD-kaart aan de host of het doelapparaat via de host-app — zie [SD-kaart handleiding](/products/kvmext/sd-card/)

### **Problemen oplossen bij software-installatie**

Als de app moeilijk te installeren is of de muis/het toetsenbord niet werkt:

- Bevestig dat u de **arm64**-build op uw uConsole CM4/module heeft geïnstalleerd
- Word lid van [Discord](https://openterface.com/discord) voor realtime hulp
- Meld problemen op [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Gerelateerd

- [Verbinden met doelapparaat](/products/kvmext/connect-to-target/)
- [SD-kaart handleiding](/products/kvmext/sd-card/)
- [FAQ's](/products/kvmext/faq/)
