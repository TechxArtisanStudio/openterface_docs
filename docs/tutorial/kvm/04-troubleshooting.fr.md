# Tutoriel KVM 04 — Dépannage

Problèmes courants et solutions pour les appareils Openterface KVM.

---

## Appareil non détecté

### Symptômes
- « Aucun appareil trouvé » dans le menu des appareils
- Les indicateurs clavier et souris affichent orange ou gris
- Le port série affiche « N/A »

### Diagnostic

**Linux :**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Attendu : `534d:2109` (capture HDMI) et `1a86:7523` ou `1a86:fe0c` (série).

**macOS :** Menu Apple > À propos de ce Mac > Rapport système > Matériel > USB — recherchez Openterface.

**Windows :** Gestionnaire de périphériques > « Périphériques USB » et « Ports (COM et LPT) » — CH340 doit apparaître comme « USB-SERIAL CH340 (COMx) ».

### Solutions

| Problème | Solution |
|---------|-----|
| Appareil absent de lsusb/Rapport système | Essayez un autre câble/port USB. Nécessite USB 2.0+ |
| Appareil visible mais pas de nœuds | Vérifiez les règles udev (Linux) ou réinstallez les pilotes (Windows) |
| Permission refusée | Ajoutez l'utilisateur aux groupes `dialout` et `video` (Linux) |
| Détecté puis disparaît | `brltty` réserve le port série (Linux) — voir ci-dessous |

---

## Conflit BrlTTY (Linux) {#brltty-conflict-linux}

**La cause la plus fréquente d'échec clavier/souris sous Linux.**

Le service `brltty` (terminal Braille) réserve les périphériques USB série, y compris la puce CH9329/CH32V208.

### Correction
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Pas de vidéo / Écran noir

### Étapes

1. **Vérifiez le câble HDMI** — bien connecté aux deux extrémités
2. **Vérifiez la cible** — elle envoie bien du HDMI (testez avec un moniteur classique)
3. **Essayez un autre câble HDMI**
4. **Reconnectez l'appareil** — l'application gère le branchement à chaud
5. **Vérifiez la détection de la puce vidéo :** Prises en charge : MS2109, MS2109S, MS2130S

### Sélection du backend (Qt)

Si un backend affiche un écran noir, essayez-en un autre via **Préférences > Vidéo > Backend média** :
- **FFmpeg** — Le plus fiable (recommandé)
- **GStreamer** — Linux uniquement
- **Qt Multimedia** — Solution de repli Windows

### Problèmes GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Essayez un autre sink :
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Incompatibilité EDID

Si la cible ne reconnaît pas l'EDID, elle peut ne pas produire une résolution compatible. Essayez de modifier la résolution de sortie de la cible ou modifiez l'EDID via les paramètres d'affichage de l'application.

---

## Clavier/souris ne répond pas

### Étapes

1. **Vérifiez le commutateur USB** — assurez-vous qu'il est sur **Cible**, pas Hôte
2. **Vérifiez l'état du port série** — doit afficher un nom de port, pas « N/A »
3. **Essayez de changer le débit en bauds** — 9600 ou 115200
4. **Vérifiez la puce de contrôle** — Prises en charge : CH9329, CH32V208
5. **Vérifiez la surveillance CTS** — L'application surveille les lignes Clear-To-Send pour les événements HID

### Problèmes spécifiques à la souris

- **Mode relatif sur macOS :** Nécessite l'autorisation Accessibilité. Vérifiez **Réglages système > Confidentialité et sécurité > Accessibilité**
- **Mode absolu :** Vérifiez que le ratio d'aspect correspond à l'affichage cible
- **Lag de la souris :** Essayez un préréglage de performance plus élevé ou augmentez le débit en bauds
- **Conflits de port série (Linux) :** Fermez les autres applications utilisant le port : `sudo lsof /dev/ttyUSB0`

---

## L'audio ne fonctionne pas

### Étapes

1. **Activez l'audio** via l'icône audio > Activer l'audio
2. **Vérifiez l'autorisation microphone** — Réglages système > Confidentialité et sécurité > Microphone (macOS)
3. **Sélectionnez le bon périphérique d'entrée** — « OpenterfaceA » ou le nom du périphérique de capture
4. **Sélectionnez le bon périphérique de sortie** — vos haut-parleurs ou écouteurs
5. **Vérifiez la sortie audio HDMI de la cible** — la cible est-elle configurée pour envoyer l'audio via HDMI ?

---

## Problèmes de pilote USB série

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Si nécessaire, installez le pilote WCH CH34x depuis [WCH CH34xDriver sur GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Activez-le dans **Réglages système > Général > Ouverture et extensions > Extensions de pilote**.

### Windows

Si la puce série n'apparaît pas dans le Gestionnaire de périphériques, installez le pilote CH340/CH341. L'installateur l'inclut généralement ; pour les builds portables, téléchargez-le séparément.

### Linux

Le pilote CH340 (module `ch341`) est intégré au noyau :
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Échec de la mise à jour du firmware

### Stabilité USB

- Ne débranchez pas pendant le flash
- Ne mettez pas l'ordinateur hôte en veille
- Utilisez un port USB direct (évitez les hubs)

### Récupération

1. Cycle d'alimentation : débranchez l'USB, attendez 10 secondes, reconnectez
2. Réentrez en mode ISP (certains appareils : maintenez le bouton pendant la mise sous tension)
3. Utilisez Serial Reset Tool pour reflasher le bootloader
4. Contactez le support si l'appareil est bloqué

---

## Problèmes de performance

### Utilisation CPU élevée

1. **Activez l'accélération matérielle** — Préférences > Vidéo > Accélération matérielle (VAAPI, V4L2-M2M)
2. **Réduisez la résolution** — 720p utilise nettement moins de CPU que 1080p
3. **Réduisez la fréquence d'images** — 15 fps divise par deux la charge de décodage
4. **Changez de backend** — FFmpeg avec accélération HW utilise généralement moins de CPU que GStreamer

### Images perdues

Vérifiez le compteur FPS dans la barre d'état. Si le FPS réel est inférieur à la cible, le pipeline est un goulot d'étranglement. Activez l'abandon de trames dans le processeur de trames FFmpeg pour privilégier une lecture fluide.

---

## Journalisation et diagnostics

### Activer la journalisation

- **macOS :** Réglages > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt :** Préférences > Log > définir le niveau de journal et le chemin du fichier

### Console série (Qt)

Ouvrez via **Appareil > Serial Port Debug** — affiche les messages du protocole série en temps réel avec filtres pour Keyboard, Mouse, HID, Chip Info.

---

## Problèmes spécifiques à la plateforme

### Linux : plugin de plateforme Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux : problèmes vidéo Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows : pilote CH340

Si l'installation du pilote échoue : désactivez temporairement l'application de la signature des pilotes, puis installez manuellement via le Gestionnaire de périphériques.

### Raspberry Pi : saccades vidéo

Sur Pi 3 ou Pi 4 à faible mémoire :
1. Réduisez la résolution à 720p
2. Utilisez le backend FFmpeg (pas GStreamer)
3. Utilisez 9600 bauds pour la stabilité série

---

## Problèmes spécifiques à Android

### Appareil non détecté

**Symptôme :** L'aperçu vidéo affiche un placeholder, pas l'écran de la cible.

1. **Vérifiez la connexion USB OTG** — débranchez et rebranchez le câble
2. **Vérifiez la prise en charge OTG** — essayez de connecter une clé USB pour confirmer que votre téléphone prend en charge OTG
3. **Vérifiez l'appareil KVM** — est-il sous tension ? Des voyants sont-ils allumés ?
4. **Essayez un autre câble** — certains adaptateurs OTG sont défectueux
5. **Redémarrez l'application** — fermez-la complètement (balayez depuis les applications récentes) et rouvrez-la
6. **Vérifiez l'autorisation USB** — si une boîte de dialogue système a demandé l'accès USB, assurez-vous d'avoir appuyé sur **Autoriser**

### Pas de vidéo

**Symptôme :** L'appareil est détecté mais l'écran est noir ou figé.

1. **Vérifiez le câble HDMI** — le HDMI de l'ordinateur cible est-il bien connecté à l'entrée HDMI du KVM ?
2. **Vérifiez la sortie de la cible** — l'ordinateur cible affiche-t-il réellement quelque chose ?
3. **Essayez une résolution plus basse** — ouvrez les paramètres → **Video Format** → choisissez une résolution inférieure
4. **Vérifiez l'autorisation caméra** — Paramètres Android → Apps → Openterface → Autorisations → assurez-vous que Caméra est autorisée
5. **Redémarrez l'application**

### Souris ne répond pas

**Symptôme :** La vidéo fonctionne mais toucher l'écran n'a aucun effet sur la cible.

1. **Vérifiez la connexion USB pour HID** — ouvrez les paramètres → **Device** et confirmez que l'appareil est actif
2. **Essayez un autre mode souris** — basculez d'Absolute à Relative ou inversement
3. **Déconnectez et reconnectez** — utilisez le bouton rouge **Disconnect Device**, puis reconnectez
4. **Vérifiez l'ordinateur cible** — reconnaît-il un clavier/souris USB ? Essayez de débrancher et rebrancher le câble USB côté cible

### Le clavier n'envoie pas de touches

**Symptôme :** La souris fonctionne mais la saisie n'a aucun effet.

1. **Assurez-vous que le clavier est ouvert** — appuyez sur le bouton clavier
2. **Vérifiez la connexion série** — ouvrez les paramètres → **Device** et confirmez qu'il est actif
3. **Vérifiez le débit en bauds** — ouvrez les paramètres → **Baudrate** et assurez-vous qu'il correspond à votre appareil (115200 par défaut)
4. **Vérifiez la disposition clavier** — assurez-vous que la bonne disposition (US, JP, DE) est sélectionnée

### Plantages ou blocages de l'application

1. **Fermez et redémarrez** l'application
2. **Réduisez la résolution vidéo et la fréquence d'images** — des paramètres élevés peuvent saturer les appareils à mémoire limitée
3. **Vérifiez l'espace de stockage disponible** — un stockage faible peut provoquer de l'instabilité
4. **Mettez à jour l'application** — recherchez une version plus récente sur Google Play ou GitHub Releases

### Captures d'écran ou enregistrements non enregistrés

1. **Vérifiez l'autorisation Stockage** — Paramètres Android → Apps → Openterface → Autorisations → Stockage
2. **Vérifiez l'espace de stockage disponible** sur votre appareil
3. Les enregistrements et captures d'écran sont enregistrés dans le dossier média par défaut de votre appareil

### Collecte des journaux (Android)

Si le dépannage standard n'aide pas, collectez les journaux à partager avec les mainteneurs :

```bash
adb logcat | grep -i openterface > openterface.log
```

Joignez ce fichier lors de l'ouverture d'une issue GitHub.

---

## Problèmes spécifiques à iPadOS

> **Note :** iPadOS n'est pris en charge que sur **KVM-Go**. Si vous utilisez Mini-KVM ou uConsole KVM Extension, l'application iPadOS ne fonctionnera pas.

### Bluetooth ne se connecte pas

**Symptôme :** Le bouton BLE ne passe pas au vert, ou aucun appareil n'apparaît dans la liste de scan.

1. **Vérifiez que le Bluetooth est activé** sur votre iPad — Réglages > Bluetooth
2. **Assurez-vous que KVM-Go est sous tension** — le dongle doit être branché sur le port USB du PC cible
3. **Rapprochez l'iPad** du dongle KVM-Go — la portée BLE est généralement jusqu'à 10 mètres
4. **Vérifiez l'autorisation Bluetooth de l'iPad** — Réglages > Confidentialité et sécurité > Bluetooth > assurez-vous qu'Openterface est autorisé
5. **Appuyez sur Refresh** dans l'écran BLE pour relancer le scan
6. **Vérifiez l'autorisation Bluetooth de l'application Openterface** — si refusée au premier lancement, réactivez-la dans Réglages

### Pas d'aperçu vidéo

**Symptôme :** Le BLE est connecté mais l'écran est noir ou affiche une image guide.

1. **Vérifiez la connexion HDMI** — la sortie HDMI du PC cible est-elle bien connectée à l'entrée HDMI du KVM-Go ?
2. **Vérifiez la sortie de la cible** — l'ordinateur cible affiche-t-il réellement quelque chose ?
3. **Essayez une résolution plus basse** — appuyez sur le bouton Video et sélectionnez une résolution inférieure (720p ou 480p)
4. **Vérifiez l'autorisation caméra** — Réglages > Confidentialité et sécurité > Caméra > assurez-vous qu'Openterface est autorisé
5. **Redémarrez l'application** — balayez depuis les applications récentes et rouvrez

### Souris/touch ne répond pas

**Symptôme :** La vidéo fonctionne mais toucher l'écran n'a aucun effet sur la cible.

1. **Vérifiez la connexion BLE** — le bouton BLE doit être vert avec une valeur RSSI
2. **Essayez un autre mode souris** — basculez entre Pan Mode et iPencil Mode
3. **Déconnectez et reconnectez** — ouvrez l'écran BLE, appuyez sur Disconnect, puis Connect again
4. **Vérifiez l'ordinateur cible** — reconnaît-il le KVM-Go comme clavier/souris USB ?

### Le clavier n'envoie pas de touches

**Symptôme :** La souris fonctionne mais la saisie n'a aucun effet.

1. **Assurez-vous que le clavier flottant est ouvert** — appuyez sur le bouton Keyboard
2. **Vérifiez la connexion BLE** — la saisie passe par Bluetooth, pas USB
3. **Vérifiez le mode clavier** — essayez de basculer entre Normal et Game mode
4. **Clavier externe :** si vous utilisez un clavier physique iPad, vérifiez qu'iPadOS route les événements clavier vers l'application

### L'audio ne fonctionne pas

**Symptôme :** La vidéo fonctionne mais vous n'entendez pas le PC cible via l'iPad.

1. **Vérifiez le bouton Audio** — il doit afficher une icône haut-parleur verte
2. **Vérifiez l'autorisation microphone** — Réglages > Confidentialité et sécurité > Microphone > assurez-vous qu'Openterface est autorisé
3. **Vérifiez le volume de l'iPad** — assurez-vous que l'iPad n'est pas en mode silencieux ou au volume minimum
4. **Vérifiez la sortie audio de la cible** — le PC cible est-il configuré pour envoyer l'audio via HDMI ?

### Plantages ou blocages de l'application

1. **Fermez et redémarrez** l'application
2. **Réduisez la résolution vidéo** — une haute résolution peut solliciter les iPad plus anciens
3. **Vérifiez l'espace de stockage disponible** — un stockage faible peut provoquer de l'instabilité
4. **Mettez à jour l'application** — recherchez une version plus récente sur l'App Store

### Captures d'écran ou enregistrements non enregistrés

1. **Vérifiez l'autorisation Photothèque** — Réglages > Confidentialité et sécurité > Photos > assurez-vous qu'Openterface est autorisé
2. **Vérifiez l'espace de stockage disponible** sur votre iPad
3. **Parcourez via l'app Fichiers** — les enregistrements sont enregistrés dans `Documents/Recordings/` même sans accès à la Photothèque

---

## Réinitialisation d'usine

1. Utilisez Serial Reset Tool depuis Réglages (macOS) ou le menu Appareil (Qt)
2. Cela réinitialise la puce HID aux paramètres d'usine
3. Reconnectez l'appareil après la réinitialisation

## Récupération de connexion

Les applications gèrent la récupération automatique pour :
- Déconnexion/reconnexion de l'appareil (branchement à chaud pour USB, reconnexion BLE pour iPadOS)
- Délais d'expiration de communication
- Repli de puce (MS2109 → MS2109S → MS2130S)
- Récupération du port série
- Reconnexion BLE automatique iPadOS (jusqu'à 3 tentatives avec un délai de 2 secondes)

## Soumettre des rapports de défaut

1. Activez la journalisation dans un fichier
2. Reproduisez le problème
3. Soumettez via [Issues GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) ou par e-mail à info@techxartisan.com
