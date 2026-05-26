---
title: "KeyMod Eğitim - Ses Girişi"
description: KeyMod ile sesi klavyeye aktarma özelliğini kullanın. Sistem konuşma tanımayı, cihazdaki yapay zekayı ve birden fazla dili destekler. Konuşmanızı hedef…
keywords: "KeyMod ses girişi, konuşmayı metne dönüştürme, Whisper, sesle yazma, eller serbest klavye"
---

# 6. Ses Girişi

Konuşmanızı hedef bilgisayara gönderilen tuş vuruşlarına dönüştürün; eller serbest yazma ve erişilebilirlik.

## Nasıl Çalışır?

1. **mikrofon** button öğesine dokunun
2. Ne yazmak istediğinizi söyleyin
3. Konuşmanız metne dönüştürülür
4. Metin hedef bilgisayara tuş vuruşları olarak gönderilir

## STT Motorları

| Motor | Nasıl çalışır | Kurulum |
|---|---|---|
| **Sistem Tanıyıcı** | Android'in yerleşik konuşma tanıma özelliğini kullanır | Google Sesle Yazma Gerekir |
| **Whisper** | Cihaz üzerinde veya bulutta AI transkripsiyonu | API anahtarını Ayarlar > Ses Girişi |

<div align="center">
  <img src="https://assets2.openterface.com/images/keymod/andorid/demo-voice-input.webp" alt="Voice input screen" width="300" />
  <p><em>Ses girişi — transkript alanı, hedefler, geçmiş ve mikrofon. API anahtarını Ayarlar > Ses Girişi bölümünde yapılandırın.</em></p>
</div>

## Sessizlik Algılama ve Otomatik Duraklatma

Her iki motor da, konuşmayı bıraktığınızda kaydı duraklatan otomatik sessizlik algılama özelliğine sahiptir (varsayılan olarak 2,0 saniyelik sessizlik zaman aşımı). Ses Girişi görünümünde Otomatik Duraklat'ı açın/kapatın.

### Sessizlik Algılama Sorunlarını Giderme

| Belirti | Çözüm |
|---|---|
| **Konuşmadığınız zamanlarda kayıt devam ediyor** | Sessizlikte Otomatik Duraklat seçeneğini işaretleyin. Arka plan gürültüsünü azaltın. Açıkça ve mikrofona yakın konuşun. |
| **Kayıt anında durdurulur** | Daha yüksek sesle konuşun veya sessizlik algılama zaman aşımını azaltın. |

## Mini Araç Çubuğu (Android)

| Button | Ne işe yarar |
|---|---|
| **Kopyala** | Metne dönüştürülmüş metni panoya kopyala |
| **Otomatik Gönder** | Metni transkripsiyondan sonra otomatik olarak gönder |
| **Otomatik Hat Dönüşü** | Gönderdikten sonra Enter tuş vuruşunu ekleyin |
| **Yapay zeka iyileştirmesi** | İyileştirme için yazıya geçirilmiş metni yapay zekaya gönderin |

## Sesli Metin Gönderilemiyor

Bağlantı durumunu kontrol edin. Bağlantı olmadığında "Gönder" button devre dışı bırakılır.

## Sonraki Adımlar

- **[← Macros](05-macros.md)** — Otomatik tuş dizileri
- **[AI Integration →](07-ai.md)** — Yapay zeka destekli metin iyileştirme ve komut asistanı