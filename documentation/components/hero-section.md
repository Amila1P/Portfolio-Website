# Hero Section Component Documentation

## Overview
The `HeroSection` component is the main landing section of the portfolio website, featuring an animated typing effect for role titles and a hero image.

## File Location
`components/hero-section.tsx`

## Dependencies
- React (`useState`, `useEffect`)

## Component Structure

### Main Component: `HeroSection`

#### State Management
- **`roleIndex`** (number): Current index in the roles array
  - Initial value: `0`
  - Cycles through available roles

- **`charIndex`** (number): Current character position in the typing animation
  - Initial value: `0`
  - Increments during typing, decrements during deletion

- **`isDeleting`** (boolean): Indicates if the animation is in deletion mode
  - Initial value: `false`
  - `true` when deleting characters, `false` when typing

#### Roles Array
```typescript
const roles = ["Full-Stack Developer", "Web Developer"]
```

## Functions and Operations

### 1. Typing Animation Logic (`useEffect`)

**Purpose**: Creates an animated typing effect that cycles through different role titles

**Operation Flow**:
1. **Typing Phase** (`!isDeleting && charIndex < current.length`):
   - Adds one character every 100ms
   - Continues until the full role text is displayed

2. **Pause Phase** (`!isDeleting && charIndex === current.length`):
   - Waits 1100ms after completing the word
   - Then switches to deletion mode

3. **Deletion Phase** (`isDeleting && charIndex > 0`):
   - Removes one character every 40ms
   - Faster than typing for better UX

4. **Transition Phase** (`isDeleting && charIndex === 0`):
   - Waits 200ms after deletion completes
   - Moves to the next role in the array
   - Loops back to the first role when reaching the end

**Timing Configuration**:
- Typing speed: 100ms per character
- Pause duration: 1100ms
- Deletion speed: 40ms per character
- Transition delay: 200ms

**Cleanup**: Clears timeout on component unmount to prevent memory leaks

## Component Features

### Visual Elements
1. **Animated Background**:
   - Decorative gradient blobs with pulse animation
   - Creates depth and visual interest

2. **Hero Text**:
   - Large, bold name display: "AMILA PATHUM"
   - Animated role text with gradient colors
   - Cursor blinking effect

3. **Hero Image**:
   - Right side image with hover effects
   - Gradient overlay on hover
   - Border and shadow effects

4. **Call-to-Action Buttons**:
   - "View My Projects" - Links to projects section
   - "Get in Touch" - Links to contact section
   - Hover animations with scale and shadow effects

5. **Scroll Indicator**:
   - Animated bouncing arrow at the bottom
   - Indicates scrollable content

### Styling Features
- Full viewport height (`min-h-screen`)
- Responsive grid layout (1 column mobile, 2 columns desktop)
- Gradient text animation for role display
- Smooth transitions and hover effects
- Fade-in animations with delays

## Props
This component does not accept any props.

## Animation Details

### Typing Animation
- Uses `setTimeout` for character-by-character display
- Smooth character addition/removal
- Infinite loop through roles array

### CSS Animations
- `fade-in-up`: Entry animation for text content
- `slide-in-left`: Side animation for description
- `fade-in`: Button appearance animation
- `animate-pulse`: Background blob animation
- `animate-bounce`: Scroll indicator animation

## Responsive Behavior
- **Mobile**: Single column layout, smaller text sizes
- **Desktop**: Two-column layout with side-by-side content
- Text sizes scale with breakpoints (sm, lg)

## Usage Example
```tsx
import { HeroSection } from "@/components/hero-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      {/* Other sections */}
    </main>
  )
}
```

## Performance Considerations
- Timeout cleanup prevents memory leaks
- Efficient state updates
- CSS animations for smooth performance
- Optimized image loading

