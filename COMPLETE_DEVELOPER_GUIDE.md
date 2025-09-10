# Bahram Autohaus - Complete Developer Guide

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Design Patterns](#architecture--design-patterns)
3. [File Structure Deep Dive](#file-structure-deep-dive)
4. [Component Architecture](#component-architecture)
5. [Data Flow & State Management](#data-flow--state-management)
6. [Excel Integration System](#excel-integration-system)
7. [Internationalization (i18n)](#internationalization-i18n)
8. [Styling & UI Framework](#styling--ui-framework)
9. [Performance Optimizations](#performance-optimizations)
10. [Testing Strategy](#testing-strategy)
11. [Deployment & DevOps](#deployment--devops)
12. [Troubleshooting Guide](#troubleshooting-guide)
13. [Code Standards & Best Practices](#code-standards--best-practices)

## 🚗 Project Overview

### What is Bahram Autohaus?

Bahram Autohaus is a modern, bilingual car dealership website built with Next.js 14. It serves as a digital showroom for premium vehicles, featuring dynamic content management through Excel files and comprehensive multilingual support.

### Key Business Requirements

- **Bilingual Support**: German (primary) and Persian (secondary) markets
- **Content Management**: Non-technical staff can update content via Excel
- **Car Showcase**: Dynamic vehicle listings with search and filtering
- **Responsive Design**: Mobile-first approach for all devices
- **Performance**: Fast loading times and smooth user experience

### Technology Stack

```typescript
// Core Framework
Next.js 14 (App Router) + TypeScript

// Styling & UI
Tailwind CSS + Lucide React Icons

// Data Management
Excel/CSV Files + Custom Hooks + React Context

// Development Tools
ESLint + Prettier + TypeScript
```

## 🏗 Architecture & Design Patterns

### Overall Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Header    │ │    Pages    │ │   Footer    │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                     │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │   Hooks     │ │  Contexts   │ │   Utils     │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────┐
│                      Data Layer                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │
│  │ Excel Files │ │   Images    │ │  Static     │          │
│  └─────────────┘ └─────────────┘ └─────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

### Design Patterns Used

#### 1. Context Pattern (Language Management)

```typescript
// Centralized language state management
const LanguageContext = createContext<LanguageContextType>();

// Usage throughout the app
const { language, setLanguage, t } = useLanguage();
```

#### 2. Custom Hooks Pattern (Data Management)

```typescript
// Encapsulates Excel data logic
const useExcelData = () => {
  // Data fetching, caching, and error handling
  return { cars, translations, loading, error, refreshData };
};
```

#### 3. Component Composition Pattern

```typescript
// Reusable, composable components
<Header language={language} setLanguage={setLanguage} />
<MainContent />
<Footer language={language} />
```

#### 4. Provider Pattern (Dependency Injection)

```typescript
// Wraps the entire app with language context
<LanguageProvider>
  <App />
</LanguageProvider>
```

## 📁 File Structure Deep Dive

### Root Directory Structure

```
bahram-auto/
├── public/                     # Static assets (served directly)
│   ├── excel/                 # Content management files
│   │   ├── translations-template.csv  # i18n data
│   │   ├── cars.xlsx          # Vehicle inventory
│   │   └── README.md          # Excel file documentation
│   ├── images/                # Image assets
│   │   └── cars/              # Vehicle photos
│   ├── lotties/               # Animation files
│   ├── manifest.webmanifest   # PWA configuration
│   └── sw.js                  # Service worker
├── src/                       # Source code
│   ├── app/                   # Next.js App Router pages
│   ├── components/            # Reusable UI components
│   ├── contexts/              # React contexts
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   └── constants/             # Application constants
├── package.json               # Dependencies and scripts
├── tailwind.config.ts         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
└── eslint.config.mjs          # ESLint configuration
```

### App Router Structure (Next.js 14)

```
src/app/
├── layout.tsx                 # Root layout (wraps all pages)
├── page.tsx                   # Home page (/)
├── globals.css                # Global styles
├── not-found.tsx              # 404 page
├── about-us/
│   └── page.tsx               # About page (/about-us)
├── contact-us/
│   └── page.tsx               # Contact page (/contact-us)
├── gallery/
│   └── page.tsx               # Gallery page (/gallery)
└── service/
    └── page.tsx               # Services page (/service)
```

## 🧩 Component Architecture

### Component Hierarchy

```
App (layout.tsx)
├── LanguageProvider
│   └── Page Components
│       ├── Header
│       │   ├── Logo
│       │   ├── Navigation
│       │   └── LanguageSwitcher
│       ├── Main Content
│       │   ├── Hero Section
│       │   ├── Car Showcase
│       │   ├── Search & Filters
│       │   └── Modal Components
│       └── Footer
│           ├── Company Info
│           ├── Contact Details
│           └── Legal Links
```

### Component Responsibilities

#### Header Component

```typescript
/**
 * Responsibilities:
 * - Navigation between pages
 * - Language switching
 * - Mobile menu management
 * - Active page highlighting
 */
interface HeaderProps {
  language: 'de' | 'fa';
  setLanguage: (lang: 'de' | 'fa') => void;
}
```

#### Footer Component

```typescript
/**
 * Responsibilities:
 * - Company information display
 * - Contact details
 * - Legal links
 * - Developer attribution
 */
interface FooterProps {
  language: string;
}
```

#### AdminPanel Component

```typescript
/**
 * Responsibilities:
 * - Content management interface
 * - Data refresh functionality
 * - Error handling and display
 * - User guidance
 */
interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}
```

## 🔄 Data Flow & State Management

### Data Flow Architecture

```
Excel Files → ExcelReader → useExcelData Hook → Components → UI
     ↓              ↓              ↓              ↓         ↓
  Raw Data    →  Processed   →  React State  →  Props   →  Render
```

### State Management Strategy

#### 1. Global State (Context)

```typescript
// Language state - shared across all components
const LanguageContext = createContext<{
  language: 'de' | 'fa';
  setLanguage: (lang: 'de' | 'fa') => void;
  t: (key: string) => string;
  translations: { de: any; fa: any };
  loading: boolean;
  error: string | null;
}>();
```

#### 2. Component State (useState)

```typescript
// Local component state
const [selectedFilter, setSelectedFilter] = useState('alle');
const [searchTerm, setSearchTerm] = useState('');
const [selectedCar, setSelectedCar] = useState<any | null>(null);
```

#### 3. Data State (Custom Hooks)

```typescript
// Excel data state management
const { cars, translations, loading, error, refreshData } = useExcelData();
```

### State Update Patterns

#### Language Switching

```typescript
// 1. User clicks language button
// 2. setLanguage is called
// 3. Context updates
// 4. All components re-render with new language
const handleLanguageChange = (newLang: 'de' | 'fa') => {
  setLanguage(newLang);
  // All components using useLanguage() will re-render
};
```

#### Data Refresh

```typescript
// 1. User updates Excel file
// 2. Clicks "Refresh Data" in Admin Panel
// 3. refreshData() is called
// 4. Excel files are re-read
// 5. State is updated
// 6. UI reflects new data
const handleRefresh = async () => {
  await refreshData();
  // All components using useExcelData() will re-render
};
```

## 📊 Excel Integration System

### Excel File Structure

#### Translations File (CSV Format)

```csv
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
services.financing.title,Finanzierung,تامین مالی,services
```

#### Cars File (Excel Format)

| Column       | Type   | Description         | Example        |
| ------------ | ------ | ------------------- | -------------- |
| brand        | String | Manufacturer        | BMW            |
| model        | String | Model name          | X5             |
| year         | Number | Manufacturing year  | 2023           |
| price        | String | Price with currency | 45.000 €       |
| mileage      | Number | Kilometers driven   | 25000          |
| fuel         | String | Fuel type           | Benzin         |
| transmission | String | Transmission type   | Automatik      |
| category     | String | Vehicle category    | suv            |
| image        | String | Image filename      | bmw-x5.jpg     |
| description  | String | Vehicle description | Premium SUV... |

### Excel Reading Process

#### 1. File Loading

```typescript
// Fetch CSV file for translations
const response = await fetch('/excel/translations-template.csv');
const text = await response.text();

// Parse CSV with UTF-8 support
const lines = text.split('\n').filter((line) => line.trim());
```

#### 2. Data Processing

```typescript
// Convert CSV to structured data
const translationData = lines.map((line) => {
  const [key, de, fa, category] = parseCSVLine(line);
  return { key, de, fa, category };
});
```

#### 3. Object Conversion

```typescript
// Convert flat array to nested object structure
const convertTranslationsToObject = (data: TranslationData[]) => {
  const result = { de: {}, fa: {} };

  data.forEach((item) => {
    // Create nested structure from dot notation keys
    setNestedValue(result.de, item.key, item.de);
    setNestedValue(result.fa, item.key, item.fa);
  });

  return result;
};
```

### Error Handling

```typescript
try {
  // Load and process Excel data
  const data = await loadExcelData();
  setTranslations(data);
} catch (error) {
  console.error('Excel loading error:', error);
  setError('Failed to load content data from Excel files');
  // Fallback to empty data
  setTranslations({ de: {}, fa: {} });
}
```

## 🌐 Internationalization (i18n)

### Translation System Architecture

#### 1. Translation Key Structure

```typescript
// Dot notation for nested keys
const translationKeys = {
  'nav.home': 'Startseite',
  'nav.gallery': 'Fahrzeuge',
  'footer.company.name': 'Bahram Autohaus',
  'services.financing.title': 'Finanzierung',
  'services.financing.feature1': 'Ab 0% Zinsen möglich',
};
```

#### 2. Translation Function

```typescript
const t = (key: string): string => {
  try {
    // Split key by dots to navigate nested objects
    const keys = key.split('.');
    let value: any = translations[language];

    // Navigate through nested structure
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to other language
        return getFallbackTranslation(key);
      }
    }

    return value || key;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
};
```

#### 3. Language Switching

```typescript
// Language state management
const [language, setLanguage] = useState<'de' | 'fa'>('de');

// Language switching handler
const handleLanguageChange = (newLang: 'de' | 'fa') => {
  setLanguage(newLang);
  // Persist language preference
  localStorage.setItem('preferred-language', newLang);
};
```

### RTL Support (Persian)

```css
/* Dynamic direction based on language */
[dir='rtl'] {
  text-align: right;
}

[dir='ltr'] {
  text-align: left;
}
```

```typescript
// Apply direction in components
<div dir={language === 'fa' ? 'rtl' : 'ltr'}>
  {t('content.text')}
</div>
```

## 🎨 Styling & UI Framework

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
};
```

### Design System

#### Color Palette

```css
/* Primary Colors */
--blue-50: #eff6ff;
--blue-500: #3b82f6;
--blue-600: #2563eb;
--blue-900: #1e3a8a;

/* Neutral Colors */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;

/* Accent Colors */
--purple-500: #8b5cf6;
--green-500: #10b981;
--red-500: #ef4444;
```

#### Typography Scale

```css
/* Font Sizes */
text-xs: 0.75rem; /* 12px */
text-sm: 0.875rem; /* 14px */
text-base: 1rem; /* 16px */
text-lg: 1.125rem; /* 18px */
text-xl: 1.25rem; /* 20px */
text-2xl: 1.5rem; /* 24px */
text-3xl: 1.875rem; /* 30px */
text-4xl: 2.25rem; /* 36px */
text-5xl: 3rem; /* 48px */
```

#### Spacing System

```css
/* Spacing Scale */
space-1: 0.25rem; /* 4px */
space-2: 0.5rem; /* 8px */
space-3: 0.75rem; /* 12px */
space-4: 1rem; /* 16px */
space-6: 1.5rem; /* 24px */
space-8: 2rem; /* 32px */
space-12: 3rem; /* 48px */
space-16: 4rem; /* 64px */
```

### Component Styling Patterns

#### Glassmorphism Effect

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

#### Gradient Backgrounds

```css
.gradient-bg {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

#### Hover Effects

```css
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}
```

## ⚡ Performance Optimizations

### Next.js Optimizations

#### 1. Image Optimization

```typescript
// Using Next.js Image component
import Image from 'next/image';

<Image
  src="/images/cars/bmw-x5.jpg"
  alt="BMW X5"
  width={400}
  height={300}
  priority={false} // Lazy loading
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

#### 2. Code Splitting

```typescript
// Dynamic imports for heavy components
const AdminPanel = dynamic(() => import('@/components/AdminPanel'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

#### 3. Static Generation

```typescript
// Generate static pages at build time
export async function generateStaticParams() {
  return [
    { slug: 'about-us' },
    { slug: 'contact-us' },
    { slug: 'gallery' },
    { slug: 'service' },
  ];
}
```

### React Optimizations

#### 1. Memoization

```typescript
// Memoize expensive calculations
const filteredCars = useMemo(() => {
  return cars.filter(
    (car) =>
      car.category === selectedFilter &&
      car.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [cars, selectedFilter, searchTerm]);
```

#### 2. Callback Optimization

```typescript
// Memoize event handlers
const handleCarSelect = useCallback((car: CarData) => {
  setSelectedCar(car);
  setIsModalOpen(true);
}, []);
```

#### 3. State Optimization

```typescript
// Batch state updates
const handleFormSubmit = useCallback(() => {
  // Batch multiple state updates
  setLoading(true);
  setError(null);
  setSuccess(false);

  // Process form...
}, []);
```

### Bundle Optimization

#### 1. Tree Shaking

```typescript
// Import only what you need
import { useState, useEffect } from 'react';
import { Car, Search } from 'lucide-react';
```

#### 2. Dynamic Imports

```typescript
// Load components on demand
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

## 🧪 Testing Strategy

### Testing Pyramid

```
    ┌─────────────────┐
    │   E2E Tests     │ ← Full user journeys
    └─────────────────┘
  ┌─────────────────────┐
  │  Integration Tests  │ ← Component interactions
  └─────────────────────┘
┌─────────────────────────┐
│     Unit Tests         │ ← Individual functions
└─────────────────────────┘
```

### Unit Testing

```typescript
// Example unit test for translation function
describe('Translation Function', () => {
  it('should return correct translation for valid key', () => {
    const translations = {
      de: { nav: { home: 'Startseite' } },
      fa: { nav: { home: 'صفحه اصلی' } },
    };

    const result = t('nav.home', translations, 'de');
    expect(result).toBe('Startseite');
  });

  it('should return key if translation not found', () => {
    const result = t('nonexistent.key', {}, 'de');
    expect(result).toBe('nonexistent.key');
  });
});
```

### Integration Testing

```typescript
// Example integration test for car filtering
describe('Car Filtering', () => {
  it('should filter cars by category', () => {
    const cars = [
      { id: 1, brand: 'BMW', category: 'suv' },
      { id: 2, brand: 'Audi', category: 'limousine' },
    ];

    const filtered = filterCarsByCategory(cars, 'suv');
    expect(filtered).toHaveLength(1);
    expect(filtered[0].brand).toBe('BMW');
  });
});
```

### E2E Testing

```typescript
// Example E2E test for language switching
describe('Language Switching', () => {
  it('should switch language and update content', () => {
    cy.visit('/');
    cy.get('[data-testid="language-de"]').should('be.visible');
    cy.get('[data-testid="language-fa"]').click();
    cy.get('h1').should('contain', 'بهرام اتوهاوس');
  });
});
```

## 🚀 Deployment & DevOps

### Build Process

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Static export (if needed)
npm run export
```

### Environment Configuration

```typescript
// next.config.ts
const nextConfig = {
  output: 'standalone', // For Docker deployment
  images: {
    domains: ['example.com'], // External image domains
    formats: ['image/webp', 'image/avif'], // Modern formats
  },
  experimental: {
    optimizeCss: true, // CSS optimization
  },
};
```

### Docker Configuration

```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Build the application
FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["node", "server.js"]
```

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🔍 Troubleshooting Guide

### Common Issues & Solutions

#### 1. Excel Files Not Loading

**Symptoms:**

- Empty car list
- Missing translations
- Console errors about file loading

**Solutions:**

```typescript
// Check file paths
const filePath = '/excel/translations-template.csv';
const response = await fetch(filePath);

if (!response.ok) {
  console.error('File not found:', filePath);
  // Check if file exists in public/excel/
}
```

#### 2. Translation Keys Not Working

**Symptoms:**

- Raw keys displayed instead of translations
- Missing text in UI

**Solutions:**

```typescript
// Debug translation function
const t = (key: string) => {
  console.log('Looking for key:', key);
  console.log('Available translations:', translations);
  // ... rest of function
};
```

#### 3. Images Not Displaying

**Symptoms:**

- Broken image icons
- 404 errors for images

**Solutions:**

```typescript
// Check image paths
const imagePath = `/images/cars/${car.image}`;
// Ensure file exists in public/images/cars/
// Check file extensions and naming
```

#### 4. Performance Issues

**Symptoms:**

- Slow loading times
- Laggy interactions

**Solutions:**

```typescript
// Optimize images
<Image
  src={imagePath}
  alt={car.brand}
  width={400}
  height={300}
  priority={false} // Enable lazy loading
/>

// Memoize expensive operations
const filteredCars = useMemo(() => {
  return cars.filter(/* filter logic */);
}, [cars, filter]);
```

### Debug Tools

#### 1. Browser DevTools

```typescript
// Add debug logging
console.log('Current language:', language);
console.log('Available cars:', cars);
console.log('Translations:', translations);
```

#### 2. React DevTools

- Install React Developer Tools browser extension
- Inspect component state and props
- Monitor re-renders and performance

#### 3. Network Tab

- Monitor Excel file loading
- Check for 404 errors
- Analyze loading times

## 📏 Code Standards & Best Practices

### TypeScript Standards

#### 1. Interface Definitions

```typescript
// Use descriptive interface names
interface CarData {
  id: number;
  brand: string;
  model: string;
  // ... other properties
}

// Use generic types when appropriate
interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}
```

#### 2. Function Signatures

```typescript
// Use explicit return types
const calculatePrice = (basePrice: number, discount: number): number => {
  return basePrice * (1 - discount);
};

// Use proper parameter types
const handleCarSelect = (car: CarData): void => {
  setSelectedCar(car);
};
```

### React Best Practices

#### 1. Component Structure

```typescript
// 1. Imports
import React from 'react';
import { useState } from 'react';

// 2. Interfaces
interface ComponentProps {
  title: string;
  onAction: () => void;
}

// 3. Component
const Component: React.FC<ComponentProps> = ({ title, onAction }) => {
  // 4. State
  const [isOpen, setIsOpen] = useState(false);

  // 5. Effects
  useEffect(() => {
    // Side effects
  }, []);

  // 6. Handlers
  const handleClick = () => {
    setIsOpen(true);
    onAction();
  };

  // 7. Render
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Action</button>
    </div>
  );
};

// 8. Export
export default Component;
```

#### 2. Hook Usage

```typescript
// Custom hooks for reusable logic
const useCarFilter = (cars: CarData[], filter: string) => {
  return useMemo(() => {
    return cars.filter((car) => car.category === filter);
  }, [cars, filter]);
};

// Use in component
const filteredCars = useCarFilter(cars, selectedFilter);
```

### File Organization

#### 1. Naming Conventions

```
// Components: PascalCase
Header.tsx
CarCard.tsx
AdminPanel.tsx

// Hooks: camelCase with 'use' prefix
useExcelData.ts
useLanguage.ts
useCarFilter.ts

// Utils: camelCase
excelReader.ts
dateFormatter.ts
validationUtils.ts
```

#### 2. Import Organization

```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party imports
import { Car, Search } from 'lucide-react';
import Image from 'next/image';

// 3. Internal imports (absolute paths)
import { useLanguage } from '@/contexts/LanguageContext';
import { AdminPanel } from '@/components/AdminPanel';

// 4. Relative imports
import './Component.css';
```

### Error Handling

#### 1. Try-Catch Blocks

```typescript
const loadData = async () => {
  try {
    setLoading(true);
    const data = await fetchData();
    setData(data);
  } catch (error) {
    console.error('Error loading data:', error);
    setError('Failed to load data');
  } finally {
    setLoading(false);
  }
};
```

#### 2. Error Boundaries

```typescript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```

---

## 📞 Support & Contact

**Developer:** Amir Hossein Shrififard  
**Email:** amirhosseinshrififard@gmail.com  
**Phone:** +989172380487

**Last Updated:** December 2024  
**Version:** 1.0.0

---

_This guide provides comprehensive documentation for the Bahram Autohaus project. It covers everything from basic setup to advanced deployment strategies, ensuring that developers of all skill levels can understand, maintain, and extend the application._







