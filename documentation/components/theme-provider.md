# Theme Provider Component Documentation

## Overview
The `ThemeProvider` component is a wrapper around Next.js Themes that enables dark/light mode functionality throughout the application.

## File Location
`components/theme-provider.tsx`

## Dependencies
- React
- `next-themes` package (`ThemeProvider as NextThemesProvider`)

## Component Structure

### Main Component: `ThemeProvider`

#### Props
- **`children`** (React.ReactNode): Child components to be wrapped
- **`...props`** (ThemeProviderProps): Additional props from `next-themes`

## Functions and Operations

This component is a simple wrapper that passes all props to the underlying `NextThemesProvider` from `next-themes`.

**Operation**:
- Receives `children` and additional props
- Passes all props to `NextThemesProvider`
- Renders children within the theme provider context

## Component Features

### Theme Functionality
- Enables theme switching (dark/light mode)
- Provides theme context to all child components
- Supports system preference detection
- Persists theme preference in localStorage

### Integration with next-themes
- Uses `next-themes` library for theme management
- Handles theme persistence
- Manages theme state across page navigations
- Provides theme context via React Context API

## Props Interface

```typescript
interface ThemeProviderProps {
  children: React.ReactNode
  attribute?: string
  defaultTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  storageKey?: string
  themes?: string[]
  forcedTheme?: string
  enableColorScheme?: boolean
  nonce?: string
}
```

## Usage Example

### Basic Usage
```tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### With Custom Props
```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem={true}
  storageKey="portfolio-theme"
>
  {children}
</ThemeProvider>
```

## Configuration Options

### Common Props
- **`attribute`**: HTML attribute to apply theme class (default: "class")
- **`defaultTheme`**: Default theme when no preference is set
- **`enableSystem`**: Enable system preference detection
- **`disableTransitionOnChange`**: Disable transitions when theme changes
- **`storageKey`**: localStorage key for theme preference
- **`themes`**: Array of available theme names
- **`forcedTheme`**: Force a specific theme (useful for previews)

## Integration with Application

### In Layout File
The `ThemeProvider` should wrap the entire application in the root layout:

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Using Theme in Components
Components can access theme using the `useTheme` hook:

```tsx
import { useTheme } from "next-themes"

export function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  )
}
```

## Styling with Themes

### Tailwind CSS Configuration
Ensure Tailwind is configured for dark mode:

```js
// tailwind.config.js
module.exports = {
  darkMode: "class", // or "media"
  // ... other config
}
```

### CSS Classes
Use Tailwind's dark mode classes:

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  Content
</div>
```

## Performance Considerations
- Theme provider uses React Context (minimal overhead)
- Theme preference is cached in localStorage
- No unnecessary re-renders
- Efficient theme switching

## Accessibility
- Respects system preferences
- Smooth theme transitions
- Maintains user preference
- No flashing on page load (with proper configuration)

## Browser Support
- Modern browsers with localStorage support
- Works with SSR (Next.js)
- Handles hydration properly

## Common Issues and Solutions

### Flash of Wrong Theme
**Solution**: Add `suppressHydrationWarning` to `<html>` tag and ensure proper SSR setup

### Theme Not Persisting
**Solution**: Check `storageKey` prop and localStorage permissions

### System Theme Not Detecting
**Solution**: Ensure `enableSystem={true}` is set

## Future Enhancements
- Add custom theme colors
- Implement theme transition animations
- Add theme preview functionality
- Include theme customization options
- Add theme-specific component variants

