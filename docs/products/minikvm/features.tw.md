---
title: "功能與規格"
description: "Openterface Mini-KVM 完整概覽：強大功能包括 BIOS 級訪問、4K 視頻支持、跨平臺兼容性、USB 共享以及詳細技術規格。關於這款無頭計算機控制解決方案，您需要了解的一切。 width=\\"560\\" height=\\"315\\"… width=\"560\" height=\"315\"…"
keywords: "Mini-KVM 功能, KVM 規格, BIOS 訪問, 無頭控制, 4K KVM, USB 共享, 跨平臺 KVM, 文本傳輸, 即插即用 KVM, 開源 KVM, 技術規格"
---

# **功能與規格** | Openterface Mini-KVM

<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/r3HNUflWGOY?si=84Ek6F9ocHmmGTqW" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  referrerpolicy="strict-origin-when-cross-origin" 
  allowfullscreen>
</iframe>

## 核心功能

### **BIOS 級訪問**

直接訪問目標設備 BIOS、固件和啟動管理，無需網絡依賴。

### **網絡獨立性**

使用 HDMI 視頻捕獲和模擬鍵盤/鼠標（HID）輸入實現穩定的無頭控制。無需網絡連接。

### **高性能視頻**

- **輸入**：通過 HDMI 最高支持 4K (3840×2160) @ 30Hz
- **輸出**：全高清 (1920×1080) @ 30Hz，延遲低於 140ms
- **壓縮**：支持 YUV 和 MJPEG
- **兼容性**：通過適配器支持 VGA、DVI、Micro HDMI

### **可切換 USB 端口**

在主機和目標設備之間切換 USB 訪問，實現無縫 USB 驅動器共享。在[可切換 USB 端口](../usb-switch)頁面瞭解更多。

### **跨平臺支持**

[主機應用](/app)兼容 macOS、Windows、Linux 和 Android，實現通用集成。

### **文本傳輸**

通過模擬按鍵輕鬆傳輸文本——非常適合用戶名、密碼和代碼片段。支持 ASCII 字符，包括符號和標點。

!!! warning "文本傳輸限制" - **無剪貼板集成**：僅模擬輸入，不支持圖像或文檔傳輸 - **僅 ASCII**：僅限於 ASCII 字符（不支持中文、日文、韓文） - **長度考慮**：最適合短文本；大塊文本可能導致性能問題

### **即插即用便利性**

目標設備無需安裝軟件。連接後立即開始控制，不留任何軟件痕跡。

### **音頻集成**

HDMI 嵌入式音頻直通，提供完整的多媒體體驗。

### **擴展引腳**

[擴展引腳](../extension-pins)支持高級開發和特定需求的自定義。

### **開源**

[完全開源](/compliance)的硬件和軟件，確保透明度和[社區創新](/discord)。

## 技術規格

### **物理尺寸**

- **尺寸**：61 × 53 × 13.5 mm (2.40 × 2.09 × 0.53 英寸)
- **重量**：~48g
- **材質**：鋁合金、PLA 外殼

### **連接與電源**

- **電源**：USB-C 供電（無需外部電源）
- **USB 速度**：12Mbps 全速傳輸
- **主機兼容性**：Windows、macOS、Linux、Android
- **目標**：無需安裝軟件

### **視頻與音頻**

- **最大輸入**：3840×2160@30Hz (HDMI)
- **最大輸出**：1920×1080@30Hz
- **延遲**：低於 140ms
- **音頻**：HDMI 嵌入式音頻直通

### **輸入功能**

- 完整鍵盤和鼠標模擬（絕對和相對）
- 多媒體按鍵支持
- 自定義 HID 功能
- 計算機喚醒功能

### **環境條件**

- **工作溫度**：0°C 至 40°C
- **存儲溫度**：-10°C 至 50°C
- **溼度**：80% RH

## 產品型號

- **基礎版**：OP-MINIKVM-BASIC
- **工具包版**：OP-MINIKVM-TOOLKIT

## 文檔下載

- **[快速入門指南](https://assets.openterface.com/minikvm/minikvm_quick_start_guide.pdf)** (PDF)
- **[數據手冊（英文）](https://assets.openterface.com/minikvm/Openterface-Mini-KVM-Basic-and-Toolkit-Datasheet-Eng.pdf)** (PDF)

![lig-front](https://assets.openterface.com/images/products/minikvm-v1-9-front.svg#only-light){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/products/minikvm-v1-9-back.svg#only-light){:style="max-height:260px"}
![lig-front](https://assets.openterface.com/images/products/minikvm-v1-9-front_1.svg#only-dark){:style="max-height:260px"}
![lig-back](https://assets.openterface.com/images/products/minikvm-v1-9-back_1.svg#only-dark){:style="max-height:260px"}
