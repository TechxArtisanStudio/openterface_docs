---
title: "Întrebări frecvente | Modul de extensie v2"
description: "Întrebări frecvente despre Openterface uConsole KVM Modul de extensie v2: plăci Ethernet, Kit de upgrade, card SD, configurare software, compatibilitate și depanare."
keywords: "KVM extension v2 FAQ, uConsole KVM, Ethernet, card SD, depanare, Kit de upgrade"
---

# Întrebări frecvente | Modul de extensie v2

Bine ați venit la pagina de întrebări frecvente pentru **Openterface uConsole KVM Modul de extensie v2**.

Dacă nu găsiți ceea ce aveți nevoie, trimiteți un email la [support@openterface.com](mailto:support@openterface.com) sau alăturați-vă comunității noastre pe [Discord](/discord).

---

## :material-clipboard-list: Navigare rapidă

- [Produs și achiziție](#produs-i-achiziie)
- [Instalare și hardware](#instalare-i-hardware)
- [Compatibilitate](#compatibilitate)
- [Control și funcții](#control-i-funcii)
- [Video și audio](#video-i-audio)
- [Depanare](#depanare)
- [Mai multe](#mai-multe)

---

## Produs și achiziție

**:material-chat-question:{ .faq } Modulul de extensie v2 este un singur produs sau două versiuni de rețea?**

Este **un singur produs**. Atât placa Ethernet 100M, cât și cea 1000M sunt incluse în cutie. Consultați [Opțiuni de achiziție](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Ce placă Ethernet ar trebui să folosesc?**

Folosiți placa **100M** pe toate plăcile de bază uConsole. Folosiți placa **1000M** doar dacă aveți **HackerGadgets uConsole Upgrade Kit** și aveți nevoie de rețea gigabit. Consultați [Ghid Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Am nevoie de HackerGadgets uConsole Upgrade Kit?**

Doar pentru **Ethernet gigabit**. Placa 100M funcționează fără Upgrade Kit. Dacă nu aveți kit-ul, alegeți opțiunea bundle la checkout sau achiziționați kit-ul separat.

**:material-chat-question:{ .faq } Este inclus uConsole?**

Nu. Dispozitivul ClockworkPi uConsole se vinde separat.

---

## Instalare și hardware

**:material-chat-question:{ .faq } Cum funcționează Modulul de extensie v2?**

Capturează HDMI de la un dispozitiv țintă și îl afișează pe uConsole. Tastatura și trackball-ul uConsole controlează ținta prin emulare USB HID. Funcțiile opționale Ethernet și card SD extind fluxurile de lucru pentru depanare în rețea și imagistică.

**:material-chat-question:{ .faq } Pot folosi acest modul cu modulul 4G/LTE instalat?**

Nu. Modulul de extensie v2 folosește slotul de expansiune uConsole și **nu poate** fi utilizat în același timp cu modulul 4G sau LTE.

**:material-chat-question:{ .faq } Ce unelte sunt necesare pentru instalare?**

O șurubelniță hexagonală pentru șuruburile de montare. Se recomandă precauții ESD.

**:material-chat-question:{ .faq } Este instalarea reversibilă?**

Da. Scoateți Modulul de extensie v2 și reinstalați modulul 4G/LTE original dacă este necesar.

---

## Compatibilitate

**:material-chat-question:{ .faq } Ce modele uConsole sunt compatibile?**

Compatibil cu dispozitivele uConsole care au slotul de expansiune standard. Verificați specificațiile dispozitivului pentru a confirma.

**:material-chat-question:{ .faq } Ce dispozitive țintă pot controla?**

Orice dispozitiv cu ieșire HDMI: desktop-uri, servere, SBC-uri (Raspberry Pi, etc.), sisteme embedded, PC-uri industriale și multe altele.

**:material-chat-question:{ .faq } Are ținta nevoie de software special?**

Nu. KVM folosește emulare USB HID — nu sunt necesare drivere pe țintă pentru tastatură și mouse. Aflați mai multe despre [tehnologia KVM bazată pe USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Pot controla mai multe ținte simultan?**

O singură țintă la un moment dat pentru KVM. Comutați între ținte mutând cablurile HDMI și USB.

---

## Control și funcții

**:material-chat-question:{ .faq } Pot transfera fișiere prin cardul SD?**

Da. Modulul de extensie v2 suportă citirea/scrierea cardului SD cu comutare host/țintă prin aplicația Openterface. Consultați [Ghid card SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Suportă acces la nivel BIOS?**

Da. USB HID direct permite acces complet BIOS/UEFI fără dependențe de rețea.

**:material-chat-question:{ .faq } Ce se întâmplă cu modulul legacy v1?**

Modulul de primă generație de 37 × 77 mm (fără Ethernet/SD) este documentat la [Documentație legacy v1](/products/kvmext/v1/).

---

## Video și audio

**:material-chat-question:{ .faq } Ce rezoluții video sunt suportate?**

- **Intrare**: Până la 4K @ 30 Hz (RGB/YCBCR444) sau 4K @ 60 Hz (YCBCR420) prin HDMI
- **Ieșire**: 1080p @ 60 Hz pe ecranul uConsole

**:material-chat-question:{ .faq } Care este latența video?**

Sub **70 ms** — potrivită pentru acces BIOS, întreținere și diagnosticare.

**:material-chat-question:{ .faq } Este suportat audio?**

Da. Audio-ul încorporat HDMI este transmis către difuzoarele uConsole.

---

## Depanare

**:material-chat-question:{ .faq } Niciun semnal video**

- Verificați conexiunile HDMI la ambele capete
- Verificați că ținta este alimentată și emite prin HDMI
- Încercați un alt cablu HDMI
- Reporniți Openterface QT

**:material-chat-question:{ .faq } Tastatura sau mouse-ul nu funcționează**

- Confirmați cablul USB de la modulul de extensie la țintă
- Opriți complet uConsole, așteptați 10 secunde, porniți, încercați din nou
- Reinstalați Openterface QT (build arm64 pentru uConsole-ul dumneavoastră)
- Raportați distribuția Linux și modulul CM4 pe [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) sau [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Software-ul a fost greu de instalat**

Încercați GitHub Releases (Opțiunea 1) sau repo-ul comunitar ClockworkPi (Opțiunea 3) în [Configurare software](/products/kvmext/software-setup/). Alăturați-vă pe [Discord](https://openterface.com/discord) pentru ajutor pas cu pas.

**:material-chat-question:{ .faq } Portul de comutare USB nu funcționează**

Asigurați-vă că folosiți o versiune recentă de Openterface QT. Comutați accesul USB în aplicația host. Dacă problema persistă, deschideți un issue pe [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI se afișează doar într-o casetă / fără meniu de setări al aplicației**

Actualizați la cea mai recentă versiune Openterface QT. Verificați [Configurare software](/products/kvmext/software-setup/) și firele de discuții comunitare de pe Discord pentru setările de afișaj specifice uConsole.

**:material-chat-question:{ .faq } Aplicația nu detectează modulul**

- Reașezați placa în slotul de expansiune
- Reporniți uConsole
- Reinstalați Openterface QT

---

## Mai multe

**:material-chat-question:{ .faq } Este software-ul open source?**

Da. Aplicațiile host Openterface sunt open source pe [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } De unde pot obține suport?**

- **Email**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Alăturați-vă comunității noastre](https://openterface.com/discord)
- **GitHub**: [Raportați probleme](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
