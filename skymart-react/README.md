# SkyMart React Storefront

A clean, responsive e-commerce front end built with React and Vite. The project includes product filtering, search, a working cart drawer, quantity controls, wishlist buttons, and light/dark themes.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project structure

```text
skymart-react/
├── public/
│   ├── favicon.svg
│   └── products/              # Local product illustrations
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── Benefits.jsx
│   │   ├── CartDrawer.jsx
│   │   ├── CategoryTabs.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductGrid.jsx
│   ├── data/
│   │   └── products.js        # Product/category data
│   ├── hooks/
│   │   └── useCart.js         # Cart state and actions
│   ├── styles/
│   │   └── index.css          # Global design system and responsive styles
│   ├── App.jsx                # Page composition and filters
│   └── main.jsx               # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Notes

- All product artwork is stored locally in `public/products`, so the store does not depend on external image URLs.
- Product data is isolated from UI components for easier API replacement later.
- The cart logic lives in a custom hook and can be upgraded to Context, Redux, Zustand, or backend persistence.


## Blank-page troubleshooting

If you previously installed another version, remove the old dependency cache first:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

This fixed release avoids deprecated Lucide brand-icon imports and pins compatible package versions.
