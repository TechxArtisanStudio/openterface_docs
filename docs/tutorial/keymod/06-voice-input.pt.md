---
title: "KeyMod Tutorial - Entrada de voz"
description: "Use voz para teclado com KeyMod. Suporta reconhecimento de fala do sistema, IA Whisper no dispositivo e vários idiomas."
keywords: "KeyMod entrada de voz, fala para texto, Whisper, digitação por voz, teclado viva-voz"
---

# 6. Entrada de voz

Converta sua fala em pressionamentos de teclas enviados ao computador de destino — digitação e acessibilidade com as mãos livres.

## Como funciona

1. Toque no **microfone** button
2. Fale o que deseja digitar
3. Sua fala é convertida em texto
4. O texto é enviado como pressionamentos de tecla para o computador de destino

## Motores STT

| Motor | Como funciona | Configuração |
|---|---|---|
| **Reconhecedor do sistema** | Usa o reconhecimento de fala integrado do Android | Requer Google Digitação por Voz |
| **Whisper** | Transcrição de IA no dispositivo ou na nuvem | Defina a chave API em Configurações > Entrada de voz |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Entrada de voz — área de transcrição, alvos, histórico e microfone. Configure a chave API em Configurações > Entrada de voz.</em></p>
</div>

## Detecção de silêncio e pausa automática

Ambos os mecanismos possuem detecção automática de silêncio que pausa a gravação quando você para de falar (tempo limite de silêncio de 2,0 segundos por padrão). Ative/desative a pausa automática na visualização de entrada de voz.

### Solução de problemas de detecção de silêncio

| Sintoma | Solução |
|---|---|
| **A gravação continua quando não se fala** | Verifique a opção Pausa automática no silêncio. Reduza o ruído de fundo. Fale claramente e perto do microfone. |
| **A gravação é interrompida imediatamente** | Fale mais alto ou reduza o tempo limite de detecção de silêncio. |

## Minibarra de ferramentas (Android)

| Button | O que faz |
|---|---|
| **Copiar** | Copiar texto transcrito para a área de transferência |
| **Envio automático** | Enviar texto automaticamente após a transcrição |
| **Retorno automático de linha** | Anexe um pressionamento de tecla Enter após enviar |
| **Refinamento de IA** | Envie texto transcrito para IA para melhorias |

## Texto de voz não enviado

Verifique o status da conexão. O "Enviar" button fica desabilitado quando não está conectado.

## Próximas etapas

- **[← Macros](05-macros.md)** — Sequências de teclas automatizadas
- **[AI Integration →](07-ai.md)** — Refinamento de texto assistido por IA e assistente de comando