---
title: "Özellikler ve Teknik Özellikler | Extension Module v2"
description: "Openterface uConsole KVM Extension Module v2'nin tam genel bakışı: HDMI KVM, çift Ethernet, SD kart, USB geçişi ve teknik özellikler."
keywords: "KVM uzantı v2 özellikleri, uConsole KVM, HDMI KVM, Ethernet genişletme, SD kart, taşınabilir KVM, teknik özellikler"
---

# **Özellikler ve Teknik Özellikler** | Extension Module v2

![kvmext-v2-pcb-front](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-front.webp){:style="max-height:320px"}
![kvmext-v2-pcb-detail](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-pcb-detail.webp){:style="max-height:320px"}

## Temel Özellikler

- **Doğrudan KVM Kontrolü**: HDMI girişi ve USB HID klavye/fare emülasyonu aracılığıyla bir hedef cihazı görüntüleyin ve kontrol edin — BIOS erişimi, işletim sistemi kurulumu ve headless sunucu kurtarma işlemleri için idealdir.
- **Çift Ağ Kartı Desteği**: Hem **100M** hem de **1000M** Ethernet kartları dahildir. Tüm uConsole temel kartlarında 100M kullanın; gigabit ağ için [HackerGadgets uConsole Upgrade Kit](https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole) ile 1000M kullanın.
- **SD Kart Okuma/Yazma**: Harici bir kart okuyucu olmadan uConsole'unuzdan imaj yazın, günlükleri dışa aktarın ve dosyaları aktarın.
- **USB 2.0 Paylaşımlı Geçiş**: Esnek hata ayıklama ve bakım için uConsole ile hedef cihaz arasında USB erişimini değiştirin.
- **Düşük Gecikme**: uConsole ekranına **1080p @ 60 Hz** çıkış ile **70 ms**'nin altında video gecikmesi.
- **Taşınabilir ve Yuva Güçlemeli**: Kompakt **77.3 × 34.7 mm** tasarım, uConsole genişletme yuvasından güç alır — harici güç adaptörü gerekmez.
- **Açık Kaynak Uyumlu**: Açık kaynak ana bilgisayar uygulamaları ve topluluk desteği ile Openterface KVM platformu üzerine inşa edilmiştir.

## Teknik Özellikler

| Öğe | Teknik Özellik |
|------|---------------|
| **Ürün adı** | Openterface uConsole KVM Extension Module v2 |
| **Kart boyutu** | 77.3 × 34.7 mm |
| **Video girişi** | HDMI ile 4K @ 30 Hz (RGB/YCBCR444) veya 4K @ 60 Hz (YCBCR420) |
| **Video çıkışı** | uConsole ekranına 1080p @ 60 Hz |
| **Gecikme** | < 70 ms |
| **KVM kontrolü** | USB HID klavye ve fare emülasyonu |
| **Ağ** | 100M tüm uConsole temel kartlarında çalışır; 1000M uConsole Upgrade Kit gerektirir |
| **SD kart** | Ana bilgisayar uygulaması aracılığıyla ana bilgisayar/hedef geçişi ile okuma/yazma |
| **USB paylaşımı** | USB 2.0 Full Speed (12 Mbps) paylaşımlı geçiş |
| **Hedef platformlar** | Windows, macOS, Linux, x86 sistemleri, ARM SBC'ler |
| **Güç** | uConsole genişletme yuvasından güç alır |
| **Harici güç** | Gerekli değil |

### Tam Klavye ve Fare Emülasyonu

- **USB HID**: Mutlak ve bağıl fare konumlandırma, tam klavye desteği, multimedya tuşları.
- **Bağlantı**: Uzantı kartının Type-C bağlantı noktası aracılığıyla hedefe USB bağlantısı.

### Video ve Ses

- **Giriş**: HDMI üzerinden 4K'ya kadar (mod ayrıntıları için yukarıdaki tabloya bakın)
- **Çıkış**: 70 ms'nin altında gecikme ile Full HD 1080p @ 60 Hz
- **Ekran**: uConsole'un yerleşik ekranını kullanır
- **Sıkıştırma**: YUV ve MJPEG desteği
- **Uyumluluk**: VGA, DVI, Micro HDMI (adaptörler aracılığıyla)
- **Ses**: HDMI gömülü ses geçişi

### Bağlantı ve Güç

- **Güç**: Doğrudan uConsole genişletme yuvasından güç çeker
- **Hedef yazılımı**: Hedef cihazda kurulum gerekmez

## İlgili

- [Ethernet Kılavuzu](/products/kvmext/ethernet/) — 100M ve 1000M kart seçimi
- [SD Kart Kılavuzu](/products/kvmext/sd-card/) — imaj oluşturma ve dosya aktarımı
- [Satın Alma Seçenekleri](/products/kvmext/purchase-options/) — Yalnızca Uzantı ve Upgrade Kit paketi
- [Eski v1 özellikleri](/products/kvmext/v1/features/) — birinci nesil modül
