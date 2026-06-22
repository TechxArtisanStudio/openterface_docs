---
title: "Часто задаваемые вопросы | Модуль расширения v2"
description: "Часто задаваемые вопросы по модулю расширения Openterface uConsole KVM v2: Ethernet-карты, комплект обновления, SD-карта, настройка программного обеспечения, совместимость и устранение неполадок."
keywords: "KVM extension v2 FAQ, uConsole KVM, Ethernet, SD card, troubleshooting, Upgrade Kit"
---

# Часто задаваемые вопросы | Модуль расширения v2

Добро пожаловать в раздел часто задаваемых вопросов по **Openterface uConsole KVM Extension Module v2**.

Если вы не нашли нужную информацию, напишите на [support@openterface.com](mailto:support@openterface.com) или присоединитесь к нашему сообществу в [Discord](/discord).

---

## :material-clipboard-list: Быстрая навигация

- [Продукт и покупка](#produkt-i-pokupka)
- [Установка и аппаратная часть](#ustanovka-i-apparatnaya-chast)
- [Совместимость](#sovmestimost)
- [Управление и функции](#upravlenie-i-funkcii)
- [Видео и аудио](#video-i-audio)
- [Устранение неполадок](#ustranenie-nepoladok)
- [Дополнительно](#dopolnitelno)

---

## Продукт и покупка

**:material-chat-question:{ .faq } Модуль расширения v2 — это один продукт или две сетевые версии?**

Это **один продукт**. В комплект входят Ethernet-карты на 100M и 1000M. См. [Варианты покупки](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } Какую Ethernet-карту следует использовать?**

Используйте карту **100M** на всех базовых платах uConsole. Карту **1000M** используйте только в том случае, если у вас есть **HackerGadgets uConsole Upgrade Kit** и вам нужна гигабитная сеть. См. [Руководство по Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } Нужен ли мне HackerGadgets uConsole Upgrade Kit?**

Только для **гигабитного Ethernet**. Карта 100M работает без комплекта обновления. Если у вас нет комплекта, выберите вариант комплекта при оформлении заказа или приобретите комплект отдельно.

**:material-chat-question:{ .faq } Входит ли uConsole в комплект?**

Нет. Устройство ClockworkPi uConsole продаётся отдельно.

---

## Установка и аппаратная часть

**:material-chat-question:{ .faq } Как работает модуль расширения v2?**

Он захватывает HDMI-сигнал с целевого устройства и отображает его на uConsole. Клавиатура и трекбол uConsole управляют целевым устройством через эмуляцию USB HID. Дополнительные функции Ethernet и SD-карты расширяют возможности сетевой отладки и работы с образами.

**:material-chat-question:{ .faq } Можно ли использовать это вместе с установленным модулем 4G/LTE?**

Нет. Модуль расширения v2 использует слот расширения uConsole и **не может** использоваться одновременно с модулем 4G или LTE.

**:material-chat-question:{ .faq } Какие инструменты мне нужны для установки?**

Шестигранная отвёртка для крепёжных винтов. Рекомендуется соблюдать меры защиты от электростатического разряда (ESD).

**:material-chat-question:{ .faq } Является ли установка обратимой?**

Да. При необходимости снимите модуль расширения v2 и установите обратно исходный модуль 4G/LTE.

---

## Совместимость

**:material-chat-question:{ .faq } Какие модели uConsole совместимы?**

Совместим с устройствами uConsole, имеющими стандартный слот расширения. Проверьте характеристики вашего устройства для подтверждения.

**:material-chat-question:{ .faq } Какими целевыми устройствами я могу управлять?**

Любым устройством с HDMI-выходом: настольными компьютерами, серверами, одноплатными компьютерами (Raspberry Pi и т. д.), встраиваемыми системами, промышленными ПК и многим другим.

**:material-chat-question:{ .faq } Нужно ли целевому устройству специальное программное обеспечение?**

Нет. KVM использует эмуляцию USB HID — драйверы на целевом устройстве для клавиатуры и мыши не требуются. Узнайте больше о [технологии KVM на базе USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } Можно ли управлять несколькими целевыми устройствами одновременно?**

KVM работает с одним целевым устройством за раз. Переключайтесь между устройствами, переключая кабели HDMI и USB.

---

## Управление и функции

**:material-chat-question:{ .faq } Можно ли передавать файлы через SD-карту?**

Да. Модуль расширения v2 поддерживает чтение/запись SD-карты с переключением хост/целевое устройство через приложение Openterface. См. [Руководство по SD-карте](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } Поддерживается ли доступ на уровне BIOS?**

Да. Прямой USB HID обеспечивает полный доступ к BIOS/UEFI без сетевых зависимостей.

**:material-chat-question:{ .faq } Что насчёт устаревшего модуля v1?**

Документация по модулю первого поколения 37 × 77 мм (без Ethernet/SD) доступна в [Документации по устаревшей версии v1](/products/kvmext/v1/).

---

## Видео и аудио

**:material-chat-question:{ .faq } Какие разрешения видео поддерживаются?**

- **Вход**: до 4K @ 30 Гц (RGB/YCBCR444) или 4K @ 60 Гц (YCBCR420) через HDMI
- **Выход**: 1080p @ 60 Гц на экране uConsole

**:material-chat-question:{ .faq } Какова задержка видео?**

Менее **70 мс** — подходит для доступа к BIOS, обслуживания и диагностики.

**:material-chat-question:{ .faq } Поддерживается ли аудио?**

Да. Встроенный в HDMI аудиосигнал передаётся на динамики uConsole.

---

## Устранение неполадок

**:material-chat-question:{ .faq } Нет видеосигнала**

- Проверьте HDMI-подключения на обоих концах
- Убедитесь, что целевое устройство включено и выводит сигнал через HDMI
- Попробуйте другой HDMI-кабель
- Перезапустите Openterface QT

**:material-chat-question:{ .faq } Клавиатура или мышь не работают**

- Убедитесь в подключении USB-кабеля от модуля расширения к целевому устройству
- Полностью выключите uConsole, подождите 10 секунд, включите и повторите попытку
- Переустановите Openterface QT (сборка arm64 для вашего uConsole)
- Сообщите о вашем дистрибутиве Linux и модуле CM4 на [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) или в [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } Программное обеспечение было трудно установить**

Попробуйте GitHub Releases (вариант 1) или репозиторий сообщества ClockworkPi (вариант 3) в разделе [Настройка программного обеспечения](/products/kvmext/software-setup/). Присоединяйтесь к [Discord](https://openterface.com/discord) для пошаговой помощи.

**:material-chat-question:{ .faq } Порт переключения USB не работает**

Убедитесь, что вы используете последнюю версию Openterface QT. Переключите доступ USB в приложении хоста. Если проблема сохраняется, создайте issue на [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } HDMI отображается только в рамке / нет меню настроек приложения**

Обновите Openterface QT до последней версии. Ознакомьтесь с разделом [Настройка программного обеспечения](/products/kvmext/software-setup/) и обсуждениями сообщества в Discord для получения информации о настройках отображения, специфичных для uConsole.

**:material-chat-question:{ .faq } Приложение не обнаруживает модуль**

- Извлеките и заново установите плату в слот расширения
- Перезагрузите uConsole
- Переустановите Openterface QT

---

## Дополнительно

**:material-chat-question:{ .faq } Является ли программное обеспечение открытым?**

Да. Хост-приложения Openterface имеют открытый исходный код на [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } Где можно получить поддержку?**

- **Email**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [Присоединиться к нашему сообществу](https://openterface.com/discord)
- **GitHub**: [Сообщить о проблеме](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
