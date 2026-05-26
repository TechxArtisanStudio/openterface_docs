---
title: "Tutorial KVM 02 — Operaciones básicas"
description: "Público: Principiantes a intermedio — funciones de uso diario Documentación Openterface: configuración, preguntas frecuentes y soporte KVM-over-USB. Openterface"
---

# Tutorial KVM 02 — Operaciones básicas

**Público:** Principiantes a intermedio — funciones de uso diario

---

## 1. Control del ratón

### Modo absoluto (predeterminado)

El cursor del host se mapea directamente a la pantalla del objetivo. Ambos cursores son visibles.

- **Ideal para:** Uso general, gestión de servidores, navegación BIOS
- **Comportamiento del cursor:** Ocultar automáticamente o mostrar siempre el cursor del host sobre el área de video

### Modo relativo (HID)

Los movimientos del ratón se envían como deltas relativos a través de la interfaz HID. El cursor del host se oculta.

- **Ideal para:** Juegos, aplicaciones que necesitan entrada de ratón sin procesar
- **Requisitos:** Permiso de accesibilidad en macOS
- **Salir:** Atajo de teclado global (macOS) o pulsación prolongada de Esc (Qt)

### Modos de ratón en Android

La aplicación Android ofrece tres formas de controlar el ratón del objetivo, conmutables en el panel de configuración:

| Modo | Funcionamiento | Ideal para |
|---|---|---|
| **Absoluto (predeterminado)** | Toque en cualquier lugar y el cursor salta allí y hace clic izquierdo. La posición se mapea proporcionalmente. | La mayoría de tareas |
| **Relativo** | Arrastre el dedo; el cursor se mueve en relación con el arrastre, como un trackpad de portátil. Levante el dedo y el cursor permanece en su sitio. | Posicionamiento fino del cursor |
| **Arrastre absoluto** | Toque y mantenga; el cursor salta y sigue su dedo. Aparece la etiqueta «Drag». Suelte para soltar. | Arrastrar archivos, seleccionar texto |

**Botones del ratón en Android:** toque simple = clic izquierdo, pulsación prolongada = clic derecho, doble toque = doble clic.

### Modos de ratón en iPadOS

La aplicación iPadOS ofrece dos modos de ratón, conmutables mediante el botón de modo ratón en la barra de herramientas:

| Modo | Icono | Funcionamiento | Ideal para |
|---|---|---|---|
| **Modo Pan** (Relativo) | Icono de mano | El dedo actúa como un trackpad de portátil — arrastre para mover, toque para hacer clic | Uso general de escritorio, superficie plana |
| **Modo iPencil** (Absoluto) | Icono de lápiz | La posición del toque se mapea directamente a las coordenadas de la pantalla del objetivo, como una tableta gráfica | Apuntado preciso, uso de Apple Pencil |

**Gestos en ambos modos:**

| Gesto | Modo Pan | Modo iPencil |
|---|---|---|
| **Toque simple** | Clic izquierdo | Mover cursor al punto + clic izquierdo |
| **Toque y arrastre** | Mover cursor (relativo) | Arrastrar con botón izquierdo pulsado |
| **Doble toque** | Doble clic | Doble clic en el punto |
| **Pulsación prolongada** | Clic derecho | Clic derecho en el punto |
| **Toque con dos dedos** | Clic derecho | Clic derecho |
| **Arrastre con dos dedos** | Rueda de desplazamiento | Rueda de desplazamiento |

**Menú rápido:** Pulsación prolongada en la vista previa de video para abrir un menú con Clic izquierdo, Clic derecho y Arrastrar.

**Modo arrastre:** Doble toque y mantener o seleccionar Arrastrar del menú rápido — el botón izquierdo permanece pulsado, aparece la etiqueta «Dragging Mode Active».

### Presets de rendimiento (macOS)

En **Control > Mouse Mode > Performance Presets**:

| Preset | Throttle | Baudrate | Caso de uso |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Dispositivos objetivo lentos |
| Casual Use | 80 Hz | 9600 | Gestión diaria de servidores |
| Gaming | 250 Hz | 115200 | Juegos con respuesta rápida |
| Max Performance | 1000 Hz | 115200 | Máxima capacidad de respuesta |

Mayor throttle = más respuesta. Mayor baudrate = comunicación serial más rápida.

---

## 2. Entrada de teclado

### Entrada estándar

Todas las pulsaciones de teclas mientras la ventana de la aplicación está enfocada se reenvían al objetivo.

### Teclas especiales

Envíe combinaciones de teclas mediante el panel de teclas de la barra de herramientas o **Control > Special Keys**:

- **F1–F12:** Teclas de función
- **Ctrl+Alt+Del:** Saludo de tres dedos de Windows
- **Print Screen:** Tecla de captura de pantalla
- **Ctrl+Alt+F2:** Cambio de VT en Linux

### Disposición del teclado

Configure la disposición del SO objetivo para que coincida con el ordenador objetivo:

| Disposición | Comportamiento |
|--------|----------|
| **Windows** | Mapea las teclas del host a convenciones de Windows |
| **Mac** | Mapea las teclas del host a convenciones de Mac |
| **Linux** | Mapea las teclas del host a convenciones de Linux |

Las disposiciones regionales (QWERTY UK, Danés, QWERTZ Alemán, AZERTY Francés, Japonés, etc.) también están disponibles en la aplicación Qt.

### Pegar en el objetivo

La aplicación envía el texto del portapapeles como pulsaciones de teclas emuladas al objetivo. Útil para nombres de usuario, comandos, URLs.

> **Nota:** Solo se admiten caracteres ASCII. Textos largos pueden perder formato u omitir caracteres en sistemas antiguos/ocupados.

**Configurar el comportamiento de pegado (macOS):**
- **Ask Every Time:** Pregunta host u objetivo cada vez
- **Host Paste:** Siempre envía al objetivo
- **Local Paste:** Siempre pega en el host

### Teclado en pantalla de Android

La aplicación Android proporciona un teclado en pantalla completo accesible mediante el botón de teclado (⌨) en la esquina inferior derecha de la pantalla principal:

| Control | Función |
|---|---|
| **ShortCut** | Atajos predefinidos: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, etc. |
| **Function** | F1–F12, PrtSc, ScrLk, teclas de navegación (Ins, Home, PgUp, etc.), flechas |
| **System** | Disposición QWERTY con letras, números, puntuación, Backspace, Enter |
| **Teclas modificadoras** | Ctrl, Shift, Alt, Win — botones de alternancia que se restablecen tras la siguiente tecla |

Para enviar una combinación como **Ctrl+Alt+Del**: toque Ctrl (resaltado), toque Alt (ambos resaltados), toque Del. Todos los modificadores se restablecen automáticamente tras enviar la tecla.

El teclado también admite **diferentes disposiciones regionales** (US, Japonés JIS, Alemán QWERTZ, etc.) seleccionables en el panel de configuración. Los botones de zoom permiten ajustar el tamaño de las teclas.

### Entrada de teclado en iPadOS

La aplicación iPadOS admite dos métodos de entrada de teclado:

**Teclado flotante en pantalla:** Toque el botón **Keyboard** en la barra de herramientas para mostrar un teclado flotante arrastrable con disposición estilo Mac:

| Fila | Teclas |
|---|---|
| **Superior** | Esc, F1–F12, Del |
| **Números** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Fila base** | Caps, a–l, ;, ', Enter |
| **Inferior** | Shift, z–m, ,, ., /, Shift |
| **Modificadores** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Alternar modificadores:** Toque Ctrl, Shift, Alt, Cmd o Caps para activar/desactivar (resaltado en azul)
- **Modos de teclado:** Normal (escritura estándar) y Game (cabecera de paquete HID optimizada para entrada de juegos)
- **Arrastre:** Agarre el asa de arrastre en la cabecera para reposicionar el teclado en cualquier lugar de la pantalla

**Teclado externo de iPad:** Los teclados físicos conectados al iPad (Bluetooth, Smart Connector, USB) se pasan directamente al PC objetivo. Las teclas modificadoras se envían como eventos de pulsación/liberación, por lo que combinaciones como `Ctrl+C` o `Alt+Tab` funcionan con naturalidad.

**Atajos de teclas compuestas:** La aplicación incluye una biblioteca de atajos comunes accesibles desde la barra de herramientas, organizados por categoría:

| Categoría | Ejemplos |
|---|---|
| **Navegación** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Edición** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **Sistema** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Aplicación** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (capturas macOS) |

---

## 3. Configuración de video

### Visualización de resolución

La barra de herramientas muestra la resolución de entrada actual y los FPS del objetivo. La resolución la determina lo que el objetivo emite por HDMI.

### Resoluciones admitidas

| Resolución | Rango de frecuencia de fotogramas |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Cambiar la resolución

1. Configure la resolución preferida en la configuración de video

### Relación de aspecto y escalado

| Modo | Comportamiento |
|------|----------|
| **Active Resolution** | Detecta automáticamente el área de video activa |
| **HID Resolution** | Usa la resolución del hardware de la tarjeta de captura |
| **Custom** | Establecer manualmente una relación (16:9, 4:3, 21:9, etc.) |

**Escalado:** Stretch (rellena la ventana, puede distorsionar), Fit (letterboxing), Fill (puede recortar).

### Zoom

Acercar/alejar, restablecer para ajustar y desplazarse para panoramizar cuando está ampliado.

### Backend de video (Qt)

| Backend | Plataforma | Notas |
|---------|----------|-------|
| **FFmpeg** | Todas | Recomendado, aceleración por hardware |
| **GStreamer** | Linux | Flexibilidad de pipeline |
| **Qt Multimedia** | Windows | Alternativa simple |

Cambie mediante **Preferences > Video > Media Backend**. Reinicie tras el cambio.

### Controles de video en Android

En la aplicación Android, la configuración de video se accede mediante el panel de configuración (botón Menú ☰):

- **Video Format** — Seleccione resolución (1920×1080, 1280×720, 640×480) y frecuencia de fotogramas (30fps, 60fps). Resolución/frecuencia más baja si el video va entrecortado.
- **Controls** — Controles deslizantes en tiempo real para **brightness**, **contrast** y **hue**
- **Rotate/Flip** — Rotar 90° CW/CCW, voltear horizontal/verticalmente. Útil cuando el dispositivo KVM está montado al revés o de lado

La configuración persiste entre sesiones — solo la configura una vez.

### Controles de video en iPadOS

En iPadOS, los controles de video son accesibles desde la barra de herramientas inferior:

- **Resolution Switching** — Toque el botón **Video** (muestra la resolución actual) para elegir: 2160p (4K), 1080p (predeterminado), 720p o 480p. Resolución más baja para mejor rendimiento en conexiones lentas.
- **Zoom Mode** — Toque **Zoom** para entrar en modo zoom, luego pellizque con dos dedos para ampliar. Un indicador de zoom muestra el nivel actual (p. ej., `2.5x`). Cuando está ampliado, arrastre con un dedo para panoramizar la vista. Toque Zoom de nuevo para salir.
- **Fullscreen** — Toque **Fullscreen** para ocultar la barra de herramientas y extender el video a toda la pantalla. Toque el botón de flecha arriba a la izquierda para salir.
- **Screen Rotation** — Toque **Rotate** para alternar modos de corrección de orientación (Normal, 90° CW, 180°, 90° CCW). Útil cuando el dongle KVM-Go está montado de lado o al revés. La rotación se aplica tanto a la vista previa en vivo como a las capturas guardadas.

Al iniciar la cámara, aparece un indicador de carga «Starting Camera...». Si no hay cámara conectada pero los permisos están concedidos, se muestra una imagen guía.

---

## 4. Audio del objetivo

El chip de captura HDMI extrae el audio de la señal HDMI y lo presenta como entrada de audio USB al host.

### Activar audio

1. Haga clic en el icono de audio o abra la configuración de audio
2. Active la captura de audio
3. Seleccione el dispositivo de entrada correcto (p. ej., «OpenterfaceA»)
4. Seleccione el dispositivo de salida de su host

El audio está desactivado por defecto en la mayoría de plataformas.

### Control de volumen

- **Lado objetivo:** Ajuste en el ordenador objetivo
- **Lado host:** Use el mezclador de audio del SO host para el dispositivo de captura

### Monitorización de audio en iPadOS

La aplicación iPadOS permite escuchar el audio del PC objetivo a través de los altavoces o auriculares del iPad:

- Toque el botón **Audio** (icono de altavoz) en la barra de herramientas para alternar la monitorización
- **Estados del icono:** altavoz tachado gris = no autorizado, altavoz tachado rojo = desactivado, altavoz verde con ondas = activado
- En el primer uso, la aplicación solicita permiso de micrófono
- El audio se reproduce por los altavoces del iPad o auriculares/Bluetooth conectados
- **Durante la grabación:** el audio de monitorización se silencia temporalmente para evitar retroalimentación, pero el audio sigue capturándose en el archivo de grabación

---

## 5. Captura de pantalla y grabación

### Captura de pantalla

Haga clic en el icono de cámara de la barra de herramientas. Las imágenes se guardan en la carpeta de medios predeterminada de su SO:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Camera captures folder (vía menú Camera)

### Grabación

Haga clic en el botón de grabación para iniciar/detener la grabación del flujo de video y audio del objetivo. Aparece un temporizador mientras la grabación está activa.

**Configuración de grabación:**
- Formato de salida (MP4, AVI, MOV, MKV)
- Bitrate de video, códec de audio
- Directorio de salida

### Captura de pantalla y grabación en Android

En Android, acceda mediante el panel de configuración:

- **Screen Capture** — Toque para guardar una instantánea del fotograma de video actual en la carpeta de medios predeterminada del dispositivo. Requiere **Storage permission**.
- **Record Video** — Toque para iniciar/detener la grabación. Aparece un indicador de grabación rojo con temporizador arriba. El video se guarda en la carpeta de medios predeterminada del dispositivo.

**Casos de uso:** grabar el proceso de arranque del objetivo, capturar mensajes de error, documentar pasos de configuración.

### Captura de pantalla y grabación en iPadOS

**Capturas de pantalla:** Toque el botón **Screenshot** (icono de cámara) en la barra de herramientas. La aplicación captura un fotograma de alta resolución, corrige la orientación y guarda como JPEG.

**Video Recording:** Toque **Record** para iniciar/detener. Tras detener, la aplicación muestra los detalles de la grabación (duración y tamaño del archivo).

| Configuración | Valor |
|---|---|
| **Video codec** | H.264 at 30 fps |
| **Resolution** | Coincide con el dispositivo de captura (típicamente 1920×1080) |
| **Audio codec** | AAC at 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Ubicaciones de archivos:**
- **App Documents:** `Documents/Recordings/` — explore vía app Archivos > En mi iPad > Openterface KVM > Recordings
- **Photos App:** Si se concede permiso de Fototeca y está habilitado en configuración
- **Nombres de archivo:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (capturas) o `.mov` (grabaciones)

**Casos de uso:** grabar el proceso de arranque del objetivo, capturar mensajes de error, documentar pasos de configuración.

---

## 6. Indicadores de conexión

| Indicador | Verde | Naranja | Gris |
|-----------|-------|--------|------|
| HDMI | Señal detectada | Sin señal | Desconocido |
| Keyboard | Conectado | No encontrado | Desconocido |
| Mouse | Conectado | No encontrado | Desconocido |

### Conmutador USB

El interruptor USB muestra si el puerto conmutable está enrutado a **Host** o **Target**.

---

## 7. Evitar el protector de pantalla

Active **Prevent Screen Saver** (mediante menú Edit/Device o barra de herramientas) para enviar eventos periódicos que mantengan despierta la pantalla del objetivo.

---

## 8. Modo de pantalla completa

Use el botón estándar de pantalla completa para llenar la pantalla con el área de video, ocultando la interfaz.

---

## Próximos pasos

- **[Características avanzadas →](03-advanced-features.md)** — EDID, firmware, macros, scripts, diagnósticos
- **[Resolución de problemas →](04-troubleshooting.md)** — Problemas comunes y soluciones
