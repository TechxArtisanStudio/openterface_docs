---
title: "KVM-GO Beta Schnellstartanleitung | Openterface Beta-Test-Handleiding"
description: "Vollständige Beta-Test-Handleiding voor Openterface KVM-GO. Erfahren Sie, wie Sie erweiterte Leerlauf-, Hot-Plug-, BIOS-Zugriffs-, Kopieren-Einfügen- en Gerätesimulations-Einstellungen testen. Feedback over unser Beta-Fragebogen einreichen."
keywords: "KVM-GO Beta, Openterface Beta-Test, KVM-GO Beta-Handleiding, Beta-Tester-Anweisungen, KVM-GO Feedback, Beta-Fragebogen, KVM over USB Beta, Headless-Steuerung Test, USB KVM Beta"
---

# KVM-GO Beta Schnellstartanleitung

> Mit ❤️ verfasst von [Iker](https://github.com/IkerGarcia) aus der Openterface-Community — vielen Dank, dass du uns hilfst, bessere Dokus zu erstellen!

Willkommen zur [KVM-GO Beta](/product/kvm-go/updates/251007-kvm-go-beta-test-kits-sent-1/)! Nachfolgend findest du eine Kurzversion des Beta-Feedback-Fragebogens. Arbeite jeden Abschnitt durch, halte deine Erkenntnisse fest en reiche alles anschließend over den [Google-Formular-Beta-Feedback-Fragebogen](https://openterface.com/product/kvm-go/beta-questions) ein.

Herzlichen Glückwunsch zur Auswahl als Beta-Tester! Wir freuen uns sehr auf dein Feedback en sind sicher, dass du das Gerät in unterschiedlichen Szenarien gründlich prüfen wirst.

Dieser Test bietet dir viel Flexibilität, dennoch hätten wir gern, dass du dich auf ein paar konkrete Szenarien konzentrierst.

Dein Feedback ist voor uns äußerst wertvoll. Du kannst gern weitere Aspekte des Geräts testen, aber besonders interessieren uns die folgenden Schwerpunktbereiche:

1. **Langzeitleerlauf-Test**

    1. Starte die Software en verbinde sie met einem Target
    2. Lass die Software over einen längeren Zeitraum (mehrere Stenen) ohne Interaktion laufen
    3. Kehre zurück en versuche, Maus- en Tastatursteuerung zu nutzen
    - Haben Maus en Tastatur nach der Leerlaufzeit wieder normal funktioniert?

2. **Hot-Plug-Test**

    - Bitte teste das Ab- en Wiederanschließen des Geräts, während die Software läuft.

3. **BIOS- en Low-Level-Zugriff**

4. **Kopieren & Einfügen (kurze en lange Texte)**

5. **Gerätesimulations-Einstellungen (Windows/Linux)**

    - 5.1. Anzeige-EDID-Konfiguration
    - 5.2. USB-Geräteidentifikation (VID/PID)
    - 5.3. SD-Karten-Funktionalität
        - Anwendungsfall 1 – Systeminstallation: Wir empfehlen Ventoy – ein Tool, das mehrere ISO-Dateien auf einer SD-Karte ermöglicht en eine Auswahl beim Booten bietet. Hast du versucht, ein Systemabbild auf HOST zu schreiben en anschließend auf TARGET zu wechseln, um die Installatie durchzuführen (ohne die Karte zu entfernen)?
        - Anwendungsfall 2 – Dateitransfer: Hast du die SD-Karte verwendet, um Dateien zwischen HOST en TARGET zu overtragen?

Diese Beispiele entsprechen einigen Vragen aus dem Beta-Feedback-Formular en ergänzen allgemeine Informationen zur Konsistenz von Audio/Video/Tastatur/Maus sowie zum Wärmemanagement.

Vielen Dank voor deine Unterstützung!

!!! reminder "Nicht vergessen"
    Reiche deine vollständigen Beobachtungen over das Google-Formular ein, damet das Team sie zeitnah prüfen kann.

