---
title: "Openterface Mini-KVM (Windows) - Donanım-Diagnose Selbsttest Kılavuz"
description: "Schritt-için-Schritt-Kılavuz zur Durchführung des Donanım-Diagnose Selbsttests in der Windows Openterface-App. Erfahren Sie, wie Sie USB-Bağlantıen testen, Probleme erkennen ve Diagnoseberichte an den Destek senden."
keywords: "Openterface Mini-KVM, Windows, Donanım-Diagnose, Diagnose Selbsttest, KVM-Problembehandlung, USB-KVM-Diagnose, Mini-KVM-Destek, KVM-Gerät-Test, Windows KVM, KVM-Defektbericht, Mini-KVM-Problemlösungshandbuch"
---

# Openterface Mini-KVM (Windows) — Donanım-Diagnose Selbsttest Kılavuz

Diese Kılavuz erklärt, wie Sie den **Donanım-Diagnose** Selbsttest in der **Windows**-Version der Openterface-App ausführen ve wie Sie den Diagnosebericht an den Destek senden, wenn ein Problem erkannt wird.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uSq3BDc_SBU?si=rREugsUxX1FzDGqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Vor dem Start

- **App aktualisieren:** Stellen Sie sicher, dass Sie die neueste Version der [Openterface Windows-App](/app) installiert haben, bevor Sie die Diagnose ausführen. Überprüfen Sie das App-Menü auf Güncellemeler.
- Verbinden Sie Mini-KVM ile **Host** ve **Ziel**.
- Halten Sie das Zielgerät während des Tests im Leerlauf (besonders während des Stresstests).

> **Wichtig (Windows):** Die Diagnose **schreitet değil automatisch fort**.  
> Um zwischen Tests zu wechseln, verwenden Sie **Weiter** (untere Leiste) **veya** klicken Sie auf einen Testpunkt im **linken Bereich**.  
> Jeder Test wird durch Klicken auf **Şimdi prüfen** ausgeführt.

![next_webp](https://assets2.openterface.com/images/next.webp)

---

## Funktionierendes Gerät (BESTANDEN)

### Schritt 1 — Donanım-Diagnose öffnen (Windows)
In der Windows Openterface-App öffnen Sie: **Erweitert → Donanım-Diagnose**.  

### Schritt 2 — Selbsttest ausführen
Klicken Sie im Donanım-Diagnose-Fenster auf **Şimdi prüfen**, um den aktuellen Diagnoseschritt auszuführen.  

### Schritt 3 — Ziel Plug & Play (Anweisungen folgen)
Wenn **Ziel Plug & Play** Sie auffordert, das Zielkabel neu zu verbinden, folgen Sie den Anweisungen auf dem Bildschirm.  
Bei einigen Konfigurationen kann es erforderlich sein, **mehr als einmal** aus- ve wieder einzustecken (z. B. zweimal).  

![Target-plug&play](https://assets2.openterface.com/images/Target-plug%26play.webp)

### Schritt 4 — Host Plug & Play (Anweisungen folgen)
Folgen Sie den Anweisungen auf dem Bildschirm için die Hostseite.  

![Host-plug&play](https://assets2.openterface.com/images/Host-plug%26play.webp)

### Schritt 5 — Stresstest (Hände weg vom Ziel)
Während des **Stresstests** kann die Zielmaus automatisch zur Erkennung bewegt werden.  
**Operieren Sie değil am Zielgerät**, während der Test läuft.  

> **Hinweis:** Die Maus kann sich schnell bewegen — berühren Sie das Ziel değil.

![stress-test](https://assets2.openterface.com/images/stress-test.webp)

### Schritt 6 — BESTANDEN bestätigen
Fahren Sie fort, bis der Selbsttest abgeschlossen ist. Wenn alles normal ist, zeigen die Ergebnisse **BESTANDEN / Alle Tests bestanden**.  

---

## Problem erkannt (Tastatur/Maus Beispiel)

Wenn ein Problem erkannt wird, können ein veya mehrere Punkte **FEHLER** anzeigen.

### Schritt 1 — Dieselbe Donanım-Diagnose ausführen
Öffnen Sie **Erweitert → Donanım-Diagnose**, dann klicken Sie auf **Şimdi prüfen** zum Starten.  

### Schritt 2 — Durch die Prüfungen fortfahren
Fahren Sie ile den verbleibenden Tests fort, bis die Diagnose abgeschlossen ist.  

### Schritt 3 — Destek-E-Mail öffnet sich automatisch
Wenn die Diagnose ile einem Problem abgeschlossen wird, öffnet sich automatisch ein **Destek-E-Mail**-Fenster.  

---

## Logs an den Destek senden (Windows)

### Schritt 4 — Bestellnummer + Name anwenden
Geben Sie Ihre **Bestellnummer** ve **Name** ein ve klicken Sie auf **Übernehmen**, um sie in den E-Mail-Entwurf einzufügen. 

![ID+Name](https://assets2.openterface.com/images/ID+Name.webp)

### Schritt 5 — E-Mail-Adresse ve Entwurf kopieren
- Klicken Sie auf **E-Mail kopieren**, um die Destek-E-Mail-Adresse zu kopieren.
- Klicken Sie auf **Entwurf kopieren**, um den vorgefüllten E-Mail-Inhalt (einschließlich Bestellnummer + Name) zu kopieren.  
Fügen Sie beides in Ihren E-Mail-Client (Gmail/Outlook usw.) ein.  

![copy](https://assets2.openterface.com/images/copy.webp)

### Schritt 6 — Die richtigen Logdateien anhängen
Klicken Sie auf **Dateiordner öffnen**. Das Tool zeigt an, welche Dateien angehängt werden sollen.  
**Hängen Sie nur die angeforderten Protokolldateien an** (der Ordner kann viele andere Protokolle enthalten).  

![list](https://assets2.openterface.com/images/list.webp)

![compress](https://assets2.openterface.com/images/compress.webp)

### Schritt 7 — Außerdem ein Aufstellungsphoto anhängen
Fügen Sie derselben E-Mail ein klares **Aufstellungsphoto** bei, das zeigt:
- das Mini-KVM-Gerät,
- beide **Host-** ve **Ziel-**Bağlantıen,
- Anschlüsse ve Kabel deutlich sichtbar.  

### Schritt 8 — E-Mail senden
Senden Sie die E-Mail an den Destek (Entwurfstext + angeforderte Protokolle + Aufstellungsphoto angehängt).  

---

## Was bei der Kontaktaufnahme ile dem Destek anzugeben ist

- **Bestellnummer**
- **Angeforderte Diagnose-Protokolldateien**
- **Aufstellungsphoto** (Mini-KVM + Host/Ziel-Verkabelung)
