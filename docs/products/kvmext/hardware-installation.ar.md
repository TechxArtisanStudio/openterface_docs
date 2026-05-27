---
title: "الأجهزة-التثبيت"
description: "Schritt-لـ-Schritt الأجهزة-التثبيتsanleitung لـ Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Erweiterungskarte ordnungsgemäß im Erweiterungsslot Ihres uConsole installieren, مع detaillierten Sicherheitsrichtlinien."
keywords: "KVM-Erweiterung التثبيت, uConsole الأجهزة-Setup, Erweiterungskarte التثبيت, uConsole Erweiterungsslot, KVM الأجهزة-دليل, physische التثبيت"
---

# **الأجهزة-التثبيت** | Openterface KVM Extension for uConsole

## نظرة عامة
Die KVM Extension ersetzt das 4G/LTE-Modul im Erweiterungsslot des uConsole و fügt direkten HDMI-Eingang و USB HID-Steuerung hinzu.

## Was Sie benötigen
- Überprüfen Sie Ihren [Paketinhalt](whats-in-the-box.md) vor der التثبيت  
- Openterface KVM Extension Board  
- Mitgelieferte **Unterlegscheiben** (لـ stabile Montage و gleichmäßigen Druck)  
- Sechskantschraubendreher (لـ Montageschrauben)  
- ESD-Schutz (Handgelenkband أو geerdete Oberfläche) — empfohlen  

## التثبيتsschritte

### **1. Strom ausschalten**
Fahren Sie den uConsole herunter و trennen Sie alle Stromversorgungen و Kabel.

### **2. Vorhandenes Modul entfernen**
Verwenden Sie einen Sechskantschraubendreher, um die beiden Schrauben zu entfernen.  
Heben Sie das Board **gerade nach oben**, um die Federkontakte لا zu verbiegen.

### **3. KVM Extension installieren**
- Platzieren Sie die **Unterlegscheibe** auf dem Schraubenpfosten.  
- Setzen Sie die KVM Extension fest in den Erweiterungsslot ein.  
- Die Unterlegscheibe kompensiert die etwas dünnere PCB (1,0 mm vs 1,2 mm) و hält den angemessenen Federkontaktdruck aufrecht.

??? note "Passung vor der finalen التثبيت prüfen"
    Sie können das Board zunächst **ohne die Unterlegscheibe** einsetzen, um die Passung zu testen. Wenn das Board lose wirkt أو die Kontakte ungleichmäßig sind, fügen Sie die Unterlegscheibe hinzu و setzen Sie das Board erneut ein. Die Openterface KVM Extension ist 1,0 mm dick, etwas dünner als das ursprüngliche LTE-Modul (1,2 mm). Die Verwendung der معgelieferten Unterlegscheibe gewährleistet eine stabile Montage و zuverlässigen Federkontakt.  
    ![extension-slot-loose](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. Board befestigen**
Setzen Sie die Schrauben wieder ein و ziehen Sie sie **sanft** an — **لا حولdrehen**, da dies das Board beschädigen أو die Gewinde beschädigen könnte.

![extension-screw-washer-installed](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. التثبيت حولprüfen**
Das Board sollte **flach و stabil** sitzen, مع gleichmäßigem Federkontakt حول alle Pads. Es sollte keine merkliche Wackelbewegung أو Bewegung geben.

### **6. Erweiterungsslot-Abdeckung installieren**
Installieren Sie die Erweiterungsslot-Abdeckung wieder, um das KVM Extension Board zu schützen و das ursprüngliche Aussehen des uConsole zu erhalten.

??? note "Textausrichtung auf der Erweiterungsslot-Abdeckung"
    Der Text auf der Erweiterungsslot-Abdeckung kann aus bestimmten Blickwinkeln "auf dem Kopf" erscheinen. Dies ist ein absichtliches Design - der Text ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten و die Ports von oben nach unten betrachten, was die natürliche Betrachtungsposition bei der Verwendung des Geräts ist.
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/products/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**Nächste Schritte**

1. Gehen Sie zu [البرمجيات-Setup](/products/kvmext/software-setup/), um die Openterface App zu installieren.  
2. Gehen Sie zu [Mit Zielgerät verbinden](/products/kvmext/connect-to-target/), um Ihr Zielgerät zu verbinden.  
3. Überprüfen Sie [الميزات & Spezifikationen](/products/kvmext/features/) لـ detaillierte technische Spezifikationen.
