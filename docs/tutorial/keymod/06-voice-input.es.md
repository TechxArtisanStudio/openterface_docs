---
title: "KeyMod Tutorial - Entrada de voz"
description: Utilice voz al teclado con KeyMod. Admite reconocimiento de voz del sistema, Whisper AI en el dispositivo y varios idiomas. Convierta su discurso en… Openterfac
keywords: "KeyMod entrada de voz, voz a texto, Whisper, escritura por voz, teclado manos libres"
---

# 6. Entrada de voz

Convierta su discurso en pulsaciones de teclas enviadas a la computadora de destino: escritura con manos libres y accesibilidad.

## Cómo funciona

1. Toca el **micrófono** button
2. Habla lo que quieras escribir
3. Tu discurso se convierte en texto.
4. El texto se envía como pulsaciones de teclas a la computadora de destino.

## Motores STT

| Motor | Cómo funciona | Configuración |
|---|---|---|
| **Reconocedor del sistema** | Utiliza el reconocimiento de voz integrado de Android | Requiere escritura por voz Google |
| **Whisper** | Transcripción de IA en el dispositivo o en la nube | Establezca la clave API en Configuración > Entrada de voz |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Entrada de voz: área de transcripción, objetivos, historial y micrófono. Configure la clave API en Configuración > Entrada de voz.</em></p>
</div>

## Detección de silencio y pausa automática

Ambos motores cuentan con detección automática de silencio que detiene la grabación cuando dejas de hablar (tiempo de espera de silencio de 2,0 segundos de forma predeterminada). Active o desactive la pausa automática en la vista Entrada de voz.

### Solución de problemas de detección de silencio

| Síntoma | Solución |
|---|---|
| **La grabación continúa cuando no se habla** | Marque la opción Pausa automática en silencio. Reducir el ruido de fondo. Hable con claridad y cerca del micrófono. |
| **La grabación se detiene inmediatamente** | Hable más alto o reduzca el tiempo de espera de detección de silencio. |

## Mini barra de herramientas (Android)

| Button | Qué hace |
|---|---|
| **Copiar** | Copiar texto transcrito al portapapeles |
| **Envío automático** | Enviar texto automáticamente después de la transcripción |
| **Retorno automático de línea** | Agregue una pulsación de tecla Intro después de enviar |
| **Refinamiento de IA** | Enviar texto transcrito a AI para mejorarlo |

## Texto de voz no enviado

Verifique el estado de la conexión. El "Enviar" button está deshabilitado cuando no está conectado.

## Próximos pasos

- **[← Macros](05-macros.md)** — Secuencias de teclas automatizadas
- **[AI Integration →](07-ai.md)** — Asistente de comando y refinamiento de texto asistido por IA