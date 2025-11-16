## TEX – Track Experience

TEX (Track Experience) is the modular platform for building AI-assisted, multi-day trip flows. The architecture is defined end-to-end in `DEV.md`, which sets the rules for routing, module boundaries, core services, and coding standards. All contributors must read and follow that document before committing any code.

### Stack (per DEV.md)
- Next.js 15 App Router
- Tailwind CSS + shadcn/ui (on-demand)
- Supabase (DB, Auth, Realtime, Storage)
- Vercel + GitHub + pnpm
- TypeScript, ESLint, Prettier

### Development workflow
1. Read `DEV.md` and `TASKS.md` for the current scope and conventions.
2. Work inside the proper layer:
   - `src/app` → routing & shell composition only
   - `src/core` → shared services (config, api, auth, ui, hooks, utils, types)
   - `src/modules` → feature-specific logic + UI, exported through a single `index.ts`
3. Extend instead of refactoring breaking contracts.

### Scripts (pnpm only)
```bash
pnpm dev      # start Next.js locally
pnpm build    # production build (must pass before committing)
pnpm lint     # lint per ESLint config
pnpm format:fix  # run prettier with cache
```

### Deployment
The project is wired to Vercel. Build locally with `pnpm build`, then deploy via `vercel deploy --prod` once the branch is ready and all guidelines in `DEV.md` have been satisfied.
