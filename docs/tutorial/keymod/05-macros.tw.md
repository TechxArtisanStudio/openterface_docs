---
title: "KeyMod 教程 - 宏"
description: "使用 KeyMod 宏錄製並回放自動按鍵序列，支持修飾鍵、延遲與計劃任務。"
keywords: "KeyMod 宏, 自動按鍵, 宏計劃, 宏標記, 按鍵序列"
---

# 5. 宏

一鍵錄製並回放自動按鍵序列。

## 什麼是宏？

宏是 **可錄製的按鍵序列**，可重複播放。例如：
- 一鍵輸入郵件簽名
- 依次發送 `Ctrl+Shift+Esc` 後接 `Alt+D`
- 用步驟間延遲自動化多步命令序列

## 宏標記語法

| 標記 | 含義 |
|---|---|
| `<CTRL>` ... `</CTRL>` | 按住/釋放 Control |
| `<SHIFT>` ... `</SHIFT>` | 按住/釋放 Shift |
| `<ALT>` ... `</ALT>` | 按住/釋放 Alt/Option |
| `<CMD>` ... `</CMD>` | 按住/釋放 Command/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | 特殊鍵 |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | 方向鍵 |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | 導航鍵 |
| `<F1>` 至 `<F12>` | 功能鍵 |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | 暫停 |

**示例：**
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
這會打開終端（Ctrl+Alt+T），等待 1 秒，然後輸入 `ls -la` 並按下 Enter。

## 創建宏

1. 進入 **Macros** 模式
2. 點擊 **「+」** 創建新宏
3. 輸入 **宏名稱/標籤**
4. 使用文本框和快速插入標記芯片構建宏命令序列
5. 調整 **Send Char Interval**（按鍵間延遲，毫秒）
6. 點擊 **「Save」**

## 下一步

- **[← 快捷方式中心](04-shortcuts.md)** — 基於配置文件的快捷鍵
- **[語音輸入 →](06-voice-input.md)** — 語音轉鍵盤
