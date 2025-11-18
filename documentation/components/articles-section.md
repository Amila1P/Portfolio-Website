# Articles Section Component Documentation

## Overview
The `ArticlesSection` component displays a list of published articles with links to external platforms (Medium) and includes a GitHub profile link.

## File Location
`components/articles-section.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `ArticlesSection`

#### Data Structure
The component defines a static array of article objects:
```typescript
const articles = [
  {
    title: "From Code to Confidence: Why Building Real-World Projects is the Ultimate Developer Hack",
    excerpt: "Discover why building real-world projects is the ultimate developer hack for gaining confidence and practical skills.",
    date: "Nov 15, 2024",
    tags: ["Development", "Career", "Learning"],
    link: "https://medium.com/@codewaveacademy/from-code-to-confidence-why-building-real-world-projects-is-the-ultimate-developer-hack-3c9ac3f0ef8e",
  },
  // ... more articles
]
```

**Article Object Structure**:
- `title` (string): Article title
- `excerpt` (string): Brief article summary
- `date` (string): Publication date
- `tags` (string[]): Array of topic tags
- `link` (string): URL to the full article

## Functions and Operations

This is a pure presentational component with no functions or state management. All data is statically defined.

## Component Features

### Visual Elements

1. **Left Sidebar (Desktop)**:
   - Section title: "GitHub & Articles"
   - Decorative accent line
   - Descriptive text
   - GitHub profile button with icon
   - Sticky positioning (`sticky top-32`)

2. **Articles List**:
   - Grid layout (2 columns on desktop)
   - Each article card contains:
     - Article title (hover color change)
     - Publication date (right-aligned)
     - Excerpt text (line-clamped to 2 lines)
     - "Read More" button with arrow icon

### Interactive Features

1. **Hover Effects on Article Cards**:
   - Border color changes to accent
   - Shadow appears with accent color tint
   - Title color changes to accent
   - Smooth transitions (300ms duration)

2. **Button Hover Effects**:
   - Background color intensifies on hover
   - Smooth color transitions

3. **Layout Features**:
   - Sticky sidebar on desktop
   - Responsive grid layout
   - Proper spacing and alignment

## Layout Structure

### Grid Layout
- **Mobile**: Single column
- **Desktop (lg)**: Three columns (`lg:grid-cols-3`)
  - Sidebar: 1 column (`lg:col-span-1`)
  - Articles: 2 columns (`lg:col-span-2`)

### Card Structure
- Background: `bg-background`
- Border: `border border-border`
- Padding: `p-6`
- Border radius: `rounded-xl`
- Full width with flex layout

### Article Header
- Flex layout with space-between
- Title on left, date on right
- Date: small text, muted foreground, no-wrap

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for hover states and buttons
- Muted foreground for dates and excerpts

### Typography
- Article title: lg, semibold, foreground color (accent on hover)
- Date: xs, muted foreground, no-wrap
- Excerpt: muted foreground, line-clamped to 2 lines

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-6`
- Gap between articles: `space-y-6`
- Sidebar spacing: `space-y-6`

## Usage Example
```tsx
import { ArticlesSection } from "@/components/articles-section"

export default function Page() {
  return (
    <main>
      <ArticlesSection />
      {/* Other sections */}
    </main>
  )
}
```

## Responsive Behavior
- Sidebar and articles stack vertically on mobile
- Sidebar becomes sticky on desktop
- Articles list adapts to available space
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
- External links include `target="_blank"` and `rel="noopener noreferrer"`
- Button text is clear and descriptive
- Proper link text ("Read More" is descriptive)

## Data Management

### Adding New Articles
To add new articles, add objects to the `articles` array:
```typescript
{
  title: "Article Title",
  excerpt: "Brief article summary or excerpt",
  date: "MMM DD, YYYY",
  tags: ["Tag1", "Tag2", "Tag3"],
  link: "https://article-url.com",
}
```

### Updating Article Links
Modify the `link` property in the article object:
```typescript
{
  title: "Article Title",
  link: "https://new-article-url.com",
}
```

## External Links
All article links open in new tabs with proper security attributes:
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Security best practice

## GitHub Integration
- GitHub button links to: `https://github.com/Amila1P`
- Includes GitHub icon (SVG)
- Styled with accent colors
- Hover effects for better UX

## Future Enhancements
- Add article categories/filters
- Implement search functionality
- Add reading time estimates
- Include article thumbnails/images
- Add tag filtering
- Implement pagination for many articles
- Add article preview on hover
- Include social sharing buttons

