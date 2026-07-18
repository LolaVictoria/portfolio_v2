# Damilola Oniyide — Portfolio

Typography-led, minimal portfolio built with React, Vite, and Tailwind CSS.

## File structure

```
lola-portfolio/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   ├── projects.js       # all project content, edit here to add/remove projects
    │   ├── resume.js         # skills, experience, education
    │   └── articles.js       # article list
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── sections/
        ├── Home.jsx
        ├── Projects.jsx
        ├── Resume.jsx
        ├── Articles.jsx
        └── Contact.jsx
```

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
```

## Design notes

- Colors, fonts, and spacing are defined once in `tailwind.config.js` — change the palette
  or typefaces there and it updates everywhere.
- Warm paper background (`#F6F4EF`) + ink text (`#1C1B18`) + a single muted indigo accent
  (`#33415C`), deliberately avoiding the near-black/acid-green look of the previous version.
- Display type is Source Serif 4, body is Inter, and small labels/tags use IBM Plex Mono —
  loaded via Google Fonts in `index.html`.
- To add a project, add an entry to the array in `src/data/projects.js` — no component
  changes needed.
