---
title: "الأسئلة الشائعة | وحدة التوسعة v2"
description: "الأسئلة الشائعة حول وحدة توسعة Openterface uConsole KVM v2: بطاقات Ethernet، طقم الترقية، بطاقة SD، إعداد البرامج، التوافق، واستكشاف الأخطاء وإصلاحها."
keywords: "أسئلة شائعة KVM extension v2, uConsole KVM, Ethernet, بطاقة SD, استكشاف الأخطاء وإصلاحها, طقم الترقية"
---

# الأسئلة الشائعة | وحدة التوسعة v2

مرحبًا بك في الأسئلة الشائعة لـ **Openterface uConsole KVM Extension Module v2**.

إذا لم تجد ما تحتاجه، راسلنا عبر البريد الإلكتروني [support@openterface.com](mailto:support@openterface.com) أو انضم إلى مجتمعنا على [Discord](/discord).

---

## :material-clipboard-list: التنقل السريع

- [المنتج والشراء](#المنتج-والشراء)
- [التثبيت والأجهزة](#التثبيت-والأجهزة)
- [التوافق](#التوافق)
- [التحكم والميزات](#التحكم-والميزات)
- [الفيديو والصوت](#الفيديو-والصوت)
- [استكشاف الأخطاء وإصلاحها](#استكشاف-الأخطاء-وإصلاحها)
- [المزيد](#المزيد)

---

## المنتج والشراء

**:material-chat-question:{ .faq } هل وحدة التوسعة v2 منتج واحد أم نسختان للشبكة؟**

إنها **منتج واحد**. كل من بطاقتي Ethernet 100M و1000M مضمنتان في العلبة. راجع [خيارات الشراء](/products/kvmext/purchase-options/).

**:material-chat-question:{ .faq } أي بطاقة Ethernet يجب أن أستخدم؟**

استخدم بطاقة **100M** مع جميع اللوحات الأساسية لـ uConsole. استخدم بطاقة **1000M** فقط إذا كان لديك **HackerGadgets uConsole Upgrade Kit** وتحتاج إلى شبكة جيجابت. راجع [دليل Ethernet](/products/kvmext/ethernet/).

**:material-chat-question:{ .faq } هل أحتاج إلى HackerGadgets uConsole Upgrade Kit؟**

فقط لشبكة **جيجابت Ethernet**. تعمل بطاقة 100M بدون طقم الترقية. إذا لم يكن لديك الطقم، اختر خيار الحزمة عند الدفع أو اشترِ الطقم بشكل منفصل.

**:material-chat-question:{ .faq } هل جهاز uConsole مشمول؟**

لا. يُباع جهاز ClockworkPi uConsole بشكل منفصل.

---

## التثبيت والأجهزة

**:material-chat-question:{ .faq } كيف تعمل وحدة التوسعة v2؟**

تستقبل إشارة HDMI من الجهاز المستهدف وتعرضها على uConsole. تتحكم لوحة المفاتيح والكرة المتتبعة في uConsole بالجهاز المستهدف عبر محاكاة USB HID. تضيف ميزات Ethernet وبطاقة SD الاختيارية إمكانيات لتصحيح أخطاء الشبكة وإنشاء صور النظام.

**:material-chat-question:{ .faq } هل يمكنني استخدام هذا مع وحدة 4G/LTE مثبتة؟**

لا. تستخدم وحدة التوسعة v2 فتحة التوسعة في uConsole و**لا يمكن** استخدامها في نفس الوقت مع وحدة 4G أو LTE.

**:material-chat-question:{ .faq } ما الأدوات التي أحتاجها للتثبيت؟**

مفك براغي سداسي (Hex) لبراغي التثبيت. يُوصى باتخاذ احتياطات التفريغ الكهروستاتيكي (ESD).

**:material-chat-question:{ .faq } هل التثبيت قابل للعكس؟**

نعم. أزل وحدة التوسعة v2 وأعد تثبيت وحدة 4G/LTE الأصلية إذا لزم الأمر.

---

## التوافق

**:material-chat-question:{ .faq } ما طرازات uConsole المتوافقة؟**

متوافقة مع أجهزة uConsole التي تحتوي على فتحة التوسعة القياسية. تحقق من مواصفات جهازك للتأكيد.

**:material-chat-question:{ .faq } ما الأجهزة المستهدفة التي يمكنني التحكم بها؟**

أي جهاز يحتوي على مخرج HDMI: أجهزة سطح المكتب، الخوادم، الحواسيب أحادية اللوحة (SBC) مثل Raspberry Pi، الأنظمة المدمجة، الحواسيب الصناعية، والمزيد.

**:material-chat-question:{ .faq } هل يحتاج الجهاز المستهدف إلى برامج خاصة؟**

لا. تستخدم KVM محاكاة USB HID — لا حاجة إلى برامج تشغيل على الجهاز المستهدف للوحة المفاتيح والفأرة. تعرف على المزيد حول [تقنية KVM القائمة على USB](/tutorial/kvm/01-getting-started/).

**:material-chat-question:{ .faq } هل يمكنني التحكم في أجهزة مستهدفة متعددة في وقت واحد؟**

جهاز مستهدف واحد في كل مرة لـ KVM. بدّل بين الأجهزة المستهدفة عن طريق نقل كابلات HDMI وUSB.

---

## التحكم والميزات

**:material-chat-question:{ .faq } هل يمكنني نقل الملفات عبر بطاقة SD؟**

نعم. تدعم وحدة التوسعة v2 قراءة/كتابة بطاقة SD مع التبديل بين المضيف/المستهدف عبر تطبيق Openterface. راجع [دليل بطاقة SD](/products/kvmext/sd-card/).

**:material-chat-question:{ .faq } هل تدعم الوصول إلى مستوى BIOS؟**

نعم. يتيح USB HID المباشر الوصول الكامل إلى BIOS/UEFI دون الاعتماد على الشبكة.

**:material-chat-question:{ .faq } ماذا عن وحدة الإصدار القديم v1؟**

الوحدة من الجيل الأول بأبعاد 37 × 77 مم (بدون Ethernet/SD) موثقة في [وثائق الإصدار القديم v1](/products/kvmext/v1/).

---

## الفيديو والصوت

**:material-chat-question:{ .faq } ما دقات الفيديو المدعومة؟**

- **الإدخال**: حتى 4K @ 30 هرتز (RGB/YCBCR444) أو 4K @ 60 هرتز (YCBCR420) عبر HDMI
- **الإخراج**: 1080p @ 60 هرتز على شاشة uConsole

**:material-chat-question:{ .faq } ما زمن استجابة الفيديو؟**

أقل من **70 مللي ثانية** — مناسب للوصول إلى BIOS والصيانة والتشخيص.

**:material-chat-question:{ .faq } هل الصوت مدعوم؟**

نعم. يمر الصوت المدمج في HDMI عبر سماعات uConsole.

---

## استكشاف الأخطاء وإصلاحها

**:material-chat-question:{ .faq } لا توجد إشارة فيديو**

- تحقق من توصيلات HDMI على كلا الطرفين
- تأكد من تشغيل الجهاز المستهدف وأنه يخرج إشارة عبر HDMI
- جرّب كابل HDMI مختلف
- أعد تشغيل Openterface QT

**:material-chat-question:{ .faq } لوحة المفاتيح أو الفأرة لا تعمل**

- تأكد من توصيل كابل USB من وحدة التوسعة إلى الجهاز المستهدف
- أوقف تشغيل uConsole تمامًا، انتظر 10 ثوانٍ، شغّله، ثم أعد المحاولة
- أعد تثبيت Openterface QT (إصدار arm64 لـ uConsole الخاص بك)
- أبلغ عن توزيع Linux ووحدة CM4 على [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues) أو [Discord](https://openterface.com/discord)

**:material-chat-question:{ .faq } كان تثبيت البرنامج صعبًا**

جرّب إصدارات GitHub (الخيار 1) أو مستودع مجتمع ClockworkPi (الخيار 3) في [إعداد البرامج](/products/kvmext/software-setup/). انضم إلى [Discord](https://openterface.com/discord) للحصول على مساعدة خطوة بخطوة.

**:material-chat-question:{ .faq } منفذ تبديل USB لا يعمل**

تأكد من أنك تستخدم إصدارًا حديثًا من Openterface QT. بدّل وصول USB في تطبيق المضيف. إذا استمرت المشكلة، أبلغ عن مشكلة على [GitHub](https://github.com/TechxArtisanStudio/Openterface_QT/issues).

**:material-chat-question:{ .faq } يعرض HDMI في مربع فقط / لا توجد قائمة إعدادات التطبيق**

حدّث إلى أحدث إصدار من Openterface QT. راجع [إعداد البرامج](/products/kvmext/software-setup/) ومناقشات المجتمع على Discord لإعدادات العرض الخاصة بـ uConsole.

**:material-chat-question:{ .faq } التطبيق لا يكتشف الوحدة**

- أعد تركيب اللوحة في فتحة التوسعة
- أعد تشغيل uConsole
- أعد تثبيت Openterface QT

---

## المزيد

**:material-chat-question:{ .faq } هل البرنامج مفتوح المصدر؟**

نعم. تطبيقات Openterface المضيفة مفتوحة المصدر على [GitHub — Openterface_QT](https://github.com/TechxArtisanStudio/Openterface_QT).

**:material-chat-question:{ .faq } أين يمكنني الحصول على الدعم؟**

- **البريد الإلكتروني**: [support@openterface.com](mailto:support@openterface.com)
- **Discord**: [انضم إلى مجتمعنا](https://openterface.com/discord)
- **GitHub**: [الإبلاغ عن المشكلات](https://github.com/TechxArtisanStudio/Openterface_QT/issues)
