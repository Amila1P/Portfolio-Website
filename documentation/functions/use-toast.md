# use-toast Hook

## Overview
The `use-toast` hook provides a toast notification system for displaying temporary messages to users. It's inspired by the `react-hot-toast` library and uses a reducer pattern for state management.

## Location
`hooks/use-toast.ts`

## Function Signatures

### Main Hook
```typescript
function useToast(): {
  toasts: ToasterToast[]
  toast: (props: Toast) => { id: string; dismiss: () => void; update: (props: ToasterToast) => void }
  dismiss: (toastId?: string) => void
}
```

### Toast Function
```typescript
function toast(props: Toast): {
  id: string
  dismiss: () => void
  update: (props: ToasterToast) => void
}
```

## How It Works

### Architecture

The toast system uses a **reducer pattern** with a centralized state management approach:

1. **State Management**: Uses a reducer function to manage toast state
2. **Global State**: Maintains a single source of truth in memory
3. **Subscriptions**: Components subscribe to state changes via listeners
4. **Auto-removal**: Toasts are automatically removed after a delay

### Core Components

#### 1. Toast Types
```typescript
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}
```

#### 2. Action Types
The reducer handles four action types:
- `ADD_TOAST`: Adds a new toast to the queue
- `UPDATE_TOAST`: Updates an existing toast
- `DISMISS_TOAST`: Marks a toast as dismissed (triggers removal)
- `REMOVE_TOAST`: Removes a toast from the state

#### 3. Constants
- `TOAST_LIMIT = 1`: Maximum number of toasts displayed simultaneously
- `TOAST_REMOVE_DELAY = 1000000`: Delay in milliseconds before auto-removal (1,000,000ms = 1000 seconds)

### State Management Flow

1. **Adding a Toast**:
   ```typescript
   toast({ title: "Success", description: "Operation completed" })
   ```
   - Generates a unique ID
   - Dispatches `ADD_TOAST` action
   - Returns control functions (dismiss, update)

2. **Updating a Toast**:
   ```typescript
   const { update } = toast({ title: "Loading..." })
   update({ title: "Complete!" })
   ```
   - Uses the returned `update` function
   - Dispatches `UPDATE_TOAST` action

3. **Dismissing a Toast**:
   ```typescript
   const { dismiss } = toast({ title: "Message" })
   dismiss()
   ```
   - Marks toast as `open: false`
   - Schedules removal after delay

4. **Auto-Removal**:
   - When a toast is dismissed, it's added to a removal queue
   - After `TOAST_REMOVE_DELAY`, the toast is removed from state

### Reducer Logic

The reducer handles state transitions:

```typescript
case 'ADD_TOAST':
  // Adds toast to beginning of array, limits to TOAST_LIMIT
  return { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) }

case 'UPDATE_TOAST':
  // Updates matching toast by ID
  return { toasts: state.toasts.map(t => t.id === action.toast.id ? { ...t, ...action.toast } : t) }

case 'DISMISS_TOAST':
  // Marks toast(s) as closed and schedules removal
  // If toastId provided, dismisses that toast; otherwise dismisses all

case 'REMOVE_TOAST':
  // Removes toast(s) from state array
  // If toastId provided, removes that toast; otherwise removes all
```

### Listener System

- **Memory State**: Maintains current state in memory
- **Listeners Array**: Stores component state setters
- **Dispatch Function**: Updates memory state and notifies all listeners
- **Subscription**: Components subscribe on mount, unsubscribe on unmount

## Usage Examples

### Basic Toast
```typescript
import { useToast } from '@/hooks/use-toast'

function MyComponent() {
  const { toast } = useToast()
  
  const handleSuccess = () => {
    toast({
      title: "Success!",
      description: "Your changes have been saved.",
    })
  }
  
  return <button onClick={handleSuccess}>Save</button>
}
```

### Toast with Action
```typescript
const { toast } = useToast()

toast({
  title: "File uploaded",
  description: "Your file has been successfully uploaded.",
  action: <ToastAction altText="Undo">Undo</ToastAction>,
})
```

### Updating a Toast
```typescript
const { toast } = useToast()

const showProgress = () => {
  const { update } = toast({
    title: "Uploading...",
    description: "0% complete",
  })
  
  // Simulate progress
  setTimeout(() => {
    update({
      title: "Uploading...",
      description: "50% complete",
    })
  }, 1000)
  
  setTimeout(() => {
    update({
      title: "Complete!",
      description: "File uploaded successfully",
    })
  }, 2000)
}
```

### Dismissing a Toast
```typescript
const { toast } = useToast()

const { dismiss } = toast({
  title: "Temporary message",
})

// Dismiss after 3 seconds
setTimeout(() => dismiss(), 3000)
```

### Dismissing All Toasts
```typescript
const { dismiss } = useToast()

// Dismiss all toasts
dismiss()
```

## Key Features

1. **Auto-Dismiss**: Toasts automatically disappear after a delay
2. **Update Support**: Can update toast content without removing it
3. **Manual Dismiss**: Users can manually dismiss toasts
4. **Action Buttons**: Supports action buttons for user interaction
5. **Limit Control**: Configurable limit on simultaneous toasts
6. **Type Safe**: Full TypeScript support

## Technical Details

### ID Generation
```typescript
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}
```
- Uses a counter that wraps around at `Number.MAX_SAFE_INTEGER`
- Ensures unique IDs for each toast

### Removal Queue
- Uses a `Map` to track timeout IDs
- Prevents duplicate removal scheduling
- Cleans up timeouts when toasts are manually dismissed

### State Synchronization
- Memory state is the single source of truth
- All components subscribe to the same state
- Changes are broadcast to all subscribers

## Best Practices

1. **Use for Temporary Messages**: Toasts are best for non-critical, temporary notifications
2. **Keep Messages Short**: Users should be able to read the message quickly
3. **Provide Actions When Needed**: Use action buttons for important operations
4. **Don't Overuse**: Too many toasts can overwhelm users
5. **Handle Errors**: Use toasts for error messages that don't require immediate action

## Integration with UI Components

This hook is designed to work with the `@/components/ui/toast` and `@/components/ui/toaster` components:

```typescript
// In your layout or root component
import { Toaster } from '@/components/ui/toaster'

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Toaster />
    </>
  )
}
```

The `Toaster` component subscribes to the toast state and renders the toast notifications.

