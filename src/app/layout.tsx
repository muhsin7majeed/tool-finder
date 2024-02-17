import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tool Finder",
  description: "Cumulated pile of random, yet, interesting tools!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          padding: "1rem 3rem",
        }}
      >
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
