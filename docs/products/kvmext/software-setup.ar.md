---
title: "إعداد البرنامج | Extension Module v2"
description: "قم بتثبيت وتكوين تطبيق Openterface المضيف على جهاز uConsole الخاص بك لوحدة KVM Extension Module v2 — التقاط HDMI، وUSB HID، وتبديل بطاقة SD، ومشاركة USB."
keywords: "تثبيت تطبيق Openterface، إعداد برنامج uConsole، KVM extension v2، openterfaceqt"
---

# **إعداد البرنامج** | Extension Module v2

## نظرة عامة على التثبيت

يتيح تطبيق Openterface المضيف لجهاز uConsole الخاص بك العمل كواجهة KVM مع التقاط HDMI، والتحكم عبر USB HID، و**تبديل بطاقة SD**، و**مشاركة منفذ USB** بين المضيف والهدف.

!!! note "المتطلبات"
    - **uConsole (المضيف)**: مطلوب تطبيق Openterface QT
    - **الجهاز الهدف**: لا يلزم تطبيق — يتم دعم Windows وmacOS وLinux وAndroid وiOS لـ KVM
    - **الفيديو**: كابل HDMI قياسي؛ المحولات المزودة بالطاقة تدعم VGA وDP وتنسيقات أخرى
    - **الواجهة الخلفية الموصى بها**: **GStreamer** للحصول على أفضل أداء لوحدة معالجة الرسومات arm64 (قد يكون دعم GStreamer محدودًا في Kali Linux)

## طرق التثبيت

### **الخيار 1: إصدارات GitHub (موصى به لـ arm64)**

1. قم بزيارة [Openterface_QT Releases](https://github.com/TechxArtisanStudio/Openterface_QT/releases).
2. قم بتنزيل أحدث إصدار `.deb` لـ **arm64** (على سبيل المثال `openterfaceqt_*_arm64.deb`).
3. التثبيت:
    ```bash
    sudo apt install ./openterfaceqt_*_arm64.deb
    ```

### **الخيار 2: Flatpak**

اتبع [دليل تثبيت Flatpak](https://github.com/TechxArtisanStudio/Openterface_QT/blob/main/docs/flatpak_installation.md).

### **الخيار 3: مستودع المجتمع (ClockworkPi Bookworm)**

يتم صيانته بواسطة Rex لصور ClockworkPi:

1. **إضافة المستودع**:
    ```bash
    wget -q -O- https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm/KEY.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/ak-rex.gpg
    sudo add-apt-repository -y "deb [arch=arm64] https://raw.githubusercontent.com/ak-rex/ClockworkPi-apt/main/bookworm stable main"
    ```

2. **التثبيت**:
    ```bash
    sudo apt update
    sudo apt install openterfaceqt
    ```

!!! warning "ملاحظات حول المستودع"
    تتطلب الأوامر `sudo`. يستهدف المستودع حزم arm64 Bookworm — تحقق من التوافق مع نظام تشغيل uConsole الخاص بك قبل التثبيت.

## تذكيرات هامة

!!! tip "الطاقة والإعداد لأول مرة"
    - حافظ على شحن uConsole أو قم بتوصيله بمصدر طاقة مستقر — يمكن أن تتسبب البطارية المنخفضة في حدوث مشكلات في الاتصال.
    - إذا فشل التحكم بلوحة المفاتيح/الماوس في المحاولة الأولى:
        1. قم بإيقاف تشغيل uConsole بالكامل.
        2. انتظر 10 ثوانٍ على الأقل.
        3. قم بتشغيله وحاول مرة أخرى.

!!! tip "معدل الباود للاتصال التسلسلي"
    اضبط معدل الباود على **9600** للاستخدام التسلسلي — قد لا يتمكن uConsole من الحفاظ على 115200 بشكل موثوق.

## الاستخدام

### **بدء جلسة KVM**

1. قم بتشغيل Openterface QT على جهاز uConsole الخاص بك.
2. يكتشف التطبيق Extension Module v2 تلقائيًا.
3. قم بتوصيل الهدف عبر HDMI وUSB.
4. استخدم لوحة مفاتيح uConsole وكرة التتبع (trackball) للتحكم في الهدف.

### **ميزات التحكم**

- **لوحة المفاتيح**: محاكاة كاملة بما في ذلك مفاتيح الوسائط المتعددة
- **الماوس**: تحديد الموضع المطلق والنسبي
- **الصوت**: تمرير صوت HDMI إلى مكبرات صوت uConsole
- **نقل النص**: لصق أسماء المستخدمين وكلمات المرور والمقتطفات كضغطات مفاتيح محاكاة
- **تبديل USB**: مشاركة وحدة تخزين USB بين uConsole والهدف عبر تطبيق المضيف — راجع [الاتصال بالهدف](/products/kvmext/connect-to-target/)
- **تبديل بطاقة SD**: تركيب بطاقة SD على المضيف أو الهدف عبر تطبيق المضيف — راجع [دليل بطاقة SD](/products/kvmext/sd-card/)

### **استكشاف أخطاء تثبيت البرنامج وإصلاحها**

إذا كان من الصعب تثبيت التطبيق أو إذا كان الماوس/لوحة المفاتيح لا يعملان:

- تأكد من تثبيت إصدار **arm64** على وحدة uConsole CM4/الوحدة النمطية الخاصة بك
- انضم إلى [Discord](https://openterface.com/discord) للحصول على مساعدة فورية
- أبلغ عن المشكلات على [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT/issues)

## مواضيع ذات صلة

- [الاتصال بالهدف](/products/kvmext/connect-to-target/)
- [دليل بطاقة SD](/products/kvmext/sd-card/)
- [الأسئلة الشائعة](/products/kvmext/faq/)
