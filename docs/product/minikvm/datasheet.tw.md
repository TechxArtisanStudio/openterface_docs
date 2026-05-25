---
title: "Openterface Mini-KVM 產品手冊 | 技術規格與產品詳情"
description: "Openterface Mini-KVM 的完整技術規格書。查看此 KVM-over-USB 解決方案的規格、尺寸、視頻/音頻功能、電源需求、配件和連接選項。"
keywords: "Mini-KVM 產品手冊, Mini-KVM 規格, KVM over USB 技術規格, Mini-KVM 尺寸, Mini-KVM 配件, HDMI KVM 規格, USB KVM 技術詳情, 無頭電腦控制規格, KVM 開關規格, 服務器管理工具"
---

# Openterface Mini-KVM 產品手冊

## 概述

Openterface™ Mini-KVM 是一款功能豐富、生產級的開源設備，由社區驅動開發。它提供了一種輕量且快速的 KVM-over-USB 解決方案，使您可以通過簡單的 USB 和 HDMI 連接，直接從自己的筆記本電腦或臺式機（稱為 Host 計算機）控制無頭計算機（稱為 Target 計算機）。這種緊湊的方法消除了對額外鍵盤、鼠標、顯示器或任何網絡配置的需求，簡化了您的設置並提高了效率。

## 規格

### 一般信息

| 參數 | 特性 |
|-----------|----------------|
| 產品名稱 | Openterface Mini-KVM |
| 製造商 | TechxArtisan Limited |

### 產品型號

#### Mini-KVM 基礎版 (392-OP-MINIKVM-BASIC)

**內容：**

- Openterface Mini-KVM
- 快速入門指南

#### Mini-KVM 工具包 (392-OPMINIKVMTOOLKIT)

**內容：**

- Openterface Mini-KVM
- 快速入門指南
- 工具包袋（尺寸：165 x 110 x 50mm）
- 延伸針帽
- HDMI 公對公線纜（長度：0.3m）
- Type-C 公對 USB-A 公線纜（長度：0.3m）帶 USB-A 母對 Type-C 公適配器
- Type-C 公對公線纜（長度：1.5m）帶 USB-C 母對 USB-A 公適配器

### 電源

| 參數 | 特性 |
|-----------|----------------|
| 連接類型 | USB-C 供電，無需外部電源。 |

### 視頻

| 參數 | 特性 |
|-----------|----------------|
| 最大視頻輸入 | 通過 HDMI 支持高達 3840x2160@30Hz<br>(注：使用適配器時，還可支持 VGA、Micro HDMI、DVI 等其他視頻輸入源) |
| 支持的視頻分辨率 | 最高支持 1920x1080@30Hz |
| 視頻壓縮方法 | YUV、MJPEG |
| 延遲 | 低於 140 毫秒 |

### 音頻

| 參數 | 特性 |
|-----------|----------------|
| 音頻捕獲模式 | HDMI 嵌入式音頻 |

### 環境

| 參數 | 特性 |
|-----------|----------------|
| 工作溫度 | 0°C 至 40°C |
| 存儲溫度 | -10°C 至 50°C |
| 溼度 | 80% RH |

### 尺寸和重量

| 參數 | 特性 |
|-----------|----------------|
| 長 x 寬 x 高 | 61 x 13.5 x 53 毫米 |
| 重量 | 48 克 |

## 工具包配件

| 物品 | 型號編號 | 描述 |
|------|--------------|-------------|
| HDMI 公對公線纜 | OP-03-CABLE30-HDMI | 長度：0.3m / ~12"<br>顏色：黑色<br>用途：高清 HDMI 視頻傳輸 |
| Type-C 對 USB-A 線纜帶適配器 | OP-04-CABLE30-C2A | 長度：0.3m / ~12"<br>顏色：黑色<br>適配器：USB-A 母對 Type-C 公<br>用途：數據傳輸 / KVM 控制 |
| 尼龍 Type-C 線纜帶適配器 | OP-05-CABLE150-C2C | 長度：1.5m / 4' 11"<br>顏色：橙色<br>適配器：USB-C 對 USB-A<br>數據傳輸速度：最高 10Gbps<br>充電功率：240W |

## 連接

### 接口 / 連接性

1. **USB-C 端口（母）** ⓵  
   作為 USB 設備端口，通過內置的 USB 集線器連接到 Host 計算機進行數據傳輸

2. **USB-C 端口（母）** ②  
   作為 USB 設備端口，通過內置的 USB 集線器連接到 Host 計算機以模擬鍵盤和鼠標 HID 輸出

3. **HDMI 輸入端口（母）** ③  
   來自 Target 計算機的 HDMI 源輸入

4. **可切換 USB-A 2.0 端口（母）** ④  
   作為 USB 主機端口，由 Host 計算機或 Target 計算機在任一時間使用，但不能同時使用

5. **切換開關** ⑤  
   用於在 Host 計算機和 Target 計算機之間切換 USB-A 2.0 端口的連接

6. **擴展針腳** ⑥  
   如需更多信息，請查看開發人員使用的擴展針腳說明。

## 應用場景

Openterface Mini-KVM 是各種用戶和場景的理想伴侶：

- IT 專業人員排查服務器問題
- 技術人員維護 ATM、VLT 和自助終端機
- 開發者管理邊緣計算設備
- 技術愛好者嘗試單板計算機
- 需要網絡隔離環境下進行安全本地操作的專業人士，如管理加密貨幣資產者
- 需要頻繁在個人電腦和工作電腦之間集成工作的任何人。

## Host 計算機軟件

要在 macOS、Windows、Linux 或 Android 上使用此設備，請從相關應用平臺安裝我們的可用應用程序，或通過 GitHub 倉庫進行源代碼構建。

## 開源與合規性

Openterface 應用程序採用 AGPL-3.0 許可證，由 TechxArtisan 持續開發。該設備已獲得 OSHWA 認證（UID CN000015），確保 GitHub 上的所有原理圖和源代碼均可公開訪問：[Openterface_Mini-KVM_Hardware](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)。

## 保持更新

訪問 [openterface.com](https://openterface.com)，加入我們的 Discord 社區，以獲取最新信息、獲得支持並與其他用戶協作。