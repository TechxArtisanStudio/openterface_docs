---
title: "Connexion à l'appareil cible | Module d'extension v2"
description: "Connectez votre appareil cible au module d'extension KVM v2 d'Openterface uConsole via HDMI, USB HID et Ethernet optionnel pour le débogage réseau."
keywords: "configuration connexion KVM, appareil cible, HDMI, USB HID, débogage Ethernet, uConsole KVM v2"
---

# **Connexion à l'appareil cible** | Module d'extension v2

## Aperçu de la connexion

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Le module d'extension v2 se connecte à votre cible via **HDMI** (vidéo/audio) et **USB** (émulation clavier/souris). Utilisez éventuellement **Ethernet** pour SSH, la gestion web ou la capture de journaux pendant que le KVM gère l'affichage et les entrées.

## Prérequis

1. [Installation du matériel](/products/kvmext/hardware-installation/) — module inséré dans le slot d'extension
2. [Configuration logicielle](/products/kvmext/software-setup/) — Openterface QT installé sur l'uConsole
3. [Carte Ethernet choisie](/products/kvmext/ethernet/) (si vous utilisez les fonctionnalités réseau)

## Étapes de connexion

### **Contrôle USB (requis pour le KVM)**

Connectez le **port Type-C** de la carte d'extension au port USB de l'appareil cible. Cela émule le clavier et la souris (USB HID).

L'appareil cible n'a **pas** besoin de pilotes ni de logiciel supplémentaire pour le contrôle HID.

### **Entrée vidéo (requise pour le KVM)**

Connectez la sortie HDMI de la cible à l'entrée HDMI du module d'extension :

- Câble HDMI standard pour les sorties HDMI
- Convertisseur **VGA-vers-HDMI** pour VGA (assurez-vous que l'alimentation USB du convertisseur est connectée)
- Autres adaptateurs pour DVI, DisplayPort, Micro HDMI selon les besoins

### **Ethernet (optionnel — débogage réseau)**

Si vous avez installé une carte réseau :

- Connectez un câble Ethernet de la carte à votre appareil cible ou à un commutateur réseau
- Utilisez l'uConsole pour SSH, l'interface web ou la capture de journaux en parallèle du KVM
- Consultez le [Guide Ethernet](/products/kvmext/ethernet/) pour la configuration 100M vs 1000M

### **Carte SD (optionnel — image disque et fichiers)**

Insérez une carte microSD dans le slot du module. Utilisez l'application hôte pour basculer l'accès entre l'uConsole et la cible. Consultez le [Guide carte SD](/products/kvmext/sd-card/).

## Commutation partagée USB 2.0

L'application hôte peut basculer un port USB 2.0 partagé entre l'uConsole et la cible — utile pour les clés USB et les flux de maintenance sans débrancher les câbles.

## Tester la connexion

1. Allumez l'uConsole et démarrez l'appareil cible
2. Lancez Openterface QT
3. Confirmez que la vidéo HDMI apparaît sur l'écran de l'uConsole
4. Testez le clavier, le trackball et le passage audio
5. Si vous utilisez la commutation SD ou USB, testez le montage/la commutation dans l'application hôte

## Connexes

- [Cas d'utilisation](/products/kvmext/use-cases/) — scénarios IT terrain, homelab, débogage embarqué
- [FAQ](/products/kvmext/faq/) — dépannage
