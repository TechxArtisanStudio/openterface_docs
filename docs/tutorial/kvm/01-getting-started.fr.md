---
title: "Tutoriel KVM 01 — Premiers pas"
description: "Public : Débutants — utilisateurs découvrant les appareils KVM Openterface Documentation Openterface : configuration, FAQ et dépannage KVM-over-USB. Openterface"
---

# Tutoriel KVM 01 — Premiers pas

**Public :** Débutants — utilisateurs découvrant les appareils KVM Openterface

---

## 1. Qu'est-ce que le KVM-over-USB ?

Un appareil KVM (Keyboard, Video, Mouse) se place entre votre **ordinateur hôte** (votre poste de travail) et un **ordinateur cible** (serveur, mini PC, appareil embarqué). Il :

- **Capture** la sortie vidéo HDMI de la cible (et l'audio, si disponible)
- **Transmet** vos entrées clavier et souris via émulation HID
- Le tout via un seul câble USB — aucun réseau requis

C'est ce qui distingue les appareils KVM des logiciels de bureau à distance : vous pouvez contrôler la cible même en **BIOS/UEFI**, au démarrage ou lorsque le système d'exploitation a planté.

### Appareils KVM Openterface

| Appareil | Format | Caractéristique clé |
|--------|------------|-------------|
| **Mini-KVM** | Dongle USB compact | KVM-over-USB de bureau |
| **KVM-Go** | Portable style boîte à outils | KVM nomade avec câbles intégrés, **prise en charge iPadOS via BLE** |
| **uConsole KVM Extension** | Module interne | KVM intégré pour ClockworkPi uConsole |

> Vous cherchez **KeyMod** (émulateur clavier et souris uniquement, sans vidéo) ? Consultez le [Tutoriel KeyMod](../../keymod/index.md).

---

## 2. Ce dont vous avez besoin

### Matériel

- **Appareil KVM Openterface** — Mini-KVM, KVM-Go ou uConsole KVM Extension
- **Ordinateur hôte** — macOS, Windows, Linux ou Android
- **Ordinateur cible** — tout ordinateur avec sortie HDMI
- **Câble HDMI** — de la sortie HDMI de la cible à l'entrée HDMI du KVM
- **Câble USB** — du KVM à votre ordinateur hôte (alimentation et données)

### Optionnel

- **Câble de commutation USB** — du KVM au port USB de l'appareil cible (pour émulation clavier/souris)
- **Clavier et souris** — branchés sur le port USB commutable du KVM pour contrôler l'hôte ou la cible

---

## 3. Installation

### Application hôte

| Plateforme | Application | Téléchargement |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) ou [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) ou [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **KVM-Go uniquement** |

### Exigences Android

L'application Android nécessite :

- **Android 8.0 (API 26)** ou ultérieur
- **Prise en charge USB OTG** — la plupart des smartphones modernes la supportent (Samsung, Google Pixel, OnePlus). Vérifiez en connectant une clé USB avec un adaptateur OTG
- **Câble ou adaptateur USB OTG** pour connecter l'appareil KVM à votre téléphone

### Exigences iPadOS

L'application iPadOS nécessite :

- **iPadOS 17.0** ou ultérieur
- **Appareil KVM-Go** — iPadOS se connecte au dongle KVM-Go via **Bluetooth Low Energy (BLE)** pour l'entrée clavier/souris, et la carte de capture USB pour la vidéo
- **Autorisations Caméra et Microphone** — nécessaires pour l'aperçu vidéo et la surveillance audio de la carte de capture
- **Autorisation Bluetooth** — requise pour découvrir et connecter le dongle KVM-Go pour l'entrée HID
- **Autorisation Photothèque** (optionnelle) — pour enregistrer captures d'écran et enregistrements dans l'app Photos

### Autorisations macOS

Au premier lancement, macOS demandera :

| Autorisation | Pourquoi |
|-----------|-----|
| **Caméra** | Capture la vidéo de la puce de capture HDMI |
| **Microphone** | Capture l'audio de la cible (si activé) |
| **Accessibilité** | Requise pour le contrôle souris HID en mode Relatif |

### Autorisations Linux

- Ajoutez votre utilisateur aux groupes `dialout` et `video` : `sudo usermod -a -G dialout,video $USER`
- Installez les règles udev pour l'accès aux périphériques
- **Conflit BrlTTY :** Supprimez `brltty` ou mettez la puce série sur liste noire — voir [Dépannage](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- L'installateur inclut le pilote série CH340. Pour les builds portables, installez-le séparément.

---

## 4. Connexion du matériel

┌─────────────┐                        ┌──────────────────┐
│   CIBLE     │─── Câble HDMI ────────▶│  Openterface     │
│  ORDINATEUR │                        │  Appareil KVM    │
└─────────────┘                        │                  │
                                       │  ◄── Câble USB ──│── Câble commutation USB ──▶ Port USB cible
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │ ORDINATEUR HÔTE │
                                       │  (cette app)     │
                                       └──────────────────┘
1. Connectez la **sortie HDMI** de la cible à l'**entrée HDMI** du KVM
2. Connectez l'**USB** du KVM à un **port USB de votre ordinateur hôte**
3. (Optionnel) Connectez le câble de commutation USB du KVM au port USB de la cible
4. (Optionnel) Branchez votre clavier/souris sur le port USB commutable du KVM
5. **Allumez** l'appareil cible

### Détection de l'appareil

Le KVM s'énumère comme plusieurs périphériques USB :
- **Capture vidéo** (MS2109/MS2109S/MS2130S) — apparaît comme une webcam
- **Série** (CH9329 ou CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — utilisé pour les opérations firmware

### Connexion via téléphone Android

Avec l'application Android, la chaîne de connexion utilise USB OTG :

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC cible    │               │   Appareil KVM    │
│  (écran)     │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │ Téléphone Android│
                               │  (Openterface)   │
                               └──────────────────┘
```

Ordre de connexion pour Android :

1. **HDMI :** Connectez la sortie HDMI de la cible à l'**entrée** HDMI du KVM
2. **USB (cible) :** Connectez le port USB de la cible au port USB du KVM — transporte les signaux souris/clavier
3. **USB OTG (téléphone) :** Connectez le KVM à votre téléphone Android via câble/adaptateur USB OTG
4. **Alimentation :** Allumez l'appareil KVM (si entrée d'alimentation séparée) et l'ordinateur cible

Une fois connecté, l'aperçu vidéo passe du placeholder à l'écran en direct de la cible ; toucher l'écran du téléphone déplace le curseur sur la cible.

### Connexion via iPadOS

L'application iPadOS utilise un modèle de connexion différent : **BLE pour l'entrée** et **capture USB pour la vidéo**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Dongle KVM-Go   │
│  PC cible    │               │                   │
│  (écran)     │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   Capture USB     │ (vidéo)
                              │   BLE (FFF2)      │ (clavier/souris)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Ordre de connexion pour iPadOS :

1. **Matériel :** Branchez le dongle KVM-Go sur le port USB du PC cible et connectez l'entrée HDMI
2. **Allumez** l'ordinateur cible
3. **Ouvrez l'application** sur votre iPad et accordez les autorisations caméra, microphone et Bluetooth
4. **Appuyez sur le bouton BLE** dans la barre d'outils — l'app recherche les appareils nommés `kvm*`
5. **Appuyez sur Connecter** à côté de votre appareil KVM-Go — le bouton devient vert avec la force du signal RSSI
6. **Vérifiez :** l'aperçu vidéo affiche l'écran de la cible, toucher envoie des clics, la saisie envoie des frappes

> **Note :** L'application iPadOS ne fonctionne qu'avec **KVM-Go**. Mini-KVM et uConsole KVM Extension n'ont pas de prise en charge BLE.

---

## 5. Premier lancement

### Fenêtre principale

```
┌─────────────────────────────────────────────────────────┐
│  Barre de menus / Barre d'outils                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              ZONE D'AFFICHAGE VIDÉO                      │
│         (affiche l'écran de l'appareil cible)           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Barre d'état │ Port │ Touches │ Souris │ Résolution │ │
└─────────────────────────────────────────────────────────┘
```

### Autorisations Android

Au premier lancement, l'application Android demande :

| Autorisation | Pourquoi | Si refusée |
|---|---|---|
| **Hôte USB** | Communiquer avec le matériel Openterface | L'app ne détecte pas votre appareil KVM |
| **Caméra** | Recevoir la vidéo de la puce de capture HDMI | Pas d'aperçu vidéo |
| **Stockage** | Enregistrer captures d'écran et enregistrements | Impossible de sauvegarder les captures |

Accordez toutes les autorisations pour une fonctionnalité complète. Une boîte de dialogue système USB apparaît aussi à la détection du KVM — appuyez sur **Autoriser**.

### Autorisations iPadOS

Au premier lancement, l'application iPadOS demande :

| Autorisation | Pourquoi | Si refusée |
|---|---|---|
| **Caméra** | Recevoir la vidéo de la carte de capture HDMI | Pas d'aperçu vidéo |
| **Microphone** | Surveiller l'audio du PC cible via les haut-parleurs iPad | Pas de surveillance audio |
| **Bluetooth** | Découvrir et connecter KVM-Go pour l'entrée HID | Impossible d'envoyer clavier/souris |
| **Photothèque** | Enregistrer captures d'écran et enregistrements | Les captures restent dans le dossier Documents de l'app |

Si vous avez refusé par erreur, allez dans **Réglages > Confidentialité et sécurité** pour réactiver.

### Vérification de la connexion

- **Indicateur HDMI :** vert = signal détecté, orange = pas de signal, gris = inconnu
- **Indicateur clavier :** vert = connecté, orange = introuvable, gris = inconnu
- **Indicateur souris :** vert = connecté, orange = introuvable, gris = inconnu
- **Port série :** doit afficher un nom de port et un débit (9600 ou 115200)

Si les indicateurs sont orange ou gris, consultez [Dépannage](04-troubleshooting.md).

---

## 6. Contrôle KVM de base

### Modes souris

| Mode | Description | Idéal pour |
|------|-------------|----------|
| **Absolu** (par défaut) | Le curseur hôte mappe directement sur l'écran cible | Usage général, navigation GUI |
| **Relatif (HID)** | Les mouvements souris sont envoyés comme deltas via HID | Jeux, interaction rapide |

Basculez via l'interrupteur de la barre d'outils ou **Contrôle > Mode souris**.

### Entrée clavier

Toutes les frappes sont transmises à la cible lorsque la fenêtre de l'app est au premier plan :
- Touches standard, touches de fonction, modificateurs
- Touches spéciales : Ctrl+Alt+Suppr, Impr. écran
- **Coller vers la cible :** Envoie le texte du presse-papiers comme frappes émulées

### Commutation USB

Basculez le port USB commutable entre :
- **Hôte** — votre clavier/souris contrôle l'ordinateur hôte
- **Cible** — votre clavier/souris contrôle l'ordinateur cible

---

## 7. Prochaines étapes

- **[Opérations de base →](02-basic-operations.md)** — Souris, clavier, vidéo, audio, enregistrement
- **[Fonctionnalités avancées →](03-advanced-features.md)** — EDID, firmware, macros, scripts
- **[Dépannage →](04-troubleshooting.md)** — Problèmes courants et solutions
