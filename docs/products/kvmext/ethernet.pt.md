---
title: "Guia de Ethernet | Módulo de Extensão v2"
description: "Escolha e instale a placa Ethernet 100M ou 1000M incluída com o Módulo de Extensão KVM Openterface uConsole v2. Requisitos do Kit de Atualização para gigabit."
keywords: "uConsole Ethernet, 100M, 1000M, gigabit, Kit de Atualização, rede extensão KVM v2"
---

# **Guia de Ethernet** | Módulo de Extensão v2

O Módulo de Extensão v2 inclui **ambas** as placas Ethernet 100M e 1000M na caixa. Instale **uma** placa durante a configuração do hardware — você não precisa comprar versões de rede separadas.

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Qual placa devo usar?

| Placa | Compatibilidade | Melhor para |
|------|---------------|----------|
| **Ethernet 100M** | Todas as placas base uConsole | Uso universal, SSH, interface web, captura de logs |
| **Ethernet 1000M** | Requer o **Kit de Atualização HackerGadgets uConsole** | Rede gigabit, transferências mais rápidas |

!!! tip "Não tem certeza?"
    Comece com a placa **100M**, a menos que você já tenha o Kit de Atualização instalado e confirmado como funcionando.

## Opções de compra e Kit de Atualização

| Opção | Capacidade Ethernet |
|--------|---------------------|
| **Apenas Extensão v2** | Pronto para 100M fora da caixa; placa 1000M incluída, mas requer o Kit de Atualização para gigabit |
| **Pacote Extensão v2 + Kit de Atualização** | Pronto para gigabit com o Kit de Atualização incluído |

Comparação completa: [Opções de Compra](/products/kvmext/purchase-options/)

Saiba mais sobre o Kit de Atualização da **HackerGadgets** (linkado em nossa [listagem na loja TechxArtisan](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)).

## Instalação

1. Conclua as etapas 1–2 da [Instalação de Hardware](/products/kvmext/hardware-installation/) (desligue, remova o módulo existente).
2. Encaixe a placa Ethernet escolhida no Módulo de Extensão v2 de acordo com o design do módulo.
3. Instale a placa principal no slot de expansão e fixe os parafusos.
4. Conecte um cabo Ethernet ao seu dispositivo alvo ou rede.

## Cenários de uso

- **SSH** em servidores headless enquanto os visualiza via KVM
- **Gerenciamento web** para roteadores, switches e appliances
- **Captura de logs** e manutenção de rede em campo
- Fluxo de trabalho combinado de **KVM + rede** sem adaptadores extras

## Relacionados

- [Conectar ao Alvo](/products/kvmext/connect-to-target/)
- [Casos de Uso](/products/kvmext/use-cases/)
- [FAQs](/products/kvmext/faq/)
