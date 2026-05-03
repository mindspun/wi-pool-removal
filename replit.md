# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Artifacts

### WI Estate Cleanout (`artifacts/wi-estate-cleanout`)
- **Type**: react-vite, static site (no backend)
- **Preview path**: `/`
- **Purpose**: Multi-page service website for WI Estate Cleanout, a junk removal and estate cleanout company based in West Bend, WI.
- **Pages**: Home, About, Pricing, Contact, Service Areas overview, 5 county pages, 25 city pages
- **Counties served**: Washington, Ozaukee, Fond du Lac, Sheboygan, Waukesha
- **Phone**: 262-699-0100
- **Contact form**: Links to Jobber (https://clienthub.getjobber.com/client_hubs/placeholder — update with real URL)
- **Key files**:
  - `src/data/serviceAreas.ts` — all county/city data in one place
  - `src/components/Layout.tsx` — shared header/footer
  - `src/components/CountyPage.tsx` — reusable county page template
  - `src/components/CityPage.tsx` — reusable city page template
  - `public/sitemap.xml` — full sitemap for all 31 pages
  - `public/robots.txt` — SEO crawl config
