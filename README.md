# Duuk van den Bosch — Portfolio

A polished, editorial portfolio for Duuk van den Bosch, Software Engineering student and developer. The static Vue app presents projects from GitHub and HvA’s self-managed GitLab, with graceful partial-failure handling and local caching.

## Features

- Responsive editorial layout with accessible navigation, focus states, reduced-motion support, metadata, and a styled 404 page.
- Live public repository metadata from GitHub and `gitlab.fdmci.hva.nl`, normalized into one project model.
- Search and platform filters, loading/error states, duplicate removal, and a 15-minute browser cache.
- Centralized profile configuration and an easy featured-project data file.

## Stack

Vue 3 with the Composition API, TypeScript, Vite, Vue Router, Tailwind CSS v4, ESLint, Prettier, and npm.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

Useful commands: `npm run build` (type-check and production build), `npm run type-check`, `npm run lint`, `npm run format`, `npm run format:check`, and `npm run preview`.

## Structure

`frontend/src/pages` contains routed pages; `components` is reserved for shared UI as it grows. `config/site.ts` contains profile settings, `data/portfolio.ts` contains editable skills and featured project overrides, `services/` contains separate GitHub/GitLab clients and normalization, and `types/` contains shared TypeScript models.

## Profiles and featured projects

The current profiles are configured in `frontend/src/config/site.ts`: GitHub user `DuukvandenBosch` and HvA GitLab user `boschdp` at `https://gitlab.fdmci.hva.nl`. To curate featured repositories, add a canonical repository URL as a key in `frontend/src/data/portfolio.ts`, optionally with `intro`, `highlights`, and `technologies`. No UI component needs editing.

## Repository integrations

Both public APIs are called directly from the browser without tokens. GitHub uses its user repositories endpoint; GitLab uses the configured host’s v4 user projects endpoint. Requests are paginated and capped to protect visitors from excessive calls. The configured HvA GitLab endpoint was verified from a separate browser origin: it currently returns HTTP 200 with a CORS response and an empty public-project array (`x-total: 0`), so an empty GitLab section is a visibility result rather than a frontend failure. GitHub/GitLab rate limits, anonymous-access restrictions, CORS, or downtime are shown as partial errors while the other source remains available. Successful results are cached in `localStorage` for 15 minutes. If a source is unavailable before any result is cached, the page remains usable and links to both profiles are available from Contact.

## Environment variables

None are required. Profile values are public configuration, not secrets, and currently live in `frontend/src/config/site.ts`. Do not add API tokens to a Vite client bundle.

## Vercel deployment

Import the repository into Vercel, set the project root to `Portfolio/frontend`, framework preset to Vite, build command to `npm run build`, and output directory to `dist`. The included `vercel.json` also provides SPA routing guidance for the repository’s existing layout. The frontend is static and does not require the Express health server or paid services.

## Quality and accessibility

The app uses semantic links and headings, keyboard-visible focus, an accessible mobile menu, readable contrast, responsive layouts, and reduced-motion preferences. Run the type check, lint, formatting check, and production build before deployment.
