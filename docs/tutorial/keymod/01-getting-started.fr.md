---
title: "KeyMod Tutoriel - Mise en route"
description: "Installez l'application KeyMod, connectez-vous à votre appareil KeyMod et envoyez votre première frappe en moins de 5 minutes. Documentation Openterface :…"
keywords: "KeyMod démarrage, KeyMod configuration, KeyMod installation, connexion KeyMod"
---

# 1. Pour commencer

Installez l'application KeyMod, connectez-vous à votre matériel KeyMod et envoyez votre première frappe en moins de 5 minutes.

## Ce dont vous avez besoin

- **Openterface KeyMod matériel** — sous tension et à portée
- **Téléphone ou tablette** — Android avec l'application KeyMod installée
- **Câble USB** (pour la configuration initiale) — USB-C pour connecter votre téléphone à l'appareil KeyMod
- **Bluetooth** (facultatif) — pour une connexion sans fil après la configuration initiale

## Étape 1 : Installez l'application KeyMod

**Android :**

1. Ouvrez le navigateur de votre téléphone et accédez au [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. Téléchargez le dernier fichier `.apk`
3. Appuyez sur le fichier téléchargé pour l'installer
4. Si Android vous le demande, autorisez **« Installer des applications inconnues »** pour votre navigateur.


> **Note:** KeyCmd source code is not yet public. Download the beta APK from the [App](/app/kvm/) page.

## Étape 2 : Connectez-vous à votre appareil KeyMod

KeyMod se connecte au matériel Openterface KeyMod de deux manières :

### USB Connexion (recommandée pour la première configuration)

1. Branchez votre téléphone sur l'appareil KeyMod à l'aide d'un câble USB-C
2. Ouvrez l'application KeyMod
3. Appuyez sur l'icône de connexion (coin supérieur droit de l'écran principal)
4. Appuyez sur **"USB Connexion"**
5. Acceptez l'invite d'autorisation USB lorsque vous y êtes invité
6. Vous devriez voir un indicateur d'état vert **"Connecté"**.

### Connexion Bluetooth (sans fil)

1. Assurez-vous que Bluetooth est activé sur votre téléphone
2. Ouvrez KeyMod et appuyez sur l'icône de connexion
3. Appuyez sur **"Connexion Bluetooth"**
4. Attendez que votre appareil KeyCmd apparaisse dans la liste de numérisation
5. Appuyez dessus pour associer
6. Vous devriez voir un indicateur d'état vert **"Connecté"**.

> **Astuce :** Activez **"Connexion automatique au démarrage"** dans la boîte de dialogue de connexion afin que KeyMod se reconnecte automatiquement à chaque fois que vous l'ouvrez. L'application mémorise votre dernier type de connexion (USB ou BLE).

## Étape 3 : Choisissez votre mode – Bienvenue et guide

Après le lancement, vous verrez l'écran **Bienvenue et guide** avec les cartes de mode :

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Bienvenue et guide — appuyez sur n'importe quelle carte de mode pour accéder à ce mode.</em></p>
</div>

Utilisez le menu latéral (icône du hamburger, en haut à gauche) pour changer de mode à tout moment :

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Tiroir de navigation — changez de mode, accédez aux macros, à la voix et aux paramètres.</em></p>
</div>

**"Mémoriser mon choix"** : cochez cette case pour ignorer l'écran de bienvenue lors des prochains lancements et accéder directement au dernier mode utilisé.

**« Sauter » button** — contournez l'écran de bienvenue et accédez immédiatement au mode que vous avez utilisé précédemment.

## Étape 4 : Envoyez votre première frappe

1. Sélectionnez le mode **Clavier et souris**
2. Appuyez sur n'importe quelle touche du clavier à l'écran
3. La frappe correspondante est envoyée à l'ordinateur cible

C'est tout ! Vous contrôlez désormais votre ordinateur cible à distance.

## Indicateurs d'état de connexion

| Indicateur | Signification |
|---|---|
| **Vert** (icône connectée) | Connexion active, prête à envoyer des entrées |
| **Ambre/Bleu** (icône de connexion) | Connexion en cours |
| **Gris** (icône déconnectée) | Aucune connexion active |
| **Barres de signal** | BLE force du signal ou USB état actif |

## Prochaines étapes

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Saisie, modificateurs, touchpad et saisie de texte