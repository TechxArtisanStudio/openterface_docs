---
title: "KVM-Go firmware-upgrade"
description: KVM-Go gebruikt de CH32V208-chip van WCH voor toetsenbord- en muisemulatie. Momenteel vereist firmware flashen de officiële programmeertool van WCH, die…
---

# KVM-Go firmware-upgrade

## Overzicht

KVM-Go gebruikt de CH32V208-chip van WCH voor toetsenbord- en muisemulatie. Momenteel vereist firmware flashen de officiële programmeertool van WCH, die alleen beschikbaar is voor Windows. Firmware-updates moeten daarom voorlopig op een Windows-systeem worden uitgevoerd.

We werken actief aan een cross-platform, zelf ontwikkelde firmware-upgradeoplossing die direct in het apparaat wordt geïntegreerd. Zodra deze klaar is, ondersteunt het firmware-updates op alle belangrijke besturingssystemen — zonder tools van derden.

> **Opmerking:** Deze handmatige firmware-upgradeprocedure is een tijdelijke oplossing voor vroege ontwikkelingseenheden. Voor officiële productieproducten worden firmware-updates naadloos geïntegreerd in onze software, zodat u firmware direct via de applicatie kunt bijwerken zonder tools van derden of handmatige procedures.

## Vereisten

Zorg voordat u verdergaat dat u het volgende heeft:

- Een Windows-computer
- WCH ISP Tool geïnstalleerd
- Het firmwarebestand (`.hex`-formaat) klaar om te flashen

### Firmware downloaden

Download het nieuwste KVM-Go firmwarebestand:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Nieuwste firmware voor KVM-Go toetsenbord- en muisemulatie (CH32V208-chip)

Sla het firmwarebestand op een gemakkelijk toegankelijke locatie op uw Windows-computer op voordat u doorgaat met het upgradeproces.

### WCH ISP Tool downloaden

Download en installeer [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (alleen Windows).

Bedankt voor uw geduld en steun!

## Stapsgewijze instructies

### Stap 1: Download en open de tool in Windows

Start WCH ISP Tool op uw Windows-computer.

![WCH ISP Tool-interface](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Stap 2: Bereid KVM-Go voor op flashen

Om firmware op KVM-Go te flashen:

1. Zorg dat het apparaat uit staat
2. Houd de knop ingedrukt terwijl u het aansluit op een USB Type-C-poort

**Tip:** U kunt via beide poorten flashen, maar de «target»-poort is tijdens het flashen meestal stabieler.

![KVM-Go bedrading en aansluitconfiguratie](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Stap 3: Selecteer het firmwarebestand

Als de verbinding slaagt, detecteert de tool automatisch het chipmodel (CH32V20X-serie).

1. Klik op de knop «...» om het firmwarebestand te bladeren en te selecteren
2. Selecteer het `.hex` firmwarebestand
3. **Belangrijk:** Vergeet niet het vakje naast het firmwarebestand aan te vinken

![Chipmodel gedetecteerd in WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Firmwarebestand bladeren en selecteren](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Geselecteerd firmwarebestand met aangevinkt vakje](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Stap 4: Huidige firmware deprotécten

Voordat u nieuwe firmware flasht, moet u de schrijfbeveiliging van de huidige firmware verwijderen:

1. Klik op de optie «Deprotect» in de tool
2. Druk kort op de fysieke knop op KVM-Go om in flashmodus te gaan
3. Wacht tot het deprotéctieproces is voltooid

![Deprotect-optie in tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Druk op knop KVM-Go om in flashmodus te gaan](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Stap 5: Firmware downloaden en flashen

Zodra de firmware is deprotécteerd en geselecteerd:

1. Klik op de knop «Download» in de flashtool
2. Wacht tot het flashproces is voltooid
3. De tool geeft aan wanneer de firmware succesvol is geflasht

![Firmware downloaden en flashen](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Verder lezen

- [Openterface KVM-Go reviewgids](review-guide.md) — Belangrijke opmerkingen en bekende problemen voor engineeringprototype-eenheden
