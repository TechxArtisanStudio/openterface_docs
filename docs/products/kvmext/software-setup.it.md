---
title: "Configurazione Software | Modulo di Estensione v2"
description: "Installa e configura l'app host Openterface sulla tua uConsole per il Modulo di Estensione KVM v2 — acquisizione HDMI, USB HID, commutazione scheda SD e condivisione USB."
keywords: "installazione app Openterface, configurazione software uConsole, modulo estensione KVM v2, openterfaceqt"
---

# **Configurazione Software** | Modulo di Estensione v2

## Panoramica dell'installazione

L'app host Openterface consente alla tua uConsole di funzionare come interfaccia KVM con acquisizione HDMI, controllo USB HID, **commutazione della scheda SD** e **condivisione della porta USB** tra host e target.

!!! note "Requisiti"
    - **uConsole (host)**: richiesta l'app Openterface QT
    - **Dispositivo target**: nessuna app necessaria — Windows, macOS, Linux, Android, iOS supportati per KVM
    - **Video**: cavo HDMI standard; i convertitori alimentati supportano VGA, DP e altri formati
    - **Backend consigliato**: **GStreamer** per le migliori prestazioni GPU arm64 (Kali Linux potrebbe avere supporto GStreamer limitato)

## Metodi di installazione

### **Opzione 1: GitHub Releases (consigliata per arm64)**

1. Visita [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Scarica l'ultimo `.deb` per **arm64** (ad es. `openterfaceqt_*_arm64.deb`).
3. Installa:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Opzione 2: Flatpak**

Segui la [Guida all'installazione Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Opzione 3: Repository della community (ClockworkPi Bookworm)**

Mantenuto da Rex per le immagini ClockworkPi:

1. **Aggiungi il repository**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Installa**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Note sul repository"
    I comandi richiedono `sudo`. Il repository è destinato ai pacchetti arm64 Bookworm — verifica la compatibilità con il sistema operativo della tua uConsole prima dell'installazione.

## Promemoria importanti

!!! tip "Alimentazione e prima configurazione"
    - Mantieni la uConsole carica o su un'alimentazione stabile — la batteria scarica può causare problemi di connessione.
    - Se il controllo di tastiera/mouse fallisce al primo tentativo:
        1. Spegni completamente la uConsole.
        2. Attendi almeno 10 secondi.
        3. Accendi e riprova.

!!! tip "Velocità di trasmissione per la comunicazione seriale"
    Imposta la velocità di trasmissione su **9600** per l'uso seriale — la uConsole potrebbe non sostenere in modo affidabile 115200.

## Utilizzo

### **Avvio di una sessione KVM**

1. Avvia Openterface QT sulla tua uConsole.
2. L'app rileva automaticamente il Modulo di Estensione v2.
3. Collega il target tramite HDMI e USB.
4. Usa la tastiera e la trackball della uConsole per controllare il target.

### **Funzionalità di controllo**

- **Tastiera**: emulazione completa inclusi i tasti multimediali
- **Mouse**: posizionamento assoluto e relativo
- **Audio**: passthrough audio HDMI agli altoparlanti della uConsole
- **Trasferimento testo**: incolla nomi utente, password e frammenti di testo come sequenze di tasti simulati
- **Commutazione USB**: condividi l'archiviazione USB tra uConsole e target tramite l'app host — vedi [Connetti al Target](/products/kvmext/connect-to-target/)
- **Commutazione scheda SD**: monta la scheda SD sull'host o sul target tramite l'app host — vedi [Guida Scheda SD](/products/kvmext/sd-card/)

### **Risoluzione dei problemi di installazione del software**

Se l'app è difficile da installare o mouse/tastiera non funzionano:

- Conferma di aver installato la build **arm64** sulla tua uConsole CM4/modulo
- Unisciti a [Discord](https://openterface.com/discord) per assistenza in tempo reale
- Segnala i problemi su [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Correlati

- [Connetti al Target](/products/kvmext/connect-to-target/)
- [Guida Scheda SD](/products/kvmext/sd-card/)
- [FAQ](/products/kvmext/faq/)
