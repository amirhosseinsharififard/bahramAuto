# Strapi Setup Guide for Bahram Auto

This guide will help you set up Strapi backend for managing cars and images in your Bahram Auto project.

## 1. Strapi Backend Setup

### Install and Start Strapi

1. Navigate to the Strapi backend directory:

```bash
cd ../bahram-auto-backend
```

2. Start Strapi in development mode:

```bash
npm run develop
```

3. Open your browser and go to `http://localhost:1337/admin`

4. Create your admin account (first time only)

## 2. Create Car Content Type

### Step 1: Create Content Type

1. In Strapi admin panel, go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it `Car` (singular) - Strapi will automatically create `cars` (plural)
4. Click **Continue**

### Step 2: Add Fields

Add the following fields to your Car content type:

#### Basic Information

- **name** (Text, Short text)
- **brand** (Text, Short text)
- **model** (Text, Short text)
- **year** (Number, Integer)
- **price** (Number, Decimal)
- **mileage** (Number, Integer)
- **fuelType** (Enumeration)
  - Values: `gasoline`, `diesel`, `electric`, `hybrid`
- **transmission** (Enumeration)
  - Values: `automatic`, `manual`, `semi-automatic`
- **engineSize** (Text, Short text)
- **color** (Text, Short text)
- **description** (Text, Long text)

#### Features

- **features** (JSON)
  - This will store an array of feature strings

#### Images

- **images** (Media, Multiple media)
  - Allow multiple images per car

### Step 3: Configure Permissions

1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on **Public** role
3. Under **Car**, enable:
   - `find` (to allow public access to car listings)
   - `findOne` (to allow public access to individual cars)
4. Click **Save**

### Step 4: Create API Token

1. Go to **Settings** > **API Tokens**
2. Click **Create new API Token**
3. Name: `Frontend Access`
4. Description: `Token for frontend application`
5. Token duration: `Unlimited`
6. Token type: `Read-only` (for now)
7. Click **Save**
8. **Copy the generated token** - you'll need it for the frontend

## 3. Frontend Configuration

### Step 1: Environment Variables

Create a `.env.local` file in your frontend project root:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token_here
```

Replace `your_api_token_here` with the token you copied from Strapi.

### Step 2: Test the Connection

1. Start your frontend development server:

```bash
npm run dev
```

2. Open the admin panel in your frontend
3. Switch to the "Car Management (Strapi)" tab
4. You should see the car management interface

## 4. Adding Cars

### Through Strapi Admin Panel

1. Go to **Content Manager** in Strapi
2. Click **Cars**
3. Click **Create new entry**
4. Fill in the car details
5. Upload images in the **images** field
6. Click **Save**

### Through Frontend Admin Panel

1. Open your frontend admin panel
2. Switch to "Car Management (Strapi)" tab
3. Click "Add New Car"
4. Fill in the form
5. Select multiple images
6. Click "Add Car"

## 5. Image Management

### Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)

### Image Optimization

Strapi automatically generates different sizes:

- Thumbnail (150x150)
- Small (500x500)
- Medium (750x750)
- Large (1000x1000)

### Multiple Images

Each car can have multiple images. The first image will be used as the main/featured image.

## 6. API Endpoints

Your Strapi backend will provide these endpoints:

- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get single car
- `POST /api/cars` - Create new car (requires authentication)
- `PUT /api/cars/:id` - Update car (requires authentication)
- `DELETE /api/cars/:id` - Delete car (requires authentication)
- `POST /api/upload` - Upload images (requires authentication)

## 7. Troubleshooting

### Common Issues

1. **CORS Error**
   - Make sure Strapi is running on `http://localhost:1337`
   - Check that your frontend is using the correct Strapi URL

2. **Authentication Error**
   - Verify your API token is correct
   - Make sure the token has the right permissions

3. **Images Not Loading**
   - Check that the image URLs are correct
   - Verify that the images are properly uploaded to Strapi

4. **Content Type Not Found**
   - Make sure you created the `Car` content type
   - Check that the content type name matches exactly

### Debug Mode

To see detailed error messages, check the browser console and Strapi logs.

## 8. Production Deployment

### Strapi Backend

1. Set up a production database (PostgreSQL recommended)
2. Configure environment variables for production
3. Build and deploy Strapi to your server

### Frontend

1. Update the `NEXT_PUBLIC_STRAPI_URL` to your production Strapi URL
2. Update the API token for production
3. Deploy your Next.js application

## 9. Security Considerations

1. **API Tokens**: Use different tokens for different environments
2. **Permissions**: Regularly review and update user permissions
3. **CORS**: Configure CORS properly for production
4. **Rate Limiting**: Consider implementing rate limiting for API endpoints

## 10. Next Steps

Once Strapi is set up, you can:

1. Add more content types (e.g., categories, brands)
2. Implement user authentication
3. Add custom API endpoints
4. Set up webhooks for real-time updates
5. Implement search functionality
6. Add image optimization and CDN integration
