# Portfolio Website

A modern, responsive portfolio website built with Next.js, React, and TypeScript. This portfolio showcases projects, skills, certificates, articles, and provides a contact form for potential collaborations.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all device sizes
- **Typewriter Effect**: Animated hero section with rotating role titles
- **Scroll Animations**: Intersection Observer-based animations on scroll
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Display featured projects with tags and descriptions
- **Certificates Section**: Showcase professional certifications
- **Articles Integration**: Links to published articles and blog posts
- **Stock Photography**: Showcase photography work on stock platforms
- **Dark Theme Support**: Built-in theme support (via next-themes)
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 16.0.0**: React framework with App Router
- **React 19.2.0**: UI library
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4.1.9**: Utility-first CSS framework

### UI Components
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: High-quality component library
- **Lucide React**: Icon library

### Additional Libraries
- **next-themes**: Theme management
- **react-hook-form**: Form handling
- **zod**: Schema validation
- **clsx & tailwind-merge**: Class name utilities
- **@vercel/analytics**: Analytics integration

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── about-section.tsx
│   ├── articles-section.tsx
│   ├── certificates-section.tsx
│   ├── contact-section.tsx
│   ├── details-section.tsx
│   ├── expertise-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── photography-section.tsx
│   ├── projects-section.tsx
│   ├── theme-provider.tsx
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
│   ├── use-mobile.ts      # Mobile detection hook
│   └── use-toast.ts       # Toast notification hook
├── lib/                   # Utility functions
│   └── utils.ts           # Class name utility (cn)
├── public/                # Static assets
│   └── assets/           # Images and media
├── documentation/        # Project documentation
│   ├── components/       # Component documentation
│   ├── functions/        # Function documentation
│   └── operations/       # Operations documentation
└── styles/               # Additional styles
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📚 Documentation

Comprehensive documentation is available in the `documentation/` folder:

### Component Documentation
- [About Section](./documentation/components/about-section.md)
- [Articles Section](./documentation/components/articles-section.md)
- [Certificates Section](./documentation/components/certificates-section.md)
- [Contact Section](./documentation/components/contact-section.md)
- [Details Section](./documentation/components/details-section.md)
- [Expertise Section](./documentation/components/expertise-section.md)
- [Footer](./documentation/components/footer.md)
- [Hero Section](./documentation/components/hero-section.md)
- [Navigation](./documentation/components/navigation.md)
- [Photography Section](./documentation/components/photography-section.md)
- [Projects Section](./documentation/components/projects-section.md)
- [Theme Provider](./documentation/components/theme-provider.md)

### Function Documentation
- [use-mobile Hook](./documentation/functions/use-mobile.md) - Mobile detection hook
- [use-toast Hook](./documentation/functions/use-toast.md) - Toast notification system
- [cn Utility](./documentation/functions/cn-utility.md) - Class name utility function

### Operations Documentation
- [Component Lifecycle](./documentation/operations/component-lifecycle.md) - How components work
- [Navigation System](./documentation/operations/navigation-system.md) - Navigation implementation
- [Form Handling](./documentation/operations/form-handling.md) - Form operations and validation

## 🎨 Customization

### Updating Content

#### Personal Information
- Edit `components/hero-section.tsx` for hero content
- Edit `components/about-section.tsx` for about content
- Edit `components/details-section.tsx` for statistics

#### Projects
- Update the `projects` array in `components/projects-section.tsx`
- Add project images to `public/` folder

#### Certificates
- Update the `certificates` array in `components/certificates-section.tsx`
- Add certificate images to `public/assets/images/`

#### Skills
- Update the `skills` array in `components/expertise-section.tsx`

#### Articles
- Update the `articles` array in `components/articles-section.tsx`

#### Social Links
- Update GitHub link in `components/navigation.tsx`
- Update social links in `components/contact-section.tsx` and `components/footer.tsx`

### Styling

The project uses Tailwind CSS. Customize colors in `app/globals.css` or create a `tailwind.config.js` file.

### Theme

Theme configuration is handled by `next-themes`. Customize in `components/theme-provider.tsx`.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Sections

1. **Hero Section** - Introduction with animated typewriter effect
2. **About Section** - Personal introduction and background
3. **Details Section** - Statistics and achievements
4. **Expertise Section** - Skills and technologies
5. **Projects Section** - Featured projects showcase
6. **Certificates Section** - Professional certifications
7. **Photography Section** - Stock photography platforms
8. **Articles Section** - Published articles and blog posts
9. **Contact Section** - Contact form and social links
10. **Footer** - Additional links and newsletter signup

## 🎯 Key Features Explained

### Typewriter Animation
The hero section features a typewriter effect that cycles through role titles (Full-Stack Developer, Web Developer). Implemented using `useState` and `useEffect` with timers.

### Scroll Animations
Components use Intersection Observer API to trigger animations when they enter the viewport. Provides smooth, performant scroll-triggered animations.

### Responsive Navigation
Fixed navigation bar with mobile hamburger menu. Smooth scrolling to sections using anchor links.

### Form Handling
Contact form uses controlled components with React state management. Includes validation and user feedback.

## 🔒 Security

- Form inputs are sanitized by React (XSS protection)
- External links use `rel="noopener noreferrer"`
- No sensitive data exposed in client-side code

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

This is a personal portfolio project. If you'd like to suggest improvements or report issues, please open an issue or submit a pull request.

## 📄 License

This project is private and personal. All rights reserved.

## 👤 Author

**Amila Pathum**
- GitHub: [@Amila1P](https://github.com/Amila1P)
- Portfolio: [Your Portfolio URL]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide](https://lucide.dev/) - Icons

## 📝 Changelog

### Version 0.1.0
- Initial release
- All core sections implemented
- Responsive design
- Form handling
- Documentation

---

**Built with ❤️ using Next.js and TypeScript**

