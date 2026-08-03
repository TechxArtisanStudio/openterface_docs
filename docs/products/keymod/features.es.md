---
title: "Funciones y especificaciones"
description: "Funciones KeyMod Series: teclado y ratón HID Bluetooth, conexión dual USB + Bluetooth, perfiles personalizados, macros, modos gamepad, controles de presentación, hub de atajos. Aplicación móvil de código abierto para Android e iOS."
keywords: "funciones KeyMod Series, emulador HID, teclado Bluetooth, teclado USB, botones programables, gamepad, macro, código abierto, CH9329, hub de atajos, modo presentación"
---

# **Funciones y especificaciones** | Openterface KeyMod Series

## Estado actual

KeyMod está en desarrollo activo con una [beta pública](/tutorial/keymod/) disponible para Android. Suscríbete en la [página del producto](/products/keymod/) para mantenerte informado sobre las notificaciones de lanzamiento.

> **Nota:** Las funciones, especificaciones y diseño están sujetos a cambios a medida que continúa el desarrollo.

## Variantes de producto

- **Versión Mini** — Solo conector Type C macho
- **Versión Plus** — Conector Type A macho y conector Type C hembra

## Funciones principales

### **Teléfono como teclado y trackpad**

KeyMod convierte tu teléfono en una consola de teclado y trackpad portátil. Úsalo cuando no haya un teclado y ratón completos disponibles, o cuando quieras un flujo de trabajo más rápido que cambiar de dispositivos. Ideal para ordenadores de pantallas exteriores, reproductores de cartelería LED, quioscos, smart TVs y decodificadores.

### **Conexión dual: USB + Bluetooth**

- **USB** — Conexión por cable plug-and-play para entrada fiable y de baja latencia
- **Bluetooth** — Configuración sin cables cuando el escenario lo permita; mantén tu configuración ligera y portátil

KeyMod está diseñado para el control local práctico de dispositivos del día a día, no como reemplazo del escritorio remoto.

### **Aplicación móvil de código abierto**

Con nuestra aplicación móvil de código abierto puedes:

- **Teclado y ratón (Basic)** — Teclado de pantalla completa con repetición por pulsación larga, vista previa de teclas y teclado numérico
- **Teclado y ratón Pro** — Diseño compuesto con tiras Shortcut Hub, teclado dividido e IME
- **Modo presentación** — Control remoto de diapositivas con temporizador para Google Slides y otras aplicaciones
- **Gamepad** — Controlador virtual con diseños predeterminados personalizables y soporte multi-touchpad
- **Hub de atajos** — Atajos de teclado basados en perfiles para herramientas creativas y de desarrollo (Blender, KiCAD, Photoshop, VS Code), con creación, importación y exportación
- **Macros** — Secuencias de teclas programables con retardos
- **Entrada de voz** — Speech-to-keyboard con IA (Whisper API)
- **Terminal** — SSH por Bluetooth para acceso remoto a comandos
- **Agent** — Interacción directa con IA mediante HID o comandos SSH para controlar otra computadora

La aplicación **KeyCmd** se centra en **Android** e **iOS** (incluido iPadOS). También funciona con **KVM-GO** mediante USB o Bluetooth. También estamos ampliando el control de escritorio con software **Windows y macOS** en nuestro ecosistema Openterface más amplio.


### **HID de hardware real**

Construido sobre el núcleo HID probado de Openterface Mini-KVM. Emulación de teclado y ratón basada en hardware — no se requiere instalación de software en el dispositivo de destino.

### **Código abierto**

KeyMod es hardware y software abiertos. Publicaremos esquemas, archivos PCB, firmware, software y BOM a medida que el proyecto evolucione. [Únete a nuestra comunidad](/discord) para contribuir y mantenerte actualizado.

## Especificaciones técnicas

### **Conectividad**

- **USB**: La versión Mini utiliza conector Type C macho; la versión Plus utiliza conector Type A macho y conector Type C hembra
- **Bluetooth**: Teclado y ratón HID
- **Objetivo**: No se requiere instalación de software

### **Hardware clave**

- Chip CH32V208 (protocolo compatible CH9329)
- Conector(es) USB: la versión Mini utiliza Type C macho; la versión Plus utiliza Type A macho y Type C hembra
- MCU
- Botón(es) programable(s)

### **Funciones de entrada**

- Emulación completa de teclado y ratón (HID)
- Perfiles de entrada personalizados (niveles Basic y Pro)
- Macros y atajos de teclado
- Hub de atajos con perfiles específicos para aplicaciones
- Gamepad con diseños basados en presets (esquema v7)
- Controles de presentación con temporizador de diapositivas
- Speech-to-keyboard con IA
