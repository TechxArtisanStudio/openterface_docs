---
title: "Hedef Cihaza Bağlanma | Genişletme Modülü v2"
description: "Openterface uConsole KVM Genişletme Modülü v2'yi HDMI, USB HID ve isteğe bağlı Ethernet üzerinden ağ hata ayıklaması için hedef cihazınıza bağlayın."
keywords: "KVM bağlantı kurulumu, hedef cihaz, HDMI, USB HID, Ethernet hata ayıklama, uConsole KVM v2"
---

# **Hedef Cihaza Bağlanma** | Genişletme Modülü v2

## Bağlantı genel bakış

![kvmext-v2-use-case-2](https://assets.openterface.com/images/product/kvmext-v2/kvmext-v2-use-case-2.webp){:style="max-height:480px"}

Genişletme Modülü v2, hedef cihazınıza **HDMI** (video/ses) ve **USB** (klavye/fare emülasyonu) üzerinden bağlanır. İsteğe bağlı olarak, KVM görüntü ve girişi yönetirken SSH, web yönetimi veya günlük yakalama için **Ethernet** kullanabilirsiniz.

## Önkoşullar

1. [Donanım Kurulumu](/products/kvmext/hardware-installation/) — modül genişletme yuvasına yerleştirildi
2. [Yazılım Kurulumu](/products/kvmext/software-setup/) — Openterface QT uConsole'a yüklendi
3. [Ethernet kartı seçildi](/products/kvmext/ethernet/) (ağ özellikleri kullanılıyorsa)

## Bağlantı adımları

### **USB kontrolü (KVM için gerekli)**

Genişletme kartının **Type-C portunu** hedef cihazın USB portuna bağlayın. Bu, klavye ve fareyi (USB HID) taklit eder.

Hedef cihazın HID kontrolü için sürücüye veya ek yazılıma ihtiyacı **yoktur**.

### **Video girişi (KVM için gerekli)**

Hedef cihazın HDMI çıkışını genişletme modülünün HDMI girişine bağlayın:

- HDMI çıkışları için standart HDMI kablosu
- VGA için **VGA-to-HDMI** dönüştürücü (dönüştürücü USB gücünün bağlı olduğundan emin olun)
- DVI, DisplayPort, Micro HDMI için gerektiği gibi diğer adaptörler

### **Ethernet (isteğe bağlı — ağ hata ayıklama)**

Bir ağ kartı taktıysanız:

- Karttan hedef cihazınıza veya ağ anahtarınıza bir Ethernet kablosu bağlayın
- KVM ile birlikte SSH, web arayüzü veya günlük yakalama için uConsole'ı kullanın
- 100M ve 1000M kurulumu için [Ethernet Kılavuzu](/products/kvmext/ethernet/) sayfasına bakın

### **SD kart (isteğe bağlı — imaj alma ve dosyalar)**

Modül yuvasına bir microSD kart takın. uConsole ve hedef cihaz arasında erişimi değiştirmek için ana uygulamayı kullanın. [SD Kart Kılavuzu](/products/kvmext/sd-card/) sayfasına bakın.

## USB 2.0 paylaşımlı anahtarlama

Ana uygulama, paylaşımlı bir USB 2.0 portunu uConsole ve hedef cihaz arasında değiştirebilir — kabloları çıkarmadan flash sürücüler ve bakım iş akışları için kullanışlıdır.

## Bağlantıyı test etme

1. uConsole'ı açın ve hedef cihazı başlatın
2. Openterface QT'yi başlatın
3. HDMI videosunun uConsole ekranında göründüğünü doğrulayın
4. Klavye, trackball ve ses geçişini test edin
5. SD veya USB anahtarlama kullanıyorsanız, ana uygulamada bağlama/anahtarlamayı test edin

## İlgili

- [Kullanım Senaryoları](/products/kvmext/use-cases/) — saha BT, ev laboratuvarı, gömülü hata ayıklama senaryoları
- [SSS](/products/kvmext/faq/) — sorun giderme
