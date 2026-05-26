---
title: "KeyMod Tutorial - Solución de problemas"
description: "Solucione problemas KeyMod comunes: problemas de conexión, claves que no se registran, fallas de emparejamiento de Bluetooth, errores de entrada de voz y más."
keywords: "KeyMod solución de problemas, KeyMod no se conecta, KeyMod problemas de Bluetooth, KeyMod teclas no funcionan"
---

# 12. Solución de problemas

Problemas comunes y soluciones para la aplicación KeyMod en Android.

## Problemas de conexión

### No conectado

| Síntoma | Solución |
|---|---|
| **Indicador "No conectado"** | Verifique la conexión del cable; intente volver a enchufarlo. Para BLE, activa o desactiva Bluetooth y vuelve a emparejarlo. |
| **USB permiso denegado** | Vaya a Android Configuración → Aplicaciones → KeyMod → Permisos → habilitar USB. Vuelva a enchufar el cable. |
| **Bluetooth no se empareja** | Activa o desactiva Bluetooth. Olvídese del dispositivo en la configuración de Bluetooth y vuelva a emparejarlo. Asegúrese de que el dispositivo KeyMod esté en modo de emparejamiento. |
| **La conexión se cae con frecuencia** | Verifique el valor RSSI debajo de BLE button en la aplicación. Por debajo de -75 dBm indica señal débil; acérquese. Retire las obstrucciones físicas. |

### Indicadores de estado de conexión

| Indicador | Significado |
|---|---|
| **Conectado** | Icono verde: listo para enviar información |
| **Conectando** | Icono ámbar: conexión en curso |
| **Desconectado** | Icono gris: sin conexión activa |
| **Barras de señal** | BLE intensidad de la señal o USB estado activo |

### Conexión automática

Habilite **"Conexión automática al inicio"** en el cuadro de diálogo de conexión. KeyMod recuerda su último tipo de conexión (USB o BLE) y el último dispositivo BLE emparejado.

### USB Detección de conexión/desconexión

KeyMod monitorea los eventos de transmisión de USB conexión/desconexión de Android. Si desconecta el cable USB, el estado de la conexión se actualiza inmediatamente. Volver a conectar activa un intento de reconexión si la conexión automática está habilitada.

---

## Problemas con el teclado

### Claves que no se registran

| Síntoma | Solución |
|---|---|
| **Las claves no se envían** | Verifique que la conexión muestre "Conectado" (verde). Intente cambiar de modo y viceversa. Compruebe que el ordenador de destino reconozca el dispositivo KeyMod como un teclado. |
| **La macro no se ejecuta** | Verifica que estés conectado. Compruebe que los datos de la macro contengan tokens válidos (sin errores tipográficos en los nombres de los tokens). |
| **Aparecen caracteres incorrectos** | Verifique la configuración **SO de destino**: el sistema operativo que no coincide puede causar problemas de asignación de claves. Verifique la distribución del teclado de la computadora de destino (QWERTY vs AZERTY). |

### Los caracteres Unicode no funcionan

Los caracteres no ASCII (chinos, japoneses, emoji) requieren métodos de entrada específicos del sistema operativo:

| SO | Método |
|---|---|
| **Windows** | Alt+Teclado numérico entrada Unicode hexadecimal |
| **Linux** | Ctrl+Shift+U seguido de código hexadecimal |
| **macOS** | Option+entrada hexadecimal |

Si los caracteres Unicode aparecen incorrectamente, verifique que el **SO de destino** esté configurado correctamente.

---

## TouchPad Problemas

| Síntoma | Solución |
|---|---|
| **Touchpad no responde** | Verifique que la retroalimentación háptica esté habilitada en Configuración. Pruebe la superposición de Ayuda TouchPad (?) para verificar la compatibilidad con gestos. |
| **El desplazamiento no funciona** | Verifique la sensibilidad de desplazamiento touchpad en Configuración → General. |

---

## Problemas con la entrada de voz

### Reconocedor de voz no disponible

Instale Google Escritura por voz desde Play Store. En Android 11+, KeyMod necesita el permiso de consultas (incluido en APK).

### La detección de silencio no funciona

| Síntoma | Solución |
|---|---|
| **La grabación continúa cuando no se habla** | Marque la opción Pausa automática en silencio. Reducir el ruido de fondo. Hable con claridad y cerca del micrófono. |
| **La grabación se detiene inmediatamente** | Hable más alto o reduzca el tiempo de espera de detección de silencio. |

### Texto de voz no enviado

Verifique el estado de la conexión. El "Enviar" button está deshabilitado cuando no está conectado.

---

## Problemas de IA

### La clave API no funciona

| Síntoma | Solución |
|---|---|
| **"Clave API no configurada"** | Verifique que la clave API sea correcta; verifique si hay espacios adicionales o errores tipográficos. Verifique la URL base de la API; debe incluir la ruta completa (por ejemplo, `https://api.openai.com/v1`). Verifique que el nombre del modelo exista en el proveedor. Para proveedores locales (Ollama), asegúrese de que el indicador Clave API opcional esté configurado. |

### Refinamiento de texto lento

Verifique su conexión de red. Pruebe con un modelo más rápido: los modelos más pequeños (gpt-3.5-turbo, llama3-8b) responden más rápido. Utilice un proveedor local (Ollama) para eliminar la latencia de la red. Consulte el historial de solicitudes de IA para ver si hay mensajes de error.

---

## ¿Necesita más ayuda?

Si todavía tienes problemas:

- **Reportes de errores:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Comunidad:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentación:** [openterface.com](https://openterface.com)