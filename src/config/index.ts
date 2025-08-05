/**
 * Application Configuration
 * 
 * This file contains all the configuration settings for the application.
 * Customize these values according to your project needs.
 * 
 * Environment variables should be defined in .env.local for local development
 * and configured in your deployment platform for production.
 */

// Type definitions for better type safety
export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  logo: LogoConfig;
  contact: ContactConfig;
  social: SocialConfig;
  auth: AuthConfig;
  navigation: NavigationConfig;
  theme: ThemeConfig;
  api: ApiConfig;
  features: FeatureFlags;
  analytics: AnalyticsConfig;
  seo: SeoConfig;
}

export interface LogoConfig {
  main: string;
  light: string;
  dark: string;
  favicon: string;
  appleTouchIcon?: string;
}

export interface ContactConfig {
  email: string;
  phone?: string;
  address?: string;
  supportEmail?: string;
}

export interface SocialConfig {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
  youtube?: string;
  x?: string;
  whatsapp?: string;
  telegram?: string;
  discord?: string;
  github?: string;
  threads?: string;
}

export interface AuthConfig {
  loginPath: string;
  signupPath: string;
  forgotPasswordPath: string;
  callbackUrl: string;
  providers: string[];
  sessionTimeout?: number;
}

export interface NavigationConfig {
  main: NavigationItem[];
  footer: NavigationItem[];
  mobile?: NavigationItem[];
}

export interface NavigationItem {
  name: string;
  path: string;
  external?: boolean;
  icon?: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    muted?: string;
    border?: string;
  };
  fonts: {
    heading: string;
    body: string;
    mono?: string;
  };
  borderRadius?: string;
}

export interface ApiConfig {
  baseUrl: string;
  timeout?: number;
  retries?: number;
  endpoints?: Record<string, string>;
}

export interface FeatureFlags {
  [key: string]: boolean;
}

export interface AnalyticsConfig {
  googleAnalyticsId?: string;
  enabledInDevelopment: boolean;
  trackingEvents?: string[];
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  siteUrl: string;
  openGraph: {
    type: string;
    locale: string;
    siteName: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    handle: string;
    site: string;
    cardType: string;
  };
}

/**
 * Main site configuration
 * 
 * TODO: Customize these values for your project:
 * 1. Update basic site information (name, title, description, url)
 * 2. Replace logo paths with your actual logo files
 * 3. Update contact information
 * 4. Configure social media links (remove unused ones)
 * 5. Set up authentication providers and paths
 * 6. Customize navigation menus
 * 7. Adjust theme colors and fonts
 * 8. Configure API endpoints
 * 9. Enable/disable features as needed
 * 10. Set up analytics and SEO settings
 */
export const siteConfig: SiteConfig = {
  // Basic site information
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Your App Name",
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Your App - Description",
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION || "A modern web application built with Next.js, TypeScript, and Tailwind CSS.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourapp.com",

  // Branding and visuals
  logo: {
    main: "/images/logo.svg",
    light: "/images/logo-light.svg",
    dark: "/images/logo-dark.svg",
    favicon: "/favicon.ico",
    appleTouchIcon: "/apple-touch-icon.png",
  },

  // Contact information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@yourapp.com",
    phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
    supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "support@yourapp.com",
  },

  // Social media links (remove unused platforms)
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    x: process.env.NEXT_PUBLIC_X_URL,
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    // Add or remove social platforms as needed
  },

  // Authentication settings
  auth: {
    loginPath: "/auth/login",
    signupPath: "/auth/signup",
    forgotPasswordPath: "/auth/forgot-password",
    callbackUrl: "/dashboard",
    providers: ["credentials", "google", "github"], // Configure based on your auth setup
    sessionTimeout: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  },

  // Navigation menus
  navigation: {
    main: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Features", path: "/features" },
      { name: "Pricing", path: "/pricing" },
      { name: "Contact", path: "/contact" },
    ],
    footer: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "FAQ", path: "/faq" },
      { name: "Support", path: "/support" },
    ],
    mobile: [
      { name: "Dashboard", path: "/dashboard", icon: "dashboard" },
      { name: "Profile", path: "/profile", icon: "user" },
      { name: "Settings", path: "/settings", icon: "settings" },
    ],
  },

  // Theme configuration
  theme: {
    colors: {
      primary: "hsl(var(--primary))",
      secondary: "hsl(var(--secondary))",
      accent: "hsl(var(--accent))",
      background: "hsl(var(--background))",
      text: "hsl(var(--foreground))",
      muted: "hsl(var(--muted))",
      border: "hsl(var(--border))",
    },
    fonts: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
      mono: "var(--font-mono)",
    },
    borderRadius: "0.5rem",
  },

  // API configuration
  api: {
    baseUrl: process.env.NODE_ENV === "production" 
      ? process.env.NEXT_PUBLIC_API_URL || "https://api.yourapp.com"
      : "http://localhost:3000",
    timeout: 10000, // 10 seconds
    retries: 3,
    endpoints: {
      auth: "/api/auth",
      users: "/api/users",
      // Add your API endpoints here
    },
  },

  // Feature flags for enabling/disabling features
  features: {
    authentication: true,
    darkMode: true,
    analytics: true,
    notifications: true,
    // Add your feature flags here
  },

  // Analytics configuration
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    enabledInDevelopment: false,
    trackingEvents: ["page_view", "click", "form_submit"],
  },

  // SEO configuration
  seo: {
    defaultTitle: "Your App Name",
    titleTemplate: "%s | Your App Name",
    defaultDescription: "A modern web application built with Next.js, TypeScript, and Tailwind CSS.",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourapp.com",
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: "Your App Name",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Your App Name",
        },
      ],
    },
    twitter: {
      handle: "@yourapp",
      site: "@yourapp",
      cardType: "summary_large_image",
    },
  },
};

// Environment validation (optional but recommended)
if (process.env.NODE_ENV === "production") {
  const requiredEnvVars = [
    "NEXT_PUBLIC_SITE_URL",
    "NEXT_PUBLIC_API_URL",
  ];

  const missingEnvVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  );

  if (missingEnvVars.length > 0) {
    console.warn(
      `Missing required environment variables: ${missingEnvVars.join(", ")}`
    );
  }
}

// Export individual configurations for easier imports
export const { 
  name, 
  title, 
  description, 
  url, 
  logo, 
  contact, 
  social, 
  auth, 
  navigation, 
  theme, 
  api, 
  features, 
  analytics, 
  seo 
} = siteConfig;

// Helper functions for common config operations
export const getApiUrl = (endpoint: string): string => {
  const baseUrl = api.baseUrl.endsWith('/') ? api.baseUrl.slice(0, -1) : api.baseUrl;
  const path = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${baseUrl}${path}`;
};

export const isFeatureEnabled = (feature: string): boolean => {
  return features[feature] === true;
};

export const getNavigationByType = (type: 'main' | 'footer' | 'mobile'): NavigationItem[] => {
  return navigation[type] || [];
};

export const getSocialLinks = (): Array<{ platform: string; url: string }> => {
  return Object.entries(social)
    .filter(([, url]) => url)
    .map(([platform, url]) => ({ platform, url: url! }));
};

export default siteConfig;