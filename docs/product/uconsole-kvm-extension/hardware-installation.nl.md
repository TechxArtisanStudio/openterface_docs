---
title: "Hardware-Installatie"
description: "Schritt-voor-Schritt Hardware-Installatiesanleitung voor Openterface KVM Extension for uConsole. Lernen Sie, wie Sie die Erweiterungskarte ordnungsgemäß im Erweiterungsslot Ihres uConsole installieren, met detaillierten Sicherheitsrichtlinien."
keywords: "KVM-Erweiterung Installatie, uConsole Hardware-Setup, Erweiterungskarte Installatie, uConsole Erweiterungsslot, KVM Hardware-Handleiding, physische Installatie"
---

# **Hardware-Installatie** | Openterface KVM Extension for uConsole

## Overzicht
Die KVM Extension ersetzt das 4G/LTE-Modul im Erweiterungsslot des uConsole en fügt direkten HDMI-Eingang en USB HID-Steuerung hinzu.

## Was Sie benötigen
- Überprüfen Sie Ihren [Paketinhalt](whats-in-the-box.md) vor der Installatie  
- Openterface KVM Extension Board  
- Mitgelieferte **Unterlegscheiben** (voor stabile Montage en gleichmäßigen Druck)  
- Sechskantschraubendreher (voor Montageschrauben)  
- ESD-Schutz (Handgelenkband of geerdete Oberfläche) — empfohlen  

## Installatiesschritte

### **1. Strom ausschalten**
Fahren Sie den uConsole herunter en trennen Sie alle Stromversorgungen en Kabel.

### **2. Vorhandenes Modul entfernen**
Verwenden Sie einen Sechskantschraubendreher, um die beiden Schrauben zu entfernen.  
Heben Sie das Board **gerade nach oben**, um die Federkontakte niet zu verbiegen.

### **3. KVM Extension installieren**
- Platzieren Sie die **Unterlegscheibe** auf dem Schraubenpfosten.  
- Setzen Sie die KVM Extension fest in den Erweiterungsslot ein.  
- Die Unterlegscheibe kompensiert die etwas dünnere PCB (1,0 mm vs 1,2 mm) en hält den angemessenen Federkontaktdruck aufrecht.

??? note "Passung vor der finalen Installatie prüfen"
    Sie können das Board zunächst **ohne die Unterlegscheibe** einsetzen, um die Passung zu testen. Wenn das Board lose wirkt of die Kontakte ungleichmäßig sind, fügen Sie die Unterlegscheibe hinzu en setzen Sie das Board erneut ein. Die Openterface KVM Extension ist 1,0 mm dick, etwas dünner als das ursprüngliche LTE-Modul (1,2 mm). Die Verwendung der metgelieferten Unterlegscheibe gewährleistet eine stabile Montage en zuverlässigen Federkontakt.  
    ![extension-slot-loose](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. Board befestigen**
Setzen Sie die Schrauben wieder ein en ziehen Sie sie **sanft** an — **niet overdrehen**, da dies das Board beschädigen of die Gewinde beschädigen könnte.

![extension-screw-washer-installed](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. Installatie overprüfen**
Das Board sollte **flach en stabil** sitzen, met gleichmäßigem Federkontakt over alle Pads. Es sollte keine merkliche Wackelbewegung of Bewegung geben.

### **6. Erweiterungsslot-Abdeckung installieren**
Installieren Sie die Erweiterungsslot-Abdeckung wieder, um das KVM Extension Board zu schützen en das ursprüngliche Aussehen des uConsole zu erhalten.

??? note "Textausrichtung auf der Erweiterungsslot-Abdeckung"
    Der Text auf der Erweiterungsslot-Abdeckung kann aus bestimmten Blickwinkeln "auf dem Kopf" erscheinen. Dies ist ein absichtliches Design - der Text ist so ausgerichtet, dass er lesbar ist, wenn Sie den uConsole halten en die Ports von oben nach unten betrachten, was die natürliche Betrachtungsposition bei der Verwendung des Geräts ist.
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/product/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**Nächste Schritte**

1. Gehen Sie zu [Software-Setup](/product/uconsole-kvm-extension/software-setup/), um die Openterface App zu installieren.  
2. Gehen Sie zu [Mit Zielgerät verbinden](/product/uconsole-kvm-extension/connect-to-target/), um Ihr Zielgerät zu verbinden.  
3. Überprüfen Sie [Functies & Spezifikationen](/product/uconsole-kvm-extension/features/) voor detaillierte technische Spezifikationen.
