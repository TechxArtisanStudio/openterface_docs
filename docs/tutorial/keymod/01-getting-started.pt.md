---
title: "KeyMod Tutorial - Primeiros passos"
description: "Instale o app KeyMod, ligue o dispositivo e envie a primeira tecla em minutos. Tutorial oficial Openterface para configurar o emulador USB e Bluetooth de teclado e rato."
keywords: "KeyMod introdução, KeyMod configuração, KeyMod instalação, conexão KeyMod"
---

# 1. Primeiros passos

Instale o aplicativo KeyMod, conecte-se ao seu hardware KeyMod e envie a primeira tecla digitada em menos de 5 minutos.

## O que você precisa

- **Openterface KeyMod hardware** — ligado e dentro do alcance
- **Telefone ou tablet** — Android com o aplicativo KeyMod instalado
- **cabo USB** (para configuração inicial) — USB-C para conectar seu telefone ao dispositivo KeyMod
- **Bluetooth** (opcional) — para conexão sem fio após a configuração inicial

## Etapa 1: Instale o aplicativo KeyMod

**Android:**

1. Abra o navegador do seu telefone e vá para [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. Baixe o arquivo `.apk` mais recente
3. Toque no arquivo baixado para instalar
4. Se Android perguntar, permita **"Instalar aplicativos desconhecidos"** para seu navegador


> **Note:** KeyCmd source code is not yet public. Download the beta APK from the [App](/app/kvm/) page.

## Etapa 2: Conecte-se ao seu dispositivo KeyMod

KeyMod se conecta ao hardware Openterface KeyMod de duas maneiras:

### USB Conexão (recomendada para configuração inicial)

1. Conecte seu telefone ao dispositivo KeyMod usando um cabo USB-C
2. Abra o aplicativo KeyMod
3. Toque no ícone de conexão (canto superior direito da tela principal)
4. Toque em **"USB Conexão"**
5. Aceite o prompt de permissão USB quando solicitado
6. Você deverá ver um indicador de status verde **"Conectado"**

### Conexão Bluetooth (sem fio)

1. Certifique-se de que o Bluetooth esteja ativado em seu telefone
2. Abra KeyMod e toque no ícone de conexão
3. Toque em **"Conexão Bluetooth"**
4. Aguarde até que seu dispositivo KeyMod apareça na lista de verificação
5. Toque para emparelhar
6. Você deverá ver um indicador de status verde **"Conectado"**

> **Dica:** Ative **"Conexão automática na inicialização"** na caixa de diálogo de conexão para que KeyMod se reconecte automaticamente sempre que você abri-lo. O aplicativo lembra seu último tipo de conexão (USB ou BLE).

## Etapa 3: Escolha seu modo - Boas-vindas e guia

Após o lançamento, você verá a tela **Boas-vindas e Guia** com cartões de modo:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Bem-vindo e Guia — toque em qualquer cartão de modo para entrar nesse modo.</em></p>
</div>

Use o menu lateral (ícone de hambúrguer, canto superior esquerdo) para alternar os modos a qualquer momento:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Gaveta de navegação — alterne entre modos, acesse macros, voz e configurações.</em></p>
</div>

**"Lembrar minha escolha"** — marque esta caixa para pular a tela de boas-vindas em lançamentos futuros e ir diretamente para o modo usado pela última vez.

**"Pular" button** — ignore a tela de boas-vindas e entre imediatamente no modo usado anteriormente.

## Etapa 4: envie seu primeiro pressionamento de tecla

1. Selecione o modo **Teclado e Mouse**
2. Toque em qualquer tecla do teclado na tela
3. O pressionamento de tecla correspondente é enviado ao computador de destino

É isso! Agora você está controlando remotamente seu computador de destino.

## Indicadores de estado de conexão

| Indicador | Significado |
|---|---|
| **Verde** (ícone conectado) | Conexão ativa, pronta para enviar entrada |
| **Âmbar/Azul** (ícone de conexão) | Conexão em andamento |
| **Cinza** (ícone desconectado) | Nenhuma conexão ativa |
| **Barras de sinalização** | BLE intensidade do sinal ou USB status ativo |

## Próximas etapas

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Digitação, modificadores, touchpad e entrada de texto