---
title: "KeyMod Tutoriel - Dépannage"
description: "Résolvez les problèmes courants : problèmes de connexion, clés non enregistrées, échecs de couplage Bluetooth, erreurs de saisie vocale, etc. Problèmes…"
keywords: "KeyMod dépannage, KeyMod connexion impossible, KeyMod problèmes Bluetooth, KeyMod touches ne fonctionnent pas"
---

# 12. Dépannage

Problèmes courants et solutions pour l'application KeyMod sur Android.

## Problèmes de connexion

### Non connecté

| Symptôme | Solutions |
|---|---|
| **Indicateur « Non connecté »** | Vérifiez la connexion du câble ; essayez de rebrancher. Pour BLE, activez/désactivez Bluetooth et ré-appairez. |
| **USB autorisation refusée** | Accédez à Android Paramètres → Applications → KeyMod → Autorisations → activez USB. Rebranchez le câble. |
| **Le Bluetooth ne s'associe pas** | Activez/désactivez Bluetooth. Oubliez l'appareil dans les paramètres Bluetooth et ré-appairez. Assurez-vous que l'appareil KeyMod est en mode d'appairage. |
| **La connexion est interrompue fréquemment** | Vérifiez la valeur RSSI sous la valeur BLE button dans l'application. En dessous de -75 dBm indique un signal faible – rapprochez-vous. Supprimez les obstacles physiques. |

### Indicateurs d'état de connexion

| Indicateur | Signification |
|---|---|
| **Connecté** | Icône verte — prêt à envoyer une entrée |
| **Connexion** | Icône orange — connexion en cours |
| **Déconnecté** | Icône grise — aucune connexion active |
| **Barres de signal** | BLE force du signal ou USB état actif |

### Connexion automatique

Activez **"Connexion automatique au démarrage"** dans la boîte de dialogue de connexion. KeyMod mémorise votre dernier type de connexion (USB ou BLE) et le dernier appareil BLE couplé.

### USB Détection d'attache/détachement

KeyMod surveille les événements de diffusion d'attache/détachement USB de Android. Si vous débranchez le câble USB, l'état de la connexion est immédiatement mis à jour. Le rebranchement déclenche une tentative de reconnexion si la connexion automatique est activée.

---

## Problèmes de clavier

### Les clés ne s'enregistrent pas

| Symptôme | Solutions |
|---|---|
| **Les clés ne sont pas envoyées** | Vérifiez que la connexion affiche « Connecté » (vert). Essayez de changer de mode et inversement. Vérifiez que l'ordinateur cible reconnaît l'appareil KeyMod comme clavier. |
| **La macro ne s'exécute pas** | Vérifiez que vous êtes connecté. Vérifiez que les données de la macro contiennent des jetons valides (pas de fautes de frappe dans les noms de jetons). |
| **Mauvais caractères apparaissant** | Vérifiez le paramètre **Target OS** : un système d'exploitation incompatible peut entraîner des problèmes de mappage de clés. Vérifiez la disposition du clavier de l'ordinateur cible (QWERTY vs AZERTY). |

### Les caractères Unicode ne fonctionnent pas

Les caractères non-ASCII (chinois, japonais, emoji) nécessitent des méthodes de saisie spécifiques au système d'exploitation :

| Système d'exploitation | Méthode |
|---|---|
| **Windows** | Alt+Entrée Unicode hexadécimale du pavé numérique |
| **Linux** | Ctrl+Shift+U suivi du code hexadécimal |
| **macOS** | Option+entrée hexadécimale |

Si les caractères Unicode n'apparaissent pas correctement, vérifiez que le **système d'exploitation cible** est correctement défini.

---

## TouchPad Problèmes

| Symptôme | Solutions |
|---|---|
| **Touchpad ne répond pas** | Vérifiez que le retour haptique est activé dans les paramètres. Essayez la superposition d'aide TouchPad (?) pour vérifier la prise en charge des gestes. |
| **Le défilement ne fonctionne pas** | Vérifiez la sensibilité du défilement touchpad dans Paramètres → Général. |

---

## Problèmes de saisie vocale

### Reconnaissance vocale indisponible

Installez Google Saisie vocale depuis Play Store. Sur Android 11+, KeyMod a besoin de l'autorisation de requêtes (incluse dans le APK).

### La détection des silences ne fonctionne pas

| Symptôme | Solutions |
|---|---|
| **L'enregistrement continue lorsque vous ne parlez pas** | Cochez la case Pause automatique en cas de silence. Réduisez le bruit de fond. Parlez clairement et près du microphone. |
| **L'enregistrement s'arrête immédiatement** | Parlez plus fort ou réduisez le délai de détection du silence. |

### Le texte vocal n'est pas envoyé

Vérifiez l'état de la connexion. Le "Envoyer" button est désactivé lorsqu'il n'est pas connecté.

---

## Problèmes d'IA

### La clé API ne fonctionne pas

| Symptôme | Solutions |
|---|---|
| **"Clé API non configurée"** | Vérifiez que la clé API est correcte : vérifiez les espaces supplémentaires ou les fautes de frappe. Vérifiez l'URL de base de l'API : elle doit inclure le chemin d'accès complet (par exemple, `https://api.openai.com/v1`). Vérifiez que le nom du modèle existe sur le fournisseur. Pour les fournisseurs locaux (Ollama), assurez-vous que l’indicateur API Key Facultatif est défini. |

### Affinement du texte lent

Vérifiez votre connexion réseau. Essayez un modèle plus rapide : les modèles plus petits (gpt-3.5-turbo, llama3-8b) répondent plus rapidement. Utilisez un fournisseur local (Ollama) pour éliminer la latence du réseau. Vérifiez l’historique des demandes AI pour les messages d’erreur.

---

## Besoin d'aide supplémentaire ?

Si vous rencontrez toujours des problèmes :

- **Rapports de bogues :** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Communauté :** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentation :** [openterface.com](https://openterface.com)