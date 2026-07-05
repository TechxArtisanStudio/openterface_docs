---
title: "FAQs for KeyCmd"
description: "KeyCmd app FAQ — Keyboard & Mouse Basic vs Pro, HID output, macOS host quirks, modifiers, gamepad mode, and Bluetooth connectivity with KeyMod hardware."
keywords: KeyCmd, Openterface, keyboard mouse app, gamepad mode, Bluetooth, HID, Android, KeyMod
---

# FAQs for KeyCmd

Welcome to the FAQ for **KeyCmd** — the phone-as-keyboard app for KeyMod, Mini-KVM, and KVM-GO. If you don't find what you need, **email us at [info@openterface.com](mailto:info@openterface.com)** or **join our community** on [Discord](/discord) or [Reddit](/reddit).

⚠️ *KeyCmd for Android is in active beta. Answers may change as firmware and app builds evolve.*

---

## :material-clipboard-list: Quick Navigation

- [General](#general)
- [Keyboard & HID](#keyboard--hid)
- [macOS host behavior](#macos-host-behavior)
- [Modifiers & key hold](#modifiers--key-hold)
- [Gamepad mode](#gamepad-mode)
- [Bluetooth & connectivity](#bluetooth--connectivity)
- [Gamepad preset glossary](#gamepad-preset-glossary)

---

## General

#### :material-chat-question:{ .faq } What is the difference between “Keyboard & Mouse” and “Keyboard & Mouse Pro”? {: #km-basic-vs-pro }

**Design principle:** **Basic** stays as close as possible to a physical keyboard, touchpad, and numpad—no compose buffers or strip rows. **Pro** holds Compose & Send, strip shortcuts, Saved texts, and Shortcut Hub workflows.

**Keyboard & Mouse** is the **Basic** tier: full-screen **keyboard**, **numpad**, and **touchpad** sub-modes only, plus a **Setup** gear icon for KM Basic preferences. The usual app header is **hidden** while you are in Basic; those actions live on the keyboard’s top row instead. **No Compose & Send** in Basic.

**Keyboard & Mouse Pro** is the **advanced** composite mode: strip rows, split options, **Compose & Send** (**IME** sub-mode), and **Saved texts**. Open **Setup** from the app header (between target OS and connection) to edit strip layouts. **Terminal** is a separate KeyCmd mode (Preview)—not part of Basic or Pro.

---

## Keyboard & HID

#### :material-chat-question:{ .faq } Does KeyCmd send “Unicode” or special characters directly over USB? {: #unicode-over-usb }

**Not as a dedicated Unicode pipe.** KeyCmd works like a **standard USB keyboard**: it sends **key presses and modifier keys** (Shift, Ctrl, Alt, Win/Command, and so on). The **computer you plug into** turns those into letters and symbols using your **keyboard layout** and software.

#### :material-chat-question:{ .faq } Why don’t some strip keys type the same symbol that is shown on the key? {: #strip-labels-vs-output }

Strip labels show what you chose for the cap, but the **host layout and app** decide what actually appears unless you bound a **plain HID key** that matches that character on your layout.

**Rows 2–3** strip layouts (**Default**, **Mine**, and custom layouts) let you assign **single-key HID** shortcuts per slot—that is the most reliable path.

#### :material-chat-question:{ .faq } What usually works on “any” computer? {: #what-usually-works }

You can count on KeyCmd behaving like a **real keyboard** for:

- Letters, digits, and common punctuation **as your host layout maps them**
- **Keyboard shortcuts** (copy, paste, save, etc.—depending on OS and app)
- **Function keys**, arrows, Tab, Enter, Escape, Space, and other **standard keys**

#### :material-chat-question:{ .faq } What are Rows 2–3 strip layouts in the app? {: #rows-2-3-strips }

Built-in **Default** and **Mine** start from the factory strip layout. From **Keyboard & Mouse Pro**, open **Setup** to create additional layouts, import/export JSON, and choose the active Rows 2–3 strip profile from there or from **Shortcut Hub**.

---

## macOS host behavior

#### :material-chat-question:{ .faq } On macOS, why does Print Screen show as F13 in a key tester—and Scr Lk / Pause change screen brightness? {: #macos-prtsc-f13 }

KeyCmd sends **normal USB keyboard HID** usages. **macOS** applies its own rules for many “PC legacy” keys:

- **Print Screen** is often surfaced as **F13** (Apple extended layouts expose F13–F16).
- **Scroll Lock** and **Pause / Break** are commonly mapped to **F14** and **F15**, which may also control **display brightness** with default keyboard settings.

Changing **Target OS** in the KeyCmd header updates **labels and modifier icons** on the phone; it does **not** change how the **Mac** interprets incoming HID.

Adjust **System Settings → Keyboard** (for example **“Use F1, F2, etc. keys as standard function keys”**) and **Keyboard Shortcuts** if you need different behavior.

#### :material-chat-question:{ .faq } On macOS, why does F11 show the desktop (or other F-keys do volume, Mission Control, etc.)? {: #macos-f11-desktop }

**That is normal macOS shortcut behavior.** KeyCmd sends a standard **F11** (or **F1**, **F2**, …) keyboard usage. Whether the Mac treats it as a **function key for apps** or as a **system shortcut** is decided by **macOS keyboard settings**, not by the in-app **Target OS** toggle.

---

## Modifiers & key hold

#### :material-chat-question:{ .faq } What is the difference between sticky modifiers and long-press chord? {: #sticky-vs-chord }

The same choices apply to **Keyboard & Mouse (Basic)** and to **Ctrl / Shift / Alt / Win** on **Keyboard & Mouse Pro**.

**Sticky modifiers:** Tap once to **latch** a modifier on; tap again to turn off. **Press and hold ~1 second**, then **swipe up** on the lock hint, for a **host-side** swipe lock.

**Momentary and long-press chord (default):** A **short tap** sends that modifier **once**. **Long-press** and keep your finger on the modifier, then tap other keys to chord. **Lift your finger** to stop.

#### :material-chat-question:{ .faq } What does “Hold modifier on target while chording” do? {: #hold-modifier-chording }

When **Momentary and long-press chord** is selected, this switch is **on** by default. When **on**, after you long-press a modifier, KeyCmd sends a **real modifier-down** to the connected device and re-sends the hold after each chorded key—useful for several shifted symbols in a row (for example **!** then **@**).

When **off**, turn it off if a specific computer misbehaves with sustained modifier-down over USB.

#### :material-chat-question:{ .faq } On the Basic full keyboard, holding a key types the same character many times. Can it act like one long press instead? {: #basic-key-hold }

**Yes.** In **Keyboard & Mouse (Basic)** setup, pick **Hold key down on the target** instead of **Repeat key presses while held (default)**.

| Option | What happens on the connected computer |
|--------|----------------------------------------|
| **Repeat (default)** | Many separate key taps while your finger stays down—like auto-repeat typing. |
| **Hold** | One key-down when you press and **release** when you lift—what games or movement controls often expect. |

This applies to the **full keyboard** in Basic only, not Pro or the shortcut strip.

#### :material-chat-question:{ .faq } Do Basic modifier settings affect Pro mode or the shortcut strip? {: #basic-modifiers-affect-pro }

**Yes, for modifier keys.** Sticky vs chord and **Hold modifier on target while chording** share the **same app preferences** for Basic and Pro modifier keys. Swipe-locked modifiers are **cleared** when you leave Pro or when the HID connection drops.

---

## Gamepad mode

#### :material-chat-question:{ .faq } Can I move the touchpad and use the stick (WASD) at the same time? {: #gamepad-touchpad-and-stick }

**Yes.** Use **one finger on the touchpad** for the cursor and **another finger on the stick** (or face buttons). The layout treats those as separate pointers.

#### :material-chat-question:{ .faq } Why do some gamepad layouts look crowded or “messy” in screenshots? {: #gamepad-custom-layouts }

**That is expected.** Gamepad Mode is **fully customizable**—positions, sizes, modules, and bindings. A busy layout may match **one player’s muscle memory**; the point is software-defined controls you reshape for your workflow.

#### :material-chat-question:{ .faq } What are hold-and-lock, turbo, and macros in Gamepad Mode? {: #gamepad-hold-turbo-macros }

| Feature | Typical use |
|--------|----------------|
| **Hold-and-lock** | Keep an action logically **held** on the target (for example **hold left mouse button**) without keeping your finger on the on-screen control. |
| **Turbo / rapid-fire** | A button **fires automatically** on a timer while active. |
| **Macros** | **Chain several actions** in order; this area is still being **polished** over time. |

These are separate from Basic **“hold key down on the target”**, which applies to the Basic full keyboard only.

#### :material-chat-question:{ .faq } If I use a Bluetooth game controller paired to my phone, does the target PC see a real gamepad (Xbox / PlayStation style)? {: #bt-controller-native-gamepad }

**Not with current KeyCmd hardware.** Today, KeyCmd outputs **standard keyboard and mouse HID** to the host. The app can **map** sticks and buttons to **keys and mouse actions**, so the **target sees a keyboard and mouse**, not native **gamepad HID**.

**Native gamepad HID to the host** may be possible in the future but would need **firmware-level** work.

---

## Bluetooth & connectivity

#### :material-chat-question:{ .faq } Where does Bluetooth actually connect? Is KeyCmd a Bluetooth receiver for my PC? {: #bluetooth-topology }

**No.** The usual **Bluetooth** link for KeyCmd is **between your phone and the KeyCmd hardware**. KeyCmd does **not** act as a **Bluetooth dongle** for the **target computer** you plug into over USB.

Think of KeyCmd as a **portable keyboard and mouse** to the host: **hardware control** over USB, combined with **software flexibility** on the phone (layouts, mapping, and presets).

#### :material-chat-question:{ .faq } Can I pair a Bluetooth keyboard (or controller) only to my phone and still control the target through KeyCmd? {: #bt-keyboard-via-phone }

**In principle, yes** at the **software** level: the app can treat **different input sources** on the phone and translate them into outgoing KeyCmd traffic.

Important caveats:

- There is **no generic “raw Bluetooth HID pipe”** through KeyCmd to the PC.
- You still need a **working phone ↔ KeyCmd** session for the bridge to run.

#### :material-chat-question:{ .faq } My desktop has no Bluetooth—can I use KeyCmd plus my phone as a kind of “relay”? {: #no-bt-on-desktop }

**Yes as a workflow idea, with limits.** Plug KeyCmd into the PC over **USB**, connect **phone ↔ KeyCmd** over Bluetooth, and drive everything from the **KeyCmd app**—**without** pairing peripherals directly to the PC.

#### :material-chat-question:{ .faq } Can Android talk to KeyCmd and another Bluetooth device at the same time? {: #android-multiple-bt }

**Often yes in practice**—many Android devices can keep **more than one Bluetooth connection** alive. Whether **your** phone can reliably use **KeyCmd plus** a given **keyboard or controller** depends on **Android version, OEM stack, and the peripheral**.

---

## Gamepad preset glossary

#### :material-chat-question:{ .faq } What do common Gamepad preset module names mean? {: #gamepad-preset-glossary }

- **D-pad** — preset type **DPAD** (left slot only); variants include cross, **split** (four separate hit targets), disc, pivot, floating, clicky.
- **Analog sticks** — **STICK_MOUSE** or **STICK_KEY** on **`stick_left`** and **`stick_right`**.
- **Face buttons** — **BUTTON** modules; templates can snap common face-cluster shapes.
- **Shoulders / triggers** — **SHOULDER** / **TRIGGER** modules with **hidKey**.
- **Gyro** — **layout.gyroEnabled**: tilt drives small mouse deltas while the gamepad screen is active and connected.

For hands-on setup, see the [KeyMod tutorial](/tutorial/keymod/) and [KeyCmd app hub](/app/keycmd/).

---

## See also

- [KeyCmd app downloads](/app/keycmd/) — Android beta APK and roadmap
- [KeyMod product FAQ](/products/keymod/faq/) — Hardware and pre-launch questions
- [KeyMod getting started](/tutorial/keymod/01-getting-started/) — First session with KeyCmd
