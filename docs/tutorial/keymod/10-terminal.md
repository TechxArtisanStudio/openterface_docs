---
title: "KeyMod Tutorial - Terminal"
description: "Connect directly to a target computer's SSH command line through your phone using the KeyCmd Terminal. Configure SSH profiles, keys, and manage connections."
keywords: "KeyCmd Terminal, SSH connection, phone SSH, remote command line, SSH key management"
---

# 10. Terminal

**Terminal** lets you connect directly to a target computer's SSH command line through your phone — via USB or Bluetooth, through Openterface hardware.

---

## 1. Enter Terminal Mode

From the bottom navigation bar, tap **Terminal**, or select Terminal on the launch page.

**Example (Bottom navigation + launch page):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/01-bottom-nav.webp" alt="Bottom navigation" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/02-launch-page.webp" alt="Launch page" width="300" />
</div>

---

## 2. Getting Started

What you need to prepare for using Terminal:

### A. Hardware Connection

> Setup flow: Connect phone to Openterface hardware → Enter Terminal mode → Configure SSH Profile → Establish connection

1. Connect your phone to the Openterface hardware, ensuring USB or Bluetooth connection is active.

**Example (Hardware connection successful):**

<div align="center" style="margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/03-hardware-connected.webp" alt="Hardware connected" width="300" />
</div>

### B. First-time SSH Profile Configuration

Terminal stores target computer login information through Profiles. How to access the Credentials interface:

**Method 1: Via top settings icon**

1. After entering Terminal mode, tap the **Settings icon** (gear icon) in the **top title bar**.
2. Enter the Credentials management page, tap **Add Profile** to add a new configuration.

**Example (Settings icon to Credentials interface):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/04-settings-icon.webp" alt="Settings icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/05-credentials-page.webp" alt="Credentials page" width="300" />
</div>

**Method 2: Via connection dialog**

1. Tap the **Connect** button inside the Terminal interface.
2. On first use (with no Profile), you'll see the **Add Profile** button. Tap it to enter the Credentials configuration page.

**Example (Connect to Credentials interface):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/06-connect-button.webp" alt="Connect button" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/07-connect-dialog-add.webp" alt="Connect dialog add" width="300" />
</div>

How to add a configuration:

1. On the Credentials interface, tap the **Add Profile** button to open the configuration interface.

**Example (Add Profile + basic interface):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/08-add-profile.webp" alt="Add Profile" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/09-add-profile-interface.webp" alt="Add profile interface" width="300" />
</div>

Fill in the device information for your SSH connection:

1. Manually fill in **Profile Name** (customizable), **Username**, **Password** — these three fields.

   Host defaults to `192.168.11.2`, Port defaults to `22` — users can keep or modify as needed.

   By default, User Password authentication is used. For SSH Key authentication, continue below.

**Example (Fill in basic three fields + default two fields):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/10-fill-credentials.webp" alt="Fill in credentials" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/11-default-host-port.webp" alt="Default host and port" width="300" />
</div>

### SSH Key Configuration

1. Tap the **dropdown icon** on the right side of the User Password row, a popup will appear.
2. In the popup, you can switch to SSH Key configuration.

**Example (Tap dropdown icon + switch to SSH Key configuration):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/12-dropdown-icon.webp" alt="Dropdown icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/13-switch-ssh-key.webp" alt="Switch to SSH Key" width="300" />
</div>

3. When configuring SSH Key, the Password field shows "No key set". Tap the **key icon** on the right side of that row.

**Example ("No key set" + tap key icon):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/14-no-key-set.webp" alt="No key set" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/15-key-icon.webp" alt="Key icon" width="300" />
</div>

4. After tapping the key icon, three options appear. Choose based on your needs:

   - **Paste** — paste your existing private key, then tap save
   - **Import from file** — import a key file
   - **Generate** — generate a new key pair

**Example (Key options popup):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/16-key-options-popup.webp" alt="Key options popup" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/17-key-options-detail.webp" alt="Key options detail" width="300" />
</div>

> After pasting an existing private key, you don't need to proceed with the key generation steps below. Users who have already pasted their key can skip to step 5.

**Generate key** steps:

1. In the Generate Key popup, give the Name a custom name. On the right side of the Algorithm row, tap the dropdown to see key type options.

**Example (Generate Key configuration interface):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/18-generate-key.webp" alt="Generate Key" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/19-generate-algorithm.webp" alt="Algorithm selection" width="300" />
</div>

> Key Passphrase is optional. After entering a passphrase, the Rounds row will appear. After entering the number, tap the **Generate button** to generate the key.

**Example (Generate result + Edit key interface):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/20-generate-result.webp" alt="Generate result" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/21-edit-key-interface.webp" alt="Edit key interface" width="300" />
</div>

> After generating via the Generate button, tap save at the bottom right. It will automatically switch to the Edit Key interface.

5. Keys added via paste, import, or generation need to be saved. Tap the **Save** button to confirm.

   At this point, **Edit key** and **Delete** options appear below the key.

**Example (Edit and save + Edit key options):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/22-edit-save.webp" alt="Edit and save" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/23-edit-key-options.webp" alt="Edit key options" width="300" />
</div>

### C. Modify and Search SSH Profile Configuration

To edit or delete SSH Key configurations:

On the Edit Key interface, tap the three dots on the right side of the Key info row or Public Key row to expand detailed key information. You can also directly copy and paste keys.

**Example (Edit interface + Delete option):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/24-edit-interface.webp" alt="Edit interface" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/25-delete-option.webp" alt="Delete option" width="300" />
</div>

**Tags** — organize your profiles:

1. Tap the icon on the right side of the Tags row. Enter a new tag and press Enter to save.

   **All tags** shows all tags you've added. Tags owned by the current device will be highlighted. You can quickly add or remove tags by tapping existing tags.

**Example (Tags + Tags detail):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/26-tags.webp" alt="Tags" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/27-tags-detail.webp" alt="Tags detail" width="300" />
</div>

2. After editing, tap OK, then tap **Save** on the Edit interface. The current device will have the corresponding tags added.

**Example (Tag added):**

<div align="center" style="margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/28-tag-added.webp" alt="Tag added" width="300" />
</div>

3. On the Credentials interface, use the **search bar** at the top to quickly find devices by name, tags, or other info.

**Example (Search):**

<div align="center" style="margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/29-search.webp" alt="Search" width="300" />
</div>

4. **Notes** can be used to add detailed notes for devices (optional).

---

## 3. Establishing Connection

### Step 1 — Select Profile and connect

1. Tap **Connect** at the top to open the connection dialog.
2. In the **Configured Devices** list, select a Profile (tap to select).
3. Select the transport link: **USB ECM Bridge** or **BLE-Eth Tunnel**.
4. Tap **Connect** to start the connection.

**Example (Connection dialog):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/30-connect-dialog.webp" alt="Connect dialog" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/31-connect-dialog-select.webp" alt="Connect dialog select" width="300" />
</div>

### Step 2 — Start using

After successful connection, you'll see:

- The top status changes to **Connected**, showing the target host and transport link.
- The terminal area displays SSH shell output.
- Tap the terminal area, the custom keyboard automatically pops up (portrait) or displays in split view (landscape).

**Example (Connection successful):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/32-connected-portrait.webp" alt="Connected portrait" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/33-connected-landscape.webp" alt="Connected landscape" width="300" />
</div>

---

## 4. Disconnecting

- **Manual disconnect**: Tap **Disconnect** at the top.
- **Automatic disconnect**: USB unplugged, Bluetooth disconnected, server timeout, etc.

After disconnection, the terminal displays an empty state. You can **Connect** again, and to quickly find and select other devices, tap the search icon in the top-right corner of the connection dialog.

**Example (Search icon + Disconnect):**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/34-search-icon.webp" alt="Search icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/35-disconnect.webp" alt="Disconnect" width="300" />
</div>

---

## 5. FAQ

**Q: Connection fails with "Authentication failed".**
A: Check the username and password in your Profile. If using SSH key, confirm the public key has been written to the target's `~/.ssh/authorized_keys`.

**Q: Connection timeout "Connection timeout".**
A: Check USB cable or Bluetooth connection. Try `ping 192.168.11.2` to confirm the target is reachable.

**Q: Connection refused "Connection refused".**
A: The target SSH service may not be started, or the port is not 22.

**Q: Keyboard input not responding.**
A: Confirm SSH is connected (top shows `Connected`). Try hiding and showing the keyboard again.

**Q: Keyboard too small in landscape.**
A: Pinch to zoom font size, or tap `Split` / `Full` to switch to full-screen mode.

---

## 6. Next Steps

After getting familiar with the basics, you can also:

- **Manage multiple Profiles**: Long-press a device card to view details or edit.
- **Use SSH keys**: Paste SSH Key for connection.
- **Switch to Agent mode**: Agent reuses Terminal's SSH connection to execute commands with natural language. See [Agent](11-agent.md).

---

## Next Steps

- **[← Voice Input](09-voice-input.md)** — Voice-to-keyboard transcription
- **[Agent →](11-agent.md)** — AI-driven task automation
