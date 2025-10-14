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
├── contexts/           # React contexts (LanguageContext for i18n)
├── hooks/              # Custom React hooks (useScrollAnimation, use-waitlist-registration)
├── layout.tsx          # Root layout with metadata and providers
├── page.tsx            # Home page with dynamic imports and Suspense boundaries
├── globals.css         # Global styles and CSS variables
└── [route]/page.tsx    # Route-specific pages

components/ui/          # Reusable UI components (shadcn/ui)
lib/utils.ts           # Utility functions (cn helper)
```

**Path Alias**: Use `@/*` to reference files from the root directory (configured in tsconfig.json)

### Performance Optimizations
- **Dynamic imports** for non-critical components (WearYourStory, FeatureCarousel, PortfolioGrid, Timeline, Marquee) with SSR enabled
- **Suspense boundaries** wrapping dynamically imported sections with fallback placeholders
- **Image optimization** configured with AVIF/WebP formats and caching (7 days minimum cache TTL)
- **Font optimization** with Inter font, swap display strategy, preload, and system font fallbacks
- **Aggressive caching** for static assets (31536000s for /images/* and /fonts/*)
- **Bundle optimization** with console.log removal in production (except errors)
- **Lazy loading** with intersection observer triggers for images and components

### Key Features
- **Multilingual support** via LanguageContext (English/Italian)
  - Client-side context with translations dictionary
  - Persists language preference to localStorage
  - `t()` function for translation keys
  - Language switcher component available
- **Dark/light theme** system using CSS variables
- **SEO optimization** with comprehensive metadata, Open Graph, and structured data
- **Progressive Web App** capabilities with manifest.json
- **Security headers** including HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- **Analytics** integration with Vercel Analytics and Speed Insights
- **Cookie Consent Management** via Termly CMP (requires NEXT_PUBLIC_TERMLY_UUID env var)

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
- Next.js experimental features enabled: optimizeCss, scrollRestoration, nextScriptWorkers, esmExternals
- Automatic sitemap generation via `next-sitemap` for mytaskly.com domain
- Optimized for Vercel deployment
- Static page generation timeout: 120 seconds
- Compression enabled for all responses

### Dependencies Management
- Main UI framework: Radix UI components (comprehensive suite including Dialog, Popover, Select, etc.)
- Form handling: React Hook Form + Zod validation + @hookform/resolvers
- Animations: Framer Motion (latest version)
- Carousels: embla-carousel-react
- UI utilities: clsx, tailwind-merge (via cn() helper), class-variance-authority
- Date handling: date-fns, react-day-picker
- Other: lucide-react (icons), cmdk (command menu), sonner (toast notifications), vaul (drawer)
- Development: TypeScript 5, ESLint, PostCSS, Tailwind CSS

### Environment Variables
- `NEXT_PUBLIC_TERMLY_UUID` - Required for Termly Cookie Consent Management Platform integration

### Domain Configuration
- **Production domain**: mytaskly.com
- Sitemap configured for mytaskly.com
- Image optimization allowed for mytaskly.com domain
- Alternate language URLs: `/it` (Italian), `/en` (English)

When working with this codebase, follow the established patterns for component creation, use the existing design system, and maintain the performance optimizations already in place.