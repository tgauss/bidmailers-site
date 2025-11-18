# Bid Mailers Site Documentation

## Project Overview
This is the marketing website for Bid Mailers, a roofing contractor direct mail service that helps contractors send physical bid estimates to homeowners. The site was transformed from a shape.ai template (call scheduling software) into a complete Bid Mailers branded site.

## Business Context

### What Bid Mailers Does
Bid Mailers is a service for roofing contractors that combines:
1. **Mobile App**: Contractors walk/drive neighborhoods and mark homes needing roof work
2. **Pricing**: Contractors set their own prices for each property
3. **Fulfillment**: Bid Mailers handles printing and mailing professional estimates
4. **Delivery**: Estimates arrive in homeowners' mailboxes within 72 hours

### Target Audience
- Roofing contractors who are tired of buying expensive shared leads
- Contractors who want to control their local market
- Companies looking for better ROI than digital advertising

### Key Value Props
- $4.50/$4.00/$2.75 per mailer pricing tiers
- 72-hour turnaround from marking to mailbox
- 5x higher response rate than digital ads
- No competition from shared leads

## Technical Stack

- **Framework**: Next.js 15.1.6 with App Router
- **React**: 19.0.0
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Tabler Icons, React Icons
- **Content**: Content Collections for blog/MDX
- **Deployment**: Vercel
- **Repository**: https://github.com/tgauss/bidmailers-site.git

## Color Scheme

Primary brand colors (defined in `/app/globals.css`):
```css
--primary: #188bf6;        /* Main blue */
--primary-dark: #1273d6;   /* Darker blue */
--primary-darker: #0d5bb5; /* Darkest blue */
--primary-light: #3d9df7;  /* Light blue */
--primary-lighter: #62aff9;/* Lighter blue */
--primary-soft: #e3f3ff;   /* Soft blue background */
--primary-softer: #f0f8ff; /* Softer blue background */
```

## Site Structure

### Landing Page Sections (`/app/(marketing)/page.tsx`)
1. **Hero** - Headline, app mockup, app store badges
2. **Features** - Key metrics grid
3. **Features2** - "How It Works" visual cards
4. **Features3** - Workflow visualization
5. **Pricing** - Three-tier pricing cards
6. **Testimonials** - Contractor success metrics
7. **TestimonialsMasonryGrid** - 12 detailed contractor reviews
8. **FAQ** - Common questions
9. **CTA** - Final call-to-action with app badges

### Other Pages
- `/blog` - Blog listing page
- `/blog/[slug]` - Individual blog posts
- `/login` - Login page
- `/signup` - Signup page

## Key Components

### Hero Section (`/components/hero.tsx`)
- App mockup image: `/public/bid-mailers-mockup.webp`
- Narrowed to `max-w-[280px] md:max-w-md` for space efficiency
- App store badges with direct links:
  - iOS: https://apps.apple.com/us/app/bid-mailers-mobile/id6741305044
  - Android: https://play.google.com/store/apps/details?id=com.bidmailers.app

### Testimonials (`/components/testimonials-masonry.tsx`)
- 12 realistic roofing contractor testimonials
- Contractors from major US cities
- Specific metrics and pain points addressed
- Uses pravatar.cc for placeholder images

### Features
- **Features2**: Interactive map, ROI chart, orbiting icons, mobile app preview
- **Features3**: Three-card workflow showing app usage, mailing process, and ROI tracking

## Recent Changes Log

### Session 1: Initial Setup and Transformation
1. Cloned shape.ai template
2. Updated brand colors from orange to blue (#188bf6)
3. Replaced all content from call scheduling to roofing/direct mail
4. Added Bid Mailers logo
5. Set up local development on port 3004

### Session 2: Content and Feature Updates
1. Implemented 11-section landing page structure
2. Added app store badges to Hero and CTA sections
3. Updated orbiting icons to mailing-related icons
4. Fixed Features3 layout overlapping issues
5. Updated pricing to $4.50/$4.00/$2.75 tiers
6. Added hero mockup image

### Session 3: Deployment and Polish
1. Created GitHub repository
2. Fixed Vercel deployment issues (shiki version conflict)
3. Made hero mockup image narrower (user request)
4. Updated names to American names (Kishore→Michael, Manu→David)
5. Fixed all ESLint errors for clean build
6. Added testimonials masonry grid with 12 contractor reviews

## Known Issues and Warnings

### Acceptable Warnings
- `@next/next/no-img-element` warnings for app store badges - These are acceptable as they're external assets

### Fixed Issues
- ✅ LogoIcon export error in features2.tsx
- ✅ Unused imports removed
- ✅ React apostrophe escaping (using `&apos;`)
- ✅ Shiki version conflict with rehype-pretty-code

## Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

### GitHub
Repository: https://github.com/tgauss/bidmailers-site.git

### Vercel
- Deploys automatically from main branch
- Build command: `npm run build`
- Output directory: `.next`
- Node version: 18.x or higher

## Environment Variables
Currently no environment variables required for basic deployment.

## Future Enhancements to Consider

1. **Real Company Logos** - LogoCloud component is ready but commented out
2. **Blog Content** - Blog infrastructure exists but needs real content
3. **Analytics Integration** - Add tracking for conversion metrics
4. **Form Handling** - Login/signup forms need backend integration
5. **Image Optimization** - Consider optimizing testimonial images
6. **Mobile App Deep Linking** - Add smart app banners for mobile visitors

## File Structure

```
/app
  /(marketing)
    /page.tsx         # Main landing page
  /blog
    /[slug]
      /page.tsx       # Blog post template
    /page.tsx         # Blog listing
  /login/page.tsx     # Login page
  /signup/page.tsx    # Signup page
  /globals.css        # Global styles and color variables

/components
  /hero.tsx           # Hero section with app mockup
  /features.tsx       # Metrics grid
  /features2.tsx      # How it works section
  /features3.tsx      # Workflow visualization
  /pricing.tsx        # Pricing cards
  /testimonials.tsx   # Success metrics
  /testimonials-masonry.tsx # Contractor reviews grid
  /faq.tsx           # FAQ accordion
  /cta.tsx           # Call-to-action section
  /footer.tsx        # Site footer
  /navbar.tsx        # Navigation

/public
  /bid-mailers-mockup.webp  # Hero app mockup
  /app-store-badge.svg      # iOS download badge
  /google-play-badge.png    # Android download badge
  /logo.svg                 # Bid Mailers logo
```

## Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] App store badges link to correct stores
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Build completes with no errors
- [ ] Deployment to Vercel successful
- [ ] Images load correctly
- [ ] Animations perform smoothly

## Contact for Questions

For questions about the business logic or content, the client has provided detailed business documentation in the initial briefing. For technical questions, this documentation should provide sufficient context to continue development.

---

*Last Updated: November 2024*
*Documentation Version: 1.0*