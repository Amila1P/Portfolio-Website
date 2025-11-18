# Navigation System

## Overview
The navigation system provides smooth scrolling, mobile responsiveness, and consistent navigation across the portfolio website.

## Components

### Navigation Component
**Location**: `components/navigation.tsx`

## How It Works

### 1. Fixed Navigation Bar

The navigation bar is fixed at the top of the page:

```typescript
<nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
```

**Features:**
- **Fixed positioning**: Stays at top while scrolling
- **High z-index**: Appears above all content (z-50)
- **Backdrop blur**: Semi-transparent with blur effect
- **Border**: Subtle bottom border for separation

### 2. Navigation Items

```typescript
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
]
```

**Structure:**
- Array of navigation items
- Each item has a label and href (anchor link)
- Links use hash fragments (#section-id)

### 3. Desktop Navigation

**Rendering:**
```typescript
<div className="hidden md:flex items-center gap-1">
  {navItems.map((item) => (
    <a
      key={item.label}
      href={item.href}
      className="px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-accent transition-colors"
    >
      {item.label}
    </a>
  ))}
</div>
```

**Features:**
- Hidden on mobile (`hidden md:flex`)
- Horizontal layout with gap
- Hover effects (color change)
- Smooth transitions

### 4. Dropdown Menu

**Implementation:**
```typescript
<DropdownMenu>
  <DropdownMenuTrigger>Other</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <a href="#photography">Stock Photography</a>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

**Purpose:**
- Groups secondary navigation items
- Uses Radix UI DropdownMenu component
- Accessible keyboard navigation

### 5. Mobile Navigation

**State Management:**
```typescript
const [isOpen, setIsOpen] = useState(false)
```

**Toggle Button:**
```typescript
<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden"
  aria-label="Toggle menu"
>
  {/* Hamburger/Close icon */}
</button>
```

**Mobile Menu:**
```typescript
{isOpen && (
  <div className="md:hidden pb-3 pt-2">
    {navItems.map((item) => (
      <a
        href={item.href}
        onClick={() => setIsOpen(false)}
      >
        {item.label}
      </a>
    ))}
  </div>
)}
```

**Behavior:**
- Shows/hides based on `isOpen` state
- Closes when link is clicked
- Only visible on mobile devices

### 6. Logo and Branding

```typescript
<Link href="#" className="flex items-center gap-2">
  <img src="/assets/images/Fixed_Nav.png" alt="Amila logo" />
  <span>Amila's <span className="text-[rgba(250,250,245,0.95)]">Portfolio</span></span>
</Link>
```

**Features:**
- Logo image + text
- Clickable (links to home)
- Hover effects

### 7. GitHub Link

```typescript
<a
  href="https://github.com/Amila1P"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub profile"
>
  {/* GitHub icon SVG */}
</a>
```

**Security:**
- `target="_blank"`: Opens in new tab
- `rel="noopener noreferrer"`: Security best practice
- `aria-label`: Screen reader support

## Navigation Flow

### User Interaction

1. **Click Navigation Link**
   ```
   User clicks "About" link
   → Browser scrolls to #about section
   → URL updates to include #about
   → Section comes into view
   ```

2. **Mobile Menu Toggle**
   ```
   User clicks hamburger icon
   → isOpen state changes to true
   → Mobile menu appears
   → User clicks a link
   → isOpen changes to false
   → Mobile menu closes
   ```

3. **Dropdown Menu**
   ```
   User hovers/clicks "Other"
   → Dropdown opens
   → User selects "Stock Photography"
   → Page scrolls to #photography
   → Dropdown closes
   ```

## Smooth Scrolling

The navigation uses native anchor links with smooth scrolling behavior. This is typically handled by CSS:

```css
html {
  scroll-behavior: smooth;
}
```

**How It Works:**
- Browser automatically scrolls to target element
- Smooth animation (not instant jump)
- Works with hash fragments (#section-id)

## Section IDs

Each section must have a matching ID for navigation to work:

```typescript
// Navigation link
<a href="#about">About</a>

// Section element
<section id="about">...</section>
```

**Matching IDs:**
- `#home` → HeroSection
- `#about` → AboutSection
- `#expertise` → ExpertiseSection
- `#projects` → ProjectsSection
- `#certificates` → CertificatesSection
- `#articles` → ArticlesSection
- `#contact` → ContactSection
- `#photography` → PhotographySection

## Responsive Behavior

### Desktop (> 768px)
- Horizontal navigation bar
- All items visible
- Dropdown for secondary items
- GitHub icon visible

### Mobile (< 768px)
- Hamburger menu button
- Logo and GitHub icon visible
- Menu hidden by default
- Toggle to show/hide menu
- Vertical menu layout

## Accessibility Features

1. **ARIA Labels**
   ```typescript
   aria-label="Toggle menu"
   aria-label="GitHub profile"
   ```

2. **Keyboard Navigation**
   - Tab through links
   - Enter to activate
   - Escape to close dropdown

3. **Focus States**
   - Visible focus indicators
   - Logical tab order

4. **Semantic HTML**
   - `<nav>` element
   - Proper link structure

## Styling Details

### Hover Effects
```typescript
className="hover:text-accent transition-colors"
```
- Color changes on hover
- Smooth transitions
- Consistent across all links

### Active States
- Can be enhanced with active link highlighting
- Currently uses hover states only

### Backdrop Blur
```typescript
className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
```
- Semi-transparent background
- Blur effect for modern browsers
- Fallback for older browsers

## Best Practices

1. **Keep Navigation Simple**: Don't overwhelm with too many items
2. **Mobile First**: Design for mobile, enhance for desktop
3. **Accessible**: Always include ARIA labels and keyboard support
4. **Consistent**: Same navigation structure across all pages
5. **Fast**: Navigation should be instant, no delays
6. **Clear**: Labels should be descriptive and concise

## Future Enhancements

Potential improvements:
- Active link highlighting based on scroll position
- Scroll spy to highlight current section
- Smooth scroll offset for fixed header
- Breadcrumb navigation
- Search functionality

