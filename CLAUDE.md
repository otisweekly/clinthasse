# CLAUDE.md - Project Guidelines for Clint Hasse Website

## Image Guidelines

### No Filters on Photos
- **Do NOT apply any CSS filters** to Clint's photography (no grayscale, brightness adjustments, contrast, etc.)
- Display photos exactly as they are - the photography is professional and doesn't need modification

### Prevent Head Cropping
- Always use `objectPosition: "top center"` on portrait images to prevent heads from being cut off
- This applies to Hero section, About section, and any other portrait displays

### Overlays
- Keep dark overlays minimal (20% opacity max) or remove entirely
- Avoid `background: "#0a0a0a"` or similar dark backgrounds over images
- If text readability is needed, use a subtle gradient only at the bottom where text appears

## Image Locations
- All website images are stored in `/public/images/`
- Source images from: `/Users/clinthasse/Desktop/My Website Images 1.31.26/`

## Current Image Mappings
| Section | Image File |
|---------|------------|
| Hero (main) | clint-hasse-portrait.jpg |
| Hero (accent) | clint-rolleiflex.jpg |
| About | clint-hasse-portrait.jpg |
| Work - Portrait | david-eilert.jpg |
| Work - Artisan | steel-guitar-builder.jpg |
| Work - Landscape | chouteaus-landing.jpg |
| Work - Night | macarthur-twilight.jpg |
| Music | drummer-snare.jpg |

## Tech Stack
- Next.js 16 with TypeScript
- Tailwind CSS 4
- Framer Motion for animations
- Custom fonts: PP Eiko (display), PP Neue Montreal (body)

## Development
```bash
npm install
npm run dev
# Runs at http://localhost:3000
```
