# Tutorial KVM 03 — Funcionalidades avançadas

**Público-alvo:** Intermediário a experiente — funcionalidades avançadas e configuração

---

## 1. Sistema de preferências

### Vídeo

- **Resolução e taxa de fotogramas** — Definições de captura preferidas
- **Backend de media** — FFmpeg, GStreamer (Linux) ou Qt Multimedia (Windows)
- **Aceleração por hardware** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **Proporção e escala** — Proporção personalizada, Esticar/Ajustar/Preencher

### Áudio

- **Ativado** — Ativar ou desativar a captura de áudio do alvo
- **Dispositivo de entrada/saída** — Selecionar a fonte e o dispositivo de reprodução

### Controlo do alvo

- **Modo do rato** — Absoluto, Relativo (HID), Relativo (Events)
- **Limitação de eventos do rato** — 30–1000 eventos/segundo
- **Layout do teclado** — SO alvo e layouts regionais
- **Intervalo de repetição de teclas** — Velocidade de repetição de tecla mantida
- **Ocultar cursor automaticamente** — Ocultar o cursor do host sobre a área de vídeo

### Registo

- **Nível de registo** — Debug, Info, Warning, Error
- **Registo em ficheiro** — `~/Documents/openterface.log` (macOS) ou caminho configurado (Qt)
- **Registo serial** — Registo separado da comunicação serial

---

## 2. Gestão EDID

### O que é EDID?

EDID (Extended Display Identification Data) é o que o dispositivo KVM envia ao alvo para descrever as suas capacidades de ecrã — resoluções suportadas, taxas de atualização, informações do fabricante. O KVM atua como um «monitor falso», pelo que o EDID determina que resoluções o alvo irá enviar.

### Edição do nome de ecrã EDID

Pode alterar o nome de ecrã que o dispositivo KVM reporta ao alvo. Este nome aparece nas definições de ecrã do SO alvo.

> **Nota:** Atualmente só é suportada a edição do nome de ecrã. A edição de resolução e entradas de resolução personalizadas ainda não estão disponíveis.

**Acesso:** Settings > EDID Display Name Editor (macOS) ou Device > Update Display Settings (Qt)

### Casos de utilização

- **Identificar o ecrã** nas definições do SO alvo
- **Nomeação personalizada** em configurações multi-monitor para distinguir o ecrã KVM

---

## 3. Sistema de macros (macOS)

As macros são sequências de ações de teclado guardadas, acionadas a partir do painel de macros da barra de ferramentas.

### Formato de sequência de teclas

**Etiquetas de modificadores:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (corresponde a Cmd/Win/Super consoante o SO alvo)

**Teclas especiais:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Atrasos:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Exemplos

<CMD>c</CMD>              # Copiar no macOS
<CTRL>c</CTRL>            # Copiar no Windows
<DELAY05s><ENTER>         # Aguardar, depois premir Enter
### Geração assistida por IA

O botão **Magic** do editor de macros gera macros a partir de linguagem natural. Descreva o que pretende e a IA produz a sequência de teclas.

### Verificação

Marque as macros como **verified** após testar. Apenas as macros verificadas estão disponíveis para o agente de IA em execução autónoma.

---

## 4. Ferramenta Script (Qt)

Uma linguagem de scripting inspirada no AutoHotKey para automatizar ações de teclado e rato no alvo.

### Abertura

Menu: **Device > Script Tool**

### Comandos

| Comando | Descrição | Exemplo |
|---------|-------------|---------|
| `Sleep` | Pausar a execução | `Sleep 1000` |
| `Send` | Enviar sequências de teclas | `Send Hello World` |
| `Click` | Clique do rato | `Click 100 200` |
| `SetCapsLockState` | Alternar CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Captura de ecrã | `FullScreenCapture "/tmp/shot.png"` |

### Prefixos de modificadores

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Atualizações de firmware

### Quando atualizar

- Novas funcionalidades de hardware
- Correções de erros
- Melhorias de compatibilidade

### Processo de atualização

1. Abrir Firmware Update Tool (**Settings > Firmware Update Tool** no macOS, **Device > Update Firmware** no Qt)
2. A ferramenta verifica a versão mais recente na rede
3. O progresso é acompanhado durante a operação de escrita
4. **Não desligue o dispositivo durante a atualização**

### Recuperação

1. Mantenha o dispositivo alimentado
2. Feche e reabra Firmware Update Tool, tente novamente
3. Use Serial Reset Tool se o dispositivo não responder

---

## 6. Serial Reset Tool

**Acesso:** Settings > Serial Reset Tool (macOS) ou Device > Factory Reset HID Chip (Qt)

Utilizar quando:
- O dispositivo está num estado desconhecido após uma atualização de firmware falhada
- O chip HID não responde
- Preparar o dispositivo para revenda

---

## 7. Diagnósticos (Qt)

Menu: **Device > Device Diagnostics**

Executa testes de hardware sequencialmente:
1. Teste de ligação serial
2. Estado USB do alvo
3. Teste de reposição de fábrica
4. Teste de baudrate alto/baixo
5. Teste de stress (comandos rápidos, medir taxa de sucesso)
6. Teste plug & play (deteção de desligar/ligar USB)

Após executar, exporte os resultados via **Support Email Dialog**.

---

## 8. Sistema de chat IA (macOS)

Assistente de IA integrado que pode analisar o ecrã do alvo, sugerir ações e executar operações de teclado/rato.

### Modos de chat

| Modo | Descrição |
|------|-------------|
| **Interactive** | Fazer perguntas, obter orientação |
| **Agentic** | A IA planifica e executa autonomamente tarefas de vários passos |
| **Guide** | Uma instrução de cada vez, passo a passo |
| **Planner** | Pedidos complexos divididos em planos estruturados |

### Configuração

Settings > AI Chat: endpoint API, chave (armazenada no Keychain), modelo, sistema alvo (macOS/Windows/Linux/etc.)

---

## 9. Controlo remoto (VNC/RDP — macOS)

Alterne entre os modos **Hardware KVM**, **VNC** e **RDP** via **Control > Connection Protocol**.

| Cenário | Modo |
|----------|------|
| Alvo em BIOS/UEFI, sem rede, a arrancar, bloqueado | Hardware KVM |
| Uso de ambiente de trabalho remoto de alta largura de banda, servidor Windows | VNC ou RDP |

---

## 10. Servidor TCP (Qt)

Servidor TCP integrado para controlo remoto na porta 12345.

### Comandos

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Exemplo Python

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Segurança:** Sem autenticação, encriptação ou limitação de taxa. Ative apenas em redes de confiança.

---

## Funcionalidades específicas do iPadOS

### Gestão de ligação Bluetooth

A aplicação iPadOS liga-se ao dongle KVM-Go via **Bluetooth Low Energy (BLE)** para entrada HID de teclado/rato:

- **Ligação automática:** Ativada por predefinição. No arranque, a aplicação faz scan durante 5 segundos e liga-se automaticamente ao dispositivo `kvm*` com o sinal mais forte.
- **Religação:** Se a ligação cair, a aplicação tenta religar até 3 vezes com um atraso de 2 segundos.
- **Monitorização de sinal:** Atualizações RSSI a cada 2 segundos. O botão BLE mostra a intensidade do sinal (ex.: `-45 dBm`) com um indicador de cor: verde (-50 a 0 dBm), laranja (-70 a -50 dBm), vermelho (abaixo de -70 dBm).
- **Scan de dispositivos:** Apenas dispositivos cujo nome começa por `kvm` (sem distinção maiúsculas/minúsculas) aparecem na lista.
- **Controlo manual:** Abra o ecrã BLE para fazer scan, ligar, desligar ou desativar a ligação automática.

### Sobreposição de informação

Toque no botão **Info** para exibir uma sobreposição de estado de entrada em tempo real no canto superior direito:

```
┌─ Estado de entrada ─────┐
│ Rato                    │
│ Mode: Absolute          │
│ Position: 512.0, 384.0  │
│ Drag Mode: Active       │
│ Scrolling: Inactive     │
│ Teclado                 │
│ Mode: Normal            │
│ Caps Lock: OFF          │
│ Modifiers: Ctrl, Shift  │
└─────────────────────────┘
```

A sobreposição é transparente aos toques — não bloqueia a interação com a pré-visualização de vídeo.

### Correção de orientação do ecrã

Toque no botão **Rotate** para percorrer os modos de correção de orientação: Normal, 90° CW, 180°, 90° CCW. Corrige a pré-visualização de vídeo quando o dongle KVM-Go está montado numa orientação não padrão. A rotação aplica-se tanto à pré-visualização em direto como às capturas guardadas.

### Temporizador de inatividade desativado

A aplicação mantém o ecrã do iPad **ativo** durante a utilização ao desativar o temporizador de inatividade, impedindo que o iPad bloqueie automaticamente enquanto monitoriza o PC alvo.

### Sistema de registo

A aplicação inclui um `Logger` integrado com filtragem por categoria:

| Categoria | Cobre |
|---|---|
| `bluetooth` | Scan BLE, ligação, transmissão de dados |
| `mouse` | Entrada do rato, deteção de gestos, alterações de modo |
| `keyboard` | Eventos de teclas, estado de modificadores, teclas compostas |
| `camera` | Gravação de vídeo, capturas de ecrã, captura de fotos |
| `ui` | Gestão de toques, reconhecimento de gestos, camada de pré-visualização |
| `general` | Ciclo de vida da aplicação, informações gerais |

O registo pode ser ajustado no código fonte da aplicação para reduzir ruído na consola.

---

## Próximos passos

- **[Resolução de problemas →](04-troubleshooting.md)** — Problemas comuns e soluções

---

## Funcionalidades específicas do Android

### Painel de definições

O painel de definições da aplicação Android (botão Menu ☰) contém todas as opções de configuração:

| Definição | Descrição |
|---|---|
| **Device** | Mostra os dispositivos USB ligados e o estado. Toque para selecionar ou voltar a fazer scan. |
| **Disconnect Device** | Liberta em segurança todas as ligações USB. Use antes de desligar. |
| **Baudrate** | Velocidade de comunicação serial: **115200** (predefinição) ou **9600** (mais lento, para problemas). |
| **Controls** | Controlos deslizantes de brilho, contraste e tonalidade da câmara. |
| **Video Format** | Seletor de resolução e taxa de fotogramas. |
| **Rotate/Flip** | Rodar 90° CW/CCW, inverter horizontal/verticalmente. |
| **Screen Capture / Record Video** | Captura de ecrã e gravação de vídeo. |
| **Relative / Absolute / Drag** | Alternar modo de controlo do rato. |
| **About Device** | Mostra a versão Android e informações de versão da aplicação. |

### Persistência de definições

A aplicação Android memoriza as suas preferências entre sessões:

| Definição | Persistida? |
|---|---|
| Modo de controlo do rato | Sim |
| Formato de vídeo (resolução, FPS) | Sim |
| Parâmetros da câmara (brilho, contraste, tonalidade) | Sim |
| Layout do teclado (US, JP, DE) | Sim |
| Baudrate | Sim |
| Histórico de ligação de dispositivos | Sim |

Ao reabrir a aplicação, restaura as últimas definições. Para repor tudo: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Desligamento seguro

Antes de desligar o dispositivo KVM no Android:

1. Abra o painel de definições
2. Toque em **Disconnect Device** (mostrado a vermelho)
3. Aguarde que a aplicação liberte a ligação USB
4. Desligue os cabos

Isto evita corrupção de dados e garante que o computador alvo liberta corretamente o teclado/rato.

### Dicas de desempenho no Android

- **Reduza a resolução** — 640×480 é muito mais leve que 1920×1080
- **Reduza a taxa de fotogramas** — 30 fps usa menos largura de banda que 60 fps
- **Feche outras aplicações** — liberte a memória do telemóvel
- **Use um adaptador USB OTG de qualidade** — adaptadores baratos podem limitar a ligação
- A equipa de desenvolvimento está a trabalhar na redução da latência na pipeline da câmara
