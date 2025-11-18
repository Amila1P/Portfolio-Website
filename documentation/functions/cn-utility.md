# cn Utility Function

## Overview
The `cn` function is a utility for conditionally joining class names together. It combines `clsx` and `tailwind-merge` to provide a powerful class name merging solution that handles Tailwind CSS class conflicts intelligently.

## Location
`lib/utils.ts`

## Function Signature
```typescript
export function cn(...inputs: ClassValue[]): string
```

## How It Works

### Purpose
The `cn` function merges multiple class name inputs into a single string, with special handling for Tailwind CSS classes to prevent conflicts and ensure the correct classes are applied.

### Implementation
```typescript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Two-Step Process

1. **clsx Processing** (`clsx(inputs)`)
   - Handles conditional class names
   - Processes arrays, objects, and strings
   - Filters out falsy values
   - Returns a single string of class names

2. **twMerge Processing** (`twMerge(...)`)
   - Intelligently merges Tailwind CSS classes
   - Resolves conflicts by keeping the last conflicting class
   - Handles responsive variants, pseudo-classes, and arbitrary values

## Usage Examples

### Basic Usage
```typescript
import { cn } from '@/lib/utils'

// Simple string concatenation
cn('foo', 'bar') // => 'foo bar'

// Conditional classes
cn('foo', isActive && 'active') // => 'foo active' or 'foo'

// Multiple conditions
cn('base', isActive && 'active', isDisabled && 'disabled')
```

### With Tailwind CSS
```typescript
// Without cn - conflicting classes
className="px-2 px-4" // Both apply, causing conflicts

// With cn - resolves conflicts
cn("px-2", "px-4") // => "px-4" (last one wins)

// Responsive variants
cn("text-sm", "md:text-lg", "lg:text-xl") // All apply correctly

// Pseudo-classes
cn("hover:bg-red-500", "hover:bg-blue-500") // => "hover:bg-blue-500"
```

### Real-World Component Example
```typescript
import { cn } from '@/lib/utils'

interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  className?: string
}

function Button({ variant = 'primary', size = 'md', disabled, className }: ButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        'px-4 py-2 rounded-lg font-medium transition-colors',
        
        // Variant styles
        variant === 'primary' && 'bg-blue-500 text-white hover:bg-blue-600',
        variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
        
        // Size styles
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-4 py-2 text-base',
        size === 'lg' && 'px-6 py-3 text-lg',
        
        // Disabled state
        disabled && 'opacity-50 cursor-not-allowed',
        
        // Custom className (can override defaults)
        className
      )}
      disabled={disabled}
    >
      Click me
    </button>
  )
}
```

### Combining with Props
```typescript
function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md p-6', // Base styles
        className // Allow overrides
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Usage
<Card className="border-2 border-blue-500" />
// Result: 'bg-white rounded-lg shadow-md p-6 border-2 border-blue-500'
```

### Array and Object Inputs
```typescript
// Arrays
cn(['foo', 'bar', 'baz']) // => 'foo bar baz'

// Objects (keys are class names, values are conditions)
cn({
  'text-red-500': hasError,
  'text-green-500': isSuccess,
  'font-bold': isImportant,
})

// Mixed inputs
cn(
  'base-class',
  ['array', 'of', 'classes'],
  {
    'conditional-class': someCondition,
  },
  anotherCondition && 'another-class'
)
```

## Key Features

### 1. Conflict Resolution
```typescript
// Tailwind conflicts are resolved intelligently
cn('px-2', 'px-4') // => 'px-4'
cn('bg-red-500', 'bg-blue-500') // => 'bg-blue-500'
cn('text-sm', 'text-lg') // => 'text-lg'
```

### 2. Variant Handling
```typescript
// Responsive variants work correctly
cn('text-sm', 'md:text-lg') // Both apply at different breakpoints

// Pseudo-class variants
cn('hover:bg-red-500', 'hover:bg-blue-500') // => 'hover:bg-blue-500'
```

### 3. Conditional Logic
```typescript
// Handles falsy values
cn('foo', null, undefined, false, 'bar') // => 'foo bar'

// Works with ternary operators
cn('base', isActive ? 'active' : 'inactive')
```

### 4. Type Safety
- Full TypeScript support
- `ClassValue` type accepts strings, arrays, objects, and more
- Prevents type errors in class name handling

## Technical Details

### clsx Library
- Handles conditional class name logic
- Processes various input types (strings, arrays, objects)
- Filters out falsy values (null, undefined, false, 0, "")

### tailwind-merge Library
- Specifically designed for Tailwind CSS
- Understands Tailwind's class structure
- Resolves conflicts by keeping the last class
- Handles:
  - Utility classes (spacing, colors, etc.)
  - Responsive variants (sm:, md:, lg:, etc.)
  - Pseudo-class variants (hover:, focus:, etc.)
  - Arbitrary values ([...])
  - Important modifier (!)

## Best Practices

1. **Always Use for Tailwind Classes**: When using Tailwind, always use `cn` to prevent conflicts
2. **Base Classes First**: Put base/default classes first, then conditionals, then overrides
3. **Use for Component Props**: Always accept a `className` prop and merge it with `cn`
4. **Keep It Readable**: Use comments or organize classes logically
5. **Don't Overuse**: For simple static classes, regular strings are fine

## Common Patterns

### Component with Variants
```typescript
const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-gray-900',
}

cn('base-class', variants[variant], className)
```

### Conditional Styling
```typescript
cn(
  'base-class',
  isActive && 'active-class',
  isDisabled && 'disabled-class',
  error && 'error-class'
)
```

### Responsive Design
```typescript
cn(
  'text-sm', // Mobile
  'md:text-base', // Tablet
  'lg:text-lg', // Desktop
  className
)
```

## Integration with shadcn/ui

This utility is commonly used with shadcn/ui components, which is why it's located in `lib/utils.ts`. It's the standard way to handle class names in shadcn/ui-based projects.

