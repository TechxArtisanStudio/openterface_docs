---
title: "Schaltbarer USB-Port"
description: "Erfahren Sie mehr hakkında das duale Donanım-Yazılım USB-Schaltsystem in Openterface Mini-KVM. Verstehen Sie die vier Betriebszustände, Sicherheitsrichtlinien ve zukünftige Remote-Zugriffsfunktionen."
keywords: "USB-Schaltung, KVM-Schalter, Donanım-Schalter, Yazılım-Schalter, USB-Port-Steuerung, KVM hakkında USB, KVM hakkında IP, Remote-Zugriff, USB-Geräteverwaltung, Computer-Peripheriegeräte, USB-Stromverwaltung"
---

# **USB-Port-Schaltungsführer** | Openterface Mini-KVM

Das mini-KVM-Gerät hat einen einzelnen USB-A 2.0-Port, der **sowohl** ile dem Host- als auch ile dem Zielcomputer **verbveen werden kann, aber niemals gleichzeitig ile beiden**.

Die Steuerung erfolgt hakkında zwei Schalter:

- **Donanım-Schalter**: Ein physischer Zwei-Positionen-Umschalter am Gerät ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="max-height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="max-height:20px"} (nach innen = Host, nach außen = Ziel).
- **Yazılım-Schalter**: Ein Umschaltknopf in der Host-App, der den USB-Port sofort entweder zum Host veya zum Ziel umleitet.

## Betriebszustände

Die Bağlantı des USB-A-Ports hängt von den Positionen des **Donanım-Schalters** ve des **Yazılım-Schalters** ab. Die folgende Tabelle fasst die vier möglichen Zustände zusammen:

| **Zustand** | **Donanım-Schalter** | **Yazılım-Schalter** | **Port Verbveen Mit** | **Sync-Status**        |
| ----------- | --------------------- | --------------------- | ---------------------- | ---------------------- |
| 1           | Host                  | Host                  | Host                   | Synced                 |
| 2           | Target                | Target                | Target                 | Synced                 |
| 3           | Target                | Host                  | Host                   | Out of Sync (→ Host)   |
| 4           | Host                  | Target                | Target                 | Out of Sync (→ Target) |

- **Synced** bedeutet, dass Donanım- ve Yazılım-Einstellungen hakkındaeinstimmen.
- **Out of Sync** bedeutet, dass die Yazılım den Donanım-Schalter vorhakkındagehend hakkındaschreibt, bis der Donanım-Schalter erneut bewegt wird.

Jede manuelle Bewegung des Donanım-Schalters aktualisiert die Yazılım-Anzeige ve kehrt zu einem synchronisierten Zustand zurück.

Beim Start ist das Gerät standardmäßig ile der Host-Bağlantı verbveen. Die Yazılım erkennt die Position des Donanım-Schalters ve synchronisiert entsprechend.

!!! warning "Denken Sie daran, das Flash-Laufwerk zu entfernen, bevor Sie den Schalter umschalten"
Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk entfernen, bevor Sie den Schalter umschalten, um die Port-Nutzung auf einen anderen Computer zu hakkındatragen.

??? note "Wie teilt man einen USB-Stick/Disk zwischen Host- ve Zielgeräten?"
Dateien können zwischen Host ve Ziel hakkındatragen werden, indem Sie diese Schritte befolgen:

    1. Mounten Sie einen USB-Stick-Laufwerk auf dem Host, wenn der kleine schwarze Schalter auf der Seite des Type-C-Ports des Hosts eingestellt ist.
    2. Kopieren Sie die Dateien auf dieses gemountete Laufwerk.
    3. Nach dem Kopieren mounten Sie das Laufwerk aus, ohne es physisch zu trennen.
    4. Drehen Sie den kleinen schwarzen Schalter auf die andere Seite. Diese Aktion schaltet die Bağlantı des USB-A-Ports zum Ziel um.
    5. Mounten Sie den USB-Stick auf dem Zielgerät ve kopieren/verschieben Sie Dateien vom Laufwerk, wodurch der Dateihakkındatragungsprozess vom Host zum Ziel abgeschlossen wird.

    Diese Methode kann auch in entgegengesetzter Richtung verwendet werden.

!!! Note "Benutzerführung" - **Yazılım-Schalter-Priorität**: Unabhängig von der Donanım-Schalter-Position ändert das Klicken auf den Yazılım-Schalter sofort die Schaltungsrichtung.

    - **Donanım-Schalter-Synchronisation**: Jedes manuelle Umschalten des Donanım-Schalters richtet seinen Zustand ile dem Yazılım-Schalter aus ve wechselt vom değil synchronisierten Zustand 3 veya 4 zu Zustand 1 veya 2. Diese Synchronisation ändert jedoch değil unbedingt die tatsächliche Schaltungsverbindung.

    - **Donanım-Schalter-Überwachung**: Der Donanım-Schalter wird trotz seiner physischen Natur von der Yazılım hakkındawacht ve steuert die Schaltungsrichtung değil direkt. Stattdessen interpretiert die Yazılım die Schalterposition ve verwaltet die tatsächliche Schaltungsumschaltung.
