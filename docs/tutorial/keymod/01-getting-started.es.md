---
title: "KeyMod Tutorial - Primeros pasos"
description: Instala la aplicación KeyMod, conéctate a tu dispositivo KeyMod y envía tu primera pulsación de tecla en menos de 5 minutos. Instale la aplicación KeyMod,…
keywords: "KeyMod introducción, KeyMod configuración, KeyMod instalación, conexión KeyMod"
---

# 1. Primeros pasos

Instale la aplicación KeyMod, conéctese a su hardware KeyMod y envíe su primera pulsación de tecla en menos de 5 minutos.

## Lo que necesitas

- **Openterface KeyMod hardware**: encendido y dentro del alcance
- **Teléfono o tableta** — Android con la aplicación KeyMod instalada
- **USB cable** (para configuración inicial) — USB-C para conectar su teléfono al dispositivo KeyMod
- **Bluetooth** (opcional) — para conexión inalámbrica después de la configuración inicial

## Paso 1: Instale la aplicación KeyMod

**Android:**

1. Abra el navegador de su teléfono y vaya a [KeyMod GitHub Releases page](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags)
2. Descargue el archivo `.apk` más reciente
3. Toque el archivo descargado para instalarlo.
4. Si Android te pregunta, permite **"Instalar aplicaciones desconocidas"** en tu navegador.

Alternativamente, compila desde el código fuente; consulta [Build from Source](#build-from-source) a continuación.

## Paso 2: Conéctese a su dispositivo KeyMod

KeyMod se conecta al hardware Openterface KeyMod de dos maneras:

### USB Conexión (recomendado para la configuración por primera vez)

1. Conecte su teléfono al dispositivo KeyMod usando un cable USB-C
2. Abra la aplicación KeyMod
3. Toque el ícono de conexión (esquina superior derecha de la pantalla principal)
4. Toque **"USB Conexión"**
5. Acepte la solicitud de permiso USB cuando se le solicite
6. Deberías ver un indicador de estado verde **"Conectado"**

### Conexión Bluetooth (inalámbrica)

1. Asegúrese de que Bluetooth esté habilitado en su teléfono
2. Abra KeyMod y toque el icono de conexión.
3. Toca **"Conexión Bluetooth"**
4. Espere a que su dispositivo KeyMod aparezca en la lista de escaneo
5. Tócalo para emparejar
6. Deberías ver un indicador de estado verde **"Conectado"**

> **Consejo:** Habilite **"Conexión automática al inicio"** en el cuadro de diálogo de conexión para que KeyMod se vuelva a conectar automáticamente cada vez que lo abra. La aplicación recuerda su último tipo de conexión (USB o BLE).

## Paso 3: Elige tu modo: bienvenida y guía

Después del inicio, verá la pantalla **Bienvenida y guía** con tarjetas de modo:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Bienvenido y guía: toque cualquier tarjeta de modo para ingresar a ese modo.</em></p>
</div>

Utilice el menú lateral (ícono de hamburguesa, arriba a la izquierda) para cambiar de modo en cualquier momento:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Cajón de navegación: cambie de modo, acceda a macros, voz y configuraciones.</em></p>
</div>

**"Recordar mi elección"**: marca esta casilla para omitir la pantalla de bienvenida en futuros lanzamientos e ir directamente al último modo utilizado.

**"Omitir" button**: omita la pantalla de bienvenida e ingrese inmediatamente al modo utilizado anteriormente.

## Paso 4: envíe su primera pulsación de tecla

1. Seleccione el modo **Teclado y mouse**
2. Toque cualquier tecla del teclado en pantalla.
3. La pulsación de tecla correspondiente se envía a la computadora de destino.

¡Eso es todo! Ahora estás controlando tu computadora objetivo de forma remota.

## Indicadores de estado de conexión

| Indicador | Significado |
|---|---|
| **Verde** (icono de conectado) | Conexión activa, lista para enviar información |
| **Ámbar/Azul** (icono de conexión) | Conexión en curso |
| **Gris** (icono desconectado) | Ninguna conexión activa |
| **Barras de señal** | BLE intensidad de la señal o USB estado activo |

## Construir desde el código fuente (Android, para desarrolladores)```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## Próximos pasos

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Escritura, modificadores, touchpad e introducción de texto