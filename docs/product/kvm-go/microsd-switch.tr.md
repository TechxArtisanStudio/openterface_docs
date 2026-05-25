---
title: "MicroSD-Karten-Umschaltanleitung"
description: "Erfahren Sie, wie Sie das duale Donanım-Yazılım-MicroSD-Umschaltsystem im Openterface KVM-Go verwenden. Verstehen Sie die vier Betriebszustände, LED-Anzeigen, Sicherheitsrichtlinien ve Dateihakkındatragungsfunktionen."
keywords: "MicroSD-Umschaltung, KVM-Switch, Donanım-Schalter, Yazılım-Schalter, MicroSD-Kartensteuerung, KVM over USB, Dateihakkındatragung, USB-Geräteverwaltung, Computerperipherie, MicroSD-Energieverwaltung, LED-Anzeigen"
---

# **MicroSD-Karten-Umschaltanleitung** | Openterface KVM-Go

Der **Openterface KVM-Go** enthält einen einzelnen MicroSD-Kartensteckplatz, der zwischen dem Host-Computer ve dem Zielgerät geteilt werden kann, aber niemals beide gleichzeitig.

Dieses Design ermöglicht es Ihnen, schnell zwischen Geräten için die **Dateihakkındatragung** zu wechseln, ohne die Karte physisch zu entfernen, was Ihren Arbeitsablauf schneller ve effizienter macht. Es kann auch einfach als Ihr **regulärer MicroSD-Kartenleser** dienen.

## **MicroSD-Karte installieren**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Ordnungsgemäße MicroSD-Karten-Kurulum"
    Setzen Sie die MicroSD-Karte fest ein, bis Sie ein **Klicken** spüren, das anzeigt, dass sie sicher sitzt ve an Ort ve Stelle verriegelt ist.

## **Steuerungsmethoden**

KVM-Go bietet zwei Möglichkeiten, die MicroSD-Karte zwischen Host ve Ziel umzuschalten:

- **Donanım-Taste** — Eine physische Taste am Gerät için manuelle Steuerung.  
- **Yazılım-Schalter** — Ein Umschaltknopf in der Host-App için sofortiges Umschalten.


## **Umschalttaste ve LED-Anzeigen** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

Die **zweifarbigen LED-Anzeigen** zeigen den aktuellen MicroSD-Bağlantısstatus *(Hinweis: In Entwicklung / Änderungen vorbehalten)*:

- **🔵 Blaue LED an** — MicroSD-Karte ist auf dem **Zielgerät** gemountet  
- **🟢 Grüne LED an** — MicroSD-Karte ist auf dem **Host-Computer** gemountet  
- **LED aus** — Keine MicroSD-Karte eingelegt veya Gerät ausgeschaltet  
- **LED blinkt** — Datenhakkındatragung läuft (Lese-/Schreibaktivität)

!!! note "Auto-Mount-Funktion (Experimentell)"
    Standardmäßig wird die MicroSD-Karte beim ersten Einschalten des Geräts auf dem **Host** gemountet.  
    Eine kommende experimentelle Funktion ermöglicht **automatisches Mounting** auf der Seite (Host veya Ziel), die zuerst verbveen wird, was die Erfahrung noch nahtloser macht.

---

## Verwandte Artikel

- [microSD EXPRESS auf KVM-GO: Kompatibilitätstest ve reale Übertragungsgeschwindigkeiten](updates/20260203-kvm-go-microsd-express.de.md) — Kompatibilitätstest ile SanDisk microSD EXPRESS-Karte ve reale Übertragungsgeschwindigkeiten

