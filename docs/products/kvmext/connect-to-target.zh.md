---
title: "连接目标设备 | 扩展模块 v2"
description: "通过 HDMI、USB HID 以及可选的以太网进行网络调试，将您的目标设备连接到 Openterface uConsole KVM 扩展模块 v2。"
keywords: "KVM 连接设置, 目标设备, HDMI, USB HID, 以太网调试, uConsole KVM v2"
---

# **连接目标设备** | 扩展模块 v2

## 连接概述

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

扩展模块 v2 通过 **HDMI**（视频/音频）和 **USB**（键盘/鼠标模拟）连接到您的目标设备。在 KVM 处理显示和输入的同时，可选择使用 **以太网** 进行 SSH、Web 管理或日志捕获。

## 先决条件

1. [硬件安装](/products/kvmext/hardware-installation/) — 模块已插入扩展插槽
2. [软件设置](/products/kvmext/software-setup/) — uConsole 上已安装 Openterface QT
3. [已选择网卡](/products/kvmext/ethernet/)（如果使用网络功能）

## 连接步骤

### **USB 控制（KVM 必需）**

将扩展板的 **Type-C 端口** 连接到目标设备的 USB 端口。这将模拟键盘和鼠标（USB HID）。

目标设备**不需要**用于 HID 控制的驱动程序或额外软件。

### **视频输入（KVM 必需）**

将目标设备的 HDMI 输出连接到扩展模块的 HDMI 输入：

- 用于 HDMI 输出的标准 HDMI 线缆
- 用于 VGA 的 **VGA 转 HDMI** 转换器（确保转换器的 USB 电源已连接）
- 根据需要用于 DVI、DisplayPort、Micro HDMI 的其他适配器

### **以太网（可选 — 网络调试）**

如果您安装了网卡：

- 将以太网线缆从网卡连接到目标设备或网络交换机
- 在 KVM 的同时，使用 uConsole 进行 SSH、Web UI 或日志捕获
- 请参阅[以太网指南](/products/kvmext/ethernet/)了解 100M 与 1000M 的设置

### **SD 卡（可选 — 镜像与文件）**

将 microSD 卡插入模块插槽。使用主机应用在 uConsole 和目标设备之间切换访问权限。请参阅 [SD 卡指南](/products/kvmext/sd-card/)。

## USB 2.0 共享切换

主机应用可以在 uConsole 和目标设备之间切换共享的 USB 2.0 端口 — 这对于闪存盘和维护工作流非常有用，无需拔插线缆。

## 测试连接

1. 开启 uConsole 电源并启动目标设备
2. 启动 Openterface QT
3. 确认 HDMI 视频显示在 uConsole 屏幕上
4. 测试键盘、轨迹球和音频透传
5. 如果使用 SD 卡或 USB 切换，请在主机应用中测试挂载/切换

## 相关文档

- [用例](/products/kvmext/use-cases/) — 现场 IT、家庭实验室、嵌入式调试场景
- [常见问题解答](/products/kvmext/faq/) — 故障排除
