---
title: "Hardware-Installation | Erweiterungsmodul v2"
description: "Installieren Sie das Openterface uConsole KVM-Erweiterungsmodul v2 im Erweiterungs-Slot. Wählen Sie Ihre Ethernet-Karte und verbinden Sie HDMI und USB mit Ihrem Zielgerät."
keywords: "KVM-Erweiterung v2 Installation, uConsole Hardware-Einrichtung, Erweiterungs-Slot, Ethernet-Karten-Installation"
---

# **Hardware-Installation** | Erweiterungsmodul v2

## Überblick

Das Erweiterungsmodul v2 passt in den **Erweiterungs-Slot** des uConsole (derselbe Slot, der auch vom 4G/LTE-Modul genutzt wird). Es kann nicht gleichzeitig mit dem 4G- oder LTE-Modul verwendet werden — wählen Sie entweder Mobilfunk **oder** KVM-Funktionalität.

## Was Sie benötigen

- [Verpackungsinhalt](/products/kvmext/whats-in-the-box/) vor der Installation überprüft
- Openterface Erweiterungsmodul v2 Platine
- **Eine Ethernet-Karte** (100M oder 1000M — siehe [Ethernet-Anleitung](/products/kvmext/ethernet/))
- Abdeckung für den Erweiterungs-Slot (enthalten)
- Sechskantschraubendreher für die Befestigungsschrauben
- ESD-Schutz (Erdungsarmband oder geerdete Oberfläche) — empfohlen

## Installationsschritte

### **1. Ausschalten**

Fahren Sie den uConsole herunter und trennen Sie alle Strom- und Datenkabel.

### **2. Vorhandenes Modul entfernen**

Falls ein 4G/LTE- oder anderes Erweiterungsmodul installiert ist:

- Verwenden Sie einen Sechskantschraubendreher, um die beiden Befestigungsschrauben zu entfernen.
- Heben Sie die Platine **gerade nach oben** an, um ein Verbiegen der Federkontakte zu vermeiden.
- Bewahren Sie das Originalmodul und die Schrauben sicher auf, falls Sie es später wieder einbauen möchten.

### **3. Ethernet-Karte auswählen**

Bevor Sie die Hauptplatine einsetzen, entscheiden Sie, welche Karte installiert werden soll:

| Karte | Wann zu verwenden |
|------|-------------------|
| **100M** | Alle uConsole Basisplatinen — universelle Kompatibilität |
| **1000M** | Nur wenn Sie das **HackerGadgets uConsole Upgrade-Kit** besitzen und Gigabit benötigen |

Siehe [Ethernet-Anleitung](/products/kvmext/ethernet/) für alle Details.

### **4. Erweiterungsmodul v2 installieren**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Setzen Sie das Erweiterungsmodul v2 fest in den Erweiterungs-Slot ein.
- Stellen Sie sicher, dass die Federkontakte gleichmäßig auf allen Pads anliegen.
- Setzen Sie die Befestigungsschrauben wieder ein und ziehen Sie sie **leicht** an — nicht überdrehen.

### **5. Installation überprüfen**

Die Platine sollte **flach und stabil** sitzen, ohne erkennbares Wackeln. Alle Federkontakte sollten gleichmäßig andrücken.

### **6. Abdeckung des Erweiterungs-Slots installieren**

Bringen Sie die Abdeckung des Erweiterungs-Slots wieder an, um das Modul zu schützen und das Erscheinungsbild des uConsole zu erhalten.

??? note "Textausrichtung auf der Abdeckung des Erweiterungs-Slots"
    Der Text auf der Abdeckung kann aus bestimmten Blickwinkeln auf dem Kopf stehend erscheinen. Er ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten und die Anschlüsse von oben betrachten — die natürliche Position während der Nutzung.

---

**Nächste Schritte**

1. [Software-Einrichtung](/products/kvmext/software-setup/) — installieren Sie die Openterface Host-App auf Ihrem uConsole
2. [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/) — HDMI + USB Verkabelung
3. [Funktionen & Spezifikationen](/products/kvmext/features/) — vollständige technische Daten

## Legacy v1 Installation

Das Modell der ersten Generation (37 × 77 mm) verwendete Unterlegscheiben zum Ausgleich der Platinenstärke. Siehe [Legacy v1 — Hardware-Installation](/products/kvmext/v1/hardware-installation/).
