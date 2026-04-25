# ShooflyAI — AI Employees for Business Operations

**Live URL:** https://app.dapperdev.com/shooflyai/  
**GitHub:** https://github.com/dapperdevapps/shooflyai-v2  
**Built for:** Dapper Dev LLC  
**Tech stack:** Vanilla React 18 (via Babel CDN), inline JS styles, zero build step

---

## What This Is

ShooflyAI is a marketing landing page for the ShooflyAI product — an AI consultancy that deploys AI "employees" into client business operations (finance, sales, ops). The site is a pure static site with no bundler, no npm install, and no build step. It runs directly in the browser using Babel Standalone to transpile JSX at runtime.

---

## Architecture

### No Build Step — Why?

This project deliberately avoids Webpack/Vite/npm. The tradeoff:
- **Pros:** instant edits — change a file and reload. No build pipeline. Deployable via rsync or git pull.
- **Cons:** Babel transpiles in the browser (slower first load), no tree-shaking, no code splitting.

### File Structure

```
shooflyai-v2/
├── index.html            # Entry point. Loads React, Babel, all components via <script type="text/babel">
├── tweaks-panel.jsx      # Dev-only tweak panel (showGrid, glowIntensity sliders). Mounts a floating UI in corner.
├── assets/
│   ├── shoofly-icon.png       # Favicon / icon usage
│   ├── shoofly-logo-full.png  # Horizontal wordmark used in Navbar + Footer
│   └── shoofly-logo.webp      # Alternative format
└── components/
    ├── Navbar.jsx             # Fixed top nav with scroll blur effect
    ├── CosmicBackground.jsx   # Animated canvas/div starfield — parallax mouse tracking
    ├── Hero.jsx               # Above-fold hero: headline, CTA buttons, stats row
    ├── ValueProps.jsx         # 3-column "Why ShooflyAI" cards section
    ├── Ownership.jsx          # "You own the AI" differentiator section
    ├── Integrations.jsx       # 12-brand logo grid (Slack, HubSpot, Salesforce, etc.) — inline SVGs
    ├── Testimonials.jsx       # Client testimonial cards
    ├── Process.jsx            # 4-step numbered process section
    └── Footer.jsx             # Footer with CTA banner, nav links, social icons
```

### Global `window.*` exports

Because Babel loads each `.jsx` as a separate `<script>`, components expose themselves via `window`:
- `window.Navbar`, `window.HeroSection`, `window.CosmicBackground`
- `window.ValueProps`, `window.OwnershipSection`, `window.Integrations`
- `window.TestimonialsSection`, `window.ProcessSection`, `window.FooterSection`
- `window.TweaksPanel`, `window.TweakSection`, `window.TweakToggle`, `window.TweakSlider`, `window.useTweaks`

**Load order matters.** `index.html` script tags must match dependency order — `tweaks-panel.jsx` last because it references all others indirectly.

---

## Styling System

**No CSS classes, no Tailwind.** All styles are inline JS objects (`style={...}`). Media queries are impossible with inline styles alone, so responsive behavior is handled two ways:

1. **CSS in `<style>` tag in `index.html`** — global styles, animations (`@keyframes`), `.ticker-wrap`, `.section-divider`, `.reveal`
2. **`window.innerWidth` checks in JS** — used in components to switch between mobile/desktop style objects at render time

### Design Tokens (informal)
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050d14` | Base dark navy |
| Text primary | `#f4f9fa` | All body copy |
| Text secondary | `#cfdde0` | Subtext |
| Accent teal | `#7FFFE3` / `#40E0D0` | Headlines, CTA, icons |
| Accent muted | `#849aa0` | Labels, stat captions |
| Font heading | Space Grotesk 700 | H1, stat numbers |
| Font body | Manrope 400–600 | Paragraphs, nav |
| Font label | Inter 600 | All-caps eyebrows |

### Animations
All keyframes are defined in `index.html` `<style>`:
- `pulse` — glowing dot in hero badge
- `floatY` — glass orb/cube floating up and down
- `spinSlow` — 360° rotation used in CosmicBackground
- `shimmer` — gradient shimmer on buttons
- `twinkle` — star flicker
- `drift` — particle drift
- `ticker` — horizontal scrolling brand ticker (30s infinite)

---

## Component Details

### `Navbar.jsx`
- Fixed position, `z-index: 1000`
- Scroll listener: below 40px scroll = transparent. Above = `rgba(8,18,24,0.72)` + `blur(24px)` glassmorphism
- Padding: `0 64px` desktop → `0 20px` mobile
- **Mobile:** hamburger menu (3-line icon) toggles `mobileOpen` state. Links stack vertically in a `position: fixed` drawer on mobile (`≤768px`)
- CTA button: "Free AI Audit" — pill-shaped, teal border, hover glow effect

### `Hero.jsx`
- `minHeight: 100vh`, centered flex layout
- Parallax: mouse position tracked → 3 aurora `<div>` layers shift on X/Y. Glass orb and cube also shift.
- Scroll fade: `opacity: Math.max(0, 1 - scrollY / 600)` — content fades as user scrolls down
- `HeroSection` renders: label badge → H1 → subtext → CTA row → stats row
- `GlossButton` component: handles hover states for primary (gradient fill) and secondary (glass) buttons
- **Mobile:** heading `fontSize` drops from `84` → `42`. Padding `140px 64px` → `100px 20px`. Stats row `gap: 60` → `gap: 24`, wraps to 2×2 grid.

### `CosmicBackground.jsx`
- Renders floating glowing orbs, animated star dots, drifting particles
- All done with `<div>` elements using absolute positioning + `@keyframes`
- Reacts to `scrollY` and `mouseX/mouseY` props from `Hero.jsx`
- Performance: uses `will-change: transform` and `pointer-events: none`

### `ValueProps.jsx`
- 3-column card layout: "Plug AI Into Tools", "Optimize for ROI", "Scale AI Headcount"
- Each card: icon (inline SVG), eyebrow number, title, description
- **Mobile:** switches from `flexDirection: row` to `column`, full-width cards

### `Integrations.jsx`
- 12 brand logos (Slack, HubSpot, Salesforce, Zapier, Google, Notion, Stripe, OpenAI, Twilio, Airtable, Shopify, Mailchimp)
- Logos are inline SVG paths (CC0) — no external CDN dependency
- Grid: 6 per row desktop, 3 per row tablet, 2 per row mobile
- Hover effect: `scale(1.08)` + teal glow

### `Testimonials.jsx`
- Client testimonial cards with star ratings, avatar initials, name/role
- Horizontal scroll on mobile

### `Process.jsx`
- 4-step numbered process: Discover → Design → Deploy → Optimize
- Horizontal timeline desktop, vertical stacked mobile

### `Footer.jsx`
- CTA banner with glass orbs + grid overlay
- 4-column link grid: Company / Services / Resources / Legal
- Social icon buttons: X, LinkedIn, YouTube

---

## Deployment

### Server
- **Host:** `72.61.7.135` (Dapper Dev DigitalOcean droplet)
- **Web server:** OpenLiteSpeed
- **Document root:** `/usr/local/lsws/app.dapperdev.com/html/shooflyai/`
- **URL:** `https://app.dapperdev.com/shooflyai/`

### Deploy steps
```bash
# On server:
cd /var/www/shooflyai-src
git pull origin main
rsync -av --delete /var/www/shooflyai-src/ /usr/local/lsws/app.dapperdev.com/html/shooflyai/ --exclude='.git'
/usr/local/lsws/bin/lswsctrl reload
```

### OLS Virtual Host Config
Located at: `/usr/local/lsws/conf/vhosts/app.dapperdev.com/vhconf.conf`

The `/shooflyai/` path is served as static files. No rewrite proxy — OLS serves `index.html` and the `components/` directory directly.

---

## Development Notes

### Adding a new component
1. Create `components/MyComponent.jsx`
2. Define your component at the top level
3. Export via `window.MyComponent = MyComponent;` at the bottom
4. Add `<script type="text/babel" src="components/MyComponent.jsx"></script>` to `index.html` **before** the inline `<script>` that uses it
5. Use `<MyComponent />` in `App` inside the inline script

### Adding mobile styles
Since this uses inline styles only, mobile detection is done at render time:
```jsx
const isMobile = window.innerWidth <= 768;
// Then in render:
style={{ fontSize: isMobile ? 36 : 84 }}
```

For more complex responsive behavior, add media query rules inside `index.html`'s `<style>` tag and assign `className` on elements.

### Tweaks Panel
A dev tool (floating gear icon in corner). Controlled by `TWEAK_DEFAULTS` in `index.html`. Add new tweaks by:
1. Adding key/value to `TWEAK_DEFAULTS`
2. Using `tweaks.yourKey` inside any component (passed via context? No — components read directly from `window` if needed, or the App passes as props)

---

## Known Issues / TODOs
- [ ] No `404.html` — direct URL access to any subpath other than `/shooflyai/` may 404 on OLS
- [ ] Babel Standalone in dev mode — switch to production bundle (`react.production.min.js`) for live site
- [ ] `tweaks-panel.jsx` is always loaded — should be excluded for production
- [ ] No form backend for "Book Your Strategy Call" / "Free AI Audit" CTAs
- [ ] Contact page links are `href="#"` placeholders
