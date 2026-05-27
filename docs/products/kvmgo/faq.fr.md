---
title: FAQ pour Openterface KVM-Go Series
description: Questions fréquemment posées sur la série KVM-Go, couvrant les fonctionnalités, la compatibilité et les informations de prélancement. Bienvenue dans la FAQ…
keywords: KVM-Go, Openterface, KVM ultra-compact, HDMI intégré, KVM porte-clés, open-source, prélancement, capture vidéo, USB, compatibilité, MicroSD
---

# FAQ pour Openterface KVM-Go Series

Bienvenue dans la FAQ de notre **série Openterface KVM-Go** de nouvelle génération.  
Si vous ne trouvez pas ce dont vous avez besoin, **envoyez-nous un e-mail à [info@openterface.com](mailto:info@openterface.com)** ou **rejoignez notre communauté** sur [Discord](/discord) ou [Reddit](/reddit).

⚠️ **Remarque** : KVM-Go est actuellement en développement de prélancement. Les fonctionnalités, spécifications et design sont susceptibles de changer à mesure que nous finalisons le produit.

---

## :material-clipboard-list: Navigation Rapide

- [FAQ pour Openterface KVM-Go Series](#faq-pour-openterface-kvm-go-series)
  - [:material-clipboard-list: Navigation Rapide](#material-clipboard-list-navigation-rapide)
  - [Général](#général)
  - [MicroSD et Transfert de Fichiers](#microsd-et-transfert-de-fichiers)
  - [Technique](#technique)
  - [Prélancement](#prélancement)

---

## Général

**:material-chat-question:{ .faq } Qu'est-ce que KVM-Go ?**

KVM-Go est notre solution KVM-over-USB ultra-compacte de nouvelle génération. De la taille d'un porte-clés avec des connecteurs vidéo intégrés (HDMI, DisplayPort ou VGA), il élimine le besoin de câbles séparés.

**:material-chat-question:{ .faq } Quelle est sa taille ?**

Dimensions ultra-compactes : **18 × 18 × 55 mm** (0,71 × 0,71 × 2,17 pouces) — assez petit pour tenir sur votre porte-clés. Le poids est d'environ **25g (0,9 oz)**.

**:material-chat-question:{ .faq } Quels modèles sont disponibles ?**

- **KVM-Go HDMI Male** — Connexion HDMI directe pour les appareils modernes
- **KVM-Go DisplayPort Male** — Prise en charge DisplayPort haute performance  
- **KVM-Go VGA Male** — Compatibilité avec les systèmes hérités (à venir)

**:material-chat-question:{ .faq } Comment se compare-t-il au Mini-KVM ?**

Améliorations majeures :

- **Taille** : 18×18×55mm vs 61×53×13,5mm (beaucoup plus petit)
- **Poids** : 25g vs 48g (plus léger)
- **Vidéo** : 4K@60Hz vs 1080p@30Hz (meilleures performances)
- **USB** : USB 3.0 vs USB 2.0 (plus rapide)
- **Configuration** : Connecteurs intégrés vs câbles séparés (plus facile)

**:material-chat-question:{ .faq } Quelle est la vitesse de démarrage ?**

Le temps de démarrage matériel est inférieur à 1 seconde, permettant un dépannage immédiat sans retards ni perturbations de votre flux de travail.

---

## MicroSD et Transfert de Fichiers

**:material-chat-question:{ .faq } Peut-il transférer des fichiers ?**

Oui — via le **slot MicroSD commutable** qui peut être partagé entre l'hôte et les appareils cibles, permettant des transferts de fichiers rapides sans retirer physiquement la carte.

**:material-chat-question:{ .faq } Comment changer la direction du MicroSD ?**

Deux méthodes pratiques :
1. **Bouton Matériel** – Bouton physique sur l'appareil pour un contrôle manuel
2. **Interrupteur Logiciel** – Bouton à bascule dans l'application hôte pour une commutation instantanée

**:material-chat-question:{ .faq } Que signifient les indicateurs LED ?**

Les **indicateurs LED bicolores** affichent l'état actuel de la connexion MicroSD :

- **🔵 LED Bleue ALLUMÉE** – La carte MicroSD est montée sur l'**appareil cible**  
- **🟢 LED Verte ALLUMÉE** – La carte MicroSD est montée sur l'**ordinateur hôte**  
- **LED ÉTEINTE** – Aucune carte MicroSD insérée ou appareil hors tension  
- **LED CLIGNOTANTE** – Transfert de données en cours (activité de lecture/écriture)

**:material-chat-question:{ .faq } Comment installer correctement la carte MicroSD ?**

Insérez fermement la carte MicroSD jusqu'à ce que vous ressentiez un **clic**, indiquant qu'elle est bien en place et verrouillée. Ce retour tactile confirme une connexion correcte.

---

## Technique

**:material-chat-question:{ .faq } Quelles sont les performances vidéo ?**

- **Entrée** : Jusqu'à 4096×2160 @ 60 Hz (YUV420), 4096×2160 @ 30 Hz (YUV444)
- **Sortie** : 4096×2160 @ 60 Hz (MJPEG), 3840×2160 @ 30 Hz (YUV420)
- **Par défaut** : 1080p@60Hz pour une stabilité et des performances optimales
- **Latence** : Moins de 140ms pour un contrôle fluide

**:material-chat-question:{ .faq } Le mode 4K a-t-il des limitations ?**

Oui — le mode 4K est expérimental et génère de la chaleur supplémentaire. La surface de l'appareil peut devenir assez chaude lors d'une utilisation prolongée en 4K. Pour une stabilité et des performances optimales, le mode 1080p@60Hz par défaut est recommandé.

**:material-chat-question:{ .faq } Open-source ?**

Oui — certifié par [OSHWA](https://certification.oshwa.org/cn000015.html). Le matériel et le logiciel sont sur [GitHub](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

**:material-chat-question:{ .faq } Accès au BIOS**

La connexion USB directe permet un contrôle complet au niveau du BIOS, contrairement aux outils distants uniquement (VNC, TeamViewer).

**:material-chat-question:{ .faq } Prise en charge multiplateforme ?**

Les [applications hôtes](/app) sont compatibles avec macOS, Windows, Linux, Android et l'application web Chrome pour une intégration universelle.

**:material-chat-question:{ .faq } Puis-je l'utiliser avec un iPad ?**

Oui — la prise en charge d'iPadOS arrive bientôt via une application native disponible sur l'Apple App Store. Cela est rendu possible par la capacité Bluetooth intégrée du KVM-GO, ce qui en fait l'un des rares KVM fonctionnant nativement avec les iPads.

**:material-chat-question:{ .faq } Existe-t-il une application Web ?**

Oui — visitez [Openterface Viewer](https://openterface-viewer.pages.dev/) pour une application basée sur le navigateur sans installation (fonctionne dans Chrome, Edge, Safari). Parfait pour un accès rapide ou lorsque vous ne pouvez pas installer de logiciel sur l'ordinateur hôte. Merci à notre incroyable communauté, en particulier [@kashalls](https://github.com/kashalls) qui a lancé ce projet.

**:material-chat-question:{ .faq } Quel connecteur vidéo dois-je choisir ?**

- **HDMI** : Idéal pour les appareils modernes, serveurs, stations de travail
- **DisplayPort** : Écrans haute résolution, configurations professionnelles
- **VGA** : Systèmes hérités, anciens serveurs (à venir)

---

## Prélancement

**:material-chat-question:{ .faq } Quand KVM-Go sera-t-il disponible ?**

KVM-Go est actuellement en phase de test de production en petits lots avec des unités envoyées aux bêta-testeurs pour validation réelle.

**Calendrier de Production** :

- **Novembre 2025** : Lancement de la campagne
- **Décembre 2025** : Finalisation de la configuration de production et de l'approvisionnement en composants
- **Janvier-Mars 2026** : Production de masse et contrôle qualité
- **Avril 2026** : Premières expéditions aux contributeurs

Rejoignez notre [liste d'attente]({{ config.extra.kvmgo_purchase_link }}) pour rester informé des progrès et obtenir un accès anticipé.

**:material-chat-question:{ .faq } Combien cela coûtera-t-il ?**

Les prix seront annoncés lors de la campagne de lancement officielle. Les premiers supporteurs bénéficieront de réductions spéciales et d'un accès prioritaire.

**:material-chat-question:{ .faq } Puis-je devenir bêta-testeur ?**

Oui ! Si vous avez de l'expérience en tests matériels et logiciels, vous êtes invité à postuler pour notre programme de bêta-test [ici](https://forms.gle/yaS1F5E5MSo8DWNZ6).

**:material-chat-question:{ .faq } Les spécifications sont-elles finales ?**

Non, les fonctionnalités, spécifications et design sont susceptibles de changer à mesure que nous finalisons le produit pendant le développement.

