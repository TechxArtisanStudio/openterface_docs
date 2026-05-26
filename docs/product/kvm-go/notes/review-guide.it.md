# Openterface KVM-Go — Guida alla recensione (Prototipo ingegneristico)

## Panoramica

Grazie per aver dedicato tempo a testare il nostro prossimo prodotto **[Openterface KVM-Go](https://openterface.com/product/kvm-go/)**.

Questa unità è un **prototipo ingegneristico**, e il nostro firmware e software stanno evolvendo rapidamente. Il tuo feedback ci aiuterà direttamente a migliorare il prodotto prima della produzione di massa.

Se riscontri problemi durante i test, contattaci direttamente. **Forniremo supporto immediato per risolverli prima che registri il tuo video.**

## Note importanti

### Disclaimer prototipo

Questo dispositivo è un **prototipo ingegneristico**. Firmware e software possono ancora contenere bug o funzionalità incomplete. Se riscontri instabilità o qualcosa che blocca il tuo flusso di lavoro, faccelo sapere. Risolveremo i problemi prima della spedizione della versione di produzione.

### Usa il software più recente

Per le migliori prestazioni e compatibilità, usa l'**ultima versione** del [software Openterface](https://openterface.com/app/overview/) dalla nostra pagina GitHub Releases. Aggiorniamo frequentemente e le versioni precedenti potrebbero non corrispondere al firmware del tuo prototipo.

## Problemi noti e spiegazioni

> **Nota:** Tutti i problemi elencati di seguito saranno risolti prima del rilascio di produzione.

### Temperatura superficiale

Il dispositivo può risultare caldo o addirittura molto caldo durante l'uso. È previsto perché il prototipo usa chip ad alte prestazioni.

Nota che:

* Tutte le temperature restano nell'intervallo operativo sicuro
* **Sensori di temperatura** integrati riportano lo stato termico in tempo reale nel software
* Test di stress multi-giorno non mostrano problemi di stabilità

Continueremo a perfezionare le prestazioni termiche prima della produzione di massa.

### Distribuzione software

Attualmente supportiamo più piattaforme:

* **macOS e Windows**
  Sono le piattaforme più stabili, consigliate per test completi.

* **Linux**
  Usa la versione **AppImage**.
  I pacchetti `.deb` e `.rpm` possono avere problemi di dipendenze a seconda della distribuzione. Stiamo migliorando questi installer.

* **Android**
  Una versione funzionante è disponibile su **Google Play** per controllo base e monitoraggio.
  Provala se vuoi esplorare flussi di lavoro mobili.

* **iPadOS**
  Disponibile tramite **TestFlight**.
  Se vuoi testarlo, inviami il tuo **Apple ID** e ti aggiungerò alla lista tester.

### Funzionalità copia e incolla

Il firmware sulla tua unità potrebbe non includere le nostre ultime correzioni degli appunti. Questi problemi sono già stati risolti nel firmware più recente. Puoi aggiornare usando la [Guida aggiornamento firmware](firmware-upgrade.md) se vuoi testare l'ultima versione.

### Smontaggio (Opzionale)

Se ti piacciono gli smontaggi, puoi smontare l'unità.

Il tuo prototipo include i seguenti componenti:

* **MS2130S** — Chip di acquisizione video
* **WCH CH32V208** — MCU emulazione tastiera e mouse USB
* **Pasta termica in silicone standard** — applicata su questo prototipo

Stiamo testando una soluzione termica migliorata con **componenti in alluminio** e **grasso termico ad alte prestazioni**. Questi miglioramenti hanno superato i test interni, ma a causa dello stock limitato di prototipi, **non sono ancora** inclusi nelle unità di recensione.

La tua unità usa ancora **pasta in silicone**, ma le prestazioni termiche restano entro limiti sicuri.

### Funzionalità avanzate (Supportate in Mini-KVM, presto su KVM-Go)

KVM-Go segue la stessa filosofia di design di Openterface Mini-KVM. Diverse funzionalità avanzate sono in sviluppo attivo ma **non ancora disponibili** nel prototipo attuale:

* **EDID personalizzato**
  Mini-KVM consente di caricare o modificare EDID tramite la nostra applicazione QT per risolvere problemi di compatibilità.
  Porteremo questa funzione anche su KVM-Go.

* **Commutazione scheda SD basata su software**
  Mini-KVM supporta la commutazione della porta USB-A tra host e PC tramite software.
  Per KVM-Go, stiamo sviluppando una commutazione software simile per lo slot micro-SD, ma non è ancora abilitata nel tuo firmware.

Vogliamo che tu sia consapevole di queste funzionalità future anche se non sono ancora attive sulla tua unità.

### Impegno open source

Sì, KVM-Go rimarrà completamente open source. Una volta finalizzato il design hardware per la produzione di massa, richiederemo la certificazione OSHWA (Open Source Hardware Association). Tutti i file di design hardware e modelli STL saranno caricati sul nostro repository GitHub: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Approfondimenti

* [Aggiornamento firmware KVM-Go](firmware-upgrade.md) — Guida passo passo per aggiornare il dispositivo
