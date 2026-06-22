---
title: "Instalare Hardware | Modul de Extensie v2"
description: "Instalați Modulul de Extensie KVM Openterface uConsole v2 în slotul de extensie. Alegeți placa Ethernet și conectați HDMI și USB la dispozitivul țintă."
keywords: "instalare extensie KVM v2, configurare hardware uConsole, slot de extensie, instalare placă Ethernet"
---

# **Instalare Hardware** | Modul de Extensie v2

## Prezentare generală

Modul de Extensie v2 se potrivește în **slotul de extensie** al uConsole (același slot folosit de modulul 4G/LTE). Nu poate fi utilizat în același timp cu modulul 4G sau LTE — alegeți funcționalitatea celulară **sau** KVM.

## De ce aveți nevoie

- [Conținutul pachetului](/products/kvmext/whats-in-the-box/) verificat înainte de instalare
- Placa Openterface Extension Module v2
- **O placă Ethernet** (100M sau 1000M — consultați [Ghidul Ethernet](/products/kvmext/ethernet/))
- Capacul slotului de extensie (inclus)
- Șurubelniță hexagonală pentru șuruburile de montare
- Protecție ESD (brățară antistatică sau suprafață împământată) — recomandată

## Pași de instalare

### **1. Opriți alimentarea**

Opriți uConsole și deconectați toate sursele de alimentare și cablurile.

### **2. Demontați modulul existent**

Dacă este instalat un modul de extensie 4G/LTE sau altul:

- Folosiți o șurubelniță hexagonală pentru a demonta cele două șuruburi de montare.
- Ridicați placa **drept în sus** pentru a evita îndoirea contactelor cu arc.
- Depozitați modulul original și șuruburile în siguranță dacă intenționați să îl reinstalați mai târziu.

### **3. Alegeți placa Ethernet**

Înainte de a monta placa principală, decideți ce placă să instalați:

| Placă | Când să o utilizați |
|-------|---------------------|
| **100M** | Toate plăcile de bază uConsole — compatibilitate universală |
| **1000M** | Doar dacă aveți **HackerGadgets uConsole Upgrade Kit** și aveți nevoie de gigabit |

Consultați [Ghidul Ethernet](/products/kvmext/ethernet/) pentru detalii complete.

### **4. Instalați Modulul de Extensie v2**

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:240px"}

- Așezați ferm Modulul de Extensie v2 în slotul de extensie.
- Asigurați-vă că contactele cu arc se aliniază uniform pe toate punctele de contact.
- Reintroduceți șuruburile de montare și strângeți-le **ușor** — nu le strângeți excesiv.

### **5. Verificați instalarea**

Placa ar trebui să stea **plat și stabil**, fără oscilații vizibile. Toate contactele cu arc ar trebui să apese uniform.

### **6. Instalați capacul slotului de extensie**

Reinstalați capacul slotului de extensie pentru a proteja modulul și a menține aspectul uConsole.

??? note "Orientarea textului pe capacul slotului de extensie"
    Textul de pe capac poate părea răsturnat din anumite unghiuri de vizualizare. Este orientat pentru a fi lizibil atunci când țineți uConsole și priviți porturile de sus — poziția naturală în timpul utilizării.

---

**Pașii următori**

1. [Configurare Software](/products/kvmext/software-setup/) — instalați aplicația gazdă Openterface pe uConsole
2. [Conectare la dispozitivul țintă](/products/kvmext/connect-to-target/) — cablare HDMI + USB
3. [Caracteristici și specificații](/products/kvmext/features/) — specificații tehnice complete

## Instalare versiunea v1 (Legacy)

Modulul de primă generație (37 × 77 mm) folosea șaibe pentru compensarea grosimii PCB-ului. Consultați [Legacy v1 — Instalare Hardware](/products/kvmext/v1/hardware-installation/).
