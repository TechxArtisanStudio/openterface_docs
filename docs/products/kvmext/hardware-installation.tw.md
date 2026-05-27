---
title: "硬件安裝"
description: "硬件安裝: KVM Extension 替換 uConsole 擴展槽中的 4G/LTE 模塊，添加直接 HDMI 輸入和 USB HID 控制。. 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。 —…"
keywords: "KVM擴展安裝, uConsole硬件設置, 擴展板安裝, uConsole擴展槽, KVM硬件指南, 物理安裝"
---

# **硬件安裝** | Openterface KVM Extension for uConsole

## 概述
KVM Extension 替換 uConsole 擴展槽中的 4G/LTE 模塊，添加直接 HDMI 輸入和 USB HID 控制。

## 您需要的物品
- 安裝前請檢查您的[包裝內容](whats-in-the-box.md)  
- Openterface KVM Extension 板  
- 提供的**墊圈**（確保穩定安裝和均勻壓力）  
- 六角螺絲刀（用於安裝螺絲）  
- ESD 保護（防靜電手環或接地表面）— 推薦  

## 安裝步驟

### **1. 斷電**
關閉 uConsole 並斷開所有電源和電纜。

### **2. 移除現有模塊**
使用六角螺絲刀移除兩個螺絲。  
**垂直向上**提起板子，避免彎曲彈簧接觸器。

### **3. 安裝 KVM Extension**
- 將**墊圈**放在螺絲柱上。  
- 將 KVM Extension 牢固地插入擴展槽。  
- 墊圈補償了稍薄的 PCB（1.0 mm vs 1.2 mm），保持適當的彈簧接觸壓力。

??? note "最終安裝前檢查適配性"
    您可以先**不使用墊圈**將板子插入以測試適配性。如果板子感覺鬆動或接觸不均勻，請添加墊圈並重新插入板子。Openterface KVM Extension 厚度為 1.0 mm，比原始 LTE 模塊（1.2 mm）稍薄。使用提供的墊圈可確保穩定安裝和可靠的彈簧接觸。  
    ![extension-slot-loose](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-slot-loose.webp){:style="max-height:220px"}

### **4. 固定板子**
重新插入螺絲並**輕柔地**擰緊 — **不要過度擰緊**，因為這可能會損壞板子或損壞螺紋。

![extension-screw-washer-installed](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-screw-washer-installed.jpg){:style="max-height:220px"}
![extension-screw-washer-installing](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-screw-washer-installing.jpg){:style="max-height:220px"}
![extension-install-1](https://assets.openterface.com/images/products/openterface-kvm-uconsole-extension-install-1.webp){:style="max-height:220px"}

### **5. 驗證安裝**
板子應該**平整穩定**，所有焊盤上的彈簧接觸均勻。不應該有明顯的擺動或移動。

### **6. 安裝擴展槽蓋**
重新安裝擴展槽蓋以保護 KVM Extension 板並保持 uConsole 的原始外觀。

??? note "擴展槽蓋上的文字方向"
    從某些角度觀看時，擴展槽蓋上的文字可能看起來"倒置"。這是有意的設計 - 文字的方向是為了在您手持 uConsole 並從頂部到底部查看端口時能夠閱讀，這是使用設備時的自然觀看位置。
    ![expansion-slot-text-orientation](https://assets.openterface.com/images/products/openterface-kvm-uconsole-expansion-slot-text-orientation.webp){:style="max-height:220px"}

---

**下一步**

1. 前往[軟件設置](/products/kvmext/software-setup/)安裝 Openterface App。  
2. 前往[連接到目標設備](/products/kvmext/connect-to-target/)連接您的目標設備。  
3. 查看[功能與規格](/products/kvmext/features/)瞭解詳細技術規格。
