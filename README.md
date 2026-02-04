# MERN Portfolio / Web App

A modern **MERN Stack** web application built with **React, Redux, Node.js, Express, and MongoDB**.  
This app showcases a personal portfolio with a feedback system, social links, and interactive UI with dark/light mode and scroll animations.

---


---

## Project Overview

This project is a **portfolio and personal web app** that allows users to:

- Explore a developer's profile, projects, and skills.
- View social links dynamically fetched from the backend.
- Download a resume.
- Send feedback through a modal popup form with toast notifications.
- Experience smooth scroll-based animations and a responsive design.
- Toggle between dark and light modes.

---

## Features

### Frontend

- React + TypeScript
- Tailwind CSS for styling
- Dark / Light mode toggle
- AOS animations for scroll effects
- Feedback form modal
- Dynamic social media links from backend
- Resume download button
- Responsive UI for all devices
- Toast notifications for user actions

### Backend

- Node.js + Express API
- MongoDB database with Mongoose
- APIs for:
  - Fetching profile data
  - Submitting feedback
- Environment-based configuration for secure credentials

### State Management

- Redux Toolkit for global state
- Async actions for API requests
- Redux slices for profile and feedback management

### Other Libraries

- `react-toastify` for notifications
- `motion/react` for animations
- `react-icons` for icons
- `aos` for scroll animations

---

## Tech Stack

| Layer        | Technology |
| ------------ | ---------- |
| Frontend     | React, TypeScript, Tailwind CSS, Redux Toolkit, React Router |
| Backend      | Node.js, Express, MongoDB, Mongoose |
| Animations   | AOS, motion/react |
| Notifications| react-toastify |
| Icons        | react-icons, lucide-react |

---

## Folder Structure

```text
project-root/
│
├─ frontend/             # React client
│  ├─ public/
│  ├─ src/
│  │  ├─ assets/        # Images, icons, resume PDF
│  │  ├─ components/    # Reusable components (HeroSection, FeedbackForm)
│  │  ├─ pages/         # Home, About, Admin pages
│  │  ├─ routes/        # PublicRoutes, AdminRoutes
│  │  ├─ app/           # Redux store
│  │  ├─ features/      # Redux slices (profile, feedback)
│  │  └─ App.tsx        # Main app component
│
├─ backend/              # Node.js API
│  ├─ controllers/       # Controller functions
│  ├─ models/            # Mongoose schemas
│  ├─ routes/            # API routes
│  ├─ index.ts           # Entry point
│  └─ utils/             # Helper functions
│
├─ .env                  # Environment variables
├─ package.json
└─ README.md
