---
title: "Ethernet Kılavuzu | Genişletme Modülü v2"
description: "Openterface uConsole KVM Genişletme Modülü v2 ile birlikte gelen 100M veya 1000M Ethernet kartını seçin ve kurun. Gigabit için Yükseltme Kiti gereksinimleri."
keywords: "uConsole Ethernet, 100M, 1000M, gigabit, Yükseltme Kiti, KVM genişletme v2 ağ"
---

# **Ethernet Kılavuzu** | Genişletme Modülü v2

Genişletme Modülü v2, kutuda hem **100M** hem de **1000M** Ethernet kartı içerir. Donanım kurulumu sırasında **bir** kartı takın — ayrı ağ sürümleri satın almanız gerekmez.

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Hangi kartı kullanmalıyım?

| Kart | Uyumluluk | En iyi kullanım alanı |
|------|---------------|----------|
| **100M Ethernet** | Tüm uConsole anakartları | Evrensel kullanım, SSH, web arayüzü, log yakalama |
| **1000M Ethernet** | **HackerGadgets uConsole Yükseltme Kiti** gerektirir | Gigabit ağ iletişimi, daha hızlı aktarımlar |

!!! tip "Emin değil misiniz?"
    Yükseltme Kitini zaten kurmuş ve çalıştığını doğrulamadıysanız, **100M** kartıyla başlayın.

## Satın alma seçenekleri ve Yükseltme Kiti

| Seçenek | Ethernet yeteneği |
|--------|---------------------|
| **Yalnızca Genişletme v2** | Kutudan çıktığı haliyle 100M hazır; 1000M kart dahildir ancak gigabit için Yükseltme Kiti gerektirir |
| **Genişletme v2 + Yükseltme Kiti Paketi** | Dahil Yükseltme Kiti ile gigabit hazır |

Tam karşılaştırma: [Satın Alma Seçenekleri](/products/kvmext/purchase-options/)

Yükseltme Kiti hakkında daha fazla bilgiyi **HackerGadgets**'tan öğrenin ([TechxArtisan Mağaza listesi](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) üzerinden bağlantılıdır).

## Kurulum

1. [Donanım Kurulumu](/products/kvmext/hardware-installation/) adımları 1–2'yi tamamlayın (gücü kapatın, mevcut modülü çıkarın).
2. Seçtiğiniz Ethernet kartını Genişletme Modülü v2 üzerindeki modül tasarımına uygun şekilde yerleştirin.
3. Ana kartı genişletme yuvasına takın ve vidaları sıkın.
4. Hedef cihaza veya ağa bir Ethernet kablosu bağlayın.

## Kullanım senaryoları

- KVM üzerinden görüntülerken başsız sunuculara **SSH** ile bağlanma
- Yönlendiriciler, anahtarlar ve cihazlar için **web yönetimi**
- Sahada **log yakalama** ve ağ bakımı
- Ek adaptör olmadan birleşik **KVM + ağ** iş akışı

## İlgili

- [Hedefe Bağlanma](/products/kvmext/connect-to-target/)
- [Kullanım Alanları](/products/kvmext/use-cases/)
- [SSS](/products/kvmext/faq/)
