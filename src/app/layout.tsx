import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
