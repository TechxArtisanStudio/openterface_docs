---
title: "FAQ | 拡張モジュール v2"
description: "Openterface uConsole KVM 拡張モジュール v2 の FAQ：イーサネットカード、アップグレードキット、SD カード、ソフトウェアセットアップ、互換性、トラブルシューティング。"
keywords: "KVM 拡張 v2 FAQ, uConsole KVM, イーサネット, SD カード, トラブルシューティング, アップグレードキット"
---

# FAQ | 拡張モジュール v2

**Openterface uConsole KVM 拡張モジュール v2** の FAQ へようこそ。

お探しの情報が見つからない場合は、[support@openterface.com](mailto:support@openterface.com) までメールするか、[Discord](/discord) コミュニティにご参加ください。

---

## :material-clipboard-list: クイックナビゲーション

- [製品 & 購入](#製品--購入)
- [取り付け & ハードウェア](#取り付け--ハードウェア)
- [互換性](#互換性)
- [操作 & 機能](#操作--機能)
- [映像 & 音声](#映像--音声)
- [トラブルシューティング](#トラブルシューティング)
- [その他](#その他)

---

## 製品 & 購入

**:material-chat-question:{ .faq } 拡張モジュール v2 は 1 つの製品ですか、それとも 2 つのネットワークバージョンですか？**

**1 つの製品**です。100M と 1000M の両方のイーサネットカードが同梱されています。[購入オプション](/products/kvmext/purchase-options/) をご覧ください。

**:material-chat-question:{ .faq } どちらのイーサネットカードを使えばよいですか？**

すべての uConsole ベースボードでは **100M** カードを使用してください。**1000M** カードは、**HackerGadgets uConsole アップグレードキット** を所有しており、ギガビットネットワーキングが必要な場合にのみ使用してください。[イーサネットガイド](/products/kvmext/ethernet/) をご覧ください。

**:material-chat-question:{ .faq } HackerGadgets uConsole アップグレードキットは必要ですか？**

**ギガビットイーサネット** の場合にのみ必要です。100M カードはアップグレードキットなしでも動作します。キットをお持ちでない場合は、チェックアウト時にバンドルオプションを選択するか、キットを別途購入してください。

**:material-chat-question:{ .faq } uConsole は付属していますか？**

いいえ。ClockworkPi uConsole デバイスは別売りです。

---

## 取り付け & ハードウェア

**:material-chat-question:{ .faq } 拡張モジュール v2 はどのように動作しますか？**

ターゲットデバイスから HDMI をキャプチャして uConsole に表示します。uConsole のキーボードとトラックボールは、USB HID エミュレーションを介してターゲットを制御します。オプションのイーサネットと SD カード機能で、ネットワークデバッグやイメージングのワークフローを拡張できます。

**:material-chat-question:{ .faq } 4G/LTE モジュールが取り付けられた状態でも使用できますか？**

いいえ。拡張モジュール v2 は uConsole の拡張スロットを使用するため、4G または LTE モジュールと同時に使用することは**できません**。

**:material-chat-question:{ .faq } 取り付けにはどのような工具が必要ですか？**

取り付けネジ用のヘックスドライバーが必要です。ESD 対策をお勧めします。

**:material-chat-question:{ .faq } 取り付けは元に戻せますか？**

はい。拡張モジュール v2 を取り外し、必要に応じて元の 4G/LTE モジュールを再取り付けできます。

---

## 互換性

**:material-chat-question:{ .faq } どの uConsole モデルに対応していますか？**

標準拡張スロットを備えた uConsole デバイスに対応しています。お使いのデバイスの仕様で確認してください。

**:material-chat-question:{ .faq } どのようなターゲットデバイスを制御できますか？**

HDMI 出力を備えたあらゆるデバイス：デスクトップ、サーバー、SBC（Raspberry Pi など）、組み込みシステム、産業用 PC など。

**:material-chat-question:{ .faq } ターゲットに特別なソフトウェアは必要ですか？**

いいえ。KVM は USB HID エミュレーションを使用するため、キーボードとマウス用にターゲット側にドライバは不要です。[USB ベース KVM 技術](/tutorial/kvm/01-getting-started/) について詳しくはこちら。

**:material-chat-question:{ .faq } 複数のターゲットを同時に制御できますか？**

KVM では一度に 1 つのターゲットです。HDMI ケーブルと USB ケーブルを切り替えてターゲットを変更してください。

---

## 操作 & 機能

**:material-chat-question:{ .faq } SD カード経由でファイルを転送できますか？**

はい。拡張モジュール v2 は、Openterface アプリ経由のホスト/ターゲット切り替えによる SD カードの読み書きに対応しています。[SD カードガイド](/products/kvmext/sd-card/) をご覧ください。

**:material-chat-question:{ .faq } BIOS レベルのアクセスに対応していますか？**

はい。直接 USB HID により、ネットワーク依存なしの完全な BIOS/UEFI アクセスが可能です。

**:material-chat-question:{ .faq } 旧モデルの v1 モジュールはどうですか？**

初代 37 × 77 mm モジュール（イーサネット/SD なし）は [Legacy v1 Docs](/products/kvmext/v1/) に記載されています。

---

## 映像 & 音声

**:material-chat-question:{ .faq } 対応する映像解像度は？**

- **入力**：HDMI 経由で最大 4K @ 30 Hz（RGB/YCBCR444）または 4K @ 60 Hz（YCBCR420）
- **出力**：uConsole 画面で 1080p @ 60 Hz

**:material-chat-question:{ .faq } 映像の遅延はどのくらいですか？**

**70 ms 未満** — BIOS アクセス、メンテナンス、診断に適しています。

**:material-chat-question:{ .faq } 音声に対応していますか？**

はい。HDMI 埋め込み音声は uConsole スピーカーに出力されます。

---

## トラブルシューティング

**:material-chat-question:{ .faq } 映像信号が出ない**

- 両端の HDMI 接続を確認
- ターゲットの電源が入っており、HDMI 経由で出力していることを確認
- 別の HDMI ケーブルを試す
- Openterface QT を再起動

**:material-chat-question:{ .faq } キーボードまたはマウスが動作しない**

- 拡張モジュールからターゲットへの USB ケーブルを確認
- uConsole を完全にシャットダウンし、10 秒待ってから電源を入れ直して再試行
- Openterface QT（uConsole 用 arm64 ビルド）を再インストール
- Linux ディストリビューションと CM4 モジュールを [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) または [Discord](https://openterface.com/discord) で報告

**:material-chat-question:{ .faq } ソフトウェアのインストールが難しい**

[ソフトウェアセットアップ](/products/kvmext/software-setup/) の GitHub Releases（オプション 1）または ClockworkPi コミュニティリポジトリ（オプション 3）を試してください。ステップバイステップのサポートは [Discord](https://openterface.com/discord) へ。

**:material-chat-question:{ .faq } USB 切り替えポートが動作しない**

最新の Openterface QT リリースを使用していることを確認してください。ホストアプリで USB アクセスを切り替えてください。問題が続く場合は [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) で issue を作成してください。

**:material-chat-question:{ .faq } HDMI が枠の中だけに表示される / アプリ設定メニューが表示されない**

最新の Openterface QT にアップデートしてください。[ソフトウェアセットアップ](/products/kvmext/software-setup/) と Discord のコミュニティスレッドで、uConsole 固有の表示設定を確認してください。

**:material-chat-question:{ .faq } アプリがモジュールを検出しない**

- 拡張スロットにボードを再度装着
- uConsole を再起動
- Openterface QT を再インストール

---

## その他

**:material-chat-question:{ .faq } ソフトウェアはオープンソースですか？**

はい。Openterface ホストアプリは [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) でオープンソースとして公開されています。

**:material-chat-question:{ .faq } サポートはどこで受けられますか？**

- **メール**：[support@openterface.com](mailto:support@openterface.com)
- **Discord**：[コミュニティに参加](https://openterface.com/discord)
- **GitHub**：[問題を報告](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
