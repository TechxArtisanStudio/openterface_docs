---
title: "FAQ | Module d'Extension v2"
description: "FAQ pour le Module d'Extension KVM v2 Openterface uConsole : cartes Ethernet, Kit de Mise à niveau, carte SD, configuration logicielle, compatibilité et dépannage."
keywords: "FAQ extension KVM v2, uConsole KVM, Ethernet, carte SD, dépannage, Kit de Mise à niveau"
---

# FAQ | Module d'Extension v2

Bienvenue dans la FAQ du **Module d'Extension KVM v2 Openterface uConsole**.

Si vous ne trouvez pas ce dont vous avez besoin, envoyez un e-mail à [support@openterface.com](mailto:support@openterface.com) ou rejoignez notre communauté sur [Discord](/discord).

---

## :material-clipboard-list: Navigation rapide

- [Produit & achat](#produit--achat)
- [Installation & matériel](#installation--matériel)
- [Compatibilité](#compatibilité)
- [Contrôle & fonctionnalités](#contrôle--fonctionnalités)
- [Vidéo & audio](#vidéo--audio)
- [Dépannage](#dépannage)
- [Plus](#plus)

---

## Produit & achat

**:material-chat-question:{ .faq } Le Module d'Extension v2 est-il un seul produit ou deux versions réseau ?**

C'est **un seul produit**. Les cartes Ethernet 100M et 1000M sont toutes deux incluses dans la boîte. Voir [Options d'achat](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Quelle carte Ethernet dois-je utiliser ?**

Utilisez la carte **100M** sur toutes les cartes de base uConsole. Utilisez la carte **1000M** uniquement si vous disposez du **Kit de Mise à niveau uConsole HackerGadgets** et avez besoin d'une connexion gigabit. Voir [Guide Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Ai-je besoin du Kit de Mise à niveau uConsole HackerGadgets ?**

Uniquement pour l'**Ethernet gigabit**. La carte 100M fonctionne sans le Kit de Mise à niveau. Si vous n'avez pas le kit, choisissez l'option bundle lors du paiement ou achetez le kit séparément.

**:material-chat-question:{ .faq } L'uConsole est-il inclus ?**

Non. L'appareil ClockworkPi uConsole est vendu séparément.

---

## Installation & matériel

**:material-chat-question:{ .faq } Comment fonctionne le Module d'Extension v2 ?**

Il capture le HDMI d'un appareil cible et l'affiche sur l'uConsole. Le clavier et le trackball de l'uConsole contrôlent la cible via l'émulation USB HID. Les fonctionnalités optionnelles Ethernet et carte SD étendent les flux de travail de débogage réseau et d'imagerie.

**:material-chat-question:{ .faq } Puis-je l'utiliser avec le module 4G/LTE installé ?**

Non. Le Module d'Extension v2 utilise le slot d'extension de l'uConsole et **ne peut pas** être utilisé en même temps que le module 4G ou LTE.

**:material-chat-question:{ .faq } De quels outils ai-je besoin pour l'installation ?**

Un tournevis hexagonal pour les vis de montage. Des précautions ESD sont recommandées.

**:material-chat-question:{ .faq } L'installation est-elle réversible ?**

Oui. Retirez le Module d'Extension v2 et réinstallez votre module 4G/LTE d'origine si nécessaire.

---

## Compatibilité

**:material-chat-question:{ .faq } Quels modèles d'uConsole sont compatibles ?**

Compatible avec les appareils uConsole disposant du slot d'extension standard. Vérifiez les spécifications de votre appareil pour confirmer.

**:material-chat-question:{ .faq } Quels appareils cibles puis-je contrôler ?**

Tout appareil avec sortie HDMI : ordinateurs de bureau, serveurs, SBC (Raspberry Pi, etc.), systèmes embarqués, PC industriels, et plus encore.

**:material-chat-question:{ .faq } La cible a-t-elle besoin d'un logiciel spécial ?**

Non. Le KVM utilise l'émulation USB HID — aucun pilote requis sur la cible pour le clavier et la souris. En savoir plus sur la [technologie KVM basée sur USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Puis-je contrôler plusieurs cibles à la fois ?**

Une cible à la fois pour le KVM. Changez de cible en déplaçant les câbles HDMI et USB.

---

## Contrôle & fonctionnalités

**:material-chat-question:{ .faq } Puis-je transférer des fichiers via la carte SD ?**

Oui. Le Module d'Extension v2 prend en charge la lecture/écriture de carte SD avec commutation hôte/cible via l'application Openterface. Voir [Guide Carte SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Prend-il en charge l'accès au niveau BIOS ?**

Oui. L'USB HID direct permet un accès complet au BIOS/UEFI sans dépendances réseau.

**:material-chat-question:{ .faq } Qu'en est-il du module v1 hérité ?**

Le module de première génération 37 × 77 mm (sans Ethernet/SD) est documenté dans [Documentation v1 héritée](/products/kvmext/v1/).

---

## Vidéo & audio

**:material-chat-question:{ .faq } Quelles résolutions vidéo sont prises en charge ?**

- **Entrée** : Jusqu'à 4K @ 30 Hz (RGB/YCBCR444) ou 4K @ 60 Hz (YCBCR420) via HDMI
- **Sortie** : 1080p @ 60 Hz sur l'écran de l'uConsole

**:material-chat-question:{ .faq } Quelle est la latence vidéo ?**

Moins de **70 ms** — adapté à l'accès au BIOS, à la maintenance et aux diagnostics.

**:material-chat-question:{ .faq } L'audio est-il pris en charge ?**

Oui. L'audio intégré HDMI passe par les haut-parleurs de l'uConsole.

---

## Dépannage

**:material-chat-question:{ .faq } Aucun signal vidéo**

- Vérifiez les connexions HDMI aux deux extrémités
- Vérifiez que la cible est alimentée et émet via HDMI
- Essayez un autre câble HDMI
- Redémarrez Openterface QT

**:material-chat-question:{ .faq } Le clavier ou la souris ne fonctionnent pas**

- Confirmez le câble USB du module d'extension vers la cible
- Éteignez complètement l'uConsole, attendez 10 secondes, allumez, réessayez
- Réinstallez Openterface QT (build arm64 pour votre uConsole)
- Signalez votre distribution Linux et votre module CM4 sur [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) ou [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Le logiciel a été difficile à installer**

Essayez les GitHub Releases (Option 1) ou le dépôt communautaire ClockworkPi (Option 3) dans [Configuration logicielle](/products/kvmext/software-setup/). Rejoignez [Discord](https://openterface.com/discord) pour une aide étape par étape.

**:material-chat-question:{ .faq } Le port de commutation USB ne fonctionne pas**

Assurez-vous d'être sur une version récente d'Openterface QT. Basculez l'accès USB dans l'application hôte. Si le problème persiste, ouvrez un ticket sur [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } Le HDMI s'affiche uniquement dans un cadre / pas de menu des paramètres de l'application**

Mettez à jour vers la dernière version d'Openterface QT. Consultez [Configuration logicielle](/products/kvmext/software-setup/) et les fils de discussion communautaires sur Discord pour les paramètres d'affichage spécifiques à l'uConsole.

**:material-chat-question:{ .faq } L'application ne détecte pas le module**

- Réinsérez la carte dans le slot d'extension
- Redémarrez l'uConsole
- Réinstallez Openterface QT

---

## Plus

**:material-chat-question:{ .faq } Le logiciel est-il open source ?**

Oui. Les applications hôtes Openterface sont open source sur [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Où puis-je obtenir de l'aide ?**

- **E-mail** : [support@openterface.com](mailto:support@openterface.com)
- **Discord** : [Rejoignez notre communauté](https://openterface.com/discord)
- **GitHub** : [Signaler des problèmes](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
