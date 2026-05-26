---
title: "KeyMod チュートリアル"
description: KeyMod アプリの完全ガイド。接続、スマートフォンからの PC 操作、キーボード・マウス・ゲームパッド・マクロ・音声入力モードの使い方を学びます。 本チュートリアルは Android 版 KeyMod アプリを対象とします。iOS 版は開発中です。 KeyMod はスマートフォンやタブレットを、あらゆる…
keywords: "KeyMod チュートリアル, KeyMod の使い方, スマホキーボードガイド, KeyMod アプリチュートリアル"
---

# KeyMod チュートリアル

{% include "partials/keymod-tutorial-slideshow.html" %}

本チュートリアルは **Android** 版 KeyMod アプリを対象とします。iOS 版は開発中です。

## KeyMod とは？

KeyMod はスマートフォンやタブレットを、あらゆる PC 向けの **汎用入力デバイス** に変えます。**Openterface KeyMod** ハードウェア（KVM — キーボード・ビデオ・マウススイッチャー）経由で接続し、スマートフォンのキー入力・マウス移動・ゲームパッド入力を、実際の USB キーボードとマウスからの入力としてターゲット PC に送ります。

### 接続の仕組み

[ スマートフォン ] ──USB/BLE──> [ KeyMod ハードウェア ] ──USB HID──> [ ターゲット PC ]
   (KeyMod アプリ)                (CH9329 プロトコル)              (Windows/macOS/Linux)
アプリはシリアル接続（USB-C 115200 baud 8N1、または Bluetooth BLE）で **CH9329 プロトコル** を使い KeyMod ハードウェアと通信します。KeyMod はターゲット PC 上で標準 USB キーボード・マウスとして認識され、ドライバは不要です。

### こんな方に

| あなたは… | KeyMod で… |
|---|---|
| **システム管理者** | 予備キーボードやモニターなしでスマホからサーバー管理 |
| **プレゼンター / スピーカー** | 部屋のどこからでもスライド操作、クリッカー不要 |
| **ゲーマー** | レトロゲーム用ゲームパッドや追加コントローラーとしてスマホを使用 |
| **コンテンツクリエイター** | 別マシンで録画中にショートカット・マクロ・音声入力をトリガー |
| **パワーユーザー** | スマホから複雑なショートカット、テキストスニペット、自動化シーケンスを送信 |
| **誰でも** | ソファやベッド、部屋の向こうから PC に入力 |

## チュートリアル一覧

| ガイド | 内容 |
|---|---|
| [1. はじめに](01-getting-started.md) | インストール、接続、最初のモード選択（約5分） |
| [2. キーボードとマウス](02-keyboard-mouse.md) | 入力、修飾キー、タッチパッド、テキスト入力 |
| [3. ターゲット OS](03-target-keyboard.md) | ターゲット OS のマッピング |
| [4. ショートカットハブ](04-shortcuts.md) | 人気アプリ向けプロファイルベースのショートカット |
| [5. マクロ](05-macros.md) | 遅延付き自動キーシーケンス |
| [6. 音声入力](06-voice-input.md) | Whisper AI による音声→キーボード |
| [7. AI 連携](07-ai.md) | テキスト推敲とコマンドアシスタント |
| [8. ゲームパッド](08-gamepad.md) | カスタマイズ可能な仮想ゲームコントローラー |
| [9. テンキー](09-numpad.md) | データ入力用テンキー |
| [10. プレゼン](10-presentation.md) | スライドリモコンとタイマー |
| [11. 設定](11-settings.md) | アプリ設定と環境設定 |
| [12. トラブルシューティング](12-troubleshooting.md) | よくある問題と解決策 |

## ヘルプ

- **バグ報告:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **コミュニティ:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **ソースコード:** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)
