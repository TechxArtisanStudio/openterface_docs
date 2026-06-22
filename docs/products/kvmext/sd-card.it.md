---
title: "Guida alla scheda SD | Modulo di Estensione v2"
description: "Usa la lettura/scrittura della scheda SD sull'Openterface uConsole KVM Extension Module v2. Cambia l'accesso tra uConsole e dispositivo target per immagini, log e trasferimento file."
keywords: "scheda SD, microSD, modulo estensione KVM v2, flashing immagini, trasferimento file, uConsole"
---

# **Guida alla scheda SD** | Modulo di Estensione v2

Il Modulo di Estensione v2 include **lettura/scrittura della scheda SD** così puoi flashare immagini, esportare log e trasferire file dalla tua uConsole senza dover portare un lettore di schede esterno.

## Panoramica

Il modulo fornisce uno slot microSD condiviso tra l'**uConsole (host)** e il **dispositivo target** — simile nel concetto al flusso di lavoro di commutazione MicroSD del KVM-GO, ma integrato nel modulo di espansione uConsole.

!!! note "Un lato alla volta"
    La scheda SD viene montata sull'uConsole **oppure** sul target, mai su entrambi contemporaneamente. Cambia l'accesso usando l'app host Openterface.

## Installare la scheda SD

Inserisci la scheda microSD saldamente finché non è fissata in modo sicuro nello slot del modulo.

## Controllo tramite l'app host

Usa **Openterface QT** sulla tua uConsole per:

- Cambiare l'accesso alla SD tra **host** (uConsole) e **target**
- Scrivere immagini del sistema operativo sulla scheda dall'uConsole
- Esportare log o trasferire file senza rimuovere la scheda

Assicurati di aver completato la [Configurazione del software](/products/kvmext/software-setup/) prima di usare le funzionalità SD.

## Flussi di lavoro tipici

| Flusso di lavoro | Descrizione |
|----------|-------------|
| **Immagini del sistema operativo** | Flasha immagini per Raspberry Pi, schede embedded o appliance dall'uConsole |
| **Esportazione log** | Estrai log da un target sulla scheda, poi leggili sull'uConsole |
| **Trasferimento file** | Sposta configurazioni o script tra uConsole e target quando la rete non è disponibile |

## Consigli di sicurezza

- **Espelli/smonta** nell'app host prima di rimuovere fisicamente la scheda
- Passa al lato corretto (host vs target) prima delle operazioni di lettura/scrittura
- Usa schede microSD di qualità per i carichi di lavoro di imaging

## Correlati

- [Connetti al Target](/products/kvmext/connect-to-target/)
- [Configurazione del software](/products/kvmext/software-setup/)
- [Guida alla commutazione MicroSD del KVM-GO](/products/kvmgo/microsd-switch/) — concetto di commutazione simile sul KVM-GO
