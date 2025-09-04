# Bahram Autohaus - Project Documentation

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Language Management](#language-management)
- [Car Data Management](#car-data-management)
- [Excel File Structure](#excel-file-structure)
- [Component Documentation](#component-documentation)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## 🚗 Project Overview

Bahram Autohaus is a modern, bilingual (German/Persian) car dealership website built with Next.js 14. The application features a responsive design, Excel-based content management, and comprehensive car showcase functionality.

### Key Features
- 🌐 **Bilingual Support**: German and Persian languages
- 📊 **Excel-based CMS**: Manage content through Excel files
- 🚗 **Car Showcase**: Dynamic car listings with filtering
- 📱 **Responsive Design**: Mobile-first approach
- 🎨 **Modern UI**: Glassmorphism design with animations
- ⚡ **Performance**: Optimized with Next.js 14

## 🛠 Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **React Hooks** - State management

### Data Management
- **Excel Files** - Content management via Excel/CSV
- **Custom Hooks** - Data fetching and state management
- **Context API** - Global state management

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
bahram-auto/
├── public/
│   ├── excel/                 # Excel data files
│   │   ├── translations-template.csv
│   │   ├── cars.xlsx
│   │   └── README.md
│   ├── images/               # Static images
│   │   └── cars/
│   └── lotties/              # Animation files
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── page.tsx          # Home page
│   │   ├── service/          # Services page
│   │   ├── about-us/         # About page
│   │   ├── contact-us/       # Contact page
│   │   ├── gallery/          # Gallery page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable components
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Footer.tsx        # Site footer
│   │   ├── AdminPanel.tsx    # Content management panel
│   │   └── AnimatedBackground.tsx
│   ├── contexts/             # React contexts
│   │   └── LanguageContext.tsx
│   ├── hooks/                # Custom hooks
│   │   └── useExcelData.ts
│   ├── utils/                # Utility functions
│   │   └── excelReader.ts
│   └── constants/            # App constants
│       └── index.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bahram-auto
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Excel files**
   - Place `translations-template.csv` in `/public/excel/`
   - Place `cars.xlsx` in `/public/excel/`
   - See [Excel File Structure](#excel-file-structure) for details

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

## 🌐 Language Management

### Supported Languages
- **German (DE)** - Default language
- **Persian (FA)** - RTL support

### Adding New Translations

1. **Edit Excel file**: `/public/excel/translations-template.csv`
2. **Add new row** with format:
   ```csv
   key,de,fa,category
   new.key,German Text,متن فارسی,category
   ```
3. **Use in components**:
   ```tsx
   const { t } = useLanguage();
   return <h1>{t("new.key")}</h1>;
   ```

### Translation Key Structure
- Use dot notation for nested keys: `nav.home`, `footer.company.name`
- Categories help organize translations: `navigation`, `hero`, `footer`, etc.

## 🚗 Car Data Management

### Adding New Cars

1. **Edit Excel file**: `/public/excel/cars.xlsx`
2. **Add new row** with required columns:
   - `brand` - Car manufacturer
   - `model` - Car model
   - `year` - Manufacturing year
   - `price` - Price in EUR
   - `mileage` - Kilometers driven
   - `fuel` - Fuel type
   - `transmission` - Transmission type
   - `category` - Car category (limousine, suv, sportwagen, kombi)
   - `image` - Image filename
   - `description` - Car description

3. **Save and refresh** using Admin Panel

### Car Categories
- `limousine` - Sedan cars
- `suv` - SUV vehicles
- `sportwagen` - Sports cars
- `kombi` - Station wagons

## 📊 Excel File Structure

### Translations File (`translations-template.csv`)
```csv
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
```

### Cars File (`cars.xlsx`)
| Column | Type | Description | Example |
|--------|------|-------------|---------|
| brand | String | Car manufacturer | BMW |
| model | String | Car model | X5 |
| year | Number | Manufacturing year | 2023 |
| price | String | Price with currency | 45.000 € |
| mileage | Number | Kilometers driven | 25000 |
| fuel | String | Fuel type | Benzin |
| transmission | String | Transmission type | Automatik |
| category | String | Car category | suv |
| image | String | Image filename | bmw-x5.jpg |
| description | String | Car description | Premium SUV... |

## 🧩 Component Documentation

### Header Component
**File**: `src/components/Header.tsx`

Responsive navigation header with:
- Logo and branding
- Navigation menu
- Language switcher
- Mobile menu

**Props**:
```tsx
interface HeaderProps {
  language: "de" | "fa";
  setLanguage: (lang: "de" | "fa") => void;
}
```

### Footer Component
**File**: `src/components/Footer.tsx`

Site footer with:
- Company information
- Contact details
- Service links
- Legal links
- Developer information

**Props**:
```tsx
interface FooterProps {
  language: string;
}
```

### AdminPanel Component
**File**: `src/components/AdminPanel.tsx`

Content management panel with:
- Excel file location info
- Data refresh functionality
- Error handling
- Usage instructions

**Props**:
```tsx
interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}
```

## 🔧 API Reference

### useLanguage Hook
**File**: `src/contexts/LanguageContext.tsx`

```tsx
const { language, setLanguage, t, translations, loading, error } = useLanguage();
```

**Returns**:
- `language`: Current language ('de' | 'fa')
- `setLanguage`: Function to change language
- `t`: Translation function
- `translations`: All translations object
- `loading`: Loading state
- `error`: Error state

### useExcelData Hook
**File**: `src/hooks/useExcelData.ts`

```tsx
const { translations, cars, loading, error, refreshData } = useExcelData();
```

**Returns**:
- `translations`: Translation data
- `cars`: Car data array
- `loading`: Loading state
- `error`: Error state
- `refreshData`: Function to refresh data

## 🚀 Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Variables
No environment variables required for basic functionality.

### Static Export (Optional)
```bash
npm run build
npm run export
```

## 🔍 Troubleshooting

### Common Issues

1. **Excel files not loading**
   - Check file paths in `/public/excel/`
   - Verify file formats (CSV for translations, XLSX for cars)
   - Use Admin Panel to refresh data

2. **Translations not showing**
   - Verify translation keys in Excel file
   - Check console for errors
   - Ensure proper key format (dot notation)

3. **Images not displaying**
   - Place images in `/public/images/cars/`
   - Update image filenames in Excel file
   - Check file extensions

4. **Language switching issues**
   - Clear browser cache
   - Check LanguageContext implementation
   - Verify translation data structure

### Debug Mode
Enable debug logging by checking browser console for:
- Translation loading logs
- Excel data loading logs
- Error messages

## 📞 Support

For technical support or questions:
- **Developer**: Amir Hossein Shrififard
- **Email**: amirhosseinshrififard@gmail.com
- **Phone**: +989172380487

---

*Last updated: December 2024*

