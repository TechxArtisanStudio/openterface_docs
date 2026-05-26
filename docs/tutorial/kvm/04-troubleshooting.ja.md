---
title: "KVMチュートリアル 04 — トラブルシューティング"
description: Openterface KVM デバイスの一般的な問題と解決策。 Openterface 公式ドキュメント。セットアップ、FAQ、トラブルシューティング。IT・開発者向け。
---


# KVMチュートリアル 04 — トラブルシューティング

Openterface KVM デバイスの一般的な問題と解決策。

---

## デバイスが検出されない

### 症状
- デバイスメニューに「No devices found」と表示される
- キーボードとマウスのインジケーターがオレンジまたはグレー
- シリアルポートが「N/A」と表示される

### 診断

**Linux：**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
想定：`534d:2109`（HDMI キャプチャ）および `1a86:7523` または `1a86:fe0c`（シリアル）。

**macOS：** Apple メニュー > この Macについて > システムレポート > ハードウェア > USB — Openterface を探す。

**Windows：** デバイスマネージャー >「汎用シリアル バス デバイス」および「ポート (COM と LPT)」— CH340 が「USB-SERIAL CH340 (COMx)」として表示される。

### 解決策

| 問題 | 対処 |
|---------|-----|
| lsusb/システムレポートにデバイスがない | 別の USB ケーブル/ポートを試す。USB 2.0+ が必要 |
| デバイスは表示されるがノードがない | udev ルールを確認（Linux）またはドライバを再インストール（Windows） |
| 権限が拒否された | ユーザーを `dialout` と `video` グループに追加（Linux） |
| 検出後に消える | `brltty` がシリアルポートを占有（Linux）— 下記参照 |

---

## BrlTTY 衝突（Linux） {#brltty-conflict-linux}

**Linux でキーボード/マウスが動作しない最も一般的な原因。**

`brltty`（点字端末）サービスが CH9329/CH32V208 チップを含む USB シリアルデバイスを占有します。

### 修正
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## 映像なし / 黒画面

### 手順

1. **HDMI ケーブル**が両端でしっかり接続されているか確認
2. **ターゲットデバイス**が HDMI を出力しているか確認（通常のモニターでテスト）
3. **別の HDMI ケーブル**を試す
4. **デバイスを再接続** — アプリはホットプラグイベントを処理します
5. **ビデオチップセットの検出を確認：** 対応：MS2109、MS2109S、MS2130S

### バックエンド選択（Qt）

あるバックエンドで黒画面になる場合、**Preferences > Video > Media Backend** から別のものを試してください：
- **FFmpeg** — 最も信頼性が高い（推奨）
- **GStreamer** — Linux のみ
- **Qt Multimedia** — Windows フォールバック

### GStreamer の問題（Linux）

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
別の sink を試す：
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID の不一致

ターゲットが EDID を認識しない場合、互換性のある解像度を出力しないことがあります。ターゲットの出力解像度を変更するか、アプリの表示設定で EDID を編集してください。

---

## キーボード/マウスが応答しない

### 手順

1. **USB スイッチ**を確認 — **Target** に設定されていること（Host ではない）
2. **シリアルポートの状態**を確認 — ポート名が表示され、「N/A」ではないこと
3. **ボーレートを切り替え** — 9600 または 115200
4. **制御チップセット**を確認 — 対応：CH9329、CH32V208
5. **CTS モニタリング**を確認 — アプリは HID イベント用に Clear-To-Send ラインを監視します

### マウス固有の問題

- **macOS の相対モード：** アクセシビリティの許可が必要。**System Settings > Privacy & Security > Accessibility** を確認
- **絶対モード：** アスペクト比がターゲット表示と一致しているか確認
- **マウスの遅延：** より高いパフォーマンスプリセットを試すか、ボーレートを上げる
- **シリアルポートの競合（Linux）：** ポートを使用している他のアプリを閉じる：`sudo lsof /dev/ttyUSB0`

---

## オーディオが再生されない

### 手順

1. オーディオアイコン > Enable Audio で**オーディオを有効化**
2. **マイクの許可**を確認 — System Settings > Privacy & Security > Microphone（macOS）
3. **正しい入力デバイス**を選択 —「OpenterfaceA」またはキャプチャデバイス名
4. **正しい出力デバイス**を選択 — スピーカーまたはヘッドフォン
5. **ターゲットの HDMI オーディオ出力**を確認 — ターゲットは HDMI でオーディオを送信するよう設定されていますか？

---

## USB シリアルドライバの問題

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

必要に応じて、[WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos) から WCH CH34x ドライバをインストール。**System Settings > General > Login Items & Extensions > Driver Extensions** で有効化。

### Windows

シリアルチップがデバイスマネージャーに表示されない場合、CH340/CH341 ドライバをインストール。インストーラーに通常同梱；ポータブル版は別途ダウンロード。

### Linux

CH340 ドライバ（`ch341` モジュール）はカーネルに組み込まれています：
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## ファームウェア更新の失敗

### USB の安定性

- フラッシュ中はケーブルを抜かない
- ホストをスリープさせない
- USB ハブを避け、直接 USB ポートを使用

### リカバリ

1. 電源サイクル：USB を抜き、10 秒待って再接続
2. ISP モードに再入（一部デバイス：電源投入時にボタン長押し）
3. Serial Reset Tool でブートローダーを再フラッシュ
4. ブリックした場合はサポートに連絡

---

## パフォーマンスの問題

### CPU 使用率が高い

1. **ハードウェアアクセラレーションを有効化** — Preferences > Video > Hardware Acceleration（VAAPI、V4L2-M2M）
2. **解像度を下げる** — 720p は 1080p より CPU 使用量が大幅に少ない
3. **フレームレートを下げる** — 15fps でデコード負荷が半分に
4. **バックエンドを切り替え** — HW アクセラレーション付き FFmpeg は通常 GStreamer より CPU 使用量が少ない

### フレームドロップ

ステータスバーの FPS カウンターを確認。実際の FPS が目標より低い場合、パイプラインにボトルネックがあります。スムーズな再生を優先するため、FFmpeg フレームプロセッサでフレームドロップを有効にしてください。

---

## ログと診断

### ログの有効化

- **macOS：** Settings > Logging Setting > Log to file（`~/Documents/openterface.log`）
- **Qt：** Preferences > Log > ログレベルとファイルパスを設定

### シリアルコンソール（Qt）

**Device > Serial Port Debug** から開く — Keyboard、Mouse、HID、Chip Info でフィルタ可能なリアルタイムシリアルプロトコルメッセージを表示。

---

## プラットフォーム固有の問題

### Linux：Qt プラットフォームプラグイン

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux：Wayland の映像問題

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows：CH340 ドライバ

ドライバのインストールに失敗した場合：一時的にドライバ署名の強制を無効にし、デバイスマネージャーから手動インストール。

### Raspberry Pi：映像のカクつき

Pi 3 または低メモリの Pi 4 では：
1. 解像度を 720p に下げる
2. FFmpeg バックエンドを使用（GStreamer ではない）
3. シリアル安定性のため 9600 ボーレートを使用

---

## Android 固有の問題

### デバイスが検出されない

**症状：** ビデオプレビューにプレースホルダーが表示され、ターゲット画面が表示されない。

1. **USB OTG 接続**を確認 — ケーブルを抜き差しする
2. **OTG 対応**を確認 — USB フラッシュドライブを接続して OTG をサポートしているか確認
3. **KVM デバイス**を確認 — 電源は入っているか？インジケーターは点灯しているか？
4. **別のケーブル**を試す — 一部の OTG アダプターは不良
5. **アプリを再起動** — 完全に終了（最近のアプリからスワイプ）して再度開く
6. **USB 権限**を確認 — システムダイアログで USB アクセスを求められた場合、**Allow** をタップ

### 映像なし

**症状：** デバイスは検出されるが画面が黒またはフリーズ。

1. **HDMI ケーブル**を確認 — ターゲット PC の HDMI が KVM の HDMI 入力にしっかり接続されているか？
2. **ターゲットの出力**を確認 — ターゲット PC は実際に何か表示しているか？
3. **低い解像度**を試す — 設定を開く → **Video Format** → 低い解像度を選択
4. **カメラの許可**を確認 — Android 設定 → アプリ → Openterface → 権限 → Camera が許可されていること
5. **アプリを再起動**

### マウスが応答しない

**症状：** 映像は動作するが画面タップがターゲットに効かない。

1. **HID 用 USB 接続**を確認 — 設定 → **Device** を開き、デバイスがアクティブか確認
2. **別のマウスモード**を試す — Absolute と Relative を切り替え
3. **切断して再接続** — 赤い **Disconnect Device** ボタンを使用してから再接続
4. **ターゲット PC**を確認 — USB キーボード/マウスを認識しているか？ターゲット側で USB ケーブルを抜き差し

### キーボードがキーを送信しない

**症状：** マウスは動作するが入力が効かない。

1. **キーボードが開いている**ことを確認 — キーボードボタンをタップ
2. **シリアル接続**を確認 — 設定 → **Device** を開き、アクティブか確認
3. **ボーレート**を確認 — 設定 → **Baudrate** でデバイスと一致していること（デフォルト 115200）
4. **キーボードレイアウト**を確認 — 正しいレイアウト（US、JP、DE）が選択されていること

### アプリのクラッシュまたはフリーズ

1. アプリを**閉じて再起動**
2. **ビデオ解像度とフレームレートを下げる** — 高設定はメモリの少ないデバイスに負荷をかける
3. **利用可能なストレージ**を確認 — ストレージ不足は不安定の原因になる
4. **アプリを更新** — Google Play または GitHub Releases で新バージョンを確認

### スクリーンショットまたは録画が保存されない

1. **Storage 権限**を確認 — Android 設定 → アプリ → Openterface → 権限 → Storage
2. デバイスの**利用可能なストレージ容量**を確認
3. 録画とスクリーンショットはデバイスのデフォルトメディアフォルダに保存されます

### ログの収集（Android）

通常のトラブルシューティングで解決しない場合、メンテナーと共有するログを収集：

```bash
adb logcat | grep -i openterface > openterface.log
```

GitHub で issue を開く際にこのファイルを添付してください。

---

## iPadOS 固有の問題

> **注意：** iPadOS は **KVM-Go** のみサポート。Mini-KVM または uConsole KVM Extension を使用している場合、iPadOS アプリは動作しません。

### Bluetooth が接続できない

**症状：** BLE ボタンが緑にならない、またはスキャンリストにデバイスが表示されない。

1. **iPad で Bluetooth が有効**か確認 — 設定 > Bluetooth
2. **KVM-Go の電源**を確認 — dongle はターゲット PC の USB ポートに接続されていること
3. **iPad を KVM-Go dongle に近づける** — BLE 範囲は通常最大 10 メートル
4. **iPad の Bluetooth 権限**を確認 — 設定 > Privacy & Security > Bluetooth > Openterface が許可されていること
5. BLE 画面で **Refresh** をタップしてスキャンを再開
6. **Openterface アプリの Bluetooth 権限**を確認 — 初回起動で拒否した場合、設定で再有効化

### ビデオプレビューなし

**症状：** BLE は接続されているが画面が黒またはガイド画像が表示される。

1. **HDMI 接続**を確認 — ターゲット PC の HDMI 出力が KVM-Go の HDMI 入力にしっかり接続されているか？
2. **ターゲットの出力**を確認 — ターゲット PC は実際に何か表示しているか？
3. **低い解像度**を試す — Video ボタンをタップし、低い解像度（720p または 480p）を選択
4. **カメラの許可**を確認 — 設定 > Privacy & Security > Camera > Openterface が許可されていること
5. **アプリを再起動** — 最近のアプリから上にスワイプして閉じ、再度開く

### マウス/タッチが応答しない

**症状：** 映像は動作するが画面タップがターゲットに効かない。

1. **BLE 接続**を確認 — BLE ボタンは緑で RSSI 値が表示されること
2. **別のマウスモード**を試す — Pan Mode と iPencil Mode を切り替え
3. **切断して再接続** — BLE 画面を開き、Disconnect をタップしてから Connect
4. **ターゲット PC**を確認 — KVM-Go を USB キーボード/マウスとして認識しているか？

### キーボードがキーを送信しない

**症状：** マウスは動作するが入力が効かない。

1. **フローティングキーボードが開いている**ことを確認 — Keyboard ボタンをタップ
2. **BLE 接続**を確認 — 入力は USB ではなく Bluetooth 経由
3. **キーボードモード**を確認 — Normal と Game モードを切り替え
4. **外付けキーボード：** 物理 iPad キーボードを使用している場合、iPadOS がキーイベントをアプリにルーティングしているか確認

### オーディオが再生されない

**症状：** 映像は動作するが iPad からターゲット PC の音が聞こえない。

1. **Audio ボタン**を確認 — 緑のスピーカーアイコンが表示されること
2. **マイクの許可**を確認 — 設定 > Privacy & Security > Microphone > Openterface が許可されていること
3. **iPad の音量**を確認 — ミュートまたは最小音量でないこと
4. **ターゲットのオーディオ出力**を確認 — ターゲット PC は HDMI でオーディオを送信するよう設定されているか？

### アプリのクラッシュまたはフリーズ

1. アプリを**閉じて再起動**
2. **ビデオ解像度を下げる** — 高解像度は古い iPad に負荷をかける
3. **利用可能なストレージ**を確認 — ストレージ不足は不安定の原因になる
4. **アプリを更新** — App Store で新バージョンを確認

### スクリーンショットまたは録画が保存されない

1. **Photo Library 権限**を確認 — 設定 > Privacy & Security > Photos > Openterface が許可されていること
2. **iPad の利用可能なストレージ**を確認
3. **ファイルアプリで閲覧** — Photo Library 権限がなくても録画は `Documents/Recordings/` に保存されます

---

## 工場出荷時リセット

1. Settings（macOS）または Device メニュー（Qt）から Serial Reset Tool を使用
2. HID チップが工場出荷時のデフォルトにリセットされます
3. リセット後にデバイスを再接続

## 接続の復旧

アプリケーションは以下の自動復旧を処理します：
- デバイスの切断/再接続（USB のホットプラグ、iPadOS の BLE 再接続）
- 通信タイムアウト
- チップセットのフォールバック（MS2109 → MS2109S → MS2130S）
- シリアルポートの復旧
- iPadOS BLE 自動再接続（最大 3 回、2 秒間隔）

## 不具合報告の提出

1. ログファイルへの記録を有効化
2. 問題を再現
3. [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) または info@techxartisan.com へメールで提出
