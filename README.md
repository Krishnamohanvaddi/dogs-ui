# 🐾 Dogs UI — Frontend

> A React-based web interface for browsing and managing dog breeds. Features a full CRUD support, breed search.

---

## 🔗 Live URLs

| Resource | URL |
|---|---|
| **Live App** | `https://dogs-ui-flax.vercel.app/` |
| **GitHub Repo** | `https://github.com/Krishnamohanvaddi/dogs-ui` |
| **Backend API** | `https://dogs-api-y5cx.onrender.com/api/dogs` |

---

## Overview

Dogs UI is the client-facing interface for the Dog Breeds management system. It communicates entirely with the Dogs API over HTTP and provides a clean interface for performing all breed operations without needing to interact with raw API endpoints.

The app is built with **React** (Create React App), uses **Axios** for HTTP requests, and is deployed on **Vercel** with automatic deployments triggered on every push to `main`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| HTTP client | Axios |
| Styling | Plain CSS|
| Deployment | Vercel |

---

## Features

### All Breeds tab
- Loads every breed from the database on page mount
- Live filter input — instantly narrows the list as you type
- Inline edit — clicking Edit opens an edit form directly inside the breed card without any navigation
- Delete with confirmation dialog
- Breed count displayed in the header, updates in real time

### Search Breed tab
- Calls `GET /api/dogs/{breed}` directly — fetches a single breed by exact name
- Shows a structured result card with breed name, ID, and all sub-breed tags
- Action buttons on the result card to edit or delete the found breed
- Clear error message when a breed is not found (404)

### Add Breed tab
- Form with breed name (required) and sub-breeds (optional)
- Live sub-breed tag preview as you type — see exactly how tags will render before saving
- Duplicate breed error handled gracefully with a toast notification
---

## Running Locally

### Prerequisites

- Node.js 20 LTS ([nodejs.org](https://nodejs.org))
- The Dogs API backend running locally on port `8080`

### 1. Clone the repository

```bash
git clone https://github.com/krishnamohanvaddi/dogs-ui.git
cd dogs-ui
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a local environment file

Create a file called `.env.local` in the project root:

```
REACT_APP_API_URL=http://localhost:8080/api/dogs
```

This file is gitignored by default — it will not be pushed to GitHub.

### 4. Start the development server

```bash
npm start
```

The app opens automatically at `http://localhost:3000`.

### 5. Make sure the backend is running

The frontend expects the Dogs API to be running at `localhost:8080`. If the backend is not running, the app will show a connection error message in the All Breeds tab.

See the [dogs-api README](https://github.com/krishnamohanvaddi/dogs-api) for backend setup instructions.

---

## Deployment on Vercel

This app is deployed on [Vercel](https://vercel.com) with zero configuration required.

### Steps followed

1. Pushed the code to GitHub
2. Logged into Vercel → **Add New Project** → imported the `dogs-ui` repository
3. Vercel auto-detected Create React App — no build settings needed
4. Updated `.env.production` with the live Render backend URL and pushed to `main`
5. Vercel deployed automatically

Every subsequent `git push` to `main` triggers a new production deployment automatically.

### Build command (auto-detected by Vercel)

```bash
npm run build
```

### Output directory (auto-detected by Vercel)

```
build/
`
