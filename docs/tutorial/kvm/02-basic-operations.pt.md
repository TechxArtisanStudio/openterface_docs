---
title: "Tutorial KVM 02 — Operações básicas"
description: "Público-alvo: Iniciantes a intermédio — funcionalidades de uso diário Documentação Openterface: configuração, FAQs e suporte KVM-over-USB. Openterface."
---

# Tutorial KVM 02 — Operações básicas

**Público-alvo:** Iniciantes a intermédio — funcionalidades de uso diário

---

## 1. Controlo do rato

### Modo absoluto (predefinido)

O cursor do host mapeia-se diretamente para o ecrã do alvo. Ambos os cursores são visíveis.

- **Ideal para:** Uso geral, gestão de servidores, navegação BIOS
- **Comportamento do cursor:** Ocultar automaticamente ou mostrar sempre o cursor do host sobre a área de vídeo

### Modo relativo (HID)

Os movimentos do rato são enviados como deltas relativos através da interface HID. O cursor do host fica oculto.

- **Ideal para:** Jogos, aplicações que precisam de entrada de rato bruta
- **Requisitos:** Permissão de acessibilidade no macOS
- **Sair:** Atalho de teclado global (macOS) ou premir longamente Esc (Qt)

### Modos de rato no Android

A aplicação Android oferece três formas de controlar o rato do alvo, comutáveis no painel de definições:

| Modo | Como funciona | Ideal para |
|---|---|---|
| **Absoluto (predefinido)** | Toque em qualquer lugar e o cursor salta para lá e clica com o botão esquerdo. A posição mapeia-se proporcionalmente. | A maioria das tarefas |
| **Relativo** | Arraste o dedo; o cursor move-se relativamente ao arrasto, como no touchpad de um portátil. Levante o dedo e o cursor mantém-se no lugar. | Posicionamento fino do cursor |
| **Arrasto absoluto** | Toque e mantenha; o cursor salta e segue o dedo. Aparece a etiqueta "Drag". Solte para largar. | Arrastar ficheiros, selecionar texto |

**Botões do rato no Android:** toque simples = clique esquerdo, premir longamente = clique direito, toque duplo = duplo clique.

### Modos de rato no iPadOS

A aplicação iPadOS oferece dois modos de rato, alternáveis através do botão de modo de rato na barra de ferramentas:

| Modo | Ícone | Como funciona | Ideal para |
|---|---|---|---|
| **Modo Pan** (Relativo) | Ícone de mão | O dedo age como um touchpad de portátil — arraste para mover o cursor, toque para clicar | Uso geral de ambiente de trabalho, superfície plana |
| **Modo iPencil** (Absoluto) | Ícone de lápis | A posição do toque mapeia-se diretamente para as coordenadas do ecrã alvo, como numa mesa gráfica | Apontamento preciso, uso do Apple Pencil |

**Gestos em ambos os modos:**

| Gesto | Modo Pan | Modo iPencil |
|---|---|---|
| **Toque simples** | Clique esquerdo | Mover cursor para o ponto + clique esquerdo |
| **Toque e arrasto** | Mover cursor (relativo) | Arrastar com botão esquerdo premido |
| **Toque duplo** | Duplo clique | Duplo clique no ponto |
| **Premir longamente** | Clique direito | Clique direito no ponto |
| **Toque com dois dedos** | Clique direito | Clique direito |
| **Arrasto com dois dedos** | Roda de scroll | Roda de scroll |

**Menu rápido:** Premir longamente na pré-visualização de vídeo para abrir um menu com opções Clique esquerdo, Clique direito e Arrastar.

**Modo de arrasto:** Toque duplo e mantenha ou selecione Arrastar no menu rápido — o botão esquerdo permanece premido e aparece a etiqueta "Dragging Mode Active".

### Predefinições de desempenho (macOS)

Em **Control > Mouse Mode > Performance Presets**:

| Predefinição | Throttle | Baudrate | Caso de uso |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Dispositivos alvo lentos |
| Casual Use | 80 Hz | 9600 | Gestão diária de servidores |
| Gaming | 250 Hz | 115200 | Jogos responsivos |
| Max Performance | 1000 Hz | 115200 | Máxima responsividade |

Throttle mais alto = mais responsivo. Baudrate mais alto = comunicação serial mais rápida.

---

## 2. Entrada de teclado

### Entrada padrão

Todas as teclas digitadas enquanto a janela da aplicação está em foco são reencaminhadas para o alvo.

### Teclas especiais

Envie combinações de teclas através do painel de teclas da barra de ferramentas ou **Control > Special Keys**:

- **F1–F12:** Teclas de função
- **Ctrl+Alt+Del:** Três dedos do Windows
- **Print Screen:** Tecla de captura de ecrã
- **Ctrl+Alt+F2:** Mudança de VT no Linux

### Disposição do teclado

Defina a disposição do SO alvo para corresponder ao computador alvo:

| Disposição | Comportamento |
|--------|----------|
| **Windows** | Mapeia teclas do host para convenções Windows |
| **Mac** | Mapeia teclas do host para convenções Mac |
| **Linux** | Mapeia teclas do host para convenções Linux |

Disposições regionais (QWERTY UK, Dinamarquês, QWERTZ Alemão, AZERTY Francês, Japonês, etc.) também estão disponíveis na aplicação Qt.

### Colar no alvo

A aplicação envia texto da área de transferência como pressionamentos de teclas emulados para o alvo. Útil para nomes de utilizador, comandos, URLs.

> **Nota:** Apenas caracteres ASCII são suportados. Texto longo pode perder formatação ou descartar caracteres em sistemas antigos/ocupados.

**Configurar comportamento de colagem (macOS):**
- **Ask Every Time:** Pergunta host ou alvo cada vez
- **Host Paste:** Envia sempre para o alvo
- **Local Paste:** Cola sempre no host

### Teclado no ecrã no Android

A aplicação Android fornece um teclado completo no ecrã acessível através do botão de teclado (⌨) no canto inferior direito do ecrã principal:

| Controlo | O que faz |
|---|---|
| **ShortCut** | Atalhos pré-definidos: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4, etc. |
| **Function** | F1–F12, PrtSc, ScrLk, teclas de navegação (Ins, Home, PgUp, etc.), setas |
| **System** | Disposição QWERTY com letras, números, pontuação, Backspace, Enter |
| **Teclas modificadoras** | Ctrl, Shift, Alt, Win — botões de alternância que repõem automaticamente após a tecla seguinte |

Para enviar uma combinação como **Ctrl+Alt+Del**: toque em Ctrl (destaca), toque em Alt (ambos destacam), toque em Del. Todos os modificadores repõem-se automaticamente após o envio da tecla.

O teclado também suporta **diferentes disposições regionais** (US, Japonês JIS, Alemão QWERTZ, etc.) selecionáveis no painel de definições. Botões de zoom permitem ajustar o tamanho das teclas.

### Entrada de teclado no iPadOS

A aplicação iPadOS suporta dois métodos de entrada de teclado:

**Teclado flutuante no ecrã:** Toque no botão **Keyboard** na barra de ferramentas para mostrar um teclado flutuante arrastável com disposição estilo Mac:

| Linha | Teclas |
|---|---|
| **Superior** | Esc, F1–F12, Del |
| **Números** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Linha base** | Caps, a–l, ;, ', Enter |
| **Inferior** | Shift, z–m, ,, ., /, Shift |
| **Modificadores** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Alternar modificadores:** Toque em Ctrl, Shift, Alt, Cmd ou Caps para alternar ligado/desligado (destacado a azul)
- **Modos de teclado:** Normal (digitação padrão) e Game (cabeçalho de pacote HID otimizado para entrada de jogos)
- **Arrastar:** Agarre a alça de arrasto no cabeçalho para reposicionar o teclado em qualquer lugar do ecrã

**Teclado externo do iPad:** Teclados físicos ligados ao iPad (Bluetooth, Smart Connector, USB) passam diretamente para o PC alvo. Teclas modificadoras enviam eventos de premir/libertar, por isso combinações como `Ctrl+C` ou `Alt+Tab` funcionam naturalmente.

**Atalhos de teclas compostas:** A aplicação inclui uma biblioteca de atalhos comuns acessível a partir da barra de ferramentas, organizada por categoria:

| Categoria | Exemplos |
|---|---|
| **Navegação** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Edição** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **Sistema** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Aplicação** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (capturas de ecrã macOS) |

---

## 3. Definições de vídeo

### Exibição de resolução

A barra de ferramentas mostra a resolução de entrada e FPS atuais do alvo. A resolução é determinada pelo que o alvo envia via HDMI.

### Resoluções suportadas

| Resolução | Intervalo de taxa de fotogramas |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Alterar resolução

1. Configure a resolução preferida nas definições de vídeo

### Proporção e dimensionamento

| Modo | Comportamento |
|------|----------|
| **Active Resolution** | Deteta automaticamente a área de vídeo ativa |
| **HID Resolution** | Usa resolução do hardware da placa de captura |
| **Custom** | Define manualmente uma proporção (16:9, 4:3, 21:9, etc.) |

**Dimensionamento:** Stretch (preenche a janela, pode distorcer), Fit (letterboxing), Fill (pode cortar).

### Zoom

Ampliar/reduzir, repor para ajustar e deslocar para panorâmica quando ampliado.

### Backend de vídeo (Qt)

| Backend | Plataforma | Notas |
|---------|----------|-------|
| **FFmpeg** | Todas | Recomendado, aceleração por hardware |
| **GStreamer** | Linux | Flexibilidade de pipeline |
| **Qt Multimedia** | Windows | Alternativa simples |

Alterne via **Preferences > Video > Media Backend**. Reinicie após alterar.

### Controlos de vídeo no Android

Na aplicação Android, as definições de vídeo acedem-se através do painel de definições (botão Menu ☰):

- **Video Format** — Selecione resolução (1920×1080, 1280×720, 640×480) e taxa de fotogramas (30fps, 60fps). Reduza resolução/taxa de fotogramas se o vídeo estiver entrecortado.
- **Controls** — Controlos deslizantes em tempo real para **brightness**, **contrast** e **hue**
- **Rotate/Flip** — Rodar 90° CW/CCW, inverter horizontal/verticalmente. Útil quando o dispositivo KVM está montado de cabeça para baixo ou de lado

As definições persistem entre sessões — só precisa de as configurar uma vez.

### Controlos de vídeo no iPadOS

No iPadOS, os controlos de vídeo acedem-se a partir da barra de ferramentas inferior:

- **Resolution Switching** — Toque no botão **Video** (mostra a resolução atual) para escolher entre: 2160p (4K), 1080p (predefinido), 720p ou 480p. Resolução mais baixa para melhor desempenho em ligações mais lentas.
- **Zoom Mode** — Toque em **Zoom** para entrar no modo zoom, depois beliscar com dois dedos para ampliar. Um indicador de zoom mostra o nível atual (ex.: `2.5x`). Quando ampliado, arrastar com um dedo faz panorâmica da viewport. Toque novamente em Zoom para sair.
- **Fullscreen** — Toque em **Fullscreen** para ocultar a barra de ferramentas e estender o vídeo para preencher todo o ecrã. Toque na seta no canto superior esquerdo para sair.
- **Screen Rotation** — Toque em **Rotate** para percorrer modos de correção de orientação (Normal, 90° CW, 180°, 90° CCW). Útil quando o dongle KVM-Go está montado de lado ou de cabeça para baixo. A rotação aplica-se tanto à pré-visualização em direto como às capturas guardadas.

Quando a câmara está a iniciar, aparece o indicador de carregamento "Starting Camera...". Se nenhuma câmara estiver ligada mas as permissões forem concedidas, é mostrada uma imagem guia.

---

## 4. Áudio do alvo

O chip de captura HDMI extrai áudio do sinal HDMI e apresenta-o como entrada de áudio USB para o host.

### Ativar áudio

1. Clique no ícone de áudio ou abra as definições de áudio
2. Ative a captura de áudio
3. Selecione o dispositivo de entrada correto (ex.: "OpenterfaceA")
4. Selecione o dispositivo de saída do host

O áudio está desativado por predefinição na maioria das plataformas.

### Controlo de volume

- **Lado alvo:** Ajuste no computador alvo
- **Lado host:** Use o misturador de áudio do SO host para o dispositivo de captura

### Monitorização de áudio no iPadOS

A aplicação iPadOS permite ouvir o áudio do PC alvo através dos altifalantes ou auscultadores do iPad:

- Toque no botão **Audio** (ícone de altifalante) na barra de ferramentas para alternar a monitorização
- **Estados do ícone:** altifalante riscado cinzento = não autorizado, altifalante riscado vermelho = desligado, altifalante verde com ondas = ligado
- Na primeira utilização, a aplicação solicita permissão de microfone
- O áudio reproduz-se nos altifalantes do iPad ou auscultadores/áudio Bluetooth ligados
- **Durante gravação:** o áudio de monitorização fica temporariamente silenciado para evitar feedback, mas o áudio continua a ser capturado no ficheiro de gravação

---

## 5. Captura de ecrã e gravação

### Captura de ecrã

Clique no ícone de câmara na barra de ferramentas. As imagens são guardadas na pasta de media predefinida do SO:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Pasta de capturas de câmara (via menu Camera)

### Gravação

Clique no botão de gravação para iniciar/parar a gravação do fluxo de vídeo e áudio do alvo. Aparece um temporizador enquanto a gravação está ativa.

**Definições de gravação:**
- Formato de saída (MP4, AVI, MOV, MKV)
- Taxa de bits de vídeo, codec de áudio
- Diretório de saída

### Captura de ecrã e gravação no Android

No Android, aceda através do painel de definições:

- **Screen Capture** — Toque para guardar uma captura do fotograma de vídeo atual na pasta de media predefinida do dispositivo. Requer **permissão de armazenamento**.
- **Record Video** — Toque para iniciar/parar gravação. Aparece um indicador de gravação vermelho com temporizador no topo. O vídeo guarda-se na pasta de media predefinida do dispositivo.

**Casos de uso:** gravar o processo de arranque do alvo, capturar mensagens de erro, documentar passos de configuração.

### Captura de ecrã e gravação no iPadOS

**Capturas de ecrã:** Toque no botão **Screenshot** (ícone de câmara) na barra de ferramentas. A aplicação captura um fotograma de alta resolução, corrige a orientação e guarda como JPEG.

**Gravação de vídeo:** Toque no botão **Record** para iniciar/parar. Após parar, a aplicação mostra os detalhes da gravação (duração e tamanho do ficheiro).

| Definição | Valor |
|---|---|
| **Video codec** | H.264 a 30 fps |
| **Resolution** | Corresponde ao dispositivo de captura (tipicamente 1920×1080) |
| **Audio codec** | AAC a 128 kbps, 48 kHz, estéreo |
| **Container** | MOV |

**Localizações de ficheiros:**
- **App Documents:** `Documents/Recordings/` — navegue via app Ficheiros > No meu iPad > Openterface KVM > Recordings
- **Photos App:** Se a permissão da biblioteca de fotos for concedida e ativada nas definições
- **File naming:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (capturas) ou `.mov` (gravações)

**Casos de uso:** gravar o processo de arranque do alvo, capturar mensagens de erro, documentar passos de configuração.

---

## 6. Indicadores de ligação

| Indicador | Verde | Laranja | Cinzento |
|-----------|-------|--------|------|
| HDMI | Sinal detetado | Sem sinal | Desconhecido |
| Keyboard | Ligado | Não encontrado | Desconhecido |
| Mouse | Ligado | Não encontrado | Desconhecido |

### USB Switch

O interruptor USB Switch mostra se a porta comutável está encaminhada para **Host** ou **Target**.

---

## 7. Impedir protetor de ecrã

Ative **Prevent Screen Saver** (via menu Edit/Device ou barra de ferramentas) para enviar eventos periódicos que mantêm o ecrã do alvo ativo.

---

## 8. Modo de ecrã completo

Use o botão padrão de ecrã completo para preencher o ecrã com a área de vídeo, ocultando a interface.

---

## Próximos passos

- **[Funcionalidades avançadas →](03-advanced-features.md)** — EDID, firmware, macros, scripts, diagnósticos
- **[Resolução de problemas →](04-troubleshooting.md)** — Problemas comuns e soluções
