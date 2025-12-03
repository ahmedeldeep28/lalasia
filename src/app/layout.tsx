import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/templates/main-layout";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lalasia - Furniture Store",
    template: "Lalasia | %s",
  },
  description:
    "Discover premium modern home furniture designed for comfort, style, and durability. Shop living room sets, bedroom collections, décor items, and custom-made furniture crafted to elevate every space in your home.",
  keywords: [
    "home furniture",
    "modern furniture",
    "living room furniture",
    "bedroom furniture",
    "home décor",
    "custom furniture",
    "furniture store",
    "interior design",
  ],
  openGraph: {
    title: "Lalasia - Furniture Store",
    description:
      "Upgrade your home with high-quality modern furniture crafted for elegance and functionality. Explore our collections today.",
    url: "https://your-store-domain.com",
    siteName: "Lalasia - Furniture Store",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elegance Home Furniture Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lalasia - Furniture Store",
    description:
      "Discover premium modern home furniture designed for comfort, style, and durability. Shop living room sets",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logos/favicon.ico",
    apple: "/logos/apple-touch-icon.png",
    shortcut: "/logos/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stijndv.com/fonts/Eudoxus-Sans.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <Toaster />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
