# Contact Section Component Documentation

## Overview
The `ContactSection` component provides a contact form for users to send messages and displays social media links.

## File Location
`components/contact-section.tsx`

## Dependencies
- React (`useState`)

## Component Structure

### Main Component: `ContactSection`

#### State Management
- **`formData`** (object): Stores form input values
  - `name` (string): User's name
  - `email` (string): User's email address
  - `message` (string): Message content
  - Initial values: all empty strings

- **`submitted`** (boolean): Indicates if form was submitted
  - Initial value: `false`
  - Set to `true` after form submission
  - Resets to `false` after 3 seconds

## Functions and Operations

### 1. `handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)`

**Purpose**: Updates form data when user types in input fields

**Parameters**:
- `e`: Change event from input or textarea element

**Operation**:
- Extracts the field name from `e.target.name`
- Extracts the field value from `e.target.value`
- Updates `formData` state using spread operator
- Preserves other form fields while updating the changed field

**Usage**: Called on `onChange` event for all form inputs

### 2. `handleSubmit(e: React.FormEvent)`

**Purpose**: Handles form submission

**Parameters**:
- `e`: Form submit event

**Operation**:
1. Prevents default form submission behavior
2. Logs form data to console (for development)
3. Sets `submitted` state to `true`
4. Resets form data to empty strings
5. After 3 seconds, resets `submitted` to `false`

**Current Implementation**: 
- Form submission is logged to console
- In production, this should send data to a backend API

**Usage**: Called on `onSubmit` event of the form

## Component Features

### Visual Elements

1. **Header Section**:
   - Title: "Get In Touch"
   - Decorative accent line
   - Descriptive subtitle
   - Centered alignment

2. **Contact Form**:
   - Name input field
   - Email input field
   - Message textarea
   - Submit button with dynamic text

3. **Social Media Links**:
   - LinkedIn icon and link
   - GitHub icon and link
   - Circular button style
   - Hover effects

### Interactive Features

1. **Form Inputs**:
   - Required field validation
   - Focus states with accent ring
   - Placeholder text
   - Proper input types (text, email, textarea)

2. **Submit Button**:
   - Changes text to "Message Sent!" after submission
   - Returns to "Send Message" after 3 seconds
   - Hover effects with color transition

3. **Social Media Buttons**:
   - Hover effects (border and text color change)
   - Circular design
   - Icon-based navigation

## Layout Structure

### Form Layout
- **Mobile**: Single column for all fields
- **Desktop (md)**: Two columns for name and email (`md:grid-cols-2`)
- Message textarea: Full width
- Submit button: Full width

### Social Media Section
- Border top separator
- Centered text
- Flex layout for social icons
- Gap spacing: `gap-6`

## Props
This component does not accept any props.

## Styling Details

### Color Scheme
- Uses theme colors consistently
- Accent color for focus states and buttons
- Muted foreground for placeholders

### Typography
- Labels: sm, medium weight, foreground color
- Inputs: foreground color text
- Placeholders: muted foreground

### Spacing
- Section padding: `py-20 sm:py-32`
- Horizontal padding: `px-4 sm:px-6 lg:px-8`
- Form spacing: `space-y-6`
- Grid gap: `gap-6`
- Social section margin top: `mt-16`
- Social section padding top: `pt-8`

## Usage Example
```tsx
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  return (
    <main>
      <ContactSection />
      {/* Other sections */}
    </main>
  )
}
```

## Form Validation

### Client-Side Validation
- All fields are required (`required` attribute)
- Email field uses `type="email"` for basic validation
- HTML5 validation is active

### Future Enhancements
- Add custom validation messages
- Implement email format validation
- Add character limits for message
- Include spam protection (reCAPTCHA)
- Add form validation library (e.g., Zod, Yup)

## Form Submission

### Current Implementation
- Form data is logged to console
- Form resets after submission
- Success message displays for 3 seconds

### Production Implementation
To implement actual form submission:

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
      setTimeout(() => setSubmitted(false), 3000)
    }
  } catch (error) {
    console.error('Form submission error:', error)
  }
}
```

## External Links
- **LinkedIn**: `https://linkedin.com` (placeholder - should be updated)
- **GitHub**: `https://github.com/Amila1P`
- All links open in new tabs with `target="_blank"` and `rel="noopener noreferrer"`

## Accessibility
- Semantic HTML structure (`<form>`, `<label>`, `<input>`)
- Proper label associations (`htmlFor` and `id`)
- Required field indicators
- Focus states for keyboard navigation
- ARIA labels for social media icons
- Error messages (to be added)

## Responsive Behavior
- Form fields stack vertically on mobile
- Name and email side-by-side on desktop
- Message textarea always full width
- Social icons adapt to screen size
- Consistent spacing across breakpoints

## Performance Considerations
- State management for form data
- Efficient re-renders on input changes
- Timeout cleanup recommended for production
- Form validation should be optimized

## Future Enhancements
- Add form validation library
- Implement backend API integration
- Add loading states during submission
- Include error handling and display
- Add success/error toast notifications
- Implement email service integration
- Add form analytics
- Include honeypot field for spam protection

