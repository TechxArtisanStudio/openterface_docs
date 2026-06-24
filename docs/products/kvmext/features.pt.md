---
title: "Recursos e Especificações | Módulo de Extensão v2"
description: "Visão geral completa do Módulo de Extensão KVM v2 do Openterface uConsole: KVM HDMI, Ethernet duplo, cartão SD, comutação USB e especificações técnicas."
keywords: "recursos KVM extensão v2, uConsole KVM, HDMI KVM, expansão Ethernet, cartão SD, KVM portátil, especificações técnicas"
---

# **Recursos e Especificações** | Módulo de Extensão v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Recursos Principais

- **Controle KVM Direto**: Visualize e controle um dispositivo alvo através da entrada HDMI e emulação de teclado/mouse USB HID — ideal para acesso à BIOS, instalação de SO e recuperação de servidores headless.
- **Suporte a Duas Placas de Rede**: Ambas as placas Ethernet **100M** e **1000M** estão incluídas. Use 100M em todas as placas base uConsole; use 1000M com o [Kit de Upgrade uConsole da HackerGadgets](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) para rede gigabit.
- **Leitura/Escrita de Cartão SD**: Grave imagens, exporte logs e transfira arquivos do seu uConsole sem um leitor de cartão externo.
- **Comutação Compartilhada USB 2.0**: Alterne o acesso USB entre o uConsole e o dispositivo alvo para depuração e manutenção flexíveis.
- **Baixa Latência**: Latência de vídeo inferior a **70 ms** com saída **1080p @ 60 Hz** para a tela do uConsole.
- **Portátil e Alimentado pelo Slot**: Design compacto de **77,3 × 34,7 mm**, alimentado pelo slot de expansão do uConsole — sem adaptador de energia externo.
- **Alinhado ao Open Source**: Construído sobre a plataforma Openterface KVM com aplicativos host abertos e suporte da comunidade.

## Especificações Técnicas

| Item | Especificação |
|------|---------------|
| **Nome do produto** | Openterface uConsole KVM Extension Module v2 |
| **Tamanho da placa** | 77,3 × 34,7 mm |
| **Entrada de vídeo** | HDMI até 4K @ 30 Hz (RGB/YCBCR444) ou 4K @ 60 Hz (YCBCR420) |
| **Saída de vídeo** | 1080p @ 60 Hz para a tela do uConsole |
| **Latência** | &lt; 70 ms |
| **Controle KVM** | Emulação de teclado e mouse USB HID |
| **Rede** | 100M funciona em todas as placas base uConsole; 1000M requer o Kit de Upgrade uConsole |
| **Cartão SD** | Leitura/escrita com comutação host/alvo via aplicativo host |
| **Compartilhamento USB** | Comutação compartilhada USB 2.0 Full Speed (12 Mbps) |
| **Plataformas alvo** | Windows, macOS, Linux, sistemas x86, SBCs ARM |
| **Alimentação** | Alimentado pelo slot de expansão do uConsole |
| **Energia externa** | Não necessária |

### Emulação Completa de Teclado e Mouse

- **USB HID**: Posicionamento absoluto e relativo do mouse, suporte completo ao teclado, teclas multimídia.
- **Conexão**: Link USB para o alvo através da porta Type-C da placa de extensão.

### Vídeo e Áudio

- **Entrada**: Até 4K via HDMI (consulte a tabela acima para detalhes dos modos)
- **Saída**: Full HD 1080p @ 60 Hz com latência inferior a 70 ms
- **Display**: Usa a tela integrada do uConsole
- **Compressão**: Suporte a YUV e MJPEG
- **Compatibilidade**: VGA, DVI, Micro HDMI (via adaptadores)
- **Áudio**: Pass-through de áudio embutido no HDMI

### Conectividade e Alimentação

- **Alimentação**: Obtém energia diretamente do slot de expansão do uConsole
- **Software alvo**: Nenhuma instalação necessária no dispositivo alvo

## Relacionados

- [Guia Ethernet](/products/kvmext/ethernet/) — escolha a placa 100M ou 1000M
- [Guia do Cartão SD](/products/kvmext/sd-card/) — gravação de imagens e transferência de arquivos
- [Opções de Compra](/products/kvmext/purchase-options/) — Somente Extensão vs pacote Kit de Upgrade
- [Especificações da v1 legada](/products/kvmext/v1/features/) — módulo de primeira geração
