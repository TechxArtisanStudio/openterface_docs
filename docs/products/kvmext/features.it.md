---
title: "Caratteristiche e Specifiche | Modulo di Estensione v2"
description: "Panoramica completa del Modulo di Estensione KVM v2 per Openterface uConsole: KVM HDMI, doppia Ethernet, scheda SD, commutazione USB e specifiche tecniche."
keywords: "caratteristiche modulo estensione KVM v2, uConsole KVM, HDMI KVM, espansione Ethernet, scheda SD, KVM portatile, specifiche tecniche"
---

# **Caratteristiche e Specifiche** | Modulo di Estensione v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Caratteristiche Principali

- **Controllo KVM Diretto**: Visualizza e controlla un dispositivo target tramite ingresso HDMI ed emulazione di tastiera/mouse USB HID — ideale per accesso al BIOS, installazione del sistema operativo e recupero di server headless.
- **Supporto Doppia Scheda di Rete**: Sono incluse sia la scheda Ethernet **100M** che **1000M**. Usa la 100M su tutte le schede base uConsole; usa la 1000M con l'[HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) per il networking gigabit.
- **Lettura/Scrittura Scheda SD**: Scrivi immagini, esporta log e trasferisci file dalla tua uConsole senza un lettore di schede esterno.
- **Commutazione Condivisa USB 2.0**: Commuta l'accesso USB tra l'uConsole e il dispositivo target per debug e manutenzione flessibili.
- **Bassa Latenza**: Latenza video inferiore a **70 ms** con uscita **1080p @ 60 Hz** sullo schermo dell'uConsole.
- **Portatile e Alimentato dallo Slot**: Design compatto **77.3 × 34.7 mm**, alimentato dallo slot di espansione dell'uConsole — nessun alimentatore esterno necessario.
- **Allineato all'Open Source**: Costruito sulla piattaforma Openterface KVM con app host open source e supporto della community.

## Specifiche Tecniche

| Voce | Specifica |
|------|-----------|
| **Nome prodotto** | Openterface uConsole KVM Extension Module v2 |
| **Dimensioni scheda** | 77.3 × 34.7 mm |
| **Ingresso video** | HDMI fino a 4K @ 30 Hz (RGB/YCBCR444) o 4K @ 60 Hz (YCBCR420) |
| **Uscita video** | 1080p @ 60 Hz sullo schermo dell'uConsole |
| **Latenza** | &lt; 70 ms |
| **Controllo KVM** | Emulazione di tastiera e mouse USB HID |
| **Rete** | 100M funziona su tutte le schede base uConsole; 1000M richiede l'uConsole Upgrade Kit |
| **Scheda SD** | Lettura/scrittura con commutazione host/target tramite app host |
| **Condivisione USB** | Commutazione condivisa USB 2.0 Full Speed (12 Mbps) |
| **Piattaforme target** | Windows, macOS, Linux, sistemi x86, SBC ARM |
| **Alimentazione** | Alimentato dallo slot di espansione dell'uConsole |
| **Alimentazione esterna** | Non richiesta |

### Emulazione Completa di Tastiera e Mouse

- **USB HID**: Posizionamento mouse assoluto e relativo, supporto tastiera completo, tasti multimediali.
- **Connessione**: Collegamento USB al target tramite la porta Type-C della scheda di estensione.

### Video e Audio

- **Ingresso**: Fino a 4K tramite HDMI (vedere la tabella sopra per i dettagli sulle modalità)
- **Uscita**: Full HD 1080p @ 60 Hz con latenza inferiore a 70 ms
- **Display**: Utilizza lo schermo integrato dell'uConsole
- **Compressione**: Supporto YUV e MJPEG
- **Compatibilità**: VGA, DVI, Micro HDMI (tramite adattatori)
- **Audio**: Passthrough audio integrato HDMI

### Connettività e Alimentazione

- **Alimentazione**: Assorbe energia direttamente dallo slot di espansione dell'uConsole
- **Software target**: Nessuna installazione richiesta sul dispositivo target

## Correlati

- [Guida Ethernet](/products/kvmext/ethernet/) — scegli tra scheda 100M e 1000M
- [Guida Scheda SD](/products/kvmext/sd-card/) — creazione immagini e trasferimento file
- [Opzioni di Acquisto](/products/kvmext/purchase-options/) — Solo Estensione vs bundle Upgrade Kit
- [Specifiche v1 legacy](/products/kvmext/v1/features/) — modulo di prima generazione
