---
title: "Yazılım Kurulumu | Genişletme Modülü v2"
description: "uConsole'unuz için Openterface ana bilgisayar uygulamasını KVM Genişletme Modülü v2 için kurun ve yapılandırın — HDMI yakalama, USB HID, SD kart anahtarlama ve USB paylaşımı."
keywords: "Openterface uygulama kurulumu, uConsole yazılım kurulumu, KVM genişletme v2, openterfaceqt"
---

# **Yazılım Kurulumu** | Genişletme Modülü v2

## Kurulum genel bakış

Openterface ana bilgisayar uygulaması, uConsole'unuzun HDMI yakalama, USB HID kontrolü, **SD kart anahtarlama** ve ana bilgisayar ile hedef arasında **USB port paylaşımı** ile bir KVM arayüzü olarak işlev görmesini sağlar.

!!! note "Gereksinimler"
    - **uConsole (ana bilgisayar)**: Openterface QT uygulaması gerekli
    - **Hedef cihaz**: Uygulama gerekmez — Windows, macOS, Linux, Android, iOS KVM için desteklenir
    - **Video**: Standart HDMI kablosu; güçlü dönüştürücüler VGA, DP ve diğer formatları destekler
    - **Önerilen arka uç**: En iyi arm64 GPU performansı için **GStreamer** (Kali Linux'un GStreamer desteği sınırlı olabilir)

## Kurulum yöntemleri

### **Seçenek 1: GitHub Releases (arm64 için önerilir)**

1. [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases) sayfasını ziyaret edin.
2. **arm64** için en son `.deb` dosyasını indirin (örn. `openterfaceqt_*_arm64.deb`).
3. Kurulum:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **Seçenek 2: Flatpak**

[Flatpak Kurulum Kılavuzu](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md) sayfasını takip edin.

### **Seçenek 3: Topluluk deposu (ClockworkPi Bookworm)**

Rex tarafından ClockworkPi imajları için sürdürülmektedir:

1. **Depo ekle**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **Kur**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "Depo notları"
    Komutlar `sudo` gerektirir. Depo, arm64 Bookworm paketlerini hedefler — kurmadan önce uConsole işletim sisteminizle uyumluluğunu doğrulayın.

## Önemli hatırlatmalar

!!! tip "Güç ve ilk kurulum"
    - uConsole'u şarjda veya kararlı bir güç kaynağında tutun — düşük pil bağlantı sorunlarına neden olabilir.
    - İlk denemede klavye/fare kontrolü çalışmazsa:
        1. uConsole'u tamamen kapatın.
        2. En az 10 saniye bekleyin.
        3. Açın ve tekrar deneyin.

!!! tip "Seri iletişim baud hızı"
    Seri kullanım için baud hızını **9600** olarak ayarlayın — uConsole 115200'ü güvenilir şekilde sürdüremeyebilir.

## Kullanım

### **KVM oturumu başlatma**

1. uConsole'unuzda Openterface QT'yi başlatın.
2. Uygulama Genişletme Modülü v2'yi otomatik olarak algılar.
3. Hedef cihazı HDMI ve USB üzerinden bağlayın.
4. Hedef cihazı kontrol etmek için uConsole klavye ve trackball'unu kullanın.

### **Kontrol özellikleri**

- **Klavye**: Multimedya tuşları dahil tam emülasyon
- **Fare**: Mutlak ve göreli konumlandırma
- **Ses**: uConsole hoparlörlerine HDMI ses geçişi
- **Metin aktarımı**: Kullanıcı adlarını, parolaları ve kod parçacıklarını simüle edilmiş tuş vuruşları olarak yapıştırın
- **USB anahtarlama**: USB depolamayı uConsole ve hedef cihaz arasında ana bilgisayar uygulaması aracılığıyla paylaşın — bkz. [Hedefe Bağlan](/products/kvmext/connect-to-target/)
- **SD kart anahtarlama**: SD kartı ana bilgisayar uygulaması aracılığıyla ana bilgisayara veya hedefe bağlayın — bkz. [SD Kart Kılavuzu](/products/kvmext/sd-card/)

### **Yazılım kurulumu sorunlarını giderme**

Uygulama kurulumu zorsa veya fare/klavye çalışmıyorsa:

- uConsole CM4/modülünüze **arm64** yapısını kurduğunuzu doğrulayın
- Gerçek zamanlı yardım için [Discord](https://openterface.com/discord)'a katılın
- [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues) üzerinde sorun bildirin

## İlgili

- [Hedefe Bağlan](/products/kvmext/connect-to-target/)
- [SD Kart Kılavuzu](/products/kvmext/sd-card/)
- [SSS](/products/kvmext/faq/)
