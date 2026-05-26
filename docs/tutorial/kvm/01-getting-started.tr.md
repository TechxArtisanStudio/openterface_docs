# KVM Eğitimi 01 — Başlangıç

**Hedef kitle:** Yeni başlayanlar — Openterface KVM cihazlarını ilk kez kullananlar

---

## 1. KVM-over-USB Nedir?

Bir KVM (Klavye, Video, Fare) cihazı **ana bilgisayarınız** (çalışma istasyonunuz) ile **hedef bilgisayar** (sunucu, mini PC, gömülü cihaz) arasında konumlanır. Şunları yapar:

- Hedefin HDMI video çıkışını **yakalar** (ve varsa sesi)
- Klavye ve fare girişlerinizi HID emülasyonu ile **iletir**
- Hepsi tek bir USB kablosu üzerinden — ağ gerekmez

Bu, KVM cihazlarını uzak masaüstü yazılımlarından ayırır: hedefi **BIOS/UEFI**'de, önyükleme sırasında veya işletim sistemi çöktüğünde bile kontrol edebilirsiniz.

### Openterface KVM Cihazları

| Cihaz | Form Faktörü | Temel Özellik |
|--------|------------|-------------|
| **Mini-KVM** | Kompakt USB dongle | Masaüstü KVM-over-USB |
| **KVM-Go** | Alet çantası tarzı taşınabilir | Yerleşik kablolarla hareket halinde KVM, **BLE ile iPadOS desteği** |
| **uConsole KVM Extension** | Dahili modül | ClockworkPi uConsole için yerleşik KVM |

> Sadece klavye ve fare emülatörü olan **KeyMod** (video yok) mu arıyorsunuz? [KeyMod Eğitimine](../../keymod/index.md) bakın.

---

## 2. İhtiyacınız Olanlar

### Donanım

- **Openterface KVM cihazı** — Mini-KVM, KVM-Go veya uConsole KVM Extension
- **Ana bilgisayar** — macOS, Windows, Linux veya Android çalıştıran
- **Hedef bilgisayar** — HDMI çıkışı olan herhangi bir bilgisayar
- **HDMI kablosu** — Hedefin HDMI çıkışından KVM'nin HDMI girişine
- **USB kablosu** — KVM'den ana bilgisayarınıza (hem güç hem veri sağlar)

### İsteğe bağlı

- **USB anahtarlama kablosu** — KVM'den hedef cihazın USB portuna (klavye/fare emülasyonu için)
- **Klavye ve fare** — Ana bilgisayarı veya hedefi kontrol etmek için KVM'nin anahtarlanabilir USB portuna takın

---

## 3. Kurulum

### Ana Bilgisayar Uygulaması

| Platform | Uygulama | İndirme |
|----------|------------|----------|
| **macOS** | Openterface for macOS | [App Store](/appstore) veya [DMG](app/mmacos/dmg-installation.md) |
| **Windows** | Openterface QT | [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) |
| **Linux** | Openterface QT | [Flatpak](https://flathub.org/apps/com.openterface.openterfaceQT), .deb, .rpm, AppImage |
| **Android** | Openterface for Android | [Google Play](https://play.google.com/store/apps/details?id=com.openterface.AOS) veya [GitHub Releases](https://github.com/TechxArtisanStudio/Openterface_Android/releases) |
| **iPadOS** | Openterface for iPadOS | [App Store](/app/ipados/) — **yalnızca KVM-Go** |

### Android Gereksinimleri

Android uygulaması şunları gerektirir:

- **Android 8.0 (API 26)** veya üzeri
- **USB OTG desteği** — çoğu modern telefon destekler (Samsung, Google Pixel, OnePlus). OTG adaptörü ile USB bellek bağlayarak doğrulayın
- KVM cihazını telefonunuza bağlamak için **USB OTG kablosu veya adaptörü**

### iPadOS Gereksinimleri

iPadOS uygulaması şunları gerektirir:

- **iPadOS 17.0** veya üzeri
- **KVM-Go cihazı** — iPadOS, klavye/fare girişi için KVM-Go dongle'ına **Bluetooth Low Energy (BLE)** ile bağlanır ve video için USB yakalama kartını kullanır
- **Kamera ve Mikrofon izinleri** — yakalama kartından video önizlemesi ve ses izleme için gerekli
- **Bluetooth izni** — HID girişi için KVM-Go dongle'ını keşfetmek ve bağlanmak için gerekli
- **Fotoğraf Kitaplığı izni** (isteğe bağlı) — ekran görüntülerini ve kayıtları Fotoğraflar uygulamasına kaydetmek için

### macOS İzinleri

İlk başlatmada macOS şunları isteyecektir:

| İzin | Neden |
|-----------|-----|
| **Kamera** | HDMI yakalama çipinden video yakalar |
| **Mikrofon** | Hedeften ses yakalar (etkinse) |
| **Erişilebilirlik** | Göreceli modda HID fare kontrolü için gerekli |

### Linux İzinleri

- Kullanıcınızı `dialout` ve `video` gruplarına ekleyin: `sudo usermod -a -G dialout,video $USER`
- Cihaz erişimi için udev kurallarını yükleyin
- **BrlTTY çakışması:** `brltty` kaldırın veya seri çipi kara listeye alın — bkz. [Sorun Giderme](04-troubleshooting.md#brltty-conflict-linux)

### Windows

- Yükleyici CH340 seri sürücüsünü içerir. Taşınabilir sürümler için ayrı yükleyin.

---

## 4. Donanımı Bağlama

┌─────────────┐                        ┌──────────────────┐
│   HEDEF     │─── HDMI kablosu ─────▶│  Openterface     │
│  BİLGİSAYAR │                        │  KVM Cihazı      │
└─────────────┘                        │                  │
                                       │  ◄── USB kablo ──│── USB anahtarlama kablosu ──▶ Hedef USB portu
                                       └──────────────────┘
                                                │
                                                ▼
                                       ┌──────────────────┐
                                       │  ANA BİLGİSAYAR  │
                                       │  (bu uygulama)   │
                                       └──────────────────┘
1. Hedefin **HDMI çıkışını** KVM'nin **HDMI girişine** bağlayın
2. KVM'nin **USB** bağlantısını **ana bilgisayarınızdaki bir USB portuna** bağlayın
3. (İsteğe bağlı) USB anahtarlama kablosunu KVM'den hedefin USB portuna bağlayın
4. (İsteğe bağlı) Klavye/farenizi KVM'nin anahtarlanabilir USB portuna takın
5. Hedef cihazı **açın**

### Cihaz Algılama

KVM birden fazla USB cihazı olarak tanımlanır:
- **Video yakalama** (MS2109/MS2109S/MS2130S) — web kamerası olarak görünür
- **Serial** (CH9329 veya CH32V208) — `/dev/ttyUSB*` (Linux), `COM*` (Windows), `cu.usbserial-*` (macOS)
- **HID** — ürün yazılımı işlemleri için kullanılır

### Android Telefon ile Bağlanma

Android uygulamasını kullanırken bağlantı zinciri USB OTG kullanır:

┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   Openterface     │
│  Hedef PC    │               │   KVM Cihazı      │
│  (ekran)     │ ◀─────────── │                   │
│              │     USB       │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                                   USB OTG
                                        │
                               ┌────────▼─────────┐
                               │  Android Telefon │
                               │  (Openterface)   │
                               └──────────────────┘
```

Android için bağlantı sırası:

1. **HDMI:** Hedefin HDMI çıkışını KVM'nin HDMI **girişine** bağlayın
2. **USB (hedef):** Hedefin USB portunu KVM'nin USB portuna bağlayın — fare/klavye sinyallerini taşır
3. **USB OTG (telefon):** KVM'yi USB OTG kablosu/adaptörü ile Android telefonunuza bağlayın
4. **Güç:** KVM cihazını (ayrı güç girişi varsa) ve hedef bilgisayarı açın

Başarılı bağlantıda video önizlemesi yer tutucudan hedefin canlı ekranına geçer ve telefon ekranına dokunmak hedefteki imleci hareket ettirir.

### iPadOS ile Bağlanma

iPadOS uygulaması farklı bir bağlantı modeli kullanır: **giriş için BLE** ve **video için USB yakalama**.

```
┌──────────────┐     HDMI      ┌──────────────────┐
│              │ ────────────▶ │   KVM-Go Dongle   │
│  Hedef PC    │               │                   │
│  (ekran)     │ ◀─── USB ──── │                   │
└──────────────┘               └────────┬─────────┘
                                        │
                              ┌─────────┴─────────┐
                              │   USB Capture     │ (video)
                              │   BLE (FFF2)      │ (klavye/fare)
                              └─────────┬─────────┘
                                        │
                              ┌─────────▼─────────┐
                              │     iPad           │
                              │  (Openterface)     │
                              └───────────────────┘
```

iPadOS için bağlantı sırası:

1. **Donanım:** KVM-Go dongle'ını hedef PC'nin USB portuna takın ve HDMI girişini bağlayın
2. Hedef bilgisayarı **açın**
3. iPad'inizde **uygulamayı açın** ve kamera, mikrofon ve Bluetooth izinlerini verin
4. Araç çubuğundaki **BLE düğmesine** dokunun — uygulama `kvm*` adlı cihazları tarar
5. KVM-Go cihazınızın yanındaki **Connect**'e dokunun — düğme RSSI sinyal gücü ile yeşile döner
6. **Doğrulayın:** video önizlemesi hedef ekranı gösterir, dokunma tıklama gönderir, yazma tuş vuruşları gönderir

> **Not:** iPadOS uygulaması yalnızca **KVM-Go** ile çalışır. Mini-KVM ve uConsole KVM Extension BLE desteğine sahip değildir.

---

## 5. İlk Başlatma

### Ana Pencere

```
┌─────────────────────────────────────────────────────────┐
│  Menü Çubuğu / Araç Çubuğu                              │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              VİDEO GÖRÜNTÜLEME ALANI                    │
│         (hedef cihaz ekranını gösterir)                 │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Durum Çubuğu │ Port │ Tuşlar │ Fare │ Çözünürlük │    │
└─────────────────────────────────────────────────────────┘
```

### Android İzinleri

İlk başlatmada Android uygulaması şunları ister:

| İzin | Neden | Reddedilirse |
|---|---|---|
| **USB Host** | Openterface donanımıyla iletişim | Uygulama KVM cihazınızı algılayamaz |
| **Kamera** | HDMI yakalama çipinden video alır | Video önizlemesi yok |
| **Depolama** | Ekran görüntülerini ve kayıtları kaydeder | Yakalamalar kaydedilemez |

Tam işlevsellik için tüm izinleri verin. KVM cihazı algılandığında sistem USB izin iletişim kutusu da görünür — **Allow**'a dokunun.

### iPadOS İzinleri

İlk başlatmada iPadOS uygulaması şunları ister:

| İzin | Neden | Reddedilirse |
|---|---|---|
| **Kamera** | HDMI yakalama kartından video alır | Video önizlemesi yok |
| **Mikrofon** | Hedef PC sesini iPad hoparlörleri üzerinden izler | Ses izleme yok |
| **Bluetooth** | HID girişi için KVM-Go'yu keşfeder ve bağlanır | Klavye/fare girişi gönderilemez |
| **Fotoğraf Kitaplığı** | Ekran görüntülerini ve kayıtları kaydeder | Yakalamalar uygulama Documents klasörüne kaydedilir |

Yanlışlıkla bir izni reddettiyseniz **Settings > Privacy & Security** bölümünden yeniden etkinleştirin.

### Bağlantıyı Doğrulama

- **HDMI göstergesi:** yeşil = sinyal algılandı, turuncu = sinyal yok, gri = bilinmiyor
- **Klavye göstergesi:** yeşil = bağlı, turuncu = bulunamadı, gri = bilinmiyor
- **Fare göstergesi:** yeşil = bağlı, turuncu = bulunamadı, gri = bilinmiyor
- **Serial port:** port adı ve baud hızı göstermelidir (9600 veya 115200)

Göstergeler turuncu veya gri ise [Sorun Giderme](04-troubleshooting.md) bölümüne bakın.

---

## 6. Temel KVM Kontrolü

### Fare Modları

| Mod | Açıklama | En İyi |
|------|-------------|----------|
| **Absolute** (varsayılan) | Ana bilgisayar imleci doğrudan hedef ekranına eşlenir | Genel kullanım, GUI gezinme |
| **Relative (HID)** | Fare hareketleri HID üzerinden delta olarak gönderilir | Oyun, hızlı etkileşim |

Araç çubuğu anahtarı veya **Control > Mouse Mode** ile değiştirin.

### Klavye Girişi

Uygulama penceresi odaktayken tüm tuş vuruşları hedefe iletilir:
- Standart tuşlar, işlev tuşları, değiştirici tuşlar
- Özel tuşlar: Ctrl+Alt+Del, Print Screen
- **Paste to Target:** Panodaki metni emüle edilmiş tuş vuruşları olarak gönderir

### USB Anahtarlama

Anahtarlanabilir USB portunu şunlar arasında değiştirin:
- **Host** — klavye/fareniz ana bilgisayarı kontrol eder
- **Target** — klavye/fareniz hedef bilgisayarı kontrol eder

---

## 7. Sonraki Adımlar

- **[Temel İşlemler →](02-basic-operations.md)** — Fare, klavye, video, ses, kayıt
- **[Gelişmiş Özellikler →](03-advanced-features.md)** — EDID, firmware, makrolar, betikler
- **[Sorun Giderme →](04-troubleshooting.md)** — Yaygın sorunlar ve çözümler
