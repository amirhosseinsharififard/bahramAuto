# راهنمای استفاده از Sanity در پروژه بهرام اتو

## مراحل راه‌اندازی

### 1. تنظیم Environment Variables

فایل `.env.local` را در ریشه پروژه ایجاد کنید:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-09-07
```

### 2. راه‌اندازی Sanity Studio

```bash
# نصب dependencies (قبلاً نصب شده)
npm install

# اجرای پروژه
npm run dev

# دسترسی به Studio
# به آدرس http://localhost:3000/studio بروید
```

### 3. ایجاد پروژه Sanity

1. به [sanity.io](https://sanity.io) بروید
2. حساب کاربری ایجاد کنید
3. پروژه جدید بسازید
4. Project ID و Dataset را در `.env.local` قرار دهید

## نحوه استفاده

### 1. مدیریت محتوا در Studio

- به `/studio` بروید
- خودروها، پست‌ها و سایر محتواها را مدیریت کنید
- تصاویر آپلود کنید
- محتوا را منتشر کنید

### 2. استفاده در کامپوننت‌ها

#### نمایش لیست خودروها:

```tsx
import CarList from '@/components/CarList';

export default function HomePage() {
  return (
    <div>
      <CarList limit={8} featuredOnly={true} />
    </div>
  );
}
```

#### استفاده از Hook:

```tsx
import { useCars } from '@/hooks/useSanityData';

export default function CarsPage() {
  const {
    data: cars,
    loading,
    error,
  } = useCars({
    limit: 12,
    featuredOnly: false,
    brand: 'bmw',
  });

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div>
      {cars?.map((car) => (
        <div key={car._id}>{car.title}</div>
      ))}
    </div>
  );
}
```

### 3. Query های مفید

#### دریافت تمام خودروها:

```groq
*[_type == "car" && isAvailable == true] | order(_createdAt desc)
```

#### دریافت خودروهای ویژه:

```groq
*[_type == "car" && isFeatured == true && isAvailable == true]
```

#### دریافت خودروهای یک برند خاص:

```groq
*[_type == "car" && brand == "bmw" && isAvailable == true]
```

#### دریافت یک خودرو خاص:

```groq
*[_type == "car" && slug.current == $slug][0]
```

## Schema Types موجود

### 1. Car (خودرو)

- اطلاعات کامل خودرو
- تصاویر
- مشخصات فنی
- اطلاعات تماس

### 2. Post (پست)

- مقالات و اخبار
- محتوای غنی
- دسته‌بندی

### 3. Author (نویسنده)

- اطلاعات نویسندگان

### 4. Category (دسته‌بندی)

- دسته‌بندی محتوا

## صفحات ایجاد شده

### 1. `/cars` - لیست خودروها

- نمایش تمام خودروهای موجود
- فیلتر و جستجو

### 2. `/cars/[slug]` - جزئیات خودرو

- نمایش کامل اطلاعات خودرو
- تصاویر
- اطلاعات تماس

### 3. `/studio` - مدیریت محتوا

- Sanity Studio
- مدیریت تمام محتواها

## نکات مهم

### 1. امنیت

- هرگز Project ID را در کد عمومی قرار ندهید
- از Environment Variables استفاده کنید

### 2. بهینه‌سازی

- از CDN Sanity استفاده کنید
- تصاویر را بهینه کنید
- Query ها را محدود کنید

### 3. توسعه

- Schema های جدید اضافه کنید
- کامپوننت‌های جدید بسازید
- Hook های سفارشی ایجاد کنید

## دستورات مفید

```bash
# اجرای Studio
npm run dev

# Build پروژه
npm run build

# Lint کردن
npm run lint

# Format کردن
npm run format
```

## منابع مفید

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Next.js + Sanity](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)

## پشتیبانی

برای سوالات و مشکلات:

1. مستندات Sanity را مطالعه کنید
2. در GitHub Issues پروژه سوال بپرسید
3. با تیم توسعه تماس بگیرید


