---
title: "Atualização de firmware KVM-Go"
description: O KVM-Go utiliza o chip CH32V208 da WCH para emulação de teclado e rato. Atualmente, o flash de firmware requer a ferramenta de programação oficial da WCH,…
---

# Atualização de firmware KVM-Go

## Visão geral

O KVM-Go utiliza o chip CH32V208 da WCH para emulação de teclado e rato. Atualmente, o flash de firmware requer a ferramenta de programação oficial da WCH, disponível apenas para Windows. Portanto, as atualizações de firmware devem ser realizadas num sistema Windows por enquanto.

Estamos a trabalhar ativamente numa solução de atualização de firmware multiplataforma desenvolvida internamente, que será integrada diretamente no dispositivo. Quando estiver pronta, suportará atualizações de firmware em todos os principais sistemas operativos — sem ferramentas de terceiros.

> **Nota:** Este procedimento manual de atualização de firmware é uma solução temporária para unidades de desenvolvimento inicial. Para produtos de produção oficiais, as atualizações de firmware serão integradas perfeitamente no nosso software, permitindo atualizar o firmware diretamente através da aplicação sem ferramentas de terceiros ou procedimentos manuais.

## Pré-requisitos

Antes de continuar, certifique-se de que tem:

- Um computador Windows
- A ferramenta WCH ISP Tool instalada
- O ficheiro de firmware (formato `.hex`) pronto para flash

### Transferir firmware

Transfira o ficheiro de firmware KVM-Go mais recente:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Firmware mais recente para emulação de teclado e rato KVM-Go (chip CH32V208)

Guarde o ficheiro de firmware num local de fácil acesso no computador Windows antes de prosseguir com a atualização.

### Transferir WCH ISP Tool

Transfira e instale o [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (apenas Windows).

Obrigado pela paciência e apoio!

## Instruções passo a passo

### Passo 1: Transferir e abrir a ferramenta no Windows

Inicie o WCH ISP Tool no computador Windows.

![Interface WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Passo 2: Preparar o KVM-Go para flash

Para flashar firmware no KVM-Go:

1. Certifique-se de que o dispositivo está desligado
2. Mantenha o botão premido enquanto o liga a uma porta USB Type-C

**Dica:** Pode flashar usando qualquer porta, mas a porta «target» tende a ser mais estável durante o flash.

![Cablagem e configuração de ligação KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Passo 3: Selecionar o ficheiro de firmware

Se a ligação for bem-sucedida, a ferramenta detetará automaticamente o modelo do chip (série CH32V20X).

1. Clique no botão «...» para procurar e selecionar o ficheiro de firmware a flashar
2. Selecione o ficheiro de firmware `.hex`
3. **Importante:** Lembre-se de marcar a caixa junto ao ficheiro de firmware

![Modelo de chip detetado no WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Procurar e selecionar ficheiro de firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Ficheiro de firmware selecionado com caixa marcada](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Passo 4: Desproteger o firmware atual

Antes de flashar o novo firmware, precisa de remover a proteção de escrita do firmware atual:

1. Clique na opção «Deprotect» na ferramenta
2. Prima brevemente o botão físico no KVM-Go para entrar em modo de flash
3. Aguarde a conclusão do processo de desproteção

![Opção Deprotect na ferramenta](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Premir botão no KVM-Go para entrar em modo de flash](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Passo 5: Transferir e flashar o firmware

Quando o firmware estiver desprotegido e selecionado:

1. Clique no botão «Download» na ferramenta de flash
2. Aguarde a conclusão do processo de flash
3. A ferramenta indicará quando o firmware foi flashado com sucesso

![Processo de transferência e flash de firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Leitura adicional

- [Guia de avaliação Openterface KVM-Go](review-guide.md) — Notas importantes e problemas conhecidos para unidades protótipo de engenharia
