---
title: "Fonctionnalités et spécifications | Module d'extension v2"
description: "Aperçu complet du module d'extension KVM Openterface uConsole v2 : KVM HDMI, double Ethernet, carte SD, commutation USB et spécifications techniques."
keywords: "fonctionnalités extension KVM v2, uConsole KVM, KVM HDMI, extension Ethernet, carte SD, KVM portable, spécifications techniques"
---

# **Fonctionnalités et spécifications** | Module d'extension v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Fonctionnalités principales

- **Contrôle KVM direct** : Affichez et contrôlez un appareil cible via l'entrée HDMI et l'émulation clavier/souris USB HID — idéal pour l'accès au BIOS, l'installation de l'OS et la récupération de serveurs sans écran (headless).
- **Prise en charge de double carte réseau** : Les cartes Ethernet **100M** et **1000M** sont incluses. Utilisez la 100M sur toutes les cartes de base uConsole ; utilisez la 1000M avec le [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) pour un réseau gigabit.
- **Lecture/Écriture de carte SD** : Écrivez des images, exportez des journaux et transférez des fichiers depuis votre uConsole sans lecteur de carte externe.
- **Commutation USB 2.0 partagée** : Basculez l'accès USB entre la uConsole et l'appareil cible pour un débogage et une maintenance flexibles.
- **Faible latence** : Latence vidéo inférieure à **70 ms** avec une sortie **1080p @ 60 Hz** vers l'écran de la uConsole.
- **Portable et alimenté par le slot** : Design compact de **77,3 × 34,7 mm**, alimenté par le slot d'extension de la uConsole — aucun adaptateur d'alimentation externe requis.
- **Aligné sur l'Open Source** : Basé sur la plateforme KVM Openterface avec des applications hôtes ouvertes et le support de la communauté.

## Spécifications techniques

| Élément | Spécification |
|------|---------------|
| **Nom du produit** | Openterface uConsole KVM Extension Module v2 |
| **Dimensions de la carte** | 77,3 × 34,7 mm |
| **Entrée vidéo** | HDMI jusqu'à 4K @ 30 Hz (RGB/YCBCR444) ou 4K @ 60 Hz (YCBCR420) |
| **Sortie vidéo** | 1080p @ 60 Hz vers l'écran de la uConsole |
| **Latence** | < 70 ms |
| **Contrôle KVM** | Émulation de clavier et de souris USB HID |
| **Réseau** | 100M fonctionne sur toutes les cartes de base uConsole ; 1000M nécessite le uConsole Upgrade Kit |
| **Carte SD** | Lecture/écriture avec commutation hôte/cible via l'application hôte |
| **Partage USB** | Commutation partagée USB 2.0 Full Speed (12 Mbps) |
| **Plateformes cibles** | Windows, macOS, Linux, systèmes x86, SBC ARM |
| **Alimentation** | Alimenté par le slot d'extension de la uConsole |
| **Alimentation externe** | Non requise |

### Émulation complète du clavier et de la souris

- **USB HID** : Positionnement absolu et relatif de la souris, prise en charge complète du clavier, touches multimédias.
- **Connexion** : Liaison USB vers la cible via le port Type-C de la carte d'extension.

### Vidéo et audio

- **Entrée** : Jusqu'à 4K via HDMI (voir le tableau ci-dessus pour les détails des modes)
- **Sortie** : Full HD 1080p @ 60 Hz avec une latence inférieure à 70 ms
- **Affichage** : Utilise l'écran intégré de la uConsole
- **Compression** : Prise en charge de YUV et MJPEG
- **Compatibilité** : VGA, DVI, Micro HDMI (via adaptateurs)
- **Audio** : Transmission de l'audio intégré HDMI

### Connectivité et alimentation

- **Alimentation** : Tire son alimentation directement du slot d'extension de la uConsole
- **Logiciel cible** : Aucune installation requise sur l'appareil cible

## Articles connexes

- [Guide Ethernet](/products/kvmext/ethernet/) — choisissez entre la carte 100M et 1000M
- [Guide de la carte SD](/products/kvmext/sd-card/) — création d'images et transfert de fichiers
- [Options d'achat](/products/kvmext/purchase-options/) — Extension seule vs bundle Upgrade Kit
- [Spécifications de l'ancienne v1](/products/kvmext/v1/features/) — module de première génération
