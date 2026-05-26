---
title: "KeyMod Eğitim - Oyun Kumandası"
description: KeyMod'ı oyun, retro emülasyon ve oyun testi için özelleştirilebilir düzenlere sahip sanal oyun kumandası olarak kullanın. Telefonunuzu oyun, retro… Openterface
keywords: "KeyMod gamepad, sanal kumanda, oyun kumandası, WASD haritalama, analog çubuk"
---

# 8. Oyun Kumandası

Telefonunuzu oyun, retro emülasyon ve oyun testleri için sanal bir oyun kumandasına dönüştürün.

## Düzen

Gamepad, D-pad, eylem düğmeleri, omuz düğmeleri, analog çubuklar ve Başlat/Seç ile tam bir denetleyici düzeni sağlar.

| Kontrol | Nasıl |
|---|---|
| D-pad | Yön oklarına dokunun |
| Eylem düğmeleri (A, B, X, Y) | Onlara dokunun |
| Omuz düğmeleri | Üstteki L1, L2, R1, R2'ye dokunun |
| Analog çubuklar | Çubuk dairelerine dokunup sürükleyin |
| Başlat / Seç | Düğmelere dokunun |

## Ön Ayarlı Sistem (v7)

KeyMod 0.15 **önceden ayarlanmış bir oyun kumandası sistemini** tanıttı. Sabit yerleşik düzenler yerine, oyun kumandası yapılandırmaları artık geçiş yapabileceğiniz, içe aktarabileceğiniz ve dışa aktarabileceğiniz **ön ayarlar** olarak kaydediliyor.

### Ön ayarları yönetme

- **Mevcut düzenler arasında geçiş yapmak için araç çubuğundaki Ön Ayar çipine dokunun**
- **İçe aktarma, modül ekleme ve dışa aktarma seçenekleriyle tam ön ayar listesi için Ön Ayar çipine uzun basın**
- Birlikte verilen **emu-6** düzeni, başlangıç ön ayarı (`preset_default`) olarak gönderilir
- Ön ayarlar, düzen **schema v7** kullanılarak paylaşılabilir JSON dosyalardır

### Modül ekleme

Ön ayar menüsünden herhangi bir düzene yeni modüller ekleyebilirsiniz:

- **D-Pad / Stick** — sol başparmak modülü ekler (`stick_left`, `stick_left_2`, vb.)
- **Touchpad** — birlikte verilen L/M/R fare düğmeleriyle touchpad (`touchpad_1`, `touchpad_2`, vb.) ekler
- **Düğmeler** — yüz düğmeleri, omuz düğmeleri veya tetikleyiciler ekleyin

## Kişiselleştirme

- **Herhangi bir modülü yapılandırın** — yapılandırma iletişim kutusunu açmak ve davranışını ayarlamak için bir modüle dokunun
- **Analog ve Anahtar modu** — çubuklar `STICK_KEY` (dijital yön tuşları) veya `STICK_MOUSE` (göreceli işaretçi/fare hareketi) olarak yapılandırılabilir
- **WASD eşleme** — PC oyunları için sol çubuğa WASD tuşlarını atayın
- **Button/çubuk boyutu ölçeklendirme** — boyutları tercih ettiğiniz dokunmatik alana göre ayarlayın
- **Arka plan görüntüsü** — gamepad arka planını özelleştirin (paylaşılan ön ayarlara base64, en fazla 6 MiB olarak eklenir)
- **Dokunsal geri bildirim** — button tuşuna basıldığında titreşim (yalnızca yüz düğmeleri, fare tıklamaları değil)
- **Gyro** — oyun kumandası ekranı etkinken cihaz jiroskopunun ana bilgisayar işaretçisini hareket ettirmesini etkinleştirin

### Modül modeli

Her ekran kontrolü üç katmanlı bir **modül**'tür:

| Katman | Neyi tanımlar |
|---|---|
| **Yuva / kimlik** | Kanvastaki hangi kontrol (örn. `stick_left`, `stick_right`, `touchpad_1`) |
| **Davranış (tür)** | Ev sahibi ne alır: `STICK_KEY`, `STICK_MOUSE`, `DPAD`, `BUTTON`, `TOUCHPAD` |
| **Parametreler** | Aynı modül üzerinde ayarlama: `dpadVariant`, `stickMouseSensitivity`, `stickVisualVariant`, boyut, renk |

### Analog Çubuklar

- **Sol çubuk → Klavye tuşları:** Çapraz destekli ok tuşlarıyla eşleşir. Modül konfigürasyonunda WASD olarak yapılandırılabilir.
- **Sağ çubuk → Fare hareketi:** Yapılandırılabilir hassasiyete (`stickMouseSensitivity`) sahip `STICK_MOUSE` modu, kaymayı önlemek için ölü bölge.
- **Histerez:** Etkinleştirme (0,6) ve devre dışı bırakma (0,4) eşikleri, sınırdaki tuş seslerini önler.

### Touchpad

- **Çoklu touchpad desteği**: tek bir düzene birden fazla dokunmatik yüzey ekleyin (`touchpad_1`, `touchpad_2` vb.)
- **Uzun basıldığında yeniden boyutlandırmayla varsayılan olarak kare ayak izi**
- **Tüm dokunmatik yüzeylerde paylaşılan, birlikte verilen fare düğmeleri** (Sol/M/Sağ)
- **Fare button boyutu**: **Fare button boyutunu** ayarlamak için touchpad tuşuna uzun basın veya **Bu button boyutu** için tek bir fare button'a uzun basın

> **Not:** Gamepad HID protokolü aktif olarak geliştirilme aşamasındadır. Temel button destek çalışmaları; analog çubuğun hassasiyeti farklılık gösterebilir.

## Sorun Giderme

### Analog Çubuk Yanıt Vermiyor

| Belirti | Çözüm |
|---|---|
| **Çubuk eylem üretmiyor** | Modül konfigürasyonunu kontrol edin. Çubuğun ölü bölgeye (orta bölge) sıkışmadığını doğrulayın. Histerezis eşiklerini kontrol edin — tetikleme için çubuğun 0,6 aktivasyonunu geçmesi gerekir. |
| **Düğmeler yanlış anahtar gönderiyor** | Modül konfigürasyonunu açın ve button'ün tuş atamasını kontrol edin. Yapılandırma açılır penceresini açmak ve eşleştirmeyi düzeltmek için button öğesine dokunun. |
| **Touchpad fare düğmeleri tıklanmıyor** | Paketlenmiş L/M/R düğmelerinin ön ayarda mevcut olduğundan emin olun. touchpad eklenmesi otomatik olarak paylaşılan fare düğmelerini ekler. Atanan HID tuşu için modül yapılandırmasını kontrol edin. |

## Sonraki Adımlar

- **[← AI Integration](07-ai.md)** — Yapay zeka destekli metin iyileştirme ve komut asistanı
- **[Numpad →](09-numpad.md)** — Veri girişi için sayısal tuş takımı