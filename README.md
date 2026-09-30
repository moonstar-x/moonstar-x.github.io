# moonstar-x.github.io

Source code for my personal portfolio, live at [moonstar-x.dev](https://moonstar-x.dev).

It is a statically exported [Next.js](https://nextjs.org) site with a home page, a work/projects showcase, and a contact page. All content is driven by Markdown and YAML files in `data/`, so adding a project means adding a file, not writing code.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export) with [React](https://react.dev) 19 and TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4
- [Framer Motion](https://motion.dev) for animations
- [unified](https://unifiedjs.com) / [react-markdown](https://github.com/remarkjs/react-markdown) with a rehype pipeline for rendering project write-ups
- [gray-matter](https://github.com/jonschlinkert/gray-matter) and [Zod](https://zod.dev) for parsing and validating content
- [Umami](https://umami.is) for optional, privacy-friendly analytics

## Getting Started

### Prerequisites

- Node.js `v24.20.0` (see [`.nvmrc`](.nvmrc)); with [nvm](https://github.com/nvm-sh/nvm) run `nvm use`
- npm

### Installation

```bash
git clone https://github.com/moonstar-x/moonstar-x.github.io.git
cd moonstar-x.github.io
npm ci
```

### Development

```bash
npm run dev
```

The site is served at <http://localhost:3000>.

### Scripts

| Script              | Description                                          |
|---------------------|------------------------------------------------------|
| `npm run dev`       | Start the development server                         |
| `npm run build`     | Create the static export in `build/`                 |
| `npm run typecheck` | Type-check the project with `tsc`                    |
| `npm run lint`      | Lint with ESLint                                     |
| `npm run lint:fix`  | Lint and auto-fix                                    |

## Configuration

Environment variables are read from a `.env` file (or the environment) at build time.

| Variable                          | Default                 | Description                                         |
|-----------------------------------|-------------------------|-----------------------------------------------------|
| `NEXT_BASE_URL`                   | `http://localhost:3000` | Public URL of the site, used for SEO and the sitemap |
| `NEXT_CONTENT_LANG`               | `en`                    | Content language                                    |
| `NEXT_SHOW_DRAFT_CONTENT`         | `false`                 | Set to `true` to show draft content                 |
| `NEXT_REVALIDATE_TIME`            | `600`                   | Revalidation time in seconds for remote data        |
| `NEXT_ANALYTICS_UMAMI_SRC`        | unset                   | Umami script URL (analytics are off if unset)       |
| `NEXT_ANALYTICS_UMAMI_WEBSITE_ID` | unset                   | Umami website ID                                    |

## Content

```
data/
├── config.yml    # Profile, socials, experience and education
└── work/         # One Markdown file per project
```

- **Profile and CV:** edit [`data/config.yml`](data/config.yml).
- **Projects:** add a Markdown file to `data/work/`. The front matter defines the project metadata (name, description, cover, date, technologies, status, type, links) and the body is the write-up. Project types are `art`, `hobby` and `research`.
- **Static assets** (covers, images, videos) live in `public/assets/work/<project>/`.

See any file in [`data/work/`](data/work) for a complete example.

## Project Structure

```
src/
├── app/          # Routes: home, work, work/[slug], contact, error and 404 pages
├── components/   # UI components grouped by feature (home, work, contact, ui, ...)
└── core/         # Config, routes, analytics events, data services and utilities
```

## Deployment

The site is exported statically (`output: 'export'`) into `build/` and published to GitHub Pages through GitHub Actions:

- **Pull requests:** run type-checking and linting.
- **Pushes to `main`:** run the checks, build the site, and publish `build/` to GitHub Pages.
- **Weekly (Sundays, 08:00 UTC):** rebuild and redeploy so remote data (GitHub, npm, Docker Hub stats) stays fresh.

The deploy workflow expects these repository variables: `BASE_URL`, `UMAMI_SRC`, `UMAMI_WEBSITE_ID`; and this secret: `MACHINE_ACCOUNT_TOKEN`.

## License

Licensed under the [Apache License 2.0](LICENSE).
