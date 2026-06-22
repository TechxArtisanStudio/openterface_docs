---
title: "Configuración de Software | Módulo de Extensión v2"
description: "Instala y configura la aplicación host de Openterface en tu uConsole para el Módulo de Extensión KVM v2 — captura HDMI, USB HID, conmutación de tarjeta SD y compartición USB."
keywords: "instalación de la app Openterface, configuración de software uConsole, extensión KVM v2, openterfaceqt"
---

# **Configuración de Software** | Módulo de Extensión v2

## Descripción general de la instalación

La aplicación host de Openterface permite que tu uConsole funcione como una interfaz KVM con captura HDMI, control USB HID, **conmutación de tarjeta SD** y **compartición de puerto USB** entre el host y el dispositivo objetivo.

!!! note "Requisitos"
    - **uConsole (host)**: Se requiere la aplicación Openterface QT
    - **Dispositivo objetivo**: No se necesita aplicación — compatible con Windows, macOS, Linux, Android, iOS para KVM
    - **Video**: Cable HDMI estándar; los conversores con alimentación admiten VGA, DP y otros formatos
    - **Backend recomendado**: **GStreamer** para el mejor rendimiento de GPU arm64 (Kali Linux puede tener soporte limitado de GStreamer)

## Métodos de instalación

### **Opción 1: Lanzamientos de GitHub (recomendado para arm64)**

1. Visita [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Descarga el último `.deb` para **arm64** (por ejemplo, `openterfaceqt_*_arm64.deb`).
3. Instala:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Opción 2: Flatpak**

Sigue la [Guía de Instalación de Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Opción 3: Repositorio de la comunidad (ClockworkPi Bookworm)**

Mantenido por Rex para las imágenes de ClockworkPi:

1. **Añade el repositorio**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Instala**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Notas sobre el repositorio"
    Los comandos requieren `sudo`. El repositorio está dirigido a paquetes Bookworm arm64 — verifica la compatibilidad con el sistema operativo de tu uConsole antes de instalar.

## Recordatorios importantes

!!! tip "Encendido y configuración inicial"
    - Mantén el uConsole cargado o con una fuente de alimentación estable — una batería baja puede causar problemas de conexión.
    - Si el control del teclado/ratón falla en el primer intento:
        1. Apaga completamente el uConsole.
        2. Espera al menos 10 segundos.
        3. Enciéndelo y vuelve a intentarlo.

!!! tip "Velocidad de baudios para comunicación serial"
    Establece la velocidad de baudios a **9600** para uso serial — el uConsole puede no mantener de forma fiable 115200.

## Uso

### **Iniciar una sesión KVM**

1. Inicia Openterface QT en tu uConsole.
2. La aplicación detecta automáticamente el Módulo de Extensión v2.
3. Conecta el dispositivo objetivo mediante HDMI y USB.
4. Usa el teclado y el trackball del uConsole para controlar el dispositivo objetivo.

### **Funciones de control**

- **Teclado**: Emulación completa, incluidas las teclas multimedia
- **Ratón**: Posicionamiento absoluto y relativo
- **Audio**: Paso de audio HDMI a los altavoces del uConsole
- **Transferencia de texto**: Pega nombres de usuario, contraseñas y fragmentos como pulsaciones de teclas simuladas
- **Conmutación USB**: Comparte almacenamiento USB entre el uConsole y el dispositivo objetivo mediante la aplicación host — consulta [Conectar al dispositivo objetivo](/products/kvmext/connect-to-target/)
- **Conmutación de tarjeta SD**: Monta la tarjeta SD en el host o en el dispositivo objetivo mediante la aplicación host — consulta [Guía de la tarjeta SD](/products/kvmext/sd-card/)

### **Solución de problemas de instalación de software**

Si la aplicación es difícil de instalar o el ratón/teclado no funcionan:

- Confirma que instalaste la compilación **arm64** en tu uConsole CM4/módulo
- Únete a [Discord](https://openterface.com/discord) para obtener ayuda en tiempo real
- Reporta problemas en [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Relacionado

- [Conectar al dispositivo objetivo](/products/kvmext/connect-to-target/)
- [Guía de la tarjeta SD](/products/kvmext/sd-card/)
- [Preguntas frecuentes](/products/kvmext/faq/)
