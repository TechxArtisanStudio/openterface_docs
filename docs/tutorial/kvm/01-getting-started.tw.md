---
title: "KVM教程 01 — 開始使用"
description: 受眾： 初學者 — 第一次使用 Openterface KVM 設備的用戶 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。
---

# KVM教程 01 — 開始使用

**受眾：** 初學者 — 第一次使用 Openterface KVM 設備的用戶

---

## 1. 什麼是KVM-over-USB？

一個KVM（鍵盤、視頻、鼠標）設備位於您的 **主機計算機** 和目標計算機之間。它：

- **捕獲** 目標設備的HDMI視頻輸出（如果有音頻，也會捕獲）
- **轉發** 您的鍵盤和鼠標輸入通過 HID仿真
- 所有這些都通過一根USB線完成 — 不需要網絡

這就是KVM設備與其他遠程桌面軟件的不同之處：即使在BIOS/UEFI模式下、啟動時或操作系統崩潰後，您仍然可以控制目標計算機。

### Openterface KVM設備

| 設備 | 形狀 | 關鍵特性 |
|------|-----|---------|
| **Mini-KVM** | 緊湊型USB便攜式 | 桌面KVM-over-USB |
| **KVM-Go** | 工具箱風格便攜式 | 隨身攜帶的KVM，帶有內置線纜，通過BLE支持iPadOS |
| **uConsole KVM擴展** | 內置模塊 | ClockworkPi uConsole集成的內置KVM |

> 想要KeyMod（僅鍵盤和鼠標仿真器）？請參閱[KeyMod教程](../../keymod/index.md)。

---

## 2. 需要什麼

### 硬件

- **Openterface KVM設備** — Mini-KVM、KVM-Go或uConsole KVM擴展
- **主機計算機** — 運行macOS、Windows、Linux或Android的電腦
- **目標計算機** — 任何具有HDMI輸出的電腦
- **HDMI線纜** — 從目標的HDMI輸出到KVM的HDMI輸入
- **USB線纜** — 從KVM到您的主機計算機（提供電源和數據）

### 可選

- **USB切換線纜** — 從KVM到目標設備的USB端口（用於鍵盤/鼠標仿真）
- **鍵盤和鼠標** — 插入KVM的USB可切換端口以控制主機或目標

---

## 3. 安裝

### 主機應用程序

| 平臺 | 應用程序 | 下載 |
|-----|--------|----|
| **macOS** | Openterface for macOS | [App Store](/appstore) 或 [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub發佈](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT)，.deb，.rpm，AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) 或 [GitHub發佈](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — 只支持KVM-Go |

### Android要求

Android應用程序需要：

- **Android 8.0 (API 26)** 或更高版本
- **USB OTG支持** — 大多數現代手機都支持（三星、谷歌Pixel、一加）。驗證方法：連接一個USB閃存驅動器到OTG適配器
- **USB OTG線纜或適配器**，用於將KVM設備連接到您的手機

### iPadOS要求

iPadOS應用程序需要：

- **iPadOS 17.0** 或更高版本
- **KVM-Go設備** — iPadOS通過Bluetooth Low Energy (BLE)與KVM-Godongle進行鍵盤/鼠標輸入，通過USB捕獲卡獲取視頻
- **相機和麥克風權限** — 需要用於視頻預覽和捕獲卡音頻監控
- **藍牙權限** — 必須發現並連接到KVM-Godongle以發送HID輸入
- **相冊權限**（可選）— 保存截圖和錄製到照片應用

### macOS權限

首次啟動時，macOS將請求：

| 權限 | 原因 |
|----|-----|
| **相機** | 捕獲來自HDMI捕獲芯片的視頻 |
| **麥克風** | 捕獲目標設備的音頻（如果啟用） |
| **輔助功能** | 必要用於相對模式下的HID鼠標控制 |

### Linux權限

- 將用戶添加到`dialout`和`video`組：`sudo usermod -a -G dialout,video $USER`
- 安裝udev規則以訪問設備
- **BrlTTY衝突**：移除`brltty`或黑名單串行芯片 — 參見[故障排除](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- 安裝程序捆綁了CH340串行驅動。對於便攜式構建，單獨安裝。

---

## 4. 連接硬件

┌─────────────┐                        ┌──────────────────┐
│   目標      │─── HDMI線纜 ────────▶│ Openterface     │
│ 計算機      │                        │ KVM設備        │
└─────────────┘                        │                  │
                                       │ ◄── USB線纜 ──│── USB切換線纜 ──▶ 目標USB端口
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │   主機計算機     │
                                       │ (此應用程序)    │
                                       └──────────────────┘
1. 將目標的 **HDMI輸出** 連接到KVM的 **HDMI輸入**
2. 將KVM的 **USB端口** 連接到主機計算機上的一個USB端口
3. （可選）將USB切換線纜從KVM連接到目標的USB端口
4. （可選）將鍵盤/鼠標插入KVM的USB可切換端口
5. **開啟** 目標設備

### 設備檢測

KVM枚舉為多個USB設備：
- **視頻捕獲**（MS2109/MS2109S/MS2130S）— 出現為攝像頭
- **串行**（CH9329或CH32V208）— `/dev/ttyUSB*` (Linux)， `COM*` (Windows)， `cu.usbserial-*` (macOS)
- **HID** — 用於固件操作

### 使用Android手機連接

使用Android應用程序時，連接鏈路通過USB OTG：

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│ 目標PC (屏幕) │               │   KVM設備        │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌─────────▼─────────┐
                               │  Android手機      │
                               │  (Openterface)    │
                               └───────────────────┘
```

Android連接順序：

1. **HDMI**：將目標的HDMI輸出連接到KVM的HDMI輸入
2. **USB（目標）**：將目標的USB端口連接到KVM的USB端口 — 傳輸鼠標/鍵盤信號
3. **USB OTG（手機）**：通過USB OTG線纜/適配器將KVM連接到您的Android手機
4. **電源**：開啟KVM設備（如果需要單獨電源輸入）和目標計算機

成功連接後，視頻預覽會從佔位符切換到目標的實時屏幕，並且點擊手機屏幕會在目標上移動光標。

### 使用iPadOS連接

iPadOS應用程序使用不同的連接模型：**BLE用於輸入** 和 **USB捕獲用於視頻**。

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │ KVM-Godongle    │
│ 目標PC (屏幕) │               │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │   USB捕獲         │ (視頻)
                              │   BLE (FFF2)      │ (鍵盤/鼠標)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

iPadOS連接順序：

1. **硬件**：將KVM-Godongle插入目標PC的USB端口並連接HDMI輸入
2. **開啟電源** 目標計算機
3. **打開應用程序** 並授予相機、麥克風和藍牙權限
4. **點擊BLE按鈕** 在工具欄中 — 應用程序掃描名為`kvm*`的設備
5. **點擊KVM-Go設備旁邊的連接** — 按鈕變為綠色並顯示RSSI信號強度
6. **驗證**：視頻預覽顯示目標屏幕，點擊發送點擊，輸入發送按鍵

> **注意**：iPadOS應用程序僅支持KVM-Go。Mini-KVM和uConsole KVM擴展不支持BLE。

---

## 5. 第一次啟動

### 主要窗口

```
┌─────────────────────────────────────────────────────────┐
│ Menu Bar / 工具欄                                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              視頻顯示區域                              │
│         (顯示目標設備屏幕)                           │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ 狀態欄 │ 口徑 │ 鍵盤 │ 鼠標 │ 分辨率 │        │
└─────────────────────────────────────────────────────────┘
```

### Android權限

首次啟動時，Android應用程序請求：

| 權限 | 原因 | 拒絕後會發生什麼 |
|---|---|---|
| **USB主機** | 與Openterface硬件通信 | 應用程序無法檢測到您的KVM設備 |
| **相機** | 接收來自HDMI捕獲芯片的視頻 | 無視頻預覽 |
| **存儲** | 保存截圖和錄製內容 | 無法保存捕獲 |

授予所有權限以獲得完整功能。當檢測到KVM設備時，還會出現系統USB權限對話框 — 點擊**允許**。

### iPadOS權限

首次啟動時，iPadOS應用程序請求：

| 權限 | 原因 | 拒絕後會發生什麼 |
|---|---|---|
| **相機** | 接收來自HDMI捕獲卡的視頻 | 無視頻預覽 |
| **麥克風** | 監聽目標PC音頻通過iPad揚聲器 | 無法監聽音頻 |
| **藍牙** | 發現並連接到KVM-Go以發送HID輸入 | 無法發送鍵盤/鼠標輸入 |
| **相冊庫** | 保存截圖和錄製內容 | 捕獲的圖像仍保存在應用程序文檔文件夾中 |

如果您不小心拒絕了權限，請前往**設置 > 隱私與安全**重新啟用。

### 驗證連接

- **HDMI指示器**：綠色 = 接收到信號，橙色 = 無信號，灰色 = 不明
- **鍵盤指示器**：綠色 = 連接，橙色 = 未找到，灰色 = 不明
- **鼠標指示器**：綠色 = 連接，橙色 = 未找到，灰色 = 不明
- **串行端口**：應顯示一個端口號和波特率（9600或115200）

如果指示器顯示橙色或灰色，請參閱[故障排除](04-troubleshooting.md)。

---

## 6. 基本KVM控制

### 鼠標模式

| 模式 | 描述 | 最佳用途 |
|------|-------------|----------|
| **絕對**（默認） | 主機光標直接映射到目標屏幕 | 廣泛使用，GUI導航 |
| **相對 (HID)** | 鼠標的移動通過HID以增量形式發送 | 遊戲，快速交互 |

通過工具欄切換或**控制 > 鼠標模式**進行切換。

### 鍵盤輸入

所有按鍵在應用程序窗口聚焦時轉發到目標設備：
- 標準鍵、功能鍵、修飾符
- 特殊鍵：Ctrl+Alt+Del, Print Screen
- **粘貼到目標**：將剪貼板文本作為仿真按鍵發送

### USB切換

在USB可切換端口之間進行切換：
- **主機** — 您的鍵盤/鼠標控制主機計算機
- **目標** — 您的鍵盤/鼠標控制目標計算機

---

## 7. 下一步

- **[基本操作 →](02-basic-operations.md)** — 鼠標、鍵盤、視頻、音頻、錄製
- **[高級功能 →](03-advanced-features.md)** — EDID、固件、宏、腳本
- **[故障排除 →](04-troubleshooting.md)** — 常見問題和解決方案

```
```