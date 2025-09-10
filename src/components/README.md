# Components Structure

This directory contains all React components organized by their purpose and functionality.

## 📁 Folder Structure

```
src/components/
├── sections/          # Main page sections
│   ├── HeroSection.tsx
│   ├── SearchFilterSection.tsx
│   ├── CarGallerySection.tsx
│   ├── AdvantagesSection.tsx
│   └── index.ts
├── ui/               # Reusable UI components
│   ├── CarCard.tsx
│   ├── CarDetailView.tsx
│   ├── LoadingComponent.tsx
│   └── index.ts
├── layout/           # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── index.ts
├── modals/           # Modal components
│   ├── VideoModal.tsx
│   └── index.ts
├── AdminPanel.tsx    # Admin functionality
├── AnimatedBackground.tsx
├── CarManagement.tsx
└── index.ts          # Main export file
```

## 🎯 Component Categories

### Sections (`/sections`)

Main page sections that make up the homepage layout:

- **HeroSection**: Company introduction with statistics
- **SearchFilterSection**: Car search and filtering interface
- **CarGallerySection**: Car gallery with grid/detail view
- **AdvantagesSection**: Company advantages showcase

### UI Components (`/ui`)

Reusable UI elements that can be used across the application:

- **CarCard**: Individual car display card
- **CarDetailView**: Detailed car information view
- **LoadingComponent**: Loading state component

### Layout (`/layout`)

Page structure components:

- **Header**: Navigation and language switcher
- **Footer**: Company information and links

### Modals (`/modals`)

Overlay components for user interactions:

- **VideoModal**: Promotional video player

## 📦 Import Usage

### Import from specific category:

```typescript
import { HeroSection, CarGallerySection } from '@/components/sections';
import { CarCard, LoadingComponent } from '@/components/ui';
import { Header, Footer } from '@/components/layout';
import { VideoModal } from '@/components/modals';
```

### Import from main index (recommended):

```typescript
import {
  HeroSection,
  CarCard,
  Header,
  VideoModal,
  LoadingComponent,
} from '@/components';
```

## 🎨 Styling

All components use:

- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive design** with mobile-first approach
- **Custom gradients** and animations for visual appeal

## 🔧 Component Features

- **TypeScript** interfaces for type safety
- **Internationalization** support with translation functions
- **Responsive design** for all screen sizes
- **Accessibility** considerations
- **Performance optimized** with proper React patterns

## 📝 Adding New Components

1. Choose the appropriate folder based on component purpose
2. Create the component file with proper TypeScript interfaces
3. Export from the folder's `index.ts`
4. Update the main `index.ts` if needed
5. Follow the existing naming conventions and structure
