# Tutorial KVM 01 — Primeiros passos

**Público-alvo:** Iniciantes — utilizadores pela primeira vez de dispositivos KVM Openterface

---

## 1. O que é KVM-over-USB?

Um dispositivo KVM (Keyboard, Video, Mouse) fica entre o seu **computador host** (a sua estação de trabalho) e um **computador alvo** (servidor, mini PC, dispositivo embebido). Ele:

- **Captura** a saída de vídeo HDMI do alvo (e áudio, se disponível)
- **Retransmite** a entrada do teclado e rato através de emulação HID
- Tudo através de um único cabo USB — sem rede necessária

Isto é o que distingue os dispositivos KVM do software de ambiente de trabalho remoto: pode controlar o alvo mesmo em **BIOS/UEFI**, durante o arranque ou quando o SO falhou.

### Dispositivos KVM Openterface

| Dispositivo | Formato | Característica principal |
|--------|------------|-------------|
| **Mini-KVM** | Dongle USB compacto | KVM-over-USB de secretária |
| **KVM-Go** | Portátil estilo kit de ferramentas | KVM em movimento com cabos integrados, **suporte iPadOS via BLE** |
| **uConsole KVM Extension** | Módulo interno | KVM integrado para ClockworkPi uConsole |

> Procura **KeyMod** (apenas emulador de teclado e rato, sem vídeo)? Consulte o [Tutorial KeyMod](../../keymod/index.md).

---

## 2. O que precisa

### Hardware

- **Dispositivo KVM Openterface** — Mini-KVM, KVM-Go ou uConsole KVM Extension
- **Computador host** — Com macOS, Windows, Linux ou Android
- **Computador alvo** — Qualquer computador com saída HDMI
- **Cabo HDMI** — Da saída HDMI do alvo à entrada HDMI do KVM
- **Cabo USB** — Do KVM ao computador host (fornece alimentação e dados)

### Opcional

- **Cabo comutador USB** — Do KVM à porta USB do dispositivo alvo (para emulação de teclado/rato)
- **Teclado e rato** — Ligue à porta USB comutável do KVM para controlar o host ou o alvo

---

## 3. Instalação

### Aplicação host

| Plataforma | Aplicação | Transferência |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) ou [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) ou [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **apenas KVM-Go** |

### Requisitos Android

A aplicação Android requer:

- **Android 8.0 (API 26)** ou posterior
- **Suporte USB OTG** — a maioria dos telemóveis modernos suporta (Samsung, Google Pixel, OnePlus). Verifique ligando uma pen USB com um adaptador OTG
- **Cabo ou adaptador USB OTG** para ligar o dispositivo KVM ao telemóvel

### Requisitos iPadOS

A aplicação iPadOS requer:

- **iPadOS 17.0** ou posterior
- **Dispositivo KVM-Go** — o iPadOS liga-se ao dongle KVM-Go via **Bluetooth Low Energy (BLE)** para entrada de teclado/rato, e à placa de captura USB para vídeo
- **Permissões de câmara e microfone** — necessárias para pré-visualização de vídeo e monitorização de áudio da placa de captura
- **Permissão Bluetooth** — necessária para descobrir e ligar o dongle KVM-Go para entrada HID
- **Permissão Biblioteca de fotografias** (opcional) — para guardar capturas de ecrã e gravações na app Fotos

### Permissões macOS

No primeiro arranque, o macOS pedirá:

| Permissão | Motivo |
|-----------|-----|
| **Câmara** | Captura vídeo do chip de captura HDMI |
| **Microfone** | Captura áudio do alvo (se ativado) |
| **Acessibilidade** | Necessária para controlo do rato HID no modo relativo |

### Permissões Linux

- Adicione o utilizador aos grupos `dialout` e `video`: `sudo usermod -a -G dialout,video $USER`
- Instale regras udev para acesso ao dispositivo
- **Conflito BrlTTY:** remova `brltty` ou coloque o chip serial na lista negra — consulte [Resolução de problemas](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- O instalador inclui o controlador serial CH340. Para builds portáteis, instale-o separadamente.

---

## 4. Ligação do hardware

┌─────────────┐                        ┌──────────────────┐
│    ALVO     │─── Cabo HDMI ────────▶│  Openterface     │
│  COMPUTADOR │                        │  Dispositivo KVM │
└─────────────┘                        │                  │
                                       │  ◄── Cabo USB ──│── Cabo comutador USB ──▶ Porta USB do alvo
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  COMPUTADOR HOST │
                                       │  (esta app)      │
                                       └──────────────────┘
1. Ligue a **saída HDMI** do alvo à **entrada HDMI** do KVM
2. Ligue o **USB** do KVM a uma **porta USB do computador host**
3. (Opcional) Ligue o cabo comutador USB do KVM à porta USB do alvo
4. (Opcional) Ligue o teclado/rato à porta USB comutável do KVM
5. **Ligue** o dispositivo alvo

### Deteção do dispositivo

O KVM é enumerado como vários dispositivos USB:
- **Captura de vídeo** (MS2109/MS2109S/MS2130S) — aparece como webcam
- **Serial** (CH9329 ou CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — usado para operações de firmware

### Ligação via telemóvel Android

Ao usar a aplicação Android, a cadeia de ligação utiliza USB OTG:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  PC alvo     │               │   Dispositivo KVM │
│  (ecrã)      │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Telemóvel Android│
                               │  (Openterface)    │
                               └──────────────────┘
```

Ordem de ligação para Android:

1. **HDMI:** ligue a saída HDMI do alvo à **entrada** HDMI do KVM
2. **USB (alvo):** ligue a porta USB do alvo à porta USB do KVM — transporta sinais de rato/teclado
3. **USB OTG (telemóvel):** ligue o KVM ao telemóvel Android via cabo/adaptador USB OTG
4. **Alimentação:** ligue o dispositivo KVM (se tiver entrada de alimentação separada) e o computador alvo

Quando a ligação é bem-sucedida, a pré-visualização de vídeo passa do marcador de posição para o ecrã em direto do alvo, e tocar no ecrã do telemóvel move o cursor no alvo.

### Ligação via iPadOS

A aplicação iPadOS utiliza um modelo de ligação diferente: **BLE para entrada** e **captura USB para vídeo**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  PC alvo     │               │                   │
│  (ecrã)      │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (vídeo)
                              │   BLE (FFF2)      │ (teclado/rato)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

Ordem de ligação para iPadOS:

1. **Hardware:** ligue o dongle KVM-Go à porta USB do PC alvo e ligue a entrada HDMI
2. **Ligue** o computador alvo
3. **Abra a aplicação** no iPad e conceda permissões de câmara, microfone e Bluetooth
4. **Toque no botão BLE** na barra de ferramentas — a aplicação procura dispositivos com o nome `kvm*`
5. **Toque em Ligar** junto ao seu dispositivo KVM-Go — o botão fica verde com a intensidade do sinal RSSI
6. **Verifique:** a pré-visualização de vídeo mostra o ecrã do alvo, tocar envia cliques, escrever envia pressões de teclas

> **Nota:** A aplicação iPadOS funciona apenas com **KVM-Go**. Mini-KVM e uConsole KVM Extension não têm suporte BLE.

---

## 5. Primeiro arranque

### Janela principal

```
┌─────────────────────────────────────────────────────────┐
│  Barra de menu / Barra de ferramentas                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              ÁREA DE EXIBIÇÃO DE VÍDEO                  │
│         (mostra o ecrã do dispositivo alvo)             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Barra de estado │ Porta │ Teclas │ Rato │ Resolução   │
└─────────────────────────────────────────────────────────┘
```

### Permissões Android

No primeiro arranque, a aplicação Android pede:

| Permissão | Motivo | O que acontece se negada |
|---|---|---|
| **USB Host** | Comunicar com o hardware Openterface | A app não deteta o dispositivo KVM |
| **Câmara** | Receber vídeo do chip de captura HDMI | Sem pré-visualização de vídeo |
| **Armazenamento** | Guardar capturas de ecrã e gravações | Não é possível guardar capturas |

Conceda todas as permissões para funcionalidade completa. Também aparece um diálogo de permissão USB do sistema quando o dispositivo KVM é detetado — toque em **Permitir**.

### Permissões iPadOS

No primeiro arranque, a aplicação iPadOS pede:

| Permissão | Motivo | O que acontece se negada |
|---|---|---|
| **Câmara** | Receber vídeo da placa de captura HDMI | Sem pré-visualização de vídeo |
| **Microfone** | Monitorizar áudio do PC alvo através dos altifalantes do iPad | Sem monitorização de áudio |
| **Bluetooth** | Descobrir e ligar KVM-Go para entrada HID | Não é possível enviar entrada de teclado/rato |
| **Biblioteca de fotografias** | Guardar capturas de ecrã e gravações | As capturas são guardadas na pasta Documentos da app |

Se negou uma permissão por engano, vá a **Definições > Privacidade e segurança** para a reativar.

### Verificação da ligação

- **Indicador HDMI:** verde = sinal detetado, laranja = sem sinal, cinzento = desconhecido
- **Indicador de teclado:** verde = ligado, laranja = não encontrado, cinzento = desconhecido
- **Indicador de rato:** verde = ligado, laranja = não encontrado, cinzento = desconhecido
- **Porta serial:** deve mostrar um nome de porta e taxa de baud (9600 ou 115200)

Se os indicadores mostrarem laranja ou cinzento, consulte [Resolução de problemas](04-troubleshooting.md).

---

## 6. Controlo KVM básico

### Modos de rato

| Modo | Descrição | Melhor para |
|------|-------------|----------|
| **Absoluto** (predefinido) | O cursor do host mapeia diretamente para o ecrã do alvo | Uso geral, navegação GUI |
| **Relativo (HID)** | Movimentos do rato enviados como deltas via HID | Jogos, interação rápida |

Alterne através do botão na barra de ferramentas ou **Controlo > Modo de rato**.

### Entrada de teclado

Todas as pressões de teclas são reencaminhadas para o alvo enquanto a janela da aplicação estiver focada:
- Teclas padrão, teclas de função, modificadores
- Teclas especiais: Ctrl+Alt+Del, Imprimir ecrã
- **Colar no alvo:** envia o texto da área de transferência como pressões de teclas emuladas

### Comutação USB

Alterne a porta USB comutável entre:
- **Host** — o teclado/rato controla o computador host
- **Alvo** — o teclado/rato controla o computador alvo

---

## 7. Próximos passos

- **[Operações básicas →](02-basic-operations.md)** — Rato, teclado, vídeo, áudio, gravação
- **[Funcionalidades avançadas →](03-advanced-features.md)** — EDID, firmware, macros, scripts
- **[Resolução de problemas →](04-troubleshooting.md)** — Problemas comuns e soluções
