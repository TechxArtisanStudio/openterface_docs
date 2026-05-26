---
title: "KeyMod Tutorial - SO de destino"
description: Defina o sistema operacional de destino para que KeyMod envie os mapeamentos de teclas corretos para computadores Windows, macOS ou Linux. KeyMod envia…
keywords: "KeyMod SO de destino, mapeamento de teclas, teclas modificadoras, entrada Unicode"
---

# 3. SO alvo

KeyMod envia pressionamentos de teclas que se adaptam ao sistema operacional do computador de destino. Configurar isso corretamente garante que as chaves corretas cheguem ao destino.

## Como definir

Toque no **ícone do SO** na barra de cabeçalho para abrir o seletor:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Seletor de SO de destino — escolha macOS, Windows ou Linux.</em></p>
</div>

> **Observação:** Ainda não há captura de tela para isso. O seletor de sistema operacional é uma caixa de diálogo com três botões de ícone (macOS, Windows, Linux) que aparece quando você toca no ícone do sistema operacional na barra de cabeçalho.

## O que isso muda

| Alvo | Mapeamento de Chaves |
|--------|------------|
| **Windows** | tecla Win mapeada para a tecla Windows; comportamento padrão do modificador de PC |
| **macOS** | tecla Win mapeada para Cmd; Alt mapeado para Option; rótulos de atalho corretos |
| **Linux** | Comportamento das teclas Super/Meta |

Isso afeta:
- **Rótulos de atalho** mostrados no Shortcut Hub
- **Mapeamento de teclas modificadoras** (comportamento das teclas Win)
- **Método de entrada Unicode** usado para caracteres não ASCII

## Caracteres Unicode

Caracteres não ASCII (chinês, japonês, emoji) exigem métodos de entrada específicos do sistema operacional:

| SO | Método |
|---|---|
| **Windows** | Alt+NumPad hexadecimal entrada Unicode |
| **Linux** | Ctrl+Shift+U seguido de código hexadecimal |
| **macOS** | Option+entrada hexadecimal |

Se os caracteres Unicode aparecerem incorretamente no destino, verifique se o SO de destino está configurado corretamente.

## Modos de teclado (não layouts)

KeyMod fornece três modos de teclado para digitação:

| Modo | Como mudar |
|---|---|
| **ABC** (letras) | Toque na tecla **ABC** |
| **123** (números) | Toque na tecla **123** |
| **!?#** (símbolos) | Toque na tecla **!?#** |

Estas são opções de método de entrada dentro do aplicativo, não layouts de teclado físico. KeyMod atualmente envia scancodes padrão USB HID (base QWERTY dos EUA). Se você usar um teclado físico que não seja dos EUA no destino, poderá ver pequenas incompatibilidades de caracteres para símbolos nas mesmas posições de teclas.

## Próximas etapas

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Digitação, modificadores, touchpad e entrada de texto
- **[Shortcut Hub →](04-shortcuts.md)** — Atalhos de teclado baseados em perfil