---
title: "Openterface QT for Win & Linux"
description: 本文檔提供了一個跨平台KVM（鍵盤、視頻、鼠標）軟件的概述，該軟件使用Qt開發，兼容Linux和Windows操作系統。該軟件便於從主機系統控制目標設備，通過其菜單欄和各種附加功能提供多種功能。 首選項菜單允許用户通過包含四個頁面的對話框自定義設置：<br
---

# Openterface QT for Win & Linux

本文檔提供了一個跨平台KVM（鍵盤、視頻、鼠標）軟件的概述，該軟件使用Qt開發，兼容Linux和Windows操作系統。該軟件便於從主機系統控制目標設備，通過其菜單欄和各種附加功能提供多種功能。

## 主菜單欄功能

### 首選項

首選項菜單允許用户通過包含四個頁面的對話框自定義設置：<br>
![Preferences Gernal](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **常規** 此頁面配置調試日誌過濾器和應用程序運行時是否禁止屏幕保護程序。日誌類別包括：

    -   Core
    -   Serial
    -   UserInterface
    -   host

    用户可以選擇將日誌保存到.txt文件以及是否禁止屏幕保護程序。<br>

![Preferences Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **視頻** 此頁面允許用户：

    -   選擇要捕獲哪個攝像頭的數據。
    -   設置分辨率。
    -   選擇視頻流格式。

-   **音頻** 此頁面目前正在開發中。<br>

![Preferences TargetControl](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **目標控制** 此頁面提供配置目標設備控制模式的選項：

    -   **控制模式：**

        -   **鍵盤 + 鼠標 + USB HID設備**
        -   **USB鍵盤**
        -   **鍵盤 + 鼠標**
        -   **USB HID設備**

    -   **設置從目標讀取的供應商ID（VID）和產品ID（PID）。**
    -   **定義目標的USB描述符。**

### 編輯

-   **粘貼：** 編輯菜單中的粘貼選項和左上角的粘貼按鈕都允許用户將主機剪貼板中的文本粘貼到目標設備。

### 控制

此菜單提供以下選項：<br>

-   設置鼠標移動模式：絕對或相對。**控制 >> 鼠標模式 >> 絕對或相對。**
-   切換主機鼠標光標的可見性。**控制 >> 鼠標可見性 >> 自動隱藏或始終顯示。**
-   在硬件上切換USB端口在目標和主機使用之間。**控制 >> 可切換USB >> 到目標或到主機。**
-   調整芯片傳輸的波特率。**控制 >> 波特率 >> 9600, 115200。**

### 高級

高級菜單包括以下選項：<br>
![Advance menu](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **環境檢查：** 驗證軟件所需的驅動程序是否已安裝。
-   **重置串口：** 重啓串口。
-   **重置鍵盤和鼠標：** 重置鍵盤和鼠標設置。
-   **恢復出廠設置HID芯片：** 將HID芯片恢復到出廠設置。<br>
    ![Advance SerialConsole](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **串口控制台：** 打開新窗口監控發送到串口的所有消息，具有發送/接收消息過濾器。<br>
    ![Advance ScriptTool](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **腳本工具：** 運行AutoHotkey（AHK）腳本。此功能模擬AutoHotkey，但僅支持鼠標/鍵盤功能和截圖功能的子集。腳本影響目標設備。
-   **TCP服務器：** 通過TCP接收AutoHotkey命令以在目標設備上執行它們。
-   **固件更新：** 從遠程服務器拉取最新固件，允許用户選擇是否將其刷寫到設備。

### 語言

界面語言可設置為：

-   丹麥語
-   英語
-   德語
-   法語
-   日語
-   瑞典語

### 幫助

幫助菜單提供：<br>
![Help menu](https://assets.openterface.com/images/qt/menuHelp.webp)

-   軟件/硬件問題的官方網站和反饋表單鏈接。
-   購買硬件的信息。
-   軟件環境的描述。
-   關於：組織詳情。
-   更新：檢查軟件更新。

## 菜單欄功能（從左到右）

菜單欄從左到右包括以下功能：<br>

![MenuBar](https://assets.openterface.com/images/qt/menubar.webp)

-   鍵盤佈局選擇：選擇鍵盤佈局。
-   縮放控制：放大、縮小或重置捕獲視頻流的顯示。
-   虛擬鍵盤：包括功能鍵和預設快捷鍵組合。
-   截圖：捕獲整個目標屏幕並保存到默認文件夾。
-   全屏模式：切換全屏顯示。
-   粘貼：將主機剪貼板中的文本粘貼到目標。
-   鼠標舞蹈：觸發鼠標執行預設移動。
-   USB設備指示器：顯示USB設備是否分配給目標或主機。

同時，歡迎探索我們的開源**GitHub倉庫**：[Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) 獲取最新代碼、更新、示例和報告問題。

您也可以加入我們的[Discord社區](/discord) 與我們的開發團隊和其他優秀用户聯繫，討論任何KVM相關話題。

如需直接支持，請隨時通過 [support@openterface.com](mailto:support@openterface.com) 聯繫我們。

---

**對此頁面有反饋？** [請在此處告知我們。](https://forms.gle/wmxoR2C1VdG36mT69)
