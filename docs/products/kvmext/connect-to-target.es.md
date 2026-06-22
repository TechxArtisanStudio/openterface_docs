---
title: "Conectar al Dispositivo Objetivo | Módulo de Extensión v2"
description: "Conecta tu dispositivo objetivo al Módulo de Extensión KVM v2 de Openterface uConsole mediante HDMI, USB HID y Ethernet opcional para depuración de red."
keywords: "configuración de conexión KVM, dispositivo objetivo, HDMI, USB HID, depuración Ethernet, uConsole KVM v2"
---

# **Conectar al Dispositivo Objetivo** | Módulo de Extensión v2

## Descripción general de la conexión

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

El Módulo de Extensión v2 se conecta a tu objetivo a través de **HDMI** (video/audio) y **USB** (emulación de teclado/ratón). Opcionalmente usa **Ethernet** para SSH, gestión web o captura de registros mientras KVM maneja la pantalla y la entrada.

## Requisitos previos

1. [Instalación de Hardware](/products/kvmext/hardware-installation/) — módulo colocado en la ranura de expansión
2. [Configuración de Software](/products/kvmext/software-setup/) — Openterface QT instalado en uConsole
3. [Tarjeta Ethernet elegida](/products/kvmext/ethernet/) (si usas funciones de red)

## Pasos de conexión

### **Control USB (requerido para KVM)**

Conecta el **puerto Type-C** de la placa de extensión al puerto USB del dispositivo objetivo. Esto emula el teclado y el ratón (USB HID).

El dispositivo objetivo **no** necesita controladores ni software adicional para el control HID.

### **Entrada de video (requerida para KVM)**

Conecta la salida HDMI del objetivo a la entrada HDMI del módulo de extensión:

- Cable HDMI estándar para salidas HDMI
- Convertidor **VGA-a-HDMI** para VGA (asegúrate de que la alimentación USB del convertidor esté conectada)
- Otros adaptadores para DVI, DisplayPort, Micro HDMI según sea necesario

### **Ethernet (opcional — depuración de red)**

Si instalaste una tarjeta de red:

- Conecta un cable Ethernet desde la tarjeta a tu dispositivo objetivo o conmutador de red
- Usa el uConsole para SSH, interfaz web o captura de registros junto con KVM
- Consulta la [Guía Ethernet](/products/kvmext/ethernet/) para la configuración 100M vs 1000M

### **Tarjeta SD (opcional — imágenes y archivos)**

Inserta una tarjeta microSD en la ranura del módulo. Usa la aplicación host para alternar el acceso entre uConsole y el objetivo. Consulta la [Guía de Tarjeta SD](/products/kvmext/sd-card/).

## Conmutación compartida USB 2.0

La aplicación host puede conmutar un puerto USB 2.0 compartido entre el uConsole y el objetivo — útil para unidades flash y flujos de trabajo de mantenimiento sin desconectar cables.

## Probar la conexión

1. Enciende el uConsole y arranca el dispositivo objetivo
2. Inicia Openterface QT
3. Confirma que el video HDMI aparezca en la pantalla del uConsole
4. Prueba el teclado, trackball y paso de audio
5. Si usas conmutación SD o USB, prueba el montaje/conmutación en la aplicación host

## Relacionado

- [Casos de Uso](/products/kvmext/use-cases/) — escenarios de TI de campo, homelab, depuración embebida
- [Preguntas Frecuentes](/products/kvmext/faq/) — solución de problemas
