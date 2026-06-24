---
title: "Donanım Kurulumu | Genişletme Modülü v2"
description: "Openterface uConsole KVM Genişletme Modülü v2'yi genişletme yuvasına kurun. Ethernet kartınızı seçin ve HDMI ile USB'yi hedef cihazınıza bağlayın."
keywords: "KVM genişletme v2 kurulum, uConsole donanım kurulumu, genişletme yuvası, Ethernet kartı kurulumu"
---

# **Donanım Kurulumu** | Genişletme Modülü v2

## Genel Bakış

Genişletme Modülü v2, uConsole **genişletme yuvasına** (4G/LTE modülünün de kullandığı aynı yuva) oturur. 4G veya LTE modülüyle aynı anda kullanılamaz — hücresel **veya** KVM işlevselliği arasında seçim yapın.

## İhtiyacınız Olanlar

- Kurulumdan önce [paket içeriği](/products/kvmext/whats-in-the-box/) doğrulanmış olmalı
- Openterface Genişletme Modülü v2 kartı
- **Bir Ethernet kartı** (100M veya 1000M — bkz. [Ethernet Kılavuzu](/products/kvmext/ethernet/))
- Genişletme yuvası kapağı (pakete dahil)
- Montaj vidaları için altıgen tornavida
- ESD koruması (bileklik veya topraklı yüzey) — önerilir

## Kurulum Adımları

### **1. Gücü kapatın**

uConsole'u kapatın ve tüm güç ile kabloları çıkarın.

### **2. Mevcut modülü çıkarın**

4G/LTE veya başka bir genişletme modülü takılıysa:

- İki montaj vidasını çıkarmak için altıgen tornavida kullanın.
- Yaylı kontakların eğilmesini önlemek için kartı **düz yukarı** kaldırın.
- Orijinal modülü ve vidaları daha sonra yeniden takmayı planlıyorsanız güvenli bir yerde saklayın.

### **3. Ethernet kartınızı seçin**

Ana kartı yerleştirmeden önce hangi kartı takacağınıza karar verin:

| Kart | Ne zaman kullanılır |
|------|---------------------|
| **100M** | Tüm uConsole anakartları — evrensel uyumluluk |
| **1000M** | Yalnızca **HackerGadgets uConsole Yükseltme Kiti** sahipseniz ve gigabit gerekiyorsa |

Tam ayrıntılar için bkz. [Ethernet Kılavuzu](/products/kvmext/ethernet/).

### **4. Genişletme Modülü v2'yi Takın**

![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:240px"}

- Genişletme Modülü v2'yi genişletme yuvasına sıkıca yerleştirin.
- Yaylı kontakların tüm pedlerde eşit şekilde hizalandığından emin olun.
- Montaj vidalarını yeniden takın ve **nazikçe** sıkın — aşırı sıkmayın.

### **5. Kurulumu doğrulayın**

Kart, fark edilir bir sallanma olmadan **düz ve sabit** durmalıdır. Tüm yaylı kontaklar eşit şekilde basmalıdır.

### **6. Genişletme yuvası kapağını takın**

Modülü korumak ve uConsole'un görünümünü korumak için genişletme yuvası kapağını yeniden takın.

??? note "Genişletme yuvası kapağındaki metin yönü"
    Kapaktaki metin bazı görüş açılarından baş aşağı görünebilir. Metin, uConsole'u elinize aldığınızda ve kullanım sırasındaki doğal konum olan portlara yukarıdan baktığınızda okunabilecek şekilde yönlendirilmiştir.

---

**Sonraki adımlar**

1. [Yazılım Kurulumu](/products/kvmext/software-setup/) — Openterface ana uygulamasını uConsole'unuza kurun
2. [Hedef Cihaza Bağlanma](/products/kvmext/connect-to-target/) — HDMI + USB kablolama
3. [Özellikler ve Teknik Özellikler](/products/kvmext/features/) — tüm teknik özellikler

## Eski v1 kurulumu

İlk nesil modül (37 × 77 mm), PCB kalınlık telafisi için pul kullanıyordu. Bkz. [Eski v1 — Donanım Kurulumu](/products/kvmext/v1/hardware-installation/).
