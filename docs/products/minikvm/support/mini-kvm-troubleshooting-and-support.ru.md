---
title: "Probleme с dem Mini-KVM? Hier starten - Openterface Поддержка"
description: "Probleme с dem Mini-KVM? Hier starten - Openterface Поддержка: Поддержка- и Fehlerbehebungsanleitung Wir verstehen, wie frustrierend es sein kann, wenn ein… —…"
keywords: "Openterface Mini-KVM, Mini-KVM Поддержка, Mini-KVM Fehlerbehebung, Tastatur Maus Probleme, Mini-KVM Ersatz, Mini-KVM Rückerstattung, Openterface Поддержка"
---

# Probleme с dem Mini-KVM? Hier starten
*Поддержка- и Fehlerbehebungsanleitung*

## Wir sind для Sie da

Wir verstehen, wie frustrierend es sein kann, wenn ein Gerät не wie erwartet funktioniert — besonders wenn Sie es unbedingt nutzen möchten.

Diese Seite erklärt **was Sie als Nächstes tun sollten**, **wie wir helfen** и **was Sie erwarten können**, wenn Ihr Mini-KVM Tastatur- или Maussteuerungsprobleme hat.

Unser Ziel ist es, **klar, ruhig и fair** zu sein и sicherzustellen, dass jeder betroffene Benutzer ordnungsgemäß betreut wird.

## Warum das passieren kann

**Eine kleine Anzahl von Mini-KVM-Einheiten aus einer bestimmten früheren Продуктionscharge** kann unter bestimmten Bedingungen interсtierende Tastatur- или Mausinstabilität zeigen.  
Die meisten Einheiten, einschließlich früherer и späterer Chargen, funktionieren normal.

Wichtige Punkte:

- Es betrifft **nur eine Teilmenge der Geräte**, не alle Mini-KVMs
- Es **stellt keine Sicherheitsrisiken dar** и **verschlechtert sich не с der Zeit**

Wir haben die Ursache identifiziert, die QA для spätere Chargen verbessert и **Selbstdiagnosetools** hinzugefügt, um betroffene Geräte schnell zu identifizieren.

Für mehr Hintergrи и technischen Kontext siehe:

- [Tastatur и Maus können den Zielcomputer не steuern](/products/minikvm/support/keyboard-mouse-control/)
- [Tastatur- и Mausproblem – Technische Analyse](/products/minikvm/updates/260128-keyboard-mouse-issue-analysis/)

Wenn Ihre Einheit betroffen ist, verpflichten wir uns, sie verantwortungsvoll zu lösen.

## Überblick — Wie dies gehandhabt wird

```mermaid
flowchart TD
    U[Benutzer hat Tastatur- или Mausproblem] --> A[App zuerst aktualisieren]
    A --> D[Selbstdiagnosetool ausführen - erforderlich]

    D --> P[Informationen vorbereiten<br/>Diagnoseprotokoll<br/>Setup-Fotos<br/>Problembeschreibung]

    P --> E[App-generierte E-Mail-Vorlage verwenden<br/>um Поддержка zu kontaktieren]

    E --> S[Openterface Поддержка prüft Fall]

    S --> R{Оборудованиеdefekt bestätigt}

    R -- Nein --> F[Fehlerbehebung с Поддержка<br/>Программное обеспечение, Kabel, Setup]
    R -- Ja --> C[Benutzer wählt Lösung]

    C --> Ersatz --> REP[Ersatz von Openterface versendet]
    C --> Rückerstattung --> REF[Rückerstattung vom Händler bearbeitet]

    REP --> END[Fall geschlossen]
    REF --> END
## Schritt 1 — Selbstdiagnose ausführen (**Erforderlich**)

Die Ausführung des Selbstdiagnosetools ist **kritisch**.
Es ermöglicht uns, den Gerätezustand zu verstehen и Vermutungen или unnötige Verzögerungen zu vermeiden.

Bitte führen Sie das Diagnosetool **vor der Kontaktaufnahme с dem Поддержка** aus:

**App zuerst aktualisieren:** Stellen Sie sicher, dass Sie die neueste Version der [Openterface-App](/app) installiert haben, bevor Sie die Diagnose ausführen. Überprüfen Sie das App-Menü auf Обновления.

* **macOS**
  [https://openterface.com/products/minikvm/support/diagnostic-self-check/](https://openterface.com/products/minikvm/support/diagnostic-self-check/)

* **Windows / Linux**
  [https://openterface.com/products/minikvm/support/diagnostic-self-check-windows/](https://openterface.com/products/minikvm/support/diagnostic-self-check-windows/)

### Bitte vorbereiten:

* Die von der App generierte **Diagnoseprotokolldatei**
* **Fotos Ihres Setups** (USB-Подключениеen zu Host и Ziel)
* Eine kurze Beschreibung des beobachteten Verhaltens

Diese Angaben sind erforderlich, daс wir fortfahren können.

## Schritt 2 — Openterface Поддержка kontaktieren (Empfohlen о die App)

Nach Abschluss der Diagnose **erstellt die Openterface-App automatisch eine Поддержка-E-Mail-Vorlage** с den erforderlichen Informationen.

Wir **empfehlen dringend**, diese generierte E-Mail zu verwenden, da sie sicherstellt, dass wir alles erhalten, was wir brauchen, um Ihnen effizient zu helfen.

Bitte оprüfen Sie die E-Mail и senden Sie sie an:

📧 **[support@openterface.com](mailto:support@openterface.com)**

Stellen Sie sicher, dass die E-Mail Folgendes enthält:

* Ihre **Bestellnummer** (Crowd Supply, Mouser или anderer Händler)
* Diagnoseprotokoll
* Setup-Fotos
* Eine kurze Symptombeschreibung

### Erwartete Antwortzeit

* **Erstantwort:** innerhalb von **48 Geschäftsstиen** (Montag–Freitag)
* Einige Fälle können erfordern:

  * weitere Вопросы
  * zusätzliche Diagnoseschritte
  * Klärung der Setup-Details

Wir prüfen jeden Fall sorgfältig и verlassen uns не auf automatisierte Entscheidungen.

## Schritt 3 — Diagnoseergebnis

### Wenn kein Оборудованиеproblem gefиen wird

Wir werden die Fehlerbehebung с Ihnen fortsetzen — einschließlich Программное обеспечениеkonfiguration, Verkabelung и Umgebungsprüfungen.

### Wenn ein Оборудованиеdefekt bestätigt wird

Sie erhalten **eine klare Wahl** zwischen Ersatz или Rückerstattung.

## Ersatz vs Rückerstattung — Wichtiger Entscheidungspunkt

### Option A — Ersatz (Bearbeitet von Openterface)

* Wir versenden ein **Ersatz-Mini-KVM** direkt an Sie
* Keine Notwendigkeit, die defekte Einheit zurückzusenden
* Dies ist meist der **schnellste Weg**, ein funktionierendes Gerät zu erhalten

**Wichtig:**
Sobald ein Ersatz versendet wurde, ist die **Rückerstattungsberechtigung gesperrt**.
Dies verhindert doppelte Entschädigung и hält den Prozess для alle fair.

### Option B — Rückerstattung (Bearbeitet vom Händler)

* Rückerstattungen müssen **von der Plattform, bei der Sie gekauft haben**, bearbeitet werden
  (z.B. Crowd Supply, Mouser)
* Wir stellen bei Bedarf eine technische Bestätigung bereit
* Die Bearbeitungszeit hängt von der Händlerrichtlinie и dem SLA ab

Wenn Sie eine Rückerstattung bevorzugen, **fordern Sie bitte не zuerst einen Ersatz an**.

## Zusätzlicher Поддержка (bei Bedarf)

In komplexeren Fällen kann unser technisches Team nach Prüfung der Protokolle и Setup-Details **einen Live-Videoanruf** (z.B. Google Meet) arrangieren, um Sie Schritt для Schritt anzuleiten.

Bitte beachten Sie:

* Videoanrufe werden **nur bei Bedarf** arrangiert
* Wir prüfen in der Regel zuerst Diagnoseinformationen и E-Mail-Austausch

Diese Option existiert, um Sie zu versichern, dass bei Bedarf tiefergehender Поддержка verfügbar ist.

## Wie Rückerstattungen и Ersatz koordiniert werden

* Openterface bearbeitet **technische Diagnose и Ersatz**
* Händler bearbeiten **Rückerstattungen**
* Wir führen ein internes Koordinationsprotokoll, um sicherzustellen:

  * Kein doppelter Ersatz + Rückerstattung
  * Klare Verantwortung zwischen den Teams

Dies schützt sowohl Benutzer als auch Partner и hält den Поддержка konsistent.

## Umfang и Grenzen

Dieser Поддержкаprozess gilt для:

* **Оборудованиеbedingte Tastatur-/Mausprobleme**
* **Eine begrenzte Anzahl von Einheiten aus einer bestimmten früheren Charge**

Er gilt **не** для:

* Kaufreue
* Ungeöffnete Rückgaben
* Nicht-technische Rückerstattungsanfragen

Diese Fälle werden direkt vom Händler bearbeitet.

## Unser Engagement

Wir schätzen aufrichtig das Vertrauen, das Sie Openterface entgegenbringen.

Wenn etwas не wie geplant läuft, werden wir es не ignorieren или Sie im Unklaren lassen. Wir werden uns die Zeit nehmen zu erklären, was passiert, с Ihnen daran zu arbeiten и sicherzustellen, dass Sie fair behandelt werden.

Wenn Sie unsicher sind, welche Option am sinnvollsten ist, kontaktieren Sie uns einfach. Wir helfen Ihnen, es gemeinsam herauszufinden.

Danke, dass Sie bei uns bleiben и uns helfen, Openterface besser zu machen.

—  
**Das Openterface Team**
