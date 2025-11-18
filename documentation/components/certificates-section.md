# Certificates Section Component Documentation

## Overview
The `CertificatesSection` component displays professional certificates and courses in a grid layout with a toggle feature to show/hide additional certificates.

## File Location
`components/certificates-section.tsx`

## Dependencies
- React (`useState`)

## Component Structure

### Main Component: `CertificatesSection`

#### State Management
- **`showHiddenCerts`** (boolean): Controls visibility of hidden certificates
  - Initial value: `false`
  - Toggled by the "View All Certificates" button

#### Data Structures

**Main Certificates Array**:
```typescript
const certificates = [
  {
    title: "Introduction to Figma",
    issuer: "Simplilearn",
    date: "2025",
    image: "/assets/images/Introduction_to_Figma.jpg",
    link: "https://simpli-web.app.link/e/UrSmgsUPjYb",
  },
  // ... more certificates
]
```

**Hidden Certificates Array**:
```typescript
const hiddenCertificates = [
  {
    title: "Introduction to C++",
    issuer: "Sololearn",
    date: "2025",
    image: "/assets/images/Introduction to C++_certificate.jpg",
    link: "https://www.sololearn.com/en/profile/34095545",
  },
]
```

**Certificate Object Structure**:
- `title` (string): Certificate name
- `issuer` (string): Issuing organization
- `date` (string): Completion date
- `image` (string): Path to certificate image
- `link` (string): URL to certificate verification

## Functions and Operations

### 1. `toggleCertificates()`

**Purpose**: Toggles the visibility of hidden certificates

**Operation**:
- Toggles the `showHiddenCerts` state
- If `false`, sets to `true` (shows hidden certificates)
- If `true`, sets to `false` (hides certificates)

**Usage**: Called when the toggle button is clicked

**Button Text**:
- Shows "View All Certificates" when `showHiddenCerts` is `false`
- Shows "Show Less" when `showHiddenCerts` is `true`

## Component Features

### Visual Elements

1. **Header Section**:
   - Title: "Certificates & Courses"
   - Decorative accent line
   - Descriptive subtitle
   - Fade-in animation

2. **Certificate Cards**:
   - Grid layout with responsive columns
   - Each card contains:
     - Certificate image (hover scale effect)
     - Title (hover color change)
     - Issuer and date information
     - Clickable link to certificate

3. **Toggle Button**:
   - Centered button below main certificates
   - Changes text based on state
   - Hover effects with scale and shadow

### Interactive Features

1. **Hover Effects on Cards**:
   - Border color changes to accent
   - Shadow appears with accent color tint
   - Image scales up (110%)
   - Title color changes to accent
   - Smooth transitions (300ms duration)

2. **Animations**:
   - Entry animation: `fade-in-up`
   - Staggered delays: `0s, 0.1s, 0.2s, 0.3s` for main certificates
   - Image hover scale: `group-hover:scale-110`

3. **Toggle Functionality**:
   - Hidden certificates container shows/hides based on state
   - Uses conditional class: `hidden` when `showHiddenCerts` is `false`
   - Smooth appearance/disappearance

## Layout Structure

### Grid Layout
- **Mobile**: Single column (`grid-cols-1`)
- **Tablet (md)**: Two columns (`md:grid-cols-2`)
- **Desktop (lg)**: Four columns (`lg:grid-cols-4`)
- Gap spacing: `gap-6`

### Card Structure
- Background: `bg-background`
- Border: `border border-border`
- Image container: `h-40` with `object-cover`
- Padding: `p-4`
- Border radius: `rounded-xl`
- Full height with flex layout

### Hidden Certificates Container
- Same grid layout as main certificates
- Conditional rendering based on `showHiddenCerts` state
- Margin top: `mt-6` when visible

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for hover states and links
- Muted foreground for issuer/date information

### Typography
- Title: lg, semibold, foreground color (accent on hover)
- Issuer/Date: sm, muted foreground

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Card padding: `p-4`
- Gap between cards: `gap-6`
- Button margin top: `mt-8`

## Usage Example
```tsx
import { CertificatesSection } from "@/components/certificates-section"

export default function Page() {
  return (
    <main>
      <CertificatesSection />
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
- State management for toggle functionality
- Efficient conditional rendering
- Image optimization recommended
- Smooth CSS transitions

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Links have proper href attributes
- External links include `target="_blank"` and `rel="noopener noreferrer"`
- Button has clear label text
- Images should have alt text (to be added)

## Data Management

### Adding New Certificates
To add certificates to the main display, add objects to the `certificates` array:
```typescript
{
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2025",
  image: "/path/to/image.jpg",
  link: "https://verification-url.com",
}
```

### Adding Hidden Certificates
Add certificates to the `hiddenCertificates` array:
```typescript
{
  title: "Certificate Name",
  issuer: "Issuing Organization",
  date: "2025",
  image: "/path/to/image.jpg",
  link: "https://verification-url.com",
}
```

## Future Enhancements
- Add certificate categories/filters
- Implement search functionality
- Add certificate verification badges
- Include expiration dates (if applicable)
- Add sorting options (by date, issuer, etc.)

