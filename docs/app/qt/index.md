---
title: "Openterface Qt for Windows & Linux"
description: "Openterface Qt desktop app for Windows and Linux: cross-platform KVM-over-USB control, preferences, video capture, and keyboard-mouse switching for Mini-KVM and KVM-GO hardware."
---

# Openterface QT for Win & Linux

This document provides an overview of a cross-platform KVM (Keyboard, Video, Mouse) software developed using Qt, compatible with both Linux and Windows operating systems. The software facilitates control over a target device from a host system, offering a variety of features accessible through its menu bar and additional functionalities.

## Main Menu Bar Features

### Preferences

The Preferences menu allows users to customize settings via a dialog with eight pages plus an AI group (MCP, Tools, Chat):<br>
![Preferences Gernal](https://assets.openterface.com/images/qt/preferenceGernal.webp)

-   **General** This page configures the debug log filter and whether to inhibit the host screen saver (`Inhibit Screen Saver`). Log categories are grouped as:

    -   Serial
    -   Input (Keyboard & Mouse)
    -   HID / Chip
    -   Device
    -   Camera / Backend
    -   Audio
    -   Scripts
    -   Server
    -   System
    -   UI
    -   AI Chat
    -   Other

    Each category can be expanded to set a per-category level. `Enable file logging` writes to `openterface.log` in a folder you pick with `Select Log Directory` (the application data directory by default).<br>

![Preferences Video](https://assets.openterface.com/images/qt/preferenceVideo.webp)

-   **Video** This page enables users to:

    -   Select which camera's data to capture.
    -   Set the resolution.
    -   Choose the video stream format.

-   **Audio** This page provides:

    -   **Audio Device Selection:** pick the `Audio Input Device`, refresh the list, and see the `Current Device`.
    -   **Audio Recording Settings:** `Audio Codec`, `Sample Rate`, `Bitrate`, and `Quality` for recorded capture.
    -   **Live Audio Settings:** `Enable Audio Pass-through` and a `Volume` slider for listening to target audio while controlling it.<br>

![Preferences TargetControl](https://assets.openterface.com/images/qt/preferenceTargetControl.webp)

-   **Target Control** This page provides options to configure control modes for the target device:

    -   **Control modes:**

        -   **Keyboard + Mouse + USB HID device**
        -   **USB keyboard**
        -   **Keyboard + Mouse**
        -   **USB HID device**

    -   **Set the Vendor ID (VID) and Product ID (PID) read from the target.**
    -   **Define the USB descriptor for the target.**

-   **Video Firmware** Firmware Management for the video (HDMI capture) chip: check the network for the latest version and use **Firmware Update from Remote**, **Backup Firmware to .bin File** (reads the current firmware from EEPROM), or **Write Firmware from .bin File**.

-   **Control Chip Firmware** Flash the CH32V208 control chip over USB with the built-in WCH ISP support: **Scan Devices**, then **Connect** and program.

-   **EDID Configuration** **Read from Device** to load the current EDID, then edit the **Display Name** and **Apply**. After updating, the application exits so the target re-reads the EDID.

-   **Virtual Keyboard** Configure the on-screen function and composite key panel.

-   **AI** A group with three pages: **MCP** (enable the Model Context Protocol server, **Stdio (local)** or **SSE (HTTP remote)**), **Tools**, and **Chat**.

### Edit

-   **Paste:** Both the Paste option in the Edit menu and the paste button in the top-right corner allow users to paste text from the host clipboard to the target device.

### Control

This menu provides options to:<br>

-   Set mouse movement modes: Absolute or Relative. **Control >> MouseMode >> Absolute or Relative.**
-   Toggle visibility of the host's mouse cursor. **Control >> Mouse Visibility >> Auto Hide or Always Show.**
-   Switch a USB port on the hardware between target and host usage. **Control >> Switchable USB >> TO Target or To Host.**
-   Adjust the baud rate for chip transmission. **Control >> Baudrate >> 9600, 115200.**
-   Pick which attached device the menus and toolbar act on. **Control >> Device >> _<device name>_.**

### Advanced

The Advanced menu includes the following options:<br>
![Advance menu](https://assets.openterface.com/images/qt/menuAdvance.webp)

-   **Environment Checking:** Verifies if required drivers for the software are installed.
-   **Reset Serial Port:** Restarts the serial port.
-   **Factory Reset HID Chip:** Restores the HID chip to its factory settings.<br>
    ![Advance SerialConsole](https://assets.openterface.com/images/qt/advanceSerialConsole.webp)
-   **Serial Console:** Opens the *Serial Port Debug* window to monitor messages exchanged with the control chip, with filters by message type: Chip info, Keyboard, Media keyboard, Mouse absolute, Mouse relative, and HID.<br>
    ![Advance ScriptTool](https://assets.openterface.com/images/qt/advanceScriptTool.webp)
-   **Script Tool:** Runs AutoHotkey (AHK) scripts. This feature mimics AutoHotkey but supports only a subset of mouse/keyboard functions and screenshot capabilities. Scripts affect the target device.
-   **Hardware Diagnostics:** Runs the built-in self-test suite against the attached device.
-   **Hotplug Recovery Test:** Checks that control is restored after the device is unplugged and replugged.
-   **Video Recording Settings:** Configure the codec, quality, and container used when recording the target screen.
-   **TCP Server:** Receives AutoHotkey commands via TCP to execute them on the target device.
-   **Device Selector:** Choose which connected device the panel acts on.
-   **Keyboard Mapping Editor:** Remap the keys the app sends to the target.
-   **AI Chat:** Toggles the AI assistant panel.

Firmware updates are not on this menu: they live in **Preferences >> Video Firmware** (video chip) and **Preferences >> Control Chip Firmware** (CH32V208 control chip).

### Languages

The interface language can be set to any translation shipped with the build:

-   Chinese
-   Danish
-   English
-   French
-   German
-   Italian
-   Japanese
-   Korean
-   Portuguese
-   Romanian
-   Russian
-   Spanish
-   Swedish

### Help

The Help menu provides: <br>
![Help menu](https://assets.openterface.com/images/qt/menuHelp.webp)

-   Links to the official website and feedback forms for software/hardware issues.
-   Information on purchasing hardware.
-   A description of the software’s environment.
-   About: Details about the organization.
-   Update: Checks for software updates.

## Menu Bar Functions (Left to Right)

The menu bar, from left to right, includes the following functionalities:<br>

![MenuBar](https://assets.openterface.com/images/qt/menubar.webp)

-   Keyboard Layout Selection: Choose the keyboard layout.
-   Zoom Controls: Zoom in, zoom out, or reset the display of the captured video stream.
-   Virtual Keyboard: Includes function keys and preset shortcut combinations.
-   Screenshot: Captures the entire target screen and saves it to a default folder.
-   Full-Screen Mode: Toggles full-screen display.
-   Paste: Pastes text from the host clipboard to the target.
-   Mouse Dance: Triggers the mouse to perform preset movements.
-   USB Device Indicator: Displays whether a USB device is assigned to the target or host.

In the meantime, feel free to explore our open-source **GitHub repository**: [Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) for the latest code, updates, examples, and to report issues.

You can also join our [Discord community](/discord) to connect with our dev team and other awesome users to discuss any KVM-related topics.

For direct support, feel free to email us at [support@openterface.com](mailto:support@openterface.com).

---

**Have feedback about this page?** [Let us know here.](https://forms.gle/wmxoR2C1VdG36mT69)
