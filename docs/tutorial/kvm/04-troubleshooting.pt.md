# Tutorial KVM 04 — Resolução de problemas

Problemas comuns e soluções para dispositivos Openterface KVM.

---

## Dispositivo não detetado

### Sintomas
- «No devices found» no menu de dispositivos
- Os indicadores de teclado e rato mostram laranja ou cinzento
- A porta série mostra «N/A»

### Diagnóstico

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Esperado: `534d:2109` (captura HDMI) e `1a86:7523` ou `1a86:fe0c` (série).

**macOS:** Menu Apple > Acerca deste Mac > Relatório do sistema > Hardware > USB — procure Openterface.

**Windows:** Gestor de dispositivos > «Dispositivos de barramento serial universal» e «Portas (COM e LPT)» — CH340 deve aparecer como «USB-SERIAL CH340 (COMx)».

### Soluções

| Problema | Solução |
|---------|-----|
| Dispositivo ausente em lsusb/Relatório do sistema | Experimente outro cabo/porta USB. Requer USB 2.0+ |
| Dispositivo visível mas sem nós | Verifique regras udev (Linux) ou reinstale controladores (Windows) |
| Permissão negada | Adicione o utilizador aos grupos `dialout` e `video` (Linux) |
| Detetado e depois desaparece | `brltty` reclama a porta série (Linux) — veja abaixo |

---

## Conflito BrlTTY (Linux) {#brltty-conflict-linux}

**A causa mais comum de falha de teclado/rato no Linux.**

O serviço `brltty` (terminal Braille) reclama dispositivos USB série, incluindo o chip CH9329/CH32V208.

### Correção
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Sem vídeo / Ecrã preto

### Passos

1. **Verifique o cabo HDMI** — bem ligado em ambas as extremidades
2. **Verifique o alvo** — está a enviar HDMI (teste com um monitor normal)
3. **Experimente outro cabo HDMI**
4. **Volte a ligar o dispositivo** — a aplicação gere eventos de hot-plug
5. **Verifique a deteção do chipset de vídeo:** Suportados: MS2109, MS2109S, MS2130S

### Seleção de backend (Qt)

Se um backend mostrar ecrã preto, experimente outro em **Preferências > Vídeo > Backend de media**:
- **FFmpeg** — Mais fiável (recomendado)
- **GStreamer** — Apenas Linux
- **Qt Multimedia** — Alternativa no Windows

### Problemas GStreamer (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Experimente outro sink:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### Incompatibilidade EDID

Se o alvo não reconhecer o EDID, pode não enviar uma resolução compatível. Experimente alterar a resolução de saída do alvo ou editar o EDID nas definições de ecrã da aplicação.

---

## Teclado/rato não responde

### Passos

1. **Verifique o interruptor USB** — certifique-se de que está em **Target**, não Host
2. **Verifique o estado da porta série** — deve mostrar um nome de porta, não «N/A»
3. **Experimente alterar a velocidade em baud** — 9600 ou 115200
4. **Verifique o chipset de controlo** — Suportados: CH9329, CH32V208
5. **Verifique a monitorização CTS** — A aplicação monitoriza as linhas Clear-To-Send para eventos HID

### Problemas específicos do rato

- **Modo relativo no macOS:** Requer permissão de Acessibilidade. Verifique **Definições do sistema > Privacidade e segurança > Acessibilidade**
- **Modo absoluto:** Verifique se a proporção corresponde ao ecrã alvo
- **Atraso do rato:** Experimente um preset de maior desempenho ou aumente a velocidade em baud
- **Conflitos de porta série (Linux):** Feche outras aplicações que usem a porta: `sudo lsof /dev/ttyUSB0`

---

## O áudio não reproduz

### Passos

1. **Ative o áudio** através do ícone de áudio > Enable Audio
2. **Verifique a permissão do microfone** — Definições do sistema > Privacidade e segurança > Microfone (macOS)
3. **Selecione o dispositivo de entrada correto** — «OpenterfaceA» ou o nome do dispositivo de captura
4. **Selecione o dispositivo de saída correto** — os seus altifalantes ou auscultadores
5. **Verifique a saída de áudio HDMI do alvo** — o alvo está configurado para enviar áudio por HDMI?

---

## Problemas do controlador USB série

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Se necessário, instale o controlador WCH CH34x a partir de [WCH CH34xDriver no GitHub](https://github.com/WCHSoftGroup/ch34xser_macos). Ative-o em **Definições do sistema > Geral > Itens de início e extensões > Extensões de controlador**.

### Windows

Se o chip série não aparecer no Gestor de dispositivos, instale o controlador CH340/CH341. O instalador inclui-o normalmente; para builds portáteis, descarregue-o separadamente.

### Linux

O controlador CH340 (módulo `ch341`) está integrado no kernel:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Falha na atualização do firmware

### Estabilidade USB

- Não desligue durante o flash
- Não suspenda o computador host
- Use uma porta USB direta (evite hubs)

### Recuperação

1. Ciclo de alimentação: desligue USB, aguarde 10 segundos, volte a ligar
2. Reentre em modo ISP (alguns dispositivos: mantenha o botão durante a ligação)
3. Use Serial Reset Tool para voltar a flashear o bootloader
4. Contacte o suporte se ficar bloqueado

---

## Problemas de desempenho

### Alto uso de CPU

1. **Ative a aceleração por hardware** — Preferências > Vídeo > Aceleração por hardware (VAAPI, V4L2-M2M)
2. **Reduza a resolução** — 720p usa significativamente menos CPU que 1080p
3. **Reduza a taxa de fotogramas** — 15 fps reduz para metade a carga de descodificação
4. **Mude de backend** — FFmpeg com aceleração HW usa tipicamente menos CPU que GStreamer

### Perda de fotogramas

Verifique o contador FPS na barra de estado. Se o FPS real estiver abaixo do alvo, o pipeline está limitado. Ative o descarte de fotogramas no processador de fotogramas FFmpeg para priorizar reprodução fluida.

---

## Registo e diagnóstico

### Ativar registo

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferências > Log > defina o nível de registo e o caminho do ficheiro

### Consola série (Qt)

Abra através de **Device > Serial Port Debug** — mostra mensagens do protocolo série em tempo real com filtros para Keyboard, Mouse, HID, Chip Info.

---

## Problemas específicos da plataforma

### Linux: plugin de plataforma Qt

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: problemas de vídeo Wayland

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: controlador CH340

Se a instalação do controlador falhar: desative temporariamente a aplicação de assinatura de controladores e instale manualmente via Gestor de dispositivos.

### Raspberry Pi: vídeo com stuttering

Em Pi 3 ou Pi 4 com pouca memória:
1. Reduza a resolução para 720p
2. Use o backend FFmpeg (não GStreamer)
3. Use 9600 baud para estabilidade série

---

## Problemas específicos Android

### Dispositivo não detetado

**Sintoma:** A pré-visualização de vídeo mostra um placeholder, não o ecrã do alvo.

1. **Verifique a ligação USB OTG** — desligue e volte a ligar o cabo
2. **Verifique suporte OTG** — experimente ligar uma pen USB para confirmar que o telefone suporta OTG
3. **Verifique o dispositivo KVM** — está ligado? Há luzes indicadoras?
4. **Experimente outro cabo** — alguns adaptadores OTG são defeituosos
5. **Reinicie a aplicação** — feche-a completamente (deslize a partir das apps recentes) e reabra
6. **Verifique a permissão USB** — se um diálogo do sistema pediu acesso USB, certifique-se de que tocou em **Allow**

### Sem vídeo

**Sintoma:** O dispositivo é detetado mas o ecrã está preto ou congelado.

1. **Verifique o cabo HDMI** — o HDMI do computador alvo está bem ligado à entrada HDMI do KVM?
2. **Verifique a saída do alvo** — o computador alvo está realmente a mostrar algo?
3. **Experimente uma resolução mais baixa** — abra definições → **Video Format** → escolha uma resolução inferior
4. **Verifique a permissão da câmara** — Definições Android → Apps → Openterface → Permissões → certifique-se de que Câmara está permitida
5. **Reinicie a aplicação**

### O rato não responde

**Sintoma:** O vídeo funciona mas tocar no ecrã não faz nada no alvo.

1. **Verifique a ligação USB para HID** — abra definições → **Device** e confirme que o dispositivo está ativo
2. **Experimente outro modo de rato** — mude de Absolute para Relative ou vice-versa
3. **Desligue e volte a ligar** — use o botão vermelho **Disconnect Device** e volte a ligar
4. **Verifique o computador alvo** — reconhece um teclado/rato USB? Experimente desligar e voltar a ligar o cabo USB no lado alvo

### O teclado não envia teclas

**Sintoma:** O rato funciona mas escrever não faz nada.

1. **Certifique-se de que o teclado está aberto** — toque no botão do teclado
2. **Verifique a ligação série** — abra definições → **Device** e confirme que está ativa
3. **Verifique a velocidade em baud** — abra definições → **Baudrate** e certifique-se de que corresponde ao seu dispositivo (115200 por defeito)
4. **Verifique o layout do teclado** — certifique-se de que o layout correto (US, JP, DE) está selecionado

### A aplicação bloqueia ou congela

1. **Feche e reinicie** a aplicação
2. **Reduza a resolução e taxa de fotogramas** — definições elevadas podem sobrecarregar dispositivos com memória limitada
3. **Verifique o armazenamento disponível** — pouco espaço pode causar instabilidade
4. **Atualize a aplicação** — procure uma versão mais recente no Google Play ou GitHub Releases

### Capturas de ecrã ou gravações não guardadas

1. **Verifique a permissão de Armazenamento** — Definições Android → Apps → Openterface → Permissões → Armazenamento
2. **Verifique o espaço de armazenamento disponível** no seu dispositivo
3. Gravações e capturas de ecrã são guardadas na pasta de media predefinida do dispositivo

### Recolher registos (Android)

Se a resolução de problemas padrão não ajudar, recolha registos para partilhar com os maintainers:

```bash
adb logcat | grep -i openterface > openterface.log
```

Inclua este ficheiro ao abrir um issue no GitHub.

---

## Problemas específicos iPadOS

> **Nota:** iPadOS só é suportado em **KVM-Go**. Se usar Mini-KVM ou uConsole KVM Extension, a aplicação iPadOS não funcionará.

### Bluetooth não liga

**Sintoma:** O botão BLE não fica verde, ou não aparecem dispositivos na lista de scan.

1. **Verifique se o Bluetooth está ativo** no seu iPad — Definições > Bluetooth
2. **Certifique-se de que KVM-Go está ligado** — o dongle deve estar ligado à porta USB do PC alvo
3. **Aproxime o iPad** do dongle KVM-Go — o alcance BLE é tipicamente até 10 metros
4. **Verifique a permissão Bluetooth do iPad** — Definições > Privacidade e segurança > Bluetooth > certifique-se de que Openterface está permitido
5. **Toque em Refresh** no ecrã BLE para reiniciar o scan
6. **Verifique a permissão Bluetooth da app Openterface** — se negada no primeiro arranque, reative nas Definições

### Sem pré-visualização de vídeo

**Sintoma:** BLE está ligado mas o ecrã está preto ou mostra uma imagem guia.

1. **Verifique a ligação HDMI** — a saída HDMI do PC alvo está bem ligada à entrada HDMI do KVM-Go?
2. **Verifique a saída do alvo** — o computador alvo está realmente a mostrar algo?
3. **Experimente uma resolução mais baixa** — toque no botão Video e selecione uma resolução inferior (720p ou 480p)
4. **Verifique a permissão da câmara** — Definições > Privacidade e segurança > Câmara > certifique-se de que Openterface está permitido
5. **Reinicie a aplicação** — deslize a partir das apps recentes e reabra

### Rato/toque não responde

**Sintoma:** O vídeo funciona mas tocar no ecrã não faz nada no alvo.

1. **Verifique a ligação BLE** — o botão BLE deve estar verde com um valor RSSI
2. **Experimente outro modo de rato** — alterne entre Pan Mode e iPencil Mode
3. **Desligue e volte a ligar** — abra o ecrã BLE, toque em Disconnect, depois Connect again
4. **Verifique o computador alvo** — reconhece o KVM-Go como teclado/rato USB?

### O teclado não envia teclas

**Sintoma:** O rato funciona mas escrever não faz nada.

1. **Certifique-se de que o teclado flutuante está aberto** — toque no botão Keyboard
2. **Verifique a ligação BLE** — a entrada passa por Bluetooth, não USB
3. **Verifique o modo de teclado** — experimente alternar entre Normal e Game mode
4. **Teclado externo:** se usar um teclado físico iPad, verifique se o iPadOS encaminha eventos de teclas para a aplicação

### O áudio não reproduz

**Sintoma:** O vídeo funciona mas não ouve o PC alvo através do iPad.

1. **Verifique o botão Audio** — deve mostrar um ícone de altifalante verde
2. **Verifique a permissão do microfone** — Definições > Privacidade e segurança > Microfone > certifique-se de que Openterface está permitido
3. **Verifique o volume do iPad** — certifique-se de que o iPad não está silenciado ou no volume mínimo
4. **Verifique a saída de áudio do alvo** — o PC alvo está configurado para enviar áudio por HDMI?

### A aplicação bloqueia ou congela

1. **Feche e reinicie** a aplicação
2. **Reduza a resolução de vídeo** — alta resolução pode sobrecarregar iPads mais antigos
3. **Verifique o armazenamento disponível** — pouco espaço pode causar instabilidade
4. **Atualize a aplicação** — procure uma versão mais recente na App Store

### Capturas de ecrã ou gravações não guardadas

1. **Verifique a permissão da Biblioteca de fotografias** — Definições > Privacidade e segurança > Fotografias > certifique-se de que Openterface está permitido
2. **Verifique o armazenamento disponível** no seu iPad
3. **Navegue via app Ficheiros** — as gravações são guardadas em `Documents/Recordings/` mesmo sem acesso à Biblioteca de fotografias

---

## Reposição de fábrica

1. Use Serial Reset Tool a partir de Settings (macOS) ou menu Device (Qt)
2. Isto repõe o chip HID aos valores predefinidos de fábrica
3. Volte a ligar o dispositivo após a reposição

## Recuperação de ligação

As aplicações gerem a recuperação automática para:
- Desligar/voltar a ligar dispositivo (hot-plug para USB, reconexão BLE para iPadOS)
- Timeouts de comunicação
- Fallbacks de chipset (MS2109 → MS2109S → MS2130S)
- Recuperação da porta série
- Reconexão BLE automática iPadOS (até 3 tentativas com atraso de 2 segundos)

## Enviar relatórios de defeito

1. Ative o registo em ficheiro
2. Reproduza o problema
3. Envie via [Issues do GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) ou por e-mail para info@techxartisan.com
