---
title: "Guía de tarjeta SD | Extension Module v2"
description: "Utiliza la lectura/escritura de tarjeta SD en el Extension Module v2 para KVM uConsole de Openterface. Cambia el acceso entre uConsole y el dispositivo objetivo para crear imágenes, exportar registros y transferir archivos."
keywords: "tarjeta SD, microSD, extensión KVM v2, grabación de imágenes, transferencia de archivos, uConsole"
---

# **Guía de tarjeta SD** | Extension Module v2

El Extension Module v2 incluye **lectura/escritura de tarjeta SD** para que puedas grabar imágenes, exportar registros y transferir archivos desde tu uConsole sin necesidad de llevar un lector de tarjetas externo.

## Descripción general

El módulo proporciona una ranura para microSD compartida entre la **uConsole (host)** y el **dispositivo objetivo** — similar en concepto al flujo de trabajo de conmutación MicroSD de KVM-GO, pero integrado en el módulo de expansión de la uConsole.

!!! note "Un lado a la vez"
    La tarjeta SD se monta en la uConsole **o** en el dispositivo objetivo, nunca en ambos simultáneamente. Cambia el acceso utilizando la aplicación host de Openterface.

## Instalar la tarjeta SD

Inserta la tarjeta microSD firmemente hasta que quede bien asentada en la ranura del módulo.

## Control mediante la aplicación host

Utiliza **Openterface QT** en tu uConsole para:

- Cambiar el acceso a la SD entre el **host** (uConsole) y el **objetivo**
- Grabar imágenes de sistemas operativos en la tarjeta desde la uConsole
- Exportar registros o transferir archivos sin extraer la tarjeta

Asegúrate de haber completado la [Configuración de software](/products/kvmext/software-setup/) antes de utilizar las funciones de SD.

## Flujos de trabajo habituales

| Flujo de trabajo | Descripción |
|----------|-------------|
| **Grabación de SO** | Grabar imágenes de Raspberry Pi, placas integradas o dispositivos desde la uConsole |
| **Exportación de registros** | Extraer registros del dispositivo objetivo a la tarjeta y luego leerlos en la uConsole |
| **Transferencia de archivos** | Mover configuraciones o scripts entre la uConsole y el objetivo cuando la red no está disponible |

## Consejos de seguridad

- **Expulsar/desmontar** en la aplicación host antes de extraer físicamente la tarjeta
- Cambiar al lado correcto (host u objetivo) antes de las operaciones de lectura/escritura
- Utilizar tarjetas microSD de calidad para tareas de grabación de imágenes

## Relacionado

- [Conectar al objetivo](/products/kvmext/connect-to-target/)
- [Configuración de software](/products/kvmext/software-setup/)
- [Guía de conmutación MicroSD de KVM-GO](/products/kvmgo/microsd-switch/) — concepto de conmutación similar en KVM-GO
