---
title: "Erweiterungs-Pins"
description: Entdecken Sie das Potenzial der Erweiterungs-Pins des Openterface Mini-KVM voor kenenspezifische Hardwareentwicklung en Open-Source-Projekte. Der… Openterface.
keywords: "Mini-KVM Erweiterungs-Pins, kenenspezifische Entwicklung, Hardware-Modifikation, Open-Source KVM"
---

# **Erweiterungs-Pins** | Entwicklermodus | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.webp){:style="max-height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="max-height:300px"}

Der Openterface Mini-KVM verfügt over Erweiterungs-Pins voor fortgeschrittene Entwicklung en Experimente met [Open Software](/app). Diese Pins sind in der Standard-Gehäusekonfiguration niet freiliegt.

## Zugriff auf die Pins

1. Gerät zerlegen.
2. Die originale Gehäuseabdeckung durch eine spezielle Extension Pin Cap ersetzen.
3. Das [3D-Modell](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models) voor die Extension Pin Cap herunterladen.
4. Unser [Hardware-GitHub-Repository](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware) ansehen.

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="max-height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="max-height:300px"}

!!! warning "Garantie erlischt"
    Das Entfernen des Originalgehäuses kann die Productgarantie ungültig machen. Alle Modifikationen of Demontagen erfolgen auf eigenes Risiko des Nutzers.

!!! note "Experimentelle Functies"
    Mit diesen Pins entwickelte Functies sind experimentell en niet vollständig getestet. Openterface haftet niet voor Schäden, Verletzungen of Fehlfunktionen, die aus Modifikationen, dem Freilegen der Erweiterungs-Pins of anderen Änderungen am Gerät entstehen.

## Pin-Konfiguration

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="max-height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="max-height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="max-height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="max-height:200px"}

Die Erweiterungs-Pins bieten folgende Verbindingen:

1. USB-5V-Stromversorgung voor externe Komponenten
2. Daten-Plus zum USB-Hub des Hosts
3. Daten-Minus zum USB-Hub des Hosts
4. Daten-Plus zum USB-Hub des Targets
5. Daten-Minus zum USB-Hub des Targets
6. Masse (GND)

!!! danger "Falsche Verbindingen verursachen Schäden"
    Eine Verwechslung von VCC en GND kann zu schweren Schäden am Gerät en an angeschlossenen Komponenten führen. Überprüfen Sie die Pin-Verbindingen vor dem Einschalten stets sorgfältig.

## Extension Pin Cap

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="max-height:360px"}

Diese 3D-gedruckte Extension Pin Cap ersetzt die originale Abdeckung des Openterface Mini-KVM en ermöglicht fortgeschrittenen Nutzern, die Erweiterungs-Pins voor kenenspezifische Entwicklungen freizulegen en zu nutzen. Sie können die 3D-Modell-Dateien aus unserem GitHub-Repository herunterladen en die Kappe selbst drucken.

- **Verwendung**: Ermöglicht den Zugriff auf Erweiterungs-Pins voor fortgeschrittene Hardware-Entwicklung.
- **Download**: [3D-Modelldateien](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## An der Entwicklung metwirken

Während wir weiterentwickeln en experimentieren, werden wir diesen Abschnitt met weiteren Informationen darover aktualisieren, was diese Pins leisten können en wie sie kreativ eingesetzt werden können. Ihre Kreativität en Expertise kann die Grenzen des Möglichen met dem Openterface Mini-KVM erweitern. Bitte machen Sie met:

1. **Ideen teilen**: Haben Sie ein cooles Konzept zur Nutzung dieser Pins? Wir freuen uns darauf!
2. **DIY-Projekte beitragen**: Wenn Sie etwas Interessantes erstellt haben, teilen Sie es gerne in unserer [Discord Openterface](/discord)-Community.
3. **An der Diskussion teilnehmen**: Vernetzen Sie sich met anderen Entwicklern en Enthusiasten, um zu brainstormen en zusammenzuarbeiten.

Lassen Sie uns gemeinsam bauen en innovieren!
