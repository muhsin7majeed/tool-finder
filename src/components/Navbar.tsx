"use client";
import { Link } from "@chakra-ui/next-js";
import { Flex, Button, Box, Heading } from "@chakra-ui/react";
import { signOut } from "next-auth/react";

export default function Navbar() {
  const handleLogout = () => {
    signOut();
  };
  return (
    <>
      <nav>
        <Box>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Link href="/">
              <Heading fontSize="1.5rem">Tool Finder</Heading>
            </Link>

            <Link href="/admin">
              <Button>Admin</Button>
              <Button onClick={handleLogout}>Logout</Button>
            </Link>
          </Flex>
        </Box>
      </nav>
    </>
  );
}
