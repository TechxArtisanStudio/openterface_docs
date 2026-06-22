---
title: "Preguntas frecuentes | Extension Module v2"
description: "Preguntas frecuentes para el Openterface uConsole KVM Extension Module v2: tarjetas Ethernet, Upgrade Kit, tarjeta SD, configuración de software, compatibilidad y solución de problemas."
keywords: "Preguntas frecuentes KVM extension v2, uConsole KVM, Ethernet, tarjeta SD, solución de problemas, Upgrade Kit"
---

# Preguntas frecuentes | Extension Module v2

Bienvenido a las preguntas frecuentes del **Openterface uConsole KVM Extension Module v2**.

Si no encuentras lo que necesitas, envía un correo a [support@openterface.com](mailto:support@openterface.com) o únete a nuestra comunidad en [Discord](/discord).

---

## :material-clipboard-list: Navegación rápida

- [Producto y compra](#producto-y-compra)
- [Instalación y hardware](#instalación-y-hardware)
- [Compatibilidad](#compatibilidad)
- [Control y funciones](#control-y-funciones)
- [Vídeo y audio](#vídeo-y-audio)
- [Solución de problemas](#solución-de-problemas)
- [Más](#más)

---

## Producto y compra

**:material-chat-question:{ .faq } ¿Es el Extension Module v2 un solo producto o dos versiones de red?**

Es **un solo producto**. Tanto la tarjeta Ethernet de 100M como la de 1000M están incluidas en la caja. Consulta las [Opciones de compra](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } ¿Qué tarjeta Ethernet debo usar?**

Usa la tarjeta de **100M** en todas las placas base uConsole. Usa la tarjeta de **1000M** solo si tienes el **HackerGadgets uConsole Upgrade Kit** y necesitas red gigabit. Consulta la [Guía de Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } ¿Necesito el HackerGadgets uConsole Upgrade Kit?**

Solo para **Ethernet gigabit**. La tarjeta de 100M funciona sin el Upgrade Kit. Si no tienes el kit, elige la opción de paquete al finalizar la compra o compra el kit por separado.

**:material-chat-question:{ .faq } ¿Está incluido el uConsole?**

No. El dispositivo ClockworkPi uConsole se vende por separado.

---

## Instalación y hardware

**:material-chat-question:{ .faq } ¿Cómo funciona el Extension Module v2?**

Captura la señal HDMI de un dispositivo objetivo y la muestra en el uConsole. El teclado y el trackball del uConsole controlan el objetivo mediante emulación USB HID. Las funciones opcionales de Ethernet y tarjeta SD amplían los flujos de trabajo de depuración de red y creación de imágenes.

**:material-chat-question:{ .faq } ¿Puedo usar esto con el módulo 4G/LTE instalado?**

No. El Extension Module v2 usa la ranura de expansión del uConsole y **no puede** usarse al mismo tiempo que el módulo 4G o LTE.

**:material-chat-question:{ .faq } ¿Qué herramientas necesito para la instalación?**

Un destornillador hexagonal para los tornillos de montaje. Se recomiendan precauciones contra descargas electrostáticas (ESD).

**:material-chat-question:{ .faq } ¿Es reversible la instalación?**

Sí. Retira el Extension Module v2 y reinstala tu módulo 4G/LTE original si es necesario.

---

## Compatibilidad

**:material-chat-question:{ .faq } ¿Qué modelos de uConsole son compatibles?**

Compatible con dispositivos uConsole que tengan la ranura de expansión estándar. Revisa las especificaciones de tu dispositivo para confirmarlo.

**:material-chat-question:{ .faq } ¿Qué dispositivos objetivo puedo controlar?**

Cualquier dispositivo con salida HDMI: ordenadores de escritorio, servidores, SBC (Raspberry Pi, etc.), sistemas embebidos, PC industriales y más.

**:material-chat-question:{ .faq } ¿El objetivo necesita software especial?**

No. El KVM usa emulación USB HID; no se requieren controladores en el objetivo para el teclado y el ratón. Obtén más información sobre la [tecnología KVM basada en USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } ¿Puedo controlar varios objetivos a la vez?**

Un objetivo a la vez para KVM. Cambia de objetivo moviendo los cables HDMI y USB.

---

## Control y funciones

**:material-chat-question:{ .faq } ¿Puedo transferir archivos mediante tarjeta SD?**

Sí. El Extension Module v2 admite lectura y escritura de tarjetas SD con conmutación de host/objetivo a través de la aplicación Openterface. Consulta la [Guía de la tarjeta SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } ¿Admite acceso a nivel de BIOS?**

Sí. El USB HID directo permite un acceso completo a la BIOS/UEFI sin dependencias de red.

**:material-chat-question:{ .faq } ¿Qué hay del módulo heredado v1?**

El módulo de primera generación de 37 × 77 mm (sin Ethernet/SD) está documentado en [Documentación heredada v1](/products/kvmext/v1/).

---

## Vídeo y audio

**:material-chat-question:{ .faq } ¿Qué resoluciones de vídeo son compatibles?**

- **Entrada**: Hasta 4K @ 30 Hz (RGB/YCBCR444) o 4K @ 60 Hz (YCBCR420) a través de HDMI
- **Salida**: 1080p @ 60 Hz en la pantalla del uConsole

**:material-chat-question:{ .faq } ¿Cuál es la latencia de vídeo?**

Menos de **70 ms**; adecuada para acceso a BIOS, mantenimiento y diagnósticos.

**:material-chat-question:{ .faq } ¿Se admite el audio?**

Sí. El audio integrado en HDMI se transmite a los altavoces del uConsole.

---

## Solución de problemas

**:material-chat-question:{ .faq } No hay señal de vídeo**

- Revisa las conexiones HDMI en ambos extremos
- Verifica que el objetivo esté encendido y emitiendo señal a través de HDMI
- Prueba con un cable HDMI diferente
- Reinicia Openterface QT

**:material-chat-question:{ .faq } El teclado o el ratón no funcionan**

- Confirma el cable USB desde el módulo de extensión hasta el objetivo
- Apaga completamente el uConsole, espera 10 segundos, enciéndelo y vuelve a intentarlo
- Reinstala Openterface QT (compilación arm64 para tu uConsole)
- Reporta tu distribución de Linux y el módulo CM4 en [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) o [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Fue difícil instalar el software**

Prueba con GitHub Releases (Opción 1) o el repositorio de la comunidad de ClockworkPi (Opción 3) en [Configuración del software](/products/kvmext/software-setup/). Únete a [Discord](https://openterface.com/discord) para obtener ayuda paso a paso.

**:material-chat-question:{ .faq } El puerto de conmutación USB no funciona**

Asegúrate de tener una versión reciente de Openterface QT. Alterna el acceso USB en la aplicación host. Si el problema persiste, abre un issue en [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } El HDMI solo se muestra en un recuadro / no hay menú de configuración de la app**

Actualiza a la última versión de Openterface QT. Revisa la [Configuración del software](/products/kvmext/software-setup/) y los hilos de la comunidad en Discord para conocer la configuración de pantalla específica del uConsole.

**:material-chat-question:{ .faq } La aplicación no detecta el módulo**

- Vuelve a colocar la placa en la ranura de expansión
- Reinicia el uConsole
- Reinstala Openterface QT

---

## Más

**:material-chat-question:{ .faq } ¿El software es de código abierto?**

Sí. Las aplicaciones host de Openterface son de código abierto en [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } ¿Dónde puedo obtener soporte?**

- **Correo electrónico**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Únete a nuestra comunidad](https://openterface.com/discord)
- **GitHub**: [Reportar problemas](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
