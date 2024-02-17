"use client";

import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { usePathname } from "next/navigation";

interface LinkItemProps {
  name: string;
  path: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", path: "/admin" },
  { name: "Categories", path: "/admin/categories" },
  { name: "Tools", path: "/admin/tools" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  if (pathname === "/admin/auth") {
    return <>{children}</>;
  }

  return (
    <>
      <Flex gap="1rem" direction={{ base: "column", md: "row" }}>
        <Flex p="1rem" direction={{ base: "row", md: "column" }} borderRadius="lg" gap="1rem" bg="gray.50">
          {LinkItems.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.path}
                display="block"
                {...(pathname === link.path
                  ? {
                      bg: "teal",
                      color: "white",
                    }
                  : {})}
                p=".5rem"
                borderRadius="lg"
                _hover={{
                  bg: "teal.500",
                  color: "white",
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </Flex>

        <Box borderRadius="lg" w="100%" p="1rem" bg="gray.50">
          {children}
        </Box>
      </Flex>
    </>
  );
}
