---
title: "Instalação de Hardware | Módulo de Extensão v2"
description: "Instale o Módulo de Extensão v2 do Openterface uConsole KVM no slot de expansão. Escolha sua placa Ethernet e conecte HDMI e USB ao seu dispositivo alvo."
keywords: "instalação KVM extension v2, configuração de hardware uConsole, slot de expansão, instalação de placa Ethernet"
---

# **Instalação de Hardware** | Módulo de Extensão v2

## Visão Geral

O Módulo de Extensão v2 encaixa no **slot de expansão** do uConsole (o mesmo slot usado pelo módulo 4G/LTE). Não pode ser usado ao mesmo tempo que o módulo 4G ou LTE — escolha a funcionalidade celular **ou** KVM.

## O Que Você Vai Precisar

- [Conteúdo da embalagem](/products/kvmext/whats-in-the-box/) verificado antes da instalação
- Placa Openterface Extension Module v2
- **Uma placa Ethernet** (100M ou 1000M — consulte o [Guia Ethernet](/products/kvmext/ethernet/))
- Tampa do slot de expansão (incluída)
- Chave allen (hex) para parafusos de fixação
- Proteção ESD (pulseira ou superfície aterrada) — recomendado

## Passos de Instalação

### **1. Desligue o dispositivo**

Desligue o uConsole e desconecte toda a energia e cabos.

### **2. Remova o módulo existente**

Se houver um módulo 4G/LTE ou outro módulo de expansão instalado:

- Use uma chave allen para remover os dois parafusos de fixação.
- Levante a placa **retamente para cima** para evitar dobrar os contatos de mola.
- Guarde o módulo original e os parafusos com segurança caso planeje reinstalá-los posteriormente.

### **3. Escolha sua placa Ethernet**

Antes de encaixar a placa principal, decida qual placa instalar:

| Placa | Quando usar |
|------|-------------|
| **100M** | Todas as placas-base do uConsole — compatibilidade universal |
| **1000M** | Apenas se você tiver o **HackerGadgets uConsole Upgrade Kit** e precisar de gigabit |

Consulte o [Guia Ethernet](/products/kvmext/ethernet/) para detalhes completos.

### **4. Instale o Módulo de Extensão v2**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Encaixe o Módulo de Extensão v2 firmemente no slot de expansão.
- Certifique-se de que os contatos de mola estejam alinhados uniformemente em todos os pads.
- Reinsira os parafusos de fixação e aperte **suavemente** — não aperte demais.

### **5. Verifique a instalação**

A placa deve ficar **plana e estável** sem oscilações perceptíveis. Todos os contatos de mola devem pressionar uniformemente.

### **6. Instale a tampa do slot de expansão**

Reinstale a tampa do slot de expansão para proteger o módulo e manter a aparência do uConsole.

??? note "Orientação do texto na tampa do slot de expansão"
    O texto na tampa pode aparecer de cabeça para baixo em alguns ângulos de visão. Ele está orientado para ser legível quando você segura o uConsole e olha para as portas de cima — a posição natural durante o uso.

---

**Próximos passos**

1. [Configuração de Software](/products/kvmext/software-setup/) — instale o aplicativo host Openterface no seu uConsole
2. [Conectar ao Dispositivo Alvo](/products/kvmext/connect-to-target/) — cabeamento HDMI + USB
3. [Recursos e Especificações](/products/kvmext/features/) — especificações técnicas completas

## Instalação da versão legada v1

O módulo de primeira geração (37 × 77 mm) usava arruelas para compensação de espessura da PCB. Consulte [Legacy v1 — Instalação de Hardware](/products/kvmext/v1/hardware-installation/).
