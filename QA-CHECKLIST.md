# QA Checklist - Cool Burger Landing Page Prototype

## ✅ Functional Testing

### Navigation & Links
- [ ] All internal anchors work correctly (Menu, About, Location, Contact sections)
- [ ] WhatsApp button opens correct URL with pre-filled message
- [ ] External links open in new tab with rel="noopener noreferrer"
- [ ] Logo/branding elements are consistent

### Responsive Design
- [ ] Layout adapts correctly to mobile (320px), tablet (768px), and desktop (1024px+) screens
- [ ] Hero section maintains visual impact on all screen sizes
- [ ] Burger grid shows appropriate column count (1→2→4 columns)
- [ ] Text remains readable without horizontal scrolling
- [ ] Touch targets are appropriately sized for mobile

### Animations & Interactions
- [ ] Hero section animations play on initial load
- [ ] Scroll-triggered animations work when scrolling to sections
- [ ] Hover effects work on buttons and interactive elements
- [ ] No animation jank or performance issues on mid-tier devices
- [ ] Animations respect user's prefers-reduced-motion setting (if implemented)

### Forms & Inputs
- [ ] No actual forms present (replaced with WhatsApp CTA)
- [ ] WhatsApp click-to-chat functionality works correctly

## 🔒 Security Testing

### Headers & Protection
- [ ] Security headers file (_headers) present in project root
- [ ] Content Security Policy configured appropriately
- [ ] X-Frame-Options set to DENY
- [ ] X-Content-Type-Options set to nosniff
- [ ] Referrer-Policy set to strict-origin-when-cross-origin

### Dependency Security
- [ ] npm audit shows no high/critical vulnerabilities (after fixes)
- [ ] All dependencies are up-to-date with security patches
- [ ] No known vulnerable packages in use

### Data Protection
- [ ] No API keys or secrets in client-side code
- [ ] No sensitive data exposed in JavaScript bundles
- [ ] No service_role keys or Supabase configuration (not used)

## ⚡ Performance Testing

### Load Time
- [ ] Initial page load under 3 seconds on 3G connection (simulated)
- [ ] First Contentful Paint (FCP) under 1.5 seconds
- [ ] Largest Contentful Paint (LCP) under 2.5 seconds

### Asset Optimization
- [ ] Images optimized (though currently CSS-based placeholders)
- [ ] Fonts properly loaded via next/font (self-hosted)
- [ ] JavaScript bundles reasonably sized
- [ ] CSS minified in production build
- [ ] HTML minified in production build

### SEO Performance
- [ ] Page loads without blocking JavaScript
- [ ] Critical rendering path optimized
- [ ] No excessive DOM size
- [ ] Efficient CSS selectors

## 📊 SEO Validation

### Meta Tags
- [ ] Title tag present and descriptive (< 60 characters)
- [ ] Meta description present and compelling (< 160 characters)
- [ ] Open Graph tags configured (title, description, image, url)
- [ ] Twitter Card tags configured
- [ ] Canonical tag implied by static export

### Content Structure
- [ ] H1 tag present with primary keyword ("Hamburguesas Artesanales")
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Descriptive alt text for images (when implemented)
- [ ] Semantic HTML5 elements used (header, main, section, nav, footer)

### Local SEO (Placeholder Validation)
- [ ] Business name, address, phone number consistent
- [ ] Schema.org JSON-LD ready for implementation (Restaurant type)
- [ ] Location-specific keywords in content ("hamburguesas artesanales México")
- [ ] Google Business Profile setup guide included in documentation

## 📱 Mobile-Specific Testing

### Touch Interactions
- [ ] All buttons and links have adequate touch target size (≥48x48px)
- [ ] Swipe gestures not interfered with by page elements
- [ ] Forms (when added) have appropriate input types for mobile

### Mobile Performance
- [ ] Page loads quickly on mobile networks
- [ ] No horizontal scrolling on mobile
- [ ] Text scalable without breaking layout
- [ ] Touch feedback visible on interactive elements

## 🎨 Visual & UX Testing

### Design Consistency
- [ ] Color palette used consistently (black, red, cream, gold)
- [ ] Typography consistent (Inter font weights)
- [ ] Spacing and alignment consistent
- [ ] Button styles consistent across sections

### Accessibility
- [ ] Color contrast ratios meet WCAG AA standards
- [ ] Interactive elements have clear focus states
- [ ] Logical tab order through interactive elements
- [ ] ARIA labels used where needed (when forms implemented)
- [ ] Text resizable up to 200% without loss of content or functionality

### Content Quality
- [ ] Copy is engaging and matches brand voice (cool, urbano)
- [ ] No lorem ipsum or obvious placeholder text in final version
- [ ] Spelling and grammar correct in Spanish
- [ ] Persuasive CTAs and benefit-focused language

## 🚀 Deployment Readiness

### Build Process
- [ ] npm run build completes without errors
- [ ] Production build outputs to ./out directory
- [ ] No console errors in production build
- [ ] Source maps generated appropriately (if needed)

### Configuration
- [ ] next.config.ts correctly set for static export (output: 'export')
- [ ] tailwind.config.ts includes all necessary content paths
- [ ] Environment variables handled properly (none required for prototype)
- [ ] No hardcoded production values in codebase

### Cloudflare Pages Compatibility
- [ ] _headers file present for security headers
- [ ] No server-side dependencies that won't work on static hosting
- [ ] All external calls are client-safe (WhatsApp, fonts, etc.)
- [ ] Build output structure compatible with Cloudflare Pages

## 📋 Test Environment

### Browsers to Test
- [ ] Chrome Latest (Windows/macOS/Linux/Android)
- [ ] Firefox Latest (Windows/macOS/Linux/Android)
- [ ] Safari Latest (macOS/iOS)
- [ ] Edge Latest (Windows/macOS)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Testing Tools
- [ ] Lighthouse (for performance, accessibility, SEO)
- [ ] WebPageTest (for loading performance)
- [ ] Manual visual inspection
- [ ] Responsiveness testing via browser dev tools

## 📝 Known Issues & Placeholders

### Intentional Placeholders (Prototype Phase)
- [ ] Burger images: CSS-based illustrations (to be replaced with real photos)
- [ ] Map embed: Placeholder div (to be replaced with actual Google Maps)
- [ ] WhatsApp number: +52 55 1234 5678 (to be replaced with real number)
- [ ] Address: Av. Revolución #123, Col. Hipódromo, CDMX (placeholder)
- [ ] Hours: Lunes a Domingo: 12:00 PM - 10:00 PM (placeholder)
- [ ] Menu items and prices: Placeholder content (to be confirmed with client)
- [ ] Social media links: Placeholders in footer (to be added)

### Technical Debt (Acceptable for Prototype)
- [ ] No actual form validation (replaced with WhatsApp CTA)
- [ ] No analytics implementation (would be added in phase 2)
- [ ] No error boundaries (minimal JS reduces need)
- [ ] No automated tests (visual/manual QA sufficient for prototype)

## ✅ Sign-off Criteria

For client presentation prototype, the following must be PASS:

### Essential (Must Pass)
- [ ] Visual design matches approved moodboard (dark food photography, streetwear vibe)
- [ ] All core sections present and accessible
- [ ] WhatsApp functionality works correctly
- [ ] Responsive design works on mobile and desktop
- [ ] No JavaScript errors in console
- [ ] Page loads without blank screens or loading failures

### Recommended (Should Pass)
- [ ] Lighthouse Performance score > 80
- [ ] Lighthouse Accessibility score > 80
- [ ] No broken links or missing resources
- [ ] Consistent brand voice in all copy
- [ ] Professional presentation quality

## 📄 Testing Results (To Be Filled During Testing)

**Tester**: _________________________  
**Date**: _________________________  
**Environment**: _________________________  
**Browser Versions Tested**:  
- Chrome: _______  
- Firefox: _______  
- Safari: _______  
- Edge: _______  
- Mobile Safari: _______  
- Chrome Mobile: _______  

**Lighthouse Scores** (if run):  
- Performance: _______/100  
- Accessibility: _______/100  
- Best Practices: _______/100  
- SEO: _______/100  

**Issues Found**:  
1. ________________________________________________________  
2. ________________________________________________________  
3. ________________________________________________________  

**Resolution Status**:  
- [ ] All blocking issues resolved  
- [ ] Minor issues documented for post-launch  
- [ ] Major issues require attention before presentation  

**Overall Recommendation**:  
- [ ] READY FOR CLIENT PRESENTATION  
- [ ] NEEDS MINOR FIXES BEFORE PRESENTATION  
- [ ] REQUIRES SIGNIFICANT WORK BEFORE PRESENTATION  

## 📎 Appendix: Testing Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server locally
npm start

# Lighthouse audit (run in Chrome DevTools or via CLI)
# npm install -g lighthouse
# lighthouse http://localhost:3000 --preset=desktop

# Accessibility testing
# npm install -g axe-cli
# axe http://localhost:3000

# Security headers check
# curl -I http://localhost:3000
```