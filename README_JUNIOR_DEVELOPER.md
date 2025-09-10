# Bahram Autohaus - Complete Developer Guide for Juniors

## 🎯 What is this project?

This is a **car dealership website** for "Bahram Autohaus" - a German car dealership that sells premium vehicles. The website is built with modern web technologies and supports two languages: German and Persian.

## 🧠 Understanding the Project Structure

Think of this project like a **restaurant**:

- **Frontend (React/Next.js)** = The dining room where customers see and interact
- **Excel Files** = The kitchen where all the content (cars, translations) is prepared
- **Components** = Different sections of the restaurant (kitchen, dining area, etc.)
- **Hooks** = The waiters that bring data from the kitchen to the dining room

## 📁 Project Structure Explained (Like a Building)

```
bahram-auto/                    # The main building
├── public/                     # Public area (like lobby)
│   ├── excel/                 # Content storage (like filing cabinet)
│   │   ├── translations-template.csv  # All text in German/Persian
│   │   └── cars.xlsx          # All car information
│   └── images/                # Photo gallery
│       └── cars/              # Car photos
├── src/                       # Main office area
│   ├── app/                   # Different floors/rooms
│   │   ├── page.tsx          # Main entrance (home page)
│   │   ├── service/          # Services floor
│   │   ├── about-us/         # About us floor
│   │   └── contact-us/       # Contact floor
│   ├── components/           # Reusable furniture
│   │   ├── Header.tsx        # Main entrance door
│   │   ├── Footer.tsx        # Exit door
│   │   └── AdminPanel.tsx    # Manager's office
│   ├── contexts/             # Company rules/policies
│   │   └── LanguageContext.tsx  # Language switching rules
│   ├── hooks/                # Specialized workers
│   │   └── useExcelData.ts   # Data manager
│   └── utils/                # Tools and equipment
│       └── excelReader.ts    # Excel reading machine
```

## 🔧 How to Set Up the Project (Step by Step)

### Step 1: Install Prerequisites

```bash
# Make sure you have Node.js installed (version 18 or higher)
node --version

# If you don't have Node.js, download it from: https://nodejs.org/
```

### Step 2: Get the Project

```bash
# Download the project (if you have git)
git clone <project-url>
cd bahram-auto

# Or download the ZIP file and extract it
```

### Step 3: Install Dependencies

```bash
# This installs all the tools the project needs
npm install
```

### Step 4: Set Up Data Files

1. Go to the `public/excel/` folder
2. Make sure you have these files:
   - `translations-template.csv` (for German/Persian text)
   - `cars.xlsx` (for car information)

### Step 5: Run the Project

```bash
# Start the development server
npm run dev

# Open your browser and go to: http://localhost:3000
```

## 📊 Understanding the Data System

### How Translations Work (Like a Dictionary)

The website supports two languages. All text is stored in a CSV file:

```csv
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
```

**Explanation:**

- `key` = The name we use in code (like "nav.home")
- `de` = German text
- `fa` = Persian text
- `category` = Group name (like "navigation", "hero")

**In the code, we use it like this:**

```tsx
const { t } = useLanguage();
return <h1>{t('hero.title')}</h1>; // Shows "Bahram Autohaus" or "بهرام اتوهاوس"
```

### How Car Data Works (Like a Car Catalog)

Car information is stored in an Excel file with these columns:

| Column       | What it means      | Example    |
| ------------ | ------------------ | ---------- |
| brand        | Car maker          | BMW        |
| model        | Car model          | X5         |
| year         | When it was made   | 2023       |
| price        | How much it costs  | 45.000 €   |
| mileage      | How many km driven | 25000      |
| fuel         | What fuel it uses  | Benzin     |
| transmission | Type of gearbox    | Automatik  |
| category     | Type of car        | suv        |
| image        | Photo filename     | bmw-x5.jpg |

## 🧩 Understanding Components (Like Building Blocks)

### 1. Header Component (`src/components/Header.tsx`)

**What it does:** The top navigation bar
**Like:** The main entrance of a building

```tsx
// This is how we use it
<Header language={language} setLanguage={setLanguage} />
```

**Key features:**

- Shows company logo
- Navigation menu (Home, Gallery, Services, etc.)
- Language switcher (DE/FA buttons)
- Mobile menu for phones

### 2. Footer Component (`src/components/Footer.tsx`)

**What it does:** The bottom section with contact info
**Like:** The exit area with company information

```tsx
// This is how we use it
<Footer language={language} />
```

**Key features:**

- Company information
- Contact details (phone, email, address)
- Links to other pages
- Developer information

### 3. AdminPanel Component (`src/components/AdminPanel.tsx`)

**What it does:** Management interface for updating content
**Like:** The manager's office

```tsx
// This is how we use it
<AdminPanel
  isOpen={isAdminPanelOpen}
  onClose={() => setIsAdminPanelOpen(false)}
/>
```

**Key features:**

- Instructions for updating Excel files
- Button to refresh data
- Error messages if something goes wrong

## 🔄 Understanding Hooks (Like Specialized Workers)

### 1. useLanguage Hook (`src/contexts/LanguageContext.tsx`)

**What it does:** Manages language switching
**Like:** A translator who knows both languages

```tsx
// This is how we use it
const { language, setLanguage, t } = useLanguage();

// Change language
setLanguage('fa'); // Switch to Persian

// Get translated text
const title = t('hero.title'); // Gets "Bahram Autohaus" or "بهرام اتوهاوس"
```

### 2. useExcelData Hook (`src/hooks/useExcelData.ts`)

**What it does:** Loads data from Excel files
**Like:** A librarian who brings books (data) from the library (Excel files)

```tsx
// This is how we use it
const { cars, translations, loading, error, refreshData } = useExcelData();

// Get all cars
console.log(cars); // Array of all cars

// Check if data is loading
if (loading) return <div>Loading...</div>;

// Refresh data (useful after updating Excel files)
refreshData();
```

## 🛠 How to Add New Content

### Adding a New Translation

1. **Open the file:** `public/excel/translations-template.csv`
2. **Add a new line:**
   ```csv
   my.new.key,German Text,متن فارسی,category
   ```
3. **Use it in code:**
   ```tsx
   const { t } = useLanguage();
   return <p>{t('my.new.key')}</p>;
   ```
4. **Refresh the data** using the Admin Panel

### Adding a New Car

1. **Open the file:** `public/excel/cars.xlsx`
2. **Add a new row** with all required columns:
   - brand, model, year, price, mileage, fuel, transmission, category, image, description
3. **Save the file**
4. **Refresh the data** using the Admin Panel

### Adding a New Page

1. **Create a new folder** in `src/app/` (e.g., `src/app/new-page/`)
2. **Create `page.tsx`** in that folder:

   ```tsx
   'use client';
   import { useLanguage } from '@/contexts/LanguageContext';
   import Header from '@/components/Header';
   import Footer from '@/components/Footer';

   export default function NewPage() {
     const { language, setLanguage, t } = useLanguage();

     return (
       <div>
         <Header language={language} setLanguage={setLanguage} />
         <h1>{t('new.page.title')}</h1>
         <Footer language={language} />
       </div>
     );
   }
   ```

3. **Add translations** to the CSV file
4. **Add navigation link** in Header component

## 🐛 Common Problems and Solutions

### Problem: "Excel files not loading"

**Solution:**

1. Check if files exist in `public/excel/`
2. Make sure file names are correct
3. Use Admin Panel to refresh data

### Problem: "Translations not showing"

**Solution:**

1. Check the translation key in CSV file
2. Make sure the key is used correctly in code
3. Check browser console for errors

### Problem: "Images not displaying"

**Solution:**

1. Put images in `public/images/cars/`
2. Update image filename in Excel file
3. Check file extensions (.jpg, .png, etc.)

### Problem: "Language not switching"

**Solution:**

1. Clear browser cache
2. Check if translation exists in CSV file
3. Restart the development server

## 🎨 Understanding the Styling (Tailwind CSS)

This project uses **Tailwind CSS** for styling. It's like having a box of LEGO blocks for design:

```tsx
// Example: A blue button with white text
<button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
  Click me
</button>
```

**Common Tailwind classes:**

- `bg-blue-600` = Blue background
- `text-white` = White text
- `px-4` = Horizontal padding
- `py-2` = Vertical padding
- `rounded-lg` = Rounded corners
- `flex` = Flexbox layout
- `grid` = Grid layout
- `hidden` = Hide element
- `md:flex` = Show on medium screens and up

## 🚀 How to Deploy (Make it Live on Internet)

### Option 1: Vercel (Recommended for beginners)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect your GitHub account
4. Import your project
5. Deploy!

### Option 2: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub account
4. Deploy your project

## 📚 Learning Resources

### If you want to learn more:

1. **React Basics:** [react.dev](https://react.dev)
2. **Next.js:** [nextjs.org](https://nextjs.org)
3. **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
4. **TypeScript:** [typescriptlang.org](https://typescriptlang.org)

### Key Concepts to Understand:

- **Components:** Reusable pieces of UI
- **Props:** Data passed to components
- **State:** Data that can change
- **Hooks:** Special functions for React
- **Context:** Global state management
- **JSX:** HTML-like syntax in JavaScript

## 🆘 Getting Help

If you're stuck:

1. **Check the console** (F12 in browser) for error messages
2. **Read the error carefully** - it usually tells you what's wrong
3. **Google the error message** - someone else probably had the same problem
4. **Ask for help** with specific error messages and what you were trying to do

## 📞 Contact Information

**Developer:** Amir Hossein Shrififard
**Email:** amirhosseinshrififard@gmail.com
**Phone:** +989172380487

---

**Remember:** Every expert was once a beginner. Don't be afraid to make mistakes - that's how you learn! 🚀







