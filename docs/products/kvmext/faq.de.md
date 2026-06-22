---
title: "FAQs | Erweiterungsmodul v2"
description: "FAQs zum Openterface uConsole KVM-Erweiterungsmodul v2: Ethernet-Karten, Upgrade-Kit, SD-Karte, Software-Setup, Kompatibilität und Fehlerbehebung."
keywords: "KVM-Erweiterung v2 FAQ, uConsole KVM, Ethernet, SD-Karte, Fehlerbehebung, Upgrade-Kit"
---

# FAQs | Erweiterungsmodul v2

Willkommen bei den FAQ zum **Openterface uConsole KVM-Erweiterungsmodul v2**.

Wenn Sie nicht finden, was Sie brauchen, senden Sie eine E-Mail an [support@openterface.com](mailto:support@openterface.com) oder treten Sie unserer Community auf [Discord](/discord) bei.

---

## :material-clipboard-list: Schnellnavigation

- [Produkt & Kauf](#produkt--kauf)
- [Installation & Hardware](#installation--hardware)
- [Kompatibilität](#kompatibilität)
- [Steuerung & Funktionen](#steuerung--funktionen)
- [Video & Audio](#video--audio)
- [Fehlerbehebung](#fehlerbehebung)
- [Weiteres](#weiteres)

---

## Produkt & Kauf

**:material-chat-question:{ .faq } Ist das Erweiterungsmodul v2 ein Produkt oder zwei Netzwerkversionen?**

Es ist **ein Produkt**. Sowohl die 100M- als auch die 1000M-Ethernet-Karten sind im Lieferumfang enthalten. Siehe [Kaufoptionen](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Welche Ethernet-Karte sollte ich verwenden?**

Verwenden Sie die **100M**-Karte auf allen uConsole-Basisplatinen. Verwenden Sie die **1000M**-Karte nur, wenn Sie das **HackerGadgets uConsole Upgrade-Kit** besitzen und Gigabit-Netzwerk benötigen. Siehe [Ethernet-Anleitung](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Benötige ich das HackerGadgets uConsole Upgrade-Kit?**

Nur für **Gigabit-Ethernet**. Die 100M-Karte funktioniert ohne das Upgrade-Kit. Wenn Sie das Kit nicht haben, wählen Sie die Bundle-Option an der Kasse oder kaufen Sie das Kit separat.

**:material-chat-question:{ .faq } Ist die uConsole enthalten?**

Nein. Das ClockworkPi uConsole-Gerät wird separat verkauft.

---

## Installation & Hardware

**:material-chat-question:{ .faq } Wie funktioniert das Erweiterungsmodul v2?**

Es erfasst HDMI von einem Zielgerät und zeigt es auf der uConsole an. Die uConsole-Tastatur und der Trackball steuern das Ziel über USB-HID-Emulation. Optionale Ethernet- und SD-Karten-Funktionen erweitern die Netzwerk-Debug- und Imaging-Workflows.

**:material-chat-question:{ .faq } Kann ich dies verwenden, wenn das 4G/LTE-Modul installiert ist?**

Nein. Das Erweiterungsmodul v2 nutzt den uConsole-Erweiterungssteckplatz und kann **nicht** gleichzeitig mit dem 4G- oder LTE-Modul verwendet werden.

**:material-chat-question:{ .faq } Welche Werkzeuge benötige ich für die Installation?**

Einen Sechskantschraubendreher für die Befestigungsschrauben. ESD-Vorsichtsmaßnahmen werden empfohlen.

**:material-chat-question:{ .faq } Ist die Installation reversibel?**

Ja. Entfernen Sie das Erweiterungsmodul v2 und installieren Sie bei Bedarf Ihr ursprüngliches 4G/LTE-Modul wieder.

---

## Kompatibilität

**:material-chat-question:{ .faq } Welche uConsole-Modelle sind kompatibel?**

Kompatibel mit uConsole-Geräten, die den Standard-Erweiterungssteckplatz besitzen. Überprüfen Sie die Spezifikationen Ihres Geräts, um dies zu bestätigen.

**:material-chat-question:{ .faq } Welche Zielgeräte kann ich steuern?**

Jedes Gerät mit HDMI-Ausgang: Desktops, Server, SBCs (Raspberry Pi usw.), eingebettete Systeme, Industrie-PCs und mehr.

**:material-chat-question:{ .faq } Benötigt das Ziel spezielle Software?**

Nein. KVM nutzt USB-HID-Emulation — keine Treiber auf dem Ziel für Tastatur und Maus erforderlich. Erfahren Sie mehr über die [USB-basierte KVM-Technologie](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Kann ich mehrere Ziele gleichzeitig steuern?**

Ein Ziel gleichzeitig für KVM. Wechseln Sie die Ziele, indem Sie HDMI- und USB-Kabel umstecken.

---

## Steuerung & Funktionen

**:material-chat-question:{ .faq } Kann ich Dateien über die SD-Karte übertragen?**

Ja. Das Erweiterungsmodul v2 unterstützt SD-Karten-Lese-/Schreibzugriff mit Host/Ziel-Umschaltung über die Openterface-App. Siehe [SD-Karten-Anleitung](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Unterstützt es BIOS-Level-Zugriff?**

Ja. Direkte USB-HID ermöglicht vollen BIOS/UEFI-Zugriff ohne Netzwerkabhängigkeiten.

**:material-chat-question:{ .faq } Was ist mit dem Legacy-v1-Modul?**

Das Modell der ersten Generation mit 37 × 77 mm (kein Ethernet/SD) ist unter [Legacy v1 Docs](/products/kvmext/v1/) dokumentiert.

---

## Video & Audio

**:material-chat-question:{ .faq } Welche Videoauflösungen werden unterstützt?**

- **Eingang**: Bis zu 4K @ 30 Hz (RGB/YCBCR444) oder 4K @ 60 Hz (YCBCR420) über HDMI
- **Ausgang**: 1080p @ 60 Hz auf dem uConsole-Bildschirm

**:material-chat-question:{ .faq } Wie hoch ist die Videolatenz?**

Unter **70 ms** — geeignet für BIOS-Zugriff, Wartung und Diagnose.

**:material-chat-question:{ .faq } Wird Audio unterstützt?**

Ja. In HDMI eingebettetes Audio wird an die uConsole-Lautsprecher durchgeleitet.

---

## Fehlerbehebung

**:material-chat-question:{ .faq } Kein Videosignal**

- HDMI-Verbindungen an beiden Enden prüfen
- Sicherstellen, dass das Ziel eingeschaltet ist und über HDMI ausgibt
- Ein anderes HDMI-Kabel ausprobieren
- Openterface QT neu starten

**:material-chat-question:{ .faq } Tastatur oder Maus funktioniert nicht**

- USB-Kabel vom Erweiterungsmodul zum Ziel bestätigen
- uConsole vollständig herunterfahren, 10 Sekunden warten, einschalten, erneut versuchen
- Openterface QT neu installieren (arm64-Build für Ihre uConsole)
- Melden Sie Ihre Linux-Distribution und Ihr CM4-Modul auf [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) oder [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Software war schwer zu installieren**

Versuchen Sie GitHub Releases (Option 1) oder das ClockworkPi Community-Repo (Option 3) im [Software-Setup](/products/kvmext/software-setup/). Treten Sie [Discord](https://openterface.com/discord) bei, um schrittweise Hilfe zu erhalten.

**:material-chat-question:{ .faq } USB-Umschaltport funktioniert nicht**

Stellen Sie sicher, dass Sie eine aktuelle Version von Openterface QT verwenden. Schalten Sie den USB-Zugriff in der Host-App um. Wenn das Problem weiterhin besteht, erstellen Sie ein Issue auf [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI wird nur in einem Rahmen angezeigt / kein App-Einstellungsmenü**

Aktualisieren Sie auf die neueste Openterface QT. Überprüfen Sie das [Software-Setup](/products/kvmext/software-setup/) und Community-Threads auf Discord für uConsole-spezifische Anzeigeeinstellungen.

**:material-chat-question:{ .faq } App erkennt das Modul nicht**

- Platine im Erweiterungssteckplatz neu einsetzen
- uConsole neu starten
- Openterface QT neu installieren

---

## Weiteres

**:material-chat-question:{ .faq } Ist die Software Open Source?**

Ja. Openterface-Host-Apps sind Open Source auf [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Wo kann ich Unterstützung erhalten?**

- **E-Mail**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Treten Sie unserer Community bei](https://openterface.com/discord)
- **GitHub**: [Issues melden](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
