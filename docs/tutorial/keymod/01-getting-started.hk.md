---
title: "KeyMod 教程 - 入門"
description: "KeyMod 教程 - 入門: 安裝 KeyCmd 應用、連接 KeyMod 硬件，並在 5 分鐘內發送第一個按鍵。. 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。"
keywords: "KeyMod 入門, KeyMod 設置, KeyMod 安裝, 連接 KeyMod"
---

# 1. 入門

安裝 KeyCmd 應用、連接 KeyMod 硬件，並在 5 分鐘內發送第一個按鍵。

## 您需要準備

- **Openterface KeyMod 硬件** — 已開機且在範圍內
- **手機或平板** — 已安裝 KeyCmd 應用的 Android 設備
- **USB 線纜**（首次設置）— USB-C，用於將手機連接到 KeyMod 設備
- **藍牙**（可選）— 首次設置後可無線連接

## 步驟 1：安裝 KeyCmd 應用

**Android：**

1. 打開手機瀏覽器，訪問 [KeyCmd beta APK (v0.19)](https://assets2.openterface.com/data/KeyCmd-release-0.19.apk)
2. 下載最新的 `.apk` 文件
3. 點擊下載的文件進行安裝
4. 若 Android 提示，請為瀏覽器允許 **「安裝未知應用」**


> **Note:** KeyCmd source code is not yet public. Download the beta APK from the [App](/app/kvm/) page.

## 步驟 2：連接 KeyMod 設備

KeyMod 可通過兩種方式連接 Openterface KeyMod 硬件：

### USB 連接（建議首次設置使用）

1. 用 USB-C 線將手機插入 KeyMod 設備
2. 打開 KeyCmd 應用
3. 點擊主屏幕右上角的連接圖標
4. 點擊 **「USB 連接」**
5. 出現提示時接受 USB 權限
6. 應看到綠色的 **「已連接」** 狀態指示

### 藍牙連接（無線）

1. 確保手機已開啓藍牙
2. 打開 KeyCmd 並點擊連接圖標
3. 點擊 **「藍牙連接」**
4. 等待 KeyMod 設備出現在掃描列表中
5. 點擊設備進行配對
6. 應看到綠色的 **「已連接」** 狀態指示

> **提示：** 在連接對話框中啓用 **「啓動時自動連接」**，每次打開應用時 KeyCmd 會自動重連。應用會記住上次連接類型（USB 或 BLE）。

## 步驟 3：選擇模式 — 歡迎與指南

啓動後會看到 **歡迎與指南** 屏幕及模式卡片：

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="歡迎屏幕與模式卡片及開始按鈕" width="300" />
  <p><em>歡迎與指南 — 點擊任意模式卡片進入該模式。</em></p>
</div>

隨時通過側欄菜單（左上角漢堡圖標）切換模式：

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="含模式列表的導航抽屜" width="300" />
  <p><em>導航抽屜 — 切換模式，訪問宏、語音和設置。</em></p>
</div>

**「記住我的選擇」** — 勾選後，下次啓動將跳過歡迎屏幕，直接進入上次使用的模式。

**「跳過」按鈕** — 跳過歡迎屏幕，立即進入上次使用的模式。

## 步驟 4：發送第一個按鍵

1. 選擇 **鍵盤與鼠標** 模式
2. 點擊屏幕鍵盤上的任意鍵
3. 對應按鍵將發送到目標電腦

完成！您已可遠程控制目標電腦。

## 連接狀態指示

| 指示 | 含義 |
|---|---|
| **綠色**（已連接圖標） | 連接正常，可發送輸入 |
| **琥珀/藍色**（連接中圖標） | 正在連接 |
| **灰色**（未連接圖標） | 無活動連接 |
| **信號條** | BLE 信號強度或 USB 活動狀態 |

## 下一步

- **[鍵盤與鼠標 →](02-keyboard-mouse.md)** — 輸入、修飾鍵、觸控板和文本輸入
