# Divya Thoppae — Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and
Tailwind CSS.

## Structure

- `src/app/layout.tsx` — fonts (Bricolage Grotesque, Inter) and global metadata
- `src/app/globals.css` — color tokens and the dot-grid background utilities
- `src/components/` — one file per section (Nav, Hero, About, Skills,
  Projects, Impact, Testimonials, Resume, Connect, Footer)
- `src/data/projects.ts` — project cards; add a new project by appending an
  object to the array
- `src/components/icons/BrandIcons.tsx` — GitHub/LinkedIn marks (lucide-react
  doesn't ship brand logos)

## Things to fill in

- `public/images/portrait.jpg` — your photo; swap the placeholder `<User>`
  icon in `src/components/Hero.tsx` for an `<Image>` once it's added (there's
  a comment in that file with the exact snippet)
- `public/resume.pdf` — your resume PDF; the "View full resume" and "Resume"
  buttons already link to `/resume.pdf`
- `src/components/Connect.tsx` — replace `GITHUB_URL = "#"` with your GitHub
  profile URL

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint
```

## Deploying to Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # promotes to production
```

**Option B — GitHub + Vercel dashboard**

1. Push this repo to GitHub:
   ```bash
   git remote add origin <your-repo-url>
   git push -u origin master
   ```
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and click
   Deploy. Vercel auto-detects Next.js, no config needed.
3. Every push to `master` redeploys automatically.
