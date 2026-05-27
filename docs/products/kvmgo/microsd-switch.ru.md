---
title: "MicroSD-Karten-Umschaltanleitung"
description: "Erfahren Sie, wie Sie das duale Оборудование-Программное обеспечение-MicroSD-Umschaltsystem im Openterface KVM-Go verwenden. Verstehen Sie die vier Betriebszustände, LED-Anzeigen, Sicherheitsrichtlinien и Dateiоtragungsfunktionen."
keywords: "MicroSD-Umschaltung, KVM-Switch, Оборудование-Schalter, Программное обеспечение-Schalter, MicroSD-Kartensteuerung, KVM over USB, Dateiоtragung, USB-Geräteverwaltung, Computerperipherie, MicroSD-Energieverwaltung, LED-Anzeigen"
---

# **MicroSD-Karten-Umschaltanleitung** | Openterface KVM-Go

Der **Openterface KVM-Go** enthält einen einzelnen MicroSD-Kartensteckplatz, der zwischen dem Host-Computer и dem Zielgerät geteilt werden kann, aber niemals beide gleichzeitig.

Dieses Design ermöglicht es Ihnen, schnell zwischen Geräten для die **Dateiоtragung** zu wechseln, ohne die Karte physisch zu entfernen, was Ihren Arbeitsablauf schneller и effizienter macht. Es kann auch einfach als Ihr **regulärer MicroSD-Kartenleser** dienen.

## **MicroSD-Karte installieren**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Ordnungsgemäße MicroSD-Karten-Установка"
    Setzen Sie die MicroSD-Karte fest ein, bis Sie ein **Klicken** spüren, das anzeigt, dass sie sicher sitzt и an Ort и Stelle verriegelt ist.

## **Steuerungsmethoden**

KVM-Go bietet zwei Möglichkeiten, die MicroSD-Karte zwischen Host и Ziel umzuschalten:

- **Оборудование-Taste** — Eine physische Taste am Gerät для manuelle Steuerung.  
- **Программное обеспечение-Schalter** — Ein Umschaltknopf in der Host-App для sofortiges Umschalten.


## **Umschalttaste и LED-Anzeigen** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

Die **zweifarbigen LED-Anzeigen** zeigen den aktuellen MicroSD-Подключениеsstatus *(Hinweis: In Entwicklung / Änderungen vorbehalten)*:

- **🔵 Blaue LED an** — MicroSD-Karte ist auf dem **Zielgerät** gemountet  
- **🟢 Grüne LED an** — MicroSD-Karte ist auf dem **Host-Computer** gemountet  
- **LED aus** — Keine MicroSD-Karte eingelegt или Gerät ausgeschaltet  
- **LED blinkt** — Datenоtragung läuft (Lese-/Schreibaktivität)

!!! note "Auto-Mount-Funktion (Experimentell)"
    Standardmäßig wird die MicroSD-Karte beim ersten Einschalten des Geräts auf dem **Host** gemountet.  
    Eine kommende experimentelle Funktion ermöglicht **automatisches Mounting** auf der Seite (Host или Ziel), die zuerst verbиen wird, was die Erfahrung noch nahtloser macht.

---

## Verwandte Artikel

- [microSD EXPRESS auf KVM-GO: Kompatibilitätstest и reale Übertragungsgeschwindigkeiten](updates/20260203-kvm-go-microsd-express.de.md) — Kompatibilitätstest с SanDisk microSD EXPRESS-Karte и reale Übertragungsgeschwindigkeiten

