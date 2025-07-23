import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../app/(root)/layout.css"; // Custom CSS for layout

// Define fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: {
    default: "Abrar Hussain Dar - Backend Developer",
    template: "%s | Abrar Hussain Dar - Full Stack Developer"
  },
  description: "Experienced Backend Developer specializing in Node.js, TypeScript, and scalable web applications. Building high-performance systems with modern technologies including Next.js, React, MongoDB, and PostgreSQL.",
  keywords: [
    "backend developer",
    "full stack developer",
    "Node.js developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "MongoDB expert",
    "PostgreSQL developer",
    "API development",
    "web development",
    "software engineer",
    "Abrar Hussain Dar",
    "Bengaluru developer",
    "Indian developer",
    "MERN stack developer",
    "Python developer",
    "Django developer",
    "FastAPI developer",
    "Azure cloud",
    "scalable applications",
    "database design",
    "REST API",
    "microservices"
  ],
  authors: [{ name: "Abrar Hussain Dar", url: "https://abrarhussaindar.dev" }],
  creator: "Abrar Hussain Dar",
  publisher: "Abrar Hussain Dar",
  category: "Portfolio & Development",
  applicationName: "Abrar Hussain Dar Portfolio",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://abrarhussaindar.dev",
    languages: {
      'en-US': 'https://abrarhussaindar.dev',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abrarhussaindar.dev",
    title: "Abrar Hussain Dar - Backend Developer & Software Engineer",
    description: "Experienced Backend Developer from Bengaluru, India. Specializing in Node.js, TypeScript, React, and building scalable web applications. Available for freelance projects and full-time opportunities.",
    siteName: "Abrar Hussain Dar Portfolio",
    images: [
      {
        url: "https://abrarhussaindar.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abrar Hussain Dar - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@abrarhussaindar",
    creator: "@abrarhussaindar",
    title: "Abrar Hussain Dar - Backend Developer",
    description: "Backend Developer specializing in Node.js, TypeScript, and modern web technologies. Building scalable applications and robust API systems.",
    images: ["https://abrarhussaindar.dev/twitter-card.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7c3aed" },
    { media: "(prefers-color-scheme: dark)", color: "#1e1b4b" }
  ],
  verification: {
    google: "your-google-site-verification-code", // Replace with actual Google Search Console verification code
    // Add other verification codes as needed
  },
  appleWebApp: {
    title: "Abrar Hussain Dar",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  manifest: "https://abrarhussaindar.dev/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#7c3aed" },
    ],
  },
  other: {
    "linkedin:profile": "https://linkedin.com/in/abrarhussain0366",
    "github:profile": "https://github.com/Abrarhussaindar",
    "contact:email": "abrardar988651@gmail.com",
    "contact:phone": "+91-6006045264",
    "location:city": "Bengaluru",
    "location:country": "India",
    "profession": "Backend Developer",
    "experience": "2+ years",
    "availability": "Available for work",
  },
};

// JSON-LD structured data for better SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Abrar Hussain Dar",
  "jobTitle": "Backend Developer",
  "description": "Experienced Backend Developer specializing in Node.js, TypeScript, and scalable web applications",
  "url": "https://abrarhussaindar.dev",
  "email": "abrardar988651@gmail.com",
  "telephone": "+91-6006045264",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressCountry": "India"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Presidency University",
    "location": "Bengaluru, India"
  },
  "worksFor": [
    {
      "@type": "Organization",
      "name": "Navrekh Technologies Pvt. Ltd.",
      "location": "Pune, India"
    }
  ],
  "knowsAbout": [
    "Node.js",
    "TypeScript",
    "JavaScript",
    "React.js",
    "Next.js",
    "Python",
    "Django",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "MERN Stack",
    "Azure Cloud",
    "API Development",
    "Database Design",
    "Backend Architecture"
  ],
  "sameAs": [
    "https://linkedin.com/in/abrarhussain0366",
    "https://github.com/Abrarhussaindar"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "name": "Bachelor of Technology in Computer Science and Engineering",
    "educationalLevel": "Bachelor's Degree",
    "credentialCategory": "degree"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Additional meta tags for better performance */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="format-detection" content="email=yes" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bengaluru" />
        <meta name="geo.position" content="12.9716;77.5946" />
        <meta name="ICBM" content="12.9716, 77.5946" />

        {/* Theme color for different browsers */}
        <meta name="msapplication-TileColor" content="#7c3aed" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="antialiased text-slate-900 bg-slate-50 dark:text-slate-100 dark:bg-slate-900 font-inter">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}