---
title: "FAQ | Extension Module v2"
description: "FAQ per Openterface uConsole KVM Extension Module v2: schede Ethernet, Upgrade Kit, scheda SD, configurazione software, compatibilità e risoluzione dei problemi."
keywords: "FAQ estensione KVM v2, uConsole KVM, Ethernet, scheda SD, risoluzione dei problemi, Upgrade Kit"
---

# FAQ | Extension Module v2

Benvenuto nella FAQ per **Openterface uConsole KVM Extension Module v2**.

Se non trovi quello che cerchi, invia un'email a [support@openterface.com](mailto:support@openterface.com) o unisciti alla nostra community su [Discord](/discord).

---

## :material-clipboard-list: Navigazione Rapida

- [Prodotto e acquisto](#product--purchase)
- [Installazione e hardware](#installation--hardware)
- [Compatibilità](#compatibility)
- [Controllo e funzionalità](#control--features)
- [Video e audio](#video--audio)
- [Risoluzione dei problemi](#troubleshooting)
- [Altro](#more)

---

## Prodotto e acquisto

**:material-chat-question:{ .faq } Extension Module v2 è un unico prodotto o due versioni di rete?**

È **un unico prodotto**. Sia la scheda Ethernet 100M che la 1000M sono incluse nella confezione. Vedi [Opzioni di acquisto](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Quale scheda Ethernet dovrei usare?**

Usa la scheda **100M** su tutte le schede base uConsole. Usa la scheda **1000M** solo se possiedi l'**HackerGadgets uConsole Upgrade Kit** e hai bisogno di una rete gigabit. Vedi [Guida Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Ho bisogno dell'HackerGadgets uConsole Upgrade Kit?**

Solo per **Ethernet gigabit**. La scheda 100M funziona senza l'Upgrade Kit. Se non possiedi il kit, scegli l'opzione bundle al checkout o acquista il kit separatamente.

**:material-chat-question:{ .faq } L'uConsole è inclusa?**

No. Il dispositivo ClockworkPi uConsole è venduto separatamente.

---

## Installazione e hardware

**:material-chat-question:{ .faq } Come funziona Extension Module v2?**

Cattura l'HDMI da un dispositivo target e lo visualizza sull'uConsole. La tastiera e la trackball dell'uConsole controllano il target tramite emulazione USB HID. Le funzionalità opzionali Ethernet e scheda SD estendono i flussi di lavoro di debug di rete e imaging.

**:material-chat-question:{ .faq } Posso usarlo con il modulo 4G/LTE installato?**

No. Extension Module v2 utilizza lo slot di espansione dell'uConsole e **non può** essere utilizzato contemporaneamente al modulo 4G o LTE.

**:material-chat-question:{ .faq } Quali strumenti mi servono per l'installazione?**

Un cacciavite esagonale per le viti di montaggio. Si raccomandano precauzioni ESD.

**:material-chat-question:{ .faq } L'installazione è reversibile?**

Sì. Rimuovi Extension Module v2 e reinstalla il modulo 4G/LTE originale se necessario.

---

## Compatibilità

**:material-chat-question:{ .faq } Quali modelli uConsole sono compatibili?**

Compatibile con i dispositivi uConsole dotati dello slot di espansione standard. Controlla le specifiche del tuo dispositivo per confermare.

**:material-chat-question:{ .faq } Quali dispositivi target posso controllare?**

Qualsiasi dispositivo con uscita HDMI: desktop, server, SBC (Raspberry Pi, ecc.), sistemi embedded, PC industriali e altro.

**:material-chat-question:{ .faq } Il target necessita di software speciale?**

No. Il KVM utilizza l'emulazione USB HID: non sono richiesti driver sul target per tastiera e mouse. Scopri di più sulla [tecnologia KVM basata su USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Posso controllare più target contemporaneamente?**

Un solo target alla volta per il KVM. Cambia target spostando i cavi HDMI e USB.

---

## Controllo e funzionalità

**:material-chat-question:{ .faq } Posso trasferire file tramite scheda SD?**

Sì. Extension Module v2 supporta la lettura/scrittura della scheda SD con commutazione host/target tramite l'app Openterface. Vedi [Guida alla scheda SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Supporta l'accesso a livello di BIOS?**

Sì. L'USB HID diretto consente l'accesso completo a BIOS/UEFI senza dipendenze dalla rete.

**:material-chat-question:{ .faq } E per quanto riguarda il modulo legacy v1?**

Il modulo di prima generazione da 37 × 77 mm (senza Ethernet/SD) è documentato in [Documentazione Legacy v1](/products/kvmext/v1/).

---

## Video e audio

**:material-chat-question:{ .faq } Quali risoluzioni video sono supportate?**

- **Input**: Fino a 4K @ 30 Hz (RGB/YCBCR444) o 4K @ 60 Hz (YCBCR420) tramite HDMI
- **Output**: 1080p @ 60 Hz sullo schermo dell'uConsole

**:material-chat-question:{ .faq } Qual è la latenza video?**

Inferiore a **70 ms**: adatta per l'accesso al BIOS, la manutenzione e la diagnostica.

**:material-chat-question:{ .faq } L'audio è supportato?**

Sì. L'audio integrato HDMI viene trasmesso agli altoparlanti dell'uConsole.

---

## Risoluzione dei problemi

**:material-chat-question:{ .faq } Nessun segnale video**

- Controlla le connessioni HDMI su entrambe le estremità
- Verifica che il target sia alimentato e trasmetta tramite HDMI
- Prova un cavo HDMI diverso
- Riavvia Openterface QT

**:material-chat-question:{ .faq } Tastiera o mouse non funzionanti**

- Conferma il cavo USB dal modulo di estensione al target
- Spegni completamente l'uConsole, attendi 10 secondi, riaccendi e riprova
- Reinstalla Openterface QT (build arm64 per il tuo uConsole)
- Segnala la tua distribuzione Linux e il modulo CM4 su [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) o [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Il software è stato difficile da installare**

Prova le Release di GitHub (Opzione 1) o il repo della community ClockworkPi (Opzione 3) in [Configurazione Software](/products/kvmext/software-setup/). Unisciti a [Discord](https://openterface.com/discord) per assistenza passo dopo passo.

**:material-chat-question:{ .faq } La porta di commutazione USB non funziona**

Assicurati di utilizzare una versione recente di Openterface QT. Attiva/disattiva l'accesso USB nell'app host. Se il problema persiste, apri una segnalazione su [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } L'HDMI viene visualizzato solo in un riquadro / nessun menu delle impostazioni dell'app**

Aggiorna all'ultima versione di Openterface QT. Controlla [Configurazione Software](/products/kvmext/software-setup/) e i thread della community su Discord per le impostazioni di visualizzazione specifiche per uConsole.

**:material-chat-question:{ .faq } L'app non rileva il modulo**

- Reinserisci la scheda nello slot di espansione
- Riavvia l'uConsole
- Reinstalla Openterface QT

---

## Altro

**:material-chat-question:{ .faq } Il software è open source?**

Sì. Le app host di Openterface sono open source su [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Dove posso ottenere supporto?**

- **Email**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Unisciti alla nostra community](https://openterface.com/discord)
- **GitHub**: [Segnala problemi](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
