---
title: "Openterface KVM-Go — Reviewgids (Engineeringprototype)"
description: Bedankt dat u de tijd neemt om ons aankomende product te testen. Deze unit is een engineeringprototype, en onze firmware en software evolueren snel. Uw…
---

# Openterface KVM-Go — Reviewgids (Engineeringprototype)

## Overzicht

Bedankt dat u de tijd neemt om ons aankomende product **[Openterface KVM-Go](https://openterface.com/product/kvm-go/)** te testen.

Deze unit is een **engineeringprototype**, en onze firmware en software evolueren snel. Uw feedback helpt ons direct het product te verbeteren vóór massaproductie.

Als u problemen tegenkomt tijdens het testen, neem dan direct contact met ons op. **We bieden directe ondersteuning om deze op te lossen voordat u uw video opneemt.**

## Belangrijke opmerkingen

### Prototype-disclaimer

Dit apparaat is een **engineeringprototype**. De firmware en software kunnen nog bugs of onvolledige functies bevatten. Als u instabiliteit ervaart of iets dat uw workflow blokkeert, laat het ons weten. We lossen problemen op vóór de productieversie wordt verzonden.

### Gebruik de nieuwste software

Voor de beste prestaties en compatibiliteit gebruikt u de **nieuwste versie** van de [Openterface-software](https://openterface.com/app/overview/) van onze GitHub Releases-pagina. We updaten frequent, en oudere versies passen mogelijk niet bij de firmware van uw prototype.

## Bekende problemen en uitleg

> **Opmerking:** Alle hieronder genoemde problemen worden opgelost vóór de productierelease.

### Oppervlaktetemperatuur

Het apparaat kan warm of zelfs heet aanvoelen tijdens gebruik. Dit is te verwachten omdat het prototype krachtigere chips gebruikt.

Let op:

* Alle temperaturen blijven binnen het veilige bedrijfsbereik
* Ingebouwde **temperatuursensoren** rapporteren de real-time thermische status in de software
* Meerdagen stresstests tonen geen stabiliteitsproblemen

We blijven de thermische prestaties verfijnen vóór massaproductie.

### Softwaredistributie

We ondersteunen momenteel meerdere platforms:

* **macOS en Windows**
  Dit zijn de meest stabiele platforms, aanbevolen voor volledige functietests.

* **Linux**
  Gebruik de **AppImage**-versie.
  De `.deb`- en `.rpm`-pakketten kunnen afhankelijkheidsproblemen hebben afhankelijk van de distributie. We verbeteren deze installers.

* **Android**
  Een werkende versie is beschikbaar op **Google Play** voor basisbesturing en monitoring.
  U kunt het proberen als u mobiele workflows wilt verkennen.

* **iPadOS**
  Beschikbaar via **TestFlight**.
  Als u het wilt testen, stuur me uw **Apple ID** en ik voeg u toe aan de testerlijst.

### Kopiëren en plakken

De firmware op uw unit bevat mogelijk niet onze nieuwste klembordfixes. Deze problemen zijn al opgelost in de nieuwste firmware. U kunt updaten via de [Firmware-upgradegids](firmware-upgrade.md) als u de nieuwste versie wilt testen.

### Demontage (Optioneel)

Als u van demontages houdt, mag u de unit uit elkaar halen.

Uw prototype bevat de volgende componenten:

* **MS2130S** — Video-capturechip
* **WCH CH32V208** — USB-toetsenbord- en muisemulatie-MCU
* **Standaard siliconen thermische pasta** — aangebracht op dit prototype

We testen momenteel een verbeterde thermische oplossing met **aluminiumcomponenten** en **hoogpresterende thermische vet**. Deze verbeteringen hebben interne tests doorstaan, maar vanwege beperkte prototypevoorraad zijn ze **nog niet** opgenomen in de review-units.

Uw unit gebruikt nog steeds **siliconenpasta**, maar de thermische prestaties blijven binnen veilige grenzen.

### Geavanceerde functies (Ondersteund in Mini-KVM, binnenkort op KVM-Go)

KVM-Go volgt dezelfde ontwerpfilosofie als Openterface Mini-KVM. Verschillende geavanceerde functies zijn in actieve ontwikkeling maar **nog niet beschikbaar** in het huidige prototype:

* **Aangepaste EDID**
  Mini-KVM maakt het laden of wijzigen van EDID via onze QT-applicatie mogelijk om compatibiliteitsproblemen op te lossen.
  We brengen deze functie ook naar KVM-Go.

* **Softwaregebaseerde SD-kaartschakeling**
  Mini-KVM ondersteunt het schakelen van zijn USB-A-poort tussen host en PC via software.
  Voor KVM-Go ontwikkelen we vergelijkbare softwaregebaseerde schakeling voor de micro-SD-slot, maar deze is nog niet ingeschakeld in uw firmware.

We willen dat u zich bewust bent van deze aankomende functies, ook al zijn ze nog niet actief op uw unit.

### Open-source toewijding

Ja, KVM-Go blijft volledig open source. Zodra het hardware-ontwerp voor massaproductie is afgerond, zullen we OSHWA-certificering (Open Source Hardware Association) aanvragen. Alle hardware-ontwerpbestanden en STL-modellen worden geüpload naar onze GitHub-repository: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Verder lezen

* [KVM-Go firmware-upgrade](firmware-upgrade.md) — Stapsgewijze gids voor het bijwerken van uw apparaat
