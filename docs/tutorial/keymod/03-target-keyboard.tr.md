---
title: "KeyMod Eğitim - Hedef İşletim Sistemi"
description: "Hedef işletim sistemini, KeyMod'nin Windows, macOS veya Linux bilgisayarlara doğru tuş eşlemelerini göndereceği şekilde ayarlayın."
keywords: "KeyMod hedef işletim sistemi, anahtar eşleme, değiştirici tuşlar, Unicode girişi"
---

# 3. Hedef İşletim Sistemi

KeyMod hedef bilgisayarın işletim sistemine uyum sağlayan tuş vuruşlarını gönderir. Bunu doğru şekilde yapılandırmak hedefe doğru anahtarların ulaşmasını sağlar.

## Nasıl Ayarlanır

Seçiciyi açmak için başlık çubuğundaki **İşletim Sistemi simgesine** dokunun:

<div align="center">
  <img src="images/demo-target-os-picker.png" alt="Target OS picker dialog" width="300" />
  <p><em>İşletim Sistemi seçiciyi hedefleyin — macOS, Windows veya Linux'yi seçin.</em></p>
</div>

> **Not:** Henüz bunun için bir ekran görüntüsü yok. İşletim Sistemi seçici, başlık çubuğundaki İşletim Sistemi simgesine dokunduğunuzda görünen üç simge düğmesinin (macOS, Windows, Linux) yer aldığı bir iletişim kutusudur.

## Neyi Değiştirir

| Hedef | Anahtar Eşleme |
|----------|----------------|
| **Windows** | Win tuşu Windows tuşuyla eşleştirilmiştir; standart PC değiştirici davranışı |
| **macOS** | Win tuşu Cmd ile eşlenmiştir; Alt Option ile eşlenmiştir; kısayol etiketlerini düzeltin |
| **Linux** | Super/Meta tuş davranışı |

Bu şunları etkiler:
- **Kısayol etiketleri** Kısayol Merkezi'nde gösterilir
- **Değiştirici tuş eşlemesi** (Win tuş davranışı)
- **ASCII olmayan karakterler için kullanılan **Unicode giriş yöntemi**

## Unicode Karakterler

ASCII olmayan karakterler (Çince, Japonca, emoji) işletim sistemine özgü giriş yöntemleri gerektirir:

| İşletim Sistemi | Yöntem |
|---|---|
| **Windows** | Alt+NumPad onaltılık Unicode girişi |
| **Linux** | Ctrl+Shift+U ve ardından hex kodu |
| **macOS** | Option+hex giriş |

Unicode karakterler hedefte hatalı görünüyorsa Hedef İşletim Sisteminin doğru şekilde ayarlandığını doğrulayın.

## Klavye Modları (Yerleşimler Değil)

KeyMod yazmak için üç klavye modu sağlar:

| Modu | Nasıl geçiş yapılır |
|---|---|
| **ABC** (harfler) | **ABC** tuşuna dokunun |
| **123** (sayılar) | **123** tuşuna dokunun |
| **!?#** (semboller) | **!?#** tuşuna dokunun |

Bunlar, fiziksel klavye düzenleri değil, uygulama içindeki giriş yöntemi geçişleridir. KeyMod şu anda standart USB HID tarama kodlarını göndermektedir (ABD QWERTY tabanı). Hedefte ABD dışı bir fiziksel klavye kullanırsanız, aynı tuş konumlarındaki sembollerde hafif karakter uyumsuzlukları görebilirsiniz.

## Sonraki Adımlar

- **[← Keyboard & Mouse](02-keyboard-mouse.md)** — Yazma, değiştiriciler, touchpad ve metin girişi
- **[Shortcut Hub →](04-shortcuts.md)** — Profil tabanlı klavye kısayolları