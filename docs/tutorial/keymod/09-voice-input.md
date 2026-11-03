---
title: "KeyMod Tutorial - Voice Input"
description: "Dictate text into the target PC with KeyMod voice input: system speech recognition, on-device Whisper AI, and multi-language support. Setup and tips in Openterface docs."
keywords: "KeyMod voice input, speech to text, Whisper, voice typing, hands-free keyboard"
---

# 9. Voice Input

Convert your speech into keystrokes sent to the target computer — hands-free typing and accessibility.

## How It Works

1. Tap the **microphone** button
2. Speak what you want to type
3. Your speech is converted to text
4. The text is sent as keystrokes to the target computer

## STT Engines

| Engine | How it works | Setup |
|---|---|---|
| **System Recognizer** | Uses Android's built-in speech recognition | Requires Google Voice Typing |
| **Whisper** | On-device or cloud AI transcription | Set API key in Settings > Voice Input |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Voice input — transcript area, targets, history, and mic. Configure API key in Settings > Voice Input.</em></p>
</div>

## Silence Detection & Auto-Pause

**iOS only:** the iOS app detects silence automatically and pauses recording when you stop speaking (2.0 second silence timeout by default), and the Voice Input view has an **Auto-Pause** toggle for it. The Android app has neither silence detection nor an Auto-Pause toggle — on Android you end recording yourself with the **Stop recording** button.

### Troubleshooting Silence Detection

| Symptom | Solution |
|---|---|
| **Recording continues when not speaking** | Check the Auto-Pause on Silence toggle. Reduce background noise. Speak clearly and close to the microphone. |
| **Recording stops immediately** | Speak more loudly or reduce the silence detection timeout. |

## Mini Toolbar (Android)

| Button | What it does |
|---|---|
| **Copy** | Copy transcribed text to clipboard |
| **Auto Send** | Automatically send text after transcription |
| **Auto Line Return** | Append an Enter keystroke after sending |
| **AI Refine** | Send transcribed text to AI for improvement |

## Voice Text Not Sending

Check the connection status. The "Send" button is disabled when not connected.

## Next Steps

- **[← Presentation](/tutorial/keymod/08-presentation/)** — Slide remote control
- **[Terminal →](/tutorial/keymod/10-terminal/)** — SSH connection and command line access
