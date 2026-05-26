---
title: "Tutoriel KVM 03 — Fonctionnalités avancées"
description: "Public : Intermédiaire à expert — fonctionnalités avancées et configuration Documentation Openterface : configuration, FAQ et dépannage KVM-over-USB. Openterfac"
---

# Tutoriel KVM 03 — Fonctionnalités avancées

**Public :** Intermédiaire à expert — fonctionnalités avancées et configuration

---

## 1. Système de préférences

### Vidéo

- **Résolution et fréquence d'images** — Paramètres de capture préférés
- **Backend média** — FFmpeg, GStreamer (Linux) ou Qt Multimedia (Windows)
- **Accélération matérielle** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Format d'image et mise à l'échelle** — Ratio personnalisé, Étirer/Ajuster/Remplir

### Audio

- **Activé** — Activer ou désactiver la capture audio de la cible
- **Périphérique d'entrée/sortie** — Sélectionner la source et le périphérique de lecture

### Contrôle de la cible

- **Mode souris** — Absolu, Relatif (HID), Relatif (Events)
- **Limitation des événements souris** — 30–1000 événements/seconde
- **Disposition clavier** — OS cible et dispositions régionales
- **Intervalle de répétition des touches** — Vitesse de répétition d'une touche maintenue
- **Masquer automatiquement le curseur** — Masquer le curseur hôte sur la zone vidéo

### Journalisation

- **Niveau de journal** — Debug, Info, Warning, Error
- **Journal dans un fichier** — `~/Documents/openterface.log` (macOS) ou chemin configuré (Qt)
- **Journalisation série** — Journal séparé de la communication série

---

## 2. Gestion EDID

### Qu'est-ce que l'EDID ?

L'EDID (Extended Display Identification Data) est ce que l'appareil KVM envoie à la cible pour décrire ses capacités d'affichage — résolutions prises en charge, fréquences de rafraîchissement, informations fabricant. Le KVM agit comme un « faux moniteur », donc l'EDID détermine quelles résolutions la cible enverra.

### Modification du nom d'affichage EDID

Vous pouvez modifier le nom d'affichage que l'appareil KVM signale à la cible. Ce nom apparaît dans les paramètres d'affichage de l'OS cible.

> **Note :** Seule la modification du nom d'affichage est actuellement prise en charge. La modification de résolution et les entrées de résolution personnalisées ne sont pas encore disponibles.

**Accès :** Settings > EDID Display Name Editor (macOS) ou Device > Update Display Settings (Qt)

### Cas d'utilisation

- **Identifier l'affichage** dans les paramètres de l'OS cible
- **Nommage personnalisé** dans les configurations multi-moniteurs pour distinguer l'affichage KVM

---

## 3. Système de macros (macOS)

Les macros sont des séquences d'actions clavier enregistrées, déclenchées depuis le panneau de macros de la barre d'outils.

### Format de séquence de touches

**Tags de modificateurs :** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (correspond à Cmd/Win/Super selon l'OS cible)

**Touches spéciales :** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Délais :** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Exemples

<CMD>c</CMD>              # Copier sur macOS
<CTRL>c</CTRL>            # Copier sur Windows
<DELAY05s><ENTER>         # Attendre, puis appuyer sur Entrée
### Génération assistée par IA

Le bouton **Magic** de l'éditeur de macros génère des macros à partir du langage naturel. Décrivez ce que vous voulez et l'IA produit la séquence de touches.

### Vérification

Marquez les macros comme **verified** après les avoir testées. Seules les macros vérifiées sont disponibles pour l'agent IA en exécution autonome.

---

## 4. Outil Script (Qt)

Un langage de script inspiré d'AutoHotKey pour automatiser les actions clavier et souris sur la cible.

### Ouverture

Menu : **Device > Script Tool**

### Commandes

| Commande | Description | Exemple |
|---------|-------------|---------|
| `Sleep` | Mettre en pause l'exécution | `Sleep 1000` |
| `Send` | Envoyer des frappes | `Send Hello World` |
| `Click` | Clic souris | `Click 100 200` |
| `SetCapsLockState` | Basculer CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Capture d'écran | `FullScreenCapture "/tmp/shot.png"` |

### Préfixes de modificateurs

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Mises à jour du firmware

### Quand mettre à jour

- Nouvelles fonctionnalités matérielles
- Corrections de bugs
- Améliorations de compatibilité

### Processus de mise à jour

1. Ouvrir Firmware Update Tool (**Settings > Firmware Update Tool** sur macOS, **Device > Update Firmware** sur Qt)
2. L'outil vérifie la dernière version sur le réseau
3. La progression est suivie pendant l'opération d'écriture
4. **Ne déconnectez pas l'appareil pendant la mise à jour**

### Récupération

1. Gardez l'appareil alimenté
2. Fermez et rouvrez Firmware Update Tool, puis réessayez
3. Utilisez Serial Reset Tool si l'appareil ne répond pas

---

## 6. Serial Reset Tool

**Accès :** Settings > Serial Reset Tool (macOS) ou Device > Factory Reset HID Chip (Qt)

Utiliser lorsque :
- L'appareil est dans un état inconnu après une mise à jour du firmware échouée
- La puce HID ne répond pas
- Préparation de l'appareil pour revente

---

## 7. Diagnostics (Qt)

Menu : **Device > Device Diagnostics**

Exécute les tests matériels séquentiellement :
1. Test de connexion série
2. État USB de la cible
3. Test de réinitialisation d'usine
4. Test de débit en bauds élevé/bas
5. Test de stress (commandes rapides, mesure du taux de réussite)
6. Test plug & play (détection de déconnexion/reconnexion USB)

Après exécution, exportez les résultats via **Support Email Dialog**.

---

## 8. Système de chat IA (macOS)

Assistant IA intégré capable d'analyser l'écran cible, de suggérer des actions et d'exécuter des opérations clavier/souris.

### Modes de chat

| Mode | Description |
|------|-------------|
| **Interactive** | Poser des questions, obtenir des conseils |
| **Agentic** | L'IA planifie et exécute de manière autonome des tâches en plusieurs étapes |
| **Guide** | Une instruction à la fois, étape par étape |
| **Planner** | Demandes complexes décomposées en plans structurés |

### Configuration

Settings > AI Chat : point de terminaison API, clé (stockée dans Keychain), modèle, système cible (macOS/Windows/Linux/etc.)

---

## 9. Contrôle à distance (VNC/RDP — macOS)

Basculez entre les modes **Hardware KVM**, **VNC** et **RDP** via **Control > Connection Protocol**.

| Scénario | Mode |
|----------|------|
| Cible en BIOS/UEFI, sans réseau, au démarrage, plantée | Hardware KVM |
| Utilisation bureau à haut débit, serveur Windows | VNC ou RDP |

---

## 10. Serveur TCP (Qt)

Serveur TCP intégré pour le contrôle à distance sur le port 12345.

### Commandes

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Exemple Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Sécurité :** Aucune authentification, chiffrement ou limitation de débit. N'activez que sur des réseaux de confiance.

---

## Fonctionnalités spécifiques à iPadOS

### Gestion de la connexion Bluetooth

L'application iPadOS se connecte au dongle KVM-Go via **Bluetooth Low Energy (BLE)** pour l'entrée HID clavier/souris :

- **Connexion automatique :** Activée par défaut. Au démarrage, l'application scanne pendant 5 secondes et se connecte automatiquement à l'appareil `kvm*` avec le signal le plus fort.
- **Reconnexion :** Si la connexion est perdue, l'application tente de se reconnecter jusqu'à 3 fois avec un délai de 2 secondes.
- **Surveillance du signal :** Mises à jour RSSI toutes les 2 secondes. Le bouton BLE affiche la force du signal (par ex. `-45 dBm`) avec un indicateur de couleur : vert (-50 à 0 dBm), orange (-70 à -50 dBm), rouge (en dessous de -70 dBm).
- **Scan des appareils :** Seuls les appareils dont le nom commence par `kvm` (insensible à la casse) apparaissent dans la liste.
- **Contrôle manuel :** Ouvrez l'écran BLE pour scanner, connecter, déconnecter ou désactiver la connexion automatique.

### Superposition d'informations

Appuyez sur le bouton **Info** pour afficher une superposition d'état d'entrée en temps réel dans le coin supérieur droit :

```
┌─ État des entrées ──────┐
│ Souris                  │
│ Mode: Absolute          │
│ Position: 512.0, 384.0  │
│ Drag Mode: Active       │
│ Scrolling: Inactive     │
│ Clavier                 │
│ Mode: Normal            │
│ Caps Lock: OFF          │
│ Modifiers: Ctrl, Shift  │
└─────────────────────────┘
```

La superposition est transparente aux touches — elle ne bloque pas l'interaction avec l'aperçu vidéo.

### Correction de l'orientation de l'écran

Appuyez sur le bouton **Rotate** pour parcourir les modes de correction d'orientation : Normal, 90° CW, 180°, 90° CCW. Cela corrige l'aperçu vidéo lorsque le dongle KVM-Go est monté dans une orientation non standard. La rotation s'applique à l'aperçu en direct et aux captures enregistrées.

### Minuterie d'inactivité désactivée

L'application maintient l'écran de l'iPad **éveillé** pendant l'utilisation en désactivant la minuterie d'inactivité, empêchant l'iPad de se verrouiller automatiquement pendant la surveillance du PC cible.

### Système de journalisation

L'application inclut un `Logger` intégré avec filtrage par catégorie :

| Catégorie | Couvre |
|---|---|
| `bluetooth` | Scan BLE, connexion, transmission de données |
| `mouse` | Entrée souris, détection de gestes, changements de mode |
| `keyboard` | Événements clavier, état des modificateurs, touches composées |
| `camera` | Enregistrement vidéo, captures d'écran, prise de photo |
| `ui` | Gestion des touches, reconnaissance de gestes, couche d'aperçu |
| `general` | Cycle de vie de l'application, informations générales |

La journalisation peut être ajustée dans le code source de l'application pour réduire le bruit dans la console.

---

## Prochaines étapes

- **[Dépannage →](04-troubleshooting.md)** — Problèmes courants et solutions

---

## Fonctionnalités spécifiques à Android

### Panneau de paramètres

Le panneau de paramètres de l'application Android (bouton Menu ☰) contient toutes les options de configuration :

| Paramètre | Description |
|---|---|
| **Device** | Affiche les périphériques USB connectés et leur état. Appuyez pour sélectionner ou relancer le scan. |
| **Disconnect Device** | Libère en toute sécurité toutes les connexions USB. À utiliser avant de débrancher. |
| **Baudrate** | Vitesse de communication série : **115200** (par défaut) ou **9600** (plus lent, en cas de problème). |
| **Controls** | Curseurs de luminosité, contraste et teinte de la caméra. |
| **Video Format** | Sélecteur de résolution et de fréquence d'images. |
| **Rotate/Flip** | Rotation 90° CW/CCW, retournement horizontal/vertical. |
| **Screen Capture / Record Video** | Capture d'écran et enregistrement vidéo. |
| **Relative / Absolute / Drag** | Changer le mode de contrôle de la souris. |
| **About Device** | Affiche la version Android et les informations de version de l'application. |

### Persistance des paramètres

L'application Android mémorise vos préférences entre les sessions :

| Paramètre | Persisté ? |
|---|---|
| Mode de contrôle de la souris | Oui |
| Format vidéo (résolution, FPS) | Oui |
| Paramètres caméra (luminosité, contraste, teinte) | Oui |
| Disposition clavier (US, JP, DE) | Oui |
| Baudrate | Oui |
| Historique de connexion des appareils | Oui |

Lorsque vous rouvrez l'application, vos derniers paramètres sont restaurés. Pour tout réinitialiser : Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Déconnexion sécurisée

Avant de débrancher l'appareil KVM sur Android :

1. Ouvrez le panneau de paramètres
2. Appuyez sur **Disconnect Device** (affiché en rouge)
3. Attendez que l'application libère la connexion USB
4. Débranchez les câbles

Cela évite la corruption des données et garantit que l'ordinateur cible libère correctement le clavier/souris.

### Conseils de performance Android

- **Réduisez la résolution** — 640×480 est bien plus léger que 1920×1080
- **Réduisez la fréquence d'images** — 30 fps utilise moins de bande passante que 60 fps
- **Fermez les autres applications** — libérez la mémoire de votre téléphone
- **Utilisez un adaptateur USB OTG de qualité** — les adaptateurs bon marché peuvent limiter la connexion
- L'équipe de développement travaille à réduire la latence dans le pipeline caméra lui-même
