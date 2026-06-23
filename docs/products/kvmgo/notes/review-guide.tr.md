---
title: "Openterface KVM-Go — İnceleme Kılavuzu (Mühendislik Prototipi)"
description: Yakında çıkacak ürünümüz 'yu test etmek için zaman ayırdığınız için teşekkürler. Bu birim bir mühendislik prototipidir ve firmware ile yazılımımız hızla…
---

# Openterface KVM-Go — İnceleme Kılavuzu (Mühendislik Prototipi)

## Genel Bakış

Yakında çıkacak ürünümüz **[Openterface KVM-Go](https://openterface.com/kvmgo/)**'yu test etmek için zaman ayırdığınız için teşekkürler.

Bu birim bir **mühendislik prototipidir** ve firmware ile yazılımımız hızla gelişiyor. Geri bildiriminiz seri üretim öncesinde ürünü iyileştirmemize doğrudan yardımcı olacaktır.

Test sırasında sorun yaşarsanız doğrudan bizimle iletişime geçin. **Videonuzu kaydetmeden önce bunları çözmenize yardımcı olmak için anında destek sağlayacağız.**

## Önemli Notlar

### Prototip feragatnamesi

Bu cihaz bir **mühendislik prototipidir**. Firmware ve yazılım hâlâ hatalar veya eksik özellikler içerebilir. Kararsızlık veya iş akışınızı engelleyen bir şey yaşarsanız bize bildirin. Üretim sürümü gönderilmeden önce sorunları düzelteceğiz.

### En son yazılımı kullanın

En iyi performans ve uyumluluk için GitHub Releases sayfamızdaki [Openterface yazılımının](https://docs.openterface.com/app/kvm/) **en son sürümünü** kullanın. Sık güncelliyoruz ve eski sürümler prototipinizin firmware'i ile eşleşmeyebilir.

## Bilinen sorunlar ve açıklamalar

> **Not:** Aşağıda listelenen tüm sorunlar üretim sürümünden önce ele alınacaktır.

### Yüzey sıcaklığı

Kullanım sırasında cihaz sıcak veya hatta çok sıcak hissedilebilir. Prototip daha yüksek performanslı çipler kullandığı için bu beklenen bir durumdur.

Lütfen unutmayın:

* Tüm sıcaklıklar güvenli çalışma aralığında kalır
* Yerleşik **sıcaklık sensörleri** yazılımda gerçek zamanlı termal durumu bildirir
* Çok günlük stres testleri kararlılık sorunu göstermez

Seri üretim öncesinde termal performansı geliştirmeye devam edeceğiz.

### Yazılım dağıtımı

Şu anda birden fazla platformu destekliyoruz:

* **macOS ve Windows**
  Bunlar en kararlı platformlardır ve tam özellik testi için önerilir.

* **Linux**
  Lütfen **AppImage** sürümünü kullanın.
  `.deb` ve `.rpm` paketleri dağıtıma bağlı olarak bağımlılık sorunları yaşayabilir. Bu yükleyicileri iyileştiriyoruz.

* **Android**
  Temel kontrol ve izleme için **Google Play**'de çalışan bir sürüm mevcuttur.
  Mobil iş akışlarını keşfetmek istiyorsanız deneyebilirsiniz.

* **iPadOS**
  **TestFlight** üzerinden kullanılabilir.
  Test etmek isterseniz **Apple ID**'nizi gönderin, sizi test listesine ekleyeceğim.

### Kopyala-yapıştır işlevi

Biriminizdeki firmware en son pano düzeltmelerimizi içermeyebilir. Bu sorunlar en yeni firmware'de zaten çözüldü. En son sürümü test etmek isterseniz [Firmware Güncelleme Kılavuzu](firmware-upgrade.md) ile güncelleyebilirsiniz.

### Sökme (İsteğe bağlı)

Sökmeleri seviyorsanız birimi sökebilirsiniz.

Prototipiniz şu bileşenleri içerir:

* **MS2130S** — Video yakalama çipi
* **WCH CH32V208** — USB klavye ve fare emülasyon MCU
* **Standart silikon termal macun** — bu prototipte uygulanmış

Şu anda **alüminyum bileşenler** ve **yüksek performanslı termal gres** kullanan geliştirilmiş termal çözümü test ediyoruz. Bu iyileştirmeler dahili testleri geçti, ancak sınırlı prototip stoğu nedeniyle inceleme birimlerine **henüz dahil değil**.

Biriminiz hâlâ **silikon macun** kullanıyor, ancak termal performans güvenli sınırlar içinde kalıyor.

### Gelişmiş özellikler (Mini-KVM'de desteklenir, KVM-Go'da yakında)

KVM-Go, Openterface Mini-KVM ile aynı tasarım felsefesini izler. Birkaç gelişmiş özellik aktif geliştirmede ancak mevcut prototipte **henüz kullanılamıyor**:

* **Özel EDID**
  Mini-KVM, uyumluluk sorunlarını çözmek için QT uygulamamız aracılığıyla EDID yüklemeye veya değiştirmeye izin verir.
  Bu özelliği KVM-Go'ya da getiriyoruz.

* **Yazılım tabanlı SD kart geçişi**
  Mini-KVM, USB-A portunu yazılım aracılığıyla host ve PC arasında geçiş yapmayı destekler.
  KVM-Go için micro-SD yuvası için benzer yazılım tabanlı geçiş geliştiriyoruz, ancak firmware'inizde henüz etkin değil.

Biriminizde henüz aktif olmasa bile bu yaklaşan özelliklerin farkında olmanızı istiyoruz.

### Açık kaynak taahhüdü

Evet, KVM-Go tamamen açık kaynak kalacak. Seri üretim için donanım tasarımı kesinleştikten sonra OSHWA sertifikasyonu (Open Source Hardware Association) için başvuracağız. Tüm donanım tasarım dosyaları ve STL modelleri GitHub deposuna yüklenecek: [https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware](https://github.com/TechxArtisanStudio/Openterface_KVM-GO_Hardware).

## Ek okuma

* [KVM-Go Firmware Güncelleme](firmware-upgrade.md) — Cihazınızı güncellemek için adım adım kılavuz
