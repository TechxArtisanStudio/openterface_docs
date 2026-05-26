---
title: "KeyMod Tutoriel - Manette de jeu"
description: "Utilisez KeyMod comme contrôleur de jeu virtuel avec des dispositions personnalisables pour les jeux, l'émulation rétro et les tests de jeux."
keywords: "Manette de jeu KeyMod, contrôleur virtuel, contrôleur de jeu, cartographie WASD, stick analogique"
---

# 8. Manette de jeu

Transformez votre téléphone en contrôleur de jeu virtuel pour les jeux, l'émulation rétro et les tests de jeux.

## La mise en page

La manette de jeu fournit une disposition complète du contrôleur avec un D-pad, des boutons d'action, des boutons d'épaule, des sticks analogiques et Démarrer/Sélectionner.

| Contrôle | Comment |
|---|---|
| D-pad | Appuyez sur les flèches directionnelles |
| Boutons d'action (A, B, X, Y) | Appuyez-les |
| Boutons d'épaule | Appuyez sur L1, L2, R1, R2 en haut |
| Sticks analogiques | Touchez et faites glisser les cercles de bâton |
| Démarrer / Sélectionner | Appuyez sur les boutons |

## Système prédéfini (v7)

KeyMod 0.15 a introduit un **système de manette de jeu basé sur des préréglages**. Au lieu de dispositions intégrées fixes, les configurations de manette de jeu sont désormais enregistrées sous forme de **préréglages** que vous pouvez parcourir, importer et exporter.

### Gestion des préréglages

- **Appuyez sur la puce prédéfinie** dans la barre d'outils pour parcourir les mises en page disponibles
- **Appuyez longuement sur la puce Preset** pour obtenir la liste complète des presets avec les options d'importation, d'ajout de module et d'exportation
- La disposition **emu-6** fournie est livrée comme préréglage de démarrage (`preset_default`)
- Les préréglages sont des fichiers JSON partageables en utilisant la mise en page **schema v7**

### Ajout de modules

À partir du menu prédéfini, vous pouvez ajouter de nouveaux modules à n'importe quelle mise en page :

- **D-Pad / Stick** — ajoute un module pour le pouce gauche (`stick_left`, `stick_left_2`, etc.)
- **Touchpad** — ajoute un touchpad (`touchpad_1`, `touchpad_2`, etc.) avec les boutons de souris L/M/R groupés
- **Boutons** : ajoutez des boutons de visage, des boutons d'épaule ou des déclencheurs

## Personnalisation

- **Configurer n'importe quel module** — appuyez sur un module pour ouvrir sa boîte de dialogue de configuration et ajuster son comportement.
- **Mode analogique ou clé** — les sticks peuvent être configurés en `STICK_KEY` (touches de direction numériques) ou `STICK_MOUSE` (mouvement relatif du pointeur/de la souris)
- **Mapping WASD** — attribuez les touches WASD au joystick gauche pour les jeux sur PC
- **Échelle de 15 /bâton** — ajustez les tailles en fonction de votre zone tactile préférée
- **Image d'arrière-plan** — personnalisez l'arrière-plan de la manette de jeu (intégré aux préréglages partagés en tant que base64, jusqu'à 6 MiB)
- **Retour haptique** — vibration lors d'une pression button (boutons du visage uniquement, pas clics de souris)
- **Gyro** — permet au gyroscope de l'appareil de déplacer le pointeur de l'hôte lorsque l'écran de la manette de jeu est actif

### Modèle de module

Chaque contrôle à l'écran est un **module** à trois couches :

| Couche | Ce qu'il définit |
|---|---|
| **Emplacement / identité** | Quel contrôle sur le canevas (par exemple `stick_left`, `stick_right`, `touchpad_1`) |
| **Comportement (type)** | Ce que l'hôte reçoit : `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Paramètres** | Réglage sur le même module : `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, taille, couleur |

### Sticks analogiques

- **Stick gauche → Touches du clavier :** Mappe vers les touches fléchées avec support diagonal. Configurable à WASD dans la configuration du module.
- **Stick droit → Mouvement de la souris :** Mode `STICK_MOUSE` avec sensibilité configurable (`stickMouseSensitivity`), zone morte pour éviter la dérive.
- **Hystérésis :** Les seuils d'activation (0,6) et de désactivation (0,4) empêchent le broutage des touches à la limite.

### Touchpad

- **Prise en charge multi-touchpad** : ajoutez plusieurs pavés tactiles à une seule disposition (`touchpad_1`, `touchpad_2`, etc.)
- **Empreinte carrée** par défaut avec redimensionnement par appui long
- **Boutons de souris groupés** (L/M/R) partagés sur tous les pavés tactiles
- **Taille de la souris button** : appuyez longuement sur un touchpad pour ajuster la **Taille de la souris button**, ou appuyez longuement sur une souris individuelle button pour **Cette taille button**

> **Remarque :** Le protocole Gamepad HID est en cours de développement actif. Travaux de support de base button ; la précision du stick analogique peut varier.

## Dépannage

### Le stick analogique ne répond pas

| Symptôme | Solutions |
|---|---|
| **Le bâton ne produit pas d'action** | Vérifiez la configuration du module. Vérifiez que le bâton n'est pas coincé dans la zone morte (zone centrale). Vérifiez les seuils d'hystérésis : le stick doit dépasser 0,6 activation pour se déclencher. |
| **Boutons envoyant de mauvaises clés** | Ouvrez la configuration du module et vérifiez l'affectation des touches du button. Appuyez sur le button pour ouvrir la fenêtre contextuelle de configuration et corriger le mappage. |
| **Touchpad les boutons de la souris ne cliquent pas** | Assurez-vous que les boutons L/M/R groupés sont présents dans le préréglage. L'ajout d'un touchpad ajoute automatiquement des boutons de souris partagés. Vérifiez la configuration du module pour la touche HID attribuée. |

## Prochaines étapes

- **[← AI Integration](07-ai.md)** — Affinement du texte et assistant de commande assistés par l'IA
- **[Numpad →](09-numpad.md)** — Pavé numérique pour la saisie des données