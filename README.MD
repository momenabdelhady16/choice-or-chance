# 🎲 Choose Your Story — Interactive Quiz Game

A small JavaScript exercise built as my first hands-on task with JS fundamentals, part of the Front-End course at **EraaSoft**. It started as a `confirm()` / `alert()` game and was later rebuilt as a real web page using DOM manipulation.

## 📖 About the Project

This is a simple randomized "choose your adventure" style quiz. The player is asked a random everyday question (e.g. *"Do you order your coffee hot or iced?"*) and picks one of two options using buttons on the page. A random outcome — good or bad — is then revealed on the page. The game keeps asking new questions until either:

- ✅ All 10 questions have been answered with no more than 3 bad outcomes (*"Congrats! All done, you passed all questions"*), or
- ❌ The player racks up 4 bad outcomes and loses (*"You Died"*)

### 🎲 How the randomness works
- The question order changes every game. Questions are picked at random each time a game starts.
- No question is ever repeated. Each question is removed from the pool once it has been asked, so you see all 10 questions exactly once per game.
- Every option you pick has a random result. Choosing an option gives a random good or bad outcome.

## ▶️ How to Play

1. Open `index.html` in a browser (no dialogs and no Node.js needed).
2. Click the title **"Click to start"**.
3. Read the question and press **Option 1** or **Option 2**.
4. The outcome of your choice appears at the top of the page, and the tries counter updates after every bad outcome (you start with 4 tries).
5. Finish all 10 questions to win and get a medal based on your mistakes:
   - 🥇 **0–1 mistakes** — Incredible! You are the best.
   - 🥈 **2 mistakes** — Amazing! You got second place.
   - 🥉 **3 mistakes** — Well done! You made the top three.
6. Your score is shown next to the medal, for example `( 9 / 10 )`. It is calculated from the number of questions answered, not a fixed number.
7. After winning or losing, click the restart icon to play again with a fresh set of questions.

## 🆕 What's New

| Feature | Before | Now |
| :--- | :--- | :--- |
| **Start Logic** | The game started automatically when the script loaded. | The game starts when you click the title, using an inline `onclick="startGame()"` in the HTML. |
| **User Input** | `confirm()` dialog to choose an option. | Two `<button>` elements with `addEventListener("click", ... )`. |
| **Output Display** | `alert()` to show the outcome. | Outcome rendered on the page with `textContent`, `createElement`, `createTextNode` and `appendChild`. |
| **Game Loop** | Recursion: `ask()` called itself for the next question. | Event-driven: every button click runs `action()` and moves to the next question, no recursion. |
| **Function Naming** | Named function expression (`function ask()`). | Removed, no longer needed since recursion is gone. |
| **Tries/Chances** | 3 chances. | 4 tries (set by a single `MAX_MISTAKES` constant), with a live counter on the page. |
| **Replayability** | No way to play again without reloading. | Restart icon (Font Awesome) shown after a win or a loss. |
| **Scoring** | No ranking. | Medals (🥇🥈🥉) and a score based on the number of mistakes. |
| **Tech Stack** | JavaScript only. | HTML + CSS + JavaScript. |
| **Styling** | Plain dialogs. | CSS styling: animated gradient border (`conic-gradient` with `@property` and `@keyframes`), hover effects, and a responsive layout with media queries. |

## 🛠️ Changelog

Refinements made after the DOM rewrite:

- **One flow for every answer:** `action()` no longer has two near-identical branches for good and bad outcomes. It shows the outcome, checks for a loss, then moves to the next question.
- **`MAX_MISTAKES` constant:** the number of tries is defined once and drives both the tries counter and the lose condition (the number 4 used to be hard-coded in several places).
- **Dynamic score:** the score uses the number of questions answered instead of a fixed 10, and is displayed as `( 9 / 10 )`.
- **Cleaner finish message:** `finishGame()` picks the medal text first, then builds the final message in one template instead of repeating the same code for each medal. Medals are only given for up to 3 mistakes.
- **Correct wording in the counter:** it shows "Try" or "Tries" depending on how many tries are left.
- **Cleanup:** removed unused variables (`pageBody` and `choice`).

## 🧠 Concepts Practiced

- **DOM selection** — `getElementById` to grab elements from the page.
- **Events** — `addEventListener` for the option buttons and the restart icon, plus an inline `onclick` in the HTML for the start title.
- **Creating and updating elements** — `textContent`, `createElement`, `createTextNode`, `appendChild`, and `innerHTML` (used only with the game's own static text).
- **Showing and hiding** — `style.display` for the question box and the restart icon, and `classList` to toggle the title's clickable style.
- **Bracket notation** — each button's value (`option_1` / `option_2`) is used as a key: `question[opt]`.
- **Closures** — the question pool (`quests`) is encapsulated inside `questions()` and only accessible through the returned function. Calling `questions()` again on restart creates a fresh pool.
- **Arrays & array mutation** — `splice()` removes an already-asked question so it doesn't repeat.
- **Randomization** — `Math.random()`-based helper functions (`randOfN`, `randOfTwo`) drive both question selection and outcome selection.
- **Conditional logic & state tracking** — `mistakes`, `number`, and `startSwitch` track the game state and decide when the player wins, loses, or restarts.
- **Template literals** — to build the question number, the tries counter, and the score text.
- **Constants** — `MAX_MISTAKES` keeps the number of tries in one place.

## 📁 Project Structure

    .
    ├── index.html   # Page structure: title, question box, option buttons, restart icon
    ├── style.css    # Styling: animated border, hover effects, responsive layout
    ├── main.js      # Game logic: questions pool, DOM updates, tries, ranking, restart
    └── README.md

## 📝 Notes

- The number of tries can be changed by editing `MAX_MISTAKES` at the top of the game logic in `main.js`. Medals are tied to the number of mistakes, so with fewer tries some medals can't be reached (for example, with 3 tries the 🥉 medal is impossible because the game ends on the third mistake).
- This was built for practice purposes to apply core JavaScript and DOM concepts (closures, arrays, randomness, events, and DOM manipulation) taught in the course — not intended as a polished production app.