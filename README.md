# Animated Developer Portfolio

A complete single-page portfolio for **Alex Morgan**, a fictional senior frontend developer. Built with Next.js App Router, strict TypeScript, Tailwind CSS v4, lucide-react, and lightweight CSS entrance animations.

## Run

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production:

```sh
npm run build
npm start
```

`npm run typecheck` checks TypeScript without emitting files. No test suite is included.

## Customize

- Edit projects, roles, and the validated email address in `src/lib/data.ts`.
- Edit page copy in `src/app/page.tsx` and metadata in `src/app/layout.tsx`.
- Adjust theme tokens and responsive styling in `src/app/globals.css`.
- Project preview artwork is original local CSS and inline SVG in `src/components/project-art.tsx`; no external assets or fonts are required.

The theme follows the system preference initially and remembers manual changes when local storage is available. Navigation supports keyboard use, an Escape-dismissable mobile menu, a skip link, and visible focus states. Motion and smooth scrolling respect reduced-motion preferences.

All companies, experience, and projects are illustrative. Project arrows point to inline expandable project notes. Contact opens an email application with a prefilled subject; `alex.morgan@example.com` is a deliberately labeled example address, not a working inbox. Replace it before publishing. There is no message submission, backend, or résumé download. Search indexing is disabled for this fictional demo; update metadata before real use.

## Screenshot

<img width="1902" height="910" alt="image" src="https://github.com/user-attachments/assets/66724c63-0f20-444f-b9f5-2b2205fd1a37" />


This is a placeholder, not a screenshot of a verified browser rendering. Replace it after capturing the application.
