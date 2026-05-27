---
title: "KeyMod Tutorial"
description: "Ghid complet pentru utilizarea aplicației KeyMod. Aflați cum să vă conectați, să vă controlați computerul de pe telefon și să utilizați tastatura, mouse-ul, gamepad-ul, macrocomenzi și modurile de intrare vocală."
keywords: "Tutorial KeyMod, cum se utilizează KeyMod, ghid pentru tastatura telefonului, tutorial pentru aplicație KeyMod"
---

# KeyMod Tutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

Acest tutorial acoperă versiunea **Android** a aplicației KeyMod. Versiunea iOS este în curs de dezvoltare.

## Ce este KeyMod?

KeyMod transformă telefonul sau tableta într-un **dispozitiv de intrare universal** pentru orice computer. Se conectează la hardware-ul **Openterface KeyMod** (un KVM — comutator de tastatură, video, mouse), care trimite apoi apăsările telefonului, mișcările mouse-ului și intrările gamepad-ului către un computer țintă ca și cum ar proveni de la o tastatură și un mouse reale USB.

### Cum funcționează conexiunea```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
Aplicația comunică cu hardware-ul KeyMod utilizând protocolul **CH9329** printr-o conexiune serială (USB-C la 115200 baud, 8N1 sau Bluetooth BLE). Dispozitivul KeyMod apare computerului țintă ca o tastatură și un mouse standard USB — nu sunt necesare drivere.

### Pentru cine este asta?

| Esti... | KeyMod vă ajută... |
|---|---|
| **Administrator de sistem** | Gestionați serverele de pe telefon fără a avea o tastatură și un monitor de rezervă |
| **Prezentator / Speaker** | Controlați diapozitivele de oriunde în cameră, nu este nevoie de clicker |
| **Gamer** | Folosește-ți telefonul ca gamepad pentru jocuri retro sau ca controler suplimentar |
| **Creator de conținut** | Declanșați comenzile rapide, macrocomenzi și intrarea vocală în timp ce înregistrați pe un alt aparat |
| **Utilizator cu putere** | Trimiteți scurtături complexe de la tastatură, fragmente de text sau secvențe de automatizare de pe telefonul dvs. |
| **Oricine** | Tastați pe computer de pe canapea, din pat sau dincolo de cameră |

## Secțiuni de tutorial

| Ghid | Descriere |
|---|---|
| [1. Getting Started](01-getting-started.md) | Instalați, conectați-vă și alegeți primul mod (5 minute) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Tastare, modificatori, touchpad și introducerea textului |
| [3. Target OS](03-target-keyboard.md) | Maparea sistemului de operare țintă |
| [4. Shortcut Hub](04-shortcuts.md) | Comenzi rapide de la tastatură bazate pe profil pentru aplicații populare |
| [5. Macros](05-macros.md) | Secvențe de taste automate cu întârzieri |
| [6. Voice Input](06-voice-input.md) | Vorbire la tastatură cu Whisper AI |
| [7. AI Integration](07-ai.md) | Rafinarea textului și asistent de comandă |
| [8. Gamepad](08-gamepad.md) | Controler de joc virtual cu aspecte personalizabile |
| [9. Numpad](09-numpad.md) | Tastatură numerică pentru introducerea datelor |
| [10. Presentation](10-presentation.md) | Glisați telecomandă și temporizator |
| [11. Settings](11-settings.md) | Configurarea aplicației și preferințe |
| [12. Troubleshooting](12-troubleshooting.md) | Probleme și soluții comune |

## Obține ajutor

- **Rapoarte erori:** [Discord](https://discord.gg/techxartisan)
- **Comunitate:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Cod sursă:** KeyCmd *(coming soon)*