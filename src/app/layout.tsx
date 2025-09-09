import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Omar Corral - SEO Specialist & Digital Marketing Strategist",
  description: "Expert SEO specialist and digital marketing strategist helping businesses grow through data-driven strategies, advanced analytics, and cutting-edge digital marketing techniques.",
  keywords: ["SEO", "Digital Marketing", "Search Engine Optimization", "Omar Corral", "SEO Manager", "Technical SEO", "Content Strategy"],
  authors: [{ name: "Omar Corral" }],
  creator: "Omar Corral",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omar-corral.com",
    title: "Omar Corral - SEO Specialist & Digital Marketing Strategist",
    description: "Expert SEO specialist and digital marketing strategist helping businesses grow through data-driven strategies.",
    siteName: "Omar Corral Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Corral - SEO Specialist & Digital Marketing Strategist",
    description: "Expert SEO specialist and digital marketing strategist helping businesses grow through data-driven strategies.",
    creator: "@omarrcorral",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
