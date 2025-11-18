# Form Handling Operations

## Overview
This document explains how forms work in the portfolio website, including form state management, validation, submission, and user feedback.

## Components with Forms

### 1. ContactSection
**Location**: `components/contact-section.tsx`

### 2. Footer (Newsletter)
**Location**: `components/footer.tsx`

## Contact Form Implementation

### Form Structure

```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
})
const [submitted, setSubmitted] = useState(false)
```

**State Management:**
- `formData`: Stores all form field values
- `submitted`: Tracks submission state for user feedback

### Form Fields

#### Name Field
```typescript
<input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  className="..."
  placeholder="Your name"
/>
```

**Features:**
- Controlled input (value + onChange)
- Required validation
- Accessible (id + label)
- Placeholder text

#### Email Field
```typescript
<input
  type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  className="..."
  placeholder="your@email.com"
/>
```

**Features:**
- Email type validation (browser-native)
- Required field
- Controlled input

#### Message Field
```typescript
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={5}
  className="..."
  placeholder="Tell me about your project..."
></textarea>
```

**Features:**
- Multi-line input
- Required validation
- Fixed height (5 rows)
- Resize disabled

### Change Handler

```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}
```

**How It Works:**
1. Event triggered on input change
2. Extracts field name from `e.target.name`
3. Updates corresponding state property
4. Uses spread operator to preserve other fields
5. Type-safe with TypeScript

**Pattern:**
- Single handler for all fields
- Uses field name as key
- Updates state immutably

### Submit Handler

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  console.log("Form submitted:", formData)
  setSubmitted(true)
  setTimeout(() => setSubmitted(false), 3000)
  setFormData({ name: "", email: "", message: "" })
}
```

**Process:**
1. **Prevent Default**: Stops page reload
2. **Log Data**: For debugging (replace with API call)
3. **Show Success**: Set submitted to true
4. **Auto-Hide**: Reset after 3 seconds
5. **Clear Form**: Reset all fields

**Submission Flow:**
```
User fills form
  ↓
Clicks "Send Message"
  ↓
handleSubmit called
  ↓
Form validated (browser + required)
  ↓
Data processed
  ↓
Success state shown
  ↓
Form cleared
  ↓
Success message auto-hides
```

### Form Validation

#### HTML5 Validation
```typescript
<input type="email" required />
```

**Built-in Validation:**
- `required`: Field must have value
- `type="email"`: Validates email format
- Browser shows native error messages
- Prevents submission if invalid

#### Custom Validation (Future)
Can be enhanced with:
- Zod schema validation
- Custom error messages
- Real-time validation feedback
- Field-level error states

### User Feedback

#### Button State
```typescript
<button type="submit">
  {submitted ? "Message Sent!" : "Send Message"}
</button>
```

**States:**
- Default: "Send Message"
- Success: "Message Sent!"
- Visual feedback without separate message component

#### Success Indicator
- Button text changes
- Temporary state (3 seconds)
- No separate toast/alert needed for simple feedback

### Form Styling

#### Input Styling
```typescript
className="w-full px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
```

**Features:**
- Full width
- Padding for comfort
- Rounded corners
- Background and border colors
- Focus ring for accessibility
- Smooth transitions

#### Layout
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Name and Email side by side on desktop */}
</div>
```

**Responsive:**
- Mobile: Stacked vertically
- Desktop: Two columns
- Consistent spacing

## Newsletter Form (Footer)

### Implementation

```typescript
<form
  onSubmit={(e) => {
    e.preventDefault()
    // Newsletter subscription logic
  }}
  className="flex gap-2"
>
  <input
    type="email"
    placeholder="your@email.com"
    className="..."
  />
  <button type="submit">Subscribe</button>
</form>
```

**Features:**
- Simpler than contact form
- Single email field
- Inline layout (flex)
- Placeholder for guidance

**Note:** Currently prevents default only - needs backend integration

## Form Data Flow

### Input → State → Submit

```
User types in input
  ↓
onChange event fires
  ↓
handleChange updates state
  ↓
Component re-renders with new value
  ↓
User clicks submit
  ↓
handleSubmit processes data
  ↓
Form resets
```

## Integration Points

### Backend Integration (Future)

Replace console.log with API call:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    
    if (response.ok) {
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } else {
      // Handle error
    }
  } catch (error) {
    // Handle error
  }
}
```

### Email Service Integration

Options:
- **SendGrid**: Transactional emails
- **Resend**: Modern email API
- **Nodemailer**: Node.js email service
- **Formspree**: Form backend service

## Accessibility

### Labels
```typescript
<label htmlFor="name" className="...">
  Name
</label>
<input id="name" name="name" />
```

**Benefits:**
- Screen reader support
- Clicking label focuses input
- Semantic association

### Required Fields
- `required` attribute
- Visual indicator (can add asterisk)
- Browser validation messages

### Error Handling
- Native browser validation
- Can enhance with custom messages
- ARIA error announcements

## Best Practices

1. **Controlled Components**: Always use controlled inputs
2. **Validation**: Use HTML5 + custom validation
3. **Feedback**: Provide clear success/error messages
4. **Accessibility**: Proper labels and ARIA attributes
5. **Security**: Sanitize input, prevent XSS
6. **UX**: Clear placeholders, helpful error messages
7. **Performance**: Debounce if needed for real-time validation

## Common Patterns

### Controlled Input Pattern
```typescript
const [value, setValue] = useState("")

<input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Form Reset Pattern
```typescript
setFormData({ name: "", email: "", message: "" })
```

### Success State Pattern
```typescript
const [submitted, setSubmitted] = useState(false)

// Show success
setSubmitted(true)

// Auto-hide
setTimeout(() => setSubmitted(false), 3000)
```

## Security Considerations

1. **XSS Prevention**: React automatically escapes values
2. **CSRF Protection**: Use tokens for API calls
3. **Input Sanitization**: Validate and sanitize on backend
4. **Rate Limiting**: Prevent spam submissions
5. **Honeypot Fields**: Detect bots

## Future Enhancements

- Real-time validation feedback
- Field-level error messages
- Loading states during submission
- Success/error toast notifications
- Form persistence (localStorage)
- Auto-save drafts
- Character counters
- Rich text editor for message field

