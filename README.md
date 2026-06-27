# Learn Wuji in One Week

A self-contained static site for the course, built to the **"Wuji Final — Structure 3"** design handoff. No build step.

## Hosting
- **Repo:** github.com/teleokinetic/oneweekwuji
- **GitHub Pages:** deploy from branch `main`, root (`/`). Live at https://teleokinetic.github.io/oneweekwuji/
- **Custom domain:** `oneweekwuji.com` (apex). Requires four GoDaddy `A` records → `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`. Once DNS resolves, add a `CNAME` file containing `oneweekwuji.com`, set the custom domain in Pages, and enable enforced HTTPS.

## Run it locally
```
cd ~/Desktop/learn-wuji-site
python3 -m http.server 8080
# open http://localhost:8080
```
(Or just open `index.html` directly — it works from `file://` too.)

Note: `python3 -m http.server` caches aggressively, so edits to `app.js`/`styles.css` may not show on a normal reload — hard-reload (Cmd+Shift+R) or use a no-cache server during development.

## What's here
- `index.html` — shell + fonts
- `styles.css` — design tokens + components, responsive (mobile <720px → two-column desktop)
- `course-data.js` — all course content (Start Here, Day 1–7, Where to Go Next) as structured data
- `app.js` — hash router, accordion, placeholder player, self-check persistence

## Screens
- **Home** (`#/`) — week list, progress, today's day. Every row is clickable so you can browse all content.
- **Day lesson** (`#/day1`…`#/day7`) — audio-first layout: player + segmented accordion (Recall → Explore → Self-narrate), success-sensation cards, timer pills.
- **Article** (`#/start`, `#/next`) — Start Here and Where to Go Next as prose pages.

## Completion & progress
- Each day and Start Here ends with a button. **Start Here → "Begin Day One"** (marks it read, goes to Day 1). **Days → "Mark day complete"** (marks complete, returns home; reads "Back to your week" once done). **Where to Go Next → "Back to your week"** (reference page, no completion).
- Completion persists in `localStorage` (`wuji:completed`). The home screen derives everything from it: completed rows get ✓, the **first incomplete day is "today,"** and **"X of 7" counts completed days**.
- Default is a true **first-run**: nothing complete, Start Here is today, 0 of 7. To pre-seed a populated demo, set the seed array in `completedSet()` (app.js).

## v1 placeholders (intentional)
- **Audio** is a visual placeholder only — the player toggles play/pause and shows a moving bar (starting from 0:00 / empty), but plays nothing. Day 6 "small dance" and Day 7 "internal dynamic" show a "coming soon" guided-audio note.
- **Durations** show authored `[!timer]` values for self-narrate steps; explore/recall steps show `—:—` (real timing still TBD).
- "Where to Go Next" still shows the three `[Expand: …]` draft stubs in muted italic.

## Porting later
Content lives entirely in `course-data.js`. When the course content is finalized in the vault, re-export into that file (or wire it to a data source) and the screens update with no markup changes.
