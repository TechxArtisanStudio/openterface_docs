---
title: "Actualización de firmware KVM-Go"
description: KVM-Go utiliza el chip CH32V208 de WCH para la emulación de teclado y ratón. Actualmente, el flasheo de firmware requiere la herramienta de programación…
---

# Actualización de firmware KVM-Go

## Descripción general

KVM-Go utiliza el chip CH32V208 de WCH para la emulación de teclado y ratón. Actualmente, el flasheo de firmware requiere la herramienta de programación oficial de WCH, disponible solo para Windows. Por lo tanto, las actualizaciones de firmware deben realizarse en un sistema Windows por ahora.

Estamos trabajando activamente en una solución de actualización de firmware multiplataforma de desarrollo propio que se integrará directamente en el dispositivo. Una vez lista, admitirá actualizaciones de firmware en todos los sistemas operativos principales, sin herramientas de terceros.

> **Nota:** Este procedimiento manual de actualización de firmware es una solución temporal para unidades de desarrollo temprano. Para productos de producción oficiales, las actualizaciones de firmware se integrarán perfectamente en nuestro software, permitiéndole actualizar el firmware directamente a través de la aplicación sin herramientas de terceros ni procedimientos manuales.

## Requisitos previos

Antes de continuar, asegúrese de tener:

- Un ordenador Windows
- La herramienta WCH ISP Tool instalada
- El archivo de firmware (formato `.hex`) listo para flashear

### Descargar firmware

Descargue el último archivo de firmware KVM-Go:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — Último firmware para emulación de teclado y ratón KVM-Go (chip CH32V208)

Guarde el archivo de firmware en una ubicación de fácil acceso en su ordenador Windows antes de proceder con la actualización.

### Descargar WCH ISP Tool

Descargue e instale [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (solo Windows).

¡Gracias por su paciencia y apoyo!

## Instrucciones paso a paso

### Paso 1: Descargar y abrir la herramienta en Windows

Inicie WCH ISP Tool en su ordenador Windows.

![Interfaz de WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Paso 2: Preparar el KVM-Go para flashear

Para flashear firmware en el KVM-Go:

1. Asegúrese de que el dispositivo esté apagado
2. Mantenga pulsado el botón mientras lo conecta a un puerto USB Type-C

**Consejo:** Puede flashear usando cualquier puerto, pero el puerto «target» tiende a ser más estable durante el flasheo.

![Cableado y configuración de conexión KVM-Go](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Paso 3: Seleccionar el archivo de firmware

Si la conexión es exitosa, la herramienta detectará automáticamente el modelo de chip (serie CH32V20X).

1. Haga clic en el botón «...» para buscar y seleccionar el archivo de firmware a flashear
2. Seleccione el archivo de firmware `.hex`
3. **Importante:** Recuerde marcar la casilla junto al archivo de firmware

![Modelo de chip detectado en WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Buscar y seleccionar archivo de firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Archivo de firmware seleccionado con casilla marcada](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Paso 4: Desproteger el firmware actual

Antes de flashear el nuevo firmware, debe eliminar la protección de escritura del firmware actual:

1. Haga clic en la opción «Deprotect» en la herramienta
2. Pulse brevemente el botón físico del KVM-Go para entrar en modo flasheo
3. Espere a que se complete el proceso de desprotección

![Opción Deprotect en la herramienta](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Pulsar botón del KVM-Go para entrar en modo flasheo](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Paso 5: Descargar y flashear el firmware

Una vez desprotegido y seleccionado el firmware:

1. Haga clic en el botón «Download» en la herramienta de flasheo
2. Espere a que se complete el proceso de flasheo
3. La herramienta indicará cuando el firmware se haya flasheado correctamente

![Proceso de descarga y flasheo de firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Lecturas adicionales

- [Guía de reseña Openterface KVM-Go](review-guide.md) — Notas importantes y problemas conocidos para unidades prototipo de ingeniería
