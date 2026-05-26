---
title: "KeyMod Tutoriel"
description: "Guide complet d'utilisation de l'application KeyMod. Apprenez à vous connecter, à contrôler votre ordinateur depuis votre téléphone et à utiliser les modes clavier, souris, manette de jeu, macros et saisie vocale."
keywords: "Didacticiel KeyMod, comment utiliser KeyMod, guide du clavier du téléphone, didacticiel de l'application KeyMod"
---

# KeyMod Tutoriel

{% include "partials/keymod-tutorial-slideshow.html" %}

Ce didacticiel couvre la version **Android** de l'application KeyMod. La version iOS est en cours de développement.

## Qu'est-ce que KeyMod ?

KeyMod transforme votre téléphone ou votre tablette en un **périphérique d'entrée universel** pour n'importe quel ordinateur. Il se connecte au matériel **Openterface KeyMod** (un KVM — sélecteur clavier, vidéo, souris), qui envoie ensuite les frappes au clavier, les mouvements de la souris et les entrées de la manette de jeu de votre téléphone à un ordinateur cible comme s'ils provenaient d'un véritable clavier et d'une souris USB.

### Comment fonctionne la connexion```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyMod app)                (CH9329 protocol)              (Windows/macOS/Linux)
L'application communique avec le matériel KeyMod à l'aide du protocole **CH9329** via une connexion série (USB-C à 115 200 bauds, 8N1 ou Bluetooth BLE). Le périphérique KeyMod apparaît à l'ordinateur cible comme un clavier et une souris USB standard — aucun pilote n'est nécessaire.

### C'est pour qui ?

| Vous êtes... | KeyMod vous aide... |
|---|---|
| **Administrateur système** | Gérez les serveurs depuis votre téléphone sans avoir à transporter un clavier et un moniteur de rechange |
| **Présentateur / Conférencier** | Contrôlez les diapositives depuis n'importe où dans la pièce, aucun clicker n'est nécessaire |
| **Joueur** | Utilisez votre téléphone comme manette de jeu pour les jeux rétro ou comme manette supplémentaire |
| **Créateur de contenu** | Déclenchez des raccourcis, des macros et des saisies vocales lors de l'enregistrement sur une autre machine |
| **Utilisateur expérimenté** | Envoyez des raccourcis clavier complexes, des extraits de texte ou des séquences d'automatisation depuis votre téléphone |
| **Tout le monde** | Tapez sur votre ordinateur depuis votre canapé, votre lit ou à travers la pièce |

## Sections du didacticiel

| Guide | Descriptif |
|---|---|
| [1. Getting Started](01-getting-started.md) | Installez, connectez-vous et choisissez votre premier mode (5 minutes) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Saisie, modificateurs, touchpad et saisie de texte |
| [3. Target OS](03-target-keyboard.md) | Cartographie du système d'exploitation cible |
| [4. Shortcut Hub](04-shortcuts.md) | Raccourcis clavier basés sur le profil pour les applications populaires |
| [5. Macros](05-macros.md) | Séquences de touches automatisées avec délais |
| [6. Voice Input](06-voice-input.md) | Parole au clavier avec Whisper IA |
| [7. AI Integration](07-ai.md) | Affinement du texte et assistant de commande |
| [8. Gamepad](08-gamepad.md) | Contrôleur de jeu virtuel avec mises en page personnalisables |
| [9. Numpad](09-numpad.md) | Pavé numérique pour la saisie de données |
| [10. Presentation](10-presentation.md) | Télécommande coulissante et minuterie |
| [11. Settings](11-settings.md) | Configuration et préférences de l'application |
| [12. Troubleshooting](12-troubleshooting.md) | Problèmes courants et solutions |

## Obtenir de l'aide

- **Rapports de bogues :** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Communauté :** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Code source :** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)