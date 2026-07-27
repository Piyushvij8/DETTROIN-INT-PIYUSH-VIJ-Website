# KIS Redesign — Krishna International School

A modern, full-stack redesign of the Krishna International School (Aligarh)
website, built for the Dettroin Full Stack Developer Internship — Round 1
(Website Redesign Challenge).

> ⚠️ **Fill in the fields below before submitting.**

- **Full Name:**
- **Intern ID:**
- **Email Address:**
- **GitHub Username:**
- **Selected Website:** https://kisaligarh.com/
- **Live Demo Link:**
- **Technologies Used:** React 19, Vite, Tailwind CSS, Node.js, Express, SQLite
- **Key Improvements Made:**
  - Rebuilt the site as a component-based React app with a real backend, instead of static PHP pages — the enquiry form actually persists to a database rather than going nowhere.
  - Introduced a deliberate visual identity: a navy/forest/marigold palette and a Fraunces + Public Sans + IBM Plex Mono type system, built around the school's own real content (5-acre campus, CBSE affiliation, 60+ awards, its "dedicated to excellence" motto) rather than generic stock-template sections.
  - Designed a signature seal-badge motif for the hero, and reorganized 40+ scattered nav links from the original into four clear categories (Academics, Admissions, Co-Curricular, Gallery) as an interactive tabbed panel.
  - Turned the admissions process into a real, numbered 4-step sequence instead of a vague page of prose.
  - Added scroll-reveal micro-interactions and hover states throughout, tuned to feel intentional rather than decorative — and fully disabled under `prefers-reduced-motion`.
  - Made the entire site fully responsive with a proper mobile nav.
  - Added accessibility basics: visible focus states, semantic headings/labels, `aria` attributes on the tabbed panel.
  - Verified a clean production build (`npm run build`) with no errors or warnings.

## Architecture

```
kis-redesign/
├── src/                # React frontend (Vite)
│   ├── components/
│   ├── hooks/
│   └── ...
├── server/             # Express API + SQLite database
│   ├── server.js
│   ├── db.js
│   └── data/           # SQLite file lives here (gitignored)
└── vite.config.js      # proxies /api → the Express server in dev
```

The contact form on the site is wired to a real backend: submissions are
validated, rate-limited, and written to a SQLite database via Node's
built-in `node:sqlite` module (no native compilation required — this is
why `better-sqlite3` wasn't used, to keep `npm install` painless on any
machine).

## Getting started

Install both the frontend and backend dependencies:

```bash
npm install
npm --prefix server install
```

Run everything together (frontend on `:5173`, API on `:3001`, proxied):

```bash
npm run dev:all
```

Or run them separately in two terminals:

```bash
npm run dev        # frontend only
npm run server     # backend only (or: npm --prefix server run dev for auto-reload)
```

Production build of the frontend:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## API

| Method | Route              | Auth                  | Purpose                          |
| ------ | ------------------ | ---------------------- | --------------------------------- |
| GET    | `/api/health`      | none                   | Liveness check + enquiry count   |
| POST   | `/api/enquiries`   | none (rate-limited)    | Submit a contact-form enquiry     |
| GET    | `/api/enquiries`   | `x-admin-key` header   | List stored enquiries (admin)     |

Example:

```bash
curl -X POST http://localhost:3001/api/enquiries \
  -H "Content-Type: application/json" \
  -d '{"name":"Priya Sharma","email":"priya@example.com","message":"Do you offer transport from Ramghat Road?"}'

curl http://localhost:3001/api/enquiries -H "x-admin-key: kis-admin-dev-key"
```

Copy `server/.env.example` to `server/.env` and change `ADMIN_KEY` before
using this anywhere beyond your own machine.

## Deployment

**Frontend** deploys cleanly to [Vercel](https://vercel.com) as a static
Vite build — set the framework preset to Vite and deploy the repo root.

**Backend** needs a host with a persistent filesystem, since SQLite is a
file on disk. Vercel's serverless functions are stateless between
invocations, so `server/` **will not work as-is on Vercel**. Two honest
options:

1. **Simplest:** deploy `server/` to a small always-on host — [Render](https://render.com),
   [Railway](https://railway.app), or [Fly.io](https://fly.io) all have
   free/low-cost tiers that work well for a Node + SQLite app like this
   one. Point the frontend's `fetch` calls (or a Vite env var) at that
   API's URL in production.
2. **If you want everything on Vercel:** swap `server/db.js` for a hosted
   Postgres/MySQL database (e.g. [Supabase](https://supabase.com) or
   [Neon](https://neon.tech), both have generous free tiers) and run the
   API as Vercel serverless functions instead of a long-running Express
   process. This is a bigger change — happy to help with it if you want
   to go that route.

For the Round 1 submission itself, deploying the frontend alone to Vercel
satisfies the brief; mention the backend as a "run locally to see the
database in action" feature in your README/demo, or deploy it to Render
as a bonus if you have time.

## Project structure (frontend)

```
src/
  components/
    Navbar.jsx         # sticky nav with mobile menu
    Hero.jsx            # hero section + signature seal badge
    Seal.jsx             # SVG "dedicated to excellence" seal (signature element)
    CampusArt.jsx        # original SVG campus illustration used in the hero
    StatStrip.jsx        # report-card style stat row
    About.jsx            # about section + facility grid
    Programs.jsx          # tabbed Academics/Admission/Co-Curricular/Gallery panel
    Trust.jsx             # principal's-message pull quote
    Contact.jsx           # contact details + database-backed enquiry form
    Reveal.jsx            # scroll-reveal wrapper
  hooks/
    useReveal.js         # IntersectionObserver-based reveal hook
  App.jsx
  main.jsx
  index.css
```

## Design notes

Photography placeholders in `About.jsx` are intentionally left as labeled
color blocks — swap these for real, rights-cleared campus photography
before final submission; nothing was hotlinked from the original site.
