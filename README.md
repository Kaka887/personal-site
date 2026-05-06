# Personal Editorial Website (Vite + React + TypeScript + Tailwind)

A warm, timeless, editorial-style personal website for showcasing biography, experience, projects, works, writing, and contact details.

## 1) Install dependencies

```bash
npm install
```

## 2) Run locally

```bash
npm run dev
```

Optional local production preview:

```bash
npm run build
npm run preview
```

## 3) Where to edit your personal content

Update all profile data in:

- `src/data/site.ts`

This file contains:

- name/title/navigation
- hero text and CTA links
- about paragraphs
- experience/projects/works/writing
- stats
- contact links and email

## 4) GitHub Pages setup

1. Push this project to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Ensure `Build and deployment` is set to `GitHub Actions`.
4. Push to the `main` branch to trigger deployment.

Deployment workflow is defined in:

- `.github/workflows/deploy.yml`

Build output is uploaded from:

- `dist`

## 5) How to configure `vite` base path

File:

- `vite.config.ts`

This project uses:

- `VITE_GITHUB_PAGES_BASE="/REPO_NAME/"` for repository pages
- `VITE_GITHUB_PAGES_BASE="/"` for `username.github.io` root pages

The GitHub Actions workflow auto-detects the repository type and sets this variable for you.

If you prefer manual configuration, edit `base` in `vite.config.ts` directly.

## 6) Deploy to production

1. Commit your changes.
2. Push to `main`.
3. Wait for the `Deploy to GitHub Pages` workflow to pass.
4. Open the generated Pages URL from the workflow result.

## Project structure

```text
src/
  components/
    Button.tsx
    EditorialCard.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    ProjectItem.tsx
    Reveal.tsx
    SectionLabel.tsx
  data/
    site.ts
  sections/
    About.tsx
    Contact.tsx
    Experience.tsx
    Interests.tsx
    Projects.tsx
    Stats.tsx
    Works.tsx
    Writing.tsx
  styles/
    globals.css
  App.tsx
  main.tsx
```

## Notes

- Replace the placeholder CV at `public/cv.pdf` with your real PDF.
- Replace placeholder links (`#`) in `src/data/site.ts` with real URLs.

