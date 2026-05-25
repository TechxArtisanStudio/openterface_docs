---
title: "Openterface Mini-KVM - 診斷自檢指南（macOS）"
description: "使用 macOS 應用運行 Openterface Mini-KVM 設備診斷自檢的逐步指南。學習如何測試 USB 連接，檢測問題，並將缺陷報告發送給支持團隊。"
keywords: "Openterface Mini-KVM, macOS, 診斷自檢, KVM 故障排除, USB KVM 診斷, Mini-KVM 支持, KVM 設備測試, USB 連接測試, KVM 缺陷報告, Mini-KVM 故障排除指南, KVM 診斷工具, 無頭服務器診斷, IT 故障排除工具"
---

# Openterface Mini-KVM - 診斷自檢指南（macOS）

本指南提供運行 Openterface Mini-KVM 設備診斷自檢的逐步說明。

## 開始之前

- **更新應用：** 在運行診斷之前，請確保已安裝最新版本的 [Openterface macOS 應用](/app)。請在應用菜單中檢查更新。
- **連接設備：** 確認 Mini-KVM 已正確連接到主機和目標設備。
- **保持目標空閒：** 在測試期間（尤其是壓力測試時），請保持目標設備空閒，不要對其進行操作。

<iframe width="560" height="315" src="https://www.youtube.com/embed/-K6Idzky3fY?si=r7pZgCkBzzZXgrLT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## 正常設備

**步驟 1:** 在 Openterface 應用中，打開 設置 → 高級設置。

**步驟 2:** 在設置窗口中，進入 高級與調試。

**步驟 3:** 點擊 打開診斷工具。

**步驟 4:** 當提示時，點擊 啟用以開啟診斷日誌記錄。

**步驟 5:** 點擊 檢查現在 開始自檢。

**步驟 6:** 點擊 開始測試，然後按照提示拔下並重新插入黑色 USB-C（目標側）。

![minikvm-support-target](https://assets.openterface.com/images/minikvm/support/target.webp)

**步驟 7:** 點擊 開始測試，然後按照提示拔下並重新插入橙色 USB-C（主機側）。

![minikvm-support-host](https://assets.openterface.com/images/minikvm/support/host.webp)

**步驟 8:** 點擊 開始測試，等待測試完成。

**步驟 9:** 點擊 重置現在，等待其完成。

**步驟 10:** 點擊 更改現在，等待波特率切換完成。

**步驟 11:** 點擊 開始測試，然後等待約30秒。測試運行期間不要操作目標設備。

> **注意:** 鼠標可能會快速移動，不要觸碰目標設備。

![minikvm-support-stress_test](https://assets.openterface.com/images/minikvm/support/stress_test.gif)

**步驟 12:** 確認所有項目顯示綠色對勾，並且進度完成。

**步驟 13:** 點擊 ❌（右上角）關閉診斷窗口。

---

## 檢測到問題（鍵盤/鼠標示例）

首先按照“正常設備”中的步驟 1–11 操作。以下說明解釋了當檢測到鍵盤/鼠標問題時您將看到的內容。

## 問題顯示方式

在此示例中，由於目標側鍵盤/鼠標（HID）問題影響整體檢查，首先顯示“整體連接”為失敗。這是早期指標，並非單獨問題。（您將在左側看到“整體連接”旁邊的失敗狀態突出顯示。）

- **整體連接:** 由於目標側問題，此處首先顯示失敗。

![minikvm-support-overall_connection](https://assets.openterface.com/images/minikvm/support/overall_connection.webp)

- **目標即插即用:** 運行此步驟後，結果可以更清晰地顯示目標側問題。

> **提示:** 如果某一步顯示失敗，診斷不會停止，但可能會停止自動前進——因此您需要手動繼續。

## 額外最終測試（取決於問題類型）

**步驟 12:** 壓力測試後，根據檢測到的問題，診斷可能會顯示額外的最終測試；在此鍵盤/鼠標示例中，它將繼續進行目標端口檢查。

**步驟 13:** 點擊“檢測設備”以開始目標端口檢查，然後按照屏幕上的說明操作。

![minikvm-support-target_port_checking](https://assets.openterface.com/images/minikvm/support/target_port_checking.webp)

## 檢測到問題時會發生什麼

**步驟 14:** 要繼續，點擊底部的“下一步”或從左側面板選擇下一個測試。

![minikvm-support-target_plug_n_play](https://assets.openterface.com/images/minikvm/support/target_plug_n_play.webp)

## 將日誌發送給支持團隊

**步驟 15:** 點擊 發送缺陷報告至支持，準備向支持團隊發送報告。

![minikvm-support-send_defect_report_to_support](https://assets.openterface.com/images/minikvm/support/send_defect_report_to_support.webp)

**步驟 16:** 在缺陷報告窗口中，輸入您的 **訂單號** 和 **姓名**，然後點擊 **應用** 將其插入到郵件草稿中。

**步驟 17:** 複製郵箱地址和草稿：
- 點擊 **複製郵箱** 以複製支持郵箱地址。
- 點擊 **複製草稿** 以複製預填寫的郵件內容（包括訂單號 + 姓名）。
- 將兩者粘貼到您的郵件客戶端（Gmail/Outlook 等）中。

![minikvm-support-support](https://assets.openterface.com/images/minikvm/support/support.webp)

**步驟 18:** 點擊 **打開日誌文件夾**。工具會指示需要附加哪些文件。**僅附加所請求的日誌文件**（文件夾中可能包含許多其他日誌）。

**步驟 19:** 在同一封郵件中，附加一張清晰的 **設置照片**，顯示：
- Mini-KVM 設備，
- **主機** 和 **目標** 的連接，
- 端口和線纜清晰可見。

**步驟 20:** 將郵件發送給支持團隊（草稿文本 + 請求的日誌 + 設置照片已附加）。

**步驟 21:** 點擊 ❌（右上角）關閉診斷窗口。