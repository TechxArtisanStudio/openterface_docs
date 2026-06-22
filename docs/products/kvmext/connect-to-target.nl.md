---
title: "Verbinden met doelapparaat | Extensiemodule v2"
description: "Verbind uw doelapparaat met de Openterface uConsole KVM Extensiemodule v2 via HDMI, USB HID en optionele Ethernet voor netwerkdebugging."
keywords: "KVM-verbindingsinstellingen, doelapparaat, HDMI, USB HID, Ethernet-debug, uConsole KVM v2"
---

# **Verbinden met doelapparaat** | Extensiemodule v2

## Verbindingsoverzicht

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Extensiemodule v2 maakt verbinding met uw doel via **HDMI** (video/audio) en **USB** (toetsenbord-/muisemulatie). Gebruik optioneel **Ethernet** voor SSH, webbeheer of logregistratie terwijl KVM het scherm en invoer afhandelt.

## Vereisten

1. [Hardware-installatie](/products/kvmext/hardware-installation/) — module geplaatst in uitbreidingssleuf
2. [Software-instellingen](/products/kvmext/software-setup/) — Openterface QT geïnstalleerd op uConsole
3. [Ethernetkaart gekozen](/products/kvmext/ethernet/) (bij gebruik van netwerkfuncties)

## Verbindingsstappen

### **USB-besturing (vereist voor KVM)**

Verbind de **Type-C-poort** van de extensiekaart met de USB-poort van het doelapparaat. Dit emuleert toetsenbord en muis (USB HID).

Het doelapparaat heeft **geen** stuurprogramma's of extra software nodig voor HID-besturing.

### **Video-ingang (vereist voor KVM)**

Verbind de HDMI-uitgang van het doel met de HDMI-ingang van de extensiemodule:

- Standaard HDMI-kabel voor HDMI-uitgangen
- **VGA-naar-HDMI**-converter voor VGA (zorg dat de USB-voeding van de converter is aangesloten)
- Andere adapters voor DVI, DisplayPort, Micro HDMI indien nodig

### **Ethernet (optioneel — netwerkdebug)**

Als u een netwerkkaart hebt geïnstalleerd:

- Sluit een Ethernet-kabel aan van de kaart op uw doelapparaat of netwerkswitch
- Gebruik de uConsole voor SSH, webinterface of logregistratie naast KVM
- Zie [Ethernet-gids](/products/kvmext/ethernet/) voor 100M vs 1000M-instellingen

### **SD-kaart (optioneel — imaging & bestanden)**

Plaats een microSD-kaart in de modulesleuf. Gebruik de host-app om de toegang te schakelen tussen uConsole en doel. Zie [SD-kaartgids](/products/kvmext/sd-card/).

## USB 2.0 gedeelde schakeling

De host-app kan een gedeelde USB 2.0-poort schakelen tussen de uConsole en het doel — handig voor flashstations en onderhoudsworkflows zonder kabels los te koppelen.

## De verbinding testen

1. Schakel de uConsole in en start het doelapparaat op
2. Start Openterface QT
3. Bevestig dat HDMI-video op het uConsole-scherm verschijnt
4. Test toetsenbord, trackball en audio-passthrough
5. Test bij gebruik van SD- of USB-schakeling de mount/schakeling in de host-app

## Gerelateerd

- [Gebruiksscenario's](/products/kvmext/use-cases/) — veld-IT, homelab, embedded debug-scenario's
- [Veelgestelde vragen](/products/kvmext/faq/) — probleemoplossing
