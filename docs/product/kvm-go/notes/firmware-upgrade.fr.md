---
title: "Mise à niveau du firmware KVM-Go"
description: KVM-Go utilise la puce CH32V208 de WCH pour l'émulation clavier et souris. Actuellement, le flashage du firmware nécessite l'outil de programmation officiel…
---

# Mise à niveau du firmware KVM-Go

## Aperçu

KVM-Go utilise la puce CH32V208 de WCH pour l'émulation clavier et souris. Actuellement, le flashage du firmware nécessite l'outil de programmation officiel de WCH, disponible uniquement pour Windows. Par conséquent, les mises à jour de firmware doivent être effectuées sur un système Windows pour le moment.

Nous travaillons activement sur une solution de mise à niveau du firmware multiplateforme développée en interne, qui sera intégrée directement dans l'appareil. Une fois prête, elle prendra en charge les mises à jour de firmware sur tous les principaux systèmes d'exploitation — sans outils tiers.

> **Note :** Cette procédure manuelle de mise à niveau du firmware est une solution temporaire pour les unités de développement précoce. Pour les produits de production officiels, les mises à jour de firmware seront intégrées de manière transparente dans notre logiciel, vous permettant de mettre à jour le firmware directement via l'application sans outils tiers ni procédures manuelles.

## Prérequis

Avant de continuer, assurez-vous d'avoir :

- Un ordinateur Windows
- L'outil WCH ISP Tool installé
- Le fichier firmware (format `.hex`) prêt pour le flashage

### Télécharger le firmware

Téléchargez le dernier fichier firmware KVM-Go :

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Dernier firmware pour l'émulation clavier et souris KVM-Go (puce CH32V208)

Enregistrez le fichier firmware dans un emplacement facilement accessible sur votre ordinateur Windows avant de procéder à la mise à niveau.

### Télécharger WCH ISP Tool

Téléchargez et installez [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (Windows uniquement).

Merci pour votre patience et votre soutien !

## Instructions étape par étape

### Étape 1 : Télécharger et ouvrir l'outil sous Windows

Lancez l'outil WCH ISP Tool sur votre ordinateur Windows.

![Interface WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Étape 2 : Préparer le KVM-Go pour le flashage

Pour flasher le firmware sur le KVM-Go :

1. Assurez-vous que l'appareil est éteint
2. Maintenez le bouton enfoncé tout en le connectant à un port USB Type-C

**Astuce :** Vous pouvez flasher via l'un ou l'autre port, mais le port « target » tend à être plus stable pendant le flashage.

![Câblage et configuration de connexion KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Étape 3 : Sélectionner le fichier firmware

Si la connexion réussit, l'outil détectera automatiquement le modèle de puce (série CH32V20X).

1. Cliquez sur le bouton « ... » pour parcourir et sélectionner le fichier firmware à flasher
2. Sélectionnez le fichier firmware `.hex`
3. **Important :** N'oubliez pas de cocher la case à côté du fichier firmware

![Modèle de puce détecté dans WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Parcourir et sélectionner le fichier firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Fichier firmware sélectionné avec case cochée](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Étape 4 : Déprotéger le firmware actuel

Avant de flasher le nouveau firmware, vous devez supprimer la protection en écriture du firmware actuel :

1. Cliquez sur l'option « Deprotect » dans l'outil
2. Appuyez brièvement sur le bouton physique du KVM-Go pour entrer en mode flashage
3. Attendez la fin du processus de déprotection

![Option Deprotect dans l'outil](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Appuyer sur le bouton du KVM-Go pour entrer en mode flashage](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Étape 5 : Télécharger et flasher le firmware

Une fois le firmware déprotégé et sélectionné :

1. Cliquez sur le bouton « Download » dans l'outil de flashage
2. Attendez la fin du processus de flashage
3. L'outil indiquera lorsque le firmware a été flashé avec succès

![Processus de téléchargement et flashage du firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Pour aller plus loin

- [Guide de test Openterface KVM-Go](review-guide.md) — Notes importantes et problèmes connus pour les unités prototype d'ingénierie
