---
title: "Openterface QT для Win & Linux"
description: Dieses Dokument bietet einen Überblick о eine plattformоgreifende KVM-Программное обеспечение (Tastatur, Video, Maus), die с Qt entwickelt wurde и с den…
---

# Openterface QT для Win & Linux

Dieses Dokument bietet einen Überblick о eine plattformоgreifende KVM-Программное обеспечение (Tastatur, Video, Maus), die с Qt entwickelt wurde и с den Betriebssystemen Linux и Windows kompatibel ist. Die Программное обеспечение ermöglicht die Steuerung eines Zielgeräts von einem Hostsystem aus и bietet eine Vielzahl von Функции, die о die Menüleiste и zusätzliche Функции zugänglich sind.

## Hauptmenüleistenfunktionen

### Einstellungen

Das Einstellungsmenü ermöglicht es den Benutzern, die Einstellungen о einen Dialog с vier Seiten anzupassen:<br>
![Einstellungen Allgemein](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **Allgemein** Diese Seite konfiguriert den Filter для Debug-Protokolle и ob der Bildschirmschoner während der Ausführung der Anwendung deaktiviert werden soll или не. Die Protokollkategorien umfassen:

    -   Kern
    -   Seriell
    -   Benutzeroberfläche
    -   Host

    Benutzer können wählen, ob sie Protokolle in einer .txt-Datei speichern и den Bildschirmschoner deaktivieren möchten или не.<br>

![Einstellungen Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** Diese Seite ermöglicht es den Benutzern:

    -   Auszuwählen, welche Kameradaten erfasst werden sollen.
    -   Die Auflösung festzulegen.
    -   Das Video-Stream-Format auszuwählen.

-   **Audio** Diese Seite befindet sich derzeit in der Entwicklung.<br>

![Einstellungen Zielsteuerung](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Zielsteuerung** Diese Seite bietet Optionen zur Konfiguration der Steuerungsmodi для das Zielgerät:

    -   **Steuermodi:**

        -   **Tastatur + Maus + USB HID-Gerät**
        -   **USB-Tastatur**
        -   **Tastatur + Maus**
        -   **USB HID-Gerät**

    -   **Setzen Sie die Vendor ID (VID) и die Product ID (PID), die vom Ziel gelesen werden.**
    -   **Definieren Sie den USB-Descriptor для das Ziel.**

### Bearbeiten

-   **Einfügen:** Sowohl die Einfügeoption im Bearbeitungsmenü als auch die Einfügetaste in der oberen linken Ecke ermöglichen es den Benutzern, Text aus der Zwischenablage des Hosts in das Zielgerät einzufügen.

### Steuerung

Dieses Menü bietet Optionen zum:<br>

-   Festlegen der Mausbewegungsmodi: Absolut или Relativ. **Steuerung >> Mausmodus >> Absolut или Relativ.**
-   Umschalten der Sichtbarkeit des Mauszeigers des Hosts. **Steuerung >> Maus Sichtbarkeit >> Automatisch Ausblenden или Immer Anzeigen.**
-   Umschalten eines USB-Ports an der Оборудование zwischen Ziel- и Hostnutzung. **Steuerung >> Umschaltbarer USB >> ZU Ziel или Zu Host.**
-   Anpassen der Baudrate для die Chipоtragung. **Steuerung >> Baudrate >> 9600, 115200.**

### Erweitert

Das Erweitert-Menü umfasst die folgenden Optionen:<br>
![Erweitert Menü](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Umgebungsprüfung:** Überprüft, ob die erforderlichen Treiber для die Программное обеспечение installiert sind.
-   **Seriellen Port zurücksetzen:** Startet den seriellen Port neu.
-   **Tastatur и Maus zurücksetzen:** Setzt die Einstellungen для Tastatur и Maus zurück.
-   **Werkseinstellung для HID-Chip:** Stellt den HID-Chip auf die Werkseinstellungen zurück.<br>
    ![Erweitert Serielles Konsolen](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serielle Konsole:** Öffnet ein neues Fenster, um alle Nachrichten zu оwachen, die an den seriellen Port gesendet werden, с Filtern для gesendete/empfangene Nachrichten.<br>
    ![Erweitert Skriptwerkzeug](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Skriptwerkzeug:** Führt AutoHotkey (AHK)-Skripte aus. Diese Funktion ahmt AutoHotkey nach, unterstützt jedoch nur eine Teilmenge von Maus-/Tastaturfunktionen и Screenshot-Функции. Skripte wirken sich auf das Zielgerät aus.
-   **TCP-Server:** Empfängt AutoHotkey-Befehle о TCP, um sie auf dem Zielgerät auszuführen.
-   **Firmware-Update:** Holt die neueste Firmware von einem Remote-Server, sodass die Benutzer wählen können, ob sie sie auf das Gerät flashen möchten.

### Sprachen

Die Schnittstellensprache kann auf Folgendes eingestellt werden:

-   Dänisch
-   Englisch
-   Deutsch
-   Französisch
-   Japanisch
-   Schwedisch

### Hilfe

Das Hilfemenü bietet: <br>
![Hilfe Menü](https://assets.openterface.com/images/qt/menuHelp.webp)

-   Links zur offiziellen Website и Feedback-Formulare для Программное обеспечение-/Оборудованиеprobleme.
-   Informationen zum Kauf von Оборудование.
-   Eine Beschreibung der Umgebung der Программное обеспечение.
-   Über: Details zur Organisation.
-   Update: Überprüft auf Программное обеспечение-Обновления.

## Функции der Menüleiste (von links nach rechts)

Die Menüleiste umfasst von links nach rechts die folgenden Функции:<br>

![Menüleiste](https://assets.openterface.com/images/qt/menubar.webp)

-   Auswahl der Tastaturbelegung: Wählen Sie die Tastaturbelegung aus.
-   Zoom-Steuerungen: Hineinzoomen, herauszoomen или die Anzeige des erfassten Video-Streams zurücksetzen.
-   Virtuelle Tastatur: Enthält Funktionstasten и voreingestellte Tastenkombinationen.
-   Screenshot: Erfasst den gesamten Zielbildschirm и speichert ihn in einem Standardordner.
-   Vollbildmodus: Schaltet die Vollbildanzeige um.
-   Einfügen: Fügt Text aus der Zwischenablage des Hosts in das Ziel ein.
-   Mausbewegung: Lässt die Maus vordefinierte Bewegungen ausführen.
-   USB-Geräteanzeige: Zeigt an, ob ein USB-Gerät dem Ziel или dem Host zugewiesen ist.

In der Zwischenzeit können Sie gerne unser Open-Source-**GitHub-Repository** erkиen: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) для den neuesten Code, Обновления, Beispiele и um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich с unserem Entwicklerteam и anderen großartigen Nutzern auszutauschen и о KVM-bezogene Themen zu diskutieren.

Für direkten Поддержка können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)
