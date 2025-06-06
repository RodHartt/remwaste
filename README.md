# 🟨 REMWASTE - Skip Selection Frontend

This is a modern, animated skip booking frontend built with:

- **Next.js (App Router)**
- **Tailwind CSS**
- **Framer Motion**
- **Dynamic API integration**
- **Componentized design with skip cards, pricing logic, and restrictions**

---

## 🚀 Features

- Fetches live skip data by postcode from external API
- Calculates VAT-inclusive pricing
- Displays size, hire period, restrictions (e.g., "Not Allowed On Road")
- Staggered card animation on scroll using `framer-motion`
- Responsive grid layout with dynamic image assets
- Reusable components: `ContainerBox`, `FadeInSection`, `AlertTriangleIcon`, etc.

---

## 📦 Tech Stack

| Tech          | Purpose                  |
| ------------- | ------------------------ |
| Next.js       | Framework (App Router)   |
| Tailwind CSS  | Styling framework        |
| Framer Motion | Card entrance animations |
| React         | UI rendering & state     |
| Nginx         | Reverse Proxy            |

---

## 🔧 Project Structure

```bash
REMWASTE-WEB/
├── frontend/                # Next.js 14 App Router frontend
│   ├── public/              # Public assets (served statically)
│   │   ├── skips/           # Skip images (.webp, .png)
│   │   ├── icon.ico         # Favicon
│   │   ├── site.webmanifest # PWA manifest
│   │   └── favicons         # Apple/Android icons
│   ├── src/
│   │   ├── app/             # App Router structure
│   │   │   ├── layout.js
│   │   │   ├── globals.css
│   │   │   └── page.js
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Button.jsx
│   │   │   ├── ContainerBox.jsx
│   │   │   └── FadeInSection.jsx
│   │   └── icons/           # Custom SVG icon components
│   │       └── AlertTriangleIcon.jsx
│   ├── Dockerfile           # Production build container definition
│   ├── next.config.mjs      # Next.js configuration
│   ├── tailwind.config.js   # Tailwind setup
│   ├── postcss.config.js    # PostCSS for Tailwind
│   └── ...
├── docker-compose.yml       # Optional: orchestrates multi-service stack
├── README.md                # Project documentation
```
