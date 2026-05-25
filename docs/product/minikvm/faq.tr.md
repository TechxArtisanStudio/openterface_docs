---
title: FAQs için Openterface Mini-KVM
description: Häufig gestellte Sorular zum Mini-KVM, die Özellikler, Kompatibilität, Fehlerbehebung ve zukünftige Pläne abdecken.
keywords: Mini-KVM, Openterface, KVM-Switch, Open-Source, Fehlerbehebung, Videoaufnahme, USB, Kompatibilität, Diagnose Selbsttest, Tastatur Maus Steuerung, Donanım-Diagnose, Destek
---

# FAQs için Openterface Mini-KVM

Willkommen zu den FAQs için unser Flaggschiff **Openterface Mini-KVM**.  
Falls Sie değil finden, was Sie brauchen, **mailen Sie uns unter [info@openterface.com](mailto:info@openterface.com)** veya **treten Sie unserer Community** auf [Discord](/discord) veya [Reddit](/reddit) bei.

⚠️ _FAQs können veraltet sein — bitte lassen Sie uns wissen, wenn Sie etwas sehen, das aktualisiert werden muss._

---

## :material-clipboard-list: Schnelle Navigation

-   [USB-Port & Dateihakkındatragung](#usb-port--dateihakkındatragung)
-   [Technisch](#technisch)
-   [Steuerung](#steuerung)
-   [Video](#video)
-   [Fehlerbehebung](#fehlerbehebung)
-   [Mehr](#mehr)

---

## USB-Port & Dateihakkındatragung

**:material-chat-question:{ .faq } Kann es Dateien hakkındatragen?**

Ja — hakkında den schaltbaren USB-A-Port, der zwischen Host ve Ziel geteilt wird.

**:material-chat-question:{ .faq } Kann ich den USB-Port per Yazılım umschalten?**

Ja, auf Donanım-Version **v1.9+**.

**:material-chat-question:{ .faq } Warum USB 2.0 statt 3.0?**

USB 2.0 ist ausreichend için 1080p@30Hz Video + HID + Standard-Geschwindigkeits-Dateihakkındatragung ve bleibt dabei kompakt, kühler ve erschwinglicher.  
USB 3.0 könnte in zukünftigen Pro-Modellen erscheinen.

---

## Technisch

**:material-chat-question:{ .faq } Open-Source?**

Ja — zertifiziert von [OSHWA](https://certification.oshwa.org/cn000015.html). Donanım ve Yazılım sind auf [GitHub](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Donanım).

**:material-chat-question:{ .faq } BIOS-Zugriff**

Direkte USB-Bağlantı ermöglicht vollständige BIOS-Level-Kontrolle, anders als nur Remote-Tools (VNC, TeamViewer).  
Ältere Maschinen können BIOS-Probleme bei der Erkennung unseres USB-Hubs haben — bitte melden Sie solche Fälle.

**:material-chat-question:{ .faq } Video/Datenhakkındatragung**

Video wird hakkında HDMI erfasst ve hakkında USB 2.0 gesendet.  
Der schaltbare USB-Port ermöglicht es Ihnen, Laufwerke veya andere Geräte zu teilen.

**:material-chat-question:{ .faq } Stromversorgung**

Das Mini-KVM kann Strom von **beiden Seiten** (Host veya Ziel) ziehen. Die Seite ile dem **kürzeren Kabel** wird normalerweise zur Hauptstromquelle.  
Für stromsparende Ziele (z.B. Raspberry Pi) verwenden Sie eine dedizierte Stromversorgung statt Rückstromversorgung hakkında Mini-KVM.

**:material-chat-question:{ .faq } Kabellängen-Liiles**

-   Halten Sie das **orange Host USB-C-Kabel ≤1.5m**.
-   Für längere Kabel, Strom einspeisen hakkında:
    -   USB-A Stecker-Stecker-Kabel
    -   [Erweiterungs-Pins](/product/minikvm/extension-pins/)
    -   USB-C Y-Splitter
-   Gleiche Regel gilt için das **schwarze Ziel-Kabel**.

---

## Steuerung

**:material-chat-question:{ .faq } Tastatur ve Maus können den Zielcomputer değil steuern**

Wenn Sie den Ziel-Desktop sehen können, aber Tastatur- ve Mauseingaben değil reagieren, bedeutet dies meist, dass die HID-Kommunikation değil hergestellt wurde. Versuchen Sie diese Schritte:

1. **Kabelverbindungen prüfen** — Stellen Sie sicher, dass das Target Type-C-Kabel ile dem Zielcomputer verbveen ist; das Host-Kabel ile Ihrem Steuerungscomputer.
2. **Unversorgte USB-Hubs vermeiden** — Verwenden Sie Direktverbindung veya einen aktiven Hub.
3. **HID-Chip zurücksetzen** — Wenn das Gerät „eingefroren" wirkt, verwenden Sie **Erweitertes Menü → HID-Chip Werksreset** (OpenterfaceQt) veya **Serial Reset Tool** (macOS).
4. **Anderen USB-Port ausprobieren veya neu starten** — Das Host-Betriebssystem kann einen Port nach USB-Fehlern deaktivieren.
5. **Baudrate senken** — In störungsanfälligen Umgebungen auf 9600 bps umstellen için zuverlässigere Kommunikation.

Details siehe [Troubleshooting Tastatur- ve Maussteuerung](/product/minikvm/support/keyboard-mouse-control/).

**:material-chat-question:{ .faq } Drahtlose veya Ethernet-Version?**

Nicht eingebaut. Verwenden Sie einen Headless-Computer (z.B. Raspberry Pi) + Remote-Desktop için Fernsteuerung.

**:material-chat-question:{ .faq } PS/2-Kompatibilität?**

Nein — PS/2-Unterstützung könnte in zukünftigen Versionen erkveet werden.

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

Nicht için AAA-Gaming. Funktioniert gut için leichtere Spiele wie Minecraft veya Emulatoren.

**:material-chat-question:{ .faq } Fernsteuerung hakkında Internet**

Nicht eingebaut, aber koppeln Sie Mini-KVM ile Remote-Desktop-Yazılım auf dem Host.

**:material-chat-question:{ .faq } Andere Videoformate**

Verwenden Sie Adapter için VGA, DVI, DisplayPort, etc.

---

## Fehlerbehebung

**:material-chat-question:{ .faq } Wie führe ich Diagnosen durch, um zu prüfen, ob mein Mini-KVM funktioniert?**

Führen Sie den integrierten Diagnose-Selbsttest aus, um USB-Bağlantıen zu prüfen ve Donanım-Probleme zu erkennen:

- **macOS:** [Diagnose Selbsttest Kılavuz (macOS)](/product/minikvm/support/diagnostic-self-check/) — Einstellungen → Erweitert & Debug → Diagnose-Tool öffnen
- **Windows:** [Diagnose Selbsttest Kılavuz (Windows)](/product/minikvm/support/diagnostic-self-check-windows/) — Erweitert → Donanım-Diagnose

Die Diagnose testet Target/Host Plug & Play, Stresstest ve mehr. Wenn alle Tests bestehen, funktioniert Ihr Gerät einwandfrei.

**:material-chat-question:{ .faq } Wie melde ich ein Donanım-Problem an den Destek?**

Wenn der Diagnose-Selbsttest bei einem veya mehreren Tests **FEHLER** anzeigt:

1. Führen Sie die verbleibenden Diagnoseschritte aus (das Tool führt Sie).
2. Bei erkanntem Problem öffnet sich ein Fenster **Destek-E-Mail** veya **Defektbericht**.
3. Geben Sie **Bestellnummer** ve **Name** ein, kopieren Sie E-Mail-Adresse ve Entwurf.
4. Hängen Sie die **angeforderten Protokolldateien** an (das Tool zeigt an, welche) ve ein **Aufstellungsphoto** (Mini-KVM + Host/Ziel-Bağlantıen deutlich sichtbar).
5. Senden Sie die E-Mail an den Destek.

Schritt-için-Schritt-Kılavuz: [Diagnose Selbsttest Kılavuz (macOS)](/product/minikvm/support/diagnostic-self-check/) veya [Diagnose Selbsttest Kılavuz (Windows)](/product/minikvm/support/diagnostic-self-check-windows/).

**:material-chat-question:{ .faq } USB-Hub-Probleme**

Verwenden Sie einen **aktiven Hub**, um Spannungsabfälle zu vermeiden. Unversorgte Hubs können zu unzureichender Stromversorgung ve instabilem HID-Verhalten (Tastatur/Maus) führen. Details: [Troubleshooting Tastatur- ve Maussteuerung](/product/minikvm/support/keyboard-mouse-control/).

**:material-chat-question:{ .faq } App zeigt kein Video veya Steuerung reagiert değil**

1. Alle Kabel trennen, einige Sekveen warten, wieder verbinden.
2. [Troubleshooting Tastatur- ve Maussteuerung](/product/minikvm/support/keyboard-mouse-control/) için HID-Probleme prüfen (Kabel, Hubs, HID-Reset).
3. [Diagnose-Selbsttest](/product/minikvm/support/diagnostic-self-check/) (macOS) veya [Donanım-Diagnose](/product/minikvm/support/diagnostic-self-check-windows/) (Windows) ausführen.
4. Wenn ungelöst: Firmware prüfen veya Host-App aktualisieren.

**:material-chat-question:{ .faq } Seltsame Auflösungen wie 43184x24228@44Hz**

Erfassungs-Firmware wahrscheinlich auf Werkseinstellungen zurückgesetzt.  
Firmware neu flashen hakkında [GitHub-Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).

**:material-chat-question:{ .faq } Neu geflasht aber immer noch kaputt?**

-   Richtige USB-Enumeration verifizieren (`USB Tree Viewer` veya `lsusb -v`)
-   Neueste Host-App bestätigen
-   [Diagnose-Selbsttest](/product/minikvm/support/diagnostic-self-check/) ausführen, um Protokolle zu erfassen
-   Wenn weiterhin fehlschlagend: Destek ile Bestellnummer, Diagnose-Protokollen ve Aufstellungsphoto kontaktieren — siehe [Wie melde ich ein Donanım-Problem an den Destek?](#wie-melde-ich-ein-hardware-problem-an-den-support)
