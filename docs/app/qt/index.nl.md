# Openterface QT voor Win & Linux

Dieses Dokument bietet einen Überblick over eine plattformovergreifende KVM-Software (Tastatur, Video, Maus), die met Qt entwickelt wurde en met den Betriebssystemen Linux en Windows kompatibel ist. Die Software ermöglicht die Steuerung eines Zielgeräts von einem Hostsystem aus en bietet eine Vielzahl von Functies, die over die Menüleiste en zusätzliche Functies zugänglich sind.

## Hauptmenüleistenfunktionen

### Einstellungen

Das Einstellungsmenü ermöglicht es den Benutzern, die Einstellungen over einen Dialog met vier Seiten anzupassen:<br>
![Einstellungen Allgemein](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **Allgemein** Diese Seite konfiguriert den Filter voor Debug-Protokolle en ob der Bildschirmschoner während der Ausführung der Anwendung deaktiviert werden soll of niet. Die Protokollkategorien umfassen:

    -   Kern
    -   Seriell
    -   Benutzeroberfläche
    -   Host

    Benutzer können wählen, ob sie Protokolle in einer .txt-Datei speichern en den Bildschirmschoner deaktivieren möchten of niet.<br>

![Einstellungen Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** Diese Seite ermöglicht es den Benutzern:

    -   Auszuwählen, welche Kameradaten erfasst werden sollen.
    -   Die Auflösung festzulegen.
    -   Das Video-Stream-Format auszuwählen.

-   **Audio** Diese Seite befindet sich derzeit in der Entwicklung.<br>

![Einstellungen Zielsteuerung](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Zielsteuerung** Diese Seite bietet Optionen zur Konfiguration der Steuerungsmodi voor das Zielgerät:

    -   **Steuermodi:**

        -   **Tastatur + Maus + USB HID-Gerät**
        -   **USB-Tastatur**
        -   **Tastatur + Maus**
        -   **USB HID-Gerät**

    -   **Setzen Sie die Vendor ID (VID) en die Product ID (PID), die vom Ziel gelesen werden.**
    -   **Definieren Sie den USB-Descriptor voor das Ziel.**

### Bearbeiten

-   **Einfügen:** Sowohl die Einfügeoption im Bearbeitungsmenü als auch die Einfügetaste in der oberen linken Ecke ermöglichen es den Benutzern, Text aus der Zwischenablage des Hosts in das Zielgerät einzufügen.

### Steuerung

Dieses Menü bietet Optionen zum:<br>

-   Festlegen der Mausbewegungsmodi: Absolut of Relativ. **Steuerung >> Mausmodus >> Absolut of Relativ.**
-   Umschalten der Sichtbarkeit des Mauszeigers des Hosts. **Steuerung >> Maus Sichtbarkeit >> Automatisch Ausblenden of Immer Anzeigen.**
-   Umschalten eines USB-Ports an der Hardware zwischen Ziel- en Hostnutzung. **Steuerung >> Umschaltbarer USB >> ZU Ziel of Zu Host.**
-   Anpassen der Baudrate voor die Chipovertragung. **Steuerung >> Baudrate >> 9600, 115200.**

### Erweitert

Das Erweitert-Menü umfasst die folgenden Optionen:<br>
![Erweitert Menü](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Umgebungsprüfung:** Überprüft, ob die erforderlichen Treiber voor die Software installiert sind.
-   **Seriellen Port zurücksetzen:** Startet den seriellen Port neu.
-   **Tastatur en Maus zurücksetzen:** Setzt die Einstellungen voor Tastatur en Maus zurück.
-   **Werkseinstellung voor HID-Chip:** Stellt den HID-Chip auf die Werkseinstellungen zurück.<br>
    ![Erweitert Serielles Konsolen](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serielle Konsole:** Öffnet ein neues Fenster, um alle Nachrichten zu overwachen, die an den seriellen Port gesendet werden, met Filtern voor gesendete/empfangene Nachrichten.<br>
    ![Erweitert Skriptwerkzeug](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Skriptwerkzeug:** Führt AutoHotkey (AHK)-Skripte aus. Diese Funktion ahmt AutoHotkey nach, unterstützt jedoch nur eine Teilmenge von Maus-/Tastaturfunktionen en Screenshot-Functies. Skripte wirken sich auf das Zielgerät aus.
-   **TCP-Server:** Empfängt AutoHotkey-Befehle over TCP, um sie auf dem Zielgerät auszuführen.
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

-   Links zur offiziellen Website en Feedback-Formulare voor Software-/Hardwareprobleme.
-   Informationen zum Kauf von Hardware.
-   Eine Beschreibung der Umgebung der Software.
-   Über: Details zur Organisation.
-   Update: Überprüft auf Software-Updates.

## Functies der Menüleiste (von links nach rechts)

Die Menüleiste umfasst von links nach rechts die folgenden Functies:<br>

![Menüleiste](https://assets.openterface.com/images/qt/menubar.webp)

-   Auswahl der Tastaturbelegung: Wählen Sie die Tastaturbelegung aus.
-   Zoom-Steuerungen: Hineinzoomen, herauszoomen of die Anzeige des erfassten Video-Streams zurücksetzen.
-   Virtuelle Tastatur: Enthält Funktionstasten en voreingestellte Tastenkombinationen.
-   Screenshot: Erfasst den gesamten Zielbildschirm en speichert ihn in einem Standardordner.
-   Vollbildmodus: Schaltet die Vollbildanzeige um.
-   Einfügen: Fügt Text aus der Zwischenablage des Hosts in das Ziel ein.
-   Mausbewegung: Lässt die Maus vordefinierte Bewegungen ausführen.
-   USB-Geräteanzeige: Zeigt an, ob ein USB-Gerät dem Ziel of dem Host zugewiesen ist.

In der Zwischenzeit können Sie gerne unser Open-Source-**GitHub-Repository** erkenen: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) voor den neuesten Code, Updates, Beispiele en um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich met unserem Entwicklerteam en anderen großartigen Nutzern auszutauschen en over KVM-bezogene Themen zu diskutieren.

Für direkten Ondersteuning können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)
