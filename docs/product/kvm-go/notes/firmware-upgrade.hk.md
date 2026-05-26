# KVM-Go 固件升級

## 概述

KVM-Go 使用 WCH 的 CH32V208 芯片進行鍵盤和鼠標模擬。目前，固件刷寫需要使用 WCH 官方編程工具，該工具僅適用於 Windows。因此，目前必須在 Windows 系統上進行固件更新。

我們正在積極開發跨平台的自研固件升級解決方案，將直接集成到設備中。完成後，它將支持在所有主要操作系統上進行固件更新——無需第三方工具。

> **注意：** 此手動固件升級流程是早期開發單元的臨時解決方案。對於正式量產產品，固件更新將無縫集成到我們的軟件中，允許您直接通過應用程序更新固件，無需任何第三方工具或手動流程。

## 前提條件

繼續之前，請確保您已準備：

- 一台 Windows 計算機
- 已安裝 WCH ISP Tool
- 固件文件（`.hex` 格式）已準備好刷寫

### 下載固件

下載最新的 KVM-Go 固件文件：

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — KVM-Go 鍵盤和鼠標模擬的最新固件（CH32V208 芯片）

在進行升級流程之前，請將固件文件保存到 Windows 計算機上易於訪問的位置。

### 下載 WCH ISP Tool

下載並安裝 [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool")（僅 Windows）。

感謝您的耐心與支持！

## 分步説明

### 步驟 1：在 Windows 中下載並打開工具

在 Windows 計算機上啓動 WCH ISP Tool。

![WCH ISP Tool 界面](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### 步驟 2：準備 KVM-Go 進行刷寫

要在 KVM-Go 上刷寫固件：

1. 確保設備已關機
2. 按住按鈕的同時將其連接到 USB Type-C 端口

**提示：** 您可以使用任一端口刷寫固件，但「target」端口在刷寫期間往往更穩定。

![KVM-Go 接線和連接設置](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### 步驟 3：選擇固件文件

如果連接成功，工具將自動檢測芯片型號（CH32V20X 系列）。

1. 點擊「...」按鈕瀏覽並選擇要刷寫的固件文件
2. 選擇 `.hex` 固件文件
3. **重要：** 記得勾選固件文件旁邊的複選框

![WCH ISP Tool 中檢測到的芯片型號](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![瀏覽並選擇固件文件](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![已選擇固件文件並勾選複選框](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### 步驟 4：解除當前固件保護

在刷寫新固件之前，需要解除當前固件的寫保護：

1. 點擊工具中的「Deprotect」選項
2. 短暫按下 KVM-Go 上的物理按鈕進入刷寫模式
3. 等待解除保護流程完成

![工具中的解除固件保護選項](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![按下 KVM-Go 按鈕進入刷寫模式](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### 步驟 5：下載並刷寫固件

固件解除保護並選擇完成後：

1. 點擊刷寫工具中的「Download」按鈕
2. 等待刷寫流程完成
3. 工具將指示固件已成功刷寫

![下載並刷寫固件流程](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## 延伸閲讀

- [Openterface KVM-Go 評測指南](review-guide.md) — 工程樣機單元的重要説明和已知問題
