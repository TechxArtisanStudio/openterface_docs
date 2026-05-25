---
title: "Openterface Mini-KVM (Windows) - 硬件診斷自檢指南"
description: "在 Windows 版 Openterface 應用中運行硬件診斷自檢的逐步指南。學習如何測試 USB 連接，檢測問題，並將診斷報告發送給支持團隊。"
keywords: "Openterface Mini-KVM, Windows, 硬件診斷, 診斷自檢, KVM 故障排除, USB KVM 診斷, Mini-KVM 支持, KVM 設備測試, Windows KVM, KVM 缺陷報告, Mini-KVM 故障排除指南"
---

# Openterface Mini-KVM (Windows) — 硬件診斷自檢指南

本指南介紹如何在 **Windows** 版 Openterface 應用中運行**硬件診斷**自檢，以及如何在檢測到問題時將診斷報告發送給支持團隊。

<iframe width="560" height="315" src="https://www.youtube.com/embed/uSq3BDc_SBU?si=rREugsUxX1FzDGqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## 開始之前

- **更新應用：** 在運行診斷之前，請確保已安裝最新版本的 [Openterface Windows 應用](/app)。請在應用菜單中檢查更新。
- 將 Mini-KVM 連接到**主機**和**目標**。
- 測試期間（尤其是壓力測試期間）保持目標設備空閒。

> **重要（Windows）：** 診斷**不會自動前進**。  
> 要在測試之間移動，請使用**下一步**（底部欄）**或**點擊**左側面板**中的測試項目。  
> 每個測試通過點擊**檢查現在**來執行。

![next_webp](https://assets2.openterface.com/images/next.webp)

---

## 正常設備（通過）

### 步驟 1 — 打開硬件診斷（Windows）
在 Windows Openterface 應用中，打開：**高級 → 硬件診斷**。  

### 步驟 2 — 運行自檢
在硬件診斷窗口中，點擊**檢查現在**以運行當前診斷步驟。  

### 步驟 3 — 目標即插即用（按提示操作）
當**目標即插即用**要求您重新連接目標線纜時，請按照屏幕上的説明操作。  
某些設置可能要求您**多次**拔插（例如兩次）。  

![Target-plug&play](https://assets2.openterface.com/images/Target-plug%26play.webp)

### 步驟 4 — 主機即插即用（按提示操作）
按照屏幕上的説明操作主機側。  

![Host-plug&play](https://assets2.openterface.com/images/Host-plug%26play.webp)

### 步驟 5 — 壓力測試（不要操作目標設備）
在**壓力測試**期間，目標鼠標可能會自動移動以進行檢測。  
測試運行期間**請勿操作目標設備**。  

> **注意：** 鼠標可能會快速移動 — 不要觸碰目標設備。

![stress-test](https://assets2.openterface.com/images/stress-test.webp)

### 步驟 6 — 確認通過
繼續直到自檢完成。如果一切正常，結果將顯示**通過 / 所有測試已通過**。  

---

## 檢測到問題（鍵盤/鼠標示例）

如果檢測到問題，一個或多個項目可能顯示**失敗**。

### 步驟 1 — 運行相同的硬件診斷
打開**高級 → 硬件診斷**，然後點擊**檢查現在**開始。  

### 步驟 2 — 繼續完成檢查
繼續完成剩餘測試，直到診斷完成。  

### 步驟 3 — 支持郵件自動打開
當診斷因問題而完成時，**支持郵件**窗口將自動打開。  

---

## 將日誌發送給支持團隊（Windows）

### 步驟 4 — 應用訂單號 + 姓名
輸入您的**訂單號**和**姓名**，然後點擊**應用**將其插入到郵件草稿中。 

![ID+Name](https://assets2.openterface.com/images/ID+Name.webp)

### 步驟 5 — 複製郵箱地址和草稿
- 點擊**複製郵箱**以複製支持郵箱地址。
- 點擊**複製草稿**以複製預填寫的郵件內容（包括訂單號 + 姓名）。  
將兩者粘貼到您的郵件客户端（Gmail/Outlook 等）中。  

![copy](https://assets2.openterface.com/images/copy.webp)

### 步驟 6 — 附加正確的日誌文件
點擊**打開文件文件夾**。工具會指示需要附加哪些文件。  
**僅附加所請求的日誌文件**（文件夾中可能包含許多其他日誌）。  

![list](https://assets2.openterface.com/images/list.webp)

![compress](https://assets2.openterface.com/images/compress.webp)

### 步驟 7 — 同時附加設置照片
在同一封郵件中，附加一張清晰的**設置照片**，顯示：
- Mini-KVM 設備，
- **主機**和**目標**的連接，
- 端口和線纜清晰可見。  

### 步驟 8 — 發送郵件
將郵件發送給支持團隊（草稿文本 + 請求的日誌 + 設置照片已附加）。  

---

## 聯繫支持時需包含的內容

- **訂單號**
- **請求的診斷日誌文件**
- **設置照片**（Mini-KVM + 主機/目標接線）
