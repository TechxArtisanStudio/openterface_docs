---
title: "Verbindingsanleitung"
description: "Schritt-voor-Schritt-Handleiding zur Einrichtung des Openterface KVM-Go. Erfahren Sie, wie Sie Ihren Host-Computer en Ihr Zielgerät methilfe integrierter Videoanschlüsse voor ein ultra-einfaches, direktes Plug-in-Erlebnis verbinden."
keywords: "KVM-Go Einrichtung, ultrakompakte KVM Einrichtung, integrierte HDMI-Verbinding, KVM Installatiesanleitung, Schlüsselanhänger KVM Einrichtung, USB KVM Verbinding, Headless Computer Setup, tragbare KVM Einrichtung"
---

# **Verbindingsanleitung** | Setup-Handleiding | Openterface KVM-Go

## **Overzicht der Verbindingen**

![KVM-Go Verbindingsoversicht](https://assets.openterface.com/images/kvm-go/step-0-overview.webp){:style="max-height:360px"}

Die obigen Bilder zeigen alle Verbindingen zwischen dem [**KVM-Go**](/product/kvm-go), dem Host-Computer en dem Zielgerät.

- **Host-Computer**: Erfordert die Installatie der [Openterface App](/app).  
- **Zielgerät**: Keine Software en Vorkonfiguration erforderlich.
- **Video**: Der integrierte Anschluss wird direkt in das Zielgerät eingesteckt, sodass Sie keine zusätzlichen Videokabel tragen of verwalten müssen.

## **Was Sie voor die Verbindingen benötigen**

![KVM-Go alle Teile](https://assets.openterface.com/images/kvm-go/step-0-all-parts.webp){:style="max-height:360px"}

Zur Einrichtung Ihres **KVM-Go** benötigen Sie folgende Komponenten:

- **KVM-Go (HDMI / DP / VGA)** — verbindet sich met dem **Zielgerät** (voor Videoaufnahme)  
- **Schwarzes kurzes USB-C-Kabel** — verbindet sich met dem **Zielgerät** (voor Tastatur- en Mausemulation)
- **Oranges langes USB-C-Kabel** — verbindet sich met dem **Host-Computer** (der die [Openterface App](/app) ausführt)

!!! note "Hinweis zur Kabellänge"
    Die genauen Kabellängen im **offiziellen KVM-Go-Paket** sind **noch niet finalisiert** en können leicht von den hier gezeigten abweichen.  
    Die in dieser Handleiding gezeigten Kabel stammen aus dem *klassischen Mini-KVM Toolkit* en dienen nur zur Veranschaulichung.

!!! warning "Verwendung eigener Kabel"
    Wenn Sie sich voor eigene Kabel entscheiden, stellen Sie sicher, dass es sich um **hochwertige, datenovertragungsfähige USB-Kabel** handelt. Kabel minderer Qualität of reine Ladekabel können zu folgenden Problemen führen:
    
    - Schwarzbildprobleme
    - Nicht reagierende Tastatur- of Mauseingaben
    - Zeitweilige Verbindingsabbrüche
    - Flackernde of instabile Bildschirmausgabe

## **Schritt-voor-Schritt-Einrichtung**

### **Schritt 1 — USB-Kabel an KVM-Go anschließen**
![USB-Kabel einstecken](https://assets.openterface.com/images/kvm-go/step-1-plugged.webp){:style="max-height:360px"}

- **Schwarzes USB-C-Kabel** → In den Port met der Kennzeichnung ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer.svg#only-light){:style="max-height:20px"} ![Ziel-Symbol](https://assets.openterface.com/images/shell-icons/target-computer_1.svg#only-dark){:style="max-height:20px"} **Target** am KVM-Go-Gehäuse einstecken.  
- **Oranges USB-C-Kabel** → In den Port met der Kennzeichnung ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer.svg#only-light){:style="max-height:20px"} ![Host-Symbol](https://assets.openterface.com/images/shell-icons/host-computer_1.svg#only-dark){:style="max-height:20px"} **Host** einstecken.

!!! warning
    Beide USB-C-Ports sind physisch identisch.  
    Überprüfen Sie immer **die Beschriftungen** auf der Gehäuseoberfläche, um Verwechslungen zu vermeiden.

### **Schritt 2 — Video met Ziel verbinden**
![HDMI-Anschluss einstecken](https://assets.openterface.com/images/kvm-go/step-3-hdmi-plugged.webp){:style="max-height:360px"}

Stecken Sie den **integrierten männlichen Videoanschluss** direkt in den Videoausgang des Zielgeräts.

### **Schritt 3 — Ziel-USB-Port verbinden**
Verbinden Sie das **schwarze USB-Kabel** met dem Zielgerät voor HID-Steuerung.

- **Option A:** Direkt in einen USB-A-Port  
  ![Ziel USB-A](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-b.webp){:style="max-height:360px"}

- **Option B:** Verwendung eines USB-C-Adapters  
  ![Ziel USB-C](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-a.webp){:style="max-height:360px"}

!!! note "USB-C-Verbindingsprüfung"
    Einige USB-C-Ports bieten möglicherweise keine sichere Verbinding. Wenn Sie zeitweilige Tastatur-/Mausprobleme haben, wackeln Sie vorsichtig an der Adapterverbindung, um sicherzustellen, dass sie richtig sitzt en Kontakt hat.


### **Schritt 4 — Host-USB-Port verbinden**
Verbinden Sie das **orange USB-Kabel** met dem Host-Computer.

- Direkt an einen USB-C-Port **ODER** over einen USB-C-zu-USB-A-Adapter.  
  ![Host-USB einstecken](https://assets.openterface.com/images/kvm-go/step-5-plug-in-host-computer-1.webp){:style="max-height:360px"}

