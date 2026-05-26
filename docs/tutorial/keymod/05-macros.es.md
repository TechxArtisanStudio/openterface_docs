---
title: "KeyMod Tutorial - Macros"
description: Grabe y reproduzca secuencias de teclas automatizadas con macros KeyMod, incluidos modificadores, retrasos y programación. Graba y reproduce secuencias de…
keywords: "KeyMod macros, pulsaciones de teclas automatizadas, programador de macros, tokens de macro, secuencias de teclas"
---

# 5. Macros

Graba y reproduce secuencias de teclas automatizadas con un solo toque.

## ¿Qué es una macro?

Una macro es una **secuencia grabada de pulsaciones de teclas** que puedes reproducir. Por ejemplo:
- Escriba su firma de correo electrónico con un toque
- Enviar `Ctrl+Shift+Esc` seguido de `Alt+D` en secuencia
- Automatizar una secuencia de comandos de varios pasos con retrasos entre pasos

## Sintaxis del token macro

| Ficha | Significado |
|---|---|
| `<CTRL>` ... `</CTRL>` | Control de retención/liberación |
| `<SHIFT>` ... `</SHIFT>` | Mantener/soltar Shift |
| `<ALT>` ... `</ALT>` | Mantener/soltar Alt/Option |
| `<CMD>` ... `</CMD>` | Mantener/soltar Comando/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Teclas especiales |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Teclas de flecha |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Teclas de navegación |
| `<F1>` a `<F12>` | Teclas de función |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Pausa |

**Ejemplo:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Esto abre una terminal (Ctrl+Alt+T), espera 1 segundo, luego escribe `ls -la` y presiona Enter.

## Creando una macro

1. Vaya al modo **Macros**
2. Toque **"+"** para crear una nueva macro.
3. Ingrese un **nombre/etiqueta de macro**
4. Cree la secuencia de comando macro utilizando el campo de texto y los chips de token de inserción rápida.
5. Ajuste el **Enviar intervalo de caracteres** (retraso entre pulsaciones de teclas en milisegundos)
6. Toca **"Guardar"**

## Próximos pasos

- **[← Shortcut Hub](04-shortcuts.md)** — Atajos de teclado basados en perfiles
- **[Voice Input →](06-voice-input.md)** — Transcripción de voz a teclado