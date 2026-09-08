---
title: "KeyMod Tutorial - Troubleshooting"
description: "KeyMod Tutorial - Troubleshooting: Common problems and solutions for KeyCmd on Android with KeyMod hardware."
keywords: "KeyMod troubleshooting, KeyMod not connecting, KeyMod Bluetooth issues, KeyMod keys not working"
---

# 13. Troubleshooting

Common problems and solutions for KeyCmd on Android.

## Connection Issues

### Not Connected

| Symptom | Solution |
|---|---|
| **"Not Connected"** indicator | Check cable connection; try re-plugging. For BLE, toggle Bluetooth off/on and re-pair. |
| **USB permission denied** | Go to Android Settings → Apps → KeyCmd → Permissions → enable USB. Re-plug the cable. |
| **Bluetooth won't pair** | Toggle Bluetooth off/on. Forget the device in Bluetooth settings and re-pair. Make sure the KeyMod device is in pairing mode. |
| **Connection drops frequently** | Check the RSSI value below the BLE button in the app. Below -75 dBm indicates weak signal — move closer. Remove physical obstructions. |

### Connection State Indicators

| Indicator | Meaning |
|---|---|
| **Connected** | Green icon — ready to send input |
| **Connecting** | Amber icon — connection in progress |
| **Disconnected** | Gray icon — no active connection |
| **Signal bars** | BLE signal strength or USB active status |

### Auto-Connect

Enable **"Auto-connect on startup"** in the connection dialog. KeyCmd remembers your last connection type (USB or BLE) and last paired BLE device.

### USB Attach/Detach Detection

KeyCmd monitors Android's USB attach/detach broadcast events. If you unplug the USB cable, the connection status updates immediately. Re-plugging triggers a reconnection attempt if auto-connect is enabled.

---

## Keyboard Issues

### Keys Not Registering

| Symptom | Solution |
|---|---|
| **Keys not sending** | Verify the connection shows "Connected" (green). Try switching modes and back. Check that the target computer recognizes the KeyMod device as a keyboard. |
| **Macro doesn't execute** | Verify you're connected. Check that the macro data contains valid tokens (no typos in token names). |
| **Wrong characters appearing** | Check the **Target OS** setting — mismatched OS can cause key mapping issues. Verify the target computer's keyboard layout (QWERTY vs AZERTY). |

### Unicode Characters Not Working

Non-ASCII characters (Chinese, Japanese, emoji) require OS-specific input methods:

| OS | Method |
|---|---|
| **Windows** | Alt+NumPad hexadecimal Unicode input |
| **Linux** | Ctrl+Shift+U followed by hex code |
| **macOS** | Option+hex input |

If Unicode characters appear incorrectly, verify the **Target OS** is set correctly.

---

## TouchPad Issues

| Symptom | Solution |
|---|---|
| **Touchpad not responding** | Check that Haptic Feedback is enabled in Settings. Try the TouchPad Help overlay (?) to verify gesture support. |
| **Scroll not working** | Check touchpad scroll sensitivity in Settings → General. |

---

## Voice Input Issues

### Speech Recognizer Unavailable

Install Google Voice Typing from Play Store. On Android 11+, KeyCmd needs the queries permission (included in the APK).

### Silence Detection Not Working

| Symptom | Solution |
|---|---|
| **Recording continues when not speaking** | Check the Auto-Pause on Silence toggle. Reduce background noise. Speak clearly and close to the microphone. |
| **Recording stops immediately** | Speak more loudly or reduce the silence detection timeout. |

### Voice Text Not Sending

Check the connection status. The "Send" button is disabled when not connected.

---

## AI Issues

### API Key Not Working

| Symptom | Solution |
|---|---|
| **"API key not configured"** | Verify the API key is correct — check for extra spaces or typos. Check the API Base URL — must include the full path (e.g., `https://api.openai.com/v1`). Verify the model name exists on the provider. For local providers (Ollama), ensure the API Key Optional flag is set. |

### Text Refinement Slow

Check your network connection. Try a faster model — smaller models (gpt-3.5-turbo, llama3-8b) respond faster. Use a local provider (Ollama) to eliminate network latency. Check the AI Request History for error messages.

---

## Need More Help?

If you're still experiencing issues:

- **Bug reports:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Community:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface documentation:** [openterface.com](https://openterface.com)
