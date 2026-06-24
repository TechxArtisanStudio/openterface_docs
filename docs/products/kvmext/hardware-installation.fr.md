---
title: "Installation matérielle | Module d'extension v2"
description: "Installez le module d'extension KVM v2 Openterface uConsole dans le slot d'extension. Choisissez votre carte Ethernet et connectez HDMI et USB à votre cible."
keywords: "installation extension KVM v2, configuration matérielle uConsole, slot d'extension, installation carte Ethernet"
---

# **Installation matérielle** | Module d'extension v2

## Vue d'ensemble

Le module d'extension v2 s'insère dans le **slot d'extension** de l'uConsole (le même slot utilisé par le module 4G/LTE). Il ne peut pas être utilisé en même temps que le module 4G ou LTE — choisissez la fonctionnalité cellulaire **ou** KVM.

## Ce dont vous aurez besoin

- [Contenu du paquet](/products/kvmext/whats-in-the-box/) vérifié avant l'installation
- Carte Openterface Extension Module v2
- **Une carte Ethernet** (100M ou 1000M — voir [Guide Ethernet](/products/kvmext/ethernet/))
- Cache du slot d'extension (inclus)
- Clé hexagonale pour les vis de montage
- Protection ESD (bracelet antistatique ou surface mise à la terre) — recommandé

## Étapes d'installation

### **1. Éteindre**

Éteignez l'uConsole et déconnectez toute alimentation et tous les câbles.

### **2. Retirer le module existant**

Si un module 4G/LTE ou un autre module d'extension est installé :

- Utilisez une clé hexagonale pour retirer les deux vis de montage.
- Soulevez la carte **tout droit** pour éviter de plier les contacts à ressort.
- Rangez le module d'origine et les vis en lieu sûr si vous prévoyez de le réinstaller plus tard.

### **3. Choisir votre carte Ethernet**

Avant d'insérer la carte principale, décidez quelle carte installer :

| Carte | Quand l'utiliser |
|------|------------------|
| **100M** | Toutes les cartes de base uConsole — compatibilité universelle |
| **1000M** | Uniquement si vous disposez du **kit de mise à niveau HackerGadgets uConsole** et avez besoin du gigabit |

Voir [Guide Ethernet](/products/kvmext/ethernet/) pour tous les détails.

### **4. Installer le module d'extension v2**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Insérez fermement le module d'extension v2 dans le slot d'extension.
- Assurez-vous que les contacts à ressort s'alignent uniformément sur tous les pads.
- Réinsérez les vis de montage et serrez **doucement** — ne serrez pas excessivement.

### **5. Vérifier l'installation**

La carte doit être **plate et stable** sans tremblement notable. Tous les contacts à ressort doivent appuyer uniformément.

### **6. Installer le cache du slot d'extension**

Réinstallez le cache du slot d'extension pour protéger le module et conserver l'apparence de l'uConsole.

??? note "Orientation du texte sur le cache du slot d'extension"
    Le texte sur le cache peut apparaître à l'envers depuis certains angles de vue. Il est orienté pour être lisible lorsque vous tenez l'uConsole et regardez les ports par-dessus — la position naturelle pendant l'utilisation.

---

**Étapes suivantes**

1. [Configuration logicielle](/products/kvmext/software-setup/) — installez l'application hôte Openterface sur votre uConsole
2. [Connexion à la cible](/products/kvmext/connect-to-target/) — câblage HDMI + USB
3. [Fonctionnalités et spécifications](/products/kvmext/features/) — spécifications techniques complètes

## Installation v1 héritée

Le module de première génération (37 × 77 mm) utilisait des rondelles pour compenser l'épaisseur du PCB. Voir [Legacy v1 — Installation matérielle](/products/kvmext/v1/hardware-installation/).
