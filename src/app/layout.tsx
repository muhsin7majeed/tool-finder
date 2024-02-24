import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "./providers";
import { Box } from "@chakra-ui/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tool Finder",
  description: "Cumulated pile of random, yet, interesting tools!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <Box px={["1rem", "2rem", "5rem"]} maxW="1440px" m="auto">
            <header>
              <Navbar />
            </header>

            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
