---
title: "Bağlantısanleitung"
description: "Schritt-için-Schritt-Kılavuz zur Einrichtung des Openterface KVM-Go. Erfahren Sie, wie Sie Ihren Host-Computer ve Ihr Zielgerät ilehilfe integrierter Videoanschlüsse için ein ultra-einfaches, direktes Plug-in-Erlebnis verbinden."
keywords: "KVM-Go Einrichtung, ultrakompakte KVM Einrichtung, integrierte HDMI-Bağlantı, KVM Kurulumsanleitung, Schlüsselanhänger KVM Einrichtung, USB KVM Bağlantı, Headless Computer Setup, tragbare KVM Einrichtung"
---

# **Bağlantısanleitung** | Setup-Kılavuz | Openterface KVM-Go

## **Genel bakış der Bağlantıen**

![KVM-Go Bağlantıshakkındasicht](https://assets.openterface.com/images/kvm-go/step-0-overview.webp){:style="max-height:360px"}

Die obigen Bilder zeigen alle Bağlantıen zwischen dem [**KVM-Go**](/products/kvm-go), dem Host-Computer ve dem Zielgerät.

- **Host-Computer**: Erfordert die Kurulum der [Openterface App](/app).  
- **Zielgerät**: Keine Yazılım ve Vorkonfiguration erforderlich.
- **Video**: Der integrierte Anschluss wird direkt in das Zielgerät eingesteckt, sodass Sie keine zusätzlichen Videokabel tragen veya verwalten müssen.

## **Was Sie için die Bağlantıen benötigen**

![KVM-Go alle Teile](https://assets.openterface.com/images/kvm-go/step-0-all-parts.webp){:style="max-height:360px"}

Zur Einrichtung Ihres **KVM-Go** benötigen Sie folgende Komponenten:

- **KVM-Go (HDMI / DP / VGA)** — verbindet sich ile dem **Zielgerät** (için Videoaufnahme)  
- **Schwarzes kurzes USB-C-Kabel** — verbindet sich ile dem **Zielgerät** (için Tastatur- ve Mausemulation)
- **Oranges langes USB-C-Kabel** — verbindet sich ile dem **Host-Computer** (der die [Openterface App](/app) ausführt)

!!! note "Hinweis zur Kabellänge"
    Die genauen Kabellängen im **offiziellen KVM-Go-Paket** sind **noch değil finalisiert** ve können leicht von den hier gezeigten abweichen.  
    Die in dieser Kılavuz gezeigten Kabel stammen aus dem *klassischen Mini-KVM Toolkit* ve dienen nur zur Veranschaulichung.

!!! warning "Verwendung eigener Kabel"
    Wenn Sie sich için eigene Kabel entscheiden, stellen Sie sicher, dass es sich um **hochwertige, datenhakkındatragungsfähige USB-Kabel** handelt. Kabel minderer Qualität veya reine Ladekabel können zu folgenden Problemen führen:
    
    - Schwarzbildprobleme
    - Nicht reagierende Tastatur- veya Mauseingaben
    - Zeitweilige Bağlantısabbrüche
    - Flackernde veya instabile Bildschirmausgabe

## **Schritt-için-Schritt-Einrichtung**

### **Schritt 1 — USB-Kabel an KVM-Go anschließen**
![USB-Kabel einstecken](https://assets.openterface.com/images/kvm-go/step-1-plugged.webp){:style="max-height:360px"}

- **Schwarzes USB-C-Kabel** → In den Port ile der Kennzeichnung ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer.svg#only-light){:style="max-height:20px"} ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer_1.svg#only-dark){:style="max-height:20px"} **Target** am KVM-Go-Gehäuse einstecken.  
- **Oranges USB-C-Kabel** → In den Port ile der Kennzeichnung ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer.svg#only-light){:style="max-height:20px"} ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer_1.svg#only-dark){:style="max-height:20px"} **Host** einstecken.

!!! warning
    Beide USB-C-Ports sind physisch identisch.  
    Überprüfen Sie immer **die Beschriftungen** auf der Gehäuseoberfläche, um Verwechslungen zu vermeiden.

### **Schritt 2 — Video ile Ziel verbinden**
![HDMI-Anschluss einstecken](https://assets.openterface.com/images/kvm-go/step-3-hdmi-plugged.webp){:style="max-height:360px"}

Stecken Sie den **integrierten männlichen Videoanschluss** direkt in den Videoausgang des Zielgeräts.

### **Schritt 3 — Ziel-USB-Port verbinden**
Verbinden Sie das **schwarze USB-Kabel** ile dem Zielgerät için HID-Steuerung.

- **Option A:** Direkt in einen USB-A-Port  
  ![Ziel USB-A](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-b.webp){:style="max-height:360px"}

- **Option B:** Verwendung eines USB-C-Adapters  
  ![Ziel USB-C](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-a.webp){:style="max-height:360px"}

!!! note "USB-C-Bağlantısprüfung"
    Einige USB-C-Ports bieten möglicherweise keine sichere Bağlantı. Wenn Sie zeitweilige Tastatur-/Mausprobleme haben, wackeln Sie vorsichtig an der Adapterverbindung, um sicherzustellen, dass sie richtig sitzt ve Kontakt hat.


### **Schritt 4 — Host-USB-Port verbinden**
Verbinden Sie das **orange USB-Kabel** ile dem Host-Computer.

- Direkt an einen USB-C-Port **ODER** hakkında einen USB-C-zu-USB-A-Adapter.  
  ![Host-USB einstecken](https://assets.openterface.com/images/kvm-go/step-5-plug-in-host-computer-1.webp){:style="max-height:360px"}

