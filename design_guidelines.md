# Workshop on Wheels - Design Guidelines

## Design Approach & References
**Reference-Based Design** drawing inspiration from service booking platforms (Thumbtack, YourMechanic, TaskRabbit) with automotive industry trust elements. The design emphasizes credibility, convenience, and action-oriented user flows to drive bookings.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Trust Blue: 210 85% 45% (primary CTAs, headers, trust elements)
- Deep Navy: 215 25% 25% (text, footer backgrounds)
- Pure White: 0 0% 100% (backgrounds, contrast)
- Energy Orange: 25 95% 55% (accent CTAs, highlights, urgency indicators)

**Supporting Colors:**
- Light Blue: 210 70% 96% (section backgrounds, cards)
- Soft Gray: 220 10% 96% (borders, subtle backgrounds)
- Success Green: 142 70% 45% (available slots, confirmations)
- Warning Amber: 40 95% 60% (emergency services, alerts)

### Typography
**Font Families:**
- Primary: 'Inter' (body text, UI elements) - Google Fonts
- Headings: 'Outfit' (display, headers) - Google Fonts

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsections: text-xl md:text-2xl, font-semibold
- Body: text-base md:text-lg
- Small Print: text-sm

### Layout System
**Spacing Primitives:** Consistently use Tailwind units of 4, 6, 8, 12, 16, 20 for margins/padding (p-4, mb-8, gap-6, py-20)

**Container Strategy:**
- Full-width sections with inner max-w-7xl mx-auto px-4
- Content sections: max-w-6xl for feature grids
- Text content: max-w-3xl for readability
- Form containers: max-w-2xl

**Grid System:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 lg:grid-cols-2
- How It Works: grid-cols-1 md:grid-cols-3
- Pricing cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

## Component Library

### Navigation
Sticky header with white background, subtle shadow on scroll. Logo left, navigation center, "Book Now" CTA (orange) right. Mobile: hamburger menu.

### Hero Section
Full-width, 80vh minimum height with impactful mobile repair van image (blurred background). Overlay with gradient (from navy 80% opacity to transparent). Hero content: bold white headline, supporting text, dual CTAs ("Book Service" orange, "Learn More" outline white with blur backdrop). Trust indicators below: "Certified Mechanics" | "500+ Happy Customers" | "Same-Day Service"

### Service Cards
White cards with subtle shadow, hover lift effect (hover:-translate-y-1). Icon top (orange accent color), service title (navy), description text (gray-600), "Learn More" link (blue). Grid layout with gap-6.

### Booking Form
Multi-step form with progress indicator. Clean white card with blue accent borders. Input fields with focus states (blue border). Dropdown for service selection with icons. Date/time picker with visual calendar. Orange submit button "Confirm Booking"

### Testimonials
Card-based with customer photo (rounded-full, 64px), 5-star rating (orange stars), quote text (italic), customer name and location. Light blue background alternating rows.

### Trust Badges
Horizontal row of certification logos: ASE Certified, BBB Accredited, Warranty Badge, Secure Payment icons. Grayscale with hover color effect.

### Footer
Navy background, white text. Multi-column: Services list, Quick Links, Contact info, Newsletter signup. Social icons (orange on hover). Bottom bar with copyright and privacy links.

## Images
**Hero Image:** Mobile repair van with open equipment bay, mechanic working, bright daylight setting - full-width, 1920x1080px minimum

**Services Section:** Icon-based (use Heroicons or Font Awesome automotive icons in orange)

**How It Works:** Illustrated step graphics showing phone booking, van arriving, mechanic working

**About Us:** Team photo of mechanics with vans, professional attire, welcoming poses - 1200x800px

**Testimonials:** Customer headshots (circular crops) - 128x128px each

**Trust Section:** Certification badges and partner logos (actual logo images needed)

## Interactions & Animations
**Minimal, purposeful animations only:**
- Smooth scroll to sections (scroll-smooth)
- Card hover elevations (transition-transform duration-200)
- Button hover states (built-in, no custom)
- Form input focus rings (ring-2 ring-blue-500)
- Sticky header shadow on scroll (transition-shadow)

## Mobile Responsiveness
Mobile-first approach with breakpoints: sm:640px, md:768px, lg:1024px, xl:1280px
- Stack all grids to single column on mobile
- Hero CTA stack vertically on mobile
- Navigation collapses to hamburger menu < md
- Form inputs full-width on mobile with larger tap targets (min-h-12)

## Accessibility
- WCAG AA contrast ratios (navy on white: 12:1, blue on white: 4.8:1)
- Focus indicators on all interactive elements
- Semantic HTML (nav, main, section, article)
- Alt text for all images (descriptive)
- Form labels properly associated
- Keyboard navigation support

## Call-to-Action Strategy
**Primary CTA:** Orange "Book Now" button - appears in hero, navigation, pricing section, bottom of each service
**Secondary CTA:** Blue outline "Call Us" - appears in hero, contact section
**Tertiary:** Text links in blue for "Learn More" throughout