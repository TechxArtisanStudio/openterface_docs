---
title: "Configuração de Software | Módulo de Extensão v2"
description: "Instale e configure o aplicativo host Openterface no seu uConsole para o Módulo de Extensão KVM v2 — captura HDMI, USB HID, comutação de cartão SD e compartilhamento USB."
keywords: "instalação do aplicativo Openterface, configuração de software uConsole, extensão KVM v2, openterfaceqt"
---

# **Configuração de Software** | Módulo de Extensão v2

## Visão geral da instalação

O aplicativo host Openterface permite que seu uConsole funcione como uma interface KVM com captura HDMI, controle USB HID, **comutação de cartão SD** e **compartilhamento de porta USB** entre host e alvo.

!!! note "Requisitos"
    - **uConsole (host)**: Aplicativo Openterface QT necessário
    - **Dispositivo alvo**: Nenhum aplicativo necessário — Windows, macOS, Linux, Android, iOS suportados para KVM
    - **Vídeo**: Cabo HDMI padrão; conversores alimentados suportam VGA, DP e outros formatos
    - **Backend recomendado**: **GStreamer** para melhor desempenho de GPU arm64 (Kali Linux pode ter suporte limitado ao GStreamer)

## Métodos de instalação

### **Opção 1: GitHub Releases (recomendado para arm64)**

1. Visite [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. Baixe o último `.deb` para **arm64** (por exemplo, `openterfaceqt_*_arm64.deb`).
3. Instale:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Opção 2: Flatpak**

Siga o [Guia de Instalação Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **Opção 3: Repositório da comunidade (ClockworkPi Bookworm)**

Mantido por Rex para imagens ClockworkPi:

1. **Adicionar repositório**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Instalar**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Notas sobre o repositório"
    Os comandos requerem `sudo`. O repositório tem como alvo pacotes Bookworm arm64 — verifique a compatibilidade com o sistema operacional do seu uConsole antes de instalar.

## Lembretes importantes

!!! tip "Energia e configuração inicial"
    - Mantenha o uConsole carregado ou em uma fonte de energia estável — bateria fraca pode causar problemas de conexão.
    - Se o controle de teclado/mouse falhar na primeira tentativa:
        1. Desligue completamente o uConsole.
        2. Aguarde pelo menos 10 segundos.
        3. Ligue e tente novamente.

!!! tip "Taxa de baud da comunicação serial"
    Defina a taxa de baud para **9600** para uso serial — o uConsole pode não sustentar 115200 de forma confiável.

## Uso

### **Iniciando uma sessão KVM**

1. Inicie o Openterface QT no seu uConsole.
2. O aplicativo detecta o Módulo de Extensão v2 automaticamente.
3. Conecte o alvo via HDMI e USB.
4. Use o teclado e o trackball do uConsole para controlar o alvo.

### **Recursos de controle**

- **Teclado**: Emulação completa, incluindo teclas multimídia
- **Mouse**: Posicionamento absoluto e relativo
- **Áudio**: Passagem de áudio HDMI para os alto-falantes do uConsole
- **Transferência de texto**: Cole nomes de usuário, senhas e snippets como pressionamentos de tecla simulados
- **Comutação USB**: Compartilhe armazenamento USB entre uConsole e alvo através do aplicativo host — veja [Conectar ao Alvo](/products/kvmext/connect-to-target/)
- **Comutação de cartão SD**: Monte o cartão SD no host ou no alvo através do aplicativo host — veja [Guia do Cartão SD](/products/kvmext/sd-card/)

### **Solução de problemas de instalação do software**

Se o aplicativo for difícil de instalar ou mouse/teclado não funcionarem:

- Confirme que você instalou a versão **arm64** no seu uConsole CM4/módulo
- Entre no [Discord](https://openterface.com/discord) para ajuda em tempo real
- Reporte problemas no [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## Relacionados

- [Conectar ao Alvo](/products/kvmext/connect-to-target/)
- [Guia do Cartão SD](/products/kvmext/sd-card/)
- [Perguntas Frequentes](/products/kvmext/faq/)
