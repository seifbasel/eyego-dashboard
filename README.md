# Eyego Dashboard

A dashboard built with Next.js, Tailwind CSS, Redux Toolkit, and Chart.js as part of the Eyego frontend internship task.

---

## What's inside

- Login and signup with mocked authentication
- Protected dashboard route
- Data table with search, filter by status, sorting, and pagination
- Export table data as PDF or Excel
- Revenue chart using Chart.js
- Dark mode support
- Fully dockerized

---

## Getting started

Make sure you have Node.js 20+ installed.
```bash
git clone https://github.com/seifbasel/eyego-dashboard
cd eyego-dashboard
npm install
npm run dev
```

Open http://localhost:3000

---

## Login credentials
```
Email: seifbasel950@gmail.com
Password: 1234
```

---

## Run with Docker

Make sure Docker Desktop is running first, then:

```bash
docker compose up --build
```

Open http://localhost:3000

To stop it:
```bash
docker compose down
```

---

## Project structure
```
app/          → pages and layouts
components/   → reusable UI components  
sections/     → navbar and hero section and chart
store/        → Redux store , auth slice and mock data
lib/          → mock auth
types/        → TypeScript types
public/       → static files like SVG illustrations
```
---

```
eyego-dashboard/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx        ← checks if user is logged in, if not sends to login
│   │   └── page.tsx          ← the main dashboard page, shows chart and stat cards
│   ├── data-table/
│   │   ├── layout.tsx        ← same auth check as dashboard
│   │   ├── columns.tsx       ← defines the table columns (status, email, amount)
│   │   ├── data-table.tsx    ← the table itself, handles search, filter, sort, pagination, export
│   │   └── page.tsx          ← just renders the table with the mock data
│   ├── login/
│   │   └── page.tsx          ← login form, dispatches to Redux on submit
│   ├── signup/
│   │   └── page.tsx          ← signup form, creates a mock user
│   ├── globals.css           ← global styles and color variables
│   ├── layout.tsx            ← wraps every page with navbar and providers
│   ├── page.tsx              ← the landing page anyone can see
│   └── providers.tsx         ← sets up Redux and dark mode for the whole app
├── components/
│   └── ui/
│       ├── button.tsx        ← reusable button component
│       ├── input.tsx         ← reusable input component
│       ├── label.tsx         ← reusable label component
│       ├── statCard.tsx      ← the small cards showing revenue, orders etc
│       └── table.tsx         ← base table HTML elements
├── sections/
│   ├── HeroSection.tsx       ← the big landing page content with login/signup buttons
│   ├── Navbar.tsx            ← top bar with logo, dark mode toggle, logout button
│   └── RevenueChart.tsx      ← the bar chart built with Chart.js
├── store/
│   ├── authSlice.ts          ← manages login, logout, and user state in Redux
│   ├── Mockdata.ts           ← fake payment data and chart data
│   └── store.ts              ← creates and exports the Redux store
├── lib/
│   ├── mockAuth.ts           ← fake login and signup functions with fake delay
│   └── utils.ts              ← helper function for combining Tailwind classes
├── types/
│   └── payment.ts            ← TypeScript type for a payment row
├── public/
│   └── design-stats-animate.svg  ← the illustration shown on the login page
├── Dockerfile                ← instructions for building the app in Docker
├── docker-compose.yml        ← runs the Docker container on port 3000
├── .dockerignore             ← tells Docker to ignore node_modules, .next, .git
├── .gitignore                ← tells Git what not to commit
├── next.config.ts            ← Next.js configuration
├── tailwind.config.ts        ← Tailwind configuration
├── tsconfig.json             ← TypeScript configuration
└── package.json              ← lists all dependencies and scripts
```

---

## implementation approach

I started with Next.js App Router and set up Redux Toolkit to manage auth state globally — user gets saved to localStorage so the session persists on refresh, and loadUser reads it back when the page loads.

Used an Aceternity UI signup component and did some customization on it, then duplicated its design for the login page as well.

Used mock auth with a fake delay to simulate a real API since no backend was used for this demo.

Route protection is done by a layout.tsx inside each protected folder that checks for the user when the page loads and redirects to login if not found.

For the data table I used TanStack Table with shadcn components to provide sorting, filtering, pagination and search, with PDF and Excel export using jsPDF and xlsx loaded dynamically only when the user clicks export.

Added a chart to display revenue mock data using raw Chart.js on a canvas ref.

Also added dark mode using next-themes and a navbar with a logout button available on every page, done while keeping the project well structured with clear separation between store, lib, components, sections and types.

Also followed a Git branching strategy simulating a real world workflow.