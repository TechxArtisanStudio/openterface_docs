---
title: "Características y Especificaciones | Módulo de Extensión v2"
description: "Descripción completa del Módulo de Extensión KVM Openterface uConsole v2: KVM HDMI, Ethernet dual, tarjeta SD, conmutación USB y especificaciones técnicas."
keywords: "características extensión KVM v2, uConsole KVM, KVM HDMI, expansión Ethernet, tarjeta SD, KVM portátil, especificaciones técnicas"
---

# **Características y Especificaciones** | Módulo de Extensión v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Características Principales

- **Control KVM Directo**: Visualiza y controla un dispositivo objetivo a través de la entrada HDMI y la emulación de teclado/ratón USB HID — ideal para acceso a BIOS, instalación de SO y recuperación de servidores headless.
- **Soporte para Tarjetas de Red Duales**: Se incluyen tarjetas Ethernet de **100M** y **1000M**. Usa la de 100M en todas las placas base uConsole; usa la de 1000M con el [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) para redes gigabit.
- **Lectura/Escritura de Tarjeta SD**: Escribe imágenes, exporta registros y transfiere archivos desde tu uConsole sin necesidad de un lector de tarjetas externo.
- **Conmutación Compartida USB 2.0**: Cambia el acceso USB entre la uConsole y el dispositivo objetivo para una depuración y mantenimiento flexibles.
- **Baja Latencia**: Latencia de video inferior a **70 ms** con salida de **1080p @ 60 Hz** a la pantalla de la uConsole.
- **Portátil y Alimentado por Ranura**: Diseño compacto de **77.3 × 34.7 mm**, alimentado desde la ranura de expansión de la uConsole — sin adaptador de corriente externo.
- **Alineado con el Código Abierto**: Construido sobre la plataforma KVM de Openterface con aplicaciones host abiertas y soporte de la comunidad.

## Especificaciones Técnicas

| Elemento | Especificación |
|------|---------------|
| **Nombre del producto** | Openterface uConsole KVM Extension Module v2 |
| **Tamaño de la placa** | 77.3 × 34.7 mm |
| **Entrada de video** | HDMI hasta 4K @ 30 Hz (RGB/YCBCR444) o 4K @ 60 Hz (YCBCR420) |
| **Salida de video** | 1080p @ 60 Hz a la pantalla de la uConsole |
| **Latencia** | < 70 ms |
| **Control KVM** | Emulación de teclado y ratón USB HID |
| **Red** | 100M funciona en todas las placas base uConsole; 1000M requiere el uConsole Upgrade Kit |
| **Tarjeta SD** | Lectura/escritura con conmutación host/objetivo a través de la aplicación host |
| **Compartición USB** | Conmutación compartida USB 2.0 Full Speed (12 Mbps) |
| **Plataformas objetivo** | Windows, macOS, Linux, sistemas x86, SBC ARM |
| **Alimentación** | Alimentado por la ranura de expansión de la uConsole |
| **Alimentación externa** | No requerida |

### Emulación Completa de Teclado y Ratón

- **USB HID**: Posicionamiento absoluto y relativo del ratón, soporte completo de teclado, teclas multimedia.
- **Conexión**: Enlace USB al objetivo a través del puerto Type-C de la placa de extensión.

### Video y Audio

- **Entrada**: Hasta 4K vía HDMI (ver tabla arriba para detalles de los modos)
- **Salida**: Full HD 1080p @ 60 Hz con menos de 70 ms de latencia
- **Pantalla**: Utiliza la pantalla integrada de la uConsole
- **Compresión**: Soporte para YUV y MJPEG
- **Compatibilidad**: VGA, DVI, Micro HDMI (mediante adaptadores)
- **Audio**: Paso de audio integrado HDMI

### Conectividad y Alimentación

- **Alimentación**: Obtiene energía directamente de la ranura de expansión de la uConsole
- **Software objetivo**: No requiere instalación en el dispositivo objetivo

## Relacionado

- [Guía de Ethernet](/products/kvmext/ethernet/) — elige entre tarjeta de 100M y 1000M
- [Guía de Tarjeta SD](/products/kvmext/sd-card/) — grabación de imágenes y transferencia de archivos
- [Opciones de Compra](/products/kvmext/purchase-options/) — Solo Extensión vs paquete Upgrade Kit
- [Especificaciones heredadas v1](/products/kvmext/v1/features/) — módulo de primera generación
