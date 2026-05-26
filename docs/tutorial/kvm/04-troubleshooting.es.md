---
title: "Tutorial KVM 04 — Solución de problemas"
description: "Problemas habituales y soluciones para dispositivos Openterface KVM. Documentación Openterface: configuración, preguntas frecuentes y soporte KVM-over-USB."
---

# Tutorial KVM 04 — Solución de problemas

Problemas habituales y soluciones para dispositivos Openterface KVM.

---

## Dispositivo no detectado

### Síntomas
- «No devices found» en el menú de dispositivos
- Los indicadores de teclado y ratón muestran naranja o gris
- El puerto serie muestra «N/A»

### Diagnóstico

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Esperado: `534d:2109` (captura HDMI) y `1a86:7523` o `1a86:fe0c` (serie).

**macOS:** Menú Apple > Acerca de este Mac > Informe del sistema > Hardware > USB — busque Openterface.

**Windows:** Administrador de dispositivos > «Dispositivos de bus serie universal» y «Puertos (COM y LPT)» — CH340 debe aparecer como «USB-SERIAL CH340 (COMx)».

### Soluciones

| Problema | Solución |
|---------|-----|
| Dispositivo no aparece en lsusb/Informe del sistema | Pruebe otro cable/puerto USB. Requiere USB 2.0+ |
| Dispositivo visible pero sin nodos | Compruebe reglas udev (Linux) o reinstale controladores (Windows) |
| Permiso denegado | Añada el usuario a los grupos `dialout` y `video` (Linux) |
| Detectado y luego desaparece | `brltty` reclama el puerto serie (Linux) — véase abajo |

---

## Conflicto con BrlTTY (Linux) {#brltty-conflict-linux}

**La causa más habitual de fallo de teclado/ratón en Linux.**

El servicio `brltty` (terminal Braille) reclama dispositivos USB serie, incluido el chip CH9329/CH32V208.

### Solución
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Sin vídeo / Pantalla negra

### Pasos

1. **Compruebe el cable HDMI** — bien conectado en ambos extremos
2. **Compruebe el objetivo** — está enviando HDMI (pruebe con un monitor normal)
3. **Pruebe otro cable HDMI**
4. **Reconecte el dispositivo** — la aplicación gestiona eventos de conexión en caliente
5. **Compruebe la detección del chipset de vídeo:** Compatibles: MS2109, MS2109S, MS2130S

### Selección de backend (Qt)

Si un backend muestra pantalla negra, pruebe otro en **Preferencias > Vídeo > Backend de medios**:
- **FFmpeg** — Más fiable (recomendado)
- **GStreamer** — Solo Linux
- **Qt Multimedia** — Alternativa en Windows

### Problemas con GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Pruebe otro sink:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Incompatibilidad EDID

Si el objetivo no reconoce el EDID, puede no enviar una resolución compatible. Pruebe a cambiar la resolución de salida del objetivo o edite el EDID en la configuración de pantalla de la aplicación.

---

## Teclado/ratón no responde

### Pasos

1. **Compruebe el conmutador USB** — asegúrese de que está en **Target**, no Host
2. **Compruebe el estado del puerto serie** — debe mostrar un nombre de puerto, no «N/A»
3. **Pruebe a cambiar la velocidad en baudios** — 9600 o 115200
4. **Compruebe el chipset de control** — Compatibles: CH9329, CH32V208
5. **Compruebe el monitoreo CTS** — La aplicación monitoriza las líneas Clear-To-Send para eventos HID

### Problemas específicos del ratón

- **Modo relativo en macOS:** Requiere permiso de Accesibilidad. Compruebe **Ajustes del sistema > Privacidad y seguridad > Accesibilidad**
- **Modo absoluto:** Verifique que la relación de aspecto coincide con la pantalla del objetivo
- **Retraso del ratón:** Pruebe un preset de mayor rendimiento o aumente la velocidad en baudios
- **Conflictos de puerto serie (Linux):** Cierre otras aplicaciones que usen el puerto: `sudo lsof /dev/ttyUSB0`

---

## El audio no se reproduce

### Pasos

1. **Active el audio** mediante el icono de audio > Enable Audio
2. **Compruebe el permiso del micrófono** — Ajustes del sistema > Privacidad y seguridad > Micrófono (macOS)
3. **Seleccione el dispositivo de entrada correcto** — «OpenterfaceA» o el nombre del dispositivo de captura
4. **Seleccione el dispositivo de salida correcto** — sus altavoces o auriculares
5. **Compruebe la salida de audio HDMI del objetivo** — ¿está configurado para enviar audio por HDMI?

---

## Problemas del controlador USB serie

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Si es necesario, instale el controlador WCH CH34x desde [WCH CH34xDriver en GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Actívelo en **Ajustes del sistema > General > Elementos de inicio y extensiones > Extensiones de controlador**.

### Windows

Si el chip serie no aparece en el Administrador de dispositivos, instale el controlador CH340/CH341. El instalador suele incluirlo; para builds portables, descárguelo por separado.

### Linux

El controlador CH340 (módulo `ch341`) está integrado en el kernel:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Fallo en la actualización del firmware

### Estabilidad USB

- No desconecte durante el flasheo
- No suspenda el ordenador host
- Use un puerto USB directo (evite hubs)

### Recuperación

1. Ciclo de alimentación: desconecte USB, espere 10 segundos, reconecte
2. Vuelva a entrar en modo ISP (algunos dispositivos: mantenga el botón al encender)
3. Use Serial Reset Tool para volver a flashear el bootloader
4. Contacte con soporte si queda bloqueado

---

## Problemas de rendimiento

### Alto uso de CPU

1. **Active la aceleración por hardware** — Preferencias > Vídeo > Aceleración por hardware (VAAPI, V4L2-M2M)
2. **Reduzca la resolución** — 720p usa significativamente menos CPU que 1080p
3. **Reduzca la velocidad de fotogramas** — 15 fps reduce a la mitad la carga de decodificación
4. **Cambie de backend** — FFmpeg con aceleración HW suele usar menos CPU que GStreamer

### Pérdida de fotogramas

Compruebe el contador FPS en la barra de estado. Si el FPS real está por debajo del objetivo, el pipeline está limitado. Active el descarte de fotogramas en el procesador de fotogramas FFmpeg para priorizar una reproducción fluida.

---

## Registro y diagnóstico

### Activar el registro

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferencias > Log > establezca el nivel de registro y la ruta del archivo

### Consola serie (Qt)

Abra mediante **Device > Serial Port Debug** — muestra mensajes del protocolo serie en tiempo real con filtros para Keyboard, Mouse, HID, Chip Info.

---

## Problemas específicos de plataforma

### Linux: plugin de plataforma Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: problemas de vídeo en Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: controlador CH340

Si falla la instalación del controlador: desactive temporalmente la aplicación de firma de controladores e instálelo manualmente desde el Administrador de dispositivos.

### Raspberry Pi: tartamudeo de vídeo

En Pi 3 o Pi 4 con poca memoria:
1. Reduzca la resolución a 720p
2. Use el backend FFmpeg (no GStreamer)
3. Use 9600 baudios para estabilidad serie

---

## Problemas específicos de Android

### Dispositivo no detectado

**Síntoma:** La vista previa de vídeo muestra un marcador de posición, no la pantalla del objetivo.

1. **Compruebe la conexión USB OTG** — desconecte y vuelva a conectar el cable
2. **Verifique compatibilidad OTG** — pruebe a conectar una memoria USB para confirmar que su teléfono admite OTG
3. **Compruebe el dispositivo KVM** — ¿está encendido? ¿Hay luces indicadoras?
4. **Pruebe otro cable** — algunos adaptadores OTG son defectuosos
5. **Reinicie la aplicación** — ciérrela por completo (deslice desde aplicaciones recientes) y ábrala de nuevo
6. **Compruebe el permiso USB** — si un diálogo del sistema pidió acceso USB, asegúrese de pulsar **Allow**

### Sin vídeo

**Síntoma:** El dispositivo se detecta pero la pantalla está negra o congelada.

1. **Compruebe el cable HDMI** — ¿el HDMI del ordenador objetivo está bien conectado a la entrada HDMI del KVM?
2. **Compruebe la salida del objetivo** — ¿el ordenador objetivo muestra realmente algo?
3. **Pruebe una resolución más baja** — abra ajustes → **Video Format** → elija una resolución inferior
4. **Compruebe el permiso de cámara** — Ajustes de Android → Apps → Openterface → Permisos → asegúrese de que Cámara está permitida
5. **Reinicie la aplicación**

### El ratón no responde

**Síntoma:** El vídeo funciona pero tocar la pantalla no hace nada en el objetivo.

1. **Compruebe la conexión USB para HID** — abra ajustes → **Device** y confirme que el dispositivo está activo
2. **Pruebe otro modo de ratón** — cambie de Absolute a Relative o viceversa
3. **Desconecte y reconecte** — use el botón rojo **Disconnect Device** y vuelva a conectar
4. **Compruebe el ordenador objetivo** — ¿reconoce un teclado/ratón USB? Pruebe a desconectar y reconectar el cable USB en el lado del objetivo

### El teclado no envía teclas

**Síntoma:** El ratón funciona pero escribir no hace nada.

1. **Asegúrese de que el teclado está abierto** — pulse el botón de teclado
2. **Compruebe la conexión serie** — abra ajustes → **Device** y confirme que está activa
3. **Compruebe la velocidad en baudios** — abra ajustes → **Baudrate** y asegúrese de que coincide con su dispositivo (115200 por defecto)
4. **Compruebe la distribución del teclado** — asegúrese de que la distribución correcta (US, JP, DE) está seleccionada

### La aplicación se bloquea o se congela

1. **Cierre y reinicie** la aplicación
2. **Reduzca la resolución y velocidad de fotogramas** — ajustes altos pueden saturar dispositivos con poca memoria
3. **Compruebe el almacenamiento disponible** — poco espacio puede causar inestabilidad
4. **Actualice la aplicación** — busque una versión más reciente en Google Play o GitHub Releases

### Las capturas o grabaciones no se guardan

1. **Compruebe el permiso de almacenamiento** — Ajustes de Android → Apps → Openterface → Permisos → Almacenamiento
2. **Compruebe el espacio de almacenamiento disponible** en su dispositivo
3. Las grabaciones y capturas se guardan en la carpeta de medios predeterminada del dispositivo

### Recopilar registros (Android)

Si la solución de problemas estándar no ayuda, recopile registros para compartir con los mantenedores:

```bash
adb logcat | grep -i openterface > openterface.log
```

Incluya este archivo al abrir un issue en GitHub.

---

## Problemas específicos de iPadOS

> **Nota:** iPadOS solo es compatible con **KVM-Go**. Si usa Mini-KVM o uConsole KVM Extension, la aplicación iPadOS no funcionará.

### Bluetooth no se conecta

**Síntoma:** El botón BLE no se pone verde, o no aparecen dispositivos en la lista de escaneo.

1. **Compruebe que Bluetooth está activado** en su iPad — Ajustes > Bluetooth
2. **Asegúrese de que KVM-Go está encendido** — el dongle debe estar conectado al puerto USB del PC objetivo
3. **Acerque el iPad** al dongle KVM-Go — el alcance BLE suele ser de hasta 10 metros
4. **Compruebe el permiso Bluetooth del iPad** — Ajustes > Privacidad y seguridad > Bluetooth > asegúrese de que Openterface está permitido
5. **Pulse Refresh** en la pantalla BLE para reiniciar el escaneo
6. **Compruebe el permiso Bluetooth de la app Openterface** — si se denegó en el primer inicio, vuelva a activarlo en Ajustes

### Sin vista previa de vídeo

**Síntoma:** BLE está conectado pero la pantalla está negra o muestra una imagen guía.

1. **Compruebe la conexión HDMI** — ¿la salida HDMI del PC objetivo está bien conectada a la entrada HDMI del KVM-Go?
2. **Compruebe la salida del objetivo** — ¿el ordenador objetivo muestra realmente algo?
3. **Pruebe una resolución más baja** — pulse el botón Video y seleccione una resolución inferior (720p o 480p)
4. **Compruebe el permiso de cámara** — Ajustes > Privacidad y seguridad > Cámara > asegúrese de que Openterface está permitido
5. **Reinicie la aplicación** — deslice desde aplicaciones recientes y ábrala de nuevo

### Ratón/toque no responde

**Síntoma:** El vídeo funciona pero tocar la pantalla no hace nada en el objetivo.

1. **Compruebe la conexión BLE** — el botón BLE debe estar verde con un valor RSSI
2. **Pruebe otro modo de ratón** — alterne entre Pan Mode e iPencil Mode
3. **Desconecte y reconecte** — abra la pantalla BLE, pulse Disconnect y luego Connect again
4. **Compruebe el ordenador objetivo** — ¿reconoce el KVM-Go como teclado/ratón USB?

### El teclado no envía teclas

**Síntoma:** El ratón funciona pero escribir no hace nada.

1. **Asegúrese de que el teclado flotante está abierto** — pulse el botón Keyboard
2. **Compruebe la conexión BLE** — la entrada pasa por Bluetooth, no USB
3. **Compruebe el modo de teclado** — pruebe a cambiar entre Normal y Game mode
4. **Teclado externo:** si usa un teclado físico de iPad, compruebe que iPadOS enruta los eventos de teclas a la aplicación

### El audio no se reproduce

**Síntoma:** El vídeo funciona pero no oye el PC objetivo a través del iPad.

1. **Compruebe el botón Audio** — debe mostrar un icono de altavoz verde
2. **Compruebe el permiso del micrófono** — Ajustes > Privacidad y seguridad > Micrófono > asegúrese de que Openterface está permitido
3. **Compruebe el volumen del iPad** — asegúrese de que el iPad no está silenciado o al volumen mínimo
4. **Compruebe la salida de audio del objetivo** — ¿el PC objetivo está configurado para enviar audio por HDMI?

### La aplicación se bloquea o se congela

1. **Cierre y reinicie** la aplicación
2. **Reduzca la resolución de vídeo** — alta resolución puede sobrecargar iPads antiguos
3. **Compruebe el almacenamiento disponible** — poco espacio puede causar inestabilidad
4. **Actualice la aplicación** — busque una versión más reciente en la App Store

### Las capturas o grabaciones no se guardan

1. **Compruebe el permiso de Fototeca** — Ajustes > Privacidad y seguridad > Fotos > asegúrese de que Openterface está permitido
2. **Compruebe el almacenamiento disponible** en su iPad
3. **Explore con la app Archivos** — las grabaciones se guardan en `Documents/Recordings/` incluso sin acceso a Fototeca

---

## Restablecimiento de fábrica

1. Use Serial Reset Tool desde Settings (macOS) o el menú Device (Qt)
2. Esto restablece el chip HID a los valores predeterminados de fábrica
3. Reconecte el dispositivo tras el restablecimiento

## Recuperación de conexión

Las aplicaciones gestionan la recuperación automática para:
- Desconexión/reconexión del dispositivo (conexión en caliente para USB, reconexión BLE para iPadOS)
- Tiempo de espera de comunicación
- Reemplazos de chipset (MS2109 → MS2109S → MS2130S)
- Recuperación del puerto serie
- Reconexión BLE automática en iPadOS (hasta 3 intentos con retraso de 2 segundos)

## Enviar informes de defectos

1. Active el registro en archivo
2. Reproduzca el problema
3. Envíe mediante [Issues de GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) o por correo a info@techxartisan.com
