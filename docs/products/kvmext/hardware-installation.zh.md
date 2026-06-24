---
title: "硬件安装 | 扩展模块 v2"
description: "在扩展槽中安装 Openterface uConsole KVM 扩展模块 v2。选择您的网卡，并连接 HDMI 和 USB 到目标设备。"
keywords: "KVM 扩展 v2 安装, uConsole 硬件设置, 扩展槽, 网卡安装"
---

# **硬件安装** | 扩展模块 v2

## 概述

扩展模块 v2 适用于 uConsole **扩展槽**（与 4G/LTE 模块使用的插槽相同）。它不能与 4G 或 LTE 模块同时使用 —— 请在蜂窝网络 **或** KVM 功能之间二选一。

## 所需物品

- 安装前确认 [包装内容](/products/kvmext/whats-in-the-box/)
- Openterface 扩展模块 v2 板
- **一张网卡**（100M 或 1000M —— 请参阅 [网卡指南](/products/kvmext/ethernet/)）
- 扩展槽盖板（已包含）
- 用于固定螺丝的内六角螺丝刀
- ESD 防护（腕带或接地表面）—— 推荐使用

## 安装步骤

### **1. 关机**

关闭 uConsole，并断开所有电源和线缆。

### **2. 移除现有模块**

如果已安装 4G/LTE 或其他扩展模块：

- 使用内六角螺丝刀卸下两颗固定螺丝。
- **垂直向上**提起电路板，避免弯曲弹簧触点。
- 如果计划稍后重新安装，请妥善保存原模块和螺丝。

### **3. 选择您的网卡**

在安装主板之前，请先决定要安装哪张网卡：

| 网卡 | 使用场景 |
|------|-------------|
| **100M** | 所有 uConsole 主板 —— 通用兼容性 |
| **1000M** | 仅当您拥有 **HackerGadgets uConsole 升级套件**并需要千兆网络时 |

有关详细信息，请参阅 [网卡指南](/products/kvmext/ethernet/)。

### **4. 安装扩展模块 v2**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- 将扩展模块 v2 牢固地插入扩展槽。
- 确保弹簧触点在所有焊盘上均匀对齐。
- 重新插入固定螺丝并**轻柔地**拧紧 —— 请勿过度拧紧。

### **5. 验证安装**

电路板应**平整且稳固**，没有明显的晃动。所有弹簧触点应均匀按压。

### **6. 安装扩展槽盖板**

重新安装扩展槽盖板，以保护模块并保持 uConsole 的外观。

??? note "扩展槽盖板上的文字方向"
    从某些视角观察，盖板上的文字可能看起来是倒置的。其方向设计为：当您手持 uConsole 并从上方查看端口时 —— 即使用时的自然姿势 —— 文字是正向可读的。

---

**后续步骤**

1. [软件设置](/products/kvmext/software-setup/) —— 在您的 uConsole 上安装 Openterface 主机应用
2. [连接目标设备](/products/kvmext/connect-to-target/) —— HDMI + USB 接线
3. [功能与规格](/products/kvmext/features/) —— 完整技术规格

## 旧版 v1 安装

第一代模块（37 × 77 mm）使用垫片来补偿 PCB 厚度。请参阅 [旧版 v1 — 硬件安装](/products/kvmext/v1/hardware-installation/)。
