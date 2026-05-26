---
title: "KeyMod Tutoriel - Système d'exploitation cible"
description: "Définissez le système d'exploitation cible de sorte que KeyMod envoie les mappages de touches corrects aux ordinateurs Windows, macOS ou Linux."
keywords: "KeyMod système d'exploitation cible, mappage des touches, touches de modification, entrée Unicode"
---

# 3. Système d'exploitation cible

KeyMod envoie des frappes qui s'adaptent au système d'exploitation de l'ordinateur cible. Une configuration correcte garantit que les bonnes clés arrivent sur la cible.

## Comment définir

Appuyez sur l'**icône du système d'exploitation** dans la barre d'en-tête pour ouvrir le sélecteur :

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Sélecteur de système d'exploitation cible : choisissez macOS, Windows ou Linux.</em></p>
</div>

> **Remarque :** Il n'y a pas encore de capture d'écran pour cela. Le sélecteur de système d'exploitation est une boîte de dialogue avec trois boutons d'icône (macOS, Windows, Linux) qui apparaît lorsque vous appuyez sur l'icône du système d'exploitation dans la barre d'en-tête.

## Ce que ça change

| Cible | Cartographie des touches |
|--------|-------------|
| **Windows** | Touche Win mappée à la touche Windows ; comportement du modificateur PC standard |
| **macOS** | Touche Win mappée à Cmd ; Alt mappé à Option ; corriger les étiquettes de raccourci |
| **Linux** | Comportement des touches Super/Meta |

Cela affecte :
- **Étiquettes de raccourci** affichées dans Shortcut Hub
- **Mappage des touches du modificateur** (comportement des touches Win)
- **Méthode de saisie Unicode** utilisée pour les caractères non-ASCII

## Caractères Unicode

Les caractères non-ASCII (chinois, japonais, emoji) nécessitent des méthodes de saisie spécifiques au système d'exploitation :

| Système d'exploitation | Méthode |
|---|---|
| **Windows** | Alt+Entrée Unicode hexadécimale du pavé numérique |
| **Linux** | Ctrl+Shift+U suivi du code hexadécimal |
| **macOS** | Option+entrée hexadécimale |

Si les caractères Unicode n'apparaissent pas correctement sur la cible, vérifiez que le système d'exploitation cible est correctement défini.

## Modes de clavier (pas de mises en page)

KeyMod propose trois modes de clavier pour la saisie :

| Mode | Comment changer |
|---|---|
| **ABC** (lettres) | Appuyez sur la touche **ABC** |
| **123** (chiffres) | Appuyez sur la touche **123** |
| **!?#** (symboles) | Appuyez sur la touche **!?#** |

Il s'agit de bascules de méthode de saisie dans l'application, et non de dispositions de clavier physiques. KeyMod envoie actuellement des scancodes standard USB HID (base QWERTY américaine). Si vous utilisez un clavier physique non américain sur la cible, vous constaterez peut-être de légères incohérences de caractères pour les symboles situés aux mêmes positions clés.

## Prochaines étapes

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Saisie, modificateurs, touchpad et saisie de texte
- **[Shortcut Hub →](04-shortcuts.md)** — Raccourcis clavier basés sur le profil