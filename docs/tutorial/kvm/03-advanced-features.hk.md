---
title: "KVM教程 03 — 高級功能"
description: 受眾： 中級至專家 — 高級用户功能與配置 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。 Openterface. Openterface.
---


# KVM教程 03 — 高級功能

**受眾：** 中級至專家 — 高級用户功能與配置

---

## 1. 偏好設置系統

### 視頻

- **分辨率與幀率** — 首選捕獲設置
- **媒體後端** — FFmpeg、GStreamer（Linux）或 Qt Multimedia（Windows）
- **硬件加速** — VAAPI（Intel/AMD）、V4L2-M2M（Raspberry Pi）
- **寬高比與縮放** — 自定義比例、拉伸/適應/填充

### 音頻

- **啓用** — 切換來自目標的音頻捕獲
- **輸入/輸出設備** — 選擇源和播放設備

### 目標控制

- **鼠標模式** — 絕對、相對 (HID)、相對 (Events)
- **鼠標事件節流** — 30–1000 次/秒
- **鍵盤佈局** — 目標操作系統及區域佈局
- **重複按鍵間隔** — 按住鍵時的重複速度
- **自動隱藏光標** — 在視頻區域上方隱藏主機光標

### 日誌

- **日誌級別** — Debug、Info、Warning、Error
- **寫入文件** — `~/Documents/openterface.log`（macOS）或配置路徑（Qt）
- **串口日誌** — 獨立的串口通信日誌

---

## 2. EDID 管理

### 什麼是 EDID？

EDID（Extended Display Identification Data，擴展顯示識別數據）是 KVM 設備發送給目標的信息，用於描述其顯示能力 — 支持的分辨率、刷新率、廠商信息等。KVM 充當「虛擬顯示器」，因此 EDID 決定了目標會輸出哪些分辨率。

### 編輯 EDID 顯示名稱

您可以更改 KVM 設備向目標報告的顯示名稱。該名稱會出現在目標操作系統的顯示設置中。

> **注意：** 目前僅支持編輯顯示名稱。分辨率編輯和自定義分辨率條目尚不可用。

**訪問路徑：** Settings > EDID Display Name Editor（macOS）或 Device > Update Display Settings（Qt）

### 使用場景

- 在目標操作系統設置中 **識別顯示器**
- 在多顯示器配置中 **自定義命名**，以區分 KVM 顯示器

---

## 3. 宏系統（macOS）

宏是保存在工具欄宏面板中的鍵盤操作序列，可一鍵觸發。

### 按鍵序列格式

**修飾鍵標籤：** `<CTRL>`、`<SHIFT>`、`<ALT>`、`<CMD>`（根據目標操作系統映射為 Cmd/Win/Super）

**特殊鍵：** `<ESC>`、`<BACK>`、`<ENTER>`、`<TAB>`、`<SPACE>`、`<LEFT>`、`<RIGHT>`、`<UP>`、`<DOWN>`、`<HOME>`、`<END>`、`<DEL>`、`<PGUP>`、`<PGDN>`、`<F1>`–`<F12>`

**延遲：** `<DELAY05s>`、`<DELAY1S>`、`<DELAY2S>`、`<DELAY5S>`、`<DELAY10S>`

### 示例

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### AI 輔助生成

宏編輯器的 **Magic** 按鈕可根據自然語言描述生成宏。描述您想要的操作，AI 將生成對應的按鍵序列。

### 驗證

測試後將宏標記為 **verified**（已驗證）。只有已驗證的宏才可供 AI 代理自主執行。

---

## 4. 腳本工具（Qt）

受 AutoHotKey 啓發的腳本語言，用於在目標上自動化鍵盤和鼠標操作。

### 打開方式

菜單：**Device > Script Tool**

### 命令

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | 暫停執行 | `Sleep 1000` |
| `Send` | 發送按鍵 | `Send Hello World` |
| `Click` | 鼠標點擊 | `Click 100 200` |
| `SetCapsLockState` | 切換 CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | 截圖 | `FullScreenCapture "/tmp/shot.png"` |

### 修飾鍵前綴

`^` = Ctrl，`+` = Shift，`!` = Alt，`#` = Win

---

## 5. 固件更新

### 何時更新

- 新硬件功能
- 錯誤修復
- 兼容性改進

### 更新流程

1. 打開 Firmware Update Tool（macOS 上為 **Settings > Firmware Update Tool**，Qt 上為 **Device > Update Firmware**）
2. 工具會從網絡檢查最新版本
3. 寫入操作期間會顯示進度
4. **更新過程中請勿斷開設備連接**

### 恢復

1. 保持設備供電
2. 關閉並重新打開 Firmware Update Tool，重試
3. 若設備無響應，使用 Serial Reset Tool

---

## 6. Serial Reset Tool

**訪問路徑：** Settings > Serial Reset Tool（macOS）或 Device > Factory Reset HID Chip（Qt）

適用於：
- 固件更新失敗後設備處於未知狀態
- HID 芯片無響應
- 準備轉售設備

---

## 7. 診斷（Qt）

菜單：**Device > Device Diagnostics**

依次運行硬件測試：
1. 串口連接測試
2. 目標 USB 狀態
3. 恢復出廠設置測試
4. 高/低波特率測試
5. 壓力測試（快速命令，測量成功率）
6. 即插即用測試（USB 斷開/重連檢測）

運行後，通過 **Support Email Dialog** 導出結果。

---

## 8. AI 聊天系統（macOS）

內置 AI 助手，可分析目標屏幕、建議操作並執行鍵盤/鼠標操作。

### 聊天模式

| Mode | Description |
|------|-------------|
| **Interactive** | 提問並獲取指導 |
| **Agentic** | AI 自主規劃並執行多步驟任務 |
| **Guide** | 逐步給出單條指令 |
| **Planner** | 將複雜請求拆分為結構化計劃 |

### 配置

Settings > AI Chat：API 端點、密鑰（存儲在 Keychain）、模型、目標系統（macOS/Windows/Linux 等）

---

## 9. 遠程控制（VNC/RDP — macOS）

通過 **Control > Connection Protocol** 在 **Hardware KVM**、**VNC** 和 **RDP** 模式之間切換。

| Scenario | Mode |
|----------|------|
| 目標處於 BIOS/UEFI、無網絡、啓動中或已崩潰 | Hardware KVM |
| 高帶寬桌面使用、Windows 服務器 | VNC 或 RDP |

---

## 10. TCP 服務器（Qt）

內置 TCP 服務器，用於在端口 12345 上進行遠程控制。

### 命令

`CHECK_STATUS`、`GET_LAST_IMAGE`、`GET_TARGET_SCREEN`、`SCRIPT_COMMAND`

### Python 示例

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **安全提示：** 無身份驗證、加密或速率限制。僅在可信網絡上啓用。

---

## iPadOS 專屬功能

### 藍牙連接管理

iPadOS 應用通過 **Bluetooth Low Energy (BLE)** 連接 KVM-Go dongle，用於鍵盤/鼠標 HID 輸入：

- **自動連接：** 默認啓用。啓動時，應用掃描 5 秒並自動連接信號最強的 `kvm*` 設備。
- **重新連接：** 若連接斷開，應用最多嘗試重連 3 次，每次間隔 2 秒。
- **信號監測：** 每 2 秒更新 RSSI。BLE 按鈕顯示信號強度（如 `-45 dBm`）及顏色指示：綠色（-50 至 0 dBm）、橙色（-70 至 -50 dBm）、紅色（低於 -70 dBm）。
- **設備掃描：** 僅顯示名稱以 `kvm` 開頭（不區分大小寫）的設備。
- **手動控制：** 打開 BLE 界面以掃描、連接、斷開或禁用自動連接。

### 信息疊加層

點擊 **Info** 按鈕，在右上角顯示實時輸入狀態疊加層：

```
┌─ 輸入狀態 ────────────┐
│ 鼠標                  │
│ 模式: Absolute        │
│ 位置: 512.0, 384.0    │
│ 拖動模式: Active      │
│ 滾動: Inactive        │
│ 鍵盤                  │
│ 模式: Normal          │
│ Caps Lock: OFF        │
│ 修飾鍵: Ctrl, Shift   │
└───────────────────────┘
```

疊加層對觸摸透明 — 不會阻擋與視頻預覽的交互。

### 屏幕方向校正

點擊 **Rotate** 按鈕循環切換方向校正模式：Normal、90° CW、180°、90° CCW。當 KVM-Go dongle 以非標準方向安裝時，可校正視頻預覽。旋轉同時應用於實時預覽和已保存的捕獲內容。

### 禁用空閒計時器

應用在使用期間通過禁用空閒計時器保持 iPad 屏幕 **常亮**，防止在監控目標 PC 時 iPad 自動鎖定。

### 日誌系統

應用內置基於類別的 `Logger` 過濾：

| Category | Covers |
|---|---|
| `bluetooth` | BLE 掃描、連接、數據傳輸 |
| `mouse` | 鼠標輸入、手勢檢測、模式切換 |
| `keyboard` | 按鍵事件、修飾鍵狀態、組合鍵 |
| `camera` | 視頻錄製、截圖、照片捕獲 |
| `ui` | 觸摸處理、手勢識別、預覽層 |
| `general` | 應用生命週期、一般信息 |

可在應用源碼中調整日誌以減少控制枱輸出。

---

## 下一步

- **[故障排除 →](04-troubleshooting.md)** — 常見問題與解決方案

---

## Android 專屬功能

### 設置面板

Android 應用的設置面板（菜單按鈕 ☰）包含所有配置選項：

| Setting | Description |
|---|---|
| **Device** | 顯示已連接的 USB 設備及狀態。點擊以選擇或重新掃描。 |
| **Disconnect Device** | 安全釋放所有 USB 連接。拔線前使用。 |
| **Baudrate** | 串口通信速度：**115200**（默認）或 **9600**（較慢，用於排查問題）。 |
| **Controls** | 攝像頭亮度、對比度和色調滑塊。 |
| **Video Format** | 分辨率與幀率選擇器。 |
| **Rotate/Flip** | 順時針/逆時針旋轉 90°，水平/垂直翻轉。 |
| **Screen Capture / Record Video** | 截圖與視頻錄製。 |
| **Relative / Absolute / Drag** | 切換鼠標控制模式。 |
| **About Device** | 顯示 Android 版本和應用版本信息。 |

### 設置持久化

Android 應用會在會話之間記住您的偏好：

| Setting | Persisted? |
|---|---|
| 鼠標控制模式 | 是 |
| 視頻格式（分辨率、FPS） | 是 |
| 攝像頭參數（亮度、對比度、色調） | 是 |
| 鍵盤佈局（US、JP、DE） | 是 |
| 波特率 | 是 |
| 設備連接歷史 | 是 |

重新打開應用時，會恢復上次的設置。要重置所有內容：Android 設置 → 應用 → Openterface → 存儲 → **清除數據**。

### 安全斷開

在 Android 上拔下 KVM 設備前：

1. 打開設置面板
2. 點擊 **Disconnect Device**（紅色顯示）
3. 等待應用釋放 USB 連接
4. 拔下線纜

這可防止數據損壞，並確保目標計算機正確釋放鍵盤/鼠標。

### Android 性能提示

- **降低分辨率** — 640×480 比 1920×1080 輕量得多
- **降低幀率** — 30fps 比 60fps 佔用更少帶寬
- **關閉其他應用** — 釋放手機內存
- **使用優質 USB OTG 適配器** — 廉價適配器可能成為連接瓶頸
- 開發團隊正在努力降低攝像頭管道本身的延遲
