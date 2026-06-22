---
title: "常见问题 | 扩展模块 v2"
description: "Openterface uConsole KVM 扩展模块 v2 常见问题：网卡、升级套件、SD 卡、软件设置、兼容性与故障排除。"
keywords: "KVM 扩展 v2 常见问题, uConsole KVM, 以太网, SD 卡, 故障排除, 升级套件"
---

# 常见问题 | 扩展模块 v2

欢迎查看 **Openterface uConsole KVM 扩展模块 v2** 的常见问题解答。

如果您没有找到所需信息，请发送邮件至 [support@openterface.com](mailto:support@openterface.com)，或加入我们的 [Discord](/discord) 社区。

---

## :material-clipboard-list: 快速导航

- [产品与购买](#产品与购买)
- [安装与硬件](#安装与硬件)
- [兼容性](#兼容性)
- [控制与功能](#控制与功能)
- [视频与音频](#视频与音频)
- [故障排除](#故障排除)
- [更多](#更多)

---

## 产品与购买

**:material-chat-question:{ .faq } 扩展模块 v2 是一款产品还是两个网络版本？**

它是一款**产品**。盒内包含 100M 和 1000M 两张网卡。请参阅 [购买选项](/products/kvmext/purchase-options/)。

**:material-chat-question:{ .faq } 我应该使用哪张网卡？**

在所有 uConsole 主板上使用 **100M** 网卡。仅当您拥有 **HackerGadgets uConsole 升级套件**并需要千兆网络时，才使用 **1000M** 网卡。请参阅 [以太网指南](/products/kvmext/ethernet/)。

**:material-chat-question:{ .faq } 我需要 HackerGadgets uConsole 升级套件吗？**

仅在需要**千兆以太网**时才需要。100M 网卡无需升级套件即可使用。如果您没有该套件，请在结账时选择捆绑选项，或单独购买套件。

**:material-chat-question:{ .faq } uConsole 是否包含在内？**

不包含。ClockworkPi uConsole 设备需另行购买。

---

## 安装与硬件

**:material-chat-question:{ .faq } 扩展模块 v2 如何工作？**

它从目标设备捕获 HDMI 信号并显示在 uConsole 上。uConsole 的键盘和轨迹球通过 USB HID 仿真控制目标设备。可选的以太网和 SD 卡功能扩展了网络调试和镜像制作工作流。

**:material-chat-question:{ .faq } 我可以在已安装 4G/LTE 模块的情况下使用它吗？**

不可以。扩展模块 v2 使用 uConsole 扩展槽，**不能**与 4G 或 LTE 模块同时使用。

**:material-chat-question:{ .faq } 安装需要哪些工具？**

需要一把六角螺丝刀用于安装螺丝。建议采取 ESD（静电防护）措施。

**:material-chat-question:{ .faq } 安装可逆吗？**

可以。如有需要，可卸下扩展模块 v2 并重新安装您原有的 4G/LTE 模块。

---

## 兼容性

**:material-chat-question:{ .faq } 哪些 uConsole 型号兼容？**

兼容具有标准扩展槽的 uConsole 设备。请查看您的设备规格以确认。

**:material-chat-question:{ .faq } 我可以控制哪些目标设备？**

任何具有 HDMI 输出的设备：台式机、服务器、SBC（树莓派等）、嵌入式系统、工业 PC 等等。

**:material-chat-question:{ .faq } 目标设备需要安装特殊软件吗？**

不需要。KVM 使用 USB HID 仿真——目标设备无需安装键盘和鼠标驱动程序。了解更多关于 [基于 USB 的 KVM 技术](/tutorial/kvm/01-getting-started/) 的信息。

**:material-chat-question:{ .faq } 我可以同时控制多个目标设备吗？**

KVM 一次只能控制一个目标设备。通过移动 HDMI 和 USB 线缆来切换目标设备。

---

## 控制与功能

**:material-chat-question:{ .faq } 我可以通过 SD 卡传输文件吗？**

可以。扩展模块 v2 支持通过 Openterface 应用进行主机/目标切换的 SD 卡读写操作。请参阅 [SD 卡指南](/products/kvmext/sd-card/)。

**:material-chat-question:{ .faq } 它支持 BIOS 级别访问吗？**

支持。直接 USB HID 允许完全访问 BIOS/UEFI，无需网络依赖。

**:material-chat-question:{ .faq } 旧版 v1 模块呢？**

第一代 37 × 77 mm 模块（无以太网/SD）的文档位于 [旧版 v1 文档](/products/kvmext/v1/)。

---

## 视频与音频

**:material-chat-question:{ .faq } 支持哪些视频分辨率？**

- **输入**：通过 HDMI 最高支持 4K @ 30 Hz（RGB/YCBCR444）或 4K @ 60 Hz（YCBCR420）
- **输出**：uConsole 屏幕上 1080p @ 60 Hz

**:material-chat-question:{ .faq } 视频延迟是多少？**

低于 **70 毫秒**——适用于 BIOS 访问、维护和诊断。

**:material-chat-question:{ .faq } 支持音频吗？**

支持。HDMI 嵌入音频直通到 uConsole 扬声器。

---

## 故障排除

**:material-chat-question:{ .faq } 无视频信号**

- 检查两端的 HDMI 连接
- 确认目标设备已通电并通过 HDMI 输出
- 尝试更换 HDMI 线缆
- 重启 Openterface QT

**:material-chat-question:{ .faq } 键盘或鼠标不工作**

- 确认扩展模块到目标设备的 USB 线缆已连接
- 完全关闭 uConsole，等待 10 秒后开机重试
- 重新安装 Openterface QT（适用于您 uConsole 的 arm64 版本）
- 在 [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 或 [Discord](https://openterface.com/discord) 上报告您的 Linux 发行版和 CM4 模块信息

**:material-chat-question:{ .faq } 软件安装困难**

请尝试 [软件设置](/products/kvmext/software-setup/) 中的 GitHub Releases（选项 1）或 ClockworkPi 社区仓库（选项 3）。加入 [Discord](https://openterface.com/discord) 获取逐步帮助。

**:material-chat-question:{ .faq } USB 切换端口不工作**

确保您使用的是最新的 Openterface QT 版本。在主机应用中切换 USB 访问。如果问题仍然存在，请在 [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 上提交问题。

**:material-chat-question:{ .faq } HDMI 仅显示在方框内 / 没有应用设置菜单**

更新到最新的 Openterface QT。查看 [软件设置](/products/kvmext/software-setup/) 和 Discord 上关于 uConsole 特定显示设置的社区讨论。

**:material-chat-question:{ .faq } 应用未检测到模块**

- 重新插拔扩展槽中的板卡
- 重启 uConsole
- 重新安装 Openterface QT

---

## 更多

**:material-chat-question:{ .faq } 软件是开源的吗？**

是的。Openterface 主机应用在 [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) 上开源。

**:material-chat-question:{ .faq } 我可以在哪里获得支持？**

- **电子邮件**：[support@openterface.com](mailto:support@openterface.com)
- **Discord**：[加入我们的社区](https://openterface.com/discord)
- **GitHub**：[报告问题](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
