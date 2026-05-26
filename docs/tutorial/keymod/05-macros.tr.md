---
title: "KeyMod Eğitim - Makrolar"
description: "Değiştiriciler, gecikmeler ve planlama dahil olmak üzere otomatik tuş dizilerini KeyMod makrolarıyla kaydedin ve yeniden oynatın."
keywords: "KeyMod makrolar, otomatik tuş vuruşları, makro zamanlayıcı, makro belirteçleri, tuş dizileri"
---

# 5. Makrolar

Tek bir dokunuşla otomatik tuş dizilerini kaydedin ve yeniden oynatın.

## Makro Nedir?

Makro, yeniden oynatabileceğiniz **kaydedilmiş tuş vuruşları dizisidir**. Örneğin:
- Tek dokunuşla e-posta imzanızı yazın
- `Ctrl+Shift+Esc` ve ardından `Alt+D`'i sırayla gönderin
- Adımlar arasındaki gecikmelerle çok adımlı bir komut dizisini otomatikleştirin

## Makro Belirteç Sözdizimi

| Jeton | Anlamı |
|---|---|
| `<CTRL>` ... `</CTRL>` | Tutma/bırakma Kontrolü |
| `<SHIFT>` ... `</SHIFT>` | Tut/bırak Shift |
| `<ALT>` ... `</ALT>` | Tut/bırak Alt/Option |
| `<CMD>` ... `</CMD>` | Tut/bırak Komut/Win/Super |
| `<ESC>`, `<BACK>`, `<ENTER>`, `<SPACE>` | Özel anahtarlar |
| `<LEFT>`, `<RIGHT>`, `<UP>`, `<DOWN>` | Ok tuşları |
| `<HOME>`, `<END>`, `<TAB>`, `<DEL>` | Gezinme tuşları |
| `<F1>` ila `<F12>` | Fonksiyon tuşları |
| `<DELAY1S>`, `<DELAY2S>`, `<DELAY5S>`, `<DELAY10S>` | Duraklatmalar |

**Örnek:**```
<CTRL><ALT>t</ALT></CTRL><DELAY1S>ls -la<ENTER>
Bu bir terminal açar (Ctrl+Alt+T), 1 saniye bekler, ardından `ls -la` yazıp Enter tuşuna basar.

## Makro Oluşturma

1. **Makrolar** moduna gidin
2. Yeni bir makro oluşturmak için **"+"** öğesine dokunun
3. Bir **makro adı/etiket** girin
4. Metin alanını ve hızlı takılan jeton çiplerini kullanarak makro komut dizisini oluşturun
5. **Karakter Gönderme Aralığını** (milisaniye cinsinden tuş vuruşları arasındaki gecikme) ayarlayın.
6. **"Kaydet"**'e dokunun

## Sonraki Adımlar

- **[← Shortcut Hub](04-shortcuts.md)** — Profil tabanlı klavye kısayolları
- **[Voice Input →](06-voice-input.md)** — Sesten klavyeye transkripsiyon