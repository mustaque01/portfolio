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

### Deployment
Build output (not committed):
```powershell
pnpm build
```

### Notes
The `.next` folder is intentionally ignored. If you previously tracked it, a cleanup commit removed those files.

### Next Steps
- Add SEO metadata (Open Graph, social preview)
- Add a blog or writing section
- Configure analytics (e.g. Vercel, Plausible)
