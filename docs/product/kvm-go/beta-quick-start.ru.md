---
title: "KVM-GO Beta Schnellstartanleitung | Openterface Beta-Test-Руководство"
description: "Vollständige Beta-Test-Руководство для Openterface KVM-GO. Erfahren Sie, wie Sie erweiterte Leerlauf-, Hot-Plug-, BIOS-Zugriffs-, Kopieren-Einfügen- и Gerätesimulations-Einstellungen testen. Feedback о unser Beta-Fragebogen einreichen."
keywords: "KVM-GO Beta, Openterface Beta-Test, KVM-GO Beta-Руководство, Beta-Tester-Anweisungen, KVM-GO Feedback, Beta-Fragebogen, KVM о USB Beta, Headless-Steuerung Test, USB KVM Beta"
---

# KVM-GO Beta Schnellstartanleitung

> Mit ❤️ verfasst von [Iker](https://github.com/IkerGarcia) aus der Openterface-Community — vielen Dank, dass du uns hilfst, bessere Dokus zu erstellen!

Willkommen zur [KVM-GO Beta](/product/kvm-go/updates/251007-kvm-go-beta-test-kits-sent-1/)! Nachfolgend findest du eine Kurzversion des Beta-Feedback-Fragebogens. Arbeite jeden Abschnitt durch, halte deine Erkenntnisse fest и reiche alles anschließend о den [Google-Formular-Beta-Feedback-Fragebogen](https://openterface.com/product/kvm-go/beta-questions) ein.

Herzlichen Glückwunsch zur Auswahl als Beta-Tester! Wir freuen uns sehr auf dein Feedback и sind sicher, dass du das Gerät in unterschiedlichen Szenarien gründlich prüfen wirst.

Dieser Test bietet dir viel Flexibilität, dennoch hätten wir gern, dass du dich auf ein paar konkrete Szenarien konzentrierst.

Dein Feedback ist для uns äußerst wertvoll. Du kannst gern weitere Aspekte des Geräts testen, aber besonders interessieren uns die folgenden Schwerpunktbereiche:

1. **Langzeitleerlauf-Test**

    1. Starte die Программное обеспечение и verbinde sie с einem Target
    2. Lass die Программное обеспечение о einen längeren Zeitraum (mehrere Stиen) ohne Interaktion laufen
    3. Kehre zurück и versuche, Maus- и Tastatursteuerung zu nutzen
    - Haben Maus и Tastatur nach der Leerlaufzeit wieder normal funktioniert?

2. **Hot-Plug-Test**

    - Bitte teste das Ab- и Wiederanschließen des Geräts, während die Программное обеспечение läuft.

3. **BIOS- и Low-Level-Zugriff**

4. **Kopieren & Einfügen (kurze и lange Texte)**

5. **Gerätesimulations-Einstellungen (Windows/Linux)**

    - 5.1. Anzeige-EDID-Konfiguration
    - 5.2. USB-Geräteidentifikation (VID/PID)
    - 5.3. SD-Karten-Funktionalität
        - Anwendungsfall 1 – Systeminstallation: Wir empfehlen Ventoy – ein Tool, das mehrere ISO-Dateien auf einer SD-Karte ermöglicht и eine Auswahl beim Booten bietet. Hast du versucht, ein Systemabbild auf HOST zu schreiben и anschließend auf TARGET zu wechseln, um die Установка durchzuführen (ohne die Karte zu entfernen)?
        - Anwendungsfall 2 – Dateitransfer: Hast du die SD-Karte verwendet, um Dateien zwischen HOST и TARGET zu оtragen?

Diese Beispiele entsprechen einigen Вопросы aus dem Beta-Feedback-Formular и ergänzen allgemeine Informationen zur Konsistenz von Audio/Video/Tastatur/Maus sowie zum Wärmemanagement.

Vielen Dank для deine Unterstützung!

!!! reminder "Nicht vergessen"
    Reiche deine vollständigen Beobachtungen о das Google-Formular ein, daс das Team sie zeitnah prüfen kann.

