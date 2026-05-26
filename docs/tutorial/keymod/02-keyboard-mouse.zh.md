---
title: "KeyMod 教程 - 键盘与鼠标"
description: "学习使用 KeyMod 键盘与触控板输入、发送快捷键，以及用手机控制目标电脑的鼠标。"
keywords: "KeyMod 键盘, KeyMod 鼠标, 触控板, 修饰键, 键盘快捷键"
---

# 2. 键盘与鼠标

键盘与鼠标模式是最常用的模式，提供虚拟键盘与触控板，用于从手机控制目标电脑。

## 两个层级：Basic 与 Pro

KeyMod 提供两种键盘体验：

| 层级 | 模式名称 | 最适合 |
|---|---|---|
| **Basic** | Keyboard & Mouse | 全屏键盘快速输入，无顶部标题栏干扰 |
| **Pro** | Keyboard & Mouse Pro | 含快捷方式中心条、分屏键盘与完整 IME 的复合布局 |

### Keyboard & Mouse (Basic)

**Basic** 提供 **专用全屏键盘**，无应用顶部标题栏。所有控件位于键盘自身顶行：

- 菜单、模式切换（Touchpad / Compose & Send / Num pad）
- 目标系统选择器
- 连接状态

**Basic 独有功能：**

- **长按重复**：按住字符或功能键自动重复（约 400ms 延迟，约 50ms 重复间隔）
- **按键预览**：按下时在键上方显示浮动气泡标签
- **触觉反馈** 与 **主题适配** 键面
- **竖屏与横屏数字键盘**：5×8 网格（竖屏）或 8×5 网格（横屏）
- **IME 编写模式**：输入长文本，以纯 ASCII HID 按键发送

> Basic **不包含** 快捷方式中心条行。需要条带配置文件请切换到 **Keyboard & Mouse Pro**。

### Keyboard & Mouse Pro

**Pro** 为完整复合体验：快捷方式中心条行、分屏键盘布局与完整 IME 流程，适合高级用户。

## 布局

**竖屏模式：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-gestures.webp" alt="竖屏触控板手势帮助与键盘" width="300" />
  <p><em>竖屏 — 触控板手势 + 键盘布局。在触控板上滑上下滚动，拖动移动光标。</em></p>
</div>

**横屏 — 分屏键盘 + 触控板：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-split-keyboard-touchpad.webp" alt="横屏分屏键盘与中央触控板" width="420" />
  <p><em>横屏 — 分屏键盘，左侧触控板，便于双手拇指输入。</em></p>
</div>

**横屏 — 宏条 + 配置文件：**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-macro-strip.webp" alt="横屏宏条与配置文件选择器" width="420" />
  <p><em>横屏 — 键盘上方宏条与配置文件选择器（如 Default、KiCAD）。</em></p>
</div>

## 显示模式（Android）

点击 **切换手柄**（键盘与触控板之间的药丸形分隔条）循环显示模式：

| 模式 | 显示内容 |
|---|---|
| **Both**（默认） | 键盘 + 触控板同时显示 |
| **Keyboard only** | 全宽键盘，隐藏触控板 |
| **Touchpad only**（竖屏） | 触控板全屏 |
| **Split**（横屏） | 两半键盘，左侧触控板 |

## 如何使用键盘

| 操作 | 方法 |
|---|---|
| 输入字母 | 点击该键 |
| 大写字母 | 先点 **Shift**，再点字母 |
| 输入数字或符号 | 点 **?123** 切换到数字/符号布局 |
| 输入 Ctrl+C（复制） | 点 **Ctrl**（高亮），再点 **C** |
| 输入 Win+R（运行对话框） | 点 **Win**，再点 **R** |
| 使用 F1–F12 | 点 **Fn**，字母行变为功能键 |
| 多修饰键（Ctrl+Shift+C） | 依次点 **Ctrl**、**Shift**（均保持），再点 **C** |

### 修饰键行为

**按住再点：** 点修饰键保持（高亮），再点任意键。单次按键后修饰键自动释放。多修饰键组合请依次点各修饰键，最后点目标键。

### 长按备选符号

许多字母键 **隐藏符号** 可通过长按访问：

长按 "d" → 显示: $  €  ¥  £
长按 "k" → 显示: (  {  [  <
长按 "/" → 显示: \  |
长按 "m" → 显示: +  _
长按直至弹出菜单，滑向目标符号后松手。

### Fn 键层

点修饰行中的 **Fn** 键，字母键临时变为 **F1 至 F12**：

- Q = F1, W = F2, E = F3, R = F4, T = F5, Y = F6
- U = F7, I = F8, O = F9, P = F10
- A = F11, S = F12

## 快捷操作按钮

常用快捷按钮可快速访问。应用根据 **目标系统** 设置选择正确修饰键：

| 操作 | macOS | Windows/Linux |
|---|---|---|
| 复制 | Cmd+C | Ctrl+C |
| 粘贴 | Cmd+V | Ctrl+V |
| 剪切 | Cmd+X | Ctrl+X |
| 撤销 | Cmd+Z | Ctrl+Z |
| 全选 | Cmd+A | Ctrl+A |
| 重做 | Cmd+Y | Ctrl+Y |
| 查找 | Cmd+F | Ctrl+F |
| 保存 | Cmd+S | Ctrl+S |
| 新标签 | Cmd+T | Ctrl+T |
| 关闭标签 | Cmd+W | Ctrl+W |
| 下一标签 | Cmd+Tab | Ctrl+Tab |
| 锁定屏幕 | Cmd+L | Win+L |
| 显示桌面 | Cmd+D | Win+D |
| Alt+F4 | — | Alt+F4 |
| Ctrl+Alt+Del | — | Ctrl+Alt+Del |

## 触控板

### 手势

| 手势 | 操作 |
|---|---|
| 单击 | 左键点击 |
| 双指单击 | 右键点击 |
| 拖动 | 移动光标 |
| 双指上下滑动 | 滚动（自然滚动） |
| 长按 | 拖动模式（锁定光标以便拖动） |
| 双击 | 双击 |

### 触控板附加功能

- **弹出触控板** — 点触控板信息图标 (?) 打开浮动触控板，可覆盖其他模式
- **触控板帮助叠加层**（Android）— 点 **?** 查看全屏手势参考
- **触觉反馈** — 点击与拖动切换时有振动

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-numpad.webp" alt="竖屏触控板与数字键盘网格" width="300" />
  <p><em>竖屏 — 触控板，右侧数字/符号网格快速输入。</em></p>
</div>

## 文本输入（IME 编写模式 — Android）

竖屏键盘与鼠标模式下可切换到 **IME 捕获模式** — 键盘下方文本编辑器，先编写较长文本再作为 HID 按键发送到目标电脑。

- 点修饰行中的 **键盘/IME 切换** 图标，在直接发键与文本编写模式间切换
- 编写模式提供带复制、粘贴、清除、撤销、发送工具栏的文本编辑器
- 用箭头图标 **折叠/展开** 编写区域

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-long-text-compose.webp" alt="竖屏长文本编写与发送" width="300" />
  <p><em>IME 编写模式 — 输入或粘贴长文本，点 Send 以 HID 按键发送到目标。</em></p>
</div>

## 目标系统

设置目标系统以匹配目标电脑的按键习惯，影响快捷方式标签、Unicode 输入方式与修饰键映射。点击标题栏 **系统图标** 更改。

## 快捷方式条（Android，横屏）

横屏分屏模式下，两半键盘上方出现 **可滚动快捷方式条**，快速访问常用快捷键（复制、粘贴、剪切、保存、撤销、全选）。

## 下一步

- **[目标系统 →](03-target-keyboard.md)** — 键盘布局与目标系统映射
- **[故障排除 →](12-troubleshooting.md)** — 常见问题与解决方案
