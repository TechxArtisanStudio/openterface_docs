---
title: "Openterface KVM-Go — Guia de avaliação (Protótipo de engenharia)"
description: Obrigado por dedicar tempo a testar o nosso próximo produto . Esta unidade é um protótipo de engenharia, e o nosso firmware e software estão a evoluir…
---

# Openterface KVM-Go — Guia de avaliação (Protótipo de engenharia)

## Visão geral

Obrigado por dedicar tempo a testar o nosso próximo produto **[Openterface KVM-Go](https://openterface.com/kvmgo/)**.

Esta unidade é um **protótipo de engenharia**, e o nosso firmware e software estão a evoluir rapidamente. O seu feedback ajudará diretamente a melhorar o produto antes da produção em massa.

Se encontrar problemas durante os testes, contacte-nos diretamente. **Forneceremos suporte imediato para os resolver antes de gravar o seu vídeo.**

## Notas importantes

### Aviso de protótipo

Este dispositivo é um **protótipo de engenharia**. O firmware e o software podem ainda conter bugs ou funcionalidades incompletas. Se encontrar instabilidade ou algo que bloqueie o seu fluxo de trabalho, informe-nos. Corrigiremos os problemas antes do envio da versão de produção.

### Use o software mais recente

Para melhor desempenho e compatibilidade, use a **versão mais recente** do [software Openterface](https://docs.openterface.com/app/kvm/) da nossa página GitHub Releases. Atualizamos frequentemente, e versões mais antigas podem não corresponder ao firmware do seu protótipo.

## Problemas conhecidos e explicações

> **Nota:** Todos os problemas listados abaixo serão resolvidos antes do lançamento de produção.

### Temperatura superficial

O dispositivo pode parecer quente ou mesmo muito quente durante o uso. Isto é esperado porque o protótipo usa chips de maior desempenho.

Note que:

* Todas as temperaturas permanecem dentro da faixa operacional segura
* **Sensores de temperatura** integrados reportam o estado térmico em tempo real no software
* Testes de stress de vários dias não mostram problemas de estabilidade

Continuaremos a refinar o desempenho térmico antes da produção em massa.

### Distribuição de software

Atualmente suportamos várias plataformas:

* **macOS e Windows**
  São as plataformas mais estáveis, recomendadas para testes completos.

* **Linux**
  Use a versão **AppImage**.
  Os pacotes `.deb` e `.rpm` podem ter problemas de dependências consoante a distribuição. Estamos a melhorar estes instaladores.

* **Android**
  Uma versão funcional está disponível no **Google Play** para controlo básico e monitorização.
  Pode experimentá-la se quiser explorar fluxos de trabalho móveis.

* **iPadOS**
  Disponível via **TestFlight**.
  Se quiser testar, envie-me o seu **Apple ID** e adicioná-lo-ei à lista de testadores.

### Funcionalidade copiar e colar

O firmware na sua unidade pode não incluir as nossas últimas correções da área de transferência. Estes problemas já foram resolvidos no firmware mais recente. Pode atualizar usando o [Guia de atualização de firmware](firmware-upgrade.md) se quiser testar a versão mais recente.

### Desmontagem (Opcional)

Se gosta de desmontagens, pode desmontar a unidade.

O seu protótipo inclui os seguintes componentes:

* **MS2130S** — Chip de captura de vídeo
* **WCH CH32V208** — MCU de emulação de teclado e rato USB
* **Pasta térmica de silicone padrão** — aplicada neste protótipo

Estamos atualmente a testar uma solução térmica melhorada com **componentes de alumínio** e **graxa térmica de alto desempenho**. Estas melhorias passaram testes internos, mas devido ao stock limitado de protótipos, **ainda não** estão incluídas nas unidades de avaliação.

A sua unidade ainda usa **pasta de silicone**, mas o desempenho térmico permanece dentro de limites seguros.

### Funcionalidades avançadas (Suportadas no Mini-KVM, em breve no KVM-Go)

KVM-Go segue a mesma filosofia de design do Openterface Mini-KVM. Várias funcionalidades avançadas estão em desenvolvimento ativo mas **ainda não disponíveis** no protótipo atual:

* **EDID personalizado**
  Mini-KVM permite carregar ou modificar EDID através da nossa aplicação QT para resolver problemas de compatibilidade.
  Também estamos a trazer esta funcionalidade para KVM-Go.

* **Comutação de cartão SD por software**
  Mini-KVM suporta comutar a sua porta USB-A entre o host e o PC através de software.
  Para KVM-Go, estamos a desenvolver comutação software similar para a ranhura micro-SD, mas ainda não está ativada no seu firmware.

Queremos que esteja ciente destas funcionalidades futuras mesmo que ainda não estejam ativas na sua unidade.

### Compromisso open source

Sim, KVM-Go permanecerá totalmente open source. Uma vez finalizado o design de hardware para produção em massa, solicitaremos a certificação OSHWA (Open Source Hardware Association). Todos os ficheiros de design de hardware e modelos STL serão carregados no nosso repositório GitHub: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Leitura adicional

* [Atualização de firmware KVM-Go](firmware-upgrade.md) — Guia passo a passo para atualizar o dispositivo
