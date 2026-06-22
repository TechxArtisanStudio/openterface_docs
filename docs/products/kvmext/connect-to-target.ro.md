---
title: "Conectare la dispozitivul țintă | Modul de extensie v2"
description: "Conectați dispozitivul țintă la modulul de extensie KVM Openterface uConsole v2 prin HDMI, USB HID și Ethernet opțional pentru depanare în rețea."
keywords: "configurare conexiune KVM, dispozitiv țintă, HDMI, USB HID, depanare Ethernet, uConsole KVM v2"
---

# **Conectare la dispozitivul țintă** | Modul de extensie v2

## Prezentare generală a conexiunii

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Modulul de extensie v2 se conectează la dispozitivul țintă prin **HDMI** (video/audio) și **USB** (emulare tastatură/mouse). Opțional, utilizați **Ethernet** pentru SSH, administrare web sau captură de jurnale, în timp ce KVM gestionează afișarea și intrarea.

## Cerințe preliminare

1. [Instalare hardware](/products/kvmext/hardware-installation/) — modul instalat în slotul de extensie
2. [Configurare software](/products/kvmext/software-setup/) — Openterface QT instalat pe uConsole
3. [Placă de rețea aleasă](/products/kvmext/ethernet/) (dacă utilizați funcții de rețea)

## Pași de conectare

### **Control USB (necesar pentru KVM)**

Conectați **portul Type-C** al plăcii de extensie la portul USB al dispozitivului țintă. Aceasta emulează tastatura și mouse-ul (USB HID).

Dispozitivul țintă **nu** are nevoie de drivere sau software suplimentar pentru controlul HID.

### **Intrare video (necesară pentru KVM)**

Conectați ieșirea HDMI a dispozitivului țintă la intrarea HDMI a modulului de extensie:

- Cablu HDMI standard pentru ieșiri HDMI
- Convertor **VGA-la-HDMI** pentru VGA (asigurați-vă că alimentarea USB a convertorului este conectată)
- Alte adaptoare pentru DVI, DisplayPort, Micro HDMI, după caz

### **Ethernet (opțional — depanare în rețea)**

Dacă ați instalat o placă de rețea:

- Conectați un cablu Ethernet de la placă la dispozitivul țintă sau la un switch de rețea
- Utilizați uConsole pentru SSH, interfață web sau captură de jurnale alături de KVM
- Consultați [Ghidul Ethernet](/products/kvmext/ethernet/) pentru configurarea 100M vs 1000M

### **Card SD (opțional — imagini și fișiere)**

Introduceți un card microSD în slotul modulului. Utilizați aplicația gazdă pentru a comuta accesul între uConsole și dispozitivul țintă. Consultați [Ghidul card SD](/products/kvmext/sd-card/).

## Comutare partajată USB 2.0

Aplicația gazdă poate comuta un port USB 2.0 partajat între uConsole și dispozitivul țintă — util pentru unități flash și fluxuri de lucru de mentenanță, fără a deconecta cablurile.

## Testarea conexiunii

1. Porniți uConsole și porniți dispozitivul țintă
2. Lansați Openterface QT
3. Confirmați că semnalul video HDMI apare pe ecranul uConsole
4. Testați tastatura, trackball-ul și transmisia audio
5. Dacă utilizați comutarea SD sau USB, testați montarea/comutarea în aplicația gazdă

## Subiecte conexe

- [Cazuri de utilizare](/products/kvmext/use-cases/) — scenarii IT de teren, homelab, depanare embedded
- [Întrebări frecvente](/products/kvmext/faq/) — depanare
