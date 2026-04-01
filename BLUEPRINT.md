# Blueprint: Cool Burger Landing Page

## Classification
- Base: landing
- Modules: whatsapp, animations, local-seo
- Supabase: none — estimated cost: $0/mo
- Client tier: $199/mo

## File Structure
[Following Feature-Sliced Design from ref-templates.md]

src/
  app/                    # Next.js App Router (routes only)
    layout.tsx           # Root layout with providers
    page.tsx             # Home page (landing)
    whatsapp/            # WhatsApp module (if needed as route)
  features/               # Domain features
    hero/                # Hero section
      components/
        Hero.tsx
        BurgerIllustration.tsx
      hooks/
        useHeroAnimations.ts
      types.ts
    menu/                # Burgers section
      components/
        BurgerGrid.tsx
        BurgerCard.tsx
      types.ts
    about/               # Why Cool Burger section
      components/
        Differentiators.tsx
        IconWithText.tsx
      types.ts
    location/            # Location section
      components/
        MapPlaceholder.tsx
        ContactInfo.tsx
      types.ts
    contact/             # Contact section with WhatsApp
      components/
        WhatsAppButton.tsx
        ContactFormPlaceholder.tsx
      types.ts
  shared/                 # Reusable across features
    components/ui/
      Button.tsx
      Icon.tsx
      Container.tsx
      Section.tsx
    lib/
      gsap.ts            # GSAP initialization and utilities
      seo.ts             # SEO helpers
      whatsapp.ts        # WhatsApp link generator
    hooks/
      useScrollAnimations.ts
      useViewport.ts
    types/
      seo.types.ts
      whatsapp.types.ts
  entities/               # Data models (placeholder data for prototype)
    burger.data.ts
    location.data.ts
    seo.data.ts

## Database Schema
[No database needed - pure static landing]

## Pages/Routes
- / (home) - SSG - Hero + Menu + About + Location + Contact sections

## API Endpoints
[No API endpoints needed - pure static]

## External Integrations
- WhatsApp Business: Click-to-chat functionality with placeholder number
- GSAP ScrollTrigger: For hero animations and scroll reveals
- Framer Motion: For additional micro-interactions
- Google Maps Embed: Placeholder for location section

## n8n Workflows
[None required - prototype]

## Security Requirements
- Basic security headers via next-headers
- Rate limiting placeholder for WhatsApp click tracking (if implemented)
- CSP headers for external embeds
- No auth needed

## SEO Plan
- Implement ref-local-seo.md complete
- Schema.org JSON-LD type: Restaurant
- H1: "Hamburguesas Artesanales en [Ciudad Placeholder]"
- Keywords: "hamburguesas artesanales México", "mejores burgers México", "Cool Burger and Fries"
- Meta tags: title, description in Spanish
- Open Graph tags for social sharing
- Sitemap generated automatically
- robots.txt
- Google Business Profile setup guide included in documentation

## Testing Plan
- Visual regression checks for key sections
- Mobile responsiveness testing
- Scroll animation testing
- Link validation (WhatsApp, social media)
- SEO meta tag validation

## Execution Order
1. /agent planner — Created this blueprint (already completed)
2. /agent frontend — Scaffold file structure per FSD above. Build all UI components with placeholder content. Implement GSAP ScrollTrigger animations in hero and scroll reveals. Add SEO meta tags and JSON-LD. Create WhatsApp click-to-chat functionality.
3. /agent security — Audit security headers. Generate SECURITY-HEADERS.md report. Implement basic rate limiting concept for WhatsApp clicks (placeholder).
4. /agent devops — Configure GitHub Actions workflow for Cloudflare Pages deployment. Set up repository secrets. Create preview deployment setup.
5. /agent qa — Create QA checklist covering responsiveness, animations, links, SEO. Validate against ref-performance.md and ref-animations.md.
6. /agent legal — Generate basic privacy policy (aviso de privacidad) per LFPDPPP. Create terms of service placeholder.

## Estimated Effort
- Requests to LLM: ~15
- Estimated cost (DeepSeek): ~$0.30