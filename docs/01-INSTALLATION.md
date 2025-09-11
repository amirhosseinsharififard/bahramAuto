# 🚀 Installation Guide - Bahram Autohaus Frontend

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [System Requirements](#system-requirements)
- [Installation Steps](#installation-steps)
- [Environment Setup](#environment-setup)
- [Data Files Setup](#data-files-setup)
- [Verification](#verification)
- [Troubleshooting](#troubleshooting)

## 📋 Prerequisites

Before installing the Bahram Autohaus frontend, ensure you have the following software installed on your system:

### Required Software

#### 1. Node.js (Version 18.0 or higher)

**Download and Install:**

- Visit: [https://nodejs.org/](https://nodejs.org/)
- Download the LTS (Long Term Support) version
- Run the installer and follow the setup wizard
- Restart your terminal/command prompt after installation

**Verify Installation:**

```bash
node --version
# Should output: v18.x.x or higher

npm --version
# Should output: 9.x.x or higher
```

#### 2. Git (Version Control)

**Download and Install:**

- Visit: [https://git-scm.com/](https://git-scm.com/)
- Download for your operating system
- Run the installer with default settings
- Restart your terminal/command prompt

**Verify Installation:**

```bash
git --version
# Should output: git version 2.x.x or higher
```

#### 3. Code Editor (Recommended: Visual Studio Code)

**Download and Install:**

- Visit: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Download and install VS Code
- Install recommended extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

### Optional Software

#### 1. Yarn (Alternative Package Manager)

```bash
npm install -g yarn
```

#### 2. Bun (Fast Package Manager)

```bash
curl -fsSL https://bun.sh/install | bash
```

## 💻 System Requirements

### Minimum Requirements

- **Operating System**: Windows 10, macOS 10.15, or Linux Ubuntu 18.04+
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **Internet**: Stable internet connection for downloading packages

### Recommended Requirements

- **RAM**: 16GB or more
- **Storage**: 10GB free space (for development tools and dependencies)
- **CPU**: Multi-core processor for faster builds

## 🚀 Installation Steps

### Step 1: Get the Project Files

#### Option A: Clone from Repository (if available)

```bash
# Clone the repository
git clone <repository-url>
cd "bahram auto front"
```

#### Option B: Download Project Files

1. Download the project ZIP file
2. Extract it to your desired location
3. Navigate to the project folder:
   ```bash
   cd "F:\programming\project 1404\mohsen-shafiey\bahram auto front"
   ```

### Step 2: Install Dependencies

Open your terminal/command prompt in the project directory and run:

```bash
# Install all required packages
npm install
```

**What this does:**

- Downloads all required packages listed in `package.json`
- Creates a `node_modules` folder with all dependencies
- Generates a `package-lock.json` file for consistent installs

**Alternative package managers:**

```bash
# Using Yarn
yarn install

# Using Bun
bun install
```

**Expected Output:**

```
npm WARN deprecated some-package@1.0.0: This package is deprecated
added 1234 packages, and audited 1235 packages in 45s

123 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Step 3: Verify Installation

Check if all dependencies are installed correctly:

```bash
# Check if Next.js is installed
npx next --version
# Should output: Next.js version number

# Check if TypeScript is working
npx tsc --version
# Should output: TypeScript version number
```

## ⚙️ Environment Setup

### Step 1: Create Environment File

Create a `.env.local` file in the root directory of your project:

```bash
# Create the environment file
touch .env.local
# On Windows: type nul > .env.local
```

### Step 2: Configure Environment Variables

Add the following content to `.env.local`:

```env
# Strapi Backend Configuration (Optional - for CMS integration)
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token_here

# Development Settings
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Analytics (if you have Google Analytics)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Optional: Other services
NEXT_PUBLIC_CONTACT_EMAIL=info@bahram-autohaus.de
NEXT_PUBLIC_PHONE_NUMBER=+491234567890
```

**Important Notes:**

- Replace `your_api_token_here` with your actual Strapi API token (if using Strapi)
- The `.env.local` file is automatically ignored by Git for security
- Never commit sensitive information to version control

### Step 3: Environment File Locations

The application looks for environment files in this order:

1. `.env.local` (highest priority)
2. `.env.development` (for development)
3. `.env.production` (for production)
4. `.env` (lowest priority)

## 📊 Data Files Setup

### Step 1: Verify Data Files

Ensure you have the required data files in the `public/excel/` directory:

```
public/excel/
├── translations-template.csv  # Translation data
├── cars.xlsx                  # Car inventory data
└── README.md                  # Excel file documentation
```

### Step 2: Check File Structure

Verify the file structure is correct:

```bash
# Check if Excel files exist
ls public/excel/
# Should show: translations-template.csv, cars.xlsx, README.md

# Check if images directory exists
ls public/images/
# Should show: cars/ directory
```

### Step 3: Sample Data Files

If the data files are missing, create them:

#### Create `public/excel/translations-template.csv`:

```csv
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
nav.cars,Fahrzeuge,خودروها,navigation
nav.services,Service,خدمات,navigation
nav.about,Über uns,درباره ما,navigation
nav.contact,Kontakt,تماس,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
hero.subtitle,Ihr Premium Partner für Qualitätsfahrzeuge,شریک برتر شما برای خودروهای باکیفیت,hero
```

#### Create `public/excel/cars.xlsx`:

Create an Excel file with these columns:

- `brand` (Text): Car manufacturer (e.g., BMW, Mercedes)
- `model` (Text): Car model (e.g., X5, C63)
- `year` (Number): Manufacturing year (e.g., 2023)
- `price` (Text): Price with currency (e.g., "45.000 €")
- `mileage` (Number): Kilometers driven (e.g., 25000)
- `fuel` (Text): Fuel type (e.g., Benzin, Diesel)
- `transmission` (Text): Transmission type (e.g., Automatik, Manual)
- `category` (Text): Car category (e.g., suv, limousine)
- `image` (Text): Image filename (e.g., bmw-x5.jpg)
- `description` (Text): Car description

### Step 4: Add Sample Images

Create the images directory and add sample car images:

```bash
# Create images directory
mkdir -p public/images/cars

# Add sample images (you can download from the internet or use placeholder images)
# Example: bmw-x5.jpg, mercedes-c63.jpg, audi-rs6.jpg
```

## ✅ Verification

### Step 1: Start Development Server

```bash
# Start the development server
npm run dev
```

**Expected Output:**

```
> bahram-auto@1.0.0 dev
> next dev

   ▲ Next.js 14.0.0
   - Local:        http://localhost:3000
   - Environments: .env.local

 ✓ Ready in 2.3s
 ✓ Compiled successfully
```

### Step 2: Test the Application

1. **Open your browser** and navigate to `http://localhost:3000`
2. **Verify the homepage loads** without errors
3. **Check language switching** (DE/FA buttons)
4. **Test navigation** between different pages
5. **Verify car data loads** (if you have cars in Excel file)

### Step 3: Check Browser Console

Open browser developer tools (F12) and check for any errors:

```javascript
// Should see no critical errors
// Look for warnings about missing translations or images
```

### Step 4: Test Admin Panel

1. **Click the Admin Panel button** (usually in bottom-right corner)
2. **Verify it opens** without errors
3. **Check data refresh functionality**
4. **Verify Excel file paths** are displayed correctly

## 🔍 Troubleshooting

### Common Installation Issues

#### 1. Node.js Version Issues

**Problem**: `npm install` fails with version errors

**Solution**:

```bash
# Check Node.js version
node --version

# If version is too old, update Node.js
# Download latest LTS from https://nodejs.org/
```

#### 2. Permission Errors (Windows)

**Problem**: `npm install` fails with permission errors

**Solution**:

```bash
# Run as Administrator
# Or use npm with --force flag
npm install --force
```

#### 3. Network/Proxy Issues

**Problem**: Cannot download packages

**Solution**:

```bash
# Configure npm proxy (if behind corporate firewall)
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080

# Or use different registry
npm config set registry https://registry.npmjs.org/
```

#### 4. Port Already in Use

**Problem**: `npm run dev` fails because port 3000 is in use

**Solution**:

```bash
# Use different port
npm run dev -- -p 3001

# Or kill process using port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -ti:3000 | xargs kill -9
```

#### 5. Excel Files Not Loading

**Problem**: Cars or translations not showing

**Solution**:

```bash
# Check file paths
ls public/excel/

# Verify file formats
# translations-template.csv should be CSV format
# cars.xlsx should be Excel format

# Check file permissions
chmod 644 public/excel/*
```

#### 6. Images Not Displaying

**Problem**: Car images show as broken

**Solution**:

```bash
# Check image directory
ls public/images/cars/

# Verify image filenames match Excel data
# Check file extensions (.jpg, .png, .webp)

# Ensure images are not corrupted
```

### Getting Help

If you encounter issues not covered here:

1. **Check the browser console** for error messages
2. **Read the troubleshooting guide** in the docs folder
3. **Search existing issues** in the project repository
4. **Contact support**:
   - **Email**: amirhosseinsharififard@gmail.com
   - **Phone**: +989172380487

### Verification Checklist

Before proceeding to development, ensure:

- [ ] Node.js 18+ is installed and working
- [ ] All dependencies are installed (`npm install` completed successfully)
- [ ] Environment file (`.env.local`) is created
- [ ] Data files are in place (`public/excel/` directory)
- [ ] Development server starts without errors
- [ ] Website loads at `http://localhost:3000`
- [ ] Language switching works
- [ ] Admin panel opens and functions
- [ ] No critical errors in browser console

## 🎯 Next Steps

After successful installation:

1. **Read the Quick Start Guide** (`docs/02-QUICK-START.md`)
2. **Understand the Project Overview** (`docs/03-PROJECT-OVERVIEW.md`)
3. **Start Development** (`docs/04-DEVELOPMENT-GUIDE.md`)

---

**Last Updated**: December 2024  
**Version**: 1.0.0
