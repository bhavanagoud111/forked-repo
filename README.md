# MoodAI

MoodAI is a static web app built with plain HTML, CSS and JavaScript. You pick how you feel, and it responds with matching content, mini-games, recipes and stress-relief exercises. There is no build step and no backend. The repository also contains a small, separate shell script that calculates simple interest.

## Features

### Home page (`index.html`, `script.js`, `styles.css`)
- **Mood picker.** There are 16 moods (happy, sad, anxious, stressed, tired and others). Picking one shows a short summary and a random quote, sets an animated "mood pet", and highlights a suggested game.
- **Mood image.** A random landscape photo for the mood is fetched from the Unsplash API. This needs an Unsplash access key; see [Configuration](#configuration).
- **Recommended video.** A YouTube link and thumbnail chosen for each mood.
- **Mood journal.** Write and save entries. Entries and the current draft are kept in the browser's `localStorage`.
- **Mood calendar.** A monthly calendar for recording a mood per day, also saved in `localStorage`.
- **Mini-games.** Tic-Tac-Toe, Memory Match, Snake and Rock Paper Scissors, each opened in a modal.
- **MoodAI Assistant.** A rule-based chat that matches keywords in your message and replies from built-in response templates (greetings, activities, relaxation tips, mood improvement). It does not call an external AI service.

### Mood Food (`food.html`, `food.js`, `food.css`)
- Recipe cards for 8 moods. Each card has prep and cook times, ingredients, step-by-step instructions and tags.

### Stress Relief (`stress.html`, `stress.js`, `stress.css`)
- A guided 4-7-8 breathing exercise (inhale 4s, hold 7s, exhale 8s) with an animated circle.
- A 5-minute meditation timer.
- Lists of physical and mental wellness activities, plus quick tips.

## Getting started

1. Clone the repository.
2. Open `index.html` in a browser, or serve the folder with any static file server, for example:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

Use the **Stress Relief** and **Mood Food** buttons on the home page to move between pages.

## Configuration

The mood image feature uses the [Unsplash API](https://unsplash.com/developers). Create an Unsplash app to get an access key, then set it at the top of `script.js`:

```js
const UNSPLASH_API_KEY = 'YOUR_UNSPLASH_ACCESS_KEY';
```

Without a valid key, the image card shows a fallback placeholder. The rest of the app works normally.

## Simple interest script

`simple-interest.sh` is a separate Bash script. It asks for the principal, rate and time, then prints the simple interest. It uses `bc`.

```bash
bash simple-interest.sh
```

## Project structure

```
index.html, script.js, styles.css   Home page: moods, journal, calendar, games, chat
food.html, food.js, food.css        Mood Food recipes
stress.html, stress.js, stress.css  Stress Relief exercises
simple-interest.sh                  Simple interest calculator (Bash)
CONTRIBUTING.md, CODE_OF_CONDUCT.md Contribution guidelines
```
