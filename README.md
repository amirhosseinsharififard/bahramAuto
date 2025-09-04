# Bahram Autohaus - Premium Cars Deutschland

A modern, responsive website for Bahram Autohaus, a premium car dealership in Germany. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### 🌐 Multi-language Support

- **German (DE)** - Primary language
- **Persian/Farsi (FA)** - Secondary language with RTL support
- Dynamic language switching across all pages
- Context-based language management

### 📱 Responsive Design

- Mobile-first approach
- Optimized for all device sizes
- Touch-friendly navigation
- Smooth animations and transitions

### 🎨 Modern UI/UX

- Gradient backgrounds and glassmorphism effects
- Smooth hover animations
- Interactive car gallery with filtering
- Professional color scheme (blue/purple gradients)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js 13+ App Router
│   ├── about-us/          # About Us page
│   ├── contact-us/        # Contact page
│   ├── gallery/           # Car gallery page
│   ├── service/           # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   └── AnimatedBackground.tsx # Background animations
└── contexts/              # React contexts
    └── LanguageContext.tsx # Language state management
```

## 🧩 Components

### Header Component

- Responsive navigation menu
- Language switcher (DE/FA)
- Mobile hamburger menu
- Active page highlighting
- Logo with hover effects

### Footer Component

- Company information
- Contact details
- Service links
- Legal information
- Certifications

### AnimatedBackground Component

- Floating gradient orbs
- Smooth pulse animations
- Performance-optimized

## 📄 Pages

### Homepage (`/`)

- Hero section with statistics
- Featured cars showcase
- Search and filtering
- Company advantages
- Call-to-action sections

### Gallery (`/gallery`)

- Car grid with filtering
- Search functionality
- Detailed car views
- Category-based filtering
- Responsive image gallery

### Services (`/service`)

- Service overview
- Process explanation
- Interactive service cards
- Contact call-to-action

### About Us (`/about-us`)

- Company history timeline
- Team information
- Company values
- Milestone achievements

### Contact (`/contact-us`)

- Contact form
- Business hours
- Location information
- Interactive map placeholder

## 🛠️ Technical Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Routing**: Next.js built-in routing

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd bahram-auto

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Optimizations

### Code Reusability

- Shared Header and Footer components
- Centralized language management
- Consistent styling patterns
- Reusable UI components

### Performance

- Optimized images with Next.js Image component
- Efficient state management
- Minimal re-renders
- Lazy loading for components

### User Experience

- Smooth page transitions
- Interactive elements
- Responsive design
- Accessibility considerations

### SEO & Accessibility

- Semantic HTML structure
- Meta tags and descriptions
- Alt text for images
- Proper heading hierarchy

## 🌍 Language Support

### German (DE)

- Primary business language
- Professional automotive terminology
- Local business context

### Persian/Farsi (FA)

- RTL text direction support
- Cultural adaptation
- Localized content

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Accent**: Cyan (#06B6D4)
- **Background**: Dark gradients
- **Text**: White and light grays

### Typography

- **Headings**: Bold, gradient text
- **Body**: Clean, readable fonts
- **Buttons**: Rounded, gradient backgrounds

### Spacing

- Consistent spacing scale
- Responsive margins and padding
- Proper component spacing

## 🔧 Customization

### Adding New Languages

1. Update `LanguageContext.tsx`
2. Add translations to component content objects
3. Update navigation labels

### Adding New Pages

1. Create new page in `app/` directory
2. Import shared components
3. Add to navigation in `Header.tsx`

### Styling Changes

- Modify `tailwind.config.ts` for theme changes
- Update component classes for layout changes
- Use CSS variables for consistent theming

## 📊 Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

### Other Platforms

- Build the project: `npm run build`
- Deploy the `out/` directory
- Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Bahram Autohaus.

## 📞 Support

For technical support or questions:

- Email: [support-email]
- Documentation: [docs-url]
- Issues: [github-issues-url]

---

**Built with ❤️ for Bahram Autohaus**
