---
title: Openterface KVM-Go 系列常見問題
description: 關於 KVM-Go 系列的常見問題，涵蓋功能、兼容性和預發佈信息。
keywords: KVM-Go, Openterface, 超緊湊型 KVM, 內置 HDMI, 鑰匙扣 KVM, 開源, 預發佈, 視頻採集, USB, 兼容性, MicroSD
---

# Openterface KVM-Go 系列常見問題

歡迎訪問我們下一代 **Openterface KVM-Go 系列**的常見問題頁面。  
如果您沒有找到所需的答案，**請發送郵件至 [info@openterface.com](mailto:info@openterface.com)** 或**加入我們的社區** [Discord](/discord) 或 [Reddit](/reddit)。

⚠️ **注意**：KVM-Go 目前處於預發佈開發階段。隨著我們完善產品，功能、規格和設計可能會有所變化。

---

## :material-clipboard-list: 快速導航

- [Openterface KVM-Go 系列常見問題](#openterface-kvm-go-系列常見問題)
  - [:material-clipboard-list: 快速導航](#material-clipboard-list-快速導航)
  - [常規問題](#常規問題)
  - [MicroSD 和文件傳輸](#microsd-和文件傳輸)
  - [技術問題](#技術問題)
  - [預發佈問題](#預發佈問題)

---

## 常規問題

**:material-chat-question:{ .faq } 什麼是 KVM-Go？**

KVM-Go 是我們下一代超緊湊型 KVM-over-USB 解決方案。它只有鑰匙扣大小，內置視頻連接器（HDMI、DisplayPort 或 VGA），無需單獨的線纜。

**:material-chat-question:{ .faq } 它有多小？**

超緊湊尺寸：**18 × 18 × 55 mm**（0.71 × 0.71 × 2.17 英寸）——小到可以掛在鑰匙扣上。重量約為 **25克（0.9 盎司）**。

**:material-chat-question:{ .faq } 有哪些型號可選？**

- **KVM-Go HDMI Male** — 適用於現代設備的直接 HDMI 連接
- **KVM-Go DisplayPort Male** — 高性能 DisplayPort 支持  
- **KVM-Go VGA Male** — 兼容舊系統（即將推出）

**:material-chat-question:{ .faq } 與 Mini-KVM 相比如何？**

主要改進：

- **尺寸**：18×18×55mm vs 61×53×13.5mm（更小）
- **重量**：25g vs 48g（更輕）
- **視頻**：4K@60Hz vs 1080p@30Hz（性能更好）
- **USB**：USB 3.0 vs USB 2.0（更快）
- **設置**：內置連接器 vs 單獨線纜（更簡單）

**:material-chat-question:{ .faq } 啟動速度有多快？**

硬件啟動時間不到 1 秒，可以立即進行故障排除，不會延遲或干擾您的工作流程。

---

## MicroSD 和文件傳輸

**:material-chat-question:{ .faq } 能傳輸文件嗎？**

可以——通過**可切換的 MicroSD 插槽**，可在主機和目標設備之間共享，無需物理取出卡即可快速傳輸文件。

**:material-chat-question:{ .faq } 如何切換 MicroSD 方向？**

兩種便捷方法：
1. **硬件按鈕** – 設備上的物理按鈕，用於手動控制
2. **軟件開關** – 主機應用程序中的切換按鈕，用於即時切換

**:material-chat-question:{ .faq } LED 指示燈是什麼意思？**

**雙色 LED 指示燈**顯示當前的 MicroSD 連接狀態：

- **🔵 藍色 LED 亮起** – MicroSD 卡已掛載到**目標設備**  
- **🟢 綠色 LED 亮起** – MicroSD 卡已掛載到**主機計算機**  
- **LED 熄滅** – 未插入 MicroSD 卡或設備已關閉電源  
- **LED 閃爍** – 正在進行數據傳輸（讀/寫活動）

**:material-chat-question:{ .faq } 如何正確安裝 MicroSD 卡？**

牢固插入 MicroSD 卡，直到您聽到**咔噠**聲，表示它已安全就位並鎖定。這種觸覺反饋確認了正確的連接。

---

## 技術問題

**:material-chat-question:{ .faq } 視頻性能如何？**

- **輸入**：最高 4096×2160 @ 60 Hz (YUV420)、4096×2160 @ 30 Hz (YUV444)
- **輸出**：4096×2160 @ 60 Hz (MJPEG)、3840×2160 @ 30 Hz (YUV420)
- **默認**：1080p@60Hz，以獲得最佳穩定性和性能
- **延遲**：低於 140ms，實現流暢控制

**:material-chat-question:{ .faq } 4K 模式有限制嗎？**

有的——4K 模式是實驗性的，會產生額外的熱量。在長時間 4K 運行期間，設備表面可能會變得相當熱。為了獲得最佳穩定性和性能，建議使用默認的 1080p@60Hz 模式。

**:material-chat-question:{ .faq } 開源嗎？**

是的——已通過 [OSHWA](https://certification.oshwa.org/cn000015.html) 認證。硬件和軟件都在 [GitHub](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware) 上。

**:material-chat-question:{ .faq } BIOS 訪問**

直接 USB 連接允許完全的 BIOS 級別控制，不同於僅遠程工具（VNC、TeamViewer）。

**:material-chat-question:{ .faq } 跨平臺支持？**

[主機應用程序](/app)兼容 macOS、Windows、Linux、Android 和 Chrome 網頁應用程序，實現通用集成。

**:material-chat-question:{ .faq } 能在 iPad 上使用嗎？**

可以——iPadOS 支持即將通過 Apple App Store 上的原生應用程序推出。這得益於 KVM-GO 內置的 Bluetooth 功能，使其成為少數能在 iPad 上原生運行的 KVM 之一。

**:material-chat-question:{ .faq } 有基於網頁的應用程序嗎？**

有——訪問 [Openterface Viewer](https://openterface-viewer.pages.dev/) 獲取無需安裝的基於瀏覽器的應用程序（適用於 Chrome、Edge、Safari）。非常適合快速訪問或無法在主機計算機上安裝軟件的情況。感謝我們出色的社區，特別是啟動此項目的 [@kashalls](https://github.com/kashalls)。

**:material-chat-question:{ .faq } 應該選擇哪種視頻連接器？**

- **HDMI**：最適合現代設備、服務器、工作站
- **DisplayPort**：高分辨率顯示器、專業設置
- **VGA**：舊系統、老服務器（即將推出）

---

## 預發佈問題

**:material-chat-question:{ .faq } KVM-Go 何時上市？**

KVM-Go 目前正在進行小批量生產測試，並已向 beta 測試人員發送設備進行實際驗證。

**生產時間表**：

- **2025 年 11 月**：活動啟動
- **2025 年 12 月**：完成生產設置和組件採購
- **2026 年 1-3 月**：批量生產和質量控制
- **2026 年 4 月**：首批發貨給支持者

加入我們的[等候名單]({{ config.extra.kvmgo_purchase_link }})，隨時瞭解進展並獲得早期訪問權限。

**:material-chat-question:{ .faq } 價格是多少？**

價格將在正式發佈活動期間公佈。早期支持者將獲得特別折扣和優先訪問權。

**:material-chat-question:{ .faq } 我可以成為 beta 測試人員嗎？**

可以！如果您有硬件和軟件測試經驗，歡迎在[此處](https://forms.gle/yaS1F5E5MSo8DWNZ6)申請我們的 beta 測試計劃。

**:material-chat-question:{ .faq } 規格最終確定了嗎？**

還沒有，隨著我們在開發過程中完善產品，功能、規格和設計可能會有所變化。

