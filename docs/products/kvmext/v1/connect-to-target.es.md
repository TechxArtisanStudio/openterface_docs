---
title: "Conectar al Dispositivo Objetivo (Legacy v1)"
description: "Aprende cómo conectar tu dispositivo objetivo a la Openterface KVM Extension for uConsole. Guía completa para la configuración del control USB y entrada de vídeo después de la instalación de hardware y configuración de software."
keywords: "configuración conexión KVM, conexión dispositivo objetivo, configuración control USB, configuración entrada HDMI, conexión extensión KVM uConsole"
---

# **Conectar al Dispositivo Objetivo** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## Resumen de Conexión

![extension-use-case-1a](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## Prerrequisitos

Antes de conectar tu dispositivo objetivo, asegúrate de haber completado:

1. [Instalación de Hardware](/products/kvmext/hardware-installation/) - Instalación física de la placa Extension KVM
2. [Configuración de Software](/products/kvmext/software-setup/) - Instalación de la App Openterface

## Pasos de Conexión

### **Control USB**
Conecta el puerto hembra Type-C al puerto USB del dispositivo objetivo para emular señales de teclado y ratón.

### **Entrada de Vídeo**
Conecta la salida de vídeo del dispositivo objetivo al puerto HDMI en la Extension KVM:

- Usa cable HDMI estándar para dispositivos con salida HDMI
- Usa cable convertidor VGA-to-HDMI para dispositivos con salida VGA.
    - *Nota*: Asegúrate de que el convertidor esté alimentado a través de su conector USB para un funcionamiento correcto.
- Usa otros adaptadores apropiados para diferentes tipos de señales de vídeo

## Probar la Conexión

1. Enciende la alimentación y arranca el uConsole
2. Ejecuta la app Openterface QT
3. Prueba las funcionalidades HDMI, audio y USB HID para confirmar el funcionamiento correcto
