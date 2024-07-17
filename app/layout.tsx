import "./globals.css";

import type { Metadata } from "next";
import { DM_Sans as FontSans } from "next/font/google";

import Footer from "@/components/footer";
import Gps from "@/components/gps";
import Nav from "@/components/nav";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFTify - Your own NFT Marketplace.",
  description:
    "The fastest and easiest way to fully unlock the potential of your digital assets. Create and run an exclusive marketplace for your NFT business today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Gps />
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
