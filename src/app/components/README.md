# Page Banner Component

The `PageBanner` component provides a consistent, responsive banner element for all pages in the Fully Tactile Art SF website.

## Usage

```jsx
import PageBanner from '../components/PageBanner';

export default function YourPage() {
  return (
    <>
      <PageBanner
        imagePath='/images/banners/your-page-banner.jpg'
        imageAlt='Description of the banner image for accessibility'
        title='Your Page Title'
        subtitle='Optional subtitle for additional context'
        align='center' // 'left', 'center' (default), or 'right'
        overlayOpacity={0.5} // 0-1, default is 0.5
      />

      {/* Rest of your page content */}
    </>
  );
}
```

## Props

| Prop           | Type                      | Description                                     | Required |
| -------------- | ------------------------- | ----------------------------------------------- | -------- |
| imagePath      | string                    | Path to banner image (from `/public` directory) | Yes      |
| imageAlt       | string                    | Alt text for the image (for accessibility)      | Yes      |
| title          | string                    | Main heading displayed on the banner            | Yes      |
| subtitle       | string                    | Optional subheading displayed below title       | No       |
| align          | 'left', 'center', 'right' | Text alignment (default: 'center')              | No       |
| overlayOpacity | number (0-1)              | Opacity of the dark overlay (default: 0.5)      | No       |

## Banner Images

### Image Placement

Place all banner images in the `/public/images/banners/` directory:

```
/public
  /images
    /banners
      home-banner.jpg
      about-banner.jpg
      testimonials-banner.jpg
      past-events-banner.jpg
      ...
```

### Image Specifications

- **Dimensions**: 1920 × 500 pixels
- **Format**: JPEG (preferred for photos) or PNG (if transparency is needed)
- **File size**: Aim for 150-300KB per image (optimize before adding)
- **Focal point**: Center of the image (visible content should be in the middle)

### Optimization Tools

Before adding images to the project, optimize them with one of these tools:

- [Squoosh](https://squoosh.app/) - Browser-based image optimizer
- [TinyJPG](https://tinyjpg.com/) - Simple web service for JPEG compression
- [ImageOptim](https://imageoptim.com/) - Desktop app for batch processing

## Responsive Behavior

The banner automatically adjusts its height based on screen size:

- Mobile: 200px height
- Small tablets: 250px height
- Tablets: 300px height
- Laptops: 350px height
- Desktops: 400px height

The text size and padding also adjust accordingly.
