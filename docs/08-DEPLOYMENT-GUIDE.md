# 🚀 Deployment Guide - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Deployment Overview](#deployment-overview)
- [Pre-deployment Checklist](#pre-deployment-checklist)
- [Environment Configuration](#environment-configuration)
- [Build Process](#build-process)
- [Deployment Platforms](#deployment-platforms)
- [Domain Configuration](#domain-configuration)
- [SSL Certificate Setup](#ssl-certificate-setup)
- [Performance Optimization](#performance-optimization)
- [Monitoring and Analytics](#monitoring-and-analytics)
- [Post-deployment Tasks](#post-deployment-tasks)
- [Troubleshooting](#troubleshooting)

## 🎯 Deployment Overview

This guide covers deploying the Bahram Autohaus frontend to production. The application is built with Next.js 14 and can be deployed to various platforms.

### Deployment Options

1. **Vercel** (Recommended) - Optimized for Next.js
2. **Netlify** - Great for static sites
3. **AWS** - Scalable cloud solution
4. **DigitalOcean** - Simple VPS deployment
5. **Docker** - Containerized deployment

### Architecture Overview

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (Next.js)     │◄──►│   (Strapi)      │◄──►│   (PostgreSQL)  │
│   Vercel/Netlify│    │   Railway/AWS   │    │   Cloud DB      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## ✅ Pre-deployment Checklist

### Code Quality

- [ ] All tests pass
- [ ] Code is linted and formatted
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] Performance optimizations are applied

### Content and Assets

- [ ] All images are optimized
- [ ] Excel files are properly formatted
- [ ] Translations are complete
- [ ] Sample data is ready
- [ ] Favicon and manifest files are updated

### Configuration

- [ ] Environment variables are configured
- [ ] API endpoints are updated for production
- [ ] CORS settings are configured
- [ ] Security headers are implemented

### Testing

- [ ] Application works in production build
- [ ] All pages load correctly
- [ ] Language switching works
- [ ] Admin panel functions properly
- [ ] Mobile responsiveness is verified

## ⚙️ Environment Configuration

### Production Environment Variables

Create `.env.production` file:

```env
# Production Settings
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Strapi Backend Configuration
NEXT_PUBLIC_STRAPI_URL=https://your-strapi-backend.com
NEXT_PUBLIC_STRAPI_API_TOKEN=your_production_api_token

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@bahram-autohaus.de
NEXT_PUBLIC_PHONE_NUMBER=+491234567890

# Social Media (Optional)
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/bahram-autohaus
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/bahram-autohaus
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/bahram-autohaus

# Performance Monitoring (Optional)
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

### Next.js Configuration for Production

Update `next.config.ts`:

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable compression
  compress: true,

  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-strapi-backend.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },

  // PWA configuration
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
};

export default nextConfig;
```

## 🏗️ Build Process

### Local Build Testing

Before deploying, test the production build locally:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start

# Test the application
# Open http://localhost:3000 and verify everything works
```

### Build Optimization

```bash
# Analyze bundle size
npm run analyze

# Check for unused dependencies
npx depcheck

# Optimize images
npx next-optimized-images
```

### Build Scripts

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "build": "next build",
    "start": "next start",
    "export": "next export",
    "analyze": "ANALYZE=true next build",
    "build:production": "NODE_ENV=production next build",
    "deploy": "npm run build && npm run start"
  }
}
```

## 🌐 Deployment Platforms

### Option 1: Vercel (Recommended)

Vercel is the company behind Next.js and provides the best integration.

#### Automatic Deployment

1. **Connect GitHub Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Project**:
   - Framework Preset: Next.js
   - Root Directory: `bahram auto front`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Set Environment Variables**:
   - Go to Project Settings → Environment Variables
   - Add all production environment variables
   - Set for Production environment

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be available at `https://your-project.vercel.app`

#### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Vercel Configuration

Create `vercel.json`:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["fra1"],
  "functions": {
    "app/**/*.tsx": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        }
      ]
    }
  ]
}
```

### Option 2: Netlify

#### Automatic Deployment

1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Choose your repository

2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Publish Directory: `out` (for static export) or `.next` (for server)
   - Base Directory: `bahram auto front`

3. **Set Environment Variables**:
   - Go to Site Settings → Environment Variables
   - Add all production environment variables

4. **Deploy**:
   - Click "Deploy site"
   - Wait for build to complete

#### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "out"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "origin-when-cross-origin"
```

### Option 3: AWS (Advanced)

#### Using AWS Amplify

1. **Connect Repository**:
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your GitHub repository

2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Base Directory: `bahram auto front`

3. **Set Environment Variables**:
   - Add all production environment variables

#### Using AWS S3 + CloudFront

```bash
# Install AWS CLI
npm install -g @aws-cli/cli

# Configure AWS credentials
aws configure

# Build the application
npm run build
npm run export

# Upload to S3
aws s3 sync out/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

### Option 4: DigitalOcean App Platform

1. **Create App**:
   - Go to DigitalOcean App Platform
   - Click "Create App"
   - Connect your GitHub repository

2. **Configure App**:
   - Source: GitHub repository
   - Branch: main
   - Build Command: `npm run build`
   - Run Command: `npm start`
   - HTTP Port: 3000

3. **Set Environment Variables**:
   - Add all production environment variables

4. **Deploy**:
   - Click "Create Resources"
   - Wait for deployment

### Option 5: Docker Deployment

#### Create Dockerfile

```dockerfile
# Use Node.js 18 Alpine image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci --only=production

# Build the application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Start the application
CMD ["node", "server.js"]
```

#### Create docker-compose.yml

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_STRAPI_URL=http://backend:1337
    depends_on:
      - backend

  backend:
    image: strapi/strapi:latest
    ports:
      - '1337:1337'
    environment:
      - DATABASE_CLIENT=postgres
      - DATABASE_HOST=db
      - DATABASE_PORT=5432
      - DATABASE_NAME=bahram_auto
      - DATABASE_USERNAME=strapi
      - DATABASE_PASSWORD=strapi123
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=bahram_auto
      - POSTGRES_USER=strapi
      - POSTGRES_PASSWORD=strapi123
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

#### Deploy with Docker

```bash
# Build and start services
docker-compose up -d

# Check logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🌍 Domain Configuration

### Custom Domain Setup

#### Vercel

1. **Add Domain**:
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.19.61
   ```

#### Netlify

1. **Add Domain**:
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**:

   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app

   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### DNS Configuration

#### Common DNS Records

```
# Apex domain (example.com)
Type: A
Name: @
Value: [Platform IP]

# WWW subdomain (www.example.com)
Type: CNAME
Name: www
Value: [Platform domain]

# API subdomain (api.example.com)
Type: CNAME
Name: api
Value: [Backend domain]
```

## 🔒 SSL Certificate Setup

### Automatic SSL (Recommended)

Most platforms provide automatic SSL certificates:

- **Vercel**: Automatic Let's Encrypt certificates
- **Netlify**: Automatic Let's Encrypt certificates
- **AWS**: AWS Certificate Manager
- **DigitalOcean**: Automatic SSL certificates

### Manual SSL Setup

#### Using Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot

# Generate certificate
sudo certbot certonly --webroot -w /var/www/html -d your-domain.com

# Auto-renewal
sudo crontab -e
# Add: 0 12 * * * /usr/bin/certbot renew --quiet
```

#### Using Cloudflare

1. **Add Domain to Cloudflare**:
   - Sign up at [cloudflare.com](https://cloudflare.com)
   - Add your domain
   - Update nameservers

2. **Enable SSL**:
   - Go to SSL/TLS → Overview
   - Set encryption mode to "Full (strict)"

## ⚡ Performance Optimization

### Image Optimization

```typescript
// Use Next.js Image component
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
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};
```

### Code Splitting

```typescript
// Dynamic imports for heavy components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false
});
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze

# Check for unused code
npx @next/bundle-analyzer
```

### Performance Monitoring

```typescript
// Add performance monitoring
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  console.log(metric);
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

## 📊 Monitoring and Analytics

### Google Analytics Setup

```typescript
// Add to _app.tsx or layout.tsx
import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Error Monitoring with Sentry

```bash
# Install Sentry
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### Uptime Monitoring

Set up uptime monitoring with:

- **UptimeRobot**: Free uptime monitoring
- **Pingdom**: Advanced monitoring
- **StatusCake**: Comprehensive monitoring

## 🔧 Post-deployment Tasks

### 1. Verify Deployment

```bash
# Test all pages
curl -I https://your-domain.com
curl -I https://your-domain.com/gallery
curl -I https://your-domain.com/about-us
curl -I https://your-domain.com/contact-us

# Test API endpoints
curl https://your-domain.com/api/health
```

### 2. Update DNS

- Update DNS records to point to new deployment
- Wait for DNS propagation (up to 48 hours)
- Test with different DNS servers

### 3. Configure CDN

```typescript
// Configure CDN for static assets
const nextConfig = {
  assetPrefix: 'https://cdn.your-domain.com',
  images: {
    domains: ['cdn.your-domain.com'],
  },
};
```

### 4. Set Up Monitoring

- Configure error tracking
- Set up performance monitoring
- Create uptime alerts
- Set up log aggregation

### 5. Backup Strategy

- Set up automated backups
- Test backup restoration
- Document recovery procedures

## 🐛 Troubleshooting

### Common Deployment Issues

#### 1. Build Failures

**Problem**: Build fails during deployment

**Solution**:

```bash
# Check build logs
# Verify all dependencies are in package.json
# Check for TypeScript errors
npm run type-check

# Test build locally
npm run build
```

#### 2. Environment Variables Not Working

**Problem**: Environment variables not accessible

**Solution**:

```bash
# Verify environment variables are set in deployment platform
# Check variable names (must start with NEXT_PUBLIC_ for client-side)
# Restart deployment after adding variables
```

#### 3. API Connection Issues

**Problem**: Frontend can't connect to backend

**Solution**:

```bash
# Check CORS configuration in backend
# Verify API URLs are correct
# Check network connectivity
# Verify SSL certificates
```

#### 4. Image Loading Issues

**Problem**: Images not loading

**Solution**:

```bash
# Check image paths
# Verify images are in public folder
# Check file permissions
# Verify image optimization settings
```

#### 5. Performance Issues

**Problem**: Slow loading times

**Solution**:

```bash
# Enable compression
# Optimize images
# Use CDN
# Implement caching
# Check bundle size
```

### Debug Commands

```bash
# Check deployment status
vercel ls
netlify status

# View logs
vercel logs
netlify logs

# Test locally with production build
npm run build
npm start

# Check bundle size
npm run analyze
```

### Getting Help

If you encounter issues:

1. **Check deployment logs** in your platform's dashboard
2. **Test locally** with production build
3. **Verify environment variables** are set correctly
4. **Check network connectivity** between frontend and backend
5. **Contact support**:
   - **Email**: amirhosseinsharififard@gmail.com
   - **Phone**: +989172380487

---

**Last Updated**: December 2024  
**Version**: 1.0.0
