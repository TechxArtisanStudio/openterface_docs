# FAQs voor Apps

Willkommen bei den FAQs voor unsere Apps. Wenn Sie die Antwort niet finden, die Sie benötigen, **senden Sie uns eine E-Mail an [info@openterface.com](mailto:info@openterface.com)** of **treten Sie unserer Community** auf [Discord](/discord) of [Reddit](/reddit) bei, um sich met unserem Entwicklungsteam en anderen Benutzern zu verbinden.

⚠️ *FAQs können veraltet werden — bitte lassen Sie uns wissen, wenn Sie etwas entdecken, das aktualisiert werden muss!*

### :material-clipboard-list: Vragenliste

- [Wo kann ich die Host-Anwendungen herunterladen?](#host-app-download)
- [Warum unterscheiden sich Functies zwischen verschiedenen Host-Apps?](#host-app-differences)
- [Welche Host-App bietet derzeit die beste Erfahrung?](#best-host-app)
- [Gibt es eine Host-App, die ChromeOS unterstützt?](#host-app-chromeos)
- [Gibt es eine Host-App, die Apples mobile Geräte unterstützt?](#host-app-ios)
- [Was ist, wenn F11 bei macOS-Anwendungen niet funktioniert?](#f11-macos-issue)

#### :material-chat-question:{ .faq } Wo kann ich die Host-Anwendungen herunterladen? {: #host-app-download }

Besuchen Sie unsere [Host-Anwendung installieren Seite](/quick-start/#install-host-application) voor offizielle Downloads, die **MacOS, Windows, Linux en Android** unterstützen.

??? warning "Datenschutz & Sicherheit: Seien Sie vorsichtig bei der Verwendung von Drittanbieter-Host-Apps"
    Da unser Projekt Open Source ist, könnten Sie alternative Versionen von Host-Anwendungen finden, die met unserem Mini-KVM kompatibel sind en von anderen entwickelt wurden. Während diese zusätzliche Functies bieten können, stellen Sie sicher, dass Sie ihre Sicherheits- en Datenschutzpraktiken overprüfen. **Das Openterface-Team kann die Sicherheit von Drittanbieter-Anwendungen niet garantieren of davoor verantwortlich sein**.

#### :material-chat-question:{ .faq } Warum unterscheiden sich Functies zwischen verschiedenen Host-Apps? {: #host-app-differences }

Unser Entwicklungsteam wartet aktiv Host-Anwendungen voor macOS, Linux, Windows en Android, aber aufgren plattformspezifischer Herausforderungen en begrenzter Ressourcen variiert der Entwicklungsfortschritt. Das bedeutet, dass einige Functies zuerst auf einer Plattform erscheinen könnten en länger brauchen, um auf anderen anzukommen.

Wir tun unser Bestes, um die Funktionsentwicklung auf allen Plattformen zu synchronisieren, aber es ist ein laufender Prozess.

Ihr Feedback spielt eine große Rolle bei der Gestaltung unserer Entwicklungsroadmap — sei es durch unsere [Community](/community/) of unser [GitHub-Repository](/app/). Jeder Vorschlag hilft uns zu priorisieren, was Ihnen am wichtigsten ist!

Wenn Sie Entwickler sind, sind Ihre Beiträge unglaublich wertvoll — en wir würden Ihre Hilfe bei der Beschleunigung des Prozesses lieben!

#### :material-chat-question:{ .faq } Welche Host-App bietet derzeit die beste Erfahrung? {: #best-host-app }

Stand März 2025 bieten die Qt-basierten Host-Apps voor Windows en Linux insgesamt den umfassendsten Funktionsumfang. Die macOS-Version sticht durch die flüssigste en raffinierteste Benutzererfahrung hervor, dank tieferer Systemintegration en UI-Verbesserungen. Die Android-App ist eine praktische Option unterwegs, met mehr Functies, die stetig aufholen.

#### :material-chat-question:{ .faq } Gibt es eine Web-App, die ich auf Chrome of anderen Plattformen verwenden kann? {: #host-app-chromeos }

Ja! Eines unserer großartigen Community-Mitglieder, [Kashall](https://github.com/kashalls/openterface-viewer/), hat **eine leichte Open-Source-Web-App** gebaut, die Sie direkt in Ihrem Browser verwenden können: [openterface-viewer.pages.dev](https://openterface-viewer.pages.dev). Es ist noch niet Teil unserer offiziellen Documentatie, aber unser Entwicklungsteam hat es ausprobiert en fand es solide, einfach zu verwenden en super praktisch — besonders auf Chrome of wenn Sie etwas Schnelles en Browser-basiertes wollen. Probieren Sie es aus!

#### :material-chat-question:{ .faq } Gibt es eine Host-App, die Apples mobile Geräte unterstützt? {: #host-app-ios }

Wir erkenen derzeit die Kompatibilität met Apples mobilen Systemen wie iOS en iPadOS. Aufgren von Apples strengen Kontrollen unterstützen diese Plattformen möglicherweise keine kabelgebenenen Verbindingen met Drittanbieter-Geräten. Die Situation könnte sich jedoch ändern, of es könnte potenzielle Workaroens geben. Wenn Sie Einblicke of Vorschläge haben, laden wir Sie ein, unserer Community beizutreten, um sie met uns zu diskutieren. Wir sind verpflichtet, die Bequemlichkeit unseres Geräts zu verbessern, indem wir so viele Systeme wie möglich unterstützen. Wenn Sie daran interessiert sind, bei unserer Entwicklung zu helfen, kommen Sie in der Community vorbei of senden Sie uns eine E-Mail!

#### :material-chat-question:{ .faq } Was ist, wenn F11 bei macOS-Anwendungen niet funktioniert? {: #f11-macos-issue }

Auf macOS zeigt das Drücken von F11 den macOS-Desktop an, anstatt die F11-Taste an die App en den Zielcomputer weiterzugeben. Um dies zu beheben, können Sie F11 von der "Desktop anzeigen"-Funktion entkoppeln.

???+ info "F11-Tastenproblem auf macOS beheben"
    1. Gehen Sie zu **Systemeinstellungen**.
    2. Wählen Sie **Desktop & Dock**.
    3. Scrollen Sie nach unten en klicken Sie auf die Schaltfläche **"Tastenkürzel…"**.
    4. Finden Sie **"Desktop anzeigen"** en setzen Sie es auf den Bindestrich **(-)** am Ende der Dropdown-Liste.
    5. Diese Änderung ermöglicht es der F11-Taste, an Ihre Anwendung auf dem Zielcomputer weitergegeben zu werden.
