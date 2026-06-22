---
title: "以太网指南 | 扩展模块 v2"
description: "选择并安装 Openterface uConsole KVM 扩展模块 v2 附带的 100M 或 1000M 以太网卡。千兆网络需要升级套件。"
keywords: "uConsole 以太网, 100M, 1000M, 千兆, 升级套件, KVM 扩展 v2 网络"
---

# **以太网指南** | 扩展模块 v2

扩展模块 v2 包装内**同时**包含一张 100M 和一张 1000M 以太网卡。硬件安装时安装**其中一张**即可——无需购买单独的网络版本。

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## 应该使用哪张网卡？

| 网卡 | 兼容性 | 适用场景 |
|------|---------------|----------|
| **100M 以太网卡** | 全部 uConsole 主板 | 通用用途、SSH、Web UI、日志采集 |
| **1000M 以太网卡** | 需要 **HackerGadgets uConsole 升级套件** | 千兆网络、更快的传输速度 |

!!! tip "不确定如何选择？"
    除非你已经安装并确认升级套件可正常工作，否则请从 **100M** 网卡开始。

## 购买选项与升级套件

| 选项 | 以太网能力 |
|--------|---------------------|
| **仅扩展模块 v2** | 出厂即支持 100M；包含 1000M 网卡，但实现千兆需要升级套件 |
| **扩展模块 v2 + 升级套件捆绑包** | 附带升级套件，开箱即用千兆 |

完整对比：[购买选项](/products/kvmext/purchase-options/)

从 **HackerGadgets** 了解更多升级套件信息（链接来自我们的 [TechxArtisan 商店页面](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)）。

## 安装步骤

1. 完成 [硬件安装](/products/kvmext/hardware-installation/) 的步骤 1–2（关机，移除现有模块）。
2. 按照模块设计，将你选择的以太网卡安装到扩展模块 v2 上。
3. 将主板安装到扩展槽中并拧紧螺丝。
4. 将以太网电缆连接到目标设备或网络。

## 使用场景

- 通过 KVM 查看无头服务器的同时进行 **SSH** 连接
- 路由器、交换机和设备的 **Web 管理**
- 现场进行 **日志采集** 和网络维护
- 组合 **KVM + 网络** 工作流，无需额外适配器

## 相关内容

- [连接目标设备](/products/kvmext/connect-to-target/)
- [使用案例](/products/kvmext/use-cases/)
- [常见问题](/products/kvmext/faq/)
