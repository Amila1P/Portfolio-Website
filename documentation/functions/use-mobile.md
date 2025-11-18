# use-mobile Hook

## Overview
The `use-mobile` hook is a custom React hook that detects whether the current viewport is a mobile device based on a breakpoint threshold.

## Location
`hooks/use-mobile.ts`

## Function Signature
```typescript
export function useIsMobile(): boolean
```

## How It Works

### Purpose
This hook provides a responsive way to determine if the user is viewing the application on a mobile device. It uses the `window.matchMedia` API to monitor viewport width changes and updates the state accordingly.

### Implementation Details

1. **Breakpoint Constant**
   - `MOBILE_BREAKPOINT = 768` - Defines the maximum width (in pixels) for a mobile device
   - Devices with width less than 768px are considered mobile

2. **State Management**
   - Uses `useState` to track mobile status
   - Initial state is `undefined` to prevent hydration mismatches in SSR (Server-Side Rendering)

3. **Media Query Listener**
   - Creates a `MediaQueryList` object using `window.matchMedia`
   - Listens for viewport width changes
   - Updates state when the viewport crosses the breakpoint threshold

4. **Cleanup**
   - Removes the event listener when the component unmounts
   - Prevents memory leaks

### Return Value
- Returns `boolean` - `true` if viewport width < 768px, `false` otherwise
- Uses double negation (`!!`) to ensure boolean return type

## Usage Example

```typescript
import { useIsMobile } from '@/hooks/use-mobile'

function MyComponent() {
  const isMobile = useIsMobile()
  
  return (
    <div>
      {isMobile ? (
        <MobileLayout />
      ) : (
        <DesktopLayout />
      )}
    </div>
  )
}
```

## Key Features

- **Responsive Detection**: Automatically updates when viewport size changes
- **SSR Safe**: Handles server-side rendering gracefully with initial `undefined` state
- **Performance**: Uses efficient `matchMedia` API instead of window resize listeners
- **Type Safe**: Returns a boolean value for easy conditional rendering

## Technical Details

### Media Query
```typescript
window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
```
- Checks if viewport width is less than 767px (768 - 1)
- Uses `max-width` media query for mobile-first approach

### Event Handling
- Uses `addEventListener('change', onChange)` to listen for media query changes
- The `onChange` callback checks `window.innerWidth` directly for accurate detection
- Cleanup function removes the listener to prevent memory leaks

## Best Practices

1. **Use for Conditional Rendering**: Perfect for showing/hiding mobile-specific UI elements
2. **Avoid Overuse**: Don't use for every responsive design decision - prefer CSS media queries when possible
3. **Combine with CSS**: Use this hook for JavaScript logic, but still use CSS for styling

## Browser Compatibility
- Modern browsers with `matchMedia` API support
- IE11+ (with polyfill if needed)

