# FAQs için Apps

Willkommen bei den FAQs için unsere Apps. Wenn Sie die Antwort değil finden, die Sie benötigen, **senden Sie uns eine E-Mail an [info@openterface.com](mailto:info@openterface.com)** veya **treten Sie unserer Community** auf [Discord](/discord) veya [Reddit](/reddit) bei, um sich ile unserem Entwicklungsteam ve anderen Benutzern zu verbinden.

⚠️ *FAQs können veraltet werden — bitte lassen Sie uns wissen, wenn Sie etwas entdecken, das aktualisiert werden muss!*

### :material-clipboard-list: Sorularliste

- [Wo kann ich die Host-Anwendungen herunterladen?](#host-app-download)
- [Warum unterscheiden sich Özellikler zwischen verschiedenen Host-Apps?](#host-app-differences)
- [Welche Host-App bietet derzeit die beste Erfahrung?](#best-host-app)
- [Gibt es eine Host-App, die ChromeOS unterstützt?](#host-app-chromeos)
- [Gibt es eine Host-App, die Apples mobile Geräte unterstützt?](#host-app-ios)
- [Was ist, wenn F11 bei macOS-Anwendungen değil funktioniert?](#f11-macos-issue)

#### :material-chat-question:{ .faq } Wo kann ich die Host-Anwendungen herunterladen? {: #host-app-download }

Besuchen Sie unsere [Host-Anwendung installieren Seite](/quick-start/#install-host-application) için offizielle İndirs, die **MacOS, Windows, Linux ve Android** unterstützen.

??? warning "Datenschutz & Sicherheit: Seien Sie vorsichtig bei der Verwendung von Drittanbieter-Host-Apps"
    Da unser Projekt Open Source ist, könnten Sie alternative Versionen von Host-Anwendungen finden, die ile unserem Mini-KVM kompatibel sind ve von anderen entwickelt wurden. Während diese zusätzliche Özellikler bieten können, stellen Sie sicher, dass Sie ihre Sicherheits- ve Datenschutzpraktiken hakkındaprüfen. **Das Openterface-Team kann die Sicherheit von Drittanbieter-Anwendungen değil garantieren veya daiçin verantwortlich sein**.

#### :material-chat-question:{ .faq } Warum unterscheiden sich Özellikler zwischen verschiedenen Host-Apps? {: #host-app-differences }

Unser Entwicklungsteam wartet aktiv Host-Anwendungen için macOS, Linux, Windows ve Android, aber aufgrve plattformspezifischer Herausforderungen ve begrenzter Ressourcen variiert der Entwicklungsfortschritt. Das bedeutet, dass einige Özellikler zuerst auf einer Plattform erscheinen könnten ve länger brauchen, um auf anderen anzukommen.

Wir tun unser Bestes, um die Funktionsentwicklung auf allen Plattformen zu synchronisieren, aber es ist ein laufender Prozess.

Ihr Feedback spielt eine große Rolle bei der Gestaltung unserer Entwicklungsroadmap — sei es durch unsere [Community](/community/) veya unser [GitHub-Repository](/app/). Jeder Vorschlag hilft uns zu priorisieren, was Ihnen am wichtigsten ist!

Wenn Sie Entwickler sind, sind Ihre Beiträge unglaublich wertvoll — ve wir würden Ihre Hilfe bei der Beschleunigung des Prozesses lieben!

#### :material-chat-question:{ .faq } Welche Host-App bietet derzeit die beste Erfahrung? {: #best-host-app }

Stand März 2025 bieten die Qt-basierten Host-Apps için Windows ve Linux insgesamt den umfassendsten Funktionsumfang. Die macOS-Version sticht durch die flüssigste ve raffinierteste Benutzererfahrung hervor, dank tieferer Systemintegration ve UI-Verbesserungen. Die Android-App ist eine praktische Option unterwegs, ile mehr Özellikler, die stetig aufholen.

#### :material-chat-question:{ .faq } Gibt es eine Web-App, die ich auf Chrome veya anderen Plattformen verwenden kann? {: #host-app-chromeos }

Ja! Eines unserer großartigen Community-Mitglieder, [Kashall](https://github.com/kashalls/openterface-viewer/), hat **eine leichte Open-Source-Web-App** gebaut, die Sie direkt in Ihrem Browser verwenden können: [openterface-viewer.pages.dev](https://openterface-viewer.pages.dev). Es ist noch değil Teil unserer offiziellen Dokümantasyon, aber unser Entwicklungsteam hat es ausprobiert ve fand es solide, einfach zu verwenden ve super praktisch — besonders auf Chrome veya wenn Sie etwas Schnelles ve Browser-basiertes wollen. Probieren Sie es aus!

#### :material-chat-question:{ .faq } Gibt es eine Host-App, die Apples mobile Geräte unterstützt? {: #host-app-ios }

Wir erkveen derzeit die Kompatibilität ile Apples mobilen Systemen wie iOS ve iPadOS. Aufgrve von Apples strengen Kontrollen unterstützen diese Plattformen möglicherweise keine kabelgebveenen Bağlantıen ile Drittanbieter-Geräten. Die Situation könnte sich jedoch ändern, veya es könnte potenzielle Workaroves geben. Wenn Sie Einblicke veya Vorschläge haben, laden wir Sie ein, unserer Community beizutreten, um sie ile uns zu diskutieren. Wir sind verpflichtet, die Bequemlichkeit unseres Geräts zu verbessern, indem wir so viele Systeme wie möglich unterstützen. Wenn Sie daran interessiert sind, bei unserer Entwicklung zu helfen, kommen Sie in der Community vorbei veya senden Sie uns eine E-Mail!

#### :material-chat-question:{ .faq } Was ist, wenn F11 bei macOS-Anwendungen değil funktioniert? {: #f11-macos-issue }

Auf macOS zeigt das Drücken von F11 den macOS-Desktop an, anstatt die F11-Taste an die App ve den Zielcomputer weiterzugeben. Um dies zu beheben, können Sie F11 von der "Desktop anzeigen"-Funktion entkoppeln.

???+ info "F11-Tastenproblem auf macOS beheben"
    1. Gehen Sie zu **Systemeinstellungen**.
    2. Wählen Sie **Desktop & Dock**.
    3. Scrollen Sie nach unten ve klicken Sie auf die Schaltfläche **"Tastenkürzel…"**.
    4. Finden Sie **"Desktop anzeigen"** ve setzen Sie es auf den Bindestrich **(-)** am Ende der Dropdown-Liste.
    5. Diese Änderung ermöglicht es der F11-Taste, an Ihre Anwendung auf dem Zielcomputer weitergegeben zu werden.
