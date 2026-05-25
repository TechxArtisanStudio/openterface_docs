---
title: "Schaltbarer USB-Port"
description: "Erfahren Sie mehr o das duale Sprzęt-Oprogramowanie USB-Schaltsystem in Openterface Mini-KVM. Verstehen Sie die vier Betriebszustände, Sicherheitsrichtlinien i zukünftige Remote-Zugriffsfunktionen."
keywords: "USB-Schaltung, KVM-Schalter, Sprzęt-Schalter, Oprogramowanie-Schalter, USB-Port-Steuerung, KVM o USB, KVM o IP, Remote-Zugriff, USB-Geräteverwaltung, Computer-Peripheriegeräte, USB-Stromverwaltung"
---

# **USB-Port-Schaltungsführer** | Openterface Mini-KVM

Das mini-KVM-Gerät hat einen einzelnen USB-A 2.0-Port, der **sowohl** z dem Host- als auch z dem Zielcomputer **verbien werden kann, aber niemals gleichzeitig z beiden**.

Die Steuerung erfolgt o zwei Schalter:

- **Sprzęt-Schalter**: Ein physischer Zwei-Positionen-Umschalter am Gerät ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="max-height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="max-height:20px"} (nach innen = Host, nach außen = Ziel).
- **Oprogramowanie-Schalter**: Ein Umschaltknopf in der Host-App, der den USB-Port sofort entweder zum Host lub zum Ziel umleitet.

## Betriebszustände

Die Połączenie des USB-A-Ports hängt von den Positionen des **Sprzęt-Schalters** i des **Oprogramowanie-Schalters** ab. Die folgende Tabelle fasst die vier möglichen Zustände zusammen:

| **Zustand** | **Sprzęt-Schalter** | **Oprogramowanie-Schalter** | **Port Verbien Mit** | **Sync-Status**        |
| ----------- | --------------------- | --------------------- | ---------------------- | ---------------------- |
| 1           | Host                  | Host                  | Host                   | Synced                 |
| 2           | Target                | Target                | Target                 | Synced                 |
| 3           | Target                | Host                  | Host                   | Out of Sync (→ Host)   |
| 4           | Host                  | Target                | Target                 | Out of Sync (→ Target) |

- **Synced** bedeutet, dass Sprzęt- i Oprogramowanie-Einstellungen oeinstimmen.
- **Out of Sync** bedeutet, dass die Oprogramowanie den Sprzęt-Schalter vorogehend oschreibt, bis der Sprzęt-Schalter erneut bewegt wird.

Jede manuelle Bewegung des Sprzęt-Schalters aktualisiert die Oprogramowanie-Anzeige i kehrt zu einem synchronisierten Zustand zurück.

Beim Start ist das Gerät standardmäßig z der Host-Połączenie verbien. Die Oprogramowanie erkennt die Position des Sprzęt-Schalters i synchronisiert entsprechend.

!!! warning "Denken Sie daran, das Flash-Laufwerk zu entfernen, bevor Sie den Schalter umschalten"
Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk entfernen, bevor Sie den Schalter umschalten, um die Port-Nutzung auf einen anderen Computer zu otragen.

??? note "Wie teilt man einen USB-Stick/Disk zwischen Host- i Zielgeräten?"
Dateien können zwischen Host i Ziel otragen werden, indem Sie diese Schritte befolgen:

    1. Mounten Sie einen USB-Stick-Laufwerk auf dem Host, wenn der kleine schwarze Schalter auf der Seite des Type-C-Ports des Hosts eingestellt ist.
    2. Kopieren Sie die Dateien auf dieses gemountete Laufwerk.
    3. Nach dem Kopieren mounten Sie das Laufwerk aus, ohne es physisch zu trennen.
    4. Drehen Sie den kleinen schwarzen Schalter auf die andere Seite. Diese Aktion schaltet die Połączenie des USB-A-Ports zum Ziel um.
    5. Mounten Sie den USB-Stick auf dem Zielgerät i kopieren/verschieben Sie Dateien vom Laufwerk, wodurch der Dateiotragungsprozess vom Host zum Ziel abgeschlossen wird.

    Diese Methode kann auch in entgegengesetzter Richtung verwendet werden.

!!! Note "Benutzerführung" - **Oprogramowanie-Schalter-Priorität**: Unabhängig von der Sprzęt-Schalter-Position ändert das Klicken auf den Oprogramowanie-Schalter sofort die Schaltungsrichtung.

    - **Sprzęt-Schalter-Synchronisation**: Jedes manuelle Umschalten des Sprzęt-Schalters richtet seinen Zustand z dem Oprogramowanie-Schalter aus i wechselt vom nie synchronisierten Zustand 3 lub 4 zu Zustand 1 lub 2. Diese Synchronisation ändert jedoch nie unbedingt die tatsächliche Schaltungsverbindung.

    - **Sprzęt-Schalter-Überwachung**: Der Sprzęt-Schalter wird trotz seiner physischen Natur von der Oprogramowanie owacht i steuert die Schaltungsrichtung nie direkt. Stattdessen interpretiert die Oprogramowanie die Schalterposition i verwaltet die tatsächliche Schaltungsumschaltung.
