---
title: "擴展引腳"
description: "擴展引腳: Openterface Mini-KVM 配備用於高級開發和 實驗的擴展引腳。這些引腳在標準外殼配置中不會外露。 1. 拆解設備。 2. 將原裝外殼上蓋替換為專用的擴展引腳蓋（Extension Pin Cap）。 3. 下載擴展引腳蓋的 。 4. 查看我們的 。…"
keywords: "Mini-KVM 擴展引腳, 自定義開發, 硬件改裝, 開源 KVM"
---

# **擴展引腳** | 開發者模式 | Openterface Mini-KVM

![mini-kvm-pins-port](https://assets.openterface.com/images/product/mini-kvm-pins-port.webp){:style="max-height:360px"}
![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="max-height:300px"}

Openterface Mini-KVM 配備用於高級開發和 [Open Software](/app) 實驗的擴展引腳。這些引腳在標準外殼配置中不會外露。

## 如何訪問引腳

1. 拆解設備。
2. 將原裝外殼上蓋替換為專用的擴展引腳蓋（Extension Pin Cap）。
3. 下載擴展引腳蓋的 [3D 模型](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)。
4. 查看我們的 [硬件 GitHub 倉庫](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware)。

![change-cap](https://assets.openterface.com/images/product/change-cap.svg#only-light){:style="max-height:300px"}
![change-cap](https://assets.openterface.com/images/product/change-cap_1.svg#only-dark){:style="max-height:300px"}

!!! warning "保修失效"
    拆除原裝外殼可能導致產品保修失效。所有改裝或拆解行為均由用户自行承擔風險。

!!! note "實驗性功能"
    使用這些引腳開發的功能屬於實驗性，尚未經過充分測試。因改裝、暴露擴展引腳或對設備進行其他更改而導致的任何損壞、傷害或故障，Openterface 概不負責。

## 引腳配置

![target-side](https://assets.openterface.com/images/product/extension-pins-1.svg#only-light){:style="max-height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2.svg#only-light){:style="max-height:200px"}
![target-side](https://assets.openterface.com/images/product/extension-pins-1_1.svg#only-dark){:style="max-height:200px"}
![host-side](https://assets.openterface.com/images/product/extension-pins-2_1.svg#only-dark){:style="max-height:200px"}

擴展引腳提供以下連接：

1. 為外部組件提供 USB 5V 供電
2. Host 側 USB 集線器的數據正極
3. Host 側 USB 集線器的數據負極
4. Target 側 USB 集線器的數據正極
5. Target 側 USB 集線器的數據負極
6. 地（GND）

!!! danger "錯誤連接會造成損壞"
    混淆 VCC 與 GND 可能會對設備及連接的組件造成嚴重損害。為設備通電前請務必再次核對引腳連接。

## 擴展引腳蓋（Extension Pin Cap）

![pin-cap](https://assets.openterface.com/images/product/part/pin-cap.webp){:style="max-height:360px"}

該 3D 打印的擴展引腳蓋用於替換 Openterface Mini-KVM 的原裝上蓋，使高級用户能夠暴露並訪問擴展引腳以進行自定義開發。你可以從我們的 GitHub 倉庫下載 3D 模型文件並自行打印此蓋子。

- **用途**：為高級硬件開發提供擴展引腳的訪問。
- **下載**：[3D 模型文件](https://github.com/TechxArtisanStudio/Openterface_Mini-KVM_Hardware/tree/main/models)

## 參與開發

隨着我們不斷開發與實驗，我們將持續更新本節，介紹這些引腳的更多潛能及其創造性的使用方式。你的創意與專長將助力拓展 Openterface Mini-KVM 的可能性。歡迎參與：

1. **分享你的想法**：對這些引腳有酷炫的使用構想嗎？我們很想聽到！
2. **貢獻 DIY 項目**：如果你做出了有趣的作品，歡迎在我們的 [Discord Openterface](/discord) 社區分享。
3. **加入討論**：與其他開發者和愛好者一起頭腦風暴並協作。

讓我們一起構建與創新！
