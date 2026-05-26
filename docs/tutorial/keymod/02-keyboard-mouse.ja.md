---
title: "KeyMod チュートリアル - キーボードとマウス"
description: "KeyMod キーボードと touchpad を使用して、電話機から入力、ショートカットの送信、ターゲット コンピュータのマウスの制御を行う方法を学びます。"
keywords: "KeyMod キーボード、KeyMod マウス、touchpad、修飾キー、キーボード ショートカット"
---

#2. キーボードとマウス

キーボードとマウス モードは、最も頻繁に使用されるモードです。携帯電話からターゲット コンピュータを制御するための仮想キーボードと touchpad が提供されます。

## 2 つの階層: ベーシックとプロ

KeyMod は 2 つのキーボード エクスペリエンスを提供します。

|階層 |モード名 |こんな方に最適 |
|---|---|---|
| **基本** |キーボードとマウス |全画面キーボードで素早く入力でき、ヘッダーに邪魔されることはありません |
| **プロ** |キーボードとマウス プロ |ショートカット ハブ ストリップ、分割キーボード、豊富な IME を備えた完全な複合レイアウト |

### キーボードとマウス (基本)

**ベーシック** レベルでは、アプリの上部ヘッダーのない**専用の全画面キーボード**が提供されます。すべてのコントロールはキーボードの最上行にあります。

- メニュー、モード切り替え（Touchpad / 作成と送信 / テンキー）
- ターゲットOSセレクター
- 接続状態

**Basic に固有の機能:**

- **長押しリピート**: 任意の文字またはファンクション キーを押し続けると自動リピートになります (最大 400 ミリ秒の遅延、最大 50 ミリ秒の繰り返し)
- **キー プレビュー**: キーを押すと、フローティング バブルでキーの上に有効なラベルが表示されます。
- **触覚フィードバック** および **テーマ認識** のキー表面
- **縦向きおよび横向きのテンキー**: 5x8 グリッド (縦方向) または 8x5 グリッド (横方向)
- **IME 作成モード**: 長いテキストを入力し、クリーンな ASCII のみの HID キーストロークとして送信します

> Basic にはショートカット ハブ ストリップ行は**含まれません**。ストリップ プロファイルの場合は、**Keyboard & Mouse Pro** に切り替えてください。

### キーボードとマウス Pro

**Pro** は、ショートカット ハブ ストリップ行、分割キーボード レイアウト、完全な IME ワークフローなど、完全な複合エクスペリエンスです。これはパワーユーザーが期待していることです。

## レイアウト

**ポートレートモード:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-gestures.webp" alt="Portrait touchpad gesture help and keyboard" width="300" />
  <p><em>ポートレート — touchpadジェスチャ + キーボード レイアウト。 touchpadを上下にスワイプしてスクロールし、ドラッグしてカーソルを移動します。</em></p>
</div>

**横向き — 分割キーボード + touchpad:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-split-keyboard-touchpad.webp" alt="Landscape split keyboard and central touchpad" width="420" />
  <p><em>横向き — 分割されたキーボードの左側にはtouchpadがあり、親指2本で快適にタイピングできます。</em></p>
</div>

**横向き — マクロ行 + プロファイル:**

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-landscape-macro-strip.webp" alt="Landscape macro strip and profile selector" width="420" />
  <p><em>ランドスケープ — キーボードとプロファイルセレクターの上のマクロストリップ（デフォルト、KiCADなど）。</em></p>
</div>

## 表示モード (Android)

**トグル ハンドル** (キーボードと touchpad の間の錠剤型の仕切り) をタップして、表示モードを切り替えます。

|モード |目に見えるもの |
|---|---|
| **両方** (デフォルト) |キーボード + touchpad を一緒に |
| **キーボードのみ** |全角キーボード、touchpad 非表示 |
| **Touchpad のみ** (縦向き) | Touchpad は全画面表示 |
| **分割** (風景) |左側に touchpad が付いた 2 つのハーフキーボード |

## キーボードの使用方法

|アクション |どのように |
|---|---|
|文字を入力してください |タップしてください |
|大文字 |最初に **Shift** をタップし、次に文字 | をタップします。
|数字または記号を入力します | **?123** をタップして、数字/記号のレイアウトに切り替えます |
|タイプ Ctrl+C (コピー) | **Ctrl** をタップし (強調表示されます)、**C** | をタップします。
| Win+R と入力します ([実行] ダイアログ) | **Win** をタップし、次に **R** | をタップします。
| F1-F12にアクセス | **Fn** をタップすると、文字列がファンクション キーになります。
|マルチモディファイア (Ctrl+Shift+C) | **Ctrl**、次に **Shift** (両方を押したまま)、**C** をタップします。

### 修飾子の動作

**長押ししてタップ:** 修飾子をタップして保持し (強調表示され)、任意のキーをタップします。キーを 1 回押すと、モディファイアは自動的に解除されます。複数のモディファイアのコンボの場合は、最後のキーをタップする前に、各モディファイアを順番にタップします。

### 代替の長押し

多くの文字キーには **隠し記号** があり、次を長押しするとアクセスできます。```
Long-press "d" → shows: $  €  ¥  £
Long-press "k" → shows: (  {  [  <
Long-press "/" → shows: \  |
Long-press "m" → shows: +  _
ポップアップが表示されるまで押し続け、目的の記号に向かって指をスライドさせて放します。

### Fn キー層

修飾子の行で **Fn** キーをタップします。文字キーは一時的に **F1 ～ F12** になります。

- Q = F1、W = F2、E = F3、R = F4、T = F5、Y = F6
- U = F7、I = F8、O = F9、P = F10
- A = F11、S = F12

## クイックアクションボタン

共通のショートカット ボタンを使用して簡単にアクセスできます。アプリは **ターゲット OS** 設定を使用して、正しい修飾子を決定します。

|アクション | macOS | Windows/Linux |
|---|---|---|
|コピー | Cmd+C | Ctrl+C |
|貼り付け | Cmd+V | Ctrl+V |
|カット | Cmd+X | Ctrl+X |
|元に戻す | Cmd+Z | Ctrl+Z |
|すべて選択 | Cmd+A | Ctrl+A |
|やり直す | Cmd+Y | Ctrl+Y |
|検索 | Cmd+F | Ctrl+F |
|保存 | Cmd+S | Ctrl+S |
|新しいタブ | Cmd+T | Ctrl+T |
|タブを閉じる | Cmd+W | Ctrl+W |
|次のタブ | Cmd+タブ | Ctrl+タブ |
|ロック画面 | Cmd+L | Win+L |
|デスクトップを表示 | Cmd+D | Win+D |
| Alt+F4 | — | Alt+F4 |
| Ctrl+Alt+Del | — | Ctrl+Alt+Del |

## TouchPad

### ジェスチャー

|ジェスチャー |アクション |
|---|---|
| |をタップします左クリック |
| 2本指タップ |右クリック |
|ドラッグ |カーソルを移動 |
| 2 本指で上/下にスワイプ |スクロール（自然スクロール） |
| |を長押しします。ドラッグ モード (ドラッグ用にカーソルをロックします) |
|ダブルタップ |ダブルクリック |

### TouchPad 追加事項

- **ポップアウト touchpad** — touchpad 情報アイコン (?) をタップすると、他のモードの上に表示されるフローティング touchpad が開きます。
- **TouchPad ヘルプ オーバーレイ** (Android) — **?** アイコンをタップすると、全画面ジェスチャ リファレンス ガイドが表示されます。
- **触覚フィードバック** — クリックやドラッグの切り替え時に振動を感じます。

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-touchpad-numpad.webp" alt="Portrait touchpad and keypad grid" width="300" />
  <p><em>縦向き — touchpad、右側にキーパッド グリッドがあり、番号/記号をすばやく入力できます。</em></p>
</div>

## テキスト入力 (IME 作成モード — Android)

縦向きのキーボードとマウス モードでは、**IME キャプチャ モード** - キーボードの下にあるテキスト エディタに切り替えることができます。このモードでは、ターゲット コンピュータに HID キーストロークとして送信する前に長いテキストを作成できます。

- 修飾子の行にある**キーボード/IME切り替え**アイコンをタップして、ダイレクトキー送信モードとテキスト作成モードを切り替えます。
- 作成モードでは、コピー、貼り付け、クリア、元に戻す、送信用のツールバーを備えたテキスト エディターが表示されます。
- **矢印アイコンを使用して作成領域を折りたたみ/展開**します

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-keyboard-mouse-portrait-long-text-compose.webp" alt="Portrait long text compose and Send" width="300" />
  <p><em>IME 作成モード — 長いテキストを入力または貼り付けて、[送信]をタップして、HID キーストロークとしてターゲットに送信します。</em></p>
</div>

## ターゲット OS

ターゲット OS をターゲット コンピュータの主要な規則に一致するように設定します。これは、ショートカット ラベル、Unicode 入力メソッド、および修飾キー マッピングに影響します。ヘッダー バーの **OS アイコン**をタップして変更します。

## ショートカット ストリップ (Android、横)

横分割モードでは、**スクロール可能なショートカット ストリップ**が 2 つのキーボード半分の上に表示され、一般的なショートカット (コピー、貼り付け、切り取り、保存、元に戻す、すべて選択) にすばやくアクセスできます。

## 次のステップ

- **[Target-Specific Keyboard →](03-target-keyboard.md)** — キーボード レイアウトとターゲット OS のマッピング
- **[Troubleshooting →](12-troubleshooting.md)** — 一般的な問題と解決策