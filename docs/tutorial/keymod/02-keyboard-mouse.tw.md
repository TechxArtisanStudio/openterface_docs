---
title: "KeyMod 教程 - 鍵盤與鼠標"
description: "學習使用 KeyMod 鍵盤與觸控板輸入、發送快捷鍵，以及用手機控制目標電腦的鼠標。"
keywords: "KeyMod 鍵盤, KeyMod 鼠標, 觸控板, 修飾鍵, 鍵盤快捷鍵"
---

# 2. 鍵盤與鼠標

鍵盤與鼠標模式是最常用的模式，提供虛擬鍵盤與觸控板，用於從手機控制目標電腦。

## 兩個層級：Basic 與 Pro

KeyMod 提供兩種鍵盤體驗：

| 層級 | 模式名稱 | 最適合 |
|---|---|---|
| **Basic** | Keyboard & Mouse | 全屏鍵盤快速輸入，無頂部標題欄干擾 |
| **Pro** | Keyboard & Mouse Pro | 含快捷方式中心條、分屏鍵盤與完整 IME 的複合佈局 |

### Keyboard & Mouse (Basic)

**Basic** 提供 **專用全屏鍵盤**，無應用頂部標題欄。所有控件位於鍵盤自身頂行：

- 菜單、模式切換（Touchpad / Compose & Send / Num pad）
- 目標系統選擇器
- 連接狀態

**Basic 獨有功能：**

- **長按重複**：按住字符或功能鍵自動重複（約 400ms 延遲，約 50ms 重複間隔）
- **按鍵預覽**：按下時在鍵上方顯示浮動氣泡標籤
- **觸覺反饋** 與 **主題適配** 鍵面
- **豎屏與橫屏數字鍵盤**：5×8 網格（豎屏）或 8×5 網格（橫屏）
- **IME 編寫模式**：輸入長文本，以純 ASCII HID 按鍵發送

> Basic **不包含** 快捷方式中心條行。需要條帶配置文件請切換到 **Keyboard & Mouse Pro**。

### Keyboard & Mouse Pro

**Pro** 為完整複合體驗：快捷方式中心條行、分屏鍵盤佈局與完整 IME 流程，適合高級用戶。

## 佈局

**豎屏模式：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-gestures.webp" alt="豎屏觸控板手勢幫助與鍵盤" width="300" />
  <p><em>豎屏 — 觸控板手勢 + 鍵盤佈局。在觸控板上滑上下滾動，拖動移動光標。</em></p>
</div>

**橫屏 — 分屏鍵盤 + 觸控板：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-split-keyboard-touchpad.webp" alt="橫屏分屏鍵盤與中央觸控板" width="420" />
  <p><em>橫屏 — 分屏鍵盤，左側觸控板，便於雙手拇指輸入。</em></p>
</div>

**橫屏 — 宏條 + 配置文件：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-macro-strip.webp" alt="橫屏宏條與配置文件選擇器" width="420" />
  <p><em>橫屏 — 鍵盤上方宏條與配置文件選擇器（如 Default、KiCAD）。</em></p>
</div>

## 顯示模式（Android）

點擊 **切換手柄**（鍵盤與觸控板之間的藥丸形分隔條）循環顯示模式：

| 模式 | 顯示內容 |
|---|---|
| **Both**（默認） | 鍵盤 + 觸控板同時顯示 |
| **Keyboard only** | 全寬鍵盤，隱藏觸控板 |
| **Touchpad only**（豎屏） | 觸控板全屏 |
| **Split**（橫屏） | 兩半鍵盤，左側觸控板 |

## 如何使用鍵盤

| 操作 | 方法 |
|---|---|
| 輸入字母 | 點擊該鍵 |
| 大寫字母 | 先點 **Shift**，再點字母 |
| 輸入數字或符號 | 點 **?123** 切換到數字/符號佈局 |
| 輸入 Ctrl+C（複製） | 點 **Ctrl**（高亮），再點 **C** |
| 輸入 Win+R（運行對話框） | 點 **Win**，再點 **R** |
| 使用 F1–F12 | 點 **Fn**，字母行變為功能鍵 |
| 多修飾鍵（Ctrl+Shift+C） | 依次點 **Ctrl**、**Shift**（均保持），再點 **C** |

### 修飾鍵行為

**按住再點：** 點修飾鍵保持（高亮），再點任意鍵。單次按鍵後修飾鍵自動釋放。多修飾鍵組合請依次點各修飾鍵，最後點目標鍵。

### 長按備選符號

許多字母鍵 **隱藏符號** 可通過長按訪問：

長按 "d" → 顯示: $  €  ¥  £
長按 "k" → 顯示: (  {  [  <
長按 "/" → 顯示: \  |
長按 "m" → 顯示: +  _
長按直至彈出菜單，滑向目標符號後鬆手。

### Fn 鍵層

點修飾行中的 **Fn** 鍵，字母鍵臨時變為 **F1 至 F12**：

- Q = F1, W = F2, E = F3, R = F4, T = F5, Y = F6
- U = F7, I = F8, O = F9, P = F10
- A = F11, S = F12

## 快捷操作按鈕

常用快捷按鈕可快速訪問。應用根據 **目標系統** 設置選擇正確修飾鍵：

| 操作 | macOS | Windows/Linux |
|---|---|---|
| 複製 | Cmd+C | Ctrl+C |
| 粘貼 | Cmd+V | Ctrl+V |
| 剪切 | Cmd+X | Ctrl+X |
| 撤銷 | Cmd+Z | Ctrl+Z |
| 全選 | Cmd+A | Ctrl+A |
| 重做 | Cmd+Y | Ctrl+Y |
| 查找 | Cmd+F | Ctrl+F |
| 保存 | Cmd+S | Ctrl+S |
| 新標籤 | Cmd+T | Ctrl+T |
| 關閉標籤 | Cmd+W | Ctrl+W |
| 下一標籤 | Cmd+Tab | Ctrl+Tab |
| 鎖定屏幕 | Cmd+L | Win+L |
| 顯示桌面 | Cmd+D | Win+D |
| Alt+F4 | — | Alt+F4 |
| Ctrl+Alt+Del | — | Ctrl+Alt+Del |

## 觸控板

### 手勢

| 手勢 | 操作 |
|---|---|
| 單擊 | 左鍵點擊 |
| 雙指單擊 | 右鍵點擊 |
| 拖動 | 移動光標 |
| 雙指上下滑動 | 滾動（自然滾動） |
| 長按 | 拖動模式（鎖定光標以便拖動） |
| 雙擊 | 雙擊 |

### 觸控板附加功能

- **彈出觸控板** — 點觸控板信息圖標 (?) 打開浮動觸控板，可覆蓋其他模式
- **觸控板幫助疊加層**（Android）— 點 **?** 查看全屏手勢參考
- **觸覺反饋** — 點擊與拖動切換時有振動

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-numpad.webp" alt="豎屏觸控板與數字鍵盤網格" width="300" />
  <p><em>豎屏 — 觸控板，右側數字/符號網格快速輸入。</em></p>
</div>

## 文本輸入（IME 編寫模式 — Android）

豎屏鍵盤與鼠標模式下可切換到 **IME 捕獲模式** — 鍵盤下方文本編輯器，先編寫較長文本再作為 HID 按鍵發送到目標電腦。

- 點修飾行中的 **鍵盤/IME 切換** 圖標，在直接發鍵與文本編寫模式間切換
- 編寫模式提供帶複製、粘貼、清除、撤銷、發送工具欄的文本編輯器
- 用箭頭圖標 **摺疊/展開** 編寫區域

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-long-text-compose.webp" alt="豎屏長文本編寫與發送" width="300" />
  <p><em>IME 編寫模式 — 輸入或粘貼長文本，點 Send 以 HID 按鍵發送到目標。</em></p>
</div>

## 目標系統

設置目標系統以匹配目標電腦的按鍵習慣，影響快捷方式標籤、Unicode 輸入方式與修飾鍵映射。點擊標題欄 **系統圖標** 更改。

## 快捷方式條（Android，橫屏）

橫屏分屏模式下，兩半鍵盤上方出現 **可滾動快捷方式條**，快速訪問常用快捷鍵（複製、粘貼、剪切、保存、撤銷、全選）。

## 下一步

- **[目標系統 →](03-target-keyboard.md)** — 鍵盤佈局與目標系統映射
- **[故障排除 →](12-troubleshooting.md)** — 常見問題與解決方案
