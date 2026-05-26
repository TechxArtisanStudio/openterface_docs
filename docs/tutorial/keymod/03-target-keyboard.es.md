---
title: "KeyMod Tutorial - SO de destino"
description: Configure el sistema operativo de destino para que KeyMod envíe las asignaciones de teclas correctas a Windows, macOS o Linux computadoras. KeyMod envía…
keywords: "KeyMod SO de destino, asignación de teclas, teclas modificadoras, entrada Unicode"
---

# 3. SO objetivo

KeyMod envía pulsaciones de teclas que se adaptan al sistema operativo de la computadora de destino. Configurar esto correctamente garantiza que las claves correctas lleguen al destino.

## Cómo configurar

Toca el **ícono del sistema operativo** en la barra de encabezado para abrir el selector:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>Selector del sistema operativo de destino: elija macOS, Windows o Linux.</em></p>.
</div>

> **Nota:** Aún no hay ninguna captura de pantalla para esto. El selector de sistema operativo es un cuadro de diálogo con tres botones de íconos (macOS, Windows, Linux) que aparece cuando toca el ícono del sistema operativo en la barra de encabezado.

## Qué cambia

| Objetivo | Mapeo de claves |
|--------|-------------|
| **Windows** | Tecla Win asignada a la tecla Windows; comportamiento estándar del modificador de PC |
| **macOS** | Tecla Win asignada a Cmd; Alt asignado a Option; etiquetas de acceso directo correctas |
| **Linux** | Super/Meta comportamiento clave |

Esto afecta:
- **Etiquetas de acceso directo** mostradas en Shortcut Hub
- **Asignación de teclas modificadoras** (Win comportamiento de teclas)
- **Método de entrada Unicode** utilizado para caracteres no ASCII

## Caracteres Unicode

Los caracteres no ASCII (chinos, japoneses, emoji) requieren métodos de entrada específicos del sistema operativo:

| SO | Método |
|---|---|
| **Windows** | Alt+Teclado numérico entrada Unicode hexadecimal |
| **Linux** | Ctrl+Shift+U seguido de código hexadecimal |
| **macOS** | Option+entrada hexadecimal |

Si los caracteres Unicode aparecen incorrectamente en el destino, verifique que el sistema operativo de destino esté configurado correctamente.

## Modos de teclado (no diseños)

KeyMod proporciona tres modos de teclado para escribir:

| Modo | Cómo cambiar |
|---|---|
| **ABC** (letras) | Toca la tecla **ABC** |
| **123** (números) | Toca la tecla **123** |
| **!?#** (símbolos) | Toque la tecla **!?#** |

Estos son métodos de entrada que alternan dentro de la aplicación, no diseños de teclado físicos. KeyMod actualmente envía códigos de escaneo estándar USB HID (base QWERTY de EE. UU.). Si utiliza un teclado físico fuera de los EE. UU. en el objetivo, es posible que observe ligeras discrepancias de caracteres en los símbolos en las mismas posiciones de las teclas.

## Próximos pasos

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Escritura, modificadores, touchpad e introducción de texto
- **[Shortcut Hub →](04-shortcuts.md)** — Atajos de teclado basados en perfiles