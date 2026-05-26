---
title: "KVM-GO Beta 快速入門指南 | Openterface 測試説明"
description: "KVM-GO Beta 快速入門指南 | Openterface 測試説明: 由 Openterface 社區的 ❤️ 撰寫——感謝你幫助我們打造更好的文檔！ 歡迎來到 ！下面是 Beta 反饋問卷的快速指南版本。請依次完成每個部分，記錄你的發現，並在完成後通過 提交所有信息。 恭喜你被選為 Beta…"
keywords: "KVM-GO 測試, Openterface 測試, KVM-GO 測試指南, 測試者説明, KVM-GO 反饋, 測試問卷, USB KVM 測試, 無頭控制測試, USB KVM 測試"
---

# KVM-GO Beta 快速入門指南

> 由 Openterface 社區的 [Iker](https://github.com/IkerGarcia) ❤️ 撰寫——感謝你幫助我們打造更好的文檔！

歡迎來到 [KVM-GO Beta](/product/kvm-go/updates/251007-kvm-go-beta-test-kits-sent-1/)！下面是 Beta 反饋問卷的快速指南版本。請依次完成每個部分，記錄你的發現，並在完成後通過 [Google Form Beta 反饋問卷](https://openterface.com/product/kvm-go/beta-questions) 提交所有信息。

恭喜你被選為 Beta 測試者！我們非常期待聽到你的反饋；相信你一定能在不同場景下徹底測試這款設備！

本次測試允許靈活探索，但我們希望你重點關注以下幾個具體場景。

你的反饋對我們非常重要，歡迎你測試設備的其他方面，不過我們特別希望瞭解以下重點領域：

1. **長時間空閒測試**

    1. 啓動軟件並連接到一個目標
    2. 讓軟件保持運行，在較長時間內不進行任何操作（數小時）
    3. 返回後嘗試使用鼠標和鍵盤控制
    - 在軟件保持空閒後，你返回時鼠標和鍵盤還能正常工作嗎？

2. **熱插拔測試**

    - 請在軟件運行時測試拔下並重新連接設備。

3. **BIOS 與低層級訪問**

4. **複製與粘貼（短文本和長文本）**

5. **設備模擬設置（Windows/Linux）**

    - 5.1. 顯示 EDID 配置
    - 5.2. USB 設備標識（VID/PID）
    - 5.3. SD 卡功能
        - 用例 1 - 系統安裝：我們推薦嘗試 Ventoy——一款允許在同一張 SD 卡上放置多個 ISO 文件並選擇啓動的工具。你是否嘗試在 HOST 上寫入系統鏡像，然後切換到 TARGET 進行安裝（無需取下 SD 卡）？
        - 用例 2 - 文件傳輸：你是否使用 SD 卡在 HOST 與 TARGET 之間傳輸文件？

這些示例反映了 Beta 反饋表中將會提出的問題，同時也會收集關於音頻/視頻/鍵盤/鼠標一致性或散熱管理的常規信息。

感謝你的幫助！

!!! reminder "別忘了"
    請通過 Google Form 提交完整的觀察結果，以便團隊及時查看。

