---
title: "SSS | Extension Module v2"
description: "Openterface uConsole KVM Extension Module v2 için SSS: Ethernet kartları, Upgrade Kit, SD kart, yazılım kurulumu, uyumluluk ve sorun giderme."
keywords: "KVM genişletme v2 SSS, uConsole KVM, Ethernet, SD kart, sorun giderme, Upgrade Kit"
---

# SSS | Extension Module v2

**Openterface uConsole KVM Extension Module v2** SSS sayfasına hoş geldiniz.

İhtiyacınız olanı bulamazsanız [support@openterface.com](mailto:support@openterface.com) adresine e-posta gönderebilir veya [Discord](/discord) topluluğumuza katılabilirsiniz.

---

## :material-clipboard-list: Hızlı Gezinti

- [Ürün ve satın alma](#product--purchase)
- [Kurulum ve donanım](#installation--hardware)
- [Uyumluluk](#compatibility)
- [Kontrol ve özellikler](#control--features)
- [Video ve ses](#video--audio)
- [Sorun giderme](#troubleshooting)
- [Daha fazlası](#more)

---

## Ürün ve satın alma

**:material-chat-question:{ .faq } Extension Module v2 tek bir ürün mü yoksa iki ağ sürümü mü?**

Bu **tek bir üründür**. Hem 100M hem de 1000M Ethernet kartları kutuya dahildir. [Satın Alma Seçenekleri](/products/kvmext/purchase-options/) sayfasına bakın.

**:material-chat-question:{ .faq } Hangi Ethernet kartını kullanmalıyım?**

Tüm uConsole temel kartlarında **100M** kartı kullanın. **1000M** kartı yalnızca **HackerGadgets uConsole Upgrade Kit**'e sahipseniz ve gigabit ağa ihtiyacınız varsa kullanın. [Ethernet Kılavuzu](/products/kvmext/ethernet/) sayfasına bakın.

**:material-chat-question:{ .faq } HackerGadgets uConsole Upgrade Kit'e ihtiyacım var mı?**

Yalnızca **gigabit Ethernet** için. 100M kart, Upgrade Kit olmadan çalışır. Kite sahip değilseniz, ödeme sırasında paket seçeneğini seçin veya kiti ayrı olarak satın alın.

**:material-chat-question:{ .faq } uConsole dahil mi?**

Hayır. ClockworkPi uConsole cihazı ayrı olarak satılmaktadır.

---

## Kurulum ve donanım

**:material-chat-question:{ .faq } Extension Module v2 nasıl çalışır?**

Hedef cihazdan HDMI sinyalini yakalar ve uConsole üzerinde görüntüler. uConsole klavyesi ve trackball'u, USB HID emülasyonu aracılığıyla hedefi kontrol eder. İsteğe bağlı Ethernet ve SD kart özellikleri, ağ hata ayıklama ve kalıp alma iş akışlarını genişletir.

**:material-chat-question:{ .faq } Bunu 4G/LTE modülü takılıyken kullanabilir miyim?**

Hayır. Extension Module v2, uConsole genişletme yuvasını kullanır ve 4G veya LTE modülü ile **aynı anda** kullanılamaz.

**:material-chat-question:{ .faq } Kurulum için hangi araçlara ihtiyacım var?**

Montaj vidaları için altıgen tornavida. ESD (Elektrostatik Deşarj) önlemleri alınması önerilir.

**:material-chat-question:{ .faq } Kurulum geri alınabilir mi?**

Evet. Gerekirse Extension Module v2'yi çıkarın ve orijinal 4G/LTE modülünüzü yeniden takın.

---

## Uyumluluk

**:material-chat-question:{ .faq } Hangi uConsole modelleri uyumludur?**

Standart genişletme yuvasına sahip uConsole cihazlarıyla uyumludur. Onaylamak için cihaz özelliklerinizi kontrol edin.

**:material-chat-question:{ .faq } Hangi hedef cihazları kontrol edebilirim?**

HDMI çıkışı olan herhangi bir cihaz: masaüstü bilgisayarlar, sunucular, SBC'ler (Raspberry Pi vb.), gömülü sistemler, endüstriyel PC'ler ve daha fazlası.

**:material-chat-question:{ .faq } Hedef cihazın özel yazılıma ihtiyacı var mı?**

Hayır. KVM, USB HID emülasyonu kullanır — klavye ve fare için hedefte sürücü gerekmez. [USB tabanlı KVM teknolojisi](/tutorial/kvm/01-getting-started/) hakkında daha fazla bilgi edinin.

**:material-chat-question:{ .faq } Aynı anda birden fazla hedefi kontrol edebilir miyim?**

KVM için bir seferde tek hedef. HDMI ve USB kablolarını taşıyarak hedefleri değiştirin.

---

## Kontrol ve özellikler

**:material-chat-question:{ .faq } SD kart aracılığıyla dosya aktarabilir miyim?**

Evet. Extension Module v2, Openterface uygulaması aracılığıyla ana bilgisayar/hedef geçişi ile SD kart okuma/yazma işlemlerini destekler. [SD Kart Kılavuzu](/products/kvmext/sd-card/) sayfasına bakın.

**:material-chat-question:{ .faq } BIOS seviyesinde erişimi destekliyor mu?**

Evet. Doğrudan USB HID, ağ bağımlılıkları olmadan tam BIOS/UEFI erişimine olanak tanır.

**:material-chat-question:{ .faq } Peki ya eski v1 modülü?**

Birinci nesil 37 × 77 mm modül (Ethernet/SD yok) [Eski v1 Belgeleri](/products/kvmext/v1/) sayfasında belgelenmiştir.

---

## Video ve ses

**:material-chat-question:{ .faq } Hangi video çözünürlükleri desteklenir?**

- **Giriş**: HDMI üzerinden 4K @ 30 Hz (RGB/YCBCR444) veya 4K @ 60 Hz (YCBCR420)'e kadar
- **Çıkış**: uConsole ekranında 1080p @ 60 Hz

**:material-chat-question:{ .faq } Video gecikme süresi nedir?**

**70 ms**'nin altında — BIOS erişimi, bakım ve tanılama için uygundur.

**:material-chat-question:{ .faq } Ses destekleniyor mu?**

Evet. HDMI gömülü sesi uConsole hoparlörlerine aktarılır.

---

## Sorun Giderme

**:material-chat-question:{ .faq } Video sinyali yok**

- Her iki uçtaki HDMI bağlantılarını kontrol edin
- Hedef cihazın gücünün açık olduğunu ve HDMI üzerinden çıkış verdiğini doğrulayın
- Farklı bir HDMI kablosu deneyin
- Openterface QT'yi yeniden başlatın

**:material-chat-question:{ .faq } Klavye veya fare çalışmıyor**

- Genişletme modülünden hedefe giden USB kablosunu doğrulayın
- uConsole'u tamamen kapatın, 10 saniye bekleyin, açın ve yeniden deneyin
- Openterface QT'yi yeniden yükleyin (uConsole'unuz için arm64 derlemesi)
- Linux dağıtımınızı ve CM4 modülünüzü [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) veya [Discord](https://openterface.com/discord) üzerinden bildirin

**:material-chat-question:{ .faq } Yazılımı kurmak zordu**

[Yazılım Kurulumu](/products/kvmext/software-setup/) sayfasındaki GitHub Sürümlerini (Seçenek 1) veya ClockworkPi topluluk deposunu (Seçenek 3) deneyin. Adım adım yardım için [Discord](https://openterface.com/discord)'a katılın.

**:material-chat-question:{ .faq } USB geçiş portu çalışmıyor**

Güncel bir Openterface QT sürümünü kullandığınızdan emin olun. Ana bilgisayar uygulamasında USB erişimini açıp kapatın. Sorun devam ederse, [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) üzerinden bir sorun bildirin.

**:material-chat-question:{ .faq } HDMI yalnızca bir kutu içinde görüntüleniyor / uygulama ayarları menüsü yok**

En son Openterface QT sürümüne güncelleyin. uConsole'a özgü ekran ayarları için [Yazılım Kurulumu](/products/kvmext/software-setup/) ve Discord'daki topluluk başlıklarını kontrol edin.

**:material-chat-question:{ .faq } Uygulama modülü algılamıyor**

- Kartı genişletme yuvasına yeniden takın
- uConsole'u yeniden başlatın
- Openterface QT'yi yeniden yükleyin

---

## Daha Fazlası

**:material-chat-question:{ .faq } Yazılım açık kaynak mı?**

Evet. Openterface ana bilgisayar uygulamaları [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT) üzerinde açık kaynaktır.

**:material-chat-question:{ .faq } Nereden destek alabilirim?**

- **E-posta**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Topluluğumuza katılın](https://openterface.com/discord)
- **GitHub**: [Sorun bildirin](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
