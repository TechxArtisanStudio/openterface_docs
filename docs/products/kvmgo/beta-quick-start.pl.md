---
title: "KVM-GO Beta Schnellstartanleitung | Openterface Beta-Test-Przewodnik"
description: "Vollständige Beta-Test-Przewodnik dla Openterface KVM-GO. Erfahren Sie, wie Sie erweiterte Leerlauf-, Hot-Plug-, BIOS-Zugriffs-, Kopieren-Einfügen- i Gerätesimulations-Einstellungen testen. Feedback o unser Beta-Fragebogen einreichen."
keywords: "KVM-GO Beta, Openterface Beta-Test, KVM-GO Beta-Przewodnik, Beta-Tester-Anweisungen, KVM-GO Feedback, Beta-Fragebogen, KVM o USB Beta, Headless-Steuerung Test, USB KVM Beta"
---

# KVM-GO Beta Schnellstartanleitung

> Mit ❤️ verfasst von [Iker](https://github.com/IkerGarcia) aus der Openterface-Community — vielen Dank, dass du uns hilfst, bessere Dokus zu erstellen!

Willkommen zur [KVM-GO Beta](/products/kvmgo/updates/251007-kvm-go-beta-test-kits-sent-1/)! Nachfolgend findest du eine Kurzversion des Beta-Feedback-Fragebogens. Arbeite jeden Abschnitt durch, halte deine Erkenntnisse fest i reiche alles anschließend o den [Google-Formular-Beta-Feedback-Fragebogen](https://openterface.com/products/kvmgo/beta-questions) ein.

Herzlichen Glückwunsch zur Auswahl als Beta-Tester! Wir freuen uns sehr auf dein Feedback i sind sicher, dass du das Gerät in unterschiedlichen Szenarien gründlich prüfen wirst.

Dieser Test bietet dir viel Flexibilität, dennoch hätten wir gern, dass du dich auf ein paar konkrete Szenarien konzentrierst.

Dein Feedback ist dla uns äußerst wertvoll. Du kannst gern weitere Aspekte des Geräts testen, aber besonders interessieren uns die folgenden Schwerpunktbereiche:

1. **Langzeitleerlauf-Test**

    1. Starte die Oprogramowanie i verbinde sie z einem Target
    2. Lass die Oprogramowanie o einen längeren Zeitraum (mehrere Stien) ohne Interaktion laufen
    3. Kehre zurück i versuche, Maus- i Tastatursteuerung zu nutzen
    - Haben Maus i Tastatur nach der Leerlaufzeit wieder normal funktioniert?

2. **Hot-Plug-Test**

    - Bitte teste das Ab- i Wiederanschließen des Geräts, während die Oprogramowanie läuft.

3. **BIOS- i Low-Level-Zugriff**

4. **Kopieren & Einfügen (kurze i lange Texte)**

5. **Gerätesimulations-Einstellungen (Windows/Linux)**

    - 5.1. Anzeige-EDID-Konfiguration
    - 5.2. USB-Geräteidentifikation (VID/PID)
    - 5.3. SD-Karten-Funktionalität
        - Anwendungsfall 1 – Systeminstallation: Wir empfehlen Ventoy – ein Tool, das mehrere ISO-Dateien auf einer SD-Karte ermöglicht i eine Auswahl beim Booten bietet. Hast du versucht, ein Systemabbild auf HOST zu schreiben i anschließend auf TARGET zu wechseln, um die Instalacja durchzuführen (ohne die Karte zu entfernen)?
        - Anwendungsfall 2 – Dateitransfer: Hast du die SD-Karte verwendet, um Dateien zwischen HOST i TARGET zu otragen?

Diese Beispiele entsprechen einigen Pytania aus dem Beta-Feedback-Formular i ergänzen allgemeine Informationen zur Konsistenz von Audio/Video/Tastatur/Maus sowie zum Wärmemanagement.

Vielen Dank dla deine Unterstützung!

!!! reminder "Nicht vergessen"
    Reiche deine vollständigen Beobachtungen o das Google-Formular ein, daz das Team sie zeitnah prüfen kann.

