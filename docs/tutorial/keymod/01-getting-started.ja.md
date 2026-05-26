---
title: "KeyMod チュートリアル - はじめに"
description: KeyMod アプリをインストールし、KeyMod デバイスに接続して、5分以内に最初のキー入力を送信します。 KeyMod アプリをインストールし、KeyMod ハードウェアに接続して、5分以内に最初のキー入力を送信します。
keywords: "KeyMod はじめに, KeyMod セットアップ, KeyMod インストール, KeyMod 接続"
---

# 1. はじめに

KeyMod アプリをインストールし、KeyMod ハードウェアに接続して、5分以内に最初のキー入力を送信します。

## 必要なもの

- **Openterface KeyMod ハードウェア** — 電源オンで範囲内にあること
- **スマートフォンまたはタブレット** — KeyMod アプリがインストールされた Android
- **USB ケーブル**（初回設定用）— スマホを KeyMod に接続する USB-C
- **Bluetooth**（任意）— 初回設定後のワイヤレス接続

## ステップ 1: KeyMod アプリのインストール

**Android:**

1. ブラウザで [KeyMod GitHub Releases ページ](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags) を開く
2. 最新の `.apk` をダウンロード
3. ダウンロードしたファイルをタップしてインストール
4. 求められたらブラウザに **「提供元不明のアプリをインストール」** を許可

またはソースからビルド — 下記 [ソースからビルド](#ソースからビルド) を参照。

## ステップ 2: KeyMod デバイスに接続

KeyMod は Openterface KeyMod ハードウェアに次の2通りで接続します。

### USB 接続（初回設定に推奨）

1. USB-C ケーブルでスマホを KeyMod に接続
2. KeyMod アプリを開く
3. メイン画面右上の接続アイコンをタップ
4. **「USB Connection」** をタップ
5. 表示されたら USB 権限を許可
6. 緑色の **「Connected」** ステータスが表示されるはずです

### Bluetooth 接続（ワイヤレス）

1. スマホで Bluetooth を有効にする
2. KeyMod を開き接続アイコンをタップ
3. **「Bluetooth Connection」** をタップ
4. スキャン一覧に KeyMod が表示されるまで待つ
5. タップしてペアリング
6. 緑色の **「Connected」** ステータスが表示されるはずです

> **ヒント:** 接続ダイアログで **「Auto-connect on startup」** を有効にすると、起動のたびに自動再接続します。最後の接続タイプ（USB または BLE）を記憶します。

## ステップ 3: モードを選ぶ — Welcome & Guide

起動後 **Welcome & Guide** 画面とモードカードが表示されます。

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="ウェルカム画面とモードタイル" width="300" />
  <p><em>Welcome & Guide — モードカードをタップしてそのモードに入ります。</em></p>
</div>

サイドメニュー（左上のハンバーガー）でいつでもモード切替できます。

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="ナビゲーションドロワー" width="300" />
  <p><em>ナビゲーションドロワー — モード切替、マクロ・音声・設定へ。</em></p>
</div>

**「Remember my choice」** — チェックすると次回以降ウェルカムをスキップし、最後のモードに直行します。

**「Skip」ボタン** — ウェルカムをスキップし、前回のモードにすぐ入ります。

## ステップ 4: 最初のキー入力を送る

1. **Keyboard & Mouse** モードを選択
2. 画面上のキーボードの任意のキーをタップ
3. 対応するキー入力がターゲット PC に送信されます

完了！ターゲット PC をリモート操作できています。

## 接続状態インジケーター

| 表示 | 意味 |
|---|---|
| **緑**（接続アイコン） | 接続済み、入力送信可能 |
| **琥珀/青**（接続中） | 接続処理中 |
| **灰**（未接続） | アクティブな接続なし |
| **信号バー** | BLE 信号強度または USB アクティブ |

## ソースからビルド（Android、開発者向け）

```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## 次のステップ

- **[キーボードとマウス →](02-keyboard-mouse.md)** — 入力、修飾キー、タッチパッド、テキスト入力
