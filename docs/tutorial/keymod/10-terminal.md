---
title: "KeyCmd Tutorial - Terminal"
description: "Use Terminal on your phone to access your target computer's SSH command line. Configure SSH profiles, manage keys, and establish connections through KeyCmd hardware."
keywords: "KeyCmd Terminal, SSH connection, phone SSH, remote command line, SSH key management"
---

# 10. Terminal

**Terminal** lets you control any target computer's SSH command line directly from your phone.

## What you'll learn

In this tutorial, you'll learn how to:

- Access Terminal and check KeyCmd connection
- Set up SSH profiles with password or SSH key authentication
- Manage multiple profiles with tags and search
- Establish SSH connections to target computers

## Open Terminal and Check Connection

### Enter Terminal Mode

Tap **Terminal** in the **side navigation bar**, or tap it on the **launch page**.

The following screenshots show both ways to access Terminal:

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/01-bottom-nav.webp" alt="Side navigation" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/02-launch-page.webp" alt="Launch page" width="300" />
</div>


### Check KeyCmd Connection

1. Connect your phone to KeyCmd via USB or Bluetooth. Ensure the connection is active. For detailed connection instructions, see [Getting Started → Connect to Your KeyMod Device](/tutorial/keymod/01-getting-started/#step-2-connect-to-your-keymod-device).

   **When connected, the top-right icon lights up. See below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/03-hardware-connected.webp" alt="Terminal screen with connection indicator lit in top-right corner" width="300" />
   </div>


## Set Up Your Profile

### Go to the Credentials page

Terminal saves your target computer's login details as **profiles**. Here's how to access the **Credentials** page:

**Method 1: From the settings icon**

1. In Terminal, tap the gear icon (**Settings**) in the top title bar.

2. On the Credentials page, tap **Add Profile**.

   **From Settings to Credentials page. See below:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/04-settings-icon.webp" alt="Settings icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/05-credentials-page.webp" alt="Credentials page" width="300" />
</div>



**Method 2: From the connection dialog**

1. Tap **Connect** in Terminal.

2. If you haven't set up a profile yet, tap **Add Profile**.

   **Connect dialog interface (no profiles yet). See below:**

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/06-connect-button.webp" alt="Connect button" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/terminal/07-connect-dialog-add.webp" alt="Connect dialog add" width="300" />
   </div>

   Tap **Add Profile** to open the configuration window. See below:

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/08-add-profile.webp" alt="Add Profile button" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/terminal/09-add-profile-interface.webp" alt="Add profile interface" width="300" />
   </div>
   
   

**Choose your authentication method:**

- **User Password** (default): Quick setup with username and password.
- **SSH Key** (more secure): Uses public/private key pairs.

### User Password Authentication

Fill in the following fields:

* **Profile Name** (choose any name)

* **Username**

* **Password**

* **Host** (default: `192.168.11.2`) and **Port** (default: `22`). Change only if needed.

  > **Note:** `192.168.11.2` is the Target USB default IP (all models). For KeyMod Plus, the Host USB default IP is `192.168.11.1` — change the Host field if connecting through that port.

  **Required fields and defaults. See below:**

  <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
    <img src="https://assets.openterface.com/images/keycmd/terminal/10-fill-credentials.webp" alt="Fill in credentials" width="300" />
    <img src="https://assets.openterface.com/images/keycmd/terminal/11-default-host-port.webp" alt="Default host and port" width="300" />
  </div>
  
  


### SSH Key Authentication

Fill in the following fields:

* **Profile Name** (choose any name)
* **Username**
* **SSH Key** (add a key using the steps below)
* **Host** and **Port** defaults are the same as above.

To add an SSH key:

1. In the configuration window, tap the dropdown next to the authentication field.

2. Select **SSH Key**.

   **Switching to SSH Key. See below:**

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/12-dropdown-icon.png" alt="Dropdown icon" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/terminal/13-switch-ssh-key.png" alt="Switch to SSH Key" width="300" />
   </div>
   
   
   


3. The Password field now shows "No key set". Tap the key icon on the right side of that row.

   **"No key set" and key icon location. See below:**

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/14-no-key-set.png" alt="No key set" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/terminal/15-key-icon.png" alt="Key icon" width="300" />
   </div>


4. After tapping the key icon, three options appear. Choose one based on your needs:

   - **Paste**: Paste your existing private key
   - **Import from file**: Import a key file from your device
   - **Generate**: Create a new key pair
   
   **Key options popup. See below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/16-key-options-popup.png" alt="Key options popup" width="300" />
   </div>

#### **Paste key** steps:

* Choosing **Paste** opens a text area in the configuration window where you can paste your private key. If your key has a passphrase, enter it in the password field below — otherwise leave it blank. 

* Then tap the **Save** button to confirm.

  **Paste interface. See below:**

  <div align="center" style="margin:8px 0">
    <img src="https://assets.openterface.com/images/keycmd/terminal/17-key-options-detail.png" alt="Key options detail" width="300" />
  </div>
  
  
  
  
> After successfully pasting your key, you can skip the Generate key steps below and [proceed directly to saving](#save-key).

#### **Generate key** steps:

* In the Generate Key popup, give it a custom name. On the right side of the Algorithm row, tap the dropdown to choose the algorithm based on your needs.

  **Generate Key settings. See below:**

  <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
    <img src="https://assets.openterface.com/images/keycmd/terminal/18-generate-key.png" alt="Generate Key" width="300" />
    <img src="https://assets.openterface.com/images/keycmd/terminal/19-generate-algorithm.png" alt="Algorithm selection" width="300" />
  </div>


* Key Passphrase is optional. After entering a passphrase, the Rounds row will appear. Enter the number, then tap **Generate** to create the key.

  > **Note:**
  >
  > - **Storage**: The passphrase is encrypted together with your SSH credentials and stored locally using AES-256-GCM encryption, with the master key protected by Android Keystore.
  > - **Usage**: Each time an SSH connection is made, the app uses the passphrase to decrypt your private key locally before authentication.
  > - **Rounds**: Controls how many times the passphrase is hashed using bcrypt-PBKDF during key generation. Higher rounds increase security against brute-force attacks but also increase the time needed to unlock the key.
  > - The passphrase never leaves your device — it is only used locally to decrypt your private key and is never transmitted to any server.

* Tap **Save** at the bottom right to switch to the Edit Key interface.

  **Generated key. See below:**

  <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
    <img src="https://assets.openterface.com/images/keycmd/terminal/20-generate-result.png" alt="Generate result" width="300" />
    <img src="https://assets.openterface.com/images/keycmd/terminal/21-edit-key-interface.png" alt="Edit key interface" width="300" />
  </div>


> The generated key pair includes a public key that must be placed on your target computer's `~/.ssh/authorized_keys` file to enable SSH authentication.

<a id="save-key"></a>
5. Keys added via paste, import, or generation need to be saved. Tap the **Save** button to confirm. At this point, **Edit key** and **Delete** options appear below the key.

   **Save and edit options. See below:**

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/22-edit-save.png" alt="Edit and save" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/terminal/23-edit-key-options.png" alt="Edit key options" width="300" />
   </div>
   
   
   
   * Tap **Edit key** to view the Edit Key interface, where you can see detailed key information. Tap the three dots on the right side of the Key info row or Public Key row to expand more details, and you can also directly copy and paste keys.
   
   * Tap **Delete** to open a confirmation dialog. Tap **Delete** again to confirm and remove the key.
   
     **Edit and delete. See below:**
   
     <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
       <img src="https://assets.openterface.com/images/keycmd/terminal/24-edit-interface.webp" alt="Edit interface" width="300" />
       <img src="https://assets.openterface.com/images/keycmd/terminal/25-delete-option.webp" alt="Delete option" width="300" />
     </div>
     
     

## Manage Your Profiles

### Search, edit, and delete profiles

1. On the Credentials page, use the search bar to find profiles quickly by name, tags, or other details. Each profile row has an **edit** icon (pen) and a **delete** icon (bin) on the right. Tap the pen icon to open the profile edit screen. Tap the bin icon to open a confirmation dialog — confirm to delete the profile.

   **The interface and operation locations are shown below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/36-manage-profiles.webp" alt="Manage profiles interface" width="300" />
   </div>



### **Tags** — organize your profiles:

1. On the Edit interface, tap the icon on the right side of the **Tags** row to enter the **Select Tags** interface.

   **The Tags icon location is shown below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/37-tags-icon.webp" alt="Tags icon location" width="300" />
   </div>
   
   
   * **All tags** shows all tags you've added. Tags owned by the current device will be highlighted. You can quickly add or remove tags by tapping existing tags.
   
   * **Selected tags for this profile** shows the tags currently assigned to the profile. You can view which tags belong to the current profile and manage them from this section.
   
     **Select Tags operation demonstration, see below:**
   
     <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
       <img src="https://assets.openterface.com/images/keycmd/terminal/26-tags.webp" alt="Tags" width="300" />
       <img src="https://assets.openterface.com/images/keycmd/terminal/27-tags-detail.webp" alt="Tags detail" width="300" />
     </div>
     
     


2. After editing, tap **OK**, then tap **Save** on the Edit interface. The current profile will have the corresponding tags added. Return to the **Credentials** page.

   **The tag has been successfully added to the profile. See below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/28-tag-added.webp" alt="Tag added" width="300" />
   </div>

3. On the Credentials page, use the **search bar** at the top to quickly find profiles by name, tags, or other info.

   **Search results display. See below:**

   <div align="center" style="margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/terminal/29-search.webp" alt="Search" width="300" />
   </div>


4. **Notes** can be used to add detailed notes for profiles (optional).

## Establishing Connection

### Select Profile and connect

1. Tap **Connect** at the top to open the connection dialog.
2. Select the transport link: **USB ECM Bridge** or **BLE-Eth Tunnel**.
3. In the **Configured Profile** list, select a Profile (tap to select).
4. Tap **Connect** in the bottom-right corner to start the connection.

**The connection dialog. See below:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/30-connect-dialog.webp" alt="Connect dialog" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/31-connect-dialog-select.webp" alt="Connect dialog select" width="300" />
</div>

To quickly find and select a profile, tap the **search icon** in the top-right corner of the connection dialog.

**Search icon in connection dialog. See below:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/34-search-icon.webp" alt="Search icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/38-long-press-details.webp" alt="Long press to view details" width="300" />
</div>

> **Tip:** Long-press a profile in the list to view its detailed information.

### Start using

After successful connection, you'll see:

- The top status changes to **Connected**, showing the target host and transport link.
- The terminal area displays SSH shell output.
- Tap the terminal area, the custom keyboard automatically pops up (portrait) or displays in split view (landscape).

**Connection successful. See below:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/32-connected-portrait.webp" alt="Connected portrait" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/terminal/33-connected-landscape.webp" alt="Connected landscape" width="300" />
</div>

---

## Disconnecting

- **Manual disconnect**: Tap **Disconnect** at the top.
- **Automatic disconnect**: USB unplugged, Bluetooth disconnected, server timeout, etc.

After disconnection, the terminal displays an empty state. You can **Connect** again to establish a new connection.

**Disconnect. See below:**

<div align="center" style="margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/terminal/35-disconnect.webp" alt="Disconnect" width="300" />
</div>

---

## FAQ

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

## Next Steps

- **[← Voice Input](/tutorial/keymod/09-voice-input/)** — Voice-to-keyboard transcription
- **[Agent →](/tutorial/keymod/11-agent/)** — AI-driven task automation
