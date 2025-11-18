# Footer Component Documentation

## Overview
The `Footer` component displays site information, quick links, newsletter subscription, and copyright information at the bottom of the page.

## File Location
`components/footer.tsx`

## Dependencies
- React (no hooks required, pure component)

## Component Structure

### Main Component: `Footer`

#### Data Structures

**Quick Links Array**:
```typescript
const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]
```

**Current Year**:
- Dynamically calculated: `new Date().getFullYear()`
- Updates automatically each year

## Functions and Operations

### 1. Newsletter Form Handler

**Purpose**: Handles newsletter subscription form submission

**Current Implementation**:
- Prevents default form submission
- No actual functionality (placeholder)

**Operation**:
```typescript
onSubmit={(e) => {
  e.preventDefault()
}}
```

**Future Implementation**: Should integrate with email service (e.g., Mailchimp, SendGrid)

## Component Features

### Visual Elements

1. **Brand Section**:
   - Portfolio title/logo
   - Brief description
   - Left column on desktop

2. **Quick Links Section**:
   - Navigation links to main sections
   - Vertical list layout
   - Hover effects
   - Center column on desktop

3. **Newsletter Section**:
   - "Stay Updated" heading
   - Description text
   - Email input field
   - Subscribe button
   - Right column on desktop

4. **Copyright Section**:
   - Copyright notice with dynamic year
   - Footer links (Privacy, Terms, Sitemap)
   - Border separator above

### Interactive Features

1. **Link Hover Effects**:
   - Text color changes to accent
   - Smooth color transitions

2. **Newsletter Form**:
   - Email input with placeholder
   - Subscribe button
   - Hover effects on button

## Layout Structure

### Grid Layout
- **Mobile**: Single column
- **Desktop (md)**: Three columns (`md:grid-cols-3`)
  - Brand: Left column
  - Quick Links: Center column
  - Newsletter: Right column
- Gap spacing: `gap-8`

### Footer Structure
- Border top separator
- Padding: `py-12`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Max width: `max-w-6xl mx-auto`

### Copyright Section
- Border top separator
- Padding top: `pt-8`
- Flex layout: column on mobile, row on desktop
- Space between: `justify-between`
- Gap spacing: `gap-4`

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for hover states
- Muted foreground for descriptions and links

### Typography
- Brand title: lg, bold, accent color
- Section headings: semibold, foreground color
- Links: sm, muted foreground (accent on hover)
- Copyright: sm, muted foreground

### Spacing
- Footer padding: `py-12`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Grid gap: `gap-8`
- List spacing: `space-y-2`
- Copyright section padding: `pt-8`

## Usage Example
```tsx
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      {/* Other sections */}
      <Footer />
    </main>
  )
}
```

## Responsive Behavior
- All sections stack vertically on mobile
- Three columns on desktop
- Copyright section adapts layout
- Consistent spacing across breakpoints

## Performance Considerations
- Pure component (no state or effects)
- Efficient rendering
- No unnecessary re-renders
- Static data structure
- Dynamic year calculation is minimal

## Accessibility
- Semantic HTML structure (`<footer>`, `<nav>`, `<ul>`, `<li>`)
- Proper heading hierarchy
- Links have proper href attributes
- Form has proper labels (to be added)
- Keyboard navigation support

## Newsletter Integration

### Current State
- Form prevents default submission
- No backend integration
- Placeholder functionality

### Future Implementation
To integrate newsletter subscription:

```typescript
const [email, setEmail] = useState("")
const [subscribed, setSubscribed] = useState(false)

const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })
    
    if (response.ok) {
      setSubscribed(true)
      setEmail("")
    }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
  }
}
```

## Footer Links

### Current Links
- Privacy: `#` (placeholder)
- Terms: `#` (placeholder)
- Sitemap: `#` (placeholder)

### Recommended Updates
- Update Privacy link to actual privacy policy page
- Update Terms link to actual terms of service page
- Update Sitemap link to actual sitemap or remove if not needed

## Data Management

### Adding Quick Links
To add new quick links, add objects to the `links` array:
```typescript
{
  label: "Link Name",
  href: "#section-id",
}
```

### Updating Brand Information
Modify the brand section content:
```tsx
<h3 className="text-lg font-bold text-accent mb-2">Portfolio</h3>
<p className="text-muted-foreground text-sm">
  Updated description text.
</p>
```

## Future Enhancements
- Add social media icons/links
- Implement newsletter backend integration
- Add email service integration (Mailchimp, SendGrid)
- Include RSS feed link
- Add site map generation
- Implement footer analytics
- Add language selector (if multilingual)
- Include back-to-top button

