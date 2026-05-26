---
title: "KeyMod Tutoriel - Saisie vocale"
description: Utilisez la voix au clavier avec KeyMod. Prend en charge la reconnaissance vocale du système, l'IA Whisper sur l'appareil et plusieurs langues. Convertissez…
keywords: "KeyMod saisie vocale, synthèse vocale, Whisper, saisie vocale, clavier mains libres"
---

# 6. Saisie vocale

Convertissez votre discours en frappes envoyées à l'ordinateur cible : saisie mains libres et accessibilité.

## Comment ça marche

1. Appuyez sur le **microphone** button
2. Dites ce que vous voulez taper
3. Votre discours est converti en texte
4. Le texte est envoyé sous forme de frappes au clavier à l'ordinateur cible

## Moteurs STT

| Moteur | Comment ça marche | Configuration |
|---|---|---|
| **Reconnaissance du système** | Utilise la reconnaissance vocale intégrée du Android | Nécessite Google Saisie vocale |
| **Whisper** | Transcription IA sur appareil ou dans le cloud | Définissez la clé API dans Paramètres > Saisie vocale |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Saisie vocale — zone de transcription, cibles, historique et micro. Configurez la clé API dans Paramètres > Saisie vocale.</em></p>
</div>

## Détection du silence et pause automatique

Les deux moteurs disposent d'une détection automatique du silence qui met en pause l'enregistrement lorsque vous arrêtez de parler (délai d'expiration du silence de 2,0 secondes par défaut). Activez/désactivez la pause automatique dans la vue Saisie vocale.

### Dépannage de la détection de silence

| Symptôme | Solutions |
|---|---|
| **L'enregistrement continue lorsque vous ne parlez pas** | Cochez la case Pause automatique en cas de silence. Réduisez le bruit de fond. Parlez clairement et près du microphone. |
| **L'enregistrement s'arrête immédiatement** | Parlez plus fort ou réduisez le délai de détection du silence. |

## Mini-barre d'outils (Android)

| Button | Ce qu'il fait |
|---|---|
| **Copie** | Copier le texte transcrit dans le presse-papiers |
| **Envoi automatique** | Envoyer automatiquement le texte après la transcription |
| **Retour de ligne automatique** | Ajoutez une touche Entrée après l'envoi de |
| **AI Affiner** | Envoyer le texte transcrit à l'IA pour amélioration |

## Le texte vocal n'est pas envoyé

Vérifiez l'état de la connexion. Le "Envoyer" button est désactivé lorsqu'il n'est pas connecté.

## Prochaines étapes

- **[← Macros](05-macros.md)** — Séquences de touches automatisées
- **[AI Integration →](07-ai.md)** — Affinement du texte et assistant de commande assistés par l'IA