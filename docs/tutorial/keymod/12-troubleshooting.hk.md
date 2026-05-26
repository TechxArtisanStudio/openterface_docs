---
title: "KeyMod 教程 - 故障排除"
description: "KeyMod 教程 - 故障排除: Android 版 KeyMod 應用的常見問題與解決方案。. 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。"
keywords: "KeyMod 故障排除, KeyMod 無法連接, KeyMod 藍牙問題, KeyMod 按鍵無效"
---

# 12. 故障排除

Android 版 KeyMod 應用的常見問題與解決方案。

## 連接問題

### 未連接

| 現象 | 解決方案 |
|---|---|
| **「Not Connected」** 指示 | 檢查線纜；嘗試重新插拔。BLE 請開關藍牙後重新配對。 |
| **USB 權限被拒絕** | 進入 Android 設置 → 應用 → KeyMod → 權限 → 啓用 USB。重新插線。 |
| **藍牙無法配對** | 開關藍牙。在藍牙設置中忘記設備後重新配對。確認 KeyMod 處於配對模式。 |
| **連接頻繁斷開** | 查看應用中 BLE 按鈕下方的 RSSI。低於 -75 dBm 表示信號弱 — 靠近設備，移除遮擋。 |

### 連接狀態指示

| 指示 | 含義 |
|---|---|
| **Connected** | 綠色圖標 — 可發送輸入 |
| **Connecting** | 琥珀色圖標 — 正在連接 |
| **Disconnected** | 灰色圖標 — 無活動連接 |
| **Signal bars** | BLE 信號強度或 USB 活動狀態 |

### 自動連接

在連接對話框中啓用 **「Auto-connect on startup」**。KeyMod 會記住上次連接類型（USB 或 BLE）及上次配對的 BLE 設備。

### USB 插拔檢測

KeyMod 監聽 Android USB 插拔廣播。拔出 USB 線時連接狀態立即更新。若啓用自動連接，重新插入會嘗試重連。

---

## 鍵盤問題

### 按鍵無響應

| 現象 | 解決方案 |
|---|---|
| **按鍵未發送** | 確認顯示「Connected」（綠色）。嘗試切換模式再切回。確認目標電腦將 KeyMod 識別為鍵盤。 |
| **宏未執行** | 確認已連接。檢查宏數據含有效標記（標記名無拼寫錯誤）。 |
| **出現錯誤字符** | 檢查 **目標系統** — 系統不匹配會導致映射問題。確認目標電腦鍵盤佈局（QWERTY 與 AZERTY）。 |

### Unicode 字符無效

非 ASCII 字符（中文、日文、表情）需要各系統特定輸入方式：

| 系統 | 方法 |
|---|---|
| **Windows** | Alt+小鍵盤十六進制 Unicode |
| **Linux** | Ctrl+Shift+U 後輸入十六進制 |
| **macOS** | Option+十六進制 |

若 Unicode 顯示不正確，請確認 **目標系統** 設置正確。

---

## 觸控板問題

| 現象 | 解決方案 |
|---|---|
| **觸控板無響應** | 在設置中啓用觸覺反饋。嘗試觸控板幫助疊加層 (?) 確認手勢支持。 |
| **滾動無效** | 在 設置 → 常規 中檢查觸控板滾動靈敏度。 |

---

## 語音輸入問題

### 語音識別不可用

從 Play 商店安裝 Google 語音輸入。Android 11+ 上 KeyMod 需要 queries 權限（APK 已包含）。

### 靜音檢測無效

| 現象 | 解決方案 |
|---|---|
| **未説話時仍在錄音** | 檢查「靜音時自動暫停」。減少背景噪音。清晰、靠近麥克風説話。 |
| **立即停止錄音** | 提高音量或縮短靜音檢測超時。 |

### 語音文字未發送

檢查連接狀態。未連接時「Send」按鈕禁用。

---

## AI 問題

### API 密鑰無效

| 現象 | 解決方案 |
|---|---|
| **「API key not configured」** | 確認 API 密鑰正確 — 檢查空格或拼寫。確認 API Base URL 含完整路徑（如 `https://api.openai.com/v1`）。確認模型在提供商處存在。本地提供商（Ollama）請設置 API Key Optional。 |

### 文本潤色較慢

檢查網絡。嘗試更快模型 — 較小模型（gpt-3.5-turbo、llama3-8b）更快。使用本地提供商（Ollama）消除延遲。查看 AI Request History 錯誤信息。

---

## 需要更多幫助？

若問題仍未解決：

- **錯誤報告：** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **社區：** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface 文檔：** [openterface.com](https://openterface.com)
