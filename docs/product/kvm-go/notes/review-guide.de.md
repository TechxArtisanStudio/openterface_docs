# Openterface KVM-Go — Review-Leitfaden (Engineering-Prototyp)

## Übersicht

Vielen Dank, dass Sie sich die Zeit nehmen, unser kommendes Produkt **[Openterface KVM-Go](https://openterface.com/product/kvm-go/)** zu testen.

Diese Einheit ist ein **Engineering-Prototyp**, und unsere Firmware und Software entwickeln sich schnell weiter. Ihr Feedback hilft uns direkt, das Produkt vor der Massenproduktion zu verbessern.

Wenn Sie während der Tests auf Probleme stoßen, kontaktieren Sie uns bitte direkt. **Wir bieten sofortige Unterstützung, um diese zu lösen, bevor Sie Ihr Video aufnehmen.**

## Wichtige Hinweise

### Prototyp-Hinweis

Dieses Gerät ist ein **Engineering-Prototyp**. Die Firmware und Software können noch Fehler oder unvollständige Funktionen enthalten. Wenn Sie Instabilität oder etwas erleben, das Ihren Workflow blockiert, lassen Sie es uns wissen. Wir beheben Probleme, bevor die Produktionsversion ausgeliefert wird.

### Neueste Software verwenden

Für beste Leistung und Kompatibilität verwenden Sie bitte die **neueste Version** der [Openterface-Software](https://openterface.com/app/overview/) von unserer GitHub-Releases-Seite. Wir aktualisieren häufig, und ältere Versionen passen möglicherweise nicht zur Firmware Ihres Prototyps.

## Bekannte Probleme und Erklärungen

> **Hinweis:** Alle unten aufgeführten Probleme werden vor der Produktionsversion behoben.

### Oberflächentemperatur

Das Gerät kann sich während der Nutzung warm oder sogar heiß anfühlen. Dies ist zu erwarten, da der Prototyp leistungsstärkere Chips verwendet.

Bitte beachten Sie:

* Alle Temperaturen bleiben im sicheren Betriebsbereich
* Eingebaute **Temperatursensoren** melden den Echtzeit-Thermalstatus in der Software
* Mehrtägige Stresstests zeigen keine Stabilitätsprobleme

Wir werden die thermische Leistung vor der Massenproduktion weiter optimieren.

### Software-Verteilung

Wir unterstützen derzeit mehrere Plattformen:

* **macOS und Windows**
  Dies sind die stabilsten Plattformen und werden für vollständige Funktionstests empfohlen.

* **Linux**
  Bitte verwenden Sie die **AppImage**-Version.
  Die `.deb`- und `.rpm`-Pakete können je nach Distribution Abhängigkeitsprobleme haben. Wir verbessern diese Installer.

* **Android**
  Eine funktionierende Version ist im **Google Play Store** für grundlegende Steuerung und Überwachung verfügbar.
  Sie können sie ausprobieren, wenn Sie mobile Workflows erkunden möchten.

* **iPadOS**
  Verfügbar über **TestFlight**.
  Wenn Sie es testen möchten, senden Sie mir bitte Ihre **Apple ID**, und ich füge Sie zur Testerliste hinzu.

### Kopieren und Einfügen

Die Firmware auf Ihrer Einheit enthält möglicherweise nicht unsere neuesten Clipboard-Fixes. Diese Probleme wurden in der neuesten Firmware bereits behoben. Sie können mit dem [Firmware-Upgrade-Leitfaden](firmware-upgrade.md) aktualisieren, wenn Sie die neueste Version testen möchten.

### Teardown (Optional)

Wenn Sie Teardowns mögen, dürfen Sie die Einheit gerne zerlegen.

Ihr Prototyp enthält folgende Komponenten:

* **MS2130S** — Video-Capture-Chip
* **WCH CH32V208** — USB-Tastatur- und Maus-Emulations-MCU
* **Standard-Silicon-Wärmeleitpaste** — auf diesem Prototyp aufgetragen

Wir testen derzeit eine verbesserte thermische Lösung mit **Aluminiumkomponenten** und **leistungsstärkerem Wärmeleitfett**. Diese Verbesserungen haben interne Tests bestanden, sind aber aufgrund begrenzter Prototyp-Bestände **noch nicht** in den Review-Einheiten enthalten.

Ihre Einheit verwendet weiterhin **Silicon-Paste**, aber die thermische Leistung bleibt im sicheren Bereich.

### Erweiterte Funktionen (in Mini-KVM unterstützt, demnächst für KVM-Go)

KVM-Go folgt derselben Designphilosophie wie Openterface Mini-KVM. Mehrere erweiterte Funktionen sind in aktiver Entwicklung, aber im aktuellen Prototyp **noch nicht verfügbar**:

* **Benutzerdefiniertes EDID**
  Mini-KVM ermöglicht das Laden oder Ändern von EDID über unsere QT-Anwendung zur Lösung von Kompatibilitätsproblemen.
  Wir bringen diese Funktion auch zu KVM-Go.

* **Softwarebasiertes SD-Karten-Umschalten**
  Mini-KVM unterstützt das Umschalten seines USB-A-Anschlusses zwischen Host und PC per Software.
  Für KVM-Go entwickeln wir eine ähnliche softwarebasierte Umschaltung für den micro-SD-Slot, aber sie ist in Ihrer Firmware noch nicht aktiviert.

Wir möchten, dass Sie sich dieser kommenden Funktionen bewusst sind, auch wenn sie auf Ihrer Einheit noch nicht aktiv sind.

### Open-Source-Verpflichtung

Ja, KVM-Go bleibt vollständig Open Source. Sobald das Hardware-Design für die Massenproduktion finalisiert ist, werden wir die OSHWA-Zertifizierung (Open Source Hardware Association) beantragen. Alle Hardware-Designdateien und STL-Modelle werden in unser GitHub-Repository hochgeladen: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Weiterführende Informationen

* [KVM-Go Firmware-Upgrade](firmware-upgrade.md) — Schritt-für-Schritt-Anleitung zur Geräteaktualisierung
