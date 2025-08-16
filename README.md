# Kenneth Joshua - Software Developer Portfolio

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

## Overview

This is a personal portfolio website built with vanilla TypeScript and modern web technologies. The site features a clean, professional design with interactive elements, project showcases, and a comprehensive skills section.

## Technology Stack

- **Frontend**: Vanilla TypeScript (ES2022+)
- **Styling**: Tailwind CSS v4 
- **Build Tool**: Vite 
- **Font**: JetBrains Mono for consistent typography
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kenBinary/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev 
   npm run tailwind:build-watch
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run tailwind:build
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run preview` - Preview production build
- `npm run tailwind:build` - Build Tailwind CSS (one-time)
- `npm run tailwind:build-watch` - Build Tailwind CSS with file watching