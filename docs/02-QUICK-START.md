# ⚡ Quick Start Guide - Bahram Autohaus Frontend

## 🎯 Get Up and Running in 5 Minutes

This guide will help you get the Bahram Autohaus frontend running quickly for development or testing purposes.

## 📋 Prerequisites Check

Before starting, ensure you have:

- ✅ Node.js 18+ installed
- ✅ Project files downloaded/cloned
- ✅ Terminal/Command Prompt ready

## 🚀 Quick Setup (5 Minutes)

### Step 1: Navigate to Project Directory

```bash
# Navigate to the frontend project folder
cd "F:\programming\project 1404\mohsen-shafiey\bahram auto front"
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install
```

**Wait for installation to complete** (usually 1-2 minutes)

### Step 3: Start Development Server

```bash
# Start the development server
npm run dev
```

### Step 4: Open in Browser

1. **Open your browser**
2. **Navigate to**: `http://localhost:3000`
3. **You should see**: The Bahram Autohaus website

## ✅ Verification

### What You Should See

1. **Homepage loads** with German text
2. **Language switcher** (DE/FA buttons) in the header
3. **Navigation menu** with links to different pages
4. **Car showcase** section (may be empty if no data)
5. **Footer** with company information

### Test Basic Functionality

1. **Click language switcher** (DE/FA) - text should change
2. **Navigate between pages** using the menu
3. **Check responsive design** by resizing browser window
4. **Look for Admin Panel button** (usually bottom-right corner)

## 🔧 Quick Configuration

### If You Want to Use Strapi Backend

1. **Create `.env.local` file** in project root:

   ```env
   NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
   NEXT_PUBLIC_STRAPI_API_TOKEN=your_token_here
   ```

2. **Start Strapi backend** (if you have it):
   ```bash
   cd ../bahram-auto-backend
   npm run develop
   ```

### If You Want to Add Sample Data

1. **Create `public/excel/translations-template.csv`**:

   ```csv
   key,de,fa,category
   nav.home,Startseite,صفحه اصلی,navigation
   hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
   ```

2. **Create `public/excel/cars.xlsx`** with sample car data

3. **Add sample images** to `public/images/cars/`

## 🎯 Common Quick Tasks

### Add a New Translation

1. **Edit** `public/excel/translations-template.csv`
2. **Add new row**:
   ```csv
   my.new.key,German Text,متن فارسی,category
   ```
3. **Use in code**:
   ```tsx
   const { t } = useLanguage();
   return <h1>{t('my.new.key')}</h1>;
   ```

### Add a New Car

1. **Edit** `public/excel/cars.xlsx`
2. **Add new row** with car details
3. **Add car image** to `public/images/cars/`
4. **Refresh data** using Admin Panel

### Change Styling

1. **Edit** `src/app/globals.css` for global styles
2. **Use Tailwind classes** in components
3. **Modify** `tailwind.config.ts` for custom colors/fonts

## 🚨 Quick Troubleshooting

### Port 3000 Already in Use

```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Website Not Loading

1. **Check terminal** for error messages
2. **Verify** you're in the correct directory
3. **Ensure** all dependencies are installed
4. **Try** restarting the development server

### Excel Files Not Loading

1. **Check** if files exist in `public/excel/`
2. **Verify** file formats (CSV for translations, XLSX for cars)
3. **Use Admin Panel** to refresh data

## 📱 Mobile Testing

### Test on Mobile Device

1. **Find your computer's IP address**:

   ```bash
   # Windows
   ipconfig

   # macOS/Linux
   ifconfig
   ```

2. **Start dev server** with host binding:

   ```bash
   npm run dev -- -H 0.0.0.0
   ```

3. **Access from mobile**: `http://YOUR_IP:3000`

### Test Responsive Design

1. **Open browser dev tools** (F12)
2. **Toggle device toolbar** (Ctrl+Shift+M)
3. **Test different screen sizes**

## 🎨 Quick Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color-here',
      },
    },
  },
}
```

### Change Fonts

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your-Font', 'system-ui', 'sans-serif'],
    },
  },
}
```

### Add New Page

1. **Create folder** in `src/app/` (e.g., `new-page/`)
2. **Create `page.tsx`**:

   ```tsx
   'use client';
   import { useLanguage } from '@/contexts/LanguageContext';
   import Header from '@/components/layout/Header';
   import Footer from '@/components/layout/Footer';

   export default function NewPage() {
     const { language, setLanguage, t } = useLanguage();

     return (
       <div>
         <Header language={language} setLanguage={setLanguage} />
         <main>
           <h1>New Page</h1>
         </main>
         <Footer language={language} />
       </div>
     );
   }
   ```

## 🔄 Development Workflow

### Making Changes

1. **Edit files** in your code editor
2. **Save changes** - browser will auto-reload
3. **Test changes** in browser
4. **Check console** for any errors

### Adding Dependencies

```bash
# Install new package
npm install package-name

# Install dev dependency
npm install -D package-name
```

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📚 Next Steps

After getting the basic setup working:

1. **Read the full Installation Guide** (`docs/01-INSTALLATION.md`)
2. **Understand the Project Overview** (`docs/03-PROJECT-OVERVIEW.md`)
3. **Learn about Development** (`docs/04-DEVELOPMENT-GUIDE.md`)
4. **Explore Components** (`docs/05-COMPONENT-GUIDE.md`)

## 🆘 Need Help?

### Quick Support

- **Check browser console** for error messages
- **Read error messages** in terminal
- **Verify file paths** and formats
- **Restart development server**

### Contact Support

- **Email**: amirhosseinsharififard@gmail.com
- **Phone**: +989172380487

---

**Last Updated**: December 2024  
**Version**: 1.0.0
