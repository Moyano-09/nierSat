# Nier Automata Space Portfolio Scaffold

This repository is intentionally structured as a learning canvas instead of a finished app.

The idea is to get comfortable with:

1. `frontend`: what the user sees and interacts with.
2. `backend`: where your future C# API would fetch and normalize data from NASA / ESA / other APIs.
3. `database`: where you would persist curated content, favorites, cache entries, and portfolio metadata.

## How To Run

From the project root:

```powershell
npm install
npm run dev
```

This starts the current static frontend canvas from `scripts/dev.js`.

Default local URLs:

- frontend canvas: `http://localhost:5500`

## Current Direction

- `frontend/` is the visual canvas you can later migrate into Vue 3.
- `backend/` is now reserved for a C# API.
- `scripts/dev.js` is the only JavaScript entry point in the repo right now.

## When You Install Vue 3

The cleanest path is:

```powershell
npm create vue@latest frontend-vue
```

Then you can move the ideas from the current `frontend/` canvas into Vue components and stop using `scripts/dev.js`.
