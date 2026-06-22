---
title: "Software-Setup | Extension Module v2"
description: "Installieren und konfigurieren Sie die Openterface Host-App auf Ihrer uConsole für das KVM Extension Module v2 – HDMI-Capture, USB-HID, SD-Karten-Umschaltung und USB-Freigabe."
keywords: "Openterface App-Installation, uConsole Software-Setup, KVM Extension v2, openterfaceqt"
---

# **Software-Setup** | Extension Module v2

## Installationsübersicht

Die Openterface Host-App ermöglicht es Ihrer uConsole, als KVM-Schnittstelle mit HDMI-Capture, USB-HID-Steuerung, **SD-Karten-Umschaltung** und **USB-Port-Freigabe** zwischen Host und Zielgerät zu fungieren.

!!! note "Anforderungen"
    - **uConsole (Host)**: Openterface QT App erforderlich
    - **Zielgerät**: Keine App erforderlich – Windows, macOS, Linux, Android, iOS werden für KVM unterstützt
    - **Video**: Standard-HDMI-Kabel; aktive Konverter unterstützen VGA, DP und andere Formate
    - **Empfohlenes Backend**: **GStreamer** für die beste arm64-GPU-Leistung (Kali Linux hat möglicherweise nur eingeschränkte GStreamer-Unterstützung)

## Installationsmethoden

### **Option 1: GitHub Releases (empfohlen für arm64)**

1. Besuchen Sie [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Laden Sie das neueste `.deb` für **arm64** herunter (z. B. `openterfaceqt_*_arm64.deb`).
3. Installieren:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Option 2: Flatpak**

Folgen Sie der [Flatpak Installationsanleitung](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Option 3: Community-Repository (ClockworkPi Bookworm)**

Gepflegt von Rex für ClockworkPi-Images:

1. **Repository hinzufügen**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Installieren**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Repository-Hinweise"
    Befehle erfordern `sudo`. Das Repository ist auf arm64 Bookworm-Pakete ausgerichtet – überprüfen Sie die Kompatibilität mit Ihrem uConsole-Betriebssystem vor der Installation.

## Wichtige Hinweise

!!! tip "Stromversorgung & Ersteinrichtung"
    - Halten Sie die uConsole aufgeladen oder an einer stabilen Stromquelle – ein niedriger Akkustand kann Verbindungsprobleme verursachen.
    - Wenn die Tastatur-/Maussteuerung beim ersten Versuch fehlschlägt:
        1. Fahren Sie die uConsole vollständig herunter.
        2. Warten Sie mindestens 10 Sekunden.
        3. Schalten Sie sie ein und versuchen Sie es erneut.

!!! tip "Baudrate der seriellen Kommunikation"
    Stellen Sie die Baudrate für die serielle Nutzung auf **9600** ein – die uConsole kann 115200 möglicherweise nicht zuverlässig aufrechterhalten.

## Verwendung

### **KVM-Sitzung starten**

1. Starten Sie Openterface QT auf Ihrer uConsole.
2. Die App erkennt das Extension Module v2 automatisch.
3. Verbinden Sie das Zielgerät über HDMI und USB.
4. Verwenden Sie die Tastatur und den Trackball der uConsole, um das Zielgerät zu steuern.

### **Steuerungsfunktionen**

- **Tastatur**: Vollständige Emulation einschließlich Multimedia-Tasten
- **Maus**: Absolute und relative Positionierung
- **Audio**: HDMI-Audio-Durchschleifung an die uConsole-Lautsprecher
- **Textübertragung**: Fügen Sie Benutzernamen, Passwörter und Textschnipsel als simulierte Tastatureingaben ein
- **USB-Umschaltung**: Geben Sie USB-Speicher zwischen uConsole und Zielgerät über die Host-App frei – siehe [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/)
- **SD-Karten-Umschaltung**: Binden Sie die SD-Karte über die Host-App in den Host oder das Zielgerät ein – siehe [SD-Karten-Anleitung](/products/kvmext/sd-card/)

### **Fehlerbehebung bei der Softwareinstallation**

Wenn die App schwer zu installieren ist oder Maus/Tastatur nicht funktionieren:

- Stellen Sie sicher, dass Sie den **arm64**-Build auf Ihrem uConsole CM4/Modul installiert haben
- Treten Sie dem [Discord](https://openterface.com/discord) bei, um Echtzeit-Hilfe zu erhalten
- Melden Sie Probleme auf [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Siehe auch

- [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/)
- [SD-Karten-Anleitung](/products/kvmext/sd-card/)
- [FAQs](/products/kvmext/faq/)
