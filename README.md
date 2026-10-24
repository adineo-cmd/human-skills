# humanity/skills

A registry of every skill our species has ever mastered — a skills.sh-style
directory, but for humans. 1,065 skills across 19 domains and 6 eras, from
fire-making to prompt engineering.

## Run it

No build step, no dependencies. Any static file server works:

```sh
cd human-skills
python3 -m http.server 8642
# open http://127.0.0.1:8642/
```

## Structure

| File      | Contents                                                        |
|-----------|-----------------------------------------------------------------|
| index.html| Page shell — hero, filter bar, leaderboard, footer, dialog      |
| styles.css| Hearth-lit theme; accent color temperature encodes skill era    |
| data1.js  | Eras, domains, and skills: survival, food, craft, build, land   |
| data2.js  | Skills: health, movement, arts, language                        |
| data3.js  | Skills: mind, social, trade, navigation, home, science, computing, faith, play |
| data4.js  | Expansion (micro + macro): survival, food, craft, build, land, style |
| data5.js  | Expansion: health, movement, arts, language, mind               |
| data6.js  | Expansion: social, trade, navigation, home, science, computing, faith, play |
| app.js    | Search, sort tabs, era/domain filters, sparklines, dialog, toast|

## Data format

Each skill is `[name, description, era, practitionersLog10, difficulty]`:

- **era** — 0 Ancient (before 3000 BCE) · 1 Classical · 2 Medieval ·
  3 Industrial · 4 Modern · 5 Emerging (since 2000)
- **practitionersLog10** — order of magnitude of living humans who practice
  it (9.95 ≈ 8.9 billion for spoken language)
- **difficulty** — 1 Novice … 5 Master

Practitioner counts are living-population estimates, rounded with feeling.

## Features

- Search across names, descriptions, and domains (`/` to focus, highlight matches)
- Sort: most practiced / oldest first / trending now
- Era and domain filter chips with counts
- Leaderboard rows with era-colored "300,000-year activity" sparklines
- Skill detail dialog with related skills and a copyable
  `skills learn <name>` command
- Footer directory of all domains and eras
