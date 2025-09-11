# 🚀 راهنمای سریع راه‌اندازی Strapi

## ⚡ مراحل سریع:

### 1. **راه‌اندازی Strapi Backend**
```bash
# در terminal جدید
cd ../bahram-auto-backend
npm install
npm run develop
```

### 2. **ایجاد Content Types در Strapi**

#### **Car Content Type:**
1. برو به `http://localhost:1337/admin`
2. **Content-Type Builder** → **Create new collection type**
3. نام: `Car`
4. فیلدها:
   - `name` (Text)
   - `brand` (Text) 
   - `model` (Text)
   - `year` (Number)
   - `price` (Number)
   - `mileage` (Number)
   - `fuelType` (Text)
   - `transmission` (Text)
   - `engineSize` (Text)
   - `color` (Text)
   - `description` (Long text)
   - `features` (JSON)
   - `images` (Media, Multiple media)

#### **Hero Content Type:**
1. **Content-Type Builder** → **Create new collection type**
2. نام: `Hero Content`
3. فیلدها:
   - `title` (Text)
   - `subtitle` (Text)
   - `description` (Long text)
   - `ctaText` (Text)
   - `videoButtonText` (Text)
   - `backgroundImage` (Media, Single media)
   - `video` (Media, Single media)
   - `stats` (JSON)

### 3. **تنظیم Permissions**
1. **Settings** → **Users & Permissions Plugin** → **Roles**
2. **Public** role:
   - **Car**: `find`, `findOne` ✅
   - **Hero Content**: `find`, `findOne` ✅

### 4. **تست API**
- `http://localhost:1337/api/cars` → باید `[]` برگرداند
- `http://localhost:1337/api/hero-contents` → باید `[]` برگرداند

## 🔧 **اگر مشکل داشتید:**

### **مشکل: 400 Bad Request**
- Content Type هنوز ایجاد نشده
- مراحل بالا را دنبال کنید

### **مشکل: Connection Error**
- Strapi در حال اجرا نیست
- `npm run develop` را در backend اجرا کنید

### **مشکل: Infinite Loop**
- صفحه را refresh کنید
- مشکل حل شده است

## ✅ **نتیجه:**
بعد از این مراحل، frontend باید بدون مشکل کار کند و از Strapi داده بگیرد!
