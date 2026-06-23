---
title: "連接到目標設備 (Legacy v1)"
description: "連接到目標設備: 在連接目標設備之前，請確保您已完成： 1. - KVM Extension板的物理安裝 2. - Openterface App的安裝 將Type-C母端口連接到目標設備的USB端口，以模擬鍵盤和鼠標信號。 將目標設備的視頻輸出連接到KVM Extension上的HDMI端口： —…"
keywords: "KVM連接設置, 目標設備連接, USB控制設置, HDMI輸入設置, uConsole KVM擴展連接"
---

# **連接到目標設備** | Openterface KVM Extension for uConsole

!!! warning "Legacy v1 documentation"
    This page documents the **first-generation** Openterface KVM Extension (37 × 77 mm, no Ethernet/SD). The current product is the **[Extension Module v2](../index.md)** with dual Ethernet, SD card, and 60 Hz output.


## 連接概述

![extension-use-case-1a](https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension-use-case-1a.webp){:style="max-height:480px"}

## 前提條件

在連接目標設備之前，請確保您已完成：

1. [硬件安裝](/products/kvmext/hardware-installation/) - KVM Extension板的物理安裝
2. [軟件設置](/products/kvmext/software-setup/) - Openterface App的安裝

## 連接步驟

### **USB控制**
將Type-C母端口連接到目標設備的USB端口，以模擬鍵盤和鼠標信號。

### **視頻輸入**
將目標設備的視頻輸出連接到KVM Extension上的HDMI端口：

- 對於HDMI輸出設備，使用標準HDMI電纜
- 對於VGA輸出設備，使用VGA轉HDMI轉換器電纜。
    - *注意*：確保轉換器通過其USB連接器供電以正常運行。
- 對於不同的視頻信號類型，使用其他適當的適配器

## 測試連接

1. 開啟電源並啟動uConsole
2. 運行Openterface QT app
3. 測試HDMI、音頻和USB HID功能以確認正常運行
