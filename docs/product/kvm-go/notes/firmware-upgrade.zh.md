---
title: "KVM-Go 固件升级"
description: KVM-Go 使用 WCH 的 CH32V208 芯片进行键盘和鼠标模拟。目前，固件刷写需要使用 WCH 官方编程工具，该工具仅适用于 Windows。因此，目前必须在 Windows 系统上进行固件更新。…
---

# KVM-Go 固件升级

## 概述

KVM-Go 使用 WCH 的 CH32V208 芯片进行键盘和鼠标模拟。目前，固件刷写需要使用 WCH 官方编程工具，该工具仅适用于 Windows。因此，目前必须在 Windows 系统上进行固件更新。

我们正在积极开发跨平台的自研固件升级解决方案，将直接集成到设备中。完成后，它将支持在所有主要操作系统上进行固件更新——无需第三方工具。

> **注意：** 此手动固件升级流程是早期开发单元的临时解决方案。对于正式量产产品，固件更新将无缝集成到我们的软件中，允许您直接通过应用程序更新固件，无需任何第三方工具或手动流程。

## 前提条件

继续之前，请确保您已准备：

- 一台 Windows 计算机
- 已安装 WCH ISP Tool
- 固件文件（`.hex` 格式）已准备好刷写

### 下载固件

下载最新的 KVM-Go 固件文件：

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — KVM-Go 键盘和鼠标模拟的最新固件（CH32V208 芯片）

在进行升级流程之前，请将固件文件保存到 Windows 计算机上易于访问的位置。

### 下载 WCH ISP Tool

下载并安装 [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool")（仅 Windows）。

感谢您的耐心与支持！

## 分步说明

### 步骤 1：在 Windows 中下载并打开工具

在 Windows 计算机上启动 WCH ISP Tool。

![WCH ISP Tool 界面](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### 步骤 2：准备 KVM-Go 进行刷写

要在 KVM-Go 上刷写固件：

1. 确保设备已关机
2. 按住按钮的同时将其连接到 USB Type-C 端口

**提示：** 您可以使用任一端口刷写固件，但「target」端口在刷写期间往往更稳定。

![KVM-Go 接线和连接设置](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### 步骤 3：选择固件文件

如果连接成功，工具将自动检测芯片型号（CH32V20X 系列）。

1. 点击「...」按钮浏览并选择要刷写的固件文件
2. 选择 `.hex` 固件文件
3. **重要：** 记得勾选固件文件旁边的复选框

![WCH ISP Tool 中检测到的芯片型号](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![浏览并选择固件文件](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![已选择固件文件并勾选复选框](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### 步骤 4：解除当前固件保护

在刷写新固件之前，需要解除当前固件的写保护：

1. 点击工具中的「Deprotect」选项
2. 短暂按下 KVM-Go 上的物理按钮进入刷写模式
3. 等待解除保护流程完成

![工具中的解除固件保护选项](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![按下 KVM-Go 按钮进入刷写模式](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### 步骤 5：下载并刷写固件

固件解除保护并选择完成后：

1. 点击刷写工具中的「Download」按钮
2. 等待刷写流程完成
3. 工具将指示固件已成功刷写

![下载并刷写固件流程](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## 延伸阅读

- [Openterface KVM-Go 评测指南](review-guide.md) — 工程样机单元的重要说明和已知问题
