---
title: "Fonctionnalités et spécifications"
description: "Fonctionnalités KeyMod Series : clavier et souris HID Bluetooth, connexion dual USB + Bluetooth, profils personnalisés, macros, modes manette, commandes de présentation, hub de raccourcis. Application mobile open source pour Android et iOS."
keywords: "fonctionnalités KeyMod Series, émulateur HID, clavier Bluetooth, clavier USB, boutons programmables, manette, macro, open source, CH9329, hub de raccourcis, mode présentation"
---

# **Fonctionnalités et spécifications** | Openterface KeyMod Series

## Statut actuel

KeyMod est en développement actif avec une [bêta publique](/tutorial/keymod/) disponible pour Android. Abonnez-vous sur la [page produit](/products/keymod/) pour rester informé des notifications de lancement.

> **Note :** Les fonctionnalités, spécifications et design sont susceptibles d'être modifiés pendant le développement.

## Variantes de produit

- **Version Mini** — Connecteur Type C mâle uniquement
- **Version Plus** — Connecteur Type A mâle et connecteur Type C femelle

## Fonctionnalités principales

### **Téléphone comme clavier et pavé tactile**

KeyMod transforme votre téléphone en une console clavier et pavé tactile portables. Utilisez-le lorsqu'un clavier et une souris complets ne sont pas disponibles, ou lorsque vous voulez un flux de travail plus rapide que le changement d'appareils. Idéal pour les ordinateurs d'affichage extérieur, les lecteurs d'enseignes LED, les bornes, les téléviseurs intelligents et les décodeurs.

### **Connexion dual : USB + Bluetooth**

- **USB** — Connexion filaire plug-and-play pour une entrée fiable et à faible latence
- **Bluetooth** — Configuration sans fil lorsque le scénario le permet ; gardez votre configuration légère et portable

KeyMod est conçu pour le contrôle local pratique des appareils au quotidien, et non comme remplacement du bureau à distance.

### **Application mobile open source**

Avec notre application mobile open source, vous pouvez :

- **Clavier et souris (Basic)** — Clavier plein écran avec répétition par appui long, aperçu des touches et pavé numérique
- **Clavier et souris Pro** — Disposition composite avec barres Shortcut Hub, clavier divisé et IME
- **Mode présentation** — Télécommande de diapositives avec minuteur pour Google Slides et d'autres applications
- **Manette** — Contrôleur virtuel avec dispositions prédéfinies personnalisables et prise en charge multi-pavé tactile
- **Hub de raccourcis** — Raccourcis clavier basés sur des profils pour les outils créatifs et de développement (Blender, KiCAD, Photoshop, VS Code), avec création, import et export
- **Macros** — Séquences de touches programmables avec délais
- **Entrée vocale** — Dictée vocale avec IA (Whisper API)
- **Terminal** — SSH via Bluetooth pour l'accès à distance aux commandes
- **Agent** — Interaction directe pilotée par l'IA avec HID ou commandes SSH pour contrôler un autre ordinateur

L'application **KeyCmd** se concentre sur **Android** et **iOS** (y compris iPadOS). Elle fonctionne également avec **KVM-GO** via USB ou Bluetooth. Nous développons également le contrôle desktop avec des logiciels **Windows et macOS** dans notre écosystème Openterface plus large.


### **Vrai HID matériel**

Construit sur le noyau HID éprouvé d'Openterface Mini-KVM. Émulation clavier et souris basée sur le matériel — aucune installation logicielle requise sur l'appareil cible.

### **Open source**

KeyMod est un matériel et logiciel ouverts. Nous publierons les schémas, fichiers PCB, firmware, logiciels et BOM au fur et à mesure de l'évolution du projet. [Rejoignez notre communauté](/discord) pour contribuer et rester informé.

## Spécifications techniques

### **Connectivité**

- **USB** : La version Mini utilise un connecteur Type C mâle ; la version Plus utilise un connecteur Type A mâle et un connecteur Type C femelle
- **Bluetooth** : Clavier et souris HID
- **Cible** : Aucune installation logicielle requise

### **Matériel clé**

- Puce CH32V208 (protocole compatible CH9329)
- Connecteur(s) USB : la version Mini utilise le Type C mâle ; la version Plus utilise le Type A mâle et le Type C femelle
- MCU
- Bouton(s) programmable(s)

### **Fonctionnalités d'entrée**

- Émulation complète clavier et souris (HID)
- Profils d'entrée personnalisés (niveaux Basic et Pro)
- Macros et raccourcis clavier
- Hub de raccourcis avec profils spécifiques aux applications
- Manette avec dispositions prédéfinies (schéma v7)
- Commandes de présentation avec minuteur de diapositives
- Dictée vocale avec IA
