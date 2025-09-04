# Excel Content Management System

## Overview

This system allows the site manager to update website content through Excel files without touching the code. The website automatically reads and displays content from these Excel files.

## Files Structure

### 1. Excel Files Location

All Excel files are stored in: `/public/excel/`

### 2. Required Files

#### `translations.xlsx` - Language Management

Manages all text content for German (de) and Farsi (fa) languages.

**Columns:**

- `key`: Translation key (e.g., "nav.home", "hero.title")
- `de`: German translation
- `fa`: Farsi translation
- `category`: Content category (navigation, hero, highlights, etc.)

**Example:**
| key | de | fa | category |
|-----|----|----|----------|
| nav.home | Startseite | صفحه اصلی | navigation |
| hero.title | Bahram Autohaus | بهرام اتوهاوس | hero |

#### `cars.xlsx` - Car Data Management

Manages all car information displayed on the website.

**Columns:**

- `id`: Unique car ID (number)
- `brand`: Car brand (e.g., BMW, Mercedes)
- `model`: Car model (e.g., X5 M50d, C63 AMG)
- `year`: Manufacturing year (number)
- `price`: Car price (string, e.g., "78,900")
- `financing`: Monthly financing amount (string, e.g., "499")
- `mileage`: Car mileage (string, e.g., "15,000")
- `fuel`: Fuel type (e.g., Diesel, Benzin, Elektro)
- `transmission`: Transmission type (e.g., Automatik, PDK)
- `image`: Image path (e.g., "/images/cars/bmw-x5.jpg")
- `features`: Comma-separated features (e.g., "M-Paket, Panorama, HUD")
- `category`: Car category (suv, sportwagen, limousine, kombi)
- `description`: Car description text

## How to Use

### For Site Manager:

1. **Update Translations:**
   - Open `translations.xlsx`
   - Modify German or Farsi text in respective columns
   - Save the file
   - Click "Refresh Data" in the admin panel
   - The website will automatically reflect changes

2. **Update Car Data:**
   - Open `cars.xlsx`
   - Add new cars by adding new rows
   - Update existing car information
   - Remove cars by deleting rows
   - Save the file
   - Click "Refresh Data" in the admin panel
   - The website will automatically reflect changes

### For Developer:

1. **Admin Panel Access:**
   - In development mode, a settings button appears in bottom-right corner
   - Click to open the admin panel
   - Use "Refresh Data" to reload Excel files

2. **Fallback System:**
   - If Excel files are not available, the system falls back to hardcoded constants
   - This ensures the website always works

## Technical Implementation

### Files Created:

- `src/utils/excelReader.ts` - Excel file reading utilities
- `src/hooks/useExcelData.ts` - React hook for Excel data management
- `src/components/AdminPanel.tsx` - Admin panel component
- `public/excel/translations.xlsx` - Translation data file
- `public/excel/cars.xlsx` - Car data file

### Key Features:

- **Automatic Loading**: Excel files are read automatically on page load
- **Error Handling**: Graceful fallback to default data if Excel files are missing
- **Loading States**: Shows loading indicator while reading Excel files
- **Error Notifications**: Displays errors if Excel files cannot be read
- **Admin Panel**: Easy access to refresh data and view instructions

### Dependencies:

- `xlsx` library for reading Excel files
- React hooks for state management
- TypeScript for type safety

## File Format Requirements

1. **Excel Format**: Files must be in .xlsx format
2. **Headers**: First row must contain column headers
3. **Data**: Data starts from second row
4. **No Empty Rows**: Avoid empty rows in the middle of data
5. **Proper Encoding**: Use UTF-8 encoding for special characters

## Backup and Maintenance

1. **Backup**: Always keep backup copies of Excel files
2. **Version Control**: Consider versioning Excel files
3. **Testing**: Test changes in development before production
4. **Monitoring**: Check error notifications if content doesn't update

## Troubleshooting

### Common Issues:

1. **File Not Found**: Ensure Excel files are in `/public/excel/` directory
2. **Format Errors**: Check that files are in .xlsx format
3. **Header Issues**: Verify first row contains proper headers
4. **Data Not Updating**: Click "Refresh Data" in admin panel
5. **Special Characters**: Ensure proper UTF-8 encoding

### Error Messages:

- "Failed to load content data. Using default data." - Excel files not found or corrupted
- "Loading content..." - System is reading Excel files
- Yellow notification - Warning about Excel file issues

## Benefits

1. **No Code Changes**: Update content without touching code
2. **Easy Management**: Use familiar Excel interface
3. **Automatic Updates**: Changes reflect immediately
4. **Fallback Safety**: Website works even if Excel files are missing
5. **Multi-language Support**: Manage both German and Farsi content
6. **Car Management**: Easy addition/removal of cars
7. **Admin Interface**: Built-in management panel

This system provides a complete content management solution that allows non-technical users to update website content through Excel files while maintaining the reliability and performance of the website.
