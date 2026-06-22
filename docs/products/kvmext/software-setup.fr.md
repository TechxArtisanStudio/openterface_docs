---
title: "Configuration logicielle | Module d'extension v2"
description: "Installez et configurez l'application hôte Openterface sur votre uConsole pour le module d'extension KVM v2 — capture HDMI, USB HID, commutation de carte SD et partage USB."
keywords: "installation application Openterface, configuration logicielle uConsole, extension KVM v2, openterfaceqt"
---

# **Configuration logicielle** | Module d'extension v2

## Aperçu de l'installation

L'application hôte Openterface permet à votre uConsole de fonctionner comme une interface KVM avec capture HDMI, contrôle USB HID, **commutation de carte SD** et **partage de port USB** entre l'hôte et la cible.

!!! note "Prérequis"
    - **uConsole (hôte)** : application Openterface QT requise
    - **Appareil cible** : aucune application nécessaire — Windows, macOS, Linux, Android, iOS pris en charge pour KVM
    - **Vidéo** : câble HDMI standard ; les convertisseurs alimentés prennent en charge VGA, DP et autres formats
    - **Backend recommandé** : **GStreamer** pour les meilleures performances GPU arm64 (Kali Linux peut avoir un support GStreamer limité)

## Méthodes d'installation

### **Option 1 : Versions GitHub (recommandé pour arm64)**

1. Visitez [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Téléchargez le dernier `.deb` pour **arm64** (par ex. `openterfaceqt_*_arm64.deb`).
3. Installez :
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Option 2 : Flatpak**

Suivez le [Guide d'installation Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Option 3 : Dépôt communautaire (ClockworkPi Bookworm)**

Maintenu par Rex pour les images ClockworkPi :

1. **Ajouter le dépôt** :
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Installer** :
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Notes sur le dépôt"
    Les commandes nécessitent `sudo`. Le dépôt cible les paquets arm64 Bookworm — vérifiez la compatibilité avec le système d'exploitation de votre uConsole avant l'installation.

## Rappels importants

!!! tip "Alimentation et première configuration"
    - Gardez l'uConsole chargé ou sur une alimentation stable — une batterie faible peut provoquer des problèmes de connexion.
    - Si le contrôle clavier/souris échoue à la première tentative :
        1. Éteignez complètement l'uConsole.
        2. Attendez au moins 10 secondes.
        3. Allumez et réessayez.

!!! tip "Débit en bauds de communication série"
    Réglez le débit en bauds sur **9600** pour l'utilisation série — l'uConsole peut ne pas soutenir fiablement 115200.

## Utilisation

### **Démarrer une session KVM**

1. Lancez Openterface QT sur votre uConsole.
2. L'application détecte automatiquement le module d'extension v2.
3. Connectez la cible via HDMI et USB.
4. Utilisez le clavier et le trackball de l'uConsole pour contrôler la cible.

### **Fonctionnalités de contrôle**

- **Clavier** : émulation complète incluant les touches multimédia
- **Souris** : positionnement absolu et relatif
- **Audio** : passthrough audio HDMI vers les haut-parleurs de l'uConsole
- **Transfert de texte** : collez des noms d'utilisateur, mots de passe et extraits sous forme de frappes simulées
- **Commutation USB** : partagez le stockage USB entre l'uConsole et la cible via l'application hôte — voir [Connexion à la cible](/products/kvmext/connect-to-target/)
- **Commutation de carte SD** : montez la carte SD sur l'hôte ou la cible via l'application hôte — voir [Guide carte SD](/products/kvmext/sd-card/)

### **Dépannage de l'installation logicielle**

Si l'application est difficile à installer ou si la souris/le clavier ne fonctionnent pas :

- Confirmez que vous avez installé la version **arm64** sur votre uConsole CM4/module
- Rejoignez [Discord](https://openterface.com/discord) pour une aide en temps réel
- Signalez les problèmes sur [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Connexes

- [Connexion à la cible](/products/kvmext/connect-to-target/)
- [Guide carte SD](/products/kvmext/sd-card/)
- [FAQ](/products/kvmext/faq/)
