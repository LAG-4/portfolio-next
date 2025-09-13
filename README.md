This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Terminal-friendly CLI portfolio (curl)

This project includes a terminal view that renders a plain-text, ANSI-styled portfolio for curl and text/plain clients, while keeping the regular website unchanged in browsers.

Endpoints:
- `/cli` – main CLI view
- `/cli/projects` – list projects
- `/cli/contact` – contact info
- `/cli/projects/[slug]` – optional per-project details
 - `/cli/awards` – competitions and awards summary
 - `/cli/skills` – skills and certificates summary
 - `/cli/experience` – brief experience summary
 - `/cli/homelab` – homelab/devops overview

Middleware rewrites the root path `/` to `/cli` for curl-like user agents, `?cli=1`, or `Accept: text/plain`. Deep links and assets are not affected.

Test locally (examples):

```bash
# Show CLI view via user agent detection
curl -L http://localhost:3000

# Force CLI view using query param (works in any client)
curl -L "http://localhost:3000?cli=1"

# Accept header content negotiation
curl -H "Accept: text/plain" -L http://localhost:3000

# Subroutes
curl -L http://localhost:3000/cli/projects
curl -L http://localhost:3000/cli/contact
```

Opt-out: add `?cli=0` to skip the CLI rewrite if you previously added `?cli=1`.

Notes:
- No extra dependencies; uses Next.js Route Handlers and Web Streams.
- CLI endpoints respond with `Content-Type: text/plain; charset=utf-8` and `Cache-Control: no-store`.
- Beware of ANSI color bleed—always end lines or blocks with `\x1b[0m`.
