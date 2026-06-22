---
title: "ソフトウェアセットアップ | 拡張モジュール v2"
description: "uConsoleにOpenterfaceホストアプリをインストール・設定して、KVM拡張モジュール v2 — HDMIキャプチャ、USB HID、SDカード切替、USB共有を利用するための手順です。"
keywords: "Openterfaceアプリインストール, uConsoleソフトウェアセットアップ, KVM拡張 v2, openterfaceqt"
---

# **ソフトウェアセットアップ** | 拡張モジュール v2

## インストールの概要

Openterfaceホストアプリは、uConsoleをHDMIキャプチャ、USB HID制御、**SDカード切替**、ホストとターゲット間の**USBポート共有**機能を備えたKVMインターフェースとして動作させます。

!!! note "要件"
    - **uConsole（ホスト）**: Openterface QTアプリが必要です
    - **ターゲットデバイス**: アプリ不要 — Windows、macOS、Linux、Android、iOSがKVMに対応
    - **映像**: 標準HDMIケーブル。給電付きコンバーターでVGA、DP、その他のフォーマットに対応
    - **推奨バックエンド**: arm64 GPUパフォーマンスに最も優れた **GStreamer**（Kali LinuxではGStreamerのサポートが限定的な場合があります）

## インストール方法

### **オプション 1: GitHub Releases（arm64推奨）**

1. [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) にアクセスします。
2. **arm64** 用の最新の `.deb` をダウンロードします（例: `openterfaceqt_*_arm64.deb`）。
3. インストール:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **オプション 2: Flatpak**

[Flatpakインストールガイド](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) に従ってください。

### **オプション 3: コミュニティリポジトリ（ClockworkPi Bookworm）**

ClockworkPiイメージ向けにRexがメンテナンスしています:

1. **リポジトリを追加**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **インストール**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "リポジトリに関する注意"
    コマンドには `sudo` が必要です。リポジトリはarm64 Bookwormパッケージを対象としているため、インストール前にuConsole OSとの互換性を確認してください。

## 重要な注意事項

!!! tip "電源 & 初回セットアップ"
    - uConsoleを充電状態にするか、安定した電源に接続してください — バッテリー残量が少ないと接続問題が発生することがあります。
    - 初回試行時にキーボード/マウス制御が失敗する場合:
        1. uConsoleを完全にシャットダウンします。
        2. 少なくとも10秒待ちます。
        3. 電源を入れて再試行します。

!!! tip "シリアル通信のボーレート"
    シリアル通信のボーレートは **9600** に設定してください — uConsoleでは115200を安定して維持できない場合があります。

## 使い方

### **KVMセッションの開始**

1. uConsoleでOpenterface QTを起動します。
2. アプリが拡張モジュール v2を自動的に検出します。
3. HDMIとUSBでターゲットを接続します。
4. uConsoleのキーボードとトラックボールを使ってターゲットを制御します。

### **制御機能**

- **キーボード**: マルチメディアキーを含む完全なエミュレーション
- **マウス**: 絶対座標と相対座標の両方に対応
- **オーディオ**: HDMIオーディオをuConsoleスピーカーへパススルー
- **テキスト転送**: ユーザー名、パスワード、スニペットをキー入力として貼り付け
- **USB切替**: ホストアプリ経由でUSBストレージをuConsoleとターゲットで共有 — [ターゲットへの接続](/products/kvmext/connect-to-target/) を参照
- **SDカード切替**: ホストアプリ経由でSDカードをホストまたはターゲットにマウント — [SDカードガイド](/products/kvmext/sd-card/) を参照

### **ソフトウェアインストールのトラブルシューティング**

アプリのインストールが難しい場合、またはマウス/キーボードが動作しない場合:

- uConsole CM4/モジュールに **arm64** ビルドをインストールしたことを確認してください
- リアルタイムサポートは [Discord](https://openterface.com/discord) に参加してください
- [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues) で問題を報告してください

## 関連項目

- [ターゲットへの接続](/products/kvmext/connect-to-target/)
- [SDカードガイド](/products/kvmext/sd-card/)
- [FAQ](/products/kvmext/faq/)
