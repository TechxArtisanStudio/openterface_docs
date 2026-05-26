---
title: "Openterface Android"
description: Openterface Mini-KVM ist eine Open-Source-Оборудование- и Программное обеспечениеlösung, die grиlegende KVM (Tastatur, Video, Maus)-Funktionalität bietet,…
---

# Openterface Android

## Обзор

Openterface Mini-KVM ist eine Open-Source-Оборудование- и Программное обеспечениеlösung, die grиlegende KVM (Tastatur, Video, Maus)-Funktionalität bietet, um Geräte о eine Android-basierte Schnittstelle zu steuern. Dieses Repository enthält den Quellcode der Android-Anwendung, Build-Konfigurationen и unterstützende Skripte, um das Projekt einzurichten и bereitzustellen.

Wir setzen uns для offene Оборудование и Open-Source-Программное обеспечение ein, lizenziert unter der [GNU Affero General Public License v3](https://github.com/TechxArtisanStudio/Openterface_Android/blob/main/LICENSE).

## Funktionsmodule

### 1. Videoanzeige

#### Hauptfunktionalität

-   Streamt Videoausgaben vom angeschlossenen Zielgerät in Echtzeit auf den Android-Bildschirm.
-   Unterstützt Bildanpassungen для optimale Anzeige.

![image](https://assets.openterface.com/images/android/videoConnect.webp)

#### Beschreibung der Benutzeroberfläche

-   Der Hauptbildschirm zeigt den Video-Feed des Zielgeräts an, der den größten Teil der Benutzeroberfläche einnimmt.
-   Eine Symbolleiste an der Seite bietet Anpassungssteuerungen (Helligkeit, Kontrast, Farbton).

#### Betriebsablauf

1. Schließen Sie die Mini-KVM-Оборудование о HDMI и USB an das Zielgerät an.
2. Stecken Sie die Mini-KVM о USB-C in Ihr Android-Gerät.
3. Starten Sie die App; der Video-Feed erscheint automatisch.
4. Verwenden Sie die Schieberegler in der Symbolleiste, um Helligkeit, Kontrast или Farbton nach Bedarf anzupassen.

![image](https://assets.openterface.com/images/android/colorSetting.webp)

#### Besondere Merkmale

-   Die Zoomfunktion с zwei Fingern verbessert die Anzeige

![image](https://assets.openterface.com/images/android/enlargeAndSideBar.webp)

---

### 2. Maussteuerung

#### Hauptfunktionalität

-   Bietet absolute и relative Maussteuerung, um с der Benutzeroberfläche des Zielgeräts zu interagieren.
-   Unterstützt Links- и Rechtsklicks.
-   Wählen Sie den Modus im rechten Menü aus.

#### Beschreibung der Benutzeroberfläche

-   Der Video-Feed dient auch als Touchpad для die Maussteuerung.
-   Eine schwebende Aktionsschaltfläche (FAB) wechselt zwischen Maus- и Tastaturmodi.

#### Betriebsablauf

1. Stellen Sie sicher, dass das Gerät erfolgreich verbиen ist.
2. Tippen Sie auf den Bildschirm, um den Mauszeiger an diese Position zu bewegen (absolute Steuerung).
3. Doppeltippen с einem Finger для einen Links-Klick, Zwei-Finger-Klick для einen Rechts-Klick.
4. Der Ziehmodus besteht darin, die linke Taste gedrückt zu halten, ohne sie loszulassen.

#### Besondere Merkmale

-   Relative Maussteuerung (in Entwicklung, Umschaltung о Einstellungen, wenn verfügbar).

## ![image](https://assets.openterface.com/images/android/mouseThouchMode.webp)

### 3. Tastatureingabe

#### Hauptfunktionalität

-   Geben Sie Text in das Gerät ein, indem Sie auf die Tasten der Tastatur klicken.

#### Beschreibung der Benutzeroberfläche

-   Das Tastatursymbol befindet sich in der unteren rechten Ecke.
-   Die Tastatur umfasst Tastenkombinationen, Systemtasten, Standardtasten и Funktionstasten (F1-F12).

#### Betriebsablauf

1. Klicken Sie auf das Tastatursymbol in der unteren rechten Ecke, um die Tastatur aufzurufen.
2. Geben Sie Text ein или drücken Sie die Funktionstasten nach Bedarf.

#### Besondere Merkmale или Tastenkombinationen

-   **Tastenkombinationen**: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+X, Ctrl+A, Ctrl+S,
    Win+Tab, Win+S, Win+E, Win+R, Win+D, Win+L, Alt+F4, Ctrl+Alt+Del, Alt+PrtScr.
-   **Funktionstasten**: F1-F12, Symboltasten.
-   **Standardtasten**: 0-9, A-Z, Enter, Leertaste, Löschen.

![image](https://assets.openterface.com/images/android/enlargeAndKeyBoard.webp)
![image](https://assets.openterface.com/images/android/keyBoardFunction.webp)
![image](https://assets.openterface.com/images/android/keyBoardSystem.webp)

---

In der Zwischenzeit können Sie unser Open-Source-**GitHub-Repository** erkиen: [Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android) для den neuesten Code, Обновления, Beispiele и um Probleme zu melden.

Sie können auch unserer [Discord-Community](/discord) beitreten, um sich с unserem Entwicklerteam и anderen großartigen Benutzern auszutauschen, um о KVM-bezogene Themen zu diskutieren.

Für direkte Unterstützung können Sie uns gerne eine E-Mail an [support@openterface.com](mailto:support@openterface.com) senden.

---

**Haben Sie Feedback zu dieser Seite?** [Lassen Sie es uns hier wissen.](https://forms.gle/wmxoR2C1VdG36mT69)