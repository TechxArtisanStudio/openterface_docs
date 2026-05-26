---
title: "KeyMod Öğretici"
description: "KeyMod uygulamasını kullanma kılavuzunun tamamı. Bilgisayarınızı telefonunuzdan nasıl bağlayacağınızı, kontrol edeceğinizi ve klavye, fare, oyun kumandası, makrolar ve sesli giriş modlarını nasıl kullanacağınızı öğrenin."
keywords: "KeyMod eğitimi, KeyMod nasıl kullanılır, telefon klavye kılavuzu, KeyMod uygulama eğitimi"
---

# KeyMod Öğretici

{% include "partials/keymod-tutorial-slideshow.html" %}

Bu eğitim KeyMod uygulamasının **Android** sürümünü kapsamaktadır. iOS sürümü geliştirilme aşamasındadır.

## KeyMod nedir?

KeyMod telefonunuzu veya tabletinizi herhangi bir bilgisayar için **evrensel giriş cihazına** dönüştürür. **Openterface KeyMod** donanımına (KVM — Klavye, Video, Fare değiştirici) bağlanır ve bu donanım daha sonra telefonunuzun tuş vuruşlarını, fare hareketlerini ve gamepad girişlerini sanki gerçek bir USB klavye ve fareden geliyormuş gibi hedef bilgisayara gönderir.

### Bağlantı nasıl çalışır?```
[ Your Phone ] ──USB/BLE──> [ KeyMod Hardware ] ──USB HID──> [ Target Computer ]
   (KeyMod app)                (CH9329 protocol)              (Windows/macOS/Linux)
Uygulama, seri bağlantı (115200 baud'da USB-C, 8N1 veya Bluetooth BLE) üzerinden **CH9329 protokolünü** kullanarak KeyMod donanımıyla iletişim kurar. KeyMod aygıtı hedef bilgisayara standart USB klavye ve fare olarak görünür; sürücüye gerek yoktur.

### Bu kimin için?

| Sen... | KeyMod size yardımcı olur... |
|---|---|
| **Sistem Yöneticisi** | Yedek klavye ve monitör taşımaya gerek kalmadan sunucuları telefonunuzdan yönetin |
| **Sunucu / Konuşmacı** | Slaytları odanın herhangi bir yerinden kontrol edin, tıklamaya gerek yok |
| **Oyuncu** | Telefonunuzu retro oyunlar için oyun kumandası veya ekstra kumanda olarak kullanın |
| **İçerik Oluşturucu** | Başka bir makinede kayıt yaparken kısayolları, makroları ve ses girişini tetikleyin |
| **Yetkili Kullanıcı** | Telefonunuzdan karmaşık klavye kısayolları, metin parçacıkları veya otomasyon dizileri gönderin |
| **Herkes** | Kanepenizden, yatağınızdan veya odanın diğer ucundan bilgisayarınıza yazın |

## Eğitim Bölümleri

| Kılavuzu | Açıklama |
|---|---|
| [1. Getting Started](01-getting-started.md) | Kurun, bağlanın ve ilk modunuzu seçin (5 dakika) |
| [2. Keyboard & Mouse](02-keyboard-mouse.md) | Yazma, değiştiriciler, touchpad ve metin girişi |
| [3. Target OS](03-target-keyboard.md) | Hedef işletim sistemi eşlemesi |
| [4. Shortcut Hub](04-shortcuts.md) | Popüler uygulamalar için profil tabanlı klavye kısayolları |
| [5. Macros](05-macros.md) | Gecikmeli otomatik tuş dizileri |
| [6. Voice Input](06-voice-input.md) | Whisper AI ile konuşmayı klavyeye |
| [7. AI Integration](07-ai.md) | Metin iyileştirme ve komut asistanı |
| [8. Gamepad](08-gamepad.md) | Özelleştirilebilir düzenlere sahip sanal oyun kumandası |
| [9. Numpad](09-numpad.md) | Veri girişi için sayısal tuş takımı |
| [10. Presentation](10-presentation.md) | Uzaktan kumandayı ve zamanlayıcıyı kaydırın |
| [11. Settings](11-settings.md) | Uygulama yapılandırması ve tercihleri ​​|
| [12. Troubleshooting](12-troubleshooting.md) | Yaygın sorunlar ve çözümleri |

## Yardım Alma

- **Hata raporları:** [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/issues)
- **Topluluk:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Kaynak kodu:** [Openterface_KeyMod_Android](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android)