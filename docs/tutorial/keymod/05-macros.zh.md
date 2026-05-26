---
title: "KeyMod 教程 - 宏"
description: "使用 KeyMod 宏录制并回放自动按键序列，支持修饰键、延迟与计划任务。"
keywords: "KeyMod 宏, 自动按键, 宏计划, 宏标记, 按键序列"
---

# 5. 宏

一键录制并回放自动按键序列。

## 什么是宏？

宏是 **可录制的按键序列**，可重复播放。例如：
- 一键输入邮件签名
- 依次发送 `Ctrl+Shift+Esc` 后接 `Alt+D`
- 用步骤间延迟自动化多步命令序列

## 宏标记语法

| 标记 | 含义 |
|---|---|
| `<CTRL>` ... `</CTRL>` | 按住/释放 Control |
| `<SHIFT>` ... `</SHIFT>` | 按住/释放 Shift |
| `<ALT>` ... `</ALT>` | 按住/释放 Alt/Option |
| `<CMD>` ... `</CMD>` | 按住/释放 Command/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | 特殊键 |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | 方向键 |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | 导航键 |
| `<F1>` 至 `<F12>` | 功能键 |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | 暂停 |

**示例：**
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
这会打开终端（Ctrl+Alt+T），等待 1 秒，然后输入 `ls -la` 并按下 Enter。

## 创建宏

1. 进入 **Macros** 模式
2. 点击 **「+」** 创建新宏
3. 输入 **宏名称/标签**
4. 使用文本框和快速插入标记芯片构建宏命令序列
5. 调整 **Send Char Interval**（按键间延迟，毫秒）
6. 点击 **「Save」**

## 下一步

- **[← 快捷方式中心](04-shortcuts.md)** — 基于配置文件的快捷键
- **[语音输入 →](06-voice-input.md)** — 语音转键盘
