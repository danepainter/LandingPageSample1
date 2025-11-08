# Quick Customization Guide

This guide will help you customize the landing page template in **under 30 minutes**.

## 🎯 Step-by-Step Customization

### Step 1: Update Company Information (5 minutes)

**File**: `src/data/content.ts`

Replace all placeholder values in the `companyProfile` object:

```typescript
export const companyProfile: CompanyProfile = {
  name: 'Your Business Name',           // ← Update this
  tagline: 'Your catchy tagline',       // ← Update this
  description: 'Your description',      // ← Update this
  phone: '+1-555-555-1234',             // ← Update this
  email: 'contact@yourbusiness.com',    // ← Update this
  address: {
    street: '123 Main Street',          // ← Update all address fields
    city: 'Your City',
    state: 'ST',
    zip: '12345',
    country: 'USA',
  },
  hours: 'Mon-Fri: 9:00 AM - 5:00 PM',  // ← Update this
  social: {
    facebook: 'https://facebook.com/yourbusiness',    // ← Update or remove
    twitter: 'https://twitter.com/yourbusiness',      // ← Update or remove
    linkedin: 'https://linkedin.com/company/yourbusiness',  // ← Update or remove
    instagram: 'https://instagram.com/yourbusiness',  // ← Update or remove
  },
};
```

### Step 2: Update Services (5 minutes)

**File**: `src/data/content.ts`

Edit the `services` array (3-6 services recommended):

```typescript
export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Your Service Name',           // ← Update
    description: 'Service description',   // ← Update (1-2 sentences)
    icon: 'chart',  // Options: chart, users, rocket, shield, lightbulb, settings
  },
  // Add or remove services as needed
];
```

### Step 3: Update Pricing (5 minutes)

**File**: `src/data/content.ts`

Edit the `pricingTiers` array:

```typescript
export const pricingTiers: PriceTier[] = [
  {
    id: 'starter',
    name: 'Starter',                      // ← Update plan name
    price: '$49',                         // ← Update price
    period: '/month',                     // ← Update period
    description: 'Plan description',      // ← Update description
    features: [                           // ← Update features list
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    highlighted: true,  // Set true for "Most Popular" badge
  },
  // Add 2-4 pricing tiers total
];
```

### Step 4: Update Testimonials (3 minutes)

**File**: `src/data/content.ts`

Edit the `testimonials` array (2-4 recommended):

```typescript
export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Client Name',                  // ← Update
    role: 'Job Title',                    // ← Update
    company: 'Company Name',              // ← Update (optional)
    quote: 'Testimonial text here...',    // ← Update (2-3 sentences)
  },
];
```

### Step 5: Update FAQ (3 minutes)

**File**: `src/data/content.ts`

Edit the `faqItems` array (4-8 items recommended):

```typescript
export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Your question?',           // ← Update
    answer: 'Your detailed answer...',    // ← Update (2-4 sentences)
  },
];
```

### Step 6: Update Meta Tags for SEO (5 minutes)

**File**: `index.html`

1. **Update title** (line 7):
```html
<title>Your Business Name | Your Tagline</title>
```

2. **Update meta description** (line 8):
```html
<meta name="description" content="Your SEO-friendly description (150-160 characters)" />
```

3. **Update Open Graph tags** (lines 14-18):
```html
<meta property="og:title" content="Your Business Name | Your Tagline" />
<meta property="og:description" content="Your social media description" />
<meta property="og:url" content="https://yourdomain.com/" />
<meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
```

4. **Update Twitter Card tags** (lines 21-25):
```html
<meta name="twitter:title" content="Your Business Name | Your Tagline" />
<meta name="twitter:description" content="Your Twitter description" />
```

5. **Update JSON-LD structured data** (lines 31-56):
   - Update all business information
   - Update address, phone, email
   - Update opening hours
   - Update social media links

### Step 7: Customize Brand Colors (2 minutes)

**File**: `tailwind.config.ts`

Update the accent color to match your brand:

```typescript
colors: {
  accent: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // ← Main brand color (used most)
    600: '#0284c7',  // ← Hover/active states
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },
}
```

**Quick tip**: Use a color palette generator like:
- [Tailwind Color Shades](https://www.tailwindshades.com/)
- [UI Colors](https://uicolors.app/create)

### Step 8: Update Logo/Branding (2 minutes)

**File**: `src/components/Header.tsx` (line 46)

Replace "YourBrand" text with:
- Your company name (as text), or
- An `<img>` tag with your logo

```tsx
// Option 1: Text logo
<a href="#hero" className="...">
  Your Company Name
</a>

// Option 2: Image logo
<a href="#hero" className="...">
  <img src="/logo.svg" alt="Your Company Name" className="h-8" />
</a>
```

## 🎨 Optional Customizations

### Add Real Partner Logos

**File**: `src/components/TrustBar.tsx`

Replace the `LogoPlaceholder` component with actual logos:

```tsx
{trustPartners.map((partner) => (
  <img 
    key={partner.id}
    src={`/logos/${partner.logo}.svg`}
    alt={partner.name}
    className="h-8 w-auto grayscale opacity-60 hover:opacity-100"
  />
))}
```

### Add About Section Image

**File**: `src/components/About.tsx` (line 66)

Replace the placeholder with an actual image:

```tsx
<img
  src="/about-image.jpg"
  alt="About Your Company"
  className="w-full h-full object-cover rounded-lg shadow-xl"
  loading="lazy"
  decoding="async"
/>
```

### Add Favicon

1. Place your favicon files in the `public/` folder
2. Update `index.html` (line 13):

```html
<link rel="icon" type="image/png" href="/favicon.png" />
```

### Add Open Graph Image

1. Create a 1200x630px image
2. Save as `public/og-image.jpg`
3. Image is already referenced in meta tags

## 🧪 Testing Your Changes

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Checklist
- [ ] All text content updated
- [ ] Contact information correct
- [ ] Phone numbers clickable (mobile)
- [ ] Email links work
- [ ] Navigation scrolls smoothly
- [ ] FAQ accordion expands/collapses
- [ ] Contact form validates inputs
- [ ] Responsive on mobile (360px+)
- [ ] All sections visible and styled

### 3. SEO Checklist
- [ ] Page title descriptive
- [ ] Meta description 150-160 characters
- [ ] Open Graph image exists
- [ ] JSON-LD data accurate
- [ ] All links work

### 4. Build for Production
```bash
npm run build
npm run preview
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Option 2: Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Static Host
1. Run `npm run build`
2. Upload `dist/` folder to your host
3. Configure server to serve `index.html` for all routes

## 📋 Pre-Launch Checklist

- [ ] All TODO comments replaced with real content
- [ ] Contact form email configured (or using mailto link)
- [ ] Analytics added (Google Analytics, Plausible, etc.)
- [ ] Domain and SSL configured
- [ ] Favicon added
- [ ] Open Graph image added
- [ ] Tested on mobile devices
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Lighthouse score checked (aim for 90+)
- [ ] 404 page configured (if needed)
- [ ] Terms of Service / Privacy Policy links added (if needed)

## 🆘 Need Help?

### Common Issues

**Issue**: Colors not showing
- **Fix**: Ensure `tailwind.config.ts` has your colors defined
- Run `npm run dev` to regenerate CSS

**Issue**: Icons not displaying
- **Fix**: Check icon names match available icons in `Services.tsx`

**Issue**: Form not submitting
- **Fix**: Form currently simulates submission. Add real backend/service integration.

**Issue**: Build errors
- **Fix**: Run `npm run build` and check terminal for specific TypeScript errors

### Finding TODOs

Search for all remaining TODOs:
```bash
# In project root
grep -r "TODO" src/
```

## 🎉 You're Done!

Your landing page is now customized and ready to deploy!

Remember to:
1. Test thoroughly on multiple devices
2. Run a Lighthouse audit
3. Get feedback from colleagues
4. Deploy to production

**Estimated Total Time**: 30 minutes

---

Need more help? Check the main `README.md` for detailed documentation.

