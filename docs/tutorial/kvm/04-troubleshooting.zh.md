
# KVM教程 04 — 故障排除

Openterface KVM 设备的常见问题与解决方案。

---

## 设备未检测到

### 症状
- 设备菜单中显示「No devices found」
- 键盘和鼠标指示灯显示橙色或灰色
- 串口显示「N/A」

### 诊断

**Linux：**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
预期：`534d:2109`（HDMI 采集）以及 `1a86:7523` 或 `1a86:fe0c`（串口）。

**macOS：** Apple 菜单 > 关于本机 > 系统报告 > 硬件 > USB — 查找 Openterface。

**Windows：** 设备管理器 >「通用串行总线设备」和「端口 (COM 和 LPT)」— CH340 应显示为「USB-SERIAL CH340 (COMx)」。

### 解决方案

| 问题 | 修复 |
|---------|-----|
| lsusb/系统报告中无设备 | 尝试其他 USB 线缆/端口。需要 USB 2.0+ |
| 设备出现但无节点 | 检查 udev 规则（Linux）或重新安装驱动（Windows） |
| 权限被拒绝 | 将用户加入 `dialout` 和 `video` 组（Linux） |
| 检测到后消失 | `brltty` 占用串口（Linux）— 见下文 |

---

## BrlTTY 冲突（Linux） {#brltty-conflict-linux}

**Linux 上键盘/鼠标失效的最常见原因。**

`brltty`（盲文终端）服务会占用 USB 串口设备，包括 CH9329/CH32V208 芯片。

### 修复
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## 无视频 / 黑屏

### 步骤

1. **确认 HDMI 线缆**两端连接牢固
2. **检查目标设备**是否输出 HDMI（用普通显示器测试）
3. **尝试其他 HDMI 线缆**
4. **重新连接设备** — 应用会处理热插拔事件
5. **检查视频芯片检测：** 支持：MS2109、MS2109S、MS2130S

### 后端选择（Qt）

若某后端显示黑屏，可通过 **Preferences > Video > Media Backend** 尝试其他后端：
- **FFmpeg** — 最可靠（推荐）
- **GStreamer** — 仅 Linux
- **Qt Multimedia** — Windows 备用

### GStreamer 问题（Linux）

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
尝试其他 sink：
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID 不匹配

若目标无法识别 EDID，可能不会输出兼容分辨率。尝试更改目标输出分辨率，或通过应用的显示设置编辑 EDID。

---

## 键盘/鼠标无响应

### 步骤

1. **检查 USB 切换开关** — 确保设为 **Target**，而非 Host
2. **确认串口状态** — 应显示端口名，而非「N/A」
3. **尝试切换波特率** — 9600 或 115200
4. **检查控制芯片** — 支持：CH9329、CH32V208
5. **确认 CTS 监控** — 应用会监控 Clear-To-Send 线路以获取 HID 事件

### 鼠标相关问题

- **macOS 相对模式：** 需要辅助功能权限。检查 **System Settings > Privacy & Security > Accessibility**
- **绝对模式：** 确认宽高比与目标显示一致
- **鼠标延迟：** 尝试更高性能预设或提高波特率
- **串口冲突（Linux）：** 关闭占用端口的其他应用：`sudo lsof /dev/ttyUSB0`

---

## 音频无法播放

### 步骤

1. 通过音频图标 > Enable Audio **启用音频**
2. **检查麦克风权限** — System Settings > Privacy & Security > Microphone（macOS）
3. **选择正确的输入设备** —「OpenterfaceA」或采集设备名称
4. **选择正确的输出设备** — 您的扬声器或耳机
5. **检查目标的 HDMI 音频输出** — 目标是否配置为通过 HDMI 发送音频？

---

## USB 串口驱动问题

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

如需要，从 [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos) 安装 WCH CH34x 驱动。在 **System Settings > General > Login Items & Extensions > Driver Extensions** 中启用。

### Windows

若串口芯片未出现在设备管理器中，请安装 CH340/CH341 驱动。安装程序通常已捆绑；便携版需单独下载。

### Linux

CH340 驱动（`ch341` 模块）已内置在内核中：
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## 固件更新失败

### USB 稳定性

- 刷写过程中请勿拔线
- 请勿让主机进入休眠
- 使用直连 USB 端口（避免集线器）

### 恢复

1. 断电重启：拔掉 USB，等待 10 秒，重新连接
2. 重新进入 ISP 模式（部分设备：上电时按住按钮）
3. 使用 Serial Reset Tool 重新刷写引导程序
4. 若变砖请联系支持

---

## 性能问题

### CPU 占用高

1. **启用硬件加速** — Preferences > Video > Hardware Acceleration（VAAPI、V4L2-M2M）
2. **降低分辨率** — 720p 比 1080p 显著降低 CPU 占用
3. **降低帧率** — 15fps 可将解码负载减半
4. **切换后端** — 带 HW 加速的 FFmpeg 通常比 GStreamer 占用更少 CPU

### 丢帧

查看状态栏中的 FPS 计数器。若实际 FPS 低于目标，说明管道存在瓶颈。在 FFmpeg 帧处理器中启用丢帧以优先保证流畅播放。

---

## 日志与诊断

### 启用日志

- **macOS：** Settings > Logging Setting > Log to file（`~/Documents/openterface.log`）
- **Qt：** Preferences > Log > 设置日志级别和文件路径

### 串口控制台（Qt）

通过 **Device > Serial Port Debug** 打开 — 显示实时串口协议消息，可过滤 Keyboard、Mouse、HID、Chip Info。

---

## 平台特定问题

### Linux：Qt 平台插件

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux：Wayland 视频问题

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows：CH340 驱动

若驱动安装失败：临时禁用驱动签名强制，然后通过设备管理器手动安装。

### Raspberry Pi：视频卡顿

在 Pi 3 或低内存 Pi 4 上：
1. 将分辨率降至 720p
2. 使用 FFmpeg 后端（不要用 GStreamer）
3. 串口使用 9600 波特率以保证稳定

---

## Android 特定问题

### 设备未检测到

**症状：** 视频预览显示占位图，而非目标屏幕。

1. **检查 USB OTG 连接** — 拔下并重新插入线缆
2. **确认 OTG 支持** — 尝试连接 U 盘以确认手机支持 OTG
3. **检查 KVM 设备** — 是否已上电？指示灯是否亮起？
4. **尝试其他线缆** — 部分 OTG 转接头有故障
5. **重启应用** — 完全关闭（从最近任务划掉）后重新打开
6. **检查 USB 权限** — 若系统弹出 USB 访问对话框，请确保点击 **Allow**

### 无视频

**症状：** 设备已检测但屏幕黑屏或冻结。

1. **检查 HDMI 线缆** — 目标电脑的 HDMI 是否牢固连接到 KVM HDMI 输入？
2. **检查目标输出** — 目标电脑是否实际有画面输出？
3. **尝试更低分辨率** — 打开设置 → **Video Format** → 选择较低分辨率
4. **检查相机权限** — Android 设置 → 应用 → Openterface → 权限 → 确保允许 Camera
5. **重启应用**

### 鼠标无响应

**症状：** 视频正常但点击屏幕对目标无效果。

1. **检查 HID 的 USB 连接** — 打开设置 → **Device** 并确认设备处于活动状态
2. **尝试其他鼠标模式** — 在 Absolute 与 Relative 之间切换
3. **断开并重新连接** — 使用红色 **Disconnect Device** 按钮，然后重新连接
4. **检查目标电脑** — 是否识别 USB 键盘/鼠标？尝试在目标侧拔插 USB 线缆

### 键盘无法发送按键

**症状：** 鼠标可用但输入无效。

1. **确保键盘已打开** — 点击键盘按钮
2. **检查串口连接** — 打开设置 → **Device** 并确认处于活动状态
3. **检查波特率** — 打开设置 → **Baudrate** 并确保与设备匹配（默认 115200）
4. **检查键盘布局** — 确保选择了正确布局（US、JP、DE）

### 应用崩溃或冻结

1. **关闭并重启**应用
2. **降低视频分辨率和帧率** — 高设置可能使内存有限的设备过载
3. **检查可用存储空间** — 存储不足会导致不稳定
4. **更新应用** — 在 Google Play 或 GitHub Releases 查看新版本

### 截图或录制无法保存

1. **检查 Storage 权限** — Android 设置 → 应用 → Openterface → 权限 → Storage
2. **检查设备可用存储空间**
3. 录制和截图保存到设备的默认媒体文件夹

### 收集日志（Android）

若常规故障排除无效，可收集日志供维护者分析：

```bash
adb logcat | grep -i openterface > openterface.log
```

在 GitHub 提交 issue 时请附上此文件。

---

## iPadOS 特定问题

> **注意：** iPadOS 仅支持 **KVM-Go**。若使用 Mini-KVM 或 uConsole KVM Extension，iPadOS 应用将无法工作。

### 蓝牙无法连接

**症状：** BLE 按钮未变绿，或扫描列表中无设备。

1. **确认 iPad 已启用蓝牙** — 设置 > 蓝牙
2. **确保 KVM-Go 已上电** — dongle 应插入目标 PC 的 USB 端口
3. **将 iPad 靠近** KVM-Go dongle — BLE 范围通常可达 10 米
4. **检查 iPad 蓝牙权限** — 设置 > Privacy & Security > Bluetooth > 确保允许 Openterface
5. 在 BLE 界面点击 **Refresh** 重新开始扫描
6. **检查 Openterface 应用蓝牙权限** — 若首次启动被拒绝，请在设置中重新启用

### 无视频预览

**症状：** BLE 已连接但屏幕黑屏或显示引导图。

1. **检查 HDMI 连接** — 目标 PC 的 HDMI 输出是否牢固连接到 KVM-Go HDMI 输入？
2. **检查目标输出** — 目标电脑是否实际有画面输出？
3. **尝试更低分辨率** — 点击 Video 按钮并选择较低分辨率（720p 或 480p）
4. **检查相机权限** — 设置 > Privacy & Security > Camera > 确保允许 Openterface
5. **重启应用** — 从最近任务上滑关闭后重新打开

### 鼠标/触控无响应

**症状：** 视频正常但点击屏幕对目标无效果。

1. **检查 BLE 连接** — BLE 按钮应为绿色并显示 RSSI 值
2. **尝试其他鼠标模式** — 在 Pan Mode 与 iPencil Mode 之间切换
3. **断开并重新连接** — 打开 BLE 界面，点击 Disconnect，再 Connect
4. **检查目标电脑** — 是否将 KVM-Go 识别为 USB 键盘/鼠标？

### 键盘无法发送按键

**症状：** 鼠标可用但输入无效。

1. **确保浮动键盘已打开** — 点击 Keyboard 按钮
2. **检查 BLE 连接** — 输入通过蓝牙而非 USB 传输
3. **检查键盘模式** — 尝试在 Normal 与 Game 模式之间切换
4. **外接键盘：** 若使用实体 iPad 键盘，请确认 iPadOS 将按键事件路由到应用

### 音频无法播放

**症状：** 视频正常但无法通过 iPad 听到目标 PC 声音。

1. **检查 Audio 按钮** — 应显示绿色扬声器图标
2. **检查麦克风权限** — 设置 > Privacy & Security > Microphone > 确保允许 Openterface
3. **检查 iPad 音量** — 确保 iPad 未静音或音量最低
4. **检查目标音频输出** — 目标 PC 是否配置为通过 HDMI 发送音频？

### 应用崩溃或冻结

1. **关闭并重启**应用
2. **降低视频分辨率** — 高分辨率可能使旧款 iPad 吃力
3. **检查可用存储空间** — 存储不足会导致不稳定
4. **更新应用** — 在 App Store 查看新版本

### 截图或录制无法保存

1. **检查 Photo Library 权限** — 设置 > Privacy & Security > Photos > 确保允许 Openterface
2. **检查 iPad 可用存储空间**
3. **通过文件应用浏览** — 即使没有 Photo Library 权限，录制也会保存到 `Documents/Recordings/`

---

## 恢复出厂设置

1. 从 Settings（macOS）或 Device 菜单（Qt）使用 Serial Reset Tool
2. 这会将 HID 芯片恢复为出厂默认
3. 重置后重新连接设备

## 连接恢复

应用会自动处理以下情况的恢复：
- 设备断开/重连（USB 热插拔，iPadOS 的 BLE 重连）
- 通信超时
- 芯片回退（MS2109 → MS2109S → MS2130S）
- 串口恢复
- iPadOS BLE 自动重连（最多 3 次，间隔 2 秒）

## 提交缺陷报告

1. 启用日志文件记录
2. 复现问题
3. 通过 [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 或邮件 info@techxartisan.com 提交
