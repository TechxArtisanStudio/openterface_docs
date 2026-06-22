---
title: "Guide de la carte SD | Extension Module v2"
description: "Utilisez la lecture/écriture de la carte SD sur l'Extension Module v2 KVM uConsole d'Openterface. Basculez l'accès entre l'uConsole et la cible pour le flashage d'images, les journaux et le transfert de fichiers."
keywords: "Carte SD, microSD, extension KVM v2, flashage d'images, transfert de fichiers, uConsole"
---

# **Guide de la carte SD** | Extension Module v2

L'Extension Module v2 inclut la **lecture/écriture de carte SD** afin que vous puissiez flasher des images, exporter des journaux et transférer des fichiers depuis votre uConsole sans avoir à emporter un lecteur de carte externe.

## Aperçu

Le module fournit un emplacement microSD partagé entre l'**uConsole (hôte)** et l'**appareil cible** — un concept similaire au flux de travail de commutation MicroSD du KVM-GO, mais intégré au module d'extension uConsole.

!!! note "Un seul côté à la fois"
    La carte SD est montée soit sur l'uConsole **soit** sur la cible, jamais sur les deux simultanément. Basculez l'accès à l'aide de l'application hôte Openterface.

## Installer la carte SD

Insérez la carte microSD fermement jusqu'à ce qu'elle soit correctement enclenchée dans l'emplacement du module.

## Contrôle via l'application hôte

Utilisez **Openterface QT** sur votre uConsole pour :

- Basculer l'accès SD entre l'**hôte** (uConsole) et la **cible**
- Écrire des images OS sur la carte depuis l'uConsole
- Exporter des journaux ou transférer des fichiers sans retirer la carte

Assurez-vous d'avoir terminé la [Configuration logicielle](/products/kvmext/software-setup/) avant d'utiliser les fonctionnalités SD.

## Flux de travail typiques

| Flux de travail | Description |
|-----------------|-------------|
| **Création d'images OS** | Flasher des images Raspberry Pi, de cartes embarquées ou d'appareils depuis l'uConsole |
| **Exportation de journaux** | Récupérer les journaux d'une cible sur la carte, puis les lire sur l'uConsole |
| **Transfert de fichiers** | Déplacer des configurations ou des scripts entre l'uConsole et la cible lorsque le réseau est indisponible |

## Conseils de sécurité

- **Éjecter/démonter** dans l'application hôte avant de retirer physiquement la carte
- Basculez vers le bon côté (hôte ou cible) avant les opérations de lecture/écriture
- Utilisez des cartes microSD de qualité pour les charges de travail de flashage

## Articles connexes

- [Connexion à la cible](/products/kvmext/connect-to-target/)
- [Configuration logicielle](/products/kvmext/software-setup/)
- [Guide de commutation MicroSD du KVM-GO](/products/kvmgo/microsd-switch/) — concept de commutation similaire sur le KVM-GO
