# Tieout website

The marketing site: a landing page and an About page. Next.js (App Router), TypeScript and Tailwind CSS.

This repo is **public** so it can deploy on Netlify's free plan. Never put keys, customer data or pilot details here. Keys go in Netlify's environment variables. The product itself lives in the private `Tieout-SK/tieout` repo.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Where things are

```
./
  lib/
    copy.ts            All the words on the site. Edit copy here.
    site.ts            Domain, email, LinkedIn, founders, SEO title and description.
    store.ts           Local-development stand-in for saving early access requests.
    early-access.ts    Form fields and validation.
  public/
    __forms.html       Registers the early access form with Netlify Forms. Not a visible page.
  app/
    layout.tsx         Fonts, header, footer, SEO and social tags for every page
    page.tsx           Landing page: puts the sections in order
    about/page.tsx     About page
    api/early-access/route.ts   Receives the form in local development only
    globals.css        Colors and fonts (the accent color is --color-accent)
    icon.svg           Favicon (PLACEHOLDER)
    opengraph-image.tsx  Image shown when the link is shared on LinkedIn, Slack, etc.
  components/
    Hero, Problem, HowItWorks, Different, WhoFor, EarlyAccessForm   One file per section
    ProductMock.tsx    The illustrative product view in the hero (sample data)
    Header, Footer, Logo (PLACEHOLDER), Section
```

## Editing copy

- **Words:** edit `lib/copy.ts`. Each section has its own block, e.g. `hero.headline`, `problem.points`, `about.story`. Save and the page updates.
- **Email, domain, LinkedIn, founder names and roles, page title:** edit `lib/site.ts`.
- **Section order:** rearrange the components in `app/page.tsx`.
- **Accent color:** change `--color-accent` (and `--color-accent-dark` for hover) in `app/globals.css`.
- House style: plain and specific, and no em dashes.

## Placeholders to replace

Search the project for `PLACEHOLDER`:

| What | Where |
| --- | --- |
| LinkedIn URL | `lib/site.ts` (`linkedinUrl`) |
| Logo | `components/Logo.tsx` (instructions in the file) |
| Favicon | `app/icon.svg` |

## Early access form

On the live site, requests go to **Netlify Forms**. Netlify stores every submission (Netlify > Forms > early-access) and can email each one to you. The free plan includes 100 submissions a month, and Netlify filters spam. There's also a hidden spam trap field.

One-time setup in Netlify:

1. **Forms > Enable form detection**, then trigger a new deploy (Deploys > Trigger deploy) so Netlify finds the form.
2. **Project configuration > Notifications > Emails and webhooks > Form submission notifications > Add notification > Email notification.** Send to `hello@tieoutai.org`, for form `early-access`.

If you add or rename a field, change it in both `components/EarlyAccessForm.tsx` and `public/__forms.html`.

In local development (`npm run dev`), the form posts to `app/api/early-access/route.ts` instead, which saves to `.data/early-access.jsonl` (git-ignored).

## Deploy on Netlify

1. Sign in at netlify.com with GitHub.
2. **Add new project > Import an existing project > GitHub**, and pick `Tieout-SK/website`. If it isn't listed, click **Configure the Netlify app on GitHub** and add this repo to the app's selected repositories.
3. Leave **Base directory** blank. Netlify detects Next.js and fills in the build settings.
4. Click **Deploy**. You get a link like `tieout.netlify.app`.

Every push to `main` redeploys the site, and every pull request gets a preview link.

## Connect your domain

1. In the Netlify project, go to **Domain management > Add a domain** and enter your domain (e.g. `tieoutai.org`). Netlify adds `www` too.
2. Netlify shows the DNS records to create, usually an **A** record for the root domain and a **CNAME** for `www`. Use the exact values it shows.
3. Add those records where your domain's DNS is managed (Google Workspace, Squarespace, GoDaddy, Namecheap, Cloudflare). **Only add these records. Don't delete the existing MX or TXT records**, or company email will stop working.
4. Wait for DNS to update (minutes to a few hours). Netlify issues the HTTPS certificate automatically.
5. Set `url` in `lib/site.ts` to the final domain and push, so social previews and SEO tags use it.
