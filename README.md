# Duuk van den Bosch — Portfolio

A polished, editorial portfolio for Duuk van den Bosch, Software Engineering student and developer. The static Vue app presents projects from GitHub and HvA’s self-managed GitLab, with graceful partial-failure handling and local caching.

## Features

- Responsive editorial layout with accessible navigation, focus states, reduced-motion support, metadata, and a styled 404 page.
- Live public repository metadata from GitHub and `gitlab.fdmci.hva.nl`, normalized into one project model.
- Search and platform filters, loading/error states, duplicate removal, and a 15-minute browser cache.
- Centralized profile configuration and an easy featured-project data file.
- Read-only Work Log and Sprint Journal pages with richer process documentation and clearly labelled example content.
- Unified public GitHub/GitLab commit activity feed with platform filters and partial-failure handling.

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

`frontend/src/pages` contains routed pages; `components/` contains shared UI such as social links and journal image presentation; `config/site.ts` contains profile settings; `data/portfolio.ts` contains editable skills and featured project overrides; `data/journal.ts` contains current work, published work-log entries, and sprint articles; `services/` contains separate GitHub/GitLab clients and normalization; and `types/` contains shared TypeScript models.

## Developer journal features

`/work-log` is a read-only public timeline sourced from `frontend/src/data/journal.ts`; add real entries there and remove the explicitly labelled example entry. `/journal` lists sprint articles and `/journal/:slug` renders the long-form article structure. Add a new `SprintArticle` object to `frontend/src/data/journal.ts` to publish another sprint without changing a Vue component.

## Semester development log workflow

1. Add or update a `WorkLogEntry` or `SprintArticle` in `frontend/src/data/journal.ts`.
2. Put visual documentation in `frontend/public/images/devlog/` (create subfolders by project or sprint when useful).
3. Reference an image with its path, meaningful `alt`, optional caption, and explanation:

```ts
images: [{
  src: '/images/devlog/portfolio/wireframe.png',
  alt: 'Annotated wireframe of the portfolio project page',
  caption: 'Early project-page wireframe',
  description: 'The layout used to compare repository metadata and project context.',
}],
```

4. Link related project IDs, sprint IDs, commits, or external repositories where relevant.
5. Replace the labelled sample content with real semester notes, run the checks, then commit and deploy through Git.

Short entries can contain only a title, summary, project, tasks, technologies, and reflection. Detailed entries can additionally use `context`, `goal`, `approach`, `implementation`, `challenges`, `decisions`, `result`, `nextSteps`, and `images`. The article page presents these sections only when content exists.

`/activity` combines public GitHub push-event commits and commits from public projects returned by the configured HvA GitLab API. Each service normalizes its own response into the shared `GitCommit` model; requests are cached briefly and `Promise.allSettled` keeps one unavailable platform from hiding the other. No tokens are sent to the browser. GitLab may legitimately return an empty feed when the account has no publicly visible projects.

## Profiles and featured projects

The current profiles are configured in `frontend/src/config/site.ts`: GitHub user `DuukvandenBosch` and HvA GitLab user `boschdp` at `https://gitlab.fdmci.hva.nl`. To curate featured repositories, add a canonical repository URL as a key in `frontend/src/data/portfolio.ts`, optionally with `intro`, `highlights`, and `technologies`. No UI component needs editing.

## Contact details

The contact page and footer use the centralized links in `frontend/src/config/site.ts`: `duukvandenbosch@gmail.com`, LinkedIn at `https://www.linkedin.com/in/duukvandenbosch`, GitHub, and HvA GitLab. Optional social links are filtered from that configuration, so an unconfigured link is never rendered.

## Repository integrations

Both public APIs are called directly from the browser without tokens. GitHub uses its user repositories endpoint; GitLab uses the configured host’s v4 user projects endpoint. Requests are paginated and capped to protect visitors from excessive calls. The configured HvA GitLab endpoint was verified from a separate browser origin: it currently returns HTTP 200 with a CORS response and an empty public-project array (`x-total: 0`), so an empty GitLab section is a visibility result rather than a frontend failure. GitHub/GitLab rate limits, anonymous-access restrictions, CORS, or downtime are shown as partial errors while the other source remains available. Successful results are cached in `localStorage` for 15 minutes. If a source is unavailable before any result is cached, the page remains usable and links to both profiles are available from Contact.

## Environment variables

None are required. Profile values are public configuration, not secrets, and currently live in `frontend/src/config/site.ts`. Do not add API tokens to a Vite client bundle.

## Vercel deployment

Import the repository into Vercel, set the project root to `Portfolio/frontend`, framework preset to Vite, build command to `npm run build`, and output directory to `dist`. The included `vercel.json` also provides SPA routing guidance for the repository’s existing layout. The frontend is static and does not require the Express health server or paid services.

## Quality and accessibility

The app uses semantic links and headings, keyboard-visible focus, an accessible mobile menu, readable contrast, responsive layouts, and reduced-motion preferences. Run the type check, lint, formatting check, and production build before deployment.
