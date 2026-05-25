---
title: "Schaltbarer USB-Port"
description: "Erfahren Sie mehr حول das duale الأجهزة-البرمجيات USB-Schaltsystem in Openterface Mini-KVM. Verstehen Sie die vier Betriebszustände, Sicherheitsrichtlinien و zukünftige Remote-Zugriffsfunktionen."
keywords: "USB-Schaltung, KVM-Schalter, الأجهزة-Schalter, البرمجيات-Schalter, USB-Port-Steuerung, KVM حول USB, KVM حول IP, Remote-Zugriff, USB-Geräteverwaltung, Computer-Peripheriegeräte, USB-Stromverwaltung"
---

# **USB-Port-Schaltungsführer** | Openterface Mini-KVM

Das mini-KVM-Gerät hat einen einzelnen USB-A 2.0-Port, der **sowohl** مع dem Host- als auch مع dem Zielcomputer **verbوen werden kann, aber niemals gleichzeitig مع beiden**.

Die Steuerung erfolgt حول zwei Schalter:

- **الأجهزة-Schalter**: Ein physischer Zwei-Positionen-Umschalter am Gerät ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t.svg#only-light){:style="max-height:20px"} ![Toggle Switch](https://assets.openterface.com/images/shell-icons/toggle-h-t_1.svg#only-dark){:style="max-height:20px"} (nach innen = Host, nach außen = Ziel).
- **البرمجيات-Schalter**: Ein Umschaltknopf in der Host-App, der den USB-Port sofort entweder zum Host أو zum Ziel umleitet.

## Betriebszustände

Die الاتصال des USB-A-Ports hängt von den Positionen des **الأجهزة-Schalters** و des **البرمجيات-Schalters** ab. Die folgende Tabelle fasst die vier möglichen Zustände zusammen:

| **Zustand** | **الأجهزة-Schalter** | **البرمجيات-Schalter** | **Port Verbوen Mit** | **Sync-Status**        |
| ----------- | --------------------- | --------------------- | ---------------------- | ---------------------- |
| 1           | Host                  | Host                  | Host                   | Synced                 |
| 2           | Target                | Target                | Target                 | Synced                 |
| 3           | Target                | Host                  | Host                   | Out of Sync (→ Host)   |
| 4           | Host                  | Target                | Target                 | Out of Sync (→ Target) |

- **Synced** bedeutet, dass الأجهزة- و البرمجيات-Einstellungen حولeinstimmen.
- **Out of Sync** bedeutet, dass die البرمجيات den الأجهزة-Schalter vorحولgehend حولschreibt, bis der الأجهزة-Schalter erneut bewegt wird.

Jede manuelle Bewegung des الأجهزة-Schalters aktualisiert die البرمجيات-Anzeige و kehrt zu einem synchronisierten Zustand zurück.

Beim Start ist das Gerät standardmäßig مع der Host-الاتصال verbوen. Die البرمجيات erkennt die Position des الأجهزة-Schalters و synchronisiert entsprechend.

!!! warning "Denken Sie daran, das Flash-Laufwerk zu entfernen, bevor Sie den Schalter umschalten"
Wenn der USB-Port von einem Flash-Laufwerk verwendet wird, stellen Sie sicher, dass Sie das Flash-Laufwerk entfernen, bevor Sie den Schalter umschalten, um die Port-Nutzung auf einen anderen Computer zu حولtragen.

??? note "Wie teilt man einen USB-Stick/Disk zwischen Host- و Zielgeräten?"
Dateien können zwischen Host و Ziel حولtragen werden, indem Sie diese Schritte befolgen:

    1. Mounten Sie einen USB-Stick-Laufwerk auf dem Host, wenn der kleine schwarze Schalter auf der Seite des Type-C-Ports des Hosts eingestellt ist.
    2. Kopieren Sie die Dateien auf dieses gemountete Laufwerk.
    3. Nach dem Kopieren mounten Sie das Laufwerk aus, ohne es physisch zu trennen.
    4. Drehen Sie den kleinen schwarzen Schalter auf die andere Seite. Diese Aktion schaltet die الاتصال des USB-A-Ports zum Ziel um.
    5. Mounten Sie den USB-Stick auf dem Zielgerät و kopieren/verschieben Sie Dateien vom Laufwerk, wodurch der Dateiحولtragungsprozess vom Host zum Ziel abgeschlossen wird.

    Diese Methode kann auch in entgegengesetzter Richtung verwendet werden.

!!! Note "Benutzerführung" - **البرمجيات-Schalter-Priorität**: Unabhängig von der الأجهزة-Schalter-Position ändert das Klicken auf den البرمجيات-Schalter sofort die Schaltungsrichtung.

    - **الأجهزة-Schalter-Synchronisation**: Jedes manuelle Umschalten des الأجهزة-Schalters richtet seinen Zustand مع dem البرمجيات-Schalter aus و wechselt vom لا synchronisierten Zustand 3 أو 4 zu Zustand 1 أو 2. Diese Synchronisation ändert jedoch لا unbedingt die tatsächliche Schaltungsverbindung.

    - **الأجهزة-Schalter-Überwachung**: Der الأجهزة-Schalter wird trotz seiner physischen Natur von der البرمجيات حولwacht و steuert die Schaltungsrichtung لا direkt. Stattdessen interpretiert die البرمجيات die Schalterposition و verwaltet die tatsächliche Schaltungsumschaltung.
