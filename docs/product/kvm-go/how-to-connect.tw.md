---
title: "如何連接"
description: 如何連接 — kvm-go / how to connect (KVM-GO). 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。 — kvm-go/how-to-connect
keywords: "KVM-Go 設置, 超緊湊 KVM 設置, 內置 HDMI 連接, KVM 安裝指南, 鑰匙扣 KVM 設置, USB KVM 連接, 無顯示器設置, 便攜式 KVM 設置"
---

# **如何連接** | 設置指南 | Openterface KVM-Go

## **連接概述**

![KVM-Go 連接概述](https://assets.openterface.com/images/kvm-go/step-0-overview.webp){:style="max-height:360px"}

上圖顯示了 [**KVM-Go**](/product/kvm-go)、主機和目標設備之間的所有連接。

- **主機**：需要安裝 [Openterface 應用程序](/app)。  
- **目標設備**：無需軟件和預配置。
- **視頻**：內置接口直接插入目標設備，因此您無需攜帶或管理額外的視頻線纜。

## **連接所需物品**

![KVM-Go 全部組件](https://assets.openterface.com/images/kvm-go/step-0-all-parts.webp){:style="max-height:360px"}

要設置您的 **KVM-Go**，您需要以下組件：

- **KVM-Go (HDMI / DP / VGA)** — 連接到**目標設備**（用於視頻採集）  
- **黑色短 USB-C 線纜** — 連接到**目標設備**（用於鍵盤和鼠標模擬）
- **橙色長 USB-C 線纜** — 連接到**主機**（運行 [Openterface 應用程序](/app)）

!!! note "線纜長度聲明"
    **官方 KVM-Go 套裝**中包含的確切線纜長度**尚未最終確定**，可能與此處顯示的略有不同。  
    本指南中演示的線纜來自*經典 Mini-KVM 工具包*，僅供說明之用。

!!! warning "使用您自己的線纜"
    如果您選擇使用自己的線纜，請確保它們是**高質量、支持數據傳輸的 USB 線纜**。劣質或僅充電線纜可能導致：
    
    - 黑屏問題
    - 鍵盤或鼠標輸入無響應
    - 間歇性連接中斷
    - 顯示輸出閃爍或不穩定

## **分步設置**

### **步驟 1 — 將 USB 線纜連接到 KVM-Go**
![插入 USB 線纜](https://assets.openterface.com/images/kvm-go/step-1-plugged.webp){:style="max-height:360px"}

- **黑色 USB-C 線纜** → 插入 KVM-Go 外殼上標有 ![目標圖標](https://assets.openterface.com/images/shell-icons/target-computer.svg#only-light){:style="max-height:20px"} ![目標圖標](https://assets.openterface.com/images/shell-icons/target-computer_1.svg#only-dark){:style="max-height:20px"} **Target** 的端口。  
- **橙色 USB-C 線纜** → 插入標有 ![主機圖標](https://assets.openterface.com/images/shell-icons/host-computer.svg#only-light){:style="max-height:20px"} ![主機圖標](https://assets.openterface.com/images/shell-icons/host-computer_1.svg#only-dark){:style="max-height:20px"} **Host** 的端口。

!!! warning
    兩個 USB-C 端口在物理上完全相同。  
    請始終**仔細檢查外殼表面上的標籤**以避免混淆。

### **步驟 2 — 將視頻連接到目標設備**
![插入 HDMI 接口](https://assets.openterface.com/images/kvm-go/step-3-hdmi-plugged.webp){:style="max-height:360px"}

將**內置公頭視頻接口**直接插入目標設備的視頻輸出端口。

### **步驟 3 — 連接目標 USB 端口**
將**黑色 USB 線纜**連接到目標設備以進行 HID 控制。

- **選項 A：** 直接插入 USB-A 端口  
  ![目標 USB-A](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-b.webp){:style="max-height:360px"}

- **選項 B：** 使用 USB-C 轉接器  
  ![目標 USB-C](https://assets.openterface.com/images/kvm-go/step-4-target-plugged-a.webp){:style="max-height:360px"}

!!! note "USB-C 連接檢查"
    某些 USB-C 端口可能無法提供穩固的連接。如果您遇到間歇性鍵盤/鼠標控制問題，請輕輕晃動轉接器連接以確保其正確就位並接觸良好。


### **步驟 4 — 連接主機 USB 端口**
將**橙色 USB 線纜**連接到主機。

- 直接連接到 USB-C 端口**或**通過 USB-C 轉 USB-A 轉接器。  
  ![插入主機 USB](https://assets.openterface.com/images/kvm-go/step-5-plug-in-host-computer-1.webp){:style="max-height:360px"}

