---
title: "軟件安裝"
description: "軟件安裝: Openterface 應用使您的 uConsole 能作為 KVM 接口使用，可通過內置屏幕、鍵盤和軌跡球控制目標設備。. 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。 — uconsole-kvm-extension/software-setup"
keywords: "Openterface 應用 安裝, uConsole 軟件, KVM 應用 安裝, uConsole 配置"
---

# **軟件安裝** | 適用於 uConsole 的 Openterface KVM 擴展

## 安裝概覽

Openterface 應用使您的 uConsole 能作為 KVM 接口使用，可通過內置屏幕、鍵盤和軌跡球控制目標設備。

!!! note "要求"
    - **uConsole**：需要安裝 Openterface 應用
    - **目標設備**：無需安裝應用 — 支持 Windows、macOS、Linux、Android、iOS
    - **視頻**：請使用標準 HDMI 線。使用帶電源的 HDMI 轉換器可支持 **VGA**、**DP** 等格式。*提示：請確認轉換器有足夠電源，否則可能出現黑屏。*

    - **推薦視頻後端**：為獲得最佳性能併兼容 arm64 GPU（如 Raspberry Pi 生態），建議使用 **GStreamer** 作為視頻後端。但請注意 **Kali Linux** 可能不支持 GStreamer。

## 安裝方式

### **選項1：從 GitHub Releases 下載（推薦 arm64）**

直接從我們的 [GitHub Releases 頁面](https://github.com/TechxArtisanStudio/Openterface_QT/releases) 下載最新的 **arm64** 版本。

1. 訪問 [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) 頁面。
2. 下載最新的 **arm64** `.deb` 包（例如 `openterfaceqt_*_arm64.deb`）。
3. 安裝包：
   ```bash
   sudo apt install ./openterfaceqt_*_arm64.deb
   ```
   *(如文件名不同請替換為實際文件名。)*

---

### **選項2：Flatpak 安裝**

請參閱我們的 [Flatpak 安裝指南](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) 獲取詳細步驟。

---

### **選項3：社區倉庫**

如果您更傾向於使用 Rex 維護的社區構建：

1. **添加倉庫**：
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **安裝軟件包**：
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "倉庫說明"
    這些命令需要 `sudo` 權限。該倉庫面向 arm64 Bookworm 包；在安裝前請確認與設備的兼容性。

## 重要提醒

!!! tip "電源與首次啟動"
    - **確保 uConsole 已充足電或連接穩定電源。** 電量不足會導致運行不穩定或連接問題。
    - **如果首次無法控制目標設備：**
        1. 完全關機 uConsole。
        2. 等待至少 10 秒。
        3. 重新開機並重試。
    這有助於初始化硬件並解決首次連接問題。

!!! tip "串口通信波特率"
    - **在使用串口通信時請設置波特率為 9600。** 這可以降低錯誤率，因為 uConsole 通常無法提供足夠電力來穩定維持 115200 波特率。

## 使用說明

### **啟動 KVM 會話**
1. 在 uConsole 上啟動 Openterface 應用
2. 應用將自動檢測 KVM 擴展板
3. 通過 HDMI 連接目標設備
4. 使用 uConsole 的內置鍵盤和軌跡球來控制目標設備

### **控制功能**
- **鍵盤**：完整的鍵盤仿真，包括多媒體鍵
- **鼠標**：支持絕對與相對鼠標定位
- **音頻**：HDMI 音頻直通到 uConsole 揚聲器

### **高級功能**
- **文本傳輸**：通過模擬按鍵快速發送文本——適用於用戶名、密碼和代碼片段
- **可切換 USB**：通過主機應用在 uConsole 與目標設備之間切換 USB 訪問
---
title: "軟件設置"
description: "Openterface KVM Extension for uConsole 的完整軟件設置指南。學習如何在您的 uConsole 上安裝和配置 Openterface App，以實現無縫 KVM 功能。"
keywords: "Openterface應用安裝, uConsole軟件設置, KVM應用設置, uConsole應用配置, 軟件安裝指南"
---

# **軟件設置** | Openterface KVM Extension for uConsole

## 安裝概述

Openterface App 使您的 uConsole 能夠作為 KVM 接口運行，允許您通過內置屏幕、鍵盤和軌跡球控制目標設備。

!!! note "要求"
    - **uConsole**：需要安裝 Openterface App
    - **目標設備**：無需應用 - 支持 Windows、macOS、Linux、Android、iOS
    - **視頻**：使用標準 HDMI 電纜。使用標準 HDMI 電纜。通過供電的 HDMI 轉換器，它還支持其他格式，如 **VGA**、**DP** 等。*提示：確保轉換器正確供電；否則，您可能會遇到黑屏。*

## 安裝方法

### **選項 1：Flatpak 安裝**

按照我們的 [Flatpak 安裝指南](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) 進行詳細的設置步驟。

### **選項 2：社區倉庫（推薦）**

如果您更喜歡 Rex 維護的社區構建：

1. **添加倉庫**：
```bash
wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
2. **安裝包**：
```bash
sudo apt update
sudo apt install openterfaceqt
!!! warning "倉庫說明"
    這些命令需要 sudo。倉庫針對 arm64 Bookworm 包；安裝前請驗證與您設備的兼容性。

## 使用說明

### **啟動 KVM 會話**
1. 在您的 uConsole 上啟動 Openterface App
2. 應用將自動檢測 KVM Extension 板
3. 通過 HDMI 連接您的目標設備
4. 使用 uConsole 的內置鍵盤和軌跡球控制目標設備

### **控制功能**
- **鍵盤**：完整鍵盤模擬，包括多媒體鍵
- **鼠標**：絕對和相對鼠標定位
- **音頻**：HDMI 音頻直通到 uConsole 揚聲器

### **高級功能**
- **文本傳輸**：通過模擬按鍵快速傳輸文本—非常適合用戶名、密碼和代碼片段
- **可切換 USB**：使用主機應用輕鬆在 uConsole 和目標設備之間切換 USB 訪問
