import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans } from "next/font/google";

import { profile } from "@/lib/profile";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

export const metadata: Metadata = {
  ...(publicSiteUrl ? { metadataBase: new URL(publicSiteUrl) } : {}),
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  applicationName: `${profile.name} Portfolio`,
  keywords: [...profile.keywords],
  authors: [{ name: profile.name }],
  creator: profile.name,
  category: "portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  ...(publicSiteUrl
    ? {
        alternates: {
          canonical: "/",
        },
      }
    : {}),
  openGraph: {
    type: "website",
    title: profile.name,
    description: profile.description,
    siteName: `${profile.name} Portfolio`,
    ...(publicSiteUrl ? { url: publicSiteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description: profile.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.description,
  knowsAbout: [
    "Procurement",
    "Commercial Operations",
    "Supplier Management",
    "Technology",
    "Computer Science",
    "Systems",
  ],
  ...(publicSiteUrl ? { url: publicSiteUrl } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${instrumentSans.variable} ${geistMono.variable} min-h-svh bg-background font-sans text-foreground antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
