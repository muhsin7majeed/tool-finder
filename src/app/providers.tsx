"use client";

import { ChakraBaseProvider, extendBaseTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button, Avatar, Card, Drawer } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Avatar,
    Card,
    Drawer,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraBaseProvider theme={theme} resetCSS>
      {children}
    </ChakraBaseProvider>
  );
}
