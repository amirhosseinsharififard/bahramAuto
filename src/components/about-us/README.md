# About Us Components

This directory contains all components specifically designed for the About Us page of Bahram Autohaus. The components are organized in a modular structure for better maintainability and reusability.

## 📁 Structure

```
src/components/about-us/
├── AboutCTASection.tsx    # Call-to-action section
├── AboutHeroSection.tsx   # Hero section with company story
├── MilestonesSection.tsx  # Company timeline and milestones
├── TeamSection.tsx        # Team member profiles
├── ValuesSection.tsx      # Company values and principles
├── types.ts              # Shared TypeScript interfaces
├── index.ts              # Barrel export file
└── README.md             # This documentation
```

## 🧩 Components

### AboutHeroSection

- **Purpose**: Displays the main hero section with company story
- **Features**: Enhanced gradients, animations, and responsive design
- **Props**: `{ t: TranslationFunction }`

### MilestonesSection

- **Purpose**: Shows company timeline and key milestones
- **Features**: Interactive timeline with alternating layout
- **Props**: `{ t: TranslationFunction }`

### ValuesSection

- **Purpose**: Displays company values and principles
- **Features**: Grid layout with hover effects and icons
- **Props**: `{ t: TranslationFunction }`

### TeamSection

- **Purpose**: Shows team member profiles
- **Features**: Responsive grid with member cards and animations
- **Props**: `{ t: TranslationFunction }`

### AboutCTASection

- **Purpose**: Call-to-action section for contact
- **Features**: Centered design with gradient button
- **Props**: `{ t: TranslationFunction }`

## 🎨 Styling

All components use:

- **Tailwind CSS** for styling
- **Responsive design** with mobile-first approach
- **Gradient backgrounds** and glassmorphism effects
- **Smooth animations** and hover effects
- **Consistent color scheme** (blue/purple gradients)

## 🌐 Internationalization

All components support:

- **German (de)** and **Persian (fa)** languages
- **RTL support** for Persian
- **Translation function** passed as props

## 📦 Usage

### Import Individual Components

```typescript
import { AboutHeroSection } from '@/components/about-us';
```

### Import All Components

```typescript
import {
  AboutHeroSection,
  MilestonesSection,
  ValuesSection,
  TeamSection,
  AboutCTASection,
} from '@/components/about-us';
```

### Using in About Page

```typescript
const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div>
      <AboutHeroSection t={t} />
      <MilestonesSection t={t} />
      <ValuesSection t={t} />
      <TeamSection t={t} />
      <AboutCTASection t={t} />
    </div>
  );
};
```

## 🔧 Types

The `types.ts` file contains shared interfaces:

- `TranslationFunction`: Type for translation function
- `BaseAboutProps`: Base props for all components
- `Milestone`, `Value`, `TeamMember`: Data structures
- `AboutPageData`: Complete page data structure

## 🚀 Features

- **Modular Architecture**: Each section is a separate component
- **Type Safety**: Full TypeScript support with shared types
- **Responsive Design**: Works on all device sizes
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Performance**: Optimized with Next.js Image component
- **Maintainability**: Clean code structure with documentation

## 📝 Development Notes

- All components are client-side rendered (`'use client'`)
- Components use Lucide React for icons
- Images are optimized with Next.js Image component
- Consistent naming convention with descriptive names
- Each component is self-contained and reusable

## 🔄 Updates

When adding new about-us components:

1. Create the component in this directory
2. Add the export to `index.ts`
3. Update this README with component documentation
4. Add any new types to `types.ts`
5. Test with both German and Persian translations
