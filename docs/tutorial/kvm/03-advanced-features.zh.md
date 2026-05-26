
# KVM教程 03 — 高级功能

**受众：** 中级至专家 — 高级用户功能与配置

---

## 1. 偏好设置系统

### 视频

- **分辨率与帧率** — 首选捕获设置
- **媒体后端** — FFmpeg、GStreamer（Linux）或 Qt Multimedia（Windows）
- **硬件加速** — VAAPI（Intel/AMD）、V4L2-M2M（Raspberry Pi）
- **宽高比与缩放** — 自定义比例、拉伸/适应/填充

### 音频

- **启用** — 切换来自目标的音频捕获
- **输入/输出设备** — 选择源和播放设备

### 目标控制

- **鼠标模式** — 绝对、相对 (HID)、相对 (Events)
- **鼠标事件节流** — 30–1000 次/秒
- **键盘布局** — 目标操作系统及区域布局
- **重复按键间隔** — 按住键时的重复速度
- **自动隐藏光标** — 在视频区域上方隐藏主机光标

### 日志

- **日志级别** — Debug、Info、Warning、Error
- **写入文件** — `~/Documents/openterface.log`（macOS）或配置路径（Qt）
- **串口日志** — 独立的串口通信日志

---

## 2. EDID 管理

### 什么是 EDID？

EDID（Extended Display Identification Data，扩展显示识别数据）是 KVM 设备发送给目标的信息，用于描述其显示能力 — 支持的分辨率、刷新率、厂商信息等。KVM 充当「虚拟显示器」，因此 EDID 决定了目标会输出哪些分辨率。

### 编辑 EDID 显示名称

您可以更改 KVM 设备向目标报告的显示名称。该名称会出现在目标操作系统的显示设置中。

> **注意：** 目前仅支持编辑显示名称。分辨率编辑和自定义分辨率条目尚不可用。

**访问路径：** Settings > EDID Display Name Editor（macOS）或 Device > Update Display Settings（Qt）

### 使用场景

- 在目标操作系统设置中 **识别显示器**
- 在多显示器配置中 **自定义命名**，以区分 KVM 显示器

---

## 3. 宏系统（macOS）

宏是保存在工具栏宏面板中的键盘操作序列，可一键触发。

### 按键序列格式

**修饰键标签：** `<CTRL>`、`<SHIFT>`、`<ALT>`、`<CMD>`（根据目标操作系统映射为 Cmd/Win/Super）

**特殊键：** `<ESC>`、`<BACK>`、`<ENTER>`、`<TAB>`、`<SPACE>`、`<LEFT>`、`<RIGHT>`、`<UP>`、`<DOWN>`、`<HOME>`、`<END>`、`<DEL>`、`<PGUP>`、`<PGDN>`、`<F1>`–`<F12>`

**延迟：** `<DELAY05s>`、`<DELAY1S>`、`<DELAY2S>`、`<DELAY5S>`、`<DELAY10S>`

### 示例

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### AI 辅助生成

宏编辑器的 **Magic** 按钮可根据自然语言描述生成宏。描述您想要的操作，AI 将生成对应的按键序列。

### 验证

测试后将宏标记为 **verified**（已验证）。只有已验证的宏才可供 AI 代理自主执行。

---

## 4. 脚本工具（Qt）

受 AutoHotKey 启发的脚本语言，用于在目标上自动化键盘和鼠标操作。

### 打开方式

菜单：**Device > Script Tool**

### 命令

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | 暂停执行 | `Sleep 1000` |
| `Send` | 发送按键 | `Send Hello World` |
| `Click` | 鼠标点击 | `Click 100 200` |
| `SetCapsLockState` | 切换 CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | 截图 | `FullScreenCapture "/tmp/shot.png"` |

### 修饰键前缀

`^` = Ctrl，`+` = Shift，`!` = Alt，`#` = Win

---

## 5. 固件更新

### 何时更新

- 新硬件功能
- 错误修复
- 兼容性改进

### 更新流程

1. 打开 Firmware Update Tool（macOS 上为 **Settings > Firmware Update Tool**，Qt 上为 **Device > Update Firmware**）
2. 工具会从网络检查最新版本
3. 写入操作期间会显示进度
4. **更新过程中请勿断开设备连接**

### 恢复

1. 保持设备供电
2. 关闭并重新打开 Firmware Update Tool，重试
3. 若设备无响应，使用 Serial Reset Tool

---

## 6. Serial Reset Tool

**访问路径：** Settings > Serial Reset Tool（macOS）或 Device > Factory Reset HID Chip（Qt）

适用于：
- 固件更新失败后设备处于未知状态
- HID 芯片无响应
- 准备转售设备

---

## 7. 诊断（Qt）

菜单：**Device > Device Diagnostics**

依次运行硬件测试：
1. 串口连接测试
2. 目标 USB 状态
3. 恢复出厂设置测试
4. 高/低波特率测试
5. 压力测试（快速命令，测量成功率）
6. 即插即用测试（USB 断开/重连检测）

运行后，通过 **Support Email Dialog** 导出结果。

---

## 8. AI 聊天系统（macOS）

内置 AI 助手，可分析目标屏幕、建议操作并执行键盘/鼠标操作。

### 聊天模式

| Mode | Description |
|------|-------------|
| **Interactive** | 提问并获取指导 |
| **Agentic** | AI 自主规划并执行多步骤任务 |
| **Guide** | 逐步给出单条指令 |
| **Planner** | 将复杂请求拆分为结构化计划 |

### 配置

Settings > AI Chat：API 端点、密钥（存储在 Keychain）、模型、目标系统（macOS/Windows/Linux 等）

---

## 9. 远程控制（VNC/RDP — macOS）

通过 **Control > Connection Protocol** 在 **Hardware KVM**、**VNC** 和 **RDP** 模式之间切换。

| Scenario | Mode |
|----------|------|
| 目标处于 BIOS/UEFI、无网络、启动中或已崩溃 | Hardware KVM |
| 高带宽桌面使用、Windows 服务器 | VNC 或 RDP |

---

## 10. TCP 服务器（Qt）

内置 TCP 服务器，用于在端口 12345 上进行远程控制。

### 命令

`CHECK_STATUS`、`GET_LAST_IMAGE`、`GET_TARGET_SCREEN`、`SCRIPT_COMMAND`

### Python 示例

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **安全提示：** 无身份验证、加密或速率限制。仅在可信网络上启用。

---

## iPadOS 专属功能

### 蓝牙连接管理

iPadOS 应用通过 **Bluetooth Low Energy (BLE)** 连接 KVM-Go dongle，用于键盘/鼠标 HID 输入：

- **自动连接：** 默认启用。启动时，应用扫描 5 秒并自动连接信号最强的 `kvm*` 设备。
- **重新连接：** 若连接断开，应用最多尝试重连 3 次，每次间隔 2 秒。
- **信号监测：** 每 2 秒更新 RSSI。BLE 按钮显示信号强度（如 `-45 dBm`）及颜色指示：绿色（-50 至 0 dBm）、橙色（-70 至 -50 dBm）、红色（低于 -70 dBm）。
- **设备扫描：** 仅显示名称以 `kvm` 开头（不区分大小写）的设备。
- **手动控制：** 打开 BLE 界面以扫描、连接、断开或禁用自动连接。

### 信息叠加层

点击 **Info** 按钮，在右上角显示实时输入状态叠加层：

```
┌─ 输入状态 ────────────┐
│ 鼠标                  │
│ 模式: Absolute        │
│ 位置: 512.0, 384.0    │
│ 拖动模式: Active      │
│ 滚动: Inactive        │
│ 键盘                  │
│ 模式: Normal          │
│ Caps Lock: OFF        │
│ 修饰键: Ctrl, Shift   │
└───────────────────────┘
```

叠加层对触摸透明 — 不会阻挡与视频预览的交互。

### 屏幕方向校正

点击 **Rotate** 按钮循环切换方向校正模式：Normal、90° CW、180°、90° CCW。当 KVM-Go dongle 以非标准方向安装时，可校正视频预览。旋转同时应用于实时预览和已保存的捕获内容。

### 禁用空闲计时器

应用在使用期间通过禁用空闲计时器保持 iPad 屏幕 **常亮**，防止在监控目标 PC 时 iPad 自动锁定。

### 日志系统

应用内置基于类别的 `Logger` 过滤：

| Category | Covers |
|---|---|
| `bluetooth` | BLE 扫描、连接、数据传输 |
| `mouse` | 鼠标输入、手势检测、模式切换 |
| `keyboard` | 按键事件、修饰键状态、组合键 |
| `camera` | 视频录制、截图、照片捕获 |
| `ui` | 触摸处理、手势识别、预览层 |
| `general` | 应用生命周期、一般信息 |

可在应用源码中调整日志以减少控制台输出。

---

## 下一步

- **[故障排除 →](04-troubleshooting.md)** — 常见问题与解决方案

---

## Android 专属功能

### 设置面板

Android 应用的设置面板（菜单按钮 ☰）包含所有配置选项：

| Setting | Description |
|---|---|
| **Device** | 显示已连接的 USB 设备及状态。点击以选择或重新扫描。 |
| **Disconnect Device** | 安全释放所有 USB 连接。拔线前使用。 |
| **Baudrate** | 串口通信速度：**115200**（默认）或 **9600**（较慢，用于排查问题）。 |
| **Controls** | 摄像头亮度、对比度和色调滑块。 |
| **Video Format** | 分辨率与帧率选择器。 |
| **Rotate/Flip** | 顺时针/逆时针旋转 90°，水平/垂直翻转。 |
| **Screen Capture / Record Video** | 截图与视频录制。 |
| **Relative / Absolute / Drag** | 切换鼠标控制模式。 |
| **About Device** | 显示 Android 版本和应用版本信息。 |

### 设置持久化

Android 应用会在会话之间记住您的偏好：

| Setting | Persisted? |
|---|---|
| 鼠标控制模式 | 是 |
| 视频格式（分辨率、FPS） | 是 |
| 摄像头参数（亮度、对比度、色调） | 是 |
| 键盘布局（US、JP、DE） | 是 |
| 波特率 | 是 |
| 设备连接历史 | 是 |

重新打开应用时，会恢复上次的设置。要重置所有内容：Android 设置 → 应用 → Openterface → 存储 → **清除数据**。

### 安全断开

在 Android 上拔下 KVM 设备前：

1. 打开设置面板
2. 点击 **Disconnect Device**（红色显示）
3. 等待应用释放 USB 连接
4. 拔下线缆

这可防止数据损坏，并确保目标计算机正确释放键盘/鼠标。

### Android 性能提示

- **降低分辨率** — 640×480 比 1920×1080 轻量得多
- **降低帧率** — 30fps 比 60fps 占用更少带宽
- **关闭其他应用** — 释放手机内存
- **使用优质 USB OTG 适配器** — 廉价适配器可能成为连接瓶颈
- 开发团队正在努力降低摄像头管道本身的延迟
