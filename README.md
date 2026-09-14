# AISO Development & Innovation

A bilingual, mobile-first corporate website for **AISO Development & Innovation** — an applied industrial development company that turns industrial challenges into commercially viable products and technologies, then transfers them to licensed manufacturing partners.

## Positioning

This website deliberately presents AISO as a technology-development organisation, not a chemical factory or online store. It contains no fabricated clients, patents, laboratories, accreditations, partners, project counts, awards or sales claims.

## Included

- English default experience and complete Arabic right-to-left experience
- Static generation for every language and page
- Product and formulation development
- Industrial problem solving
- Product improvement
- Technology transfer and licensing
- Industrial partnership intake
- Filter-ready technology portfolio with clearly labelled coming-soon cards
- Bilingual knowledge centre structure
- Multi-step development-project intake
- General contact, technical challenge, partnership and licensing forms
- Administration interface prepared for protected authentication
- Centralised bilingual content
- Sitemap, robots rules, canonical URLs and language alternates
- Organisation, service and knowledge structured-data support
- Database schema with row-level security enabled
- Draft privacy, terms, cookie, disclaimer, development and confidential-information pages

## Run

1. Install dependencies with `npm install`.
2. Start locally with `npm run dev`.
3. Build the static site with `npm run build`.

## Secure production setup

Copy `.env.example` to `.env.local` and provide the public database URL and anonymous key only after a reviewed database project exists. Never expose an administrative or service-role key.

The current public forms demonstrate the complete interface and validation flow. Before public launch, connect them to a server-side, rate-limited endpoint that provides:

- CAPTCHA or equivalent abuse prevention
- Zod schema validation
- upload allowlists, malware inspection and strict size limits
- private-object storage and short-lived signed downloads
- authentication, roles and audit logging for the administration console
- retention and deletion procedures

Apply `supabase/schema.sql` through a reviewed migration. The schema intentionally does not allow anonymous direct inserts.

## Domain

Replace the provisional domain in `app/layout.jsx`, `app/sitemap.js` and `public/robots.txt` when the final domain is confirmed.
