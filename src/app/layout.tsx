import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meta Vibronics — Brand, Communication & Growth Studio",
  description: "Two founders. Five disciplines. One studio that treats your brand like it's our own.",
  keywords: ["Brand Systems", "UI/UX Design", "Performance Marketing", "Packaging Design", "Growth Studio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
