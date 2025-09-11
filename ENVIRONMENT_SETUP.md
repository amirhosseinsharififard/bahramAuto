# Environment Setup Guide

## Strapi Backend Configuration

### 1. Create Environment File

Create a `.env.local` file in the root directory of your project:

```bash
# Strapi Configuration
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_STRAPI_API_TOKEN=

# Development Settings
NODE_ENV=development
```

### 2. Start Strapi Backend

Make sure your Strapi backend is running:

```bash
# Navigate to your Strapi backend directory
cd ../bahram-auto-backend

# Install dependencies (if not already done)
npm install

# Start Strapi development server
npm run develop
```

The Strapi admin panel should be available at: `http://localhost:1337/admin`

### 3. Create Content Types in Strapi

#### Car Content Type

1. Go to **Content-Type Builder**
2. Create **Car** content type with these fields:
   - `name` (Text)
   - `brand` (Text)
   - `model` (Text)
   - `year` (Number)
   - `price` (Number)
   - `mileage` (Number)
   - `fuelType` (Text)
   - `transmission` (Text)
   - `engineSize` (Text)
   - `color` (Text)
   - `description` (Long text)
   - `features` (JSON)
   - `images` (Media, Multiple media)

#### Hero Content Type

1. Go to **Content-Type Builder**
2. Create **Hero Content** content type with these fields:
   - `title` (Text)
   - `subtitle` (Text)
   - `description` (Long text)
   - `ctaText` (Text)
   - `videoButtonText` (Text)
   - `backgroundImage` (Media, Single media)
   - `video` (Media, Single media)
   - `stats` (JSON)

### 4. Set Permissions

1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on **Public** role
3. Enable permissions for:
   - **Car**: `find`, `findOne`
   - **Hero Content**: `find`, `findOne`

### 5. Test Connection

Once Strapi is running and configured:

1. Visit `http://localhost:1337/api/cars` - should return empty array `[]`
2. Visit `http://localhost:1337/api/hero-contents` - should return empty array `[]`

### 6. Troubleshooting

#### Strapi Not Running

- Check if Strapi is running on port 1337
- Verify no other service is using port 1337
- Check Strapi logs for errors

#### Network Errors

- Verify `NEXT_PUBLIC_STRAPI_URL` in `.env.local`
- Check if Strapi is accessible from browser
- Ensure CORS is configured in Strapi (should be automatic in development)

#### Content Type Issues

- Make sure content types are published
- Verify field names match the frontend interface
- Check that permissions are set correctly

### 7. Development Workflow

1. **Start Strapi**: `npm run develop` in backend directory
2. **Start Frontend**: `npm run dev` in frontend directory
3. **Add Content**: Use Strapi admin panel to add cars and hero content
4. **Test Frontend**: Frontend will automatically use Strapi data when available

### 8. Fallback Behavior

The frontend is designed to work even without Strapi:

- If Strapi is not running, it will use fallback data
- If Strapi is running but has no content, it will use fallback data
- If Strapi has content, it will use that data

This ensures the frontend always works, regardless of backend status.
