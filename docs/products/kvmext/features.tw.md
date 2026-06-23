---
title: "功能與規格"
description: 功能與規格 — uconsole-kvm-extension / features (uConsole KVM Extension). 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。 — uconsole-kvm-extension/features
keywords: "KVM擴展功能, uConsole KVM, HDMI KVM, USB HID控制, 便攜式KVM, headless控制, 4G LTE替換, 技術規格, uConsole擴展"
---

# **功能與規格** | Openterface KVM Extension for uConsole

![PCB-front](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp){:style="max-height:320px"}
![PCB-Back](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-back.webp){:style="max-height:320px"}

## 核心功能

- **直接 HDMI + USB HID**：利用 uConsole 的內置屏幕和控件，具有直接 HDMI 輸入和 USB HID 模擬。
- **即插即用**：即時控制，無需軟件安裝或在目標設備上留下痕跡。
- **低延遲**：針對 BIOS 級故障排除和實時交互進行了優化。
- **便攜式**：一體化移動工具——無需額外的顯示器、鍵盤或網絡設置。
- **無網絡**：通過 HDMI 捕獲和 HID 輸入實現穩定的 headless 控制，無需網絡。
- **文本傳輸**：通過模擬按鍵快速傳輸文本——非常適合用戶名、密碼和代碼片段。支持完整 ASCII，包括符號和標點符號。[查看我們的應用](/app)瞭解詳情。
- **開源**：基於 [Openterface KVM QT](https://github.com/techxArtisanStudio/openterface_qt) 構建，擁有活躍的社區支持。

## 技術規格

### 物理尺寸

- **尺寸：** 37 × 77 mm（匹配 4G/LTE 模塊）
- **厚度：** 1.0 mm（比原始 4G/LTE 模塊的 1.2 mm 更薄）
- **材料：** 帶彈簧接觸器的高質量 PCB

### 完整鍵盤和鼠標模擬

- **USB HID：** 絕對和相對鼠標定位，完整鍵盤支持，多媒體鍵。
- **連接：** 通過擴展板的 Type-C 母端口 USB 連接到目標設備。

### 視頻和音頻

- **輸入：** 通過 HDMI 最高支持 4K (3840×2160) @ 30Hz
- **輸出：** 全高清 (1920×1080) @ 30Hz，延遲低於 140ms
- **顯示器：** 使用 uConsole 的內置屏幕
- **壓縮：** 支持 YUV 和 MJPEG
- **兼容性：** VGA、DVI、Micro HDMI（通過適配器）
- **音頻：** HDMI 嵌入式音頻直通

### 可切換 USB 2.0 端口

- **共享端口**：使用主機應用輕鬆在 uConsole 和目標設備（如閃存驅動器）之間切換 USB 訪問。
- **USB 速度：** 12Mbps 全速傳輸

### 連接和電源

- **電源：** 直接從 uConsole 的擴展槽獲取電源（無需外部電源）
- **目標兼容性：** Windows、macOS、Linux、Android、iOS
- **目標軟件：** 無需安裝
