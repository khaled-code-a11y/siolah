<div align="center">

# 💰 السيولة الفورية

### Al-Soyoula Al-Fawriya — Instant Liquidity Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![RTL](https://img.shields.io/badge/RTL-Arabic-00D4AA?style=for-the-badge)]()
[![Responsive](https://img.shields.io/badge/Responsive-100%25-success?style=for-the-badge)]()
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

<br>

**صفحة هبوط احترافية عالية التحويل** لخدمة تحويل مشتريات **تابي (Tabby)** و **تمارا (Tamara)** إلى **سيولة نقدية فورية** في الحساب البنكي — بأقساط ميسرة تصل إلى **24 دفعة**.

🌐 الموقع المباشر: [trust-t.net](https://trust-t.net)

</div>

---

## 📋 محتويات المشروع

- [✨ المميزات](#-المميزات)
- [🛠️ التقنيات المستخدمة](#️-التقنيات-المستخدمة)
- [📁 هيكل المشروع](#-هيكل-المشروع)
- [🚀 التشغيل المحلي](#-التشغيل-المحلي)
- [📱 الواجهة والـ UX](#-الواجهة-والـ-ux)
- [⚡ الأداء والـ SEO](#-الأداء-والـ-seo)
- [📄 الترخيص](#-الترخيص)

---

## ✨ المميزات

- ✅ **صفحة هبوط موجهة للتحويل (High-Converting Landing Page)** — مصممة لتحويل الزائر إلى طلب عبر واتساب.
- ✅ **تصميم عربي كامل RTL** بخطوط Cairo و Tajawal، وثيم أبيض نظيف واحترافي.
- ✅ **تكامل مع تابي وتمارا** — شعارات رسمية، شرح واضح لخدمة "تحويل المشتريات لكاش".
- ✅ **قسم أسئلة شائعة تفاعلي (FAQ Accordion)** — 4 أسئلة بتنسيق JSON-LD منسق لمحركات البحث.
- ✅ **تتبع معاملات UTM** — إرفاق `utm_ref` تلقائياً على روابط واتساب.
- ✅ **أنيميشن Scroll Reveal** باستخدام Intersection Observer — بدون أي مكتبات خارجية.
- ✅ **قائمة موبايل متجاوبة** مع تفاعل سلس وسهولة وصول (Accessibility).
- ✅ **SEO متكامل** — Meta Tags، Open Graph، Twitter Cards، Canonical، Sitemap، Robots.txt، و Structured Data.
- ✅ **أداء blazing fast** — Vanilla JS + CSS نقي، صفر اعتماديات (Zero Dependencies).

---

## 🛠️ التقنيات المستخدمة

| التقنية | الاستخدام |
|---|---|
| **HTML5** | هيكل الصفحة الدلالي (Semantic Markup) |
| **CSS3** | التصميم، الثيمات، الأنيميشن، تخطيط RTL متجاوب |
| **Vanilla JavaScript** | كل التفاعلات بدون أي Framework |
| **Google Fonts** | خطوط Cairo & Tajawal |
| **JSON-LD** | Structured Data لتحسين ظهور محركات البحث (Schema.org) |
| **Vercel** | الاستضافة والنشر |

> 💡 **لا توجد أي مكتبات خارجية** — المشروع خفيف وسريع ومبني بأيديكم بالكامل.

---

## 📁 هيكل المشروع

```
shop/
├── index.html          # الصفحة الرئيسية (كل المحتوى والأقسام)
├── css/
│   └── style.css       # كل التنسيقات والتصميم المتجاوب
├── js/
│   └── main.js         # التفاعلات: FAQ، القائمة، الأنيميشن، UTM
├── images/             # الشعارات والصور (تابي، تمارا، OG Image...)
├── vercel.json         # إعدادات Vercel (Clean URLs + Security Headers)
├── robots.txt          # توجيه زواحف محركات البحث
├── sitemap.xml         # خريطة الموقع لـ SEO
└── README.md           # هذا الملف
```

---

## 🚀 التشغيل المحلي

المشروع موقع ثابت (Static Site) — لا يحتاج أي Build Step أو تثبيت حزم.

### الطريقة الأسهل:
افتح ملف `index.html` مباشرة في المتصفح.

### باستخدام سيرفر محلي (موصى به):
```bash
# Python
python -m http.server 8000

# أو Node.js
npx serve .
```
ثم افتح: `http://localhost:8000`

### النشر على Vercel:
المشروع جاهز للنشر فوراً — `vercel.json` مرفق بالفعل مع إعدادات الأمان (Security Headers) والتخزين المؤقت للأصول الثابتة.

---

## 📱 الواجهة والـ UX

- 🎨 تصميم أبيض نظيف بألوان هوية مميزة وظلال ناعمة.
- 📱 متجاوب بالكامل مع جميع الشاشات (Mobile / Tablet / Desktop).
- ♿ مراعاة معايير الوصولية: `aria-label`، `aria-expanded`، تنقل بلوحة المفاتيح.
- ✨ عناصر تظهر بحركة ناعمة عند التمرير (Fade-up on scroll).
- 🧭 شريط تنقل ثابت يتغير شكله عند التمرير + قائمة موبايل منزلقة.

---

## ⚡ الأداء والـ SEO

- 🚀 **سرعة تحميل فائقة** — CSS/JS مدمج بأقل حجم ممكن، خطوط Google محملة بشكل غير حاجب (Non-blocking).
- 🔍 **SEO جاهز 100%** — Meta description، Keywords، Open Graph، Twitter Cards، Canonical URL.
- 📊 **Structured Data** — Schema.org `FinancialService` + `FAQPage` لنتائج غنية في Google.
- 🗺️ **Sitemap + Robots.txt** — لإرشاد محركات البحث.
- 🔒 **Security Headers** — `X-Frame-Options`، `X-Content-Type-Options`، `Referrer-Policy` عبر `vercel.json`.

---

## 📄 الترخيص

هذا المشروع ملك خاص — جميع الحقوق محفوظة © 2026.

---

<div align="center">

**صُنع بـ ❤️ للمملكة العربية السعودية** 🇸🇦

</div>
