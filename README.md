# Nizomiddin Tutor — SAT & Cambridge Math

Marketing site for one-on-one SAT and Cambridge (IGCSE/A-Level) math tutoring.
React + Vite, deployed on Vercel.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Deploy to Vercel

**Option A — CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts (link/create a project, accept the detected build settings).

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a new GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite; build command and output dir are already set in `vercel.json`.
4. Add your domain (`nizomiddintutor.com`) under Project → Settings → Domains, then point its DNS (usually an A record or CNAME, Vercel shows you exactly what) at Vercel from wherever you registered it.

## What's here

- `src/components/` — each homepage section as its own component (Hero, Subjects, Approach, Testimonials, Booking, Footer)
- `src/components/WorkedProblem.jsx` — the animated worked-problem visual in the hero
- Design tokens (colors, fonts) live at the top of `src/index.css`

## To customize before launch

- **Contact links** (`src/contactLinks.js`) — ALL contact channels live here:
  - `whatsapp`: replace `998000000000` with your real WhatsApp number (international format, digits only)
  - `calendar`: replace with your real Calendly / Cal.com booking link
  - Telegram + email are already set to your real ones
- **Testimonials** (`src/i18n.jsx` → `testimonials.quotes`) — swap in real quotes when you have permission to use them
- **Contact form** (`src/components/Contact.jsx`) — currently opens the visitor's email app pre-filled (works with no backend). To receive submissions directly, create a free Formspree/Web3Forms endpoint and swap the `submit` handler for a `fetch` POST.
- **All site text** (both English and Uzbek) lives in `src/i18n.jsx`

## Next phase: student portal

This is Phase 1 (marketing + booking). When ready for Phase 2 (student logins, materials,
progress tracking), the natural add-on is Supabase (auth + database) with a `/portal` route —
happy to scaffold that whenever you're ready.
