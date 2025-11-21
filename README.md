# Varnan - VFilms Homepage

> A modern, responsive storytelling platform built with React and Tailwind CSS

**Live Demo:** [https://vflms-cfi7.vercel.app/](https://vflms-cfi7.vercel.app/)

---

## 📋 Project Overview

Varnan is a sleek and responsive homepage for VFilms, a digital storytelling and content creation company. The project demonstrates expertise in modern web development practices, responsive design, and interactive UI components.

This website showcases VFilms' services across:
- **Films** - Professional video production
- **Brands** - Brand storytelling and visual identity
- **Art** - Creative curation and artistic direction

---

## ✨ Features

### 🎨 Responsive Design
- **Mobile-First Approach**: Optimized for small screens (xs, sm, md)
- **Tablet Layout**: Enhanced experience for medium devices (md, lg)
- **Desktop Experience**: Full-featured layout for larger screens (lg, xl)
- Seamless adaptation across all breakpoints

### 🎭 Interactive Elements
- **Animated Hero Section**: Rotating mandala background with smooth animations
- **Dynamic Navigation**: Fixed navbar with mobile menu toggle
- **Arrow Annotations**: Interactive SVG arrows highlighting three core services:
  - 🎬 Film Makers
  - 🎨 Art Curators
  - 💼 Branding Experts
- **Call-to-Action Buttons**: Prominent portfolio and engagement buttons

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| **Framework** | React 18+ |
| **Styling** | Tailwind CSS |
| **Build Tool** | Vite |
| **CSS Processing** | PostCSS |
| **Deployment** | Vercel |
| **Version Control** | Git/GitHub |

### Dependencies
- **React**: Component-based UI framework
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **PostCSS**: CSS transformation tool for processing Tailwind directives

---

## 📁 Project Structure

```
vfilms-homepage/
├── src/
│   ├── assets/              # Images and visual resources
│   │   ├── background.png
│   │   ├── mandala.png
│   │   ├── people.png
│   │   ├── indiagate.png
│   │   ├── notes.png
│   │   └── vfilms-logo.png
│   ├── Components/          # React components
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Page2.jsx        # People & Services section
│   │   ├── Page3.jsx        # Additional content
│   │   ├── Page4.jsx        # Additional content
│   │   ├── Page5.jsx        # Additional content
│   │   └── PeopleWithArrows.jsx # Interactive service display
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   ├── index.css            # Global styles
│   └── App.jsx.fixed        # Backup configuration
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── README.md                # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rishii123/Vflims-.git
   cd vfilms-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

---

## 💻 Development Workflow

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview

# Format code (if ESLint configured)
npm run lint
```

### Responsive Breakpoints Used

- **xs**: < 640px (Mobile)
- **sm**: 640px (Small Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Large Tablet/Small Desktop)
- **xl**: 1280px (Desktop)

---

**Status**: ✅ Complete and Deployed
