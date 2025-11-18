# Photography Section Component Documentation

## Overview
The `PhotographySection` component displays links to stock photography platforms where the portfolio owner's photography work is available.

## File Location
`components/photography-section.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `PhotographySection`

#### Data Structure
The component defines a static array of photography platforms:
```typescript
const platforms = [
  {
    name: "Adobe Stock",
    icon: "/assets/images/stock photography icon/Adobe Stock Icon Logo.png",
    url: "https://stock.adobe.com/lk/contributor/212733795/Aura_Pixels",
    description: "Stock photography portfolio",
  },
  {
    name: "Shutterstock",
    icon: "/assets/images/stock photography icon/shutterstock-seeklogo.png",
    url: "https://www.shutterstock.com/g/Pathu_Art",
    description: "Premium stock images",
  },
  {
    name: "Dreamstime",
    icon: "/assets/images/stock photography icon/dreamstime-seeklogo.png",
    url: "https://www.dreamstime.com/pathummalaka76_info",
    description: "Royalty-free stock photos",
  },
]
```

**Platform Object Structure**:
- `name` (string): Platform name
- `icon` (string): Path to platform logo/icon
- `url` (string): Link to portfolio on the platform
- `description` (string): Brief description of the platform

## Functions and Operations

This is a pure presentational component with no functions or state management. All data is statically defined.

## Component Features

### Visual Elements

1. **Header Section**:
   - Title: "Stock Photography"
   - Descriptive subtitle
   - Fade-in animation
   - Centered alignment

2. **Platform Cards**:
   - Grid layout with responsive columns
   - Each card contains:
     - Platform icon/logo in circular container
     - Platform name
     - Description text
     - "View" button with arrow icon

### Interactive Features

1. **Hover Effects**:
   - Border color changes to accent
   - Shadow appears with accent color tint
   - Icon container background intensifies
   - Icon scales up (110%)
   - Platform name color changes to accent
   - Smooth transitions (300ms duration)

2. **Animations**:
   - Entry animation: `fade-in-up`
   - Staggered delays: `0s, 0.1s, 0.2s`
   - Icon hover scale: `group-hover:scale-110`
   - Icon container hover: `group-hover:bg-accent/20`

## Layout Structure

### Grid Layout
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet (md)**: Three columns (`md:grid-cols-3`)
- Gap spacing: `gap-6`

### Card Structure
- Background: `bg-card`
- Border: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-xl`
- Full height with flex layout
- Centered content alignment
- Text center alignment

### Icon Container
- Circular container: `w-16 h-16 rounded-full`
- Background: `bg-accent/10`
- Flex centering for icon
- Padding: `p-2`
- Hover background: `group-hover:bg-accent/20`

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for hover states and buttons
- Muted foreground for descriptions

### Typography
- Platform name: lg, semibold, foreground color (accent on hover)
- Description: sm, muted foreground

### Spacing
- Section padding: `py-16 sm:py-24`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Icon margin bottom: `mb-4`
- Description margin bottom: `mb-4`

## Usage Example
```tsx
import { PhotographySection } from "@/components/photography-section"

export default function Page() {
  return (
    <main>
      <PhotographySection />
      {/* Other sections */}
    </main>
  )
}
```

## Responsive Behavior
- Cards stack vertically on mobile
- Three columns on tablets and desktop
- Consistent spacing across breakpoints
- Centered content alignment

## Performance Considerations
- Pure component (no state or effects)
- Efficient rendering
- No unnecessary re-renders
- Static data structure
- Image optimization recommended for icons

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Links have proper href attributes
- External links include `target="_blank"` and `rel="noopener noreferrer"`
- Button text is clear and descriptive
- Icons should have alt text (to be added)

## Data Management

### Adding New Platforms
To add new photography platforms, add objects to the `platforms` array:
```typescript
{
  name: "Platform Name",
  icon: "/path/to/icon.png",
  url: "https://platform-url.com/portfolio",
  description: "Platform description",
}
```

### Updating Platform Links
Modify the `url` property in the platform object:
```typescript
{
  name: "Adobe Stock",
  url: "https://new-portfolio-url.com",
}
```

## External Links
All platform links open in new tabs with proper security attributes:
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Security best practice

## Future Enhancements
- Add platform statistics (number of photos, downloads, etc.)
- Include featured images from each platform
- Add filtering or search functionality
- Include platform ratings or reviews
- Add portfolio preview images

