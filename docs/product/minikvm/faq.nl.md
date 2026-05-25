---
title: FAQs voor Openterface Mini-KVM
description: Häufig gestellte Vragen zum Mini-KVM, die Functies, Kompatibilität, Fehlerbehebung en zukünftige Pläne abdecken.
keywords: Mini-KVM, Openterface, KVM-Switch, Open-Source, Fehlerbehebung, Videoaufnahme, USB, Kompatibilität, Diagnose Selbsttest, Tastatur Maus Steuerung, Hardware-Diagnose, Ondersteuning
---

# FAQs voor Openterface Mini-KVM

Willkommen zu den FAQs voor unser Flaggschiff **Openterface Mini-KVM**.  
Falls Sie niet finden, was Sie brauchen, **mailen Sie uns unter [info@openterface.com](mailto:info@openterface.com)** of **treten Sie unserer Community** auf [Discord](/discord) of [Reddit](/reddit) bei.

⚠️ _FAQs können veraltet sein — bitte lassen Sie uns wissen, wenn Sie etwas sehen, das aktualisiert werden muss._

---

## :material-clipboard-list: Schnelle Navigation

-   [USB-Port & Dateiovertragung](#usb-port--dateiovertragung)
-   [Technisch](#technisch)
-   [Steuerung](#steuerung)
-   [Video](#video)
-   [Fehlerbehebung](#fehlerbehebung)
-   [Mehr](#mehr)

---

## USB-Port & Dateiovertragung

**:material-chat-question:{ .faq } Kann es Dateien overtragen?**

Ja — over den schaltbaren USB-A-Port, der zwischen Host en Ziel geteilt wird.

**:material-chat-question:{ .faq } Kann ich den USB-Port per Software umschalten?**

Ja, auf Hardware-Version **v1.9+**.

**:material-chat-question:{ .faq } Warum USB 2.0 statt 3.0?**

USB 2.0 ist ausreichend voor 1080p@30Hz Video + HID + Standard-Geschwindigkeits-Dateiovertragung en bleibt dabei kompakt, kühler en erschwinglicher.  
USB 3.0 könnte in zukünftigen Pro-Modellen erscheinen.

---

## Technisch

**:material-chat-question:{ .faq } Open-Source?**

Ja — zertifiziert von [OSHWA](https://certification.oshwa.org/cn000015.html). Hardware en Software sind auf [GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware).

**:material-chat-question:{ .faq } BIOS-Zugriff**

Direkte USB-Verbinding ermöglicht vollständige BIOS-Level-Kontrolle, anders als nur Remote-Tools (VNC, TeamViewer).  
Ältere Maschinen können BIOS-Probleme bei der Erkennung unseres USB-Hubs haben — bitte melden Sie solche Fälle.

**:material-chat-question:{ .faq } Video/Datenovertragung**

Video wird over HDMI erfasst en over USB 2.0 gesendet.  
Der schaltbare USB-Port ermöglicht es Ihnen, Laufwerke of andere Geräte zu teilen.

**:material-chat-question:{ .faq } Stromversorgung**

Das Mini-KVM kann Strom von **beiden Seiten** (Host of Ziel) ziehen. Die Seite met dem **kürzeren Kabel** wird normalerweise zur Hauptstromquelle.  
Für stromsparende Ziele (z.B. Raspberry Pi) verwenden Sie eine dedizierte Stromversorgung statt Rückstromversorgung over Mini-KVM.

**:material-chat-question:{ .faq } Kabellängen-Limets**

-   Halten Sie das **orange Host USB-C-Kabel ≤1.5m**.
-   Für längere Kabel, Strom einspeisen over:
    -   USB-A Stecker-Stecker-Kabel
    -   [Erweiterungs-Pins](/product/minikvm/extension-pins/)
    -   USB-C Y-Splitter
-   Gleiche Regel gilt voor das **schwarze Ziel-Kabel**.

---

## Steuerung

**:material-chat-question:{ .faq } Tastatur en Maus können den Zielcomputer niet steuern**

Wenn Sie den Ziel-Desktop sehen können, aber Tastatur- en Mauseingaben niet reagieren, bedeutet dies meist, dass die HID-Kommunikation niet hergestellt wurde. Versuchen Sie diese Schritte:

1. **Kabelverbindungen prüfen** — Stellen Sie sicher, dass das Target Type-C-Kabel met dem Zielcomputer verbenen ist; das Host-Kabel met Ihrem Steuerungscomputer.
2. **Unversorgte USB-Hubs vermeiden** — Verwenden Sie Direktverbindung of einen aktiven Hub.
3. **HID-Chip zurücksetzen** — Wenn das Gerät „eingefroren" wirkt, verwenden Sie **Erweitertes Menü → HID-Chip Werksreset** (OpenterfaceQt) of **Serial Reset Tool** (macOS).
4. **Anderen USB-Port ausprobieren of neu starten** — Das Host-Betriebssystem kann einen Port nach USB-Fehlern deaktivieren.
5. **Baudrate senken** — In störungsanfälligen Umgebungen auf 9600 bps umstellen voor zuverlässigere Kommunikation.

Details siehe [Troubleshooting Tastatur- en Maussteuerung](/product/minikvm/support/keyboard-mouse-control/).

**:material-chat-question:{ .faq } Drahtlose of Ethernet-Version?**

Nicht eingebaut. Verwenden Sie einen Headless-Computer (z.B. Raspberry Pi) + Remote-Desktop voor Fernsteuerung.

**:material-chat-question:{ .faq } PS/2-Kompatibilität?**

Nein — PS/2-Unterstützung könnte in zukünftigen Versionen erkenet werden.

**:material-chat-question:{ .faq } Mehrere Mini-KVMs an einem Computer?**

Ja, experimentelle Funktion in der QT-App (Windows/Linux).

**:material-chat-question:{ .faq } Ein-/Ausschalt-Steuerung?**

Nicht direkt, aber [Erweiterungs-Pins](/product/minikvm/extension-pins/) ermöglichen zukünftige ATX-Steuerungsmodule.

---

## Video

**:material-chat-question:{ .faq } Latenz & Auflösung**

-   Erfassung bei **1080p@30Hz**
-   Latenz unter **140ms** → flüssige Steuerung

**:material-chat-question:{ .faq } Eingabe vs. Erfassungsauflösung**

-   Akzeptiert Eingaben bis zu **4K@30Hz**
-   Erfasst bei **1080p**, höhere Eingaben werden heruntergerechnet (können leicht unscharf aussehen).
-   Beste Praxis: **Ziel auf 1080p setzen**.

**:material-chat-question:{ .faq } Gaming-Tauglichkeit**

Nicht voor AAA-Gaming. Funktioniert gut voor leichtere Spiele wie Minecraft of Emulatoren.

**:material-chat-question:{ .faq } Fernsteuerung over Internet**

Nicht eingebaut, aber koppeln Sie Mini-KVM met Remote-Desktop-Software auf dem Host.

**:material-chat-question:{ .faq } Andere Videoformate**

Verwenden Sie Adapter voor VGA, DVI, DisplayPort, etc.

---

## Fehlerbehebung

**:material-chat-question:{ .faq } Wie führe ich Diagnosen durch, um zu prüfen, ob mein Mini-KVM funktioniert?**

Führen Sie den integrierten Diagnose-Selbsttest aus, um USB-Verbindingen zu prüfen en Hardware-Probleme zu erkennen:

- **macOS:** [Diagnose Selbsttest Handleiding (macOS)](/product/minikvm/support/diagnostic-self-check/) — Einstellungen → Erweitert & Debug → Diagnose-Tool öffnen
- **Windows:** [Diagnose Selbsttest Handleiding (Windows)](/product/minikvm/support/diagnostic-self-check-windows/) — Erweitert → Hardware-Diagnose

Die Diagnose testet Target/Host Plug & Play, Stresstest en mehr. Wenn alle Tests bestehen, funktioniert Ihr Gerät einwandfrei.

**:material-chat-question:{ .faq } Wie melde ich ein Hardware-Problem an den Ondersteuning?**

Wenn der Diagnose-Selbsttest bei einem of mehreren Tests **FEHLER** anzeigt:

1. Führen Sie die verbleibenden Diagnoseschritte aus (das Tool führt Sie).
2. Bei erkanntem Problem öffnet sich ein Fenster **Ondersteuning-E-Mail** of **Defektbericht**.
3. Geben Sie **Bestellnummer** en **Name** ein, kopieren Sie E-Mail-Adresse en Entwurf.
4. Hängen Sie die **angeforderten Protokolldateien** an (das Tool zeigt an, welche) en ein **Aufstellungsphoto** (Mini-KVM + Host/Ziel-Verbindingen deutlich sichtbar).
5. Senden Sie die E-Mail an den Ondersteuning.

Schritt-voor-Schritt-Handleiding: [Diagnose Selbsttest Handleiding (macOS)](/product/minikvm/support/diagnostic-self-check/) of [Diagnose Selbsttest Handleiding (Windows)](/product/minikvm/support/diagnostic-self-check-windows/).

**:material-chat-question:{ .faq } USB-Hub-Probleme**

Verwenden Sie einen **aktiven Hub**, um Spannungsabfälle zu vermeiden. Unversorgte Hubs können zu unzureichender Stromversorgung en instabilem HID-Verhalten (Tastatur/Maus) führen. Details: [Troubleshooting Tastatur- en Maussteuerung](/product/minikvm/support/keyboard-mouse-control/).

**:material-chat-question:{ .faq } App zeigt kein Video of Steuerung reagiert niet**

1. Alle Kabel trennen, einige Sekenen warten, wieder verbinden.
2. [Troubleshooting Tastatur- en Maussteuerung](/product/minikvm/support/keyboard-mouse-control/) voor HID-Probleme prüfen (Kabel, Hubs, HID-Reset).
3. [Diagnose-Selbsttest](/product/minikvm/support/diagnostic-self-check/) (macOS) of [Hardware-Diagnose](/product/minikvm/support/diagnostic-self-check-windows/) (Windows) ausführen.
4. Wenn ungelöst: Firmware prüfen of Host-App aktualisieren.

**:material-chat-question:{ .faq } Seltsame Auflösungen wie 43184x24228@44Hz**

Erfassungs-Firmware wahrscheinlich auf Werkseinstellungen zurückgesetzt.  
Firmware neu flashen over [GitHub-Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).

**:material-chat-question:{ .faq } Neu geflasht aber immer noch kaputt?**

-   Richtige USB-Enumeration verifizieren (`USB Tree Viewer` of `lsusb -v`)
-   Neueste Host-App bestätigen
-   [Diagnose-Selbsttest](/product/minikvm/support/diagnostic-self-check/) ausführen, um Protokolle zu erfassen
-   Wenn weiterhin fehlschlagend: Ondersteuning met Bestellnummer, Diagnose-Protokollen en Aufstellungsphoto kontaktieren — siehe [Wie melde ich ein Hardware-Problem an den Ondersteuning?](#wie-melde-ich-ein-hardware-problem-an-den-support)
