# 🧩 Component Guide - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Component Overview](#component-overview)
- [Layout Components](#layout-components)
- [Page Components](#page-components)
- [Feature Components](#feature-components)
- [UI Components](#ui-components)
- [Component Patterns](#component-patterns)
- [Styling Guidelines](#styling-guidelines)
- [Best Practices](#best-practices)

## 🏗️ Component Overview

The Bahram Autohaus frontend is built using a component-based architecture with React and Next.js. Components are organized by functionality and reusability.

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

### Component Types

1. **Layout Components**: Structure and navigation
2. **Page Components**: Full page layouts
3. **Feature Components**: Specific functionality
4. **UI Components**: Reusable interface elements

## 🏠 Layout Components

### Header Component

**Location**: `src/components/layout/Header.tsx`

**Purpose**: Main navigation and branding

**Props**:

```typescript
interface HeaderProps {
  language: 'de' | 'fa';
  setLanguage: (language: 'de' | 'fa') => void;
}
```

**Features**:

- Responsive navigation menu
- Language switcher
- Logo display
- Mobile hamburger menu

**Usage**:

```typescript
import Header from '@/components/layout/Header';

const Page = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      {/* Page content */}
    </div>
  );
};
```

### Footer Component

**Location**: `src/components/layout/Footer.tsx`

**Purpose**: Site footer with company information

**Props**:

```typescript
interface FooterProps {
  language: 'de' | 'fa';
}
```

**Features**:

- Company information
- Contact details
- Social media links
- Legal information

**Usage**:

```typescript
import Footer from '@/components/layout/Footer';

const Page = () => {
  const { language } = useLanguage();

  return (
    <div>
      {/* Page content */}
      <Footer language={language} />
    </div>
  );
};
```

## 📄 Page Components

### Home Page

**Location**: `src/app/page.tsx`

**Purpose**: Main landing page

**Features**:

- Hero section
- Car showcase
- Company highlights
- Call-to-action sections

**Structure**:

```typescript
export default function HomePage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection />
        <CarShowcaseSection />
        <CompanyHighlightsSection />
        <CTASection />
      </main>
      <Footer language={language} />
    </div>
  );
}
```

### Gallery Page

**Location**: `src/app/gallery/page.tsx`

**Purpose**: Car showcase and filtering

**Features**:

- Car grid display
- Search and filters
- Car detail modals
- Pagination

**Structure**:

```typescript
export default function GalleryPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <GalleryHeroSection />
        <SearchFilterSection />
        <CarGridSection />
      </main>
      <Footer language={language} />
    </div>
  );
}
```

### About Us Page

**Location**: `src/app/about-us/page.tsx`

**Purpose**: Company information and team

**Features**:

- Company story
- Team members
- Values and mission
- Milestones

**Structure**:

```typescript
export default function AboutUsPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <AboutHeroSection />
        <CompanyStorySection />
        <TeamSection />
        <ValuesSection />
        <MilestonesSection />
      </main>
      <Footer language={language} />
    </div>
  );
}
```

### Contact Us Page

**Location**: `src/app/contact-us/page.tsx`

**Purpose**: Contact information and form

**Features**:

- Contact form
- Company information
- Map integration
- Business hours

**Structure**:

```typescript
export default function ContactUsPage() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <ContactHeroSection />
        <ContactInfoSection />
        <ContactFormSection />
        <ContactMapSection />
        <ContactHoursSection />
      </main>
      <Footer language={language} />
    </div>
  );
}
```

## ⚡ Feature Components

### CarCard Component

**Location**: `src/components/gallery/CarCard.tsx`

**Purpose**: Display individual car information

**Props**:

```typescript
interface CarCardProps {
  car: CarData;
  onSelect: (car: CarData) => void;
  language: 'de' | 'fa';
}
```

**Features**:

- Car image display
- Basic information
- Hover effects
- Click to view details

**Usage**:

```typescript
import CarCard from '@/components/gallery/CarCard';

const CarGrid = ({ cars, onCarSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map(car => (
        <CarCard
          key={car.id}
          car={car}
          onSelect={onCarSelect}
          language={language}
        />
      ))}
    </div>
  );
};
```

### CarDetailView Component

**Location**: `src/components/gallery/CarDetailView.tsx`

**Purpose**: Detailed car information modal

**Props**:

```typescript
interface CarDetailViewProps {
  car: CarData | null;
  isOpen: boolean;
  onClose: () => void;
  language: 'de' | 'fa';
}
```

**Features**:

- Full car details
- Image gallery
- Specifications
- Contact information

**Usage**:

```typescript
import CarDetailView from '@/components/gallery/CarDetailView';

const Gallery = () => {
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Car grid */}
      <CarDetailView
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        language={language}
      />
    </div>
  );
};
```

### SearchFilterSection Component

**Location**: `src/components/gallery/SearchFilterSection.tsx`

**Purpose**: Car search and filtering interface

**Props**:

```typescript
interface SearchFilterSectionProps {
  onSearch: (query: string) => void;
  onFilter: (filters: CarFilters) => void;
  language: 'de' | 'fa';
}
```

**Features**:

- Text search
- Brand filter
- Category filter
- Price range filter
- Reset filters

**Usage**:

```typescript
import SearchFilterSection from '@/components/gallery/SearchFilterSection';

const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  return (
    <div>
      <SearchFilterSection
        onSearch={setSearchQuery}
        onFilter={setFilters}
        language={language}
      />
      {/* Filtered car grid */}
    </div>
  );
};
```

### LanguageSwitcher Component

**Location**: `src/components/layout/LanguageSwitcher.tsx`

**Purpose**: Language switching interface

**Props**:

```typescript
interface LanguageSwitcherProps {
  language: 'de' | 'fa';
  onLanguageChange: (language: 'de' | 'fa') => void;
}
```

**Features**:

- Language buttons
- Visual feedback
- RTL support

**Usage**:

```typescript
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header>
      {/* Logo and navigation */}
      <LanguageSwitcher
        language={language}
        onLanguageChange={setLanguage}
      />
    </header>
  );
};
```

### AdminPanel Component

**Location**: `src/components/AdminPanel.tsx`

**Purpose**: Content management interface

**Props**:

```typescript
interface AdminPanelProps {
  onRefresh: () => void;
  onClose: () => void;
}
```

**Features**:

- Data refresh button
- File status display
- Error handling
- Instructions

**Usage**:

```typescript
import AdminPanel from '@/components/AdminPanel';

const App = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div>
      {/* Main app content */}
      <AdminPanel
        onRefresh={handleRefresh}
        onClose={() => setIsAdminOpen(false)}
      />
    </div>
  );
};
```

## 🎨 UI Components

### Button Component

**Location**: `src/components/ui/Button.tsx`

**Purpose**: Reusable button component

**Props**:

```typescript
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}
```

**Usage**:

```typescript
import Button from '@/components/ui/Button';

const MyComponent = () => {
  return (
    <div>
      <Button variant="primary" size="lg" onClick={handleClick}>
        Click me
      </Button>
    </div>
  );
};
```

### Modal Component

**Location**: `src/components/modals/Modal.tsx`

**Purpose**: Reusable modal dialog

**Props**:

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Usage**:

```typescript
import Modal from '@/components/modals/Modal';

const MyComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
        size="lg"
      >
        <p>Modal content goes here</p>
      </Modal>
    </div>
  );
};
```

### LoadingComponent

**Location**: `src/components/ui/LoadingComponent.tsx`

**Purpose**: Loading state display

**Props**:

```typescript
interface LoadingComponentProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
}
```

**Usage**:

```typescript
import LoadingComponent from '@/components/ui/LoadingComponent';

const MyComponent = () => {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingComponent message="Loading cars..." />;
  }

  return <div>Content loaded</div>;
};
```

## 🔧 Component Patterns

### Higher-Order Components (HOCs)

#### withLanguage HOC

```typescript
const withLanguage = (WrappedComponent: React.ComponentType<any>) => {
  return (props: any) => {
    const { language, setLanguage, t } = useLanguage();

    return (
      <WrappedComponent
        {...props}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
    );
  };
};

// Usage
const MyComponent = ({ language, t }) => {
  return <h1>{t('title')}</h1>;
};

export default withLanguage(MyComponent);
```

### Render Props Pattern

```typescript
interface LanguageProviderProps {
  children: (props: LanguageContextType) => React.ReactNode;
}

const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const context = useLanguage();
  return <>{children(context)}</>;
};

// Usage
<LanguageProvider>
  {({ language, setLanguage, t }) => (
    <div>
      <h1>{t('title')}</h1>
      <button onClick={() => setLanguage('fa')}>
        Switch to Persian
      </button>
    </div>
  )}
</LanguageProvider>
```

### Compound Components

```typescript
const Card = ({ children, className }) => (
  <div className={`card ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="card-header">{children}</div>
);

const CardBody = ({ children }) => (
  <div className="card-body">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="card-footer">{children}</div>
);

// Usage
<Card>
  <CardHeader>
    <h3>Card Title</h3>
  </CardHeader>
  <CardBody>
    <p>Card content</p>
  </CardBody>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

## 🎨 Styling Guidelines

### CSS Classes

#### Layout Classes

```css
.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section {
  @apply py-16 lg:py-24;
}

.grid {
  @apply grid gap-6;
}

.grid-cols-1 {
  @apply grid-cols-1;
}

.grid-cols-2 {
  @apply grid-cols-1 md:grid-cols-2;
}

.grid-cols-3 {
  @apply grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}
```

#### Component Classes

```css
.card {
  @apply bg-white rounded-lg shadow-md overflow-hidden;
}

.card-hover {
  @apply transition-transform duration-300 hover:scale-105;
}

.button {
  @apply px-6 py-3 rounded-lg font-medium transition-colors duration-200;
}

.button-primary {
  @apply bg-blue-600 text-white hover:bg-blue-700;
}

.button-secondary {
  @apply bg-gray-200 text-gray-800 hover:bg-gray-300;
}
```

#### Responsive Classes

```css
.responsive-text {
  @apply text-sm md:text-base lg:text-lg;
}

.responsive-padding {
  @apply p-4 md:p-6 lg:p-8;
}

.responsive-margin {
  @apply m-4 md:m-6 lg:m-8;
}
```

### RTL Support

```css
.rtl-support {
  @apply text-right;
}

.ltr-support {
  @apply text-left;
}

[dir='rtl'] .rtl-support {
  @apply text-right;
}

[dir='ltr'] .ltr-support {
  @apply text-left;
}
```

## ✅ Best Practices

### Component Design

1. **Single Responsibility**: Each component should have one clear purpose
2. **Props Interface**: Always define TypeScript interfaces for props
3. **Default Props**: Provide sensible defaults for optional props
4. **Error Boundaries**: Wrap components in error boundaries
5. **Accessibility**: Include proper ARIA labels and keyboard navigation

### Performance

1. **Memoization**: Use React.memo for expensive components
2. **Lazy Loading**: Load components only when needed
3. **Image Optimization**: Use Next.js Image component
4. **Bundle Splitting**: Split code at route level

### Code Organization

1. **File Naming**: Use PascalCase for component files
2. **Export Strategy**: Use default exports for components
3. **Import Order**: Group imports logically
4. **Documentation**: Add JSDoc comments for complex components

### Testing

1. **Unit Tests**: Test component behavior in isolation
2. **Integration Tests**: Test component interactions
3. **Visual Tests**: Test component appearance
4. **Accessibility Tests**: Test keyboard navigation and screen readers

---

**Last Updated**: December 2024  
**Version**: 1.0.0
