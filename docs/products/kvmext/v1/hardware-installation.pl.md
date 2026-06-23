---
title: "Sprzęt-Instalacja (Legacy v1)"
description: "Schritt-dla-Schritt Sprzęt-Instalacjasanleitung dla Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Erweiterungskarte ordnungsgemäß im Erweiterungsslot Ihres uConsole installieren, z detaillierten Sicherheitsrichtlinien."
keywords: "KVM-Erweiterung Instalacja, uConsole Sprzęt-Setup, Erweiterungskarte Instalacja, uConsole Erweiterungsslot, KVM Sprzęt-Przewodnik, physische Instalacja"
---

# **Sprzęt-Instalacja** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Przegląd
Die KVM Extension ersetzt das 4G/LTE-Modul im Erweiterungsslot des uConsole i fügt direkten HDMI-Eingang i USB HID-Steuerung hinzu.

## Was Sie benötigen
- Überprüfen Sie Ihren [Paketinhalt](whats-in-the-box.md) vor der Instalacja  
- Openterface KVM Extension Board  
- Mitgelieferte **Unterlegscheiben** (dla stabile Montage i gleichmäßigen Druck)  
- Sechskantschraubendreher (dla Montageschrauben)  
- ESD-Schutz (Handgelenkband lub geerdete Oberfläche) — empfohlen  

## Instalacjasschritte

### **1. Strom ausschalten**
Fahren Sie den uConsole herunter i trennen Sie alle Stromversorgungen i Kabel.

### **2. Vorhandenes Modul entfernen**
Verwenden Sie einen Sechskantschraubendreher, um die beiden Schrauben zu entfernen.  
Heben Sie das Board **gerade nach oben**, um die Federkontakte nie zu verbiegen.

### **3. KVM Extension installieren**
- Platzieren Sie die **Unterlegscheibe** auf dem Schraubenpfosten.  
- Setzen Sie die KVM Extension fest in den Erweiterungsslot ein.  
- Die Unterlegscheibe kompensiert die etwas dünnere PCB (1,0 mm vs 1,2 mm) i hält den angemessenen Federkontaktdruck aufrecht.

??? note "Passung vor der finalen Instalacja prüfen"
    Sie können das Board zunächst **ohne die Unterlegscheibe** einsetzen, um die Passung zu testen. Wenn das Board lose wirkt lub die Kontakte ungleichmäßig sind, fügen Sie die Unterlegscheibe hinzu i setzen Sie das Board erneut ein. Die Openterface KVM Extension ist 1,0 mm dick, etwas dünner als das ursprüngliche LTE-Modul (1,2 mm). Die Verwendung der zgelieferten Unterlegscheibe gewährleistet eine stabile Montage i zuverlässigen Federkontakt.  
    ![extension-slot-loose](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. Board befestigen**
Setzen Sie die Schrauben wieder ein i ziehen Sie sie **sanft** an — **nie odrehen**, da dies das Board beschädigen lub die Gewinde beschädigen könnte.

![extension-screw-washer-installed](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. Instalacja oprüfen**
Das Board sollte **flach i stabil** sitzen, z gleichmäßigem Federkontakt o alle Pads. Es sollte keine merkliche Wackelbewegung lub Bewegung geben.

### **6. Erweiterungsslot-Abdeckung installieren**
Installieren Sie die Erweiterungsslot-Abdeckung wieder, um das KVM Extension Board zu schützen i das ursprüngliche Aussehen des uConsole zu erhalten.

??? note "Textausrichtung auf der Erweiterungsslot-Abdeckung"
    Der Text auf der Erweiterungsslot-Abdeckung kann aus bestimmten Blickwinkeln "auf dem Kopf" erscheinen. Dies ist ein absichtliches Design - der Text ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten i die Ports von oben nach unten betrachten, was die natürliche Betrachtungsposition bei der Verwendung des Geräts ist.
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/product/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**Nächste Schritte**

1. Gehen Sie zu [Oprogramowanie-Setup](/products/kvmext/software-setup/), um die Openterface App zu installieren.  
2. Gehen Sie zu [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/), um Ihr Zielgerät zu verbinden.  
3. Überprüfen Sie [Funkcje & Spezifikationen](/products/kvmext/features/) dla detaillierte technische Spezifikationen.
