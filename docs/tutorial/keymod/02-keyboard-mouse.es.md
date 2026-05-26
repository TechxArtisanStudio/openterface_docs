---
title: "KeyMod Tutorial - Teclado y ratón"
description: "Aprenda a usar el teclado KeyMod y touchpad para escribir, enviar atajos y controlar el mouse de su computadora objetivo desde su teléfono."
keywords: "KeyMod teclado, KeyMod ratón, touchpad, teclas modificadoras, atajos de teclado"
---

# 2. Teclado y mouse

El modo Teclado y mouse es el modo más utilizado. Proporciona un teclado virtual y touchpad para controlar la computadora de destino desde su teléfono.

## Dos niveles: básico y profesional

KeyMod ofrece dos experiencias de teclado:

| Nivel | Nombre del modo | Lo mejor para |
|---|---|---|
| **Básico** | Teclado y ratón | Escritura rápida con un teclado de pantalla completa, sin distracciones en el encabezado |
| **Pro** | Teclado y ratón profesionales | Diseño compuesto completo con tiras de acceso directo, teclado dividido y rico IME |

### Teclado y mouse (básico)

El nivel **Básico** te brinda un **teclado de pantalla completa dedicado** sin el encabezado superior de la aplicación. Todos los controles se encuentran en la fila superior del teclado:

- Menú, cambio de modo (Touchpad / Redactar y enviar / Teclado numérico)
- Selector de sistema operativo de destino
- Estado de la conexión

**Características exclusivas de Básico:**

- **Repetición prolongada**: mantenga presionado cualquier carácter o tecla de función para la repetición automática (~400ms de retraso, ~50ms de repetición)
- **Vista previa de la tecla**: una burbuja flotante muestra la etiqueta efectiva encima de la tecla cuando se presiona
- **Retroalimentación háptica** y superficies clave **conscientes del tema**
- **Teclado numérico vertical y horizontal**: cuadrícula de 5x8 (vertical) o cuadrícula de 8x5 (paisaje)
- **IME modo de redacción**: escriba texto largo, envíelo como ASCII limpio con HID pulsaciones de teclas

> Básico **no** incluye filas de tiras de Shortcut Hub. Para perfiles de tiras, cambie a **Keyboard & Mouse Pro**.

### Teclado y ratón Pro

**Pro** es la experiencia compuesta completa: filas de tiras de Shortcut Hub, diseños de teclado divididos y el flujo de trabajo completo de IME. Esto es lo que esperan los usuarios avanzados.

## El diseño

**Modo retrato:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-gestures.webp" alt="Portrait touchpad gesture help and keyboard" width="300" />
  <p><em>Retrato: touchpad gestos + distribución del teclado. Desliza hacia arriba/abajo en touchpad para desplazarte, arrastra para mover el cursor.</em></p>
</div>

**Apaisado: teclado dividido + touchpad:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-split-keyboard-touchpad.webp" alt="Landscape split keyboard and central touchpad" width="420" />
  <p><em>Horizontal: divide el teclado por la mitad con touchpad en el lado izquierdo para escribir cómodamente con dos pulgares.</em></p>
</div>

**Paisaje: macro fila + perfiles:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-macro-strip.webp" alt="Landscape macro strip and profile selector" width="420" />
  <p><em>Paisaje: franja de macros encima del teclado y selector de perfil (por ejemplo, Predeterminado, KiCAD).</em></p>
</div>

## Modos de visualización (Android)

Toque el **control de alternancia** (divisor en forma de píldora entre el teclado y touchpad) para recorrer los modos de visualización:

| Modo | Lo que ves |
|---|---|
| **Ambos** (predeterminado) | Teclado + touchpad juntos |
| **Solo teclado** | Teclado de ancho completo, touchpad ocultos |
| **Touchpad solo** (retrato) | Touchpad ocupa la pantalla completa |
| **Dividido** (paisaje) | Dos medios teclados con touchpad a la izquierda |

## Cómo usar el teclado

| Acción | Cómo |
|---|---|
| Escribe una carta | Tócalo |
| Letra mayúscula | Toque **Shift** primero, luego la letra |
| Escriba un número o símbolo | Toque **?123** para cambiar al diseño de número/símbolo |
| Escriba Ctrl+C (copia) | Toque **Ctrl** (se resalta), luego toque **C** |
| Escriba Win+R (diálogo Ejecutar) | Toque **Win**, luego toque **R** |
| Acceso F1-F12 | Toque **Fn**, luego la fila de letras se convierte en teclas de función |
| Modificador múltiple (Ctrl+Shift+C) | Toque **Ctrl**, luego **Shift** (ambos sostenidos), luego **C** |

### Comportamiento del modificador

**Mantener presionado:** Toque un modificador para mantenerlo presionado (se resalta), luego toque cualquier tecla. El modificador se libera automáticamente después de presionar una tecla. Para combos de múltiples modificadores, toque cada modificador en secuencia antes de tocar la tecla final.

### Alternativas de pulsación larga

Muchas teclas de letras tienen **símbolos ocultos** a los que puedes acceder manteniendo presionado:```
Long-press "d" → shows: $  €  ¥  £
Long-press "k" → shows: (  {  [  <
Long-press "/" → shows: \  |
Long-press "m" → shows: +  _
Mantenga presionado hasta que aparezca una ventana emergente, luego deslice el dedo hacia el símbolo que desee y suéltelo.

### Fn Capa clave

Toque la tecla **Fn** en la fila del modificador. Las teclas de letras se convierten temporalmente en **F1 a F12**:

- Q = F1, W = F2, E = F3, R = F4, T = F5, Y = F6
- U = F7, Yo = F8, O = F9, P = F10
-A = F11, S = F12

## Botones de acción rápida

Los botones de acceso directo comunes están disponibles para un acceso rápido. La aplicación utiliza la configuración **SO de destino** para determinar el modificador correcto:

| Acción | macOS | Windows/Linux |
|---|---|---|
| Copiar | Cmd+C | Ctrl+C |
| Pegar | Cmd+V | Ctrl+V |
| Cortar | Cmd+X ​​| Ctrl+X |
| Deshacer | Cmd+Z | Ctrl+Z |
| Seleccionar todo | Cmd+A | Ctrl+A |
| Rehacer | Cmd+Y | Ctrl+Y |
| Buscar | Cmd+F | Ctrl+F |
| Guardar | Cmd+S | Ctrl+S |
| Nueva pestaña | Cmd+T | Ctrl+T |
| Cerrar pestaña | Cmd+W | Ctrl+W |
| Pestaña siguiente | Cmd+Pestaña | Ctrl+Pestaña |
| Pantalla de bloqueo | Cmd+L | Win+L |
| Mostrar escritorio | Cmd+D | Win+D |
| Alt+F4 | — | Alt+F4 |
| Ctrl+Alt+Supr | — | Ctrl+Alt+Supr |

## TouchPad

### Gestos

| Gesto | Acción |
|---|---|
| Toque | Clic izquierdo |
| Toque con dos dedos | Haga clic derecho |
| Arrastrar | Mover cursor |
| Deslizar dos dedos hacia arriba/abajo | Desplazamiento (desplazamiento natural) |
| Pulsación larga | Modo de arrastre (bloquea el cursor para arrastrar) |
| Toque dos veces | Doble clic |

### TouchPad Extras

- **Emergente touchpad**: toque el ícono de información touchpad (?) para abrir un touchpad flotante que permanece encima de otros modos.
- **TouchPad Ayuda superpuesta** (Android): toque el icono **?** para ver una guía de referencia de gestos en pantalla completa.
- **Retroalimentación háptica**: sentirás una vibración al hacer clic y al arrastrar alternancias.

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-numpad.webp" alt="Portrait touchpad and keypad grid" width="300" />
  <p><em>Vertical — touchpad con cuadrícula de teclado a la derecha para entrada rápida de números/símbolos.</em></p>
</div>

## Entrada de texto (IME Modo de redacción — Android)

En el modo vertical de teclado y mouse, puede cambiar al **IME modo de captura**: un editor de texto debajo del teclado donde redacta texto más largo antes de enviarlo como HID pulsaciones de teclas a la computadora de destino.

- Toque el icono **teclado/alternar IME** en la fila de modificación para cambiar entre el envío directo de teclas y el modo de redacción de texto.
- En el modo de redacción, obtienes un editor de texto con una barra de herramientas para copiar, pegar, borrar, deshacer y enviar.
- **Contraer/expandir** el área de redacción con el icono de flecha

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-long-text-compose.webp" alt="Portrait long text compose and Send" width="300" />
  <p><em>IME modo de redacción: escriba o pegue texto largo, luego toque Enviar para enviarlo como HID pulsaciones de teclas al destino.</em></p>
</div>

## SO de destino

Configure el sistema operativo de destino para que coincida con las convenciones clave de la computadora de destino. Esto afecta las etiquetas de los accesos directos, los métodos de entrada Unicode y la asignación de teclas modificadoras. Cámbielo tocando el **ícono del sistema operativo** en la barra de encabezado.

## Tira de accesos directos (Android, paisaje)

En el modo de división horizontal, aparece una **banda de atajos desplazables** encima de las dos mitades del teclado, lo que brinda acceso rápido a atajos comunes (Copiar, Pegar, Cortar, Guardar, Deshacer, Seleccionar todo).

## Próximos pasos

- **[Target-Specific Keyboard →](03-target-keyboard.md)** — Distribuciones de teclado y asignación del sistema operativo de destino
- **[Troubleshooting →](12-troubleshooting.md)** — Problemas comunes y soluciones