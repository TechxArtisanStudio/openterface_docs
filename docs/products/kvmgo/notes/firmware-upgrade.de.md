---
title: "KVM-Go Firmware-Upgrade"
description: KVM-Go verwendet den CH32V208-Chip von WCH für Tastatur- und Maus-Emulation. Derzeit erfordert das Firmware-Flashen das offizielle Programmiertool von WCH,…
---

# KVM-Go Firmware-Upgrade

## Übersicht

KVM-Go verwendet den CH32V208-Chip von WCH für Tastatur- und Maus-Emulation. Derzeit erfordert das Firmware-Flashen das offizielle Programmiertool von WCH, das nur für Windows verfügbar ist. Daher müssen Firmware-Updates derzeit auf einem Windows-System durchgeführt werden.

Wir arbeiten aktiv an einer plattformübergreifenden, selbst entwickelten Firmware-Upgrade-Lösung, die direkt in das Gerät integriert wird. Sobald sie bereit ist, unterstützt sie Firmware-Updates auf allen gängigen Betriebssystemen — ohne Drittanbieter-Tools.

> **Hinweis:** Dieses manuelle Firmware-Upgrade-Verfahren ist eine temporäre Lösung für frühe Entwicklungseinheiten. Bei offiziellen Produktionsprodukten werden Firmware-Updates nahtlos in unsere Software integriert, sodass Sie die Firmware direkt über die Anwendung aktualisieren können, ohne Drittanbieter-Tools oder manuelle Verfahren.

## Voraussetzungen

Stellen Sie vor dem Fortfahren sicher, dass Sie Folgendes haben:

- Einen Windows-Computer
- Das WCH ISP Tool installiert
- Die Firmware-Datei (`.hex`-Format) zum Flashen bereit

### Firmware herunterladen

Laden Sie die neueste KVM-Go-Firmware-Datei herunter:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Neueste Firmware für KVM-Go Tastatur- und Maus-Emulation (CH32V208-Chip)

Speichern Sie die Firmware-Datei vor dem Upgrade-Prozess an einem leicht zugänglichen Ort auf Ihrem Windows-Computer.

### WCH ISP Tool herunterladen

Laden Sie das [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") herunter und installieren Sie es (nur Windows).

Vielen Dank für Ihre Geduld und Unterstützung!

## Schritt-für-Schritt-Anleitung

### Schritt 1: Tool in Windows herunterladen und öffnen

Starten Sie das WCH ISP Tool auf Ihrem Windows-Computer.

![WCH ISP Tool-Oberfläche](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Schritt 2: KVM-Go zum Flashen vorbereiten

Um Firmware auf dem KVM-Go zu flashen:

1. Stellen Sie sicher, dass das Gerät ausgeschaltet ist
2. Halten Sie die Taste gedrückt, während Sie es an einen USB Type-C-Anschluss anschließen

**Tipp:** Sie können über beide Anschlüsse flashen, aber der „Target“-Anschluss ist beim Flashen tendenziell stabiler.

![KVM-Go Verkabelung und Anschlusseinstellung](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Schritt 3: Firmware-Datei auswählen

Bei erfolgreicher Verbindung erkennt das Tool automatisch das Chip-Modell (CH32V20X-Serie).

1. Klicken Sie auf die Schaltfläche „...“, um die zu flashende Firmware-Datei zu durchsuchen und auszuwählen
2. Wählen Sie die `.hex`-Firmware-Datei
3. **Wichtig:** Vergessen Sie nicht, das Kontrollkästchen neben der Firmware-Datei zu aktivieren

![Im WCH ISP Tool erkanntes Chip-Modell](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Firmware-Datei durchsuchen und auswählen](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Firmware-Datei ausgewählt mit aktiviertem Kontrollkästchen](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Schritt 4: Aktuelle Firmware entschützen

Bevor Sie neue Firmware flashen, müssen Sie den Schreibschutz der aktuellen Firmware entfernen:

1. Klicken Sie im Tool auf die Option „Deprotect“
2. Drücken Sie kurz die physische Taste am KVM-Go, um in den Flash-Modus zu wechseln
3. Warten Sie, bis der Entschutzvorgang abgeschlossen ist

![Deprotect-Option im Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Taste am KVM-Go drücken, um in den Flash-Modus zu wechseln](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Schritt 5: Firmware herunterladen und flashen

Sobald die Firmware entschützt und ausgewählt ist:

1. Klicken Sie im Flash-Tool auf die Schaltfläche „Download“
2. Warten Sie, bis der Flash-Vorgang abgeschlossen ist
3. Das Tool zeigt an, wenn die Firmware erfolgreich geflasht wurde

![Firmware herunterladen und flashen](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Weiterführende Informationen

- [Openterface KVM-Go Review-Leitfaden](review-guide.md) — Wichtige Hinweise und bekannte Probleme für Engineering-Prototyp-Einheiten
