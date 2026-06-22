---
title: "Instalación de Hardware | Módulo de Extensión v2"
description: "Instala el Módulo de Extensión KVM v2 de Openterface para uConsole en la ranura de expansión. Elige tu tarjeta Ethernet y conecta HDMI y USB a tu objetivo."
keywords: "instalación extensión KVM v2, configuración hardware uConsole, ranura de expansión, instalación tarjeta Ethernet"
---

# **Instalación de Hardware** | Módulo de Extensión v2

## Descripción General

El Módulo de Extensión v2 encaja en la **ranura de expansión** de la uConsole (la misma ranura utilizada por el módulo 4G/LTE). No se puede usar al mismo tiempo que el módulo 4G o LTE — elige la funcionalidad celular **o** KVM.

## Lo que Necesitarás

- [Contenido del paquete](/products/kvmext/whats-in-the-box/) verificado antes de la instalación
- Placa del Módulo de Extensión v2 de Openterface
- **Una tarjeta Ethernet** (100M o 1000M — consulta la [Guía de Ethernet](/products/kvmext/ethernet/))
- Cubierta de la ranura de expansión (incluida)
- Destornillador hexagonal para los tornillos de montaje
- Protección ESD (pulsera antiestática o superficie conectada a tierra) — recomendado

## Pasos de Instalación

### **1. Apagar**

Apaga la uConsole y desconecta toda la alimentación y los cables.

### **2. Retirar el módulo existente**

Si hay un módulo de expansión 4G/LTE u otro instalado:

- Usa un destornillador hexagonal para retirar los dos tornillos de montaje.
- Levanta la placa **directamente hacia arriba** para evitar doblar los contactos de resorte.
- Guarda el módulo original y los tornillos de forma segura si planeas reinstalarlo más tarde.

### **3. Elegir tu tarjeta Ethernet**

Antes de asentar la placa principal, decide qué tarjeta instalar:

| Tarjeta | Cuándo usar |
|---------|-------------|
| **100M** | Todas las placas base de uConsole — compatibilidad universal |
| **1000M** | Solo si tienes el **Kit de Actualización uConsole de HackerGadgets** y necesitas gigabit |

Consulta la [Guía de Ethernet](/products/kvmext/ethernet/) para obtener todos los detalles.

### **4. Instalar el Módulo de Extensión v2**

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:240px"}

- Asienta el Módulo de Extensión v2 firmemente en la ranura de expansión.
- Asegúrate de que los contactos de resorte se alineen uniformemente sobre todos los pads.
- Vuelve a insertar los tornillos de montaje y apriétalos **suavemente** — no los aprietes en exceso.

### **5. Verificar la instalación**

La placa debe quedar **plana y estable** sin bamboleos notables. Todos los contactos de resorte deben presionar de manera uniforme.

### **6. Instalar la cubierta de la ranura de expansión**

Reinstala la cubierta de la ranura de expansión para proteger el módulo y mantener la apariencia de la uConsole.

??? note "Orientación del texto en la cubierta de la ranura de expansión"
    El texto en la cubierta puede parecer boca abajo desde algunos ángulos de visión. Está orientado para ser legible cuando sostienes la uConsole y miras los puertos desde arriba — la posición natural durante su uso.

---

**Próximos pasos**

1. [Configuración del Software](/products/kvmext/software-setup/) — instala la aplicación host de Openterface en tu uConsole
2. [Conectar al Objetivo](/products/kvmext/connect-to-target/) — cableado HDMI + USB
3. [Características y Especificaciones](/products/kvmext/features/) — especificaciones técnicas completas

## Instalación Legacy v1

El módulo de primera generación (37 × 77 mm) usaba arandelas para compensar el grosor de la PCB. Consulta [Legacy v1 — Instalación de Hardware](/products/kvmext/v1/hardware-installation/).
