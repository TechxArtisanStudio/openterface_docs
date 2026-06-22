---
title: "Perguntas Frequentes | Módulo de Extensão v2"
description: "Perguntas frequentes sobre o Módulo de Extensão v2 do Openterface uConsole KVM: placas Ethernet, Kit de Upgrade, cartão SD, configuração de software, compatibilidade e solução de problemas."
keywords: "FAQ extensão KVM v2, uConsole KVM, Ethernet, cartão SD, solução de problemas, Kit de Upgrade"
---

# Perguntas Frequentes | Módulo de Extensão v2

Bem-vindo às perguntas frequentes do **Módulo de Extensão v2 do Openterface uConsole KVM**.

Se você não encontrar o que precisa, envie um e-mail para [support@openterface.com](mailto:support@openterface.com) ou entre na nossa comunidade no [Discord](/discord).

---

## :material-clipboard-list: Navegação Rápida

- [Produto e compra](#produto-e-compra)
- [Instalação e hardware](#instala%C3%A7%C3%A3o-e-hardware)
- [Compatibilidade](#compatibilidade)
- [Controle e recursos](#controle-e-recursos)
- [Vídeo e áudio](#v%C3%ADdeo-e-%C3%A1udio)
- [Solução de problemas](#solu%C3%A7%C3%A3o-de-problemas)
- [Mais](#mais)

---

## Produto e compra

**:material-chat-question:{ .faq } O Módulo de Extensão v2 é um produto ou duas versões de rede?**

É **um produto**. Tanto a placa Ethernet 100M quanto a 1000M estão incluídas na caixa. Veja [Opções de Compra](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Qual placa Ethernet devo usar?**

Use a placa **100M** em todas as placas-base do uConsole. Use a placa **1000M** apenas se você tiver o **Kit de Upgrade uConsole da HackerGadgets** e precisar de rede gigabit. Veja o [Guia Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Eu preciso do Kit de Upgrade uConsole da HackerGadgets?**

Apenas para **Ethernet gigabit**. A placa 100M funciona sem o Kit de Upgrade. Se você não tem o kit, escolha a opção de bundle no checkout ou compre o kit separadamente.

**:material-chat-question:{ .faq } O uConsole está incluído?**

Não. O dispositivo ClockworkPi uConsole é vendido separadamente.

---

## Instalação e hardware

**:material-chat-question:{ .faq } Como funciona o Módulo de Extensão v2?**

Ele captura o HDMI de um dispositivo alvo e exibe no uConsole. O teclado e o trackball do uConsole controlam o alvo via emulação USB HID. Os recursos opcionais de Ethernet e cartão SD ampliam os fluxos de trabalho de depuração de rede e criação de imagens.

**:material-chat-question:{ .faq } Posso usar isso com o módulo 4G/LTE instalado?**

Não. O Módulo de Extensão v2 usa o slot de expansão do uConsole e **não pode** ser usado ao mesmo tempo que o módulo 4G ou LTE.

**:material-chat-question:{ .faq } Quais ferramentas eu preciso para a instalação?**

Uma chave hexagonal para os parafusos de fixação. Recomenda-se precauções contra ESD.

**:material-chat-question:{ .faq } A instalação é reversível?**

Sim. Remova o Módulo de Extensão v2 e reinstale seu módulo 4G/LTE original, se necessário.

---

## Compatibilidade

**:material-chat-question:{ .faq } Quais modelos de uConsole são compatíveis?**

Compatível com dispositivos uConsole que possuem o slot de expansão padrão. Verifique as especificações do seu dispositivo para confirmar.

**:material-chat-question:{ .faq } Quais dispositivos alvo posso controlar?**

Qualquer dispositivo com saída HDMI: desktops, servidores, SBCs (Raspberry Pi, etc.), sistemas embarcados, PCs industriais e muito mais.

**:material-chat-question:{ .faq } O alvo precisa de software especial?**

Não. O KVM usa emulação USB HID — não são necessários drivers no alvo para teclado e mouse. Saiba mais sobre a [tecnologia KVM baseada em USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Posso controlar vários alvos ao mesmo tempo?**

Um alvo por vez para KVM. Troque de alvo movendo os cabos HDMI e USB.

---

## Controle e recursos

**:material-chat-question:{ .faq } Posso transferir arquivos via cartão SD?**

Sim. O Módulo de Extensão v2 suporta leitura/escrita de cartão SD com comutação host/alvo via aplicativo Openterface. Veja o [Guia do Cartão SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Ele suporta acesso em nível de BIOS?**

Sim. O USB HID direto permite acesso completo à BIOS/UEFI sem dependências de rede.

**:material-chat-question:{ .faq } E quanto ao módulo legado v1?**

O módulo de primeira geração de 37 × 77 mm (sem Ethernet/SD) está documentado em [Documentação Legado v1](/products/kvmext/v1/).

---

## Vídeo e áudio

**:material-chat-question:{ .faq } Quais resoluções de vídeo são suportadas?**

- **Entrada**: Até 4K @ 30 Hz (RGB/YCBCR444) ou 4K @ 60 Hz (YCBCR420) via HDMI
- **Saída**: 1080p @ 60 Hz na tela do uConsole

**:material-chat-question:{ .faq } Qual é a latência de vídeo?**

Abaixo de **70 ms** — adequado para acesso à BIOS, manutenção e diagnósticos.

**:material-chat-question:{ .faq } Áudio é suportado?**

Sim. O áudio embutido no HDMI passa para os alto-falantes do uConsole.

---

## Solução de problemas

**:material-chat-question:{ .faq } Sem sinal de vídeo**

- Verifique as conexões HDMI em ambas as extremidades
- Confirme se o alvo está ligado e emitindo via HDMI
- Tente um cabo HDMI diferente
- Reinicie o Openterface QT

**:material-chat-question:{ .faq } Teclado ou mouse não funcionam**

- Confirme o cabo USB do módulo de extensão para o alvo
- Desligue completamente o uConsole, aguarde 10 segundos, ligue e tente novamente
- Reinstale o Openterface QT (build arm64 para o seu uConsole)
- Reporte sua distribuição Linux e módulo CM4 no [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) ou [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } O software foi difícil de instalar**

Tente o GitHub Releases (Opção 1) ou o repositório da comunidade ClockworkPi (Opção 3) em [Configuração de Software](/products/kvmext/software-setup/). Entre no [Discord](https://openterface.com/discord) para ajuda passo a passo.

**:material-chat-question:{ .faq } A porta de comutação USB não funciona**

Certifique-se de estar em uma versão recente do Openterface QT. Alterne o acesso USB no aplicativo host. Se o problema persistir, abra uma issue no [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } O HDMI só exibe em uma caixa / sem menu de configurações do app**

Atualize para a versão mais recente do Openterface QT. Consulte [Configuração de Software](/products/kvmext/software-setup/) e tópicos da comunidade no Discord para configurações de exibição específicas do uConsole.

**:material-chat-question:{ .faq } O aplicativo não detecta o módulo**

- Reencaixe a placa no slot de expansão
- Reinicie o uConsole
- Reinstale o Openterface QT

---

## Mais

**:material-chat-question:{ .faq } O software é open source?**

Sim. Os aplicativos host Openterface são open source no [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Onde posso obter suporte?**

- **E-mail**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Entre na nossa comunidade](https://openterface.com/discord)
- **GitHub**: [Reportar problemas](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
