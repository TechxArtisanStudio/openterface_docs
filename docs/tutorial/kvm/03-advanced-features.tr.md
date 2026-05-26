---
title: "KVM Eğitimi 03 — Gelişmiş Özellikler"
description: "Hedef kitle: Orta ile Uzman — güç kullanıcı özellikleri ve yapılandırma Resmi Openterface belgeleri: kurulum, SSS ve KVM-over-USB sorun giderme. Openterface."
---


# KVM Eğitimi 03 — Gelişmiş Özellikler

**Hedef kitle:** Orta ile Uzman — güç kullanıcı özellikleri ve yapılandırma

---

## 1. Tercihler Sistemi

### Video

- **Çözünürlük ve kare hızı** — Tercih edilen yakalama ayarları
- **Media backend** — FFmpeg, GStreamer (Linux) veya Qt Multimedia (Windows)
- **Donanım hızlandırma** — VAAPI (Intel/AMD), V4L2-M2M (Raspberry Pi)
- **En-boy oranı ve ölçekleme** — Özel oran, Stretch/Fit/Fill

### Ses

- **Etkin** — Hedeften ses yakalamayı aç/kapat
- **Giriş/Çıkış cihazı** — Kaynak ve oynatma cihazını seç

### Hedef Kontrolü

- **Fare modu** — Absolute, Relative (HID), Relative (Events)
- **Fare olayı kısıtlama** — Saniyede 30–1000 olay
- **Klavye düzeni** — Hedef OS ve bölgesel düzenler
- **Tuş tekrar aralığı** — Basılı tuş tekrar hızı
- **İmleci otomatik gizle** — Video alanı üzerindeki ana bilgisayar imlecini gizle

### Günlükleme

- **Günlük seviyesi** — Debug, Info, Warning, Error
- **Dosyaya günlük** — `~/Documents/openterface.log` (macOS) veya yapılandırılmış yol (Qt)
- **Serial günlükleme** — Ayrı serial iletişim günlüğü

---

## 2. EDID Yönetimi

### EDID Nedir?

EDID (Extended Display Identification Data), KVM cihazının hedefe ekran yeteneklerini — desteklenen çözünürlükler, yenileme hızları, üretici bilgisi — tanımlamak için gönderdiği veridir. KVM bir "sahte monitör" gibi davranır; EDID hedefin hangi çözünürlükleri çıkaracağını belirler.

### EDID Ekran Adını Düzenleme

KVM cihazının hedefe bildirdiği ekran adını değiştirebilirsiniz. Bu ad hedef OS ekran ayarlarında görünür.

> **Not:** Şu anda yalnızca ekran adı düzenleme desteklenmektedir. Çözünürlük düzenleme ve özel çözünürlük girişleri henüz mevcut değildir.

**Erişim:** Settings > EDID Display Name Editor (macOS) veya Device > Update Display Settings (Qt)

### Kullanım Alanları

- **Ekranı tanımlama** hedef OS ayarlarında
- **Özel adlandırma** çoklu monitör kurulumlarında KVM ekranını ayırt etmek için

---

## 3. Makro Sistemi (macOS)

Makrolar, araç çubuğu makro panelinden tetiklenen kayıtlı klavye eylem dizileridir.

### Tuş Dizisi Biçimi

**Değiştirici etiketler:** `<CTRL>`, `<SHIFT>`, `<ALT>`, `<CMD>` (hedef OS'e göre Cmd/Win/Super'a eşlenir)

**Özel tuşlar:** `<ESC>`, `<BACK>`, `<ENTER>`, `<TAB>`, `<SPACE>`, `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>`, `<HOME>`, `<END>`, `<DEL>`, `<PGUP>`, `<PGDN>`, `<F1>`–`<F12>`

**Gecikmeler:** `<DELAY05s>`, `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>`

### Örnekler

<CMD>c</CMD>              # Copy on macOS
<CTRL>c</CTRL>            # Copy on Windows
<DELAY05s><ENTER>         # Wait, then press Enter
### Yapay Zeka Destekli Oluşturma

Makro düzenleyicisindeki **Magic** düğmesi doğal dilden makro üretir. Ne istediğinizi açıklayın; yapay zeka tuş dizisini oluşturur.

### Doğrulama

Testten sonra makroları **verified** olarak işaretleyin. Yalnızca doğrulanmış makrolar yapay zeka aracısının otonom yürütmesi için kullanılabilir.

---

## 4. Script Tool (Qt)

Hedefte klavye ve fare eylemlerini otomatikleştirmek için AutoHotKey'den esinlenilmiş bir betik dili.

### Açma

Menü: **Device > Script Tool**

### Komutlar

| Command | Description | Example |
|---------|-------------|---------|
| `Sleep` | Yürütmeyi duraklat | `Sleep 1000` |
| `Send` | Tuş vuruşları gönder | `Send Hello World` |
| `Click` | Fare tıklaması | `Click 100 200` |
| `SetCapsLockState` | CapsLock'u aç/kapat | `SetCapsLockState On` |
| `FullScreenCapture` | Ekran görüntüsü | `FullScreenCapture "/tmp/shot.png"` |

### Değiştirici Önekler

`^` = Ctrl, `+` = Shift, `!` = Alt, `#` = Win

---

## 5. Firmware Güncellemeleri

### Ne Zaman Güncellenmeli

- Yeni donanım özellikleri
- Hata düzeltmeleri
- Uyumluluk iyileştirmeleri

### Güncelleme Süreci

1. Firmware Update Tool'u açın (**Settings > Firmware Update Tool** macOS'ta, **Device > Update Firmware** Qt'de)
2. Araç ağdan en son sürümü kontrol eder
3. Yazma işlemi sırasında ilerleme izlenir
4. **Güncelleme sırasında cihazı ayırmayın**

### Kurtarma

1. Cihazı güçte tutun
2. Firmware Update Tool'u kapatıp yeniden açın, tekrar deneyin
3. Cihaz yanıt vermiyorsa Serial Reset Tool kullanın

---

## 6. Serial Reset Tool

**Erişim:** Settings > Serial Reset Tool (macOS) veya Device > Factory Reset HID Chip (Qt)

Şu durumlarda kullanın:
- Başarısız firmware güncellemesinden sonra cihaz bilinmeyen durumda
- HID çipi yanıt vermiyor
- Cihazı yeniden satışa hazırlarken

---

## 7. Tanılama (Qt)

Menü: **Device > Device Diagnostics**

Donanım testlerini sırayla çalıştırır:
1. Serial bağlantı testi
2. Hedef USB durumu
3. Fabrika sıfırlama testi
4. Yüksek/düşük baudrate testi
5. Stres testi (hızlı komutlar, başarı oranı ölçümü)
6. Plug & play testi (USB bağlantı kesme/yeniden bağlama algılama)

Çalıştırdıktan sonra sonuçları **Support Email Dialog** ile dışa aktarın.

---

## 8. AI Chat Sistemi (macOS)

Hedef ekranı analiz edebilen, eylem önerebilen ve klavye/fare işlemlerini yürütebilen yerleşik yapay zeka asistanı.

### Sohbet Modları

| Mode | Description |
|------|-------------|
| **Interactive** | Soru sorun, rehberlik alın |
| **Agentic** | Yapay zeka otonom olarak çok adımlı görevleri planlar ve yürütür |
| **Guide** | Bir seferde bir talimat, adım adım |
| **Planner** | Karmaşık istekler yapılandırılmış planlara ayrılır |

### Yapılandırma

Settings > AI Chat: API endpoint, key (Keychain'de saklanır), model, target system (macOS/Windows/Linux/etc.)

---

## 9. Uzaktan Kontrol (VNC/RDP — macOS)

**Control > Connection Protocol** üzerinden **Hardware KVM**, **VNC** ve **RDP** modları arasında geçiş yapın.

| Scenario | Mode |
|----------|------|
| Hedef BIOS/UEFI'de, ağ yok, önyüklemede, çökmüş | Hardware KVM |
| Yüksek bant genişlikli masaüstü kullanımı, Windows sunucu | VNC veya RDP |

---

## 10. TCP Sunucusu (Qt)

12345 portunda uzaktan kontrol için yerleşik TCP sunucusu.

### Komutlar

`CHECK_STATUS`, `GET_LAST_IMAGE`, `GET_TARGET_SCREEN`, `SCRIPT_COMMAND`

### Python Örneği

```python
import socket
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
sock.connect(("localhost", 12345))
sock.send(b"CHECK_STATUS\n")
print(sock.recv(4096).decode())
sock.close()
> **Güvenlik:** Kimlik doğrulama, şifreleme veya hız sınırlama yok. Yalnızca güvenilir ağlarda etkinleştirin.

---

## iPadOS'e Özel Özellikler

### Bluetooth Bağlantı Yönetimi

iPadOS uygulaması klavye/fare HID girişi için KVM-Go dongle'ına **Bluetooth Low Energy (BLE)** ile bağlanır:

- **Auto-connect:** Varsayılan olarak etkin. Başlangıçta uygulama 5 saniye tarar ve en güçlü sinyalli `kvm*` cihazına otomatik bağlanır.
- **Yeniden bağlanma:** Bağlantı koparsa uygulama 2 saniye gecikmeyle en fazla 3 kez yeniden bağlanmayı dener.
- **Sinyal izleme:** RSSI her 2 saniyede güncellenir. BLE düğmesi sinyal gücünü (ör. `-45 dBm`) renk göstergesiyle gösterir: yeşil (-50 ile 0 dBm), turuncu (-70 ile -50 dBm), kırmızı (-70 dBm altı).
- **Cihaz tarama:** Listede yalnızca adı `kvm` ile başlayan cihazlar (büyük/küçük harf duyarsız) görünür.
- **Manuel kontrol:** Tarama, bağlanma, bağlantı kesme veya auto-connect'i devre dışı bırakmak için BLE ekranını açın.

### Bilgi Katmanı

Sağ üst köşede gerçek zamanlı giriş durumu katmanını göstermek için **Info** düğmesine dokunun:

```
┌─ Giriş Durumu ─────────┐
│ Mouse                  │
│ Mode: Absolute         │
│ Position: 512.0, 384.0 │
│ Drag Mode: Active      │
│ Scrolling: Inactive    │
│ Keyboard               │
│ Mode: Normal           │
│ Caps Lock: OFF         │
│ Modifiers: Ctrl, Shift │
└────────────────────────┘
```

Katman dokunuşlara şeffaftır — video önizlemesiyle etkileşimi engellemez.

### Ekran Yönelimi Düzeltme

Yönelim düzeltme modları arasında geçiş için **Rotate** düğmesine dokunun: Normal, 90° CW, 180°, 90° CCW. KVM-Go dongle standart olmayan bir yönelimde monte edildiğinde video önizlemesini düzeltir. Döndürme hem canlı önizlemeye hem kayıtlı yakalamalara uygulanır.

### Boşta Kalma Zamanlayıcısı Devre Dışı

Uygulama boşta kalma zamanlayıcısını devre dışı bırakarak iPad ekranını kullanım sırasında **uyanık** tutar; hedef PC izlenirken iPad'in otomatik kilitlenmesini önler.

### Günlükleme Sistemi

Uygulama kategori tabanlı filtrelemeli yerleşik bir `Logger` içerir:

| Category | Covers |
|---|---|
| `bluetooth` | BLE tarama, bağlantı, veri iletimi |
| `mouse` | Fare girişi, jest algılama, mod değişiklikleri |
| `keyboard` | Tuş olayları, değiştirici durumu, bileşik tuşlar |
| `camera` | Video kaydı, ekran görüntüleri, fotoğraf yakalama |
| `ui` | Dokunma işleme, jest tanıma, önizleme katmanı |
| `general` | Uygulama yaşam döngüsü, genel bilgi |

Konsol gürültüsünü azaltmak için günlükleme uygulama kaynağında ayarlanabilir.

---

## Sonraki Adımlar

- **[Sorun Giderme →](04-troubleshooting.md)** — Yaygın sorunlar ve çözümler

---

## Android'e Özel Özellikler

### Ayarlar Paneli

Android uygulamasının ayarlar paneli (Menü düğmesi ☰) tüm yapılandırma seçeneklerini içerir:

| Setting | Description |
|---|---|
| **Device** | Bağlı USB cihazlarını ve durumu gösterir. Seçmek veya yeniden taramak için dokunun. |
| **Disconnect Device** | Tüm USB bağlantılarını güvenle serbest bırakır. Ayırmadan önce kullanın. |
| **Baudrate** | Serial iletişim hızı: **115200** (varsayılan) veya **9600** (daha yavaş, sorunlar için). |
| **Controls** | Kamera parlaklığı, kontrast ve renk tonu kaydırıcıları. |
| **Video Format** | Çözünürlük ve kare hızı seçici. |
| **Rotate/Flip** | 90° CW/CCW döndür, yatay/dikey çevir. |
| **Screen Capture / Record Video** | Ekran görüntüsü ve video kaydı. |
| **Relative / Absolute / Drag** | Fare kontrol modunu değiştir. |
| **About Device** | Android sürümü ve uygulama sürüm bilgisini gösterir. |

### Ayar Kalıcılığı

Android uygulaması oturumlar arasında tercihlerinizi hatırlar:

| Setting | Persisted? |
|---|---|
| Fare kontrol modu | Evet |
| Video biçimi (çözünürlük, FPS) | Evet |
| Kamera parametreleri (parlaklık, kontrast, renk tonu) | Evet |
| Klavye düzeni (US, JP, DE) | Evet |
| Baudrate | Evet |
| Cihaz bağlantı geçmişi | Evet |

Uygulamayı yeniden açtığınızda son ayarlarınız geri yüklenir. Her şeyi sıfırlamak için: Android Ayarları → Uygulamalar → Openterface → Depolama → **Verileri temizle**.

### Güvenli Ayırma

Android'de KVM cihazını ayırmadan önce:

1. Ayarlar panelini açın
2. **Disconnect Device**'a dokunun (kırmızı gösterilir)
3. Uygulamanın USB bağlantısını serbest bırakmasını bekleyin
4. Kabloları ayırın

Bu, veri bozulmasını önler ve hedef bilgisayarın klavye/fareyi düzgün şekilde serbest bırakmasını sağlar.

### Android Performans İpuçları

- **Çözünürlüğü düşürün** — 640×480, 1920×1080'den çok daha hafiftir
- **Kare hızını azaltın** — 30fps, 60fps'den daha az bant genişliği kullanır
- **Diğer uygulamaları kapatın** — telefon belleğinizi boşaltın
- **Kaliteli USB OTG adaptörü kullanın** — ucuz adaptörler bağlantıyı darboğaza sokabilir
- Geliştirme ekibi kamera hattındaki gecikmeyi azaltmak için çalışıyor
