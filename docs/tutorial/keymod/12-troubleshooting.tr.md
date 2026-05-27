---
title: "KeyMod Eğitim - Sorun Giderme"
description: "Yaygın KeyMod sorunları düzeltin: bağlantı sorunları, kaydedilmeyen anahtarlar, Bluetooth eşleştirme hataları, ses girişi hataları ve daha fazlası.… Openterface"
keywords: "KeyMod sorun giderme, KeyMod bağlanılamıyor, KeyMod Bluetooth sorunları, KeyMod tuşları çalışmıyor"
---

# 12. Sorun Giderme

Android'deki KeyMod uygulamasına ilişkin genel sorunlar ve çözümleri.

## Bağlantı Sorunları

### Bağlı Değil

| Belirti | Çözüm |
|---|---|
| **"Bağlı Değil"** göstergesi | Kablo bağlantısını kontrol edin; yeniden takmayı deneyin. BLE için Bluetooth'u kapatıp açın ve yeniden eşleştirin. |
| **USB izin reddedildi** | Android Ayarlar → Uygulamalar → KeyMod → İzinler → USB'yı etkinleştir seçeneğine gidin. Kabloyu tekrar takın. |
| **Bluetooth eşleşmiyor** | Bluetooth'u kapatın/açın. Bluetooth ayarlarında cihazı unutun ve yeniden eşleştirin. KeyMod cihazının eşleştirme modunda olduğundan emin olun. |
| **Bağlantı sık sık düşüyor** | Uygulamada BLE button altındaki RSSI değerini kontrol edin. -75 dBm'nin altında sinyal zayıftır; yaklaşın. Fiziksel engelleri kaldırın. |

### Bağlantı Durumu Göstergeleri

| Gösterge | Anlamı |
|---|---|
| **Bağlandı** | Yeşil simge — girdi göndermeye hazır |
| **Bağlanıyor** | Sarı simge — bağlantı devam ediyor |
| **Bağlantı Kesildi** | Gri simge — etkin bağlantı yok |
| **Sinyal çubukları** | BLE sinyal gücü veya USB aktif durum |

### Otomatik Bağlantı

Bağlantı iletişim kutusunda **"Başlangıçta otomatik bağlan"** seçeneğini etkinleştirin. KeyMod son bağlantı türünüzü (USB veya BLE) ve son eşleştirilen BLE cihazınızı hatırlar.

### USB Takma/Çıkarma Algılaması

KeyMod Android'un USB yayın ekleme/çıkarma etkinliklerini izler. USB kablosunu çıkarırsanız bağlantı durumu hemen güncellenir. Otomatik bağlantı etkinleştirilmişse, yeniden takma işlemi yeniden bağlanma girişimini tetikler.

---

## Klavye Sorunları

### Anahtarlar Kaydedilmiyor

| Belirti | Çözüm |
|---|---|
| **Anahtarlar gönderilmiyor** | Bağlantının "Bağlı" (yeşil) olarak göründüğünü doğrulayın. Modları değiştirmeyi ve geri dönmeyi deneyin. Hedef bilgisayarın KeyMod cihazı klavye olarak tanıdığını kontrol edin. |
| **Makro yürütülmüyor** | Bağlı olduğunuzu doğrulayın. Makro verilerinin geçerli belirteçler (belirteç adlarında yazım hatası yok) içerip içermediğini kontrol edin. |
| **Yanlış karakterler görünüyor** | **Hedef İşletim Sistemi** ayarını kontrol edin; uyumsuz işletim sistemi önemli eşleme sorunlarına neden olabilir. Hedef bilgisayarın klavye düzenini doğrulayın (QWERTY ve AZERTY). |

### Unicode Karakterler Çalışmıyor

ASCII olmayan karakterler (Çince, Japonca, emoji) işletim sistemine özgü giriş yöntemleri gerektirir:

| İşletim Sistemi | Yöntem |
|---|---|
| **Windows** | Alt+NumPad onaltılık Unicode girişi |
| **Linux** | Ctrl+Shift+U ve ardından hex kodu |
| **macOS** | Option+hex giriş |

Unicode karakterler hatalı görünüyorsa **Hedef İşletim Sistemi**'nin doğru ayarlandığını doğrulayın.

---

## TouchPad Sorunlar

| Belirti | Çözüm |
|---|---|
| **Touchpad yanıt vermiyor** | Ayarlar'da Dokunsal Geri Bildirimin etkin olup olmadığını kontrol edin. Hareket desteğini doğrulamak için TouchPad Yardım katmanını (?) deneyin. |
| **Kaydırma çalışmıyor** | Ayarlar → Genel bölümünde touchpad kaydırma hassasiyetini kontrol edin. |

---

## Ses Girişi Sorunları

### Konuşma Tanıyıcı Kullanılamıyor

Play Store'dan Google Sesle Yazma uygulamasını yükleyin. Android 11+ üzerinde, KeyMod sorgu iznine ihtiyaç duyar (APK'ye dahildir).

### Sessizlik Algılama Çalışmıyor

| Belirti | Çözüm |
|---|---|
| **Konuşmadığınız zamanlarda kayıt devam ediyor** | Sessizlikte Otomatik Duraklat seçeneğini işaretleyin. Arka plan gürültüsünü azaltın. Açıkça ve mikrofona yakın konuşun. |
| **Kayıt anında durdurulur** | Daha yüksek sesle konuşun veya sessizlik algılama zaman aşımını azaltın. |

### Sesli Metin Gönderilemiyor

Bağlantı durumunu kontrol edin. Bağlantı olmadığında "Gönder" button devre dışı bırakılır.

---

## Yapay Zeka Sorunları

### API Anahtarı Çalışmıyor

| Belirti | Çözüm |
|---|---|
| **"API anahtarı yapılandırılmadı"** | API anahtarının doğru olduğunu doğrulayın; fazladan boşluk veya yazım hatası olup olmadığını kontrol edin. API Temel URL'sini kontrol edin — tam yolu içermelidir (örn., `https://api.openai.com/v1`). Model adının sağlayıcıda mevcut olduğunu doğrulayın. Yerel sağlayıcılar için (Ollama), API Anahtarı İsteğe Bağlı bayrağının ayarlandığından emin olun. |

### Metin İyileştirme Yavaş

Ağ bağlantınızı kontrol edin. Daha hızlı bir model deneyin; daha küçük modeller (gpt-3.5-turbo, llama3-8b) daha hızlı yanıt verir. Ağ gecikmesini ortadan kaldırmak için yerel bir sağlayıcı (Ollama) kullanın. Hata mesajları için AI İstek Geçmişini kontrol edin.

---

## Daha Fazla Yardıma mı İhtiyacınız Var?

Hâlâ sorun yaşıyorsanız:

- **Hata raporları:** [Discord](https://discord.gg/techxartisan)
- **Topluluk:** [TechxArtisan Discord](https://discord.gg/techxartisan)
- **Openterface belgeler:** [openterface.com](https://openterface.com)