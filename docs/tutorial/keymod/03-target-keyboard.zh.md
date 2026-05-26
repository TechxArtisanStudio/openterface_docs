---
title: "KeyMod 教程 - 目标系统"
description: 设置目标操作系统，使 KeyMod 向 Windows、macOS 或 Linux 电脑发送正确的按键映射。 KeyMod 发送的按键会适配目标电脑的操作系统。正确配置可确保目标端收到正确的按键。 点击标题栏中的 系统图标 打开选择器： 说明：…
keywords: "KeyMod 目标系统, 按键映射, 修饰键, Unicode 输入"
---

# 3. 目标系统

KeyMod 发送的按键会适配目标电脑的操作系统。正确配置可确保目标端收到正确的按键。

## 如何设置

点击标题栏中的 **系统图标** 打开选择器：

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="目标系统选择对话框" width="300" />
  <p><em>目标系统选择器 — 选择 macOS、Windows 或 Linux。</em></p>
</div>

> **说明：** 尚无此界面的截图。点击标题栏系统图标后，会弹出含三个图标按钮（macOS、Windows、Linux）的对话框。

## 会影响什么

| 目标 | 按键映射 |
|--------|-------------|
| **Windows** | Win 键映射为 Windows 键；标准 PC 修饰键行为 |
| **macOS** | Win 键映射为 Cmd；Alt 映射为 Option；快捷键标签正确 |
| **Linux** | Super/Meta 键行为 |

这会影响：
- **快捷方式中心** 中显示的快捷键标签
- **修饰键映射**（Win 键行为）
- 非 ASCII 字符使用的 **Unicode 输入方式**

## Unicode 字符

非 ASCII 字符（中文、日文、表情符号）需要各系统特定的输入方式：

| 系统 | 方法 |
|---|---|
| **Windows** | Alt+小键盘十六进制 Unicode 输入 |
| **Linux** | Ctrl+Shift+U 后输入十六进制码 |
| **macOS** | Option+十六进制输入 |

若目标端 Unicode 显示不正确，请确认目标系统设置是否正确。

## 键盘模式（非布局）

KeyMod 提供三种输入模式：

| 模式 | 切换方式 |
|---|---|
| **ABC**（字母） | 点击 **ABC** 键 |
| **123**（数字） | 点击 **123** 键 |
| **!?#**（符号） | 点击 **!?#** 键 |

这些是应用内的输入方式切换，而非物理键盘布局。KeyMod 目前发送标准 USB HID 扫描码（US QWERTY 基础）。若目标端使用非 US 物理键盘，同一键位上的符号可能略有差异。

## 下一步

- **[← 键盘与鼠标](02-keyboard-mouse.md)** — 输入、修饰键、触控板和文本输入
- **[快捷方式中心 →](04-shortcuts.md)** — 基于配置文件的快捷键
