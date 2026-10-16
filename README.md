# 🎟️ Lottery Ticket Game

A small **React + Vite** project built as a hands-on learning exercise. After going through tutorials and the official docs for React and Vite, I built this Lottery game to put the core concepts into practice: components, props, state with `useState`, and conditional rendering.

> 📚 **Status:** Learning project. Feedback and suggestions are welcome!

---

## 🎮 How It Works

1. A ticket with **3 random digits** (each from 0 to 9) is generated when the app loads.
2. Click **"Buy New Ticket"** to generate a fresh ticket.
3. If all digits on the ticket are the same (e.g. `666`, `777`, `999`), you win and see a *"Congratulations you won !"* message.

---

## ✨ Features

- Random ticket generation
- Reusable, small components
- State management using the `useState` hook
- Win message shown through conditional rendering
- **Configurable for developers**: change the number of digits and the winning rule directly in code (not by the end user)

---

## 🧠 Concepts Practiced

| Concept | Where it's used |
| --- | --- |
| Functional components | `App`, `Lottery`, `Ticket`, `TicketNum` |
| Props | `n`, `WinCondition`, `ticket`, `num` |
| `useState` hook | Storing the current ticket in `Lottery.jsx` |
| Passing functions as props | `WinCondition` passed from `App` to `Lottery` |
| List rendering with `map` and `key` | Rendering digits in `Ticket.jsx` |
| Conditional rendering | Win message in `Lottery.jsx` |
| Component-level CSS | `Lottery.css`, `Ticket.css`, `TicketNum.css` |
| Helper/utility functions | `genTicket` and `sum` in `helper.js` |
| Vite project setup | Dev server, fast refresh, build |

---

## 🛠️ Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (JSX) and CSS

---

## 📁 Project Structure

```
src/
├── App.jsx          # Root component, defines the win condition
├── App.css
├── Lottery.jsx      # Main game logic and state
├── Lottery.css
├── Ticket.jsx       # Displays a full ticket
├── Ticket.css
├── TicketNum.jsx    # Displays a single digit
├── TicketNum.css
├── helper.js        # genTicket() and sum() utilities
├── main.jsx         # App entry point
└── index.css        # Global styles
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <https://github.com/VedantGupta27/LotteryGame>

# Move into the project folder
cd <react-vite-lottery-game>

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

---

## ⚙️ Customizing the Game (Developers)

### 1. Change the number of digits

In `App.jsx`, change the `n` prop:

```jsx
// 3-digit ticket (default)
<Lottery n={3} WinCondition={WinCondition} />

// 6-digit ticket, e.g. 666666 wins
<Lottery n={6} WinCondition={WinCondition} />
```

### 2. Change the winning condition

The win rule is just a function that receives the ticket (an array of digits) and returns `true` or `false`. It is defined in `App.jsx`:

```jsx
// Default: all digits must be the same (666, 777, 999 ...)
let WinCondition = (ticket) => {
  return ticket.every((num) => num === ticket[0]);
}
```

You can swap in any rule you like. For example, using the `sum` helper from `helper.js`:

```jsx
import { sum } from './helper';

// Win if the digits add up to 15
let WinCondition = (ticket) => {
  return sum(ticket) === 15;
}
```

> Note: these changes are meant to be made by the developer in the code. End users only play the game.

---

## 🔮 Future Ideas

- Score or balance tracking
- Win history
- Different winning rules selectable from the UI
- Better styling and animations
- Unit tests for the helper functions

---

## 📝 License

This project is for learning purposes. Feel free to use it as a reference.

---

*Built while learning React + Vite. 🚀*
