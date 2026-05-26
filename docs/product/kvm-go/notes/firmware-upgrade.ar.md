---
title: "ترقية firmware KVM-Go"
description: يستخدم KVM-Go شريحة CH32V208 من WCH لمحاكاة لوحة المفاتيح والفأرة. حاليًا، يتطلب تفليش firmware أداة البرمجة الرسمية من WCH، المتاحة فقط لـ Windows. لذلك،…
---

# ترقية firmware KVM-Go

## نظرة عامة

يستخدم KVM-Go شريحة CH32V208 من WCH لمحاكاة لوحة المفاتيح والفأرة. حاليًا، يتطلب تفليش firmware أداة البرمجة الرسمية من WCH، المتاحة فقط لـ Windows. لذلك، يجب إجراء تحديثات firmware على نظام Windows في الوقت الحالي.

نعمل بنشاط على حل ترقية firmware متعدد المنصات مطور داخليًا، سيتم دمجه مباشرة في الجهاز. عند جاهزيته، سيدعم تحديثات firmware عبر جميع أنظمة التشغيل الرئيسية — دون أدوات طرف ثالث.

> **ملاحظة:** إجراء ترقية firmware اليدوي هذا حل مؤقت لوحدات التطوير المبكرة. بالنسبة لمنتجات الإنتاج الرسمية، ستكون تحديثات firmware مدمجة بسلاسة في برنامجنا، مما يسمح بتحديث firmware مباشرة عبر التطبيق دون أدوات طرف ثالث أو إجراءات يدوية.

## المتطلبات الأساسية

قبل المتابعة، تأكد من توفر:

- جهاز كمبيوتر Windows
- تثبيت WCH ISP Tool
- ملف firmware (بتنسيق `.hex`) جاهز للتفليش

### تنزيل firmware

قم بتنزيل أحدث ملف firmware لـ KVM-Go:

- [BLE_USB.hex](https://download.openterface.com/BLE_USB_20251209.hex) — أحدث firmware لمحاكاة لوحة المفاتيح والفأرة KVM-Go (شريحة CH32V208)

احفظ ملف firmware في موقع يسهل الوصول إليه على جهاز Windows قبل متابعة عملية الترقية.

### تنزيل WCH ISP Tool

قم بتنزيل وتثبيت [WCHISPTool](https://www.wch.cn/downloads/WCHISPTool_Setup_exe.html?spm=a2ty_o01.29997173.0.0.697cc921DiYWE0 "WCHISPTool") (Windows فقط).

شكرًا لصبرك ودعمك!

## تعليمات خطوة بخطوة

### الخطوة 1: تنزيل وفتح الأداة في Windows

شغّل WCH ISP Tool على جهاز Windows.

![واجهة WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763953443609.webp)

### الخطوة 2: تحضير KVM-Go للتفليش

لتفليش firmware على KVM-Go:

1. تأكد من إيقاف تشغيل الجهاز
2. اضغط مع الاستمرار على الزر أثناء توصيله بمنفذ USB Type-C

**نصيحة:** يمكنك التفليش عبر أي منفذ، لكن منفذ «target» يكون عادةً أكثر استقرارًا أثناء التفليش.

![توصيل KVM-Go وإعداد الأسلاك](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763982667349.webp)

### الخطوة 3: تحديد ملف firmware

إذا نجح الاتصال، ستكتشف الأداة تلقائيًا طراز الشريحة (سلسلة CH32V20X).

1. انقر على زر «...» لتصفح وتحديد ملف firmware المراد فلاشه
2. حدد ملف firmware `.hex`
3. **مهم:** تذكر تحديد المربع بجانب ملف firmware

![طراز الشريحة المكتشف في WCH ISP Tool](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954642761.webp)

![تصفح وتحديد ملف firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763954858836.webp)

![ملف firmware محدد مع المربع المحدد](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955070638.webp)

### الخطوة 4: إلغاء حماية firmware الحالي

قبل فلاش firmware الجديد، تحتاج إلى إزالة حماية الكتابة من firmware الحالي:

1. انقر على خيار «Deprotect» في الأداة
2. اضغط باختصار على الزر الفعلي على KVM-Go للدخول في وضع الفلاش
3. انتظر اكتمال عملية إلغاء الحماية

![خيار Deprotect في الأداة](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955617253.webp)

![اضغط زر KVM-Go للدخول في وضع الفلاش](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763955858115.webp)

### الخطوة 5: تنزيل وفلاش firmware

بمجرد إلغاء حماية firmware وتحديده:

1. انقر على زر «Download» في أداة الفلاش
2. انتظر اكتمال عملية الفلاش
3. ستشير الأداة إلى نجاح فلاش firmware

![عملية تنزيل وفلاش firmware](https://assets.openterface.com/images/post/kvmgo-firmware/image-1763956095046.webp)

## قراءة إضافية

- [دليل مراجعة Openterface KVM-Go](review-guide.md) — ملاحظات مهمة ومشاكل معروفة لوحدات النموذج الأولي الهندسي
