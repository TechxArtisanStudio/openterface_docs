---
title: Openterface KeyMod 系列常見問題
description: 關於 KeyMod 系列的常見問題，涵蓋功能、兼容性、平台和預發佈信息。 歡迎訪問 Openterface KeyMod 的常見問題頁面。 如果您沒有找到所需的答案，請發送郵件至 或加入我們的社區 或 。 ⚠️ 注意：KeyMod 目前處於預發佈開發階段。隨着我們完善產品，功能、規格和設計可能會有所變化。
keywords: KeyMod, Openterface, HID 模擬器, 藍牙鍵盤, 手機鍵盤, 開源, 預發佈, Android, iPadOS
---

# Openterface KeyMod 常見問題

歡迎訪問 **Openterface KeyMod** 的常見問題頁面。  
如果您沒有找到所需的答案，**請發送郵件至 [info@openterface.com](mailto:info@openterface.com)** 或**加入我們的社區** [Discord](/discord) 或 [Reddit](/reddit)。

⚠️ **注意**：KeyMod 目前處於預發佈開發階段。隨着我們完善產品，功能、規格和設計可能會有所變化。

---

## :material-clipboard-list: 快速導航

- [Openterface KeyMod 常見問題](#openterface-keymod-常見問題)
  - [:material-clipboard-list: 快速導航](#material-clipboard-list-快速導航)
  - [常規問題](#常規問題)
  - [連接](#連接)
  - [功能](#功能)
  - [預發佈](#預發佈)

---

## 常規問題

**:material-chat-question:{ .faq } 什麼是 KeyMod？**

KeyMod 是一款緊湊的 USB + 藍牙 HID（鍵盤和鼠標）模擬器，可將您的手機變成便攜式鍵盤和觸控板。用於控制需要鍵盤/鼠標輸入的設備——如信息亭、智能電視、機頂盒、户外顯示屏——無需攜帶完整鍵盤。

**:material-chat-question:{ .faq } KeyCmd 應用支持哪些平台？**

KeyMod Series 控制器應用主要支持 **Android**、**iOS** 和 **iPadOS**。我們也在更廣泛的 Openterface 生態系統中通過 **Windows 和 macOS** 軟件擴展桌面控制。

**:material-chat-question:{ .faq } 目標設備需要安裝軟件嗎？**

不需要。KeyMod 模擬標準 USB 鍵盤和鼠標。目標設備將其識別為即插即用 HID 硬件——無需安裝驅動程序或軟件。

**:material-chat-question:{ .faq } KeyMod 是開源的嗎？**

是的。KeyMod 是開源硬件和開源軟件。隨着項目的發展，我們將發佈電路圖、PCB 文件、固件、軟件和 BOM。

---

## 連接

**:material-chat-question:{ .faq } USB 還是藍牙——應該選擇哪個？**

- **USB**：更可靠，延遲更低。當您需要最穩定的連接時使用。
- **藍牙**：無線連接。當您需要更輕便的設置且場景允許無線時使用。

**:material-chat-question:{ .faq } 計劃有哪些硬件版本？**

1. **2 合 1 連接器** — 組合 USB A + USB C 插頭，廣泛兼容
2. **USB C 版本** — 專用於現代設備的 USB C 插頭

---

## 功能

**:material-chat-question:{ .faq } 可以創建自定義配置和宏嗎？**

可以。開源移動應用支持自定義輸入配置、宏、快捷鍵和工作流快捷方式。您還可以使用數字鍵盤。

---

## 預發佈

**:material-chat-question:{ .faq } KeyMod 何時發佈？**

KeyMod 處於預發佈開發階段。在[產品頁面](/products/keymod/)訂閲以獲取發佈通知和更新。

**:material-chat-question:{ .faq } KeyMod 與 Mini-KVM 和 KVM-Go 有什麼關係？**

KeyMod 使用 Openterface Mini-KVM 的成熟 HID 核心。它採用相同的基於硬件的鍵盤和鼠標模擬方法，但針對不同的使用場景設計：將您的手機變成便攜式鍵盤/觸控板用於本地設備控制，而不是 KVM-over-USB 視頻採集。
