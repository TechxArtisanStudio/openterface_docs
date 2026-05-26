---
title: "KeyMod Tutorial - Mando"
description: Utilice KeyMod como controlador de juegos virtual con diseños personalizables para juegos, emulación retro y pruebas de juegos. Transforme su teléfono en un…
keywords: "KeyMod gamepad, controlador virtual, controlador de juegos, WASD mapeo, joystick analógico"
---

# 8. Mando de juegos

Transforme su teléfono en un controlador de juegos virtual para juegos, emulación retro y pruebas de juegos.

## El diseño

El gamepad proporciona un diseño de controlador completo con D-pad, botones de acción, botones laterales, palancas analógicas e Inicio/Seleccionar.

| Controlar | Cómo |
|---|---|
| pad direccional | Toca las flechas direccionales |
| Botones de acción (A, B, X, Y) | Tócalos |
| Botones en los hombros | Toque L1, L2, R1, R2 en la parte superior |
| Palos analógicos | Toca y arrastra los círculos del palo |
| Inicio / Seleccionar | Toque los botones |

## Sistema preestablecido (v7)

KeyMod 0.15 introdujo un **sistema de gamepad basado en ajustes preestablecidos**. En lugar de diseños integrados fijos, las configuraciones del gamepad ahora se guardan como **preajustes** que puedes recorrer, importar y exportar.

### Administrar ajustes preestablecidos

- **Toque el chip Preestablecido** en la barra de herramientas para recorrer los diseños disponibles
- **Mantenga presionado el chip Preset** para ver la lista completa de presets con opciones de importación, adición de módulo y exportación.
- El diseño **emu-6** incluido se envía como ajuste preestablecido inicial (`preset_default`)
- Los ajustes preestablecidos son archivos compartibles JSON usando el diseño **schema v7**

### Agregar módulos

Desde el menú preestablecido, puede agregar nuevos módulos a cualquier diseño:

- **D-Pad / Stick**: agrega un módulo para el pulgar izquierdo (`stick_left`, `stick_left_2`, etc.)
- **Touchpad**: agrega un touchpad (`touchpad_1`, `touchpad_2`, etc.) con botones de mouse L/M/R incluidos.
- **Botones**: agregue botones frontales, botones laterales o disparadores

## Personalización

- **Configurar cualquier módulo**: toque un módulo para abrir su cuadro de diálogo de configuración y ajustar el comportamiento
- **Modo analógico versus tecla**: los joysticks se pueden configurar como `STICK_KEY` (teclas de dirección digitales) o `STICK_MOUSE` (movimiento relativo del puntero/ratón)
- **WASD asignación**: asigna WASD teclas al joystick izquierdo para jugar en PC
- **Button/escala del tamaño del stick**: ajusta los tamaños según tu área táctil preferida
- **Imagen de fondo**: personaliza el fondo del gamepad (incrustado en ajustes preestablecidos compartidos como base64, hasta 6 MiB)
- **Retroalimentación háptica**: vibración al presionar button (solo botones frontales, no clics del mouse)
- **Gyro**: habilita el giroscopio del dispositivo para mover el puntero del host mientras la pantalla del gamepad está activa.

### Modelo de módulo

Cada control en pantalla es un **módulo** con tres capas:

| Capa | Lo que define |
|---|---|
| **Ranura/identidad** | Qué control en el lienzo (por ejemplo, `stick_left`, `stick_right`, `touchpad_1`) |
| **Comportamiento (tipo)** | Lo que recibe el anfitrión: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parámetros** | Sintonización en el mismo módulo: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, tamaño, color |

### Palos analógicos

- **Stick izquierdo → Teclas del teclado:** Se asigna a teclas de flecha con soporte diagonal. Configurable a WASD en la configuración del módulo.
- **Stick derecho → Movimiento del mouse:** Modo `STICK_MOUSE` con sensibilidad configurable (`stickMouseSensitivity`), zona muerta para evitar la deriva.
- **Histéresis:** Los umbrales de activación (0,6) y desactivación (0,4) evitan la vibración de las teclas en el límite.

### Touchpad

- **Compatibilidad con Multi-touchpad**: agregue varios paneles táctiles a un solo diseño (`touchpad_1`, `touchpad_2`, etc.)
- **Huella cuadrada** de forma predeterminada al cambiar el tamaño con una pulsación larga
- **Botones de mouse incluidos** (L/M/R) compartidos en todos los paneles táctiles
- **Tamaño del mouse button**: mantén presionado un touchpad para ajustar el **tamaño del mouse button**, o mantén presionado un mouse individual button para **este tamaño button**

> **Nota:** El protocolo Gamepad HID está en desarrollo activo. El soporte básico button funciona; La precisión del joystick analógico puede variar.

## Solución de problemas

### La palanca analógica no responde

| Síntoma | Solución |
|---|---|
| **El palo no produce acción** | Verifique la configuración del módulo. Verifique que el palo no esté atascado en la zona muerta (área central). Verifique los umbrales de histéresis: la palanca debe pasar de 0,6 de activación para activarse. |
| **Botones que envían claves incorrectas** | Abra la configuración del módulo y verifique la asignación de teclas del button. Toque el button para abrir la ventana emergente de configuración y corregir la asignación. |
| **Touchpad los botones del mouse no hacen clic** | Asegúrese de que los botones L/M/R incluidos estén presentes en el preajuste. Agregar un touchpad agrega automáticamente botones de mouse compartidos. Verifique la configuración del módulo para la clave HID asignada. |

## Próximos pasos

- **[← AI Integration](07-ai.md)** — Asistente de comando y refinamiento de texto asistido por IA
- **[Numpad →](09-numpad.md)** — Teclado numérico para entrada de datos