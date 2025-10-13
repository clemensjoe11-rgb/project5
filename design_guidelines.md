# TRADURAN Website Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional service websites like Stripe (trust & clarity), Notion (clean layouts), and Linear (modern typography). The design balances professional credibility with modern aesthetics suitable for a language services company.

## Core Design Principles
1. **Bilingual Excellence**: Seamless language switching with clear visual hierarchy
2. **Professional Trust**: Clean, confident design that builds credibility
3. **Cultural Bridge**: Visual elements that subtly reference French-Turkish connection
4. **Modern Sophistication**: Contemporary web patterns with purposeful interactivity

## Color Palette

**Primary Colors:**
- Deep Navy: 220 45% 20% (main brand color - trust, professionalism)
- Crisp White: 0 0% 100% (clean backgrounds)

**Accent Colors:**
- Warm Terracotta: 15 60% 55% (French-Turkish cultural bridge, CTAs)
- Soft Sage: 150 25% 60% (supporting accent, subtle highlights)

**Neutrals:**
- Charcoal: 220 15% 25% (body text)
- Light Gray: 220 10% 95% (section backgrounds)
- Medium Gray: 220 8% 70% (secondary text)

## Typography
**Primary Font**: Inter (via Google Fonts CDN) - clean, modern, multilingual support
- Hero Headlines: font-bold text-5xl md:text-6xl lg:text-7xl
- Section Headers: font-semibold text-3xl md:text-4xl
- Body Text: font-normal text-base md:text-lg leading-relaxed
- Accent Text: font-medium text-sm uppercase tracking-wider

**Secondary Font**: Merriweather (for quotes/testimonials) - adds warmth and credibility

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Container max-width: max-w-7xl
- Content max-width: max-w-4xl (for text-heavy sections)

## Page Structure & Sections

### 1. Hero Section (with Parallax)
- Height: min-h-[80vh]
- Parallax background image showing cross-cultural elements (books, documents, cultural motifs)
- Centered welcome message overlay with frosted glass effect (backdrop-blur-md)
- Bilingual headline: "SERVICE DE TRADUCTION FR ↔ TR"
- Language selector (FR/TR/DE flags) top-right
- Smooth scroll indicator at bottom

### 2. Services Overview
- 3-column grid (2 on tablet, 1 on mobile)
- Each service card: French→Turkish, Turkish→French, Specialized (legal/technical)
- Icons from Heroicons (document-text, language, academic-cap)
- Hover effect: subtle lift and shadow

### 3. About Us / Notre Entreprise
- 2-column layout: Left (text), Right (image or visual element)
- Company description from both TR and FR perspectives
- Quality assurance highlights with checkmark icons
- Cultural sensitivity statement

### 4. Why Choose TRADURAN
- 4-column stats grid: Years experience, Projects completed, Satisfied clients, Language pairs
- Animated counter on scroll (numbers count up when visible)
- Icons representing accuracy, speed, cultural expertise, confidentiality

### 5. Process Flow
- Horizontal stepper/timeline (Request → Review → Translate → Deliver → Follow-up)
- Each step with icon and brief description
- Connecting lines between steps

### 6. Testimonials (Optional but Recommended)
- 2-column layout with client quotes
- Company names (if available) or "Client confidentiel"
- Star ratings or cultural flags

### 7. Contact Section
- Split layout: Left (contact form), Right (contact information + map placeholder)
- Form fields: Name, Email, Phone, Service needed (dropdown: FR→TR / TR→FR), Message
- Direct contact: a.d@traduran.lu, +352 661 885 750
- Office hours display

### 8. Footer
- 3-column: Company info, Quick links, Newsletter/Social
- Repeated contact information
- Language selector
- Copyright: "© 2024 TRADURAN. Tous droits réservés."

## Component Library

**Navigation Bar:**
- Sticky header with backdrop-blur
- Logo left, Menu items center, Language selector + CTA right
- Mobile: Hamburger menu

**Buttons:**
- Primary: bg-terracotta (15 60% 55%), text-white, rounded-lg, px-8 py-3
- Secondary: border-2 border-navy, text-navy, rounded-lg, px-8 py-3
- On images: backdrop-blur-md bg-white/20, border border-white/40

**Cards:**
- Rounded corners: rounded-xl
- Shadow: shadow-lg hover:shadow-2xl transition
- Padding: p-8
- Background: bg-white

**Form Inputs:**
- Border: border-2 border-gray-300 focus:border-terracotta
- Rounded: rounded-lg
- Padding: px-4 py-3
- Labels: font-medium text-sm text-charcoal

## Animations & Interactions

**Parallax Hero:**
- Background image moves at 0.5x scroll speed
- Implemented via CSS transform: translateY

**Scroll Animations:**
- Fade-in on scroll for sections (using Intersection Observer)
- Number counters animate when in viewport
- Subtle slide-up effect for cards

**Micro-interactions:**
- Button hover: slight scale (scale-105), shadow increase
- Card hover: lift effect (translateY(-4px))
- Form focus: border color change, subtle glow
- Language selector: smooth flag transition

**Minimalist Approach**: Animations are purposeful, not distracting. Total animation duration < 400ms

## Images

**Hero Background:**
- Description: High-quality image showing bilingual documents, French and Turkish cultural elements (Eiffel Tower silhouette + Turkish patterns), or professional translator workspace
- Placement: Full-width background with overlay (bg-navy/60)
- Parallax: Yes (moves slower than scroll)

**About Section:**
- Description: Professional team image or cultural bridge visual (French-Turkish landmarks merged)
- Placement: Right column of 2-column layout
- Style: Rounded corners (rounded-2xl)

**Process Icons:**
- Use Heroicons: inbox, magnifying-glass, language, paper-airplane, check-circle

## Accessibility & Dark Mode
- Maintain WCAG AA contrast ratios
- Focus states clearly visible with ring-2 ring-terracotta
- Alt text for all images
- Semantic HTML (header, nav, main, section, footer)
- Light mode only (professional service context)

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

This design creates a sophisticated, trustworthy translation service website that honors the bilingual nature of the business while maintaining modern web standards.