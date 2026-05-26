---
title: "KeyMod 教程 - 入门"
description: "安装 KeyMod 应用、连接 KeyMod 设备，并在 5 分钟内发送第一个按键。"
keywords: "KeyMod 入门, KeyMod 设置, KeyMod 安装, 连接 KeyMod"
---

# 1. 入门

安装 KeyMod 应用、连接 KeyMod 硬件，并在 5 分钟内发送第一个按键。

## 您需要准备

- **Openterface KeyMod 硬件** — 已开机且在范围内
- **手机或平板** — 已安装 KeyMod 应用的 Android 设备
- **USB 线缆**（首次设置）— USB-C，用于将手机连接到 KeyMod 设备
- **蓝牙**（可选）— 首次设置后可无线连接

## 步骤 1：安装 KeyMod 应用

**Android：**

1. 打开手机浏览器，访问 [KeyMod GitHub Releases 页面](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags)
2. 下载最新的 `.apk` 文件
3. 点击下载的文件进行安装
4. 若 Android 提示，请为浏览器允许 **「安装未知应用」**

也可从源码构建——见下方 [从源码构建](#从源码构建)。

## 步骤 2：连接 KeyMod 设备

KeyMod 可通过两种方式连接 Openterface KeyMod 硬件：

### USB 连接（建议首次设置使用）

1. 用 USB-C 线将手机插入 KeyMod 设备
2. 打开 KeyMod 应用
3. 点击主屏幕右上角的连接图标
4. 点击 **「USB 连接」**
5. 出现提示时接受 USB 权限
6. 应看到绿色的 **「已连接」** 状态指示

### 蓝牙连接（无线）

1. 确保手机已开启蓝牙
2. 打开 KeyMod 并点击连接图标
3. 点击 **「蓝牙连接」**
4. 等待 KeyMod 设备出现在扫描列表中
5. 点击设备进行配对
6. 应看到绿色的 **「已连接」** 状态指示

> **提示：** 在连接对话框中启用 **「启动时自动连接」**，每次打开应用时 KeyMod 会自动重连。应用会记住上次连接类型（USB 或 BLE）。

## 步骤 3：选择模式 — 欢迎与指南

启动后会看到 **欢迎与指南** 屏幕及模式卡片：

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="欢迎屏幕与模式卡片及开始按钮" width="300" />
  <p><em>欢迎与指南 — 点击任意模式卡片进入该模式。</em></p>
</div>

随时通过侧栏菜单（左上角汉堡图标）切换模式：

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="含模式列表的导航抽屉" width="300" />
  <p><em>导航抽屉 — 切换模式，访问宏、语音和设置。</em></p>
</div>

**「记住我的选择」** — 勾选后，下次启动将跳过欢迎屏幕，直接进入上次使用的模式。

**「跳过」按钮** — 跳过欢迎屏幕，立即进入上次使用的模式。

## 步骤 4：发送第一个按键

1. 选择 **键盘与鼠标** 模式
2. 点击屏幕键盘上的任意键
3. 对应按键将发送到目标电脑

完成！您已可远程控制目标电脑。

## 连接状态指示

| 指示 | 含义 |
|---|---|
| **绿色**（已连接图标） | 连接正常，可发送输入 |
| **琥珀/蓝色**（连接中图标） | 正在连接 |
| **灰色**（未连接图标） | 无活动连接 |
| **信号条** | BLE 信号强度或 USB 活动状态 |

## 从源码构建（Android，开发者）

```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## 下一步

- **[键盘与鼠标 →](02-keyboard-mouse.md)** — 输入、修饰键、触控板和文本输入
