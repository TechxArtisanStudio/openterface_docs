---
title: "KeyMod 教程 - 目標系統"
description: "設置目標操作系統，使 KeyMod 向 Windows、macOS 或 Linux 電腦發送正確的按鍵映射。"
keywords: "KeyMod 目標系統, 按鍵映射, 修飾鍵, Unicode 輸入"
---

# 3. 目標系統

KeyMod 發送的按鍵會適配目標電腦的操作系統。正確配置可確保目標端收到正確的按鍵。

## 如何設置

點擊標題欄中的 **系統圖標** 打開選擇器：

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="目標系統選擇對話框" width="300" />
  <p><em>目標系統選擇器 — 選擇 macOS、Windows 或 Linux。</em></p>
</div>

> **説明：** 尚無此界面的截圖。點擊標題欄系統圖標後，會彈出含三個圖標按鈕（macOS、Windows、Linux）的對話框。

## 會影響什麼

| 目標 | 按鍵映射 |
|--------|-------------|
| **Windows** | Win 鍵映射為 Windows 鍵；標準 PC 修飾鍵行為 |
| **macOS** | Win 鍵映射為 Cmd；Alt 映射為 Option；快捷鍵標籤正確 |
| **Linux** | Super/Meta 鍵行為 |

這會影響：
- **快捷方式中心** 中顯示的快捷鍵標籤
- **修飾鍵映射**（Win 鍵行為）
- 非 ASCII 字符使用的 **Unicode 輸入方式**

## Unicode 字符

非 ASCII 字符（中文、日文、表情符號）需要各系統特定的輸入方式：

| 系統 | 方法 |
|---|---|
| **Windows** | Alt+小鍵盤十六進制 Unicode 輸入 |
| **Linux** | Ctrl+Shift+U 後輸入十六進制碼 |
| **macOS** | Option+十六進制輸入 |

若目標端 Unicode 顯示不正確，請確認目標系統設置是否正確。

## 鍵盤模式（非佈局）

KeyMod 提供三種輸入模式：

| 模式 | 切換方式 |
|---|---|
| **ABC**（字母） | 點擊 **ABC** 鍵 |
| **123**（數字） | 點擊 **123** 鍵 |
| **!?#**（符號） | 點擊 **!?#** 鍵 |

這些是應用內的輸入方式切換，而非物理鍵盤佈局。KeyMod 目前發送標準 USB HID 掃描碼（US QWERTY 基礎）。若目標端使用非 US 物理鍵盤，同一鍵位上的符號可能略有差異。

## 下一步

- **[← 鍵盤與鼠標](02-keyboard-mouse.md)** — 輸入、修飾鍵、觸控板和文本輸入
- **[快捷方式中心 →](04-shortcuts.md)** — 基於配置文件的快捷鍵
