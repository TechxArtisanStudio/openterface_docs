
# KVM Eğitimi 04 — Sorun Giderme

Openterface KVM cihazları için yaygın sorunlar ve çözümler.

---

## Cihaz Algılanmıyor

### Belirtiler
- Cihaz menüsünde "No devices found"
- Klavye ve fare göstergeleri turuncu veya gri
- Seri port "N/A" gösteriyor

### Teşhis

**Linux:**
```bash
lsusb | grep -E "534d|1a86"
dmesg | tail -20
ls /dev/hidraw*   # HID video chip
ls /dev/ttyUSB*   # serial chip
Beklenen: `534d:2109` (HDMI capture) ve `1a86:7523` veya `1a86:fe0c` (serial).

**macOS:** Apple Menüsü > Bu Mac Hakkında > Sistem Raporu > Donanım > USB — Openterface'i arayın.

**Windows:** Aygıt Yöneticisi > "Universal Serial Bus devices" ve "Ports (COM & LPT)" — CH340, "USB-SERIAL CH340 (COMx)" olarak görünmelidir.

### Çözümler

| Sorun | Çözüm |
|---------|-----|
| Cihaz lsusb/Sistem Raporu'nda yok | Farklı USB kablosu/port deneyin. USB 2.0+ gerekir |
| Cihaz görünüyor ama düğüm yok | udev kurallarını kontrol edin (Linux) veya sürücüleri yeniden yükleyin (Windows) |
| İzin reddedildi | Kullanıcıyı `dialout` ve `video` gruplarına ekleyin (Linux) |
| Algılandıktan sonra kayboluyor | `brltty` seri portu talep ediyor (Linux) — aşağıya bakın |

---

## BrlTTY Çakışması (Linux) {#brltty-conflict-linux}

**Linux'ta klavye/fare arızasının en yaygın nedeni.**

`brltty` (Braille terminal) hizmeti, CH9329/CH32V208 çipini de kapsayan USB seri cihazları talep eder.

### Düzeltme
```bash
# Option 1: Remove brltty (if you don't need Braille support)
sudo apt remove brltty          # Debian/Ubuntu
sudo dnf remove brltty          # Fedora

# Option 2: Blacklist the device (preferred)
echo 'ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="7523", ENV{BRLTTY_BRAILLE_DRIVER}=""' | sudo tee /etc/udev/rules.d/99-brltty-openterface.rules
sudo udevadm control --reload-rules
---

## Video Yok / Siyah Ekran

### Adımlar

1. **HDMI kablosunun** her iki uçta da sağlam bağlı olduğunu doğrulayın
2. **Hedef cihazın** HDMI çıkışı verdiğini kontrol edin (normal bir monitörle test edin)
3. **Farklı bir HDMI kablosu** deneyin
4. **Cihazı yeniden bağlayın** — uygulama hot-plug olaylarını yönetir
5. **Video çip seti algılamasını kontrol edin:** Desteklenen: MS2109, MS2109S, MS2130S

### Backend Seçimi (Qt)

Bir backend siyah ekran gösteriyorsa, **Preferences > Video > Media Backend** üzerinden başka birini deneyin:
- **FFmpeg** — En güvenilir (önerilen)
- **GStreamer** — Yalnızca Linux
- **Qt Multimedia** — Windows yedek seçeneği

### GStreamer Sorunları (Linux)

```bash
GST_DEBUG=3 ./openterfaceQT 2>&1 | grep -i error
Farklı bir sink deneyin:
```bash
OPENTERFACE_GST_SINK=xvimagesink ./openterfaceQT
```

### EDID Uyumsuzluğu

Hedef EDID'yi tanımazsa uyumlu bir çözünürlük çıkışı vermeyebilir. Hedefin çıkış çözünürlüğünü değiştirmeyi deneyin veya uygulamanın ekran ayarlarından EDID'yi düzenleyin.

---

## Klavye/Fare Yanıt Vermiyor

### Adımlar

1. **USB anahtarını** kontrol edin — **Target** konumunda olduğundan emin olun, Host değil
2. **Seri port durumunu** doğrulayın — port adı göstermeli, "N/A" değil
3. **Baud hızını değiştirmeyi** deneyin — 9600 veya 115200
4. **Kontrol çip setini** kontrol edin — Desteklenen: CH9329, CH32V208
5. **CTS izlemesini** doğrulayın — Uygulama HID olayları için Clear-To-Send hatlarını izler

### Fareye Özel Sorunlar

- **macOS'ta göreceli mod:** Erişilebilirlik izni gerektirir. **System Settings > Privacy & Security > Accessibility** bölümünü kontrol edin
- **Mutlak mod:** En-boy oranının hedef ekranla eşleştiğini doğrulayın
- **Fare gecikmesi:** Daha yüksek performans ön ayarı veya baud hızını artırmayı deneyin
- **Seri port çakışmaları (Linux):** Portu kullanan diğer uygulamaları kapatın: `sudo lsof /dev/ttyUSB0`

---

## Ses Çalmıyor

### Adımlar

1. Ses simgesi > Enable Audio ile **sesi etkinleştirin**
2. **Mikrofon iznini** kontrol edin — System Settings > Privacy & Security > Microphone (macOS)
3. **Doğru giriş cihazını** seçin — "OpenterfaceA" veya yakalama cihazı adı
4. **Doğru çıkış cihazını** seçin — hoparlörleriniz veya kulaklıklarınız
5. **Hedefin HDMI ses çıkışını** kontrol edin — hedef sesi HDMI üzerinden gönderecek şekilde yapılandırılmış mı?

---

## USB Seri Sürücü Sorunları

### macOS

```bash
kextstat | grep com.apple.driver.usb.cdc
```

Gerekirse [WCH CH34xDriver GitHub](https://github.com/WCHSoftGroup/ch34xser_macos) adresinden WCH CH34x sürücüsünü yükleyin. **System Settings > General > Login Items & Extensions > Driver Extensions** bölümünden etkinleştirin.

### Windows

Seri çip Aygıt Yöneticisi'nde görünmüyorsa CH340/CH341 sürücüsünü yükleyin. Yükleyici genellikle bunu içerir; taşınabilir derlemeler için ayrı indirin.

### Linux

CH340 sürücüsü (`ch341` modülü) çekirdeğe gömülüdür:
```bash
lsmod | grep ch341
dmesg | grep ch341
```

---

## Firmware Güncellemesi Başarısız

### USB Kararlılığı

- Yazma sırasında fişi çekmeyin
- Ana bilgisayarı askıya almayın
- Doğrudan USB portu kullanın (hub'lardan kaçının)

### Kurtarma

1. Güç döngüsü: USB'yi çıkarın, 10 saniye bekleyin, yeniden bağlayın
2. ISP moduna tekrar girin (bazı cihazlarda: açılış sırasında düğmeyi basılı tutun)
3. Bootloader'ı yeniden yazmak için Serial Reset Tool kullanın
4. Brick durumunda destekle iletişime geçin

---

## Performans Sorunları

### Yüksek CPU Kullanımı

1. **Donanım hızlandırmayı etkinleştirin** — Preferences > Video > Hardware Acceleration (VAAPI, V4L2-M2M)
2. **Çözünürlüğü düşürün** — 720p, 1080p'ye göre belirgin şekilde daha az CPU kullanır
3. **Kare hızını düşürün** — 15fps decode iş yükünü yarıya indirir
4. **Backend değiştirin** — HW hızlandırmalı FFmpeg genellikle GStreamer'dan daha az CPU kullanır

### Kare Düşmeleri

Durum çubuğundaki FPS sayacını kontrol edin. Gerçek FPS hedefin altındaysa pipeline darboğazdadır. Akıcı oynatmayı önceliklendirmek için FFmpeg kare işleyicide kare düşürmeyi etkinleştirin.

---

## Günlük Kaydı ve Tanılama

### Günlük Kaydını Etkinleştirme

- **macOS:** Settings > Logging Setting > Log to file (`~/Documents/openterface.log`)
- **Qt:** Preferences > Log > günlük düzeyi ve dosya yolunu ayarlayın

### Seri Konsol (Qt)

**Device > Serial Port Debug** üzerinden açın — Keyboard, Mouse, HID, Chip Info filtreleriyle gerçek zamanlı seri protokol mesajlarını gösterir.

---

## Platforma Özel Sorunlar

### Linux: Qt Platform Eklentisi

`This application failed to start because no Qt platform plugin could be initialized.`

```bash
export QT_QPA_PLATFORM=xcb
```

### Linux: Wayland Video Sorunları

```bash
QT_QPA_PLATFORM=xcb ./openterfaceQT
```

### Windows: CH340 Sürücüsü

Sürücü yüklemesi başarısız olursa: Sürücü İmza Zorlamasını geçici olarak devre dışı bırakın, ardından Aygıt Yöneticisi üzerinden elle yükleyin.

### Raspberry Pi: Video Takılması

Pi 3 veya düşük bellekli Pi 4'te:
1. Çözünürlüğü 720p'ye düşürün
2. FFmpeg backend kullanın (GStreamer değil)
3. Seri kararlılığı için 9600 baud kullanın

---

## Android'e Özel Sorunlar

### Cihaz Algılanmıyor

**Belirti:** Video önizlemesi hedef ekranı değil, yer tutucu gösteriyor.

1. **USB OTG bağlantısını** kontrol edin — kabloyu çıkarıp yeniden takın
2. **OTG desteğini** doğrulayın — telefonunuzun OTG desteklediğini doğrulamak için USB bellek takmayı deneyin
3. **KVM cihazını** kontrol edin — açık mı? Gösterge ışıkları yanıyor mu?
4. **Farklı bir kablo** deneyin — bazı OTG adaptörleri arızalıdır
5. **Uygulamayı yeniden başlatın** — tamamen kapatın (son uygulamalardan kaydırın) ve yeniden açın
6. **USB iznini** kontrol edin — sistem iletişim kutusu USB erişimi istediyse **Allow** seçeneğine dokunduğunuzdan emin olun

### Video Yok

**Belirti:** Cihaz algılandı ama ekran siyah veya donmuş.

1. **HDMI kablosunu** kontrol edin — hedef bilgisayarın HDMI'si KVM HDMI girişine sağlam bağlı mı?
2. **Hedef çıkışını** kontrol edin — hedef bilgisayar gerçekten bir şey gösteriyor mu?
3. **Daha düşük çözünürlük** deneyin — ayarları açın → **Video Format** → daha düşük çözünürlük seçin
4. **Kamera iznini** kontrol edin — Android Ayarları → Apps → Openterface → Permissions → Camera izninin verildiğinden emin olun
5. **Uygulamayı yeniden başlatın**

### Fare Yanıt Vermiyor

**Belirti:** Video çalışıyor ama ekrana dokunmak hedefte bir şey yapmıyor.

1. **HID için USB bağlantısını** kontrol edin — ayarları açın → **Device** ve cihazın aktif olduğunu doğrulayın
2. **Farklı bir fare modu** deneyin — Absolute ile Relative arasında geçiş yapın
3. **Bağlantıyı kesip yeniden bağlayın** — kırmızı **Disconnect Device** düğmesini kullanın, ardından yeniden bağlayın
4. **Hedef bilgisayarı** kontrol edin — USB klavye/fare tanıyor mu? Hedef tarafındaki USB kablosunu çıkarıp yeniden takmayı deneyin

### Klavye Tuş Göndermiyor

**Belirti:** Fare çalışıyor ama yazmak bir şey yapmıyor.

1. **Klavyenin açık olduğundan** emin olun — klavye düğmesine dokunun
2. **Seri bağlantıyı** kontrol edin — ayarları açın → **Device** ve aktif olduğunu doğrulayın
3. **Baud hızını** kontrol edin — ayarları açın → **Baudrate** ve cihazınızla eşleştiğinden emin olun (varsayılan 115200)
4. **Klavye düzenini** kontrol edin — doğru düzenin (US, JP, DE) seçildiğinden emin olun

### Uygulama Çöküyor veya Donuyor

1. Uygulamayı **kapatıp yeniden başlatın**
2. **Video çözünürlüğünü ve kare hızını düşürün** — yüksek ayarlar sınırlı bellekli cihazları zorlayabilir
3. **Kullanılabilir depolamayı** kontrol edin — düşük depolama kararsızlığa neden olabilir
4. **Uygulamayı güncelleyin** — Google Play veya GitHub Releases'te daha yeni bir sürüm olup olmadığına bakın

### Ekran Görüntüleri veya Kayıtlar Kaydedilmiyor

1. **Storage iznini** kontrol edin — Android Ayarları → Apps → Openterface → Permissions → Storage
2. Cihazınızdaki **kullanılabilir depolama alanını** kontrol edin
3. Kayıtlar ve ekran görüntüleri cihazınızın varsayılan medya klasörüne kaydedilir

### Günlük Toplama (Android)

Standart sorun giderme yardımcı olmazsa, geliştiricilerle paylaşmak için günlük toplayın:

```bash
adb logcat | grep -i openterface > openterface.log
```

GitHub issue açarken bu dosyayı ekleyin.

---

## iPadOS'e Özel Sorunlar

> **Not:** iPadOS yalnızca **KVM-Go** üzerinde desteklenir. Mini-KVM veya uConsole KVM Extension kullanıyorsanız iPadOS uygulaması çalışmaz.

### Bluetooth Bağlanmıyor

**Belirti:** BLE düğmesi yeşile dönmüyor veya tarama listesinde cihaz görünmüyor.

1. iPad'inizde **Bluetooth'un etkin** olduğunu kontrol edin — Settings > Bluetooth
2. **KVM-Go'nun açık** olduğundan emin olun — dongle hedef PC'nin USB portuna takılı olmalı
3. **iPad'i KVM-Go dongle'ına yaklaştırın** — BLE menzili genellikle 10 metreye kadar
4. **iPad Bluetooth iznini** kontrol edin — Settings > Privacy & Security > Bluetooth > Openterface'e izin verildiğinden emin olun
5. Taramayı yeniden başlatmak için BLE ekranında **Refresh** seçeneğine dokunun
6. **Openterface uygulaması Bluetooth iznini** kontrol edin — ilk açılışta reddedildiyse Ayarlar'dan yeniden etkinleştirin

### Video Önizlemesi Yok

**Belirti:** BLE bağlı ama ekran siyah veya kılavuz görseli gösteriyor.

1. **HDMI bağlantısını** kontrol edin — hedef PC'nin HDMI çıkışı KVM-Go HDMI girişine sağlam bağlı mı?
2. **Hedef çıkışını** kontrol edin — hedef bilgisayar gerçekten bir şey gösteriyor mu?
3. **Daha düşük çözünürlük** deneyin — Video düğmesine dokunun ve daha düşük çözünürlük seçin (720p veya 480p)
4. **Kamera iznini** kontrol edin — Settings > Privacy & Security > Camera > Openterface'e izin verildiğinden emin olun
5. **Uygulamayı yeniden başlatın** — son uygulamalardan yukarı kaydırıp yeniden açın

### Fare/Dokunma Yanıt Vermiyor

**Belirti:** Video çalışıyor ama ekrana dokunmak hedefte bir şey yapmıyor.

1. **BLE bağlantısını** kontrol edin — BLE düğmesi RSSI değeriyle yeşil olmalı
2. **Farklı bir fare modu** deneyin — Pan Mode ile iPencil Mode arasında geçiş yapın
3. **Bağlantıyı kesip yeniden bağlayın** — BLE ekranını açın, Disconnect'e dokunun, ardından tekrar Connect
4. **Hedef bilgisayarı** kontrol edin — KVM-Go'yu USB klavye/fare olarak tanıyor mu?

### Klavye Tuş Göndermiyor

**Belirti:** Fare çalışıyor ama yazmak bir şey yapmıyor.

1. **Yüzen klavyenin açık** olduğundan emin olun — Keyboard düğmesine dokunun
2. **BLE bağlantısını** kontrol edin — giriş USB değil Bluetooth üzerinden gider
3. **Klavye modunu** kontrol edin — Normal ile Game modu arasında geçiş yapmayı deneyin
4. **Harici klavye:** fiziksel iPad klavyesi kullanıyorsanız iPadOS'un tuş olaylarını uygulamaya yönlendirdiğini kontrol edin

### Ses Çalmıyor

**Belirti:** Video çalışıyor ama hedef PC sesini iPad'den duyamıyorsunuz.

1. **Audio düğmesini** kontrol edin — yeşil hoparlör simgesi göstermeli
2. **Mikrofon iznini** kontrol edin — Settings > Privacy & Security > Microphone > Openterface'e izin verildiğinden emin olun
3. **iPad ses seviyesini** kontrol edin — iPad'in sessize alınmadığından veya minimumda olmadığından emin olun
4. **Hedef ses çıkışını** kontrol edin — hedef PC sesi HDMI üzerinden gönderecek şekilde yapılandırılmış mı?

### Uygulama Çöküyor veya Donuyor

1. Uygulamayı **kapatıp yeniden başlatın**
2. **Video çözünürlüğünü düşürün** — yüksek çözünürlük eski iPad'leri zorlayabilir
3. **Kullanılabilir depolamayı** kontrol edin — düşük depolama kararsızlığa neden olabilir
4. **Uygulamayı güncelleyin** — App Store'da daha yeni bir sürüm olup olmadığına bakın

### Ekran Görüntüleri veya Kayıtlar Kaydedilmiyor

1. **Photo Library iznini** kontrol edin — Settings > Privacy & Security > Photos > Openterface'e izin verildiğinden emin olun
2. iPad'inizdeki **kullanılabilir depolamayı** kontrol edin
3. **Files uygulaması üzerinden göz atın** — kayıtlar Photo Library erişimi olmasa bile `Documents/Recordings/` konumuna kaydedilir

---

## Fabrika Sıfırlama

1. Settings'ten (macOS) veya Device menüsünden (Qt) Serial Reset Tool kullanın
2. Bu, HID çipini fabrika varsayılanlarına sıfırlar
3. Sıfırlamadan sonra cihazı yeniden bağlayın

## Bağlantı Kurtarma

Uygulamalar şunlar için otomatik kurtarma sağlar:
- Cihaz bağlantı kesme/yeniden bağlama (USB için hot-plug, iPadOS için BLE yeniden bağlantı)
- İletişim zaman aşımları
- Çip seti yedeklemeleri (MS2109 → MS2109S → MS2130S)
- Seri port kurtarma
- iPadOS BLE otomatik yeniden bağlantı (2 saniyelik gecikmeyle en fazla 3 deneme)

## Hata Raporu Gönderme

1. Dosyaya günlük kaydını etkinleştirin
2. Sorunu yeniden oluşturun
3. [GitHub Issues](https://github.com/TechxArtisanStudio/Openterface_QT/issues) üzerinden veya info@techxartisan.com adresine e-posta ile gönderin
