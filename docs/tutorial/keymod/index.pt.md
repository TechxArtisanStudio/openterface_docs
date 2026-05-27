---
title: "KeyModTutorial"
description: "Guia completo para usar o aplicativo KeyMod. Aprenda como conectar, controlar seu computador a partir do telefone e usar teclado, mouse, gamepad, macros e modos de entrada de voz."
keywords: "Tutorial KeyMod, como usar KeyMod, guia do teclado do telefone, tutorial do aplicativo KeyMod"
---

# KeyModTutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

Este tutorial cobre a versão **Android** do aplicativo KeyMod. A versão iOS está em desenvolvimento.

## O que é KeyMod?

KeyMod transforma seu telefone ou tablet em um **dispositivo de entrada universal** para qualquer computador. Ele se conecta ao hardware **Openterface KeyMod** (um KVM — teclado, vídeo, mouse switcher), que então envia as teclas digitadas, os movimentos do mouse e as entradas do gamepad do seu telefone para um computador de destino como se viessem de um teclado e mouse USB reais.

### Como funciona a conexão```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
O aplicativo se comunica com o hardware KeyMod usando o protocolo **CH9329** através de uma conexão serial (USB-C a 115200 baud, 8N1 ou Bluetooth BLE). O dispositivo KeyMod aparece para o computador de destino como um teclado e mouse USB padrão — sem necessidade de drivers.

### Para quem é isso?

| Você é... | KeyMod ajuda você... |
|---|---|
| **Administrador do sistema** | Gerencie servidores a partir do seu telefone sem carregar teclado e monitor sobressalentes |
| **Apresentador/Palestrante** | Controle os slides de qualquer lugar da sala, sem necessidade de clicker |
| **Jogador** | Use seu telefone como gamepad para jogos retrô ou como controlador extra |
| **Criador de Conteúdo** | Acione atalhos, macros e entrada de voz durante a gravação em outra máquina |
| **Usuário avançado** | Envie atalhos de teclado complexos, trechos de texto ou sequências de automação do seu telefone |
| **Qualquer pessoa** | Digite no computador do sofá, da cama ou do outro lado da sala |

## Seções do tutorial

| Guia | Descrição |
|---|---|
| [1. Getting Started](01-getting-started.md) | Instale, conecte e escolha seu primeiro modo (5 minutos) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Digitação, modificadores, touchpad e entrada de texto |
| [3. Target OS](03-target-keyboard.md) | Mapeamento do sistema operacional de destino |
| [4. Shortcut Hub](04-shortcuts.md) | Atalhos de teclado baseados em perfil para aplicativos populares |
| [5. Macros](05-macros.md) | Sequências de teclas automatizadas com atrasos |
| [6. Voice Input](06-voice-input.md) | Fala para teclado com Whisper AI |
| [7. AI Integration](07-ai.md) | Refinamento de texto e assistente de comando |
| [8. Gamepad](08-gamepad.md) | Controlador de jogo virtual com layouts personalizáveis ​​|
| [9. Numpad](09-numpad.md) | Teclado numérico para entrada de dados |
| [10. Presentation](10-presentation.md) | Controle remoto deslizante e temporizador |
| [11. Settings](11-settings.md) | Configuração e preferências do aplicativo |
| [12. Troubleshooting](12-troubleshooting.md) | Problemas e soluções comuns |

## Obtendo ajuda

- **Relatórios de bugs:** [Discord](https://discord.gg/techxartisan)
- **Comunidade:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Código fonte:** KeyCmd *(coming soon)*