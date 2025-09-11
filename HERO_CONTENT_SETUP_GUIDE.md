# Hero Content Setup Guide for Strapi

This guide will help you set up Hero Content management in Strapi for the Bahram Auto project.

## 1. Create Hero Content Type in Strapi

### Step 1: Create Content Type

1. In Strapi admin panel, go to **Content-Type Builder**
2. Click **Create new collection type**
3. Name it `Hero Content` (singular) - Strapi will automatically create `hero-contents` (plural)
4. Click **Continue**

### Step 2: Add Fields

Add the following fields to your Hero Content content type:

#### Basic Information

- **title** (Text, Short text) - Main headline
- **subtitle** (Text, Short text) - Subtitle text
- **description** (Text, Long text) - Description paragraph
- **ctaText** (Text, Short text) - Call-to-action button text
- **videoButtonText** (Text, Short text) - Video button text

#### Media Files

- **backgroundImage** (Media, Single media) - Hero background image
- **video** (Media, Single media) - Introduction video file

#### Statistics

- **stats** (JSON) - Company statistics object with:
  ```json
  {
    "carsSold": 2500,
    "customers": 1800,
    "yearsExperience": 15
  }
  ```

### Step 3: Configure Permissions

1. Go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on **Public** role
3. Under **Hero Content**, enable:
   - `find` (to allow public access to hero content)
   - `findOne` (to allow public access to individual hero content)
4. Click **Save**

## 2. API Endpoints

Your Strapi backend will provide these endpoints:

- `GET /api/hero-contents?populate=backgroundImage,video&sort=createdAt:desc` - Get hero content
- `POST /api/hero-contents` - Create new hero content (requires authentication)
- `PUT /api/hero-contents/:id` - Update hero content (requires authentication)
- `DELETE /api/hero-contents/:id` - Delete hero content (requires authentication)

## 3. Adding Hero Content

### Through Strapi Admin Panel

1. Go to **Content Manager** in Strapi
2. Click **Hero Contents**
3. Click **Create new entry**
4. Fill in the hero content details:
   - **Title**: "Bahram Autohaus"
   - **Subtitle**: "Ihr Premium Partner für Qualitätsfahrzeuge in Deutschland"
   - **Description**: "Seit über 15 Jahren Ihr vertrauensvoller Spezialist für deutsche und europäische Premiumfahrzeuge."
   - **CTA Text**: "Fahrzeuge entdecken"
   - **Video Button Text**: "Video ansehen"
   - **Background Image**: Upload a high-quality hero background image
   - **Video**: Upload your introduction video (MP4 format recommended)
   - **Stats**:
     ```json
     {
       "carsSold": 2500,
       "customers": 1800,
       "yearsExperience": 15
     }
     ```
5. Click **Save**

## 4. Supported Media Formats

### Images

- JPEG (.jpg, .jpeg)
- PNG (.png)
- WebP (.webp)
- GIF (.gif)

### Videos

- MP4 (.mp4) - Recommended
- WebM (.webm)
- MOV (.mov)
- AVI (.avi)

### Image Optimization

Strapi automatically generates different sizes:

- Thumbnail (150x150)
- Small (500x500)
- Medium (750x750)
- Large (1000x1000)

## 5. Frontend Integration

The frontend automatically:

- Fetches hero content from Strapi API
- Falls back to default content if Strapi is unavailable
- Displays dynamic background images and videos
- Shows real-time statistics from the API

## 6. Content Structure

### Hero Content JSON Structure

```json
{
  "id": 1,
  "attributes": {
    "title": "Bahram Autohaus",
    "subtitle": "Ihr Premium Partner für Qualitätsfahrzeuge in Deutschland",
    "description": "Seit über 15 Jahren Ihr vertrauensvoller Spezialist für deutsche und europäische Premiumfahrzeuge.",
    "ctaText": "Fahrzeuge entdecken",
    "videoButtonText": "Video ansehen",
    "backgroundImage": {
      "data": {
        "id": 1,
        "attributes": {
          "url": "/uploads/hero_bg_1234567890.jpg"
        }
      }
    },
    "video": {
      "data": {
        "id": 2,
        "attributes": {
          "url": "/uploads/intro_video_1234567890.mp4"
        }
      }
    },
    "stats": {
      "carsSold": 2500,
      "customers": 1800,
      "yearsExperience": 15
    },
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z",
    "publishedAt": "2024-01-01T00:00:00.000Z"
  }
}
```

## 7. Troubleshooting

### Common Issues

1. **Hero Content Not Loading**
   - Check that the Hero Content content type is created
   - Verify that public permissions are set correctly
   - Ensure at least one hero content entry is published

2. **Images Not Displaying**
   - Check that the background image is uploaded and published
   - Verify image URLs are correct
   - Check browser console for 404 errors

3. **Video Not Playing**
   - Ensure video file is uploaded and published
   - Check video format compatibility
   - Verify video file size (keep under 100MB for web)

4. **Statistics Not Showing**
   - Check that the stats JSON field is properly formatted
   - Verify all required numeric values are present

### Debug Mode

To see detailed error messages:

1. Check browser console for errors
2. Verify Strapi is running: `http://localhost:1337`
3. Test API directly: `http://localhost:1337/api/hero-contents?populate=backgroundImage,video`
4. Check environment variables

## 8. Best Practices

### Content Guidelines

- Use high-quality images (minimum 1920x1080 for background)
- Keep video files optimized for web (under 50MB)
- Use descriptive alt text for accessibility
- Test content on different screen sizes

### Performance Tips

- Optimize images before uploading
- Use WebP format for images when possible
- Compress videos for faster loading
- Consider using CDN for media files

## 9. Future Enhancements

- [ ] Multi-language support for hero content
- [ ] A/B testing for different hero versions
- [ ] Analytics integration for hero engagement
- [ ] Dynamic content based on user preferences
- [ ] Video thumbnail generation
- [ ] Content scheduling and publishing dates
