# Landing Page Template

A production-ready, fully-featured landing page template built with **Vite + React + TypeScript + TailwindCSS**. Designed for small businesses to quickly customize and deploy a professional single-page website.

## ✨ Features

- **Modern Tech Stack**: Vite, React 19, TypeScript (strict mode), TailwindCSS
- **Fully Responsive**: Optimized for screens from 360px to 1440px+
- **Accessibility First**: WCAG AA compliant with semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Performance**: Code splitting, lazy loading, optimized bundle size
- **Components**: Header, Hero, Services, About, Testimonials, Pricing, FAQ, Contact, Footer
- **Interactive Features**: 
  - Sticky navigation with active section highlighting
  - Accordion FAQ with keyboard support
  - Form validation with consent checkbox
  - Cookie consent banner
  - Back-to-top button
  - Mobile floating call button
- **Type-Safe**: Full TypeScript coverage with strict checks
- **Easy Customization**: All content in editable data files with TODO markers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
# Build for production
npm run build
# or
pnpm build

# Preview production build
npm run preview
# or
pnpm preview
```

### Linting & Formatting

```bash
# Run ESLint
npm run lint
# or
pnpm lint

# Format with Prettier
npm run format
# or
pnpm format
```

## 📁 Project Structure

```
landingPageSample1/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Sticky navigation with active highlighting
│   │   ├── Hero.tsx         # Hero section with CTAs
│   │   ├── TrustBar.tsx     # Partner/client logos
│   │   ├── Services.tsx     # Service cards with icons
│   │   ├── About.tsx        # About section with stats
│   │   ├── Testimonials.tsx # Client testimonials
│   │   ├── Pricing.tsx      # Pricing tiers
│   │   ├── FAQ.tsx          # Accordion FAQ (ARIA compliant)
│   │   ├── Contact.tsx      # Contact form with validation
│   │   ├── Footer.tsx       # Footer with links and info
│   │   ├── BackToTop.tsx    # Scroll-to-top button
│   │   ├── CookieBanner.tsx # GDPR cookie consent
│   │   └── FloatingCallButton.tsx # Mobile call button
│   ├── hooks/               # Custom React hooks
│   │   ├── useActiveSection.ts    # IntersectionObserver for nav
│   │   └── useScrollTopVisible.ts # Show/hide back-to-top
│   ├── utils/               # Utility functions
│   │   └── validators.ts    # Form validation logic
│   ├── types/               # TypeScript type definitions
│   │   └── content.ts       # Content data types
│   ├── data/                # Editable content data
│   │   └── content.ts       # All page content (TODO markers)
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # App entry point
│   └── index.css            # Global styles + Tailwind
├── public/                  # Static assets
├── index.html               # HTML shell with meta tags
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind configuration
├── postcss.config.js        # PostCSS config
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── .prettierrc              # Prettier configuration
└── README.md                # This file
```

## 🎨 Color Palette

The landing page uses the **Golden Luxe** color scheme:
- **Cream** (#EDE7C7) - Elegant backgrounds
- **Deep Red** (#8B0000) - Primary accent
- **Dark Maroon** (#5B0202) - Rich accents
- **Rich Brown** (#200E01) - Dark elements

See `COLOR_PALETTE.md` for complete color documentation.

## 🎨 Customization Checklist

### 1. Update Company Information

Edit `src/data/content.ts`:

- [x] `companyProfile` - name, tagline, description, contact info, address, hours
- [x] `trustPartners` - partner/client names
- [x] `services` - service titles and descriptions
- [x] `pricingTiers` - pricing plans and features
- [x] `testimonials` - client reviews
- [x] `faqItems` - frequently asked questions

### 2. Update Meta Tags

Edit `index.html`:

- [x] `<title>` tag
- [x] Meta description
- [x] Open Graph tags (og:title, og:description, og:image, og:url)
- [x] Twitter Card tags
- [x] JSON-LD structured data (LocalBusiness schema)
- [x] Canonical URL

### 3. Update Branding

**Colors**: The site currently uses the **Golden Luxe** palette (see `COLOR_PALETTE.md`).
To customize, edit `tailwind.config.ts`:
```ts
colors: {
  cream: {
    300: '#ede7c7', // Primary cream
    // ... other shades
  },
  accent: {
    600: '#8b0000', // Primary red
    800: '#5b0202', // Dark maroon
    950: '#200e01', // Rich brown
    // ... other shades
  }
}
```

**Logo**: Replace "YourBrand" text in `src/components/Header.tsx` with your logo/image

**Fonts**: Update font stack in `tailwind.config.ts` if needed (currently using system fonts)

### 4. Replace Placeholder Images

- Update `src/components/About.tsx` - replace image placeholder
- Add company logo to `public/` folder
- Update `index.html` favicon link
- Add Open Graph image to `public/og-image.jpg` (1200x630px recommended)

### 5. Update Trust Bar

Replace SVG placeholders in `src/components/TrustBar.tsx` with actual partner logos

### 6. Configure Form Submission

`src/components/Contact.tsx`:
- Currently simulates async submission
- Add real API endpoint or email service integration (e.g., FormSpree, SendGrid, EmailJS)
- The `mailto:` fallback link is already configured

### 7. Analytics & Tracking (Optional)

Add analytics code to `index.html` or create a separate analytics component:
- Google Analytics
- Plausible
- Fathom
- etc.

## 🎯 TODO Markers

Search for `// TODO:` comments throughout the codebase for quick customization points:

```bash
# Find all TODO markers
grep -r "TODO" src/
```

Key TODO locations:
- `index.html` - Meta tags and structured data
- `src/data/content.ts` - All content placeholders
- `src/components/About.tsx` - About section content and image

## ♿ Accessibility Features

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Proper heading hierarchy (H1 → H2 → H3)
- Skip-to-content link for keyboard users
- ARIA labels and roles where appropriate
- Keyboard navigation support (FAQ accordion, mobile menu)
- Focus visible styles
- Color contrast ≥ 4.5:1
- Reduced motion support with `prefers-reduced-motion`
- Form labels properly associated with inputs
- Alt text for images (decorative SVGs marked `aria-hidden`)

## 🔍 SEO Features

- Semantic HTML structure
- Meta description and title tags
- Open Graph tags for social media
- Twitter Card tags
- JSON-LD structured data (LocalBusiness schema)
- Canonical URL
- Proper heading hierarchy
- Mobile-friendly responsive design
- Fast loading with code splitting and lazy loading

## ⚡ Performance Optimizations

- **Code Splitting**: Below-the-fold components lazy-loaded with `React.lazy()`
- **Image Optimization**: Placeholder for lazy loading with `loading="lazy"` and `decoding="async"`
- **Bundle Optimization**: Vendor chunk splitting in Vite config
- **CSS**: Utility-first Tailwind CSS (purged unused styles in production)
- **No Heavy Dependencies**: Inline SVG icons, no icon libraries
- **Smooth Scrolling**: Respects `prefers-reduced-motion`

## 🧪 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid & Flexbox
- IntersectionObserver API

## 📝 TypeScript Configuration

- **Strict Mode**: Enabled for type safety
- **No Unused Locals/Parameters**: Enforced
- **Path Aliases**: Can be configured in `tsconfig.json` and `vite.config.ts`

## 🎨 Design System

### Colors
- **Accent Color**: Customizable via `tailwind.config.ts`
- **Neutrals**: Gray scale from Tailwind
- **Semantic Colors**: Success (green), error (red), warning (yellow)

### Typography
- **Font Stack**: System fonts for optimal performance
- **Sizes**: Responsive using Tailwind's type scale

### Spacing
- Consistent spacing using Tailwind's scale (4px base unit)

### Components
- **Cards**: Subtle shadow, hover lift effect, rounded corners
- **Buttons**: Scale/opacity transitions, reduced-motion friendly
- **Forms**: Clear focus states, inline validation

## 🛠️ Tech Stack Details

- **Vite 5+**: Fast dev server, optimized builds
- **React 19**: Latest features, StrictMode enabled
- **TypeScript 5.9+**: Strict type checking
- **TailwindCSS 3**: Utility-first CSS framework
- **ESLint**: Code linting with TypeScript, React, and a11y rules
- **Prettier**: Code formatting

## 📦 Build Output

Production build creates optimized assets in `dist/`:
- Minified JavaScript with vendor code splitting
- Purged CSS with only used Tailwind classes
- Hashed filenames for cache busting
- Source maps disabled for smaller bundle

## 🚨 Common Issues

### Issue: Tailwind styles not applying
**Solution**: Ensure Tailwind directives are in `src/index.css` and PostCSS is configured

### Issue: TypeScript errors
**Solution**: Run `npm run build` to see all type errors. Fix strict type issues.

### Issue: Lazy loaded components not working
**Solution**: Check that component exports match the import pattern in `App.tsx`

## 📄 License

This template is provided as-is for use in your projects. No attribution required.

## 🤝 Contributing

This is a template project. Feel free to fork and customize for your needs.

## 📞 Support

For issues or questions:
- Check the TODO markers for customization points
- Review component files for inline documentation
- Check browser console for runtime errors
- Ensure all dependencies are installed correctly

---

**Happy Building! 🚀**

Remember to:
1. Search and replace all TODO markers with your content
2. Update meta tags and structured data in `index.html`
3. Customize colors in `tailwind.config.ts`
4. Replace placeholder images and logos
5. Test on multiple devices and screen sizes
6. Run Lighthouse audit before deployment
