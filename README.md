# Learningale — Next.js site

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
  pricing/          — pricing page with NGN/USD toggle
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
- `PRICING` — NGN and USD amounts

To use real poster images: drop files into `public/posters/` and change a card's
`bg` to `url('/posters/surface-tension.jpg') center/cover`.

## Wiring Supabase (when ready)

1. `npm install @supabase/supabase-js`
2. Create `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=...
   NEXT_PUBLIC_SUPABASE_ANON_KEY=...
   ```
3. Create `lib/supabase.js`:
   ```js
   import { createClient } from '@supabase/supabase-js';
   export const supabase = createClient(
     process.env.NEXT_PUBLIC_SUPABASE_URL,
     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
   );
   ```
4. Contact form (`components/ContactForm.jsx`) — replace the TODO with:
   ```js
   await supabase.from('messages').insert(form);
   ```
   SQL: `create table messages (id uuid default gen_random_uuid() primary key, name text, email text, message text, created_at timestamptz default now());`
   Enable RLS with an insert-only policy for anon.

## SEO checklist already done

- Per-page titles + meta descriptions
- Organization + FAQPage JSON-LD structured data
- sitemap.xml + robots.txt (update `learningale.example` to your real domain in
  `app/sitemap.js`, `app/robots.js`, and `metadataBase` in `app/layout.jsx`)
- Semantic HTML, single h1 per page, alt text on the hero
- Server-rendered pages — fully indexable

Next SEO step after launch: publish articles targeting parent searches
("how to help my child focus", "cost of a home lesson teacher", etc.) as
`app/blog/` pages.
