---
title: "Oprogramowanie-Setup"
description: "Vollständige Przewodnik zur Oprogramowanieeinrichtung dla die Openterface KVM-Erweiterung dla uConsole."
keywords: "Openterface App Instalacja, uConsole Oprogramowanie, KVM App Instalacja, uConsole Konfiguration"
---

# **Oprogramowanie-Setup** | Openterface KVM-Erweiterung dla uConsole

## Instalacjasosicht

Die Openterface App ermöglicht Ihrer uConsole, als KVM-Schnittstelle zu fungieren, sodass Sie Zielgeräte o Bildschirm, Tastatur i Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert installierte Openterface App
    - **Ziel**: Keine App erforderlich – unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Mit einem aktiven HDMI-Konverter werden auch Formate wie **VGA** i **DP** unterstützt. *Tipp: Stellen Sie sicher, dass der Konverter ausreichend z Strom versorgt ist, sonst kann es zu einem schwarzen Bildschirm kommen.*

    - **Empfohlenes Video-Backend**: Für beste Leistung i Kompatibilität z arm64-GPUs (z. B. Raspberry Pi) empfehlen wir **GStreamer** als Video-Backend. Beachten Sie, dass **Kali Linux** GStreamer möglicherweise nie gut unterstützt.

## Instalacjasmethoden

### **Option 1: Pobierz von GitHub Releases (Empfohlen dla arm64)**

Laden Sie die neueste Openterface App dla **arm64** direkt von unserer [GitHub Releases-Seite](https://github.com/TechxArtisanStudio/Openterface_QT/releases) herunter.

1. Besuchen Sie die [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) Seite.
2. Laden Sie das neueste `.deb`-Paket dla **arm64** herunter (z. B. `openterfaceqt_*_arm64.deb`).
3. Installieren Sie das Paket:
   ```bash
   sudo apt install ./openterfaceqt_*_arm64.deb
   ```
   *(Ersetzen Sie den Dateinamen gegebenenfalls durch den tatsächlichen Dateinamen.)*

---

### **Option 2: Flatpak-Instalacja**

Befolgen Sie unsere [Flatpak-Instalacjasanleitung](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) dla detaillierte Schritte.

---

### **Option 3: Community-Repository**

Wenn Sie den Community-Build von Rex bevorzugen:

1. **Repository hinzufügen**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Paket installieren**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Repository-Hinweis"
    Diese Befehle erfordern `sudo`. Das Repository richtet sich an arm64 Bookworm-Pakete; prüfen Sie die Kompatibilität z Ihrem Gerät vor der Instalacja.

## Wichtige Hinweise

!!! tip "Stromversorgung & Erstinbetriebnahme"
    - **Stellen Sie sicher, dass Ihre uConsole ausreichend geladen ist lub an eine stabile Stromquelle angeschlossen ist.** Niedrige Spannung kann zu unzuverlässigem Betrieb lub Połączeniesproblemen führen.
    - **Wenn Sie beim ersten Versuch das Zielgerät nie steuern können:**
        1. Schalten Sie die uConsole vollständig aus.
        2. Warten Sie mindestens 10 Sekien.
        3. Schalten Sie sie wieder ein i versuchen Sie es erneut.
    Dies kann helfen, die Sprzęt zu initialisieren i Połączeniesprobleme beim ersten Start zu beheben.

!!! tip "Serielle Kommunikation Baudrate"
    - **Stellen Sie die Baudrate auf 9600** ein, wenn Sie serielle Kommunikation verwenden. Dies reduziert Fehler, da die uConsole oft nie genug Leistung liefert, um 115200 zuverlässig zu halten.

## Gebrauchsanleitung

### **Starten der KVM-Sitzung**
1. Starten Sie die Openterface App auf Ihrer uConsole
2. Die App erkennt automatisch die KVM-Erweiterungsplatine
3. Verbinden Sie Ihr Zielgerät o HDMI
4. Verwenden Sie die eingebaute Tastatur i den Trackball der uConsole, um das Zielgerät zu steuern

### **Steuerfunktionen**
- **Tastatur**: Volle Tastatur-Emulation einschließlich Multimedia-Tasten
- **Maus**: Absolute i relative Mauspositionierung
- **Audio**: HDMI-Audio-Passthrough zu den uConsole-Lautsprechern

### **Erweiterte Funkcje**
- **Textotragung**: Schnelles Übertragen von Text durch Simulieren von Tastenanschlägen—ideal dla Benutzernamen, Passwörter i Code-Snippets
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen der uConsole i dem Zielgerät o die Host-App
---
title: "Oprogramowanie-Setup"
description: "Vollständiger Oprogramowanie-Setup-Leitfaden dla Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Openterface App auf Ihrem uConsole installieren i konfigurieren dla nahtlose KVM-Funktionalität."
keywords: "Openterface App Instalacja, uConsole Oprogramowanie Setup, KVM App Setup, uConsole App Konfiguration, Oprogramowanie Instalacja Guide"
---

# **Oprogramowanie-Setup** | Openterface KVM Extension for uConsole

## Instalacjasosicht

Die Openterface App ermöglicht es Ihrem uConsole, als KVM-Interface zu fungieren, sodass Sie Zielgeräte o den eingebauten Bildschirm, die Tastatur i das Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert Instalacja der Openterface App
    - **Ziel**: Keine App erforderlich - unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Verwenden Sie ein Standard-HDMI-Kabel. Mit einem netzbetriebenen HDMI-Konverter unterstützt es auch andere Formate wie **VGA**, **DP** i mehr. *Tipp: Stellen Sie sicher, dass der Konverter ordnungsgemäß z Strom versorgt wird; andernfalls können Sie einen schwarzen Bildschirm erleben.*

## Instalacjasmethoden

### **Option 1: Flatpak-Instalacja**

Folgen Sie unserem [Flatpak-Instalacjasleitfaden](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) dla detaillierte Setup-Schritte.

### **Option 2: Community-Repository (Empfohlen)**

Wenn Sie die von Rex gepflegte Community-Build bevorzugen:

1. **Repository hinzufügen**:
```bash
wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
```

2. **Paket installieren**:
```bash
sudo apt update
sudo apt install openterfaceqt
```

!!! warning "Repository-Hinweise"
    Diese Befehle erfordern sudo. Das Repository zielt auf arm64 Bookworm-Pakete ab; oprüfen Sie die Kompatibilität z Ihrem Gerät vor der Instalacja.

## Verwendungsanweisungen

### **KVM-Sitzung starten**
1. Starten Sie die Openterface App auf Ihrem uConsole
2. Die App erkennt automatisch die KVM Extension-Karte
3. Verbinden Sie Ihr Zielgerät o HDMI
4. Verwenden Sie die eingebaute Tastatur i das Trackball des uConsole, um das Zielgerät zu steuern

### **Steuerungsfunktionen**
- **Tastatur**: Vollständige Tastaturemulation einschließlich Multimediatasten
- **Maus**: Absolute i relative Mauspositionierung
- **Audio**: HDMI-Audio-Durchgang zu uConsole-Lautsprechern

### **Erweiterte Funkcje**
- **Textotragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal dla Benutzernamen, Passwörter i Codeschnipsel
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen uConsole i Zielgerät o die Host-App
