# McLaren P1 React App

This project is a React + Vite single-page site showcasing the McLaren P1 hypercar, built with modern UI and animation features.

## What this project includes

- React 19 with Vite for fast development and production builds
- `react-router-dom` for page navigation between Overview, Inspiration, Design & Innovation, Performance, and Specification
- `tailwindcss` for styling and responsive layout
- `gsap` for smooth page transition and entrance animations
- background images and hero video assets used across the site

## Pages

- `/` — Landing hero page
- `/overview` — McLaren P1 overview and key facts
- `/inspiration` — Inspiration story with background imagery
- `/design-and-innovation` — Design page with hero video background
- `/performance` — Performance page with hybrid powertrain details
- `/specification` — Specification page with key P1 figures

## Available scripts

- `npm install` — install dependencies
- `npm run dev` — run development server
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint checks

## Deployment readiness

- The app builds successfully with `npm run build`
- Dependency security audit was checked and fixed using `npm audit fix`
- The project is ready for static hosting like Netlify, Vercel, or GitHub Pages

## Notes

- Current project uses Tailwind classes for layout and styling
- GSAP page animation is used in the custom `PageAnimation` component
- Navigation highlights active links in the navbar

## Getting started

1. Clone the repository
2. Run `npm install`
3. Start the dev server with `npm run dev`
4. Open the provided local URL in your browser

Enjoy the McLaren P1 experience!"