---
title: "Оборудование-Установка (Legacy v1)"
description: "Schritt-для-Schritt Оборудование-Установкаsanleitung для Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Erweiterungskarte ordnungsgemäß im Erweiterungsslot Ihres uConsole installieren, с detaillierten Sicherheitsrichtlinien."
keywords: "KVM-Erweiterung Установка, uConsole Оборудование-Setup, Erweiterungskarte Установка, uConsole Erweiterungsslot, KVM Оборудование-Руководство, physische Установка"
---

# **Оборудование-Установка** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Обзор
Die KVM Extension ersetzt das 4G/LTE-Modul im Erweiterungsslot des uConsole и fügt direkten HDMI-Eingang и USB HID-Steuerung hinzu.

## Was Sie benötigen
- Überprüfen Sie Ihren [Paketinhalt](whats-in-the-box.md) vor der Установка  
- Openterface KVM Extension Board  
- Mitgelieferte **Unterlegscheiben** (для stabile Montage и gleichmäßigen Druck)  
- Sechskantschraubendreher (для Montageschrauben)  
- ESD-Schutz (Handgelenkband или geerdete Oberfläche) — empfohlen  

## Установкаsschritte

### **1. Strom ausschalten**
Fahren Sie den uConsole herunter и trennen Sie alle Stromversorgungen и Kabel.

### **2. Vorhandenes Modul entfernen**
Verwenden Sie einen Sechskantschraubendreher, um die beiden Schrauben zu entfernen.  
Heben Sie das Board **gerade nach oben**, um die Federkontakte не zu verbiegen.

### **3. KVM Extension installieren**
- Platzieren Sie die **Unterlegscheibe** auf dem Schraubenpfosten.  
- Setzen Sie die KVM Extension fest in den Erweiterungsslot ein.  
- Die Unterlegscheibe kompensiert die etwas dünnere PCB (1,0 mm vs 1,2 mm) и hält den angemessenen Federkontaktdruck aufrecht.

??? note "Passung vor der finalen Установка prüfen"
    Sie können das Board zunächst **ohne die Unterlegscheibe** einsetzen, um die Passung zu testen. Wenn das Board lose wirkt или die Kontakte ungleichmäßig sind, fügen Sie die Unterlegscheibe hinzu и setzen Sie das Board erneut ein. Die Openterface KVM Extension ist 1,0 mm dick, etwas dünner als das ursprüngliche LTE-Modul (1,2 mm). Die Verwendung der сgelieferten Unterlegscheibe gewährleistet eine stabile Montage и zuverlässigen Federkontakt.  
    ![extension-slot-loose](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. Board befestigen**
Setzen Sie die Schrauben wieder ein и ziehen Sie sie **sanft** an — **не оdrehen**, da dies das Board beschädigen или die Gewinde beschädigen könnte.

![extension-screw-washer-installed](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. Установка оprüfen**
Das Board sollte **flach и stabil** sitzen, с gleichmäßigem Federkontakt о alle Pads. Es sollte keine merkliche Wackelbewegung или Bewegung geben.

### **6. Erweiterungsslot-Abdeckung installieren**
Installieren Sie die Erweiterungsslot-Abdeckung wieder, um das KVM Extension Board zu schützen и das ursprüngliche Aussehen des uConsole zu erhalten.

??? note "Textausrichtung auf der Erweiterungsslot-Abdeckung"
    Der Text auf der Erweiterungsslot-Abdeckung kann aus bestimmten Blickwinkeln "auf dem Kopf" erscheinen. Dies ist ein absichtliches Design - der Text ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten и die Ports von oben nach unten betrachten, was die natürliche Betrachtungsposition bei der Verwendung des Geräts ist.
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/product/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**Nächste Schritte**

1. Gehen Sie zu [Программное обеспечение-Setup](/products/kvmext/software-setup/), um die Openterface App zu installieren.  
2. Gehen Sie zu [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/), um Ihr Zielgerät zu verbinden.  
3. Überprüfen Sie [Функции & Spezifikationen](/products/kvmext/features/) для detaillierte technische Spezifikationen.
