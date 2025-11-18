# About Section Component Documentation

## Overview
The `AboutSection` component displays personal information, background, and key skills/strengths with scroll-triggered animations.

## File Location
`components/about-section.tsx`

## Dependencies
- React (`useState`, `useEffect`, `useRef`)

## Component Structure

### Main Component: `AboutSection`

#### State Management
- **`isVisible`** (boolean): Controls visibility of animated elements
  - Initial value: `false`
  - Set to `true` when section enters viewport

#### Refs
- **`ref`** (RefObject<HTMLDivElement>): Reference to the container element for Intersection Observer

## Functions and Operations

### 1. Intersection Observer (`useEffect`)

**Purpose**: Detects when the section enters the viewport and triggers animations

**Operation**:
1. Creates an `IntersectionObserver` instance
2. Observes the referenced container element
3. When element enters viewport (30% threshold), sets `isVisible` to `true`
4. Unobserves the element after first trigger
5. Cleans up observer on component unmount

**Configuration**:
- **Threshold**: `0.3` (triggers when 30% of element is visible)
- **Callback**: Sets `isVisible` state when intersecting

**Cleanup**: Disconnects observer on component unmount

## Component Features

### Content Sections

1. **Header Section**:
   - Title: "About Me"
   - Decorative accent line
   - Fade-in animation

2. **Description Text**:
   - Two paragraphs describing background
   - Focus on education, interests, and journey
   - Muted foreground color for readability

3. **Skills/Strengths List**:
   - Three key strengths with icons:
     - Full-Stack Development
     - User-Focused Design
     - Performance Optimization
   - Each item has:
     - Checkmark icon in accent-colored circle
     - Title and description
     - Staggered animation delays (0s, 0.1s, 0.2s)

4. **Profile Image**:
   - Circular profile photo
   - Hover effects with gradient glow
   - Border animation on hover
   - Responsive sizing

### Animation Features

1. **Scroll-Triggered Animations**:
   - Skills list items animate when section becomes visible
   - Uses `zoom-in` class when `isVisible` is true
   - Staggered delays create cascading effect

2. **Hover Effects**:
   - Profile image border color change
   - Gradient glow effect
   - Smooth transitions

3. **CSS Classes**:
   - `fade-in-up`: Entry animation
   - `zoom-in`: Scale animation for skills
   - `hover-zoom`: Hover scale effect
   - `opacity-0`: Initial hidden state

## Layout Structure

### Grid Layout
- **Mobile**: Single column
- **Desktop (lg)**: Two columns (text left, image right)
- Responsive gap spacing

### Responsive Behavior
- Text content adapts to screen size
- Image scales appropriately
- Padding adjusts for mobile/desktop

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors: `foreground`, `muted-foreground`, `accent`
- Consistent with overall design system

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Gap between grid items: `gap-12`

## Usage Example
```tsx
import { AboutSection } from "@/components/about-section"

export default function Page() {
  return (
    <main>
      <AboutSection />
      {/* Other sections */}
    </main>
  )
}
```

## Performance Considerations
- Intersection Observer is efficient for scroll detection
- Observer cleanup prevents memory leaks
- CSS animations for smooth performance
- Optimized image loading

## Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (should be added)
- Keyboard navigation support

