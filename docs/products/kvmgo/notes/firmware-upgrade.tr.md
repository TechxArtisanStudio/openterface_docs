---
title: "KVM-Go Firmware Güncelleme"
description: KVM-Go, klavye ve fare emülasyonu için WCH'nin CH32V208 çipini kullanır. Şu anda firmware yazma, yalnızca Windows için kullanılabilen WCH'nin resmi… Openterface
---

# KVM-Go Firmware Güncelleme

## Genel Bakış

KVM-Go, klavye ve fare emülasyonu için WCH'nin CH32V208 çipini kullanır. Şu anda firmware yazma, yalnızca Windows için kullanılabilen WCH'nin resmi programlama aracını gerektirir. Bu nedenle firmware güncellemeleri şimdilik bir Windows sisteminde yapılmalıdır.

Doğrudan cihaza entegre edilecek, platformlar arası kendi geliştirdiğimiz firmware güncelleme çözümü üzerinde aktif olarak çalışıyoruz. Hazır olduğunda, üçüncü taraf araçlar olmadan tüm büyük işletim sistemlerinde firmware güncellemelerini destekleyecektir.

> **Not:** Bu manuel firmware güncelleme prosedürü, erken geliştirme birimleri için geçici bir çözümdür. Resmi üretim ürünleri için firmware güncellemeleri yazılımımıza sorunsuz entegre edilecek ve üçüncü taraf araçlar veya manuel prosedürler olmadan uygulama üzerinden doğrudan firmware güncellemenize olanak tanıyacaktır.

## Ön Koşullar

Devam etmeden önce şunlara sahip olduğunuzdan emin olun:

- Bir Windows bilgisayar
- WCH ISP Tool yüklü
- Yazma için hazır firmware dosyası (`.hex` formatı)

### Firmware İndirme

En son KVM-Go firmware dosyasını indirin:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — KVM-Go klavye ve fare emülasyonu için en son firmware (CH32V208 çip)

Güncelleme işlemine devam etmeden önce firmware dosyasını Windows bilgisayarınızda kolayca erişilebilir bir konuma kaydedin.

### WCH ISP Tool İndirme

[WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") indirin ve yükleyin (yalnızca Windows).

Sabır ve desteğiniz için teşekkürler!

## Adım Adım Talimatlar

### Adım 1: Windows'ta Aracı İndirin ve Açın

Windows bilgisayarınızda WCH ISP Tool'u başlatın.

![WCH ISP Tool arayüzü](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### Adım 2: KVM-Go'yu Yazma İçin Hazırlayın

KVM-Go'ya firmware yazmak için:

1. Cihazın kapalı olduğundan emin olun
2. Bir USB Type-C bağlantı noktasına bağlarken düğmeyi basılı tutun

**İpucu:** Her iki bağlantı noktasından da yazabilirsiniz, ancak «target» bağlantı noktası yazma sırasında genellikle daha kararlıdır.

![KVM-Go kablolama ve bağlantı kurulumu](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### Adım 3: Firmware Dosyasını Seçin

Bağlantı başarılı olursa, araç otomatik olarak çip modelini (CH32V20X serisi) algılar.

1. Yazmak istediğiniz firmware dosyasını göz atmak ve seçmek için «...» düğmesine tıklayın
2. `.hex` firmware dosyasını seçin
3. **Önemli:** Firmware dosyasının yanındaki kutuyu işaretlemeyi unutmayın

![WCH ISP Tool'da algılanan çip modeli](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![Firmware dosyasını göz atma ve seçme](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![Onay kutusu işaretli seçili firmware dosyası](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### Adım 4: Mevcut Firmware Korumasını Kaldırın

Yeni firmware yazmadan önce, mevcut firmware'in yazma korumasını kaldırmanız gerekir:

1. Araçtaki «Deprotect» seçeneğine tıklayın
2. Yazma moduna girmek için KVM-Go'daki fiziksel düğmeye kısaca basın
3. Koruma kaldırma işleminin tamamlanmasını bekleyin

![Araçtaki Deprotect seçeneği](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![Yazma moduna girmek için KVM-Go düğmesine basın](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### Adım 5: Firmware İndirin ve Yazın

Firmware koruması kaldırıldıktan ve seçildikten sonra:

1. Yazma aracındaki «Download» düğmesine tıklayın
2. Yazma işleminin tamamlanmasını bekleyin
3. Araç, firmware'in başarıyla yazıldığını gösterecektir

![Firmware indirme ve yazma işlemi](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## Ek Okuma

- [Openterface KVM-Go İnceleme Kılavuzu](review-guide.md) — Mühendislik prototip birimleri için önemli notlar ve bilinen sorunlar
