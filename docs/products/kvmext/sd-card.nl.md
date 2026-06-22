---
title: "SD-kaartgids | Extensiemodule v2"
description: "Gebruik SD-kaart lezen/schrijven op de Openterface uConsole KVM-extensiemodule v2. Schakel de toegang tussen uConsole en doelapparaat voor imaging, logs en bestandsoverdracht."
keywords: "SD-kaart, microSD, KVM-extensie v2, image flashing, bestandsoverdracht, uConsole"
---

# **SD-kaartgids** | Extensiemodule v2

Extensiemodule v2 bevat **SD-kaart lezen/schrijven** zodat je images kunt flashen, logs kunt exporteren en bestanden kunt overzetten vanaf je uConsole zonder een externe kaartlezer mee te nemen.

## Overzicht

De module biedt een microSD-slot dat wordt gedeeld tussen de **uConsole (host)** en het **doelapparaat** — vergelijkbaar met de KVM-GO MicroSD-schakelworkflow, maar geïntegreerd in de uConsole-uitbreidingsmodule.

!!! note "Eén kant tegelijk"
    De SD-kaart wordt gekoppeld aan óf de uConsole **óf** het doelapparaat, nooit aan beide tegelijk. Schakel de toegang met de Openterface host-app.

## Installeer de SD-kaart

Plaats de microSD-kaart stevig totdat deze goed in het module-slot zit.

## Bediening via host-app

Gebruik **Openterface QT** op je uConsole om:

- SD-toegang te schakelen tussen **host** (uConsole) en **doel**
- OS-images naar de kaart te schrijven vanaf de uConsole
- Logs te exporteren of bestanden over te zetten zonder de kaart te verwijderen

Zorg ervoor dat je [Software-installatie](/products/kvmext/software-setup/) hebt voltooid voordat je SD-functies gebruikt.

## Typische workflows

| Workflow | Beschrijving |
|----------|-------------|
| **OS-imaging** | Flash Raspberry Pi-, embedded board- of appliance-images vanaf de uConsole |
| **Log-export** | Haal logs van een doelapparaat naar de kaart en lees ze vervolgens op de uConsole |
| **Bestandsoverdracht** | Verplaats configuraties of scripts tussen uConsole en doelapparaat wanneer geen netwerk beschikbaar is |

## Veiligheidstips

- **Uitwerpen/ontkoppelen** in de host-app voordat je de kaart fysiek verwijdert
- Schakel naar de juiste kant (host vs doel) vóór lees-/schrijfbewerkingen
- Gebruik kwalitatieve microSD-kaarten voor imaging-workloads

## Gerelateerd

- [Verbinden met doelapparaat](/products/kvmext/connect-to-target/)
- [Software-installatie](/products/kvmext/software-setup/)
- [KVM-GO MicroSD-schakelgids](/products/kvmgo/microsd-switch/) — vergelijkbaar schakelconcept op KVM-GO
