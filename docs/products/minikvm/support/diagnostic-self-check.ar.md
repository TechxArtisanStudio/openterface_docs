---
title: "Openterface Mini-KVM - Diagnose Selbsttest دليل (macOS)"
description: "Schritt-لـ-Schritt-دليل zur Durchführung von Diagnose Selbsttests am Openterface Mini-KVM-Gerät مع der macOS-App. Erfahren Sie, wie Sie USB-الاتصالen testen, Probleme erkennen و Defektberichte an den الدعم senden können."
keywords: "Openterface Mini-KVM, macOS, Diagnose Selbsttest, KVM-Problembehandlung, USB-KVM-Diagnose, Mini-KVM-الدعم, KVM-Gerät-Test, USB-الاتصالsprüfung, KVM-Defektbericht, Mini-KVM-Problemlösungshandbuch, KVM-Diagnose-Tool, headless Server Diagnose, IT-Problemlösungstools"
---

# Openterface Mini-KVM - Diagnose Selbsttest دليل (macOS)

Dieses Handbuch enthält Schritt-لـ-Schritt-Anweisungen zur Durchführung von Diagnose Selbsttests am Openterface Mini-KVM-Gerät.

## Bevor Sie beginnen

- **App aktualisieren:** Stellen Sie sicher, dass Sie die neueste Version der [Openterface macOS-App](/app) installiert haben, bevor Sie die Diagnose ausführen. Überprüfen Sie das App-Menü auf التحديثات.
- **Gerät verbinden:** Überprüfen Sie, dass das Mini-KVM ordnungsgemäß مع Host- و Zielgeräten verbوen ist.
- **Ziel im Leerlauf halten:** Während des Tests (besonders beim Belastungstest) halten Sie das Zielgerät untätig و bedienen Sie es لا.

<iframe width="560" height="315" src="https://www.youtube.com/embed/-K6Idzky3fY?si=r7pZgCkBzzZXgrLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Gutes Gerät

**Schritt 1:** Öffnen Sie im Openterface-App die Einstellungen → Einstellungen…

**Schritt 2:** In dem Fenster „Einstellungen“ navigieren Sie zu Erweitert & Debug.

**Schritt 3:** Klicken Sie auf Öffnen Diagnose-Tool.

**Schritt 4:** Wenn Sie aufgefordert werden, klicken Sie auf Aktivieren, um die Diagnoseprotokollierung zu aktivieren.

**Schritt 5:** Klicken Sie auf الآن prüfen, um den Selbsttest zu starten.

**Schritt 6:** Klicken Sie auf Test starten و ziehen Sie anschließend den schwarzen USB-C-Stecker (Zielseite) aus و stecken Sie ihn erneut ein, wenn Sie dazu aufgefordert werden.

![minikvm-support-target](https://assets.openterface.com/images/minikvm/support/target.webp)

**Schritt 7:** Klicken Sie auf Test starten و ziehen Sie anschließend den orangenen USB-C-Stecker (Hostseite) aus و stecken Sie ihn erneut ein, wenn Sie dazu aufgefordert werden.

![minikvm-support-host](https://assets.openterface.com/images/minikvm/support/host.webp)

**Schritt 8:** Klicken Sie auf Test starten و warten Sie, bis der Test abgeschlossen ist.

**Schritt 9:** Klicken Sie auf الآن zurücksetzen و warten Sie, bis der Vorgang abgeschlossen ist.

**Schritt 10:** Klicken Sie auf الآن ändern و warten Sie, bis der Baudrate-Wechsel abgeschlossen ist.

**Schritt 11:** Klicken Sie auf Test starten و warten Sie etwa 30 Sekوen. Operieren Sie während des Tests لا am Zielgerät.

> **Hinweis:** Der Mauszeiger kann schnell bewegen. Berühren Sie das Zielgerät لا.

![minikvm-support-stress_test](https://assets.openterface.com/images/minikvm/support/stress_test.gif)

**Schritt 12:** Bestätigen Sie, dass alle Elemente grüne Hakenzeichen anzeigen و der Fortschritt abgeschlossen ist.

**Schritt 13:** Klicken Sie auf ❌ (oben rechts), um das Diagnosefenster zu schließen.

---

## Problem erkannt (Tastatur/Maus Beispiel)

Führen Sie zunächst die Schritte 1–11 aus „Gutes Gerät“ durch. Die unten stehenden Hinweise erklären, was Sie bei Erkennung eines Tastatur-/Maus-Problems sehen werden.

## Wie sich dieses Problem zeigt

In diesem Beispiel wird zuerst der Gesamtverbindungszustand als FEHLER angezeigt, da ein Problem مع der Tastatur/Maus (HID) auf der Zielseite den Gesamttst beeinflusst. Dies ist ein frühes Indiz, لا ein separates Problem. (Sie werden den FEHLER-Status neben „Gesamtverbindung“ links sehen.)

- **Gesamtverbindung:** FEHLER wird hier zuerst angezeigt, aufgrو des Problems auf der Zielseite.

![minikvm-support-overall_connection](https://assets.openterface.com/images/minikvm/support/overall_connection.webp)

- **Ziel Plug & Play:** Nach Ausführung dieses Schritts kann das Ergebnis das Problem auf der Zielseite deutlicher zeigen.

> **Tipp:** Wenn ein Schritt FEHLER anzeigt, wird die Diagnose لا stoppen, aber sie kann automatisch weitergehen aufhören – Sie müssen also manuell fortfahren.

## Zusätzlicher Endtest (je nach Problemart)

**Schritt 12:** Nach dem Stress-Test kann die Diagnose einen zusätzlichen Endtest durchführen, abhängig vom erkannten Problem; in diesem Tastatur/Maus-Beispiel wird der Test fortgesetzt zum Zielport-Check.

**Schritt 13:** Klicken Sie auf „Geräte erkennen“, um den Zielport-Check zu starten, و folgen Sie dann den Anweisungen auf dem Bildschirm.

![minikvm-support-target_port_checking](https://assets.openterface.com/images/minikvm/support/target_port_checking.webp)

## Was passiert, wenn ein Problem erkannt wird

**Schritt 14:** Um fortzufahren, klicken Sie auf Weiter (untere Leiste) أو wählen Sie den nächsten Test aus dem linken Bereich aus.

![minikvm-support-target_plug_n_play](https://assets.openterface.com/images/minikvm/support/target_plug_n_play.webp)

## Logs an den الدعم senden

**Schritt 15:** Klicken Sie auf „Defektbericht an الدعم senden“, um den Bericht لـ den الدعم vorzubereiten.

![minikvm-support-send_defect_report_to_support](https://assets.openterface.com/images/minikvm/support/send_defect_report_to_support.webp)

**Schritt 16:** Im Defektberichtsfenster geben Sie Ihre **Bestellnummer** و **Name** ein, و klicken Sie auf **Übernehmen**, um sie in den E-Mail-Entwurf einzufügen.

**Schritt 17:** Kopieren Sie die E-Mail-Adresse و den Entwurf:
- Klicken Sie auf **E-Mail kopieren**, um die الدعم-E-Mail-Adresse zu kopieren.
- Klicken Sie auf **Entwurf kopieren**, um den vorgefüllten E-Mail-Inhalt (einschließlich Bestellnummer + Name) zu kopieren.
- Fügen Sie beides in Ihren E-Mail-Client (Gmail/Outlook usw.) ein.

![minikvm-support-support](https://assets.openterface.com/images/minikvm/support/support.webp)

**Schritt 18:** Klicken Sie auf **Log-Ordner öffnen**. Das Tool zeigt an, welche Dateien angehängt werden sollen. **Hängen Sie nur die angeforderten Protokolldateien an** (der Ordner kann viele andere Protokolle enthalten).

**Schritt 19:** Fügen Sie derselben E-Mail ein klares **Aufstellungsphoto** bei, das zeigt:
- das Mini-KVM-Gerät,
- beide **Host-** و **Ziel-**الاتصالen,
- Anschlüsse و Kabel deutlich sichtbar.

**Schritt 20:** Senden Sie die E-Mail an den الدعم (Entwurfstext + angeforderte Protokolle + Aufstellungsphoto angehängt).

**Schritt 21:** Klicken Sie auf ❌ (oben rechts), um das Diagnosefenster zu schließen.