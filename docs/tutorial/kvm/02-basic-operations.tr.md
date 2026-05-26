---
title: "KVM Eğitimi 02 — Temel İşlemler"
description: "Hedef kitle: Yeni başlayanlar ile Orta düzey — günlük kullanım özellikleri Resmi Openterface belgeleri: kurulum, SSS ve KVM-over-USB sorun giderme. Openterface."
---

# KVM Eğitimi 02 — Temel İşlemler

**Hedef kitle:** Yeni başlayanlar ile Orta düzey — günlük kullanım özellikleri

---

## 1. Fare Kontrolü

### Mutlak Mod (Varsayılan)

Ana bilgisayar fare imleci doğrudan hedef ekrana eşlenir. Her iki imleç de görünür.

- **En uygun:** Genel kullanım, sunucu yönetimi, BIOS gezinme
- **İmleç davranışı:** Video alanı üzerinde ana bilgisayar imlecini otomatik gizle veya her zaman göster

### Göreceli (HID) Modu

Fare hareketleri HID arayüzü üzerinden göreceli deltalar olarak gönderilir. Ana bilgisayar imleci gizlenir.

- **En uygun:** Oyun, ham fare girişi gerektiren uygulamalar
- **Gereksinimler:** macOS'ta Erişilebilirlik izni
- **Çıkış:** Genel klavye kısayolu (macOS) veya Esc'ye uzun basma (Qt)

### Android Fare Modları

Android uygulaması, ayarlar panelinden değiştirilebilen hedef fareyi kontrol etmek için üç yol sunar:

| Mod | Nasıl Çalışır | En Uygun |
|---|---|---|
| **Mutlak (Varsayılan)** | Herhangi bir yere dokunun; imleç oraya atlar ve sol tıklar. Konum orantılı eşlenir. | Çoğu görev |
| **Göreceli** | Parmağınızı sürükleyin; imleç sürüklemenize göre hareket eder, dizüstü trackpad gibi. Parmağınızı kaldırın; imleç yerinde kalır. | Hassas imleç konumlandırma |
| **Mutlak Sürükleme** | Dokunup basılı tutun; imleç atlar ve parmağınızı takip eder. "Drag" etiketi görünür. Bırakınca bırakır. | Dosya sürükleme, metin seçme |

**Android'de fare düğmeleri:** tek dokunuş = sol tık, uzun basma = sağ tık, çift dokunuş = çift tık.

### iPadOS Fare Modları

iPadOS uygulaması, araç çubuğundaki fare modu düğmesiyle değiştirilebilen iki fare modu sunar:

| Mod | Simge | Nasıl Çalışır | En Uygun |
|---|---|---|---|
| **Pan Modu** (Göreceli) | El simgesi | Parmak dizüstü trackpad gibi — sürükleyerek imleci hareket ettirin, tıklamak için dokunun | Genel masaüstü kullanımı, düz yüzey |
| **iPencil Modu** (Mutlak) | Kalem simgesi | Dokunma konumu doğrudan hedef ekran koordinatlarına eşlenir, çizim tableti gibi | Hassas işaretleme, Apple Pencil kullanımı |

**Her iki modda hareketler:**

| Hareket | Pan Modu | iPencil Modu |
|---|---|---|
| **Tek dokunuş** | Sol tık | İmleci noktaya taşı + sol tık |
| **Dokun ve sürükle** | İmleci hareket ettir (göreceli) | Sol düğme basılı sürükle |
| **Çift dokunuş** | Çift tık | Noktada çift tık |
| **Uzun basma** | Sağ tık | Noktada sağ tık |
| **İki parmakla dokunuş** | Sağ tık | Sağ tık |
| **İki parmakla sürükleme** | Kaydırma tekerleği | Kaydırma tekerleği |

**Hızlı Menü:** Sol Tık, Sağ Tık ve Sürükle seçeneklerini içeren menüyü açmak için video önizlemesine uzun basın.

**Sürükleme Modu:** Çift dokunup basılı tutun veya hızlı menüden Sürükle'yi seçin — sol düğme basılı kalır, "Dragging Mode Active" etiketi görünür.

### Performans Ön Ayarları (macOS)

**Control > Mouse Mode > Performance Presets** altında:

| Ön Ayar | Throttle | Baudrate | Kullanım Alanı |
|--------|----------|----------|----------|
| Low Performance Target | 30 Hz | 9600 | Yavaş hedef cihazlar |
| Casual Use | 80 Hz | 9600 | Günlük sunucu yönetimi |
| Gaming | 250 Hz | 115200 | Duyarlı oyun |
| Max Performance | 1000 Hz | 115200 | Maksimum duyarlılık |

Daha yüksek throttle = daha duyarlı. Daha yüksek baudrate = daha hızlı seri iletişim.

---

## 2. Klavye Girişi

### Standart Giriş

Uygulama penceresi odaktayken yazılan tüm tuş vuruşları hedefe iletilir.

### Özel Tuşlar

Araç çubuğu tuş paneli veya **Control > Special Keys** üzerinden tuş kombinasyonları gönderin:

- **F1–F12:** İşlev tuşları
- **Ctrl+Alt+Del:** Windows üç parmak selamı
- **Print Screen:** Ekran görüntüsü tuşu
- **Ctrl+Alt+F2:** Linux VT geçişi

### Klavye Düzeni

Hedef OS düzenini hedef bilgisayarla eşleşecek şekilde ayarlayın:

| Düzen | Davranış |
|--------|----------|
| **Windows** | Ana bilgisayar tuşlarını Windows kurallarına eşler |
| **Mac** | Ana bilgisayar tuşlarını Mac kurallarına eşler |
| **Linux** | Ana bilgisayar tuşlarını Linux kurallarına eşler |

Bölgesel düzenler (QWERTY UK, Danca, QWERTZ Almanca, AZERTY Fransızca, Japonca vb.) Qt uygulamasında da mevcuttur.

### Paste to Target

Uygulama panodaki metni emüle edilmiş tuş vuruşları olarak hedefe gönderir. Kullanıcı adları, komutlar, URL'ler için kullanışlıdır.

> **Not:** Yalnızca ASCII karakterler desteklenir. Uzun metinler eski/meşgul sistemlerde biçimlendirme kaybedebilir veya karakterler düşebilir.

**Yapıştırma davranışını yapılandırma (macOS):**
- **Ask Every Time:** Her seferinde ana bilgisayar veya hedef sorar
- **Host Paste:** Her zaman hedefe gönderir
- **Local Paste:** Her zaman ana bilgisayarda yapıştırır

### Android Ekran Klavyesi

Android uygulaması, ana ekranın sağ altındaki klavye düğmesi (⌨) ile erişilebilen tam bir ekran klavyesi sağlar:

| Kontrol | Ne Yapar |
|---|---|
| **ShortCut** | Hazır kısayollar: Ctrl+C/V, Win+L, Ctrl+Alt+Del, Alt+F4 vb. |
| **Function** | F1–F12, PrtSc, ScrLk, gezinme tuşları (Ins, Home, PgUp vb.), oklar |
| **System** | Harfler, rakamlar, noktalama, Backspace, Enter içeren QWERTY düzeni |
| **Modifier keys** | Ctrl, Shift, Alt, Win — sonraki tuştan sonra otomatik sıfırlanan geçiş düğmeleri |

**Ctrl+Alt+Del** gibi bir kombinasyon göndermek için: Ctrl'ye dokunun (vurgulanır), Alt'a dokunun (ikisi de vurgulanır), Del'e dokunun. Tuş gönderildikten sonra tüm değiştiriciler otomatik sıfırlanır.

Klavye ayrıca ayarlar panelinden seçilebilen **farklı bölgesel düzenleri** (ABD, Japonca JIS, Almanca QWERTZ vb.) destekler. Yakınlaştır/uzaklaştır düğmeleri tuş boyutlarını ayarlamanızı sağlar.

### iPadOS Klavye Girişi

iPadOS uygulaması iki klavye giriş yöntemini destekler:

**Yüzen Ekran Klavyesi:** Mac tarzı düzenli sürüklenebilir yüzen klavyeyi göstermek için araç çubuğundaki **Keyboard** düğmesine dokunun:

| Satır | Tuşlar |
|---|---|
| **Üst** | Esc, F1–F12, Del |
| **Rakam** | `, 1–0, -, =, Backspace |
| **QWERTY** | Tab, q–p, [, ], \, Enter |
| **Ana sıra** | Caps, a–l, ;, ', Enter |
| **Alt** | Shift, z–m, ,, ., /, Shift |
| **Değiştiriciler** | Ctrl, Alt, Cmd, Space, Cmd, Alt, Ctrl |

- **Değiştiricileri aç/kapat:** Ctrl, Shift, Alt, Cmd veya Caps'e dokunarak açın/kapatın (mavi vurgulanır)
- **Klavye modları:** Normal (standart yazma) ve Game (oyun girişi için optimize HID paket başlığı)
- **Sürükleme:** Klavyeyi ekranda istediğiniz yere taşımak için başlıktaki sürükleme tutamacından tutun

**Harici iPad Klavyesi:** iPad'e bağlı fiziksel klavyeler (Bluetooth, Smart Connector, USB) doğrudan hedef PC'ye iletilir. Değiştirici tuşlar basma/bırakma olayları olarak gönderilir; `Ctrl+C` veya `Alt+Tab` gibi kombinasyonlar doğal çalışır.

**Bileşik Tuş Kısayolları:** Uygulama, araç çubuğundan kategorilere göre düzenlenmiş yaygın kısayollar kütüphanesi içerir:

| Kategori | Örnekler |
|---|---|
| **Navigation** | Ctrl+C/V/X/A/F, Ctrl+Home/End, Page Up/Down |
| **Editing** | Ctrl+Z/Y, Ctrl+B/I/U, Ctrl+D |
| **System** | Ctrl+S/O/P/R, F11, Alt+F4 |
| **Application** | Alt+Tab, Cmd+M, Cmd+Shift+3/4 (macOS ekran görüntüleri) |

---

## 3. Video Ayarları

### Çözünürlük Gösterimi

Araç çubuğu, hedeften gelen mevcut giriş çözünürlüğünü ve FPS'i gösterir. Çözünürlük, hedefin HDMI üzerinden çıkış verdiğine göre belirlenir.

### Desteklenen Çözünürlükler

| Çözünürlük | Kare Hızı Aralığı |
|------------|-----------------|
| 640x480 | 5–60 Hz |
| 720x480 | 5–60 Hz |
| 800x600 | 5–60 Hz |
| 1024x768 | 10–60 Hz |
| 1280x720 | 10–60 Hz |
| 1280x1024 | 5–30 Hz |
| 1600x1200 | 5–30 Hz |
| 1920x1080 | 5–30 Hz |

### Çözünürlük Değiştirme

1. Tercih edilen çözünürlüğü video ayarlarında yapılandırın

### En-Boy Oranı ve Ölçekleme

| Mod | Davranış |
|------|----------|
| **Active Resolution** | Aktif video alanını otomatik algılar |
| **HID Resolution** | Yakalama kartı donanımından çözünürlük kullanır |
| **Custom** | Oranı manuel ayarlayın (16:9, 4:3, 21:9 vb.) |

**Ölçekleme:** Stretch (pencereyi doldurur, bozulabilir), Fit (letterbox), Fill (kırpılabilir).

### Yakınlaştırma

Yakınlaştır/uzaklaştır, sığdıracak şekilde sıfırla ve yakınlaştırıldığında kaydırmak için pan yap.

### Video Backend (Qt)

| Backend | Platform | Notlar |
|---------|----------|-------|
| **FFmpeg** | Tümü | Önerilen, donanım hızlandırma |
| **GStreamer** | Linux | Pipeline esnekliği |
| **Qt Multimedia** | Windows | Basit yedek |

**Preferences > Video > Media Backend** üzerinden değiştirin. Değiştirdikten sonra yeniden başlatın.

### Android Video Kontrolleri

Android uygulamasında video ayarlarına ayarlar panelinden (Menü düğmesi ☰) erişilir:

- **Video Format** — Çözünürlük (1920×1080, 1280×720, 640×480) ve kare hızı (30fps, 60fps) seçin. Video takılıyorsa daha düşük çözünürlük/kare hızı kullanın.
- **Controls** — **brightness**, **contrast** ve **hue** için gerçek zamanlı kaydırıcılar
- **Rotate/Flip** — 90° saat yönünde/saat yönünün tersine döndür, yatay/dikey çevir. KVM cihazı ters veya yan monte edildiğinde kullanışlıdır

Ayarlar oturumlar arasında kalır — yalnızca bir kez yapılandırmanız yeterlidir.

### iPadOS Video Kontrolleri

iPadOS'ta video kontrollerine alt araç çubuğundan erişilir:

- **Resolution Switching** — Mevcut çözünürlüğü gösteren **Video** düğmesine dokunarak şunlardan seçin: 2160p (4K), 1080p (varsayılan), 720p veya 480p. Daha yavaş bağlantılarda daha iyi performans için daha düşük çözünürlük.
- **Zoom Mode** — Yakınlaştırma moduna girmek için **Zoom**'a dokunun, ardından iki parmakla sıkıştırarak yakınlaştırın. Yakınlaştırma göstergesi mevcut seviyeyi gösterir (ör. `2.5x`). Yakınlaştırıldığında tek parmakla sürükleyerek görünüm alanını kaydırın. Çıkmak için Zoom'a tekrar dokunun.
- **Fullscreen** — Araç çubuğunu gizlemek ve videoyu tüm ekranı dolduracak şekilde genişletmek için **Fullscreen**'e dokunun. Çıkmak için sol üstteki ok düğmesine dokunun.
- **Screen Rotation** — Yönelim düzeltme modları arasında geçiş yapmak (Normal, 90° saat yönünde, 180°, 90° saat yönünün tersine) için **Rotate**'e dokunun. KVM-Go dongle yan veya ters monte edildiğinde kullanışlıdır. Döndürme hem canlı önizlemeye hem kaydedilen görüntülere uygulanır.

Kamera başlarken "Starting Camera..." yükleme göstergesi görünür. Kamera bağlı değilse ancak izinler verilmişse bir rehber görseli gösterilir.

---

## 4. Hedeften Ses

HDMI yakalama çipi, HDMI sinyalinden ses çıkarır ve ana bilgisayara USB ses girişi olarak sunar.

### Sesi Etkinleştirme

1. Ses simgesine tıklayın veya ses ayarlarını açın
2. Ses yakalamayı etkinleştirin
3. Doğru giriş cihazını seçin (ör. "OpenterfaceA")
4. Ana bilgisayarınızın çıkış cihazını seçin

Ses çoğu platformda varsayılan olarak kapalıdır.

### Ses Kontrolü

- **Hedef tarafı:** Hedef bilgisayarda ayarlayın
- **Ana bilgisayar tarafı:** Yakalama cihazı için ana bilgisayar OS ses karıştırıcınızı kullanın

### iPadOS Ses İzleme

iPadOS uygulaması, hedef PC'nin sesini iPad hoparlörleriniz veya kulaklıklarınız üzerinden dinlemenizi sağlar:

- İzlemeyi açıp kapatmak için araç çubuğundaki **Audio** düğmesine (hoparlör simgesi) dokunun
- **Simge durumları:** gri çizgili hoparlör = yetkilendirilmemiş, kırmızı çizgili hoparlör = kapalı, dalgalı yeşil hoparlör = açık
- İlk kullanımda uygulama mikrofon izni ister
- Ses iPad hoparlörlerinden veya bağlı kulaklık/Bluetooth sesinden çalar
- **Kayıt sırasında:** geri bildirimi önlemek için izleme sesi geçici olarak susturulur, ancak ses yine de kayıt dosyasına yakalanır

---

## 5. Ekran Yakalama ve Kayıt

### Ekran Görüntüsü

Araç çubuğundaki kamera simgesine tıklayın. Görüntüler OS'nizin varsayılan medya klasörüne kaydedilir:
- **Linux:** `~/Pictures`
- **Windows:** `C:\Users\<name>\Pictures`
- **macOS:** Kamera yakalamaları klasörü (Kamera menüsü üzerinden)

### Kayıt

Hedefin video ve ses akışını kaydetmeyi başlatmak/durdurmak için kayıt düğmesine tıklayın. Kayıt aktifken bir zamanlayıcı görünür.

**Kayıt ayarları:**
- Çıkış biçimi (MP4, AVI, MOV, MKV)
- Video bit hızı, ses codec'i
- Çıkış dizini

### Android Ekran Yakalama ve Kayıt

Android'de ayarlar panelinden erişilir:

- **Screen Capture** — Mevcut video karesinin anlık görüntüsünü cihazınızın varsayılan medya klasörüne kaydetmek için dokunun. **Storage permission** gerekir.
- **Record Video** — Kaydı başlatmak/durdurmak için dokunun. Üstte kırmızı kayıt göstergesi ve zamanlayıcı görünür. Video cihazınızın varsayılan medya klasörüne kaydedilir.

**Kullanım alanları:** hedefin önyükleme sürecini kaydetme, hata mesajlarını yakalama, yapılandırma adımlarını belgeleme.

### iPadOS Ekran Yakalama ve Kayıt

**Ekran görüntüleri:** Araç çubuğundaki **Screenshot** düğmesine (kamera simgesi) dokunun. Uygulama yüksek çözünürlüklü bir kare yakalar, yönelimi düzeltir ve JPEG olarak kaydeder.

**Video Kaydı:** Başlatmak/durdurmak için **Record** düğmesine dokunun. Durdurduktan sonra uygulama kayıt ayrıntılarını (süre ve dosya boyutu) gösterir.

| Ayar | Değer |
|---|---|
| **Video codec** | H.264, 30 fps |
| **Resolution** | Yakalama cihazıyla eşleşir (genellikle 1920×1080) |
| **Audio codec** | AAC, 128 kbps, 48 kHz, stereo |
| **Container** | MOV |

**Dosya konumları:**
- **App Documents:** `Documents/Recordings/` — Dosyalar uygulaması > iPad'imde > Openterface KVM > Recordings üzerinden göz atın
- **Photos App:** Fotoğraf Kitaplığı izni verilmiş ve ayarlarda etkinleştirilmişse
- **Dosya adlandırma:** `Openterface_YYYY-MM-DD_HH-mm-ss.jpg` (ekran görüntüleri) veya `.mov` (kayıtlar)

**Kullanım alanları:** hedefin önyükleme sürecini kaydetme, hata mesajlarını yakalama, yapılandırma adımlarını belgeleme.

---

## 6. Bağlantı Göstergeleri

| Gösterge | Yeşil | Turuncu | Gri |
|-----------|-------|--------|------|
| HDMI | Sinyal algılandı | Sinyal yok | Bilinmiyor |
| Keyboard | Bağlı | Bulunamadı | Bilinmiyor |
| Mouse | Bağlı | Bulunamadı | Bilinmiyor |

### USB Anahtarlama

USB anahtarlama geçişi, anahtarlanabilir portun **Host** veya **Target**'a yönlendirilip yönlendirilmediğini gösterir.

---

## 7. Ekran Koruyucuyu Engelleme

Hedef ekranı uyanık tutmak için periyodik olaylar göndermek üzere **Prevent Screen Saver**'ı (Edit/Device menüsü veya araç çubuğu üzerinden) etkinleştirin.

---

## 8. Tam Ekran Modu

Video alanıyla ekranı doldurmak ve arayüz öğelerini gizlemek için standart tam ekran düğmesini kullanın.

---

## Sonraki Adımlar

- **[Gelişmiş Özellikler →](03-advanced-features.md)** — EDID, firmware, makrolar, betikler, tanılama
- **[Sorun Giderme →](04-troubleshooting.md)** — Yaygın sorunlar ve çözümler
