---
title: "Actualizare firmware KVM-Go"
description: KVM-Go folosește cipul CH32V208 de la WCH pentru emularea tastaturii și mouse-ului. În prezent, flasharea firmware-ului necesită instrumentul oficial de…
---

# Actualizare firmware KVM-Go

## Prezentare generală

KVM-Go folosește cipul CH32V208 de la WCH pentru emularea tastaturii și mouse-ului. În prezent, flasharea firmware-ului necesită instrumentul oficial de programare WCH, disponibil doar pentru Windows. Prin urmare, actualizările de firmware trebuie efectuate pe un sistem Windows deocamdată.

Lucrăm activ la o soluție de actualizare firmware multiplatformă dezvoltată intern, care va fi integrată direct în dispozitiv. Odată gata, va suporta actualizări firmware pe toate sistemele de operare majore — fără instrumente terțe.

> **Notă:** Această procedură manuală de actualizare firmware este o soluție temporară pentru unitățile de dezvoltare timpurie. Pentru produsele oficiale de producție, actualizările firmware vor fi integrate perfect în software-ul nostru, permițând actualizarea firmware-ului direct prin aplicație, fără instrumente terțe sau proceduri manuale.

## Cerințe prealabile

Înainte de a continua, asigurați-vă că aveți:

- Un computer Windows
- WCH ISP Tool instalat
- Fișierul firmware (format `.hex`) pregătit pentru flash

### Descărcare firmware

Descărcați cel mai recent fișier firmware KVM-Go:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Cel mai recent firmware pentru emularea tastaturii și mouse-ului KVM-Go (cip CH32V208)

Salvați fișierul firmware într-o locație ușor accesibilă pe computerul Windows înainte de a continua cu actualizarea.

### Descărcare WCH ISP Tool

Descărcați și instalați [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (doar Windows).

Vă mulțumim pentru răbdare și sprijin!

## Instrucțiuni pas cu pas

### Pasul 1: Descărcați și deschideți instrumentul în Windows

Lansați WCH ISP Tool pe computerul Windows.

![Interfața WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Pasul 2: Pregătiți KVM-Go pentru flash

Pentru a flasha firmware pe KVM-Go:

1. Asigurați-vă că dispozitivul este oprit
2. Țineți apăsat butonul în timp ce îl conectați la un port USB Type-C

**Sfat:** Puteți flasha folosind oricare port, dar portul «target» tinde să fie mai stabil în timpul flash-ului.

![Cablu și configurare conexiune KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Pasul 3: Selectați fișierul firmware

Dacă conexiunea reușește, instrumentul va detecta automat modelul cipului (seria CH32V20X).

1. Faceți clic pe butonul «...» pentru a răsfoi și selecta fișierul firmware de flashat
2. Selectați fișierul firmware `.hex`
3. **Important:** Nu uitați să bifați caseta de lângă fișierul firmware

![Model cip detectat în WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Răsfoire și selectare fișier firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Fișier firmware selectat cu caseta bifată](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Pasul 4: Deprotejați firmware-ul actual

Înainte de a flasha noul firmware, trebuie să eliminați protecția la scriere a firmware-ului actual:

1. Faceți clic pe opțiunea «Deprotect» în instrument
2. Apăsați scurt butonul fizic de pe KVM-Go pentru a intra în modul flash
3. Așteptați finalizarea procesului de deprotejare

![Opțiune Deprotect în instrument](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Apăsați butonul pe KVM-Go pentru modul flash](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Pasul 5: Descărcați și flashați firmware-ul

Odată ce firmware-ul este deprotejat și selectat:

1. Faceți clic pe butonul «Download» în instrumentul de flash
2. Așteptați finalizarea procesului de flash
3. Instrumentul va indica când firmware-ul a fost flashat cu succes

![Proces descărcare și flash firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Lecturi suplimentare

- [Ghid de recenzie Openterface KVM-Go](review-guide.md) — Note importante și probleme cunoscute pentru unități prototip de inginerie
