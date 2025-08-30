## Portfolio

Personal developer portfolio built with Next.js, TypeScript, Tailwind CSS and shadcn/ui components.

### Tech Stack
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui

### Structure
- `app/` App Router pages & layout
- `components/` Reusable UI + section components
- `components/ui/` Generated shadcn primitives
- `public/` Images & static assets
- `styles/` Global styles

### Local Development
Install deps and run dev server:

```powershell
pnpm install
pnpm dev
```

Visit http://localhost:3000

### Environment Variables
Copy `.env.example` to `.env.local` and fill in values as needed.

### Deployment
Build & start:
```powershell
pnpm build
pnpm start
```
Recommended: Vercel (import the GitHub repo, framework auto-detect).

### SEO / Metadata
Configured in `app/layout.tsx` (Open Graph + Twitter). Replace `your-domain.example.com` and social handle.

### Notes
The `.next` folder is intentionally ignored. If you previously tracked it, a cleanup commit removed those files.

### Next Steps
- Add blog/articles section
- Integrate analytics (Vercel / Plausible)
- Add contact form backend endpoint
- Add light technical blog posts for SEO

### License
MIT – see `LICENSE`.
