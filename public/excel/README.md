# Excel Content Management System

This directory contains Excel files that allow the site manager to update website content without touching the code.

## Files Structure

### 1. `translations.xlsx` - Language Management
This file manages all text content for both German (de) and Farsi (fa) languages.

**Columns:**
- `key`: The translation key (e.g., "nav.home", "hero.title")
- `de`: German translation
- `fa`: Farsi translation  
- `category`: Content category (navigation, hero, highlights, etc.)

**Example:**
| key | de | fa | category |
|-----|----|----|----------| 
| nav.home | Startseite | صفحه اصلی | navigation |
| hero.title | Bahram Autohaus | بهرام اتوهاوس | hero |

### 2. `cars.xlsx` - Car Data Management
This file manages all car information displayed on the website.

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
   - The website will automatically reflect changes

2. **Update Car Data:**
   - Open `cars.xlsx`
   - Add new cars by adding new rows
   - Update existing car information
   - Remove cars by deleting rows
   - Save the file
   - The website will automatically reflect changes

### For Developer:

1. **Initial Setup:**
   - Copy template files to create actual Excel files
   - Rename `translations-template.csv` to `translations.xlsx`
   - Rename `cars-template.csv` to `cars.xlsx`

2. **File Format:**
   - Files must be in Excel format (.xlsx)
   - First row must contain headers
   - Data starts from second row

## Technical Details

- The system automatically reads Excel files on page load
- If Excel files are not available, the system falls back to hardcoded constants
- Changes to Excel files require a page refresh to be visible
- The system supports both .xlsx and .csv formats

## Backup

Always keep backup copies of your Excel files before making major changes.

## Support

If you encounter issues with the Excel system, check:
1. File format is correct (.xlsx)
2. Headers are in the first row
3. No empty rows in the middle of data
4. File is saved in the correct location (`/public/excel/`)
