# Dev Stack

Dev Stack is a React app that helps developers plan out a project's tech stack before writing a single line of code. Browse frontend, backend, database, language, styling, DevOps, and tooling options side by side, then build your own personal "stack" by picking the ones that fit — like a shopping cart, but for technologies.

## Live Demo & Repository

- Live Site: https://dev-stack-puce.vercel.app
- GitHub Repository: https://github.com/ssheikhs/dev-stack

## Tech Stack

- React.js (JavaScript, ES6+)
- Vite
- Tailwind CSS + DaisyUI
- react-toastify
- Local JSON data (`public/technologies.json`)

## Features

1. **Browse 15 real technologies across 7 categories** — Frontend, Backend, Database, Language, Styling, DevOps, and Tools — each shown as a card with its icon, badge, description, category, difficulty level, and star rating.
2. **Build your own stack** — add any technology to a "Your Stack" panel with one click; the same technology can't be added twice (you'll get a warning toast if you try), and the button on an added card disables itself and shows "✓ Added to Stack".
3. **Full control over your stack** — remove a single technology from the stack, or clear the whole thing at once with "Remove All", with a toast notification confirming every action.

## Getting Started

```bash
npm install
npm run dev
```

## React Concepts Used — Q&A

**1. What is JSX, and why is it used in React?**
JSX is a way of writing HTML-like code directly inside JavaScript. Instead of calling functions to create elements, I can just write `<div>...</div>` inside my component and React understands it. It's used because it makes components way easier to read and write — I can see exactly what the UI will look like right next to the logic that controls it, instead of jumping between separate files.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent, and the component receiving them can't change them — they're read-only from that component's side. State is data a component manages *itself*, and it can change over time (usually because of a user action). In this project, `technologies` and `stack` are state inside `App.jsx` because they change when the user clicks buttons, while `TechCard` just receives a single technology object as a prop and displays it — it never modifies that prop directly.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component keep a value in memory between renders and re-render automatically whenever that value changes. I used it in `App.jsx` for three things: `technologies` (the list loaded from JSON), `stack` (the list of technologies the user has added), and `loading` (whether the data is still being fetched). I also used a small local `useState` inside `Navbar` to track whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run some code after it renders — usually for things that aren't part of the actual UI, like fetching data, setting timers, or talking to something outside React. I needed it because fetching the technologies data is a side effect: it shouldn't happen during rendering itself, it should happen once when the component first mounts. So I used `useEffect` with an empty dependency array (`[]`) to fetch the JSON exactly once when `App` loads, and set `loading` back to `false` once it's done.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of which item is which between re-renders, so it knows what actually changed, got added, or got removed instead of just re-rendering the entire list from scratch. Without a unique key, React can mix up items, especially when the list changes order or items are removed — which happens a lot here, since removing one technology from the stack shouldn't accidentally re-render or mismatch the others. I used each technology's `id` field as the key since it's already unique.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always showing the same thing. I used it in the `YourStack` component: if `stack.length === 0`, it shows the "Your stack is empty" message instead of the list, and if there's at least one item, it renders the actual list of `StackItem` components plus the "Remove All" button. I did something similar for the `loading` state in `App.jsx` — showing a loading spinner while `loading` is `true`, and the real page once it's `false`.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example, `App` passes a single technology object down to `TechCard` as a prop, and `TechCard` just displays it. For a child to send something *back* up, the parent passes a function down as a prop, and the child calls that function (usually from a button's `onClick`). For example, `App` defines `addToStack`, passes it down to `TechCard` as an `onAdd` prop, and when the user clicks "Add to Stack", `TechCard` calls `onAdd(tech)` — which actually runs the state update back in `App`. This is how a child can trigger a change in state that technically lives in its parent.
