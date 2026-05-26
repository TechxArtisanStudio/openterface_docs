---
title: "KeyMod Tutorial - Problemen oplossen"
description: "Veelvoorkomende KeyMod-problemen oplossen: verbindingsproblemen, sleutels die niet registreren, mislukte Bluetooth-koppelingen, fouten bij steminvoer en meer."
keywords: "KeyMod probleemoplossing, KeyMod maakt geen verbinding, KeyMod Bluetooth-problemen, KeyMod toetsen werken niet"
---

# 12. Problemen oplossen

Veelvoorkomende problemen en oplossingen voor de KeyMod-app op Android.

## Verbindingsproblemen

### Niet verbonden

| Symptoom | Oplossing |
|---|---|
| **"Niet verbonden"**-indicator | Controleer kabelverbinding; probeer opnieuw aan te sluiten. Voor BLE schakelt u Bluetooth uit/in en koppelt u opnieuw. |
| **USB toestemming geweigerd** | Ga naar Android Instellingen → Apps → KeyMod → Toestemmingen → schakel USB in. Sluit de kabel opnieuw aan. |
| **Bluetooth koppelt niet** | Schakel Bluetooth uit/in. Vergeet het apparaat in de Bluetooth-instellingen en koppel het opnieuw. Zorg ervoor dat het KeyMod-apparaat in de koppelingsmodus staat. |
| **Verbinding valt regelmatig weg** | Controleer de RSSI-waarde onder de BLE button in de app. Onder -75 dBm duidt op een zwak signaal: ga dichterbij staan. Verwijder fysieke obstakels. |

### Indicatoren verbindingsstatus

| Indicator | Betekenis |
|---|---|
| **Verbonden** | Groen pictogram — klaar om invoer te verzenden |
| **Verbinden** | Oranje pictogram — verbinding actief |
| **Verbinding verbroken** | Grijs pictogram — geen actieve verbinding |
| **Signaalbalken** | BLE signaalsterkte of USB actieve status |

### Automatisch verbinden

Schakel **"Automatisch verbinden bij opstarten"** in het verbindingsdialoogvenster in. KeyMod onthoudt uw laatste verbindingstype (USB of BLE) en het laatst gekoppelde BLE apparaat.

### USB Detectie van bevestigen/losmaken

KeyMod controleert de USB uitzendingsgebeurtenissen van Android. Als u de USB-kabel loskoppelt, wordt de verbindingsstatus onmiddellijk bijgewerkt. Opnieuw aansluiten activeert een poging tot opnieuw verbinden als automatisch verbinden is ingeschakeld.

---

## Toetsenbordproblemen

### Sleutels registreren niet

| Symptoom | Oplossing |
|---|---|
| **Sleutels verzenden niet** | Controleer of de verbinding 'Verbonden' (groen) weergeeft. Probeer van modus te wisselen en terug. Controleer of de doelcomputer het KeyMod-apparaat als toetsenbord herkent. |
| **Macro wordt niet uitgevoerd** | Controleer of je verbonden bent. Controleer of de macrogegevens geldige tokens bevatten (geen typefouten in tokennamen). |
| **Verkeerde tekens verschijnen** | Controleer de instelling **Doelbesturingssysteem**. Een niet-overeenkomend besturingssysteem kan problemen met de sleuteltoewijzing veroorzaken. Controleer de toetsenbordindeling van de doelcomputer (QWERTY versus AZERTY). |

### Unicode-tekens werken niet

Niet-ASCII-tekens (Chinees, Japans, emoji) vereisen besturingssysteemspecifieke invoermethoden:

| Besturingssysteem | Werkwijze |
|---|---|
| **Windows** | Alt+NumPad hexadecimale Unicode-invoer |
| **Linux** | Ctrl+Shift+U gevolgd door hexadecimale code |
| **macOS** | Option+hexadecimale ingang |

Als Unicode-tekens onjuist verschijnen, controleer dan of het **Doelbesturingssysteem** correct is ingesteld.

---

## TouchPad Problemen

| Symptoom | Oplossing |
|---|---|
| **Touchpad reageert niet** | Controleer of haptische feedback is ingeschakeld in Instellingen. Probeer de TouchPad Help-overlay (?) om ondersteuning voor gebaren te verifiëren. |
| **Scrollen werkt niet** | Controleer de scrollgevoeligheid van touchpad in Instellingen → Algemeen. |

---

## Problemen met spraakinvoer

### Spraakherkenner niet beschikbaar

Installeer Google Spraakgestuurd typen vanuit de Play Store. Op Android 11+ heeft KeyMod de machtiging voor zoekopdrachten nodig (inbegrepen in APK).

### Stiltedetectie werkt niet

| Symptoom | Oplossing |
|---|---|
| **Opname gaat door als er niet wordt gesproken** | Controleer de schakelaar Automatisch pauzeren bij stilte. Verminder achtergrondgeluiden. Spreek duidelijk en dicht bij de microfoon. |
| **Opname stopt onmiddellijk** | Spreek luider of verminder de time-out voor stiltedetectie. |

### Spraaktekst wordt niet verzonden

Controleer de verbindingsstatus. De optie "Verzenden" button is uitgeschakeld als er geen verbinding is.

---

## AI-problemen

### API-sleutel werkt niet

| Symptoom | Oplossing |
|---|---|
| **"API-sleutel niet geconfigureerd"** | Controleer of de API-sleutel correct is - controleer op extra spaties of typefouten. Controleer de API-basis-URL. Deze moet het volledige pad bevatten (bijvoorbeeld `https://api.openai.com/v1`). Controleer of de modelnaam bestaat bij de provider. Zorg er voor lokale providers (Ollama) voor dat de vlag API Key Optioneel is ingesteld. |

### Tekstverfijning Langzaam

Controleer uw netwerkverbinding. Probeer een sneller model — kleinere modellen (gpt-3.5-turbo, llama3-8b) reageren sneller. Gebruik een lokale provider (Ollama) om netwerklatentie te elimineren. Controleer de AI-verzoekgeschiedenis op foutmeldingen.

---

## Meer hulp nodig?

Als u nog steeds problemen ondervindt:

- **Bugrapporten:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Gemeenschap:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentatie:** [openterface.com](https://openterface.com)