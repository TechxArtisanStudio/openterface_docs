---
title: "Yazılım-Setup (Legacy v1)"
description: Vollständige Kılavuz zur Yazılımeinrichtung için die Openterface KVM-Erweiterung için uConsole. Die Openterface App ermöglicht Ihrer uConsole, als… Openterface.
keywords: "Openterface App Kurulum, uConsole Yazılım, KVM App Kurulum, uConsole Konfiguration"
---

# **Yazılım-Setup** | Openterface KVM-Erweiterung için uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Kurulumshakkındasicht

Die Openterface App ermöglicht Ihrer uConsole, als KVM-Schnittstelle zu fungieren, sodass Sie Zielgeräte hakkında Bildschirm, Tastatur ve Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert installierte Openterface App
    - **Ziel**: Keine App erforderlich – unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Mit einem aktiven HDMI-Konverter werden auch Formate wie **VGA** ve **DP** unterstützt. *Tipp: Stellen Sie sicher, dass der Konverter ausreichend ile Strom versorgt ist, sonst kann es zu einem schwarzen Bildschirm kommen.*

    - **Empfohlenes Video-Backend**: Für beste Leistung ve Kompatibilität ile arm64-GPUs (z. B. Raspberry Pi) empfehlen wir **GStreamer** als Video-Backend. Beachten Sie, dass **Kali Linux** GStreamer möglicherweise değil gut unterstützt.

## Kurulumsmethoden

### **Option 1: İndir von GitHub Releases (Empfohlen için arm64)**

Laden Sie die neueste Openterface App için **arm64** direkt von unserer [GitHub Releases-Seite](https://github.com/TechxArtisanStudio/Openterface_QT/releases) herunter.

1. Besuchen Sie die [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) Seite.
2. Laden Sie das neueste `.deb`-Paket için **arm64** herunter (z. B. `openterfaceqt_*_arm64.deb`).
3. Installieren Sie das Paket:
   ```bash
   sudo apt install ./openterfaceqt_*_arm64.deb
   ```
   *(Ersetzen Sie den Dateinamen gegebenenfalls durch den tatsächlichen Dateinamen.)*

---

### **Option 2: Flatpak-Kurulum**

Befolgen Sie unsere [Flatpak-Kurulumsanleitung](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) için detaillierte Schritte.

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
    Diese Befehle erfordern `sudo`. Das Repository richtet sich an arm64 Bookworm-Pakete; prüfen Sie die Kompatibilität ile Ihrem Gerät vor der Kurulum.

## Wichtige Hinweise

!!! tip "Stromversorgung & Erstinbetriebnahme"
    - **Stellen Sie sicher, dass Ihre uConsole ausreichend geladen ist veya an eine stabile Stromquelle angeschlossen ist.** Niedrige Spannung kann zu unzuverlässigem Betrieb veya Bağlantısproblemen führen.
    - **Wenn Sie beim ersten Versuch das Zielgerät değil steuern können:**
        1. Schalten Sie die uConsole vollständig aus.
        2. Warten Sie mindestens 10 Sekveen.
        3. Schalten Sie sie wieder ein ve versuchen Sie es erneut.
    Dies kann helfen, die Donanım zu initialisieren ve Bağlantısprobleme beim ersten Start zu beheben.

!!! tip "Serielle Kommunikation Baudrate"
    - **Stellen Sie die Baudrate auf 9600** ein, wenn Sie serielle Kommunikation verwenden. Dies reduziert Fehler, da die uConsole oft değil genug Leistung liefert, um 115200 zuverlässig zu halten.

## Gebrauchsanleitung

### **Starten der KVM-Sitzung**
1. Starten Sie die Openterface App auf Ihrer uConsole
2. Die App erkennt automatisch die KVM-Erweiterungsplatine
3. Verbinden Sie Ihr Zielgerät hakkında HDMI
4. Verwenden Sie die eingebaute Tastatur ve den Trackball der uConsole, um das Zielgerät zu steuern

### **Steuerfunktionen**
- **Tastatur**: Volle Tastatur-Emulation einschließlich Multimedia-Tasten
- **Maus**: Absolute ve relative Mauspositionierung
- **Audio**: HDMI-Audio-Passthrough zu den uConsole-Lautsprechern

### **Erweiterte Özellikler**
- **Texthakkındatragung**: Schnelles Übertragen von Text durch Simulieren von Tastenanschlägen—ideal için Benutzernamen, Passwörter ve Code-Snippets
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen der uConsole ve dem Zielgerät hakkında die Host-App
---
title: "Yazılım-Setup"
description: "Vollständiger Yazılım-Setup-Leitfaden için Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Openterface App auf Ihrem uConsole installieren ve konfigurieren için nahtlose KVM-Funktionalität."
keywords: "Openterface App Kurulum, uConsole Yazılım Setup, KVM App Setup, uConsole App Konfiguration, Yazılım Kurulum Guide"
---

# **Yazılım-Setup** | Openterface KVM Extension for uConsole

## Kurulumshakkındasicht

Die Openterface App ermöglicht es Ihrem uConsole, als KVM-Interface zu fungieren, sodass Sie Zielgeräte hakkında den eingebauten Bildschirm, die Tastatur ve das Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert Kurulum der Openterface App
    - **Ziel**: Keine App erforderlich - unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Verwenden Sie ein Standard-HDMI-Kabel. Mit einem netzbetriebenen HDMI-Konverter unterstützt es auch andere Formate wie **VGA**, **DP** ve mehr. *Tipp: Stellen Sie sicher, dass der Konverter ordnungsgemäß ile Strom versorgt wird; andernfalls können Sie einen schwarzen Bildschirm erleben.*

## Kurulumsmethoden

### **Option 1: Flatpak-Kurulum**

Folgen Sie unserem [Flatpak-Kurulumsleitfaden](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) için detaillierte Setup-Schritte.

### **Option 2: Community-Repository (Empfohlen)**

Wenn Sie die von Rex gepflegte Community-Build bevorzugen:

1. **Repository hinzufügen**:
```bash
wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
2. **Paket installieren**:
```bash
sudo apt update
sudo apt install openterfaceqt
!!! warning "Repository-Hinweise"
    Diese Befehle erfordern sudo. Das Repository zielt auf arm64 Bookworm-Pakete ab; hakkındaprüfen Sie die Kompatibilität ile Ihrem Gerät vor der Kurulum.

## Verwendungsanweisungen

### **KVM-Sitzung starten**
1. Starten Sie die Openterface App auf Ihrem uConsole
2. Die App erkennt automatisch die KVM Extension-Karte
3. Verbinden Sie Ihr Zielgerät hakkında HDMI
4. Verwenden Sie die eingebaute Tastatur ve das Trackball des uConsole, um das Zielgerät zu steuern

### **Steuerungsfunktionen**
- **Tastatur**: Vollständige Tastaturemulation einschließlich Multimediatasten
- **Maus**: Absolute ve relative Mauspositionierung
- **Audio**: HDMI-Audio-Durchgang zu uConsole-Lautsprechern

### **Erweiterte Özellikler**
- **Texthakkındatragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal için Benutzernamen, Passwörter ve Codeschnipsel
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen uConsole ve Zielgerät hakkında die Host-App
