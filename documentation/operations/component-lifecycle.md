# Component Lifecycle and Operations

## Overview
This document explains how components work, their lifecycle, state management, and interaction patterns in the portfolio website.

## Component Architecture

### Component Structure
All components in this project follow a consistent pattern:
1. **Client Components**: All components use `"use client"` directive for interactivity
2. **Functional Components**: Built using React functional components with hooks
3. **TypeScript**: Full type safety throughout
4. **Tailwind CSS**: Styling with utility classes

## Common Operations

### 1. State Management

#### useState Hook
Most components use `useState` for local state management:

```typescript
// Example from Navigation component
const [isOpen, setIsOpen] = useState(false)

// Example from ContactSection
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
})
```

**Common State Patterns:**
- **Boolean toggles**: Menu open/close, modal visibility
- **Form data**: Input values, form submission state
- **UI state**: Loading states, visibility flags

#### useRef Hook
Used for DOM element references:

```typescript
// Example from AboutSection
const ref = useRef<HTMLDivElement>(null)
```

**Use Cases:**
- Intersection Observer targets
- Direct DOM manipulation
- Focus management

### 2. Side Effects (useEffect)

#### Intersection Observer Pattern
Used for scroll-triggered animations:

```typescript
// From AboutSection
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    },
    { threshold: 0.3 }
  )

  if (ref.current) {
    observer.observe(ref.current)
  }

  return () => observer.disconnect()
}, [])
```

**How It Works:**
1. Creates an IntersectionObserver with a threshold
2. Observes when element enters viewport
3. Triggers state update for animation
4. Unobserves after first trigger (performance)
5. Cleans up on unmount

#### Animation Timers
Used for typewriter effects and animations:

```typescript
// From HeroSection
useEffect(() => {
  let timeout: ReturnType<typeof setTimeout>
  const current = roles[roleIndex]

  if (!isDeleting && charIndex < current.length) {
    timeout = setTimeout(() => setCharIndex((c) => c + 1), 100)
  } else if (!isDeleting && charIndex === current.length) {
    timeout = setTimeout(() => setIsDeleting(true), 1100)
  } else if (isDeleting && charIndex > 0) {
    timeout = setTimeout(() => setCharIndex((c) => c - 1), 40)
  } else if (isDeleting && charIndex === 0) {
    timeout = setTimeout(() => {
      setIsDeleting(false)
      setRoleIndex((r) => (r + 1) % roles.length)
    }, 200)
  }

  return () => clearTimeout(timeout)
}, [charIndex, isDeleting, roleIndex, roles])
```

**Animation Flow:**
1. Type characters one by one
2. Pause when complete
3. Delete characters
4. Move to next role
5. Repeat cycle

### 3. Event Handling

#### Form Handling
```typescript
// From ContactSection
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log("Form submitted:", formData)
  setSubmitted(true)
  setTimeout(() => setSubmitted(false), 3000)
  setFormData({ name: "", email: "", message: "" })
}
```

**Pattern:**
- Controlled inputs (value + onChange)
- Form validation
- Submission handling
- State reset after submission

#### Click Handlers
```typescript
// From Navigation
<button onClick={() => setIsOpen(!isOpen)}>
  {/* Menu toggle */}
</button>

// From CertificatesSection
const toggleCertificates = () => {
  setShowHiddenCerts(!showHiddenCerts)
}
```

### 4. Conditional Rendering

#### Boolean Conditions
```typescript
// Show/hide based on state
{isOpen && <MobileMenu />}
{showHiddenCerts ? <HiddenCerts /> : null}
{submitted ? "Message Sent!" : "Send Message"}
```

#### Ternary Operators
```typescript
// Conditional content
{isMobile ? <MobileLayout /> : <DesktopLayout />}
```

#### Array Mapping
```typescript
// Render lists
{projects.map((project, index) => (
  <ProjectCard key={project.title} project={project} />
))}
```

### 5. Styling Patterns

#### Dynamic Classes
```typescript
// Conditional classes
className={`base-class ${isVisible ? 'visible' : 'hidden'}`}

// Using cn utility
cn('base-class', isActive && 'active-class', className)
```

#### Animation Delays
```typescript
// Staggered animations
style={{ animationDelay: `${index * 0.1}s` }}
style={{ animationDelay: `${index * 0.05}s` }}
```

#### Hover Effects
```typescript
// Group hover patterns
<div className="group">
  <div className="opacity-0 group-hover:opacity-100">
    {/* Hover content */}
  </div>
</div>
```

### 6. Data Flow

#### Props Down, Events Up
```typescript
// Parent passes data down
<ProjectsSection projects={projectsData} />

// Child emits events up
<ContactForm onSubmit={handleSubmit} />
```

#### State Lifting
- Local state for component-specific UI
- No global state management (Redux, Zustand) needed
- Simple prop drilling for shared data

### 7. Performance Optimizations

#### Memoization
- Components are lightweight, no heavy computations
- React's built-in optimizations handle re-renders

#### Lazy Loading
- Images use Next.js Image component (when applicable)
- Components load on demand

#### Cleanup Functions
```typescript
// Always cleanup side effects
useEffect(() => {
  const observer = new IntersectionObserver(...)
  return () => observer.disconnect() // Cleanup
}, [])
```

### 8. Accessibility

#### ARIA Labels
```typescript
<button aria-label="Toggle menu">
  {/* Icon */}
</button>

<a aria-label="GitHub profile" href="...">
  {/* Icon */}
</a>
```

#### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Semantic sections
- Form labels and inputs

#### Keyboard Navigation
- Focus states on interactive elements
- Tab order follows visual flow

## Component Interaction Flow

### Page Load Sequence
1. **Layout renders** → Sets up HTML structure
2. **Navigation renders** → Fixed header appears
3. **HeroSection renders** → Main landing area
4. **Sections render** → About, Projects, etc.
5. **Intersection Observers activate** → Scroll animations ready
6. **Event listeners attach** → User interactions enabled

### User Interaction Flow
1. **User clicks navigation link**
   - Smooth scroll to section
   - URL hash updates
   - Section comes into view

2. **User scrolls page**
   - Intersection Observer detects visibility
   - Animations trigger
   - Elements fade in/up

3. **User submits form**
   - Form validation
   - State updates
   - Success message shows
   - Form resets

4. **User toggles mobile menu**
   - State updates
   - Menu animates in/out
   - Click outside closes (if implemented)

## Common Patterns Summary

| Pattern | Use Case | Example Component |
|---------|----------|-------------------|
| `useState` | Local UI state | Navigation, ContactSection |
| `useEffect` | Side effects | HeroSection, AboutSection |
| `useRef` | DOM references | AboutSection |
| IntersectionObserver | Scroll animations | AboutSection |
| setTimeout | Animations | HeroSection |
| Array.map | List rendering | ProjectsSection, CertificatesSection |
| Conditional rendering | Show/hide | Navigation, CertificatesSection |
| Event handlers | User interactions | All interactive components |

## Best Practices

1. **Keep Components Focused**: Each component has a single responsibility
2. **Use TypeScript**: Type safety prevents bugs
3. **Clean Up Effects**: Always return cleanup functions
4. **Optimize Re-renders**: Use state efficiently
5. **Accessible by Default**: Include ARIA labels and semantic HTML
6. **Mobile First**: Design for mobile, enhance for desktop
7. **Performance**: Lazy load images, optimize animations

