# Maniraj Kyatham - Portfolio

A responsive software-development portfolio for Maniraj Kyatham, a final-year B.Tech Information Technology student. It presents backend, AI/ML, and full-stack project work, including the Subscription Churn Prediction System and Knowledge Vault AI.

## Highlights

- Interactive portfolio CLI, available inline and as a modal from the navigation bar or `Ctrl+K`.
- Featured project deep-dives with architecture notes, technologies, and GitHub links.
- Developer-profile cards with GitHub and LeetCode public-stat popups.
- Experience, academic history, and certifications, including the 100-hour Specialized AI, ML & NLP training program.
- Downloadable PDF resume served from `public/resume.pdf`.
- Recruiter contact modal that opens a prefilled email draft.
- Optional interaction sound effects.

## Tech stack

- React 19 and TypeScript
- Vite 6
- Tailwind CSS 4
- Motion
- Lucide React

This is a static frontend application. It does not require a database, backend server, or environment variables to deploy.

## Run locally

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

The production-ready static site is created in `dist/`.

## Deploy free with Cloudflare Pages

Cloudflare Pages is recommended for this Vite portfolio. It provides HTTPS and automatic deployments from GitHub on its free plan.

1. Push this repository to GitHub.
2. Create or sign in to a Cloudflare account.
3. In Cloudflare, choose **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
4. Select the GitHub repository.
5. Configure the build:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Vite |
   | Build command | `npm run build` |
   | Build output directory | `dist` |

6. Select **Save and Deploy**.

Cloudflare will publish a free `*.pages.dev` URL and redeploy the site whenever you push changes to the connected branch. A custom domain is optional; hosting stays free, but registering a domain normally costs money.

## Alternative: GitHub Pages

GitHub Pages is also free for a public repository. For this Vite app, use a GitHub Actions deployment workflow so the `dist/` output is published after every build. Cloudflare Pages is simpler for a first deployment.

## Project structure

```text
src/
  components/          Page sections, terminal, modals, and navigation
  data/portfolioData.ts Portfolio content: projects, experience, skills, certifications
  utils/soundEffects.ts Web Audio interaction effects
  App.tsx               Page composition and terminal behaviour
  main.tsx              React entry point
public/
  resume.pdf            Downloadable resume
  robots.txt
```

## Profiles and contact

- Email: [manirajkyatham@gmail.com](mailto:manirajkyatham@gmail.com)
- GitHub: [github.com/maniraj48](https://github.com/maniraj48)
- LeetCode: [leetcode.com/u/maniraj48](https://leetcode.com/u/maniraj48)
- LinkedIn: [linkedin.com/in/maniraj-kyatham](https://linkedin.com/in/maniraj-kyatham)

© 2026 Maniraj Kyatham. Built with React, TypeScript, and Tailwind CSS.