# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run postbuild` - Generate sitemap after build (runs automatically after build)

## Project Architecture

### Framework & Tech Stack
- **Next.js 15** with App Router for server-side rendering and static generation
- **TypeScript** for type safety
- **Tailwind CSS** with custom design system using CSS variables
- **Radix UI** components for accessible, unstyled primitives
- **Framer Motion** for animations
- **React Hook Form** with Zod validation

### Directory Structure
```
app/
├── components/          # Page-specific components
├── contexts/           # React contexts (LanguageContext)
├── hooks/              # Custom React hooks
├── layout.tsx          # Root layout with metadata and providers
├── page.tsx            # Home page with dynamic imports
├── globals.css         # Global styles and CSS variables
└── [route]/page.tsx    # Route-specific pages

components/ui/          # Reusable UI components (shadcn/ui)
lib/utils.ts           # Utility functions (cn helper)
```

### Performance Optimizations
- **Dynamic imports** for non-critical components to improve initial load
- **Image optimization** configured with AVIF/WebP formats and caching
- **Font optimization** with Inter font and preload strategy
- **Aggressive caching** for static assets (31536000s for images/fonts)
- **Bundle optimization** with console.log removal in production
- **Lazy loading** with intersection observer triggers

### Key Features
- **Multilingual support** via LanguageContext
- **Dark/light theme** system using CSS variables
- **SEO optimization** with comprehensive metadata, Open Graph, and structured data
- **Progressive Web App** capabilities with manifest.json
- **Security headers** including HSTS, CSP, and CORS policies
- **Analytics** integration with Vercel Analytics and Speed Insights

### Styling System
- Custom CSS variables for theming in `app/globals.css`
- Tailwind configuration with custom colors mapped to CSS variables
- `cn()` utility function for conditional class merging
- Responsive design with mobile-first approach

### Component Patterns
- Functional components with TypeScript
- Server-side rendering by default with selective client-side hydration
- Suspense boundaries for loading states
- Custom hooks for reusable logic
- Context providers for global state

### Build Configuration
- ESLint and TypeScript errors ignored during builds (`ignoreDuringBuilds: true`)
- Next.js experimental features enabled for performance
- Automatic sitemap generation via `next-sitemap`
- Optimized for Vercel deployment

### Dependencies Management
- Main UI framework: Radix UI components
- Form handling: React Hook Form + Zod
- Animations: Framer Motion
- Utilities: clsx, tailwind-merge, date-fns
- Development: TypeScript, ESLint, PostCSS

When working with this codebase, follow the established patterns for component creation, use the existing design system, and maintain the performance optimizations already in place.