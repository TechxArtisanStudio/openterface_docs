---
title: "KVM教程 04 — 故障排除"
description: KVM教程 04 — 故障排除 — kvm / 04 troubleshooting (Openterface KVM-over-USB). 官方 Openterface 文檔：安裝步驟、常見問題與故障排查，面向 IT 與開發者。
---


# KVM教程 04 — 故障排除

Openterface KVM 設備的常見問題與解決方案。

---

## 設備未檢測到

### 症狀
- 設備菜單中顯示「No devices found」
- 鍵盤和鼠標指示燈顯示橙色或灰色
- 串口顯示「N/A」

### 診斷

**Linux：**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
預期：`534d:2109`（HDMI 採集）以及 `1a86:7523` 或 `1a86:fe0c`（串口）。

**macOS：** Apple 菜單 > 關於本機 > 系統報告 > 硬件 > USB — 查找 Openterface。

**Windows：** 設備管理器 >「通用串行總線設備」和「端口 (COM 和 LPT)」— CH340 應顯示為「USB-SERIAL CH340 (COMx)」。

### 解決方案

| 問題 | 修復 |
|---------|-----|
| lsusb/系統報告中無設備 | 嘗試其他 USB 線纜/端口。需要 USB 2.0+ |
| 設備出現但無節點 | 檢查 udev 規則（Linux）或重新安裝驅動（Windows） |
| 權限被拒絕 | 將用户加入 `dialout` 和 `video` 組（Linux） |
| 檢測到後消失 | `brltty` 佔用串口（Linux）— 見下文 |

---

## BrlTTY 衝突（Linux） {#brltty-conflict-linux}

**Linux 上鍵盤/鼠標失效的最常見原因。**

`brltty`（盲文終端）服務會佔用 USB 串口設備，包括 CH9329/CH32V208 芯片。

### 修復
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## 無視頻 / 黑屏

### 步驟

1. **確認 HDMI 線纜**兩端連接牢固
2. **檢查目標設備**是否輸出 HDMI（用普通顯示器測試）
3. **嘗試其他 HDMI 線纜**
4. **重新連接設備** — 應用會處理熱插拔事件
5. **檢查視頻芯片檢測：** 支持：MS2109、MS2109S、MS2130S

### 後端選擇（Qt）

若某後端顯示黑屏，可通過 **Preferences > Video > Media Backend** 嘗試其他後端：
- **FFmpeg** — 最可靠（推薦）
- **GStreamer** — 僅 Linux
- **Qt Multimedia** — Windows 備用

### GStreamer 問題（Linux）

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
嘗試其他 sink：
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID 不匹配

若目標無法識別 EDID，可能不會輸出兼容分辨率。嘗試更改目標輸出分辨率，或通過應用的顯示設置編輯 EDID。

---

## 鍵盤/鼠標無響應

### 步驟

1. **檢查 USB 切換開關** — 確保設為 **Target**，而非 Host
2. **確認串口狀態** — 應顯示端口名，而非「N/A」
3. **嘗試切換波特率** — 9600 或 115200
4. **檢查控制芯片** — 支持：CH9329、CH32V208
5. **確認 CTS 監控** — 應用會監控 Clear-To-Send 線路以獲取 HID 事件

### 鼠標相關問題

- **macOS 相對模式：** 需要輔助功能權限。檢查 **System Settings > Privacy & Security > Accessibility**
- **絕對模式：** 確認寬高比與目標顯示一致
- **鼠標延遲：** 嘗試更高性能預設或提高波特率
- **串口衝突（Linux）：** 關閉佔用端口的其他應用：`sudo lsof /dev/ttyUSB0`

---

## 音頻無法播放

### 步驟

1. 通過音頻圖標 > Enable Audio **啓用音頻**
2. **檢查麥克風權限** — System Settings > Privacy & Security > Microphone（macOS）
3. **選擇正確的輸入設備** —「OpenterfaceA」或採集設備名稱
4. **選擇正確的輸出設備** — 您的揚聲器或耳機
5. **檢查目標的 HDMI 音頻輸出** — 目標是否配置為通過 HDMI 發送音頻？

---

## USB 串口驅動問題

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

如需要，從 [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos) 安裝 WCH CH34x 驅動。在 **System Settings > General > Login Items & Extensions > Driver Extensions** 中啓用。

### Windows

若串口芯片未出現在設備管理器中，請安裝 CH340/CH341 驅動。安裝程序通常已捆綁；便攜版需單獨下載。

### Linux

CH340 驅動（`ch341` 模塊）已內置在內核中：
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## 固件更新失敗

### USB 穩定性

- 刷寫過程中請勿拔線
- 請勿讓主機進入休眠
- 使用直連 USB 端口（避免集線器）

### 恢復

1. 斷電重啓：拔掉 USB，等待 10 秒，重新連接
2. 重新進入 ISP 模式（部分設備：上電時按住按鈕）
3. 使用 Serial Reset Tool 重新刷寫引導程序
4. 若變磚請聯繫支持

---

## 性能問題

### CPU 佔用高

1. **啓用硬件加速** — Preferences > Video > Hardware Acceleration（VAAPI、V4L2-M2M）
2. **降低分辨率** — 720p 比 1080p 顯著降低 CPU 佔用
3. **降低幀率** — 15fps 可將解碼負載減半
4. **切換後端** — 帶 HW 加速的 FFmpeg 通常比 GStreamer 佔用更少 CPU

### 丟幀

查看狀態欄中的 FPS 計數器。若實際 FPS 低於目標，説明管道存在瓶頸。在 FFmpeg 幀處理器中啓用丟幀以優先保證流暢播放。

---

## 日誌與診斷

### 啓用日誌

- **macOS：** Settings > Logging Setting > Log to file（`~/Documents/openterface.log`）
- **Qt：** Preferences > Log > 設置日誌級別和文件路徑

### 串口控制枱（Qt）

通過 **Device > Serial Port Debug** 打開 — 顯示實時串口協議消息，可過濾 Keyboard、Mouse、HID、Chip Info。

---

## 平台特定問題

### Linux：Qt 平台插件

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux：Wayland 視頻問題

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows：CH340 驅動

若驅動安裝失敗：臨時禁用驅動簽名強制，然後通過設備管理器手動安裝。

### Raspberry Pi：視頻卡頓

在 Pi 3 或低內存 Pi 4 上：
1. 將分辨率降至 720p
2. 使用 FFmpeg 後端（不要用 GStreamer）
3. 串口使用 9600 波特率以保證穩定

---

## Android 特定問題

### 設備未檢測到

**症狀：** 視頻預覽顯示佔位圖，而非目標屏幕。

1. **檢查 USB OTG 連接** — 拔下並重新插入線纜
2. **確認 OTG 支持** — 嘗試連接 U 盤以確認手機支持 OTG
3. **檢查 KVM 設備** — 是否已上電？指示燈是否亮起？
4. **嘗試其他線纜** — 部分 OTG 轉接頭有故障
5. **重啓應用** — 完全關閉（從最近任務劃掉）後重新打開
6. **檢查 USB 權限** — 若系統彈出 USB 訪問對話框，請確保點擊 **Allow**

### 無視頻

**症狀：** 設備已檢測但屏幕黑屏或凍結。

1. **檢查 HDMI 線纜** — 目標電腦的 HDMI 是否牢固連接到 KVM HDMI 輸入？
2. **檢查目標輸出** — 目標電腦是否實際有畫面輸出？
3. **嘗試更低分辨率** — 打開設置 → **Video Format** → 選擇較低分辨率
4. **檢查相機權限** — Android 設置 → 應用 → Openterface → 權限 → 確保允許 Camera
5. **重啓應用**

### 鼠標無響應

**症狀：** 視頻正常但點擊屏幕對目標無效果。

1. **檢查 HID 的 USB 連接** — 打開設置 → **Device** 並確認設備處於活動狀態
2. **嘗試其他鼠標模式** — 在 Absolute 與 Relative 之間切換
3. **斷開並重新連接** — 使用紅色 **Disconnect Device** 按鈕，然後重新連接
4. **檢查目標電腦** — 是否識別 USB 鍵盤/鼠標？嘗試在目標側拔插 USB 線纜

### 鍵盤無法發送按鍵

**症狀：** 鼠標可用但輸入無效。

1. **確保鍵盤已打開** — 點擊鍵盤按鈕
2. **檢查串口連接** — 打開設置 → **Device** 並確認處於活動狀態
3. **檢查波特率** — 打開設置 → **Baudrate** 並確保與設備匹配（默認 115200）
4. **檢查鍵盤佈局** — 確保選擇了正確佈局（US、JP、DE）

### 應用崩潰或凍結

1. **關閉並重啓**應用
2. **降低視頻分辨率和幀率** — 高設置可能使內存有限的設備過載
3. **檢查可用存儲空間** — 存儲不足會導致不穩定
4. **更新應用** — 在 Google Play 或 GitHub Releases 查看新版本

### 截圖或錄製無法保存

1. **檢查 Storage 權限** — Android 設置 → 應用 → Openterface → 權限 → Storage
2. **檢查設備可用存儲空間**
3. 錄製和截圖保存到設備的默認媒體文件夾

### 收集日誌（Android）

若常規故障排除無效，可收集日誌供維護者分析：

```bash
adb logcat | grep -i openterface > openterface.log
```

在 GitHub 提交 issue 時請附上此文件。

---

## iPadOS 特定問題

> **注意：** iPadOS 僅支持 **KVM-Go**。若使用 Mini-KVM 或 uConsole KVM Extension，iPadOS 應用將無法工作。

### 藍牙無法連接

**症狀：** BLE 按鈕未變綠，或掃描列表中無設備。

1. **確認 iPad 已啓用藍牙** — 設置 > 藍牙
2. **確保 KVM-Go 已上電** — dongle 應插入目標 PC 的 USB 端口
3. **將 iPad 靠近** KVM-Go dongle — BLE 範圍通常可達 10 米
4. **檢查 iPad 藍牙權限** — 設置 > Privacy & Security > Bluetooth > 確保允許 Openterface
5. 在 BLE 界面點擊 **Refresh** 重新開始掃描
6. **檢查 Openterface 應用藍牙權限** — 若首次啓動被拒絕，請在設置中重新啓用

### 無視頻預覽

**症狀：** BLE 已連接但屏幕黑屏或顯示引導圖。

1. **檢查 HDMI 連接** — 目標 PC 的 HDMI 輸出是否牢固連接到 KVM-Go HDMI 輸入？
2. **檢查目標輸出** — 目標電腦是否實際有畫面輸出？
3. **嘗試更低分辨率** — 點擊 Video 按鈕並選擇較低分辨率（720p 或 480p）
4. **檢查相機權限** — 設置 > Privacy & Security > Camera > 確保允許 Openterface
5. **重啓應用** — 從最近任務上滑關閉後重新打開

### 鼠標/觸控無響應

**症狀：** 視頻正常但點擊屏幕對目標無效果。

1. **檢查 BLE 連接** — BLE 按鈕應為綠色並顯示 RSSI 值
2. **嘗試其他鼠標模式** — 在 Pan Mode 與 iPencil Mode 之間切換
3. **斷開並重新連接** — 打開 BLE 界面，點擊 Disconnect，再 Connect
4. **檢查目標電腦** — 是否將 KVM-Go 識別為 USB 鍵盤/鼠標？

### 鍵盤無法發送按鍵

**症狀：** 鼠標可用但輸入無效。

1. **確保浮動鍵盤已打開** — 點擊 Keyboard 按鈕
2. **檢查 BLE 連接** — 輸入通過藍牙而非 USB 傳輸
3. **檢查鍵盤模式** — 嘗試在 Normal 與 Game 模式之間切換
4. **外接鍵盤：** 若使用實體 iPad 鍵盤，請確認 iPadOS 將按鍵事件路由到應用

### 音頻無法播放

**症狀：** 視頻正常但無法通過 iPad 聽到目標 PC 聲音。

1. **檢查 Audio 按鈕** — 應顯示綠色揚聲器圖標
2. **檢查麥克風權限** — 設置 > Privacy & Security > Microphone > 確保允許 Openterface
3. **檢查 iPad 音量** — 確保 iPad 未靜音或音量最低
4. **檢查目標音頻輸出** — 目標 PC 是否配置為通過 HDMI 發送音頻？

### 應用崩潰或凍結

1. **關閉並重啓**應用
2. **降低視頻分辨率** — 高分辨率可能使舊款 iPad 吃力
3. **檢查可用存儲空間** — 存儲不足會導致不穩定
4. **更新應用** — 在 App Store 查看新版本

### 截圖或錄製無法保存

1. **檢查 Photo Library 權限** — 設置 > Privacy & Security > Photos > 確保允許 Openterface
2. **檢查 iPad 可用存儲空間**
3. **通過文件應用瀏覽** — 即使沒有 Photo Library 權限，錄製也會保存到 `Documents/Recordings/`

---

## 恢復出廠設置

1. 從 Settings（macOS）或 Device 菜單（Qt）使用 Serial Reset Tool
2. 這會將 HID 芯片恢復為出廠默認
3. 重置後重新連接設備

## 連接恢復

應用會自動處理以下情況的恢復：
- 設備斷開/重連（USB 熱插拔，iPadOS 的 BLE 重連）
- 通信超時
- 芯片回退（MS2109 → MS2109S → MS2130S）
- 串口恢復
- iPadOS BLE 自動重連（最多 3 次，間隔 2 秒）

## 提交缺陷報告

1. 啓用日誌文件記錄
2. 復現問題
3. 通過 [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) 或郵件 info@techxartisan.com 提交
