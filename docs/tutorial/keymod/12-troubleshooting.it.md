---
title: "KeyMod Tutorial - Risoluzione dei problemi"
description: "Risolvi i problemi più comuni di KeyMod: problemi di connessione, chiavi non registrate, errori di accoppiamento Bluetooth, errori di input vocale e altro ancora."
keywords: "KeyMod risoluzione dei problemi, KeyMod mancata connessione, KeyMod problemi Bluetooth, KeyMod tasti non funzionanti"
---

# 12. Risoluzione dei problemi

Problemi comuni e soluzioni per l'app KeyMod su Android.

## Problemi di connessione

### Non connesso

| Sintomo | Soluzione |
|---|---|
| **Indicatore "Non connesso"** | Controllare il collegamento del cavo; prova a ricollegare. Per BLE, attiva/disattiva il Bluetooth e riassocialo. |
| **USB permesso negato** | Vai a Android Impostazioni → App → KeyMod → Autorizzazioni → attiva USB. Ricollegare il cavo. |
| **Il Bluetooth non si accoppia** | Attiva/disattiva il Bluetooth. Dimenticare il dispositivo nelle impostazioni Bluetooth e associarlo nuovamente. Assicurati che il dispositivo KeyMod sia in modalità di abbinamento. |
| **La connessione si interrompe frequentemente** | Controllare il valore RSSI sotto BLE button nell'app. Al di sotto di -75 dBm indica un segnale debole: avvicinarsi. Rimuovere gli ostacoli fisici. |

### Indicatori dello stato della connessione

| Indicatore | Significato |
|---|---|
| **Connesso** | Icona verde: pronto per inviare input |
| **Connessione** | Icona ambra: connessione in corso |
| **Disconnesso** | Icona grigia: nessuna connessione attiva |
| **Barre del segnale** | BLE intensità del segnale o USB stato attivo |

### Connessione automatica

Abilita **"Connessione automatica all'avvio"** nella finestra di dialogo di connessione. KeyMod ricorda l'ultimo tipo di connessione (USB o BLE) e l'ultimo dispositivo BLE abbinato.

### USB Rilevamento collegamento/scollegamento

KeyMod monitora gli eventi di trasmissione di collegamento/scollegamento USB di Android. Se si scollega il cavo USB, lo stato della connessione si aggiorna immediatamente. Il ricollegamento attiva un tentativo di riconnessione se la connessione automatica è abilitata.

---

## Problemi con la tastiera

### Chiavi non registrate

| Sintomo | Soluzione |
|---|---|
| **Chiavi non inviate** | Verificare che la connessione mostri "Connesso" (verde). Prova a cambiare modalità e viceversa. Verificare che il computer di destinazione riconosca il dispositivo KeyMod come tastiera. |
| **La macro non viene eseguita** | Verifica di essere connesso. Verificare che i dati macro contengano token validi (nessun errore di battitura nei nomi dei token). |
| **Visualizzazione di caratteri errati** | Controlla l'impostazione **Sistema operativo di destinazione**: un sistema operativo non corrispondente può causare problemi di mappatura dei tasti. Verificare il layout della tastiera del computer di destinazione (QWERTY vs AZERTY). |

### I caratteri Unicode non funzionano

I caratteri non ASCII (cinese, giapponese, emoji) richiedono metodi di input specifici del sistema operativo:

| Sistema operativo | Metodo |
|---|---|
| **Windows** | Alt+NumPad ingresso Unicode esadecimale |
| **Linux** | Ctrl+Shift+U seguito dal codice esadecimale |
| **macOS** | Option+input esadecimale |

Se i caratteri Unicode vengono visualizzati in modo errato, verificare che il **sistema operativo di destinazione** sia impostato correttamente.

---

## TouchPad Problemi

| Sintomo | Soluzione |
|---|---|
| **Touchpad non risponde** | Verifica che il feedback tattile sia abilitato nelle Impostazioni. Provare l'overlay Aiuto TouchPad (?) per verificare il supporto dei gesti. |
| **Scorrimento non funzionante** | Controlla la sensibilità di scorrimento touchpad in Impostazioni → Generale. |

---

## Problemi di input vocale

### Riconoscitore vocale non disponibile

Installa Google Digitazione vocale dal Play Store. Su Android 11+, KeyMod necessita dell'autorizzazione per le query (inclusa in APK).

### Il rilevamento del silenzio non funziona

| Sintomo | Soluzione |
|---|---|
| **La registrazione continua quando non si parla** | Seleziona l'interruttore Pausa automatica al silenzio. Riduci il rumore di fondo. Parla chiaramente e vicino al microfono. |
| **La registrazione si interrompe immediatamente** | Parla a voce più alta o riduci il timeout di rilevamento del silenzio. |

### Il testo vocale non viene inviato

Controlla lo stato della connessione. L'"Invia" button è disabilitato quando non è connesso.

---

## Problemi di intelligenza artificiale

### Chiave API non funzionante

| Sintomo | Soluzione |
|---|---|
| **"Chiave API non configurata"** | Verifica che la chiave API sia corretta: controlla la presenza di spazi aggiuntivi o errori di battitura. Controlla l'URL di base dell'API: deve includere il percorso completo (ad esempio, `https://api.openai.com/v1`). Verificare che il nome del modello esista nel provider. Per i provider locali (Ollama), assicurarsi che il flag API Key Opzionale sia impostato. |

### Perfezionamento del testo lento

Controlla la tua connessione di rete. Prova un modello più veloce: i modelli più piccoli (gpt-3.5-turbo, llama3-8b) rispondono più velocemente. Utilizza un provider locale (Ollama) per eliminare la latenza di rete. Controlla la cronologia delle richieste AI per i messaggi di errore.

---

## Hai bisogno di ulteriore aiuto?

Se i problemi persistono:

- **Segnalazioni di bug:** [Discord](https://discord.gg/techxartisan)
- **Comunità:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentazione:** [openterface.com](https://openterface.com)