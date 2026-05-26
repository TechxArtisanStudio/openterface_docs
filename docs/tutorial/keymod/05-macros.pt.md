---
title: "KeyMod Tutorial - Macros"
description: "Grave e reproduza sequências de teclas automatizadas com macros KeyMod, incluindo modificadores, atrasos e agendamento."
keywords: "KeyMod macros, teclas automatizadas, agendador de macro, tokens de macro, sequências de teclas"
---

# 5. Macros

Grave e reproduza sequências de teclas automatizadas com um único toque.

## O que é uma macro?

Uma macro é uma **sequência gravada de teclas digitadas** que você pode reproduzir. Por exemplo:
- Digite sua assinatura de e-mail com um toque
- Envie `Ctrl+Shift+Esc` seguido de `Alt+D` em sequência
- Automatize uma sequência de comandos de várias etapas com atrasos entre as etapas

## Sintaxe do token de macro

| Ficha | Significado |
|---|---|
| `<CTRL>` ... `</CTRL>` | Segure/solte o controle |
| `<SHIFT>` ... `</SHIFT>` | Segure/solte Shift |
| `<ALT>` ... `</ALT>` | Segure/solte Alt/Option |
| `<CMD>` ... `</CMD>` | Segure/solte Command/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Chaves especiais |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Teclas de seta |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Teclas de navegação |
| `<F1>` até `<F12>` | Teclas de função |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pausas |

**Exemplo:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Isso abre um terminal (Ctrl+Alt+T), espera 1 segundo, digita `ls -la` e pressiona Enter.

## Criando uma macro

1. Vá para o modo **Macros**
2. Toque em **"+"** para criar uma nova macro
3. Insira um **nome/rótulo da macro**
4. Construa a sequência de comandos da macro usando o campo de texto e chips de token de inserção rápida
5. Ajuste o **Send Char Interval** (atraso entre as teclas digitadas em milissegundos)
6. Toque em **"Salvar"**

## Próximas etapas

- **[← Shortcut Hub](04-shortcuts.md)** — Atalhos de teclado baseados em perfil
- **[Voice Input →](06-voice-input.md)** — Transcrição de voz para teclado