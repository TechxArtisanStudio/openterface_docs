---
title: "FAQs | Extensiemodule v2"
description: "FAQs voor Openterface uConsole KVM-extensiemodule v2: Ethernetkaarten, Upgrade Kit, SD-kaart, software-installatie, compatibiliteit en probleemoplossing."
keywords: "KVM-extensie v2 FAQ, uConsole KVM, Ethernet, SD-kaart, probleemoplossing, Upgrade Kit"
---

# FAQs | Extensiemodule v2

Welkom bij de FAQ voor **Openterface uConsole KVM-extensiemodule v2**.

Als u niet vindt wat u nodig heeft, stuur dan een e-mail naar [support@openterface.com](mailto:support@openterface.com) of word lid van onze community op [Discord](/discord).

---

## :material-clipboard-list: Snelle navigatie

- [Product & aankoop](#product--aankoop)
- [Installatie & hardware](#installatie--hardware)
- [Compatibiliteit](#compatibiliteit)
- [Bediening & functies](#bediening--functies)
- [Video & audio](#video--audio)
- [Probleemoplossing](#probleemoplossing)
- [Meer](#meer)

---

## Product & aankoop

**:material-chat-question:{ .faq } Is Extensiemodule v2 één product of twee netwerkversies?**

Het is **één product**. Zowel de 100M- als de 1000M-Ethernetkaarten zijn in de doos inbegrepen. Zie [Aankoopopties](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Welke Ethernetkaart moet ik gebruiken?**

Gebruik de **100M**-kaart op alle uConsole-basisborden. Gebruik de **1000M**-kaart alleen als u de **HackerGadgets uConsole Upgrade Kit** heeft en gigabit-netwerken nodig heeft. Zie [Ethernet-gids](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Heb ik de HackerGadgets uConsole Upgrade Kit nodig?**

Alleen voor **gigabit Ethernet**. De 100M-kaart werkt zonder de Upgrade Kit. Als u de kit niet heeft, kies dan de bundeloptie bij het afrekenen of koop de kit apart.

**:material-chat-question:{ .faq } Is de uConsole inbegrepen?**

Nee. Het ClockworkPi uConsole-apparaat wordt apart verkocht.

---

## Installatie & hardware

**:material-chat-question:{ .faq } Hoe werkt Extensiemodule v2?**

Het legt HDMI vast van een doelapparaat en geeft dit weer op de uConsole. Het toetsenbord en de trackball van de uConsole besturen het doelapparaat via USB HID-emulatie. Optionele Ethernet- en SD-kaartfuncties breiden de netwerkdebug- en imaging-workflows uit.

**:material-chat-question:{ .faq } Kan ik dit gebruiken met de 4G/LTE-module geïnstalleerd?**

Nee. Extensiemodule v2 gebruikt de uConsole-uitbreidingssleuf en kan **niet** tegelijk met de 4G- of LTE-module worden gebruikt.

**:material-chat-question:{ .faq } Welk gereedschap heb ik nodig voor de installatie?**

Een inbussleutel voor de montageschroeven. ESD-voorzorgsmaatregelen worden aanbevolen.

**:material-chat-question:{ .faq } Is de installatie omkeerbaar?**

Ja. Verwijder Extensiemodule v2 en installeer indien nodig uw oorspronkelijke 4G/LTE-module opnieuw.

---

## Compatibiliteit

**:material-chat-question:{ .faq } Welke uConsole-modellen zijn compatibel?**

Compatibel met uConsole-apparaten die de standaard uitbreidingssleuf hebben. Controleer de specificaties van uw apparaat om dit te bevestigen.

**:material-chat-question:{ .faq } Welke doelapparaten kan ik besturen?**

Elk apparaat met HDMI-uitgang: desktops, servers, SBC's (Raspberry Pi, enz.), embedded systemen, industriële pc's en meer.

**:material-chat-question:{ .faq } Heeft het doelapparaat speciale software nodig?**

Nee. KVM gebruikt USB HID-emulatie — er zijn geen stuurprogramma's nodig op het doelapparaat voor toetsenbord en muis. Meer informatie over [USB-gebaseerde KVM-technologie](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Kan ik meerdere doelapparaten tegelijk besturen?**

Eén doelapparaat tegelijk voor KVM. Schakel tussen doelapparaten door de HDMI- en USB-kabels te verplaatsen.

---

## Bediening & functies

**:material-chat-question:{ .faq } Kan ik bestanden overdragen via SD-kaart?**

Ja. Extensiemodule v2 ondersteunt lezen/schrijven van SD-kaarten met host/doel-schakeling via de Openterface-app. Zie [SD-kaartgids](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Ondersteunt het BIOS-niveau toegang?**

Ja. Directe USB HID maakt volledige BIOS/UEFI-toegang mogelijk zonder netwerkafhankelijkheden.

**:material-chat-question:{ .faq } Wat met de oudere v1-module?**

De eerste generatie 37 × 77 mm module (geen Ethernet/SD) is gedocumenteerd op [Legacy v1 Docs](/products/kvmext/v1/).

---

## Video & audio

**:material-chat-question:{ .faq } Welke videoresoluties worden ondersteund?**

- **Ingang**: Tot 4K @ 30 Hz (RGB/YCBCR444) of 4K @ 60 Hz (YCBCR420) via HDMI
- **Uitgang**: 1080p @ 60 Hz op het uConsole-scherm

**:material-chat-question:{ .faq } Wat is de videovertraging?**

Onder **70 ms** — geschikt voor BIOS-toegang, onderhoud en diagnostiek.

**:material-chat-question:{ .faq } Wordt audio ondersteund?**

Ja. In HDMI ingebedde audio wordt doorgegeven aan de uConsole-luidsprekers.

---

## Probleemoplossing

**:material-chat-question:{ .faq } Geen videosignaal**

- Controleer HDMI-verbindingen aan beide kanten
- Controleer of het doelapparaat is ingeschakeld en via HDMI uitvoert
- Probeer een andere HDMI-kabel
- Herstart Openterface QT

**:material-chat-question:{ .faq } Toetsenbord of muis werkt niet**

- Bevestig de USB-kabel van de extensiemodule naar het doelapparaat
- Schakel de uConsole volledig uit, wacht 10 seconden, schakel in en probeer opnieuw
- Installeer Openterface QT opnieuw (arm64-build voor uw uConsole)
- Rapporteer uw Linux-distributie en CM4-module op [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) of [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Software was moeilijk te installeren**

Probeer GitHub Releases (Optie 1) of de ClockworkPi-communityrepo (Optie 3) in [Software-installatie](/products/kvmext/software-setup/). Word lid van [Discord](https://openterface.com/discord) voor stapsgewijze hulp.

**:material-chat-question:{ .faq } USB-schakelpoort werkt niet**

Zorg ervoor dat u een recente Openterface QT-release gebruikt. Schakel USB-toegang in de host-app. Als het probleem aanhoudt, dien dan een issue in op [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI wordt alleen in een vak weergegeven / geen app-instellingenmenu**

Werk bij naar de nieuwste Openterface QT. Controleer [Software-installatie](/products/kvmext/software-setup/) en communitydiscussies op Discord voor uConsole-specifieke weergave-instellingen.

**:material-chat-question:{ .faq } App detecteert de module niet**

- Plaats het bord opnieuw in de uitbreidingssleuf
- Herstart de uConsole
- Installeer Openterface QT opnieuw

---

## Meer

**:material-chat-question:{ .faq } Is de software open source?**

Ja. Openterface-host-apps zijn open source op [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Waar kan ik ondersteuning krijgen?**

- **E-mail**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Word lid van onze community](https://openterface.com/discord)
- **GitHub**: [Problemen melden](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
