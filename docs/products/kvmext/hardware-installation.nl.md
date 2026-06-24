---
title: "Hardware-installatie | Extensiemodule v2"
description: "Installeer de Openterface uConsole KVM-extensiemodule v2 in het uitbreidingsslot. Kies uw Ethernet-kaart en sluit HDMI en USB aan op uw doelapparaat."
keywords: "KVM-extensie v2 installatie, uConsole hardware-installatie, uitbreidingsslot, Ethernet-kaart installatie"
---

# **Hardware-installatie** | Extensiemodule v2

## Overzicht

Extensiemodule v2 past in het uConsole **uitbreidingsslot** (hetzelfde slot dat wordt gebruikt door de 4G/LTE-module). Het kan niet tegelijkertijd met de 4G- of LTE-module worden gebruikt — kies voor mobiel **of** KVM-functionaliteit.

## Wat je nodig hebt

- [Inhoud van de verpakking](/products/kvmext/whats-in-the-box/) vóór installatie gecontroleerd
- Openterface Extensiemodule v2 printplaat
- **Eén Ethernet-kaart** (100M of 1000M — zie [Ethernet-gids](/products/kvmext/ethernet/))
- Afdekking voor uitbreidingsslot (meegeleverd)
- Inbussleutel voor montageschroeven
- ESD-bescherming (polsband of geaard oppervlak) — aanbevolen

## Installatiestappen

### **1. Uitschakelen**

Schakel de uConsole uit en koppel alle stroom- en kabels los.

### **2. Bestaande module verwijderen**

Als er een 4G/LTE- of andere uitbreidingsmodule is geïnstalleerd:

- Gebruik een inbussleutel om de twee montageschroeven te verwijderen.
- Til de printplaat **recht omhoog** om buigen van de veercontacten te voorkomen.
- Bewaar de originele module en schroeven veilig als je van plan bent deze later opnieuw te installeren.

### **3. Kies je Ethernet-kaart**

Voordat je de hoofdprintplaat plaatst, beslis welke kaart je wilt installeren:

| Kaart | Wanneer te gebruiken |
|------|----------------------|
| **100M** | Alle uConsole basisprintplaten — universele compatibiliteit |
| **1000M** | Alleen als je de **HackerGadgets uConsole Upgrade Kit** hebt en gigabit nodig hebt |

Zie [Ethernet-gids](/products/kvmext/ethernet/) voor alle details.

### **4. Installeer Extensiemodule v2**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Plaats Extensiemodule v2 stevig in het uitbreidingsslot.
- Zorg ervoor dat de veercontacten gelijkmatig over alle contactvlakken zijn uitgelijnd.
- Plaats de montageschroeven terug en draai ze **voorzichtig** vast — niet te vast aandraaien.

### **5. Installatie verifiëren**

De printplaat moet **vlak en stabiel** zitten zonder merkbare wiebel. Alle veercontacten moeten gelijkmatig drukken.

### **6. Installeer de afdekking van het uitbreidingsslot**

Plaats de afdekking van het uitbreidingsslot terug om de module te beschermen en het uiterlijk van de uConsole te behouden.

??? note "Tekstoriëntatie op de afdekking van het uitbreidingsslot"
    De tekst op de afdekking kan vanuit sommige kijkhoeken ondersteboven lijken. Hij is georiënteerd om leesbaar te zijn wanneer je de uConsole vasthoudt en van bovenaf naar de poorten kijkt — de natuurlijke positie tijdens gebruik.

---

**Volgende stappen**

1. [Software-installatie](/products/kvmext/software-setup/) — installeer de Openterface host-app op je uConsole
2. [Verbinden met doelapparaat](/products/kvmext/connect-to-target/) — HDMI + USB bedrading
3. [Functies & specificaties](/products/kvmext/features/) — volledige technische specificaties

## Legacy v1 installatie

De eerste generatie module (37 × 77 mm) gebruikte sluitringen voor compensatie van de printplaatdikte. Zie [Legacy v1 — Hardware-installatie](/products/kvmext/v1/hardware-installation/).
