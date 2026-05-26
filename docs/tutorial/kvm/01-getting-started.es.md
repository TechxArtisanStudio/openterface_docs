# Tutorial KVM 01 — Primeros pasos

**Público:** Principiantes — usuarios que usan por primera vez dispositivos KVM Openterface

---

## 1. ¿Qué es KVM-over-USB?

Un dispositivo KVM (Keyboard, Video, Mouse) se sitúa entre su **ordenador host** (su estación de trabajo) y un **ordenador objetivo** (servidor, mini PC, dispositivo embebido). Este:

- **Captura** la salida de vídeo HDMI del objetivo (y audio, si está disponible)
- **Retransmite** la entrada del teclado y el ratón mediante emulación HID
- Todo a través de un único cable USB — no se requiere red

Esto es lo que distingue a los dispositivos KVM del software de escritorio remoto: puede controlar el objetivo incluso en **BIOS/UEFI**, durante el arranque o cuando el SO se ha bloqueado.

### Dispositivos KVM Openterface

| Dispositivo | Factor de forma | Característica clave |
|--------|------------|-------------|
| **Mini-KVM** | Compacto dongle USB | KVM-over-USB de escritorio |
| **KVM-Go** | Portátil estilo kit de herramientas | KVM móvil con cables integrados, **compatibilidad con iPadOS vía BLE** |
| **uConsole KVM Extension** | Módulo interno | KVM integrado para ClockworkPi uConsole |

> ¿Busca **KeyMod** (solo emulador de teclado y ratón, sin vídeo)? Consulte el [Tutorial de KeyMod](../../keymod/index.md).

---

## 2. Qué necesita

### Hardware

- **Dispositivo KVM Openterface** — Mini-KVM, KVM-Go o uConsole KVM Extension
- **Ordenador host** — Con macOS, Windows, Linux o Android
- **Ordenador objetivo** — Cualquier ordenador con salida HDMI
- **Cable HDMI** — Desde la salida HDMI del objetivo hasta la entrada HDMI del KVM
- **Cable USB** — Del KVM a su ordenador host (proporciona alimentación y datos)

### Opcional

- **Cable conmutador USB** — Del KVM al puerto USB del dispositivo objetivo (para emulación de teclado/ratón)
- **Teclado y ratón** — Conectados al puerto USB conmutable del KVM para controlar el host o el objetivo

---

## 3. Instalación

### Aplicación host

| Plataforma | Aplicación | Descarga |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) o [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) o [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **solo KVM-Go** |

### Requisitos de Android

La aplicación de Android requiere:

- **Android 8.0 (API 26)** o posterior
- **Compatibilidad con USB OTG** — la mayoría de los teléfonos modernos la admiten (Samsung, Google Pixel, OnePlus). Compruébelo conectando una memoria USB con un adaptador OTG
- **Cable o adaptador USB OTG** para conectar el dispositivo KVM a su teléfono

### Requisitos de iPadOS

La aplicación de iPadOS requiere:

- **iPadOS 17.0** o posterior
- **Dispositivo KVM-Go** — iPadOS se conecta al dongle KVM-Go vía **Bluetooth Low Energy (BLE)** para la entrada de teclado/ratón, y a la tarjeta de captura USB para el vídeo
- **Permisos de cámara y micrófono** — necesarios para la vista previa de vídeo y el monitoreo de audio desde la tarjeta de captura
- **Permiso de Bluetooth** — necesario para descubrir y conectar el dongle KVM-Go para la entrada HID
- **Permiso de biblioteca de fotos** (opcional) — para guardar capturas de pantalla y grabaciones en la app Fotos

### Permisos de macOS

En el primer inicio, macOS solicitará:

| Permiso | Motivo |
|-----------|-----|
| **Cámara** | Captura el vídeo del chip de captura HDMI |
| **Micrófono** | Captura el audio del objetivo (si está habilitado) |
| **Accesibilidad** | Necesario para el control del ratón HID en modo relativo |

### Permisos de Linux

- Añada su usuario a los grupos `dialout` y `video`: `sudo usermod -a -G dialout,video $USER`
- Instale reglas udev para el acceso al dispositivo
- **Conflicto con BrlTTY:** elimine `brltty` o añada el chip serial a la lista negra — consulte [Solución de problemas](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- El instalador incluye el controlador serial CH340. Para las versiones portátiles, instálelo por separado.

---

## 4. Conexión del hardware

┌─────────────┐                        ┌──────────────────┐
│  OBJETIVO   │─── Cable HDMI ───────▶│  Openterface     │
│  ORDENADOR  │                        │  Dispositivo KVM │
└─────────────┘                        │                  │
                                       │  ◄── Cable USB ──│── Cable conmutador USB ──▶ Puerto USB del objetivo
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │ ORDENADOR HOST   │
                                       │  (esta app)      │
                                       └──────────────────┘
1. Conecte la **salida HDMI** del objetivo a la **entrada HDMI** del KVM
2. Conecte el **USB** del KVM a un **puerto USB de su ordenador host**
3. (Opcional) Conecte el cable conmutador USB del KVM al puerto USB del objetivo
4. (Opcional) Conecte su teclado/ratón al puerto USB conmutable del KVM
5. **Encienda** el dispositivo objetivo

### Detección del dispositivo

El KVM se enumera como varios dispositivos USB:
- **Captura de vídeo** (MS2109/MS2109S/MS2130S) — aparece como webcam
- **Serial** (CH9329 o CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — usado para operaciones de firmware

### Conexión mediante teléfono Android

Al usar la aplicación de Android, la cadena de conexión utiliza USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC objetivo │               │   Dispositivo KVM │
│  (pantalla)  │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Teléfono Android │
                               │  (Openterface)    │
                               └──────────────────┘
```

Orden de conexión para Android:

1. **HDMI:** conecte la salida HDMI del objetivo a la **entrada** HDMI del KVM
2. **USB (objetivo):** conecte el puerto USB del objetivo al puerto USB del KVM — transporta las señales de ratón/teclado
3. **USB OTG (teléfono):** conecte el KVM a su teléfono Android mediante cable/adaptador USB OTG
4. **Alimentación:** encienda el dispositivo KVM (si tiene entrada de alimentación separada) y el ordenador objetivo

Cuando la conexión es correcta, la vista previa de vídeo pasa del marcador de posición a la pantalla en vivo del objetivo, y al tocar la pantalla del teléfono se mueve el cursor en el objetivo.

### Conexión mediante iPadOS

La aplicación de iPadOS utiliza un modelo de conexión diferente: **BLE para la entrada** y **captura USB para el vídeo**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  PC objetivo │               │                   │
│  (pantalla)  │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (vídeo)
                              │   BLE (FFF2)      │ (teclado/ratón)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Orden de conexión para iPadOS:

1. **Hardware:** conecte el dongle KVM-Go al puerto USB del PC objetivo y conecte la entrada HDMI
2. **Encienda** el ordenador objetivo
3. **Abra la aplicación** en su iPad y conceda los permisos de cámara, micrófono y Bluetooth
4. **Toque el botón BLE** en la barra de herramientas — la aplicación busca dispositivos llamados `kvm*`
5. **Toque Conectar** junto a su dispositivo KVM-Go — el botón se vuelve verde con la intensidad de señal RSSI
6. **Verifique:** la vista previa de vídeo muestra la pantalla del objetivo, al tocar se envían clics, al escribir se envían pulsaciones de teclas

> **Nota:** La aplicación de iPadOS solo funciona con **KVM-Go**. Mini-KVM y uConsole KVM Extension no tienen compatibilidad BLE.

---

## 5. Primer inicio

### Ventana principal

```
┌─────────────────────────────────────────────────────────┐
│  Barra de menú / Barra de herramientas                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              ÁREA DE VISUALIZACIÓN DE VÍDEO             │
│         (muestra la pantalla del dispositivo objetivo)  │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Barra de estado │ Puerto │ Teclas │ Ratón │ Resolución │
└─────────────────────────────────────────────────────────┘
```

### Permisos de Android

En el primer inicio, la aplicación de Android solicita:

| Permiso | Motivo | Qué ocurre si se deniega |
|---|---|---|
| **USB Host** | Comunicarse con el hardware Openterface | La app no puede detectar su dispositivo KVM |
| **Cámara** | Recibir vídeo del chip de captura HDMI | Sin vista previa de vídeo |
| **Almacenamiento** | Guardar capturas de pantalla y grabaciones | No se pueden guardar las capturas |

Conceda todos los permisos para la funcionalidad completa. También aparece un diálogo de permiso USB del sistema cuando se detecta el dispositivo KVM — toque **Permitir**.

### Permisos de iPadOS

En el primer inicio, la aplicación de iPadOS solicita:

| Permiso | Motivo | Qué ocurre si se deniega |
|---|---|---|
| **Cámara** | Recibir vídeo de la tarjeta de captura HDMI | Sin vista previa de vídeo |
| **Micrófono** | Monitorear el audio del PC objetivo a través de los altavoces del iPad | Sin monitoreo de audio |
| **Bluetooth** | Descubrir y conectar KVM-Go para la entrada HID | No se puede enviar entrada de teclado/ratón |
| **Biblioteca de fotos** | Guardar capturas de pantalla y grabaciones | Las capturas se guardan igualmente en la carpeta Documentos de la app |

Si denegó un permiso por error, vaya a **Ajustes > Privacidad y seguridad** para volver a habilitarlo.

### Verificación de la conexión

- **Indicador HDMI:** verde = señal detectada, naranja = sin señal, gris = desconocido
- **Indicador de teclado:** verde = conectado, naranja = no encontrado, gris = desconocido
- **Indicador de ratón:** verde = conectado, naranja = no encontrado, gris = desconocido
- **Puerto serial:** debe mostrar un nombre de puerto y velocidad en baudios (9600 o 115200)

Si los indicadores muestran naranja o gris, consulte [Solución de problemas](04-troubleshooting.md).

---

## 6. Control básico del KVM

### Modos de ratón

| Modo | Descripción | Mejor para |
|------|-------------|----------|
| **Absoluto** (predeterminado) | El cursor del host se mapea directamente a la pantalla del objetivo | Uso general, navegación GUI |
| **Relativo (HID)** | Los movimientos del ratón se envían como deltas vía HID | Juegos, interacción rápida |

Cámbielo mediante el interruptor de la barra de herramientas o **Control > Modo de ratón**.

### Entrada de teclado

Todas las pulsaciones de teclas se reenvían al objetivo mientras la ventana de la aplicación esté enfocada:
- Teclas estándar, teclas de función, modificadores
- Teclas especiales: Ctrl+Alt+Supr, Impr Pant
- **Pegar en el objetivo:** envía el texto del portapapeles como pulsaciones de teclas emuladas

### Conmutación USB

Alterne el puerto USB conmutable entre:
- **Host** — su teclado/ratón controla el ordenador host
- **Objetivo** — su teclado/ratón controla el ordenador objetivo

---

## 7. Próximos pasos

- **[Operaciones básicas →](02-basic-operations.md)** — Ratón, teclado, vídeo, audio, grabación
- **[Funciones avanzadas →](03-advanced-features.md)** — EDID, firmware, macros, scripts
- **[Solución de problemas →](04-troubleshooting.md)** — Problemas comunes y soluciones
