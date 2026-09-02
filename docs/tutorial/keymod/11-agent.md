---
title: "KeyMod Tutorial - Agent"
description: "Use the KeyCmd Agent to describe tasks in natural language and have them executed automatically on your target device via SSH or BLE keyboard."
keywords: "KeyCmd Agent, AI agent, natural language commands, SSH automation, BLE keyboard automation"
---

# 11. Agent

The **Agent** turns what you want to do into a set of steps that run automatically on your target device — either over SSH (Terminal mode) or by typing on a wireless keyboard (HID mode).

You describe the task in plain language. The Agent plans the steps. You approve. It executes.

## Two Execution Modes

| Mode | How | Captures output? |
|---|---|---|
| **Terminal mode** | SSH to remote computer | Yes |
| **HID mode** | BLE wireless keyboard | No — types into active window |

---

## Before You Start

> Configuration flow: Enable AI feature → Select provider → Configure API Key → Test connection → Return to Agent

Three things must be configured before the Agent can work:

### AI Provider Configuration

1. Open the Agent screen. If you see the **"Connect AI"** gate, tap the button below it (Use my API key) to go to the AI Settings screen.

   **Steps to enable AI features. See below:**

   <div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
     <img src="https://assets.openterface.com/images/keycmd/agent/01-connect-ai-gate.webp" alt="Connect AI gate" width="300" />
     <img src="https://assets.openterface.com/images/keycmd/agent/02-enable-ai-features.webp" alt="Enable AI features" width="300" />
   </div>


AI features are disabled by default. Once enabled, the AI Settings screen opens automatically, where you can configure your preferred provider.

> **Note:** If you are using the app for the first time, the preset providers will not have an API Key configured. You need to enter your API Key to use them.

You have two options:

**Option 1: Use a preset provider**
Choose from the built-in providers (OpenAI, Anthropic, Google, DeepSeek, etc.), then enter your API Key, Endpoint (URL), and Model Name.

**Option 2: Add a third-party provider**
If your preferred provider is not in the preset list, you can add a custom third-party provider.

#### **Configuring a Provider**

1. Scroll to the **AI Provider Setting** section and tap the **dropdown** icon in the upper right to open Select AI Provider.

   **See the screenshots below for AI Provider Setting and Select AI Provider:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/03-ai-provider-setting.webp" alt="AI Provider Setting" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/04-select-ai-provider.webp" alt="Select AI Provider" width="300" />
</div>

> Local providers (Ollama, Local Qwen) are supported — the API key field can be left empty for them.

#### **Adding a Third-Party Provider**

If you need to add a new provider:

1. Tap the green **Add New Provider** button
2. Confirm in the popup window, tap **Add Provider** again

**See the screenshots below for adding a new provider and confirming the action:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/05-add-new-provider.webp" alt="Add new provider" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/06-confirm-add-provider.webp" alt="Confirm add" width="300" />
</div>

How to configure a new Provider:

1. Fill in three basic options: Provider name (customizable), API Base URL, and Model Name.
2. Choose whether to enable API Key Optional (based on provider requirements).

**See the screenshots below for filling in the basic provider information and API Key Optional setting:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/07-provider-basic-info.webp" alt="Provider basic info" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/08-api-key-optional.webp" alt="API Key Optional setting" width="300" />
</div>

> **Tip:** API Key Optional is useful for local AI deployments (such as Ollama or Local Qwen) or when using AI services on your local network. In these cases, you may not need to fill in an API Key, as the provider is accessible without authentication.

After configuration, set up the API Key:

1. After selecting a provider, scroll down to the API Key Management section, tap the update API Key button to open the configuration.
2. Paste the API Key in the input field, tap **Save key** to save.
3. You can tap Clear Key later to remove the key if needed.

**See the screenshots below for updating and saving the API Key:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/09-update-api-key.webp" alt="Update API Key" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/10-save-api-key.webp" alt="Save API Key" width="300" />
</div>

> **Note:** Your API key is stored locally on your device and encrypted at rest using AES256-GCM. When using the Agent, your API key is sent only to the AI provider you selected as an authentication header, along with your conversation content. Your key is never shared with any other third parties.

After everything is configured, you can optionally:

1. Tap the **Test connection** button to test if the AI configuration connects successfully. A green notification will appear on success.
2. Return to the Agent screen, which will automatically switch to conversation mode.

**See the screenshots below for testing the connection and viewing the success notification:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/11-test-connection.webp" alt="Test connection" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/12-test-success.webp" alt="Connection successful" width="300" />
</div>


> If the test fails, please check: Is the API Key correct? Is the Endpoint URL complete? Is the network connection normal?

### Target Setting Configuration

Tap the **target icon** in the top bar and pick one:

**See the screenshots below for the target icon and target selection screen:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/13-target-icon.webp" alt="Target icon" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/14-target-selection.webp" alt="Target selection" width="300" />
</div>

| Pick this | Resulting mode | What it does |
|---|---|---|
| Both SSH Profile and target OS | **Terminal mode** | The Agent generates commands matching the remote system, executes them via SSH, and captures output. |
| Target OS only (macOS / Windows / Linux) | **HID mode** | Types keystrokes into the target's active window via BLE keyboard. Output is **not** captured. |

> Terminal Profile configuration corresponds to the Terminal SSH connection settings — see [Terminal](/tutorial/keymod/10-terminal/) for details.
>
> Once you select a target OS, the app automatically injects this information into the system prompt. This helps the Agent generate commands that are correct for your operating system (e.g., macOS uses `brew` and `osascript`, Linux uses `apt` and `systemctl`, Windows uses `cmd` and `PowerShell`).

### Agent Setting Configuration

Tap the **settings icon** in the top bar and configure each item:

1. **AI Provider** — configures the AI settings used by the current Agent.
2. **Execution Limits** — configures plan generation limits and maximum retry attempts for generation/execution failures.
3. **System Prompts** — allows customization of system prompts for Terminal mode and HID mode (advanced users).

**See the screenshots below for Agent Settings and settings detail:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/17-agent-settings.webp" alt="Agent Settings" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/18-settings-detail.webp" alt="Settings detail" width="300" />
</div>

---

## Your First Task in 3 Steps

### Step 1 — Describe what you want

Type a request in the input box and tap **Send**.

**The screenshot below shows the Agent interface where you can type your request:**

<div align="center" style="margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/15-input-request.webp" alt="Input request" width="300" />
</div>

Example prompts:

- `"Check the current status of the computer"`
- `"Show me the top 10 CPU-consuming processes"`
- `"Open a browser and go to example.com"` (HID mode)
- `"Save the current file and switch to the next tab"` (HID mode)

While the Agent is thinking, you'll see "Thinking..." — it may take a few seconds.

### Step 2 — Review the plan

When the plan is ready, the Agent shows a card listing every step. You have three options:

- **Approve & Run** — run the plan as-is.
- **Edit** — modify, add, or remove steps before running.
- **Cancel** — discard the plan.

**See the screenshots below for the plan card and HID marker:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/19-plan-hid-card.webp" alt="Plan card" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/20-plan-hid-mark.webp" alt="HID mark" width="300" />
</div>

> **Nothing runs until you approve.** The Agent will never execute a command on its own.
>
> When generating HID commands, the plan card will have an HID marker.

### Step 3 — Watch it execute

Each step appears as a card with live output (in Terminal mode) or a status line (in HID mode). When everything finishes, the Agent posts a short summary. After completion, you can type another request right away.

**See the screenshots below for the execution process and Agent summary:**

<div align="center" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin:8px 0">
  <img src="https://assets.openterface.com/images/keycmd/agent/21-execution-process.webp" alt="Execution process" width="300" />
  <img src="https://assets.openterface.com/images/keycmd/agent/22-agent-summary.webp" alt="Agent summary" width="300" />
</div>

> The live-running terminal will show the current command execution status. Tap the hourglass icon to abort the current Agent execution.

---

## Example Prompts

### Terminal mode (SSH)

| You type | What the Agent does |
|---|---|
| `"Find the largest files in my home directory"` | Generates a plan to search for large files and summarize the results |
| `"Restart the nginx service"` | Plans commands to restart the nginx service (subject to approval) |
| `"Show me what's listening on port 80"` | Creates a plan to check port connections and filter results |
| `"Clean up old log files older than 7 days"` | Plans a cleanup operation (review the steps carefully before approving!) |

### HID mode (BLE keyboard)

| You type | What the Agent does |
|---|---|
| `"Open the terminal"` | Sends the OS-specific shortcut (Cmd+Space on macOS, Ctrl+Alt+T on Linux, Win+R `cmd` on Windows) |
| `"Save the file and close the tab"` | Sends Cmd+S / Ctrl+S, then Cmd+W / Ctrl+W |
| `"Switch to the second desktop"` | Sends the OS-specific virtual-desktop shortcut |

---

## Safety

The Agent is designed to be safe by default:

- **Approval gate.** Every plan is shown to you before any command runs.
- **Dangerous commands are blocked.** Commands like `rm -rf /`, `mkfs`, fork bombs, and other known-destructive patterns are refused outright — even if the backend AI suggests them.
- **OS mismatch is caught.** If the Agent generates a Linux command for a Windows target, it is flagged and blocked before execution.
- **SSH credentials are masked.** Your username, host, and port are never sent to third-party AI providers.
- **You can cancel anytime.** Tap the hourglass button in the input bar to stop a running plan.

> Commands marked as *dangerous* (e.g. `rm`, `shutdown`) are not auto-blocked, but you will see them clearly in the plan card before approving.

---

## Common Questions

**Q: The Agent says "No target configured".**
A: Tap the target icon in the top bar and select either an SSH profile or a target OS.

**Q: The plan keeps generating wrong commands for my OS.**
A: Open the target settings and explicitly pick your OS. The Agent will prefer this over auto-detection.

**Q: The Agent returned an error with a "Retry" button.**
A: Tap **Retry** to regenerate the plan. If it fails repeatedly, check the error message for specific guidance, and verify your AI provider's API key and quota.

**Q: A step shows "Retried" in grey.**
A: The step originally failed, and the Agent already regenerated an alternative command that succeeded. No action needed.

**Q: In HID mode, output isn't captured.**
A: That's by design — HID mode types keystrokes into the active window. Use Terminal mode (SSH) when you need to read command output.

**Q: Can I use a local model instead of a cloud API?**
A: Yes. Simply follow the third-party provider configuration process outlined above to add your local model.

---

## Next Steps

- **[← Terminal](/tutorial/keymod/10-terminal/)** — SSH connection and command line access
- **[Settings →](/tutorial/keymod/12-settings/)** — App configuration and preferences
