---
title: "KeyMod 教程"
description: "KeyMod 教程: 本教程涵蓋 Android 版 KeyCmd 應用。iOS 版本正在開發中。 KeyMod 將您的手機或平板變成面向任意電腦的 通用輸入設備。它通過 Openterface KeyMod 硬件（KVM——鍵盤、視頻、鼠標切換器）連接，再把手機上的按鍵、鼠標移動和手柄輸入，以真實 USB…"
keywords: "KeyMod 教程, 如何使用 KeyMod, 手機鍵盤指南, KeyCmd 應用教程"
---

# KeyMod 教程

{% include "partials/keymod-tutorial-slideshow.html" %}

本教程涵蓋 **Android** 版 KeyCmd 應用。iOS 版本正在開發中。

## 什麼是 KeyMod？

KeyMod 將您的手機或平板變成面向任意電腦的 **通用輸入設備**。它通過 **Openterface KeyMod** 硬件（KVM——鍵盤、視頻、鼠標切換器）連接，再把手機上的按鍵、鼠標移動和手柄輸入，以真實 USB 鍵盤和鼠標的形式發送到目標電腦。

### 連接方式

[ 您的手機 ] ──USB/BLE──> [ KeyMod 硬件 ] ──USB HID──> [ 目標電腦 ]
   (KeyCmd 應用)              (CH9329 協議)              (Windows/macOS/Linux)
應用通過串口（USB-C，115200 波特、8N1，或藍牙 BLE）使用 **CH9329 協議** 與 KeyMod 硬件通信。KeyMod 在目標電腦上顯示為標準 USB 鍵盤和鼠標——無需驅動。

### 適合誰？

| 您是… | KeyMod 可以幫您… |
|---|---|
| **系統管理員** | 用手機管理服務器，無需再帶備用鍵盤和顯示器 |
| **演講者 / 主講人** | 在房間內任意位置控制幻燈片，無需翻頁筆 |
| **玩家** | 將手機用作復古遊戲手柄或額外控制器 |
| **內容創作者** | 在另一台機器錄製時觸發快捷鍵、宏和語音輸入 |
| **高級用户** | 從手機發送複雜快捷鍵、文本片段或自動化序列 |
| **任何人** | 在沙發、牀上或房間另一端向電腦輸入 |

## 教程章節

| 指南 | 説明 |
|---|---|
| [1. 入門](01-getting-started.md) | 安裝、連接並選擇首個模式（約 5 分鐘） |
| [2. 鍵盤與鼠標](02-keyboard-mouse.md) | 輸入、修飾鍵、觸控板和文本輸入 |
| [3. 目標系統](03-target-keyboard.md) | 目標操作系統映射 |
| [4. 快捷方式中心](04-shortcuts.md) | 面向常用應用的配置文件快捷鍵 |
| [5. 宏](05-macros.md) | 帶延遲的自動按鍵序列 |
| [6. 語音輸入](06-voice-input.md) | 使用 Whisper AI 的語音轉鍵盤 |
| [7. AI 集成](07-ai.md) | 文本潤色與命令助手 |
| [8. 手柄](08-gamepad.md) | 可自定義佈局的虛擬遊戲控制器 |
| [9. 數字鍵盤](09-numpad.md) | 用於數據錄入的數字鍵盤 |
| [10. 演示](10-presentation.md) | 幻燈片遙控與計時器 |
| [11. 設置](11-settings.md) | 應用配置與偏好 |
| [12. 故障排除](12-troubleshooting.md) | 常見問題與解決方案 |

## 獲取幫助

- **錯誤報告：** [Discord](https://discord.gg/techxartisan)
- **社區：** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **源代碼：** KeyCmd *(coming soon)*
