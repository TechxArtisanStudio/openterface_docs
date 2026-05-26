---
title: "KeyMod Tutorial - Tastatură și Mouse"
description: "Aflați cum să utilizați tastatura KeyMod și touchpad pentru a tasta, a trimite comenzi rapide și a controla mouse-ul computerului țintă de pe telefon."
keywords: "KeyMod tastatură, KeyMod mouse, touchpad, taste modificatoare, comenzi rapide de la tastatură"
---

# 2. Tastatură și mouse

Modul Keyboard & Mouse este cel mai frecvent utilizat. Acesta oferă o tastatură virtuală și touchpad pentru controlul computerului țintă de pe telefon.

## Două niveluri: Basic și Pro

KeyMod oferă două experiențe de tastatură:

| Nivelul | Nume mod | Cel mai bun pentru |
|---|---|---|
| **De bază** | Tastatură și mouse | Tastare rapidă cu o tastatură pe ecran complet, fără distragere a atenției antetului |
| **Pro** | Keyboard & Mouse Pro | Aspect compozit complet cu benzi Hub de comenzi rapide, tastatură divizată și IME |

### Tastatură și mouse (de bază)

Nivelul **De bază** vă oferă o **tastatură dedicată pe ecran complet** fără antetul superior al aplicației. Toate comenzile se află pe rândul superior al tastaturii:

- Meniu, comutare de mod (Touchpad / Compune și trimite / Tastatură numerică)
- Selector OS țintă
- Starea conexiunii

**Funcții unice pentru Basic:**

- **Apăsare lungă repetare**: țineți apăsat orice caracter sau tastă funcțională pentru repetare automată (întârziere de ~400 ms, repetare de ~50 ms)
- **Previzualizarea tastei**: un balon plutitor arată eticheta efectivă deasupra tastei atunci când este apăsată
- **Feedback haptic** și suprafețe cheie **conștiente de temă**
- **Tad numeric portret și peisaj**: grilă 5x8 (portret) sau grilă 8x5 (peisaj)
- **IME modul de scriere**: tastați text lung, trimiteți ca apăsări de taste ASCII curate numai HID

> Basic **nu** include rândurile de bandă de Shortcut Hub. Pentru profilele de bandă, comutați la **Keyboard & Mouse Pro**.

### Keyboard & Mouse Pro

**Pro** este o experiență compozită completă: rânduri de bandă de comandă rapidă Hub, aranjamente de tastatură împărțită și fluxul de lucru complet IME. La asta se așteaptă utilizatorii puternici.

## Aspectul

**Modul portret:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-gestures.webp" alt="Portrait touchpad gesture help and keyboard" width="300" />
  <p><em>Portret — touchpad gesturi + aspectul tastaturii. Glisați în sus/jos pe touchpad pentru a derula, trageți pentru a muta cursorul.</em></p>
</div>

**Peisaj — tastatură împărțită + touchpad:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-split-keyboard-touchpad.webp" alt="Landscape split keyboard and central touchpad" width="420" />
  <p><em>Peisaj — împărțiți jumătățile de tastatură cu touchpad în partea stângă pentru o tastare confortabilă cu două degete mari.</em></p>
</div>

**Peisaj — rând macro + profiluri:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-macro-strip.webp" alt="Landscape macro strip and profile selector" width="420" />
  <p><em>Peisaj — bandă macro de deasupra tastaturii și selectorului de profil (de exemplu, Implicit, KiCAD).</em></p>
</div>

## Moduri de afișare (Android)

Atingeți **mânerul de comutare** (divizor în formă de pastilă între tastatură și touchpad) pentru a parcurge modurile de afișare:

| Modul | Ce vezi |
|---|---|
| **Ambele** (implicit) | Tastatură + touchpad împreună |
| **Numai tastatură** | Tastatură cu lățime completă, touchpad ascunsă |
| **Touchpad numai** (portret) | Touchpad preia ecranul complet |
| **Split** (peisaj) | Două jumătate de tastatură cu touchpad în stânga |

## Cum se utilizează tastatura

| Acțiune | Cum |
|---|---|
| Tastați o literă | Atingeți-l |
| Literă mare | Atingeți mai întâi **Shift**, apoi litera |
| Introduceți un număr sau un simbol | Atingeți **?123** pentru a comuta la aspectul număr/simbol |
| Tastați Ctrl+C (copie) | Atingeți **Ctrl** (se evidențiază), apoi atingeți **C** |
| Tastați Win+R (dialog Rulare) | Atingeți **Win**, apoi atingeți **R** |
| Acces F1-F12 | Atingeți **Fn**, apoi rândul de litere devine taste funcționale |
| Multimodificator (Ctrl+Shift+C) | Atingeți **Ctrl**, apoi **Shift** (ambele menținute), apoi **C** |

### Comportament modificator

**Apăsați și atingeți:** atingeți un modificator pentru a-l menține apăsat (se evidențiază), apoi atingeți orice tastă. Modificatorul se eliberează automat după o apăsare de tastă. Pentru combinații cu mai multe modificatoare, atingeți fiecare modificator în secvență înainte de a atinge tasta finală.

### Apăsați lung Alternative

Multe taste cu litere au **simboluri ascunse** pe care le puteți accesa apăsând lung:```
Long-press "d" → shows: $  €  ¥  £
Long-press "k" → shows: (  {  [  <
Long-press "/" → shows: \  |
Long-press "m" → shows: +  _
Apăsați lung până când apare o fereastră pop-up, apoi glisați degetul spre simbolul dorit și eliberați.

### Fn Strat cheie

Atingeți tasta **Fn** din rândul modificator. Tastele cu litere devin temporar de la **F1 la F12**:

- Q = F1, W = F2, E = F3, R = F4, T = F5, Y = F6
- U = F7, I = F8, O = F9, P = F10
- A = F11, S = F12

## Butoane cu acțiune rapidă

Butoanele comune de comenzi rapide sunt disponibile pentru acces rapid. Aplicația folosește setarea **Target OS** pentru a determina modificatorul corect:

| Acțiune | macOS | Windows/Linux |
|---|---|---|
| Copiere | Cmd+C | Ctrl+C |
| Paste | Cmd+V | Ctrl+V |
| Tăiați | Cmd+X ​​| Ctrl+X |
| Anulează | Cmd+Z | Ctrl+Z |
| Selectați Toate | Cmd+A | Ctrl+A |
| Reface | Cmd+Y | Ctrl+Y |
| Găsiți | Cmd+F | Ctrl+F |
| Salvați | Cmd+S | Ctrl+S |
| Filă nouă | Cmd+T | Ctrl+T |
| Închide fila | Cmd+W | Ctrl+W |
| Fila Următoare | Cmd+Tab | Ctrl+Tab |
| Ecran de blocare | Cmd+L | Win+L |
| Arată desktop | Cmd+D | Win+D |
| Alt+F4 | — | Alt+F4 |
| Ctrl+Alt+Del | — | Ctrl+Alt+Del |

## TouchPad

### Gesturi

| Gestul | Acțiune |
|---|---|
| Atingeți | Faceți clic stânga |
| Atingeți cu două degete | Faceți clic dreapta |
| Trageți | Mutați cursorul |
| Glisare cu două degete în sus/jos | Defilare (defilare naturală) |
| Apăsare lungă | Modul de glisare (blochează cursorul pentru glisare) |
| Atingeți de două ori | Faceți dublu clic |

### TouchPad Suplimente

- **Ofertă pop-out touchpad** — Atingeți pictograma de informații touchpad (?) pentru a deschide un touchpad plutitor care rămâne deasupra altor moduri
- **TouchPad Ajutor suprapunere** (Android) — Atingeți pictograma **?** pentru a vedea un ghid de referință pentru gesturi pe ecran complet
- **Feedback haptic** — Veți simți o vibrație la clicuri și comutarile de tragere

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-numpad.webp" alt="Portrait touchpad and keypad grid" width="300" />
  <p><em>Portret — touchpad cu grila de tastatură în dreapta pentru introducerea rapidă a numărului/simbolului.</em></p>
</div>

## Introducere text (IME Modul Compunere — Android)

În modul Portret Tastatură și Mouse, puteți comuta la **IME modul de captură** — un editor de text sub tastatură în care compuneți text mai lung înainte de a-l trimite ca HID apăsări de taste către computerul țintă.

- Atingeți pictograma **tastatură/IME comutare** din rândul modificatorului pentru a comuta între trimiterea directă a tastei și modul de scriere a textului
- În modul de scriere, aveți un editor de text cu o bară de instrumente pentru copiere, inserare, ștergere, anulare și trimitere
- **Restrânge/extinde** zona de scriere cu pictograma săgeată

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-long-text-compose.webp" alt="Portrait long text compose and Send" width="300" />
  <p><em>IME modul de scriere — tastați sau inserați text lung, apoi atingeți Trimitere pentru a-l livra ca HID apăsări de taste către țintă.</em></p>
</div>

## Sistemul de operare țintă

Setați sistemul de operare țintă pentru a se potrivi cu convențiile cheie ale computerului țintă. Acest lucru afectează etichetele comenzilor rapide, metodele de introducere Unicode și maparea tastelor modificatoare. Schimbați-l atingând **pictograma OS** din bara de antet.

## Bandă de comandă rapidă (Android, Peisaj)

În modul de împărțire peisaj, o **bandă de comandă rapidă derulabilă** apare deasupra celor două jumătăți de tastatură, oferind acces rapid la comenzile rapide comune (Copy, Paste, Cut, Save, Undo, Select All).

## Următorii pași

- **[Target-Specific Keyboard →](03-target-keyboard.md)** — Aspecte de tastatură și mapare a sistemului de operare țintă
- **[Troubleshooting →](12-troubleshooting.md)** — Probleme și soluții comune