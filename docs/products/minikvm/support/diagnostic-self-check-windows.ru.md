---
title: "Openterface Mini-KVM (Windows) - Оборудование-Diagnose Selbsttest Руководство"
description: "Schritt-для-Schritt-Руководство zur Durchführung des Оборудование-Diagnose Selbsttests in der Windows Openterface-App. Erfahren Sie, wie Sie USB-Подключениеen testen, Probleme erkennen и Diagnoseberichte an den Поддержка senden."
keywords: "Openterface Mini-KVM, Windows, Оборудование-Diagnose, Diagnose Selbsttest, KVM-Problembehandlung, USB-KVM-Diagnose, Mini-KVM-Поддержка, KVM-Gerät-Test, Windows KVM, KVM-Defektbericht, Mini-KVM-Problemlösungshandbuch"
---

# Openterface Mini-KVM (Windows) — Оборудование-Diagnose Selbsttest Руководство

Diese Руководство erklärt, wie Sie den **Оборудование-Diagnose** Selbsttest in der **Windows**-Version der Openterface-App ausführen и wie Sie den Diagnosebericht an den Поддержка senden, wenn ein Problem erkannt wird.

<iframe width="560" height="315" src="https://www.youtube.com/embed/uSq3BDc_SBU?si=rREugsUxX1FzDGqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Vor dem Start

- **App aktualisieren:** Stellen Sie sicher, dass Sie die neueste Version der [Openterface Windows-App](/app) installiert haben, bevor Sie die Diagnose ausführen. Überprüfen Sie das App-Menü auf Обновления.
- Verbinden Sie Mini-KVM с **Host** и **Ziel**.
- Halten Sie das Zielgerät während des Tests im Leerlauf (besonders während des Stresstests).

> **Wichtig (Windows):** Die Diagnose **schreitet не automatisch fort**.  
> Um zwischen Tests zu wechseln, verwenden Sie **Weiter** (untere Leiste) **или** klicken Sie auf einen Testpunkt im **linken Bereich**.  
> Jeder Test wird durch Klicken auf **Сейчас prüfen** ausgeführt.

![next_webp](https://assets2.openterface.com/images/next.webp)

---

## Funktionierendes Gerät (BESTANDEN)

### Schritt 1 — Оборудование-Diagnose öffnen (Windows)
In der Windows Openterface-App öffnen Sie: **Erweitert → Оборудование-Diagnose**.  

### Schritt 2 — Selbsttest ausführen
Klicken Sie im Оборудование-Diagnose-Fenster auf **Сейчас prüfen**, um den aktuellen Diagnoseschritt auszuführen.  

### Schritt 3 — Ziel Plug & Play (Anweisungen folgen)
Wenn **Ziel Plug & Play** Sie auffordert, das Zielkabel neu zu verbinden, folgen Sie den Anweisungen auf dem Bildschirm.  
Bei einigen Konfigurationen kann es erforderlich sein, **mehr als einmal** aus- и wieder einzustecken (z. B. zweimal).  

![Target-plug&play](https://assets2.openterface.com/images/Target-plug%26play.webp)

### Schritt 4 — Host Plug & Play (Anweisungen folgen)
Folgen Sie den Anweisungen auf dem Bildschirm для die Hostseite.  

![Host-plug&play](https://assets2.openterface.com/images/Host-plug%26play.webp)

### Schritt 5 — Stresstest (Hände weg vom Ziel)
Während des **Stresstests** kann die Zielmaus automatisch zur Erkennung bewegt werden.  
**Operieren Sie не am Zielgerät**, während der Test läuft.  

> **Hinweis:** Die Maus kann sich schnell bewegen — berühren Sie das Ziel не.

![stress-test](https://assets2.openterface.com/images/stress-test.webp)

### Schritt 6 — BESTANDEN bestätigen
Fahren Sie fort, bis der Selbsttest abgeschlossen ist. Wenn alles normal ist, zeigen die Ergebnisse **BESTANDEN / Alle Tests bestanden**.  

---

## Problem erkannt (Tastatur/Maus Beispiel)

Wenn ein Problem erkannt wird, können ein или mehrere Punkte **FEHLER** anzeigen.

### Schritt 1 — Dieselbe Оборудование-Diagnose ausführen
Öffnen Sie **Erweitert → Оборудование-Diagnose**, dann klicken Sie auf **Сейчас prüfen** zum Starten.  

### Schritt 2 — Durch die Prüfungen fortfahren
Fahren Sie с den verbleibenden Tests fort, bis die Diagnose abgeschlossen ist.  

### Schritt 3 — Поддержка-E-Mail öffnet sich automatisch
Wenn die Diagnose с einem Problem abgeschlossen wird, öffnet sich automatisch ein **Поддержка-E-Mail**-Fenster.  

---

## Logs an den Поддержка senden (Windows)

### Schritt 4 — Bestellnummer + Name anwenden
Geben Sie Ihre **Bestellnummer** и **Name** ein и klicken Sie auf **Übernehmen**, um sie in den E-Mail-Entwurf einzufügen. 

![ID+Name](https://assets2.openterface.com/images/ID+Name.webp)

### Schritt 5 — E-Mail-Adresse и Entwurf kopieren
- Klicken Sie auf **E-Mail kopieren**, um die Поддержка-E-Mail-Adresse zu kopieren.
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
- beide **Host-** и **Ziel-**Подключениеen,
- Anschlüsse и Kabel deutlich sichtbar.  

### Schritt 8 — E-Mail senden
Senden Sie die E-Mail an den Поддержка (Entwurfstext + angeforderte Protokolle + Aufstellungsphoto angehängt).  

---

## Was bei der Kontaktaufnahme с dem Поддержка anzugeben ist

- **Bestellnummer**
- **Angeforderte Diagnose-Protokolldateien**
- **Aufstellungsphoto** (Mini-KVM + Host/Ziel-Verkabelung)
