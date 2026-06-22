---
title: "SD-Karten-Anleitung | Erweiterungsmodul v2"
description: "Verwenden Sie das Lesen und Schreiben von SD-Karten auf dem Openterface uConsole KVM-Erweiterungsmodul v2. Wechseln Sie den Zugriff zwischen uConsole und Zielgerät für Imaging, Protokolle und Dateiübertragung."
keywords: "SD-Karte, microSD, KVM-Erweiterung v2, Image-Flash, Dateiübertragung, uConsole"
---

# **SD-Karten-Anleitung** | Erweiterungsmodul v2

Das Erweiterungsmodul v2 verfügt über **SD-Karten-Lese-/Schreibzugriff**, sodass Sie Images flashen, Protokolle exportieren und Dateien von Ihrem uConsole übertragen können, ohne einen externen Kartenleser mitführen zu müssen.

## Übersicht

Das Modul stellt einen microSD-Steckplatz bereit, der zwischen dem **uConsole (Host)** und dem **Zielgerät** geteilt wird — konzeptionell ähnlich dem KVM-GO MicroSD-Switching-Workflow, jedoch in das uConsole-Erweiterungsmodul integriert.

!!! note "Eine Seite zur gleichen Zeit"
    Die SD-Karte wird entweder am uConsole **oder** am Zielgerät eingebunden, niemals gleichzeitig an beiden. Wechseln Sie den Zugriff über die Openterface-Host-App.

## SD-Karte einsetzen

Setzen Sie die microSD-Karte fest ein, bis sie sicher im Modulsteckplatz sitzt.

## Steuerung über die Host-App

Verwenden Sie **Openterface QT** auf Ihrem uConsole, um:

- Den SD-Zugriff zwischen **Host** (uConsole) und **Ziel** zu wechseln
- Betriebssystem-Images von der uConsole auf die Karte zu schreiben
- Protokolle zu exportieren oder Dateien zu übertragen, ohne die Karte zu entfernen

Stellen Sie sicher, dass Sie die [Software-Einrichtung](/products/kvmext/software-setup/) abgeschlossen haben, bevor Sie die SD-Funktionen verwenden.

## Typische Arbeitsabläufe

| Arbeitsablauf | Beschreibung |
|----------|-------------|
| **OS-Imaging** | Flashen von Raspberry Pi-, Embedded-Board- oder Appliance-Images vom uConsole |
| **Protokollexport** | Protokolle vom Ziel auf die Karte ziehen und dann auf dem uConsole lesen |
| **Dateiübertragung** | Konfigurationen oder Skripte zwischen uConsole und Ziel verschieben, wenn kein Netzwerk verfügbar ist |

## Sicherheitstipps

- **Auswerfen/Trennen** Sie die Karte in der Host-App, bevor Sie sie physisch entfernen
- Wechseln Sie vor Lese-/Schreibvorgängen auf die richtige Seite (Host oder Ziel)
- Verwenden Sie qualitativ hochwertige microSD-Karten für Imaging-Workloads

## Verwandt

- [Mit Ziel verbinden](/products/kvmext/connect-to-target/)
- [Software-Einrichtung](/products/kvmext/software-setup/)
- [KVM-GO MicroSD-Switching-Anleitung](/products/kvmgo/microsd-switch/) — ähnliches Switching-Konzept bei KVM-GO
