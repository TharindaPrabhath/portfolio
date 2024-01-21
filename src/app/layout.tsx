import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/header";

import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "600", "800", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tharinda Anurajeewa",
  description: "Full Stack Developer | Entrepreneur | Freelancer",
  generator: "Next.js",
  applicationName: "Developer Portfolio",
  referrer: "origin",
  keywords: [
    "Tharinda",
    "Anurajeewa",
    "developer",
    "portfolio",
    "website",
    "freelancer",
    "full stack",
    "backend",
    "entrepreneur",
    "moratuwa",
    "engineering",
    "mechanical engineering",
    "undergraduate",
  ],
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/apple-touch-icon.png",
    },
  },
  authors: [{ name: "Tharinda Anurajeewa", url: "https://tharinda.me" }],
  creator: "Tharinda Anurajeewa",
  publisher: "Vercel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tharinda.me"),
  openGraph: {
    title: `Tharinda Anurajeewa`,
    description: "Full Stack Developer | Entrepreneur | Freelancer",
    url: "https://tharinda.me",
    siteName: `Tharinda Anurajeewa`,
    images: [
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1704569134/tharinda.me/og-image.png", // Must be an absolute URL
        alt: "Tharinda Anurajeewa, a Full Stack Developer, Entrepreneur and Freelancer",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1704569134/tharinda.me/og-image-2.png", // Must be an absolute URL
        alt: "Tharinda Anurajeewa, a Full Stack Developer, Entrepreneur and Freelancer",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Tharinda's Portfolio`,
    description: "Personal website of Tharinda Anurajeewa",
    siteId: "1402211444603723777",
    creator: "@tharinda__",
    creatorId: "1402211444603723777",
    images: [
      {
        url: "https://res.cloudinary.com/drifly/image/upload/v1704569134/tharinda.me/og-image.png",
        alt: "Tharinda Anurajeewa, a Full Stack Developer, Entrepreneur and Freelancer",
      },
    ], // Must be an absolute URL
  },
  appLinks: {
    web: {
      url: "https://tharinda.me",
      should_fallback: true,
    },
  },
  bookmarks: ["https://tharinda.me"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script src="https://custom-chat-gpt-cyan.vercel.app/chat.js"></Script>
        <Script id="-">
          {`window.onload = function () { ChatWidget.init("asst_VkNK3VIonkW88yXCDyJf5Bxl"); };`}
        </Script>
      </head>
      <body className={`flex flex-col bg-neutral-50 ${poppins.className}`}>
        <Header />
        <main className="flex-1">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
