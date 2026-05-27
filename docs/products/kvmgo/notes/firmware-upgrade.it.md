---
title: "Aggiornamento firmware KVM-Go"
description: KVM-Go utilizza il chip CH32V208 di WCH per l'emulazione di tastiera e mouse. Attualmente, il flashing del firmware richiede lo strumento di programmazione…
---

# Aggiornamento firmware KVM-Go

## Panoramica

KVM-Go utilizza il chip CH32V208 di WCH per l'emulazione di tastiera e mouse. Attualmente, il flashing del firmware richiede lo strumento di programmazione ufficiale WCH, disponibile solo per Windows. Pertanto, gli aggiornamenti firmware devono essere eseguiti su un sistema Windows per il momento.

Stiamo lavorando attivamente a una soluzione di aggiornamento firmware multipiattaforma sviluppata internamente, che sarà integrata direttamente nel dispositivo. Una volta pronta, supporterà gli aggiornamenti firmware su tutti i principali sistemi operativi — senza strumenti di terze parti.

> **Nota:** Questa procedura manuale di aggiornamento firmware è una soluzione temporanea per le unità di sviluppo iniziale. Per i prodotti di produzione ufficiali, gli aggiornamenti firmware saranno integrati perfettamente nel nostro software, consentendo di aggiornare il firmware direttamente tramite l'applicazione senza strumenti di terze parti o procedure manuali.

## Prerequisiti

Prima di procedere, assicurati di avere:

- Un computer Windows
- WCH ISP Tool installato
- Il file firmware (formato `.hex`) pronto per il flashing

### Scaricare il firmware

Scarica l'ultimo file firmware KVM-Go:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Ultimo firmware per l'emulazione tastiera e mouse KVM-Go (chip CH32V208)

Salva il file firmware in una posizione facilmente accessibile sul computer Windows prima di procedere con l'aggiornamento.

### Scaricare WCH ISP Tool

Scarica e installa [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (solo Windows).

Grazie per la pazienza e il supporto!

## Istruzioni passo passo

### Passo 1: Scaricare e aprire lo strumento in Windows

Avvia WCH ISP Tool sul computer Windows.

![Interfaccia WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Passo 2: Preparare KVM-Go per il flashing

Per flashare il firmware su KVM-Go:

1. Assicurati che il dispositivo sia spento
2. Tieni premuto il pulsante mentre lo colleghi a una porta USB Type-C

**Suggerimento:** Puoi flashare usando entrambe le porte, ma la porta «target» tende ad essere più stabile durante il flashing.

![Cablaggio e configurazione connessione KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Passo 3: Selezionare il file firmware

Se la connessione ha successo, lo strumento rileverà automaticamente il modello del chip (serie CH32V20X).

1. Clicca sul pulsante «...» per sfogliare e selezionare il file firmware da flashare
2. Seleziona il file firmware `.hex`
3. **Importante:** Ricorda di spuntare la casella accanto al file firmware

![Modello chip rilevato in WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Sfogliare e selezionare file firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![File firmware selezionato con casella spuntata](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Passo 4: Deproteggere il firmware attuale

Prima di flashare il nuovo firmware, devi rimuovere la protezione in scrittura del firmware attuale:

1. Clicca sull'opzione «Deprotect» nello strumento
2. Premi brevemente il pulsante fisico su KVM-Go per entrare in modalità flashing
3. Attendi il completamento del processo di deprotezione

![Opzione Deprotect nello strumento](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Premere il pulsante su KVM-Go per entrare in modalità flashing](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Passo 5: Scaricare e flashare il firmware

Una volta deprotetto e selezionato il firmware:

1. Clicca sul pulsante «Download» nello strumento di flashing
2. Attendi il completamento del processo di flashing
3. Lo strumento indicherà quando il firmware è stato flashato con successo

![Processo di download e flashing firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Approfondimenti

- [Guida alla recensione Openterface KVM-Go](review-guide.md) — Note importanti e problemi noti per unità prototipo ingegneristiche
