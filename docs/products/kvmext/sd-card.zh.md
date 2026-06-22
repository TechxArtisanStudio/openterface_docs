---
title: "SD 卡指南 | 扩展模块 v2"
description: "在 Openterface uConsole KVM 扩展模块 v2 上使用 SD 卡读写功能。在 uConsole 和目标设备之间切换访问权限，用于镜像烧录、日志导出和文件传输。"
keywords: "SD card, microSD, KVM extension v2, image flashing, file transfer, uConsole"
---

# **SD 卡指南** | 扩展模块 v2

扩展模块 v2 包含 **SD 卡读写** 功能，您可以直接从 uConsole 烧录镜像、导出日志和传输文件，无需携带额外的读卡器。

## 概述

该模块提供一个 microSD 卡槽，由 **uConsole（主机）** 和 **目标设备** 共享——概念上类似于 KVM-GO MicroSD 切换工作流程，但集成在 uConsole 扩展模块中。

!!! note "一次只能访问一侧"
    SD 卡一次只能挂载到 uConsole **或** 目标设备，不能同时挂载到两者。请通过 Openterface 主机应用切换访问权限。

## 安装 SD 卡

将 microSD 卡用力插入模块卡槽，直至完全就位。

## 通过主机应用控制

在 uConsole 上使用 **Openterface QT** 可以：

- 在 **主机**（uConsole）和 **目标设备** 之间切换 SD 卡访问权限
- 从 uConsole 将操作系统镜像写入 SD 卡
- 无需拔出 SD 卡即可导出日志或传输文件

使用 SD 卡功能前，请确保已完成 [软件设置](/products/kvmext/software-setup/)。

## 典型工作流程

| 工作流程 | 描述 |
|----------|-------------|
| **系统镜像烧录** | 从 uConsole 烧录 Raspberry Pi、嵌入式开发板或设备的镜像 |
| **日志导出** | 将目标设备的日志导出到 SD 卡，然后在 uConsole 上读取 |
| **文件传输** | 在没有网络的情况下，在 uConsole 和目标设备之间传输配置文件或脚本 |

## 安全提示

- 在物理拔出 SD 卡之前，请在主机应用中执行 **弹出/卸载** 操作
- 在进行读写操作之前，请切换到正确的一侧（主机或目标设备）
- 镜像烧录工作负载请使用质量可靠的 microSD 卡

## 相关内容

- [连接目标设备](/products/kvmext/connect-to-target/)
- [软件设置](/products/kvmext/software-setup/)
- [KVM-GO MicroSD 切换指南](/products/kvmgo/microsd-switch/) — KVM-GO 上类似的切换概念
