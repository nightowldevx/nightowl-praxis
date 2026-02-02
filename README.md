# Praxis — Fine Dining Restaurant Template

A premium, production-ready restaurant landing page template built with Next.js 16, TypeScript, and Tailwind CSS v4. Designed for upscale dining establishments that value restraint, elegance, and modern web performance.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Key Features
- Responsive, mobile-first layouts
- Clear visual hierarchy and spacing
- Reusable and scalable UI components
- Performance-focused frontend structure
- Accessible and readable content design

## Use Cases
- Establishing an online presence for small or local restaurants
- Displaying menu highlights and featured dishes
- Providing essential business information such as hours and location

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+ and npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/praxis-restaurant-template.git
cd praxis-restaurant-template

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
praxis_restu/
├── app/
│   ├── components/
│   │   ├── layout/         # Header & Footer components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── section/        # Main page sections
│   │   │   ├── AboutSection.tsx
│   │   │   ├── FeaturedDishes.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── MenuSection.tsx
│   │   │   └── ReservationCTA.tsx
│   │   ├── menu/           # Menu-specific components
│   │   │   ├── MenuCategory.tsx
│   │   │   └── MenuItem.tsx
│   │   └── ui/             # Reusable UI components
│   │       └── RevealOnScroll.tsx
│   ├── globals.css         # Tailwind v4 config + base styles
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Home page composition
│   └── favicon.ico
├── lib/
│   └── data.ts             # Menu data, nav links, featured dishes
├── public/
│   └── images/
│       ├── herobg/         # Hero background images
│       └── menus/          # Menu category images
├── types/
│   ├── index.ts            # TypeScript interfaces
│   └── iconify.d.ts        # Icon type declarations
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

### Menu Data
Update menu items in `lib/data.ts`:

```typescript
export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    title: 'STARTERS',
    image: 'https://...',
    items: [
      { name: 'Dish Name', description: '...', price: 18 }
    ]
  }
];
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS v4** | Utility-first styling with CSS config |
| **@iconify/react** | Icon library (Solar icon set) |
| **next/image** | Optimized image loading |
| **next/font** | Font optimization and loading |

---

## 🌐 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/praxis-restaurant-template)

### Netlify
```bash
npm run build
# Deploy the .next folder
```

### Self-Hosted
```bash
npm run build
npm start
# Runs on port 3000
```

**Looking for custom work?** [Get in touch](mailto:nightowldev.freelance@gmail.com)

---

## 🔗 Links

- **Live Demo:** [Demo](https://nightowl-praxis.vercel.app/)
- **Portfolio:** [Portfolio](https://nightowldevx.vercel.app/)
- **Instagram:** [Instagram](https://www.instagram.com/nightowldevx/)
---

**⭐ If you found this template helpful, consider giving it a star!**
