# Next.js Dashboard Boilerplate

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-latest-black)](https://ui.shadcn.com/)

A modern, fully-featured Next.js boilerplate with TypeScript, Tailwind CSS, and shadcn/ui components. Perfect for building dashboard applications, SaaS products, or any modern web application.

## ✨ Features

- 🚀 **Next.js 15** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🧩 **shadcn/ui** components
- 🌙 **Dark/Light mode** toggle
- 📱 **Responsive design** with mobile support
- ⚙️ **Centralized configuration** system
- 🔒 **Authentication ready** (configurable providers)
- 📊 **Analytics integration** (Google Analytics)
- 🎯 **SEO optimized** with meta tags
- 🔧 **Environment-based configuration**
- 📝 **TypeScript interfaces** for type safety
- 🎨 **Customizable theme** system
- 🚦 **Feature flags** support

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Radix Icons](https://icons.radix-ui.com/) + [Lucide React](https://lucide.dev/)
- **State Management:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts:** [Geist](https://vercel.com/font)

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/BlackJr-Git/next-js-dashboard-boilerplate.git
cd next-js-dashboard-boilerplate
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

```bash
cp env.example .env.local
```

Edit `.env.local` with your configuration:

```env
# Site Information
NEXT_PUBLIC_SITE_NAME="Your App Name"
NEXT_PUBLIC_SITE_TITLE="Your App - Modern Web Application"
NEXT_PUBLIC_SITE_DESCRIPTION="A modern web application built with Next.js, TypeScript, and Tailwind CSS."
NEXT_PUBLIC_SITE_URL="https://yourapp.com"

# API Configuration
NEXT_PUBLIC_API_URL="https://api.yourapp.com"

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL="contact@yourapp.com"

# Social Media (optional)
NEXT_PUBLIC_GITHUB_URL="https://github.com/yourusername/yourapp"

# Analytics (optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable components
│   ├── ui/            # shadcn/ui components
│   └── mode-toggle.tsx # Theme toggle
├── config/            # Configuration
│   └── index.ts       # Centralized config
├── hooks/             # Custom React hooks
└── lib/               # Utility functions
    └── utils.ts       # Helper utilities
```

## ⚙️ Configuration

The boilerplate uses a centralized configuration system located in `src/config/index.ts`. This allows you to:

- 🔧 Configure site information, branding, and contact details
- 🎨 Customize theme colors and fonts
- 🔗 Set up social media links
- 🚦 Enable/disable features with feature flags
- 📊 Configure analytics and SEO settings
- 🔒 Set up authentication providers

### Key Configuration Sections:

1. **Site Information** - Name, title, description, URL
2. **Branding** - Logo paths, favicon, colors
3. **Contact** - Email, phone, address
4. **Social Media** - Links to social platforms
5. **Authentication** - Login paths, providers, session settings
6. **Navigation** - Main, footer, and mobile menus
7. **Theme** - Colors, fonts, styling
8. **API** - Base URLs, endpoints, timeout settings
9. **Features** - Feature flags for enabling/disabling functionality
10. **Analytics** - Google Analytics and tracking configuration
11. **SEO** - Meta tags, Open Graph, Twitter cards

## 🎨 Customization

### Updating Site Information

1. Update environment variables in `.env.local`
2. Modify `src/config/index.ts` for additional customization
3. Replace logo files in `public/images/`
4. Update favicon and other icons in `public/`

### Adding New Pages

1. Create new page in `src/app/`
2. Add navigation links in `src/config/index.ts`
3. Update TypeScript interfaces if needed

### Styling

- Modify `tailwind.config.ts` for theme customization
- Update CSS variables in `src/app/globals.css`
- Use the configuration system for consistent theming

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run registry:build # Build component registry
```

## 📦 Adding Components

This boilerplate uses shadcn/ui. Add new components:

```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

- **Netlify:** Connect GitHub repo and set build command to `npm run build`
- **Railway:** Deploy directly from GitHub
- **Docker:** Use the included Dockerfile (if available)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Low-level UI primitives

## 📞 Support

If you have any questions or need help, please:

- 📧 Email: [contact@yourapp.com](mailto:juniorassosa@gmail.com)
- 🐛 Open an issue on [GitHub](https://github.com/BlackJr-Git/next-js-dashboard-boilerplate/issues)
- 💬 Start a discussion on [GitHub Discussions](https://github.com/BlackJr-Git/next-js-dashboard-boilerplate/discussions)

---

**Happy coding! 🚀**
