---
title: "機能と仕様 | 拡張モジュール v2"
description: "Openterface uConsole KVM 拡張モジュール v2 の完全概要：HDMI KVM、デュアル Ethernet、SD カード、USB 切り替え、技術仕様。"
keywords: "KVM 拡張 v2 機能, uConsole KVM, HDMI KVM, Ethernet 拡張, SD カード, ポータブル KVM, 技術仕様"
---

# **機能と仕様** | 拡張モジュール v2

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## 主な機能

- **ダイレクト KVM コントロール**: HDMI 入力と USB HID キーボード/マウス エミュレーションを通じてターゲット デバイスを表示および操作 — BIOS アクセス、OS インストール、ヘッドレス サーバーの復旧に最適。
- **デュアル ネットワーク カード対応**: **100M** と **1000M** の両方の Ethernet カードが付属。すべての uConsole ベースボードでは 100M を使用。ギガビット ネットワークには [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) と組み合わせて 1000M を使用。
- **SD カード読み書き**: 外部カード リーダーなしで、uConsole からイメージ書き込み、ログ出力、ファイル転送が可能。
- **USB 2.0 共有切り替え**: uConsole とターゲット デバイス間で USB アクセスを切り替え、柔軟なデバッグとメンテナンスを実現。
- **低遅延**: uConsole 画面に **1080p @ 60 Hz** 出力で **70 ms 未満** の映像遅延。
- **ポータブル & スロット給電**: コンパクトな **77.3 × 34.7 mm** 設計。uConsole 拡張スロットから給電され、外部電源アダプターは不要。
- **オープン ソース連携**: オープンなホストアプリとコミュニティ サポートを備えた Openterface KVM プラットフォーム上に構築。

## 技術仕様

| 項目 | 仕様 |
|------|---------------|
| **製品名** | Openterface uConsole KVM 拡張モジュール v2 |
| **ボード サイズ** | 77.3 × 34.7 mm |
| **映像入力** | HDMI 最大 4K @ 30 Hz (RGB/YCBCR444) または 4K @ 60 Hz (YCBCR420) |
| **映像出力** | uConsole 画面に 1080p @ 60 Hz |
| **遅延** | &lt; 70 ms |
| **KVM コントロール** | USB HID キーボードおよびマウス エミュレーション |
| **ネットワーク** | 100M はすべての uConsole ベースボードで動作。1000M には uConsole Upgrade Kit が必要 |
| **SD カード** | ホストアプリ経由でホスト/ターゲット切り替えによる読み書き |
| **USB 共有** | USB 2.0 Full Speed (12 Mbps) 共有切り替え |
| **対応プラットフォーム** | Windows、macOS、Linux、x86 システム、ARM SBC |
| **電源** | uConsole 拡張スロットから給電 |
| **外部電源** | 不要 |

### 完全なキーボード & マウス エミュレーション

- **USB HID**: 絶対および相対マウス位置指定、完全なキーボード サポート、マルチメディア キー。
- **接続**: 拡張ボードの Type-C ポート経由でターゲットへ USB リンク。

### 映像 & 音声

- **入力**: HDMI 経由で最大 4K（モードの詳細は上表を参照）
- **出力**: 70 ms 未満の遅延で Full HD 1080p @ 60 Hz
- **ディスプレイ**: uConsole 内蔵スクリーンを使用
- **圧縮**: YUV および MJPEG 対応
- **互換性**: VGA、DVI、Micro HDMI（アダプター経由）
- **音声**: HDMI エンベデッド音声パススルー

### 接続 & 電源

- **電源**: uConsole 拡張スロットから直接給電
- **ターゲット ソフトウェア**: ターゲット デバイスへのインストール不要

## 関連項目

- [Ethernet ガイド](/products/kvmext/ethernet/) — 100M と 1000M カードの選択
- [SD カード ガイド](/products/kvmext/sd-card/) — イメージングとファイル転送
- [購入オプション](/products/kvmext/purchase-options/) — 拡張モジュールのみと Upgrade Kit バンドルの比較
- [レガシー v1 仕様](/products/kvmext/v1/features/) — 初世代モジュール
