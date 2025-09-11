# 🛠️ Technology Stack - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Overview](#overview)
- [Core Technologies](#core-technologies)
- [Frontend Framework](#frontend-framework)
- [Styling and UI](#styling-and-ui)
- [State Management](#state-management)
- [Data Management](#data-management)
- [Development Tools](#development-tools)
- [Build and Deployment](#build-and-deployment)
- [Performance and Optimization](#performance-and-optimization)
- [Testing](#testing)
- [Browser Support](#browser-support)

## 🎯 Overview

The Bahram Autohaus frontend is built using modern web technologies to create a fast, responsive, and maintainable application. The technology stack is carefully chosen to provide the best developer experience and user experience.

### Technology Philosophy

- **Modern Standards**: Use latest stable versions of technologies
- **Performance First**: Optimize for speed and user experience
- **Developer Experience**: Tools that enhance productivity
- **Maintainability**: Code that's easy to understand and modify
- **Scalability**: Architecture that can grow with the business

## 🚀 Core Technologies

### Node.js

**Version**: 18.0+ (LTS)

**Purpose**: JavaScript runtime for development and build tools

**Why Node.js**:

- Unified language for frontend and backend
- Large ecosystem of packages
- Excellent tooling support
- Fast development workflow

**Usage**:

- Package management (npm)
- Development server
- Build tools and bundlers
- Script execution

### TypeScript

**Version**: 5.0+

**Purpose**: Static type checking for JavaScript

**Why TypeScript**:

- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code
- Easier refactoring

**Configuration**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## ⚛️ Frontend Framework

### Next.js

**Version**: 14.0+

**Purpose**: React framework for production

**Why Next.js**:

- Server-side rendering (SSR)
- Static site generation (SSG)
- Automatic code splitting
- Built-in optimization
- File-based routing
- API routes

**Key Features**:

- **App Router**: New routing system with layouts
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Automatic font loading
- **Bundle Analysis**: Built-in bundle analyzer
- **Performance Monitoring**: Core Web Vitals tracking

**Configuration**:

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'your-domain.com'],
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
```

### React

**Version**: 18.0+

**Purpose**: UI library for building user interfaces

**Why React**:

- Component-based architecture
- Virtual DOM for performance
- Large ecosystem
- Strong community support
- Excellent developer tools

**Key Features**:

- **Hooks**: Functional components with state
- **Context API**: Global state management
- **Suspense**: Loading states and error boundaries
- **Concurrent Features**: Time slicing and priority updates

**Usage Patterns**:

```typescript
// Functional components with hooks
import { useState, useEffect, useContext } from 'react';

const MyComponent = () => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    // Side effects
  }, [dependencies]);

  return <div>Component content</div>;
};
```

## 🎨 Styling and UI

### Tailwind CSS

**Version**: 3.0+

**Purpose**: Utility-first CSS framework

**Why Tailwind CSS**:

- Rapid UI development
- Consistent design system
- Responsive design utilities
- Customizable and extensible
- Small bundle size

**Configuration**:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
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
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
```

### CSS Modules

**Purpose**: Scoped CSS for components

**Usage**:

```css
/* Component.module.css */
.container {
  @apply max-w-7xl mx-auto px-4;
}

.title {
  @apply text-3xl font-bold text-gray-900;
}

.button {
  @apply px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
}
```

### PostCSS

**Purpose**: CSS processing and transformation

**Configuration**:

```javascript
// postcss.config.mjs
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

## 🔄 State Management

### React Context API

**Purpose**: Global state management

**Why Context API**:

- Built into React
- No additional dependencies
- Simple for small to medium apps
- Good for theme and language state

**Implementation**:

```typescript
// LanguageContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: 'de' | 'fa';
  setLanguage: (language: 'de' | 'fa') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState<'de' | 'fa'>('de');
  const [translations, setTranslations] = useState({});

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
```

### Custom Hooks

**Purpose**: Reusable stateful logic

**Examples**:

```typescript
// useCarData.ts
import { useState, useEffect } from 'react';

export const useCarData = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
};
```

## 📊 Data Management

### Excel File Processing

**Purpose**: Content management through Excel files

**Libraries**:

- **xlsx**: Excel file reading and writing
- **csv-parser**: CSV file processing

**Implementation**:

```typescript
// excelReader.ts
import * as XLSX from 'xlsx';

export const readExcelFile = async (filePath: string) => {
  try {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    throw error;
  }
};
```

### API Integration

**Purpose**: Communication with backend services

**Libraries**:

- **fetch**: Built-in HTTP client
- **axios**: Alternative HTTP client (optional)

**Implementation**:

```typescript
// api.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';

export const api = {
  get: async (endpoint: string) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },

  post: async (endpoint: string, data: any) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};
```

## 🛠️ Development Tools

### ESLint

**Version**: 8.0+

**Purpose**: Code linting and style checking

**Configuration**:

```javascript
// eslint.config.mjs
export default [
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
```

### Prettier

**Version**: 3.0+

**Purpose**: Code formatting

**Configuration**:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### TypeScript

**Version**: 5.0+

**Purpose**: Static type checking

**Configuration**:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["dom", "dom.iterable", "ES6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### VS Code Extensions

**Recommended Extensions**:

- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- TypeScript Importer
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense
- Bracket Pair Colorizer

## 🏗️ Build and Deployment

### Webpack

**Version**: 5.0+ (via Next.js)

**Purpose**: Module bundler

**Features**:

- Code splitting
- Tree shaking
- Hot module replacement
- Asset optimization

### SWC

**Purpose**: Fast TypeScript/JavaScript compiler

**Why SWC**:

- 20x faster than Babel
- Built-in minification
- TypeScript support
- Next.js integration

### Package Managers

#### npm

**Version**: 9.0+

**Purpose**: Primary package manager

**Usage**:

```bash
npm install
npm run dev
npm run build
npm run start
```

#### Yarn (Alternative)

**Version**: 3.0+

**Purpose**: Alternative package manager

**Usage**:

```bash
yarn install
yarn dev
yarn build
yarn start
```

#### Bun (Alternative)

**Version**: 1.0+

**Purpose**: Fast package manager

**Usage**:

```bash
bun install
bun run dev
bun run build
bun run start
```

## ⚡ Performance and Optimization

### Image Optimization

**Next.js Image Component**:

```typescript
import Image from 'next/image';

const OptimizedImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={false}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};
```

### Code Splitting

**Dynamic Imports**:

```typescript
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### Bundle Analysis

**Bundle Analyzer**:

```bash
npm run analyze
```

### Performance Monitoring

**Web Vitals**:

```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 🧪 Testing

### Testing Framework

**Jest**: JavaScript testing framework
**React Testing Library**: React component testing
**Cypress**: End-to-end testing (optional)

**Configuration**:

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

**Test Examples**:

```typescript
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent title="Test" />);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<MyComponent onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## 🌐 Browser Support

### Supported Browsers

| Browser       | Version | Support Level |
| ------------- | ------- | ------------- |
| Chrome        | 90+     | Full          |
| Firefox       | 88+     | Full          |
| Safari        | 14+     | Full          |
| Edge          | 90+     | Full          |
| iOS Safari    | 14+     | Full          |
| Chrome Mobile | 90+     | Full          |

### Polyfills

**Core-js**: JavaScript polyfills
**Regenerator-runtime**: Async/await polyfill

**Usage**:

```typescript
// _app.tsx
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

### Progressive Enhancement

**Feature Detection**:

```typescript
// Check for modern features
if (!window.fetch) {
  // Use polyfill or alternative
}

if (!window.IntersectionObserver) {
  // Use polyfill or alternative
}
```

## 📦 Dependencies

### Production Dependencies

```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "18.0.0",
    "react-dom": "18.0.0",
    "typescript": "5.0.0",
    "@types/node": "20.0.0",
    "@types/react": "18.0.0",
    "@types/react-dom": "18.0.0"
  }
}
```

### Development Dependencies

```json
{
  "devDependencies": {
    "eslint": "8.0.0",
    "eslint-config-next": "14.0.0",
    "prettier": "3.0.0",
    "tailwindcss": "3.0.0",
    "postcss": "8.0.0",
    "autoprefixer": "10.0.0",
    "@testing-library/react": "13.0.0",
    "@testing-library/jest-dom": "5.0.0",
    "jest": "29.0.0",
    "jest-environment-jsdom": "29.0.0"
  }
}
```

## 🔧 Configuration Files

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:watch": "jest --watch",
    "analyze": "ANALYZE=true next build"
  }
}
```

### Environment Variables

```env
# .env.local
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_token_here
```

---

**Last Updated**: December 2024  
**Version**: 1.0.0
