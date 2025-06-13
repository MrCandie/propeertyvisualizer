# 🏢 Tower Overview

## Description

**Tower Overview** is a web application that allows users to explore a hierarchical structure of buildings. Users can:

- View a list of towers
- Explore the floors within a selected tower
- Browse apartments on each floor
- View detailed information about a specific apartment

This intuitive interface is useful for real estate overviews, property management, or virtual building navigation.

## 🚀 Live Demo

👉 [https://propeertyvisualizer.vercel.app/](https://propeertyvisualizer.vercel.app/)

## Tech Stack

- ⚛ **React** + **Vite** – Fast and modern frontend development
- 🎨 **TailwindCSS** – Utility-first CSS framework for responsive styling
- 🧭 **React Router DOM** – Client-side routing for smooth navigation

## Features

- Hierarchical navigation from tower to apartment
- Clean and responsive UI with TailwindCSS
- Efficient routing using React Router

## Known Limitations / Tradeoffs

- Data is currently static or mock (unless connected to a backend)
- No user authentication or role-based access
- No global state management (e.g., Redux, Zustand), so shared state is limited to parent-child components
- Basic error handling (e.g., for missing or invalid routes)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/MrCandie/propeertyvisualizer

   ```

2. **Navigate to the project directory**

   ```bash
   cd propeertyvisualizer

   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
