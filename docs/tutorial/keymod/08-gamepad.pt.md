---
title: "KeyMod Tutorial - Controle"
description: Use KeyMod como um controlador de jogo virtual com layouts personalizáveis ​​para jogos, emulação retro e testes de jogos. Transforme seu telefone em um…
keywords: "Gamepad KeyMod, controlador virtual, controlador de jogo, mapeamento WASD, stick analógico"
---

# 8. Controle de jogo

Transforme seu telefone em um controlador de jogo virtual para jogos, emulação retro e testes de jogos.

## O layout

O gamepad oferece um layout de controlador completo com D-pad, botões de ação, botões de ombro, manípulos analógicos e Iniciar/Selecionar.

| Controle | Como |
|---|---|
| D-pad | Toque nas setas direcionais |
| Botões de ação (A, B, X, Y) | Toque neles |
| Botões de ombro | Toque em L1, L2, R1, R2 na parte superior |
| Varetas analógicas | Toque e arraste os círculos do stick |
| Iniciar / Selecionar | Toque nos botões |

## Sistema predefinido (v7)

KeyMod 0.15 introduziu um **sistema de gamepad baseado em predefinições**. Em vez de layouts integrados fixos, as configurações do gamepad agora são salvas como **predefinições** que você pode percorrer, importar e exportar.

### Gerenciando predefinições

- **Toque no ícone Predefinir** na barra de ferramentas para percorrer os layouts disponíveis
- ** Mantenha pressionado o chip Preset ** para obter a lista completa de predefinições com opções de importação, adição de módulo e exportação
- O layout **emu-6** fornecido como predefinição inicial (`preset_default`)
- Predefinições são arquivos JSON compartilháveis usando layout **schema v7**

### Adicionando módulos

No menu predefinido, você pode adicionar novos módulos a qualquer layout:

- **D-Pad / Stick** — adiciona um módulo para o polegar esquerdo (`stick_left`, `stick_left_2`, etc.)
- **Touchpad** — adiciona um touchpad (`touchpad_1`, `touchpad_2`, etc.) com botões L/M/R do mouse incluídos
- **Botões** — adicione botões frontais, botões de ombro ou gatilhos

## Personalização

- **Configurar qualquer módulo** — toque em um módulo para abrir sua caixa de diálogo de configuração e ajustar o comportamento
- **Modo Analógico vs Chave** — os sticks podem ser configurados como `STICK_KEY` (teclas de direção digital) ou `STICK_MOUSE` (movimento relativo do ponteiro/mouse)
- **Mapeamento WASD** — atribua teclas WASD ao controle esquerdo para jogos de PC
- **Button/escala de tamanho do stick** — ajuste os tamanhos para sua área de toque preferida
- **Imagem de fundo** — personalize o fundo do gamepad (incorporado em predefinições compartilhadas como base64, até 6 MiB)
- **Feedback tátil** — vibração ao pressionar button (apenas botões frontais, não cliques do mouse)
- **Giroscópio** — permite que o giroscópio do dispositivo mova o ponteiro do host enquanto a tela do gamepad está ativa

### Modelo do módulo

Cada controle na tela é um **módulo** com três camadas:

| Camada | O que define |
|---|---|
| **Slot / identidade** | Qual controle na tela (por exemplo, `stick_left`, `stick_right`, `touchpad_1`) |
| **Comportamento (tipo)** | O que o host recebe: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parâmetros** | Sintonia no mesmo módulo: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, tamanho, cor |

### Varetas Analógicas

- **Controle esquerdo → Teclas do teclado:** Mapeia para teclas de seta com suporte diagonal. Configurável para WASD na configuração do módulo.
- **Controle direito → Movimento do mouse:** modo `STICK_MOUSE` com sensibilidade configurável (`stickMouseSensitivity`), zona morta para evitar desvios.
- **Histerese:** Os limites de ativação (0,6) e desativação (0,4) evitam vibrações importantes no limite.

### Touchpad

- **Suporte multi-touchpad**: adicione vários touchpads a um único layout (`touchpad_1`, `touchpad_2`, etc.)
- **Pegada quadrada** por padrão com redimensionamento pressionado longamente
**Botões do mouse incluídos** (L/M/R) compartilhados em todos os touchpads
- **Dimensionamento button do mouse**: pressione longamente touchpad para ajustar o **tamanho button do mouse** ou pressione longamente um mouse individual button para **este tamanho button**

> **Nota:** O protocolo Gamepad HID está em desenvolvimento ativo. Suporte básico button funciona; a precisão do stick analógico pode variar.

## Solução de problemas

### Analógico não responde

| Sintoma | Solução |
|---|---|
| **Stick não produz ação** | Verifique a configuração do módulo. Verifique se o stick não está preso na zona morta (área central). Verifique os limites de histerese – o stick precisa ultrapassar a ativação de 0,6 para disparar. |
| **Botões enviando chaves erradas** | Abra a configuração do módulo e verifique a atribuição das teclas do button. Toque em button para abrir o pop-up de configuração e corrigir o mapeamento. |
| **Touchpad botões do mouse não clicam** | Certifique-se de que os botões L/M/R incluídos estejam presentes na predefinição. Adicionar um touchpad adiciona automaticamente botões de mouse compartilhados. Verifique a configuração do módulo para a tecla HID atribuída. |

## Próximas etapas

- **[← AI Integration](07-ai.md)** — Refinamento de texto assistido por IA e assistente de comando
- **[Numpad →](09-numpad.md)** — Teclado numérico para entrada de dados