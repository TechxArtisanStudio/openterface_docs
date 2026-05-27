---
title: "Openterface KVM-Go — Guide de test (Prototype d'ingénierie)"
description: Merci d'avoir pris le temps de tester notre produit à venir . Cette unité est un prototype d'ingénierie, et notre firmware et logiciel évoluent rapidement.…
---

# Openterface KVM-Go — Guide de test (Prototype d'ingénierie)

## Aperçu

Merci d'avoir pris le temps de tester notre produit à venir **[Openterface KVM-Go](https://openterface.com/products/kvmgo/)**.

Cette unité est un **prototype d'ingénierie**, et notre firmware et logiciel évoluent rapidement. Vos retours nous aideront directement à améliorer le produit avant la production de masse.

Si vous rencontrez des problèmes pendant les tests, contactez-nous directement. **Nous fournirons une assistance immédiate pour les résoudre avant que vous enregistriez votre vidéo.**

## Notes importantes

### Avertissement prototype

Cet appareil est un **prototype d'ingénierie**. Le firmware et le logiciel peuvent encore contenir des bugs ou des fonctionnalités incomplètes. Si vous rencontrez de l'instabilité ou tout ce qui bloque votre flux de travail, faites-le nous savoir. Nous corrigerons les problèmes avant l'expédition de la version de production.

### Utiliser le logiciel le plus récent

Pour les meilleures performances et compatibilité, veuillez utiliser la **dernière version** du [logiciel Openterface](https://openterface.com/app/kvm/) depuis notre page GitHub Releases. Nous mettons à jour fréquemment, et les anciennes versions peuvent ne pas correspondre au firmware de votre prototype.

## Problèmes connus et explications

> **Note :** Tous les problèmes listés ci-dessous seront résolus avant la version de production.

### Température de surface

L'appareil peut sembler chaud, voire très chaud pendant l'utilisation. C'est normal car le prototype utilise des puces plus performantes.

Veuillez noter :

* Toutes les températures restent dans la plage de fonctionnement sûre
* Des **capteurs de température** intégrés rapportent l'état thermique en temps réel dans le logiciel
* Des tests de stress sur plusieurs jours ne montrent aucun problème de stabilité

Nous continuerons à affiner les performances thermiques avant la production de masse.

### Distribution du logiciel

Nous prenons actuellement en charge plusieurs plateformes :

* **macOS et Windows**
  Ce sont les plateformes les plus stables, recommandées pour les tests complets.

* **Linux**
  Veuillez utiliser la version **AppImage**.
  Les packages `.deb` et `.rpm` peuvent avoir des problèmes de dépendances selon la distribution. Nous améliorons ces installateurs.

* **Android**
  Une version fonctionnelle est disponible sur **Google Play** pour le contrôle et la surveillance de base.
  Vous pouvez l'essayer si vous souhaitez explorer les workflows mobiles.

* **iPadOS**
  Disponible via **TestFlight**.
  Si vous souhaitez le tester, envoyez-moi votre **Apple ID**, et je vous ajouterai à la liste des testeurs.

### Fonctionnalité copier-coller

Le firmware de votre unité peut ne pas inclure nos dernières corrections du presse-papiers. Ces problèmes ont déjà été résolus dans le firmware le plus récent. Vous pouvez mettre à jour via le [Guide de mise à niveau du firmware](firmware-upgrade.md) si vous souhaitez tester la dernière version.

### Démontage (Optionnel)

Si vous aimez les démontages, vous pouvez démonter l'unité.

Votre prototype comprend les composants suivants :

* **MS2130S** — Puce de capture vidéo
* **WCH CH32V208** — MCU d'émulation clavier et souris USB
* **Pâte thermique silicone standard** — appliquée sur ce prototype

Nous testons actuellement une solution thermique améliorée utilisant des **composants en aluminium** et une **graisse thermique haute performance**. Ces améliorations ont passé les tests internes, mais en raison du stock limité de prototypes, elles ne sont **pas encore** incluses dans les unités de test.

Votre unité utilise toujours de la **pâte silicone**, mais les performances thermiques restent dans les limites sûres.

### Fonctionnalités avancées (Prises en charge sur Mini-KVM, bientôt sur KVM-Go)

KVM-Go suit la même philosophie de conception qu'Openterface Mini-KVM. Plusieurs fonctionnalités avancées sont en développement actif mais **pas encore disponibles** sur le prototype actuel :

* **EDID personnalisé**
  Mini-KVM permet de charger ou modifier l'EDID via notre application QT pour résoudre les problèmes de compatibilité.
  Nous apportons également cette fonctionnalité à KVM-Go.

* **Commutation de carte SD par logiciel**
  Mini-KVM prend en charge la commutation de son port USB-A entre l'hôte et le PC via le logiciel.
  Pour KVM-Go, nous développons une commutation logicielle similaire pour le slot micro-SD, mais elle n'est pas encore activée dans votre firmware.

Nous voulons que vous soyez conscient de ces fonctionnalités à venir même si elles ne sont pas encore actives sur votre unité.

### Engagement open source

Oui, KVM-Go restera entièrement open source. Une fois la conception matérielle finalisée pour la production de masse, nous demanderons la certification OSHWA (Open Source Hardware Association). Tous les fichiers de conception matérielle et modèles STL seront téléchargés sur notre dépôt GitHub : [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Pour aller plus loin

* [Mise à niveau du firmware KVM-Go](firmware-upgrade.md) — Guide étape par étape pour mettre à jour votre appareil
