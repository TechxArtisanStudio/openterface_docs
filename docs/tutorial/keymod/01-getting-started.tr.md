---
title: "KeyMod Eğitim - Başlarken"
description: "KeyMod uygulamasını yükleyin, KeyMod cihazınıza bağlanın ve ilk tuş vuruşunuzu 5 dakikadan kısa sürede gönderin."
keywords: "KeyMod başlangıç, KeyMod kurulum, KeyMod kurulum, bağlanma KeyMod"
---

# 1. Başlarken

KeyMod uygulamasını yükleyin, KeyMod donanımınıza bağlanın ve ilk tuş vuruşunuzu 5 dakikadan kısa sürede gönderin.

## İhtiyacınız Olan Şey

- **Openterface KeyMod donanım** — açık ve menzil dahilinde
- **Telefon veya tablet** — Android KeyMod uygulaması yüklüyken
- **USB kablo** (ilk kurulum için) — Telefonunuzu KeyMod cihaza bağlamak için USB-C
- **Bluetooth** (isteğe bağlı) — ilk kurulumdan sonra kablosuz bağlantı için

## 1. Adım: KeyMod Uygulamasını yükleyin

**Android:**

1. Telefonunuzun tarayıcısını açın ve [KeyMod GitHub Releases page](https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android/tags) menüsüne gidin.
2. En son `.apk` dosyasını indirin
3. Yüklemek için indirilen dosyaya dokunun
4. Android sorarsa tarayıcınız için **"Bilinmeyen uygulamaları yükle"** seçeneğine izin verin

Alternatif olarak kaynaktan derleyin — aşağıdaki 14'e bakın.

## 2. Adım: KeyMod Cihazınıza Bağlanın

KeyMod Openterface KeyMod donanımına iki şekilde bağlanır:

### USB Bağlantı (ilk kurulum için önerilir)

1. Telefonunuzu USB-C kablosunu kullanarak KeyMod cihazına bağlayın
2. KeyMod uygulamasını açın
3. Bağlantı simgesine dokunun (ana ekranın sağ üst köşesi)
4. **"USB Bağlantı"** öğesine dokunun
5. İstendiğinde USB izin istemini kabul edin
6. Yeşil renkli **"Bağlandı"** durum göstergesini görmelisiniz

### Bluetooth Bağlantısı (kablosuz)

1. Telefonunuzda Bluetooth'un etkin olduğundan emin olun
2. KeyMod'i açın ve bağlantı simgesine dokunun
3. **"Bluetooth Bağlantısı"**'na dokunun
4. KeyMod cihazınızın tarama listesinde görünmesini bekleyin
5. Eşleştirmek için dokunun
6. Yeşil renkli **"Bağlandı"** durum göstergesini görmelisiniz

> **İpucu:** Bağlantı iletişim kutusunda **"Başlangıçta otomatik bağlan"** seçeneğini etkinleştirin, böylece KeyMod her açtığınızda otomatik olarak yeniden bağlanır. Uygulama, son bağlantı türünüzü (USB veya BLE) hatırlar.

## Adım 3: Modunuzu Seçin — Hoş Geldiniz ve Rehber

Başlattıktan sonra mod kartlarının bulunduğu **Karşılama ve Rehberlik** ekranını göreceksiniz:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-welcome-mode-selection.webp" alt="Welcome screen with mode tiles and Start button" width="300" />
  <p><em>Hoş Geldiniz ve Rehber — o moda girmek için herhangi bir mod kartına dokunun.</em></p>
</div>

Modları istediğiniz zaman değiştirmek için yan menüyü (hamburger simgesi, sol üst) kullanın:

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-navigation-drawer.webp" alt="Navigation drawer with mode list" width="300" />
  <p><em>Gezinme çekmecesi — modları değiştirme, makrolara, sese ve ayarlara erişme.</em></p>
</div>

**"Seçimimi hatırla"** — Gelecekteki açılışlarda Hoş Geldiniz ekranını atlamak ve doğrudan son kullandığınız moda gitmek için bu kutuyu işaretleyin.

**"Atla" button** — Hoş Geldiniz ekranını atlayın ve daha önce kullandığınız moda hemen girin.

## Adım 4: İlk Tuş Vuruşunuzu Gönderin

1. **Klavye ve Fare** modunu seçin
2. Ekran klavyesindeki herhangi bir tuşa dokunun
3. İlgili tuş vuruşu hedef bilgisayara gönderilir

İşte bu! Artık hedef bilgisayarınızı uzaktan kontrol ediyorsunuz.

## Bağlantı Durumu Göstergeleri

| Gösterge | Anlamı |
|---|---|
| **Yeşil** (bağlı simgesi) | Etkin bağlantı, giriş göndermeye hazır |
| **Sarı/Mavi** (bağlantı simgesi) | Bağlantı devam ediyor |
| **Gri** (bağlantı kesildi simgesi) | Aktif bağlantı yok |
| **Sinyal çubukları** | BLE sinyal gücü veya USB aktif durum |

## Kaynaktan Derleme (Android, Geliştiriciler için)```bash
# Clone the repository
git clone https://github.com/TechxArtisanStudio/Openterface_KeyMod_Android.git
cd Openterface_KeyMod_Android

# Build (requires Java 21 and Android SDK 35)
./gradlew assembleDebug

# The APK will be at:
ls app/build/outputs/apk/debug/KeyMod-debug.apk

# Install on a connected device
adb install -r app/build/outputs/apk/debug/KeyMod-debug.apk
## Sonraki Adımlar

- **[Keyboard & Mouse →](02-keyboard-mouse.md)** — Yazma, değiştiriciler, touchpad ve metin girişi