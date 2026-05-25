# Openterface QT لـ Win & Linux

Dieses Dokument bietet einen Überblick حول eine plattformحولgreifende KVM-البرمجيات (Tastatur, Video, Maus), die مع Qt entwickelt wurde و مع den Betriebssystemen Linux و Windows kompatibel ist. Die البرمجيات ermöglicht die Steuerung eines Zielgeräts von einem Hostsystem aus و bietet eine Vielzahl von الميزات, die حول die Menüleiste و zusätzliche الميزات zugänglich sind.

## Hauptmenüleistenfunktionen

### Einstellungen

Das Einstellungsmenü ermöglicht es den Benutzern, die Einstellungen حول einen Dialog مع vier Seiten anzupassen:<br>
![Einstellungen Allgemein](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **Allgemein** Diese Seite konfiguriert den Filter لـ Debug-Protokolle و ob der Bildschirmschoner während der Ausführung der Anwendung deaktiviert werden soll أو لا. Die Protokollkategorien umfassen:

    -   Kern
    -   Seriell
    -   Benutzeroberfläche
    -   Host

    Benutzer können wählen, ob sie Protokolle in einer .txt-Datei speichern و den Bildschirmschoner deaktivieren möchten أو لا.<br>

![Einstellungen Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** Diese Seite ermöglicht es den Benutzern:

    -   Auszuwählen, welche Kameradaten erfasst werden sollen.
    -   Die Auflösung festzulegen.
    -   Das Video-Stream-Format auszuwählen.

-   **Audio** Diese Seite befindet sich derzeit in der Entwicklung.<br>

![Einstellungen Zielsteuerung](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Zielsteuerung** Diese Seite bietet Optionen zur Konfiguration der Steuerungsmodi لـ das Zielgerät:

    -   **Steuermodi:**

        -   **Tastatur + Maus + USB HID-Gerät**
        -   **USB-Tastatur**
        -   **Tastatur + Maus**
        -   **USB HID-Gerät**

    -   **Setzen Sie die Vendor ID (VID) و die Product ID (PID), die vom Ziel gelesen werden.**
    -   **Definieren Sie den USB-Descriptor لـ das Ziel.**

### Bearbeiten

-   **Einfügen:** Sowohl die Einfügeoption im Bearbeitungsmenü als auch die Einfügetaste in der oberen linken Ecke ermöglichen es den Benutzern, Text aus der Zwischenablage des Hosts in das Zielgerät einzufügen.

### Steuerung

Dieses Menü bietet Optionen zum:<br>

-   Festlegen der Mausbewegungsmodi: Absolut أو Relativ. **Steuerung >> Mausmodus >> Absolut أو Relativ.**
-   Umschalten der Sichtbarkeit des Mauszeigers des Hosts. **Steuerung >> Maus Sichtbarkeit >> Automatisch Ausblenden أو Immer Anzeigen.**
-   Umschalten eines USB-Ports an der الأجهزة zwischen Ziel- و Hostnutzung. **Steuerung >> Umschaltbarer USB >> ZU Ziel أو Zu Host.**
-   Anpassen der Baudrate لـ die Chipحولtragung. **Steuerung >> Baudrate >> 9600, 115200.**

### Erweitert

Das Erweitert-Menü umfasst die folgenden Optionen:<br>
![Erweitert Menü](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Umgebungsprüfung:** Überprüft, ob die erforderlichen Treiber لـ die البرمجيات installiert sind.
-   **Seriellen Port zurücksetzen:** Startet den seriellen Port neu.
-   **Tastatur و Maus zurücksetzen:** Setzt die Einstellungen لـ Tastatur و Maus zurück.
-   **Werkseinstellung لـ HID-Chip:** Stellt den HID-Chip auf die Werkseinstellungen zurück.<br>
    ![Erweitert Serielles Konsolen](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serielle Konsole:** Öffnet ein neues Fenster, um alle Nachrichten zu حولwachen, die an den seriellen Port gesendet werden, مع Filtern لـ gesendete/empfangene Nachrichten.<br>
    ![Erweitert Skriptwerkzeug](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Skriptwerkzeug:** Führt AutoHotkey (AHK)-Skripte aus. Diese Funktion ahmt AutoHotkey nach, unterstützt jedoch nur eine Teilmenge von Maus-/Tastaturfunktionen و Screenshot-الميزات. Skripte wirken sich auf das Zielgerät aus.
-   **TCP-Server:** Empfängt AutoHotkey-Befehle حول TCP, um sie auf dem Zielgerät auszuführen.
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

-   Links zur offiziellen Website و Feedback-Formulare لـ البرمجيات-/الأجهزةprobleme.
-   Informationen zum Kauf von الأجهزة.
-   Eine Beschreibung der Umgebung der البرمجيات.
-   Über: Details zur Organisation.
-   Update: Überprüft auf البرمجيات-التحديثات.

## الميزات der Menüleiste (von links nach rechts)

Die Menüleiste umfasst von links nach rechts die folgenden الميزات:<br>

![Menüleiste](https://assets.openterface.com/images/qt/menubar.webp)

-   Auswahl der Tastaturbelegung: Wählen Sie die Tastaturbelegung aus.
-   Zoom-Steuerungen: Hineinzoomen, herauszoomen أو die Anzeige des erfassten Video-Streams zurücksetzen.
-   Virtuelle Tastatur: Enthält Funktionstasten و voreingestellte Tastenkombinationen.
-   Screenshot: Erfasst den gesamten Zielbildschirm و speichert ihn in einem Standardordner.
-   Vollbildmodus: Schaltet die Vollbildanzeige um.
-   Einfügen: Fügt Text aus der Zwischenablage des Hosts in das Ziel ein.
-   Mausbewegung: Lässt die Maus vordefinierte Bewegungen ausführen.
-   USB-Geräteanzeige: Zeigt an, ob ein USB-Gerät dem Ziel أو dem Host zugewiesen ist.

In der Zwischenzeit können Sie gerne unser Open-Source-**GitHub-Repository** erkوen: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) لـ den neuesten Code, التحديثات, Beispiele و um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich مع unserem Entwicklerteam و anderen großartigen Nutzern auszutauschen و حول KVM-bezogene Themen zu diskutieren.

Für direkten الدعم können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)
