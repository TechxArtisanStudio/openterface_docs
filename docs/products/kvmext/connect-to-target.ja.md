---
title: "ターゲットデバイスへの接続 | 拡張モジュール v2"
description: "HDMI、USB HID、およびオプションの Ethernet 経由で、ターゲットデバイスを Openterface uConsole KVM 拡張モジュール v2 に接続し、ネットワークデバッグを行います。"
keywords: "KVM 接続セットアップ, ターゲットデバイス, HDMI, USB HID, Ethernet デバッグ, uConsole KVM v2"
---

# **ターゲットデバイスへの接続** | 拡張モジュール v2

## 接続の概要

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

拡張モジュール v2 は、**HDMI**（映像/音声）と **USB**（キーボード/マウスエミュレーション）経由でターゲットに接続します。オプションで **Ethernet** を使用して、SSH、Web 管理、ログ取得を行うことができ、KVM はディスプレイと入力を処理します。

## 前提条件

1. [ハードウェアの取り付け](/products/kvmext/hardware-installation/) — 拡張スロットにモジュールが装着されていること
2. [ソフトウェアセットアップ](/products/kvmext/software-setup/) — uConsole に Openterface QT がインストールされていること
3. [ネットワークカードの選択](/products/kvmext/ethernet/)（ネットワーク機能を使用する場合）

## 接続手順

### **USB コントロール（KVM に必須）**

拡張ボードの **Type-C ポート**をターゲットデバイスの USB ポートに接続します。これにより、キーボードとマウス（USB HID）がエミュレートされます。

ターゲットデバイスに HID コントロール用のドライバーや追加ソフトウェアは不要です。

### **映像入力（KVM に必須）**

ターゲットの HDMI 出力を拡張モジュールの HDMI 入力に接続します。

- HDMI 出力には標準の HDMI ケーブルを使用
- VGA の場合は **VGA-to-HDMI** コンバーターを使用（コンバーターの USB 電源が接続されていることを確認）
- DVI、DisplayPort、Micro HDMI など、必要に応じてその他のアダプターを使用

### **Ethernet（オプション — ネットワークデバッグ）**

ネットワークカードを取り付けた場合：

- カードからターゲットデバイスまたはネットワークスイッチに Ethernet ケーブルを接続します
- KVM と並行して、SSH、Web UI、ログ取得に uConsole を使用します
- 100M と 1000M のセットアップについては [Ethernet ガイド](/products/kvmext/ethernet/) を参照してください

### **SD カード（オプション — イメージングとファイル）**

モジュールのスロットに microSD カードを挿入します。ホストアプリを使用して、uConsole とターゲット間のアクセスを切り替えます。[SD カードガイド](/products/kvmext/sd-card/) を参照してください。

## USB 2.0 共有スイッチング

ホストアプリは、共有 USB 2.0 ポートを uConsole とターゲット間で切り替えることができます。これにより、ケーブルを抜き差しすることなくフラッシュドライブやメンテナンス作業を行う際に便利です。

## 接続のテスト

1. uConsole の電源を入れ、ターゲットデバイスを起動します
2. Openterface QT を起動します
3. uConsole の画面に HDMI 映像が表示されることを確認します
4. キーボード、トラックボール、オーディオパススルーをテストします
5. SD または USB スイッチングを使用する場合は、ホストアプリでマウント/スイッチをテストします

## 関連項目

- [ユースケース](/products/kvmext/use-cases/) — フィールド IT、ホームラボ、組み込みデバッグのシナリオ
- [FAQ](/products/kvmext/faq/) — トラブルシューティング
