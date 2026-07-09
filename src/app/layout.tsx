import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  process.env.URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Elite Precision GPR — Utility Locating & GPR Services",
};

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Elite Precision GPR | Utility Locating & GPR Services",
  description:
    "Accurate underground scanning, concrete imaging, and subsurface investigation for contractors, engineers, environmental firms, and project managers. Prevent costly utility strikes before they happen.",
  keywords: [
    "utility locating",
    "GPR scanning",
    "ground penetrating radar",
    "concrete scanning",
    "subsurface investigation",
    "underground utility detection",
    "CAD mapping",
    "jobsite safety",
  ],
  openGraph: {
    title: "Elite Precision GPR | Utility Locating & GPR Services",
    description:
      "Prevent costly utility strikes before they happen. Professional utility locating and GPR scanning services.",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite Precision GPR | Utility Locating & GPR Services",
    description:
      "Prevent costly utility strikes before they happen. Professional utility locating and GPR scanning services.",
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        <div
          className="blueprint-grid-page pointer-events-none fixed inset-0 z-0"
          aria-hidden
        />
        <div className="relative z-[1] min-h-screen">{children}</div>
        <div className="sample-watermark" aria-hidden />
      </body>
    </html>
  );
}
