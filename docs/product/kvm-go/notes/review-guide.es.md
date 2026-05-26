# Openterface KVM-Go — Guía de reseña (Prototipo de ingeniería)

## Descripción general

Gracias por dedicar tiempo a probar nuestro próximo producto **[Openterface KVM-Go](https://openterface.com/product/kvm-go/)**.

Esta unidad es un **prototipo de ingeniería**, y nuestro firmware y software evolucionan rápidamente. Sus comentarios nos ayudarán directamente a mejorar el producto antes de la producción en masa.

Si encuentra algún problema durante las pruebas, contáctenos directamente. **Proporcionaremos soporte inmediato para ayudarle a resolverlos antes de grabar su video.**

## Notas importantes

### Aviso de prototipo

Este dispositivo es un **prototipo de ingeniería**. El firmware y el software pueden contener errores o funciones incompletas. Si experimenta inestabilidad o algo que bloquee su flujo de trabajo, infórmenos. Corregiremos los problemas antes de enviar la versión de producción.

### Use el software más reciente

Para el mejor rendimiento y compatibilidad, use la **última versión** del [software Openterface](https://openterface.com/app/overview/) desde nuestra página de GitHub Releases. Actualizamos con frecuencia, y las versiones anteriores pueden no coincidir con el firmware de su prototipo.

## Problemas conocidos y explicaciones

> **Nota:** Todos los problemas listados a continuación se abordarán antes del lanzamiento de producción.

### Temperatura superficial

El dispositivo puede sentirse caliente o incluso muy caliente durante el uso. Esto es esperado porque el prototipo usa chips de mayor rendimiento.

Tenga en cuenta:

* Todas las temperaturas permanecen dentro del rango de operación seguro
* **Sensores de temperatura** integrados informan el estado térmico en tiempo real en el software
* Pruebas de estrés de varios días no muestran problemas de estabilidad

Continuaremos refinando el rendimiento térmico antes de la producción en masa.

### Distribución de software

Actualmente admitimos múltiples plataformas:

* **macOS y Windows**
  Estas son las plataformas más estables y recomendadas para pruebas completas.

* **Linux**
  Use la versión **AppImage**.
  Los paquetes `.deb` y `.rpm` pueden tener problemas de dependencias según la distribución. Estamos mejorando estos instaladores.

* **Android**
  Hay una versión funcional en **Google Play** para control básico y monitoreo.
  Puede probarla si desea explorar flujos de trabajo móviles.

* **iPadOS**
  Disponible a través de **TestFlight**.
  Si desea probarlo, envíeme su **Apple ID** y lo agregaré a la lista de probadores.

### Funcionalidad de copiar y pegar

El firmware de su unidad puede no incluir nuestras últimas correcciones del portapapeles. Estos problemas ya se han resuelto en el firmware más reciente. Puede actualizar usando la [Guía de actualización de firmware](firmware-upgrade.md) si desea probar la última versión.

### Desmontaje (Opcional)

Si disfruta de los desmontajes, puede desarmar la unidad.

Su prototipo incluye los siguientes componentes:

* **MS2130S** — Chip de captura de video
* **WCH CH32V208** — MCU de emulación de teclado y ratón USB
* **Pasta térmica de silicona estándar** — aplicada en este prototipo

Actualmente estamos probando una solución térmica mejorada con **componentes de aluminio** y **grasa térmica de alto rendimiento**. Estas mejoras han pasado pruebas internas, pero debido al stock limitado de prototipos, **aún no** están incluidas en las unidades de reseña.

Su unidad aún usa **pasta de silicona**, pero el rendimiento térmico permanece dentro de límites seguros.

### Funciones avanzadas (Compatibles en Mini-KVM, próximamente en KVM-Go)

KVM-Go sigue la misma filosofía de diseño que Openterface Mini-KVM. Varias funciones avanzadas están en desarrollo activo pero **aún no disponibles** en el prototipo actual:

* **EDID personalizado**
  Mini-KVM permite cargar o modificar EDID a través de nuestra aplicación QT para resolver problemas de compatibilidad.
  También llevaremos esta función a KVM-Go.

* **Conmutación de tarjeta SD por software**
  Mini-KVM admite conmutar su puerto USB-A entre el host y la PC mediante software.
  Para KVM-Go, estamos desarrollando una conmutación similar por software para la ranura micro-SD, pero aún no está habilitada en su firmware.

Queremos que conozca estas funciones próximas aunque aún no estén activas en su unidad.

### Compromiso de código abierto

Sí, KVM-Go seguirá siendo completamente de código abierto. Una vez finalizado el diseño de hardware para producción en masa, solicitaremos la certificación OSHWA (Open Source Hardware Association). Todos los archivos de diseño de hardware y modelos STL se subirán a nuestro repositorio GitHub: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Lecturas adicionales

* [Actualización de firmware KVM-Go](firmware-upgrade.md) — Guía paso a paso para actualizar su dispositivo
