---
title: "Conectar ao Dispositivo Alvo | Módulo de Extensão v2"
description: "Conecte seu dispositivo alvo ao Módulo de Extensão KVM Openterface uConsole v2 via HDMI, USB HID e Ethernet opcional para depuração de rede."
keywords: "configuração de conexão KVM, dispositivo alvo, HDMI, USB HID, depuração Ethernet, uConsole KVM v2"
---

# **Conectar ao Dispositivo Alvo** | Módulo de Extensão v2

## Visão geral da conexão

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

O Módulo de Extensão v2 conecta-se ao seu alvo através de **HDMI** (vídeo/áudio) e **USB** (emulação de teclado/mouse). Opcionalmente, use **Ethernet** para SSH, gerenciamento web ou captura de logs enquanto o KVM cuida do display e da entrada.

## Pré-requisitos

1. [Instalação do Hardware](/products/kvmext/hardware-installation/) — módulo encaixado no slot de expansão
2. [Configuração do Software](/products/kvmext/software-setup/) — Openterface QT instalado no uConsole
3. [Placa de rede escolhida](/products/kvmext/ethernet/) (se estiver usando recursos de rede)

## Etapas de conexão

### **Controle USB (obrigatório para KVM)**

Conecte a **porta Type-C** da placa de extensão à porta USB do dispositivo alvo. Isso emula teclado e mouse (USB HID).

O dispositivo alvo **não** precisa de drivers ou software adicional para controle HID.

### **Entrada de vídeo (obrigatória para KVM)**

Conecte a saída HDMI do alvo à entrada HDMI do módulo de extensão:

- Cabo HDMI padrão para saídas HDMI
- Conversor **VGA-para-HDMI** para VGA (certifique-se de que a alimentação USB do conversor esteja conectada)
- Outros adaptadores para DVI, DisplayPort, Micro HDMI conforme necessário

### **Ethernet (opcional — depuração de rede)**

Se você instalou uma placa de rede:

- Conecte um cabo Ethernet da placa ao seu dispositivo alvo ou switch de rede
- Use o uConsole para SSH, interface web ou captura de logs junto com o KVM
- Veja o [Guia Ethernet](/products/kvmext/ethernet/) para configuração 100M vs 1000M

### **Cartão SD (opcional — imagens e arquivos)**

Insira um cartão microSD no slot do módulo. Use o aplicativo host para alternar o acesso entre o uConsole e o alvo. Veja o [Guia do Cartão SD](/products/kvmext/sd-card/).

## Comutação compartilhada USB 2.0

O aplicativo host pode alternar uma porta USB 2.0 compartilhada entre o uConsole e o alvo — útil para pen drives e fluxos de trabalho de manutenção sem desconectar cabos.

## Testando a conexão

1. Ligue o uConsole e inicialize o dispositivo alvo
2. Inicie o Openterface QT
3. Confirme se o vídeo HDMI aparece na tela do uConsole
4. Teste teclado, trackball e passthrough de áudio
5. Se estiver usando comutação SD ou USB, teste a montagem/comutação no aplicativo host

## Relacionados

- [Casos de Uso](/products/kvmext/use-cases/) — cenários de TI em campo, homelab, depuração embarcada
- [FAQs](/products/kvmext/faq/) — solução de problemas
