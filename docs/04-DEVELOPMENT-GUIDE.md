# 👨‍💻 Development Guide - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [Development Environment](#development-environment)
- [Understanding the Codebase](#understanding-the-codebase)
- [Component Development](#component-development)
- [State Management](#state-management)
- [Data Management](#data-management)
- [Styling Guidelines](#styling-guidelines)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Common Patterns](#common-patterns)
- [Best Practices](#best-practices)
- [Debugging](#debugging)
- [Performance Tips](#performance-tips)

## 🚀 Getting Started

### Prerequisites for Development

Before you start developing, make sure you have:

1. **Node.js 18+** installed
2. **Code Editor** (VS Code recommended)
3. **Git** for version control
4. **Basic understanding** of:
   - HTML/CSS/JavaScript
   - React basics
   - TypeScript basics

### Setting Up Development Environment

1. **Clone/Download** the project
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start development server**:
   ```bash
   npm run dev
   ```
4. **Open browser** to `http://localhost:3000`

## 🛠️ Development Environment

### Recommended VS Code Extensions

Install these extensions for better development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### Development Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run linting with auto-fix
npm run lint:fix

# Format code with Prettier
npm run format

# Type checking
npm run type-check
```

### Environment Variables

Create `.env.local` for development:

```env
# Development settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Strapi backend (optional)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_token_here
```

## 🧠 Understanding the Codebase

### Project Structure Explained

Think of the project like a **restaurant**:

- **`src/app/`** = Different floors/rooms (pages)
- **`src/components/`** = Reusable furniture (UI components)
- **`src/hooks/`** = Specialized workers (data management)
- **`src/contexts/`** = Company rules/policies (global state)
- **`public/`** = Public area (static files)
- **`public/excel/`** = Kitchen (content management)

### Key Concepts

#### 1. Next.js App Router

- **File-based routing**: Each folder in `app/` becomes a route
- **Layouts**: Shared UI between pages
- **Server Components**: Run on server for better performance
- **Client Components**: Run in browser for interactivity

#### 2. React Components

- **Functional Components**: Modern React with hooks
- **Props**: Data passed from parent to child
- **State**: Data that can change within component
- **Effects**: Side effects (API calls, subscriptions)

#### 3. TypeScript

- **Type Safety**: Catch errors before runtime
- **Interfaces**: Define object shapes
- **Types**: Define data types
- **IntelliSense**: Better IDE support

## 🧩 Component Development

### Creating a New Component

#### Step 1: Create Component File

```typescript
// src/components/MyComponent.tsx
'use client'; // Required for client-side interactivity

import React from 'react';

// Define the component's props interface
interface MyComponentProps {
  title: string;
  onAction: () => void;
  isVisible?: boolean; // Optional prop
}

// Create the component
const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onAction,
  isVisible = true
}) => {
  // Component logic here

  return (
    <div className="my-component">
      <h2>{title}</h2>
      {isVisible && (
        <button onClick={onAction}>
          Click me
        </button>
      )}
    </div>
  );
};

// Export the component
export default MyComponent;
```

#### Step 2: Use the Component

```typescript
// In a page or another component
import MyComponent from '@/components/MyComponent';

const HomePage = () => {
  const handleAction = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <MyComponent
        title="Welcome to Bahram Autohaus"
        onAction={handleAction}
        isVisible={true}
      />
    </div>
  );
};
```

### Component Best Practices

#### 1. Component Structure

```typescript
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // 1. State declarations
  const [state, setState] = useState(initialValue);

  // 2. Effect hooks
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // 3. Event handlers
  const handleClick = () => {
    // Handle click
  };

  // 4. Render
  return (
    <div>
      {/* JSX content */}
    </div>
  );
};
```

#### 2. Props Interface

```typescript
// Always define props interface
interface ComponentProps {
  // Required props
  title: string;
  onAction: () => void;

  // Optional props with default values
  isVisible?: boolean;
  className?: string;

  // Children (for wrapper components)
  children?: React.ReactNode;
}
```

#### 3. Conditional Rendering

```typescript
// Method 1: Logical AND
{isVisible && <div>Content</div>}

// Method 2: Ternary operator
{isLoading ? <Spinner /> : <Content />}

// Method 3: Early return
if (!isVisible) return null;
```

### Common Component Patterns

#### 1. Loading Component

```typescript
const LoadingComponent: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <span className="ml-2">Loading...</span>
    </div>
  );
};
```

#### 2. Error Component

```typescript
interface ErrorComponentProps {
  message: string;
  onRetry?: () => void;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
      <p className="text-red-800">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Try Again
        </button>
      )}
    </div>
  );
};
```

#### 3. Modal Component

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
```

## 🔄 State Management

### Local State (useState)

```typescript
import { useState } from 'react';

const Counter = () => {
  // State declaration
  const [count, setCount] = useState(0);

  // State update functions
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### Global State (Context)

#### Using the Language Context

```typescript
import { useLanguage } from '@/contexts/LanguageContext';

const MyComponent = () => {
  // Get language context
  const { language, setLanguage, t } = useLanguage();

  // Switch language
  const handleLanguageChange = () => {
    setLanguage(language === 'de' ? 'fa' : 'de');
  };

  // Get translated text
  const title = t('hero.title');

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleLanguageChange}>
        Switch to {language === 'de' ? 'Persian' : 'German'}
      </button>
    </div>
  );
};
```

### Custom Hooks

#### Creating a Custom Hook

```typescript
// src/hooks/useCounter.ts
import { useState, useCallback } from 'react';

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
};
```

#### Using Custom Hooks

```typescript
import { useCounter } from '@/hooks/useCounter';

const CounterComponent = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

## 📊 Data Management

### Excel Data Management

#### Using useExcelData Hook

```typescript
import { useExcelData } from '@/hooks/useExcelData';

const CarList = () => {
  const { cars, translations, loading, error, refreshData } = useExcelData();

  if (loading) return <div>Loading cars...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <button onClick={refreshData}>Refresh Data</button>
      {cars.map(car => (
        <div key={car.id}>
          <h3>{car.brand} {car.model}</h3>
          <p>Price: {car.price}</p>
        </div>
      ))}
    </div>
  );
};
```

#### Adding New Data

```typescript
// To add a new car, edit public/excel/cars.xlsx
// To add a new translation, edit public/excel/translations-template.csv

// Example: Adding a new translation
// In translations-template.csv, add:
// new.key,German Text,متن فارسی,category

// In your component:
const { t } = useLanguage();
return <h1>{t('new.key')}</h1>;
```

### API Data Management

#### Fetching Data from API

```typescript
import { useState, useEffect } from 'react';

interface Car {
  id: number;
  brand: string;
  model: string;
  price: string;
}

const CarList = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError('Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {cars.map(car => (
        <div key={car.id}>
          <h3>{car.brand} {car.model}</h3>
          <p>Price: {car.price}</p>
        </div>
      ))}
    </div>
  );
};
```

## 🎨 Styling Guidelines

### Tailwind CSS Usage

#### Basic Classes

```typescript
// Layout
<div className="flex items-center justify-center">
<div className="grid grid-cols-3 gap-4">
<div className="container mx-auto px-4">

// Spacing
<div className="p-4 m-2">        // padding: 1rem, margin: 0.5rem
<div className="px-6 py-3">      // padding: 1.5rem 0, padding: 0.75rem
<div className="space-y-4">      // margin-top: 1rem for children

// Colors
<div className="bg-blue-500 text-white">
<div className="text-gray-600 border-gray-300">
<div className="hover:bg-blue-600">  // Hover state

// Typography
<h1 className="text-2xl font-bold">
<p className="text-sm text-gray-500">
<span className="font-semibold">
```

#### Responsive Design

```typescript
// Mobile-first approach
<div className="text-sm md:text-base lg:text-lg">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
<div className="hidden md:block">  // Hidden on mobile, visible on medium+

// Breakpoints:
// sm: 640px+
// md: 768px+
// lg: 1024px+
// xl: 1280px+
// 2xl: 1536px+
```

#### Custom Styling

```typescript
// Using CSS modules or styled-components
import styles from './Component.module.css';

const Component = () => {
  return (
    <div className={`${styles.customClass} bg-blue-500`}>
      Content
    </div>
  );
};

// Or using inline styles for dynamic values
const Component = ({ color }) => {
  return (
    <div
      className="p-4 rounded"
      style={{ backgroundColor: color }}
    >
      Content
    </div>
  );
};
```

### Design System Usage

#### Glassmorphism Effect

```typescript
const GlassCard = () => {
  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg p-6">
      <h3 className="text-white font-bold">Glass Card</h3>
      <p className="text-white text-opacity-80">Content with glass effect</p>
    </div>
  );
};
```

#### Gradient Backgrounds

```typescript
const GradientButton = () => {
  return (
    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
      Gradient Button
    </button>
  );
};
```

## 🧪 Testing

### Component Testing

#### Basic Component Test

```typescript
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders with title', () => {
    render(<MyComponent title="Test Title" onAction={() => {}} />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onAction when button is clicked', () => {
    const mockAction = jest.fn();
    render(<MyComponent title="Test" onAction={mockAction} />);

    fireEvent.click(screen.getByText('Click me'));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Hooks

```typescript
// useCounter.test.ts
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
```

## 📏 Code Quality

### ESLint Rules

The project uses ESLint for code quality. Common rules:

```typescript
// ✅ Good
const MyComponent = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

// ❌ Bad
const MyComponent = ({ title }) => {  // Missing type annotation
  return <h1>{title}</h1>;
};
```

### TypeScript Best Practices

#### Interface Definitions

```typescript
// ✅ Good - Descriptive interface names
interface CarData {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: string;
}

// ✅ Good - Generic types
interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

// ❌ Bad - Vague names
interface Data {
  // ...
}
```

#### Function Signatures

```typescript
// ✅ Good - Explicit return types
const calculatePrice = (basePrice: number, discount: number): number => {
  return basePrice * (1 - discount);
};

// ✅ Good - Proper parameter types
const handleCarSelect = (car: CarData): void => {
  setSelectedCar(car);
};
```

### Code Organization

#### File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── types/            # TypeScript type definitions
└── constants/        # Application constants
```

#### Import Organization

```typescript
// 1. React imports
import React, { useState, useEffect } from 'react';

// 2. Third-party imports
import { Car, Search } from 'lucide-react';
import Image from 'next/image';

// 3. Internal imports (absolute paths)
import { useLanguage } from '@/contexts/LanguageContext';
import { CarData } from '@/types/car';

// 4. Relative imports
import './Component.css';
```

## 🔧 Common Patterns

### Form Handling

```typescript
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};
```

### Modal Management

```typescript
const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};

const MyComponent = () => {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} title="My Modal">
        <p>Modal content</p>
      </Modal>
    </div>
  );
};
```

### Loading States

```typescript
const useAsyncData = <T>(fetchFn: () => Promise<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchFn();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchFn]);

  return { data, loading, error };
};
```

## 🎯 Best Practices

### Performance

#### Memoization

```typescript
import { useMemo, useCallback } from 'react';

const ExpensiveComponent = ({ items, filter }) => {
  // Memoize expensive calculations
  const filteredItems = useMemo(() => {
    return items.filter(item => item.category === filter);
  }, [items, filter]);

  // Memoize event handlers
  const handleItemClick = useCallback((item) => {
    console.log('Item clicked:', item);
  }, []);

  return (
    <div>
      {filteredItems.map(item => (
        <div key={item.id} onClick={() => handleItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
```

#### Lazy Loading

```typescript
import { lazy, Suspense } from 'react';

// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
};
```

### Error Handling

```typescript
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div>Something went wrong. Please refresh the page.</div>;
  }

  return <>{children}</>;
};
```

### Accessibility

```typescript
const AccessibleButton = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      aria-label="Click to perform action"
      role="button"
    >
      {children}
    </button>
  );
};
```

## 🐛 Debugging

### Browser DevTools

#### React DevTools

1. Install React Developer Tools browser extension
2. Open DevTools (F12)
3. Look for "Components" tab
4. Inspect component state and props

#### Console Debugging

```typescript
const MyComponent = ({ data }) => {
  // Debug data
  console.log('Component data:', data);

  // Debug with labels
  console.group('Component Debug');
  console.log('Props:', { data });
  console.log('State:', state);
  console.groupEnd();

  return <div>Content</div>;
};
```

### Common Debugging Techniques

#### 1. Check Props

```typescript
const MyComponent = (props) => {
  console.log('Props received:', props);
  return <div>Content</div>;
};
```

#### 2. Check State

```typescript
const MyComponent = () => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    console.log('State changed:', state);
  }, [state]);

  return <div>Content</div>;
};
```

#### 3. Check API Calls

```typescript
const fetchData = async () => {
  try {
    console.log('Fetching data...');
    const response = await fetch('/api/data');
    console.log('Response status:', response.status);
    const data = await response.json();
    console.log('Data received:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
```

## ⚡ Performance Tips

### Image Optimization

```typescript
import Image from 'next/image';

const OptimizedImage = ({ src, alt, width, height }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={false} // Enable lazy loading
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
};
```

### Bundle Optimization

```typescript
// Import only what you need
import { useState } from 'react'; // ✅ Good
import * as React from 'react';   // ❌ Bad

// Use dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

### State Optimization

```typescript
// Batch state updates
const handleMultipleUpdates = () => {
  setState1(value1);
  setState2(value2);
  setState3(value3);
  // React will batch these updates
};

// Use functional updates for state that depends on previous state
const increment = () => {
  setCount((prev) => prev + 1); // ✅ Good
  // setCount(count + 1);     // ❌ Bad (can cause stale closures)
};
```

---

**Last Updated**: December 2024  
**Version**: 1.0.0
