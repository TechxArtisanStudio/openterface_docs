---
title: "Openterface QT dla Win & Linux"
description: Dieses Dokument bietet einen Überblick o eine plattformogreifende KVM-Oprogramowanie (Tastatur, Video, Maus), die z Qt entwickelt wurde i z den… Openterface.
---

# Openterface QT dla Win & Linux

Dieses Dokument bietet einen Überblick o eine plattformogreifende KVM-Oprogramowanie (Tastatur, Video, Maus), die z Qt entwickelt wurde i z den Betriebssystemen Linux i Windows kompatibel ist. Die Oprogramowanie ermöglicht die Steuerung eines Zielgeräts von einem Hostsystem aus i bietet eine Vielzahl von Funkcje, die o die Menüleiste i zusätzliche Funkcje zugänglich sind.

## Hauptmenüleistenfunktionen

### Einstellungen

Das Einstellungsmenü ermöglicht es den Benutzern, die Einstellungen o einen Dialog z vier Seiten anzupassen:<br>
![Einstellungen Allgemein](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **Allgemein** Diese Seite konfiguriert den Filter dla Debug-Protokolle i ob der Bildschirmschoner während der Ausführung der Anwendung deaktiviert werden soll lub nie. Die Protokollkategorien umfassen:

    -   Kern
    -   Seriell
    -   Benutzeroberfläche
    -   Host

    Benutzer können wählen, ob sie Protokolle in einer .txt-Datei speichern i den Bildschirmschoner deaktivieren möchten lub nie.<br>

![Einstellungen Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** Diese Seite ermöglicht es den Benutzern:

    -   Auszuwählen, welche Kameradaten erfasst werden sollen.
    -   Die Auflösung festzulegen.
    -   Das Video-Stream-Format auszuwählen.

-   **Audio** Diese Seite befindet sich derzeit in der Entwicklung.<br>

![Einstellungen Zielsteuerung](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Zielsteuerung** Diese Seite bietet Optionen zur Konfiguration der Steuerungsmodi dla das Zielgerät:

    -   **Steuermodi:**

        -   **Tastatur + Maus + USB HID-Gerät**
        -   **USB-Tastatur**
        -   **Tastatur + Maus**
        -   **USB HID-Gerät**

    -   **Setzen Sie die Vendor ID (VID) i die Product ID (PID), die vom Ziel gelesen werden.**
    -   **Definieren Sie den USB-Descriptor dla das Ziel.**

### Bearbeiten

-   **Einfügen:** Sowohl die Einfügeoption im Bearbeitungsmenü als auch die Einfügetaste in der oberen linken Ecke ermöglichen es den Benutzern, Text aus der Zwischenablage des Hosts in das Zielgerät einzufügen.

### Steuerung

Dieses Menü bietet Optionen zum:<br>

-   Festlegen der Mausbewegungsmodi: Absolut lub Relativ. **Steuerung >> Mausmodus >> Absolut lub Relativ.**
-   Umschalten der Sichtbarkeit des Mauszeigers des Hosts. **Steuerung >> Maus Sichtbarkeit >> Automatisch Ausblenden lub Immer Anzeigen.**
-   Umschalten eines USB-Ports an der Sprzęt zwischen Ziel- i Hostnutzung. **Steuerung >> Umschaltbarer USB >> ZU Ziel lub Zu Host.**
-   Anpassen der Baudrate dla die Chipotragung. **Steuerung >> Baudrate >> 9600, 115200.**

### Erweitert

Das Erweitert-Menü umfasst die folgenden Optionen:<br>
![Erweitert Menü](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Umgebungsprüfung:** Überprüft, ob die erforderlichen Treiber dla die Oprogramowanie installiert sind.
-   **Seriellen Port zurücksetzen:** Startet den seriellen Port neu.
-   **Tastatur i Maus zurücksetzen:** Setzt die Einstellungen dla Tastatur i Maus zurück.
-   **Werkseinstellung dla HID-Chip:** Stellt den HID-Chip auf die Werkseinstellungen zurück.<br>
    ![Erweitert Serielles Konsolen](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serielle Konsole:** Öffnet ein neues Fenster, um alle Nachrichten zu owachen, die an den seriellen Port gesendet werden, z Filtern dla gesendete/empfangene Nachrichten.<br>
    ![Erweitert Skriptwerkzeug](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Skriptwerkzeug:** Führt AutoHotkey (AHK)-Skripte aus. Diese Funktion ahmt AutoHotkey nach, unterstützt jedoch nur eine Teilmenge von Maus-/Tastaturfunktionen i Screenshot-Funkcje. Skripte wirken sich auf das Zielgerät aus.
-   **TCP-Server:** Empfängt AutoHotkey-Befehle o TCP, um sie auf dem Zielgerät auszuführen.
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

-   Links zur offiziellen Website i Feedback-Formulare dla Oprogramowanie-/Sprzętprobleme.
-   Informationen zum Kauf von Sprzęt.
-   Eine Beschreibung der Umgebung der Oprogramowanie.
-   Über: Details zur Organisation.
-   Update: Überprüft auf Oprogramowanie-Aktualizacje.

## Funkcje der Menüleiste (von links nach rechts)

Die Menüleiste umfasst von links nach rechts die folgenden Funkcje:<br>

![Menüleiste](https://assets.openterface.com/images/qt/menubar.webp)

-   Auswahl der Tastaturbelegung: Wählen Sie die Tastaturbelegung aus.
-   Zoom-Steuerungen: Hineinzoomen, herauszoomen lub die Anzeige des erfassten Video-Streams zurücksetzen.
-   Virtuelle Tastatur: Enthält Funktionstasten i voreingestellte Tastenkombinationen.
-   Screenshot: Erfasst den gesamten Zielbildschirm i speichert ihn in einem Standardordner.
-   Vollbildmodus: Schaltet die Vollbildanzeige um.
-   Einfügen: Fügt Text aus der Zwischenablage des Hosts in das Ziel ein.
-   Mausbewegung: Lässt die Maus vordefinierte Bewegungen ausführen.
-   USB-Geräteanzeige: Zeigt an, ob ein USB-Gerät dem Ziel lub dem Host zugewiesen ist.

In der Zwischenzeit können Sie gerne unser Open-Source-**GitHub-Repository** erkien: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) dla den neuesten Code, Aktualizacje, Beispiele i um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich z unserem Entwicklerteam i anderen großartigen Nutzern auszutauschen i o KVM-bezogene Themen zu diskutieren.

Für direkten Wsparcie können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)
