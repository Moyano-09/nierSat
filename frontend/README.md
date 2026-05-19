# frontend-vue

Small Vue 3 + TypeScript frontend for the Nier-inspired space portfolio.

## Current Shape

The app is intentionally reduced to a few moving parts:

- `src/main.ts`: app bootstrap
- `src/App.vue`: main shell
- `src/data/`: simple content files
- `src/styles/`: global styles

Router and store files were removed for now so the project stays easier to read.

## Run

```sh
npm install
npm run dev
```

Then open the local URL Vite prints in the terminal.
It is usually `http://localhost:5173`.

If you want to verify TypeScript separately:

```sh
npm run type-check
```

## Later

Add routing only when you truly need multiple screens.
Add state management only when props and local state stop being enough.
