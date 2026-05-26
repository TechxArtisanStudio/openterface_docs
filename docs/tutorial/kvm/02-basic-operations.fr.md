# Tutoriel KVM 02 — Opérations de base

**Public :** Débutants à intermédiaire — fonctionnalités d'utilisation quotidienne

---

## 1. Contrôle de la souris

### Mode absolu (par défaut)

Le curseur de l'hôte est mappé directement sur l'écran cible. Les deux curseurs sont visibles.

- **Idéal pour :** Usage général, gestion de serveurs, navigation BIOS
- **Comportement du curseur :** Masquer automatiquement ou toujours afficher le curseur hôte sur la zone vidéo

### Mode relatif (HID)

Les mouvements de souris sont envoyés comme deltas relatifs via l'interface HID. Le curseur hôte est masqué.

- **Idéal pour :** Jeux, applications nécessitant une entrée souris brute
- **Prérequis :** Autorisation Accessibilité sur macOS
- **Quitter :** Raccourci clavier global (macOS) ou appui long sur Esc (Qt)

### Modes souris Android

L'application Android propose trois façons de contrôler la souris cible, commutables dans le panneau de paramètres :

| Mode | Fonctionnement | Idéal pour |
|---|---|---|
| **Absolu (par défaut)** | Touchez n'importe où et le curseur y saute et clique gauche. La position est mappée proportionnellement. | La plupart des tâches |
| **Relatif** | Faites glisser votre doigt ; le curseur se déplace relativement à votre geste, comme un trackpad d'ordinateur portable. Relevez le doigt et le curseur reste en place. | Positionnement fin du curseur |
| **Glissement absolu** | Touchez et maintenez ; le curseur saute et suit votre doigt. Une étiquette « Drag » apparaît. Relâchez pour déposer. | Glisser des fichiers, sélectionner du texte |

**Boutons souris sur Android :** appui simple = clic gauche, appui long = clic droit, double appui = double-clic.

### Modes souris iPadOS

L'application iPadOS propose deux modes souris, activables via le bouton mode souris de la barre d'outils :

| Mode | Icône | Fonctionnement | Idéal pour |
|---|---|---|---|
| **Mode Pan** (Relatif) | Icône main | Le doigt agit comme un trackpad d'ordinateur portable — glisser pour déplacer, toucher pour cliquer | Usage bureau général, surface plane |
| **Mode iPencil** (Absolu) | Icône crayon | La position du toucher est mappée directement sur les coordonnées de l'écran cible, comme une tablette graphique | Pointage précis, utilisation Apple Pencil |

**Gestes dans les deux modes :**

| Geste | Mode Pan | Mode iPencil |
|---|---|---|
| **Appui simple** | Clic gauche | Déplacer le curseur au point + clic gauche |
| **Toucher & glisser** | Déplacer le curseur (relatif) | Glisser avec bouton gauche maintenu |
| **Double appui** | Double-clic | Double-clic au point |
| **Appui long** | Clic droit | Clic droit au point |
| **Appui à deux doigts** | Clic droit | Clic droit |
| **Glissement à deux doigts** | Molette | Molette |

**Menu rapide :** Appui long sur l'aperçu vidéo pour ouvrir un menu avec Clic gauche, Clic droit et Glisser.

**Mode glissement :** Double appui & maintenir ou sélectionner Glisser dans le menu rapide — le bouton gauche reste enfoncé, une étiquette « Dragging Mode Active » apparaît.

### Préréglages de performance (macOS)

Sous **Control > Mouse Mode > Performance Presets** :

| Préréglage | Throttle | Baudrate | Cas d'usage |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Appareils cibles lents |
| Casual Use | 80 Hz | 9600 | Gestion quotidienne de serveurs |
| Gaming | 250 Hz | 115200 | Jeux réactifs |
| Max Performance | 1000 Hz | 115200 | Réactivité maximale |

Throttle plus élevé = plus réactif. Baudrate plus élevé = communication série plus rapide.

---

## 2. Saisie clavier

### Saisie standard

Toutes les frappes saisies lorsque la fenêtre de l'application est focalisée sont transmises à la cible.

### Touches spéciales

Envoyez des combinaisons de touches via le panneau de touches de la barre d'outils ou **Control > Special Keys** :

- **F1–F12 :** Touches de fonction
- **Ctrl+Alt+Del :** Salut à trois doigts Windows
- **Print Screen :** Touche capture d'écran
- **Ctrl+Alt+F2 :** Changement de VT Linux

### Disposition clavier

Définissez la disposition OS cible correspondant à l'ordinateur cible :

| Disposition | Comportement |
|--------|----------|
| **Windows** | Mappe les touches hôte aux conventions Windows |
| **Mac** | Mappe les touches hôte aux conventions Mac |
| **Linux** | Mappe les touches hôte aux conventions Linux |

Les dispositions régionales (QWERTY UK, Danois, QWERTZ Allemand, AZERTY Français, Japonais, etc.) sont également disponibles dans l'application Qt.

### Coller vers la cible

L'application envoie le texte du presse-papiers comme frappes émulées vers la cible. Utile pour noms d'utilisateur, commandes, URLs.

> **Note :** Seuls les caractères ASCII sont pris en charge. Un texte long peut perdre sa mise en forme ou omettre des caractères sur les systèmes anciens/surchargés.

**Configuration du comportement de collage (macOS) :**
- **Ask Every Time :** Demande hôte ou cible à chaque fois
- **Host Paste :** Envoie toujours vers la cible
- **Local Paste :** Colle toujours sur l'hôte

### Clavier à l'écran Android

L'application Android fournit un clavier à l'écran complet accessible via le bouton clavier (⌨) en bas à droite de l'écran principal :

| Contrôle | Fonction |
|---|---|
| **ShortCut** | Raccourcis prédéfinis : Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, etc. |
| **Function** | F1–F12, PrtSc, ScrLk, touches de navigation (Ins, Home, PgUp, etc.), flèches |
| **System** | Disposition QWERTY avec lettres, chiffres, ponctuation, Backspace, Enter |
| **Touches modificateurs** | Ctrl, Shift, Alt, Win — boutons bascule qui se réinitialisent après la touche suivante |

Pour envoyer une combinaison comme **Ctrl+Alt+Del** : touchez Ctrl (surligné), touchez Alt (les deux surlignés), touchez Del. Tous les modificateurs se réinitialisent automatiquement après l'envoi.

Le clavier prend aussi en charge **différentes dispositions régionales** (US, Japonais JIS, Allemand QWERTZ, etc.) sélectionnables dans le panneau de paramètres. Les boutons zoom permettent d'ajuster la taille des touches.

### Saisie clavier iPadOS

L'application iPadOS prend en charge deux méthodes de saisie clavier :

**Clavier flottant à l'écran :** Touchez le bouton **Keyboard** dans la barre d'outils pour afficher un clavier flottant déplaçable avec disposition style Mac :

| Rangée | Touches |
|---|---|
| **Haut** | Esc, F1–F12, Del |
| **Chiffres** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Rangée d'accueil** | Caps, a–l, ;, ', Enter |
| **Bas** | Shift, z–m, ,, ., /, Shift |
| **Modificateurs** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Basculer les modificateurs :** Touchez Ctrl, Shift, Alt, Cmd ou Caps pour activer/désactiver (surligné en bleu)
- **Modes clavier :** Normal (saisie standard) et Game (en-tête de paquet HID optimisé pour les jeux)
- **Déplacement :** Saisissez la poignée de déplacement dans l'en-tête pour repositionner le clavier n'importe où à l'écran

**Clavier iPad externe :** Les claviers physiques connectés à l'iPad (Bluetooth, Smart Connector, USB) sont transmis directement au PC cible. Les touches modificateurs sont envoyées comme événements appui/relâchement, donc des combinaisons comme `Ctrl+C` ou `Alt+Tab` fonctionnent naturellement.

**Raccourcis clés composés :** L'application inclut une bibliothèque de raccourcis courants accessibles depuis la barre d'outils, organisés par catégorie :

| Catégorie | Exemples |
|---|---|
| **Navigation** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Édition** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **Système** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Application** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (captures macOS) |

---

## 3. Paramètres vidéo

### Affichage de la résolution

La barre d'outils affiche la résolution d'entrée actuelle et les FPS de la cible. La résolution est déterminée par ce que la cible émet via HDMI.

### Résolutions prises en charge

| Résolution | Plage de fréquence d'images |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Changer la résolution

1. Configurez la résolution préférée dans les paramètres vidéo

### Format d'image & mise à l'échelle

| Mode | Comportement |
|------|----------|
| **Active Resolution** | Détecte automatiquement la zone vidéo active |
| **HID Resolution** | Utilise la résolution du matériel de capture |
| **Custom** | Définir manuellement un ratio (16:9, 4:3, 21:9, etc.) |

**Mise à l'échelle :** Stretch (remplit la fenêtre, peut déformer), Fit (letterboxing), Fill (peut rogner).

### Zoom

Zoom avant/arrière, réinitialiser pour ajuster, et faire défiler pour panoramiquer lorsque zoomé.

### Backend vidéo (Qt)

| Backend | Plateforme | Notes |
|---------|----------|-------|
| **FFmpeg** | Toutes | Recommandé, accélération matérielle |
| **GStreamer** | Linux | Flexibilité de pipeline |
| **Qt Multimedia** | Windows | Repli simple |

Commutez via **Preferences > Video > Media Backend**. Redémarrez après modification.

### Contrôles vidéo Android

Sur l'application Android, les paramètres vidéo sont accessibles via le panneau de paramètres (bouton Menu ☰) :

- **Video Format** — Sélectionnez la résolution (1920×1080, 1280×720, 640×480) et la fréquence d'images (30fps, 60fps). Résolution/fréquence plus basses si la vidéo saccade.
- **Controls** — Curseurs en temps réel pour **brightness**, **contrast** et **hue**
- **Rotate/Flip** — Rotation 90° horaire/antihoraire, retournement horizontal/vertical. Utile lorsque l'appareil KVM est monté à l'envers ou sur le côté

Les paramètres persistent entre les sessions — vous ne les configurez qu'une fois.

### Contrôles vidéo iPadOS

Sur iPadOS, les contrôles vidéo sont accessibles depuis la barre d'outils inférieure :

- **Resolution Switching** — Touchez le bouton **Video** (affiche la résolution actuelle) pour choisir : 2160p (4K), 1080p (par défaut), 720p ou 480p. Résolution plus basse pour de meilleures performances sur connexions lentes.
- **Zoom Mode** — Touchez **Zoom** pour entrer en mode zoom, puis pincez avec deux doigts pour zoomer. Un indicateur de zoom affiche le niveau actuel (ex. `2.5x`). Lorsque zoomé, un glissement à un doigt panoramique la vue. Touchez à nouveau Zoom pour quitter.
- **Fullscreen** — Touchez **Fullscreen** pour masquer la barre d'outils et étendre la vidéo sur tout l'écran. Touchez le bouton flèche en haut à gauche pour quitter.
- **Screen Rotation** — Touchez **Rotate** pour parcourir les modes de correction d'orientation (Normal, 90° CW, 180°, 90° CCW). Utile lorsque le dongle KVM-Go est monté sur le côté ou à l'envers. La rotation s'applique à l'aperçu en direct et aux captures enregistrées.

Lors du démarrage de la caméra, un indicateur de chargement « Starting Camera... » apparaît. Si aucune caméra n'est connectée mais que les autorisations sont accordées, une image guide est affichée.

---

## 4. Audio de la cible

La puce de capture HDMI extrait l'audio du signal HDMI et le présente comme entrée audio USB à l'hôte.

### Activer l'audio

1. Cliquez sur l'icône audio ou ouvrez les paramètres audio
2. Activez la capture audio
3. Sélectionnez le périphérique d'entrée correct (ex. « OpenterfaceA »)
4. Sélectionnez le périphérique de sortie de votre hôte

L'audio est désactivé par défaut sur la plupart des plateformes.

### Contrôle du volume

- **Côté cible :** Ajustez sur l'ordinateur cible
- **Côté hôte :** Utilisez le mixeur audio de l'OS hôte pour le périphérique de capture

### Surveillance audio iPadOS

L'application iPadOS permet d'écouter l'audio du PC cible via les haut-parleurs ou écouteurs de l'iPad :

- Touchez le bouton **Audio** (icône haut-parleur) dans la barre d'outils pour basculer la surveillance
- **États de l'icône :** haut-parleur barré gris = non autorisé, haut-parleur barré rouge = désactivé, haut-parleur vert avec ondes = activé
- Lors de la première utilisation, l'application demande l'autorisation microphone
- L'audio est diffusé via les haut-parleurs iPad ou écouteurs/Bluetooth connectés
- **Pendant l'enregistrement :** l'audio de surveillance est temporairement coupé pour éviter la rétroaction, mais l'audio est toujours capturé dans le fichier d'enregistrement

---

## 5. Capture d'écran & enregistrement

### Capture d'écran

Cliquez sur l'icône appareil photo de la barre d'outils. Les images sont enregistrées dans le dossier média par défaut de votre OS :
- **Linux :** `~/Pictures`
- **Windows :** `C:\Users\<name>\Pictures`
- **macOS :** Camera captures folder (via menu Camera)

### Enregistrement

Cliquez sur le bouton enregistrer pour démarrer/arrêter l'enregistrement du flux vidéo et audio de la cible. Un minuteur apparaît pendant l'enregistrement.

**Paramètres d'enregistrement :**
- Format de sortie (MP4, AVI, MOV, MKV)
- Débit vidéo, codec audio
- Répertoire de sortie

### Capture d'écran & enregistrement Android

Sur Android, accès via le panneau de paramètres :

- **Screen Capture** — Touchez pour enregistrer un instantané de l'image vidéo actuelle dans le dossier média par défaut de l'appareil. Nécessite **Storage permission**.
- **Record Video** — Touchez pour démarrer/arrêter l'enregistrement. Un indicateur d'enregistrement rouge avec minuteur apparaît en haut. La vidéo est enregistrée dans le dossier média par défaut de l'appareil.

**Cas d'usage :** enregistrer le processus de démarrage de la cible, capturer des messages d'erreur, documenter les étapes de configuration.

### Capture d'écran & enregistrement iPadOS

**Captures d'écran :** Touchez le bouton **Screenshot** (icône appareil photo) dans la barre d'outils. L'application capture une image haute résolution, corrige l'orientation et enregistre en JPEG.

**Video Recording :** Touchez **Record** pour démarrer/arrêter. Après l'arrêt, l'application affiche les détails de l'enregistrement (durée et taille du fichier).

| Paramètre | Valeur |
|---|---|
| **Video codec** | H.264 at 30 fps |
| **Resolution** | Correspond au périphérique de capture (typiquement 1920×1080) |
| **Audio codec** | AAC at 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Emplacements des fichiers :**
- **App Documents :** `Documents/Recordings/` — parcourez via Fichiers > Sur mon iPad > Openterface KVM > Recordings
- **Photos App :** Si l'autorisation Photothèque est accordée et activée dans les paramètres
- **Nommage des fichiers :** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (captures) ou `.mov` (enregistrements)

**Cas d'usage :** enregistrer le processus de démarrage de la cible, capturer des messages d'erreur, documenter les étapes de configuration.

---

## 6. Indicateurs de connexion

| Indicateur | Vert | Orange | Gris |
|-----------|-------|--------|------|
| HDMI | Signal détecté | Pas de signal | Inconnu |
| Keyboard | Connecté | Introuvable | Inconnu |
| Mouse | Connecté | Introuvable | Inconnu |

### Commutation USB

Le basculement USB indique si le port commutable est routé vers **Host** ou **Target**.

---

## 7. Empêcher l'économiseur d'écran

Activez **Prevent Screen Saver** (via menu Edit/Device ou barre d'outils) pour envoyer des événements périodiques qui maintiennent l'écran cible actif.

---

## 8. Mode plein écran

Utilisez le bouton plein écran standard pour remplir l'affichage avec la zone vidéo, en masquant l'interface.

---

## Prochaines étapes

- **[Fonctionnalités avancées →](03-advanced-features.md)** — EDID, firmware, macros, scripts, diagnostics
- **[Dépannage →](04-troubleshooting.md)** — Problèmes courants et solutions
