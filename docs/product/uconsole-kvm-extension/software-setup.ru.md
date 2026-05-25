---
title: "Программное обеспечение-Setup"
description: "Vollständige Руководство zur Программное обеспечениеeinrichtung для die Openterface KVM-Erweiterung для uConsole."
keywords: "Openterface App Установка, uConsole Программное обеспечение, KVM App Установка, uConsole Konfiguration"
---

# **Программное обеспечение-Setup** | Openterface KVM-Erweiterung для uConsole

## Установкаsоsicht

Die Openterface App ermöglicht Ihrer uConsole, als KVM-Schnittstelle zu fungieren, sodass Sie Zielgeräte о Bildschirm, Tastatur и Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert installierte Openterface App
    - **Ziel**: Keine App erforderlich – unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Mit einem aktiven HDMI-Konverter werden auch Formate wie **VGA** и **DP** unterstützt. *Tipp: Stellen Sie sicher, dass der Konverter ausreichend с Strom versorgt ist, sonst kann es zu einem schwarzen Bildschirm kommen.*

    - **Empfohlenes Video-Backend**: Für beste Leistung и Kompatibilität с arm64-GPUs (z. B. Raspberry Pi) empfehlen wir **GStreamer** als Video-Backend. Beachten Sie, dass **Kali Linux** GStreamer möglicherweise не gut unterstützt.

## Установкаsmethoden

### **Option 1: Скачать von GitHub Releases (Empfohlen для arm64)**

Laden Sie die neueste Openterface App для **arm64** direkt von unserer [GitHub Releases-Seite](https://github.com/TechxArtisanStudio/Openterface_QT/releases) herunter.

1. Besuchen Sie die [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) Seite.
2. Laden Sie das neueste `.deb`-Paket для **arm64** herunter (z. B. `openterfaceqt_*_arm64.deb`).
3. Installieren Sie das Paket:
   ```bash
   sudo apt install ./openterfaceqt_*_arm64.deb
   ```
   *(Ersetzen Sie den Dateinamen gegebenenfalls durch den tatsächlichen Dateinamen.)*

---

### **Option 2: Flatpak-Установка**

Befolgen Sie unsere [Flatpak-Установкаsanleitung](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) для detaillierte Schritte.

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
    Diese Befehle erfordern `sudo`. Das Repository richtet sich an arm64 Bookworm-Pakete; prüfen Sie die Kompatibilität с Ihrem Gerät vor der Установка.

## Wichtige Hinweise

!!! tip "Stromversorgung & Erstinbetriebnahme"
    - **Stellen Sie sicher, dass Ihre uConsole ausreichend geladen ist или an eine stabile Stromquelle angeschlossen ist.** Niedrige Spannung kann zu unzuverlässigem Betrieb или Подключениеsproblemen führen.
    - **Wenn Sie beim ersten Versuch das Zielgerät не steuern können:**
        1. Schalten Sie die uConsole vollständig aus.
        2. Warten Sie mindestens 10 Sekиen.
        3. Schalten Sie sie wieder ein и versuchen Sie es erneut.
    Dies kann helfen, die Оборудование zu initialisieren и Подключениеsprobleme beim ersten Start zu beheben.

!!! tip "Serielle Kommunikation Baudrate"
    - **Stellen Sie die Baudrate auf 9600** ein, wenn Sie serielle Kommunikation verwenden. Dies reduziert Fehler, da die uConsole oft не genug Leistung liefert, um 115200 zuverlässig zu halten.

## Gebrauchsanleitung

### **Starten der KVM-Sitzung**
1. Starten Sie die Openterface App auf Ihrer uConsole
2. Die App erkennt automatisch die KVM-Erweiterungsplatine
3. Verbinden Sie Ihr Zielgerät о HDMI
4. Verwenden Sie die eingebaute Tastatur и den Trackball der uConsole, um das Zielgerät zu steuern

### **Steuerfunktionen**
- **Tastatur**: Volle Tastatur-Emulation einschließlich Multimedia-Tasten
- **Maus**: Absolute и relative Mauspositionierung
- **Audio**: HDMI-Audio-Passthrough zu den uConsole-Lautsprechern

### **Erweiterte Функции**
- **Textоtragung**: Schnelles Übertragen von Text durch Simulieren von Tastenanschlägen—ideal для Benutzernamen, Passwörter и Code-Snippets
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen der uConsole и dem Zielgerät о die Host-App
---
title: "Программное обеспечение-Setup"
description: "Vollständiger Программное обеспечение-Setup-Leitfaden для Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Openterface App auf Ihrem uConsole installieren и konfigurieren для nahtlose KVM-Funktionalität."
keywords: "Openterface App Установка, uConsole Программное обеспечение Setup, KVM App Setup, uConsole App Konfiguration, Программное обеспечение Установка Guide"
---

# **Программное обеспечение-Setup** | Openterface KVM Extension for uConsole

## Установкаsоsicht

Die Openterface App ermöglicht es Ihrem uConsole, als KVM-Interface zu fungieren, sodass Sie Zielgeräte о den eingebauten Bildschirm, die Tastatur и das Trackball steuern können.

!!! note "Anforderungen"
    - **uConsole**: Erfordert Установка der Openterface App
    - **Ziel**: Keine App erforderlich - unterstützt Windows, macOS, Linux, Android, iOS
    - **Video**: Verwenden Sie ein Standard-HDMI-Kabel. Verwenden Sie ein Standard-HDMI-Kabel. Mit einem netzbetriebenen HDMI-Konverter unterstützt es auch andere Formate wie **VGA**, **DP** и mehr. *Tipp: Stellen Sie sicher, dass der Konverter ordnungsgemäß с Strom versorgt wird; andernfalls können Sie einen schwarzen Bildschirm erleben.*

## Установкаsmethoden

### **Option 1: Flatpak-Установка**

Folgen Sie unserem [Flatpak-Установкаsleitfaden](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) для detaillierte Setup-Schritte.

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
    Diese Befehle erfordern sudo. Das Repository zielt auf arm64 Bookworm-Pakete ab; оprüfen Sie die Kompatibilität с Ihrem Gerät vor der Установка.

## Verwendungsanweisungen

### **KVM-Sitzung starten**
1. Starten Sie die Openterface App auf Ihrem uConsole
2. Die App erkennt automatisch die KVM Extension-Karte
3. Verbinden Sie Ihr Zielgerät о HDMI
4. Verwenden Sie die eingebaute Tastatur и das Trackball des uConsole, um das Zielgerät zu steuern

### **Steuerungsfunktionen**
- **Tastatur**: Vollständige Tastaturemulation einschließlich Multimediatasten
- **Maus**: Absolute и relative Mauspositionierung
- **Audio**: HDMI-Audio-Durchgang zu uConsole-Lautsprechern

### **Erweiterte Функции**
- **Textоtragung**: Übertragen Sie schnell Text durch Simulation von Tastenanschlägen—ideal для Benutzernamen, Passwörter и Codeschnipsel
- **Umschaltbares USB**: Wechseln Sie einfach den USB-Zugriff zwischen uConsole и Zielgerät о die Host-App
