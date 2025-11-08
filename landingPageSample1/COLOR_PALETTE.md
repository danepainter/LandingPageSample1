# Golden Luxe Color Palette

Your landing page now uses the elegant **Golden Luxe** color scheme.

## 🎨 Color Palette

### Primary Colors

**Cream (#EDE7C7)** - Used for:
- Hero background gradient
- Section backgrounds (About, Contact, Trust Bar)
- Card backgrounds (Testimonials, Pricing)
- Subtle accents and borders

**Deep Red (#8B0000)** - Used for:
- Primary buttons and CTAs
- Accent elements
- Hover states
- Links and interactive elements

**Dark Maroon (#5B0202)** - Used for:
- Button hover states
- Floating call button
- Deep accents

**Rich Brown (#200E01)** - Used for:
- Footer background
- Text on light backgrounds
- Dark, elegant contrast

## 📋 Color Usage by Component

### Hero Section
- Background: Cream gradient (cream-300 → cream-100 → white)
- Decorative blobs: Deep red + cream blend
- Buttons: Deep red with hover states

### Services
- Background: White
- Icon backgrounds: Cream tones
- Cards: White with subtle borders

### About
- Background: Light cream (cream-100)
- Image placeholder: Cream to red gradient
- Stats: Red accent numbers

### Testimonials  
- Background: White
- Cards: Light cream (cream-50) with cream borders
- Quote icons: Red accent

### Pricing
- Background: Very light cream (cream-50)
- Cards: White with subtle shadows
- Highlighted plan: Red border and accents

### FAQ
- Background: White
- Cards: White with cream borders
- Expand icons: Red accent

### Contact
- Background: Light cream (cream-100)
- Form: White inputs
- Buttons: Deep red

### Footer
- Background: Very dark brown (accent-950)
- Text: Light cream
- Links: Cream with accent hover

### UI Elements
- **Back to Top Button**: Red accent with hover
- **Floating Call Button**: Dark maroon
- **Cookie Banner**: Dark background with cream text

## 🎯 Tailwind Classes Reference

### Cream Palette
```
cream-50:  #fdfcf9 (lightest)
cream-100: #faf8f3
cream-200: #f5f1e7
cream-300: #ede7c7 ← Primary cream from image
cream-400: #e5ddb0
cream-500: #ddd399
cream-600: #c9ba7a
cream-700: #b5a15b
cream-800: #8a7a46
cream-900: #5f5331 (darkest)
```

### Accent (Red) Palette
```
accent-50:  #fef2f2 (lightest)
accent-100: #fee2e2
accent-200: #fecaca
accent-300: #fca5a5
accent-400: #f87171
accent-500: #dc2626
accent-600: #8b0000 ← Primary red from image
accent-700: #7a0000
accent-800: #5b0202 ← Dark maroon from image
accent-900: #450101
accent-950: #200e01 ← Rich brown from image (darkest)
```

## 🎨 Design Philosophy

The **Golden Luxe** palette creates a:
- **Elegant** and sophisticated appearance
- **Warm** and inviting feel
- **High contrast** for accessibility
- **Luxurious** brand perception
- **Professional** and trustworthy impression

### Color Psychology
- **Cream**: Elegance, sophistication, warmth
- **Deep Red**: Passion, energy, confidence
- **Dark Brown**: Stability, reliability, luxury

## 🔧 Customization Tips

### To adjust the cream intensity:
Edit `tailwind.config.ts` and modify the `cream` color scale.

### To change the red accent:
Edit `tailwind.config.ts` and modify the `accent` color scale.

### To add a new color:
Add it to the `colors` object in `tailwind.config.ts`:
```typescript
colors: {
  cream: { ... },
  accent: { ... },
  gold: { // Example new color
    500: '#d4af37',
    // ... other shades
  }
}
```

## ✨ Visual Hierarchy

1. **Primary Actions**: Red buttons (accent-600/700/800)
2. **Backgrounds**: Cream gradients and tints
3. **Text**: Dark gray/brown for readability
4. **Borders**: Subtle cream tones
5. **Accents**: Red for important elements

## 🎯 Accessibility Notes

All color combinations meet WCAG AA contrast requirements:
- Dark text on cream backgrounds: ✓
- White text on red buttons: ✓
- Cream text on dark brown footer: ✓
- Red accents with sufficient contrast: ✓

---

**Pro Tip**: The color palette is fully customizable via `tailwind.config.ts`. All components use Tailwind utility classes, so changing colors is as simple as updating the config file!

