# Openterface QT için Win & Linux

Dieses Dokument bietet einen Überblick hakkında eine plattformhakkındagreifende KVM-Yazılım (Tastatur, Video, Maus), die ile Qt entwickelt wurde ve ile den Betriebssystemen Linux ve Windows kompatibel ist. Die Yazılım ermöglicht die Steuerung eines Zielgeräts von einem Hostsystem aus ve bietet eine Vielzahl von Özellikler, die hakkında die Menüleiste ve zusätzliche Özellikler zugänglich sind.

## Hauptmenüleistenfunktionen

### Einstellungen

Das Einstellungsmenü ermöglicht es den Benutzern, die Einstellungen hakkında einen Dialog ile vier Seiten anzupassen:<br>
![Einstellungen Allgemein](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **Allgemein** Diese Seite konfiguriert den Filter için Debug-Protokolle ve ob der Bildschirmschoner während der Ausführung der Anwendung deaktiviert werden soll veya değil. Die Protokollkategorien umfassen:

    -   Kern
    -   Seriell
    -   Benutzeroberfläche
    -   Host

    Benutzer können wählen, ob sie Protokolle in einer .txt-Datei speichern ve den Bildschirmschoner deaktivieren möchten veya değil.<br>

![Einstellungen Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** Diese Seite ermöglicht es den Benutzern:

    -   Auszuwählen, welche Kameradaten erfasst werden sollen.
    -   Die Auflösung festzulegen.
    -   Das Video-Stream-Format auszuwählen.

-   **Audio** Diese Seite befindet sich derzeit in der Entwicklung.<br>

![Einstellungen Zielsteuerung](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Zielsteuerung** Diese Seite bietet Optionen zur Konfiguration der Steuerungsmodi için das Zielgerät:

    -   **Steuermodi:**

        -   **Tastatur + Maus + USB HID-Gerät**
        -   **USB-Tastatur**
        -   **Tastatur + Maus**
        -   **USB HID-Gerät**

    -   **Setzen Sie die Vendor ID (VID) ve die Product ID (PID), die vom Ziel gelesen werden.**
    -   **Definieren Sie den USB-Descriptor için das Ziel.**

### Bearbeiten

-   **Einfügen:** Sowohl die Einfügeoption im Bearbeitungsmenü als auch die Einfügetaste in der oberen linken Ecke ermöglichen es den Benutzern, Text aus der Zwischenablage des Hosts in das Zielgerät einzufügen.

### Steuerung

Dieses Menü bietet Optionen zum:<br>

-   Festlegen der Mausbewegungsmodi: Absolut veya Relativ. **Steuerung >> Mausmodus >> Absolut veya Relativ.**
-   Umschalten der Sichtbarkeit des Mauszeigers des Hosts. **Steuerung >> Maus Sichtbarkeit >> Automatisch Ausblenden veya Immer Anzeigen.**
-   Umschalten eines USB-Ports an der Donanım zwischen Ziel- ve Hostnutzung. **Steuerung >> Umschaltbarer USB >> ZU Ziel veya Zu Host.**
-   Anpassen der Baudrate için die Chiphakkındatragung. **Steuerung >> Baudrate >> 9600, 115200.**

### Erweitert

Das Erweitert-Menü umfasst die folgenden Optionen:<br>
![Erweitert Menü](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Umgebungsprüfung:** Überprüft, ob die erforderlichen Treiber için die Yazılım installiert sind.
-   **Seriellen Port zurücksetzen:** Startet den seriellen Port neu.
-   **Tastatur ve Maus zurücksetzen:** Setzt die Einstellungen için Tastatur ve Maus zurück.
-   **Werkseinstellung için HID-Chip:** Stellt den HID-Chip auf die Werkseinstellungen zurück.<br>
    ![Erweitert Serielles Konsolen](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serielle Konsole:** Öffnet ein neues Fenster, um alle Nachrichten zu hakkındawachen, die an den seriellen Port gesendet werden, ile Filtern için gesendete/empfangene Nachrichten.<br>
    ![Erweitert Skriptwerkzeug](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Skriptwerkzeug:** Führt AutoHotkey (AHK)-Skripte aus. Diese Funktion ahmt AutoHotkey nach, unterstützt jedoch nur eine Teilmenge von Maus-/Tastaturfunktionen ve Screenshot-Özellikler. Skripte wirken sich auf das Zielgerät aus.
-   **TCP-Server:** Empfängt AutoHotkey-Befehle hakkında TCP, um sie auf dem Zielgerät auszuführen.
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

-   Links zur offiziellen Website ve Feedback-Formulare için Yazılım-/Donanımprobleme.
-   Informationen zum Kauf von Donanım.
-   Eine Beschreibung der Umgebung der Yazılım.
-   Über: Details zur Organisation.
-   Update: Überprüft auf Yazılım-Güncellemeler.

## Özellikler der Menüleiste (von links nach rechts)

Die Menüleiste umfasst von links nach rechts die folgenden Özellikler:<br>

![Menüleiste](https://assets.openterface.com/images/qt/menubar.webp)

-   Auswahl der Tastaturbelegung: Wählen Sie die Tastaturbelegung aus.
-   Zoom-Steuerungen: Hineinzoomen, herauszoomen veya die Anzeige des erfassten Video-Streams zurücksetzen.
-   Virtuelle Tastatur: Enthält Funktionstasten ve voreingestellte Tastenkombinationen.
-   Screenshot: Erfasst den gesamten Zielbildschirm ve speichert ihn in einem Standardordner.
-   Vollbildmodus: Schaltet die Vollbildanzeige um.
-   Einfügen: Fügt Text aus der Zwischenablage des Hosts in das Ziel ein.
-   Mausbewegung: Lässt die Maus vordefinierte Bewegungen ausführen.
-   USB-Geräteanzeige: Zeigt an, ob ein USB-Gerät dem Ziel veya dem Host zugewiesen ist.

In der Zwischenzeit können Sie gerne unser Open-Source-**GitHub-Repository** erkveen: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) için den neuesten Code, Güncellemeler, Beispiele ve um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich ile unserem Entwicklerteam ve anderen großartigen Nutzern auszutauschen ve hakkında KVM-bezogene Themen zu diskutieren.

Für direkten Destek können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)
