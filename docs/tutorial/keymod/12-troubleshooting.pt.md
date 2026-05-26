---
title: "KeyMod Tutorial - Solução de problemas"
description: "Corrija problemas comuns do KeyMod: problemas de conexão, chaves não registradas, falhas de emparelhamento Bluetooth, erros de entrada de voz e muito mais."
keywords: "KeyMod solução de problemas, KeyMod não conectando, KeyMod problemas de Bluetooth, KeyMod teclas não funcionam"
---

# 12. Solução de problemas

Problemas comuns e soluções para o aplicativo KeyMod em Android.

## Problemas de conexão

### Não conectado

| Sintoma | Solução |
|---|---|
| **Indicador "Não conectado"** | Verifique a conexão do cabo; tente reconectar. Para BLE, desligue/ligue o Bluetooth e emparelhe novamente. |
| **USB permissão negada** | Vá para Android Configurações → Aplicativos → KeyMod → Permissões → ativar USB. Reconecte o cabo. |
| **Bluetooth não emparelha** | Ative/desative o Bluetooth. Esqueça o dispositivo nas configurações de Bluetooth e emparelhe novamente. Certifique-se de que o dispositivo KeyMod esteja no modo de emparelhamento. |
| **A conexão cai com frequência** | Verifique o valor RSSI abaixo de BLE button no aplicativo. Abaixo de -75 dBm indica sinal fraco – aproxime-se. Remova obstruções físicas. |

### Indicadores de estado de conexão

| Indicador | Significado |
|---|---|
| **Conectado** | Ícone verde — pronto para enviar informações |
| **Conectando** | Ícone âmbar — conexão em andamento |
| **Desconectado** | Ícone cinza – sem conexão ativa |
| **Barras de sinalização** | BLE intensidade do sinal ou USB status ativo |

### Conexão automática

Ative **"Conexão automática na inicialização"** na caixa de diálogo de conexão. KeyMod lembra seu último tipo de conexão (USB ou BLE) e o último dispositivo BLE emparelhado.

### USB Detecção de anexar/desconectar

KeyMod monitora os eventos de transmissão de anexação/desanexação USB de Android. Se você desconectar o cabo USB, o status da conexão será atualizado imediatamente. A reconexão aciona uma tentativa de reconexão se a conexão automática estiver habilitada.

---

## Problemas de teclado

### Chaves não registradas

| Sintoma | Solução |
|---|---|
| **Chaves não enviadas** | Verifique se a conexão mostra "Conectado" (verde). Tente mudar de modo e vice-versa. Verifique se o computador de destino reconhece o dispositivo KeyMod como um teclado. |
| **A macro não é executada** | Verifique se você está conectado. Verifique se os dados da macro contêm tokens válidos (sem erros de digitação nos nomes dos tokens). |
| **Caracteres errados aparecendo** | Verifique a configuração **SO de destino** — SO incompatíveis podem causar problemas de mapeamento de teclas. Verifique o layout do teclado do computador de destino (QWERTY vs AZERTY). |

### Caracteres Unicode não funcionam

Caracteres não ASCII (chinês, japonês, emoji) exigem métodos de entrada específicos do sistema operacional:

| SO | Método |
|---|---|
| **Windows** | Alt+NumPad hexadecimal entrada Unicode |
| **Linux** | Ctrl+Shift+U seguido de código hexadecimal |
| **macOS** | Option+entrada hexadecimal |

Se os caracteres Unicode aparecerem incorretamente, verifique se o **SO de destino** está definido corretamente.

---

## TouchPad Problemas

| Sintoma | Solução |
|---|---|
| **Touchpad não responde** | Verifique se o feedback tátil está ativado nas configurações. Experimente a sobreposição de ajuda TouchPad (?) para verificar o suporte a gestos. |
| **A rolagem não funciona** | Verifique a sensibilidade de rolagem de touchpad em Ajustes → Geral. |

---

## Problemas de entrada de voz

### Reconhecedor de fala indisponível

Instale Google Digitação por voz na Play Store. Em Android 11+, KeyMod precisa da permissão de consultas (incluída em APK).

### A detecção de silêncio não funciona

| Sintoma | Solução |
|---|---|
| **A gravação continua quando não se fala** | Verifique a opção Pausa automática no silêncio. Reduza o ruído de fundo. Fale claramente e perto do microfone. |
| **A gravação é interrompida imediatamente** | Fale mais alto ou reduza o tempo limite de detecção de silêncio. |

### Texto de voz não enviado

Verifique o status da conexão. O "Enviar" button fica desabilitado quando não está conectado.

---

## Problemas de IA

### Chave de API não funciona

| Sintoma | Solução |
|---|---|
| **"Chave API não configurada"** | Verifique se a chave da API está correta – verifique se há espaços extras ou erros de digitação. Verifique o URL base da API — deve incluir o caminho completo (por exemplo, `https://api.openai.com/v1`). Verifique se o nome do modelo existe no provedor. Para provedores locais (Ollama), certifique-se de que o sinalizador API KeyOptional esteja definido. |

### Refinamento de texto lento

Verifique sua conexão de rede. Experimente um modelo mais rápido — modelos menores (gpt-3.5-turbo, llama3-8b) respondem mais rápido. Use um provedor local (Ollama) para eliminar a latência da rede. Verifique o histórico de solicitações de IA em busca de mensagens de erro.

---

## Precisa de mais ajuda?

Se você ainda estiver enfrentando problemas:

- **Relatórios de bugs:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Comunidade:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentação:** [openterface.com](https://openterface.com)