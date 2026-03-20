# HeroUI Professional Redesign — Design Spec

**Date:** 2026-03-20
**Project:** allstarkids-marketing
**Goal:** Replace all emoji usage with professional Lucide SVG icons, integrate HeroUI components, preserve all animations and brand styling.

---

## Problem

The current site uses raw emojis (🍼🎨📚🛡️📍📞) as icons throughout. While warm, they read as unprofessional and inconsistent on a business marketing site. The fix must preserve the warmth of the brand without sacrificing credibility.

---

## Approved Design Direction

### Icon Treatment

**Light sections (program cards, hero badges, contact info):**
- White card with colored top border (4px, program accent color)
- Tinted rounded-square icon container (10px radius, 10–15% opacity of accent color)
- Lucide SVG icon inside, stroked in the accent color
- Bold uppercase age/category label in the accent color
- No emojis anywhere

**Dark sections (Why ASKA pillars, navy backgrounds):**
- Same icon badge approach on glass-effect card backgrounds (`rgba(255,255,255,0.06)` + `border: 1px solid rgba(255,255,255,0.1)`)
- Icon tint color remains the accent; label and body text in white/blue-200

**Hero trust badges:**
- Same pill shape as current
- Replace emoji prefix with 13px Lucide icon (stroke only)
- "Georgia Pre-K Provider" badge gets gold-tint background to stand out

**Contact info list (both `/contact` page and footer):**
- Replace emoji with 34×34px rounded-square icon container (navy-tint background)
- Lucide icon inside at 16px

---

## Dependencies

```bash
npm install @heroui/react framer-motion lucide-react@^0.400.0
```

Create `src/components/providers.tsx` (new file):

```tsx
"use client";
import { HeroUIProvider } from "@heroui/react";
export function Providers({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
```

In `src/app/layout.tsx` (Server Component — keep `export const metadata`, do NOT add `"use client"`):

```tsx
import { Providers } from "@/components/providers";
// ...
<body>
  <Providers>
    <Nav />
    {children}
    <Footer />
  </Providers>
</body>
```

This preserves the `metadata` Server Component export while giving HeroUI the client context it needs.

`lucide-react` must be `^0.400.0` or later — this guarantees `Handshake`, `Sprout`, `Bird`, and `BadgeCheck` are present as named exports. Earlier versions do not include these icons.

---

## HeroUI + Tailwind v4 Compatibility

**This project uses Tailwind CSS v4**, which does not use `tailwind.config.ts` at all. Configuration lives in `globals.css` via `@theme`. The HeroUI Tailwind plugin targets Tailwind v3's plugin API and is **not compatible with v4** — it must not be added.

**Approach:** Use HeroUI component JSX directly without registering the Tailwind plugin. HeroUI components are usable without the plugin — they just lose their own design-token utility classes (`bg-primary`, `text-default-500`, etc.). Since the spec explicitly states HeroUI's own color tokens are not used — all styling comes from `className` overrides using brand CSS variables — this is fine.

**`tailwind.config.ts` does not exist** in this project and must not be created.

**Components that work without the plugin (all styling via `className`):**
- `Button`, `Card`, `CardBody`, `Input`, `Textarea`, `Chip` — use these freely with className overrides
- `Navbar`, `NavbarBrand`, `NavbarContent`, `NavbarItem` — use for structural shell only; hamburger toggle kept custom (see Nav section below)

---

## Nav Component — ARIA Test Compatibility

The existing Jest tests assert:
- `screen.getByLabelText("Toggle menu")` — expects `<button aria-label="Toggle menu">`
- `screen.getByRole("navigation", { name: "Mobile menu" })` — expects `<nav aria-label="Mobile menu">`

HeroUI's `NavbarMenuToggle` emits `aria-label="open menu"` / `"close menu"` and `NavbarMenu` renders a `<div>`, not a `<nav>`. Both would break the tests.

**Solution:** Use HeroUI `Navbar`, `NavbarBrand`, `NavbarContent`, `NavbarItem` for the shell and desktop links. Keep the hamburger button and mobile menu as **custom elements** with the exact ARIA attributes the tests require:

```tsx
{/* Keep exactly as-is — tests depend on these attributes */}
<button aria-label="Toggle menu" onClick={() => setOpen(o => !o)} ...>
  ...hamburger spans...
</button>

{open && (
  <nav aria-label="Mobile menu" ...>
    ...mobile links...
  </nav>
)}
```

The tests will continue to pass without modification.

---

## Programs Data Model Migration

The `Program` type in `src/data/programs.ts` has two field changes:

1. `iconEmoji: string` → `iconName: string` (Lucide icon name string, e.g. `"Baby"`)
2. Add `accentColor: string` (hex value used for the icon container tint and top border)

The `color` field (Tailwind class string like `"bg-rose-50 border-rose-200"`) is removed — the card border-top and icon tint are now driven by `accentColor` as an inline style.

```ts
// programs.ts — updated fields per program
{ id: "infant-toddler", iconName: "Baby",     accentColor: "#f43f5e" }
{ id: "preschool",      iconName: "Palette",   accentColor: "#f97316" }
{ id: "pre-k",          iconName: "BookOpen",  accentColor: "#6366f1" }
{ id: "after-school",   iconName: "School",    accentColor: "#8b5cf6" }
{ id: "summer-eaglets", iconName: "Bird",      accentColor: "#eab308" }
{ id: "summer-eagles",  iconName: "Star",      accentColor: "#22c55e" }
```

```tsx
// program-card.tsx — lookup map + inline styles from accentColor
import { Baby, Palette, BookOpen, School, Bird, Star, type LucideIcon } from "lucide-react";
const ICONS: Record<string, LucideIcon> = { Baby, Palette, BookOpen, School, Bird, Star };

const Icon = ICONS[program.iconName];
// Icon container: background: `${accentColor}18` (hex with ~10% opacity suffix)
// Card top border: `4px solid ${accentColor}`
// Age label color: accentColor
```

---

## Icon Map (Lucide)

| Location | Emoji replaced | Lucide icon name |
|---|---|---|
| Infant & Toddler program | 🍼 | `Baby` |
| Preschool program | 🎨 | `Palette` |
| Georgia Pre-K program | 📚 | `BookOpen` |
| After School program | 🏫 | `School` |
| Summer Camp Eaglets | 🦅 | `Bird` |
| Summer Camp Eagles | ⭐ | `Star` |
| Why ASKA — Dedicated Educators | 👨‍🏫 | `GraduationCap` |
| Why ASKA — Safe Environment | 🛡️ | `Shield` |
| Why ASKA — Georgia Pre-K Provider | 🎓 | `Award` |
| Hero badge — Licensed & Accredited | 🏫 | `BadgeCheck` |
| Hero badge — Georgia Pre-K Provider | ⭐ | `Star` |
| Hero badge — Secure Enrollment | 🔒 | `Lock` |
| Contact page + Footer — Address | 📍 | `MapPin` |
| Contact page + Footer — Phone | 📞 | `Phone` |
| Contact page + Footer — Email | ✉️ | `Mail` |
| Contact page + Footer — Hours | 🕐 | `Clock` |
| Contact form success state | ✅ | `CheckCircle` |
| About — Mission visual | 🏫 | `School` (animated float) |
| About — Child-Centered value | ❤️ | `Heart` |
| About — Family Partnership value | 🤝 | `Handshake` |
| About — Growth Mindset value | 🌱 | `Sprout` |
| About — Excellence value | 🏅 | `Medal` |
| Footer social — Facebook | `f` text | `Facebook` |
| Footer social — Instagram | `ig` text | `Instagram` |
| Footer social — TikTok | `tt` text | `Music2` |
| Testimonials rating | ⭐⭐⭐⭐⭐ | Five `Star` icons (filled gold, `fill="currentColor"`) |
| Enroll CTA phone (inline text link) | (none currently) | `Phone` at 14px inline |

---

## What Does NOT Change

- Brand colors: `--navy #0a1628`, `--gold #fbbf24`, `--cream #fdfaf6`
- Nunito font, all weights
- All CSS keyframe animations: `fadeInUp`, `float`, `floatSlow`, `shimmer`
- Utility classes: `.animate-fade-in-up`, `.animate-float`, `.animate-float-slow`, `.delay-*`, `.btn-shimmer`, `.glass`
- Page structure and layouts
- Tailwind CSS as the styling foundation (v4)
- All stagger animation delays on card grids
- Decorative orb blurs on hero section

---

## Files Changed

| File | Change |
|---|---|
| `package.json` | Add `@heroui/react`, `framer-motion`, `lucide-react@^0.400.0` |
| `src/components/providers.tsx` | New file — `"use client"` wrapper exporting `<Providers>` with `HeroUIProvider` |
| `src/app/layout.tsx` | Import `<Providers>`, wrap Nav+children+Footer; keep Server Component + `metadata` export |
| `src/data/programs.ts` | Rename `iconEmoji` → `iconName`, remove `color` field, add `accentColor` hex field |
| `src/components/nav.tsx` | HeroUI Navbar shell for desktop; custom hamburger + mobile nav preserved for ARIA test compatibility |
| `src/components/footer.tsx` | Lucide social icons (Facebook, Instagram, Music2) + Lucide contact icons (MapPin, Phone, Clock, Mail) replacing all emojis |
| `src/components/program-card.tsx` | HeroUI Card, Lucide icon lookup map, colored top border treatment |
| `src/components/contact-form.tsx` | HeroUI Input, Textarea, Button; Lucide CheckCircle for success state |
| `src/components/home/hero.tsx` | Lucide inline icons on trust badges, HeroUI Button |
| `src/components/home/why-aska.tsx` | Lucide icons (GraduationCap, Shield, Award) replacing emoji, HeroUI Card |
| `src/components/home/testimonials.tsx` | Five filled `Star` icons replacing ⭐⭐⭐⭐⭐ string |
| `src/components/home/enroll-cta.tsx` | HeroUI Button, Lucide Phone inline icon |
| `src/app/about/page.tsx` | Lucide icons for values (Heart, Handshake, Sprout, Medal) and mission visual (School) |
| `src/app/contact/page.tsx` | Lucide icons (MapPin, Phone, Mail, Clock) replacing all contact emojis |

---

## Testing

- Existing Jest tests for Nav hamburger toggle must pass without modification — guaranteed by preserving `aria-label="Toggle menu"` on the custom button and `aria-label="Mobile menu"` on the custom `<nav>`
- Existing Jest tests for `/api/contact` route are unaffected (no emoji/icon changes in that route)
- `npm run build` must succeed with no TypeScript errors after all changes
