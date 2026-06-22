---
title: "软件设置 | 扩展模块 v2"
description: "在 uConsole 上安装和配置 Openterface 主机应用以用于 KVM 扩展模块 v2 — HDMI 采集、USB HID、SD 卡切换和 USB 共享。"
keywords: "Openterface 应用安装, uConsole 软件设置, KVM 扩展 v2, openterfaceqt"
---

# **软件设置** | 扩展模块 v2

## 安装概述

Openterface 主机应用使您的 uConsole 能够作为 KVM 接口运行，支持 HDMI 采集、USB HID 控制、**SD 卡切换**以及主机与目标设备之间的 **USB 端口共享**。

!!! note "要求"
    - **uConsole（主机）**：需要 Openterface QT 应用
    - **目标设备**：无需安装应用 — 支持 Windows、macOS、Linux、Android、iOS 进行 KVM 操作
    - **视频**：标准 HDMI 线缆；带供电的转换器支持 VGA、DP 等其他格式
    - **推荐后端**：**GStreamer**，在 arm64 上具有最佳 GPU 性能（Kali Linux 对 GStreamer 的支持可能有限）

## 安装方法

### **选项 1：GitHub Releases（推荐用于 arm64）**

1. 访问 [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases)。
2. 下载适用于 **arm64** 的最新 `.deb` 文件（例如 `openterfaceqt_*_arm64.deb`）。
3. 安装：
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **选项 2：Flatpak**

请参阅 [Flatpak 安装指南](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md)。

### **选项 3：社区软件源（ClockworkPi Bookworm）**

由 Rex 为 ClockworkPi 镜像维护：

1. **添加软件源**：
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **安装**：
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "软件源说明"
    命令需要 `sudo` 权限。该软件源针对 arm64 Bookworm 软件包 — 安装前请确认与您的 uConsole 操作系统的兼容性。

## 重要提醒

!!! tip "电源与首次设置"
    - 请保持 uConsole 充电或连接稳定电源 — 低电量可能导致连接问题。
    - 如果首次尝试时键盘/鼠标控制失败：
        1. 完全关闭 uConsole。
        2. 等待至少 10 秒。
        3. 重新开机并重试。

!!! tip "串口通信波特率"
    串口使用时请将波特率设置为 **9600** — uConsole 可能无法稳定维持 115200。

## 使用方法

### **启动 KVM 会话**

1. 在 uConsole 上启动 Openterface QT。
2. 应用会自动检测扩展模块 v2。
3. 通过 HDMI 和 USB 连接目标设备。
4. 使用 uConsole 的键盘和轨迹球控制目标设备。

### **控制功能**

- **键盘**：完整模拟，包括多媒体按键
- **鼠标**：绝对定位和相对定位
- **音频**：HDMI 音频透传至 uConsole 扬声器
- **文本传输**：以模拟按键方式粘贴用户名、密码和文本片段
- **USB 切换**：通过主机应用在 uConsole 和目标设备之间共享 USB 存储设备 — 请参阅 [连接目标设备](/products/kvmext/connect-to-target/)
- **SD 卡切换**：通过主机应用将 SD 卡挂载到主机或目标设备 — 请参阅 [SD 卡指南](/products/kvmext/sd-card/)

### **软件安装故障排除**

如果应用难以安装或鼠标/键盘无法正常工作：

- 确认您在 uConsole CM4/模块上安装了 **arm64** 版本
- 加入 [Discord](https://openterface.com/discord) 获取实时帮助
- 在 [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 提交问题反馈

## 相关内容

- [连接目标设备](/products/kvmext/connect-to-target/)
- [SD 卡指南](/products/kvmext/sd-card/)
- [常见问题](/products/kvmext/faq/)
