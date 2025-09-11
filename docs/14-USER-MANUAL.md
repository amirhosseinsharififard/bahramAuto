# 👥 User Manual - Bahram Autohaus Website

## 📋 Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Website Navigation](#website-navigation)
- [Language Switching](#language-switching)
- [Car Gallery](#car-gallery)
- [Content Management](#content-management)
- [Admin Panel](#admin-panel)
- [Excel File Management](#excel-file-management)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [Contact Support](#contact-support)

## 🚗 Introduction

Welcome to the Bahram Autohaus website management system! This manual is designed for non-technical users who need to manage content on the website without programming knowledge.

### What is Bahram Autohaus?

Bahram Autohaus is a premium car dealership website that showcases vehicles and provides information about services. The website supports two languages:

- **German (DE)** - Primary language for German customers
- **Persian (FA)** - Secondary language for Persian-speaking customers

### Key Features

- 🌐 **Bilingual Support**: Switch between German and Persian
- 🚗 **Car Showcase**: Display and manage vehicle inventory
- 📊 **Easy Content Management**: Update content using Excel files
- 📱 **Mobile Friendly**: Works on all devices
- ⚡ **Fast Loading**: Optimized for speed

## 🚀 Getting Started

### Accessing the Website

1. **Open your web browser** (Chrome, Firefox, Safari, or Edge)
2. **Navigate to the website URL** (provided by your developer)
3. **Wait for the page to load** completely

### First Time Setup

If this is your first time using the system:

1. **Contact your developer** to get access credentials
2. **Learn about the admin panel** (see Admin Panel section)
3. **Understand the content management system** (see Content Management section)

## 🧭 Website Navigation

### Main Menu

The website has a main navigation menu at the top with the following sections:

#### German Menu

- **Startseite** - Home page
- **Fahrzeuge** - Car gallery
- **Service** - Services page
- **Über uns** - About us page
- **Kontakt** - Contact page

#### Persian Menu

- **صفحه اصلی** - Home page
- **خودروها** - Car gallery
- **خدمات** - Services page
- **درباره ما** - About us page
- **تماس** - Contact page

### Language Switcher

In the top-right corner, you'll see language buttons:

- **DE** - Switch to German
- **FA** - Switch to Persian

Click these buttons to change the website language.

### Footer

The footer contains:

- Company information
- Contact details
- Service links
- Legal information

## 🌐 Language Switching

### How to Switch Languages

1. **Look for language buttons** in the top-right corner
2. **Click "DE"** to switch to German
3. **Click "FA"** to switch to Persian
4. **The entire website will change** to the selected language

### What Changes When You Switch Languages

- **All text content** (headings, paragraphs, buttons)
- **Navigation menu** items
- **Form labels** and placeholders
- **Error messages** and notifications
- **Text direction** (Persian uses right-to-left layout)

### Language Preferences

- **Your language choice is remembered** for future visits
- **The website will load** in your preferred language
- **You can change languages** at any time

## 🚗 Car Gallery

### Viewing Cars

1. **Click "Fahrzeuge" (German) or "خودروها" (Persian)** in the main menu
2. **Browse the car gallery** with images and basic information
3. **Use filters** to find specific cars:
   - **Brand filter**: BMW, Mercedes, Audi, etc.
   - **Category filter**: SUV, Limousine, Sportwagen, Kombi
   - **Price range**: Set minimum and maximum price
4. **Click on a car** to see detailed information

### Car Information

Each car displays:

- **High-quality images** (multiple photos)
- **Basic details**: Brand, model, year, price
- **Technical specifications**: Engine, transmission, fuel type
- **Features and options**
- **Contact information** for inquiries

### Search Functionality

1. **Use the search box** at the top of the gallery
2. **Type brand or model name** (e.g., "BMW" or "X5")
3. **Press Enter** or click the search button
4. **Results will filter** to show matching cars

## 📊 Content Management

### Understanding the System

The website uses **Excel files** to manage content. This means you can update the website by editing Excel files, without needing programming knowledge.

### Types of Content

#### 1. Text Content (Translations)

- **File**: `translations-template.csv`
- **Contains**: All text on the website in both languages
- **Examples**: Menu items, headings, descriptions, button text

#### 2. Car Data

- **File**: `cars.xlsx`
- **Contains**: Information about all vehicles
- **Examples**: Brand, model, year, price, images, descriptions

#### 3. Images

- **Location**: `images/cars/` folder
- **Contains**: Photos of vehicles
- **Formats**: JPG, PNG, WebP

### How Content Updates Work

1. **You edit Excel files** with new content
2. **Save the files** to your computer
3. **Upload files** to the website (or ask developer to do it)
4. **Click "Refresh Data"** in the admin panel
5. **Changes appear** on the website immediately

## ⚙️ Admin Panel

### Accessing the Admin Panel

1. **Look for the admin button** (usually in bottom-right corner)
2. **Click the button** to open the admin panel
3. **The panel will show** content management options

### Admin Panel Features

#### Data Management

- **View current data** status
- **Refresh data** from Excel files
- **Check for errors** in data loading
- **View file locations** and status

#### Instructions

- **Step-by-step guides** for common tasks
- **File format requirements**
- **Troubleshooting tips**
- **Contact information** for support

#### Error Handling

- **Display error messages** if something goes wrong
- **Suggest solutions** for common problems
- **Provide contact information** for technical support

### Using the Admin Panel

1. **Open the admin panel**
2. **Read the instructions** carefully
3. **Follow the step-by-step guides**
4. **Use "Refresh Data"** after making changes
5. **Check for error messages**
6. **Contact support** if you encounter problems

## 📊 Excel File Management

### Working with Translation Files

#### File: `translations-template.csv`

This file contains all text content for both languages.

#### File Structure

```
key,de,fa,category
nav.home,Startseite,صفحه اصلی,navigation
hero.title,Bahram Autohaus,بهرام اتوهاوس,hero
```

#### How to Edit

1. **Open the file** in Excel or Google Sheets
2. **Find the text** you want to change
3. **Edit the German text** in the "de" column
4. **Edit the Persian text** in the "fa" column
5. **Save the file** (keep CSV format)

#### Important Notes

- **Don't change the "key" column** - this identifies the text
- **Keep the same format** - don't add extra columns
- **Save as CSV format** - not Excel format
- **Use proper encoding** - UTF-8 for Persian text

### Working with Car Data

#### File: `cars.xlsx`

This file contains information about all vehicles.

#### Required Columns

| Column       | Description        | Example        |
| ------------ | ------------------ | -------------- |
| brand        | Car manufacturer   | BMW            |
| model        | Car model          | X5             |
| year         | Manufacturing year | 2023           |
| price        | Car price          | 45.000 €       |
| mileage      | Kilometers driven  | 25000          |
| fuel         | Fuel type          | Benzin         |
| transmission | Transmission type  | Automatik      |
| category     | Car category       | suv            |
| image        | Image filename     | bmw-x5.jpg     |
| description  | Car description    | Premium SUV... |

#### How to Add a New Car

1. **Open the Excel file**
2. **Add a new row** at the bottom
3. **Fill in all required columns**
4. **Add the car image** to the images folder
5. **Save the file**

#### How to Edit an Existing Car

1. **Find the car** in the Excel file
2. **Edit the information** you want to change
3. **Save the file**

#### How to Remove a Car

1. **Find the car** in the Excel file
2. **Delete the entire row**
3. **Save the file**

### Working with Images

#### Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 800x600 pixels or larger
- **Quality**: High quality, clear images
- **Naming**: Use descriptive names (e.g., bmw-x5-front.jpg)

#### How to Add Images

1. **Take or find** high-quality photos of the car
2. **Resize images** if needed (use image editing software)
3. **Name the files** descriptively
4. **Upload to the images folder** (or ask developer to do it)
5. **Update the Excel file** with the correct filename

#### Image Best Practices

- **Use multiple angles**: front, side, rear, interior
- **Good lighting**: avoid dark or blurry photos
- **Clean cars**: make sure cars are clean and presentable
- **Consistent style**: use similar photo styles for all cars

## 🔧 Common Tasks

### Task 1: Adding a New Car

1. **Take photos** of the car from multiple angles
2. **Resize and optimize** the images
3. **Name the image files** descriptively
4. **Upload images** to the images folder
5. **Open the cars Excel file**
6. **Add a new row** with car information
7. **Save the Excel file**
8. **Open the admin panel**
9. **Click "Refresh Data"**
10. **Check the website** to see the new car

### Task 2: Updating Car Information

1. **Open the cars Excel file**
2. **Find the car** you want to update
3. **Edit the information** (price, description, etc.)
4. **Save the Excel file**
5. **Open the admin panel**
6. **Click "Refresh Data"**
7. **Check the website** to see the changes

### Task 3: Changing Website Text

1. **Open the translations CSV file**
2. **Find the text** you want to change
3. **Edit the German text** in the "de" column
4. **Edit the Persian text** in the "fa" column
5. **Save the CSV file**
6. **Open the admin panel**
7. **Click "Refresh Data"**
8. **Check the website** to see the changes

### Task 4: Adding New Images to Existing Car

1. **Take new photos** of the car
2. **Resize and optimize** the images
3. **Name the image files** descriptively
4. **Upload images** to the images folder
5. **Update the Excel file** with new image filenames
6. **Save the Excel file**
7. **Open the admin panel**
8. **Click "Refresh Data"**
9. **Check the website** to see the new images

### Task 5: Removing a Car

1. **Open the cars Excel file**
2. **Find the car** you want to remove
3. **Delete the entire row**
4. **Save the Excel file**
5. **Open the admin panel**
6. **Click "Refresh Data"**
7. **Check the website** to confirm the car is removed

## 🔍 Troubleshooting

### Problem 1: Changes Not Appearing on Website

**Possible Causes:**

- Excel file not saved properly
- Admin panel not refreshed
- File format issues

**Solutions:**

1. **Check if Excel file is saved**
2. **Open admin panel and click "Refresh Data"**
3. **Wait a few seconds** for changes to load
4. **Refresh the website** in your browser
5. **Check for error messages** in admin panel

### Problem 2: Images Not Showing

**Possible Causes:**

- Image file not uploaded
- Wrong filename in Excel file
- Image file corrupted

**Solutions:**

1. **Check if image file exists** in the images folder
2. **Verify filename** in Excel file matches actual file
3. **Check file format** (JPG, PNG, WebP)
4. **Try opening image** in image viewer to check if it's corrupted
5. **Re-upload image** if necessary

### Problem 3: Text Not Changing

**Possible Causes:**

- Wrong key in CSV file
- CSV format issues
- File not saved properly

**Solutions:**

1. **Check the key** in CSV file (don't change this)
2. **Verify CSV format** (comma-separated values)
3. **Check if file is saved** as CSV format
4. **Open admin panel and refresh data**
5. **Check for error messages**

### Problem 4: Language Switching Not Working

**Possible Causes:**

- Browser cache issues
- Translation file problems
- JavaScript errors

**Solutions:**

1. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
2. **Try different browser**
3. **Check translation file** for errors
4. **Open admin panel and refresh data**
5. **Contact support** if problem persists

### Problem 5: Admin Panel Not Opening

**Possible Causes:**

- JavaScript disabled
- Browser compatibility issues
- Website loading problems

**Solutions:**

1. **Enable JavaScript** in your browser
2. **Try different browser**
3. **Check if website is loading** properly
4. **Refresh the page**
5. **Contact support** if problem persists

## 📞 Contact Support

### When to Contact Support

Contact support if you encounter:

- **Technical errors** you can't resolve
- **File format issues** you don't understand
- **Website not working** properly
- **Need help** with complex tasks
- **Questions** about the system

### How to Contact Support

**Developer**: Amir Hossein sharififard  
**Email**: amirhosseinsharififard@gmail.com  
**Phone**: +989172380487

### Information to Provide

When contacting support, please include:

1. **Description of the problem**
2. **What you were trying to do**
3. **What happened instead**
4. **Screenshots** if applicable
5. **Browser and device** you're using

### Response Time

- **Email**: Usually within 24 hours
- **Phone**: Available during business hours
- **Urgent issues**: Contact by phone for immediate assistance

## 📚 Additional Resources

### Learning Resources

- **Excel Tutorials**: Learn basic Excel skills for better file management
- **Image Editing**: Learn to resize and optimize images
- **Web Browsers**: Understand how to use different browsers effectively

### Best Practices

1. **Always backup** your Excel files before making changes
2. **Test changes** on a small scale first
3. **Keep images optimized** for web use
4. **Use descriptive filenames** for images
5. **Regularly update** car information
6. **Check the website** after making changes

### Tips for Success

1. **Start small**: Begin with simple changes
2. **Ask questions**: Don't hesitate to contact support
3. **Practice regularly**: The more you use the system, the easier it becomes
4. **Keep organized**: Maintain clean Excel files and image folders
5. **Stay updated**: Keep content fresh and relevant

---

**Last Updated**: December 2024  
**Version**: 1.0.0

---

_This manual is designed to help non-technical users manage the Bahram Autohaus website effectively. If you need additional help or have suggestions for improving this manual, please contact support._
