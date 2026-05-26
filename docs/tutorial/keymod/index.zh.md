---
title: "KeyMod 教程"
description: KeyMod 应用完整使用指南。学习如何连接、用手机控制电脑，以及键盘、鼠标、手柄、宏和语音输入等模式。 本教程涵盖 Android 版 KeyMod 应用。iOS 版本正在开发中。 KeyMod 将您的手机或平板变成面向任意电脑的 通用输入设备。它通过 Openterface KeyMod…
keywords: "KeyMod 教程, 如何使用 KeyMod, 手机键盘指南, KeyMod 应用教程"
---

# KeyMod 教程

{% include "partials/keymod-tutorial-slideshow.html" %}

本教程涵盖 **Android** 版 KeyMod 应用。iOS 版本正在开发中。

## 什么是 KeyMod？

KeyMod 将您的手机或平板变成面向任意电脑的 **通用输入设备**。它通过 **Openterface KeyMod** 硬件（KVM——键盘、视频、鼠标切换器）连接，再把手机上的按键、鼠标移动和手柄输入，以真实 USB 键盘和鼠标的形式发送到目标电脑。

### 连接方式

[ 您的手机 ] ──USB/BLE──> [ KeyMod 硬件 ] ──USB HID──> [ 目标电脑 ]
   (KeyMod 应用)              (CH9329 协议)              (Windows/macOS/Linux)
应用通过串口（USB-C，115200 波特、8N1，或蓝牙 BLE）使用 **CH9329 协议** 与 KeyMod 硬件通信。KeyMod 在目标电脑上显示为标准 USB 键盘和鼠标——无需驱动。

### 适合谁？

| 您是… | KeyMod 可以帮您… |
|---|---|
| **系统管理员** | 用手机管理服务器，无需再带备用键盘和显示器 |
| **演讲者 / 主讲人** | 在房间内任意位置控制幻灯片，无需翻页笔 |
| **玩家** | 将手机用作复古游戏手柄或额外控制器 |
| **内容创作者** | 在另一台机器录制时触发快捷键、宏和语音输入 |
| **高级用户** | 从手机发送复杂快捷键、文本片段或自动化序列 |
| **任何人** | 在沙发、床上或房间另一端向电脑输入 |

## 教程章节

| 指南 | 说明 |
|---|---|
| [1. 入门](01-getting-started.md) | 安装、连接并选择首个模式（约 5 分钟） |
| [2. 键盘与鼠标](02-keyboard-mouse.md) | 输入、修饰键、触控板和文本输入 |
| [3. 目标系统](03-target-keyboard.md) | 目标操作系统映射 |
| [4. 快捷方式中心](04-shortcuts.md) | 面向常用应用的配置文件快捷键 |
| [5. 宏](05-macros.md) | 带延迟的自动按键序列 |
| [6. 语音输入](06-voice-input.md) | 使用 Whisper AI 的语音转键盘 |
| [7. AI 集成](07-ai.md) | 文本润色与命令助手 |
| [8. 手柄](08-gamepad.md) | 可自定义布局的虚拟游戏控制器 |
| [9. 数字键盘](09-numpad.md) | 用于数据录入的数字键盘 |
| [10. 演示](10-presentation.md) | 幻灯片遥控与计时器 |
| [11. 设置](11-settings.md) | 应用配置与偏好 |
| [12. 故障排除](12-troubleshooting.md) | 常见问题与解决方案 |

## 获取帮助

- **错误报告：** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **社区：** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **源代码：** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)
