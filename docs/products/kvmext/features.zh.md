---
title: "功能与规格 | 扩展模块 v2"
description: "Openterface uConsole KVM 扩展模块 v2 完整概览：HDMI KVM、双以太网、SD 卡、USB 切换及技术规格。"
keywords: "KVM 扩展 v2 功能, uConsole KVM, HDMI KVM, 以太网扩展, SD 卡, 便携式 KVM, 技术规格"
---

# **功能与规格** | 扩展模块 v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## 核心功能

- **直接 KVM 控制**：通过 HDMI 输入和 USB HID 键盘/鼠标模拟查看并控制目标设备 — 非常适合 BIOS 访问、操作系统安装和无头服务器恢复。
- **双网卡支持**：包含 **100M** 和 **1000M** 以太网卡。所有 uConsole 主板均可使用 100M；如需千兆网络，请搭配 [HackerGadgets uConsole 升级套件](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) 使用 1000M。
- **SD 卡读写**：无需外接读卡器，即可从 uConsole 写入镜像、导出日志和传输文件。
- **USB 2.0 共享切换**：在 uConsole 和目标设备之间切换 USB 访问，便于灵活的调试和维护。
- **低延迟**：输出至 uConsole 屏幕时，**1080p @ 60 Hz** 视频延迟低于 **70 ms**。
- **便携式插槽供电**：紧凑的 **77.3 × 34.7 mm** 设计，由 uConsole 扩展插槽供电 — 无需外接电源适配器。
- **开源生态**：基于 Openterface KVM 平台构建，配备开源主机应用和社区支持。

## 技术规格

| 项目 | 规格 |
|------|---------------|
| **产品名称** | Openterface uConsole KVM 扩展模块 v2 |
| **板卡尺寸** | 77.3 × 34.7 mm |
| **视频输入** | HDMI 最高 4K @ 30 Hz（RGB/YCBCR444）或 4K @ 60 Hz（YCBCR420） |
| **视频输出** | 1080p @ 60 Hz 输出至 uConsole 屏幕 |
| **延迟** | &lt; 70 ms |
| **KVM 控制** | USB HID 键盘和鼠标模拟 |
| **网络** | 100M 适用于所有 uConsole 主板；1000M 需要 uConsole 升级套件 |
| **SD 卡** | 通过主机应用在主机/目标之间切换进行读写 |
| **USB 共享** | USB 2.0 全速（12 Mbps）共享切换 |
| **目标平台** | Windows、macOS、Linux、x86 系统、ARM SBC |
| **供电** | 由 uConsole 扩展插槽供电 |
| **外部电源** | 不需要 |

### 完整键盘与鼠标模拟

- **USB HID**：支持绝对和相对鼠标定位、完整键盘支持、多媒体按键。
- **连接**：通过扩展板的 Type-C 端口与目标设备建立 USB 链路。

### 视频与音频

- **输入**：通过 HDMI 最高支持 4K（模式详情见上表）
- **输出**：全高清 1080p @ 60 Hz，延迟低于 70 ms
- **显示**：使用 uConsole 内置屏幕
- **压缩**：支持 YUV 和 MJPEG
- **兼容性**：VGA、DVI、Micro HDMI（通过转接器）
- **音频**：HDMI 嵌入式音频透传

### 连接与供电

- **供电**：直接由 uConsole 扩展插槽取电
- **目标软件**：目标设备无需安装任何软件

## 相关

- [以太网指南](/products/kvmext/ethernet/) — 选择 100M 或 1000M 网卡
- [SD 卡指南](/products/kvmext/sd-card/) — 镜像烧录与文件传输
- [购买选项](/products/kvmext/purchase-options/) — 仅扩展模块 vs 升级套件捆绑包
- [旧版 v1 规格](/products/kvmext/v1/features/) — 第一代模块
