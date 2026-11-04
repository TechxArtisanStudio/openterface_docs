---
title: "KVM Tutorial 03 — Advanced Features"
description: "KVM Tutorial 03 — Advanced Features: Audience: Intermediate to Expert — power user features and configuration Open-source KVM-over-USB guides. Open-source…"
---

# KVM Tutorial 03 — Advanced Features

**Audience:** Intermediate to Expert — power user features and configuration

---

## 1. Preferences System

### Video

- **Resolution & frame rate** — Preferred capture settings
- **Media backend** — FFmpeg or GStreamer (Linux); on Windows the selector lists FFmpeg (DirectShow) and Media Foundation, but the app forces FFmpeg
- **Hardware acceleration** — Auto (Recommended), NVIDIA CUDA, Intel Quick Sync Video (QSV), or CPU — FFmpeg backend only, requires restart
- **Aspect ratio & scaling** — Custom ratio, Stretch/Fit/Fill

### Audio

- **Enabled** — Toggle audio capture from target
- **Input/Output device** — Select source and playback device

### Target Control

- **Mouse mode** — Absolute, Relative (HID), Relative (Events)
- **Mouse event throttle** — 30–1000 events/second
- **Keyboard layout** — Target OS and regional layouts
- **Repeating keystroke interval** — Held key repeat speed
- **Auto-hide cursor** — Hide host cursor over video area

### Logging

- **Log level** — Debug, Info, Warning, Error
- **Log to file** — `~/Documents/openterface.log` (macOS) or configured path (Qt)
- **Serial logging** — Separate serial communication log

---

## 2. EDID Management

### What Is EDID?

EDID (Extended Display Identification Data) is what the KVM device sends to the target to describe its display capabilities — supported resolutions, refresh rates, vendor info. The KVM acts as a "fake monitor," so EDID determines what resolutions the target will output.

### Editing EDID Display Name

You can change the display name that the KVM device reports to the target. This name appears in the target OS display settings.

> **Note:** Only editing the display name is currently supported. Resolution editing and custom resolution entries are not yet available.

**Access:** Settings > EDID Display Name Editor (macOS) or File >> Preferences >> EDID Configuration (Qt) — click **Read from Device**, edit the **Display Name**, tick **Update display name**, then click **Apply**; the app exits after applying.

### Use Cases

- **Identifying the display** in target OS settings
- **Custom naming** in multi-monitor setups to distinguish the KVM display

---

## 3. Macro System (macOS)

Macros are saved keyboard action sequences triggered from the toolbar macro panel.

### Key Sequence Format

**Modifier Tags:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (maps to Cmd/Win/Super depending on target OS)

**Special Keys:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Delays:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Examples

```
<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
```

### AI-Assisted Generation

The macro editor's **Magic** button generates macros from natural language. Describe what you want and the AI produces the key sequence.

### Verification

Mark macros as **verified** after testing. Only verified macros are available to the AI agent for autonomous execution.

---

## 4. Script Tool (Qt)

An AutoHotKey-inspired scripting language for automating keyboard and mouse actions on the target.

### Opening

Menu: **Advanced >> Script Tool**

### Commands

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Pause execution | `Sleep 1000` |
| `Send` | Send keystrokes | `Send Hello World` |
| `Click` | Mouse click | `Click 100 200` |
| `SetCapsLockState` | Toggle CapsLock | `SetCapsLockState On` |
| `FullScreenCapture` | Screenshot | `FullScreenCapture "/tmp/shot.png"` |

### Modifier Prefixes

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Firmware Updates

### When to Update

- New hardware features
- Bug fixes
- Compatibility improvements

### Update Process

1. Open the firmware tool — **Settings > Firmware Update Tool** (macOS), or **File >> Preferences >> Video Firmware** and click **Firmware Update from Remote** (Qt)
2. The tool checks for the latest version from the network
3. Progress is tracked during the write operation
4. **Do not disconnect the device during update**

The Qt **Video Firmware** page also offers **Backup Firmware to .bin File** and **Write Firmware from .bin File**. The CH32V208 control chip is updated from **File >> Preferences >> Control Chip Firmware**, which flashes it with the built-in WCH ISP tool (Windows and Linux).

### Recovery

1. Keep the device powered
2. Close and reopen the Firmware Update Tool, retry
3. If the device is unresponsive, reset the HID chip to factory defaults: **Advanced >> Factory Reset HID Chip** (Qt), or the **Factory Reset** step of the diagnostics tool on macOS (Settings window > **Advanced & Debug** > **Device Diagnostics** > **Open Diagnostics Tool**)

---

## 6. Factory Reset HID Chip

**Access:** Advanced >> Factory Reset HID Chip (Qt). On macOS there is no menu item — the factory reset runs as the **Factory Reset** step inside the diagnostics tool: open the Settings window, go to **Advanced & Debug** > **Device Diagnostics** > **Open Diagnostics Tool**.

Use when:
- Device is in an unknown state after failed firmware update
- HID chip is not responding
- Preparing the device for resale

---

## 7. Diagnostics (Qt)

Menu: **Advanced >> Hardware Diagnostics**

Runs 8 hardware tests sequentially:
1. Overall Connection
2. Target Plug & Play
3. Host Plug & Play
4. Factory Reset
5. Serial Connection
6. High Baudrate
7. Low Baudrate
8. Stress Test

After running, export results via the **Support Email Dialog**.

---

## 8. AI Chat System (macOS)

Built-in AI assistant that can analyze the target screen, suggest actions, and execute keyboard/mouse operations.

### Chat Modes

| Mode | Description |
|------|-------------|
| **Interactive** | Ask questions, get guidance |
| **Agentic** | AI autonomously plans and executes multi-step tasks |
| **Guide** | One instruction at a time, step by step |
| **Planner** | Complex requests broken into structured plans |

### Configuration

Settings > AI Chat: API endpoint, key (stored in Keychain), model, target system (macOS/Windows/Linux/etc.)

---

## 9. Remote Control (VNC/RDP — macOS)

Switch between **Hardware KVM**, **VNC**, and **RDP** modes via **Control > Connection Protocol**.

| Scenario | Mode |
|----------|------|
| Target in BIOS/UEFI, no network, booting, crashed | Hardware KVM |
| High-bandwidth desktop use, Windows server | VNC or RDP |

---

## 10. TCP Server (Qt)

Built-in TCP server for remote control on port 12345.

### Commands

`checkstatus`, `lastimage`, `gettargetscreen` — lowercase and without underscores (the server lowercases each line before matching). Any other line is passed to the script engine and run as an AHK script.

### Python Example

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"checkstatus\n")
print(sock.recv(4096).decode())
sock.close()
```

> **Security:** No authentication, encryption, or rate limiting. Only enable on trusted networks.

---

## iPadOS-Specific Features

### Bluetooth Connection Management

The iPadOS app connects to the KVM-Go dongle via **Bluetooth Low Energy (BLE)** for keyboard/mouse HID input:

- **Auto-connect:** Enabled by default. On startup, the app scans for 5 seconds and auto-connects to the `kvm*` device with the strongest signal.
- **Reconnection:** If the connection drops, the app attempts to reconnect up to 3 times with a 2-second delay.
- **Signal monitoring:** RSSI updates every 2 seconds. The BLE button shows the signal strength (e.g., `-45 dBm`) with a color indicator: green (-50 to 0 dBm), orange (-70 to -50 dBm), red (below -70 dBm).
- **Device scanning:** Only devices whose name starts with `kvm` (case-insensitive) appear in the list.
- **Manual control:** Open the BLE screen to scan, connect, disconnect, or disable auto-connect.

### Info Overlay

Tap the **Info** button to display a real-time input status overlay in the top-right corner:

```
┌─ Input Status ────────┐
│ Mouse                 │
│ Mode: Absolute        │
│ Position: 512.0, 384.0│
│ Drag Mode: Active     │
│ Scrolling: Inactive   │
│ Keyboard              │
│ Mode: Normal          │
│ Caps Lock: OFF        │
│ Modifiers: Ctrl, Shift│
└───────────────────────┘
```

The overlay is transparent to touches — it doesn't block interaction with the video preview.

### Screen Orientation Correction

Tap the **Rotate** button to cycle through orientation correction modes: Normal, 90° CW, 180°, 90° CCW. This corrects the video preview when the KVM-Go dongle is mounted in a non-standard orientation. Rotation applies to both live preview and saved captures.

### Idle Timer Disabled

The app keeps the iPad screen **awake** during use by disabling the idle timer, preventing the iPad from auto-locking while monitoring the target PC.

### Logging System

The app includes a built-in `Logger` with category-based filtering:

| Category | Covers |
|---|---|
| `bluetooth` | BLE scanning, connection, data transmission |
| `mouse` | Mouse input, gesture detection, mode changes |
| `keyboard` | Key events, modifier state, composite keys |
| `camera` | Video recording, screenshots, photo capture |
| `ui` | Touch handling, gesture recognition, preview layer |
| `general` | App lifecycle, general info |

Logging can be adjusted in the app source to reduce console noise.

---

## Next Steps

- **[Troubleshooting →](/tutorial/kvm/04-troubleshooting/)** — Common problems and solutions

---

## Android-Specific Features

### Settings Panel

The Android app's settings panel (Menu button ☰) contains all configuration options:

| Setting | Description |
|---|---|
| **Device** | Shows connected USB devices and status. Tap to select or re-scan. |
| **Disconnect Device** | Safely releases all USB connections. Use before unplugging. |
| **Baudrate** | Serial communication speed: **115200** (default) or **9600** (slower, for issues). |
| **Controls** | Camera brightness, contrast, and hue sliders. |
| **Video Format** | Resolution and frame rate selector. |
| **Rotate/Flip** | Rotate 90° CW/CCW, flip horizontally/vertically. |
| **Screen Capture / Record Video** | Screenshot and video recording. |
| **Relative / Absolute / Drag** | Switch mouse control mode. |
| **About Device** | Shows Android version and app version info. |

### Settings Persistence

The Android app remembers your preferences between sessions:

| Setting | Persisted? |
|---|---|
| Mouse control mode | Yes |
| Video format (resolution, FPS) | Yes |
| Camera parameters (brightness, contrast, hue) | Yes |
| Keyboard layout (US, JP, DE) | Yes |
| Baudrate | Yes |
| Device connection history | Yes |

When you reopen the app, it restores your last settings. To reset everything: Android Settings → Apps → Openterface → Storage → **Clear Data**.

### Safe Disconnect

Before unplugging the KVM device on Android:

1. Open the settings panel
2. Tap **Disconnect Device** (shown in red)
3. Wait for the app to release the USB connection
4. Unplug the cables

This prevents data corruption and ensures the target computer properly releases the keyboard/mouse.

### Android Performance Tips

- **Lower the resolution** — 640×480 is much lighter than 1920×1080
- **Reduce the frame rate** — 30fps uses less bandwidth than 60fps
- **Close other apps** — free up your phone's memory
- **Use a quality USB OTG adapter** — cheap adapters can bottleneck the connection
- The development team is working on reducing latency in the camera pipeline itself
