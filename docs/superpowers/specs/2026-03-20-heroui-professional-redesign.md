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
- Same icon badge approach but on glass-effect card backgrounds (`rgba(255,255,255,0.06)` + `border: 1px solid rgba(255,255,255,0.1)`)
- Icon tint color remains the accent, label and body text in white/blue-200

**Hero trust badges:**
- Same pill shape as current
- Replace emoji prefix with 13px Lucide icon (stroke only, `#0a1628` or accent color)
- "Georgia Pre-K Provider" badge gets gold tint background to stand out

**Contact info list:**
- Replace 2xl emoji with 34×34px rounded-square icon container (navy tint background)
- Lucide icon inside at 16px

---

## HeroUI Integration

Install `@heroui/react` and `framer-motion`.

Configure `tailwind.config.ts` with the HeroUI Tailwind plugin.

**Components to use:**
- `Button` — replace all raw `<a>` and `<button>` CTA elements with HeroUI Button (keeps shimmer via className override)
- `Navbar` / `NavbarBrand` / `NavbarContent` / `NavbarItem` — replace the custom `<header>` in `nav.tsx`
- `Card` / `CardBody` — wrap program cards, pillar cards, staff cards
- `Input` / `Textarea` — replace raw inputs in `contact-form.tsx`
- `Chip` — replace trust badge pills in hero and nav "Enroll Now" indicators

All HeroUI components get `className` overrides to preserve brand colors (navy, gold, cream). HeroUI's own color tokens are not used — brand CSS variables remain the source of truth.

---

## Icon Map (Lucide)

| Location | Emoji replaced | Lucide icon |
|---|---|---|
| Infant & Toddler | 🍼 | `Baby` |
| Preschool | 🎨 | `Palette` |
| Georgia Pre-K | 📚 | `BookOpen` |
| After School | 🏫 | `School` |
| Summer Camp Eaglets | 🦅 | `Bird` |
| Summer Camp Eagles | ⭐ | `Star` |
| Dedicated Educators | 👨‍🏫 | `GraduationCap` |
| Safe Environment | 🛡️ | `Shield` |
| Georgia Pre-K Provider (pillar) | 🎓 | `Award` |
| Licensed & Accredited (badge) | 🏫 | `BadgeCheck` |
| Georgia Pre-K Provider (badge) | ⭐ | `Star` |
| Secure Enrollment (badge) | 🔒 | `Lock` |
| Address | 📍 | `MapPin` |
| Phone | 📞 | `Phone` |
| Email | ✉️ | `Mail` |
| Hours | 🕐 | `Clock` |
| Success state | ✅ | `CheckCircle` |
| Mission visual | 🏫 | `School` (animated float) |
| Values: Child-Centered | ❤️ | `Heart` |
| Values: Family Partnership | 🤝 | `Handshake` |
| Values: Growth Mindset | 🌱 | `Sprout` |
| Values: Excellence | 🏅 | `Medal` |
| Footer social: Facebook | f | `Facebook` |
| Footer social: Instagram | ig | `Instagram` |
| Footer social: TikTok | tt | `Music2` |
| Testimonials stars | ⭐⭐⭐⭐⭐ | Five `Star` icons (filled gold) |
| Enroll CTA phone | (inline text) | `Phone` inline |

---

## What Does NOT Change

- Brand colors: `--navy #0a1628`, `--gold #fbbf24`, `--cream #fdfaf6`
- Nunito font, all weights
- All CSS keyframe animations: `fadeInUp`, `float`, `floatSlow`, `shimmer`
- Utility classes: `.animate-fade-in-up`, `.animate-float`, `.animate-float-slow`, `.delay-*`, `.btn-shimmer`, `.glass`
- Page structure and layouts
- Tailwind CSS as the styling foundation
- All stagger animation delays on card grids
- Decorative orb blurs on hero section

---

## Files Changed

| File | Change |
|---|---|
| `package.json` | Add `@heroui/react`, `framer-motion`, `lucide-react` |
| `tailwind.config.ts` | Add HeroUI plugin |
| `src/app/layout.tsx` | Wrap with `HeroUIProvider` |
| `src/app/globals.css` | No change |
| `src/components/nav.tsx` | HeroUI Navbar components, no emojis |
| `src/components/footer.tsx` | Lucide social icons (Facebook, Instagram, Music2) |
| `src/components/program-card.tsx` | HeroUI Card, Lucide icon badge, colored top border |
| `src/components/contact-form.tsx` | HeroUI Input, Textarea, Button |
| `src/components/home/hero.tsx` | Lucide inline icons on trust badges, HeroUI Button |
| `src/components/home/programs-strip.tsx` | No structural change (uses ProgramCard) |
| `src/components/home/why-aska.tsx` | Lucide icons replacing emoji, HeroUI Card |
| `src/components/home/testimonials.tsx` | Five `Star` filled icons replacing ⭐⭐⭐⭐⭐ |
| `src/components/home/enroll-cta.tsx` | HeroUI Button, Lucide Phone icon |
| `src/app/about/page.tsx` | Lucide icons for values + mission visual |
| `src/app/contact/page.tsx` | Lucide icons for address/phone/email/hours |

---

## Testing

- Existing Jest tests for Nav and `/api/contact` must continue to pass after refactor
- Nav tests mock `next/link` and `next/image` — HeroUI Navbar must preserve `aria-label="Toggle menu"` and `aria-label="Mobile menu"` for tests to pass
- `npm run build` must succeed with no TypeScript errors
