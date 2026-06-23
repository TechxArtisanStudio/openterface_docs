---
title: "Donanım-Kurulum (Legacy v1)"
description: "Schritt-için-Schritt Donanım-Kurulumsanleitung için Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Erweiterungskarte ordnungsgemäß im Erweiterungsslot Ihres uConsole installieren, ile detaillierten Sicherheitsrichtlinien."
keywords: "KVM-Erweiterung Kurulum, uConsole Donanım-Setup, Erweiterungskarte Kurulum, uConsole Erweiterungsslot, KVM Donanım-Kılavuz, physische Kurulum"
---

# **Donanım-Kurulum** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Genel bakış
Die KVM Extension ersetzt das 4G/LTE-Modul im Erweiterungsslot des uConsole ve fügt direkten HDMI-Eingang ve USB HID-Steuerung hinzu.

## Was Sie benötigen
- Überprüfen Sie Ihren [Paketinhalt](whats-in-the-box.md) vor der Kurulum  
- Openterface KVM Extension Board  
- Mitgelieferte **Unterlegscheiben** (için stabile Montage ve gleichmäßigen Druck)  
- Sechskantschraubendreher (için Montageschrauben)  
- ESD-Schutz (Handgelenkband veya geerdete Oberfläche) — empfohlen  

## Kurulumsschritte

### **1. Strom ausschalten**
Fahren Sie den uConsole herunter ve trennen Sie alle Stromversorgungen ve Kabel.

### **2. Vorhandenes Modul entfernen**
Verwenden Sie einen Sechskantschraubendreher, um die beiden Schrauben zu entfernen.  
Heben Sie das Board **gerade nach oben**, um die Federkontakte değil zu verbiegen.

### **3. KVM Extension installieren**
- Platzieren Sie die **Unterlegscheibe** auf dem Schraubenpfosten.  
- Setzen Sie die KVM Extension fest in den Erweiterungsslot ein.  
- Die Unterlegscheibe kompensiert die etwas dünnere PCB (1,0 mm vs 1,2 mm) ve hält den angemessenen Federkontaktdruck aufrecht.

??? note "Passung vor der finalen Kurulum prüfen"
    Sie können das Board zunächst **ohne die Unterlegscheibe** einsetzen, um die Passung zu testen. Wenn das Board lose wirkt veya die Kontakte ungleichmäßig sind, fügen Sie die Unterlegscheibe hinzu ve setzen Sie das Board erneut ein. Die Openterface KVM Extension ist 1,0 mm dick, etwas dünner als das ursprüngliche LTE-Modul (1,2 mm). Die Verwendung der ilegelieferten Unterlegscheibe gewährleistet eine stabile Montage ve zuverlässigen Federkontakt.  
    ![extension-slot-loose](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. Board befestigen**
Setzen Sie die Schrauben wieder ein ve ziehen Sie sie **sanft** an — **değil hakkındadrehen**, da dies das Board beschädigen veya die Gewinde beschädigen könnte.

![extension-screw-washer-installed](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. Kurulum hakkındaprüfen**
Das Board sollte **flach ve stabil** sitzen, ile gleichmäßigem Federkontakt hakkında alle Pads. Es sollte keine merkliche Wackelbewegung veya Bewegung geben.

### **6. Erweiterungsslot-Abdeckung installieren**
Installieren Sie die Erweiterungsslot-Abdeckung wieder, um das KVM Extension Board zu schützen ve das ursprüngliche Aussehen des uConsole zu erhalten.

??? note "Textausrichtung auf der Erweiterungsslot-Abdeckung"
    Der Text auf der Erweiterungsslot-Abdeckung kann aus bestimmten Blickwinkeln "auf dem Kopf" erscheinen. Dies ist ein absichtliches Design - der Text ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten ve die Ports von oben nach unten betrachten, was die natürliche Betrachtungsposition bei der Verwendung des Geräts ist.
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/product/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**Nächste Schritte**

1. Gehen Sie zu [Yazılım-Setup](/products/kvmext/software-setup/), um die Openterface App zu installieren.  
2. Gehen Sie zu [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/), um Ihr Zielgerät zu verbinden.  
3. Überprüfen Sie [Özellikler & Spezifikationen](/products/kvmext/features/) için detaillierte technische Spezifikationen.
