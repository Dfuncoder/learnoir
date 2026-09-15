# Learnoir — Next.js site

The school curriculum, streaming. Cinematic marketing site built with Next.js 14 (App Router).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Deploy free on Vercel: push this folder to GitHub, import the repo at vercel.com, done.

## Structure

```
app/
  layout.jsx        — fonts, metadata, JSON-LD, nav + footer
  page.jsx          — home (hero, problem, tracks, steps, library, compare, pricing, CTA)
  pricing/          — pricing page, auto local currency + toggle
  waitlist/         — waitlist form (Supabase)
  library/          — full lesson library
  about/            — mission page
  contact/          — contact form + emails
  faq/              — FAQ with FAQPage structured data
  privacy/ terms/   — legal placeholders (replace before launch)
  sitemap.js robots.js
components/         — Nav, Footer, Reveal, Ticker, Stats, TrackSwitcher, Shelf, PricingPanel, Faq, ContactForm
lib/data.js         — ALL content lives here: tracks, posters, FAQs, pricing
public/hero.jpg     — hero backdrop (replace with higher-res when ready)
```

## Editing content

Almost everything you'll want to change is in `lib/data.js`:
- `TRACKS` — the interest-track switcher (posters, copy)
- `SHELVES` — library poster cards (set `locked: true` for coming-soon)
- `FAQS` — question/answer pairs (also feeds the FAQ structured data)
- pricing amounts live in `lib/currency.js` (`CURRENCIES`)

To use real poster images: drop files into `public/posters/` and change a card's
`bg` to `url('/posters/surface-tension.jpg') center/cover`.

## Waitlist (Supabase) — wired, needs keys

The waitlist form (`/waitlist`, `components/WaitlistForm.jsx`) stores signups in
Supabase. To activate it:

1. Create a free project at supabase.com.
2. Run `supabase/schema.sql` in the SQL Editor (creates the `waitlist` table
   with an insert-only RLS policy — visitors can join but never read the list).
3. Copy `.env.local.example` to `.env.local` and fill in the URL + anon key
   from Project Settings → API. On Vercel, add the same two env vars.
4. Restart `npm run dev`. Signups appear in Dashboard → Table Editor → waitlist.

Until the keys are set, the form shows a friendly error instead of saving.

The contact form (`components/ContactForm.jsx`) is wired the same way and stores
into the `messages` table, which the same schema file creates.

## Interest-track images

The three poster images for the track switcher live in `public/tracks/`:
`anime.jpeg`, `blockbuster.jpeg`, `football.jpeg`. They are shown with a
(non-clickable) play badge over them. If a file is missing the poster falls back
to the original gradient automatically, so the site never breaks.

## Location-based pricing

`lib/currency.js` holds two anchors: Nigeria at ₦3,000/month · ₦25,000/year, and
international pricing at USD $5/month · $20/year, with GBP, EUR, GHS, KES and ZAR
converted from the USD figure. `PricingPanel` detects the
visitor's country (IP lookup, then timezone/locale fallback) and shows their
local currency; the toggle still lets anyone switch. Update the amounts in
`CURRENCIES` if exchange rates drift.

## SEO checklist already done

- Per-page titles + meta descriptions
- Organization + FAQPage JSON-LD structured data
- sitemap.xml + robots.txt (update `learnoir.example` to your real domain in
  `app/sitemap.js`, `app/robots.js`, and `metadataBase` in `app/layout.jsx`)
- Semantic HTML, single h1 per page, alt text on the hero
- Server-rendered pages — fully indexable

Next SEO step after launch: publish articles targeting parent searches
("how to help my child focus", "cost of a home lesson teacher", etc.) as
`app/blog/` pages.
