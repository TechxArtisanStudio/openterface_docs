---
title: "Guia do Cartão SD | Módulo de Extensão v2"
description: "Use leitura/gravação de cartão SD no Módulo de Extensão KVM v2 do Openterface uConsole. Alterne o acesso entre o uConsole e o dispositivo alvo para imagens, logs e transferência de arquivos."
keywords: "cartão SD, microSD, extensão KVM v2, gravação de imagem, transferência de arquivos, uConsole"
---

# **Guia do Cartão SD** | Módulo de Extensão v2

O Módulo de Extensão v2 inclui **leitura/gravação de cartão SD** para que você possa gravar imagens, exportar logs e transferir arquivos do seu uConsole sem precisar carregar um leitor de cartão externo.

## Visão geral

O módulo fornece um slot microSD compartilhado entre o **uConsole (host)** e o **dispositivo alvo** — semelhante em conceito ao fluxo de comutação MicroSD do KVM-GO, mas integrado ao módulo de expansão do uConsole.

!!! note "Um lado por vez"
    O cartão SD é montado no uConsole **ou** no alvo, nunca em ambos simultaneamente. Alterne o acesso usando o aplicativo host Openterface.

## Instalar o cartão SD

Insira o cartão microSD firmemente até que esteja bem encaixado no slot do módulo.

## Controle via aplicativo host

Use o **Openterface QT** no seu uConsole para:

- Alternar o acesso ao SD entre **host** (uConsole) e **alvo**
- Gravar imagens de sistema operacional no cartão a partir do uConsole
- Exportar logs ou transferir arquivos sem remover o cartão

Certifique-se de ter concluído a [Configuração do Software](/products/kvmext/software-setup/) antes de usar os recursos de SD.

## Fluxos de trabalho típicos

| Fluxo de trabalho | Descrição |
|----------|-------------|
| **Gravação de imagem de SO** | Grave imagens do Raspberry Pi, placas embarcadas ou appliances a partir do uConsole |
| **Exportação de logs** | Extraia logs de um alvo para o cartão e leia no uConsole |
| **Transferência de arquivos** | Mova configurações ou scripts entre o uConsole e o alvo quando a rede não estiver disponível |

## Dicas de segurança

- **Ejetar/desmontar** no aplicativo host antes de remover fisicamente o cartão
- Alterne para o lado correto (host vs alvo) antes das operações de leitura/gravação
- Use cartões microSD de qualidade para cargas de trabalho de gravação de imagem

## Relacionados

- [Conectar ao Alvo](/products/kvmext/connect-to-target/)
- [Configuração do Software](/products/kvmext/software-setup/)
- [Guia de Comutação MicroSD do KVM-GO](/products/kvmgo/microsd-switch/) — conceito de comutação semelhante no KVM-GO
