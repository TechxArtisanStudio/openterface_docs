---
title: "Ethernet ガイド | 拡張モジュール v2"
description: "Openterface uConsole KVM 拡張モジュール v2 に付属する 100M または 1000M Ethernet カードの選択と取り付け方法。ギガビット用のアップグレードキットの要件について。"
keywords: "uConsole Ethernet, 100M, 1000M, gigabit, Upgrade Kit, KVM extension v2 network"
---

# **Ethernet ガイド** | 拡張モジュール v2

拡張モジュール v2 には **100M と 1000M の両方の** Ethernet カードが同梱されています。ハードウェアセットアップ時に **どちらか1枚** を取り付けてください。ネットワークバージョンを別途購入する必要はありません。

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## どちらのカードを使えばよいですか？

| カード | 互換性 | 最適な用途 |
|------|---------------|----------|
| **100M Ethernet** | すべての uConsole ベースボード | 汎用利用、SSH、Web UI、ログ取得 |
| **1000M Ethernet** | **HackerGadgets uConsole Upgrade Kit** が必要 | ギガビットネットワーク、高速転送 |

!!! tip "迷ったときは？"
    Upgrade Kit をすでにインストールして動作確認済みでない限り、まずは **100M** カードから始めてください。

## 購入オプションと Upgrade Kit

| オプション | Ethernet 機能 |
|--------|---------------------|
| **拡張モジュール v2 のみ** | 購入後すぐに 100M 利用可能。1000M カードも同梱されますが、ギガビットには Upgrade Kit が必要 |
| **拡張モジュール v2 + Upgrade Kit バンドル** | 同梱の Upgrade Kit でギガビット対応 |

詳細な比較：[購入オプション](/products/kvmext/purchase-options/)

**HackerGadgets** の Upgrade Kit の詳細については、[TechxArtisan ショップ掲載ページ](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole)からリンクされています。

## 取り付け手順

1. [ハードウェア取り付け](/products/kvmext/hardware-installation/) の手順 1〜2（電源オフ、既存モジュールの取り外し）を完了します。
2. 選択した Ethernet カードを拡張モジュール v2 の設計に従って装着します。
3. メインボードを拡張スロットに取り付け、ネジを固定します。
4. ターゲットデバイスまたはネットワークに Ethernet ケーブルを接続します。

## 利用シナリオ

- KVM で表示しながらヘッドレスサーバーへ **SSH** 接続
- ルーター、スイッチ、アプライアンスの **Web 管理**
- 現場での **ログ取得** とネットワーク保守
- 追加アダプタ不要の **KVM + ネットワーク** ワークフロー

## 関連情報

- [ターゲットへの接続](/products/kvmext/connect-to-target/)
- [ユースケース](/products/kvmext/use-cases/)
- [FAQ](/products/kvmext/faq/)
