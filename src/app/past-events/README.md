# Event Images for Past Events Page

This document provides guidance on adding images to past events for optimal display on the Past Events page.

## Image Requirements

### Image Dimensions

- **Width**: 400-450px
- **Height**: 300-340px
- **Aspect Ratio**: 4:3 (recommended)
- **File Size**: 60-80KB (maximum 100KB)
- **Format**: JPEG (preferred) or WebP

### File Naming Convention

Each event image should be named according to the event ID:

```
/public/images/events/[event-id].jpg
```

For example, if your event has an ID of `tactile-sculpture-2023`, the image path should be:

```
/public/images/events/tactile-sculpture-2023.jpg
```

## Image Optimization

Before adding images to the project, optimize them using one of these tools:

- [Squoosh](https://squoosh.app/) - Browser-based image optimizer
- [TinyJPG](https://tinyjpg.com/) - Simple web service for JPEG compression
- [ImageOptim](https://imageoptim.com/) - Desktop app for batch processing

## How Images Appear

The `EventWithImage` component will:

- Display images to the left or right of event details on desktop and tablet
- Stack images below event information on mobile screens
- Alternate left/right positioning automatically
- Apply a subtle hover effect (slight zoom)
- Use proper image optimization through Next.js

## Accessibility Considerations

For each image, provide descriptive alt text that:

- Describes the visual content of the image
- Mentions the event name
- Includes relevant context

Example:

```
Visitors experiencing tactile sculptures at the Summer Touch Exhibition
```

## Troubleshooting Missing Images

If an image is missing, the component will attempt to display the image but may show an error. Ensure all referenced images exist in the correct location.

You can run this command to check which event IDs you need to create images for:

```
npm run dev
```

Then check the browser console for any missing image errors.
