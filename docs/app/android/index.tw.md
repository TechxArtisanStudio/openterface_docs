---
title: "Openterface Android"
description: "Openterface Android: Openterface Mini-KVM 是一個開源硬件和軟件解決方案，旨在通過基於 Android 的界面提供基本的 KVM（鍵盤、視頻、鼠標）功能來控制設備。此倉庫包含 Android 應用程序源代碼、構建配置和支持腳本來設置和部署項目。… — app/android"
---

# Openterface Android

## 概述

Openterface Mini-KVM 是一個開源硬件和軟件解決方案，旨在通過基於 Android 的界面提供基本的 KVM（鍵盤、視頻、鼠標）功能來控制設備。此倉庫包含 Android 應用程序源代碼、構建配置和支持腳本來設置和部署項目。

我們致力於開源硬件和開源軟件，採用 [GNU Affero General Public License v3](https://github.com/TechxArtisanStudio/Openterface_Android/blob/main/LICENSE)。

## 功能模塊

### 1. 視頻顯示

#### 主要功能

-   將連接的目標設備的視頻輸出實時流式傳輸到 Android 屏幕。
-   支持圖像調整以獲得最佳觀看效果。

![image](https://assets.openterface.com/images/android/videoConnect.webp)

#### 用戶界面描述

-   主屏幕顯示目標設備的視頻源，佔據界面的大部分。
-   側邊工具欄提供調整控制（亮度、對比度、色調）。

#### 操作流程

1. 通過 HDMI 和 USB 將 Mini-KVM 硬件連接到目標設備。
2. 通過 USB-C 將 Mini-KVM 插入您的 Android 設備。
3. 啟動應用程序；視頻源會自動出現。
4. 使用工具欄滑塊根據需要調整亮度、對比度或色調。

![image](https://assets.openterface.com/images/android/colorSetting.webp)

#### 特殊功能

-   雙指縮放使顯示效果更好

![image](https://assets.openterface.com/images/android/enlargeAndSideBar.webp)

---

### 2. 鼠標控制

#### 主要功能

-   提供絕對和相對鼠標控制來與目標設備的界面交互。
-   支持左鍵和右鍵點擊。
-   從右側菜單選擇模式。

#### 用戶界面描述

-   視頻源兼作鼠標輸入的觸摸板。
-   浮動操作按鈕（FAB）在鼠標和鍵盤模式之間切換。

#### 操作流程

1. 確保設備連接成功。
2. 點擊屏幕將鼠標光標移動到該位置（絕對控制）。
3. 單指雙擊為左鍵點擊，雙指點擊為右鍵點擊。
4. 拖拽模式是按住左鍵不鬆開。

#### 特殊功能

-   相對鼠標控制（開發中，可用時通過設置切換）。

## ![image](https://assets.openterface.com/images/android/mouseThouchMode.webp)

### 3. 鍵盤輸入

#### 主要功能

-   通過點擊鍵盤按鍵向設備輸入。

#### 用戶界面描述

-   鍵盤圖標位於右下角。
-   鍵盤包括快捷鍵、系統鍵、標準鍵和功能鍵（F1-F12）。

#### 操作流程

1. 點擊右下角的鍵盤圖標調出鍵盤。
2. 根據需要輸入文本或按功能鍵。

#### 特殊功能或快捷鍵

-   **快捷鍵**：Ctrl+C、Ctrl+V、Ctrl+Z、Ctrl+X、Ctrl+A、Ctrl+S、
    Win+Tab、Win+S、Win+E、Win+R、Win+D、Win+L、Alt+F4、Ctrl+Alt+Del、Alt+PrtScr。
-   **功能鍵**：F1-F12、符號鍵。
-   **標準鍵**：0-9、A-Z、Enter、Space、delete。

![image](https://assets.openterface.com/images/android/enlargeAndKeyBoard.webp)
![image](https://assets.openterface.com/images/android/keyBoardFunction.webp)
![image](https://assets.openterface.com/images/android/keyBoardSystem.webp)

---

同時，歡迎探索我們的開源 **GitHub 倉庫**：[Openterface_Android](https://github.com/TechxArtisanStudio/Openterface_Android) 獲取最新代碼、更新、示例，並報告問題。

您也可以加入我們的 [Discord 社區](/discord) 與我們的開發團隊和其他優秀用戶聯繫，討論任何與 KVM 相關的話題。

如需直接支持，請隨時通過 [support@openterface.com](mailto:support@openterface.com) 給我們發郵件。

---

**對此頁面有反饋？** [請在此處告訴我們。](https://forms.gle/wmxoR2C1VdG36mT69)

