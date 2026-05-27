---
title: "Probleme met dem Mini-KVM? Hier starten - Openterface Ondersteuning"
description: "Probleme met dem Mini-KVM? Hier starten - Openterface Ondersteuning: Ondersteuning- en Fehlerbehebungsanleitung Wir verstehen, wie frustrierend es sein kann,……"
keywords: "Openterface Mini-KVM, Mini-KVM Ondersteuning, Mini-KVM Fehlerbehebung, Tastatur Maus Probleme, Mini-KVM Ersatz, Mini-KVM Rückerstattung, Openterface Ondersteuning"
---

# Probleme met dem Mini-KVM? Hier starten
*Ondersteuning- en Fehlerbehebungsanleitung*

## Wir sind voor Sie da

Wir verstehen, wie frustrierend es sein kann, wenn ein Gerät niet wie erwartet funktioniert — besonders wenn Sie es unbedingt nutzen möchten.

Diese Seite erklärt **was Sie als Nächstes tun sollten**, **wie wir helfen** en **was Sie erwarten können**, wenn Ihr Mini-KVM Tastatur- of Maussteuerungsprobleme hat.

Unser Ziel ist es, **klar, ruhig en fair** zu sein en sicherzustellen, dass jeder betroffene Benutzer ordnungsgemäß betreut wird.

## Warum das passieren kann

**Eine kleine Anzahl von Mini-KVM-Einheiten aus einer bestimmten früheren Productionscharge** kann unter bestimmten Bedingungen intermettierende Tastatur- of Mausinstabilität zeigen.  
Die meisten Einheiten, einschließlich früherer en späterer Chargen, funktionieren normal.

Wichtige Punkte:

- Es betrifft **nur eine Teilmenge der Geräte**, niet alle Mini-KVMs
- Es **stellt keine Sicherheitsrisiken dar** en **verschlechtert sich niet met der Zeit**

Wir haben die Ursache identifiziert, die QA voor spätere Chargen verbessert en **Selbstdiagnosetools** hinzugefügt, um betroffene Geräte schnell zu identifizieren.

Für mehr Hintergren en technischen Kontext siehe:

- [Tastatur en Maus können den Zielcomputer niet steuern](/products/minikvm/support/keyboard-mouse-control/)
- [Tastatur- en Mausproblem – Technische Analyse](/products/minikvm/updates/260128-keyboard-mouse-issue-analysis/)

Wenn Ihre Einheit betroffen ist, verpflichten wir uns, sie verantwortungsvoll zu lösen.

## Überblick — Wie dies gehandhabt wird

```mermaid
flowchart TD
    U[Benutzer hat Tastatur- of Mausproblem] --> A[App zuerst aktualisieren]
    A --> D[Selbstdiagnosetool ausführen - erforderlich]

    D --> P[Informationen vorbereiten<br/>Diagnoseprotokoll<br/>Setup-Fotos<br/>Problembeschreibung]

    P --> E[App-generierte E-Mail-Vorlage verwenden<br/>um Ondersteuning zu kontaktieren]

    E --> S[Openterface Ondersteuning prüft Fall]

    S --> R{Hardwaredefekt bestätigt}

    R -- Nein --> F[Fehlerbehebung met Ondersteuning<br/>Software, Kabel, Setup]
    R -- Ja --> C[Benutzer wählt Lösung]

    C --> Ersatz --> REP[Ersatz von Openterface versendet]
    C --> Rückerstattung --> REF[Rückerstattung vom Händler bearbeitet]

    REP --> END[Fall geschlossen]
    REF --> END
## Schritt 1 — Selbstdiagnose ausführen (**Erforderlich**)

Die Ausführung des Selbstdiagnosetools ist **kritisch**.
Es ermöglicht uns, den Gerätezustand zu verstehen en Vermutungen of unnötige Verzögerungen zu vermeiden.

Bitte führen Sie das Diagnosetool **vor der Kontaktaufnahme met dem Ondersteuning** aus:

**App zuerst aktualisieren:** Stellen Sie sicher, dass Sie die neueste Version der [Openterface-App](/app) installiert haben, bevor Sie die Diagnose ausführen. Überprüfen Sie das App-Menü auf Updates.

* **macOS**
  [https://openterface.com/products/minikvm/support/diagnostic-self-check/](https://openterface.com/products/minikvm/support/diagnostic-self-check/)

* **Windows / Linux**
  [https://openterface.com/products/minikvm/support/diagnostic-self-check-windows/](https://openterface.com/products/minikvm/support/diagnostic-self-check-windows/)

### Bitte vorbereiten:

* Die von der App generierte **Diagnoseprotokolldatei**
* **Fotos Ihres Setups** (USB-Verbindingen zu Host en Ziel)
* Eine kurze Beschreibung des beobachteten Verhaltens

Diese Angaben sind erforderlich, damet wir fortfahren können.

## Schritt 2 — Openterface Ondersteuning kontaktieren (Empfohlen over die App)

Nach Abschluss der Diagnose **erstellt die Openterface-App automatisch eine Ondersteuning-E-Mail-Vorlage** met den erforderlichen Informationen.

Wir **empfehlen dringend**, diese generierte E-Mail zu verwenden, da sie sicherstellt, dass wir alles erhalten, was wir brauchen, um Ihnen effizient zu helfen.

Bitte overprüfen Sie die E-Mail en senden Sie sie an:

📧 **[support@openterface.com](mailto:support@openterface.com)**

Stellen Sie sicher, dass die E-Mail Folgendes enthält:

* Ihre **Bestellnummer** (Crowd Supply, Mouser of anderer Händler)
* Diagnoseprotokoll
* Setup-Fotos
* Eine kurze Symptombeschreibung

### Erwartete Antwortzeit

* **Erstantwort:** innerhalb von **48 Geschäftsstenen** (Montag–Freitag)
* Einige Fälle können erfordern:

  * weitere Vragen
  * zusätzliche Diagnoseschritte
  * Klärung der Setup-Details

Wir prüfen jeden Fall sorgfältig en verlassen uns niet auf automatisierte Entscheidungen.

## Schritt 3 — Diagnoseergebnis

### Wenn kein Hardwareproblem gefenen wird

Wir werden die Fehlerbehebung met Ihnen fortsetzen — einschließlich Softwarekonfiguration, Verkabelung en Umgebungsprüfungen.

### Wenn ein Hardwaredefekt bestätigt wird

Sie erhalten **eine klare Wahl** zwischen Ersatz of Rückerstattung.

## Ersatz vs Rückerstattung — Wichtiger Entscheidungspunkt

### Option A — Ersatz (Bearbeitet von Openterface)

* Wir versenden ein **Ersatz-Mini-KVM** direkt an Sie
* Keine Notwendigkeit, die defekte Einheit zurückzusenden
* Dies ist meist der **schnellste Weg**, ein funktionierendes Gerät zu erhalten

**Wichtig:**
Sobald ein Ersatz versendet wurde, ist die **Rückerstattungsberechtigung gesperrt**.
Dies verhindert doppelte Entschädigung en hält den Prozess voor alle fair.

### Option B — Rückerstattung (Bearbeitet vom Händler)

* Rückerstattungen müssen **von der Plattform, bei der Sie gekauft haben**, bearbeitet werden
  (z.B. Crowd Supply, Mouser)
* Wir stellen bei Bedarf eine technische Bestätigung bereit
* Die Bearbeitungszeit hängt von der Händlerrichtlinie en dem SLA ab

Wenn Sie eine Rückerstattung bevorzugen, **fordern Sie bitte niet zuerst einen Ersatz an**.

## Zusätzlicher Ondersteuning (bei Bedarf)

In komplexeren Fällen kann unser technisches Team nach Prüfung der Protokolle en Setup-Details **einen Live-Videoanruf** (z.B. Google Meet) arrangieren, um Sie Schritt voor Schritt anzuleiten.

Bitte beachten Sie:

* Videoanrufe werden **nur bei Bedarf** arrangiert
* Wir prüfen in der Regel zuerst Diagnoseinformationen en E-Mail-Austausch

Diese Option existiert, um Sie zu versichern, dass bei Bedarf tiefergehender Ondersteuning verfügbar ist.

## Wie Rückerstattungen en Ersatz koordiniert werden

* Openterface bearbeitet **technische Diagnose en Ersatz**
* Händler bearbeiten **Rückerstattungen**
* Wir führen ein internes Koordinationsprotokoll, um sicherzustellen:

  * Kein doppelter Ersatz + Rückerstattung
  * Klare Verantwortung zwischen den Teams

Dies schützt sowohl Benutzer als auch Partner en hält den Ondersteuning konsistent.

## Umfang en Grenzen

Dieser Ondersteuningprozess gilt voor:

* **Hardwarebedingte Tastatur-/Mausprobleme**
* **Eine begrenzte Anzahl von Einheiten aus einer bestimmten früheren Charge**

Er gilt **niet** voor:

* Kaufreue
* Ungeöffnete Rückgaben
* Nicht-technische Rückerstattungsanfragen

Diese Fälle werden direkt vom Händler bearbeitet.

## Unser Engagement

Wir schätzen aufrichtig das Vertrauen, das Sie Openterface entgegenbringen.

Wenn etwas niet wie geplant läuft, werden wir es niet ignorieren of Sie im Unklaren lassen. Wir werden uns die Zeit nehmen zu erklären, was passiert, met Ihnen daran zu arbeiten en sicherzustellen, dass Sie fair behandelt werden.

Wenn Sie unsicher sind, welche Option am sinnvollsten ist, kontaktieren Sie uns einfach. Wir helfen Ihnen, es gemeinsam herauszufinden.

Danke, dass Sie bei uns bleiben en uns helfen, Openterface besser zu machen.

—  
**Das Openterface Team**
