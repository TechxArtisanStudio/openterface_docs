---
title: "MicroSD-Karten-Umschaltanleitung"
description: "Erfahren Sie, wie Sie das duale Sprzęt-Oprogramowanie-MicroSD-Umschaltsystem im Openterface KVM-Go verwenden. Verstehen Sie die vier Betriebszustände, LED-Anzeigen, Sicherheitsrichtlinien i Dateiotragungsfunktionen."
keywords: "MicroSD-Umschaltung, KVM-Switch, Sprzęt-Schalter, Oprogramowanie-Schalter, MicroSD-Kartensteuerung, KVM over USB, Dateiotragung, USB-Geräteverwaltung, Computerperipherie, MicroSD-Energieverwaltung, LED-Anzeigen"
---

# **MicroSD-Karten-Umschaltanleitung** | Openterface KVM-Go

Der **Openterface KVM-Go** enthält einen einzelnen MicroSD-Kartensteckplatz, der zwischen dem Host-Computer i dem Zielgerät geteilt werden kann, aber niemals beide gleichzeitig.

Dieses Design ermöglicht es Ihnen, schnell zwischen Geräten dla die **Dateiotragung** zu wechseln, ohne die Karte physisch zu entfernen, was Ihren Arbeitsablauf schneller i effizienter macht. Es kann auch einfach als Ihr **regulärer MicroSD-Kartenleser** dienen.

## **MicroSD-Karte installieren**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Ordnungsgemäße MicroSD-Karten-Instalacja"
    Setzen Sie die MicroSD-Karte fest ein, bis Sie ein **Klicken** spüren, das anzeigt, dass sie sicher sitzt i an Ort i Stelle verriegelt ist.

## **Steuerungsmethoden**

KVM-Go bietet zwei Möglichkeiten, die MicroSD-Karte zwischen Host i Ziel umzuschalten:

- **Sprzęt-Taste** — Eine physische Taste am Gerät dla manuelle Steuerung.  
- **Oprogramowanie-Schalter** — Ein Umschaltknopf in der Host-App dla sofortiges Umschalten.


## **Umschalttaste i LED-Anzeigen** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

Die **zweifarbigen LED-Anzeigen** zeigen den aktuellen MicroSD-Połączeniesstatus *(Hinweis: In Entwicklung / Änderungen vorbehalten)*:

- **🔵 Blaue LED an** — MicroSD-Karte ist auf dem **Zielgerät** gemountet  
- **🟢 Grüne LED an** — MicroSD-Karte ist auf dem **Host-Computer** gemountet  
- **LED aus** — Keine MicroSD-Karte eingelegt lub Gerät ausgeschaltet  
- **LED blinkt** — Datenotragung läuft (Lese-/Schreibaktivität)

!!! note "Auto-Mount-Funktion (Experimentell)"
    Standardmäßig wird die MicroSD-Karte beim ersten Einschalten des Geräts auf dem **Host** gemountet.  
    Eine kommende experimentelle Funktion ermöglicht **automatisches Mounting** auf der Seite (Host lub Ziel), die zuerst verbien wird, was die Erfahrung noch nahtloser macht.

---

## Verwandte Artikel

- [microSD EXPRESS auf KVM-GO: Kompatibilitätstest i reale Übertragungsgeschwindigkeiten](updates/20260203-kvm-go-microsd-express.de.md) — Kompatibilitätstest z SanDisk microSD EXPRESS-Karte i reale Übertragungsgeschwindigkeiten

