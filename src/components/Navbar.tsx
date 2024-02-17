"use client";
import { Link } from "@chakra-ui/next-js";
import { Flex, Button, Box, Heading } from "@chakra-ui/react";

export default function Navbar() {
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
            </Link>
          </Flex>
        </Box>
      </nav>
    </>
  );
}
