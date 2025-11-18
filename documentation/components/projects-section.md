# Projects Section Component Documentation

## Overview
The `ProjectsSection` component displays a grid of featured projects with descriptions, tags, and links.

## File Location
`components/projects-section.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `ProjectsSection`

#### Data Structure
The component defines a static array of project objects:
```typescript
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["Next.js", "React", "TypeScript", "Stripe", "PostgreSQL"],
    link: "#",
  },
  // ... more projects
]
```

**Project Object Structure**:
- `title` (string): Project name
- `description` (string): Brief project description
- `tags` (string[]): Array of technology tags
- `link` (string): URL to project (currently placeholder "#")

## Functions and Operations

This is a pure presentational component with no functions or state management. All data is statically defined.

## Component Features

### Visual Elements

1. **Header Section**:
   - Title: "Featured Projects"
   - Decorative accent line
   - Descriptive subtitle
   - Fade-in animation

2. **Project Cards**:
   - Grid layout with responsive columns
   - Each card contains:
     - Project title (hover color change)
     - Description text (line-clamped to 2 lines)
     - Technology tags (badge-style)
     - "View Project" link (appears on hover)

### Interactive Features

1. **Hover Effects**:
   - Border color changes to accent
   - Shadow appears with accent color tint
   - Title color changes to accent
   - "View Project" link fades in
   - Arrow icon appears
   - Smooth transitions (300ms duration)

2. **Animations**:
   - Entry animation: `fade-in-up`
   - Staggered delays: `0s, 0.05s, 0.1s, 0.15s, 0.2s, 0.25s`
   - Hover transitions for all interactive elements

## Layout Structure

### Grid Layout
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet (md)**: Two columns (`md:grid-cols-2`)
- Gap spacing: `gap-6`

### Card Structure
- Background: `bg-card`
- Border: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-xl`
- Full height with flex layout
- Cursor pointer for clickability

### Tag Display
- Flex wrap layout
- Gap spacing: `gap-2`
- Badge style: `px-3 py-1 rounded-full`
- Background: `bg-accent/10`
- Text color: `text-accent`
- Font: `text-xs font-medium`

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for tags, hover states, and links
- Muted foreground for descriptions

### Typography
- Title: xl, semibold, foreground color (accent on hover)
- Description: muted foreground, line-clamped
- Tags: xs, medium weight, accent color

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-6`
- Gap between cards: `gap-6`
- Gap between tags: `gap-2`

## Usage Example
```tsx
import { ProjectsSection } from "@/components/projects-section"

export default function Page() {
  return (
    <main>
      <ProjectsSection />
      {/* Other sections */}
    </main>
  )
}
```

## Responsive Behavior
- Cards stack vertically on mobile
- Two columns on tablets and desktop
- Text sizes adapt to screen size
- Consistent spacing across breakpoints

## Performance Considerations
- Pure component (no state or effects)
- Efficient rendering
- No unnecessary re-renders
- Static data structure

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Links have proper href attributes
- Hover states work with keyboard navigation
- External links should have `target="_blank"` and `rel="noopener noreferrer"` (to be added)

## Data Management

### Adding New Projects
To add new projects, add objects to the `projects` array:
```typescript
{
  title: "Project Name",
  description: "Project description",
  tags: ["Tag1", "Tag2", "Tag3"],
  link: "https://project-url.com",
}
```

### Updating Project Links
Replace the placeholder `"#"` with actual project URLs:
```typescript
{
  title: "E-Commerce Platform",
  link: "https://ecommerce-project.com",
}
```

## Future Enhancements
- Add project images/thumbnails
- Implement filtering by tags
- Add project categories
- Include project status (completed, in progress, etc.)
- Add date information
- Implement search functionality

