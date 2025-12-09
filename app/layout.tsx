import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Helper/Home/Navbar/ResponsiveNav";
import Footer from "./components/Helper/Home/Footer/Footer";
import ScrollToTop from "./components/Helper/ScrollToTop";
import AnimatedBackground from "./components/Helper/AnimatedBackground";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shakil Portfolio",
  description: "Portfolio Built with Next.js 15",
  other: {
    'darkreader-lock': '', // Tells Dark Reader to skip this site
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
      </head>
      <body 
        className={`${font.className} antialiased bg-[#0d0d1f]`} 
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>
          <AnimatedBackground />
          <ResponsiveNav />
          {children}
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}