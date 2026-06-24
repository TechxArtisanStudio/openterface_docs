---
title: "Installazione Hardware | Modulo di Estensione v2"
description: "Installa il Modulo di Estensione v2 KVM uConsole Openterface nello slot di espansione. Scegli la tua scheda Ethernet e collega HDMI e USB al tuo dispositivo target."
keywords: "installazione KVM extension v2, configurazione hardware uConsole, slot di espansione, installazione scheda Ethernet"
---

# **Installazione Hardware** | Modulo di Estensione v2

## Panoramica

Il Modulo di Estensione v2 si inserisce nello **slot di espansione** dell'uConsole (lo stesso slot utilizzato dal modulo 4G/LTE). Non può essere utilizzato contemporaneamente al modulo 4G o LTE — scegli la funzionalità cellulare **oppure** KVM.

## Cosa ti servirà

- [Contenuto della confezione](/products/kvmext/whats-in-the-box/) verificato prima dell'installazione
- Scheda Openterface Extension Module v2
- **Una scheda Ethernet** (100M o 1000M — vedi [Guida Ethernet](/products/kvmext/ethernet/))
- Coperchio dello slot di espansione (incluso)
- Cacciavite esagonale per le viti di montaggio
- Protezione ESD (bracciale antistatico o superficie collegata a terra) — consigliata

## Passaggi di installazione

### **1. Spegnimento**

Spegni l'uConsole e scollega tutti i cavi e l'alimentazione.

### **2. Rimozione del modulo esistente**

Se è installato un modulo 4G/LTE o un altro modulo di espansione:

- Usa un cacciavite esagonale per rimuovere le due viti di montaggio.
- Solleva la scheda **dritta verso l'alto** per evitare di piegare i contatti a molla.
- Conserva il modulo originale e le viti in modo sicuro se prevedi di reinstallarlo in seguito.

### **3. Scegli la tua scheda Ethernet**

Prima di posizionare la scheda principale, decidi quale scheda installare:

| Scheda | Quando utilizzarla |
|------|-------------|
| **100M** | Tutte le schede base uConsole — compatibilità universale |
| **1000M** | Solo se disponi del **HackerGadgets uConsole Upgrade Kit** e hai bisogno del gigabit |

Vedi la [Guida Ethernet](/products/kvmext/ethernet/) per i dettagli completi.

### **4. Installazione del Modulo di Estensione v2**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Inserisci saldamente il Modulo di Estensione v2 nello slot di espansione.
- Assicurati che i contatti a molla siano allineati uniformemente su tutti i pad.
- Reinserisci le viti di montaggio e stringi **delicatamente** — non serrare eccessivamente.

### **5. Verifica dell'installazione**

La scheda dovrebbe essere posizionata **in piano e stabile** senza oscillazioni evidenti. Tutti i contatti a molla dovrebbero premere uniformemente.

### **6. Installazione del coperchio dello slot di espansione**

Reinstalla il coperchio dello slot di espansione per proteggere il modulo e mantenere l'aspetto dell'uConsole.

??? note "Orientamento del testo sul coperchio dello slot di espansione"
    Il testo sul coperchio potrebbe apparire capovolto da alcune angolazioni. È orientato per essere leggibile quando tieni l'uConsole e guardi le porte dall'alto — la posizione naturale durante l'uso.

---

**Passi successivi**

1. [Configurazione Software](/products/kvmext/software-setup/) — installa l'app host Openterface sul tuo uConsole
2. [Collegamento al Target](/products/kvmext/connect-to-target/) — cablaggio HDMI + USB
3. [Caratteristiche e Specifiche](/products/kvmext/features/) — specifiche tecniche complete

## Installazione Legacy v1

Il modulo di prima generazione (37 × 77 mm) utilizzava delle rondelle per la compensazione dello spessore del PCB. Vedi [Legacy v1 — Installazione Hardware](/products/kvmext/v1/hardware-installation/).
