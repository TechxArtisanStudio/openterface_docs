---
title: "Recursos e especificações"
description: "Recursos KeyMod Series: teclado e mouse HID Bluetooth, conexão dual USB + Bluetooth, perfis personalizados, macros, modos gamepad, controles de apresentação, hub de atalhos. Aplicativo móvel open source para Android e iOS."
keywords: "recursos KeyMod Series, emulador HID, teclado Bluetooth, teclado USB, botões programáveis, gamepad, macro, open source, CH9329, hub de atalhos, modo apresentação"
---

# **Recursos e especificações** | Openterface KeyMod Series

## Status atual

KeyMod está em desenvolvimento ativo com um [beta público](/tutorial/keymod/) disponível para Android. Inscreva-se na [página do produto](/products/keymod/) para se manter atualizado sobre notificações de lançamento.

> **Nota:** Recursos, especificações e design ainda estão sujeitos a alterações conforme o desenvolvimento continua.

## Variantes do produto

- **Versão Mini** — Apenas conector Type C macho
- **Versão Plus** — Conector Type A macho e conector Type C fêmea

## Recursos principais

### **Telefone como teclado e trackpad**

KeyMod transforma seu telefone em um console de teclado e trackpad portáteis. Use-o quando um teclado e mouse completos não estiverem disponíveis, ou quando quiser um fluxo de trabalho mais rápido do que trocar de dispositivos. Ideal para computadores de display externo, players de letreiros LED, quiosques, smart TVs e set-top boxes.

### **Conexão dual: USB + Bluetooth**

- **USB** — Conexão com fio plug-and-play para entrada confiável e de baixa latência
- **Bluetooth** — Configuração sem fios quando o cenário permitir; mantenha sua configuração leve e portátil

KeyMod é projetado para controle local prático diário de dispositivos, não como substituto da área de trabalho remota.

### **Aplicativo móvel open source**

Com nosso aplicativo móvel open source, você pode:

- **Teclado e mouse (Basic)** — Teclado de tela inteira com repetição por pressão longa, visualização de teclas e teclado numérico
- **Teclado e mouse Pro** — Layout composto com tiras Shortcut Hub, teclado dividido e IME
- **Modo apresentação** — Controle remoto de slides com temporizador para Google Slides e outros aplicativos
- **Gamepad** — Controlador virtual com layouts predefinidos personalizáveis e suporte a multi-touchpad
- **Hub de atalhos** — Atalhos de teclado baseados em perfis para ferramentas criativas e de desenvolvimento (Blender, KiCAD, Photoshop, VS Code), com criação, importação e exportação
- **Macros** — Sequências de teclas programáveis com atrasos
- **Entrada de voz** — Speech-to-keyboard com IA (Whisper API)
- **Terminal** — SSH via Bluetooth para acesso remoto a comandos
- **Agent** — Interação direta com IA usando HID ou comandos SSH para controlar outro computador

O aplicativo **KeyCmd** foca em **Android** e **iOS** (incluindo iPadOS). Ele também funciona com **KVM-GO** via USB ou Bluetooth. Também estamos expandindo o controle de desktop com software **Windows e macOS** em nosso ecossistema Openterface mais amplo.


### **HID de hardware real**

Construído sobre o núcleo HID comprovado do Openterface Mini-KVM. Emulação de teclado e mouse baseada em hardware — nenhuma instalação de software necessária no dispositivo de destino.

### **Open source**

KeyMod é hardware e software abertos. Publicaremos esquemas, arquivos PCB, firmware, software e BOM conforme o projeto evolui. [Junte-se à nossa comunidade](/discord) para contribuir e se manter atualizado.

## Especificações técnicas

### **Conectividade**

- **USB**: A versão Mini utiliza conector Type C macho; a versão Plus utiliza conector Type A macho e conector Type C fêmea
- **Bluetooth**: Teclado e mouse HID
- **Alvo**: Nenhuma instalação de software necessária

### **Hardware principal**

- Chip CH32V208 (protocolo compatível com CH9329)
- Conector(es) USB: a versão Mini utiliza Type C macho; a versão Plus utiliza Type A macho e Type C fêmea
- MCU
- Botão(ões) programável(is)

### **Recursos de entrada**

- Emulação completa de teclado e mouse (HID)
- Perfis de entrada personalizados (níveis Basic e Pro)
- Macros e atalhos de teclado
- Hub de atalhos com perfis específicos para aplicativos
- Gamepad com layouts baseados em predefinições (esquema v7)
- Controles de apresentação com temporizador de slides
- Speech-to-keyboard com IA
