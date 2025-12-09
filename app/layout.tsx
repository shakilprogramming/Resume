import type { Metadata } from "next";
import {inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./components/Helper/Home/Navbar/ResponsiveNav";
import Footer from "./components/Helper/Home/Footer/Footer";


const font =({
   weight:['100','200','300','400','500','600','700','800','900'],
   subsets:["latin"],
})
export const metadata: Metadata = {
  title: "Shakil Profolio",
  description: "Portfolio Buit with Next.js 1s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} $antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav/>
          <Footer/>
        {children}
      </body>
    </html>
  );
}
