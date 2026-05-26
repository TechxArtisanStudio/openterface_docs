---
title: "KVM-Go ファームウェアアップグレード"
description: KVM-Go はキーボードとマウスのエミュレーションに WCH の CH32V208 チップを使用しています。現在、ファームウェアの書き込みには WCH の公式プログラミングツールが必要で、これは Windows でのみ利用可能です。そのため、現時点では Windows…
---

# KVM-Go ファームウェアアップグレード

## 概要

KVM-Go はキーボードとマウスのエミュレーションに WCH の CH32V208 チップを使用しています。現在、ファームウェアの書き込みには WCH の公式プログラミングツールが必要で、これは Windows でのみ利用可能です。そのため、現時点では Windows システムでファームウェア更新を行う必要があります。

クロスプラットフォームの自社開発ファームウェアアップグレードソリューションを積極的に開発中で、デバイスに直接統合される予定です。完成すれば、サードパーティツールなしで主要なすべての OS でファームウェア更新をサポートします。

> **注意：** この手動ファームウェアアップグレード手順は、初期開発ユニット向けの一時的なソリューションです。正式な量産製品では、ファームウェア更新はソフトウェアにシームレスに統合され、サードパーティツールや手動手順なしでアプリケーションから直接ファームウェアを更新できます。

## 前提条件

続行する前に、以下を用意してください：

- Windows コンピューター
- WCH ISP Tool のインストール
- 書き込み用のファームウェアファイル（`.hex` 形式）

### ファームウェアのダウンロード

最新の KVM-Go ファームウェアファイルをダウンロード：

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — KVM-Go キーボードとマウスエミュレーション用最新ファームウェア（CH32V208 チップ）

アップグレードプロセスを進める前に、ファームウェアファイルを Windows コンピューターのアクセスしやすい場所に保存してください。

### WCH ISP Tool のダウンロード

[WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") をダウンロードしてインストール（Windows のみ）。

ご辛抱とご支援に感謝します！

## 手順

### ステップ 1：Windows でツールをダウンロードして開く

Windows コンピューターで WCH ISP Tool を起動します。

![WCH ISP Tool インターフェース](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### ステップ 2：KVM-Go を書き込み用に準備

KVM-Go にファームウェアを書き込むには：

1. デバイスの電源を切る
2. ボタンを押しながら USB Type-C ポートに接続する

**ヒント：** どちらのポートでも書き込み可能ですが、「target」ポートの方が書き込み中に安定しやすいです。

![KVM-Go 配線と接続設定](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### ステップ 3：ファームウェアファイルを選択

接続が成功すると、ツールは自動的にチップモデル（CH32V20X シリーズ）を検出します。

1. 「...」ボタンをクリックして書き込むファームウェアファイルを参照・選択
2. `.hex` ファームウェアファイルを選択
3. **重要：** ファームウェアファイル横のチェックボックスをオンにする

![WCH ISP Tool で検出されたチップモデル](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![ファームウェアファイルの参照と選択](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![チェックボックスがオンになったファームウェアファイル](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### ステップ 4：現在のファームウェアの保護を解除

新しいファームウェアを書き込む前に、現在のファームウェアの書き込み保護を解除する必要があります：

1. ツールの「Deprotect」オプションをクリック
2. KVM-Go の物理ボタンを短く押して書き込みモードに入る
3. 保護解除プロセスの完了を待つ

![ツールの Deprotect オプション](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![KVM-Go のボタンを押して書き込みモードに入る](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### ステップ 5：ファームウェアをダウンロードして書き込む

ファームウェアの保護解除と選択が完了したら：

1. 書き込みツールの「Download」ボタンをクリック
2. 書き込みプロセスの完了を待つ
3. ツールがファームウェアの書き込み成功を表示する

![ファームウェアのダウンロードと書き込みプロセス](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## 関連資料

- [Openterface KVM-Go レビューガイド](review-guide.md) — エンジニアリングプロトタイプユニットの重要な注意事項と既知の問題
