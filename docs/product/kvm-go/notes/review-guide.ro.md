---
title: "Openterface KVM-Go — Ghid de recenzie (Prototip de inginerie)"
description: Vă mulțumim că v-ați făcut timp să testați produsul nostru viitor . Această unitate este un prototip de inginerie, iar firmware-ul și software-ul nostru…
---

# Openterface KVM-Go — Ghid de recenzie (Prototip de inginerie)

## Prezentare generală

Vă mulțumim că v-ați făcut timp să testați produsul nostru viitor **[Openterface KVM-Go](https://openterface.com/product/kvm-go/)**.

Această unitate este un **prototip de inginerie**, iar firmware-ul și software-ul nostru evoluează rapid. Feedback-ul dvs. ne va ajuta direct să îmbunătățim produsul înainte de producția de masă.

Dacă întâmpinați probleme în timpul testării, contactați-ne direct. **Vom oferi suport imediat pentru a le rezolva înainte de a înregistra videoclipul.**

## Note importante

### Declinare de responsabilitate prototip

Acest dispozitiv este un **prototip de inginerie**. Firmware-ul și software-ul pot conține încă bug-uri sau funcții incomplete. Dacă întâmpinați instabilitate sau orice blochează fluxul de lucru, anunțați-ne. Vom remedia problemele înainte de livrarea versiunii de producție.

### Folosiți cel mai recent software

Pentru cele mai bune performanțe și compatibilitate, folosiți **ultima versiune** a [software-ului Openterface](https://openterface.com/app/overview/) de pe pagina noastră GitHub Releases. Actualizăm frecvent, iar versiunile mai vechi pot să nu corespundă firmware-ului prototipului dvs.

## Probleme cunoscute și explicații

> **Notă:** Toate problemele listate mai jos vor fi rezolvate înainte de lansarea de producție.

### Temperatura suprafeței

Dispozitivul poate părea cald sau chiar fierbinte în timpul utilizării. Acest lucru este de așteptat deoarece prototipul folosește cipuri de performanță mai mare.

Rețineți:

* Toate temperaturile rămân în intervalul de operare sigur
* **Senzori de temperatură** integrați raportează starea termică în timp real în software
* Teste de stres pe mai multe zile nu arată probleme de stabilitate

Vom continua să rafinăm performanța termică înainte de producția de masă.

### Distribuție software

În prezent suportăm mai multe platforme:

* **macOS și Windows**
  Acestea sunt platformele cele mai stabile, recomandate pentru testare completă.

* **Linux**
  Folosiți versiunea **AppImage**.
  Pachetele `.deb` și `.rpm` pot avea probleme de dependențe în funcție de distribuție. Îmbunătățim aceste instalatoare.

* **Android**
  O versiune funcțională este disponibilă pe **Google Play** pentru control de bază și monitorizare.
  O puteți încerca dacă doriți să explorați fluxuri de lucru mobile.

* **iPadOS**
  Disponibil prin **TestFlight**.
  Dacă doriți să testați, trimiteți-mi **Apple ID**-ul dvs. și vă voi adăuga pe lista de testeri.

### Funcționalitate copiere și lipire

Firmware-ul de pe unitatea dvs. poate să nu includă ultimele noastre remedieri pentru clipboard. Aceste probleme au fost deja rezolvate în cel mai recent firmware. Puteți actualiza folosind [Ghidul de actualizare firmware](firmware-upgrade.md) dacă doriți să testați ultima versiune.

### Demontare (Opțional)

Dacă vă plac demontările, puteți demonta unitatea.

Prototipul dvs. include următoarele componente:

* **MS2130S** — Cip de captură video
* **WCH CH32V208** — MCU emulare tastatură și mouse USB
* **Pastă termică din silicon standard** — aplicată pe acest prototip

Testăm în prezent o soluție termică îmbunătățită cu **componente din aluminiu** și **unsoare termică de performanță ridicată**. Aceste îmbunătățiri au trecut testele interne, dar din cauza stocului limitat de prototipuri, **nu sunt încă** incluse în unitățile de recenzie.

Unitatea dvs. folosește în continuare **pastă de silicon**, dar performanța termică rămâne în limite sigure.

### Funcții avansate (Suportate pe Mini-KVM, în curând pe KVM-Go)

KVM-Go urmează aceeași filozofie de design ca Openterface Mini-KVM. Mai multe funcții avansate sunt în dezvoltare activă dar **încă indisponibile** pe prototipul actual:

* **EDID personalizat**
  Mini-KVM permite încărcarea sau modificarea EDID prin aplicația noastră QT pentru a rezolva probleme de compatibilitate.
  Vom aduce această funcție și pe KVM-Go.

* **Comutare card SD bazată pe software**
  Mini-KVM suportă comutarea portului USB-A între host și PC prin software.
  Pentru KVM-Go, dezvoltăm o comutare software similară pentru slotul micro-SD, dar nu este încă activată în firmware-ul dvs.

Dorim să fiți conștienți de aceste funcții viitoare chiar dacă nu sunt încă active pe unitatea dvs.

### Angajament open source

Da, KVM-Go va rămâne complet open source. Odată finalizat designul hardware pentru producția de masă, vom solicita certificarea OSHWA (Open Source Hardware Association). Toate fișierele de design hardware și modelele STL vor fi încărcate în repository-ul nostru GitHub: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Lecturi suplimentare

* [Actualizare firmware KVM-Go](firmware-upgrade.md) — Ghid pas cu pas pentru actualizarea dispozitivului
