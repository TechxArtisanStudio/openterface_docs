---
title: "البرمجيات-Setup"
description: "Vollständige دليل zur البرمجياتeinrichtung لـ die Openterface KVM-Erweiterung لـ uConsole."
keywords: "Openterface App التثبيت, uConsole البرمجيات, KVM App التثبيت, uConsole Konfiguration"
---

# **البرمجيات-Setup** | Openterface KVM-Erweiterung لـ uConsole

## التثبيتsحولsicht

Die Openterface App ermöglicht Ihrer uConsole, als KVM-Schnittstelle zu fungieren, sodass Sie Zielgeräte حول Bildschirm, Tastatur و Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert installierte Openterface App
    - **Ziel**: Keine App erforderlich – unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Mit einem aktiven HDMI-Konverter werden auch Formate wie **VGA** و **DP** unterstützt. *Tipp: Stellen Sie sicher, dass der Konverter ausreichend مع Strom versorgt ist, sonst kann es zu einem schwarzen Bildschirm kommen.*

    - **Empfohlenes Video-Backend**: Für beste Leistung و Kompatibilität مع arm64-GPUs (z. B. Raspberry Pi) empfehlen wir **GStreamer** als Video-Backend. Beachten Sie, dass **Kali Linux** GStreamer möglicherweise لا gut unterstützt.

## التثبيتsmethoden

### **Option 1: تنزيل von GitHub Releases (Empfohlen لـ arm64)**

Laden Sie die neueste Openterface App لـ **arm64** direkt von unserer [GitHub Releases-Seite](https://github.com/TechxArtisanStudio/Openterface_QT/releases) herunter.

1. Besuchen Sie die [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) Seite.
2. Laden Sie das neueste `.deb`-Paket لـ **arm64** herunter (z. B. `openterfaceqt_*_arm64.deb`).
3. Installieren Sie das Paket:
   ```bash
   sudo apt install ./openterfaceqt_*_arm64.deb
   ```
   *(Ersetzen Sie den Dateinamen gegebenenfalls durch den tatsächlichen Dateinamen.)*

---

### **Option 2: Flatpak-التثبيت**

Befolgen Sie unsere [Flatpak-التثبيتsanleitung](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) لـ detaillierte Schritte.

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
    Diese Befehle erfordern `sudo`. Das Repository richtet sich an arm64 Bookworm-Pakete; prüfen Sie die Kompatibilität مع Ihrem Gerät vor der التثبيت.

## Wichtige Hinweise

!!! tip "Stromversorgung & Erstinbetriebnahme"
    - **Stellen Sie sicher, dass Ihre uConsole ausreichend geladen ist أو an eine stabile Stromquelle angeschlossen ist.** Niedrige Spannung kann zu unzuverlässigem Betrieb أو الاتصالsproblemen führen.
    - **Wenn Sie beim ersten Versuch das Zielgerät لا steuern können:**
        1. Schalten Sie die uConsole vollständig aus.
        2. Warten Sie mindestens 10 Sekوen.
        3. Schalten Sie sie wieder ein و versuchen Sie es erneut.
    Dies kann helfen, die الأجهزة zu initialisieren و الاتصالsprobleme beim ersten Start zu beheben.

!!! tip "Serielle Kommunikation Baudrate"
    - **Stellen Sie die Baudrate auf 9600** ein, wenn Sie serielle Kommunikation verwenden. Dies reduziert Fehler, da die uConsole oft لا genug Leistung liefert, um 115200 zuverlässig zu halten.

## Gebrauchsanleitung

### **Starten der KVM-Sitzung**
1. Starten Sie die Openterface App auf Ihrer uConsole
2. Die App erkennt automatisch die KVM-Erweiterungsplatine
3. Verbinden Sie Ihr Zielgerät حول HDMI
4. Verwenden Sie die eingebaute Tastatur و den Trackball der uConsole, um das Zielgerät zu steuern

### **Steuerfunktionen**
- **Tastatur**: Volle Tastatur-Emulation einschließlich Multimedia-Tasten
- **Maus**: Absolute و relative Mauspositionierung
- **Audio**: HDMI-Audio-Passthrough zu den uConsole-Lautsprechern

### **Erweiterte الميزات**
- **Textحولtragung**: Schnelles Übertragen von Text durch Simulieren von Tastenanschlägen—ideal لـ Benutzernamen, Passwörter و Code-Snippets
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen der uConsole و dem Zielgerät حول die Host-App
---
title: "البرمجيات-Setup"
description: "Vollständiger البرمجيات-Setup-Leitfaden لـ Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Openterface App auf Ihrem uConsole installieren و konfigurieren لـ nahtlose KVM-Funktionalität."
keywords: "Openterface App التثبيت, uConsole البرمجيات Setup, KVM App Setup, uConsole App Konfiguration, البرمجيات التثبيت Guide"
---

# **البرمجيات-Setup** | Openterface KVM Extension for uConsole

## التثبيتsحولsicht

Die Openterface App ermöglicht es Ihrem uConsole, als KVM-Interface zu fungieren, sodass Sie Zielgeräte حول den eingebauten Bildschirm, die Tastatur و das Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert التثبيت der Openterface App
    - **Ziel**: Keine App erforderlich - unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Verwenden Sie ein Standard-HDMI-Kabel. Mit einem netzbetriebenen HDMI-Konverter unterstützt es auch andere Formate wie **VGA**, **DP** و mehr. *Tipp: Stellen Sie sicher, dass der Konverter ordnungsgemäß مع Strom versorgt wird; andernfalls können Sie einen schwarzen Bildschirm erleben.*

## التثبيتsmethoden

### **Option 1: Flatpak-التثبيت**

Folgen Sie unserem [Flatpak-التثبيتsleitfaden](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) لـ detaillierte Setup-Schritte.

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
    Diese Befehle erfordern sudo. Das Repository zielt auf arm64 Bookworm-Pakete ab; حولprüfen Sie die Kompatibilität مع Ihrem Gerät vor der التثبيت.

## Verwendungsanweisungen

### **KVM-Sitzung starten**
1. Starten Sie die Openterface App auf Ihrem uConsole
2. Die App erkennt automatisch die KVM Extension-Karte
3. Verbinden Sie Ihr Zielgerät حول HDMI
4. Verwenden Sie die eingebaute Tastatur و das Trackball des uConsole, um das Zielgerät zu steuern

### **Steuerungsfunktionen**
- **Tastatur**: Vollständige Tastaturemulation einschließlich Multimediatasten
- **Maus**: Absolute و relative Mauspositionierung
- **Audio**: HDMI-Audio-Durchgang zu uConsole-Lautsprechern

### **Erweiterte الميزات**
- **Textحولtragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal لـ Benutzernamen, Passwörter و Codeschnipsel
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen uConsole و Zielgerät حول die Host-App
