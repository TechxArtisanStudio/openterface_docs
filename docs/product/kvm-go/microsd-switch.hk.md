---
title: "MicroSD 卡切換指南"
description: "MicroSD 卡切換指南: Openterface KVM-Go 包含一個 MicroSD 卡插槽，可在主機和目標設備之間共享，但不能同時使用。 此設計允許您在設備之間快速切換進行文件傳輸，無需物理移除卡，使您的工作流程更快、更高效。它也可以作為您的常規 MicroSD 讀卡器使用。 牢固插入 MicroSD…"
keywords: "MicroSD 切換, KVM 切換, 硬件切換, 軟件切換, MicroSD 卡控制, KVM over USB, 文件傳輸, USB 設備管理, 計算機外設, MicroSD 電源管理, LED 指示燈"
---

# **MicroSD 卡切換指南** | Openterface KVM-Go

**Openterface KVM-Go** 包含一個 MicroSD 卡插槽，可在主機和目標設備之間共享，但不能同時使用。

此設計允許您在設備之間快速切換進行**文件傳輸**，無需物理移除卡，使您的工作流程更快、更高效。它也可以作為您的**常規 MicroSD 讀卡器**使用。

## **安裝 MicroSD 卡**

![kvm-go-install-sd](https://assets.openterface.com/images/kvm-go/install-sd.webp){:style="max-height:260px;width:auto"}

!!! note "正確安裝 MicroSD 卡"
    牢固插入 MicroSD 卡，直到感覺到**咔嚓聲**，表明它已安全就位並鎖定。

## **控制方法**

KVM-Go 提供兩種在主機和目標之間切換 MicroSD 卡的方式：

- **硬件按鈕** — 設備上的物理按鈕，用於手動控制。  
- **軟件切換** — 主機應用程序中的切換按鈕，可即時切換。


## **切換按鈕和 LED 指示燈** 

![kvm-go-led-indicator](https://assets.openterface.com/images/kvm-go/led-indicator.webp){:style="max-height:260px;width:auto"}

**雙色 LED 指示燈**顯示當前 MicroSD 連接狀態*（注意：開發中/可能變更）*：

- **🔵 藍色 LED 亮起** — MicroSD 卡已掛載到**目標設備**  
- **🟢 綠色 LED 亮起** — MicroSD 卡已掛載到**主機**  
- **LED 熄滅** — 未插入 MicroSD 卡或設備已關閉電源  
- **LED 閃爍** — 正在進行數據傳輸（讀/寫活動）

!!! note "自動掛載功能（實驗性）"
    默認情況下，當設備首次上電時，MicroSD 卡會掛載到**主機**。  
    即將推出的實驗性功能將允許**自動掛載**到首先連接的一側（主機或目標），使體驗更加無縫。

---

## 相關

- [KVM-GO 上的 microSD EXPRESS：兼容性測試與實際傳輸速度](updates/20260203-kvm-go-microsd-express.zh.md) — SanDisk microSD EXPRESS 卡兼容性測試與實際傳輸速度

