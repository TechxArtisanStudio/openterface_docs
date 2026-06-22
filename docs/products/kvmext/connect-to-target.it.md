---
title: "Connessione al Dispositivo Target | Modulo di Estensione v2"
description: "Collega il tuo dispositivo target all'Openterface uConsole KVM Extension Module v2 tramite HDMI, USB HID ed Ethernet opzionale per il debug di rete."
keywords: "configurazione connessione KVM, dispositivo target, HDMI, USB HID, debug Ethernet, uConsole KVM v2"
---

# **Connessione al Dispositivo Target** | Modulo di Estensione v2

## Panoramica della connessione

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Il Modulo di Estensione v2 si collega al tuo target tramite **HDMI** (video/audio) e **USB** (emulazione di tastiera/mouse). Opzionalmente utilizza **Ethernet** per SSH, gestione web o cattura dei log mentre il KVM gestisce display e input.

## Prerequisiti

1. [Installazione Hardware](/products/kvmext/hardware-installation/) — modulo inserito nello slot di espansione
2. [Configurazione Software](/products/kvmext/software-setup/) — Openterface QT installato su uConsole
3. [Scheda Ethernet scelta](/products/kvmext/ethernet/) (se si utilizzano le funzionalità di rete)

## Passaggi per la connessione

### **Controllo USB (richiesto per KVM)**

Collega la **porta Type-C** della scheda di estensione alla porta USB del dispositivo target. Questo emula tastiera e mouse (USB HID).

Il dispositivo target **non** richiede driver o software aggiuntivo per il controllo HID.

### **Ingresso video (richiesto per KVM)**

Collega l'uscita HDMI del target all'ingresso HDMI del modulo di estensione:

- Cavo HDMI standard per uscite HDMI
- Convertitore **VGA-to-HDMI** per VGA (assicurati che l'alimentazione USB del convertitore sia collegata)
- Altri adattatori per DVI, DisplayPort, Micro HDMI secondo necessità

### **Ethernet (opzionale — debug di rete)**

Se hai installato una scheda di rete:

- Collega un cavo Ethernet dalla scheda al tuo dispositivo target o allo switch di rete
- Usa l'uConsole per SSH, interfaccia web o cattura dei log insieme al KVM
- Consulta la [Guida Ethernet](/products/kvmext/ethernet/) per la configurazione 100M vs 1000M

### **Scheda SD (opzionale — imaging e file)**

Inserisci una scheda microSD nello slot del modulo. Usa l'app host per commutare l'accesso tra uConsole e target. Consulta la [Guida Scheda SD](/products/kvmext/sd-card/).

## Commutazione condivisa USB 2.0

L'app host può commutare una porta USB 2.0 condivisa tra l'uConsole e il target — utile per unità flash e flussi di lavoro di manutenzione senza scollegare i cavi.

## Test della connessione

1. Accendi l'uConsole e avvia il dispositivo target
2. Avvia Openterface QT
3. Verifica che il video HDMI appaia sullo schermo dell'uConsole
4. Testa tastiera, trackball e passthrough audio
5. Se utilizzi la commutazione SD o USB, testa il montaggio/la commutazione nell'app host

## Correlati

- [Casi d'Uso](/products/kvmext/use-cases/) — scenari di IT sul campo, homelab, debug embedded
- [FAQ](/products/kvmext/faq/) — risoluzione dei problemi
