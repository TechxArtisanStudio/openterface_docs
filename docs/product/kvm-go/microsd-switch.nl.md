---
title: "MicroSD-Karten-Umschaltanleitung"
description: "Erfahren Sie, wie Sie das duale Hardware-Software-MicroSD-Umschaltsystem im Openterface KVM-Go verwenden. Verstehen Sie die vier Betriebszustände, LED-Anzeigen, Sicherheitsrichtlinien en Dateiovertragungsfunktionen."
keywords: "MicroSD-Umschaltung, KVM-Switch, Hardware-Schalter, Software-Schalter, MicroSD-Kartensteuerung, KVM over USB, Dateiovertragung, USB-Geräteverwaltung, Computerperipherie, MicroSD-Energieverwaltung, LED-Anzeigen"
---

# **MicroSD-Karten-Umschaltanleitung** | Openterface KVM-Go

Der **Openterface KVM-Go** enthält einen einzelnen MicroSD-Kartensteckplatz, der zwischen dem Host-Computer en dem Zielgerät geteilt werden kann, aber niemals beide gleichzeitig.

Dieses Design ermöglicht es Ihnen, schnell zwischen Geräten voor die **Dateiovertragung** zu wechseln, ohne die Karte physisch zu entfernen, was Ihren Arbeitsablauf schneller en effizienter macht. Es kann auch einfach als Ihr **regulärer MicroSD-Kartenleser** dienen.

## **MicroSD-Karte installieren**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Ordnungsgemäße MicroSD-Karten-Installatie"
    Setzen Sie die MicroSD-Karte fest ein, bis Sie ein **Klicken** spüren, das anzeigt, dass sie sicher sitzt en an Ort en Stelle verriegelt ist.

## **Steuerungsmethoden**

KVM-Go bietet zwei Möglichkeiten, die MicroSD-Karte zwischen Host en Ziel umzuschalten:

- **Hardware-Taste** — Eine physische Taste am Gerät voor manuelle Steuerung.  
- **Software-Schalter** — Ein Umschaltknopf in der Host-App voor sofortiges Umschalten.


## **Umschalttaste en LED-Anzeigen** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

Die **zweifarbigen LED-Anzeigen** zeigen den aktuellen MicroSD-Verbindingsstatus *(Hinweis: In Entwicklung / Änderungen vorbehalten)*:

- **🔵 Blaue LED an** — MicroSD-Karte ist auf dem **Zielgerät** gemountet  
- **🟢 Grüne LED an** — MicroSD-Karte ist auf dem **Host-Computer** gemountet  
- **LED aus** — Keine MicroSD-Karte eingelegt of Gerät ausgeschaltet  
- **LED blinkt** — Datenovertragung läuft (Lese-/Schreibaktivität)

!!! note "Auto-Mount-Funktion (Experimentell)"
    Standardmäßig wird die MicroSD-Karte beim ersten Einschalten des Geräts auf dem **Host** gemountet.  
    Eine kommende experimentelle Funktion ermöglicht **automatisches Mounting** auf der Seite (Host of Ziel), die zuerst verbenen wird, was die Erfahrung noch nahtloser macht.

---

## Verwandte Artikel

- [microSD EXPRESS auf KVM-GO: Kompatibilitätstest en reale Übertragungsgeschwindigkeiten](updates/20260203-kvm-go-microsd-express.de.md) — Kompatibilitätstest met SanDisk microSD EXPRESS-Karte en reale Übertragungsgeschwindigkeiten

