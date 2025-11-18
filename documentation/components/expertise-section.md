# Expertise Section Component Documentation

## Overview
The `ExpertiseSection` component displays technical skills organized by categories in a card-based grid layout.

## File Location
`components/expertise-section.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `ExpertiseSection`

#### Data Structure
The component defines a static array of skill categories:
```typescript
const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "GraphQL"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "AWS", "GitHub"],
  },
  {
    category: "Design & UX",
    items: ["Figma", "UI/UX Design", "Responsive Design", "Web Accessibility", "Design Systems"],
  },
]
```

## Functions and Operations

This is a pure presentational component with no functions or state management. All data is statically defined.

## Component Features

### Visual Elements

1. **Header Section**:
   - Title: "My Expertise"
   - Decorative accent line
   - Descriptive subtitle
   - Centered alignment

2. **Skill Category Cards**:
   - Four cards in a responsive grid
   - Each card contains:
     - Category title (xl, semibold)
     - List of skill items
     - Each item has a bullet point (accent-colored dot)

### Interactive Features

1. **Hover Effects**:
   - Border color changes to accent on hover
   - Smooth transition (300ms duration)
   - Maintains card structure

2. **Visual Indicators**:
   - Accent-colored dots for each skill item
   - Consistent spacing between items
   - Clean, organized appearance

## Layout Structure

### Grid Layout
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet (md)**: Two columns (`md:grid-cols-2`)
- **Desktop (lg)**: Four columns (`lg:grid-cols-4`)
- Gap spacing: `gap-8`

### Card Structure
- Background: `bg-background`
- Border: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-xl`
- Full height with flex layout

### List Structure
- Unordered list with spacing: `space-y-3`
- Each item: flex layout with gap
- Bullet point: `w-2 h-2 rounded-full bg-accent`
- Text: muted foreground color

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for bullets and hover states
- Muted foreground for skill items

### Typography
- Category title: xl, semibold, foreground color
- Skill items: muted foreground, regular weight

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-8`
- Gap between list items: `gap-2` (within items), `space-y-3` (between items)

## Usage Example
```tsx
import { ExpertiseSection } from "@/components/expertise-section"

export default function Page() {
  return (
    <main>
      <ExpertiseSection />
      {/* Other sections */}
    </main>
  )
}
```

## Responsive Behavior
- Cards stack vertically on mobile
- Two columns on tablets
- Four columns on desktop
- Consistent spacing across breakpoints

## Performance Considerations
- Pure component (no state or effects)
- Efficient rendering
- No unnecessary re-renders
- Static data structure

## Accessibility
- Semantic HTML structure (`<ul>`, `<li>`)
- Proper heading hierarchy
- Clear visual hierarchy
- Color contrast meets accessibility standards

## Data Management

### Adding New Skills
To add new skills, modify the `skills` array:
```typescript
{
  category: "New Category",
  items: ["Skill 1", "Skill 2", "Skill 3"],
}
```

### Adding Items to Existing Categories
Add items to the `items` array of the desired category:
```typescript
{
  category: "Frontend",
  items: ["React", "Next.js", "New Skill"],
}
```

