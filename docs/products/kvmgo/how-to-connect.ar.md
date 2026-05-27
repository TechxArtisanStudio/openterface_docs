---
title: "الاتصالsanleitung"
description: "Schritt-لـ-Schritt-دليل zur Einrichtung des Openterface KVM-Go. Erfahren Sie, wie Sie Ihren Host-Computer و Ihr Zielgerät معhilfe integrierter Videoanschlüsse لـ ein ultra-einfaches, direktes Plug-in-Erlebnis verbinden."
keywords: "KVM-Go Einrichtung, ultrakompakte KVM Einrichtung, integrierte HDMI-الاتصال, KVM التثبيتsanleitung, Schlüsselanhänger KVM Einrichtung, USB KVM الاتصال, Headless Computer Setup, tragbare KVM Einrichtung"
---

# **الاتصالsanleitung** | Setup-دليل | Openterface KVM-Go

## **نظرة عامة der الاتصالen**

![KVM-Go الاتصالsحولsicht](https://assets.openterface.com/images/kvm-go/step-0-overview.webp){:style="max-height:360px"}

Die obigen Bilder zeigen alle الاتصالen zwischen dem [**KVM-Go**](/products/kvm-go), dem Host-Computer و dem Zielgerät.

- **Host-Computer**: Erfordert die التثبيت der [Openterface App](/app).  
- **Zielgerät**: Keine البرمجيات و Vorkonfiguration erforderlich.
- **Video**: Der integrierte Anschluss wird direkt in das Zielgerät eingesteckt, sodass Sie keine zusätzlichen Videokabel tragen أو verwalten müssen.

## **Was Sie لـ die الاتصالen benötigen**

![KVM-Go alle Teile](https://assets.openterface.com/images/kvm-go/step-0-all-parts.webp){:style="max-height:360px"}

Zur Einrichtung Ihres **KVM-Go** benötigen Sie folgende Komponenten:

- **KVM-Go (HDMI / DP / VGA)** — verbindet sich مع dem **Zielgerät** (لـ Videoaufnahme)  
- **Schwarzes kurzes USB-C-Kabel** — verbindet sich مع dem **Zielgerät** (لـ Tastatur- و Mausemulation)
- **Oranges langes USB-C-Kabel** — verbindet sich مع dem **Host-Computer** (der die [Openterface App](/app) ausführt)

!!! note "Hinweis zur Kabellänge"
    Die genauen Kabellängen im **offiziellen KVM-Go-Paket** sind **noch لا finalisiert** و können leicht von den hier gezeigten abweichen.  
    Die in dieser دليل gezeigten Kabel stammen aus dem *klassischen Mini-KVM Toolkit* و dienen nur zur Veranschaulichung.

!!! warning "Verwendung eigener Kabel"
    Wenn Sie sich لـ eigene Kabel entscheiden, stellen Sie sicher, dass es sich um **hochwertige, datenحولtragungsfähige USB-Kabel** handelt. Kabel minderer Qualität أو reine Ladekabel können zu folgenden Problemen führen:
    
    - Schwarzbildprobleme
    - Nicht reagierende Tastatur- أو Mauseingaben
    - Zeitweilige الاتصالsabbrüche
    - Flackernde أو instabile Bildschirmausgabe

## **Schritt-لـ-Schritt-Einrichtung**

### **Schritt 1 — USB-Kabel an KVM-Go anschließen**
![USB-Kabel einstecken](https://assets.openterface.com/images/kvm-go/step-1-plugged.webp){:style="max-height:360px"}

- **Schwarzes USB-C-Kabel** → In den Port مع der Kennzeichnung ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer.svg#only-light){:style="max-height:20px"} ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer_1.svg#only-dark){:style="max-height:20px"} **Target** am KVM-Go-Gehäuse einstecken.  
- **Oranges USB-C-Kabel** → In den Port مع der Kennzeichnung ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer.svg#only-light){:style="max-height:20px"} ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer_1.svg#only-dark){:style="max-height:20px"} **Host** einstecken.

!!! warning
    Beide USB-C-Ports sind physisch identisch.  
    Überprüfen Sie immer **die Beschriftungen** auf der Gehäuseoberfläche, um Verwechslungen zu vermeiden.

### **Schritt 2 — Video مع Ziel verbinden**
![HDMI-Anschluss einstecken](https://assets.openterface.com/images/kvm-go/step-3-hdmi-plugged.webp){:style="max-height:360px"}

Stecken Sie den **integrierten männlichen Videoanschluss** direkt in den Videoausgang des Zielgeräts.

### **Schritt 3 — Ziel-USB-Port verbinden**
Verbinden Sie das **schwarze USB-Kabel** مع dem Zielgerät لـ HID-Steuerung.

- **Option A:** Direkt in einen USB-A-Port  
  ![Ziel USB-A](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-b.webp){:style="max-height:360px"}

- **Option B:** Verwendung eines USB-C-Adapters  
  ![Ziel USB-C](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-a.webp){:style="max-height:360px"}

!!! note "USB-C-الاتصالsprüfung"
    Einige USB-C-Ports bieten möglicherweise keine sichere الاتصال. Wenn Sie zeitweilige Tastatur-/Mausprobleme haben, wackeln Sie vorsichtig an der Adapterverbindung, um sicherzustellen, dass sie richtig sitzt و Kontakt hat.


### **Schritt 4 — Host-USB-Port verbinden**
Verbinden Sie das **orange USB-Kabel** مع dem Host-Computer.

- Direkt an einen USB-C-Port **ODER** حول einen USB-C-zu-USB-A-Adapter.  
  ![Host-USB einstecken](https://assets.openterface.com/images/kvm-go/step-5-plug-in-host-computer-1.webp){:style="max-height:360px"}

