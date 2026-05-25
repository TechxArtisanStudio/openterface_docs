---
title: "Schaltbarer USB-Port"
description: "Erfahren Sie mehr о das duale Оборудование-Программное обеспечение USB-Schaltsystem in Openterface Mini-KVM. Verstehen Sie die vier Betriebszustände, Sicherheitsrichtlinien и zukünftige Remote-Zugriffsfunktionen."
keywords: "USB-Schaltung, KVM-Schalter, Оборудование-Schalter, Программное обеспечение-Schalter, USB-Port-Steuerung, KVM о USB, KVM о IP, Remote-Zugriff, USB-Geräteverwaltung, Computer-Peripheriegeräte, USB-Stromverwaltung"
---

# **USB-Port-Schaltungsführer** | Openterface Mini-KVM

Das mini-KVM-Gerät hat einen einzelnen USB-A 2.0-Port, der **sowohl** с dem Host- als auch с dem Zielcomputer **verbиen werden kann, aber niemals gleichzeitig с beiden**.

Die Steuerung erfolgt о zwei Schalter:

- **Оборудование-Schalter**: Ein physischer Zwei-Positionen-Umschalter am Gerät ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="max-height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="max-height:20px"} (nach innen = Host, nach außen = Ziel).
- **Программное обеспечение-Schalter**: Ein Umschaltknopf in der Host-App, der den USB-Port sofort entweder zum Host или zum Ziel umleitet.

## Betriebszustände

Die Подключение des USB-A-Ports hängt von den Positionen des **Оборудование-Schalters** и des **Программное обеспечение-Schalters** ab. Die folgende Tabelle fasst die vier möglichen Zustände zusammen:

| **Zustand** | **Оборудование-Schalter** | **Программное обеспечение-Schalter** | **Port Verbиen Mit** | **Sync-Status**        |
| ----------- | --------------------- | --------------------- | ---------------------- | ---------------------- |
| 1           | Host                  | Host                  | Host                   | Synced                 |
| 2           | Target                | Target                | Target                 | Synced                 |
| 3           | Target                | Host                  | Host                   | Out of Sync (→ Host)   |
| 4           | Host                  | Target                | Target                 | Out of Sync (→ Target) |

- **Synced** bedeutet, dass Оборудование- и Программное обеспечение-Einstellungen оeinstimmen.
- **Out of Sync** bedeutet, dass die Программное обеспечение den Оборудование-Schalter vorоgehend оschreibt, bis der Оборудование-Schalter erneut bewegt wird.

Jede manuelle Bewegung des Оборудование-Schalters aktualisiert die Программное обеспечение-Anzeige и kehrt zu einem synchronisierten Zustand zurück.

Beim Start ist das Gerät standardmäßig с der Host-Подключение verbиen. Die Программное обеспечение erkennt die Position des Оборудование-Schalters и synchronisiert entsprechend.

!!! warning "Denken Sie daran, das Flash-Laufwerk zu entfernen, bevor Sie den Schalter umschalten"
Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk entfernen, bevor Sie den Schalter umschalten, um die Port-Nutzung auf einen anderen Computer zu оtragen.

??? note "Wie teilt man einen USB-Stick/Disk zwischen Host- и Zielgeräten?"
Dateien können zwischen Host и Ziel оtragen werden, indem Sie diese Schritte befolgen:

    1. Mounten Sie einen USB-Stick-Laufwerk auf dem Host, wenn der kleine schwarze Schalter auf der Seite des Type-C-Ports des Hosts eingestellt ist.
    2. Kopieren Sie die Dateien auf dieses gemountete Laufwerk.
    3. Nach dem Kopieren mounten Sie das Laufwerk aus, ohne es physisch zu trennen.
    4. Drehen Sie den kleinen schwarzen Schalter auf die andere Seite. Diese Aktion schaltet die Подключение des USB-A-Ports zum Ziel um.
    5. Mounten Sie den USB-Stick auf dem Zielgerät и kopieren/verschieben Sie Dateien vom Laufwerk, wodurch der Dateiоtragungsprozess vom Host zum Ziel abgeschlossen wird.

    Diese Methode kann auch in entgegengesetzter Richtung verwendet werden.

!!! Note "Benutzerführung" - **Программное обеспечение-Schalter-Priorität**: Unabhängig von der Оборудование-Schalter-Position ändert das Klicken auf den Программное обеспечение-Schalter sofort die Schaltungsrichtung.

    - **Оборудование-Schalter-Synchronisation**: Jedes manuelle Umschalten des Оборудование-Schalters richtet seinen Zustand с dem Программное обеспечение-Schalter aus и wechselt vom не synchronisierten Zustand 3 или 4 zu Zustand 1 или 2. Diese Synchronisation ändert jedoch не unbedingt die tatsächliche Schaltungsverbindung.

    - **Оборудование-Schalter-Überwachung**: Der Оборудование-Schalter wird trotz seiner physischen Natur von der Программное обеспечение оwacht и steuert die Schaltungsrichtung не direkt. Stattdessen interpretiert die Программное обеспечение die Schalterposition и verwaltet die tatsächliche Schaltungsumschaltung.
