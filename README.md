# NewsBangla24

A responsive Bangla + English news portal starter with light/dark mode and a browser-based demo admin dashboard.

## Features
- Responsive homepage, breaking ticker, featured story, latest news and category filters
- Search, article detail modal, light/dark theme
- Add, edit and delete news from `admin.html`
- Demo content and editable image URLs
- GitHub Pages compatible; no build step required

## Run locally
Open `index.html` in a browser, or use a local static server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a GitHub repository and upload all files/folders in this project.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select `main` and `/ (root)`, then Save.
5. Wait for the Pages URL to appear.

## Admin demo
Open `/admin.html` to add, edit or delete news. Data is stored in the current browser's `localStorage`; it is not shared with visitors or synced across devices. This is a front-end demo, not secure authentication.

## Before production
- Replace demo articles and image URLs with verified content you own or have permission to use.
- Add a secure backend/CMS and authentication for shared publishing.
- Do not expose a private admin dashboard publicly without authentication.
- Add privacy, editorial, copyright and contact pages as appropriate.
