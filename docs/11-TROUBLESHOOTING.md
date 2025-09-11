# 🔍 Troubleshooting Guide - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Common Issues](#common-issues)
- [Installation Problems](#installation-problems)
- [Development Issues](#development-issues)
- [Build and Deployment Issues](#build-and-deployment-issues)
- [Runtime Errors](#runtime-errors)
- [Performance Issues](#performance-issues)
- [Browser Compatibility](#browser-compatibility)
- [Network and API Issues](#network-and-api-issues)
- [Debugging Techniques](#debugging-techniques)
- [Error Messages Reference](#error-messages-reference)
- [Getting Help](#getting-help)

## 🚨 Common Issues

### Issue 1: Website Not Loading

**Symptoms:**

- Blank page or "This site can't be reached" error
- Browser shows connection error
- Development server not responding

**Solutions:**

#### Check Development Server

```bash
# Verify server is running
npm run dev

# Check if port 3000 is available
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # macOS/Linux

# Use different port if needed
npm run dev -- -p 3001
```

#### Check Browser

```bash
# Clear browser cache
# Try incognito/private mode
# Disable browser extensions
# Try different browser
```

#### Check Network

```bash
# Test localhost connectivity
ping localhost
telnet localhost 3000

# Check firewall settings
# Disable antivirus temporarily
```

### Issue 2: Excel Files Not Loading

**Symptoms:**

- Empty car list
- Missing translations
- Console errors about file loading
- "Failed to load content data" message

**Solutions:**

#### Check File Existence

```bash
# Verify files exist
ls public/excel/
# Should show: translations-template.csv, cars.xlsx

# Check file permissions
chmod 644 public/excel/*
```

#### Check File Format

```bash
# Verify CSV format for translations
head -5 public/excel/translations-template.csv
# Should show: key,de,fa,category

# Verify Excel format for cars
# Open cars.xlsx in Excel or LibreOffice
# Check column headers match expected format
```

#### Check File Content

```bash
# Check CSV encoding
file public/excel/translations-template.csv
# Should be UTF-8

# Validate CSV structure
cat public/excel/translations-template.csv | head -3
# Should show proper CSV format
```

#### Use Admin Panel

```bash
# Open admin panel (bottom-right corner)
# Click "Refresh Data" button
# Check for error messages
# Verify file paths are correct
```

### Issue 3: Translations Not Showing

**Symptoms:**

- Raw keys displayed instead of translations (e.g., "nav.home")
- Missing text in UI
- Language switching not working

**Solutions:**

#### Check Translation Keys

```typescript
// Verify key exists in CSV file
// Check key format (no spaces, proper case)
// Ensure key is used correctly in code

const { t } = useLanguage();
console.log('Translation key:', t('nav.home'));
```

#### Check CSV File Structure

```csv
# Verify CSV format
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
```

#### Check Language Context

```typescript
// Verify language context is working
const { language, setLanguage, t } = useLanguage();
console.log('Current language:', language);
console.log('Available translations:', translations);
```

#### Clear Browser Cache

```bash
# Clear browser cache and cookies
# Try incognito/private mode
# Restart development server
```

### Issue 4: Images Not Displaying

**Symptoms:**

- Broken image icons
- 404 errors for images
- Images not loading in car gallery

**Solutions:**

#### Check Image Files

```bash
# Verify images exist
ls public/images/cars/
# Should show car image files

# Check file extensions
ls public/images/cars/*.jpg
ls public/images/cars/*.png
ls public/images/cars/*.webp
```

#### Check Image Paths

```typescript
// Verify image paths in Excel file
// Check image filenames match exactly
// Ensure no extra spaces or special characters

const imagePath = `/images/cars/${car.image}`;
console.log('Image path:', imagePath);
```

#### Check File Permissions

```bash
# Check file permissions
ls -la public/images/cars/
# Should show readable permissions

# Fix permissions if needed
chmod 644 public/images/cars/*
```

#### Check Image Format

```bash
# Verify image files are not corrupted
file public/images/cars/bmw-x5.jpg
# Should show valid image format

# Test image in browser
# Open: http://localhost:3000/images/cars/bmw-x5.jpg
```

### Issue 5: Language Switching Issues

**Symptoms:**

- Language buttons not working
- Text doesn't change when switching languages
- RTL layout not applied for Persian

**Solutions:**

#### Check Language Context

```typescript
// Verify language context is properly set up
const { language, setLanguage, t } = useLanguage();

// Test language switching
const handleLanguageChange = () => {
  console.log('Current language:', language);
  setLanguage(language === 'de' ? 'fa' : 'de');
  console.log('New language:', language);
};
```

#### Check Translation Data

```typescript
// Verify translations are loaded
console.log('Translations:', translations);
console.log('German translations:', translations.de);
console.log('Persian translations:', translations.fa);
```

#### Check RTL Support

```css
/* Verify RTL styles are applied */
[dir='rtl'] {
  text-align: right;
}

[dir='ltr'] {
  text-align: left;
}
```

#### Clear Local Storage

```javascript
// Clear language preference
localStorage.removeItem('preferred-language');
// Refresh page
```

## 🛠️ Installation Problems

### Problem 1: Node.js Version Issues

**Error:** `npm install` fails with version errors

**Solutions:**

#### Check Node.js Version

```bash
node --version
# Should be v18.0.0 or higher

npm --version
# Should be 9.0.0 or higher
```

#### Update Node.js

```bash
# Download latest LTS from https://nodejs.org/
# Or use Node Version Manager (nvm)

# Install nvm (macOS/Linux)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Install Node.js 18
nvm install 18
nvm use 18
```

#### Clear npm Cache

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Problem 2: Permission Errors

**Error:** `npm install` fails with permission errors

**Solutions:**

#### Windows

```bash
# Run as Administrator
# Or use npm with --force flag
npm install --force

# Or change npm default directory
npm config set prefix %APPDATA%\npm
```

#### macOS/Linux

```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules

# Or use nvm to avoid permission issues
```

### Problem 3: Network/Proxy Issues

**Error:** Cannot download packages

**Solutions:**

#### Configure npm Proxy

```bash
# Set proxy (if behind corporate firewall)
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# Or use different registry
npm config set registry https://registry.npmjs.org/
```

#### Use Alternative Package Manager

```bash
# Try yarn instead of npm
npm install -g yarn
yarn install

# Or use bun
curl -fsSL https://bun.sh/install | bash
bun install
```

### Problem 4: Port Already in Use

**Error:** Port 3000 is already in use

**Solutions:**

#### Find and Kill Process

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

#### Use Different Port

```bash
# Use different port
npm run dev -- -p 3001

# Or set PORT environment variable
PORT=3001 npm run dev
```

## 🔧 Development Issues

### Issue 1: Hot Reload Not Working

**Symptoms:**

- Changes not reflected in browser
- Need to manually refresh page
- Development server not detecting changes

**Solutions:**

#### Check File Watching

```bash
# Increase file watcher limit (Linux)
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p

# Check if files are being watched
npm run dev
# Make a change and see if it's detected
```

#### Check File Permissions

```bash
# Ensure files are writable
chmod 644 src/**/*.tsx
chmod 644 src/**/*.ts
```

#### Restart Development Server

```bash
# Stop and restart
Ctrl+C
npm run dev
```

### Issue 2: TypeScript Errors

**Symptoms:**

- TypeScript compilation errors
- Red squiggly lines in IDE
- Build fails with type errors

**Solutions:**

#### Check TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```

#### Fix Type Errors

```typescript
// Add proper type annotations
interface Props {
  title: string;
  onAction: () => void;
}

const Component: React.FC<Props> = ({ title, onAction }) => {
  // Component implementation
};
```

#### Check Dependencies

```bash
# Ensure TypeScript is installed
npm install -D typescript @types/react @types/node

# Check for type conflicts
npm run type-check
```

### Issue 3: ESLint Errors

**Symptoms:**

- Red squiggly lines in IDE
- Build fails with linting errors
- Console shows ESLint warnings

**Solutions:**

#### Fix Linting Errors

```bash
# Auto-fix linting errors
npm run lint:fix

# Check specific file
npx eslint src/components/MyComponent.tsx
```

#### Configure ESLint

```javascript
// eslint.config.mjs
export default [
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
    },
  },
];
```

#### Disable Rules (Temporarily)

```typescript
// eslint-disable-next-line no-console
console.log('Debug message');
```

## 🏗️ Build and Deployment Issues

### Issue 1: Build Failures

**Symptoms:**

- `npm run build` fails
- Deployment fails
- TypeScript compilation errors

**Solutions:**

#### Check Build Logs

```bash
# Run build with verbose output
npm run build -- --verbose

# Check for specific errors
npm run build 2>&1 | grep -i error
```

#### Fix TypeScript Errors

```bash
# Check TypeScript errors
npm run type-check

# Fix type issues
# Add proper type annotations
# Import missing types
```

#### Check Dependencies

```bash
# Ensure all dependencies are installed
npm install

# Check for version conflicts
npm ls
```

### Issue 2: Environment Variables Not Working

**Symptoms:**

- Environment variables not accessible
- API calls failing
- Configuration not loading

**Solutions:**

#### Check Environment File

```bash
# Verify .env.local exists
ls -la .env.local

# Check file content
cat .env.local
```

#### Check Variable Names

```env
# Client-side variables must start with NEXT_PUBLIC_
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_API_TOKEN=your_token

# Server-side variables (no prefix)
DATABASE_URL=postgresql://...
```

#### Restart Development Server

```bash
# Environment variables require restart
Ctrl+C
npm run dev
```

### Issue 3: Static Export Issues

**Symptoms:**

- Static export fails
- Images not included in export
- Routes not working in static export

**Solutions:**

#### Configure Static Export

```typescript
// next.config.ts
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};
```

#### Check for Dynamic Routes

```typescript
// Ensure all routes are statically generated
export async function generateStaticParams() {
  return [{ slug: 'about-us' }, { slug: 'contact-us' }];
}
```

## 🚀 Runtime Errors

### Error 1: Hydration Mismatch

**Symptoms:**

- Console shows hydration mismatch errors
- Content flickers on page load
- Server and client render differently

**Solutions:**

#### Check for Client-Only Code

```typescript
// Use dynamic imports for client-only components
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
});
```

#### Check for Date/Time Issues

```typescript
// Use consistent date formatting
const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', {
    timeZone: 'UTC',
  });
};
```

#### Check for Random Values

```typescript
// Avoid random values in server-side rendering
const [randomId] = useState(() => Math.random());
```

### Error 2: Memory Leaks

**Symptoms:**

- Browser becomes slow over time
- High memory usage
- Page crashes after extended use

**Solutions:**

#### Clean Up Event Listeners

```typescript
useEffect(() => {
  const handleResize = () => {
    // Handle resize
  };

  window.addEventListener('resize', handleResize);

  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

#### Clean Up Timers

```typescript
useEffect(() => {
  const timer = setInterval(() => {
    // Do something
  }, 1000);

  // Cleanup
  return () => {
    clearInterval(timer);
  };
}, []);
```

#### Use WeakMap for Caching

```typescript
// Use WeakMap instead of Map for automatic cleanup
const cache = new WeakMap();
```

## ⚡ Performance Issues

### Issue 1: Slow Loading Times

**Symptoms:**

- Page takes long to load
- Images load slowly
- Poor Core Web Vitals scores

**Solutions:**

#### Optimize Images

```typescript
// Use Next.js Image component
import Image from 'next/image';

<Image
  src="/images/car.jpg"
  alt="Car"
  width={400}
  height={300}
  priority={false} // Enable lazy loading
  placeholder="blur"
/>
```

#### Implement Code Splitting

```typescript
// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
});
```

#### Optimize Bundle Size

```bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck
```

### Issue 2: Slow API Calls

**Symptoms:**

- API calls take long to complete
- Timeout errors
- Poor user experience

**Solutions:**

#### Implement Caching

```typescript
// Cache API responses
const [cache, setCache] = useState(new Map());

const fetchData = async (url: string) => {
  if (cache.has(url)) {
    return cache.get(url);
  }

  const data = await fetch(url).then((res) => res.json());
  setCache((prev) => new Map(prev).set(url, data));
  return data;
};
```

#### Use React Query

```bash
# Install React Query
npm install @tanstack/react-query
```

```typescript
// Use React Query for caching
import { useQuery } from '@tanstack/react-query';

const { data, isLoading } = useQuery({
  queryKey: ['cars'],
  queryFn: () => fetch('/api/cars').then((res) => res.json()),
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

## 🌐 Browser Compatibility

### Issue 1: Internet Explorer Issues

**Symptoms:**

- Site doesn't work in IE
- JavaScript errors
- Layout broken

**Solutions:**

#### Add Polyfills

```bash
# Install polyfills
npm install core-js
```

```typescript
// Add to _app.tsx
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```

#### Check Browser Support

```typescript
// Check for modern features
if (!window.fetch) {
  // Use polyfill or alternative
}
```

### Issue 2: Mobile Browser Issues

**Symptoms:**

- Layout broken on mobile
- Touch events not working
- Viewport issues

**Solutions:**

#### Check Viewport Meta Tag

```html
<!-- In layout.tsx -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

#### Test on Real Devices

```bash
# Use browser dev tools
# Test on actual mobile devices
# Check different screen sizes
```

## 🌐 Network and API Issues

### Issue 1: CORS Errors

**Symptoms:**

- CORS errors in console
- API calls blocked
- Network requests failing

**Solutions:**

#### Check CORS Configuration

```typescript
// In Strapi backend
// config/middlewares.ts
export default [
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      origin: ['http://localhost:3000', 'https://your-domain.com'],
    },
  },
];
```

#### Use Proxy in Development

```typescript
// next.config.ts
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:1337/api/:path*',
      },
    ];
  },
};
```

### Issue 2: API Timeout

**Symptoms:**

- API calls timeout
- Network errors
- Slow responses

**Solutions:**

#### Increase Timeout

```typescript
// Increase fetch timeout
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000);

fetch(url, { signal: controller.signal })
  .then((response) => response.json())
  .finally(() => clearTimeout(timeoutId));
```

#### Implement Retry Logic

```typescript
const fetchWithRetry = async (url: string, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, 1000 * (i + 1)));
    }
  }
};
```

## 🔍 Debugging Techniques

### Browser DevTools

#### Console Debugging

```typescript
// Add debug logging
console.log('Debug info:', { data, state });
console.group('Component Debug');
console.log('Props:', props);
console.log('State:', state);
console.groupEnd();
```

#### Network Tab

```bash
# Check network requests
# Look for failed requests
# Check response times
# Verify request headers
```

#### Performance Tab

```bash
# Profile performance
# Check for memory leaks
# Identify slow operations
# Monitor frame rates
```

### React DevTools

#### Component Inspection

```bash
# Install React DevTools browser extension
# Inspect component state and props
# Monitor re-renders
# Check component hierarchy
```

#### Profiler

```bash
# Use React Profiler
# Identify performance bottlenecks
# Check component render times
# Optimize slow components
```

### VS Code Debugging

#### Launch Configuration

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node",
      "request": "launch",
      "program": "${workspaceFolder}/node_modules/.bin/next",
      "args": ["dev"],
      "console": "integratedTerminal",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}
```

## 📋 Error Messages Reference

### Common Error Messages

#### "Module not found"

```
Error: Cannot resolve module 'react'
```

**Solution:** Run `npm install`

#### "Port already in use"

```
Error: listen EADDRINUSE: address already in use :::3000
```

**Solution:** Use different port or kill existing process

#### "Permission denied"

```
Error: EACCES: permission denied
```

**Solution:** Fix file permissions or run as administrator

#### "Out of memory"

```
Error: JavaScript heap out of memory
```

**Solution:** Increase memory limit: `NODE_OPTIONS="--max-old-space-size=4096"`

#### "Hydration mismatch"

```
Warning: Text content did not match. Server: "Hello" Client: "Hi"
```

**Solution:** Ensure server and client render the same content

### API Error Messages

#### "Failed to fetch"

```
TypeError: Failed to fetch
```

**Solution:** Check network connection and API endpoint

#### "CORS error"

```
Access to fetch at 'http://localhost:1337' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution:** Configure CORS in backend

#### "404 Not Found"

```
GET http://localhost:1337/api/cars 404 (Not Found)
```

**Solution:** Check API endpoint and content type configuration

## 🆘 Getting Help

### Self-Help Resources

1. **Check this troubleshooting guide** for common issues
2. **Read the documentation** in the docs folder
3. **Search existing issues** in the project repository
4. **Check browser console** for error messages
5. **Test in different browsers** to isolate issues

### Debugging Checklist

Before asking for help, try:

- [ ] Restart development server
- [ ] Clear browser cache
- [ ] Check browser console for errors
- [ ] Verify file paths and permissions
- [ ] Test with different browser
- [ ] Check network connectivity
- [ ] Verify environment variables
- [ ] Test with minimal reproduction

### Contact Support

If you need additional help:

**Developer**: Amir Hossein sharififard  
**Email**: amirhosseinsharififard@gmail.com  
**Phone**: +989172380487

When contacting support, please include:

1. **Description of the problem**
2. **Steps to reproduce**
3. **Expected vs actual behavior**
4. **Browser and OS information**
5. **Console error messages**
6. **Screenshots if applicable**

### Useful Resources

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **React Documentation**: [https://react.dev](https://react.dev)
- **TypeScript Documentation**: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)
- **Tailwind CSS Documentation**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

---

**Last Updated**: December 2024  
**Version**: 1.0.0
