---
title: "KeyMod 教程 - 故障排除"
description: "解决常见 KeyMod 问题：连接、按键无响应、蓝牙配对失败、语音输入错误等。"
keywords: "KeyMod 故障排除, KeyMod 无法连接, KeyMod 蓝牙问题, KeyMod 按键无效"
---

# 12. 故障排除

Android 版 KeyMod 应用的常见问题与解决方案。

## 连接问题

### 未连接

| 现象 | 解决方案 |
|---|---|
| **「Not Connected」** 指示 | 检查线缆；尝试重新插拔。BLE 请开关蓝牙后重新配对。 |
| **USB 权限被拒绝** | 进入 Android 设置 → 应用 → KeyMod → 权限 → 启用 USB。重新插线。 |
| **蓝牙无法配对** | 开关蓝牙。在蓝牙设置中忘记设备后重新配对。确认 KeyMod 处于配对模式。 |
| **连接频繁断开** | 查看应用中 BLE 按钮下方的 RSSI。低于 -75 dBm 表示信号弱 — 靠近设备，移除遮挡。 |

### 连接状态指示

| 指示 | 含义 |
|---|---|
| **Connected** | 绿色图标 — 可发送输入 |
| **Connecting** | 琥珀色图标 — 正在连接 |
| **Disconnected** | 灰色图标 — 无活动连接 |
| **Signal bars** | BLE 信号强度或 USB 活动状态 |

### 自动连接

在连接对话框中启用 **「Auto-connect on startup」**。KeyMod 会记住上次连接类型（USB 或 BLE）及上次配对的 BLE 设备。

### USB 插拔检测

KeyMod 监听 Android USB 插拔广播。拔出 USB 线时连接状态立即更新。若启用自动连接，重新插入会尝试重连。

---

## 键盘问题

### 按键无响应

| 现象 | 解决方案 |
|---|---|
| **按键未发送** | 确认显示「Connected」（绿色）。尝试切换模式再切回。确认目标电脑将 KeyMod 识别为键盘。 |
| **宏未执行** | 确认已连接。检查宏数据含有效标记（标记名无拼写错误）。 |
| **出现错误字符** | 检查 **目标系统** — 系统不匹配会导致映射问题。确认目标电脑键盘布局（QWERTY 与 AZERTY）。 |

### Unicode 字符无效

非 ASCII 字符（中文、日文、表情）需要各系统特定输入方式：

| 系统 | 方法 |
|---|---|
| **Windows** | Alt+小键盘十六进制 Unicode |
| **Linux** | Ctrl+Shift+U 后输入十六进制 |
| **macOS** | Option+十六进制 |

若 Unicode 显示不正确，请确认 **目标系统** 设置正确。

---

## 触控板问题

| 现象 | 解决方案 |
|---|---|
| **触控板无响应** | 在设置中启用触觉反馈。尝试触控板帮助叠加层 (?) 确认手势支持。 |
| **滚动无效** | 在 设置 → 常规 中检查触控板滚动灵敏度。 |

---

## 语音输入问题

### 语音识别不可用

从 Play 商店安装 Google 语音输入。Android 11+ 上 KeyMod 需要 queries 权限（APK 已包含）。

### 静音检测无效

| 现象 | 解决方案 |
|---|---|
| **未说话时仍在录音** | 检查「静音时自动暂停」。减少背景噪音。清晰、靠近麦克风说话。 |
| **立即停止录音** | 提高音量或缩短静音检测超时。 |

### 语音文字未发送

检查连接状态。未连接时「Send」按钮禁用。

---

## AI 问题

### API 密钥无效

| 现象 | 解决方案 |
|---|---|
| **「API key not configured」** | 确认 API 密钥正确 — 检查空格或拼写。确认 API Base URL 含完整路径（如 `https://api.openai.com/v1`）。确认模型在提供商处存在。本地提供商（Ollama）请设置 API Key Optional。 |

### 文本润色较慢

检查网络。尝试更快模型 — 较小模型（gpt-3.5-turbo、llama3-8b）更快。使用本地提供商（Ollama）消除延迟。查看 AI Request History 错误信息。

---

## 需要更多帮助？

若问题仍未解决：

- **错误报告：** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **社区：** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface 文档：** [openterface.com](https://openterface.com)
