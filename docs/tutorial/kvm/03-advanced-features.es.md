---
title: "Tutorial KVM 03 — Funciones avanzadas"
description: "Público: Intermedio a experto — funciones avanzadas y configuración Documentación Openterface: configuración, preguntas frecuentes y soporte KVM-over-USB."
---

# Tutorial KVM 03 — Funciones avanzadas

**Público:** Intermedio a experto — funciones avanzadas y configuración

---

## 1. Sistema de preferencias

### Vídeo

- **Resolución y velocidad de fotogramas** — Ajustes de captura preferidos
- **Backend de medios** — FFmpeg, GStreamer (Linux) o Qt Multimedia (Windows)
- **Aceleración por hardware** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Relación de aspecto y escalado** — Relación personalizada, Estirar/Ajustar/Rellenar

### Audio

- **Activado** — Activar o desactivar la captura de audio del objetivo
- **Dispositivo de entrada/salida** — Seleccionar la fuente y el dispositivo de reproducción

### Control del objetivo

- **Modo de ratón** — Absoluto, Relativo (HID), Relativo (Events)
- **Limitación de eventos de ratón** — 30–1000 eventos/segundo
- **Distribución de teclado** — SO objetivo y distribuciones regionales
- **Intervalo de repetición de teclas** — Velocidad de repetición de tecla mantenida
- **Ocultar cursor automáticamente** — Ocultar el cursor del host sobre el área de vídeo

### Registro

- **Nivel de registro** — Debug, Info, Warning, Error
- **Registro en archivo** — `~/Documents/openterface.log` (macOS) o ruta configurada (Qt)
- **Registro serial** — Registro separado de comunicación serial

---

## 2. Gestión EDID

### ¿Qué es EDID?

EDID (Extended Display Identification Data) es lo que el dispositivo KVM envía al objetivo para describir sus capacidades de pantalla — resoluciones compatibles, frecuencias de actualización, información del fabricante. El KVM actúa como un «monitor falso», por lo que EDID determina qué resoluciones enviará el objetivo.

### Edición del nombre de pantalla EDID

Puede cambiar el nombre de pantalla que el dispositivo KVM informa al objetivo. Este nombre aparece en la configuración de pantalla del SO objetivo.

> **Nota:** Actualmente solo se admite la edición del nombre de pantalla. La edición de resolución y las entradas de resolución personalizadas aún no están disponibles.

**Acceso:** Settings > EDID Display Name Editor (macOS) o Device > Update Display Settings (Qt)

### Casos de uso

- **Identificar la pantalla** en la configuración del SO objetivo
- **Nombre personalizado** en configuraciones multi-monitor para distinguir la pantalla KVM

---

## 3. Sistema de macros (macOS)

Las macros son secuencias de acciones de teclado guardadas, activadas desde el panel de macros de la barra de herramientas.

### Formato de secuencia de teclas

**Etiquetas de modificadores:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (corresponde a Cmd/Win/Super según el SO objetivo)

**Teclas especiales:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Retrasos:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Ejemplos

<CMD>c</CMD>              # Copiar en macOS
<CTRL>c</CTRL>            # Copiar en Windows
<DELAY05s><ENTER>         # Esperar, luego pulsar Enter
### Generación asistida por IA

El botón **Magic** del editor de macros genera macros a partir de lenguaje natural. Describa lo que desea y la IA produce la secuencia de teclas.

### Verificación

Marque las macros como **verified** después de probarlas. Solo las macros verificadas están disponibles para el agente de IA en ejecución autónoma.

---

## 4. Herramienta Script (Qt)

Un lenguaje de scripting inspirado en AutoHotKey para automatizar acciones de teclado y ratón en el objetivo.

### Apertura

Menú: **Device > Script Tool**

### Comandos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `Sleep` | Pausar la ejecución | `Sleep 1000` |
| `Send` | Enviar pulsaciones de teclas | `Send Hello World` |
| `Click` | Clic de ratón | `Click 100 200` |
| `SetCapsLockState` | Alternar CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Captura de pantalla | `FullScreenCapture "/tmp/shot.png"` |

### Prefijos de modificadores

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Actualizaciones de firmware

### Cuándo actualizar

- Nuevas funciones de hardware
- Correcciones de errores
- Mejoras de compatibilidad

### Proceso de actualización

1. Abrir Firmware Update Tool (**Settings > Firmware Update Tool** en macOS, **Device > Update Firmware** en Qt)
2. La herramienta comprueba la última versión desde la red
3. Se registra el progreso durante la operación de escritura
4. **No desconecte el dispositivo durante la actualización**

### Recuperación

1. Mantenga el dispositivo alimentado
2. Cierre y vuelva a abrir Firmware Update Tool, reintente
3. Use Serial Reset Tool si el dispositivo no responde

---

## 6. Serial Reset Tool

**Acceso:** Settings > Serial Reset Tool (macOS) o Device > Factory Reset HID Chip (Qt)

Usar cuando:
- El dispositivo está en un estado desconocido tras una actualización de firmware fallida
- El chip HID no responde
- Preparar el dispositivo para reventa

---

## 7. Diagnósticos (Qt)

Menú: **Device > Device Diagnostics**

Ejecuta pruebas de hardware secuencialmente:
1. Prueba de conexión serial
2. Estado USB del objetivo
3. Prueba de restablecimiento de fábrica
4. Prueba de velocidad en baudios alta/baja
5. Prueba de estrés (comandos rápidos, medir tasa de éxito)
6. Prueba plug & play (detección de desconexión/reconexión USB)

Tras ejecutar, exporte los resultados mediante **Support Email Dialog**.

---

## 8. Sistema de chat IA (macOS)

Asistente de IA integrado que puede analizar la pantalla del objetivo, sugerir acciones y ejecutar operaciones de teclado/ratón.

### Modos de chat

| Modo | Descripción |
|------|-------------|
| **Interactive** | Hacer preguntas, obtener orientación |
| **Agentic** | La IA planifica y ejecuta de forma autónoma tareas de varios pasos |
| **Guide** | Una instrucción a la vez, paso a paso |
| **Planner** | Solicitudes complejas desglosadas en planes estructurados |

### Configuración

Settings > AI Chat: punto final de API, clave (almacenada en Keychain), modelo, sistema objetivo (macOS/Windows/Linux/etc.)

---

## 9. Control remoto (VNC/RDP — macOS)

Cambie entre los modos **Hardware KVM**, **VNC** y **RDP** mediante **Control > Connection Protocol**.

| Escenario | Modo |
|----------|------|
| Objetivo en BIOS/UEFI, sin red, arrancando, bloqueado | Hardware KVM |
| Uso de escritorio de alto ancho de banda, servidor Windows | VNC o RDP |

---

## 10. Servidor TCP (Qt)

Servidor TCP integrado para control remoto en el puerto 12345.

### Comandos

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Ejemplo Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Seguridad:** Sin autenticación, cifrado ni limitación de velocidad. Active solo en redes de confianza.

---

## Funciones específicas de iPadOS

### Gestión de conexión Bluetooth

La aplicación iPadOS se conecta al dongle KVM-Go mediante **Bluetooth Low Energy (BLE)** para entrada HID de teclado/ratón:

- **Conexión automática:** Activada por defecto. Al iniciar, la aplicación escanea durante 5 segundos y se conecta automáticamente al dispositivo `kvm*` con la señal más fuerte.
- **Reconexión:** Si se pierde la conexión, la aplicación intenta reconectar hasta 3 veces con un retraso de 2 segundos.
- **Monitorización de señal:** Actualizaciones RSSI cada 2 segundos. El botón BLE muestra la intensidad de señal (p. ej. `-45 dBm`) con un indicador de color: verde (-50 a 0 dBm), naranja (-70 a -50 dBm), rojo (por debajo de -70 dBm).
- **Escaneo de dispositivos:** Solo aparecen en la lista los dispositivos cuyo nombre comienza por `kvm` (sin distinguir mayúsculas/minúsculas).
- **Control manual:** Abra la pantalla BLE para escanear, conectar, desconectar o desactivar la conexión automática.

### Superposición de información

Pulse el botón **Info** para mostrar una superposición de estado de entrada en tiempo real en la esquina superior derecha:

```
┌─ Estado de entrada ─────┐
│ Ratón                   │
│ Mode: Absolute          │
│ Position: 512.0, 384.0  │
│ Drag Mode: Active       │
│ Scrolling: Inactive     │
│ Teclado                 │
│ Mode: Normal            │
│ Caps Lock: OFF          │
│ Modifiers: Ctrl, Shift  │
└─────────────────────────┘
```

La superposición es transparente a los toques — no bloquea la interacción con la vista previa de vídeo.

### Corrección de orientación de pantalla

Pulse el botón **Rotate** para alternar entre modos de corrección de orientación: Normal, 90° CW, 180°, 90° CCW. Esto corrige la vista previa de vídeo cuando el dongle KVM-Go está montado en una orientación no estándar. La rotación se aplica tanto a la vista previa en directo como a las capturas guardadas.

### Temporizador de inactividad desactivado

La aplicación mantiene la pantalla del iPad **activa** durante el uso desactivando el temporizador de inactividad, evitando que el iPad se bloquee automáticamente mientras monitoriza el PC objetivo.

### Sistema de registro

La aplicación incluye un `Logger` integrado con filtrado por categoría:

| Categoría | Cubre |
|---|---|
| `bluetooth` | Escaneo BLE, conexión, transmisión de datos |
| `mouse` | Entrada de ratón, detección de gestos, cambios de modo |
| `keyboard` | Eventos de teclas, estado de modificadores, teclas compuestas |
| `camera` | Grabación de vídeo, capturas de pantalla, toma de fotos |
| `ui` | Gestión de toques, reconocimiento de gestos, capa de vista previa |
| `general` | Ciclo de vida de la aplicación, información general |

El registro puede ajustarse en el código fuente de la aplicación para reducir el ruido en la consola.

---

## Próximos pasos

- **[Resolución de problemas →](04-troubleshooting.md)** — Problemas comunes y soluciones

---

## Funciones específicas de Android

### Panel de configuración

El panel de configuración de la aplicación Android (botón Menú ☰) contiene todas las opciones de configuración:

| Ajuste | Descripción |
|---|---|
| **Device** | Muestra los dispositivos USB conectados y su estado. Pulse para seleccionar o volver a escanear. |
| **Disconnect Device** | Libera de forma segura todas las conexiones USB. Use antes de desconectar. |
| **Baudrate** | Velocidad de comunicación serial: **115200** (predeterminado) o **9600** (más lento, para problemas). |
| **Controls** | Controles deslizantes de brillo, contraste y tono de la cámara. |
| **Video Format** | Selector de resolución y velocidad de fotogramas. |
| **Rotate/Flip** | Rotar 90° CW/CCW, voltear horizontal/verticalmente. |
| **Screen Capture / Record Video** | Captura de pantalla y grabación de vídeo. |
| **Relative / Absolute / Drag** | Cambiar el modo de control del ratón. |
| **About Device** | Muestra la versión de Android e información de versión de la aplicación. |

### Persistencia de ajustes

La aplicación Android recuerda sus preferencias entre sesiones:

| Ajuste | ¿Persistido? |
|---|---|
| Modo de control del ratón | Sí |
| Formato de vídeo (resolución, FPS) | Sí |
| Parámetros de cámara (brillo, contraste, tono) | Sí |
| Distribución de teclado (US, JP, DE) | Sí |
| Baudrate | Sí |
| Historial de conexión de dispositivos | Sí |

Al reabrir la aplicación, se restauran sus últimos ajustes. Para restablecer todo: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Desconexión segura

Antes de desconectar el dispositivo KVM en Android:

1. Abra el panel de configuración
2. Pulse **Disconnect Device** (mostrado en rojo)
3. Espere a que la aplicación libere la conexión USB
4. Desconecte los cables

Esto evita la corrupción de datos y garantiza que el ordenador objetivo libere correctamente el teclado/ratón.

### Consejos de rendimiento en Android

- **Reduzca la resolución** — 640×480 es mucho más ligero que 1920×1080
- **Reduzca la velocidad de fotogramas** — 30 fps usa menos ancho de banda que 60 fps
- **Cierre otras aplicaciones** — libere la memoria de su teléfono
- **Use un adaptador USB OTG de calidad** — los adaptadores baratos pueden limitar la conexión
- El equipo de desarrollo está trabajando en reducir la latencia en la propia canalización de la cámara
