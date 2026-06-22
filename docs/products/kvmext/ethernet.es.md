---
title: "Guía de Ethernet | Módulo de Extensión v2"
description: "Elige e instala la tarjeta Ethernet de 100M o 1000M incluida con el Módulo de Extensión KVM Openterface uConsole v2. Requisitos del Upgrade Kit para gigabit."
keywords: "uConsole Ethernet, 100M, 1000M, gigabit, Upgrade Kit, red KVM extension v2"
---

# **Guía de Ethernet** | Módulo de Extensión v2

El Módulo de Extensión v2 incluye **ambas** tarjetas Ethernet, una de 100M y otra de 1000M, en la caja. Instala **una** tarjeta durante la configuración del hardware — no compras versiones de red por separado.

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## ¿Qué tarjeta debo usar?

| Tarjeta | Compatibilidad | Ideal para |
|---------|----------------|------------|
| **Ethernet 100M** | Todas las placas base uConsole | Uso universal, SSH, interfaz web, captura de logs |
| **Ethernet 1000M** | Requiere el **HackerGadgets uConsole Upgrade Kit** | Redes gigabit, transferencias más rápidas |

!!! tip "¿No estás seguro?"
    Comienza con la tarjeta **100M** a menos que ya tengas el Upgrade Kit instalado y confirmado funcionando.

## Opciones de compra y Upgrade Kit

| Opción | Capacidad Ethernet |
|--------|---------------------|
| **Solo Extension v2** | Lista para 100M de fábrica; tarjeta de 1000M incluida pero requiere el Upgrade Kit para gigabit |
| **Extension v2 + Paquete Upgrade Kit** | Lista para gigabit con el Upgrade Kit incluido |

Comparación completa: [Opciones de Compra](/products/kvmext/purchase-options/)

Conoce más sobre el Upgrade Kit de **HackerGadgets** (enlazado desde nuestro [listado en la tienda de TechxArtisan](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)).

## Instalación

1. Completa los pasos 1–2 de la [Instalación de Hardware](/products/kvmext/hardware-installation/) (apagar, retirar el módulo existente).
2. Coloca la tarjeta Ethernet elegida en el Módulo de Extensión v2 según el diseño del módulo.
3. Instala la placa principal en la ranura de expansión y asegura los tornillos.
4. Conecta un cable Ethernet a tu dispositivo de destino o red.

## Escenarios de uso

- **SSH** en servidores sin pantalla mientras los visualizas a través de KVM
- **Gestión web** para routers, switches y dispositivos
- **Captura de logs** y mantenimiento de red en campo
- Flujo de trabajo combinado de **KVM + red** sin adaptadores adicionales

## Relacionado

- [Conectar al Destino](/products/kvmext/connect-to-target/)
- [Casos de Uso](/products/kvmext/use-cases/)
- [Preguntas Frecuentes](/products/kvmext/faq/)
