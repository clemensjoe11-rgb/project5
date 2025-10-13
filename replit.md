# TRADURAN Translation Services Platform

## Overview

TRADURAN is a professional translation services website offering French ↔ Turkish translation services. The platform is a multilingual (German, French, Turkish) marketing website with a contact form for service inquiries. Built as a modern single-page application, it features a clean, professional design with parallax effects and smooth scrolling navigation.

The application serves as a digital presence for a translation business, showcasing services, building trust through professional design, and providing an easy way for potential clients to reach out.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React with TypeScript for type safety and component-based development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing (single route application)
- TanStack React Query for server state management and API interactions

**UI Component System:**
- shadcn/ui components built on Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom color palette focused on trust and professionalism (Deep Navy, Terracotta accents)
- Responsive design with mobile-first approach

**State Management:**
- React hooks (useState) for local component state
- Language selection state managed at page level and passed down to components
- Form state managed by React Hook Form with Zod validation

**Design Patterns:**
- Component composition with reusable UI primitives
- Internationalization handled through content objects with language keys (de/fr/tr)
- Design system following documented guidelines in design_guidelines.md
- Example components provided for development reference

### Backend Architecture

**Server Framework:**
- Express.js server running on Node.js
- ESM modules throughout the codebase
- Development and production build configurations

**API Design:**
- RESTful endpoint pattern
- Single contact form endpoint (`POST /api/contact`)
- Zod schema validation for form submissions
- Email notifications logged to console (production email integration ready)

**Data Validation:**
- Shared schema definitions between client and server using Zod
- Type-safe form data with TypeScript inference from Zod schemas
- Centralized validation logic in `shared/schema.ts`

**Development Environment:**
- Custom Vite middleware for development with HMR
- Replit-specific plugins for error overlay and development tools
- Static file serving in production

### External Dependencies

**Database & ORM:**
- Drizzle ORM configured for PostgreSQL (via @neondatabase/serverless)
- Database schema defined but not actively used (prepared for future features)
- Migration system configured through drizzle-kit

**UI Libraries:**
- Radix UI primitives for accessible headless components
- Embla Carousel for interactive elements
- Lucide React for icon system
- React Hook Form with Zod resolver for form management

**Styling & Design:**
- Tailwind CSS with custom configuration
- PostCSS for CSS processing
- Google Fonts (Inter, Merriweather, DM Sans, Architects Daughter, Fira Code, Geist Mono)
- Custom CSS variables for theming (light/dark mode ready)

**Development Tools:**
- TypeScript for type safety across the stack
- ESBuild for production server bundling
- Path aliases configured for clean imports (@/, @shared/, @assets/)

**Third-Party Services:**
- Email sending configured for a.d@traduran.lu (currently console logging)
- Asset storage in attached_assets directory for images

**Key Architectural Decisions:**

1. **Monorepo Structure**: Client and server code in a single repository with shared types/schemas for consistency
2. **Type Safety**: Full TypeScript implementation with strict mode enabled
3. **Component Library**: shadcn/ui chosen for customizable, accessible components that can be modified in-place
4. **Validation Strategy**: Shared Zod schemas ensure client and server validate data identically
5. **Internationalization**: Static content objects rather than i18n library for simplicity with only 3 languages
6. **Database Ready**: Drizzle ORM configured but minimal storage currently needed (prepared for future user accounts, translation history, etc.)
7. **Build Optimization**: Separate client (Vite) and server (ESBuild) build processes for optimal performance