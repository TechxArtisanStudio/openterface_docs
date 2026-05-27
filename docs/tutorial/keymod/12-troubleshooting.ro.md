---
title: "KeyMod Tutorial - Depanare"
description: "Remediați KeyMod probleme obișnuite: probleme de conexiune, chei care nu se înregistrează, eșecuri de asociere Bluetooth, erori de intrare vocală și multe altele."
keywords: "KeyMod depanare, KeyMod nu se conectează, KeyMod probleme Bluetooth, KeyMod taste nu funcționează"
---

# 12. Depanare

Probleme și soluții comune pentru aplicația KeyMod pe Android.

## Probleme de conectare

### Neconectat

| Simptom | Soluție |
|---|---|
| **Indicator „Neconectat”** | Verificați conexiunea cablului; încercați să reconectați. Pentru BLE, dezactivați/porniți Bluetooth și împerecheați din nou. |
| **USB permisiunea refuzată** | Accesați Android Setări → Aplicații → KeyMod → Permisiuni → activați USB. Reconectați cablul. |
| **Bluetooth nu se va asocia** | Activați/dezactivați Bluetooth. Uitați dispozitivul în setările Bluetooth și împerecheați din nou. Asigurați-vă că dispozitivul KeyMod este în modul de asociere. |
| **Conexiunea scade frecvent** | Verificați valoarea RSSI sub BLE button în aplicație. Sub -75 dBm indică un semnal slab - vă apropiați. Îndepărtați obstacolele fizice. |

### Indicatori de stare a conexiunii

| Indicator | Înțeles |
|---|---|
| **Conectat** | Pictograma verde — gata pentru a trimite intrarea |
| **Conectare** | Pictogramă chihlimbar — conexiune în curs |
| **Deconectat** | Pictogramă gri — nicio conexiune activă |
| **Bare de semnal** | BLE puterea semnalului sau USB stare activă |

### Conectare automată

Activați **„Conectare automată la pornire”** în dialogul de conectare. KeyMod își amintește ultimul tip de conexiune (USB sau BLE) și ultimul dispozitiv asociat BLE.

### USB Detectare atașare/detașare

KeyMod monitorizează Android USB atașează/detașează evenimentele de difuzare. Dacă deconectați cablul USB, starea conexiunii se actualizează imediat. Reconectarea declanșează o încercare de reconectare dacă conectarea automată este activată.

---

## Probleme cu tastatura

### Cheile nu se înregistrează

| Simptom | Soluție |
|---|---|
| **Cheile nu se trimit** | Verificați că conexiunea arată „Conectat” (verde). Încercați să comutați între moduri și înapoi. Verificați dacă computerul țintă recunoaște dispozitivul KeyMod ca tastatură. |
| **Macro nu se execută** | Verificați că sunteți conectat. Verificați dacă datele macro conțin simboluri valide (fără greșeli de scriere în numele simbolurilor). |
| **Apar caractere greșite** | Verificați setarea **Target OS** - sistemul de operare nepotrivit poate cauza probleme de mapare a cheilor. Verificați aspectul tastaturii computerului țintă (QWERTY vs AZERTY). |

### Caracterele Unicode nu funcționează

Caracterele non-ASCII (chineză, japoneză, emoji) necesită metode de introducere specifice sistemului de operare:

| OS | Metoda |
|---|---|
| **Windows** | Alt+NumPad intrare Unicode hexazecimală |
| **Linux** | Ctrl+Shift+U urmat de codul hexadecimal |
| **macOS** | Option+intrare hexagonală |

Dacă caracterele Unicode apar incorect, verificați că **OS țintă** este setat corect.

---

## TouchPad Probleme

| Simptom | Soluție |
|---|---|
| **Touchpad nu răspunde** | Verificați dacă Feedbackul haptic este activat în Setări. Încercați suprapunerea de ajutor TouchPad (?) pentru a verifica suportul pentru gesturi. |
| **Defilarea nu funcționează** | Verificați touchpad sensibilitatea derulării în Setări → General. |

---

## Probleme de intrare vocală

### Recunoașterea vorbirii indisponibilă

Instalați Google Voice Typing din Play Store. Pe Android 11+, KeyMod are nevoie de permisiunea de interogări (inclusă în APK).

### Detectarea tăcerii nu funcționează

| Simptom | Soluție |
|---|---|
| **Înregistrarea continuă când nu se vorbește** | Verificați comutatorul Auto-Pause on Silence. Reduceți zgomotul de fundal. Vorbiți clar și aproape de microfon. |
| **Înregistrarea se oprește imediat** | Vorbiți mai tare sau reduceți timpul de expirare pentru detectarea tăcerii. |

### Textul vocal nu se trimite

Verificați starea conexiunii. „Trimite” button este dezactivat atunci când nu este conectat.

---

## Probleme cu IA

### Cheia API nu funcționează

| Simptom | Soluție |
|---|---|
| **„Cheia API nu este configurată”** | Verificați cheia API este corectă - verificați dacă există spații suplimentare sau greșeli de scriere. Verificați adresa URL de bază a API - trebuie să includă calea completă (de exemplu, `https://api.openai.com/v1`). Verificați că numele modelului există la furnizor. Pentru furnizorii locali (Ollama), asigurați-vă că este setat indicatorul API Key Optional. |

### Rafinarea textului Lentă

Verificați conexiunea la rețea. Încercați un model mai rapid — modelele mai mici (gpt-3.5-turbo, llama3-8b) răspund mai repede. Utilizați un furnizor local (Ollama) pentru a elimina latența rețelei. Verificați istoricul solicitărilor AI pentru mesaje de eroare.

---

## Ai nevoie de mai mult ajutor?

Dacă încă mai întâmpinați probleme:

- **Rapoarte erori:** [Discord](https://discord.gg/techxartisan)
- **Comunitate:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentație:** [openterface.com](https://openterface.com)