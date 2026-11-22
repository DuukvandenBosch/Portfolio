# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vue 3 with the Composition API, TypeScript, Vite, Vue Router, Tailwind CSS v4, ESLint, Prettier, and npm.

## Users

The primary audience is mixed: hiring teams and engineering leads evaluating a student developer, alongside academic assessors and peers interested in the reasoning and learning behind the work.

## Product Purpose

This is Duuk van den Bosch's software engineering portfolio. It presents projects, technical capabilities, repository activity, development work logs, sprint retrospectives, education, experience, and contact details. Success means that a visitor can quickly understand Duuk's engineering potential and can inspect credible evidence of how the work was built and reflected on.

## Positioning

The portfolio combines process with proof. Manually authored project and journal context explains decisions, challenges, and learning, while public GitHub and HvA GitLab data provides inspectable repository and activity evidence. These sources complement one another instead of treating commits as a substitute for explanation.

## Operating Context

Visitors browse a static Vue application on the web. They may move between the homepage, project and portfolio views, work log, sprint journal articles, repository activity, and contact links. Repository metadata is fetched from public GitHub and the self-hosted HvA GitLab instance, with caching and partial-failure handling. Journal content is maintained in TypeScript data files during the semester.

## Capabilities and Constraints

- The frontend is static and deployable to Vercel; no client-side secrets or API tokens may be added.
- Public GitHub and HvA GitLab repository data is normalized into a shared project/activity model.
- API failures, rate limits, CORS restrictions, and an empty public GitLab result must remain understandable without hiding available content.
- Project, work-log, and sprint content is centralized in typed TypeScript data structures.
- Confidential details from the Amsterdam Police internship must remain omitted.
- Example or placeholder journal content must be clearly labelled until replaced with real notes.
- The existing implementation includes responsive layouts, semantic links and headings, keyboard-visible focus, an accessible mobile menu, readable contrast, and reduced-motion support; future work should preserve these behaviors.

## Brand Commitments

- The portfolio is for Duuk van den Bosch and uses the existing software-engineering identity and contact links.
- The current product direction is a dark editorial portfolio rather than a generic collection of frontend cards.
- The voice should remain considered, clear, technically grounded, and honest about experience, status, uncertainty, and limitations.

## Evidence on Hand

- Real profile, education, experience, skills, interests, and contact data are maintained in `frontend/src/config/site.ts` and `frontend/src/data/about.ts`.
- Current project, work-log, and sprint-journal content is maintained in `frontend/src/data/journal.ts`.
- Public repository and activity integrations are implemented in `frontend/src/services/`.
- GitHub and HvA GitLab profiles are configured in `frontend/src/config/site.ts`.
- No testimonials, customer claims, performance benchmarks, or press evidence are established; future work must not fabricate them.

## Product Principles

- Show the work and the reasoning behind it.
- Prefer inspectable evidence over unsupported claims.
- Keep technical context readable for visitors who are not specialists.
- Be explicit about uncertainty, confidentiality, partial failures, and unfinished work.
- Keep publishing and maintenance straightforward through typed, centralized content.

## Accessibility & Inclusion

The existing web experience supports responsive layouts, semantic structure, keyboard-visible focus, an accessible mobile menu, readable contrast, and reduced-motion preferences. Preserve these behaviors as the portfolio grows.
