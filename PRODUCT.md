# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitor: a hiring manager, recruiter, startup founder, or prospective **freelance client** evaluating whether to hire Aryan Gupta. They arrive from a resume link, GitHub, a job/gig lead, or a shared URL, usually scanning quickly to answer one question: "Can this person build what I need, and can I trust the quality?" Secondary visitors: fellow developers exploring the work, and technically-curious people who reach the site via `curl` (see the CLI feature under Capabilities).

## Product Purpose

A personal portfolio for **Aryan Gupta** that establishes credibility as a full-stack + AI developer who is **available for freelance work**. Success = the visitor understands what Aryan builds, believes he builds it well, and takes a next action (email, resume download, view a project, or start a freelance conversation).

## Positioning

Balanced: leads with craft and shipped projects, carried by a clear, persistent "available for freelance work / let's work together" thread. Distinctive product facts a neighboring portfolio could not truthfully copy:
- A **terminal/curl portfolio**: middleware serves an ANSI-styled, plain-text version of the site to `curl` and text/plain clients at `/cli/*`, while browsers get the full experience. This is a genuine, working differentiator and signal of engineering depth.
- An unusual technical range: modern full-stack + AI agents **and** enterprise mainframe (COBOL/JCL on IBM z/OS).

## Operating Context

Visitors scan on both desktop and mobile, often for under a minute, frequently arriving from a link with high intent (recruiter/client) or curiosity (developer). The `curl`-served CLI view is a real usage path for technical visitors. Deployed on Vercel; performance and fast first paint matter (prior work explicitly cut cold-start and first-paint latency).

## Capabilities and Constraints

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Radix UI primitives · `motion` (Framer Motion) for animation · `next-themes` for light/dark.
- Content sections: Hero, About, Experience, Skills, Projects, Awards & Certifications, Contact. Project data is centralized in `lib/data.ts`.
- CLI/curl feature: Route Handlers under `app/cli/*` emit `text/plain` with ANSI styling; middleware rewrites `/` to `/cli` for curl-like clients (`?cli=1`, `Accept: text/plain`). No extra deps. **This feature and its infrastructure must be preserved** — it is not part of the visual redesign scope.
- Deployed on Vercel (region bom1); a curl→CLI proxy and edge CLI routes exist; keep first-paint/cold-start fast.
- Undecided: the five new design routes (`/1`–`/5`) are exploratory candidates; the winner will later be promoted to the main experience.

## Brand Commitments

- Name: **Aryan Gupta**. Handle: **LAG-4** (GitHub).
- Voice: confident, product-focused, AI-forward. Guiding belief: "great design makes great products — form follows function."
- Real assets on hand: `public/resume.pdf`, hero portrait (`public/images/Hero.png`), project screenshots under `public/images`, project GitHub/live links in `lib/data.ts`. Email: aryangupta4feb@gmail.com.
- No fixed color/type identity is binding — the visual world is open for this redesign.

## Evidence on Hand

Real, verifiable — never fabricate beyond these:
- **10+ shipped projects** (`lib/data.ts`): LearnAI (live on Google Play Store), Hyd Cafe Finder, Quantum Finance AI screener, EcoRoom, AI Assistant Hub, SheSafe (5K+ users), Gaia's Touch (50% donation increase), AI News Reporter, Health Trends Discord Bot, Voice-Controlled Car. Each with tech stack, metrics, and live/GitHub links.
- **Smart India Hackathon 2023 — Winner**.
- **AWS Certified Cloud Practitioner**.
- Experience: **Systems Engineer (Mainframe Developer) at Infosys** (COBOL/JCL, IBM z/OS, DB2); **Flutter Development Intern at Persist Ventures** (May–July 2024).
- Education: **B.Tech Computer Science @ VIT**. Location: India.
- Skills incl. Flutter/Dart, Python, AI Agents, LangChain, RAG, Google Gemini, OpenAI API, Java, MERN, SQL/DB2, mainframe.
- Absent (do not invent): client testimonials, revenue figures, star counts, named freelance clients, pricing.

## Product Principles

1. **Earn the next action.** Every surface should make emailing, downloading the resume, or opening a project effortless and obvious — the freelance thread is always within reach.
2. **Proof over adjectives.** Lead with shipped products, real metrics, and the SIH win; let evidence carry the claim.
3. **Range is the story.** The pairing of modern AI/full-stack with enterprise mainframe, plus the curl-portfolio trick, signals unusual depth — make it legible.
4. **Fast and effortless.** Protect first-paint and responsiveness; motion serves comprehension, never blocks it.
5. **Distinct, not generic.** This is a maker's portfolio; the craft of the site is itself a work sample.

## Accessibility & Inclusion

No product-specific standard established. Baseline: keyboard-navigable, sufficient contrast in both themes, respect `prefers-reduced-motion` for the heavy animation planned, and don't rely on color alone for meaning.
