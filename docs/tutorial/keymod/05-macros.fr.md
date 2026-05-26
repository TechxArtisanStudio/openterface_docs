---
title: "KeyMod Tutoriel - Macros"
description: Enregistrez et rejouez des séquences de touches automatisées avec KeyMod macros, y compris les modificateurs, les délais et la planification. Documentation…
keywords: "KeyMod macros, frappes automatisées, planificateur de macros, jetons de macro, séquences de touches"
---

# 5. Macros

Enregistrez et rejouez des séquences de touches automatisées en un seul clic.

## Qu'est-ce qu'une macro ?

Une macro est une **séquence enregistrée de frappes** que vous pouvez rejouer. Par exemple :
- Tapez votre signature électronique en un seul clic
- Envoyez `Ctrl+Shift+Esc` suivi de `Alt+D` en séquence
- Automatisez une séquence de commandes en plusieurs étapes avec des délais entre les étapes

## Syntaxe des jetons de macro

| Jeton | Signification |
|---|---|
| `<CTRL>` ... `</CTRL>` | Maintenir/relâcher le contrôle |
| `<SHIFT>` ... `</SHIFT>` | Maintenir/relâcher Shift |
| `<ALT>` ... `</ALT>` | Maintenir/relâcher Alt/Option |
| `<CMD>` ... `</CMD>` | Maintenir/relâcher Commande/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Clés spéciales |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Touches fléchées |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Touches de navigation |
| du 27 au 28 | Touches de fonction |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pauses |

**Exemple:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Cela ouvre un terminal (Ctrl+Alt+T), attend 1 seconde, puis tape `ls -la` et appuie sur Entrée.

## Création d'une macro

1. Accédez au mode **Macros**
2. Appuyez sur **"+"** pour créer une nouvelle macro
3. Entrez un **nom/étiquette de macro**
4. Créez la séquence de commandes macro à l'aide du champ de texte et des puces de jeton à insertion rapide
5. Ajustez le **Send Char Interval** (délai entre les frappes en millisecondes)
6. Appuyez sur **"Enregistrer"**

## Prochaines étapes

- **[← Shortcut Hub](04-shortcuts.md)** — Raccourcis clavier basés sur le profil
- **[Voice Input →](06-voice-input.md)** — Transcription voix-clavier