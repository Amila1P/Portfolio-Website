# Navigation Component Documentation

## Overview
The `Navigation` component provides a fixed navigation bar at the top of the portfolio website with responsive design support for both desktop and mobile devices.

## File Location
`components/navigation.tsx`

## Dependencies
- React (`useState`)
- Next.js (`Link`)
- Radix UI (`DropdownMenu`, `DropdownMenuContent`, `DropdownMenuItem`, `DropdownMenuTrigger`)

## Component Structure

### Main Component: `Navigation`

#### State Management
- **`isOpen`** (boolean): Controls the visibility of the mobile navigation menu
  - Initial value: `false`
  - Toggled by clicking the mobile menu button

#### Navigation Items
The component defines an array of navigation items:
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

## Functions and Operations

### 1. `setIsOpen(!isOpen)`
**Purpose**: Toggles the mobile menu visibility

**Operation**:
- When the mobile menu button is clicked, this function toggles the `isOpen` state
- If `isOpen` is `true`, the menu closes; if `false`, it opens

**Usage**: Called when the hamburger menu button is clicked on mobile devices

## Component Features

### Desktop Navigation
- Displays all navigation items horizontally
- Includes a dropdown menu for "Other" items (Stock Photography)
- Shows GitHub icon link
- Fixed position with backdrop blur effect

### Mobile Navigation
- Hamburger menu button that toggles menu visibility
- Collapsible menu that shows all navigation items vertically
- Automatically closes when a navigation item is clicked
- Includes the "Other" section with Stock Photography link

### Styling
- Fixed position at the top of the page (`fixed top-0`)
- Backdrop blur effect for modern glassmorphism look
- Responsive design with breakpoints for mobile/desktop
- Hover effects on navigation items
- Smooth transitions

## Props
This component does not accept any props.

## External Links
- **GitHub Profile**: Links to `https://github.com/Amila1P`
- **Stock Photography**: Links to `#photography` section

## Accessibility
- Uses semantic HTML (`<nav>`)
- Includes `aria-label` attributes for icon buttons
- Keyboard navigation support
- Focus states for interactive elements

## Responsive Behavior
- **Desktop (md and above)**: Horizontal navigation with all items visible
- **Mobile (below md)**: Hamburger menu with collapsible vertical menu

## Usage Example
```tsx
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <div>
      <Navigation />
      {/* Other content */}
    </div>
  )
}
```

