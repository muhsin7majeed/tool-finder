"use client";

import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

const { Button, Avatar, Card, Drawer } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Avatar,
    Card,
    Drawer,
  },
});

export function Providers({ children, session }: { children: React.ReactNode; session: any }) {
  return (
    <SessionProvider session={session}>
      <ChakraBaseProvider theme={theme} resetCSS>
        {children}
      </ChakraBaseProvider>
    </SessionProvider>
  );
}
