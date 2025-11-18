# Details Section Component Documentation

## Overview
The `DetailsSection` component displays key statistics and achievements in a visually appealing card-based layout with hover effects.

## File Location
`components/details-section.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `DetailsSection`

#### Data Structure
The component defines a static array of detail items:
```typescript
const details = [
  {
    title: "Years of Experience",
    value: "5+",
    description: "Building modern web applications and solving complex problems",
    icon: "🚀",
  },
  {
    title: "Projects Completed",
    value: "20+",
    description: "From startups to enterprise-level applications",
    icon: "✨",
  },
  {
    title: "Technologies Mastered",
    value: "15+",
    description: "React, Next.js, Node.js, TypeScript, and more",
    icon: "⚡",
  },
  {
    title: "Happy Clients",
    value: "30+",
    description: "Delivered solutions that exceeded expectations",
    icon: "🎯",
  },
]
```

## Functions and Operations

This is a pure presentational component with no functions or state management. All data is statically defined.

## Component Features

### Visual Elements

1. **Background Effects**:
   - Decorative gradient blobs positioned at top-right and bottom-left
   - Blur effect (`blur-3xl`) for depth
   - Low opacity accent colors
   - Absolute positioning behind content

2. **Header Section**:
   - Title: "By The Numbers"
   - Decorative accent line
   - Descriptive subtitle
   - Fade-in animation

3. **Stat Cards**:
   - Four cards in a responsive grid
   - Each card contains:
     - Large emoji icon (5xl size)
     - Prominent value display (2xl/3xl, accent color)
     - Title text (semibold)
     - Description text (small, muted)

### Interactive Features

1. **Hover Effects**:
   - Border color changes to accent
   - Shadow appears with accent color tint
   - Scale transformation (105%)
   - Icon scales up (110%)
   - Smooth transitions (300ms duration)

2. **Animations**:
   - Entry animation: `fade-in-up`
   - Staggered delays: `0s, 0.1s, 0.2s, 0.3s`
   - Hover scale: `hover:scale-105`
   - Icon hover scale: `group-hover:scale-110`

## Layout Structure

### Grid Layout
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet (md)**: Two columns (`md:grid-cols-2`)
- **Desktop (lg)**: Four columns (`lg:grid-cols-4`)
- Gap spacing: `gap-6`

### Card Structure
- Background: `bg-background`
- Border: `border border-border`
- Padding: `p-8`
- Border radius: `rounded-2xl`
- Full height with flex layout

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for values and hover states
- Muted foreground for descriptions

### Typography
- Value: Large, bold, accent color
- Title: Semibold, foreground color
- Description: Small, muted foreground

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-8`
- Gap between cards: `gap-6`

## Usage Example
```tsx
import { DetailsSection } from "@/components/details-section"

export default function Page() {
  return (
    <main>
      <DetailsSection />
      {/* Other sections */}
    </main>
  )
}
```

## Responsive Behavior
- Cards stack vertically on mobile
- Two columns on tablets
- Four columns on desktop
- Text sizes adapt to screen size

## Performance Considerations
- Pure component (no state or effects)
- CSS animations for smooth performance
- Efficient rendering
- No unnecessary re-renders

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Hover states work with keyboard navigation
- Color contrast meets accessibility standards

