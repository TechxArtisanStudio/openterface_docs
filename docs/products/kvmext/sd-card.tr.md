---
title: "SD Kart Kılavuzu | Uzantı Modülü v2"
description: "Openterface uConsole KVM Uzantı Modülü v2 üzerinde SD kart okuma/yazma işlemlerini kullanın. İmaj yazma, günlük kayıtları ve dosya aktarımı için uConsole ve hedef cihaz arasındaki erişimi değiştirin."
keywords: "SD kart, microSD, KVM uzantı v2, imaj yazma, dosya aktarımı, uConsole"
---

# **SD Kart Kılavuzu** | Uzantı Modülü v2

Uzantı Modülü v2, harici bir kart okuyucu taşımanıza gerek kalmadan uConsole'unuzdan imaj yazmanıza, günlük kayıtlarını dışa aktarmanıza ve dosya aktarımı yapmanıza olanak tanıyan **SD kart okuma/yazma** özelliğini içerir.

## Genel Bakış

Modül, **uConsole (ana bilgisayar)** ve **hedef cihaz** arasında paylaşılan bir microSD yuvası sağlar; bu, KVM-GO MicroSD geçiş iş akışına kavramsal olarak benzer, ancak uConsole genişletme modülüne entegre edilmiştir.

!!! note "Bir seferde bir taraf"
    SD kart ya uConsole'a **ya da** hedef cihaza bağlanır, asla aynı anda ikisine birden bağlanmaz. Erişimi Openterface ana bilgisayar uygulamasını kullanarak değiştirin.

## SD kartı takın

microSD kartı, modül yuvasına güvenli bir şekilde oturana kadar sıkıca yerleştirin.

## Ana bilgisayar uygulaması üzerinden kontrol

uConsole'unuzda **Openterface QT**'yi kullanarak şunları yapın:

- SD erişimini **ana bilgisayar** (uConsole) ve **hedef** arasında değiştirin
- uConsole'dan karta işletim sistemi imajları yazın
- Kartı çıkarmadan günlük kayıtlarını dışa aktarın veya dosya aktarımı yapın

SD özelliklerini kullanmadan önce [Yazılım Kurulumu](/products/kvmext/software-setup/) işlemini tamamladığınızdan emin olun.

## Tipik iş akışları

| İş Akışı | Açıklama |
|----------|-------------|
| **OS imajı yazma** | uConsole'dan Raspberry Pi, gömülü kart veya cihaz imajlarını yazın |
| **Günlük dışa aktarma** | Hedef cihazdan günlük kayıtlarını karta çekin, ardından uConsole'da okuyun |
| **Dosya aktarımı** | Ağ kullanılamadığında uConsole ve hedef cihaz arasında yapılandırmaları veya komut dosyalarını taşıyın |

## Güvenlik ipuçları

- Kartı fiziksel olarak çıkarmadan önce ana bilgisayar uygulamasında **çıkarın/ayırın**
- Okuma/yazma işlemlerinden önce doğru tarafa (ana bilgisayar veya hedef) geçiş yapın
- İmaj yazma iş yükleri için kaliteli microSD kartlar kullanın

## İlgili

- [Hedef Cihaza Bağlan](/products/kvmext/connect-to-target/)
- [Yazılım Kurulumu](/products/kvmext/software-setup/)
- [KVM-GO MicroSD Geçiş Kılavuzu](/products/kvmgo/microsd-switch/) — KVM-GO üzerinde benzer geçiş kavramı
