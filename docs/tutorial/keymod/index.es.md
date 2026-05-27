---
title: "KeyMod Tutorial"
description: "Guía completa para usar la aplicación KeyMod. Aprenda a conectarse, controlar su computadora desde su teléfono y usar el teclado, el mouse, el gamepad, las macros y los modos de entrada de voz."
keywords: "KeyMod tutorial, cómo usar KeyMod, guía del teclado del teléfono, KeyMod tutorial de la aplicación"
---

#KeyModTutorial

{% include "partials/keymod-tutorial-slideshow.html" %}

Este tutorial cubre la versión **Android** de la aplicación KeyMod. La versión iOS está en desarrollo.

## ¿Qué es KeyMod?

KeyMod transforma tu teléfono o tableta en un **dispositivo de entrada universal** para cualquier computadora. Se conecta al hardware **Openterface KeyMod** (un KVM: conmutador de teclado, video y mouse), que luego envía las pulsaciones de teclas, los movimientos del mouse y las entradas del gamepad de su teléfono a una computadora de destino como si vinieran de un teclado y un mouse USB reales.

### Cómo funciona la conexión```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyCmd app)                (CH9329 protocol)              (Windows/macOS/Linux)
La aplicación se comunica con el hardware KeyMod mediante el **protocolo CH9329** a través de una conexión en serie (USB-C a 115200 baudios, 8N1 o Bluetooth BLE). El dispositivo KeyMod aparece ante la computadora de destino como un teclado y un mouse estándar USB, sin necesidad de controladores.

### ¿Para quién es esto?

| Eres... | KeyMod te ayuda... |
|---|---|
| **Administrador del sistema** | Administre servidores desde su teléfono sin llevar un teclado y monitor de repuesto |
| **Presentador / Orador** | Controle las diapositivas desde cualquier lugar de la sala, sin necesidad de hacer clic |
| **Jugador** | Utilice su teléfono como mando para juegos retro o como mando adicional |
| **Creador de contenido** | Active atajos, macros y entrada de voz mientras graba en otra máquina |
| **Usuario avanzado** | Envíe atajos de teclado complejos, fragmentos de texto o secuencias de automatización desde su teléfono |
| **Cualquiera** | Escribe en tu computadora desde el sofá, la cama o desde el otro lado de la habitación |

## Secciones del tutorial

| Guía | Descripción |
|---|---|
| [1. Getting Started](01-getting-started.md) | Instale, conecte y elija su primer modo (5 minutos) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Escritura, modificadores, touchpad y entrada de texto |
| [3. Target OS](03-target-keyboard.md) | Mapeo del sistema operativo de destino |
| [4. Shortcut Hub](04-shortcuts.md) | Atajos de teclado basados ​​en perfiles para aplicaciones populares |
| [5. Macros](05-macros.md) | Secuencias de teclas automatizadas con retrasos |
| [6. Voice Input](06-voice-input.md) | Voz al teclado con Whisper AI |
| [7. AI Integration](07-ai.md) | Asistente de refinamiento de texto y comando |
| [8. Gamepad](08-gamepad.md) | Controlador de juego virtual con diseños personalizables |
| [9. Numpad](09-numpad.md) | Teclado numérico para entrada de datos |
| [10. Presentation](10-presentation.md) | Control remoto deslizante y temporizador |
| [11. Settings](11-settings.md) | Configuración y preferencias de la aplicación |
| [12. Troubleshooting](12-troubleshooting.md) | Problemas comunes y soluciones |

## Obtener ayuda

- **Informes de errores:** [Discord](https://discord.gg/techxartisan)
- **Comunidad:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Código fuente:** KeyCmd *(coming soon)*