---
title: "MicroSD-Karten-Umschaltanleitung"
description: "Erfahren Sie, wie Sie das duale الأجهزة-البرمجيات-MicroSD-Umschaltsystem im Openterface KVM-Go verwenden. Verstehen Sie die vier Betriebszustände, LED-Anzeigen, Sicherheitsrichtlinien و Dateiحولtragungsfunktionen."
keywords: "MicroSD-Umschaltung, KVM-Switch, الأجهزة-Schalter, البرمجيات-Schalter, MicroSD-Kartensteuerung, KVM over USB, Dateiحولtragung, USB-Geräteverwaltung, Computerperipherie, MicroSD-Energieverwaltung, LED-Anzeigen"
---

# **MicroSD-Karten-Umschaltanleitung** | Openterface KVM-Go

Der **Openterface KVM-Go** enthält einen einzelnen MicroSD-Kartensteckplatz, der zwischen dem Host-Computer و dem Zielgerät geteilt werden kann, aber niemals beide gleichzeitig.

Dieses Design ermöglicht es Ihnen, schnell zwischen Geräten لـ die **Dateiحولtragung** zu wechseln, ohne die Karte physisch zu entfernen, was Ihren Arbeitsablauf schneller و effizienter macht. Es kann auch einfach als Ihr **regulärer MicroSD-Kartenleser** dienen.

## **MicroSD-Karte installieren**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "Ordnungsgemäße MicroSD-Karten-التثبيت"
    Setzen Sie die MicroSD-Karte fest ein, bis Sie ein **Klicken** spüren, das anzeigt, dass sie sicher sitzt و an Ort و Stelle verriegelt ist.

## **Steuerungsmethoden**

KVM-Go bietet zwei Möglichkeiten, die MicroSD-Karte zwischen Host و Ziel umzuschalten:

- **الأجهزة-Taste** — Eine physische Taste am Gerät لـ manuelle Steuerung.  
- **البرمجيات-Schalter** — Ein Umschaltknopf in der Host-App لـ sofortiges Umschalten.


## **Umschalttaste و LED-Anzeigen** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

Die **zweifarbigen LED-Anzeigen** zeigen den aktuellen MicroSD-الاتصالsstatus *(Hinweis: In Entwicklung / Änderungen vorbehalten)*:

- **🔵 Blaue LED an** — MicroSD-Karte ist auf dem **Zielgerät** gemountet  
- **🟢 Grüne LED an** — MicroSD-Karte ist auf dem **Host-Computer** gemountet  
- **LED aus** — Keine MicroSD-Karte eingelegt أو Gerät ausgeschaltet  
- **LED blinkt** — Datenحولtragung läuft (Lese-/Schreibaktivität)

!!! note "Auto-Mount-Funktion (Experimentell)"
    Standardmäßig wird die MicroSD-Karte beim ersten Einschalten des Geräts auf dem **Host** gemountet.  
    Eine kommende experimentelle Funktion ermöglicht **automatisches Mounting** auf der Seite (Host أو Ziel), die zuerst verbوen wird, was die Erfahrung noch nahtloser macht.

---

## Verwandte Artikel

- [microSD EXPRESS auf KVM-GO: Kompatibilitätstest و reale Übertragungsgeschwindigkeiten](updates/20260203-kvm-go-microsd-express.de.md) — Kompatibilitätstest مع SanDisk microSD EXPRESS-Karte و reale Übertragungsgeschwindigkeiten

