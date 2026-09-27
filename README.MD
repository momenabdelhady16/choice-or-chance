# Choose Your Story — Interactive Quiz Game

A small JavaScript exercise built as my first hands-on task with JS fundamentals, part of the Front-End course at **EraaSoft**.

## 📖 About the Project

This is a simple randomized "choose your adventure" style quiz. The player is asked a random everyday question (e.g. *"Do you order your coffee hot or iced?"*), picks one of two options via a `confirm()` dialog, and then a **random outcome** — good or bad — is revealed via an `alert()`. The game keeps asking new random questions until either:

- ✅ All questions have been answered (**"All done! you passed all questions"**), or
- ❌ The player racks up too many bad outcomes and **loses** (**"You Died!"**)

Each playthrough feels different since both the question order and the outcome of each choice are randomized.

## 🧠 Concepts Practiced

- **Closures** — the game state (`quests`, `mistakes`) is encapsulated inside `question()` and only accessible through the returned function.
- **Named function expressions** — the returned function is named (`function ask()`) so it can call itself recursively from within its own closure, since it has no external variable name to reference.
- **Recursion** — instead of a loop, `ask()` calls itself to move on to the next question, until an end condition (win or lose) is met.
- **Arrays & array mutation** — `splice()` is used to remove an already-asked question from the pool so it doesn't repeat.
- **Randomization** — `Math.random()`-based helper functions (`randOfN`, `randOfTwo`) drive both question selection and outcome selection.
- **Conditional logic & state tracking** — a `mistakes` counter tracks how many bad outcomes occurred, ending the game once the player runs out of chances.

## ▶️ How to Play

1. Open the file in a browser (uses `confirm()` and `alert()`, so it needs a real browser environment — won't run in Node.js as-is).
2. Each question pops up as a confirm dialog: press **OK** for option 1, **Cancel** for option 2.
3. An alert reveals the outcome of your choice right after.
4. Keep answering until you either finish all 10 questions or run out of chances after enough bad outcomes.

## 📝 Notes

This was built for practice purposes to apply core JavaScript concepts (closures, recursion, arrays, randomness) taught in the course — not intended as a polished production app.
