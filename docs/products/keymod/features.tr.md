---
title: "Özellikler ve Teknik Detaylar"
description: "KeyMod Series Özellikleri: Bluetooth HID klavye ve fare, USB + Bluetooth çift bağlantı, özel profiller, makrolar, gamepad modları, sunum kontrolleri, kısayol merkezi. Android ve iOS için açık kaynaklı mobil uygulama."
keywords: "KeyMod Series özellikleri, HID emülatör, Bluetooth klavye, USB klavye, programlanabilir düğmeler, gamepad, makro, açık kaynak, CH9329, kısayol merkezi, sunum modu"
---

# **Özellikler ve Teknik Detaylar** | Openterface KeyMod Series

## Mevcut Durum

KeyMod aktif geliştirme aşamasındadır ve Android için [genel beta](/tutorial/keymod/) sürümü mevcuttur. Lansman bildirimleri hakkında bilgi almak için [ürün sayfası](/products/keymod/)'na abone olun.

> **Not:** Özellikler, teknik detaylar ve tasarım, geliştirme devam ettikçe değişiklik gösterebilir.

## Ürün Çeşitleri

- **Mini Sürümü** — Sadece Type C erkek konektör
- **Plus Sürümü** — Type A erkek konektör ve Type C dişi konektör

## Temel Özellikler

### **Telefonu Klavye ve Dokunmatik Yüzeye Dönüştürün**

KeyMod, telefonunuzu taşınabilir bir klavye ve dokunmatik yüz konsoluna dönüştürür. Tam boyutlu klavye ve fare bulunmadığında veya cihaz değiştirmekten daha hızlı bir iş akışı istediğinizde kullanın. Dış mekan ekran bilgisayarları, LED tabela oynatıcıları, kiosklar, akıllı TV'ler ve set üstü kutular için idealdir.

### **Çift Bağlantı: USB + Bluetooth**

- **USB** — Güvenilir, düşük gecikmeli giriş için tak-çalıştır kablolu bağlantı
- **Bluetooth** — Senaryo izin verdiğinde kablosuz kurulum; kurulumunuzu hafif ve taşınabilir tutun

KeyMod, uzak masaüstü yerine geçmek için değil, pratik günlük yerel cihaz kontrolü için tasarlanmıştır.

### **Açık Kaynaklı Mobil Uygulama**

Açık kaynaklı mobil uygulamamızla şunları yapabilirsiniz:

- **Klavye & Fare (Basic)** — Uzun basma tekrarı, tuş önizlemesi ve numara tuş takımı ile tam ekran klavye
- **Klavye & Fare Pro** — Kısayol Merkezi şeritleri, bölünmüş klavye ve IME ile bileşik düzen
- **Sunum Modu** — Google Slides ve diğer uygulamalar için zamanlayıcılı slayt uzaktan kumandası
- **Gamepad** — Özelleştirilebilir hazır düzenler ve çoklu dokunmatik yüz desteği ile sanal kontrol cihazı
- **Kısayol Merkezi** — Yaratıcı ve geliştirme araçları (Blender, KiCAD, Photoshop, VS Code) için profil tabanlı klavye kısayolları; oluşturma, içe aktarma ve dışa aktarma desteği
- **Makrolar** — Gecikmeli programlanabilir tuş sıraları
- **Ses girişi** — Yapay zeka (Whisper API) ile konuşmadan klavyeye
- **Terminal** — Uzak komut erişimi için Bluetooth üzerinden SSH
- **Agent** — Başka bir bilgisayarı kontrol etmek için HID veya SSH komutlarıyla yapay zeka destekli doğrudan etkileşim

**KeyCmd** uygulaması **Android** ve **iOS**'a (iPadOS dahil) odaklanmaktadır. USB veya Bluetooth üzerinden **KVM-GO** ile de çalışır. Daha geniş Openterface ekosistemimizde **Windows ve macOS** yazılımlarıyla masaüstü kontrolünü de genişletiyoruz.


### **Gerçek Donanım HID**

Openterface Mini-KVM'nin kanıtlanmış HID çekirdeği üzerine inşa edilmiştir. Donanım tabanlı klavye ve fare emülasyonu — hedef cihazda herhangi bir yazılım kurulumu gerekmez.

### **Açık Kaynak**

KeyMod açık donanım ve açık kaynak yazılımdır. Proje geliştikçe şemaları, PCB dosyalarını, firmware'i, yazılımı ve BOM'u yayınlayacağız. Katkıda bulunmak ve güncel kalmak için [topluluğumuza katılın](/discord).

## Teknik Detaylar

### **Bağlantı**

- **USB**: Mini sürümü Type C erkek konektör kullanır; Plus sürümü Type A erkek konektör ve Type C dişi konektör kullanır
- **Bluetooth**: HID klavye ve fare
- **Hedef**: Yazılım kurulumu gerekmez

### **Temel Donanım**

- CH32V208 çip (CH9329 uyumlu protokol)
- USB konektör(leri): Mini sürümü Type C erkek kullanır; Plus sürümü Type A erkek ve Type C dişi kullanır
- MCU
- Programlanabilir düğme(ler)

### **Giriş Özellikleri**

- Tam klavye ve fare emülasyonu (HID)
- Özel giriş profilleri (Basic ve Pro seviyeleri)
- Makrolar ve kısayol tuşları
- Uygulamaya özel profillerle Kısayol Merkezi
- Hazır tabanlı düzenlerle gamepad (şema v7)
- Slayt zamanlayıcılı sunum kontrolleri
- Yapay zeka ile konuşmadan klavyeye
